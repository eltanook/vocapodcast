import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="min-h-[90vh] relative">
      {/* Background Image with Fixed Attachment */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
        }}
      />

      {/* Blue Overlay */}
      <div className="absolute inset-0 bg-voca-blue/90 dark:bg-voca-darker-blue/95" />

      {/* Content */}
      <div className="relative z-10 container h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center min-h-[90vh] py-6 lg:py-8">
          {/* Left Column - Text Content */}
          <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
            <div className="space-y-4 lg:space-y-6">
              <h1 className="text-3xl sm:text-4xl font-montserrat font-bold leading-tight text-voca-cream md:text-4xl">
                Historias que inspiran,
                <br />
                <span className="text-voca-cream">vocaciones que transforman</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg font-montserrat leading-relaxed text-voca-cream/90">
                Un espacio de historias y aprendizajes con personajes que inspiran. Exploramos las vocaciones reales que
                construyen el mundo.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 items-start">
              <Link href="/entrevistas">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-white text-white hover:bg-transparent hover:border-white hover:text-white px-6 lg:px-8 py-3 bg-white text-voca-blue"
                >
                  Explorar entrevistas
                  <ArrowRight className="w-4 lg:w-5 h-4 lg:h-5 ml-2" />
                </Button>
              </Link>

              {/* Platform Links */}
              <div className="flex items-center space-x-3 lg:space-x-4 mt-2">
                <span className="text-sm font-medium text-voca-cream/60 hidden sm:inline">Escúchanos en:</span>
                <div className="flex items-center space-x-2 lg:space-x-3">
                  <a
                    href="https://open.spotify.com/show/4wgIOoUl8EeehNx9UhOeC1"
                    className="hover:scale-110 transition-transform"
                  >
                    <div className="w-7 h-7 lg:w-8 lg:h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 lg:w-5 lg:h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.84-.179-.84-.6 0-.359.24-.66.54-.78 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.242 1.021zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" />
                      </svg>
                    </div>
                  </a>
                  <a href="https://www.youtube.com/@vocapodcast" className="hover:scale-110 transition-transform">
                    <div className="w-7 h-7 lg:w-8 lg:h-8 bg-red-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 lg:w-5 lg:h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Video */}
          <div className="order-1 lg:order-2">
            <div className="aspect-video rounded-xl lg:rounded-2xl overflow-hidden shadow-2xl mx-4 md:mx-0">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/A8ssi-9OWUs"
                title="Bienvenidos a VocaPodcast"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
