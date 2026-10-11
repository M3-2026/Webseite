import { useEffect, type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { useLocale } from '../locale'

export function Home() {
  const { lang } = useLocale()
  const isEn = lang === 'en'

  useEffect(() => {
    document.body.classList.add('page-landing')
    return () => {
      document.body.classList.remove('page-landing')
    }
  }, [])

  return (
    <main className="bento-page bento-page--landing">
      <div className="wrap wrap--landing">
        {/* Bento Grid Master Universe */}
        <h1 className="sr-only">{isEn ? 'Performance through Health' : 'Leistung durch Gesundheit'}</h1>
        <section className="bento-grid bento-grid--landing" aria-label="M³ Performance System Bento Grid">

          {/* PILLAR M¹: FOOD */}
          <Link
            to="/metabolism"
            className="bento-card bento-card--pillar bento-card--m1 bento-span-4"
            style={{ '--pillar-color': '#e8a14a' } as CSSProperties}
            aria-label="Pillar M1 Food Metabolism"
          >
            <picture className="bento-bg">
              <source
                type="image/webp"
                srcSet="/images/moodboard/mood-kitchen@2x.webp 2x, /images/moodboard/mood-kitchen.webp 1x"
              />
              <source
                srcSet="/images/moodboard/mood-kitchen@2x.jpg 2x, /images/moodboard/mood-kitchen.jpg 1x"
              />
              <img
                src="/images/moodboard/mood-kitchen@2x.jpg"
                alt="M1 Food Metabolismus & Zellenergie"
                loading="lazy"
                decoding="async"
                className="bento-bg-img"
              />
            </picture>
            <div className="bento-overlay" />
            <div className="bento-content">
              <span className="bento-pillar-badge" style={{ borderColor: 'rgba(232, 161, 74, 0.45)', color: '#e8a14a' }}>
                SÄULE M¹
              </span>
              <h2 className="bento-pillar-head">Food.</h2>
              <p className="bento-pillar-sub">
                {isEn ? 'Metabolism & Cellular Energy' : 'Metabolismus & Zellenergie'}
              </p>
              <div className="bento-arrow-btn">
                <span>{isEn ? 'Explore Food (M¹) →' : 'Säule Food entdecken →'}</span>
              </div>
            </div>
          </Link>

          {/* 3. PILLAR M²: MOVE (Span 4 - The Second Column) */}
          <Link
            to="/biomechanics"
            className="bento-card bento-card--pillar bento-card--m2 bento-span-4"
            style={{ '--pillar-color': '#2f9a72' } as CSSProperties}
            aria-label="Pillar M2 Move Biomechanics"
          >
            <picture className="bento-bg">
              <source
                type="image/webp"
                srcSet="/images/michel-work-training.webp"
              />
              <source
                srcSet="/images/michel-work-training.jpg"
              />
              <img
                src="/images/michel-work-training.jpg"
                alt="M2 Move Biomechanik & Schmerzfreiheit"
                loading="lazy"
                decoding="async"
                className="bento-bg-img"
              />
            </picture>
            <div className="bento-overlay" />
            <div className="bento-content">
              <span className="bento-pillar-badge" style={{ borderColor: 'rgba(47, 154, 114, 0.45)', color: '#2f9a72' }}>
                SÄULE M²
              </span>
              <h2 className="bento-pillar-head">Move.</h2>
              <p className="bento-pillar-sub">
                {isEn ? 'Biomechanics & Pain Freedom' : 'Biomechanik & Schmerzfreiheit'}
              </p>
              <div className="bento-arrow-btn">
                <span>{isEn ? 'Explore Move (M²) →' : 'Säule Move entdecken →'}</span>
              </div>
            </div>
          </Link>

          {/* 4. PILLAR M³: REPEAT (Span 4 - The Third Column) */}
          <Link
            to="/mental"
            className="bento-card bento-card--pillar bento-card--m3 bento-span-4"
            style={{ '--pillar-color': '#4f6fd6' } as CSSProperties}
            aria-label="Pillar M3 Repeat Mindset"
          >
            <picture className="bento-bg">
              <source
                type="image/webp"
                srcSet="/images/moodboard/mood-focus@2x.webp 2x, /images/moodboard/mood-focus.webp 1x"
              />
              <source
                srcSet="/images/moodboard/mood-focus@2x.jpg 2x, /images/moodboard/mood-focus.jpg 1x"
              />
              <img
                src="/images/moodboard/mood-focus@2x.jpg"
                alt="M3 Repeat Mindset Fokus & neuronale Klarheit"
                loading="lazy"
                decoding="async"
                className="bento-bg-img"
              />
            </picture>
            <div className="bento-overlay" />
            <div className="bento-content">
              <span className="bento-pillar-badge" style={{ borderColor: 'rgba(79, 111, 214, 0.45)', color: '#4f6fd6' }}>
                SÄULE M³
              </span>
              <h2 className="bento-pillar-head">Repeat.</h2>
              <p className="bento-pillar-sub">
                {isEn ? 'Mindset & Neural Clarity' : 'Mindset & neuronale Klarheit'}
              </p>
              <div className="bento-arrow-btn">
                <span>{isEn ? 'Explore Repeat (M³) →' : 'Säule Repeat entdecken →'}</span>
              </div>
            </div>
          </Link>

        </section>
      </div>
    </main>
  )
}
