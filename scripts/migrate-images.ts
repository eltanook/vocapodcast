import { createClient } from 'next-sanity'
import * as dotenv from 'dotenv'
import https from 'https'

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

async function downloadImage(url: string): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`Failed to download image: ${res.statusCode} for URL: ${url}`))
        return
      }
      const chunks: any[] = []
      res.on('data', (chunk) => chunks.push(chunk))
      res.on('end', () => resolve(Buffer.concat(chunks)))
      res.on('error', (err) => reject(err))
    })
  })
}

async function migrateImages() {
  console.log('🚀 Iniciando migración de imágenes de podcast a Sanity assets...')

  try {
    const podcasts = await client.fetch('*[_type == "podcast"]')
    console.log(`📦 Encontrados ${podcasts.length} podcasts en Sanity.`)

    let successCount = 0
    let errorCount = 0
    let skipCount = 0

    for (const podcast of podcasts) {
      const { _id, title, thumbnail } = podcast

      // Verificar si el thumbnail es una URL (string)
      if (typeof thumbnail === 'string' && thumbnail.startsWith('http')) {
        console.log(`⏳ Procesando imagen para: "${title}"...`)
        
        try {
          const buffer = await downloadImage(thumbnail)
          
          console.log(`📤 Subiendo asset para: "${title}"...`)
          const asset = await client.assets.upload('image', buffer, {
            filename: `${podcast.slug?.current || _id}.jpg`,
            contentType: 'image/jpeg',
          })

          console.log(`🔗 Vinculando asset a documento: "${title}"...`)
          await client
            .patch(_id)
            .set({
              thumbnail: {
                _type: 'image',
                asset: {
                  _type: 'reference',
                  _ref: asset._id,
                },
              },
            })
            .commit()

          console.log(`✅ Éxito: "${title}"`)
          successCount++
        } catch (error) {
          console.error(`❌ Error migrando imagen para "${title}":`, error)
          errorCount++
        }
      } else if (thumbnail && typeof thumbnail === 'object' && thumbnail._type === 'image') {
        console.log(`⏭️ Saltando "${title}": Ya tiene un asset de imagen.`)
        skipCount++
      } else {
        console.log(`⏭️ Saltando "${title}": No tiene thumbnail o formato desconocido.`)
        skipCount++
      }
    }

    console.log('\n--- Resumen de Migración de Imágenes ---')
    console.log(`✅ Completadas: ${successCount}`)
    console.log(`⏭️ Saltadas: ${skipCount}`)
    console.log(`❌ Errores: ${errorCount}`)
    console.log('---------------------------------------')

  } catch (error) {
    console.error('💥 Error fatal durante la migración:', error)
  }
}

migrateImages()
