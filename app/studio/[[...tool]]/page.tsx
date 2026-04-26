'use client'

import { NextStudio } from 'next-sanity/studio'
import config from '../../../sanity.config'
import { projectId } from '../../../sanity/env'

export default function StudioPage() {
  if (projectId === 'abcdefgh' || projectId === 'TU_PROJECT_ID_AQUI') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', fontFamily: 'sans-serif', backgroundColor: '#f3f4f6', color: '#1f2937', padding: '20px' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem', fontWeight: 'bold', color: '#dc2626' }}>Panel de Sanity no configurado</h1>
        <p style={{ fontSize: '1.2rem', textAlign: 'center', maxWidth: '600px', lineHeight: '1.6' }}>
          Para ver el panel de administración, debes configurar tu <strong>NEXT_PUBLIC_SANITY_PROJECT_ID</strong> en las variables de entorno de tu hosting (Vercel).
        </p>
        <div style={{ marginTop: '2rem', padding: '1.5rem', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', border: '1px solid #e5e7eb' }}>
          <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.9rem', color: '#6b7280' }}>Project ID detectado:</p>
          <code style={{ fontSize: '1.1rem', color: '#111827', fontWeight: 'mono' }}>{projectId}</code>
        </div>
      </div>
    )
  }

  return <NextStudio config={config} />
}
