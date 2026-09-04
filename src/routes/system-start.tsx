import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PathwayCrossNav } from "@/components/PathwayCrossNav";

export const Route = createFileRoute("/system-start")({
  component: SystemStartPage,
});

function SystemStartPage() {
  const WHATSAPP_URL = "https://wa.me/4917699016640?text=Hallo%20Mich%C3%A9l,%20ich%20interessiere%20mich%20f%C3%BCr%20ein%20kostenloses%20Erstgespr%C3%A4ch%20zum%20M%C2%B3%20System%20Start.";

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between overflow-x-hidden">
      <Header />
      <Breadcrumbs items={[{ label: "M³ System Start", pillar: "gold" }]} />

      <main className="flex-grow py-12 md:py-20 relative hero-bg">
        {/* Decorative background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-gold/5 blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-5 sm:px-6">

          {/* HERO */}
          <div className="mb-20 grid lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
            <div className="lg:col-span-7 space-y-5 sm:space-y-6 min-w-0">
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3.5 py-1 text-xs uppercase tracking-[0.18em] text-gold font-bold animate-fade-in">
                M³ · Orientierung & Diagnostik
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-display font-extrabold leading-[1.08] tracking-tight text-foreground break-words hyphens-auto">
                M³ System Start
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gold font-medium leading-relaxed max-w-2xl">
                Deine persönliche 360°-Standortbestimmung: Erst verstehen, gezielt analysieren, dann die richtige Priorität wählen.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl whitespace-pre-line">
                Jeder Mensch startet an einem anderen Punkt.
                {"\n\n"}
                Deshalb beginnt bei M³ keine Zusammenarbeit mit einem Standardplan, sondern mit einer strukturierten Analyse deiner Situation, deiner Ziele und deiner persönlichen Voraussetzungen über alle drei Säulen.
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
              <div className="relative w-full max-w-[380px] sm:max-w-md rounded-3xl overflow-hidden border border-amber-500/30 bg-card/80 shadow-2xl group aspect-square">
                <img
                  src="/images/performance/hero-system-start.jpg"
                  alt="M³ System Start – 360° Diagnostik & Coaching"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                
                {/* Floating Glassmorphic UI Chip */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-black/60 backdrop-blur-md border border-white/15 text-white shadow-xl flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-500/30 text-amber-400 flex items-center justify-center text-sm font-bold shrink-0">
                      ⚡
                    </div>
                    <div>
                      <div className="text-xs font-bold tracking-tight text-white">360° Diagnostik</div>
                      <div className="text-[10px] text-slate-300">Status Quo & Prioritäten</div>
                    </div>
                  </div>
                  <span className="text-[9px] font-mono uppercase tracking-wider text-amber-300 font-bold px-2 py-0.5 rounded-md bg-amber-500/20 border border-amber-500/30">
                    1:1 Analyse
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ABSCHNITT 2: Warum der System Start? */}
          <section className="py-16 border-t border-border/80">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h2 className="text-3xl font-display text-gold">Warum der System Start?</h2>
              </div>
              <div className="md:col-span-2 text-muted-foreground leading-relaxed whitespace-pre-line text-base">
                Viele Menschen möchten etwas verändern.
                {"\n\n"}
                Doch häufig stellt sich zuerst eine entscheidende Frage:
                {"\n\n"}
                <strong>Wo beginne ich überhaupt?</strong>
                {"\n\n"}
                • Brauche ich Unterstützung bei meiner Ernährung?
                {"\n"}
                • Ist mein Stoffwechsel aktuell die wichtigste Baustelle?
                {"\n"}
                • Sollte ich zuerst an meiner Bewegung arbeiten?
                {"\n"}
                • Oder ist eine Kombination sinnvoll?
                {"\n\n"}
                Genau diese Fragen beantwortet der M³ System Start.
              </div>
            </div>
          </section>

          {/* ABSCHNITT 3: Klarheit statt Vermutungen */}
          <section className="py-16 border-t border-border/80">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h2 className="text-3xl font-display text-gold">Klarheit statt Vermutungen</h2>
              </div>
              <div className="md:col-span-2 text-muted-foreground leading-relaxed whitespace-pre-line text-base">
                Der M³ System Start hilft dir dabei, deine Ausgangssituation besser einzuordnen.
                {"\n\n"}
                Gemeinsam analysieren wir deine Ziele, deinen Alltag und deine persönlichen Voraussetzungen.
                {"\n\n"}
                Auf dieser Grundlage entwickeln wir eine individuelle Empfehlung für deinen weiteren Weg innerhalb des M³-Systems.
              </div>
            </div>
          </section>

          {/* ABSCHNITT 4: Mögliche nächste Schritte */}
          <section className="py-16 border-t border-border/80">
            <h2 className="text-3xl font-display text-center mb-12">Mögliche nächste Schritte</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "M³ Body Reset",
                  desc: "Wenn dein Körper zunächst eine stabile Grundlage benötigt.",
                  route: "/body-reset"
                },
                {
                  title: "M³ Ernährungscoaching",
                  desc: "Wenn deine Ernährung der wichtigste Hebel ist.",
                  route: "/ernaehrungscoaching"
                },
                {
                  title: "M³ Performance Training",
                  desc: "Wenn dein Schwerpunkt auf Bewegung und Leistungsfähigkeit liegt.",
                  route: "/performance-training"
                },
                {
                  title: "M³ Schmerzfrei",
                  desc: "Wenn Beschwerden oder Bewegungseinschränkungen im Vordergrund stehen.",
                  route: "/schmerzfrei"
                }
              ].map((item) => (
                <div key={item.title} className="border border-border bg-card p-6 rounded-2xl flex flex-col justify-between hover:border-gold/40 transition-all hover:translate-y-[-2px]">
                  <div>
                    <h3 className="text-lg font-display text-gold mb-3">{item.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-6">{item.desc}</p>
                  </div>
                  <Link
                    to={item.route}
                    className="w-full inline-flex items-center justify-center rounded-full border border-border py-2 text-xs uppercase tracking-wider font-semibold hover:bg-secondary transition text-center"
                  >
                    Mehr erfahren
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* ABSCHNITT 5: Der erste Schritt ist nicht Perfektion. */}
          <section className="py-16 border-t border-border/80 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display mb-6">Der erste Schritt ist nicht Perfektion.</h2>
              <p className="text-xl text-gold font-medium mb-6">Der erste Schritt ist Klarheit.</p>
              <p className="text-muted-foreground leading-relaxed mb-10 whitespace-pre-line">
                Genau dabei unterstützt dich der M³ System Start.
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

      <PathwayCrossNav currentRoute="system-start" />
      <Footer />
    </div>
  );
}
