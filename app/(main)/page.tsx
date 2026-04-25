import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ValuesSection } from "@/components/values-section"
import { PodcastCarousel } from "@/components/podcast-carousel"
import { WhereToWatchSection } from "@/components/where-to-watch-section"
import { InterviewRequestSection } from "@/components/interview-request-section"
import { StatsMiniSection } from "@/components/stats-mini-section"
import type { Metadata } from "next"
import { client } from "@/sanity/lib/client"
import { getLatestPodcastsQuery } from "@/sanity/lib/queries"

export const metadata: Metadata = {
  title: "Inicio",
  description:
    "Descubre historias inspiradoras de vocaciones reales. Entrevistas profundas con personas que hacen lo que aman y construyen el mundo con su trabajo.",
  openGraph: {
    title: "Voca Podcast - Historias que inspiran",
    description:
      "Descubre historias inspiradoras de vocaciones reales. Entrevistas profundas con personas que hacen lo que aman.",
  },
}

export default async function HomePage() {
  let latestInterviews = []
  try {
    latestInterviews = await client.fetch(getLatestPodcastsQuery, { limit: 4 })
  } catch (e) {
    console.error("Error fetching latest podcasts:", e)
  }

  return (
    <main className="min-h-screen">
      <HeroSection />
      <StatsMiniSection />
      <AboutSection />
      <ValuesSection />
      <PodcastCarousel interviews={latestInterviews} />
      <WhereToWatchSection />
      <InterviewRequestSection />
    </main>
  )
}
