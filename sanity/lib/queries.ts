import { groq } from 'next-sanity'

// Podcasts
export const getAllPodcastsQuery = groq`
  *[_type == "podcast"] | order(date desc) {
    ...,
    "slug": slug.current
  }
`

export const getPodcastBySlugQuery = groq`
  *[_type == "podcast" && slug.current == $slug][0] {
    ...,
    "slug": slug.current
  }
`

export const getLatestPodcastsQuery = groq`
  *[_type == "podcast"] | order(date desc)[0...$limit] {
    ...,
    "slug": slug.current
  }
`

// Blog Posts
export const getAllPostsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    mainImage,
    category,
    publishedAt,
    readTime,
    excerpt,
    featured
  }
`

export const getFeaturedPostsQuery = groq`
  *[_type == "post" && featured == true] | order(publishedAt desc)[0...2] {
    _id,
    title,
    slug,
    mainImage,
    category,
    publishedAt,
    readTime,
    excerpt
  }
`

export const getPostBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    ...,
    relatedPosts[]->{
      _id,
      title,
      slug,
      mainImage,
      category,
      publishedAt,
      readTime,
      excerpt
    }
  }
`
