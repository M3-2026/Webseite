import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PathwayCrossNav } from "@/components/PathwayCrossNav";

export const Route = createFileRoute("/body-reset")({
  component: BodyResetPage,
});

function BodyResetPage() {
  const WHATSAPP_URL = "https://wa.me/4917699016640?text=Hallo%20Mich%C3%A9l,%20ich%20interessiere%20mich%20f%C3%BCr%20ein%20kostenloses%20Erstgespr%C3%A4ch%20zum%20M%C2%B3%20Body%20Reset.";

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between overflow-x-hidden">
      <Header />
      <Breadcrumbs
        items={[
          { label: "M¹ Metabolism", href: "/metabolism", pillar: "m1" },
          { label: "M³ Body Reset", pillar: "gold" },
        ]}
      />

      <main className="flex-grow py-12 md:py-20 relative hero-bg">
        {/* Decorative background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-gold/5 blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-5 sm:px-6">

          {/* HERO */}
          <div className="mb-20 grid lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
            <div className="lg:col-span-7 space-y-5 sm:space-y-6 min-w-0">
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3.5 py-1 text-xs uppercase tracking-[0.18em] text-orange-600 font-bold animate-fade-in">
                M¹ · Flaggschiff-Konzept
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-display font-extrabold leading-[1.08] tracking-tight text-foreground break-words hyphens-auto">
                M³ Body Reset
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gold font-medium leading-relaxed max-w-2xl">
                Ganzheitliche Zellregeneration, Darmgesundheit und spürbare Vitalität von Grund auf.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl whitespace-pre-line">
                Mehr Energie. Mehr Wohlbefinden. Mehr nachhaltige Leistungsfähigkeit.
                {"\n\n"}
                Der M³ Body Reset unterstützt dich dabei, deinen Stoffwechsel neu auszurichten – individuell, evidenzbasiert und mit einem ganzheitlichen Blick auf Ernährung, Zellgesundheit und Mikrobiom.
              </p>

              <div className="pt-2">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-gold-gradient px-8 py-4 font-semibold text-primary-foreground shadow-[var(--shadow-gold)] hover:opacity-90 transition"
                >
                  Erst verstehen. Dann entscheiden. ➔ Erstgespräch
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center lg:justify-end shrink-0 w-full">
              <div className="relative w-full max-w-[360px] sm:max-w-md rounded-3xl overflow-hidden border-2 border-gold/40 shadow-2xl bg-black group aspect-square">
                <img
                  src="/images/performance/card-body-reset.png"
                  alt="M³ Body Reset – Dein Neustart von innen"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          {/* ABSCHNITT 2: Warum überhaupt ein Body Reset? */}
          <section className="py-16 border-t border-border/80">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h2 className="text-3xl font-display text-gold">Warum überhaupt ein Body Reset?</h2>
              </div>
              <div className="md:col-span-2">
                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  Viele Menschen investieren Zeit in Training, achten auf ihre Ernährung und möchten ihrer Gesundheit etwas Gutes tun.
                </p>
                <div className="border-l-2 border-gold/40 pl-6 py-2 my-8 space-y-3">
                  <p className="text-foreground font-medium italic">...und trotzdem fehlt häufig die Energie.</p>
                  <p className="text-foreground font-medium italic">...und trotzdem bleibt der gewünschte Erfolg aus.</p>
                  <p className="text-foreground font-medium italic">...und trotzdem fühlt sich der Körper nicht im Gleichgewicht.</p>
                </div>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line text-base">
                  Oft liegt das Problem nicht am fehlenden Einsatz.
                  {"\n\n"}
                  Sondern daran, dass die Grundlage nicht ausreichend berücksichtigt wird.
                  {"\n\n"}
                  Genau hier setzt der M³ Body Reset an.
                </p>
              </div>
            </div>
          </section>

          {/* ABSCHNITT 3: Was bedeutet Body Reset? */}
          <section className="py-16 border-t border-border/80">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h2 className="text-3xl font-display text-gold">Was bedeutet Body Reset?</h2>
              </div>
              <div className="md:col-span-2">
                <p className="text-muted-foreground leading-relaxed mb-8 whitespace-pre-line">
                  Der M³ Body Reset ist kein kurzfristiges Programm.
                  {"\n\n"}
                  Er ist der strukturierte Einstieg in eine nachhaltige Veränderung.
                  {"\n\n"}
                  Gemeinsam betrachten wir die Bereiche, die für deine Gesundheit und Leistungsfähigkeit entscheidend sind.
                  {"\n\n"}
                  Dazu gehören unter anderem:
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {[
                    "Ernährung",
                    "Darm & Verdauung",
                    "Stoffwechsel",
                    "Energiehaushalt",
                    "Regeneration",
                    "Individuelle Versorgung"
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 py-3 px-5 rounded-xl border border-border bg-card/45">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed italic font-medium">
                  Denn jeder Mensch bringt unterschiedliche Voraussetzungen mit. Deshalb gibt es auch keine Standardlösung.
                </p>
              </div>
            </div>
          </section>

          {/* ABSCHNITT: Die Bausteine des M³ Body Reset */}
          <section className="py-16 border-t border-border/80">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold block">
                Modulare Struktur
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight">
                Die Programme im Body Reset
              </h2>
              <p className="text-muted-foreground text-sm md:text-base">
                Je nach deinem individuellen Bedarf kombinieren wir die Kuren mit der dauerhaften Grundversorgung:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Darmkur */}
              <div className="rounded-2xl border border-border bg-card p-6 flex flex-col justify-between hover:border-gold/50 transition-all shadow-sm">
                <div>
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-gold/10 px-3 py-1 text-xs font-bold text-gold mb-4">
                    <span>16 Tage</span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-2">
                    Die Darmkur
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                    Gezielte Entlastung und Aufbau des Mikrobioms sowie der Darmschleimhaut. Für eine regulierte Verdauung und optimale Nährstoffaufnahme.
                  </p>
                </div>
                <div className="text-xs font-semibold text-foreground pt-4 border-t border-border/60">
                  ✓ Mikrobiom & Schleimhaut
                </div>
              </div>

              {/* Stoffwechselkur */}
              <div className="rounded-2xl border border-border bg-card p-6 flex flex-col justify-between hover:border-gold/50 transition-all shadow-sm">
                <div>
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-gold/10 px-3 py-1 text-xs font-bold text-gold mb-4">
                    <span>Min. 21 Tage + Stabilisation</span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-2">
                    Die Stoffwechselkur
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                    Strenge Phase zur Reaktivierung des Fettstoffwechsels bis zum Idealgewicht, gefolgt von einer gleichlangen Stabilisationsphase.
                  </p>
                </div>
                <div className="text-xs font-semibold text-foreground pt-4 border-t border-border/60">
                  ✓ Fettstoffwechsel & Wunschgewicht
                </div>
              </div>

              {/* Goldene Grundversorgung */}
              <div className="rounded-2xl border border-border bg-card p-6 flex flex-col justify-between hover:border-gold/50 transition-all shadow-sm">
                <div>
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-gold/10 px-3 py-1 text-xs font-bold text-gold mb-4">
                    <span>Dauerhaft & Zeitlich unbegrenzt</span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-2">
                    Goldene Grundversorgung
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                    Wissenschaftlich fundierte Grundversorgung mit allen essenziellen Vitalstoffen – das tägliche Fundament für Zellregeneration.
                  </p>
                </div>
                <div className="text-xs font-semibold text-foreground pt-4 border-t border-border/60">
                  ✓ Tägliches Nährstoff-Fundament
                </div>
              </div>
            </div>
          </section>

          {/* ABSCHNITT 4: Für wen eignet sich der M³ Body Reset? */}
          <section className="py-16 border-t border-border/80">
            <h2 className="text-3xl font-display text-center mb-12">Für wen eignet sich der M³ Body Reset?</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                "Du möchtest wieder mehr Energie im Alltag.",
                "Du möchtest deine Ernährung neu strukturieren.",
                "Du möchtest deine Darmgesundheit unterstützen.",
                "Du möchtest deinen Stoffwechsel sinnvoll begleiten.",
                "Du möchtest deine Gesundheit langfristig verbessern.",
                "Du möchtest die Grundlage schaffen, bevor du mit Training oder Leistungssteigerung beginnst."
              ].map((item) => (
                <div key={item} className="flex items-start gap-4 p-4 rounded-xl border border-border/50 bg-card/30">
                  <span className="w-5 h-5 rounded-full bg-gold/10 text-gold flex items-center justify-center text-xs font-semibold shrink-0 mt-0.5">✓</span>
                  <span className="text-sm font-medium text-muted-foreground leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* ABSCHNITT 5: So läuft der M³ Body Reset ab */}
          <section className="py-16 border-t border-border/80">
            <h2 className="text-3xl font-display text-center mb-16">So läuft der M³ Body Reset ab</h2>
            <div className="relative max-w-xl mx-auto">
              {/* Central vertical line */}
              <div className="absolute top-0 bottom-0 left-[20px] md:left-1/2 w-0.5 bg-border -translate-x-1/2 z-0" />

              <div className="space-y-12 relative z-10">
                {[
                  { step: "1️⃣", title: "Kennenlernen", desc: "Ein unverbindliches Erstgespräch zum Besprechen deiner Ziele." },
                  { step: "2️⃣", title: "Analyse deiner Ausgangssituation", desc: "Ganzheitlicher Blick auf deine Gewohnheiten, Ernährung und Stoffwechsel." },
                  { step: "3️⃣", title: "Individuelle Strategie", desc: "Erstellung eines strukturierten, auf dich angepassten Ablaufplans." },
                  { step: "4️⃣", title: "Begleitete Umsetzung", desc: "Persönliche Unterstützung bei der Etablierung neuer Routinen." },
                  { step: "5️⃣", title: "Nachhaltige Integration", desc: "Dauerhafte Verankerung der Fortschritte in deinen Alltag." }
                ].map((item, idx) => (
                  <div key={item.title} className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-0">
                    {/* Left spacing/content on desktop */}
                    <div className={`hidden md:block w-[42%] text-right ${idx % 2 !== 0 ? "opacity-0 pointer-events-none" : ""}`}>
                      <h4 className="font-semibold text-lg text-gold mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>

                    {/* Central Icon */}
                    <div className="w-[40px] h-[40px] rounded-full border-2 border-gold bg-background flex items-center justify-center z-10 text-lg shrink-0 select-none shadow-sm md:mx-auto">
                      {item.step}
                    </div>

                    {/* Right spacing/content on desktop & all content on mobile */}
                    <div className={`w-[85%] md:w-[42%] text-left ${idx % 2 === 0 ? "md:opacity-0 md:pointer-events-none" : ""}`}>
                      <h4 className="font-semibold text-lg text-gold mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ABSCHNITT 6: Die Goldene Grundversorgung */}
          <section className="py-16 border-t border-border/80">
            <div className="rounded-2xl border border-border bg-card/60 p-8 md:p-12 shadow-sm">
              <div className="max-w-3xl">
                <span className="text-xs uppercase tracking-widest text-gold font-semibold block mb-4">Ergänzende Versorgung</span>
                <h2 className="text-3xl font-display mb-6">Die Goldene Grundversorgung</h2>
                <p className="text-muted-foreground leading-relaxed mb-8 whitespace-pre-line">
                  Eine gute Versorgung bildet die Grundlage vieler Stoffwechsel- und Regenerationsprozesse.
                  {"\n\n"}
                  Deshalb ist die Goldene Grundversorgung ein wichtiger Bestandteil des M³ Body Reset.
                  {"\n\n"}
                  Sie wird individuell auf deine Situation abgestimmt und sinnvoll in das Gesamtkonzept integriert.
                </p>
                <Link
                  to="/goldene-grundversorgung"
                  className="inline-flex items-center justify-center rounded-full bg-secondary hover:bg-secondary/80 px-6 py-3 text-sm font-semibold border border-border transition"
                >
                  Mehr zur Goldenen Grundversorgung
                </Link>
              </div>
            </div>
          </section>

          {/* ABSCHNITT 7: Der erste Schritt beginnt heute. */}
          <section className="py-16 border-t border-border/80 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display mb-6">Der erste Schritt beginnt heute.</h2>
              <p className="text-muted-foreground leading-relaxed mb-10 whitespace-pre-line">
                Gesundheit entsteht nicht durch Zufall.
                {"\n\n"}
                Sie entwickelt sich Schritt für Schritt.
                {"\n\n"}
                Genau dabei begleitet dich der M³ Body Reset.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-gold-gradient px-8 py-4 font-semibold text-primary-foreground shadow-[var(--shadow-gold)] hover:opacity-90 transition"
              >
                Kostenloses Erstgespräch vereinbaren
              </a>
            </div>
          </section>
        </div>
      </main>

      <PathwayCrossNav currentRoute="body-reset" />
      <Footer />
    </div>
  );
}
