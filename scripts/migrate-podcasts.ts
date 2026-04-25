// scripts/migrate-podcasts.ts
// Script para migrar los podcasts estáticos a Sanity
// Para ejecutarlo: npx tsx scripts/migrate-podcasts.ts

import { createClient } from 'next-sanity'
import { realInterviews } from '../lib/interviews-data'
import * as dotenv from 'dotenv'

// Cargar variables de entorno desde .env.local ANTES de leerlas
dotenv.config({ path: '.env.local' })

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-04-25'
const useCdn = false

// Necesitas un token con permisos de escritura (Editor/Contributor)
const token = process.env.SANITY_API_WRITE_TOKEN

if (!token) {
  console.error('❌ Error: SANITY_API_WRITE_TOKEN no está definido en .env.local')
  process.exit(1)
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
  token,
})

async function migratePodcasts() {
  console.log('Iniciando migración de podcasts a Sanity...')

  let successCount = 0
  let errorCount = 0

  for (const interview of realInterviews) {
    console.log(`Migrando: ${interview.title}...`)
    
    try {
      const doc = {
        _type: 'podcast',
        id: interview.id,
        nombre: interview.nombre,
        rubro: interview.rubro,
        title: interview.title,
        slug: {
          _type: 'slug',
          current: interview.slug,
        },
        description: interview.description,
        duration: interview.duration,
        date: interview.date,
        category: interview.category,
        thumbnail: interview.thumbnail,
        youtubeId: interview.youtubeId,
        youtubeUrl: interview.youtubeUrl,
        spotifyUrl: interview.spotifyUrl || '',
      }

      await client.create(doc)
      console.log(`✅ Éxito: ${interview.title}`)
      successCount++
    } catch (error) {
      console.error(`❌ Error migrando ${interview.title}:`, error)
      errorCount++
    }
  }

  console.log('\n--- Resumen de Migración ---')
  console.log(`Migrados con éxito: ${successCount}`)
  console.log(`Errores: ${errorCount}`)
  console.log('----------------------------')
}

migratePodcasts()
