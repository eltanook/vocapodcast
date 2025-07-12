"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Filter, X, Search, Check } from "lucide-react"
import { getAvailableCategories } from "@/lib/interviews-data"

const sortOptions = [
  { value: "date-desc", label: "Fecha De Subida (Más Reciente)" },
  { value: "date-asc", label: "Fecha De Subida (Más Antigua)" },
  { value: "duration-desc", label: "Duración (Mayor)" },
  { value: "duration-asc", label: "Duración (Menor)" },
]

interface InterviewsFiltersProps {
  selectedCategories: string[]
  onCategoriesChange: (categories: string[]) => void
  searchTerm: string
  onSearchChange: (search: string) => void
  sortBy: string
  onSortChange: (sort: string) => void
}

export function InterviewsFilters({
  selectedCategories,
  onCategoriesChange,
  searchTerm,
  onSearchChange,
  sortBy,
  onSortChange,
}: InterviewsFiltersProps) {
  const [isOpen, setIsOpen] = useState(false)

  // Obtener categorías dinámicamente basadas en las entrevistas reales
  const categories = getAvailableCategories()

  const handleCategoryChange = (categoryId: string, checked: boolean) => {
    if (checked) {
      onCategoriesChange([...selectedCategories, categoryId])
    } else {
      onCategoriesChange(selectedCategories.filter((id) => id !== categoryId))
    }
  }

  const clearFilters = () => {
    onCategoriesChange([])
    onSearchChange("")
    onSortChange("date-desc")
  }

  const getActiveSortLabel = () => {
    return sortOptions.find((option) => option.value === sortBy)?.label || "Fecha De Subida (Más Reciente)"
  }

  return (
    <>
      {/* Mobile filter button */}
      <div className="lg:hidden mb-4">
        <Button
          variant="outline"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full border-voca-blue/20 dark:border-voca-cream/20"
        >
          <Filter className="w-4 h-4 mr-2" />
          Filtros
          {(selectedCategories.length > 0 || searchTerm) && (
            <span className="ml-2 bg-voca-blue text-voca-cream text-xs px-2 py-1 rounded-full">
              {selectedCategories.length + (searchTerm ? 1 : 0)}
            </span>
          )}
        </Button>
      </div>

      {/* Filters panel */}
      <div className={`${isOpen ? "block" : "hidden"} lg:block space-y-6`}>
        {/* Búsqueda y Ordenado */}
        <Card className="bg-white dark:bg-voca-medium-blue border-voca-blue/20 dark:border-voca-cream/20">
          <CardContent className="p-6 space-y-6">
            {/* Búsqueda */}
            <div className="space-y-2">
              <h3 className="font-medium text-sm text-voca-blue dark:text-voca-cream">Buscar</h3>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-voca-blue/50 dark:text-voca-cream/50" />
                <Input
                  placeholder="Buscar entrevistas..."
                  value={searchTerm}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="pl-10 border-voca-blue/20 dark:border-voca-cream/20"
                />
              </div>
            </div>

            {/* Ordenar */}
            <div className="space-y-2">
              <h3 className="font-medium text-sm text-voca-blue dark:text-voca-cream">Ordenar Por</h3>
              <div className="relative">
                <Select value={sortBy} onValueChange={onSortChange}>
                  <SelectTrigger className="border-voca-blue/20 dark:border-voca-cream/20 bg-white dark:bg-voca-medium-blue">
                    <SelectValue>{getActiveSortLabel()}</SelectValue>
                  </SelectTrigger>
                  <SelectContent className="bg-white dark:bg-voca-medium-blue border-voca-blue/20 dark:border-voca-cream/20">
                    {sortOptions.map((option) => (
                      <SelectItem
                        key={option.value}
                        value={option.value}
                        className="hover:bg-voca-blue/10 dark:hover:bg-voca-cream/10"
                      >
                        <div className="flex items-center justify-between w-full">
                          <span>{option.label}</span>
                          {sortBy === option.value && <Check className="w-4 h-4 text-voca-blue dark:text-voca-cream" />}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Categorías */}
        {categories.length > 0 && (
          <Card className="bg-white dark:bg-voca-medium-blue border-voca-blue/20 dark:border-voca-cream/20">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg text-voca-blue dark:text-voca-cream">Categorías</CardTitle>
              <div className="flex items-center space-x-2">
                {selectedCategories.length > 0 && (
                  <Button variant="ghost" size="sm" onClick={clearFilters}>
                    Limpiar
                  </Button>
                )}
                <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsOpen(false)}>
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {categories.map((category) => (
                <div key={category.id} className="flex items-center space-x-3">
                  <Checkbox
                    id={category.id}
                    checked={selectedCategories.includes(category.id)}
                    onCheckedChange={(checked) => handleCategoryChange(category.id, checked as boolean)}
                  />
                  <label
                    htmlFor={category.id}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex-1 cursor-pointer text-voca-blue dark:text-voca-cream"
                  >
                    {category.label}
                  </label>
                  <span className="text-xs text-voca-blue/60 dark:text-voca-cream/60 bg-voca-light-gray dark:bg-voca-gray px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                </div>
              ))}
            </CardContent>
          </Card>
        )}
      </div>
    </>
  )
}
