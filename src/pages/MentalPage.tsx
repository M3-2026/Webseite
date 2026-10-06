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
                alt="M3 Mindset & Mentale Klarheit"
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
                {isEn ? 'MINDSET & DAILY LIFE' : 'MINDSET & ALLTAG'}
              </span>
              <h2 className="bento-title" style={{ fontSize: 'clamp(18px, 1.8cqi, 22px)' }}>
                {pillar.label} · {t.mentalSignalsH}
              </h2>
              <p className="bento-desc">
                {isEn
                  ? 'When cognitive load is high and recovery is missing, typical daily friction emerges:'
                  : 'Wenn der Kopf voll ist und Erholung fehlt, schleichen sich im Alltag typische Muster ein:'}
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
              <span>{isEn ? 'Clarity grows through consistent daily habits.' : 'Klarheit entsteht durch feste Gewohnheiten.'}</span>
            </div>
          </article>

          {/* 3. WAS ALLES ZUSAMMENHÄLT (Span 12) */}
          <article className="bento-card bento-card--mindset bento-span-12" style={{ padding: 'clamp(22px, 3vw, 36px)' }}>
            <div className="bento-card-header" style={{ marginBottom: 20 }}>
              <div>
                <span className="bento-tag bento-tag--azure" style={{ marginBottom: 8 }}>
                  <span className="bento-dot bento-dot--azure" />
                  {isEn ? 'THE CONNECTING FOUNDATION' : 'M³ · DAS BINDEGLIED'}
                </span>
                <h2 className="bento-title" style={{ fontSize: 'clamp(20px, 2.4cqi, 28px)' }}>
                  {isEn ? 'What holds everything together' : 'Was alles zusammenhält'}
                </h2>
                <p className="bento-desc" style={{ maxWidth: '68ch' }}>
                  {isEn
                    ? 'In every coaching automatically integrated – no separate package. Mindset at Michél is the reliable structure that ensures nutrition (M¹) and training (M²) hold in real everyday life.'
                    : 'In jedem Coaching automatisch integriert – kein separates Paket. Mindset bei Michél ist die verlässliche Struktur, die dafür sorgt, dass Ernährung (M¹) und Training (M²) im echten Alltag halten.'}
                </p>
              </div>
            </div>

            <div className="bento-mindset-track">
              {/* Tile 1 */}
              <div className="bento-mindset-tile">
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                    <span className="bento-mindset-badge">
                      01 · FESTE ABLÄUFE
                    </span>
                    <span className="bento-mindset-badge-pill">
                      {isEn ? 'Included' : 'Inklusive'}
                    </span>
                  </div>
                  <h3 style={{ margin: '0 0 6px', fontSize: 15.5, fontWeight: 800, color: 'var(--text)' }}>
                    {isEn ? 'End of daily negotiations' : 'Schluss mit Selbstverhandlung'}
                  </h3>
                  <p style={{ margin: 0, fontSize: 13, lineHeight: 1.55, color: 'var(--muted)' }}>
                    {isEn
                      ? 'Fixed if-then standards in your calendar eliminate friction so you never spend work willpower on health choices.'
                      : 'Feste Wenn-Dann-Standards im Kalender beenden das tägliche Grübeln und sparen wertvolle Energie im Alltag.'}
                  </p>
                </div>
                <div className="bento-mindset-footer">
                  <span style={{ color: pillar.color, fontWeight: 800 }}>✓</span>
                  <span>{isEn ? 'Saves mental energy daily' : 'Spart mentale Energie im Alltag'}</span>
                </div>
              </div>

              {/* Tile 2 */}
              <div className="bento-mindset-tile">
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                    <span className="bento-mindset-badge">
                      02 · REGENERATION & SCHLAF
                    </span>
                    <span className="bento-mindset-badge-pill">
                      {isEn ? 'Included' : 'Inklusive'}
                    </span>
                  </div>
                  <h3 style={{ margin: '0 0 6px', fontSize: 15.5, fontWeight: 800, color: 'var(--text)' }}>
                    {isEn ? 'Deep sleep as a powerhouse' : 'Tiefschlaf als Kraftquelle'}
                  </h3>
                  <p style={{ margin: 0, fontSize: 13, lineHeight: 1.55, color: 'var(--muted)' }}>
                    {isEn
                      ? 'Evening wind-down and restorative deep sleep as the biological foundation for focus, muscle repair, and fat loss.'
                      : 'Abendruhe und tiefe Erholung als biologische Basis für Fokus, Konzentration, Fettabbau und Regeneration.'}
                  </p>
                </div>
                <div className="bento-mindset-footer">
                  <span style={{ color: pillar.color, fontWeight: 800 }}>✓</span>
                  <span>{isEn ? 'Solves exhaustion at the root' : 'Behebt Erschöpfung an der Wurzel'}</span>
                </div>
              </div>

              {/* Tile 3 */}
              <div className="bento-mindset-tile">
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                    <span className="bento-mindset-badge">
                      03 · HALT IM ALLTAG
                    </span>
                    <span className="bento-mindset-badge-pill">
                      {isEn ? 'Included' : 'Inklusive'}
                    </span>
                  </div>
                  <h3 style={{ margin: '0 0 6px', fontSize: 15.5, fontWeight: 800, color: 'var(--text)' }}>
                    {isEn ? 'The protocol for high stress' : 'Der Notfall-Plan bei Stress'}
                  </h3>
                  <p style={{ margin: 0, fontSize: 13, lineHeight: 1.55, color: 'var(--muted)' }}>
                    {isEn
                      ? 'Resilient minimum routines that hold during travel, long workdays, or family chaos without abandoning progress.'
                      : 'Feste Mindeststandards, die selbst bei 60-Stunden-Wochen, Reisen oder Familienchaos greifen.'}
                  </p>
                </div>
                <div className="bento-mindset-footer">
                  <span style={{ color: pillar.color, fontWeight: 800 }}>✓</span>
                  <span>{isEn ? 'Prevents dropping off after 3 weeks' : 'Verhindert den typischen Abbruch'}</span>
                </div>
              </div>

              {/* Tile 4 */}
              <div className="bento-mindset-tile">
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                    <span className="bento-mindset-badge">
                      04 · DEINE SELBSTSTEUERUNG
                    </span>
                    <span className="bento-mindset-badge-pill">
                      {isEn ? 'Included' : 'Inklusive'}
                    </span>
                  </div>
                  <h3 style={{ margin: '0 0 6px', fontSize: 15.5, fontWeight: 800, color: 'var(--text)' }}>
                    {isEn ? 'Making the coach obsolete' : 'Der Coach macht sich überflüssig'}
                  </h3>
                  <p style={{ margin: 0, fontSize: 13, lineHeight: 1.55, color: 'var(--muted)' }}>
                    {isEn
                      ? 'You understand the mechanics of your body deeply so you can adjust independently. Goal is lasting sovereignty.'
                      : 'Du lernst die Hebel deines Körpers verstehen, um dein System eigenständig zu steuern. Ziel ist Unabhängigkeit.'}
                  </p>
                </div>
                <div className="bento-mindset-footer">
                  <span style={{ color: pillar.color, fontWeight: 800 }}>✓</span>
                  <span>{isEn ? 'Lifelong independent mastery' : 'Lebenslange Unabhängigkeit'}</span>
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
                  {isEn ? 'Start directly via M¹ (Nutrition) or M² (Training):' : 'Starte über deinen Hebel in M¹ (Ernährung) oder M² (Training):'}
                </strong>
                <span style={{ fontSize: 13, color: 'var(--muted)' }}>
                  {isEn
                    ? 'M³ mindset routines and sleep principles are automatically embedded from day one.'
                    : 'Die M³ Alltags-Routinen und Schlaf-Prinzipien fließen ab Tag 1 nahtlos mit ein.'}
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

          {/* 4. RELATED JOURNAL ARTICLES (Span 12) */}
          {relatedPosts.length > 0 && (
            <article className="bento-card bento-card--journal bento-span-12" style={{ padding: 'clamp(22px, 3vw, 36px)' }}>
              <div className="bento-card-header" style={{ marginBottom: 20 }}>
                <div>
                  <span className="bento-tag bento-tag--gold" style={{ marginBottom: 8 }}>M³ JOURNAL</span>
                  <h2 className="bento-title" style={{ fontSize: 'clamp(20px, 2.4cqi, 28px)' }}>
                    {isEn ? 'In-depth articles on Mindset & Recovery' : 'Vertiefende Artikel zu Mindset & Erholung'}
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

          {/* 8. MASTER BOTTOM CTA BENTO (Span 12) */}
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
