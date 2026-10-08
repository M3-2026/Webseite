import { Link } from '@tanstack/react-router'
import { BackLink } from '../components/BackLink'
import { Img } from '../components/Img'
import { useUi } from '../copy'
import { useLocale } from '../locale'
import { byTier } from '../tierSort'
import { useContent } from '../useContent'

export function Catalog() {
  const t = useUi()
  const { lang } = useLocale()
  const isEn = lang === 'en'
  const { contact, modules, pillars } = useContent()

  return (
    <main className="bento-page">
      <div className="wrap">
        <div style={{ marginBottom: 14 }}>
          <BackLink fallback="/" home={false} />
        </div>

        {/* Master Bento Grid */}
        <section className="bento-grid" aria-label="M³ Catalog Bento Grid">

          {/* 1. HERO BENTO CARD (Span 8) */}
          <article className="bento-card bento-card--hero bento-span-8">
            <picture className="bento-bg">
              <source
                type="image/webp"
                srcSet="/images/moodboard/mood-mobility.webp 1x, /images/moodboard/mood-mobility@2x.webp 2x"
              />
              <source
                srcSet="/images/moodboard/mood-mobility.jpg 1x, /images/moodboard/mood-mobility.jpg 2x"
              />
              <img
                src="/images/moodboard/mood-mobility.jpg"
                alt="M3 Modulkatalog"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="bento-bg-img"
              />
            </picture>
            <div className="bento-overlay" />
            <div className="bento-content bento-content--hero">
              <h1 className="bento-hero-h1">
                {t.catalogH}
              </h1>
              <p className="bento-lead">
                {t.catalogLead}
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

          {/* 2. SUMMARY CARD (Span 4) */}
          <article className="bento-card bento-card--audit-step bento-span-4">
            <div>
              <span className="bento-audit-badge">{isEn ? 'SYSTEM TIERS' : 'BAUSTEIN-LOGIK'}</span>
              <h2 className="bento-title" style={{ fontSize: 21 }}>
                {isEn ? 'Modular & Transparent' : 'Modular & Klar gestaffelt'}
              </h2>
              <p className="bento-desc">
                {isEn
                  ? 'From complimentary baseline audits to in-depth 90-day 1:1 master coaching:'
                  : 'Vom kostenlosen Einstiegstest bis zur intensiven 1:1 Begleitung über 90 Tage:'}
              </p>
            </div>

            <ul className="bento-audit-points">
              <li>{isEn ? 'Free Entry & Orientation Checks' : 'Kostenlose Orientierung & Checks'}</li>
              <li>{isEn ? 'Targeted Self-Paced Modules & Guides' : 'Gezielte Module & Leitfäden'}</li>
              <li>{isEn ? 'Comprehensive 90-Day 1:1 High Ticket Trajectories' : '90 Tage 1:1 Intensivbetreuung'}</li>
            </ul>

            <div style={{ fontSize: 12, fontWeight: 700, color: '#ffffff', opacity: 0.85 }}>
              {isEn ? '→ Everything tailored to your bottleneck' : '→ Exakt auf deinen Engpass abgestimmt'}
            </div>
          </article>

          {/* 3. PILLAR BY PILLAR SECTIONS (Span 12 each) */}
          {pillars.map((pillar) => {
            const group = modules.filter((m) => m.pillar === pillar.id).slice().sort(byTier)
            return (
              <article className="bento-card bento-card--journal bento-span-12" key={pillar.id} style={{ padding: 'clamp(22px, 3vw, 36px)' }}>
                <div className="bento-card-header" style={{ marginBottom: 20 }}>
                  <div>
                    <h2 className="bento-title" style={{ fontSize: 'clamp(20px, 2.4cqi, 28px)' }}>
                      <span className="bento-pillar-accent" style={{ color: '#ffffff' }}>{pillar.mark}</span> {pillar.name} · {pillar.title}
                    </h2>
                    <p className="bento-desc" style={{ maxWidth: '64ch' }}>
                      {pillar.lead}
                    </p>
                  </div>
                  <Link to={`/${pillar.slug}`} className="btn-white-ghost" style={{ alignSelf: 'flex-start' }}>
                    {t.openPillarBtn} →
                  </Link>
                </div>

                {pillar.id === 'm3' ? (
                  <div
                    style={{
                      background: 'color-mix(in srgb, var(--bg) 60%, var(--bg-2) 40%)',
                      border: '1px solid var(--line)',
                      borderRadius: 16,
                      padding: '24px clamp(20px, 3vw, 32px)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 14,
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                      <span className="bento-tag bento-tag--gold">
                        {isEn ? 'THE M³ PEDAGOGICAL ROOF' : 'DAS M³ PÄDAGOGISCHE DACH'}
                      </span>
                      <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--muted)' }}>
                        {isEn ? 'Integrated into every coaching journey' : 'Fester Bestandteil jeder Coaching-Begleitung'}
                      </span>
                    </div>
                    <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: 'var(--text)', maxWidth: '70ch' }}>
                      {isEn
                        ? 'M³ REPEAT is not a separate paid module or standalone package. It is the pedagogical and mental foundation of the entire system — turning motivation into discipline, routines, and lifelong self-sovereignty.'
                        : 'M³ REPEAT ist kein separat buchbares oder kostenpflichtiges Angebot, sondern fester Bestandteil der Coaching-Begleitung. Es vermittelt, wie aus Motivation Disziplin, Routine und dauerhafte Gewohnheit wird — für nachhaltige Veränderung im echten Alltag.'}
                    </p>
                    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 4 }}>
                      <Link to="/mental-performance" className="btn-white" style={{ fontSize: 13, padding: '8px 16px' }}>
                        {isEn ? 'Explore M³ REPEAT →' : 'Zu M³ REPEAT →'}
                      </Link>
                    </div>
                  </div>
                ) : group.length > 0 ? (
                  <div className="bento-audience-grid">
                    {group.map((m) => (
                      <Link to={`/${m.slug}`} className="bento-sub-card" key={m.slug} style={{ textDecoration: 'none' }}>
                        <Img className="bento-sub-media" src={m.image} alt={m.title} />
                        <div className="bento-sub-body">
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 6 }}>
                            <h3>{m.title}</h3>
                            {'priceLabel' in m && m.priceLabel && (
                              <span style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.6)' }}>
                                {m.priceLabel}
                              </span>
                            )}
                          </div>
                          <p>{m.kicker}</p>
                          <span style={{ fontSize: 12, fontWeight: 700, color: '#ffffff', marginTop: 4 }}>
                            {t.detailsArrow}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p className="bento-desc">{t.noModules}</p>
                )}
              </article>
            )
          })}

          {/* 4. MASTER BOTTOM CTA BENTO (Span 12) */}
          <article className="bento-card bento-card--start bento-span-12">
            <picture className="bento-bg">
              <source
                type="image/webp"
                srcSet="/images/moodboard/mood-elevate.webp 1x, /images/moodboard/mood-elevate@2x.webp 2x"
              />
              <source
                srcSet="/images/moodboard/mood-elevate.jpg 1x, /images/moodboard/mood-elevate.jpg 2x"
              />
              <img
                src="/images/moodboard/mood-elevate.jpg"
                alt="M3 System Start Standortbestimmung"
                loading="lazy"
                decoding="async"
                className="bento-bg-img"
              />
            </picture>
            <div className="bento-overlay" />
            <div className="bento-content" style={{ maxWidth: 680 }}>
              <h2 className="bento-title" style={{ fontSize: 'clamp(24px, 3.2cqi, 36px)' }}>
                {isEn ? 'Unsure which module fits best?' : 'Unsicher, welcher Baustein passt?'}
              </h2>
              <p className="bento-lead">
                {isEn
                  ? 'Take the 360° System Start assessment or schedule your 20-30 min intro call with Michél.'
                  : 'Starte mit der 360° Standortbestimmung oder sprich direkt mit Michél im kostenlosen Kennenlernen.'}
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

        </section>
      </div>
    </main>
  )
}
