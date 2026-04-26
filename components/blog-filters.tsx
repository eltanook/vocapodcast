"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const categories = [
  { title: "Todos", value: "all" },
  { title: "Entrevistas", value: "Entrevistas" },
  { title: "Reflexiones", value: "Reflexiones" },
  { title: "Noticias", value: "Noticias" },
  { title: "Inspiración", value: "Inspiración" },
]

export function BlogFilters() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const currentCategory = searchParams.get("category") || "all"

  const handleCategoryChange = (category: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (category === "all") {
      params.delete("category")
    } else {
      params.set("category", category)
    }
    // Al cambiar de categoría, volvemos a la página 1
    params.delete("page")
    router.push(`/blog?${params.toString()}`, { scroll: false })
  }

  return (
    <div className="flex flex-wrap justify-center gap-2 mb-12">
      {categories.map((cat) => (
        <Button
          key={cat.value}
          variant={currentCategory === cat.value ? "default" : "outline"}
          size="sm"
          onClick={() => handleCategoryChange(cat.value)}
          className={cn(
            "rounded-full px-6 transition-all",
            currentCategory === cat.value
              ? "bg-voca-blue text-voca-cream hover:bg-voca-blue/90"
              : "border-voca-blue/20 text-voca-blue/70 hover:border-voca-blue hover:bg-transparent dark:border-voca-cream/20 dark:text-voca-cream/70"
          )}
        >
          {cat.title}
        </Button>
      ))}
    </div>
  )
}
