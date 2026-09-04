import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PathwayCrossNav } from "@/components/PathwayCrossNav";

export const Route = createFileRoute("/schmerzfrei")({
  component: SchmerzfreiPage,
});

function SchmerzfreiPage() {
  const WHATSAPP_URL = "https://wa.me/4917699016640?text=Hallo%20Mich%C3%A9l,%20ich%20interessiere%20mich%20f%C3%BCr%20ein%20kostenloses%20Erstgespr%C3%A4ch%20zu%20M%C2%B3%20Schmerzfrei.";

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between overflow-x-hidden">
      <Header />
      <Breadcrumbs
        items={[
          { label: "M² Movement", href: "/movement", pillar: "m2" },
          { label: "M² Schmerzfrei", pillar: "m2" },
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
                M² · Reha & Mobilität
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-display font-extrabold leading-[1.08] tracking-tight text-foreground break-words hyphens-auto">
                M² Schmerzfrei
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-emerald-700 font-medium leading-relaxed max-w-2xl">
                Gezielte Korrektur muskulärer Dysbalancen für dauerhafte Schmerzfreiheit in Rücken, Nacken und Gelenken.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl whitespace-pre-line">
                Chronische Verspannungen, Rückenschmerzen oder Bewegungseinschränkungen belasten den gesamten Alltag.
                {"\n\n"}
                Gemeinsam identifizieren wir muskuläre Fehlspannungen, korrigieren fehlerhafte Bewegungsmuster und bringen deinen Körper Schritt für Schritt zurück in volle Stabilität und schmerzfreie Funktion.
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
                  src="/images/performance/hero-schmerzfrei.jpg"
                  alt="M² Schmerzfrei – Gezielte Schmerzbefreiung & Mobilität"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                
                {/* Floating Glassmorphic UI Chip */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-black/60 backdrop-blur-md border border-white/15 text-white shadow-xl flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center text-sm font-bold shrink-0">
                      🛡️
                    </div>
                    <div>
                      <div className="text-xs font-bold tracking-tight text-white">Reha & Mobilität</div>
                      <div className="text-[10px] text-slate-300">Rücken, Nacken & Gelenke</div>
                    </div>
                  </div>
                  <span className="text-[9px] font-mono uppercase tracking-wider text-emerald-400 font-bold px-2 py-0.5 rounded-md bg-emerald-500/20 border border-emerald-500/30">
                    Schmerzfrei
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ABSCHNITT 2: Schmerz verändert Bewegung. */}
          <section className="py-16 border-t border-border/80">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h2 className="text-3xl font-display text-gold">Schmerz verändert Bewegung.</h2>
              </div>
              <div className="md:col-span-2 text-muted-foreground leading-relaxed whitespace-pre-line text-base">
                Viele Menschen vermeiden bestimmte Bewegungen aus Unsicherheit oder aufgrund von Beschwerden.
                {"\n\n"}
                Dadurch entstehen häufig Ausweichbewegungen, Einschränkungen oder ein zunehmender Verlust an Beweglichkeit.
                {"\n\n"}
                M² Schmerzfrei setzt genau dort an.
                {"\n\n"}
                Unser Ziel ist es, Bewegung wieder verständlich, sicher und alltagstauglich zu gestalten.
              </div>
            </div>
          </section>

          {/* ABSCHNITT 3: Unser Ansatz */}
          <section className="py-16 border-t border-border/80">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h2 className="text-3xl font-display text-gold">Unser Ansatz</h2>
              </div>
              <div className="md:col-span-2">
                <p className="text-muted-foreground leading-relaxed mb-8 whitespace-pre-line">
                  Nicht jede Beschwerde hat dieselbe Ursache.
                  {"\n\n"}
                  Deshalb beginnt jede Zusammenarbeit mit einer individuellen Betrachtung deiner Situation.
                  {"\n\n"}
                  Gemeinsam entwickeln wir Strategien, die zu deinem Körper, deinem Alltag und deinen persönlichen Zielen passen.
                  {"\n\n"}
                  Im Mittelpunkt stehen unter anderem:
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Bewegungsqualität",
                    "Mobilität",
                    "Stabilität",
                    "Kraft",
                    "Belastungssteuerung",
                    "Individuelle Übungen"
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

          {/* ABSCHNITT 4: Für wen eignet sich M² Schmerzfrei? */}
          <section className="py-16 border-t border-border/80">
            <h2 className="text-3xl font-display text-center mb-12">Für wen eignet sich M² Schmerzfrei?</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                "Wieder mehr Bewegungsfreiheit gewinnen",
                "Beschwerden im Alltag reduzieren",
                "Nach Verletzungen wieder sicher trainieren",
                "Bewegungsabläufe verbessern",
                "Mehr Vertrauen in den eigenen Körper entwickeln",
                "Langfristig belastbarer werden"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-gold/10 text-gold flex items-center justify-center text-xs font-semibold shrink-0">✓</span>
                  <span className="text-sm font-medium text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* ABSCHNITT 5: So begleiten wir dich */}
          <section className="py-16 border-t border-border/80">
            <h2 className="text-3xl font-display text-center mb-12">So begleiten wir dich</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Analyse",
                  desc: "Gemeinsam betrachten wir deine aktuelle Situation."
                },
                {
                  title: "Verständnis",
                  desc: "Wir erklären Zusammenhänge verständlich und nachvollziehbar."
                },
                {
                  title: "Individuelle Strategie",
                  desc: "Wir entwickeln einen Plan, der zu deinem Alltag passt."
                },
                {
                  title: "Begleitung",
                  desc: "Schritt für Schritt passen wir den Weg an deine Entwicklung an."
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

          {/* ABSCHNITT 6: Mehr Bewegungsqualität. Mehr Vertrauen. Mehr Lebensqualität. */}
          <section className="py-16 border-t border-border/80 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display mb-6">Mehr Bewegungsqualität. Mehr Vertrauen. Mehr Lebensqualität.</h2>
              <p className="text-muted-foreground leading-relaxed mb-10 whitespace-pre-line">
                Beschwerden müssen nicht deinen Alltag bestimmen.
                {"\n\n"}
                Gemeinsam schaffen wir die Voraussetzungen für mehr Sicherheit, mehr Belastbarkeit und mehr Freude an Bewegung.
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
