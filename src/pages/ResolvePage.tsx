import { Navigate, useParams } from 'react-router-dom'
import { modules, pillars } from '../content'
import { MentalPage } from './MentalPage'
import { ModulePage } from './ModulePage'
import { PillarPage } from './PillarPage'

export function ResolvePage() {
  const { slug } = useParams()
  const s = (slug || '').toLowerCase()

  if (s === 'mental-performance' || s === 'mental' || s === 'mindset' || s === 'm3') {
    return <MentalPage />
  }

  if (
    s === 'metabolism' ||
    s === 'stoffwechsel' ||
    s === 'm1' ||
    s === 'movement' ||
    s === 'biomechanics' ||
    s === 'biomechanik' ||
    s === 'm2'
  ) {
    return <PillarPage />
  }

  if (s === 'm1-orientierung' || s === 'm1-mini-reset' || s === 'm1-intensive') {
    return <Navigate to="/metabolism" replace />
  }

  if (s === 'm2-check' || s === 'm2-mobility' || s === 'm2-athlete') {
    return <Navigate to="/movement" replace />
  }

  if (pillars.some((p) => p.slug === s)) return <PillarPage />
  if (modules.some((m) => m.slug === s)) return <ModulePage />
  return <Navigate to="/" replace />
}
