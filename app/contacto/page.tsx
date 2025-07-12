import { ContactForm } from "@/components/contact-form"
import { ContactSocial } from "@/components/contact-social"
import { ContactHero } from "@/components/contact-hero"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "¿Tienes una historia que contar? Contáctanos para proponer una entrevista, colaboraciones o cualquier consulta sobre Voca Podcast.",
  openGraph: {
    title: "Contacto - Voca Podcast",
    description:
      "¿Tienes una historia que contar? Contáctanos para proponer una entrevista, colaboraciones o cualquier consulta.",
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
            url: "https://vocapodcast.com/contacto",
            mainEntity: {
              "@type": "Organization",
              name: "Voca Podcast",
              email: "maximosarmiento2004@gmail.com",
              sameAs: ["https://www.youtube.com/@vocapodcast", "https://instagram.com/voca.podcast"],
            },
          }),
        }}
      />
      <div className="min-h-screen">
        <ContactHero />
        <div className="bg-voca-light-gray dark:bg-voca-blue">
          <div className="container py-12 md:py-20">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
                <div className="lg:col-span-2 order-2 lg:order-1">
                  <ContactForm />
                </div>
                <div className="lg:col-span-1 order-1 lg:order-2">
                  <ContactSocial />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
