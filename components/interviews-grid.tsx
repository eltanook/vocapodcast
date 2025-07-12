"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Play, Clock, Calendar, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import { filterInterviews } from "@/lib/interviews-data"

const ITEMS_PER_PAGE = 6

export function InterviewsGrid({
  selectedCategories,
  searchTerm,
  sortBy,
}: {
  selectedCategories: string[]
  searchTerm: string
  sortBy: string
}) {
  const [currentPage, setCurrentPage] = useState(1)

  const filteredAndSortedInterviews = useMemo(() => {
    return filterInterviews(selectedCategories, searchTerm, sortBy)
  }, [selectedCategories, searchTerm, sortBy])

  const totalPages = Math.ceil(filteredAndSortedInterviews.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const currentInterviews = filteredAndSortedInterviews.slice(startIndex, endIndex)

  const goToPage = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString("es-ES", {
      day: "numeric",
      month: "short",
      year: "numeric",
    })
  }

  // Reset page when filters change
  useState(() => {
    setCurrentPage(1)
  }, [selectedCategories, searchTerm, sortBy])

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {currentInterviews.map((interview) => (
          <Card
            key={interview.id}
            className="group overflow-hidden hover:shadow-lg transition-shadow bg-white dark:bg-voca-medium-blue border-voca-blue/20 dark:border-voca-cream/20"
          >
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={interview.thumbnail || "/placeholder.svg"}
                alt={interview.title}
                width={300}
                height={200}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {/* Overlay con botones en hover */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-3">
                <Button
                  size="sm"
                  className="bg-voca-blue hover:bg-voca-blue/90 text-voca-cream"
                  onClick={() => window.open(interview.youtubeUrl, "_blank")}
                >
                  <Play className="w-4 h-4 mr-1" />
                  Ver
                </Button>
                <Link href={`/entrevistas/${interview.slug}`} passHref>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-voca-blue bg-transparent"
                    asChild
                  >
                    <span>
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Detalles
                    </span>
                  </Button>
                </Link>
              </div>
              <div className="absolute top-3 left-3">
                <span className="bg-voca-blue text-voca-cream text-xs px-2 py-1 rounded-full font-medium capitalize">
                  {interview.category}
                </span>
              </div>
            </div>

            <CardContent className="p-4 space-y-3">
              <div className="space-y-2">
                <h3 className="font-montserrat font-semibold text-lg leading-tight group-hover:text-voca-gray transition-colors text-voca-blue dark:text-voca-cream">
                  <Link href={`/entrevistas/${interview.slug}`}>{interview.title}</Link>
                </h3>
                <p className="text-sm text-voca-blue/70 dark:text-voca-cream/70 line-clamp-2">
                  {interview.description.length > 100
                    ? `${interview.description.substring(0, 100)}...`
                    : interview.description}
                </p>
              </div>

              <div className="flex items-center justify-between text-xs text-voca-blue/60 dark:text-voca-cream/60">
                <div className="flex items-center space-x-1">
                  <Clock className="w-3 h-3" />
                  <span>{interview.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-3 h-3" />
                  <span>{formatDate(interview.date)}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredAndSortedInterviews.length === 0 && (
        <div className="text-center py-12">
          <p className="text-voca-blue/70 dark:text-voca-cream/70">
            No se encontraron entrevistas que coincidan con tu búsqueda.
          </p>
        </div>
      )}

      <div className="flex items-center justify-between">
        <p className="text-sm text-voca-blue/70 dark:text-voca-cream/70">
          Mostrando {startIndex + 1}-{Math.min(endIndex, filteredAndSortedInterviews.length)} de{" "}
          {filteredAndSortedInterviews.length} entrevistas
        </p>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="border-voca-blue/20 dark:border-voca-cream/20 w-full sm:w-auto"
          >
            <ChevronLeft className="w-4 h-4" />
            Anterior
          </Button>

          <div className="flex items-center space-x-1 overflow-x-auto">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                size="sm"
                onClick={() => goToPage(page)}
                className={
                  currentPage === page
                    ? "bg-voca-blue hover:bg-voca-blue/90 text-voca-cream"
                    : "border-voca-blue/20 dark:border-voca-cream/20"
                }
              >
                {page}
              </Button>
            ))}
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="border-voca-blue/20 dark:border-voca-cream/20 w-full sm:w-auto"
          >
            Siguiente
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      )}
    </div>
  )
}
