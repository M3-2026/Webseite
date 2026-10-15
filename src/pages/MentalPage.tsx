import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BackLink } from '../components/BackLink'
import { BentoDisclosure } from '../components/BentoDisclosure'
import { Img } from '../components/Img'
import { PillarFaq, PillarStartContent } from '../components/PillarStartContent'
import { useUi } from '../copy'
import { useLocale } from '../locale'
import { useContent } from '../useContent'

export function MentalPage() {
  const t = useUi()
  const { lang } = useLocale()
  const isEn = lang === 'en'
  const { contact, modules, pillars, posts } = useContent()
  const pillar = pillars.find((p) => p.id === 'm3')!
  const related = modules.filter((m) => m.pillar === 'm3')
  const relatedPosts = posts.filter((p) => p.pillar === 'm3')
  const prompts = 'prompts' in pillar ? pillar.prompts : []
  const [activePrompt, setActivePrompt] = useState<number>(0)

  return (
    <main className="bento-page">
      <div className="wrap">
        <div style={{ marginBottom: 14 }}>
          <BackLink fallback="/#start" />
        </div>

        {/* Master Bento Grid */}
        <section className="bento-grid" aria-label="M³ Mental Performance Bento Grid">

          {/* 1. HERO BENTO CARD (Span 8) */}
          <article className="bento-card bento-card--hero bento-span-8 bento-mosaic-lead">
            <picture className="bento-bg">
              <source
                type="image/webp"
                srcSet="/images/moodboard/mood-books-day.webp 1x, /images/moodboard/mood-books-day@2x.webp 2x"
              />
              <source
                srcSet="/images/moodboard/mood-books-day.jpg 1x, /images/moodboard/mood-books-day@2x.jpg 2x"
              />
              <img
                src="/images/moodboard/mood-books-day@2x.jpg"
                alt="Bücher über gesundes Leben: Schlaf, Ernährung, Bewegung, Alltag"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="bento-bg-img bento-bg-img--books"
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

          {/* 2. NEURAL STRESS & SIGNALS AUDIT CARD (Span 4) */}
          <article className="bento-card bento-card--audit-step bento-span-4 bento-mosaic-top" style={{ justifyContent: 'space-between' }}>
            <div>
              <span className="bento-audit-badge">{isEn ? 'NEURO-STRESS PROFILE' : 'NEURONALE RESILIENZ'}</span>
              <h2 className="bento-title" style={{ fontSize: 21 }}>
                {pillar.label} · {t.mentalSignalsH}
              </h2>
              <p className="bento-desc">{pillar.body}</p>
            </div>
            <ul className="bento-audit-points">
              {pillar.signals.map((sig) => (
                <li key={sig}>{sig}</li>
              ))}
            </ul>
            <div style={{ fontSize: 12, fontWeight: 700, color: '#ffffff', opacity: 0.85 }}>
              {isEn ? '→ Mindset trained like physical muscle' : '→ Trainiert wie ein biologischer Muskel'}
            </div>
          </article>

          <PillarStartContent pillarId="m3" />

          {/* 3. INTERACTIVE DECISION & CLARITY DRILL (Span 12) */}
          {prompts.length > 0 && (
            <article className="bento-card bento-card--journal bento-span-12" style={{ padding: 'clamp(22px, 3vw, 36px)' }}>
              <div className="bento-card-header" style={{ marginBottom: 20 }}>
                <div>
                  <h2 className="bento-title" style={{ fontSize: 'clamp(20px, 2.4cqi, 28px)' }}>
                    {t.mentalDrillH}
                  </h2>
                  <p className="bento-desc" style={{ maxWidth: '64ch' }}>
                    {t.mentalDrillLead}
                  </p>
                </div>
              </div>

              <div className="bento-compass-grid">
                {prompts.map((p, idx) => {
                  const isSelected = activePrompt === idx
                  return (
                    <button
                      key={p.q}
                      type="button"
                      className={`bento-compass-card ${isSelected ? 'selected' : ''}`}
                      onClick={() => setActivePrompt(idx)}
                      style={{ minHeight: 180, justifyContent: 'space-between' }}
                    >
                      <div>
                        <span style={{ fontSize: 11, fontWeight: 800, color: '#ffffff', opacity: 0.6, letterSpacing: '0.08em' }}>
                          PROMPT 0{idx + 1}
                        </span>
                        <h3 style={{ margin: '8px 0 0', fontSize: 16, fontWeight: 700, color: '#ffffff', lineHeight: 1.35 }}>
                          {p.q}
                        </h3>
                      </div>
                      <div style={{ marginTop: 12, fontSize: 12, fontWeight: 700, color: isSelected ? '#ffffff' : 'rgba(255,255,255,0.6)' }}>
                        {isSelected ? '✓ ' + (isEn ? 'Active reflection' : 'Ausgewählt') : (isEn ? 'Reflect on this →' : 'Ansehen →')}
                      </div>
                    </button>
                  )
                })}
              </div>

              {prompts[activePrompt] && (
                <div className="bento-result-box" style={{ marginTop: 18 }}>
                  <span className="bento-audit-badge">{isEn ? 'SYSTEM IMPULSE & PROTOCOL' : 'M³ SYSTEM-IMPULS'}</span>
                  <h3 style={{ margin: '6px 0 8px', fontSize: 18, color: '#ffffff' }}>
                    {prompts[activePrompt].q}
                  </h3>
                  <p style={{ margin: 0, fontSize: 14, color: 'rgba(255,255,255,0.8)', lineHeight: 1.55 }}>
                    {prompts[activePrompt].hint}
                  </p>
                </div>
              )}
            </article>
          )}

          {/* 4. MATCHING MODULES (Span 12) */}
          {related.length > 0 && (
            <article className="bento-card bento-card--journal bento-span-12" style={{ padding: 'clamp(22px, 3vw, 36px)' }}>
              <div className="bento-card-header" style={{ marginBottom: 20 }}>
                <div>
                  <h2 className="bento-title" style={{ fontSize: 'clamp(20px, 2.4cqi, 28px)' }}>
                    {isEn ? 'Matching Mental Performance Modules' : 'Passende Module in M³ Mindset & Mental Performance'}
                  </h2>
                  <p className="bento-desc" style={{ maxWidth: '64ch' }}>
                    {isEn
                      ? 'Targeted modules for decision architecture, sleep optimization, and system hold.'
                      : 'Gezielte Formate für Entscheidungsarchitektur, Schlaf-Impulse und langfristiges System Hold.'}
                  </p>
                </div>
              </div>

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
            </article>
          )}

          {/* 5. NEURO-SCIENCE & HRV EVIDENCE (Span 6) */}
          <article className="bento-card bento-card--audit-step bento-span-6" style={{ padding: 'clamp(22px, 3vw, 32px)' }}>
            <div>
              <span className="bento-audit-badge">{isEn ? 'NEURO-PHYSIOLOGY' : 'NEURO-PHYSIOLOGIE'}</span>
              <h2 className="bento-title" style={{ fontSize: 20, marginBottom: 12 }}>
                {t.mentalScienceH}
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

          {/* 6. CODEX & EVERYDAY LEADERSHIP EXPERIENCE (Span 6) */}
          <article className="bento-card bento-card--audit-step bento-span-6" style={{ padding: 'clamp(22px, 3vw, 32px)', justifyContent: 'space-between' }}>
            <div>
              <span className="bento-audit-badge">{isEn ? 'REAL LIFE RESILIENCE' : 'ALLTAGS-RESILIENZ'}</span>
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
                  title={isEn ? 'Deep Dive: Real Life Codex' : 'Hintergrund: Praxis-Codex & Methodik'}
                  subtitle={isEn ? 'High pressure leadership & decision economy' : 'Führung unter Druck & Entscheidungsökonomie'}
                  theme="light"
                >
                  <p style={{ margin: 0 }}>{pillar.experience.text}</p>
                </BentoDisclosure>
              </div>
            </div>
          </article>

          {/* 7. MENTAL PRINCIPLES (Span 6) */}
          <article className="bento-card bento-card--audit-step bento-span-6" style={{ padding: 'clamp(22px, 3vw, 32px)' }}>
            <div>
              <span className="bento-audit-badge">{isEn ? 'OPERATING RULES' : 'M³ MINDSET-REGELN'}</span>
              <h2 className="bento-title" style={{ fontSize: 20, marginBottom: 12 }}>
                {t.mentalPrinciplesH}
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {pillar.principles.map((pr, idx) => (
                  <BentoDisclosure
                    key={pr.title}
                    title={pr.title}
                    badge={`REGEL 0${idx + 1}`}
                    theme="light"
                  >
                    <p style={{ margin: 0 }}>{pr.text}</p>
                  </BentoDisclosure>
                ))}
              </div>
            </div>
          </article>

          {/* 8. RELATED JOURNAL ARTICLES (Span 6) */}
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

          <PillarFaq pillarId="m3" />

          {/* 9. MASTER BOTTOM CTA BENTO (Span 12) */}
          <article className="bento-card bento-card--start bento-span-12">
            <picture className="bento-bg">
              <source
                type="image/webp"
                srcSet="/images/moodboard/mood-pushup.webp 1x, /images/moodboard/mood-pushup@2x.webp 2x"
              />
              <source
                srcSet="/images/moodboard/mood-pushup.jpg 1x, /images/moodboard/mood-pushup.jpg 2x"
              />
              <img
                src="/images/moodboard/mood-pushup.jpg"
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

        </section>
      </div>
    </main>
  )
}
