import { Mail, MessageCircle, Users, Headphones } from "lucide-react"

const reasons = [
  {
    icon: MessageCircle,
    title: "Proponer una entrevista",
    description: "¿Tienes una historia que contar?",
  },
  {
    icon: Users,
    title: "Colaboraciones",
    description: "Trabajemos juntos en proyectos",
  },
  {
    icon: Headphones,
    title: "Feedback y sugerencias",
    description: "Ayúdanos a mejorar el podcast",
  },
  {
    icon: Mail,
    title: "Consultas generales",
    description: "Cualquier pregunta o comentario",
  },
]

export function ContactHero() {
  return (
    <section className="py-20 relative">
      {/* Background Image with Fixed Attachment */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
        }}
      />

      {/* Blue Overlay */}
      <div className="absolute inset-0 bg-voca-blue/85 dark:bg-voca-blue/90" />

      {/* Content */}
      <div className="relative z-10 container">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-voca-cream">Contacto</h1>
            <p className="text-xl text-voca-cream/80 max-w-3xl mx-auto leading-relaxed">
              Nos encanta conectar con nuestra audiencia.
              <span className="hidden md:inline">
                {" "}
                Aquí tienes algunas razones por las que podrías querer contactarnos:
              </span>
              <span className="md:hidden"> ¿Tienes una historia que contar? ¡Contáctanos!</span>
            </p>
          </div>

          {/* Hide features grid on mobile */}
          <div className="hidden md:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {reasons.map((reason, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-voca-cream/20 rounded-full flex items-center justify-center">
                  <reason.icon className="w-8 h-8 text-voca-cream" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-montserrat font-semibold text-lg text-voca-cream">{reason.title}</h3>
                  <p className="text-sm text-voca-cream/70">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
