import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, ChevronRight } from 'lucide-react'
import { client } from '@/sanity/lib/client'
import { getFeaturedPostsQuery, getAllPostsQuery } from '@/sanity/lib/queries'
import { urlForImage } from '@/sanity/lib/image'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Lee nuestras últimas reflexiones, noticias y artículos sobre vocación y desarrollo personal.',
  openGraph: {
    title: 'Blog | Voca Podcast',
    description: 'Lee nuestras últimas reflexiones, noticias y artículos sobre vocación y desarrollo personal.',
  }
}

// Para forzar la actualización (revalidation) puedes usar revalidate de Next.js
export const revalidate = 3600 // revalidate at most every hour

export default async function BlogPage() {
  // Fetch data from Sanity
  let featuredPosts = []
  let allPosts = []
  
  try {
    featuredPosts = await client.fetch(getFeaturedPostsQuery)
    allPosts = await client.fetch(getAllPostsQuery)
  } catch (e) {
    // ignore
  }
  
  // Filtrar posts que ya están destacados
  const featuredIds = featuredPosts.map((p: any) => p._id)
  const regularPosts = allPosts.filter((p: any) => !featuredIds.includes(p._id))

  const formatDate = (dateStr: string) => {
    if (!dateStr) return ''
    return new Date(dateStr).toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    })
  }

  return (
    <main className="min-h-screen bg-voca-light-gray dark:bg-voca-dark-gray pt-24 pb-20">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-voca-blue dark:text-voca-cream tracking-tight">
            Nuestro Blog
          </h1>
          <p className="text-lg md:text-xl text-voca-blue/70 dark:text-voca-cream/70 max-w-2xl mx-auto">
            Reflexiones, aprendizajes y noticias sobre el mundo de las vocaciones.
          </p>
        </div>

        {/* Featured Posts (Top 2) */}
        {featuredPosts.length > 0 && (
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {featuredPosts.map((post: any) => (
              <Link 
                href={`/blog/${post.slug.current}`} 
                key={post._id}
                className="group relative rounded-xl overflow-hidden shadow-lg aspect-[2.5/1] flex items-end"
              >
                {post.mainImage ? (
                  <Image 
                    src={urlForImage(post.mainImage).url()} 
                    alt={post.mainImage.alt || post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 bg-voca-blue/20 dark:bg-voca-cream/10" />
                )}
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-voca-darker-blue/90 via-voca-darker-blue/40 to-transparent" />
                
                <div className="relative z-10 p-6 md:p-8 space-y-3 w-full">
                  <div className="flex items-center space-x-3 text-voca-cream/90 text-sm font-medium">
                    <span className="bg-voca-blue/80 backdrop-blur px-3 py-1 rounded-full text-xs">
                      {post.category || 'Artículo'}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime} min
                    </span>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-voca-cream group-hover:text-voca-light-gray transition-colors">
                    {post.title}
                  </h2>
                  
                  {post.excerpt && (
                    <p className="text-voca-cream/80 line-clamp-2">
                      {post.excerpt}
                    </p>
                  )}
                  
                  <div className="flex items-center text-voca-cream text-sm font-medium pt-2 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                    Leer más <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Regular Posts Grid (3x3 layout) */}
        {regularPosts.length > 0 ? (
          <div>
            <h3 className="text-2xl font-montserrat font-bold text-voca-blue dark:text-voca-cream mb-8">
              Últimos Artículos
            </h3>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Para simular la paginación, aquí mostramos solo los primeros 9 */}
              {regularPosts.slice(0, 9).map((post: any) => (
                <Link 
                  href={`/blog/${post.slug.current}`} 
                  key={post._id}
                  className="group voca-card flex flex-col h-full"
                >
                  <div className="relative aspect-[2.2/1] overflow-hidden">
                    {post.mainImage ? (
                      <Image 
                        src={urlForImage(post.mainImage).url()} 
                        alt={post.mainImage.alt || post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-voca-gray/30 flex items-center justify-center">
                        <span className="text-voca-blue/30 font-montserrat font-bold">VOCA</span>
                      </div>
                    )}
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 dark:bg-voca-dark-gray/90 backdrop-blur text-voca-blue dark:text-voca-cream px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
                        {post.category || 'Artículo'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center space-x-4 text-xs text-voca-blue/60 dark:text-voca-cream/60 mb-3">
                      <span className="flex items-center">
                        <Calendar className="w-3.5 h-3.5 mr-1.5" />
                        {formatDate(post.publishedAt)}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-3.5 h-3.5 mr-1.5" />
                        {post.readTime} min
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-montserrat font-bold text-voca-blue dark:text-voca-cream mb-3 group-hover:text-opacity-80 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    {post.excerpt && (
                      <p className="text-voca-blue/70 dark:text-voca-cream/70 text-sm line-clamp-3 mb-6 flex-grow">
                        {post.excerpt}
                      </p>
                    )}
                    
                    <div className="mt-auto flex items-center text-voca-blue dark:text-white font-medium text-sm group-hover:underline underline-offset-4">
                      Leer artículo <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            {/* Si hay más de 9, idealmente aquí iría un componente de paginación real */}
            {regularPosts.length > 9 && (
              <div className="mt-12 flex justify-center">
                <button className="voca-button px-6 py-3 border-2 border-voca-blue dark:border-voca-cream text-voca-blue dark:text-voca-cream font-medium hover:bg-voca-blue hover:text-white dark:hover:bg-voca-cream dark:hover:text-voca-blue transition-colors">
                  Cargar más artículos
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-20 text-voca-blue/50 dark:text-voca-cream/50">
            <p>Aún no hay artículos disponibles. ¡Vuelve pronto!</p>
          </div>
        )}
      </div>
    </main>
  )
}
