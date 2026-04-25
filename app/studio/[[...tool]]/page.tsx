'use client'

import { NextStudio } from 'next-sanity/studio'
import config from '../../../sanity.config'
import { projectId } from '../../../sanity/env'

export default function StudioPage() {
  if (projectId === 'abcdefgh' || projectId === 'TU_PROJECT_ID_AQUI') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', fontFamily: 'sans-serif', backgroundColor: '#f3f4f6', color: '#1f2937' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem', fontWeight: 'bold' }}>Panel de Sanity no configurado</h1>
        <p style={{ fontSize: '1.2rem', textAlign: 'center', maxWidth: '600px' }}>
          Para ver el panel de administración, debes crear tu proyecto en Sanity y añadir tu <strong>NEXT_PUBLIC_SANITY_PROJECT_ID</strong> en el archivo <code>.env.local</code>.
        </p>
      </div>
    )
  }

  return <NextStudio config={config} />
}
