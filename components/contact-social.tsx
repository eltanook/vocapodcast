import { Card, CardContent } from "@/components/ui/card"
import { Youtube, Instagram } from "lucide-react"

export function ContactSocial() {
  return (
    <div className="h-full">
      <Card className="border-0 shadow-lg bg-white dark:bg-voca-medium-blue h-full">
        <CardContent className="p-6 space-y-4 h-full flex flex-col">
          <div className="space-y-4 flex-1">
            <h3 className="font-montserrat font-semibold text-lg text-voca-blue dark:text-voca-cream mb-6">
              Síguenos en redes
            </h3>

            <a
              href="https://www.youtube.com/@vocapodcast"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 p-4 rounded-lg border border-voca-blue/20 dark:border-voca-cream/20 hover:border-voca-blue/50 dark:hover:border-voca-cream/50 hover:bg-voca-blue/5 dark:hover:bg-voca-cream/5 transition-colors group"
            >
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Youtube className="w-6 h-6 text-white" />
              </div>
              <div className="min-w-0">
                <h4 className="font-semibold text-voca-blue dark:text-voca-cream">YouTube</h4>
                <p className="text-sm text-voca-blue/70 dark:text-voca-cream/70 truncate">@vocapodcast</p>
              </div>
            </a>

            <a
              href="https://open.spotify.com/show/4wgIOoUl8EeehNx9UhOeC1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 p-4 rounded-lg border border-voca-blue/20 dark:border-voca-cream/20 hover:border-voca-blue/50 dark:hover:border-voca-cream/50 hover:bg-voca-blue/5 dark:hover:bg-voca-cream/5 transition-colors group"
            >
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.84-.179-.84-.6 0-.359.24-.66.54-.78 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.242 1.021zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" />
                </svg>
              </div>
              <div className="min-w-0">
                <h4 className="font-semibold text-voca-blue dark:text-voca-cream">Spotify</h4>
                <p className="text-sm text-voca-blue/70 dark:text-voca-cream/70 truncate">Voca Podcast</p>
              </div>
            </a>

            <a
              href="https://instagram.com/voca.podcast"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 p-4 rounded-lg border border-voca-blue/20 dark:border-voca-cream/20 hover:border-voca-blue/50 dark:hover:border-voca-cream/50 hover:bg-voca-blue/5 dark:hover:bg-voca-cream/5 transition-colors group"
            >
              <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Instagram className="w-6 h-6 text-white" />
              </div>
              <div className="min-w-0">
                <h4 className="font-semibold text-voca-blue dark:text-voca-cream">Instagram Podcast</h4>
                <p className="text-sm text-voca-blue/70 dark:text-voca-cream/70 truncate">@voca.podcast</p>
              </div>
            </a>

            <a
              href="https://tiktok.com/@_vocaciónpodcast"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 p-4 rounded-lg border border-voca-blue/20 dark:border-voca-cream/20 hover:border-voca-blue/50 dark:hover:border-voca-cream/50 hover:bg-voca-blue/5 dark:hover:bg-voca-cream/5 transition-colors group"
            >
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </div>
              <div className="min-w-0">
                <h4 className="font-semibold text-voca-blue dark:text-voca-cream">TikTok</h4>
                <p className="text-sm text-voca-blue/70 dark:text-voca-cream/70 truncate">@_vocaciónpodcast</p>
              </div>
            </a>

            <a
              href="https://instagram.com/maximosarmiento04"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 p-4 rounded-lg border border-voca-blue/20 dark:border-voca-cream/20 hover:border-voca-blue/50 dark:hover:border-voca-cream/50 hover:bg-voca-blue/5 dark:hover:bg-voca-cream/5 transition-colors group"
            >
              <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Instagram className="w-6 h-6 text-white" />
              </div>
              <div className="min-w-0">
                <h4 className="font-semibold text-voca-blue dark:text-voca-cream">Instagram Personal</h4>
                <p className="text-sm text-voca-blue/70 dark:text-voca-cream/70 truncate">@maximosarmiento04</p>
              </div>
            </a>
          </div>

          <div className="mt-auto pt-6 border-t border-voca-blue/10 dark:border-voca-cream/10">
            <div className="text-center">
              <p className="text-sm text-voca-blue/70 dark:text-voca-cream/70 mb-2">¿Tienes una historia que contar?</p>
              <p className="text-xs text-voca-blue/60 dark:text-voca-cream/60">maximosarmiento2004@gmail.com</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
