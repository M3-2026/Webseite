import { useState, useEffect, useCallback } from 'react'
import { Link } from '@tanstack/react-router'
import { BackLink } from '../components/BackLink'
import { useUi } from '../copy'
import { useLocale } from '../locale'
import { useContent } from '../useContent'

export function MentalPage() {
  const t = useUi()
  const { lang } = useLocale()
  const isEn = lang === 'en'
  const { contact, pillars, repeatManifesto, repeatThemes, wa } = useContent()
  const pillar = pillars.find((p) => p.id === 'm3')!

  // Selected theme for interactive deep-dive modal
  const [selectedThemeId, setSelectedThemeId] = useState<string | null>(null)

  const selectedTheme = selectedThemeId
    ? repeatThemes.find((th) => th.id === selectedThemeId) || null
    : null

  const handleOpenTheme = (id: string) => {
    setSelectedThemeId(id)
  }

  const handleCloseModal = useCallback(() => {
    setSelectedThemeId(null)
  }, [])

  const handlePrevTheme = useCallback(() => {
    if (!selectedThemeId) return
    const currentIndex = repeatThemes.findIndex((th) => th.id === selectedThemeId)
    const prevIndex = (currentIndex - 1 + repeatThemes.length) % repeatThemes.length
    setSelectedThemeId(repeatThemes[prevIndex].id)
  }, [selectedThemeId, repeatThemes])

  const handleNextTheme = useCallback(() => {
    if (!selectedThemeId) return
    const currentIndex = repeatThemes.findIndex((th) => th.id === selectedThemeId)
    const nextIndex = (currentIndex + 1) % repeatThemes.length
    setSelectedThemeId(repeatThemes[nextIndex].id)
  }, [selectedThemeId, repeatThemes])

  // Keyboard navigation for modal
  useEffect(() => {
    if (!selectedThemeId) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleCloseModal()
      } else if (e.key === 'ArrowLeft') {
        handlePrevTheme()
      } else if (e.key === 'ArrowRight') {
        handleNextTheme()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedThemeId, handleCloseModal, handlePrevTheme, handleNextTheme])

  return (
    <main className="bento-page">
      <div className="wrap">
        <div style={{ marginBottom: 14 }}>
          <BackLink fallback="/#start" />
        </div>

        {/* Master Bento Grid */}
        <section className="bento-grid" aria-label="M³ REPEAT Bento Grid">

          {/* 1. HERO BENTO CARD (Span 8) */}
          <article className="bento-card bento-card--hero bento-span-8">
            <picture className="bento-bg">
              <source
                type="image/webp"
                srcSet="/images/moodboard/mood-focus.webp 1x, /images/moodboard/mood-focus@2x.webp 2x"
              />
              <source
                srcSet="/images/moodboard/mood-focus.jpg 1x, /images/moodboard/mood-focus@2x.jpg 2x"
              />
              <img
                src="/images/moodboard/mood-focus.jpg"
                alt="M3 REPEAT Mindset & Mentale Klarheit"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="bento-bg-img"
              />
            </picture>
            <div className="bento-overlay" />
            <div className="bento-content bento-content--hero">
              <div className="bento-tag-row">
                <span className="bento-tag bento-tag--azure">
                  <span className="bento-dot bento-dot--azure" />
                  {pillar.mark} · {pillar.name}
                </span>
                <span className="bento-tag">{pillar.label}</span>
              </div>
              <h1 className="bento-hero-h1">
                {pillar.mark} · {pillar.name}. <span>{pillar.title}</span>
              </h1>
              <p className="bento-lead" style={{ fontStyle: 'italic', opacity: 0.95 }}>
                „{pillar.quote}“
              </p>
              <p className="bento-desc" style={{ maxWidth: '54ch', marginTop: 6, fontSize: 14.5 }}>
                {pillar.lead}
              </p>
              <div className="bento-cta-row" style={{ marginTop: 16 }}>
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
          </article>

          {/* 2. SIGNALS AUDIT CARD (Span 4) */}
          <article className="bento-card bento-card--audit-step bento-span-4">
            <div className="bento-audit-head">
              <span className="bento-audit-badge">
                <span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', backgroundColor: pillar.color }} />
                {isEn ? 'MINDSET & DAILY LIFE' : 'MINDSET & ALLTAG'}
              </span>
              <h2 className="bento-title" style={{ fontSize: 'clamp(18px, 1.8cqi, 22px)' }}>
                {pillar.label} · {t.mentalSignalsH}
              </h2>
              <p className="bento-desc">
                {isEn
                  ? 'Why good intentions often collapse in real everyday life:'
                  : 'Woran gute Vorsätze im echten Alltag typischerweise scheitern:'}
              </p>
            </div>
            <ul className="bento-audit-points">
              {pillar.signals.map((sig, idx) => (
                <li key={idx}>
                  <span className="bento-audit-bullet" style={{ color: pillar.color }}>✓</span>
                  <span>{sig}</span>
                </li>
              ))}
            </ul>
            <div className="bento-audit-footer">
              <span style={{ color: pillar.color, fontWeight: 800 }}>→</span>
              <span>{isEn ? 'Sustainable change grows through conscious repetition.' : 'Nachhaltige Veränderung entsteht durch bewusstes Wiederholen.'}</span>
            </div>
          </article>

          {/* 3. M³ LEITGEDANKE & 6 THEMENKACHELN (Span 12) */}
          <article className="bento-card bento-card--mindset bento-span-12" style={{ padding: 'clamp(22px, 3vw, 36px)' }}>
            
            {/* Section Header */}
            <div className="bento-card-header" style={{ marginBottom: 20 }}>
              <div>
                <span className="bento-tag bento-tag--azure" style={{ marginBottom: 8 }}>
                  <span className="bento-dot bento-dot--azure" />
                  {repeatManifesto.eyebrow}
                </span>
                <h2 className="bento-title" style={{ fontSize: 'clamp(22px, 2.6cqi, 30px)' }}>
                  {repeatManifesto.heading}
                </h2>
                <p className="bento-desc" style={{ maxWidth: '68ch' }}>
                  {isEn
                    ? '6 core themes that turn motivation into lasting habits:'
                    : '6 Kernthemen für deine nachhaltige Veränderung:'}
                </p>
              </div>
            </div>

            {/* 6 Interactive Theme Tiles */}
            <div className="bento-repeat-grid-6">
              {repeatThemes.map((theme) => (
                <div
                  key={theme.id}
                  className="bento-repeat-card"
                  role="button"
                  tabIndex={0}
                  onClick={() => handleOpenTheme(theme.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      handleOpenTheme(theme.id)
                    }
                  }}
                  aria-label={`${theme.title} – ${theme.subtitle}`}
                >
                  <div>
                    <div className="bento-repeat-head">
                      <span className="bento-mindset-badge">
                        {theme.badge}
                      </span>
                    </div>
                    <h3 className="bento-repeat-title">
                      {theme.title}
                    </h3>
                    <p className="bento-repeat-subtitle">
                      {theme.subtitle}
                    </p>
                    <p className="bento-repeat-summary">
                      {theme.summary}
                    </p>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 10, borderTop: '1px solid rgba(107, 140, 255, 0.15)' }}>
                    <span className="bento-repeat-more-btn">
                      {isEn ? 'Mehr erfahren' : 'Mehr erfahren'}
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </span>
                    <span style={{ fontSize: 12, fontWeight: 800, color: 'rgba(107, 140, 255, 0.6)' }}>
                      {theme.num}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Compact Central Message Bar below the 6 Theme Tiles */}
            <div
              className="bento-repeat-bottom-strip"
              style={{
                marginTop: 22,
                padding: '14px 20px',
                borderRadius: 14,
                background: 'linear-gradient(135deg, rgba(107, 140, 255, 0.12), rgba(107, 140, 255, 0.03))',
                border: '1px solid rgba(107, 140, 255, 0.22)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                  gap: '8px 16px',
                  fontSize: 'clamp(13.5px, 1.4cqi, 15px)',
                  fontWeight: 700,
                  color: '#ffffff',
                }}
              >
                <span>{isEn ? 'Motivation turns into discipline' : 'Aus Motivation wird Disziplin'}</span>
                <span style={{ color: '#8ea9ff', opacity: 0.6 }}>→</span>
                <span>{isEn ? 'Discipline turns into routine' : 'Aus Disziplin wird Routine'}</span>
                <span style={{ color: '#8ea9ff', opacity: 0.6 }}>→</span>
                <span>{isEn ? 'Routine turns into habit' : 'Aus Routine wird Gewohnheit'}</span>
              </div>
            </div>

            {/* Bottom Bridge Banner */}
            <div
              style={{
                marginTop: 24,
                padding: '18px 24px',
                borderRadius: 16,
                background: 'linear-gradient(135deg, rgba(107, 140, 255, 0.12), rgba(107, 140, 255, 0.03))',
                border: '1px solid rgba(107, 140, 255, 0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: 16,
              }}
            >
              <div>
                <strong style={{ fontSize: 15, color: '#ffffff', display: 'block', marginBottom: 2 }}>
                  {isEn ? 'Start directly via M¹ (Nutrition) or M² (Training):' : 'Starte über deinen Hebel in M¹ (Ernährung) oder M² (Training):'}
                </strong>
                <span style={{ fontSize: 13, color: 'var(--muted)' }}>
                  {isEn
                    ? 'M³ mindset routines and habit principles are automatically embedded from day one.'
                    : 'Die M³ Alltags-Routinen und Gewohnheits-Prinzipien fließen ab Tag 1 nahtlos mit ein.'}
                </span>
              </div>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <Link to="/metabolism" className="btn-white-ghost" style={{ fontSize: 13, padding: '8px 14px' }}>
                  {isEn ? 'Explore M¹ FOOD →' : 'Zu M¹ FOOD →'}
                </Link>
                <Link to="/movement" className="btn-white-ghost" style={{ fontSize: 13, padding: '8px 14px' }}>
                  {isEn ? 'Explore M² MOVE →' : 'Zu M² MOVE →'}
                </Link>
                <Link to="/system-start" className="btn-white" style={{ fontSize: 13, padding: '8px 14px' }}>
                  {t.systemStart}
                </Link>
              </div>
            </div>
          </article>

          {/* 4. MASTER BOTTOM CTA BENTO (Span 12) */}
          <article className="bento-card bento-card--start bento-span-12">
            <picture className="bento-bg">
              <source
                type="image/webp"
                srcSet="/images/moodboard/mood-elevate.webp 1x, /images/moodboard/mood-elevate@2x.webp 2x"
              />
              <source
                srcSet="/images/moodboard/mood-elevate.jpg 1x, /images/moodboard/mood-elevate@2x.jpg 2x"
              />
              <img
                src="/images/moodboard/mood-elevate.jpg"
                alt="Michél Meier Performance Coaching"
                loading="lazy"
                decoding="async"
                className="bento-bg-img"
              />
            </picture>
            <div className="bento-overlay" />
            <div className="bento-content" style={{ maxWidth: 680 }}>
              <div className="bento-tag-row" style={{ marginBottom: 8 }}>
                <span className="bento-tag bento-tag--gold">FOOD · MOVE · REPEAT</span>
              </div>
              <h2 className="bento-title" style={{ fontSize: 'clamp(24px, 3.2cqi, 36px)' }}>
                {isEn ? 'Your Goal. Your Path. Your System.' : 'Dein Ziel. Dein Weg. Dein System.'}
              </h2>
              <p className="bento-lead">
                {t.pillarCtaLead}
              </p>
              <div className="bento-cta-row" style={{ marginTop: 16 }}>
                <a href={wa.talk} target="_blank" rel="noreferrer" className="btn-white">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="btn-icon" style={{ width: 16, height: 16, marginRight: 6 }}>
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" />
                  </svg>
                  {t.ctaTalk}
                </a>
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

        </section>
      </div>

      {/* Interactive Deep-Dive Modal for 6 Themes */}
      {selectedTheme && (
        <div
          className="repeat-modal-backdrop"
          onClick={handleCloseModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="repeat-modal-title"
        >
          <div
            className="repeat-modal-dialog"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="repeat-modal-header">
              <div>
                <span className="bento-mindset-badge" style={{ marginBottom: 4 }}>
                  {selectedTheme.badge}
                </span>
                <h2 id="repeat-modal-title" className="bento-repeat-title" style={{ fontSize: 20, margin: 0 }}>
                  {selectedTheme.num} · {selectedTheme.title}
                </h2>
                <p style={{ margin: '4px 0 0', fontSize: 13.5, fontWeight: 700, color: '#8ea9ff' }}>
                  {selectedTheme.subtitle}
                </p>
              </div>
              <button
                type="button"
                className="repeat-modal-close-btn"
                onClick={handleCloseModal}
                aria-label={isEn ? 'Close dialog' : 'Fenster schließen'}
              >
                ✕
              </button>
            </div>

            {/* Modal Body */}
            <div className="repeat-modal-body">
              
              {/* 1. Leitgedanke */}
              <div className="repeat-modal-section">
                <span className="repeat-modal-label">
                  {isEn ? '1. The Guiding Principle' : '1. Der Leitgedanke'}
                </span>
                <p className="repeat-modal-text">
                  {selectedTheme.detail.lead}
                </p>
                <p className="repeat-modal-text" style={{ color: 'var(--muted)', marginTop: 4 }}>
                  {selectedTheme.detail.concept}
                </p>
              </div>

              {/* 2. Der Aha-Moment */}
              <div className="repeat-modal-callout">
                <span className="repeat-modal-label" style={{ color: '#ffffff', marginBottom: 4, display: 'block' }}>
                  💡 {isEn ? 'The Aha Moment' : 'Der Aha-Moment'}
                </span>
                <p style={{ margin: 0, fontSize: 13.5, fontStyle: 'italic', color: 'var(--text)', lineHeight: 1.55 }}>
                  „{selectedTheme.detail.ahaMoment}“
                </p>
              </div>

              {/* 3. Praxis im Alltag */}
              <div className="repeat-modal-section">
                <span className="repeat-modal-label">
                  {isEn ? '2. Real-World Application' : '2. Praxis im Alltag'}
                </span>
                <p className="repeat-modal-text">
                  {selectedTheme.detail.practiceExample}
                </p>
              </div>

              {/* 4. 3 Schlüssel-Erkenntnisse */}
              <div className="repeat-modal-section">
                <span className="repeat-modal-label">
                  {isEn ? '3. Key Takeaways' : '3. Drei Schlüssel-Erkenntnisse'}
                </span>
                <ul className="repeat-modal-takeaways">
                  {selectedTheme.detail.keyTakeaways.map((point, idx) => (
                    <li key={idx}>
                      <span className="repeat-modal-bullet">✓</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 5. Reflexionsfrage an dich */}
              <div
                style={{
                  background: 'color-mix(in srgb, var(--bg) 60%, var(--bg-2) 40%)',
                  border: '1px solid rgba(107, 140, 255, 0.22)',
                  borderRadius: 14,
                  padding: 16,
                }}
              >
                <span className="repeat-modal-label" style={{ color: '#e8a14a', display: 'block', marginBottom: 4 }}>
                  🎯 {isEn ? 'Self-Reflection Prompt' : 'Reflexionsfrage an dich'}
                </span>
                <p style={{ margin: 0, fontSize: 13.5, fontWeight: 600, color: 'var(--text)' }}>
                  {selectedTheme.detail.reflectionQuestion}
                </p>
              </div>

            </div>

            {/* Modal Footer with Stepper Cycling */}
            <div className="repeat-modal-footer">
              <div style={{ display: 'flex', gap: 8 }}>
                <button
                  type="button"
                  className="repeat-modal-nav-btn"
                  onClick={handlePrevTheme}
                >
                  ← {isEn ? 'Prev' : 'Zurück'}
                </button>
                <button
                  type="button"
                  className="repeat-modal-nav-btn"
                  onClick={handleNextTheme}
                >
                  {isEn ? 'Next' : 'Weiter'} →
                </button>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ fontSize: 12, color: 'var(--muted)', fontWeight: 600 }}>
                  {selectedTheme.num} / 06
                </span>
                <button
                  type="button"
                  className="btn-white"
                  style={{ fontSize: 12.5, padding: '7px 14px' }}
                  onClick={handleCloseModal}
                >
                  {isEn ? 'Close' : 'Schließen'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
