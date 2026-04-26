"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface BlogPaginationProps {
  currentPage: number
  totalPages: number
}

export function BlogPagination({ currentPage, totalPages }: BlogPaginationProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return
    const params = new URLSearchParams(searchParams.toString())
    params.set("page", page.toString())
    router.push(`/blog?${params.toString()}`, { scroll: true })
  }

  if (totalPages <= 1) return null

  return (
    <div className="mt-16 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
      <Button
        variant="outline"
        size="sm"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="voca-button border-voca-blue/20 dark:border-voca-cream/20"
      >
        <ChevronLeft className="w-4 h-4 mr-2" />
        Anterior
      </Button>

      <div className="flex items-center space-x-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <Button
            key={page}
            variant={currentPage === page ? "default" : "outline"}
            size="sm"
            onClick={() => handlePageChange(page)}
            className={
              currentPage === page
                ? "bg-voca-blue text-voca-cream hover:bg-voca-blue/90"
                : "border-voca-blue/20 dark:border-voca-cream/20 text-voca-blue/70 dark:text-voca-cream/70"
            }
          >
            {page}
          </Button>
        ))}
      </div>

      <Button
        variant="outline"
        size="sm"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="voca-button border-voca-blue/20 dark:border-voca-cream/20"
      >
        Siguiente
        <ChevronRight className="w-4 h-4 ml-2" />
      </Button>
    </div>
  )
}
