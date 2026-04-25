import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Calendar, Clock, ChevronLeft } from 'lucide-react'
import { PortableText } from '@portabletext/react'
import { client } from '@/sanity/lib/client'
import { getPostBySlugQuery, getAllPostsQuery } from '@/sanity/lib/queries'
import { urlForImage } from '@/sanity/lib/image'

// Revalidate options
export const revalidate = 3600

type Props = {
  params: Promise<{ slug: string }>
}

// Generate Dynamic SEO Metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await client.fetch(getPostBySlugQuery, { slug })

  if (!post) {
    return {
      title: 'Artículo no encontrado | Voca Podcast',
    }
  }

  const imageUrl = post.mainImage ? urlForImage(post.mainImage).url() : '/favicon.png'

  return {
    title: `${post.title} | Blog Voca Podcast`,
    description: post.excerpt || `Lee sobre ${post.title} en el blog de Voca Podcast.`,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: ['Voca Podcast'],
      images: [{ url: imageUrl }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [imageUrl],
    }
  }
}

// Generate static params for all posts
export async function generateStaticParams() {
  try {
    const posts = await client.fetch(getAllPostsQuery)
    return posts.map((post: any) => ({
      slug: post.slug.current,
    }))
  } catch (e) {
    return []
  }
}

// Custom components for Portable Text
const components = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) return null
      return (
        <div className="relative w-full aspect-video my-8 rounded-xl overflow-hidden">
          <Image
            src={urlForImage(value).url()}
            alt={value.alt || 'Imagen del artículo'}
            fill
            className="object-cover"
          />
        </div>
      )
    },
  },
  block: {
    h1: ({ children }: any) => <h1 className="text-3xl md:text-4xl font-montserrat font-bold mt-12 mb-6 text-voca-blue dark:text-voca-cream">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-2xl md:text-3xl font-montserrat font-bold mt-10 mb-4 text-voca-blue dark:text-voca-cream">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-xl md:text-2xl font-montserrat font-bold mt-8 mb-4 text-voca-blue dark:text-voca-cream">{children}</h3>,
    normal: ({ children }: any) => <p className="text-lg leading-relaxed text-voca-blue/80 dark:text-voca-cream/80 mb-6">{children}</p>,
    blockquote: ({ children }: any) => <blockquote className="border-l-4 border-voca-blue dark:border-voca-cream pl-6 italic text-xl text-voca-blue/70 dark:text-voca-cream/70 my-8">{children}</blockquote>,
  },
  list: {
    bullet: ({ children }: any) => <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-voca-blue/80 dark:text-voca-cream/80">{children}</ul>,
    number: ({ children }: any) => <ol className="list-decimal pl-6 mb-6 space-y-2 text-lg text-voca-blue/80 dark:text-voca-cream/80">{children}</ol>,
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
      return (
        <a href={value.href} rel={rel} className="text-voca-blue dark:text-white underline underline-offset-4 decoration-voca-blue/30 hover:decoration-voca-blue transition-colors">
          {children}
        </a>
      )
    },
  },
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = await client.fetch(getPostBySlugQuery, { slug })

  if (!post) {
    notFound()
  }

  const formatDate = (dateStr: string) => {
    if (!dateStr) return ''
    return new Date(dateStr).toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }

  // Get related posts either from the specific field, or fallback to latest posts of the same category
  let related = post.relatedPosts || []
  if (related.length === 0) {
    try {
      const allPosts = await client.fetch(getAllPostsQuery)
      related = allPosts
        .filter((p: any) => p._id !== post._id && p.category === post.category)
        .slice(0, 2)
      
      // If still no related, just get latest 2
      if (related.length === 0) {
        related = allPosts.filter((p: any) => p._id !== post._id).slice(0, 2)
      }
    } catch (e) {
      related = []
    }
  }

  return (
    <main className="min-h-screen bg-voca-light-gray dark:bg-voca-blue">
      <article>
        {/* Header Hero */}
        <header className="bg-voca-light-gray dark:bg-voca-darker-blue pt-32 pb-16">
          <div className="container max-w-4xl">
            <Link 
              href="/blog" 
              className="inline-flex items-center text-voca-blue/60 dark:text-voca-cream/60 hover:text-voca-blue dark:hover:text-voca-cream transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
              Volver al blog
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-voca-blue dark:text-voca-cream leading-tight mb-8">
              {post.title}
            </h1>
            
            {post.excerpt && (
              <p className="text-xl md:text-2xl text-voca-blue/70 dark:text-voca-cream/70 leading-relaxed font-light">
                {post.excerpt}
              </p>
            )}
          </div>
        </header>

        {/* Main Image */}
        {post.mainImage && (
          <div className="container max-w-4xl -mt-10 mb-16">
            <div className="relative aspect-video md:aspect-[3/1] w-full rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={urlForImage(post.mainImage).url()}
                alt={post.mainImage.alt || post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        )}

        {/* Article Body */}
        <div className="container max-w-3xl">
          <div className={post.mainImage ? "" : "pt-16"}>
            {post.body ? (
              <PortableText value={post.body} components={components} />
            ) : (
              <div className="text-center py-10 text-voca-blue/50">El contenido de este artículo no está disponible.</div>
            )}
          </div>
          
        </div>
      </article>

      {/* Related Articles */}
      {related.length > 0 && (
        <section className="bg-voca-light-gray dark:bg-voca-darker-blue py-20 mt-10">
          <div className="container max-w-5xl">
            <h2 className="text-3xl font-montserrat font-bold text-voca-blue dark:text-voca-cream mb-10 text-center">
              Artículos Recomendados
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {related.map((rel: any) => (
                <Link 
                  href={`/blog/${rel.slug?.current || rel.slug}`} 
                  key={rel._id}
                  className="group bg-voca-light-gray dark:bg-voca-darker-blue rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-voca-blue/10 dark:border-white/5 flex flex-col h-full"
                >
                  <div className="relative aspect-video overflow-hidden">
                    {rel.mainImage ? (
                      <Image 
                        src={urlForImage(rel.mainImage).url()} 
                        alt={rel.mainImage.alt || rel.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-voca-gray/30 flex items-center justify-center">
                        <span className="text-voca-blue/30 font-montserrat font-bold">VOCA</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6 md:p-8 flex flex-col flex-grow">
                    <div className="flex items-center space-x-4 text-xs text-voca-blue/60 dark:text-voca-cream/60 mb-3">
                      <span>{rel.category || 'Artículo'}</span>
                      <span className="flex items-center">
                        <Clock className="w-3.5 h-3.5 mr-1.5" />
                        {rel.readTime || 5} min
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-montserrat font-bold text-voca-blue dark:text-voca-cream mb-3 group-hover:text-opacity-80 transition-colors">
                      {rel.title}
                    </h3>
                    
                    <div className="mt-auto pt-4 flex items-center text-voca-blue dark:text-white font-medium text-sm">
                      Leer artículo <ChevronLeft className="w-4 h-4 ml-1 rotate-180 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  )
}
