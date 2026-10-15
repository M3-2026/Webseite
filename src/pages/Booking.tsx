import { BackLink } from '../components/BackLink'
import { useLocale } from '../locale'
import { useContent } from '../useContent'

export function Booking() {
  const { lang } = useLocale()
  const isEn = lang === 'en'
  const { contact } = useContent()

  return (
    <main className="bento-page">
      <div className="wrap">
        <div style={{ marginBottom: 14 }}>
          <BackLink fallback="/" />
        </div>

        {/* Master Bento Grid */}
        <section className="bento-grid" aria-label="Michél Meier 1:1 Mentoring Booking">

          {/* 1. HERO BENTO CARD: 1:1 MENTORING OVERVIEW (Span 8) */}
          <article className="bento-card bento-card--hero bento-card--ink bento-span-12">
            <div className="bento-content bento-content--hero" style={{ maxWidth: 660 }}>
              <div className="bento-tag bento-tag--gold" style={{ marginBottom: 6 }}>
                {isEn ? 'EXCLUSIVE 1:1 MENTORING · MICHÉL MEIER' : 'EXKLUSIVE 1:1 BEGLEITUNG · MICHÉL MEIER'}
              </div>
              <h1 className="bento-hero-h1">
                {isEn ? (
                  <>High-Performance Mentoring. <span>Daily 1:1 Access.</span></>
                ) : (
                  <>1:1 High-Performance Begleitung. <span>Täglicher Zugriff.</span></>
                )}
              </h1>
              <p className="bento-lead">
                {isEn
                  ? 'Daily direct access to Michél Meier. No generic templates or delegated coaching. A holistic biological acceleration across metabolism, biomechanics, and nervous system regulation.'
                  : 'Täglicher direkter Zugriff auf Michél Meier. Kein Standard-Trainingsplan und keine distanzierte Betreuung. Ein ganzheitlich synchronisiertes System über Stoffwechsel, Biomechanik und neuronale Regeneration.'}
              </p>

              <div className="bento-cta-row" style={{ marginTop: 18 }}>
                <a
                  href={contact.wa(
                    isEn
                      ? "Hi Michél, I'm interested in the 30-day mentoring at €150/day."
                      : 'Hallo Michél, ich interessiere mich für die 30-Tage Begleitung für 150€/Tag.',
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

          {/* 2. INVESTMENT & TERMS SUMMARY CARD (Span 4) */}
          <article className="bento-card bento-card--audit-step bento-span-6 bento-pair" style={{ justifyContent: 'space-between' }}>
            <div>
              <span className="bento-audit-badge">{isEn ? 'THE INVESTMENT' : 'DIE KONDITIONEN'}</span>
              
              <div style={{ margin: '14px 0 10px' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
                  <span style={{ fontSize: 'clamp(36px, 4.4cqi, 48px)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.03em' }}>
                    150 €
                  </span>
                  <span style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>
                    {isEn ? '/ day' : '/ Tag'}
                  </span>
                </div>
                <div style={{ fontSize: 13, color: '#fbbf24', fontWeight: 700, marginTop: 4 }}>
                  {isEn ? 'Minimum duration: 30 days (4,500 €)' : 'Mindestabnahme: 30 Tage (4.500 €)'}
                </div>
              </div>

              <p className="bento-desc" style={{ fontSize: 13 }}>
                {isEn
                  ? 'Dedicated high-touch performance mentoring. Strictly capped at 3 simultaneous clients for unmatched focus and execution.'
                  : 'Feste Limitierung auf maximal 3 Klienten parallel, um kompromisslose Betreuungsqualität und messbare Resultate zu garantieren.'}
              </p>
            </div>

            <ul className="bento-audit-points" style={{ margin: '16px 0' }}>
              <li>
                <div>
                  <strong>{isEn ? '360° Baseline & Diagnostics' : '360° Diagnostik & Kickoff'}</strong>
                  <div style={{ fontSize: 12, marginTop: 2 }}>{isEn ? 'Lab, metabolism & movement audit' : 'Blutbild, Stoffwechsel- & Bewegungsanalyse'}</div>
                </div>
              </li>
              <li>
                <div>
                  <strong>{isEn ? 'Daily Direct Access & Check-ins' : 'Täglicher 1:1 Direktdraht'}</strong>
                  <div style={{ fontSize: 12, marginTop: 2 }}>{isEn ? 'Daily voice/chat fine-tuning with Michél' : 'Tägliche Feedback-Schleife via WhatsApp & Voice'}</div>
                </div>
              </li>
              <li>
                <div>
                  <strong>{isEn ? 'Weekly Cal.com Strategy Calls' : 'Wöchentliche Strategy Calls'}</strong>
                  <div style={{ fontSize: 12, marginTop: 2 }}>{isEn ? 'Detailed adjustments & progression review' : 'Deep-Dive Video-Calls zur Progression'}</div>
                </div>
              </li>
            </ul>
          </article>

          {/* 5. PROCESS & PROTOCOL (Span 6) */}
          <article className="bento-card bento-card--audit-step bento-span-6 bento-pair" style={{ padding: 'clamp(22px, 3vw, 32px)' }}>
            <span className="bento-audit-badge">{isEn ? 'THE ROADMAP' : 'DER 30-TAGE-ABLAUF'}</span>
            <h2 className="bento-title" style={{ fontSize: 21, marginTop: 4 }}>
              {isEn ? 'Structured Protocol, Zero Guesswork' : 'Strukturierter Fahrplan, null Raten'}
            </h2>
            <p className="bento-desc" style={{ fontSize: 13 }}>
              {isEn
                ? 'Every day is accounted for with intentional progression:'
                : 'Jeder Tag hat ein klares Ziel – von der Diagnostik bis zur gefestigten Routine:'}
            </p>
            <ul className="bento-audit-points" style={{ marginTop: 14 }}>
              <li>
                <div>
                  <strong>Tag 01: 360° Baseline & Zieldefinition</strong>
                  <div style={{ fontSize: 12, marginTop: 2 }}>Ausführliche Anamnese, Bewegungs- & Lebensstilanalyse.</div>
                </div>
              </li>
              <li>
                <div>
                  <strong>Tag 02–07: Akuter Reset & Engpass-Beseitigung</strong>
                  <div style={{ fontSize: 12, marginTop: 2 }}>Sofortige Entlastung des primären Energie-Lecks.</div>
                </div>
              </li>
              <li>
                <div>
                  <strong>Tag 08–21: Progressive Adaption & Festigung</strong>
                  <div style={{ fontSize: 12, marginTop: 2 }}>Tägliches Finetuning von Ernährung, Reizen und Regeneration.</div>
                </div>
              </li>
              <li>
                <div>
                  <strong>Tag 22–30: Leistungs-Stabilisierung & Zukunfts-Plan</strong>
                  <div style={{ fontSize: 12, marginTop: 2 }}>Feste Verankerung im Kalender und Übergang in Autonomie.</div>
                </div>
              </li>
            </ul>
          </article>

          {/* 6. FAQ & FRAMEWORK (Span 6) */}
          <article className="bento-card bento-card--audit-step bento-span-12" style={{ padding: 'clamp(22px, 3vw, 32px)' }}>
            <span className="bento-audit-badge">{isEn ? 'FAQ & DETAILS' : 'HÄUFIGE FRAGEN'}</span>
            <h2 className="bento-title" style={{ fontSize: 21, marginTop: 4 }}>
              {isEn ? 'Everything You Need to Know' : 'Wichtige Rahmenbedingungen'}
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 14 }}>
              <div>
                <strong style={{ fontSize: 14, color: '#ffffff' }}>
                  {isEn ? 'Why is 30 days the minimum booking period?' : 'Warum beträgt die Mindestabnahme 30 Tage?'}
                </strong>
                <p style={{ margin: '4px 0 0', fontSize: 13, color: 'rgba(255,255,255,0.72)', lineHeight: 1.45 }}>
                  {isEn
                    ? 'Biological adaptation across metabolism, fascial chains, and nervous system pathways requires at least 3 to 4 weeks of consistent stimulus. Shorter durations produce temporary relief, not lasting physiological transformation.'
                    : 'Biologische Adaptionsprozesse (Zellstoffwechsel, Gelenk-Gewebe, Neuroplastizität) benötigen mindestens 3 bis 4 Wochen konsistenter Reize. Alles darunter ist Symptombekämpfung, keine nachhaltige Transformation.'}
                </p>
              </div>

              <div>
                <strong style={{ fontSize: 14, color: '#ffffff' }}>
                  {isEn ? 'Can the mentoring be extended after 30 days?' : 'Kann die Begleitung nach 30 Tagen verlängert werden?'}
                </strong>
                <p style={{ margin: '4px 0 0', fontSize: 13, color: 'rgba(255,255,255,0.72)', lineHeight: 1.45 }}>
                  {isEn
                    ? 'Yes. Many clients extend into a 60- or 90-day phase or transition to the flexible M³ System Hold retainer.'
                    : 'Ja. Viele Klienten verlängern im 30-Tage-Takt oder wechseln im Anschluss in den flexiblen M³ System Hold Modus zur langfristigen Absicherung.'}
                </p>
              </div>

              <div>
                <strong style={{ fontSize: 14, color: '#ffffff' }}>
                  {isEn ? 'How does daily communication work?' : 'Wie läuft die tägliche Kommunikation ab?'}
                </strong>
                <p style={{ margin: '4px 0 0', fontSize: 13, color: 'rgba(255,255,255,0.72)', lineHeight: 1.45 }}>
                  {isEn
                    ? 'Direct WhatsApp channel with voice notes and rapid feedback loops, combined with scheduled Cal.com video strategy calls.'
                    : 'Über einen direkten, priorisierten WhatsApp-Kanal mit schnellen Feedback-Schleifen und Sprachnachrichten, ergänzt durch geplante Video-Deep-Dives via Cal.com.'}
                </p>
              </div>
            </div>
          </article>

        </section>
      </div>
    </main>
  )
}
