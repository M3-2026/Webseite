import { Link, useParams } from '@tanstack/react-router'
import { BackLink } from '../components/BackLink'
import { Img } from '../components/Img'
import { useUi } from '../copy'
import { useLocale } from '../locale'
import { byTier } from '../tierSort'
import { useContent } from '../useContent'

export function PillarPage({ slug: slugProp }: { slug?: string }) {
  const params = useParams({ strict: false }) as { slug?: string }
  const slug = slugProp || params?.slug
  const t = useUi()
  const { lang } = useLocale()
  const isEn = lang === 'en'
  const { contact, modules, pillars, posts, wa } = useContent()

  const pillarSlugMap: Record<string, string> = {
    metabolism: 'metabolism',
    stoffwechsel: 'metabolism',
    m1: 'metabolism',
    movement: 'movement',
    biomechanics: 'movement',
    biomechanik: 'movement',
    m2: 'movement',
    'mental-performance': 'mental-performance',
    mental: 'mental-performance',
    mindset: 'mental-performance',
    m3: 'mental-performance',
  }
  const s = (slug || '').toLowerCase()
  const resolvedSlug = pillarSlugMap[s] || s
  const pillar = pillars.find((p) => p.slug === resolvedSlug || p.id === resolvedSlug)
  if (!pillar) {
    return (
      <main className="bento-page">
        <div className="wrap">
          <BackLink fallback="/" home={false} />
          <p style={{ marginTop: 24 }}>Säule nicht gefunden.</p>
        </div>
      </main>
    )
  }
  const related = modules
    .filter((m) => m.pillar === pillar.id && m.slug !== 'body-reset')
    .slice()
    .sort(byTier)
  const relatedPosts = pillar.id === 'm1' || pillar.id === 'm2' ? [] : posts.filter((p) => p.pillar === pillar.id)

  const moodMap: Record<string, string> = {
    m1: '/images/moodboard/mood-kitchen',
    m2: '/images/moodboard/mood-limitless',
    m3: '/images/moodboard/mood-focus',
  }
  const heroImageBase = moodMap[pillar.id] || '/images/moodboard/mood-kitchen'

  return (
    <main className="bento-page">
      <div className="wrap">
        <div style={{ marginBottom: 14 }}>
          <BackLink fallback="/" home={false} />
        </div>

        {/* Master Bento Grid */}
        <section className="bento-grid" aria-label={`M³ ${pillar.name} Bento Grid`}>

          {/* 1. HERO BENTO CARD (Span 8) */}
          <article className="bento-card bento-card--hero bento-span-8">
            <picture className="bento-bg">
              <source
                type="image/webp"
                srcSet={`${heroImageBase}.webp 1x, ${heroImageBase}@2x.webp 2x`}
              />
              <img
                src={`${heroImageBase}.jpg`}
                alt={`${pillar.mark} ${pillar.name}`}
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="bento-bg-img"
              />
            </picture>
            <div className="bento-overlay" />
            <div className="bento-content bento-content--hero">
              <div className="bento-tag-row">
                <span className="bento-tag bento-tag--gold">{pillar.mark} · {pillar.name}</span>
                <span className="bento-tag">{pillar.label}</span>
              </div>
              <h1 className="bento-hero-h1" style={{ marginTop: 6 }}>
                {pillar.mark} · {pillar.name}. <span>{pillar.title}</span>
              </h1>
              <p className="bento-lead" style={{ fontStyle: 'italic', marginTop: 6 }}>
                „{pillar.quote}“
              </p>
              <p className="bento-desc" style={{ maxWidth: '54ch', marginTop: 6 }}>
                {pillar.lead}
              </p>
              <div className="bento-cta-row" style={{ marginTop: 16 }}>
                <a href={wa.talk} target="_blank" rel="noreferrer" className="btn-white">
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

          {/* 2. SIGNALS / AUDIT CARD (Span 4) */}
          <article className="bento-card bento-card--audit-step bento-span-4">
            <div className="bento-audit-head">
              <span className="bento-audit-badge">
                <span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', backgroundColor: pillar.color }} />
                {isEn ? 'SIGNALS & ALARMS' : 'ALARMSIGNALE'}
              </span>
              <h2 className="bento-title" style={{ fontSize: 'clamp(18px, 1.8cqi, 22px)' }}>
                {t.signalsH}
              </h2>
              <p className="bento-desc">
                {isEn ? 'If you recognize these symptoms, start with this pillar:' : 'Wenn du diese Symptome spürst, ist diese Säule dein Startpunkt:'}
              </p>
            </div>

            <ul className="bento-audit-points">
              {pillar.signals.map((signal, idx) => (
                <li key={idx}>
                  <span className="bento-audit-bullet" style={{ color: pillar.color }}>✓</span>
                  <span>{signal}</span>
                </li>
              ))}
            </ul>

            <div className="bento-audit-footer">
              <span style={{ color: pillar.color, fontWeight: 800 }}>→</span>
              <span>{isEn ? 'Prioritize root cause over compensation.' : 'Ursache beheben statt kompensieren.'}</span>
            </div>
          </article>

          {/* 3. SCIENTIFIC FOUNDATION BENTO (Span 12) */}
          <article className="bento-card bento-card--journal bento-span-12" style={{ padding: 'clamp(22px, 3vw, 36px)' }}>
            <div className="bento-card-header" style={{ marginBottom: 20 }}>
              <div>
                <span className="bento-tag bento-tag--gold" style={{ marginBottom: 8 }}>{t.scienceEyebrow}</span>
                <h2 className="bento-title" style={{ fontSize: 'clamp(20px, 2.4cqi, 28px)' }}>
                  {t.scienceH}
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
              {pillar.science.map((sc, i) => (
                <div
                  key={sc.title}
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
                  <span style={{ fontSize: 12, fontWeight: 800, color: pillar.color }}>
                    0{i + 1}
                  </span>
                  <h3 style={{ margin: 0, fontSize: 16, fontWeight: 800, color: 'var(--text)' }}>
                    {sc.title}
                  </h3>
                  <p style={{ margin: 0, fontSize: 13, lineHeight: 1.5, color: 'var(--muted)' }}>
                    {sc.text}
                  </p>
                </div>
              ))}
            </div>
          </article>

          {/* 4. OPERATIONAL PRINCIPLES BENTO (Span 12) */}
          <article className="bento-card bento-card--journal bento-span-12" style={{ padding: 'clamp(22px, 3vw, 36px)' }}>
            <div className="bento-card-header" style={{ marginBottom: 20 }}>
              <div>
                <span className="bento-tag bento-tag--gold" style={{ marginBottom: 8 }}>{t.principlesEyebrow}</span>
                <h2 className="bento-title" style={{ fontSize: 'clamp(20px, 2.4cqi, 28px)' }}>
                  {t.principlesH}
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
              {pillar.principles.map((pr, i) => (
                <div
                  key={pr.title}
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
                  <span style={{ fontSize: 12, fontWeight: 800, color: pillar.color }}>
                    REGEL 0{i + 1}
                  </span>
                  <h3 style={{ margin: 0, fontSize: 16, fontWeight: 800, color: 'var(--text)' }}>
                    {pr.title}
                  </h3>
                  <p style={{ margin: 0, fontSize: 13, lineHeight: 1.5, color: 'var(--muted)' }}>
                    {pr.text}
                  </p>
                </div>
              ))}
            </div>
          </article>

          {/* 5. MATCHING MODULES IN THIS PILLAR (Span 12) */}
          <article className="bento-card bento-card--journal bento-span-12" style={{ padding: 'clamp(22px, 3vw, 36px)' }}>
            <div className="bento-card-header" style={{ marginBottom: 20 }}>
              <div>
                <span className="bento-tag bento-tag--gold" style={{ marginBottom: 8 }}>{t.modulesEyebrow}</span>
                <h2 className="bento-title" style={{ fontSize: 'clamp(20px, 2.4cqi, 28px)' }}>
                  {isEn ? `Modules in ${pillar.name}` : `Angebote in Säule ${pillar.mark}`}
                </h2>
              </div>
              <Link to="/katalog" className="bento-header-link">
                {t.catalogH} →
              </Link>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: 14,
                width: '100%',
              }}
            >
              {related.map((mod) => (
                <Link
                  key={mod.slug}
                  to={`/${mod.slug}`}
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
                      src={mod.image}
                      alt={mod.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <span
                      className="journal-feed-badge"
                      style={{ position: 'absolute', top: 10, left: 10 }}
                    >
                      {mod.badge}
                    </span>
                  </div>
                  <div style={{ padding: 18, display: 'flex', flexDirection: 'column', gap: 6, flex: 1, justifyContent: 'space-between' }}>
                    <div>
                      <h3 style={{ margin: 0, fontSize: 16, fontWeight: 800 }}>{mod.title}</h3>
                      <p style={{ margin: '4px 0 0', fontSize: 13, color: 'var(--muted)', lineHeight: 1.45 }}>{mod.kicker}</p>
                    </div>
                    <div style={{ marginTop: 12, paddingTop: 10, borderTop: '1px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: 12.5, fontWeight: 700, color: pillar.color || 'var(--gold)' }}>{t.detailsView} →</span>
                      {mod.priceLabel && <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--muted)' }}>{mod.priceLabel}</span>}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </article>

          {/* 6. RELATED JOURNAL ARTICLES (Span 12) */}
          {relatedPosts.length > 0 && (
            <article className="bento-card bento-card--journal bento-span-12" style={{ padding: 'clamp(22px, 3vw, 36px)' }}>
              <div className="bento-card-header" style={{ marginBottom: 20 }}>
                <div>
                  <span className="bento-tag bento-tag--gold" style={{ marginBottom: 8 }}>M³ JOURNAL</span>
                  <h2 className="bento-title" style={{ fontSize: 'clamp(20px, 2.4cqi, 28px)' }}>
                    {isEn ? `Articles related to ${pillar.name}` : `Fachartikel zu ${pillar.name}`}
                  </h2>
                </div>
                <Link to="/blog" className="bento-header-link">
                  {t.blogAll} →
                </Link>
              </div>

              <div className="journal-cards-track" style={{ width: '100%', overflowX: 'auto', paddingBottom: 10 }}>
                {relatedPosts.map((item) => (
                  <Link
                    key={item.slug}
                    to={`/blog/${item.slug}`}
                    className="journal-feed-card"
                    style={{ flex: '0 0 clamp(280px, 32vw, 340px)' }}
                  >
                    <div className="journal-feed-media">
                      <Img className="journal-feed-img" src={item.image} alt={item.title} />
                      <span className="journal-feed-badge">
                        {item.minutes} {t.blogMin}
                      </span>
                    </div>
                    <div className="journal-feed-body">
                      <h3 className="journal-feed-title">{item.title}</h3>
                      <p className="journal-feed-excerpt">{item.excerpt}</p>
                      <div className="journal-feed-footer">
                        <span className="journal-feed-cta">
                          {t.blogRead}
                        </span>
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
