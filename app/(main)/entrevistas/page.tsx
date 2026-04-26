import { EntrevistasClientPage } from "./client-page"
import { client } from "@/sanity/lib/client"
import { getAllPodcastsQuery } from "@/sanity/lib/queries"

export const metadata = {
  title: "Entrevistas | Voca Podcast",
  description: "Explora nuestra colección completa de entrevistas sobre vocaciones reales. Historias inspiradoras de profesionales de diferentes áreas.",
}

export const revalidate = 3600

export default async function EntrevistasPage() {
  let interviews = []
  try {
    interviews = await client.fetch(getAllPodcastsQuery)
  } catch (e) {
    console.error("Error fetching all podcasts:", e)
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Entrevistas - Voca Podcast",
            description:
              "Explora nuestra colección completa de entrevistas sobre vocaciones reales. Historias inspiradoras de profesionales de diferentes áreas.",
            url: "https://vocapodcast.online/entrevistas",
            mainEntity: {
              "@type": "ItemList",
              name: "Entrevistas de Voca Podcast",
              description: "Colección de entrevistas sobre vocaciones y profesiones",
            },
          }),
        }}
      />
      <EntrevistasClientPage initialInterviews={interviews} />
    </>
  )
}
