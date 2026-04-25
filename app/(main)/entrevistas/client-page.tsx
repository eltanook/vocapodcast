"use client"

import { useState } from "react"
import { InterviewsGrid } from "@/components/interviews-grid"
import { InterviewsFilters } from "@/components/interviews-filters"
import type { Interview } from "@/sanity/lib/types"

export function EntrevistasClientPage({ initialInterviews }: { initialInterviews: Interview[] }) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("date-desc")

  return (
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
                interviews={initialInterviews}
              />
            </div>
            <div className="lg:col-span-3">
              <InterviewsGrid 
                selectedCategories={selectedCategories} 
                searchTerm={searchTerm} 
                sortBy={sortBy} 
                interviews={initialInterviews}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
