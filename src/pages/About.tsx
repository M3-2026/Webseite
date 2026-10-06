import { useState, useRef, useEffect } from 'react'
import { Link } from '@tanstack/react-router'
import { BackLink } from '../components/BackLink'
import { ValueIcon } from '../components/ValueIcon'
import { useUi } from '../copy'
import { useLocale } from '../locale'
import { useContent } from '../useContent'

export function About() {
  const t = useUi()
  const { lang } = useLocale()
  const isEn = lang === 'en'
  const { about, contact, wa } = useContent()

  const timelineRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeStationIndex, setActiveStationIndex] = useState(0)

  const checkScroll = () => {
    const el = timelineRef.current
    if (!el) return
    const maxScroll = el.scrollWidth - el.clientWidth
    if (maxScroll > 0) {
      const progress = (el.scrollLeft / maxScroll) * 100
      setScrollProgress(Math.min(100, Math.max(0, progress)))
      setCanScrollLeft(el.scrollLeft > 15)
      setCanScrollRight(el.scrollLeft < maxScroll - 15)

      const idx = Math.round((el.scrollLeft / maxScroll) * (about.stations.length - 1))
      setActiveStationIndex(idx)
    } else {
      setScrollProgress(0)
      setCanScrollLeft(false)
      setCanScrollRight(false)
      setActiveStationIndex(0)
    }
  }

  useEffect(() => {
    checkScroll()
    const el = timelineRef.current
    if (el) {
      el.addEventListener('scroll', checkScroll, { passive: true })
      window.addEventListener('resize', checkScroll)
      return () => {
        el.removeEventListener('scroll', checkScroll)
        window.removeEventListener('resize', checkScroll)
      }
    }
  }, [about.stations])

  const scrollTimeline = (direction: 'left' | 'right') => {
    const el = timelineRef.current
    if (el) {
      const cardWidth = el.querySelector('.bento-timeline-card')?.clientWidth || 320
      const scrollAmount = direction === 'left' ? -(cardWidth + 20) : (cardWidth + 20)
      el.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  const scrollToStation = (index: number) => {
    const el = timelineRef.current
    if (el) {
      const cards = el.querySelectorAll('.bento-timeline-card')
      if (cards[index]) {
        (cards[index] as HTMLElement).scrollIntoView({
          behavior: 'smooth',
          inline: 'start',
          block: 'nearest',
        })
      }
    }
  }

  return (
    <main className="bento-page">
      <div className="wrap">
        <div style={{ marginBottom: 14 }}>
          <BackLink fallback="/" home={false} />
        </div>

        {/* Master Bento Grid */}
        <section className="bento-grid" aria-label="Michél Meier About Bento Grid">

          {/* 1. HERO BENTO CARD (Span 8 - Showreel & Story) */}
          <article className="bento-card bento-card--hero bento-span-8">
            <picture className="bento-bg">
              <source
                type="image/webp"
                srcSet="/images/moodboard/mood-freeze.webp 1x, /images/moodboard/mood-freeze@2x.webp 2x"
              />
              <source
                srcSet="/images/moodboard/mood-freeze.jpg 1x, /images/moodboard/mood-freeze.jpg 2x"
              />
              <img
                src="/images/moodboard/mood-freeze.jpg"
                alt="Michél Meier Breakdance World Champion"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="bento-bg-img"
              />
            </picture>
            <div className="bento-overlay" />
            <div className="bento-content bento-content--hero">
              <div className="bento-tag-row" style={{ marginBottom: 8 }}>
                <span className="bento-tag bento-tag--gold">
                  <span className="bento-dot" />
                  {isEn ? 'SHOWREEL & STORY · 30+ YEARS MOVEMENT' : 'SHOWREEL & STORY · 30+ JAHRE BEWEGUNG'}
                </span>
              </div>
              <h1 className="bento-hero-h1">
                MICHÉL MEIER. <span>{about.headline}</span>
              </h1>
              <p className="bento-lead" style={{ maxWidth: '56ch', marginTop: 8, fontSize: 'clamp(13px, 1.3cqi, 14.5px)', lineHeight: 1.5 }}>
                {about.intro}
              </p>
              <div className="bento-cta-row" style={{ marginTop: 16 }}>
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById('about-timeline')
                    if (el) el.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="btn-white"
                  style={{ cursor: 'pointer' }}
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: 6 }}>
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <polyline points="19 12 12 19 5 12" />
                  </svg>
                  {isEn ? 'Explore Timeline ↓' : 'Lebensstationen erkunden ↓'}
                </button>
                <a
                  href={contact.cal}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-white-ghost"
                  data-cal-link="michelmeier/30min"
                >
                  {isEn ? 'Book 30-Min. Slot (Cal.com) →' : '30 Min. Slot buchen (Cal.com) →'}
                </a>
              </div>
            </div>
          </article>

          {/* 2. SUMMARY / BIO CARD (Span 4) - Clean White Card, Black Border & Text */}
          <article className="bento-card bento-card--call-white bento-span-4">
            <div className="bento-content" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span
                  className="bento-audit-badge"
                  style={{
                    background: 'rgba(0, 0, 0, 0.07)',
                    color: '#111111',
                    borderColor: 'rgba(0, 0, 0, 0.14)',
                    marginBottom: 8,
                  }}
                >
                  {isEn ? 'PROFILE & ETHOS' : 'PROFIL & HALTUNG'}
                </span>
                <h2 className="bento-title" style={{ fontSize: 'clamp(18px, 1.8cqi, 22px)', color: '#111111', margin: '4px 0 6px' }}>
                  {isEn ? 'Lived Practice & Ethos' : 'Gelebte Praxis & Haltung'}
                </h2>
                <p className="bento-desc" style={{ fontSize: 13, lineHeight: 1.45, color: '#333333' }}>
                  {about.bio}
                </p>

                <ul className="bento-audit-points" style={{ marginTop: 12, gap: 6 }}>
                  <li>{isEn ? 'IDO World Champion & Breakdance Pioneer' : 'IDO World Champion & Breakdance-Pionier'}</li>
                  <li>{isEn ? 'Overcame C6/C7 disc herniation without surgery' : 'C6/C7 Bandscheibenvorfall ohne OP überwunden'}</li>
                  <li>{isEn ? 'Solo fatherhood in a high-performance routine' : 'Meisterschaft als alleinerziehender Vater im Alltag'}</li>
                  <li>{isEn ? 'Master Personal Trainer (in tr.) & top scores (5/5)' : 'Master Personal Trainer i. A. & Bestnoten (5/5)'}</li>
                </ul>
              </div>

              <div style={{ fontSize: 11.5, fontWeight: 700, color: '#111111', opacity: 0.9, marginTop: 12 }}>
                {isEn ? '→ Autonomy over dependency. Pure practice.' : '→ Autonomie statt Abhängigkeit. Reine Praxis.'}
              </div>
            </div>
          </article>

          {/* 3. LIFE TIMELINE BENTO (Span 12) - Interactive Scrollable Timeline */}
          <article id="about-timeline" className="bento-card bento-card--journal bento-span-12" style={{ padding: 'clamp(22px, 3vw, 36px)' }}>
            <div className="bento-card-header" style={{ marginBottom: 16, display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
                  <span className="timeline-year-tag" style={{ fontSize: 11 }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#e8a14a' }} />
                    {isEn ? '30+ YEARS CHRONOLOGY' : '30+ JAHRE CHRONOLOGIE'}
                  </span>
                </div>
                <h2 className="bento-title" style={{ fontSize: 'clamp(20px, 2.4cqi, 28px)', margin: '4px 0' }}>
                  {isEn ? '30+ Years of Movement & Performance' : '30+ Jahre Bewegung und Performance'}
                </h2>
                <p className="bento-desc" style={{ maxWidth: '68ch', marginTop: 4 }}>
                  {isEn
                    ? 'From early competitive sports and severe injuries to the birth of the M³ Performance System.'
                    : 'Vom frühen Leistungssport über kritische Verletzungen bis zur Geburt des M³ Performance Systems.'}
                </p>
              </div>

              {/* Top Navigation Step Buttons */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <button
                  type="button"
                  onClick={() => scrollTimeline('left')}
                  disabled={!canScrollLeft}
                  className="timeline-nav-btn"
                  aria-label={isEn ? 'Scroll timeline left' : 'Timeline nach links scrollen'}
                  title={isEn ? 'Previous station' : 'Vorherige Station'}
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() => scrollTimeline('right')}
                  disabled={!canScrollRight}
                  className="timeline-nav-btn"
                  aria-label={isEn ? 'Scroll timeline right' : 'Timeline nach rechts scrollen'}
                  title={isEn ? 'Next station' : 'Nächste Station'}
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Quick Era Jump Pills */}
            <div className="timeline-quick-pills" style={{ marginBottom: 14 }}>
              {about.stations.map((s, idx) => (
                <button
                  key={s.years}
                  type="button"
                  onClick={() => scrollToStation(idx)}
                  className="timeline-pill-btn"
                  style={{
                    background: activeStationIndex === idx ? 'rgba(232, 161, 74, 0.2)' : undefined,
                    borderColor: activeStationIndex === idx ? 'rgba(232, 161, 74, 0.6)' : undefined,
                    color: activeStationIndex === idx ? '#e8a14a' : undefined,
                  }}
                >
                  {s.years.split('–')[0].trim()}
                </button>
              ))}
            </div>

            {/* Scrollable Timeline Cards Track */}
            <div ref={timelineRef} className="timeline-scroll-container">
              {about.stations.map((s) => (
                <div key={s.years} className="bento-timeline-card">
                  <div className="timeline-card-header">
                    <span className="timeline-year-tag">
                      <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#e8a14a' }} />
                      {s.years}
                    </span>
                    {s.badge && (
                      <span className="timeline-badge-tag">
                        {s.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="timeline-card-title">
                    {s.title}
                  </h3>

                  <p className="timeline-card-lead">
                    {s.text}
                  </p>

                  {s.points && s.points.length > 0 && (
                    <ul className="timeline-points-list">
                      {s.points.map((pt, pIdx) => (
                        <li key={pIdx} className="timeline-point-item">
                          <span className="timeline-point-bullet">✔</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* Bottom Progress Bar and Controls */}
            <div className="timeline-controls-bar">
              <div className="timeline-progress-track">
                <div className="timeline-progress-fill" style={{ width: `${Math.max(12, scrollProgress)}%` }} />
              </div>
              <span style={{ fontSize: 11, fontFamily: 'var(--font-mono, monospace)', color: 'rgba(255,255,255,0.6)', flexShrink: 0 }}>
                {activeStationIndex + 1} / {about.stations.length} {isEn ? 'Stations' : 'Stationen'}
              </span>
            </div>
          </article>

          {/* 4. CORE VALUES GRID (Span 12) - Highlight color background */}
          <article className="bento-card bento-card--journal bento-span-12" style={{ padding: 'clamp(22px, 3vw, 36px)' }}>
            <div className="bento-card-header" style={{ marginBottom: 20 }}>
              <div>
                <h2 className="bento-title" style={{ fontSize: 'clamp(20px, 2.4cqi, 28px)' }}>
                  {t.aboutValues}
                </h2>
                <p className="bento-desc" style={{ maxWidth: '64ch' }}>
                  {isEn
                    ? 'The non-negotiable principles that guide every single intervention and coaching relationship.'
                    : 'Die unverrückbaren Leitlinien, nach denen Michél jedes Coaching und jede Betreuung führt.'}
                </p>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 14, width: '100%' }}>
              {about.values.map((v) => (
                <div
                  key={v.title}
                  className="bento-compass-card"
                  style={{
                    minHeight: 160,
                    cursor: 'default',
                    pointerEvents: 'none',
                    justifyContent: 'flex-start',
                    background: 'linear-gradient(145deg, rgba(232, 161, 74, 0.16) 0%, rgba(232, 161, 74, 0.06) 100%)',
                    borderColor: 'rgba(232, 161, 74, 0.35)',
                    boxShadow: '0 4px 20px rgba(232, 161, 74, 0.08)',
                  }}
                >
                  <div
                    style={{
                      marginBottom: 10,
                      width: 38,
                      height: 38,
                      borderRadius: 10,
                      background: 'rgba(232, 161, 74, 0.22)',
                      border: '1px solid rgba(232, 161, 74, 0.45)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#e8a14a',
                    }}
                  >
                    <ValueIcon name={v.icon} />
                  </div>
                  <h3 style={{ margin: '0 0 6px', fontSize: 16, fontWeight: 700, color: '#ffffff' }}>
                    {v.title}
                  </h3>
                  <p style={{ margin: 0, fontSize: 13, color: 'rgba(255,255,255,0.85)', lineHeight: 1.45 }}>
                    {v.text}
                  </p>
                </div>
              ))}
            </div>
          </article>

          {/* 5. MASTER BOTTOM CTA BENTO (Span 12) - Work Directly with Michél (Full Photo Visible) */}
          <article className="bento-card bento-card--direct-work bento-span-12">
            <div className="bento-direct-grid">
              <div className="bento-direct-content">
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
                  <span className="timeline-year-tag" style={{ fontSize: 11 }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#e8a14a' }} />
                    {isEn ? 'PERSONAL COACHING' : 'DIREKTE ZUSAMMENARBEIT'}
                  </span>
                </div>
                <h2 className="bento-title" style={{ fontSize: 'clamp(24px, 3.2cqi, 34px)', margin: '6px 0 10px' }}>
                  {isEn ? 'Work Directly with Michél.' : 'Direkt mit Michél arbeiten.'}
                </h2>
                <p className="bento-lead" style={{ fontSize: 14.5, lineHeight: 1.55, color: 'rgba(255,255,255,0.85)', margin: '0 0 20px', maxWidth: '54ch' }}>
                  {isEn
                    ? 'Get your baseline assessed with our 360° check or book your personal 30-min. orientation call directly with Michél.'
                    : 'Starte mit deiner persönlichen 360° Standortbestimmung oder buche direkt ein 30 Min. Orientierungsgespräch mit Michél.'}
                </p>
                <div className="bento-cta-row" style={{ marginTop: 0 }}>
                  <Link to="/system-start" className="btn-white">
                    {t.systemStart}
                  </Link>
                  <a
                    href={contact.cal}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-white-ghost"
                    data-cal-link="michelmeier/30min"
                  >
                    {isEn ? 'Book 30-Min. Slot (Cal.com) →' : '30 Min. Slot buchen (Cal.com) →'}
                  </a>
                </div>
              </div>

              <div className="bento-direct-visual">
                <picture className="bento-direct-picture">
                  <source
                    type="image/webp"
                    srcSet="/images/moodboard/mood-pushup.webp 1x, /images/moodboard/mood-pushup@2x.webp 2x"
                  />
                  <source
                    srcSet="/images/moodboard/mood-pushup.jpg 1x, /images/moodboard/mood-pushup.jpg 2x"
                  />
                  <img
                    src="/images/moodboard/mood-pushup.jpg"
                    alt="Michél Meier Training & Performance"
                    loading="lazy"
                    decoding="async"
                    className="bento-direct-img"
                  />
                </picture>
              </div>
            </div>
          </article>

        </section>
      </div>
    </main>
  )
}
