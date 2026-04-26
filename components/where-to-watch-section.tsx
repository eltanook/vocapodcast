"use client"

import { Button } from "@/components/ui/button"
import { Youtube, Smartphone, Instagram } from "lucide-react"
import { ScrollReveal, ScrollRevealGroup } from "@/components/scroll-reveal"

const platforms = [
  {
    name: "YouTube",
    icon: Youtube,
    description: "Videos completos y clips destacados",
    color:
      "voca-button bg-voca-blue hover:bg-voca-dark-blue text-voca-cream border-none shadow-sm",
    link: "https://www.youtube.com/@vocapodcast",
  },
  {
    name: "Spotify",
    icon: () => (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.84-.179-.84-.6 0-.359.24-.66.54-.78 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.242 1.021zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" />
      </svg>
    ),
    description: "Audio de todos los episodios",
    color:
      "voca-button bg-voca-blue hover:bg-voca-dark-blue text-voca-cream border-none shadow-sm",
    link: "https://open.spotify.com/show/4wgIOoUl8EeehNx9UhOeC1",
  },
  {
    name: "TikTok",
    icon: Smartphone,
    description: "Clips cortos y destacados",
    color:
      "voca-button bg-voca-blue hover:bg-voca-dark-blue text-voca-cream border-none shadow-sm",
    link: "https://tiktok.com/@_vocaciónpodcast",
  },
  {
    name: "Instagram",
    icon: Instagram,
    description: "Contenido visual y stories",
    color:
      "voca-button bg-voca-blue hover:bg-voca-dark-blue text-voca-cream border-none shadow-sm",
    link: "https://instagram.com/voca.podcast",
  },
]

export function WhereToWatchSection() {
  return (
    <section className="py-20 bg-white dark:bg-voca-blue overflow-hidden">
      <div className="container">
        <ScrollReveal direction="up" className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-voca-dark-blue dark:text-white">
            Dónde ver Voca Podcast
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Encuentra nuestros episodios en tu plataforma favorita
          </p>
        </ScrollReveal>

        <ScrollRevealGroup
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          stagger={0.1}
        >
          {platforms.map((platform, index) => (
            <ScrollReveal key={index} direction="up" distance={20} className="group text-center h-full voca-hover-lift">
              <div className="voca-card p-6 h-full flex flex-col justify-between">
                <div className="space-y-4 flex-1">
                  <div className="w-16 h-16 mx-auto bg-gray-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {typeof platform.icon === "function" ? (
                      <div className="text-gray-600 dark:text-gray-400">
                        <platform.icon />
                      </div>
                    ) : (
                      <platform.icon className="w-8 h-8 text-gray-600 dark:text-gray-400" />
                    )}
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-montserrat font-semibold text-lg text-voca-dark-blue dark:text-white">
                      {platform.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 min-h-[2.5rem] flex items-center justify-center">
                      {platform.description}
                    </p>
                  </div>
                </div>
                <div className="mt-6">
                  <Button className={`w-full ${platform.color}`} onClick={() => window.open(platform.link, "_blank")}>
                    Escuchar ahora
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </ScrollRevealGroup>
      </div>
    </section>
  )
}
