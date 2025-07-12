"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Play, Clock, Calendar } from "lucide-react"
import Image from "next/image"
import { getLatestInterviews } from "@/lib/interviews-data"

export function PodcastCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Obtener las últimas 4 entrevistas automáticamente
  const latestInterviews = getLatestInterviews(4)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % latestInterviews.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + latestInterviews.length) % latestInterviews.length)
  }

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString("es-ES", {
      day: "numeric",
      month: "short",
      year: "numeric",
    })
  }

  if (latestInterviews.length === 0) {
    return null
  }

  return (
    <section className="py-20 bg-voca-light-gray dark:bg-voca-blue">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-voca-blue dark:text-voca-cream">
            Últimos episodios
          </h2>
          <p className="text-lg text-voca-blue/70 dark:text-voca-cream/70">
            Descubre las historias más recientes de vocaciones que inspiran
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {latestInterviews.map((interview) => (
                <div key={interview.id} className="w-full flex-shrink-0 px-4">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Imagen sin hover ni overlay */}
                    <div className="relative order-2 lg:order-1">
                      <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                        <Image
                          src={interview.thumbnail || "/placeholder.svg"}
                          alt={interview.title}
                          width={400}
                          height={300}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    <div className="space-y-6 order-1 lg:order-2">
                      <div className="space-y-4">
                        <h3 className="text-2xl md:text-3xl font-montserrat font-bold text-voca-blue dark:text-voca-cream">
                          {interview.title}
                        </h3>
                        <p className="text-voca-blue/70 dark:text-voca-cream/70 text-lg leading-relaxed">
                          {interview.description.length > 150
                            ? `${interview.description.substring(0, 150)}...`
                            : interview.description}
                        </p>
                      </div>

                      <div className="flex items-center space-x-6 text-sm text-voca-blue/60 dark:text-voca-cream/60">
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4" />
                          <span>{interview.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(interview.date)}</span>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                        <Button
                          className="bg-voca-blue hover:bg-transparent hover:border-voca-blue hover:text-voca-blue text-voca-cream border border-voca-blue dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-800"
                          onClick={() => window.open(interview.youtubeUrl, "_blank")}
                        >
                          <Play className="w-4 h-4 mr-2" />
                          Ver en YouTube
                        </Button>
                        <Button
                          variant="outline"
                          className="border-voca-blue text-voca-blue hover:bg-voca-blue hover:text-voca-cream bg-transparent dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
                          onClick={() =>
                            window.open(
                              interview.spotifyUrl || "https://open.spotify.com/show/4wgIOoUl8EeehNx9UhOeC1",
                              "_blank",
                            )
                          }
                        >
                          Escuchar en Spotify
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border-voca-blue/20 hidden lg:flex"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border-voca-blue/20 hidden lg:flex"
            onClick={nextSlide}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>

          {/* Dots indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {latestInterviews.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-voca-blue" : "bg-voca-blue/30"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>

          {/* Mobile navigation */}
          <div className="flex justify-center space-x-4 mt-6 lg:hidden">
            <Button
              variant="outline"
              size="sm"
              onClick={prevSlide}
              className="border-voca-blue/20 dark:border-voca-cream/20 bg-transparent"
            >
              <ChevronLeft className="w-4 h-4" />
              Anterior
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={nextSlide}
              className="border-voca-blue/20 dark:border-voca-cream/20 bg-transparent"
            >
              Siguiente
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
