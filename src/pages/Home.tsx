import { useState, type CSSProperties } from 'react'
import { Link } from '@tanstack/react-router'
import { Img } from '../components/Img'
import { MichelShow } from '../components/MichelShow'
import { SystemMolecule } from '../components/SystemMolecule'
import { useUi } from '../copy'
import { useLocale } from '../locale'
import { useContent } from '../useContent'

export function Home() {
  const t = useUi()
  const { lang } = useLocale()
  const isEn = lang === 'en'
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const { audience, faqs, pillars, posts, wa } = useContent()

  return (
    <main className="bento-page">
      <div className="wrap">
        {/* Bento Grid Master Universe */}
        <section className="bento-grid" aria-label="M³ Performance System Bento Grid">
          
          {/* 1. HERO BENTO CARD (Span 8 - The Vision & Core Promise) */}
          <article className="bento-card bento-card--hero bento-span-8">
            <picture className="bento-bg">
              <source
                media="(max-width: 860px)"
                type="image/webp"
                srcSet="/images/hero-system-mobile.webp 1x, /images/hero-system-mobile.webp 2x"
              />
              <source
                media="(max-width: 860px)"
                srcSet="/images/hero-system-mobile-1x.jpg 1x, /images/hero-system-mobile.jpg 2x"
              />
              <source
                type="image/webp"
                srcSet="/images/hero-system.webp 1x, /images/hero-system.webp 2x"
              />
              <source
                srcSet="/images/hero-system-1x.jpg 1x, /images/hero-system.jpg 2x"
              />
              <img
                src="/images/hero-system.jpg"
                alt={t.problemAlt}
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="bento-bg-img"
              />
            </picture>
            <div className="bento-overlay bento-overlay--hero" />
            <div className="bento-content bento-content--hero">
              <div className="bento-tag-row">
                <span className="bento-tag bento-tag--gold">
                  <span className="bento-dot" />
                  {isEn ? 'M³ Performance System' : 'M³ Performance System'}
                </span>
              </div>
              <h1 className="bento-hero-h1">
                {isEn ? (
                  <>M³ PERFORMANCE &amp; HEALTH. <span>Performance begins with health.</span></>
                ) : (
                  <>M³ PERFORMANCE &amp; GESUNDHEIT. <span>Leistung beginnt mit Gesundheit.</span></>
                )}
              </h1>
              <p className="bento-lead">
                {isEn
                  ? 'Holistic personal training brought to the point: We link nutrition (M¹), biomechanics (M²), and mental routines (M³) into one sustainable system – tailored to your daily life.'
                  : 'Ganzheitliches Personal Training auf den Punkt gebracht: Wir verbinden Ernährung (M¹), Biomechanik (M²) und mentale Routinen (M³) zu einem nachhaltigen System – individuell auf deinen Alltag zugeschnitten.'}
              </p>

              {/* Minimalistic Transparent Showreel CTA */}
              <Link to="/ueber-mich" className="hero-btn-showreel">
                <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 14, height: 14, flexShrink: 0 }}>
                  <path d="M8 5v14l11-7z" />
                </svg>
                <span>{isEn ? 'Showreel' : 'Showreel'}</span>
              </Link>
            </div>
          </article>

          {/* 2. SYSTEM START & ORIENTATION BENTO CARD (Span 4 - Clean White Card with SystemMolecule Visual) */}
          <article className="bento-card bento-card--call-white bento-span-4" style={{ position: 'relative', overflow: 'hidden' }}>
            <div className="bento-molecule-visual" style={{ position: 'absolute', inset: 0, opacity: 0.18, pointerEvents: 'none' }}>
              <SystemMolecule />
            </div>
            <div className="bento-content" style={{ position: 'relative', zIndex: 2, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div className="bento-tag-row" style={{ marginBottom: 8 }}>
                  <span
                    className="bento-audit-badge"
                    style={{
                      background: 'rgba(0, 0, 0, 0.07)',
                      color: '#111111',
                      borderColor: 'rgba(0, 0, 0, 0.14)',
                    }}
                  >
                    {isEn ? 'ORIENTATION' : 'ORIENTIERUNG'}
                  </span>
                </div>
                <h2 className="bento-title" style={{ color: '#000000', fontSize: 'clamp(18px, 1.9cqi, 24px)', margin: '4px 0 8px' }}>
                  {isEn ? 'Your Entry with M³.' : 'Dein Einstieg mit M³.'}
                </h2>
                <p className="bento-desc" style={{ color: '#222222', fontSize: 13.5, lineHeight: 1.5 }}>
                  {isEn
                    ? 'Whether M¹ FOOD, M² MOVE, or M³ REPEAT: Explore the three pillars below — or use System Start to pinpoint your personal starting point. Optional 20-min. discovery call included.'
                    : 'Ob M¹ FOOD, M² MOVE oder M³ REPEAT: Informiere dich direkt in den drei Säulen darunter – oder finde im System Start heraus, wo dein persönlicher Hebel liegt. Auf Wunsch gerne mit kurzem 20-Min.-Erstgespräch.'}
                </p>
              </div>
              <Link
                to="/system-start"
                className="bento-call-btn"
                style={{ marginTop: 14 }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 16, height: 16, marginRight: 4 }}>
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 16 16 12 12 8" />
                  <line x1="8" y1="12" x2="16" y2="12" />
                </svg>
                {isEn ? 'Explore System Start →' : 'Zum System Start →'}
              </Link>
            </div>
          </article>

          {/* 3. PILLAR M¹: FOOD / METABOLISM (Span 4 - Chapter 2A: The Internal Foundation) */}
          <Link
            to="/metabolism"
            className="bento-card bento-card--pillar bento-card--m1 bento-span-4"
            style={{ '--pillar-color': '#e8a14a' } as CSSProperties}
            aria-label="Pillar M1 Food Metabolism"
          >
            <picture className="bento-bg">
              <source
                type="image/webp"
                srcSet="/images/moodboard/mood-kitchen.webp 1x, /images/moodboard/mood-kitchen@2x.webp 2x"
              />
              <source
                srcSet="/images/moodboard/mood-kitchen.jpg 1x, /images/moodboard/mood-kitchen.jpg 2x"
              />
              <img
                src="/images/moodboard/mood-kitchen.jpg"
                alt="M1 Food Metabolismus & Zellenergie"
                loading="lazy"
                decoding="async"
                className="bento-bg-img"
              />
            </picture>
            <div className="bento-overlay" />
            <div className="bento-content">
              <h2 className="bento-title">
                <span className="bento-pillar-accent" style={{ color: '#e8a14a' }}>M¹</span> FOOD <span className="bento-pillar-sub">· {isEn ? 'Metabolism & Cellular Energy' : 'Metabolismus & Zellenergie'}</span>
              </h2>
              <p className="bento-desc">
                {isEn
                  ? 'Stable blood sugar, gut health, and cellular nutrient absorption for sustained drive.'
                  : 'Stabiler Blutzucker, Darmgesundheit und optimale Nährstoffverwertung für konstante Tagesenergie.'}
              </p>
              <div className="bento-arrow-btn">
                <span>{isEn ? 'Explore M¹ FOOD →' : 'Säule M¹ entdecken →'}</span>
              </div>
            </div>
          </Link>

          {/* 4. PILLAR M²: MOVE / BIOMECHANICS (Span 4 - Chapter 2B: The Physical Freedom) */}
          <Link
            to="/movement"
            className="bento-card bento-card--pillar bento-card--m2 bento-span-4"
            style={{ '--pillar-color': '#2f9a72' } as CSSProperties}
            aria-label="Pillar M2 Move Biomechanics"
          >
            <picture className="bento-bg">
              <source
                type="image/webp"
                srcSet="/images/moodboard/mood-limitless.webp 1x, /images/moodboard/mood-limitless@2x.webp 2x"
              />
              <source
                srcSet="/images/moodboard/mood-limitless.jpg 1x, /images/moodboard/mood-limitless.jpg 2x"
              />
              <img
                src="/images/moodboard/mood-limitless.jpg"
                alt="M2 Move Biomechanik & Schmerzfreiheit"
                loading="lazy"
                decoding="async"
                className="bento-bg-img"
              />
            </picture>
            <div className="bento-overlay" />
            <div className="bento-content">
              <h2 className="bento-title">
                <span className="bento-pillar-accent" style={{ color: '#2f9a72' }}>M²</span> MOVE <span className="bento-pillar-sub">· {isEn ? 'Biomechanics & Pain Freedom' : 'Biomechanik & Schmerzfreiheit'}</span>
              </h2>
              <p className="bento-desc">
                {isEn
                  ? 'Joint stability, functional mobility, and full physical resilience under high demand.'
                  : 'Gelenkstabilität, funktionelle Mobilität und maximale Belastbarkeit im Alltag und Sport.'}
              </p>
              <div className="bento-arrow-btn">
                <span>{isEn ? 'Explore M² MOVE →' : 'Säule M² entdecken →'}</span>
              </div>
            </div>
          </Link>

          {/* 5. PILLAR M³: REPEAT / MINDSET (Span 4 - Chapter 2C: The Mental Clarity) */}
          <Link
            to="/mental-performance"
            className="bento-card bento-card--pillar bento-card--m3 bento-span-4"
            style={{ '--pillar-color': '#4f6fd6' } as CSSProperties}
            aria-label="Pillar M3 Repeat Mindset"
          >
            <picture className="bento-bg">
              <source
                type="image/webp"
                srcSet="/images/moodboard/mood-focus.webp 1x, /images/moodboard/mood-focus@2x.webp 2x"
              />
              <source
                srcSet="/images/moodboard/mood-focus.jpg 1x, /images/moodboard/mood-focus.jpg 2x"
              />
              <img
                src="/images/moodboard/mood-focus.jpg"
                alt="M3 Repeat Mindset & neuronale Klarheit"
                loading="lazy"
                decoding="async"
                className="bento-bg-img"
              />
            </picture>
            <div className="bento-overlay" />
            <div className="bento-content">
              <h2 className="bento-title">
                <span className="bento-pillar-accent" style={{ color: '#4f6fd6' }}>M³</span> REPEAT <span className="bento-pillar-sub">· {isEn ? 'Mindset & Neural Clarity' : 'Mindset & neuronale Klarheit'}</span>
              </h2>
              <p className="bento-desc">
                {isEn
                  ? 'Decision economy, deep restorative sleep, and nervous system control under pressure.'
                  : 'Entscheidungsökonomie, tiefer Schlaf und Stressresilienz – trainiert wie ein Muskel.'}
              </p>
              <div className="bento-arrow-btn">
                <span>{isEn ? 'Explore M³ REPEAT →' : 'Säule M³ entdecken →'}</span>
              </div>
            </div>
          </Link>

        </section>
      </div>

      {/* 6. ABOUT MICHÉL SECTION (Particle Animated Show) */}
      <section className="section michel-section" id="about-michel">
        <div className="wrap michel-split">
          <div className="michel-visual">
            <MichelShow />
          </div>
          <div className="michel-copy">
            <p className="eyebrow">{t.michelEyebrow}</p>
            <h2>{t.michelH}</h2>
            <div className="michel-block">
              <p>{t.michelLead}</p>
              <p>{t.michelLead2}</p>
              <p>„{t.michelQuote}“</p>
              <p className="michel-meta">{t.michelMeta}</p>
            </div>
            <Link className="btn btn-ghost" to="/ueber-mich" style={{ marginTop: 18, width: 'fit-content' }}>
              {t.moreAbout}
            </Link>
          </div>
        </div>
      </section>

      <div className="wrap">
        <section className="bento-grid" aria-label="M³ Personas & Dialogues">
          {/* AUDIENCE BENTO SECTION (Span 12 - Who this is for) */}
          <article className="bento-card bento-card--audience bento-span-12">
            <div className="bento-audience-grid">
              {audience.map((a) => (
                <div className="bento-persona-card" key={a.title}>
                  <div className="bento-persona-head">
                    <div className="bento-persona-avatar-wrap">
                      <Img className="bento-persona-avatar" src={a.image} alt={a.persona || a.title} />
                    </div>
                    <div className="bento-persona-meta">
                      <span className="bento-persona-role">{a.persona}</span>
                      <h3 className="bento-persona-title">{a.title}</h3>
                    </div>
                  </div>

                  <div className="bento-persona-chat">
                    {/* Chat Msg 1: Client / Persona */}
                    <div className="bento-chat-msg bento-chat-msg--client">
                      <div className="bento-chat-header">
                        <span className="bento-chat-author">{a.persona.split('·')[0].trim()}</span>
                        <span className="bento-chat-time">08:42</span>
                      </div>
                      <div className="bento-chat-bubble bento-chat-bubble--client">
                        <p>{a.dailyLife}</p>
                      </div>
                    </div>

                    {/* Chat Msg 2: Michél's Response & Solution */}
                    <div className="bento-chat-msg bento-chat-msg--michel">
                      <div className="bento-chat-header bento-chat-header--michel">
                        <span className="bento-chat-author">Michél · M³</span>
                        <span className="bento-chat-time">08:45</span>
                      </div>
                      <div className="bento-chat-bubble bento-chat-bubble--michel">
                        <p>{a.approach}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </section>

        {/* 11. STANDALONE JOURNAL SECTION (10 Science & Practice Articles) */}
        <section className="journal-standalone-section" id="journal" aria-labelledby="journal-main-heading">
          <div className="journal-standalone-header">
            <span className="journal-standalone-kicker">
              {isEn ? 'M³ System Journal & Science' : 'M³ Journal & Wissenschaft'}
            </span>
            <h2 id="journal-main-heading" className="journal-standalone-title">
              {isEn ? (
                <>If you want to understand <span className="journal-title-accent">how your body truly performs.</span></>
              ) : (
                <>Wenn du verstehen willst, <span className="journal-title-accent">wie dein Körper wirklich funktioniert.</span></>
              )}
            </h2>
            <p className="journal-standalone-lead">
              {isEn
                ? 'Not theoretical fluff. 10 fundamental articles from real practice — why blood sugar crashes, why load without track causes wear, and how routines hold without hype.'
                : 'Nicht Theorie für die Schublade. 10 fundamentale Texte aus der Praxis – warum der Blutzucker abstürzt, warum Last ohne saubere Bahn verschleißt und wie Routinen ohne Motivations-Hype halten.'}
            </p>

            <div className="journal-header-actions">
              <Link to="/blog" className="journal-header-link">
                {isEn ? 'View all 10 articles →' : 'Alle 10 Texte ansehen →'}
              </Link>
            </div>
          </div>

          <div className="journal-cards-container">
            <div className="journal-cards-track">
              {posts.map((post) => {
                const pillar = pillars.find((p) => p.id === post.pillar)
                return (
                  <Link
                    key={post.slug}
                    to={`/blog/${post.slug}`}
                    className="journal-feed-card"
                  >
                    <div className="journal-feed-media">
                      <Img className="journal-feed-img" src={post.image} alt={post.title} />
                      {pillar && (
                        <span
                          className="journal-feed-badge"
                          style={{
                            borderColor: colorMixPillar(pillar.color),
                            color: pillar.color,
                          }}
                        >
                          {pillar.mark} · {pillar.name}
                        </span>
                      )}
                    </div>
                    <div className="journal-feed-body">
                      <h3 className="journal-feed-title">{post.title}</h3>
                      <p className="journal-feed-excerpt">{post.excerpt}</p>
                      <div className="journal-feed-footer">
                        <span className="journal-feed-cta">
                          {isEn ? 'Read article' : 'Lesen'}
                          <span className="journal-feed-arrow" aria-hidden="true">→</span>
                        </span>
                        <span className="journal-feed-min">{post.minutes} Min.</span>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* 12. STANDALONE FAQ SECTION (Centered on Page, Left-Aligned Typography) */}
        <section className="faq-standalone-section" id="faq" aria-labelledby="faq-main-heading">
          <div className="faq-standalone-container">
            <header className="faq-standalone-header">
              <span className="faq-standalone-kicker">FAQ</span>
              <h2 id="faq-main-heading" className="faq-standalone-title">{t.faqH}</h2>
              <p className="faq-standalone-lead">
                {isEn
                  ? 'Direct, transparent answers about our methodology, structure, and 1:1 mentorship.'
                  : 'Direkte und ehrliche Antworten zu Ablauf, Betreuung und dem M³-System.'}
              </p>
            </header>

            <div className="faq-standalone-list">
              {faqs.map((f, i) => {
                const isOpen = openFaq === i
                return (
                  <div
                    key={f.q}
                    className={`faq-standalone-item ${isOpen ? 'is-open' : ''}`}
                  >
                    <button
                      type="button"
                      className="faq-standalone-btn"
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      aria-expanded={isOpen}
                    >
                      <span className="faq-standalone-q">{f.q}</span>
                      <span className="faq-standalone-icon" aria-hidden="true">
                        <svg
                          viewBox="0 0 24 24"
                          width="18"
                          height="18"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className={`faq-chevron-icon ${isOpen ? 'is-rotated' : ''}`}
                        >
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </span>
                    </button>
                    {isOpen && (
                      <div className="faq-standalone-panel">
                        <p className="faq-standalone-a">{f.a}</p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </section>

      </div>
    </main>
  )
}

function colorMixPillar(color: string) {
  return `color-mix(in srgb, ${color} 45%, var(--line))`
}


