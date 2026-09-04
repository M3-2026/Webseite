import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Dumbbell,
  ArrowRight,
  MessageCircle,
  Sparkles,
  ShieldCheck,
  Activity,
  Zap,
  CheckCircle2,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PathwayCrossNav } from "@/components/PathwayCrossNav";

export const Route = createFileRoute("/movement")({
  component: MovementPage,
});

function MovementPage() {
  const WHATSAPP_URL =
    "https://wa.me/4917699016640?text=Hallo%20Mich%C3%A9l,%20ich%20interessiere%20mich%20f%C3%BCr%20ein%20kostenloses%20Erstgespr%C3%A4ch%20zu%20M%C2%B2%20Movement.";

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between overflow-x-hidden selection:bg-gold/20 selection:text-foreground">
      <Header />
      <Breadcrumbs items={[{ label: "M² Movement", pillar: "m2" }]} />

      <main className="flex-grow py-12 md:py-16 relative hero-bg">
        {/* Decorative background glow */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-emerald-600/10 blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-5 md:px-6 space-y-16 md:space-y-24">

          {/* HERO SPLIT */}
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-600/30 bg-emerald-600/10 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-emerald-700 font-bold shadow-sm">
                <Dumbbell className="w-3.5 h-3.5" />
                <span>M² · Movement</span>
              </div>

              <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight leading-[1.02] text-foreground">
                M² – <span className="text-gold">Movement</span>
              </h1>

              <p className="text-xl md:text-2xl text-gold font-medium leading-relaxed max-w-2xl">
                Bewegung neu denken: Technik vor Gewicht, Struktur statt Chaos.
              </p>

              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Ein leistungsfähiger Körper entsteht nicht durch blindes Auspowern, sondern durch intelligentes, anatomisch fundiertes Training. M² verbindet präzise Bewegungsqualität, Mobilität und progressive Kraftentwicklung für dauerhaft schmerzfreie Belastbarkeit im Alltag.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-8 py-4 font-bold text-sm md:text-base text-primary-foreground shadow-[var(--shadow-gold)] hover:opacity-95 hover:scale-[1.02] transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Erstgespräch zu M² vereinbaren</span>
                </a>
              </div>
            </div>

            {/* Visual Performance Asset Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md rounded-3xl overflow-hidden border-2 border-emerald-600/30 shadow-[var(--shadow-card)] bg-black group">
                <img
                  src="/images/performance/m2-movement-flow.jpg"
                  alt="Intelligente Biomechanik & Bewegungskontrolle"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 aspect-[4/5]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 space-y-1">
                  <div className="text-xs uppercase font-mono tracking-wider text-emerald-600 font-bold flex items-center gap-2">
                    <Activity className="w-3.5 h-3.5" />
                    <span>Präzise Biomechanik</span>
                  </div>
                  <div className="text-base font-bold text-white">
                    Bewegungsqualität, Mobilität & athletische Kraft
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ABSCHNITT 2: WARUM M² & DIE 6 SÄULEN DER BEWEGUNG */}
          <section className="rounded-3xl border border-border bg-card/60 p-8 md:p-12 space-y-10">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-5 space-y-3">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold block">
                  Intelligenz vor Drill
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight">
                  Warum Standardpläne im Fitnessstudio scheitern.
                </h2>
              </div>

              <div className="md:col-span-7 text-muted-foreground leading-relaxed text-sm md:text-base space-y-4">
                <p>
                  Training ist weit mehr als nur Gewichte zu bewegen oder Kalorien zu verbrennen. Wer mit Schmerzen oder fehlerhafter Haltung trainiert, verstärkt bestehende Dysbalancen.
                </p>
                <p className="font-semibold text-foreground">
                  Echte Fortschritte entstehen, wenn Übungen exakt an deine persönliche Anatomie und deinen aktuellen Leistungsstand angepasst werden.
                </p>
                <p>
                  Deshalb gibt es bei M² keine Standardpläne von der Stange, sondern maßgeschneiderte Bewegungsstrategien für maximale Effizienz und nachhaltigen Gelenkschutz.
                </p>
              </div>
            </div>

            {/* Matrix of 6 Movement Pillars */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 pt-4">
              {[
                { label: "Bewegungsqualität", icon: "🎯" },
                { label: "Funktionelle Kraft", icon: "💪" },
                { label: "Gelenkmobilität", icon: "🔄" },
                { label: "Rumpfstabilität", icon: "🛡️" },
                { label: "Koordination", icon: "⚡" },
                { label: "Schmerzfreiheit", icon: "✨" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-border bg-secondary/30 p-4 text-center space-y-2 hover:border-emerald-600/50 transition-colors"
                >
                  <div className="text-2xl">{item.icon}</div>
                  <div className="text-xs font-bold text-foreground">{item.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ABSCHNITT 3: DEIN WEG INNERHALB VON M² (VISUELLE KARTEN) */}
          <section className="space-y-10">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold block">
                Die Bausteine
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight">
                Dein Weg innerhalb von M²
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "M³ Performance Training",
                  tagline: "1:1 Personal Training",
                  desc: "Intelligentes Kraft- und Athletiktraining mit System: Individuelle Belastungssteuerung für spürbaren Muskel- und Kraftaufbau.",
                  route: "/performance-training",
                  image: "/images/performance/card-performance-training.png",
                },
                {
                  title: "M³ Schmerzfrei",
                  tagline: "Mobilität & Reha",
                  desc: "Gezielte Bewegungskorrekturen und Schmerzbehebung für Rücken, Nacken und Gelenke – für dauerhafte Bewegungsfreiheit.",
                  route: "/schmerzfrei",
                  image: "/images/performance/card-schmerzfrei.png",
                },
                {
                  title: "Coaching für Zwei",
                  tagline: "Partner-Training",
                  desc: "Zusammen trainieren mit maximaler Verbindlichkeit – jeder auf seinem individuellen Niveau mit eigenem Plan.",
                  route: "/coaching-fuer-zwei",
                  image: "/images/performance/card-coaching-fuer-zwei.png",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-border bg-card overflow-hidden flex flex-col justify-between hover:border-gold/50 transition-all duration-300 group shadow-sm hover:shadow-md"
                >
                  <div>
                    <div className="relative w-full h-48 bg-black overflow-hidden border-b border-border/70">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                    </div>

                    <div className="p-6 space-y-2">
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-700">
                        {item.tagline}
                      </span>
                      <h3 className="text-xl font-display font-bold text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <Link
                      to={item.route}
                      className="w-full inline-flex items-center justify-center gap-1.5 rounded-full border border-border py-2.5 px-4 text-xs font-bold text-foreground hover:bg-secondary hover:border-gold/40 transition text-center"
                    >
                      <span>Details ansehen</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ABSCHNITT 4: ATHLETISCHE DYNAMIK & DISZIPLIN */}
          <section className="rounded-3xl border border-border bg-gradient-to-br from-emerald-600/10 via-card to-card p-8 md:p-12 shadow-sm">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs uppercase tracking-[0.25em] text-emerald-700 font-bold block">
                  Athletische Praxis
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-extrabold text-foreground">
                  25 Jahre Erfahrung im Spitzensport
                </h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Vom Breakdance-Weltmeistertitel 2006/07 bis zur täglichen Coaching-Praxis als Personal Trainer & Gesundheitscoach: Michél Meier vermittelt Bewegung so, dass sie dich nicht verschleißt, sondern deinen Körper widerstandsfähig und stark für alle Anforderungen des Lebens macht.
                </p>
                <div className="pt-2">
                  <Link
                    to="/ueber-mich"
                    className="inline-flex items-center gap-2 rounded-full bg-secondary hover:bg-secondary/80 px-6 py-3 text-xs sm:text-sm font-bold border border-border text-foreground transition"
                  >
                    <span>Mehr über Michéls Geschichte</span>
                    <ArrowRight className="w-4 h-4 text-gold" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-4 flex justify-center">
                <div className="relative rounded-2xl overflow-hidden border border-emerald-600/30 shadow-md aspect-square w-48 sm:w-56 group bg-black">
                  <img
                    src="/images/performance/m2-never-give-up.jpg"
                    alt="Disziplin & Durchhaltevermögen"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-2.5 left-3 right-3 text-[10px] font-mono text-emerald-400 font-bold text-center">
                    DISZIPLIN & STÄRKE
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ABSCHNITT 5: BOTTOM CTA */}
          <section className="pt-8 border-t border-border/80 text-center space-y-8">
            <div className="max-w-2xl mx-auto space-y-4">
              <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight">
                Nachhaltige Veränderung beginnt mit der richtigen Bewegung.
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Gesunde Bewegung bedeutet nicht, möglichst viel zu trainieren – sondern die richtigen Dinge konsequent zu tun. Lass uns deinen Bewegungsapparat analysieren.
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

      <PathwayCrossNav currentRoute="movement" />
      <Footer />
    </div>
  );
}
