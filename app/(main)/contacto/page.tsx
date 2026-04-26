import { ContactForm } from "@/components/contact-form"
import { ContactSocial } from "@/components/contact-social"
import { ContactHero } from "@/components/contact-hero"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contáctanos para proponer una entrevista, colaboraciones o cualquier consulta sobre Voca Podcast.",
  openGraph: {
    title: "Contacto - Voca Podcast",
    description:
      "Contáctanos para proponer una entrevista, colaboraciones o cualquier consulta.",
  },
}

export default function ContactoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contacto - Voca Podcast",
            description: "Página de contacto de Voca Podcast para propuestas de entrevistas y consultas generales.",
            url: "https://vocapodcast.online/contacto",
            mainEntity: {
              "@type": "Organization",
              name: "Voca Podcast",
              email: "maximosarmiento2004@gmail.com",
              sameAs: ["https://www.youtube.com/@vocapodcast", "https://instagram.com/voca.podcast"],
            },
          }),
        }}
      />
      <div className="min-h-screen flex flex-col">
        <ContactHero />
        
        <div className="bg-voca-light-gray dark:bg-voca-blue flex-grow">
          <div className="container py-12 md:py-20">
            <div className="max-w-6xl mx-auto space-y-12">
              {/* Form & Social Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
                <div className="lg:col-span-2 order-2 lg:order-1">
                  <ContactForm />
                </div>
                <div className="lg:col-span-1 order-1 lg:order-2">
                  <ContactSocial />
                </div>
              </div>

              {/* Special Story Card */}
              <div className="voca-card p-6 md:p-8 bg-gradient-to-r from-voca-blue to-voca-dark-blue dark:from-voca-dark-blue dark:to-voca-darker-blue border-none overflow-hidden relative group">
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="space-y-2 text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-voca-cream">
                      ¿Tienes una historia que contar?
                    </h2>
                    <p className="text-voca-cream/80 max-w-2xl">
                      Nos encantaría conocer tu camino, tus desafíos y lo que te apasiona. 
                      Proponte para una entrevista y sé parte de la comunidad de Voca Podcast.
                    </p>
                  </div>
                  <div className="shrink-0">
                    <a 
                      href="#contact-form"
                      className="inline-block voca-button bg-voca-cream text-voca-blue hover:bg-white px-8 py-3 font-semibold shadow-lg transition-all"
                    >
                      Quiero participar
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section - 100vw, no extra space, light/dark responsive */}
        <section className="w-full h-[400px] relative overflow-hidden">
          <iframe
            title="Ubicación Voca Podcast - Villa Devoto"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13134.405786153!2d-58.5135245!3d-34.601594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb7ce3286082f%3A0xb3538466e3b09224!2sVilla%20Devoto%2C%20CABA%2C%20Argentina!5e0!3m2!1ses!2sar!4v1714168000000!5m2!1ses!2sar"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale-0 dark:grayscale invert-0 dark:invert-[0.9] hue-rotate-0 dark:hue-rotate-[180deg] transition-all duration-500"
          />
          <div className="absolute inset-0 pointer-events-none border-t border-voca-blue/5 dark:border-white/5" />
        </section>
      </div>
    </>
  )
}
