// sanity/lib/types.ts

export interface Interview {
  _id: string
  id: number
  title: string
  description: string
  duration: string
  date: string
  category: string
  rubro: string
  nombre: string
  thumbnail: any
  slug: string
  youtubeId: string
  youtubeUrl: string
  spotifyUrl?: string
}

export interface Post {
  _id: string
  title: string
  slug: { current: string }
  mainImage: any
  category: string
  publishedAt: string
  readTime: number
  excerpt: string
  featured?: boolean
  body?: any[]
}
