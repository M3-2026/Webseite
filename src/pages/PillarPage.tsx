import { Link, Navigate, useParams } from 'react-router-dom'
import { BackLink } from '../components/BackLink'
import { BentoDisclosure } from '../components/BentoDisclosure'
import { Img } from '../components/Img'
import { PillarFaq, PillarStartContent } from '../components/PillarStartContent'
import { useUi } from '../copy'
import { useLocale } from '../locale'
import { byTier } from '../tierSort'
import { useContent } from '../useContent'

export function PillarPage() {
  const { slug } = useParams()
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
  if (!pillar) return <Navigate to="/" replace />
  const related = modules.filter((m) => m.pillar === pillar.id).slice().sort(byTier)
  const relatedPosts = posts.filter((p) => p.pillar === pillar.id)

  const moodMap: Record<string, string> = {
    m1: '/images/moodboard/mood-kitchen',
    m2: '/images/michel-work-training',
    m3: '/images/moodboard/mood-focus',
  }
  const heroImageBase = moodMap[pillar.id] || '/images/moodboard/mood-kitchen'
  const heroRetina = pillar.id !== 'm2'

  return (
    <main className="bento-page">
      <div className="wrap">
        <div style={{ marginBottom: 14 }}>
          <BackLink fallback="/#start" />
        </div>

        {/* Master Bento Grid */}
        <section className="bento-grid" aria-label={`${pillar.name} Bento Grid`}>

          {/* 1. HERO BENTO CARD (Span 8) */}
          <article className="bento-card bento-card--hero bento-span-8 bento-mosaic-lead">
            <picture className="bento-bg">
              <source
                type="image/webp"
                srcSet={heroRetina ? `${heroImageBase}.webp 1x, ${heroImageBase}@2x.webp 2x` : `${heroImageBase}.webp`}
              />
              <source
                srcSet={heroRetina ? `${heroImageBase}.jpg 1x, ${heroImageBase}@2x.jpg 2x` : `${heroImageBase}.jpg`}
              />
              <img
                src={`${heroImageBase}.jpg`}
                alt={`${pillar.mark} ${pillar.name}`}
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className={pillar.id === 'm2' ? 'bento-bg-img bento-bg-img--michel' : 'bento-bg-img'}
              />
            </picture>
            <div className="bento-overlay" />
            <div className="bento-content bento-content--hero">
              <h1 className="bento-hero-h1">
                {pillar.name}. <span>{pillar.title}</span>
              </h1>
              <p className="bento-lead">{pillar.subline}</p>
              <div className="bento-cta-row" style={{ marginTop: 16 }}>
                <a
                  href={contact.wa(
                    isEn
                      ? `Hi Michél, I'm interested in ${pillar.mark}.`
                      : `Hallo Michél, ich interessiere mich für ${pillar.mark}.`,
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-wa"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  {isEn ? 'Message me' : 'Schreib mir'}
                </a>
              </div>
            </div>
          </article>

          {/* 2. SIGNALS & FOCUS AUDIT CARD (Span 4) */}
          <article className="bento-card bento-card--audit-step bento-span-4 bento-mosaic-top" style={{ justifyContent: 'space-between' }}>
            <div>
              <span className="bento-audit-badge">{isEn ? 'CORE FOCUS & SIGNALS' : 'FOKUS & KÖRPERSIGNALE'}</span>
              <h2 className="bento-title" style={{ fontSize: 21 }}>
                {pillar.label} · {t.signalsH}
              </h2>
              <p className="bento-desc">{pillar.body}</p>
            </div>
            <ul className="bento-audit-points">
              {pillar.signals.map((sig) => (
                <li key={sig}>{sig}</li>
              ))}
            </ul>
            <div style={{ fontSize: 12, fontWeight: 700, color: '#ffffff', opacity: 0.85 }}>
              {isEn ? '→ Solved in the 90-Day Trajectory' : '→ Gelöst im 90-Tage-Fahrplan'}
            </div>
          </article>

          <PillarStartContent pillarId={pillar.id} />

          {/* 3. MATCHING MODULES IN THIS PILLAR (Span 12) */}
          <article className="bento-card bento-card--journal bento-span-12" style={{ padding: 'clamp(22px, 3vw, 36px)' }}>
            <div className="bento-card-header" style={{ marginBottom: 20 }}>
              <div>
                <h2 className="bento-title" style={{ fontSize: 'clamp(20px, 2.4cqi, 28px)' }}>
                  {pillar.id === 'm1'
                    ? isEn
                      ? 'The M¹ package'
                      : 'Das M¹-Paket'
                    : isEn
                      ? `Matching Modules in Pillar ${pillar.mark}`
                      : `Passende Module & Angebote in Säule ${pillar.mark}`}
                </h2>
                <p className="bento-desc" style={{ maxWidth: '64ch' }}>
                  {pillar.id === 'm1'
                    ? isEn
                      ? 'These offers are parts of one package. The booking focus is the package. Each part can also be booked on its own.'
                      : 'Diese Angebote sind Bausteine des gesamten M¹-Pakets. Der Schwerpunkt liegt auf dem Paket. Jeder Baustein ist auch einzeln buchbar.'
                    : isEn
                      ? 'Targeted interventions, structured protocols, and 1:1 coaching specifically engineered for this pillar.'
                      : 'Gezielte Einzelbausteine, strukturierte Protokolle und 1:1 Betreuungen für messbare Resultate.'}
                </p>
              </div>
            </div>

            {related.length > 0 ? (
              <div className="bento-audience-grid">
                {related.map((m) => (
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

          {/* 4. PHYSIOLOGY & SCIENCE EVIDENCE (Span 6) */}
          <article className="bento-card bento-card--audit-step bento-span-6" style={{ padding: 'clamp(22px, 3vw, 32px)' }}>
            <div>
              <span className="bento-audit-badge">{isEn ? 'PHYSIOLOGICAL PRINCIPLES' : 'BIOLOGISCHE LOGIK'}</span>
              <h2 className="bento-title" style={{ fontSize: 20, marginBottom: 12 }}>
                {t.scienceH}
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {pillar.science.map((s, idx) => (
                  <BentoDisclosure
                    key={s.title}
                    title={s.title}
                    badge={`0${idx + 1}`}
                    theme="light"
                  >
                    <p style={{ margin: 0 }}>{s.text}</p>
                  </BentoDisclosure>
                ))}
              </div>
            </div>
          </article>

          {/* 5. EXPERIENCE & REAL-WORLD CODEX (Span 6) */}
          <article className="bento-card bento-card--audit-step bento-span-6" style={{ padding: 'clamp(22px, 3vw, 32px)', justifyContent: 'space-between' }}>
            <div>
              <span className="bento-audit-badge">{isEn ? 'PRACTICE OVER THEORY' : 'PRAXIS-ERFAHRUNG'}</span>
              <h2 className="bento-title" style={{ fontSize: 20 }}>
                {pillar.experience.title}
              </h2>
              <div style={{ marginTop: 14, padding: 14, borderRadius: 12, background: 'rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.08)' }}>
                <p style={{ margin: 0, fontSize: 13, fontStyle: 'italic', color: '#111111', lineHeight: 1.45 }}>
                  „{pillar.experience.quote}“
                </p>
              </div>
              <div style={{ marginTop: 12 }}>
                <BentoDisclosure
                  title={isEn ? 'Deep Dive: Michél’s Case & Findings' : 'Hintergrund: Michéls Fall & Befund'}
                  subtitle={isEn ? 'Bandscheibenvorfall C6/C7 and the systematic way back' : 'Bandscheibenvorfall C6/C7 und der Weg zurück'}
                  theme="light"
                >
                  <p style={{ margin: 0 }}>{pillar.experience.text}</p>
                </BentoDisclosure>
              </div>
            </div>
          </article>

          {/* 6. GUIDING PRINCIPLES (Span 6) */}
          <article className="bento-card bento-card--audit-step bento-span-6" style={{ padding: 'clamp(22px, 3vw, 32px)' }}>
            <div>
              <span className="bento-audit-badge">{isEn ? 'CORE TENETS' : 'LEITPRINZIPIEN'}</span>
              <h2 className="bento-title" style={{ fontSize: 20, marginBottom: 12 }}>
                {t.principlesH}
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {pillar.principles.map((pr, idx) => (
                  <BentoDisclosure
                    key={pr.title}
                    title={pr.title}
                    badge={`PRINZIP 0${idx + 1}`}
                    theme="light"
                  >
                    <p style={{ margin: 0 }}>{pr.text}</p>
                  </BentoDisclosure>
                ))}
              </div>
            </div>
          </article>

          {/* 7. RELATED JOURNAL ARTICLES (Span 6) */}
          <article className="bento-card bento-card--audit-step bento-span-6" style={{ padding: 'clamp(22px, 3vw, 32px)' }}>
            <div>
              <span className="bento-audit-badge">{isEn ? 'INSIGHTS & JOURNAL' : 'VERTIEFENDE ARTIKEL'}</span>
              <h2 className="bento-title" style={{ fontSize: 20 }}>
                {t.blogMore}
              </h2>
              {relatedPosts.length > 0 ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 16 }}>
                  {relatedPosts.map((post) => (
                    <Link
                      to={`/blog/${post.slug}`}
                      key={post.slug}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: 12,
                        borderRadius: 12,
                        background: 'rgba(0,0,0,0.03)',
                        border: '1px solid rgba(0,0,0,0.08)',
                        textDecoration: 'none',
                        color: '#111111',
                      }}
                    >
                      <div>
                        <strong style={{ fontSize: 13.5, display: 'block', color: '#111111' }}>{post.title}</strong>
                        <span style={{ fontSize: 12, color: '#666666' }}>
                          {post.minutes} {t.blogMin} · {post.excerpt.slice(0, 60)}…
                        </span>
                      </div>
                      <span style={{ fontSize: 14, color: '#111111', marginLeft: 12, flexShrink: 0 }}>→</span>
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="bento-desc" style={{ marginTop: 12 }}>{isEn ? 'More insights in the journal.' : 'Weitere Artikel im Journal.'}</p>
              )}
            </div>
          </article>

          <PillarFaq pillarId={pillar.id} />

          {/* 8. MASTER BOTTOM CTA BENTO (Span 12) */}
          <article className="bento-card bento-card--start bento-span-12">
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
                alt="Michél Meier Performance Coaching"
                loading="lazy"
                decoding="async"
                className="bento-bg-img"
              />
            </picture>
            <div className="bento-overlay" />
            <div className="bento-content" style={{ maxWidth: 680 }}>
              <h2 className="bento-title" style={{ fontSize: 'clamp(24px, 3.2cqi, 36px)' }}>
                {t.ctaBefore} {t.ctaGold} {t.ctaAfter}
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
    </main>
  )
}
