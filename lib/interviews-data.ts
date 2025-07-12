// Datos reales de las entrevistas extraídos del CSV
export interface Interview {
  id: number
  title: string
  description: string
  duration: string
  date: string
  category: string
  rubro: string
  nombre: string
  thumbnail: string
  slug: string
  youtubeId: string
  youtubeUrl: string
  spotifyUrl?: string // Nuevo campo para Spotify
}

// Función para extraer el ID de YouTube de una URL
function extractYouTubeId(url: string): string {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/)
  return match ? match[1] : ""
}

// Función para generar slug a partir del nombre y rubro
function generateSlug(nombre: string, rubro: string): string {
  const combined = `${nombre} ${rubro}`
  return combined
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim()
}

// Función para normalizar categorías
function normalizeCategory(categoria: string): string {
  const categoryMap: { [key: string]: string } = {
    "salud y bienestar": "salud",
    "arte y creatividad": "arte",
    emprendimiento: "emprendimiento",
    educación: "educacion",
    educacion: "educacion",
    tecnología: "tecnologia",
    "oficios tradicionales": "oficios",
    "ciencia e investigación": "ciencia",
    deporte: "deporte",
    otros: "otros",
  }

  const normalized = categoria.toLowerCase()
  return categoryMap[normalized] || "otros"
}

// Función para formatear fecha de MM/DD/YYYY a YYYY-MM-DD
function formatDate(dateStr: string): string {
  const [day, month, year] = dateStr.split("/")
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`
}

// Función para formatear duración de HH:MM:SS a formato legible
function formatDuration(duration: string): string {
  // Remover los segundos extra si están presentes
  const parts = duration.split(":")
  if (parts.length === 3) {
    const hours = Number.parseInt(parts[0])
    const minutes = Number.parseInt(parts[1])

    if (hours > 0) {
      return `${hours}:${parts[1]}:${parts[2].substring(0, 2)}`
    } else {
      return `${minutes}:${parts[2].substring(0, 2)}`
    }
  }
  return duration
}

// Actualizar todas las entrevistas con sus links de Spotify correspondientes
export const realInterviews: Interview[] = [
  {
    id: 1,
    nombre: "Graciela Moreschi",
    rubro: "Psiquiatra",
    title: "Graciela Moreschi - Psiquiatra",
    description:
      "En esta entrevista con la médica psiquiatra y comunicadora Graciela Moreschi, hablamos de todo lo que nos atraviesa hoy: el miedo a aburrirnos, el efecto de las redes sociales en nuestra salud mental, la búsqueda de propósito, los pensamientos intrusivos, la ansiedad por tener todo ya, las adicciones modernas como escape y el gran miedo silencioso: la muerte.",
    duration: "1:13:47",
    date: formatDate("10/7/2025"),
    category: normalizeCategory("Salud y bienestar"),
    thumbnail: `https://img.youtube.com/vi/${extractYouTubeId("https://www.youtube.com/watch?v=i3tO0qkVDTg")}/maxresdefault.jpg`,
    slug: generateSlug("Graciela Moreschi", "Psiquiatra"),
    youtubeId: extractYouTubeId("https://www.youtube.com/watch?v=i3tO0qkVDTg"),
    youtubeUrl: "https://www.youtube.com/watch?v=i3tO0qkVDTg",
    spotifyUrl: "https://open.spotify.com/episode/2IhTtnLeLlPnjyxYK62Urv?si=7zfF0N38RMCVKw4UqdjBzQ",
  },
  {
    id: 2,
    nombre: "Lautaro Herrera",
    rubro: "Bombero",
    title: "Lautaro Herrera - Bombero",
    description:
      "¿Qué se siente estar dentro de un incendio? ¿Cómo vive un bombero cuando no puede salvar una vida? En esta entrevista nos metemos en la vida real de alguien que dejó un trabajo en Coca-Cola para seguir su vocación: salvar vidas, incluso en el infierno. Hablamos de accidentes, suicidios, frustración, muerte, miedo… pero también del goce inexplicable de ayudar en el peor momento. Una charla cruda, real, sin filtro.",
    duration: "44:13",
    date: formatDate("3/7/2025"),
    category: normalizeCategory("Oficios tradicionales"),
    thumbnail: `https://img.youtube.com/vi/${extractYouTubeId("https://www.youtube.com/watch?v=CzKxcLYcarY")}/maxresdefault.jpg`,
    slug: generateSlug("Lautaro Herrera", "Bombero"),
    youtubeId: extractYouTubeId("https://www.youtube.com/watch?v=CzKxcLYcarY"),
    youtubeUrl: "https://www.youtube.com/watch?v=CzKxcLYcarY",
    spotifyUrl: "https://open.spotify.com/episode/0Us1iS87J8Na03OPjdtm6D?si=LERSFayCROmETwRV6cxphw",
  },
  {
    id: 3,
    nombre: "José María Rodríguez Sarachaga",
    rubro: "Experto en oratoria",
    title: "José María Rodríguez Sarachaga - Experto en oratoria",
    description:
      "En esta entrevista, charlamos con José María Rodríguez Saráchaga, uno de los grandes expertos en oratoria de Argentina: locutor, formador y exasesor de comunicación de Mauricio Macri. Nos cuenta cómo empezó en eventos, cómo trajo conceptos claves de la oratoria al habla argentina, y cómo terminó asesorando a políticos y empresarios de alto nivel. Revela cómo se comunica alguien con poder, qué hace a un buen orador, y cómo usar la palabra para ser escuchado, liderar y conseguir oportunidades.",
    duration: "1:58:30",
    date: formatDate("19/6/2025"),
    category: normalizeCategory("Ciencia e investigación"),
    thumbnail: `https://img.youtube.com/vi/${extractYouTubeId("https://www.youtube.com/watch?v=w9AB0A3Ql_k")}/maxresdefault.jpg`,
    slug: generateSlug("José María Rodríguez Sarachaga", "Experto en oratoria"),
    youtubeId: extractYouTubeId("https://www.youtube.com/watch?v=w9AB0A3Ql_k"),
    youtubeUrl: "https://www.youtube.com/watch?v=w9AB0A3Ql_k",
    spotifyUrl: "https://open.spotify.com/episode/0BVuRp8oSqDa9A3awnGTcW?si=TU4j9VgpQl6V6L0NaOeGhg",
  },
  {
    id: 4,
    nombre: "Agustin Kammerath",
    rubro: "Profesor",
    title: "Agustin Kammerath - Profesor",
    description:
      "¿Qué lleva a un profesor argentino a dejar todo y viajar solo a la India? En esta entrevista, Agustín Kammerath —antropólogo, docente y profesor de yoga— comparte su experiencia en el aula con adolescentes, los desafíos actuales de la educación, la desconexión digital y su necesidad de buscar algo más allá. Desde su llegada caótica a Delhi sin internet, hasta descubrir el verdadero sentido de comunidad en un pequeño pueblo indio, Agustín nos cuenta cómo la curiosidad y una crisis personal lo llevaron a un viaje transformador.",
    duration: "1:36:42",
    date: formatDate("12/6/2025"),
    category: normalizeCategory("Educación"),
    thumbnail: `https://img.youtube.com/vi/${extractYouTubeId("https://www.youtube.com/watch?v=CRth1TE9bvc")}/maxresdefault.jpg`,
    slug: generateSlug("Agustin Kammerath", "Profesor"),
    youtubeId: extractYouTubeId("https://www.youtube.com/watch?v=CRth1TE9bvc"),
    youtubeUrl: "https://www.youtube.com/watch?v=CRth1TE9bvc",
    spotifyUrl: "https://open.spotify.com/episode/29NNFXmVM0hM8XvLtzuYfD?si=AYgC7weAQO-BYG19c99pQQ",
  },
  {
    id: 5,
    nombre: "Federico Garcia",
    rubro: "Abogado",
    title: "Federico Garcia - Abogado",
    description:
      "En este episodio de Vocación Podcast, hablamos con Fede García, líder de la organización @masallaorg, que entrega viandas a personas en situación de calle en Villa del Parque y acompaña comunidades en el Chaco. Charlamos sobre cómo nace Más Allá, qué significa ayudar de verdad, cómo se involucran con cada historia y cómo la empatía se convierte en acción concreta. Federico nos cuenta el detrás de una organización que ya entregó más de 12.000 viandas.",
    duration: "51:46",
    date: formatDate("5/6/2025"),
    category: normalizeCategory("Emprendimiento"),
    thumbnail: `https://img.youtube.com/vi/${extractYouTubeId("https://www.youtube.com/watch?v=kjGJg_pCH38")}/maxresdefault.jpg`,
    slug: generateSlug("Federico Garcia", "Abogado"),
    youtubeId: extractYouTubeId("https://www.youtube.com/watch?v=kjGJg_pCH38"),
    youtubeUrl: "https://www.youtube.com/watch?v=kjGJg_pCH38",
    spotifyUrl: "https://open.spotify.com/episode/4wgIOoUl8EeehNx9UhOeC1?si=I0GZ-xTtSqKrkDxey3gOIA",
  },
  {
    id: 6,
    nombre: "Cecilia Villaverde",
    rubro: "Psicóloga",
    title: "Cecilia Villaverde - Psicóloga",
    description:
      "¿Por qué sentimos que todo va rápido pero nada nos llena? En este nuevo episodio de Vocación Podcast, hablamos con Ceci, psicóloga con amplia experiencia clínica, sobre el vacío de sentido en la sociedad actual, la ansiedad colectiva y cómo podemos reconectarnos con lo que realmente importa. Conversamos sobre la importancia de desarrollar hábitos para la salud mental, el rol de las relaciones, los desafíos del sobrepensamiento, la sexualidad en la era de las redes y cómo aprender a no quedarnos en el lugar de víctima.",
    duration: "52:33",
    date: formatDate("29/5/2025"),
    category: normalizeCategory("Salud y bienestar"),
    thumbnail: `https://img.youtube.com/vi/${extractYouTubeId("https://www.youtube.com/watch?v=avpDS3cO28s")}/maxresdefault.jpg`,
    slug: generateSlug("Cecilia Villaverde", "Psicóloga"),
    youtubeId: extractYouTubeId("https://www.youtube.com/watch?v=avpDS3cO28s"),
    youtubeUrl: "https://www.youtube.com/watch?v=avpDS3cO28s",
    spotifyUrl: "https://open.spotify.com/episode/4sQKw1cuY78Z2Heqxh1dxw?si=IykY4RRlTTe_e-NHJIa7rg",
  },
  {
    id: 7,
    nombre: "Pablo Reyes",
    rubro: "Abogado penalista",
    title: "Pablo Reyes - Abogado penalista",
    description:
      "¿Cómo se construye una carrera en el Derecho Penal y qué implica acompañar a alguien en su peor momento? En este episodio de Vocación Podcast, conversamos con Pablo —abogado penalista con más de 14 años de experiencia en causas complejas de Derecho Penal y de Familia— sobre su recorrido profesional, su formación constante y su forma de ejercer una abogacía humana y estratégica. Hablamos sobre los casos más difíciles, la exposición mediática, el vínculo con los clientes privados de su libertad y cómo la Inteligencia Artificial ya empieza a cambiar el Derecho.",
    duration: "55:30",
    date: formatDate("17/5/2025"),
    category: normalizeCategory("Oficios tradicionales"),
    thumbnail: `https://img.youtube.com/vi/${extractYouTubeId("https://www.youtube.com/watch?v=AtsMTpK3_20")}/maxresdefault.jpg`,
    slug: generateSlug("Pablo Reyes", "Abogado penalista"),
    youtubeId: extractYouTubeId("https://www.youtube.com/watch?v=AtsMTpK3_20"),
    youtubeUrl: "https://www.youtube.com/watch?v=AtsMTpK3_20",
    spotifyUrl: "https://open.spotify.com/episode/56PzCdZaku1a3Zmba0HC8c?si=JlOe1oE-RHmOWyV_JYowsw",
  },
  {
    id: 8,
    nombre: "Marcelo Settimo",
    rubro: "Emprendedor",
    title: "Marcelo Settimo - Emprendedor",
    description:
      "En este capítulo, nos metemos en la historia inspiradora de Marcelo Settimo, fundador de Tita de Buenos Aires, una cadena de empanadas argentinas que nació en plena pandemia y hoy ya tiene más de 10 locales y sigue expandiéndose por Europa. Marcelo nos cuenta cómo él y su esposa, con más de 50 años de historia familiar en gastronomía, se animaron a empezar de cero en Madrid, dejando atrás su panadería en Rosario. Una historia real de pasión, identidad, esfuerzo y mucho trabajo en familia.",
    duration: "1:03:31",
    date: formatDate("17/4/2025"),
    category: normalizeCategory("Emprendimiento"),
    thumbnail: `https://img.youtube.com/vi/${extractYouTubeId("https://www.youtube.com/watch?v=12kpqX43l88")}/maxresdefault.jpg`,
    slug: generateSlug("Marcelo Settimo", "Emprendedor"),
    youtubeId: extractYouTubeId("https://www.youtube.com/watch?v=12kpqX43l88"),
    youtubeUrl: "https://www.youtube.com/watch?v=12kpqX43l88",
    spotifyUrl: "https://open.spotify.com/episode/2IhTtnLeLlPnjyxYK62Urv?si=7zfF0N38RMCVKw4UqdjBzQ",
  },
  {
    id: 9,
    nombre: "Matias Umpierrez",
    rubro: "Artista y director",
    title: "Matias Umpierrez - Artista y director",
    description:
      "En este episodio de 'Historias que Viajan', hablamos con Matías Umpierrez, artista y director que explora la ficción, el arte y la sensibilidad humana desde una mirada profunda y sin concesiones. Desde sus inicios hasta su forma de pensar cada obra, Matías nos abre la puerta a una vida dedicada al arte. Descubrimos cómo surgió su vínculo con el arte desde chico, el rol de la ficción en la cultura, la obsesión creativa y la búsqueda constante de sentido.",
    duration: "1:14:07",
    date: formatDate("10/4/2025"),
    category: normalizeCategory("Arte y creatividad"),
    thumbnail: `https://img.youtube.com/vi/${extractYouTubeId("https://www.youtube.com/watch?v=1dm_Lj4133M")}/maxresdefault.jpg`,
    slug: generateSlug("Matias Umpierrez", "Artista y director"),
    youtubeId: extractYouTubeId("https://www.youtube.com/watch?v=1dm_Lj4133M"),
    youtubeUrl: "https://www.youtube.com/watch?v=1dm_Lj4133M",
    spotifyUrl: "https://open.spotify.com/episode/02wY2H3JZYXpAcWBdrx3Et?si=NavYLlfLQEKWh29P4OFzMQ",
  },
  {
    id: 10,
    nombre: "Guadalup Oliver",
    rubro: "Ingeniera industrial",
    title: "Guadalup Oliver - Ingeniera industrial",
    description:
      "¿Cómo es emprender en otro país y lograr que tu producto se venda en Londres? En este episodio de 'Historias que Viajan', hablamos con Guadalupe Oliver, cofundadora de Candour Wines, el emprendimiento argentino que revolucionó el mundo del vino en lata. Desde su experiencia en el exterior hasta los desafíos de vender un producto innovador, Guada nos cuenta todo lo que nadie te dice sobre emprender en otro país. Descubrimos cómo surgió la idea, los mayores desafíos y las claves para vender en el exterior.",
    duration: "52:21",
    date: formatDate("3/4/2025"),
    category: normalizeCategory("Emprendimiento"),
    thumbnail: `https://img.youtube.com/vi/${extractYouTubeId("https://www.youtube.com/watch?v=MvAL_p-wP78")}/maxresdefault.jpg`,
    slug: generateSlug("Guadalup Oliver", "Ingeniera industrial"),
    youtubeId: extractYouTubeId("https://www.youtube.com/watch?v=MvAL_p-wP78"),
    youtubeUrl: "https://www.youtube.com/watch?v=MvAL_p-wP78",
    spotifyUrl: "https://open.spotify.com/episode/2mN1ugy7St2k0n59yaRWxD?si=dcAl-VgiT0WwzNX7WhOE3w",
  },
  {
    id: 11,
    nombre: "Chiara Nalli",
    rubro: "Polista",
    title: "Chiara Nalli - Polista",
    description:
      "En este episodio de 'Historias que Viajan', hablamos con Chiara Nalli, la joven polista argentina que se abrió camino en el polo británico a los 18 años. Nos cuenta sobre sus sacrificios, su adaptación a jugar en el exterior, el vínculo con los caballos y los desafíos de un deporte de élite. Una historia inspiradora sobre determinación, pasión y la búsqueda de los sueños más allá de las fronteras.",
    duration: "33:15",
    date: formatDate("27/3/2025"),
    category: normalizeCategory("Deporte"),
    thumbnail: `https://img.youtube.com/vi/${extractYouTubeId("https://www.youtube.com/watch?v=XP28J5NYz6M")}/maxresdefault.jpg`,
    slug: generateSlug("Chiara Nalli", "Polista"),
    youtubeId: extractYouTubeId("https://www.youtube.com/watch?v=XP28J5NYz6M"),
    youtubeUrl: "https://www.youtube.com/watch?v=XP28J5NYz6M",
    spotifyUrl: "https://open.spotify.com/episode/5f1u6Y0r9sEssrvQK9IlVz?si=yhqtl9uhRnmQoGV0Jj0bbg",
  },
]

// Función para obtener las últimas entrevistas ordenadas por fecha
export function getLatestInterviews(limit = 4): Interview[] {
  return realInterviews.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, limit)
}

// Función para obtener entrevista por slug
export function getInterviewBySlug(slug: string): Interview | undefined {
  return realInterviews.find((interview) => interview.slug === slug)
}

// Función para filtrar entrevistas
export function filterInterviews(categories: string[] = [], searchTerm = "", sortBy = "date-desc"): Interview[] {
  let filtered = [...realInterviews]

  // Filtrar por categorías
  if (categories.length > 0) {
    filtered = filtered.filter((interview) => categories.includes(interview.category))
  }

  // Filtrar por búsqueda
  if (searchTerm) {
    const normalizedSearch = searchTerm
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
    filtered = filtered.filter(
      (interview) =>
        interview.title
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(normalizedSearch) ||
        interview.description
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(normalizedSearch) ||
        interview.nombre
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(normalizedSearch) ||
        interview.rubro
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(normalizedSearch),
    )
  }

  // Ordenar
  const [sortField, sortOrder] = sortBy.split("-")
  if (sortField === "date") {
    filtered.sort((a, b) => {
      const dateA = new Date(a.date).getTime()
      const dateB = new Date(b.date).getTime()
      return sortOrder === "asc" ? dateA - dateB : dateB - dateA
    })
  } else if (sortField === "duration") {
    filtered.sort((a, b) => {
      const durationA = convertDurationToMinutes(a.duration)
      const durationB = convertDurationToMinutes(b.duration)
      return sortOrder === "asc" ? durationA - durationB : durationB - durationA
    })
  }

  return filtered
}

// Función auxiliar para convertir duración a minutos
function convertDurationToMinutes(duration: string): number {
  const parts = duration.split(":").map(Number)
  if (parts.length === 3) {
    // HH:MM:SS
    return parts[0] * 60 + parts[1] + parts[2] / 60
  } else if (parts.length === 2) {
    // MM:SS
    return parts[0] + parts[1] / 60
  }
  return 0
}

// Función para obtener todas las categorías disponibles
export function getAvailableCategories(): Array<{ id: string; label: string; count: number }> {
  const categoryCounts: { [key: string]: number } = {}

  realInterviews.forEach((interview) => {
    categoryCounts[interview.category] = (categoryCounts[interview.category] || 0) + 1
  })

  const categoryLabels: { [key: string]: string } = {
    arte: "Arte y creatividad",
    tecnologia: "Tecnología",
    salud: "Salud y bienestar",
    educacion: "Educación",
    emprendimiento: "Emprendimiento",
    oficios: "Oficios tradicionales",
    ciencia: "Ciencia e investigación",
    deporte: "Deporte",
    otros: "Otros",
  }

  return Object.entries(categoryCounts)
    .map(([id, count]) => ({
      id,
      label: categoryLabels[id] || id,
      count,
    }))
    .sort((a, b) => b.count - a.count) // Ordenar por cantidad descendente
}

// Función para obtener estadísticas
export function getInterviewStats() {
  const totalInterviews = realInterviews.length
  const totalDuration = realInterviews.reduce((acc, interview) => {
    return acc + convertDurationToMinutes(interview.duration)
  }, 0)

  const totalHours = Math.floor(totalDuration / 60)
  const categories = getAvailableCategories().length

  return {
    totalInterviews,
    totalHours,
    categories,
    avgRating: 4.9, // Valor fijo por ahora
  }
}
