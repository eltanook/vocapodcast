// sanity/lib/utils.ts
import { Interview } from "./types"

/**
 * Filtra las entrevistas según los criterios de búsqueda y categorías.
 */
export function filterInterviews(
  interviews: Interview[],
  categories: string[],
  searchTerm: string,
  sortBy: string = "newest",
) {
  if (!interviews) return []
  
  let filtered = [...interviews]

  // Filter by category
  if (categories && categories.length > 0) {
    filtered = filtered.filter((i) => categories.includes(i.category))
  }

  // Filter by search term
  if (searchTerm) {
    const search = searchTerm.toLowerCase()
    filtered = filtered.filter(
      (i) =>
        (i.title?.toLowerCase() || "").includes(search) ||
        (i.nombre?.toLowerCase() || "").includes(search) ||
        (i.description?.toLowerCase() || "").includes(search),
    )
  }

  // Sort
  filtered.sort((a, b) => {
    if (sortBy === "date-desc" || sortBy === "newest") {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    } else if (sortBy === "date-asc" || sortBy === "oldest") {
      return new Date(a.date).getTime() - new Date(b.date).getTime()
    } else if (sortBy === "duration-desc") {
      return (b.duration || "").localeCompare(a.duration || "")
    } else if (sortBy === "duration-asc") {
      return (a.duration || "").localeCompare(b.duration || "")
    }
    return 0
  })

  return filtered
}

/**
 * Obtiene las categorías únicas de un conjunto de entrevistas con sus conteos.
 */
export function getAvailableCategories(interviews: Interview[] = []) {
  if (!interviews || !Array.isArray(interviews)) return []
  
  const categoriesMap = new Map<string, number>()
  
  interviews.forEach((i) => {
    if (i.category) {
      categoriesMap.set(i.category, (categoriesMap.get(i.category) || 0) + 1)
    }
  })

  return Array.from(categoriesMap.entries())
    .map(([name, count]) => ({
      id: name,
      label: name,
      count: count,
    }))
    .sort((a, b) => a.label.localeCompare(b.label))
}
