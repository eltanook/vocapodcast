import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ValuesSection } from "@/components/values-section"
import { PodcastCarousel } from "@/components/podcast-carousel"
import { WhereToWatchSection } from "@/components/where-to-watch-section"
import { InterviewRequestSection } from "@/components/interview-request-section"
import { StatsMiniSection } from "@/components/stats-mini-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Inicio - Detrás de cada vocación, hay una historia",
  description:
    "Descubre historias inspiradoras de vocaciones reales. Entrevistas profundas con personas que hacen lo que aman y construyen el mundo con su trabajo. Voca Podcast, el espacio donde las vocaciones cobran vida.",
  keywords: [
    "voca podcast inicio",
    "podcast vocación argentina",
    "historias vocación",
    "entrevistas inspiradoras",
    "vocación trabajo",
    "podcast argentino",
    "máximo sarmiento podcast",
  ],
  openGraph: {
    title: "Voca Podcast - Detrás de cada vocación, hay una historia",
    description:
      "Descubre historias inspiradoras de vocaciones reales. Entrevistas profundas con personas que hacen lo que aman y construyen el mundo con su trabajo.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Voca Podcast - Inicio",
      },
    ],
  },
  twitter: {
    title: "Voca Podcast - Detrás de cada vocación, hay una historia",
    description:
      "Descubre historias inspiradoras de vocaciones reales. Entrevistas profundas con personas que hacen lo que aman.",
  },
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <StatsMiniSection />
      <AboutSection />
      <ValuesSection />
      <PodcastCarousel />
      <WhereToWatchSection />
      <InterviewRequestSection />
    </main>
  )
}
