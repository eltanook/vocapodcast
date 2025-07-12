"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Moon, Sun, ExternalLink } from "lucide-react"
import { useTheme } from "next-themes"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-voca-blue dark:bg-voca-darker-blue backdrop-blur supports-[backdrop-filter]:bg-voca-blue/95 dark:supports-[backdrop-filter]:bg-voca-darker-blue/95">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-3">
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
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors ${
              isActive("/")
                ? "text-voca-cream border-b-2 border-voca-cream pb-1"
                : "text-voca-cream/80 hover:text-voca-cream"
            }`}
          >
            Inicio
          </Link>
          <Link
            href="/entrevistas"
            className={`text-sm font-medium transition-colors ${
              isActive("/entrevistas")
                ? "text-voca-cream border-b-2 border-voca-cream pb-1"
                : "text-voca-cream/80 hover:text-voca-cream"
            }`}
          >
            Entrevistas
          </Link>
          <Link
            href="/contacto"
            className={`text-sm font-medium transition-colors ${
              isActive("/contacto")
                ? "text-voca-cream border-b-2 border-voca-cream pb-1"
                : "text-voca-cream/80 hover:text-voca-cream"
            }`}
          >
            Contacto
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          {/* Mobile menu button - moved to left of other buttons */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-voca-cream"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="text-voca-cream hover:bg-voca-cream/10"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          {/* Hide "Ver Canal" button on mobile */}
          <Button
            className="hidden md:flex bg-voca-cream hover:bg-voca-cream/90 text-voca-blue border-0"
            onClick={() => window.open("https://www.youtube.com/@vocapodcast", "_blank")}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            <span className="hidden sm:inline">Ver Canal</span>
            <span className="sm:hidden">Canal</span>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-voca-cream/20 bg-voca-blue dark:bg-voca-darker-blue">
          <nav className="container py-4 space-y-4">
            <Link
              href="/"
              className={`block text-sm font-medium transition-colors ${
                isActive("/") ? "text-voca-cream font-semibold" : "text-voca-cream/80 hover:text-voca-cream"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link
              href="/entrevistas"
              className={`block text-sm font-medium transition-colors ${
                isActive("/entrevistas") ? "text-voca-cream font-semibold" : "text-voca-cream/80 hover:text-voca-cream"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Entrevistas
            </Link>
            <Link
              href="/contacto"
              className={`block text-sm font-medium transition-colors ${
                isActive("/contacto") ? "text-voca-cream font-semibold" : "text-voca-cream/80 hover:text-voca-cream"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </Link>
            <Button
              className="w-full bg-voca-cream hover:bg-voca-cream/90 text-voca-blue border-0"
              onClick={() => {
                window.open("https://www.youtube.com/@vocapodcast", "_blank")
                setIsMenuOpen(false)
              }}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Ver Canal
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
