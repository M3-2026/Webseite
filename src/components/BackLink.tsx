import { Link, useRouter } from '@tanstack/react-router'
import { useUi } from '../copy'

type Props = {
  fallback?: string
  label?: string
  home?: boolean
}

export function BackLink({ fallback = '/', label, home = true }: Props) {
  const t = useUi()
  const router = useRouter()
  const text = label ?? t.back

  return (
    <p className="back-link">
      <button
        type="button"
        className="back-link-btn"
        onClick={() => {
          if (typeof window !== 'undefined' && window.history.length > 1) {
            router.history.back()
            return
          }
          router.navigate({ to: fallback })
        }}
      >
        ← {text}
      </button>
      {home ? (
        <Link className="back-link-home" to={fallback}>
          {t.backHome}
        </Link>
      ) : null}
    </p>
  )
}
