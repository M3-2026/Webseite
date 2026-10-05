import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type CSSProperties } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Img } from "@/components/Img";
import { SystemMolecule } from "@/components/SystemMolecule";
import { MichelShow } from "@/components/MichelShow";
import { audience, faqs, pillars, wa } from "@/data/content";
import { posts } from "@/data/posts";

export const Route = createFileRoute("/")({
  component: IndexPage,
  head: () => ({
    meta: [
      { title: "M³ Performance & Gesundheit – Michél Meier | Personal Training & Coaching" },
      {
        name: "description",
        content:
          "M³ Performance & Gesundheit: Ganzheitliches Personal Training, das Stoffwechsel (M¹), Biomechanik (M²) und Mindset (M³) vereint. Für schmerzfreie Belastbarkeit und echte Zellenergie im Alltag.",
      },
    ],
  }),
});

function IndexPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between overflow-x-hidden selection:bg-gold/20 selection:text-foreground">
      <Header />

      <main className="bento-page flex-1">
        <div className="wrap">
          {/* ==========================================================================
              1. BENTO GRID MASTER UNIVERSE
              ========================================================================== */}
          <section className="bento-grid" aria-label="M³ Performance System Bento Grid">
            {/* HERO BENTO CARD (Span 8 - The Vision & Core Promise) */}
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
                  alt="Michél bei der Arbeit in den M³ Angeboten"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  className="bento-bg-img"
                />
              </picture>
              <div className="bento-overlay" />
              <div className="bento-content bento-content--hero">
                <div className="bento-tag-row">
                  <span className="bento-tag bento-tag--gold">30+ Jahre Bewegungserfahrung</span>
                </div>
                <h1 className="bento-hero-h1">
                  M³ Performance &amp; Gesundheit. <span>Schmerzfrei &amp; Klar.</span>
                </h1>
                <p className="bento-lead">
                  Für Unternehmer, Macher &amp; High-Performer: Wir verbinden Stoffwechsel, Biomechanik und Mindset zu einem biologisch fundierten System – nachhaltig &amp; messbar.
                </p>

                {/* Minimalistic Transparent Showreel CTA */}
                <Link to="/ueber-mich" className="hero-btn-showreel">
                  Showreel
                </Link>
              </div>
            </article>

            {/* 20-MIN ORIENTIERUNGSGESPRÄCH BENTO CARD (Span 4 - Clean White Card, High Contrast) */}
            <article className="bento-card bento-card--call-white bento-span-4">
              <div className="bento-content">
                <div>
                  <div style={{ display: "inline-flex", padding: "4px 10px", background: "#f3f0ea", borderRadius: 999, fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", color: "#1c1610", marginBottom: 12 }}>
                    Kostenlos &amp; Unverbindlich
                  </div>
                  <h2 className="bento-title">
                    20 Min. Orientierungsgespräch mit Michél
                  </h2>
                  <p className="bento-desc">
                    Wir prüfen direkt und ehrlich, wo dein größter Hebel liegt. Unverbindlich, diskret und auf Augenhöhe.
                  </p>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 18 }}>
                  <a
                    href={wa.talk}
                    target="_blank"
                    rel="noreferrer"
                    className="bento-call-btn"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 16, height: 16 }}>
                      <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
                    </svg>
                    Erstgespräch via WhatsApp
                  </a>
                  <a
                    href="https://cal.com/michelmeier/30min"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      fontSize: 12.5,
                      fontWeight: 700,
                      color: "#1c1610",
                      padding: "10px 14px",
                      textDecoration: "underline",
                    }}
                  >
                    Oder 30 Min. Cal.com Slot buchen →
                  </a>
                </div>
              </div>
            </article>

            {/* PILLAR M¹: METABOLISM (Span 4 - The Internal Foundation) */}
            <Link
              to="/metabolism"
              className="bento-card bento-card--pillar bento-card--m1 bento-span-4"
              style={{ "--pillar-color": "#e8a14a" } as CSSProperties}
              aria-label="Säule M1 Metabolismus & Zellenergie"
            >
              <div className="bento-molecule-visual">
                <SystemMolecule />
              </div>
              <div className="bento-overlay" />
              <div className="bento-content">
                <h2 className="bento-title">
                  <span className="bento-pillar-accent" style={{ color: "#e8a14a" }}>M¹</span> Metabolismus &amp; Zellenergie
                </h2>
                <p className="bento-desc">
                  Stabiler Blutzucker, Darmgesundheit und optimale Nährstoffverwertung für konstante Tagesenergie.
                </p>
                <div className="bento-arrow-btn">
                  <span>Säule M¹ entdecken →</span>
                </div>
              </div>
            </Link>

            {/* PILLAR M²: BIOMECHANICS (Span 4 - The Physical Freedom) */}
            <Link
              to="/movement"
              className="bento-card bento-card--pillar bento-card--m2 bento-span-4"
              style={{ "--pillar-color": "#2f9a72" } as CSSProperties}
              aria-label="Säule M2 Biomechanik & Schmerzfreiheit"
            >
              <picture className="bento-bg">
                <source
                  type="image/webp"
                  srcSet="/images/moodboard/mood-limitless.webp 1x, /images/moodboard/mood-limitless.webp 2x"
                />
                <source
                  srcSet="/images/moodboard/mood-limitless.jpg 1x, /images/moodboard/mood-limitless.jpg 2x"
                />
                <img
                  src="/images/moodboard/mood-limitless.jpg"
                  alt="M2 Biomechanik Mobilität & Schmerzfreiheit"
                  loading="lazy"
                  decoding="async"
                  className="bento-bg-img"
                />
              </picture>
              <div className="bento-overlay" />
              <div className="bento-content">
                <h2 className="bento-title">
                  <span className="bento-pillar-accent" style={{ color: "#2f9a72" }}>M²</span> Biomechanik &amp; Schmerzfreiheit
                </h2>
                <p className="bento-desc">
                  Gelenkstabilität, funktionelle Mobilität und maximale Belastbarkeit im Alltag und Sport.
                </p>
                <div className="bento-arrow-btn">
                  <span>Säule M² entdecken →</span>
                </div>
              </div>
            </Link>

            {/* PILLAR M³: MINDSET (Span 4 - The Mental Clarity) */}
            <Link
              to="/mental-performance"
              className="bento-card bento-card--pillar bento-card--m3 bento-span-4"
              style={{ "--pillar-color": "#4f6fd6" } as CSSProperties}
              aria-label="Säule M3 Mindset & neuronale Klarheit"
            >
              <picture className="bento-bg">
                <source
                  type="image/webp"
                  srcSet="/images/moodboard/mood-focus.webp 1x, /images/moodboard/mood-focus.webp 2x"
                />
                <source
                  srcSet="/images/moodboard/mood-focus.jpg 1x, /images/moodboard/mood-focus.jpg 2x"
                />
                <img
                  src="/images/moodboard/mood-focus.jpg"
                  alt="M3 Mindset Fokus & neuronale Klarheit"
                  loading="lazy"
                  decoding="async"
                  className="bento-bg-img"
                />
              </picture>
              <div className="bento-overlay" />
              <div className="bento-content">
                <h2 className="bento-title">
                  <span className="bento-pillar-accent" style={{ color: "#4f6fd6" }}>M³</span> Mindset &amp; neuronale Klarheit
                </h2>
                <p className="bento-desc">
                  Entscheidungsökonomie, tiefer Schlaf und Stressresilienz – trainiert wie ein Muskel.
                </p>
                <div className="bento-arrow-btn">
                  <span>Säule M³ entdecken →</span>
                </div>
              </div>
            </Link>
          </section>
        </div>

        {/* ==========================================================================
            2. ABOUT MICHÉL SECTION (Particle Animated Show & Authenticity)
            ========================================================================== */}
        <section className="section michel-section" id="about-michel">
          <div className="wrap michel-split">
            <div className="michel-visual">
              <MichelShow />
            </div>
            <div className="michel-copy">
              <span className="eyebrow">Authentizität</span>
              <h2>Hinter M³ steckt mehr als Training.</h2>
              <div className="michel-block">
                <p>
                  Michél ist kein Trainer, der ein System von der Stange verkauft. Er kommt aus 30+ Jahren Bewegung &amp; Erfahrung: Breakdance, Bühne, Weltmeisterschaft — und aus dem Leben dazwischen. Alleinerziehender Vater. Ein Bandscheibenvorfall im Halswirbelbereich, der ihn fast gestoppt hätte. Jahre, in denen Disziplin allein nicht mehr gereicht hat.
                </p>
                <p>
                  Genau deshalb sitzt M³. Er kennt den Moment, in dem der Körper nicht mitzieht, obwohl der Kopf will. Und er kennt den anderen: wenn jemand Verständnis braucht — und wann einen klaren Impuls. Ohne Dogma. Ohne Show. Mit dem Ziel, dass du irgendwann ohne ihn weiterkommst.
                </p>
                <p style={{ fontStyle: "italic", fontWeight: 700, color: "var(--text)" }}>
                  „Manchmal braucht es Verständnis. Manchmal einen Arschtritt. Oft beides.“
                </p>
                <p className="michel-meta">
                  2006 / 2007 · IDO World Champion · Master Personal Trainer i. A. · 30+ Jahre Bewegung
                </p>
              </div>
              <div style={{ marginTop: 20 }}>
                <Link
                  to="/ueber-mich"
                  className="btn btn-ghost"
                  style={{ width: "fit-content", padding: "10px 22px", borderRadius: 999, border: "1px solid var(--line)", fontSize: 13.5, fontWeight: 700 }}
                >
                  Mehr über Michél erfahren →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================================================
            3. AUDIENCE BENTO SECTION (Span 12 - Who this is for with Chat Bubbles)
            ========================================================================== */}
        <div className="wrap">
          <section className="bento-grid" aria-label="M³ Personas & Dialogues">
            <article className="bento-card bento-card--audience bento-span-12">
              <div className="bento-card-header">
                <div>
                  <span className="eyebrow" style={{ marginBottom: 8 }}>Zielgruppen im System</span>
                  <h2 className="bento-title" style={{ fontSize: "clamp(22px, 2.8vw, 30px)" }}>
                    Für wen das M³-System gebaut ist
                  </h2>
                </div>
                <Link to="/katalog" className="bento-header-link">
                  Alle Angebote im Katalog →
                </Link>
              </div>

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
                          <span className="bento-chat-author">{a.persona.split("·")[0].trim()}</span>
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

          {/* ==========================================================================
              4. STANDALONE JOURNAL SECTION (10 Science & Practice Articles Track)
              ========================================================================== */}
          <section className="journal-standalone-section" id="journal" aria-labelledby="journal-main-heading">
            <div className="journal-standalone-header">
              <span className="journal-standalone-kicker">M³ Journal &amp; Wissenschaft</span>
              <h2 id="journal-main-heading" className="journal-standalone-title">
                Wenn du verstehen willst, <span className="journal-title-accent">wie dein Körper wirklich funktioniert.</span>
              </h2>
              <p className="journal-standalone-lead">
                Nicht Theorie für die Schublade. 10 fundamentale Texte aus der Praxis – warum der Blutzucker abstürzt, warum Last ohne saubere Bahn verschleißt und wie Routinen ohne Motivations-Hype halten.
              </p>

              <div className="journal-header-actions">
                <Link to="/blog" className="journal-header-link">
                  Alle 10 Texte ansehen →
                </Link>
              </div>
            </div>

            <div className="journal-cards-container">
              <div className="journal-cards-track">
                {posts.map((post) => {
                  const pillar = pillars.find((p) => p.id === post.pillar);
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
                              borderColor: pillar.color,
                              color: pillar.color,
                            }}
                          >
                            {pillar.mark} · {pillar.name}
                          </span>
                        )}
                      </div>
                      <div className="journal-feed-body">
                        <div>
                          <h3 className="journal-feed-title">{post.title}</h3>
                          <p className="journal-feed-excerpt" style={{ marginTop: 6 }}>{post.excerpt}</p>
                        </div>
                        <div className="journal-feed-footer">
                          <span className="journal-feed-cta">
                            Lesen <span className="journal-feed-arrow" aria-hidden="true">→</span>
                          </span>
                          <span className="journal-feed-min">{post.minutes} Min.</span>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>

          {/* ==========================================================================
              5. STANDALONE FAQ SECTION (Centered Container, Accordion)
              ========================================================================== */}
          <section className="faq-standalone-section" id="faq" aria-labelledby="faq-main-heading">
            <div className="faq-standalone-container">
              <header className="faq-standalone-header">
                <span className="faq-standalone-kicker">FAQ</span>
                <h2 id="faq-main-heading" className="faq-standalone-title">Häufige Fragen</h2>
                <p className="faq-standalone-lead">
                  Direkte und ehrliche Antworten zu Ablauf, Betreuung und dem M³-System.
                </p>
              </header>

              <div className="faq-standalone-list">
                {faqs.map((f, i) => {
                  const isOpen = openFaq === i;
                  return (
                    <div
                      key={f.q}
                      className={`faq-standalone-item ${isOpen ? "is-open" : ""}`}
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
                            className={`faq-chevron-icon ${isOpen ? "is-rotated" : ""}`}
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
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
