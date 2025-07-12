"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Calendar, Play, ExternalLink, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getInterviewBySlug } from "@/lib/interviews-data"
import type { Metadata } from "next"

// Función para generar metadatos dinámicos
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const interview = getInterviewBySlug(params.slug)

  if (!interview) {
    return {
      title: "Entrevista no encontrada",
      description: "La entrevista que buscas no existe.",
    }
  }

  return {
    title: `${interview.title} | Voca Podcast`,
    description: interview.description,
    keywords: [
      interview.nombre,
      interview.rubro,
      interview.category,
      "entrevista vocación",
      "podcast argentino",
      "voca podcast",
      "vocación",
      "profesión",
    ],
    openGraph: {
      title: `${interview.title} | Voca Podcast`,
      description: interview.description,
      type: "video.episode",
      images: [
        {
          url: interview.thumbnail,
          width: 1200,
          height: 630,
          alt: interview.title,
        },
      ],
    },
    twitter: {
      title: `${interview.title} | Voca Podcast`,
      description: interview.description,
      images: [interview.thumbnail],
    },
    other: {
      "video:duration": interview.duration,
      "video:release_date": interview.date,
    },
  }
}

export default function InterviewDetailPage({ params }: { params: { slug: string } }) {
  const interview = getInterviewBySlug(params.slug)

  if (!interview) {
    notFound()
  }

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString("es-ES", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            name: interview.title,
            description: interview.description,
            thumbnailUrl: interview.thumbnail,
            uploadDate: interview.date,
            duration: `PT${interview.duration.replace(":", "M")}S`,
            embedUrl: `https://www.youtube.com/embed/${interview.youtubeId}`,
            publisher: {
              "@type": "Organization",
              name: "Voca Podcast",
              logo: {
                "@type": "ImageObject",
                url: "https://vocapodcast.com/logo.png",
              },
            },
          }),
        }}
      />
      <div className="min-h-screen bg-voca-light-gray dark:bg-voca-blue">
        <div className="container py-8">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Back button */}
            <Link href="/entrevistas">
              <Button variant="ghost" className="text-voca-blue dark:text-voca-cream hover:text-voca-gray">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver a entrevistas
              </Button>
            </Link>

            {/* Video Header */}
            <div className="space-y-6">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${interview.youtubeId}`}
                  title={interview.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>

              {/* Title and meta */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="bg-voca-blue text-voca-cream text-sm px-3 py-1 rounded-full font-medium capitalize">
                    {interview.category}
                  </span>
                  <div className="flex items-center space-x-4 text-sm text-voca-blue/60 dark:text-voca-cream/60">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{interview.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(interview.date)}</span>
                    </div>
                  </div>
                </div>

                <h1 className="text-3xl md:text-4xl font-montserrat font-bold text-voca-blue dark:text-voca-cream">
                  {interview.title}
                </h1>

                <p className="text-lg text-voca-blue/80 dark:text-voca-cream/80 leading-relaxed">
                  {interview.description}
                </p>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-4">
                <Button
                  className="bg-red-500 hover:bg-red-600 text-white"
                  onClick={() => window.open(interview.youtubeUrl, "_blank")}
                >
                  <Play className="w-4 h-4 mr-2" />
                  Ver en YouTube
                </Button>
                <Button
                  variant="outline"
                  className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white bg-transparent"
                  onClick={() =>
                    window.open(
                      interview.spotifyUrl || "https://open.spotify.com/show/4wgIOoUl8EeehNx9UhOeC1",
                      "_blank",
                    )
                  }
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Escuchar en Spotify
                </Button>
              </div>
            </div>

            {/* Content */}
            <Card className="bg-white dark:bg-voca-medium-blue border-voca-blue/20 dark:border-voca-cream/20">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <h2 className="text-2xl font-montserrat font-bold text-voca-blue dark:text-voca-cream">
                    Sobre esta entrevista
                  </h2>
                  <div className="space-y-4">
                    <p className="text-voca-blue/80 dark:text-voca-cream/80 leading-relaxed">
                      <strong>Entrevistado:</strong> {interview.nombre}
                    </p>
                    <p className="text-voca-blue/80 dark:text-voca-cream/80 leading-relaxed">
                      <strong>Profesión:</strong> {interview.rubro}
                    </p>
                    <p className="text-voca-blue/80 dark:text-voca-cream/80 leading-relaxed">{interview.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}
