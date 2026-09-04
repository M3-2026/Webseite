import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Brain,
  ArrowRight,
  MessageCircle,
  Sparkles,
  ShieldCheck,
  Activity,
  Target,
  Zap,
  CheckCircle2,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PathwayCrossNav } from "@/components/PathwayCrossNav";

export const Route = createFileRoute("/mental-performance")({
  component: MentalPerformancePage,
});

function MentalPerformancePage() {
  const WHATSAPP_URL =
    "https://wa.me/4917699016640?text=Hallo%20Mich%C3%A9l,%20ich%20interessiere%20mich%20f%C3%BCr%20ein%20kostenloses%20Erstgespr%C3%A4ch%20zu%20M%C2%B3%20Mental%20Performance.";

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between overflow-x-hidden selection:bg-gold/20 selection:text-foreground">
      <Header />
      <Breadcrumbs items={[{ label: "M³ Mental Performance", pillar: "m3" }]} />

      <main className="flex-grow py-12 md:py-16 relative hero-bg">
        {/* Decorative background glow */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-indigo-600/10 blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-5 md:px-6 space-y-16 md:space-y-24">

          {/* HERO SPLIT */}
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-600/30 bg-indigo-600/10 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-indigo-700 font-bold shadow-sm">
                <Brain className="w-3.5 h-3.5" />
                <span>M³ · Mental Performance</span>
              </div>

              <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight leading-[1.02] text-foreground">
                M³ – <span className="text-gold">Mental Performance</span>
              </h1>

              <p className="text-xl md:text-2xl text-gold font-medium leading-relaxed max-w-2xl">
                Aus Veränderung wird Gewohnheit. Aus Disziplin wird Routine.
              </p>

              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Gesundheit entsteht nicht durch Motivation allein. Sie entsteht durch automatisierte Entscheidungen im Alltag. Mental Performance bedeutet, Veränderungen stressresistent zu verankern und aus Wissen langfristige Selbstständigkeit entstehen zu lassen.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-8 py-4 font-bold text-sm md:text-base text-primary-foreground shadow-[var(--shadow-gold)] hover:opacity-95 hover:scale-[1.02] transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Erstgespräch zu M³ vereinbaren</span>
                </a>
              </div>
            </div>

            {/* Visual Performance Asset Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md rounded-3xl overflow-hidden border-2 border-indigo-600/30 shadow-[var(--shadow-card)] bg-black group">
                <img
                  src="/images/performance/m3-neural-blueprint.jpg"
                  alt="Mentale Architektur & Routinen-Verankerung"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 aspect-[4/5]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 space-y-1">
                  <div className="text-xs uppercase font-mono tracking-wider text-indigo-400 font-bold flex items-center gap-2">
                    <Target className="w-3.5 h-3.5" />
                    <span>Mentale Architektur</span>
                  </div>
                  <div className="text-base font-bold text-white">
                    Schlaf-Optimierung, Stressresilienz & Autonomie
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ABSCHNITT 2: WARUM MENTAL PERFORMANCE? */}
          <section className="rounded-3xl border border-border bg-card/60 p-8 md:p-12 space-y-10">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-5 space-y-3">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold block">
                  Gewohnheiten statt Willenskraft
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight">
                  Warum die meisten Menschen nicht am Wissen scheitern.
                </h2>
              </div>

              <div className="md:col-span-7 text-muted-foreground leading-relaxed text-sm md:text-base space-y-4">
                <p>
                  Viele Menschen wissen bereits, was ihnen guttun würde: sich mehr bewegen, ausgewogener essen, mehr schlafen. Und trotzdem fällt es im fordernden Alltag schwer, diese Vorsätze dauerhaft beizubehalten.
                </p>
                <p className="font-semibold text-foreground">
                  Nicht, weil es an Motivation fehlt – sondern weil es an einer alltagstauglichen Gewohnheits-Architektur fehlt.
                </p>
                <p>
                  Genau hier setzt M³ an: Wir bauen Routinen auf, die selbst unter hohem beruflichen und familiären Druck stabil bleiben.
                </p>
              </div>
            </div>

            {/* Matrix of 3 Pillars of Sustainable Change */}
            <div className="grid md:grid-cols-3 gap-6 pt-4">
              <div className="rounded-2xl border border-border bg-secondary/30 p-6 space-y-3">
                <div className="w-8 h-8 rounded-full bg-gold/10 text-gold flex items-center justify-center font-display text-xs font-bold">
                  01
                </div>
                <h3 className="font-display font-bold text-lg text-foreground">Klarheit</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Verstehen, warum Veränderung notwendig ist und wo der tatsächliche Engpass liegt.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-secondary/30 p-6 space-y-3">
                <div className="w-8 h-8 rounded-full bg-gold/10 text-gold flex items-center justify-center font-display text-xs font-bold">
                  02
                </div>
                <h3 className="font-display font-bold text-lg text-foreground">Struktur</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Neue Gewohnheiten mikroschrittig und realistisch in den echten Alltag integrieren.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-secondary/30 p-6 space-y-3">
                <div className="w-8 h-8 rounded-full bg-gold/10 text-gold flex items-center justify-center font-display text-xs font-bold">
                  03
                </div>
                <h3 className="font-display font-bold text-lg text-foreground">Kontinuität</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Dranbleiben, Rückschläge analysieren und vollständige Unabhängigkeit vom Coach erreichen.
                </p>
              </div>
            </div>
          </section>

          {/* ABSCHNITT 3: DIE EINGANGSTÜR & DAS GESAMTSYSTEM */}
          <section className="space-y-10">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold block">
                Angebote & Einstieg
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight">
                So startest du mit M³
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                {
                  title: "M³ System Start",
                  tagline: "Die Eingangstür",
                  desc: "Ganzheitliche Standortbestimmung: In einer tiefen Analyse erfassen wir Stoffwechsel, Bewegungsmuster und Alltagsstruktur für deinen 3-Säulen-Masterplan.",
                  route: "/system-start",
                  image: "/images/performance/card-system-start.png",
                },
                {
                  title: "M³ Coaching",
                  tagline: "Performance & Gesundheit",
                  desc: "Ganzheitliche persönliche Begleitung über alle 3 Säulen – maßgeschneidert auf Beruf, Leistungsanspruch und persönliche Ziele.",
                  route: "/ueber-mich",
                  image: "/images/performance/card-m3-coaching.png",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-border bg-card overflow-hidden flex flex-col justify-between hover:border-gold/50 transition-all duration-300 group shadow-sm hover:shadow-md"
                >
                  <div>
                    <div className="relative w-full h-52 bg-black overflow-hidden border-b border-border/70">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                    </div>

                    <div className="p-6 sm:p-8 space-y-2">
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-indigo-700">
                        {item.tagline}
                      </span>
                      <h3 className="text-2xl font-display font-bold text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 pt-0">
                    <Link
                      to={item.route}
                      className="w-full inline-flex items-center justify-center gap-1.5 rounded-full border border-border py-3 px-4 text-xs font-bold text-foreground hover:bg-secondary hover:border-gold/40 transition text-center"
                    >
                      <span>Mehr erfahren</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ABSCHNITT 4: VISUELLER FOKUS & WEG */}
          <section className="rounded-3xl border border-border bg-gradient-to-br from-indigo-600/10 via-card to-card p-8 md:p-12 shadow-sm">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs uppercase tracking-[0.25em] text-indigo-700 font-bold block">
                  Autonomie als höchstes Ziel
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-extrabold text-foreground">
                  „Ich mache mich absichtlich überflüssig.“
                </h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Das M³-System zielt nicht darauf ab, dich in eine dauerhafte Trainer-Abhängigkeit zu bringen. Wir vermitteln dir das Wissen und die Verhaltensarchitektur so tief, dass du deinen Körper, deine Ernährung und dein Training nach unserer Zusammenarbeit vollkommen selbstständig steuern kannst.
                </p>
                <div className="pt-2">
                  <Link
                    to="/"
                    hash="philosophie"
                    className="inline-flex items-center gap-2 rounded-full bg-secondary hover:bg-secondary/80 px-6 py-3 text-xs sm:text-sm font-bold border border-border text-foreground transition"
                  >
                    <span>Zur M³ Philosophie</span>
                    <ArrowRight className="w-4 h-4 text-gold" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-4 flex justify-center">
                <div className="relative rounded-2xl overflow-hidden border border-indigo-600/30 shadow-md aspect-square w-48 sm:w-56 group bg-black">
                  <img
                    src="/images/performance/m3-focus-path.jpg"
                    alt="Der Weg des Fokus & der Transformation"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-2.5 left-3 right-3 text-[10px] font-mono text-indigo-300 font-bold text-center">
                    DER WEG DES FOKUS
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ABSCHNITT 5: BOTTOM CTA */}
          <section className="pt-8 border-t border-border/80 text-center space-y-8">
            <div className="max-w-2xl mx-auto space-y-4">
              <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight">
                Veränderung beginnt mit der nächsten Entscheidung.
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Gesundheit ist kein einmaliges Ziel, sondern ein stetiger Prozess. Lass uns gemeinsam den ersten Schritt machen.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gold-gradient px-8 py-4 font-bold text-sm md:text-base text-primary-foreground shadow-[var(--shadow-gold)] hover:opacity-95 hover:scale-[1.02] transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Kostenloses Erstgespräch vereinbaren</span>
              </a>
              <Link
                to="/"
                hash="system"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-8 py-4 font-semibold text-foreground hover:bg-secondary transition-all"
              >
                <span>Das gesamte M³-System ansehen</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>
        </div>
      </main>

      <PathwayCrossNav currentRoute="mental-performance" />
      <Footer />
    </div>
  );
}
