import { BentoDisclosure } from './BentoDisclosure'
import { Img } from './Img'
import { useLocale } from '../locale'
import { useContent } from '../useContent'

function illuClass(src: string) {
  return /michel-trainer|aud-exec/.test(src) ? 'pillar-illu pillar-illu--portrait' : 'pillar-illu'
}

export function PillarStartContent({ pillarId }: { pillarId: string }) {
  const { lang } = useLocale()
  const isEn = lang === 'en'
  const { audience, audits, compass, startProof } = useContent()
  const audit = audits.find((item) => item.id === pillarId)
  const entry = compass.find((item) => item.id === pillarId)
  const people = audience.filter((item) => item.pillar === pillarId)
  const proofs = startProof.filter((item) => item.pillar === pillarId)

  if (!audit) return null

  return (
    <>
      <article id="einstieg" className="bento-card bento-card--audit-step bento-span-6" style={{ justifyContent: 'space-between' }}>
        <div>
          <span className="bento-audit-badge">{audit.badge}</span>
          <h2 className="bento-title" style={{ fontSize: 19 }}>{audit.title}</h2>
          <p className="bento-desc" style={{ marginBottom: 8 }}>{audit.text}</p>
          <p className="bento-desc" style={{ marginBottom: 12, fontWeight: 700 }}>{audit.focus}</p>
        </div>
        <BentoDisclosure
          title={isEn ? 'Audit scope and outcomes' : 'Prüffelder und Ziel-Outcomes'}
          theme="light"
        >
          <ul className="bento-audit-points" style={{ margin: 0 }}>
            {audit.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </BentoDisclosure>
      </article>

      {entry && (
        <article className="bento-card bento-card--audit-step bento-span-6">
          <div className={illuClass(entry.image)}>
            <Img src={entry.image} alt="" />
          </div>
          <div className="pillar-illu-copy">
            <span className="bento-audit-badge">{isEn ? 'WHEN THIS PILLAR COMES FIRST' : 'WANN DIESE SÄULE ZUERST KOMMT'}</span>
            <h2 className="bento-title" style={{ fontSize: 19 }}>{entry.title}</h2>
            <p className="bento-desc" style={{ marginTop: 8 }}>{entry.text}</p>
          </div>
        </article>
      )}

      {proofs.map((proof) => (
        <article
          key={proof.title}
          className={`bento-card bento-card--audit-step ${proofs.length > 1 ? 'bento-span-6' : 'bento-span-12'}`}
        >
          <div className={illuClass(proof.image)}>
            <Img src={proof.image} alt="" />
          </div>
          <div className="pillar-illu-copy">
            <h2 className="bento-title" style={{ fontSize: 19 }}>{proof.title}</h2>
            <p className="bento-desc" style={{ marginTop: 8 }}>{proof.text}</p>
          </div>
        </article>
      ))}

      {people.length > 0 && (
        <article className="bento-card bento-card--audience bento-span-12">
          <div className="bento-card-header" style={{ marginBottom: 18 }}>
            <div>
              <span className="bento-audit-badge">{isEn ? 'PROFILES AND PRACTICE' : 'ZIELGRUPPEN UND PRAXIS'}</span>
              <h2 className="bento-title" style={{ fontSize: 'clamp(20px, 2.4cqi, 28px)', marginTop: 4 }}>
                {isEn ? 'Who this pillar is built for.' : 'Für wen diese Säule gebaut ist.'}
              </h2>
            </div>
          </div>
          <div className="bento-audience-grid">
            {people.map((person) => (
              <div className="bento-persona-card" key={person.title}>
                <div className="bento-persona-head">
                  <div className="bento-persona-avatar-wrap">
                    <Img className="bento-persona-avatar" src={person.image} alt={person.persona || person.title} />
                  </div>
                  <div className="bento-persona-meta">
                    <span className="bento-persona-role">{person.persona}</span>
                    <h3 className="bento-persona-title">{person.title}</h3>
                  </div>
                </div>
                <div style={{ marginTop: 12 }}>
                  <BentoDisclosure
                    title={isEn ? 'Case dialogue' : 'Praxis-Dialog'}
                    theme="light"
                  >
                    <div className="bento-persona-chat" style={{ marginTop: 8 }}>
                      <div className="bento-chat-msg bento-chat-msg--client">
                        <div className="bento-chat-bubble bento-chat-bubble--client">
                          <p>{person.dailyLife}</p>
                        </div>
                      </div>
                      <div className="bento-chat-msg bento-chat-msg--michel">
                        <div className="bento-chat-bubble bento-chat-bubble--michel">
                          <p>{person.approach}</p>
                        </div>
                      </div>
                    </div>
                  </BentoDisclosure>
                </div>
              </div>
            ))}
          </div>
        </article>
      )}
    </>
  )
}

export function PillarFaq({ pillarId }: { pillarId: string }) {
  const { lang } = useLocale()
  const isEn = lang === 'en'
  const { faqs } = useContent()
  const questions = faqs.filter((item) => item.pillar === pillarId || item.pillar === 'all')

  if (questions.length === 0) return null

  return (
    <article id="faq" className="bento-card bento-card--audit-step bento-span-12" style={{ padding: 'clamp(22px, 3vw, 32px)' }}>
      <span className="bento-audit-badge">FAQ</span>
      <h2 className="bento-title" style={{ fontSize: 20, marginBottom: 12 }}>
        {isEn ? 'Questions about this pillar' : 'Fragen zu dieser Säule'}
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {questions.map((item) => (
          <BentoDisclosure key={item.q} title={item.q} theme="light">
            <p style={{ margin: 0 }}>{item.a}</p>
          </BentoDisclosure>
        ))}
      </div>
    </article>
  )
}
