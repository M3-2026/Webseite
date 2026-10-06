import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { BackLink } from '../components/BackLink'
import { Img } from '../components/Img'
import { useUi } from '../copy'
import { useLocale } from '../locale'
import { useContent } from '../useContent'

export function MentalPage() {
  const t = useUi()
  const { lang } = useLocale()
  const isEn = lang === 'en'
  const { contact, pillars, posts, wa } = useContent()
  const pillar = pillars.find((p) => p.id === 'm3')!
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
                alt="M3 Mental Performance Fokus & neuronale Klarheit"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="bento-bg-img"
              />
            </picture>
            <div className="bento-overlay" />
            <div className="bento-content bento-content--hero">
              <h1 className="bento-hero-h1">
                {pillar.mark} · {pillar.name}. <span>{pillar.title}</span>
              </h1>
              <p className="bento-lead" style={{ fontStyle: 'italic', opacity: 0.95 }}>
                „{pillar.quote}“
              </p>
              <p className="bento-desc" style={{ maxWidth: '56ch', marginTop: 6, fontSize: 14 }}>
                {pillar.body}
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

          {/* 2. NEURAL STRESS & SIGNALS AUDIT CARD (Span 4) */}
          <article className="bento-card bento-card--audit-step bento-span-4">
            <div className="bento-audit-head">
              <span className="bento-audit-badge">
                <span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', backgroundColor: pillar.color }} />
                {isEn ? 'NEURO-STRESS PROFILE' : 'NEURONALE RESILIENZ'}
              </span>
              <h2 className="bento-title" style={{ fontSize: 'clamp(18px, 1.8cqi, 22px)' }}>
                {pillar.label} · {t.mentalSignalsH}
              </h2>
              <p className="bento-desc">
                {isEn
                  ? 'High performance without nervous system regulation leads to systemic burnout:'
                  : 'Hohe kognitive Taktung ohne parasympathische Erholung erzeugt schleichenden Fokusverlust:'}
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
              <span>{isEn ? 'Mindset trained like a biological muscle.' : 'Trainiert wie ein biologischer Muskel.'}</span>
            </div>
          </article>

          {/* 3. INTERACTIVE DECISION & CLARITY DRILL (Span 12) */}
          {prompts.length > 0 && (
            <article className="bento-card bento-card--journal bento-span-12" style={{ padding: 'clamp(22px, 3vw, 36px)' }}>
              <div className="bento-card-header" style={{ marginBottom: 20 }}>
                <div>
                  <span className="bento-tag bento-tag--gold" style={{ marginBottom: 8 }}>{t.mentalDrillEyebrow}</span>
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
                      style={{
                        minHeight: 180,
                        justifyContent: 'space-between',
                        borderColor: isSelected ? pillar.color : 'rgba(255,255,255,0.1)',
                        background: isSelected
                          ? 'linear-gradient(145deg, rgba(107, 140, 255, 0.18), rgba(107, 140, 255, 0.05))'
                          : 'color-mix(in srgb, var(--bg) 60%, var(--bg-2) 40%)',
                      }}
                    >
                      <div>
                        <span style={{ fontSize: 11, fontWeight: 800, color: isSelected ? pillar.color : 'rgba(255,255,255,0.6)', letterSpacing: '0.08em' }}>
                          {isEn ? `QUESTION 0${idx + 1}` : `FRAGE 0${idx + 1}`}
                        </span>
                        <h3 style={{ margin: '8px 0 0', fontSize: 15.5, fontWeight: 700, color: '#ffffff', lineHeight: 1.4 }}>
                          {p.q}
                        </h3>
                      </div>
                      <div style={{ marginTop: 12, fontSize: 12, fontWeight: 700, color: isSelected ? pillar.color : 'rgba(255,255,255,0.6)' }}>
                        {isSelected ? '✓ ' + (isEn ? 'Active reflection' : 'M³ Impuls aktiv') : (isEn ? 'Reflect on this →' : 'Impuls ansehen →')}
                      </div>
                    </button>
                  )
                })}
              </div>

              {prompts[activePrompt] && (
                <div
                  className="bento-result-box"
                  style={{
                    marginTop: 18,
                    padding: 22,
                    borderRadius: 16,
                    border: '1px solid rgba(107, 140, 255, 0.3)',
                    background: 'linear-gradient(135deg, rgba(107, 140, 255, 0.12), rgba(0, 0, 0, 0.3))',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                    <span className="bento-audit-badge" style={{ margin: 0, background: 'rgba(107, 140, 255, 0.2)', borderColor: 'rgba(107, 140, 255, 0.4)', color: '#ffffff' }}>
                      <span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', backgroundColor: pillar.color }} />
                      {isEn ? 'M³ SYSTEM IMPULSE & PROTOCOL' : 'M³ SYSTEM-IMPULS & PHYSIOLOGISCHER HEBEL'}
                    </span>
                  </div>
                  <h3 style={{ margin: '4px 0 10px', fontSize: 17.5, fontWeight: 800, color: '#ffffff', lineHeight: 1.35 }}>
                    {prompts[activePrompt].q}
                  </h3>
                  <p style={{ margin: 0, fontSize: 14.5, color: 'rgba(255,255,255,0.88)', lineHeight: 1.6 }}>
                    {prompts[activePrompt].hint}
                  </p>
                </div>
              )}
            </article>
          )}

          {/* 4. M³ AS THE INTEGRATION ROOF FOR M¹ & M² (Span 12) */}
          <article className="bento-card bento-card--journal bento-span-12" style={{ padding: 'clamp(22px, 3vw, 36px)' }}>
            <div className="bento-card-header" style={{ marginBottom: 20 }}>
              <div>
                <span className="bento-tag bento-tag--gold" style={{ marginBottom: 8 }}>
                  {isEn ? 'THE M³ INTEGRATION ROOF' : 'DAS M³ SYSTEM-DACH'}
                </span>
                <h2 className="bento-title" style={{ fontSize: 'clamp(20px, 2.4cqi, 28px)' }}>
                  {isEn ? 'What is automatically included in every coaching' : 'Was du in jedem Coaching automatisch mitbekommst'}
                </h2>
                <p className="bento-desc" style={{ maxWidth: '68ch' }}>
                  {isEn
                    ? 'M³ is not a separate paid upsell or isolated package. It is the overarching system roof across M¹ (Nutrition) and M² (Training) — because every change in metabolism and movement only lasts if mindset, sleep, and decision economics carry it.'
                    : 'M³ ist kein separates Bezahlpaket und kein isoliertes Extra. Es ist das übergeordnete System-Dach über M¹ (Ernährung) und M² (Training) — denn jede Veränderung in Stoffwechsel und Bewegung greift im Alltag nur, wenn Kopf, Schlaf und Entscheidungsarchitektur mitziehen.'}
                </p>
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
              {/* Item 1 */}
              <div
                style={{
                  background: 'color-mix(in srgb, var(--bg) 60%, var(--bg-2) 40%)',
                  border: '1px solid var(--line)',
                  borderRadius: 16,
                  padding: 22,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10,
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
                    <span style={{ fontSize: 11.5, fontWeight: 800, color: pillar.color, letterSpacing: '0.06em' }}>
                      01 · ENTSCHEIDUNGSÖKONOMIE
                    </span>
                    <span style={{ fontSize: 11, fontWeight: 700, padding: '2px 8px', borderRadius: 6, background: 'rgba(255,255,255,0.06)', color: 'var(--muted)' }}>
                      {isEn ? 'Included' : 'Inklusive'}
                    </span>
                  </div>
                  <h3 style={{ margin: '0 0 6px', fontSize: 16.5, fontWeight: 800, color: 'var(--text)' }}>
                    {isEn ? 'Decision Architecture & If-Then Rules' : 'Wenn-Dann-Architektur statt Willenskraft'}
                  </h3>
                  <p style={{ margin: 0, fontSize: 13, lineHeight: 1.55, color: 'var(--muted)' }}>
                    {isEn
                      ? 'No daily negotiations. Fixed rules in your calendar eliminate cognitive friction so you never spend work willpower on health choices.'
                      : 'Schluss mit täglichen Verhandlungen im Kopf. Wir etablieren feste Wenn-Dann-Regeln im Kalender, damit du keine wertvolle Energie aus dem Job an Ernährungs- oder Trainingsfragen verlierst.'}
                  </p>
                </div>
                <div style={{ paddingTop: 10, borderTop: '1px solid var(--line)', fontSize: 12, fontWeight: 600, color: 'var(--text)', opacity: 0.9 }}>
                  ✓ {isEn ? 'Protects cognitive willpower' : 'Schützt den präfrontalen Cortex vor Ermüdung'}
                </div>
              </div>

              {/* Item 2 */}
              <div
                style={{
                  background: 'color-mix(in srgb, var(--bg) 60%, var(--bg-2) 40%)',
                  border: '1px solid var(--line)',
                  borderRadius: 16,
                  padding: 22,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10,
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
                    <span style={{ fontSize: 11.5, fontWeight: 800, color: pillar.color, letterSpacing: '0.06em' }}>
                      02 · PHYSIOLOGISCHE ERHOLUNG
                    </span>
                    <span style={{ fontSize: 11, fontWeight: 700, padding: '2px 8px', borderRadius: 6, background: 'rgba(255,255,255,0.06)', color: 'var(--muted)' }}>
                      {isEn ? 'Included' : 'Inklusive'}
                    </span>
                  </div>
                  <h3 style={{ margin: '0 0 6px', fontSize: 16.5, fontWeight: 800, color: 'var(--text)' }}>
                    {isEn ? 'Sleep & HRV Parasympathetic Protocol' : 'Schlaf- & HRV-Regeneration als Leistungsarbeit'}
                  </h3>
                  <p style={{ margin: 0, fontSize: 13, lineHeight: 1.55, color: 'var(--muted)' }}>
                    {isEn
                      ? 'Sleep is physiological performance work, not a soft skill. We optimize evening down-regulation, deep sleep phases, and HRV to accelerate metabolic and tissue recovery.'
                      : 'Schlaf ist kein Wellness-Thema, sondern harte biologische Leistungsarbeit. Protokolle für Einschlaf-Taktung, Reizfilter und HRV-Erholung für maximale Gewebereparatur und Hormonbalance.'}
                  </p>
                </div>
                <div style={{ paddingTop: 10, borderTop: '1px solid var(--line)', fontSize: 12, fontWeight: 600, color: 'var(--text)', opacity: 0.9 }}>
                  ✓ {isEn ? 'Eliminates afternoon crashes & cravings' : 'Behebt Nachmittagstiefs & Heißhunger an der Wurzel'}
                </div>
              </div>

              {/* Item 3 */}
              <div
                style={{
                  background: 'color-mix(in srgb, var(--bg) 60%, var(--bg-2) 40%)',
                  border: '1px solid var(--line)',
                  borderRadius: 16,
                  padding: 22,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10,
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
                    <span style={{ fontSize: 11.5, fontWeight: 800, color: pillar.color, letterSpacing: '0.06em' }}>
                      03 · ALLTAGS-RESILIENZ
                    </span>
                    <span style={{ fontSize: 11, fontWeight: 700, padding: '2px 8px', borderRadius: 6, background: 'rgba(255,255,255,0.06)', color: 'var(--muted)' }}>
                      {isEn ? 'Included' : 'Inklusive'}
                    </span>
                  </div>
                  <h3 style={{ margin: '0 0 6px', fontSize: 16.5, fontWeight: 800, color: 'var(--text)' }}>
                    {isEn ? 'System Hold: Routines under High Pressure' : 'System Hold bei 60-Stunden-Wochen & Reisen'}
                  </h3>
                  <p style={{ margin: 0, fontSize: 13, lineHeight: 1.55, color: 'var(--muted)' }}>
                    {isEn
                      ? 'Resilient minimum routines that never break when travel, family emergencies, or crunch periods hit. The system downshifts gracefully without abandoning progress.'
                      : 'Krisenfeste Mindestroutinen, die selbst in dichten Arbeitsphasen, auf Geschäftsreisen oder bei familiärem Druck greifen. Das System schaltet smart um, statt einzubrechen.'}
                  </p>
                </div>
                <div style={{ paddingTop: 10, borderTop: '1px solid var(--line)', fontSize: 12, fontWeight: 600, color: 'var(--text)', opacity: 0.9 }}>
                  ✓ {isEn ? 'Zero yo-yo effect or abandoned plans' : 'Verhindert den typischen Abbruch nach 3 Wochen'}
                </div>
              </div>

              {/* Item 4 */}
              <div
                style={{
                  background: 'color-mix(in srgb, var(--bg) 60%, var(--bg-2) 40%)',
                  border: '1px solid var(--line)',
                  borderRadius: 16,
                  padding: 22,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10,
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
                    <span style={{ fontSize: 11.5, fontWeight: 800, color: pillar.color, letterSpacing: '0.06em' }}>
                      04 · AUTONOMIE ALS EXIT
                    </span>
                    <span style={{ fontSize: 11, fontWeight: 700, padding: '2px 8px', borderRadius: 6, background: 'rgba(255,255,255,0.06)', color: 'var(--muted)' }}>
                      {isEn ? 'Included' : 'Inklusive'}
                    </span>
                  </div>
                  <h3 style={{ margin: '0 0 6px', fontSize: 16.5, fontWeight: 800, color: 'var(--text)' }}>
                    {isEn ? 'Self-Leadership: Making the Coach Obsolete' : 'Selbststeuerung: Der Coach macht sich überflüssig'}
                  </h3>
                  <p style={{ margin: 0, fontSize: 13, lineHeight: 1.55, color: 'var(--muted)' }}>
                    {isEn
                      ? 'You understand the physiological mechanics and feedback loops deeply. Goal of every coaching is complete autonomy, not endless subscription dependence.'
                      : 'Du lernst die Hebel deines Körpers so verstehen, dass du dein System lebenslang eigenständig justieren kannst. Ziel ist deine Souveränität — kein dauerhaftes Abhängigkeitsverhältnis.'}
                  </p>
                </div>
                <div style={{ paddingTop: 10, borderTop: '1px solid var(--line)', fontSize: 12, fontWeight: 600, color: 'var(--text)', opacity: 0.9 }}>
                  ✓ {isEn ? 'Lifelong independent sovereignty' : 'Lebenslange Beherrschung des eigenen Körpers'}
                </div>
              </div>
            </div>

            {/* Bottom Bridge Banner */}
            <div
              style={{
                marginTop: 20,
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
                  {isEn ? 'Start directly via M¹ (Metabolism) or M² (Movement):' : 'Starte über deinen Hebel in M¹ (Ernährung) oder M² (Training):'}
                </strong>
                <span style={{ fontSize: 13, color: 'var(--muted)' }}>
                  {isEn
                    ? 'M³ mindset architecture and sleep protocols are automatically embedded.'
                    : 'Die M³ Entscheidungsarchitektur und Schlaf-Protokolle fließen ab Tag 1 nahtlos mit ein.'}
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

          {/* 5. NEURO-SCIENCE & HRV EVIDENCE (Span 6) */}
          <article className="bento-card bento-card--journal bento-span-6" style={{ padding: 'clamp(22px, 3vw, 32px)' }}>
            <div>
              <span className="bento-tag bento-tag--gold" style={{ marginBottom: 8 }}>{isEn ? 'NEURO-PHYSIOLOGY' : 'NEURO-PHYSIOLOGIE'}</span>
              <h2 className="bento-title" style={{ fontSize: 20 }}>
                {t.mentalScienceH}
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 16 }}>
                {pillar.science.map((s, idx) => (
                  <div key={s.title} style={{ background: 'color-mix(in srgb, var(--bg) 60%, var(--bg-2) 40%)', border: '1px solid var(--line)', borderRadius: 14, padding: 16 }}>
                    <div style={{ fontSize: 11.5, fontWeight: 800, color: pillar.color, marginBottom: 4 }}>0{idx + 1} · EVIDENCE</div>
                    <h3 style={{ margin: '0 0 6px', fontSize: 15, fontWeight: 700, color: 'var(--text)' }}>
                      {s.title}
                    </h3>
                    <p style={{ margin: 0, fontSize: 13, color: 'var(--muted)', lineHeight: 1.5 }}>
                      {s.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </article>

          {/* 6. CODEX & EVERYDAY LEADERSHIP EXPERIENCE (Span 6) */}
          <article className="bento-card bento-card--journal bento-span-6" style={{ padding: 'clamp(22px, 3vw, 32px)' }}>
            <div>
              <span className="bento-tag bento-tag--gold" style={{ marginBottom: 8 }}>{isEn ? 'REAL LIFE RESILIENCE' : 'ALLTAGS-RESILIENZ'}</span>
              <h2 className="bento-title" style={{ fontSize: 20 }}>
                {pillar.experience.title}
              </h2>
              <p style={{ margin: '14px 0 0', fontSize: 13.5, color: 'var(--muted)', lineHeight: 1.55 }}>
                {pillar.experience.text}
              </p>
              <div style={{ marginTop: 18, padding: 16, borderRadius: 14, background: 'color-mix(in srgb, var(--bg) 60%, var(--bg-2) 40%)', border: '1px solid var(--line)' }}>
                <p style={{ margin: 0, fontSize: 13, fontStyle: 'italic', color: 'var(--text)', lineHeight: 1.5 }}>
                  „{pillar.experience.quote}“
                </p>
              </div>
            </div>
          </article>

          {/* 7. MENTAL PRINCIPLES (Span 6) */}
          <article className="bento-card bento-card--journal bento-span-6" style={{ padding: 'clamp(22px, 3vw, 32px)' }}>
            <div>
              <span className="bento-tag bento-tag--gold" style={{ marginBottom: 8 }}>{isEn ? 'OPERATING RULES' : 'M³ MINDSET-REGELN'}</span>
              <h2 className="bento-title" style={{ fontSize: 20 }}>
                {t.mentalPrinciplesH}
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 16 }}>
                {pillar.principles.map((pr, idx) => (
                  <div key={pr.title} style={{ background: 'color-mix(in srgb, var(--bg) 60%, var(--bg-2) 40%)', border: '1px solid var(--line)', borderRadius: 14, padding: 16 }}>
                    <div style={{ fontSize: 11.5, fontWeight: 800, color: pillar.color, marginBottom: 4 }}>REGEL 0{idx + 1}</div>
                    <strong style={{ display: 'block', fontSize: 14.5, color: 'var(--text)', marginBottom: 4 }}>
                      {pr.title}
                    </strong>
                    <span style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.5 }}>
                      {pr.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </article>

          {/* 8. RELATED JOURNAL ARTICLES (Span 6) */}
          <article className="bento-card bento-card--journal bento-span-6" style={{ padding: 'clamp(22px, 3vw, 32px)' }}>
            <div>
              <span className="bento-tag bento-tag--gold" style={{ marginBottom: 8 }}>{isEn ? 'INSIGHTS & JOURNAL' : 'VERTIEFENDE ARTIKEL'}</span>
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
                        padding: 14,
                        borderRadius: 14,
                        background: 'color-mix(in srgb, var(--bg) 60%, var(--bg-2) 40%)',
                        border: '1px solid var(--line)',
                        textDecoration: 'none',
                        color: 'var(--text)',
                      }}
                    >
                      <div>
                        <strong style={{ fontSize: 13.5, display: 'block', color: 'var(--text)' }}>{post.title}</strong>
                        <span style={{ fontSize: 12, color: 'var(--muted)' }}>
                          {post.minutes} {t.blogMin} · {post.excerpt.slice(0, 60)}…
                        </span>
                      </div>
                      <span style={{ fontSize: 14, color: 'var(--gold)', marginLeft: 12, flexShrink: 0 }}>→</span>
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="bento-desc" style={{ marginTop: 12 }}>{isEn ? 'More insights in the journal.' : 'Weitere Artikel im Journal.'}</p>
              )}
            </div>
          </article>

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
