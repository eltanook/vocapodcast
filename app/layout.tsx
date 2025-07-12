import type React from "react"
import type { Metadata } from "next"
import { Inter, Montserrat } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: {
    default: "Voca Podcast - Detrás de cada vocación, hay una historia",
    template: "%s | Voca Podcast",
  },
  description:
    "Un espacio de historias y aprendizajes con personajes que inspiran. Exploramos las vocaciones reales que construyen el mundo. Entrevistas profundas sobre profesiones, oficios y caminos de vida.",
  keywords: [
    "voca podcast",
    "vocapodcast",
    "voca",
    "podcast vocacion",
    "podcast vocación",
    "vocacion podcast",
    "vocación podcast",
    "podcast argentina",
    "entrevistas vocacion",
    "entrevistas vocación",
    "historias vocacion",
    "historias vocación",
    "profesiones podcast",
    "oficios podcast",
    "inspiración podcast",
    "YouTube podcast",
    "Spotify podcast",
    "carreras profesionales",
    "trabajo vocacion",
    "vida profesional",
    "máximo sarmiento",
    "maximo sarmiento",
    "maximiliano sarmiento",
    "voca cast",
    "vocacast",
    "voka podcast",
    "boca podcast",
    "podcast voca",
    "entrevistas trabajo",
    "historias trabajo",
    "podcast emprendimiento",
    "podcast educación",
    "podcast salud",
    "podcast arte",
    "podcast deporte",
    "podcast tecnología",
    "podcast ciencia",
  ],
  authors: [{ name: "Voca Podcast" }, { name: "Máximo Sarmiento" }],
  creator: "Máximo Sarmiento",
  publisher: "Voca Podcast",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://vocapodcast.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://vocapodcast.com",
    title: "Voca Podcast - Detrás de cada vocación, hay una historia",
    description:
      "Un espacio de historias y aprendizajes con personajes que inspiran. Exploramos las vocaciones reales que construyen el mundo.",
    siteName: "Voca Podcast",
    images: [
      {
        url: "/favicon.png",
        width: 1200,
        height: 630,
        alt: "Voca Podcast",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Voca Podcast - Detrás de cada vocación, hay una historia",
    description:
      "Un espacio de historias y aprendizajes con personajes que inspiran. Exploramos las vocaciones reales que construyen el mundo.",
    images: ["/favicon.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/favicon.png" sizes="16x16" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" sizes="180x180" />
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="canonical" href="https://vocapodcast.com" />
        <meta name="theme-color" content="#1f3b4d" />
        <meta name="msapplication-TileColor" content="#1f3b4d" />
        <meta name="msapplication-TileImage" content="/favicon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Voca Podcast",
              alternateName: ["VocaPodcast", "Voca", "Podcast Vocación", "Vocación Podcast"],
              description:
                "Un espacio de historias y aprendizajes con personajes que inspiran. Exploramos las vocaciones reales que construyen el mundo.",
              url: "https://vocapodcast.com",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://vocapodcast.com/entrevistas?search={search_term_string}",
                "query-input": "required name=search_term_string",
              },
              publisher: {
                "@type": "Organization",
                name: "Voca Podcast",
                alternateName: ["VocaPodcast", "Voca"],
                logo: {
                  "@type": "ImageObject",
                  url: "https://vocapodcast.com/favicon.png",
                },
                founder: {
                  "@type": "Person",
                  name: "Máximo Sarmiento",
                  alternateName: ["Maximo Sarmiento", "Maximiliano Sarmiento"],
                  sameAs: [
                    "https://instagram.com/maximosarmiento04",
                    "https://www.linkedin.com/in/m%C3%A1ximo-sarmiento-73a5a7276/",
                  ],
                },
                sameAs: [
                  "https://www.youtube.com/@vocapodcast",
                  "https://open.spotify.com/show/4wgIOoUl8EeehNx9UhOeC1",
                  "https://instagram.com/voca.podcast",
                  "https://tiktok.com/@_vocaciónpodcast",
                ],
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${montserrat.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
