import { Users, Play, Clock, Star } from "lucide-react"

const stats = [
  {
    icon: Users,
    number: "50+",
    label: "Entrevistas Realizadas",
  },
  {
    icon: Play,
    number: "100K+",
    label: "Reproducciones Totales",
  },
  {
    icon: Clock,
    number: "2000+",
    label: "Horas De Contenido",
  },
  {
    icon: Star,
    number: "4.9",
    label: "Calificación Promedio",
  },
]

export function StatsSection() {
  return (
    <section className="py-20 bg-voca-blue">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-voca-cream">Voca En Números</h2>
          <p className="text-lg text-voca-cream/80 max-w-2xl mx-auto">
            El impacto de nuestras historias en la comunidad
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-voca-cream/20 rounded-full flex items-center justify-center">
                <stat.icon className="w-8 h-8 text-voca-cream" />
              </div>
              <div className="space-y-1">
                <div className="text-3xl md:text-4xl font-montserrat font-bold text-voca-cream">{stat.number}</div>
                <div className="text-voca-cream/80">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
