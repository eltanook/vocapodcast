"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Instagram, Linkedin } from "lucide-react"

export function AboutSection() {
  return (
    <section className="py-12 md:py-20 bg-voca-light-gray dark:bg-voca-blue">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 order-2 lg:order-1">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-montserrat font-bold text-voca-blue dark:text-voca-cream">
                ¿Qué mueve a las personas a hacer lo que hacen?
              </h2>
              <p className="text-base md:text-lg text-voca-blue/80 dark:text-voca-cream/80 leading-relaxed">
                Voca Podcast nace con esta pregunta de fondo. Exploramos las vocaciones reales que construyen el mundo:
                desde lo visible hasta lo invisible, desde lo cotidiano hasta lo extraordinario.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-sm md:text-base text-voca-blue/70 dark:text-voca-cream/70">
                Entrevistamos a personas que se destacan o que simplemente hacen lo que aman, para descubrir el camino
                detrás de cada oficio, profesión o forma de vida.
              </p>
              <p className="text-sm md:text-base text-voca-blue dark:text-voca-cream">
                <strong className="text-voca-blue dark:text-voca-cream">Nuestro objetivo:</strong> Inspirar, despertar
                curiosidad y mostrar que el trabajo también puede ser elección, deseo, identidad.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 md:gap-3">
              <span className="px-3 md:px-4 py-1 md:py-2 bg-voca-blue/10 text-voca-blue dark:bg-voca-cream/10 dark:text-voca-cream rounded-full text-xs md:text-sm font-medium">
                Historias reales
              </span>
              <span className="px-3 md:px-4 py-1 md:py-2 bg-voca-blue/10 text-voca-blue dark:bg-voca-cream/10 dark:text-voca-cream rounded-full text-xs md:text-sm font-medium">
                Mirada joven
              </span>
              <span className="px-3 md:px-4 py-1 md:py-2 bg-voca-blue/10 text-voca-blue dark:bg-voca-cream/10 dark:text-voca-cream rounded-full text-xs md:text-sm font-medium">
                Contenido auténtico
              </span>
            </div>

            {/* Llamados a la acción debajo del texto */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4">
              <Button
                className="bg-voca-blue hover:bg-transparent hover:border-voca-blue hover:text-voca-blue text-voca-cream border border-voca-blue dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-800"
                onClick={() => window.open("https://www.youtube.com/@vocapodcast", "_blank")}
              >
                Ver canal
              </Button>
              <Link href="/entrevistas">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto border-voca-blue text-voca-blue hover:bg-voca-blue hover:text-voca-cream bg-transparent dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
                >
                  Ver entrevistas
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative group order-1 lg:order-2">
            <div className="aspect-[4/3] rounded-xl lg:rounded-2xl overflow-hidden shadow-xl relative">
              <Image
                src="/about.jpg"
                alt="Voca Podcast - Detrás de cámaras"
                width={500}
                height={400}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Overlay con información de Máximo */}
              <div className="absolute inset-0 bg-voca-blue/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 md:p-6">
                <div className="text-center space-y-3 md:space-y-4 text-voca-cream">
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto bg-voca-cream/20 rounded-full flex items-center justify-center">
                    <Image
                      src="/favicon.png"
                      alt="Máximo Sarmiento"
                      width={32}
                      height={32}
                      className="w-6 h-6 md:w-8 md:h-8 object-contain invert"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-montserrat font-bold text-lg md:text-xl">Máximo Sarmiento</h3>
                    <p className="text-xs md:text-sm text-voca-cream/80 leading-relaxed">
                      Creador y host de Voca Podcast. Estudiante apasionado por las historias humanas y las vocaciones
                      que dan sentido a la vida. Busca inspirar a través de conversaciones auténticas.
                    </p>
                  </div>
                  <div className="flex justify-center space-x-3 md:space-x-4 pt-2">
                    <a
                      href="https://instagram.com/maximosarmiento04"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 md:w-10 md:h-10 bg-voca-cream/20 rounded-full flex items-center justify-center hover:bg-voca-cream/30 transition-colors"
                    >
                      <Instagram className="w-4 h-4 md:w-5 md:h-5" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/m%C3%A1ximo-sarmiento-73a5a7276/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 md:w-10 md:h-10 bg-voca-cream/20 rounded-full flex items-center justify-center hover:bg-voca-cream/30 transition-colors"
                    >
                      <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-16 h-16 md:w-24 md:h-24 bg-voca-blue rounded-full flex items-center justify-center shadow-lg">
              <div className="w-10 h-10 md:w-16 md:h-16 relative">
                <Image
                  src="/favicon.png"
                  alt="Voca Podcast"
                  width={64}
                  height={64}
                  className="w-full h-full object-contain invert"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
