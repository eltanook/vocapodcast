import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, ChevronRight } from 'lucide-react'
import { client } from '@/sanity/lib/client'
import { getFeaturedPostsQuery, getAllPostsQuery } from '@/sanity/lib/queries'
import { urlForImage } from '@/sanity/lib/image'
import { BlogFilters } from '@/components/blog-filters'
import { BlogPagination } from '@/components/blog-pagination'
import { ScrollReveal, ScrollRevealGroup } from '@/components/scroll-reveal'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Lee nuestras últimas reflexiones, noticias y artículos sobre vocación y desarrollo personal.',
  openGraph: {
    title: 'Blog | Voca Podcast',
    description: 'Lee nuestras últimas reflexiones, noticias y artículos sobre vocación y desarrollo personal.',
  }
}

export const revalidate = 3600

const ITEMS_PER_PAGE = 9

interface BlogPageProps {
  searchParams: Promise<{
    page?: string
    category?: string
  }>
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const { page, category } = await searchParams
  const currentPage = parseInt(page || '1')
  const currentCategory = category || null

  // Fetch data from Sanity
  let featuredPosts = []
  let allPosts = []
  
  try {
    featuredPosts = await client.fetch(getFeaturedPostsQuery)
    allPosts = await client.fetch(getAllPostsQuery)
  } catch (e) {
    console.error("Error fetching posts:", e)
  }
  
  // Filtrado por categoría si existe
  let filteredPosts = allPosts
  if (currentCategory && currentCategory !== 'all') {
    filteredPosts = allPosts.filter((p: any) => p.category === currentCategory)
  }

  // Si no hay categoría, separamos los destacados para la parte superior
  // Si hay categoría, mostramos todo en la grilla regular
  const showFeaturedSection = !currentCategory || currentCategory === 'all'
  const featuredIds = featuredPosts.map((p: any) => p._id)
  
  const displayPosts = showFeaturedSection 
    ? filteredPosts.filter((p: any) => !featuredIds.includes(p._id))
    : filteredPosts

  // Paginación
  const totalPosts = displayPosts.length
  const totalPages = Math.ceil(totalPosts / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const paginatedPosts = displayPosts.slice(startIndex, startIndex + ITEMS_PER_PAGE)

  const formatDate = (dateStr: string) => {
    if (!dateStr) return ''
    return new Date(dateStr).toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    })
  }

  return (
    <main className="min-h-screen bg-voca-light-gray dark:bg-voca-blue pt-24 pb-20 overflow-hidden">
      <div className="container">
        <ScrollReveal direction="up">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-voca-blue dark:text-voca-cream tracking-tight">
              Nuestro Blog
            </h1>
            <p className="text-lg md:text-xl text-voca-blue/70 dark:text-voca-cream/70 max-w-2xl mx-auto">
              Reflexiones, aprendizajes y noticias sobre el mundo de las vocaciones.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.1}>
          <BlogFilters />
        </ScrollReveal>

        {/* Featured Posts (Only on first page and when no category or "all" is selected) */}
        {showFeaturedSection && currentPage === 1 && featuredPosts.length > 0 && (
          <ScrollRevealGroup className="grid md:grid-cols-2 gap-8 mb-16" stagger={0.2}>
            {featuredPosts.map((post: any) => (
              <ScrollReveal key={post._id} direction="up">
                <Link 
                  href={`/blog/${post.slug.current}`} 
                  className="group relative rounded-xl overflow-hidden shadow-lg aspect-video md:aspect-[2.5/1] flex items-end"
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
              </ScrollReveal>
            ))}
          </ScrollRevealGroup>
        )}

        {/* Regular Posts Grid (3x3 layout) */}
        {paginatedPosts.length > 0 ? (
          <div>
            <ScrollReveal direction="up">
              <h3 className="text-2xl font-montserrat font-bold text-voca-blue dark:text-voca-cream mb-8">
                {currentCategory && currentCategory !== 'all' ? `Artículos de ${currentCategory}` : 'Últimos Artículos'}
              </h3>
            </ScrollReveal>
            
            <ScrollRevealGroup 
              key={`${currentCategory}-${currentPage}`} // Reiniciar animación al cambiar filtros o página
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8" 
              stagger={0.1}
            >
              {paginatedPosts.map((post: any) => (
                <ScrollReveal key={post._id} direction="up" distance={20}>
                  <Link 
                    href={`/blog/${post.slug.current}`} 
                    className="group voca-card flex flex-col h-full"
                  >
                    <div className="relative aspect-video md:aspect-[2.2/1] overflow-hidden rounded-t-xl">
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
                </ScrollReveal>
              ))}
            </ScrollRevealGroup>
            
            <BlogPagination 
              currentPage={currentPage} 
              totalPages={totalPages} 
            />
          </div>
        ) : (
          <ScrollReveal direction="up">
            <div className="text-center py-20 text-voca-blue/50 dark:text-voca-cream/50">
              <p>Aún no hay artículos disponibles en esta categoría. ¡Vuelve pronto!</p>
            </div>
          </ScrollReveal>
        )}
      </div>
    </main>
  )
}
