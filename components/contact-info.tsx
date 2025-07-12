import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Clock, Youtube, Instagram } from "lucide-react"

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <Card className="border-0 shadow-lg">
        <CardContent className="p-6 space-y-6">
          <div className="space-y-4">
            <h3 className="font-montserrat font-semibold text-lg text-voca-blue dark:text-voca-cream">
              Información de contacto
            </h3>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-voca-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-voca-blue" />
                </div>
                <div className="space-y-1">
                  <p className="font-medium text-sm">Email</p>
                  <a href="mailto:maximosarmiento2004@gmail.com" className="text-voca-blue hover:underline">
                    maximosarmiento2004@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-voca-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-voca-blue" />
                </div>
                <div className="space-y-1">
                  <p className="font-medium text-sm">Horario de respuesta</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Lunes a Viernes
                    <br />
                    9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-voca-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-voca-blue" />
                </div>
                <div className="space-y-1">
                  <p className="font-medium text-sm">Ubicación</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Buenos Aires, Argentina</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-0 shadow-lg">
        <CardContent className="p-6">
          <div className="space-y-4">
            <h3 className="font-montserrat font-semibold text-lg text-voca-blue dark:text-voca-cream">
              Síguenos en redes
            </h3>

            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://www.youtube.com/@vocapodcast"
                className="flex items-center space-x-3 p-3 rounded-lg border hover:border-voca-blue/50 hover:bg-voca-blue/5 transition-colors"
              >
                <Youtube className="w-5 h-5 text-red-500" />
                <span className="text-sm font-medium">YouTube</span>
              </a>

              <a
                href="https://instagram.com/voca.podcast"
                className="flex items-center space-x-3 p-3 rounded-lg border hover:border-voca-blue/50 hover:bg-voca-blue/5 transition-colors"
              >
                <Instagram className="w-5 h-5 text-pink-500" />
                <span className="text-sm font-medium">@voca.podcast</span>
              </a>

              <a
                href="https://tiktok.com/@_vocaciónpodcast"
                className="flex items-center space-x-3 p-3 rounded-lg border hover:border-voca-blue/50 hover:bg-voca-blue/5 transition-colors"
              >
                <svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
                <span className="text-sm font-medium">@_vocaciónpodcast</span>
              </a>

              <a
                href="mailto:maximosarmiento2004@gmail.com"
                className="flex items-center space-x-3 p-3 rounded-lg border hover:border-voca-blue/50 hover:bg-voca-blue/5 transition-colors"
              >
                <Mail className="w-5 h-5 text-voca-blue" />
                <span className="text-sm font-medium">Email</span>
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
