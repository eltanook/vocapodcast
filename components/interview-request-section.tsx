"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function InterviewRequestSection() {
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
      <div className="absolute inset-0 bg-voca-gray/90 dark:bg-voca-darker-blue/95" />

      {/* Content */}
      <div className="relative z-10 container">
        <div className="max-w-3xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-voca-cream">
              ¿Quieres Ser Entrevistado?
            </h2>
            <p className="text-lg text-voca-cream/80 max-w-2xl mx-auto leading-relaxed">
              Si tienes una historia que contar sobre tu vocación, nos encantaría conocerte. Comparte tu experiencia y
              inspira a otros con tu camino profesional.
            </p>
          </div>

          <div className="mt-12">
            <Link href="/contacto">
              <Button
                size="lg"
                className="bg-voca-cream hover:bg-voca-cream/90 text-voca-blue border-0 px-8 py-4 text-lg font-semibold"
              >
                Contáctanos Para Tu Entrevista
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
