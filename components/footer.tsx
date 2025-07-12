import Link from "next/link"
import { Youtube, Instagram, Mail } from "lucide-react"
import Image from "next/image"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-voca-blue dark:bg-voca-dark-gray text-voca-cream">
      <div className="container py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 relative">
                <Image
                  src="/favicon.png"
                  alt="Voca Podcast"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain invert"
                />
              </div>
              <span className="font-montserrat font-bold text-xl text-voca-cream">VOCA PODCAST</span>
            </div>
            <p className="text-voca-cream/80 text-sm leading-relaxed">
              Detrás de cada vocación, hay una historia. Exploramos las vocaciones reales que construyen el mundo.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="font-montserrat font-semibold">Navegación</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-voca-cream/80 hover:text-voca-cream transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/entrevistas" className="text-voca-cream/80 hover:text-voca-cream transition-colors">
                  Entrevistas
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-voca-cream/80 hover:text-voca-cream transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Platforms */}
          <div className="space-y-4">
            <h3 className="font-montserrat font-semibold">Plataformas</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.youtube.com/@vocapodcast"
                  className="text-voca-cream/80 hover:text-voca-cream transition-colors"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a href="#" className="text-voca-cream/80 hover:text-voca-cream transition-colors">
                  Spotify
                </a>
              </li>
              <li>
                <a href="#" className="text-voca-cream/80 hover:text-voca-cream transition-colors">
                  Apple Podcasts
                </a>
              </li>
              <li>
                <a
                  href="https://tiktok.com/@_vocaciónpodcast"
                  className="text-voca-cream/80 hover:text-voca-cream transition-colors"
                >
                  TikTok
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="font-montserrat font-semibold">Síguenos</h3>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.youtube.com/@vocapodcast"
                className="w-10 h-10 bg-voca-gray/20 rounded-full flex items-center justify-center hover:bg-voca-gray transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/voca.podcast"
                className="w-10 h-10 bg-voca-gray/20 rounded-full flex items-center justify-center hover:bg-voca-gray transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://tiktok.com/@_vocaciónpodcast"
                className="w-10 h-10 bg-voca-gray/20 rounded-full flex items-center justify-center hover:bg-voca-gray transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
              <a
                href="mailto:maximosarmiento2004@gmail.com"
                className="w-10 h-10 bg-voca-gray/20 rounded-full flex items-center justify-center hover:bg-voca-gray transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-voca-gray/20 rounded-full flex items-center justify-center hover:bg-voca-gray transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.84-.179-.84-.6 0-.359.24-.66.54-.78 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.242 1.021zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" />
                </svg>
              </a>
            </div>
            <div className="text-sm text-voca-cream/80">
              <p>maximosarmiento2004@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-voca-cream/20 mt-8 pt-8 text-center text-sm text-voca-cream/60 space-y-2">
          <p>&copy; {currentYear} Voca Podcast. Todos los derechos reservados.</p>
          <p>
            Desarrollado y diseñado por{" "}
            <a
              href="https://zevetix.online/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-voca-cream hover:underline"
            >
              Zevetix
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
