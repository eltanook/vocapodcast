import { createClient } from 'next-sanity'
import * as dotenv from 'dotenv'
import fs from 'fs'
import path from 'path'

dotenv.config({ path: '.env.local' })

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const apiVersion = '2024-04-25'
const token = process.env.SANITY_API_WRITE_TOKEN

if (!projectId || !token) {
  console.error('❌ Error: NEXT_PUBLIC_SANITY_PROJECT_ID o SANITY_API_WRITE_TOKEN no definidos.')
  process.exit(1)
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token,
})

const images = [
  'blog_image_1_1777147745642.png',
  'blog_image_2_1777147759218.png',
  'blog_image_3_1777147771126.png',
  'blog_image_4_1777147788316.png',
  'blog_image_5_1777147801965.png',
  'blog_image_6_1777147814805.png',
  'blog_image_7_1777147828500.png',
  'blog_image_8_1777147843106.png',
]

const baseDir = 'C:\\Users\\tomas\\.gemini\\antigravity\\brain\\c2bef327-5aef-4517-a8ad-ac3285872002\\'

const postData = [
  {
    title: 'El arte de escuchar en la era digital',
    category: 'Reflexiones',
    excerpt: '¿Cómo ha cambiado nuestra forma de conectarnos a través de la voz? Analizamos el impacto de los podcasts en la comunicación moderna.',
    readTime: 5,
  },
  {
    title: 'Encontrando tu vocación en un mundo cambiante',
    category: 'Inspiración',
    excerpt: 'Guía práctica para identificar aquello que te apasiona y cómo convertirlo en tu carrera profesional.',
    readTime: 8,
  },
  {
    title: 'Detrás de escena: Cómo grabamos Voca Podcast',
    category: 'Entrevistas',
    excerpt: 'Te contamos los secretos técnicos y emocionales que ocurren cuando los micrófonos están apagados.',
    readTime: 6,
  },
  {
    title: 'La importancia de la mentoría en el desarrollo profesional',
    category: 'Inspiración',
    excerpt: 'Por qué contar con un guía puede acelerar tu crecimiento y ayudarte a evitar errores comunes.',
    readTime: 4,
  },
  {
    title: 'Salud mental y trabajo: El equilibrio necesario',
    category: 'Reflexiones',
    excerpt: 'Cómo mantener el bienestar mientras persigues tus metas profesionales más ambiciosas.',
    readTime: 7,
  },
  {
    title: 'Historias que viajan: El impacto de los relatos personales',
    category: 'Noticias',
    excerpt: 'Un recorrido por los testimonios que más nos han conmovido en la última temporada del podcast.',
    readTime: 5,
  },
  {
    title: 'El futuro de las profesiones tradicionales',
    category: 'Noticias',
    excerpt: '¿Cómo se están adaptando los oficios de siempre a las nuevas tecnologías y demandas del mercado?',
    readTime: 10,
  },
  {
    title: 'Creatividad sin límites: Rompiendo barreras mentales',
    category: 'Inspiración',
    excerpt: 'Ejercicios y reflexiones para desbloquear tu potencial creativo en cualquier ámbito de la vida.',
    readTime: 6,
  },
]

async function seedBlog() {
  console.log('🌱 Iniciando la creación de artículos del blog...')

  for (let i = 0; i < postData.length; i++) {
    const data = postData[i]
    const imageName = images[i]
    const imagePath = path.join(baseDir, imageName)

    try {
      if (!fs.existsSync(imagePath)) {
        console.error(`❌ No se encontró la imagen: ${imagePath}`)
        continue
      }

      console.log(`📤 Subiendo imagen para: "${data.title}"...`)
      const buffer = fs.readFileSync(imagePath)
      const asset = await client.assets.upload('image', buffer, {
        filename: imageName,
        contentType: 'image/png',
      })

      const slug = data.title
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '')

      const doc = {
        _type: 'post',
        title: data.title,
        slug: {
          _type: 'slug',
          current: slug,
        },
        mainImage: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: asset._id,
          },
          alt: data.title,
        },
        category: data.category,
        publishedAt: new Date().toISOString(),
        readTime: data.readTime,
        excerpt: data.excerpt,
        featured: i < 2, // Los dos primeros son featured
        body: [
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: `Este es un artículo generado automáticamente sobre ${data.title.toLowerCase()}. `,
              },
            ],
            markDefs: [],
            style: 'normal',
          },
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: 'En Voca Podcast creemos que cada historia merece ser contada con profundidad y respeto. El camino hacia la realización personal no es una línea recta, sino un viaje lleno de descubrimientos.',
              },
            ],
            markDefs: [],
            style: 'normal',
          },
        ],
      }

      await client.create(doc)
      console.log(`✅ Artículo creado: "${data.title}" (Featured: ${doc.featured})`)
    } catch (error) {
      console.error(`❌ Error en "${data.title}":`, error)
    }
  }

  console.log('✨ Proceso de siembra del blog completado.')
}

seedBlog()
