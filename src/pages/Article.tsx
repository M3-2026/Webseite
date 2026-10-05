import { Link, useParams } from '@tanstack/react-router'
import { BackLink } from '../components/BackLink'
import { Img } from '../components/Img'
import { useUi } from '../copy'
import { useLocale } from '../locale'
import { useContent } from '../useContent'

function formatDate(iso: string, lang: string) {
  return new Intl.DateTimeFormat(lang === 'en' ? 'en-GB' : 'de-DE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(`${iso}T00:00:00`))
}

export function Article({ slug: slugProp }: { slug?: string }) {
  const params = useParams({ strict: false }) as { slug?: string }
  const slug = slugProp || params?.slug
  const t = useUi()
  const { lang } = useLocale()
  const isEn = lang === 'en'
  const { contact, pillars, posts, wa } = useContent()
  const post = posts.find((p) => p.slug === slug)
  if (!post) {
    return (
      <main className="bento-page">
        <div className="wrap">
          <BackLink fallback="/blog" />
          <p style={{ marginTop: 24 }}>Artikel nicht gefunden.</p>
        </div>
      </main>
    )
  }
  const pillar = pillars.find((p) => p.id === post.pillar)
  const related = posts.filter((p) => p.pillar === post.pillar && p.slug !== post.slug)

  return (
    <main className="bento-page">
      <div className="wrap">
        <div style={{ marginBottom: 14 }}>
          <BackLink fallback="/blog" />
        </div>

        {/* Master Bento Grid */}
        <section className="bento-grid" aria-label={`${post.title} Bento Grid`}>

          {/* 1. HERO BENTO CARD (Span 8) */}
          <article className="bento-card bento-card--hero bento-span-8">
            <picture className="bento-bg">
              <source
                type="image/webp"
                srcSet={`${post.image} 1x, ${post.image.replace('.webp', '@2x.webp')} 2x`}
              />
              <img
                src={post.image.replace('.webp', '.jpg')}
                alt={post.title}
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="bento-bg-img"
              />
            </picture>
            <div className="bento-overlay" />
            <div className="bento-content bento-content--hero">
              <div className="bento-tag-row">
                <span className="bento-tag bento-tag--gold">
                  {pillar ? `${pillar.mark} · ${pillar.name}` : 'M³ SYSTEM'}
                </span>
                <span className="bento-tag">{post.minutes} {t.blogMin}</span>
              </div>
              <h1 className="bento-hero-h1" style={{ marginTop: 6 }}>
                {post.title}
              </h1>
              <p className="bento-lead" style={{ marginTop: 8 }}>
                {post.excerpt}
              </p>
            </div>
          </article>

          {/* 2. PILLAR CONTEXT / QUICK AUDIT CARD (Span 4) */}
          {pillar ? (
            <article className="bento-card bento-card--audit-step bento-span-4" style={{ justifyContent: 'space-between', minHeight: 'clamp(440px, 50vh, 540px)' }}>
              <div>
                <span className="bento-audit-badge">{isEn ? 'SYSTEM PILLAR' : 'SÄULEN-KONTEXT'}</span>
                <h2 className="bento-title" style={{ fontSize: 21 }}>
                  {pillar.mark} · {pillar.name}
                </h2>
                <p className="bento-desc" style={{ marginTop: 8, fontSize: 13, lineHeight: 1.5 }}>
                  {pillar.lead}
                </p>
              </div>

              <div style={{ margin: '14px 0', borderTop: '1px solid rgba(0,0,0,0.08)', paddingTop: 12 }}>
                <span style={{ fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#111111' }}>
                  {isEn ? 'CORE PRINCIPLE' : 'KERNPRINZIP'}
                </span>
                <p style={{ fontStyle: 'italic', fontSize: 13.5, fontWeight: 600, color: '#222222', marginTop: 4 }}>
                  „{pillar.quote}“
                </p>
              </div>

              <Link
                to={`/${pillar.slug}`}
                className="bento-call-btn"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                {t.openPillar}
              </Link>
            </article>
          ) : (
            <article className="bento-card bento-card--audit-step bento-span-4" style={{ justifyContent: 'space-between' }}>
              <div>
                <span className="bento-audit-badge">M³ JOURNAL</span>
                <h2 className="bento-title" style={{ fontSize: 21 }}>{t.blog}</h2>
                <p className="bento-desc" style={{ marginTop: 8, fontSize: 13, lineHeight: 1.5 }}>
                  {t.blogLead}
                </p>
              </div>
              <Link to="/blog" className="bento-call-btn" style={{ width: '100%', justifyContent: 'center' }}>
                {t.blogAll} →
              </Link>
            </article>
          )}

          {/* 3. ARTICLE CONTENT BENTO (Span 12) - High readability layout */}
          <article className="bento-card bento-card--journal bento-span-12" style={{ padding: 'clamp(24px, 4vw, 48px)' }}>
            <div className="prose article-prose" style={{ maxWidth: '68ch', margin: '0 auto', fontSize: 16, lineHeight: 1.75 }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  marginBottom: 28,
                  paddingBottom: 16,
                  borderBottom: '1px solid var(--line)',
                  fontSize: 13,
                  color: 'var(--muted)',
                }}
              >
                <span>{formatDate(post.date, lang)}</span>
                <span>•</span>
                <span>{post.minutes} {t.blogMin}</span>
                {pillar && (
                  <>
                    <span>•</span>
                    <span style={{ fontWeight: 700, color: pillar.color }}>{pillar.name}</span>
                  </>
                )}
              </div>

              {post.body.split('\n\n').map((paragraph, i) => (
                <p key={i} style={{ marginBottom: 20 }}>
                  {paragraph}
                </p>
              ))}
            </div>
          </article>

          {/* 4. RELATED ARTICLES TRACK (Span 12) */}
          {related.length > 0 && (
            <article className="bento-card bento-card--journal bento-span-12" style={{ padding: 'clamp(22px, 3vw, 36px)' }}>
              <div className="bento-card-header" style={{ marginBottom: 20 }}>
                <div>
                  <span className="bento-tag bento-tag--gold" style={{ marginBottom: 8 }}>{t.blogRelated}</span>
                  <h2 className="bento-title" style={{ fontSize: 'clamp(20px, 2.4cqi, 28px)' }}>
                    {isEn ? `More articles in ${pillar?.name || 'M³ System'}` : `Weitere Texte zu ${pillar?.name || 'M³ System'}`}
                  </h2>
                </div>
                <Link to="/blog" className="bento-header-link">
                  {t.blogAll} →
                </Link>
              </div>

              <div className="journal-cards-track" style={{ width: '100%', overflowX: 'auto', paddingBottom: 10 }}>
                {related.map((item) => (
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

          {/* 5. 1:1 CALL TO ACTION BANNER (Span 12) */}
          <article className="bento-card bento-card--start bento-span-12">
            <picture className="bento-bg">
              <source
                type="image/webp"
                srcSet="/images/moodboard/mood-limitless.webp 1x, /images/moodboard/mood-limitless@2x.webp 2x"
              />
              <img
                src="/images/moodboard/mood-limitless.jpg"
                alt="Michél Meier 1:1 Mentoring"
                loading="lazy"
                decoding="async"
                className="bento-bg-img"
              />
            </picture>
            <div className="bento-overlay" />
            <div className="bento-content" style={{ maxWidth: 680 }}>
              <span className="bento-tag bento-tag--gold">{t.firstTalk}</span>
              <h2 className="bento-title" style={{ fontSize: 'clamp(24px, 3.2cqi, 36px)' }}>
                {isEn ? 'Want to solve this for your body?' : 'Möchtest du dieses Thema bei dir lösen?'}
              </h2>
              <p className="bento-lead">
                {isEn
                  ? 'In a 20-minute strategy call, we check where your biggest biological lever lies. Direct, unfiltered, eye-to-eye.'
                  : 'Im 20-minütigen Orientierungsgespräch prüfen wir deinen größten biologischen Hebel. Direkt, ehrlich und auf Augenhöhe.'}
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

        </section>
      </div>
    </main>
  )
}
