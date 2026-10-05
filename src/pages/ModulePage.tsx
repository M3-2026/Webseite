import { Link, useParams } from '@tanstack/react-router'
import { BackLink } from '../components/BackLink'
import { Img } from '../components/Img'
import { useUi } from '../copy'
import { useLocale } from '../locale'
import { byTier } from '../tierSort'
import { useContent } from '../useContent'

export function ModulePage({ slug: slugProp }: { slug?: string }) {
  const params = useParams({ strict: false }) as { slug?: string }
  const slug = slugProp || params?.slug
  const t = useUi()
  const { lang } = useLocale()
  const isEn = lang === 'en'
  const { contact, modules, pillars, process } = useContent()
  const mod = modules.find((m) => m.slug === slug)
  if (!mod) {
    return (
      <main className="bento-page">
        <div className="wrap">
          <BackLink fallback="/katalog" />
          <p style={{ marginTop: 24 }}>Modul nicht gefunden.</p>
        </div>
      </main>
    )
  }
  const pillar = pillars.find((p) => p.id === mod.pillar)
  const related = modules
    .filter((m) => m.pillar === mod.pillar && m.slug !== mod.slug)
    .slice()
    .sort(byTier)
    .slice(0, 3)
  const fallback = pillar ? `/${pillar.slug}` : '/katalog'

  return (
    <main className="bento-page">
      <div className="wrap">
        <div style={{ marginBottom: 14 }}>
          <BackLink fallback={fallback} />
        </div>

        {/* Master Bento Grid */}
        <section className="bento-grid" aria-label={`${mod.title} Bento Grid`}>

          {/* 1. HERO BENTO CARD (Span 8) */}
          <article className="bento-card bento-card--hero bento-span-8">
            <picture className="bento-bg">
              <source
                type="image/webp"
                srcSet={`${mod.image} 1x, ${mod.image.replace('.webp', '@2x.webp')} 2x`}
              />
              <img
                src={mod.image.replace('.webp', '.jpg')}
                alt={mod.title}
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="bento-bg-img"
              />
            </picture>
            <div className="bento-overlay" />
            <div className="bento-content bento-content--hero">
              <div className="bento-tag-row">
                <span className="bento-tag bento-tag--gold">{mod.badge}</span>
                {pillar && (
                  <span className="bento-tag">{pillar.mark} · {pillar.name}</span>
                )}
                {mod.priceLabel && <span className="bento-tag">{mod.priceLabel}</span>}
              </div>
              <h1 className="bento-hero-h1" style={{ marginTop: 6 }}>
                {mod.title}
              </h1>
              <p className="bento-lead" style={{ marginTop: 6 }}>
                {mod.kicker}
              </p>
              <div className="bento-cta-row" style={{ marginTop: 16 }}>
                <a href={mod.whatsapp} target="_blank" rel="noreferrer" className="btn-white">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="btn-icon" style={{ width: 16, height: 16, marginRight: 6 }}>
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" />
                  </svg>
                  {t.firstTalk}
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

          {/* 2. SUMMARY / AUDIT CARD (Span 4) */}
          <article className="bento-card bento-card--audit-step bento-span-4" style={{ justifyContent: 'space-between', minHeight: 'clamp(440px, 50vh, 540px)' }}>
            <div>
              <span className="bento-audit-badge">{t.forWhom}</span>
              <h2 className="bento-title" style={{ fontSize: 21 }}>
                {t.forWhomH}
              </h2>
              <p className="bento-desc" style={{ marginTop: 8, fontSize: 13, lineHeight: 1.5 }}>
                {mod.forWhom}
              </p>
            </div>

            <div style={{ margin: '14px 0', borderTop: '1px solid rgba(0,0,0,0.08)', paddingTop: 12 }}>
              <span style={{ fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#111111' }}>
                {t.preferStart}
              </span>
              <p style={{ fontSize: 12.5, color: '#333333', marginTop: 4 }}>
                {isEn ? 'Not sure if this module fits? The System Start assesses your status quo.' : 'Unsicher ob dieses Modul passt? Der System Start ordnet dich ein.'}
              </p>
            </div>

            <Link to="/system-start" className="bento-call-btn" style={{ width: '100%', justifyContent: 'center' }}>
              {t.systemStart} →
            </Link>
          </article>

          {/* 3. INCLUSIONS / DETAILS BENTO (Span 12) */}
          <article className="bento-card bento-card--journal bento-span-12" style={{ padding: 'clamp(22px, 3vw, 36px)' }}>
            <div className="bento-card-header" style={{ marginBottom: 20 }}>
              <div>
                <span className="bento-tag bento-tag--gold" style={{ marginBottom: 8 }}>{t.includes}</span>
                <h2 className="bento-title" style={{ fontSize: 'clamp(20px, 2.4cqi, 28px)' }}>
                  {t.includesH}
                </h2>
              </div>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: 16,
                width: '100%',
              }}
            >
              {mod.includes.map((inc, i) => (
                <div
                  key={inc}
                  style={{
                    background: 'color-mix(in srgb, var(--bg) 60%, var(--bg-2) 40%)',
                    border: '1px solid var(--line)',
                    borderRadius: 16,
                    padding: 20,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 8,
                  }}
                >
                  <span style={{ fontSize: 12, fontWeight: 800, color: 'var(--gold)' }}>
                    0{i + 1}
                  </span>
                  <p style={{ margin: 0, fontSize: 14.5, fontWeight: 700, color: 'var(--text)', lineHeight: 1.45 }}>
                    {inc}
                  </p>
                </div>
              ))}
            </div>
          </article>

          {/* 4. PROCESS / WORKFLOW BENTO (Span 12) */}
          <article className="bento-card bento-card--journal bento-span-12" style={{ padding: 'clamp(22px, 3vw, 36px)' }}>
            <div className="bento-card-header" style={{ marginBottom: 20 }}>
              <div>
                <span className="bento-tag bento-tag--gold" style={{ marginBottom: 8 }}>{t.processEyebrow}</span>
                <h2 className="bento-title" style={{ fontSize: 'clamp(20px, 2.4cqi, 28px)' }}>
                  {t.processH}
                </h2>
              </div>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: 16,
                width: '100%',
              }}
            >
              {process.map((step, idx) => (
                <div
                  key={step.step}
                  style={{
                    background: 'color-mix(in srgb, var(--bg) 60%, var(--bg-2) 40%)',
                    border: '1px solid var(--line)',
                    borderRadius: 16,
                    padding: 20,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 6,
                  }}
                >
                  <span style={{ fontSize: 12, fontWeight: 800, color: 'var(--gold)' }}>
                    SCHRITT {step.step}
                  </span>
                  <h3 style={{ margin: 0, fontSize: 16, fontWeight: 800, color: 'var(--text)' }}>
                    {step.title}
                  </h3>
                  <p style={{ margin: 0, fontSize: 13, lineHeight: 1.5, color: 'var(--muted)' }}>
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </article>

          {/* 5. MATCHING SIBLING MODULES (Span 12) */}
          {related.length > 0 && (
            <article className="bento-card bento-card--journal bento-span-12" style={{ padding: 'clamp(22px, 3vw, 36px)' }}>
              <div className="bento-card-header" style={{ marginBottom: 20 }}>
                <div>
                  <span className="bento-tag bento-tag--gold" style={{ marginBottom: 8 }}>{t.related}</span>
                  <h2 className="bento-title" style={{ fontSize: 'clamp(20px, 2.4cqi, 28px)' }}>
                    {isEn ? `Other modules in ${pillar?.name || 'M³'}` : `Weitere Module in ${pillar?.name || 'M³'}`}
                  </h2>
                </div>
                <Link to="/katalog" className="bento-header-link">
                  {t.catalogH} →
                </Link>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: 16,
                  width: '100%',
                }}
              >
                {related.map((item) => (
                  <Link
                    key={item.slug}
                    to={`/${item.slug}`}
                    style={{
                      background: 'color-mix(in srgb, var(--bg) 60%, var(--bg-2) 40%)',
                      border: '1px solid var(--line)',
                      borderRadius: 16,
                      overflow: 'hidden',
                      textDecoration: 'none',
                      color: 'var(--text)',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'border-color 0.2s ease',
                    }}
                  >
                    <div style={{ position: 'relative', width: '100%', height: 160, overflow: 'hidden' }}>
                      <Img
                        src={item.image}
                        alt={item.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                      <span className="journal-feed-badge" style={{ position: 'absolute', top: 10, left: 10 }}>
                        {item.badge}
                      </span>
                    </div>
                    <div style={{ padding: 18, display: 'flex', flexDirection: 'column', gap: 6, flex: 1, justifyContent: 'space-between' }}>
                      <div>
                        <h3 style={{ margin: 0, fontSize: 16, fontWeight: 800 }}>{item.title}</h3>
                        <p style={{ margin: '4px 0 0', fontSize: 13, color: 'var(--muted)', lineHeight: 1.45 }}>{item.kicker}</p>
                      </div>
                      <div style={{ marginTop: 12, paddingTop: 10, borderTop: '1px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <span style={{ fontSize: 12.5, fontWeight: 700, color: 'var(--gold)' }}>{t.detailsView}</span>
                        {item.priceLabel && <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--muted)' }}>{item.priceLabel}</span>}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </article>
          )}

        </section>
      </div>
    </main>
  )
}
