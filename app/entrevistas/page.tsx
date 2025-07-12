"use client"

import { useState } from "react"
import { InterviewsGrid } from "@/components/interviews-grid"
import { InterviewsFilters } from "@/components/interviews-filters"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Entrevistas - Colección completa de vocaciones",
  description:
    "Explora nuestra colección completa de entrevistas sobre vocaciones reales. Historias inspiradoras de profesionales de diferentes áreas que comparten sus experiencias y aprendizajes.",
  keywords: [
    "entrevistas vocación",
    "podcast entrevistas",
    "historias profesionales",
    "vocaciones argentina",
    "entrevistas inspiradoras",
    "profesiones podcast",
    "oficios argentinos",
    "carreras profesionales",
  ],
  openGraph: {
    title: "Entrevistas - Voca Podcast",
    description:
      "Explora nuestra colección completa de entrevistas sobre vocaciones reales. Historias inspiradoras de profesionales de diferentes áreas.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Entrevistas - Voca Podcast",
      },
    ],
  },
  twitter: {
    title: "Entrevistas - Voca Podcast",
    description:
      "Explora nuestra colección completa de entrevistas sobre vocaciones reales. Historias inspiradoras de profesionales.",
  },
}

export default function EntrevistasPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("date")

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
            url: "https://vocapodcast.com/entrevistas",
            mainEntity: {
              "@type": "ItemList",
              name: "Entrevistas de Voca Podcast",
              description: "Colección de entrevistas sobre vocaciones y profesiones",
            },
          }),
        }}
      />
      <div className="min-h-screen bg-voca-light-gray dark:bg-voca-blue">
        <div className="container py-8">
          <div className="space-y-6">
            <div className="text-center space-y-4">
              <h1 className="text-3xl md:text-4xl font-montserrat font-bold text-voca-blue dark:text-voca-cream">
                Todas las entrevistas
              </h1>
              <p className="text-lg text-voca-blue/70 dark:text-voca-cream/70 max-w-2xl mx-auto">
                Explora nuestra colección completa de historias y vocaciones
              </p>
            </div>

            <div className="grid lg:grid-cols-4 gap-8">
              <div className="lg:col-span-1">
                <InterviewsFilters
                  selectedCategories={selectedCategories}
                  onCategoriesChange={setSelectedCategories}
                  searchTerm={searchTerm}
                  onSearchChange={setSearchTerm}
                  sortBy={sortBy}
                  onSortChange={setSortBy}
                />
              </div>
              <div className="lg:col-span-3">
                <InterviewsGrid selectedCategories={selectedCategories} searchTerm={searchTerm} sortBy={sortBy} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
