import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PathwayCrossNav } from "@/components/PathwayCrossNav";

export const Route = createFileRoute("/performance-training")({
  component: PerformanceTrainingPage,
});

function PerformanceTrainingPage() {
  const WHATSAPP_URL = "https://wa.me/4917699016640?text=Hallo%20Mich%C3%A9l,%20ich%20interessiere%20mich%20f%C3%BCr%20ein%20kostenloses%20Erstgespr%C3%A4ch%20zu%20M%C2%B3%20Performance%20Training.";

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between overflow-x-hidden">
      <Header />
      <Breadcrumbs
        items={[
          { label: "M² Movement", href: "/movement", pillar: "m2" },
          { label: "M² Performance Training", pillar: "m2" },
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
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs uppercase tracking-[0.18em] text-emerald-700 font-bold animate-fade-in">
                M² · 1:1 Personal Training
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-display font-extrabold leading-[1.08] tracking-tight text-foreground break-words hyphens-auto">
                M² Performance Training
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-emerald-700 font-medium leading-relaxed max-w-2xl">
                Wissenschaftlich fundierter Kraft- und Muskelaufbau mit präziser anatomischer Belastungssteuerung.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl whitespace-pre-line">
                Nachhaltige Leistungsfähigkeit entsteht nicht durch Zufall oder sinnloses Auspowern.
                {"\n\n"}
                Mit einer maßgeschneiderten 1:1 Strategie, anatomisch sauberer Übungsausführung und über 25 Jahren Praxiserfahrung schaffen wir echte Kraft, Gelenkstabilität und Belastbarkeit für Beruf und Alltag.
              </p>

              <div className="pt-2">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-700 px-8 py-4 font-semibold text-white shadow-lg hover:bg-emerald-800 transition"
                >
                  Kostenloses Erstgespräch
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center lg:justify-end shrink-0 w-full">
              <div className="relative w-full max-w-[380px] sm:max-w-md rounded-3xl overflow-hidden border border-emerald-500/30 bg-card/80 shadow-2xl group aspect-square">
                <img
                  src="/images/performance/hero-performance-training.jpg"
                  alt="M² Performance Training – 1:1 Personal Training & Biomechanik"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                
                {/* Floating Glassmorphic UI Chip */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-black/60 backdrop-blur-md border border-white/15 text-white shadow-xl flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center text-sm font-bold shrink-0">
                      🏋️
                    </div>
                    <div>
                      <div className="text-xs font-bold tracking-tight text-white">1:1 Performance Training</div>
                      <div className="text-[10px] text-slate-300">Kraft, Athletik & Biomechanik</div>
                    </div>
                  </div>
                  <span className="text-[9px] font-mono uppercase tracking-wider text-emerald-400 font-bold px-2 py-0.5 rounded-md bg-emerald-500/20 border border-emerald-500/30">
                    M² Movement
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ABSCHNITT 2: Warum individuelles Performance Training? */}
          <section className="py-16 border-t border-border/80">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h2 className="text-3xl font-display text-gold">Warum Performance Training?</h2>
              </div>
              <div className="md:col-span-2 text-muted-foreground leading-relaxed whitespace-pre-line text-base">
                Jeder Mensch bringt unterschiedliche Voraussetzungen mit.
                {"\n\n"}
                Deshalb gibt es bei M³ keine Standardpläne.
                {"\n\n"}
                Wir entwickeln ein Training, das sich an deinem Körper, deinem Alltag und deinen persönlichen Zielen orientiert.
                {"\n\n"}
                Denn nachhaltiger Fortschritt entsteht dann, wenn Training zu dir passt – nicht umgekehrt.
              </div>
            </div>
          </section>

          {/* ABSCHNITT 3: Mehr als ein Trainingsplan */}
          <section className="py-16 border-t border-border/80">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h2 className="text-3xl font-display text-gold">Mehr als ein Trainingsplan</h2>
              </div>
              <div className="md:col-span-2">
                <p className="text-muted-foreground leading-relaxed mb-8 whitespace-pre-line">
                  Performance bedeutet mehr als Muskelaufbau oder Gewichtsreduktion.
                  {"\n\n"}
                  Es geht darum, deinen Körper gezielt weiterzuentwickeln und dabei Gesundheit, Bewegungsqualität und langfristige Leistungsfähigkeit gleichermaßen zu berücksichtigen.
                  {"\n\n"}
                  Im Mittelpunkt stehen unter anderem:
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Kraft",
                    "Bewegungsqualität",
                    "Mobilität",
                    "Stabilität",
                    "Koordination",
                    "Belastungssteuerung",
                    "Regeneration"
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 py-3 px-5 rounded-xl border border-border bg-card/45">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ABSCHNITT 4: Für wen eignet sich M² Performance Training? */}
          <section className="py-16 border-t border-border/80">
            <h2 className="text-3xl font-display text-center mb-12">Für wen eignet sich M² Performance Training?</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                "Muskelaufbau",
                "Körperfett reduzieren",
                "Leistungsfähigkeit steigern",
                "Bewegungsqualität verbessern",
                "Wiedereinstieg nach einer Pause",
                "Zielgerichtetes Personal Training",
                "Langfristige Entwicklung"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-gold/10 text-gold flex items-center justify-center text-xs font-semibold shrink-0">✓</span>
                  <span className="text-sm font-medium text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* ABSCHNITT 5: Unser Trainingsansatz */}
          <section className="py-16 border-t border-border/80">
            <h2 className="text-3xl font-display text-center mb-12">Unser Trainingsansatz</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Analyse",
                  desc: "Wir starten mit einer ehrlichen Bestandsaufnahme."
                },
                {
                  title: "Strategie",
                  desc: "Gemeinsam entwickeln wir einen individuellen Trainingsplan."
                },
                {
                  title: "Umsetzung",
                  desc: "Schritt für Schritt setzen wir den Plan in die Praxis um."
                },
                {
                  title: "Weiterentwicklung",
                  desc: "Training wird regelmäßig angepasst und gemeinsam weiterentwickelt."
                }
              ].map((item, idx) => (
                <div key={item.title} className="border border-border bg-card p-6 rounded-2xl flex flex-col justify-between hover:border-gold/40 transition-all hover:translate-y-[-2px]">
                  <div>
                    <div className="w-8 h-8 rounded-full bg-gold/10 text-gold flex items-center justify-center font-display text-xs mb-6">
                      0{idx + 1}
                    </div>
                    <h3 className="text-lg font-display text-gold mb-3">{item.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ABSCHNITT 6: Nachhaltige Leistung entsteht durch Struktur. */}
          <section className="py-16 border-t border-border/80 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display mb-6">Nachhaltige Leistung entsteht durch Struktur.</h2>
              <p className="text-muted-foreground leading-relaxed mb-10 whitespace-pre-line">
                Erfolg im Training ist selten das Ergebnis einzelner Höchstleistungen.
                {"\n\n"}
                Er entsteht durch Kontinuität, sinnvolle Planung und eine Strategie, die langfristig funktioniert.
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

      <PathwayCrossNav currentRoute="movement" />
      <Footer />
    </div>
  );
}
