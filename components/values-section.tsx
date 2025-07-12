import { Heart, Eye, Lightbulb, Users, Star, Target } from "lucide-react"

const values = [
  {
    icon: Eye,
    title: "Curiosidad genuina",
    description: "Hacemos las preguntas que realmente importan, con interés auténtico por cada historia.",
  },
  {
    icon: Heart,
    title: "Respeto",
    description: "Valoramos cada vocación y cada persona, sin juicios ni prejuicios.",
  },
  {
    icon: Lightbulb,
    title: "Simpleza",
    description: "Comunicamos de forma clara y directa, sin complicaciones innecesarias.",
  },
  {
    icon: Star,
    title: "Calidad y calidez",
    description: "Combinamos excelencia técnica con un trato humano y cercano.",
  },
  {
    icon: Users,
    title: "Compromiso con lo real",
    description: "Mostramos la realidad sin filtros, con honestidad y transparencia.",
  },
  {
    icon: Target,
    title: "Propósito claro",
    description: "Cada entrevista tiene un objetivo: inspirar y conectar con historias reales.",
  },
]

export function ValuesSection() {
  return (
    <section className="py-20 bg-white dark:bg-voca-blue">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-voca-blue dark:text-voca-cream">
            Nuestros valores
          </h2>
          <p className="text-lg text-voca-blue/70 dark:text-voca-cream/70 max-w-2xl mx-auto">
            Los principios que guían cada conversación y cada historia que compartimos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl border border-voca-blue/20 dark:border-voca-cream/20 hover:border-voca-blue/50 dark:hover:border-voca-cream/50 transition-all duration-300 hover:shadow-lg bg-white dark:bg-voca-medium-blue"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-voca-blue/10 dark:bg-voca-cream/10 rounded-lg flex items-center justify-center group-hover:bg-voca-blue/20 dark:group-hover:bg-voca-cream/20 transition-colors">
                  <value.icon className="w-6 h-6 text-voca-blue dark:text-voca-cream" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-montserrat font-semibold text-lg text-voca-blue dark:text-voca-cream">
                    {value.title}
                  </h3>
                  <p className="text-voca-blue/70 dark:text-voca-cream/70 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
