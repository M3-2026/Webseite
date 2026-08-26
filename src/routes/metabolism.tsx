import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Flame,
  ArrowRight,
  MessageCircle,
  Sparkles,
  ShieldCheck,
  Activity,
  HeartPulse,
  Leaf,
  CheckCircle2,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/metabolism")({
  component: MetabolismPage,
});

function MetabolismPage() {
  const WHATSAPP_URL =
    "https://wa.me/4917699016640?text=Hallo%20Mich%C3%A9l,%20ich%20interessiere%20mich%20f%C3%BCr%20ein%20kostenloses%20Erstgespr%C3%A4ch%20zu%20M%C2%B9%20Metabolism.";

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between overflow-x-hidden selection:bg-gold/20 selection:text-foreground">
      <Header />

      <main className="flex-grow py-16 md:py-24 relative hero-bg">
        {/* Decorative background glow */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/10 blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-5 md:px-6 space-y-16 md:space-y-24">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            <span>Zurück zur Startseite</span>
          </Link>

          {/* HERO SPLIT */}
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-primary font-bold shadow-sm">
                <Flame className="w-3.5 h-3.5" />
                <span>M¹ · Metabolism</span>
              </div>

              <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight leading-[1.02] text-foreground">
                M¹ – <span className="text-gold">Metabolism</span>
              </h1>

              <p className="text-xl md:text-2xl text-gold font-medium leading-relaxed max-w-2xl">
                Die Grundlage für nachhaltige Gesundheit, Regeneration und echte Leistungsfähigkeit.
              </p>

              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Wenn dein Fundament brennt, nützt kein härteres Training. Wir bringen Darm und Stoffwechsel in Ordnung — messbar, strukturiert und alltagstauglich. Ein intaktes Mikrobiom und eine gezielte Vitalstoffversorgung sind der Schlüssel für konstante Energie im Alltag.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-8 py-4 font-bold text-sm md:text-base text-primary-foreground shadow-[var(--shadow-gold)] hover:opacity-95 hover:scale-[1.02] transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Erstgespräch zu M¹ vereinbaren</span>
                </a>
              </div>
            </div>

            {/* Visual Performance Asset Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md rounded-3xl overflow-hidden border-2 border-primary/30 shadow-[var(--shadow-card)] bg-black group">
                <img
                  src="/images/performance/m1-vitality-glass.jpg"
                  alt="Zelluläre Vitalstoffversorgung & Mikrobiom"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 aspect-[4/5]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 space-y-1">
                  <div className="text-xs uppercase font-mono tracking-wider text-primary font-bold flex items-center gap-2">
                    <HeartPulse className="w-3.5 h-3.5" />
                    <span>Biochemisches Fundament</span>
                  </div>
                  <div className="text-base font-bold text-white">
                    Zelluläre Vitalstoffversorgung & Darmgesundheit
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ABSCHNITT 2: WARUM M¹ & SYSTEMISCHES WIRKEN */}
          <section className="rounded-3xl border border-border bg-card/60 p-8 md:p-12 space-y-10">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-5 space-y-3">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold block">
                  Ursachenbehebung
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight">
                  Warum M¹ der zwingende erste Schritt ist.
                </h2>
              </div>

              <div className="md:col-span-7 text-muted-foreground leading-relaxed text-sm md:text-base space-y-4">
                <p>
                  Viele Menschen investieren viel Zeit in Training oder probieren ständig neue Diäten aus. Trotzdem bleiben Energie, Regeneration oder nachhaltige Fortschritte häufig aus.
                </p>
                <p className="font-semibold text-foreground">
                  Nicht, weil sie zu wenig Disziplin haben – sondern weil die biochemischen Voraussetzungen im Körper blockiert sind.
                </p>
                <p>
                  M¹ setzt genau dort an: Wir betrachten deinen Körper ganzheitlich und schaffen die physiologischen Bedingungen, damit deine Zellen wieder optimal mit Energie versorgt werden.
                </p>
              </div>
            </div>

            {/* Matrix of 6 Metabolic Drivers */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 pt-4">
              {[
                { label: "Darm & Mikrobiom", icon: "🧬" },
                { label: "Zellstoffwechsel", icon: "⚡" },
                { label: "Vitalstoffe", icon: "🌱" },
                { label: "Ernährungsstruktur", icon: "🥗" },
                { label: "Blutzucker-Balance", icon: "📊" },
                { label: "Schlaf-Regeneration", icon: "🌙" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-border bg-secondary/30 p-4 text-center space-y-2 hover:border-primary/50 transition-colors"
                >
                  <div className="text-2xl">{item.icon}</div>
                  <div className="text-xs font-bold text-foreground">{item.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ABSCHNITT 3: DEIN WEG INNERHALB VON M¹ (VISUELLE KARTEN) */}
          <section className="space-y-10">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold block">
                Die Bausteine
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight">
                Dein Weg innerhalb von M¹
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "M³ Body Reset",
                  tagline: "Ganzheitlicher Neustart",
                  desc: "Das modulare Konzept für Darm und Stoffwechsel: Beinhaltet 16-Tage Darmkur, Stoffwechselkur und tägliche Grundversorgung.",
                  route: "/body-reset",
                  image: "/images/performance/card-body-reset.png",
                },
                {
                  title: "M³ Ernährungscoaching",
                  tagline: "1:1 Individuelle Struktur",
                  desc: "Keine starren Pläne oder Verbote – sondern eine alltagstaugliche Makro-Struktur, die dich satt macht und dauerhaft funktioniert.",
                  route: "/ernaehrungscoaching",
                  image: "/images/performance/card-ernaehrungscoaching.png",
                },
                {
                  title: "M³ System Start",
                  tagline: "Die Eingangstür",
                  desc: "Ganzheitliche Standortbestimmung: Wir analysieren deinen Stoffwechsel und erstellen deinen 3-Säulen-Fahrplan.",
                  route: "/system-start",
                  image: "/images/performance/card-system-start.png",
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
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-primary">
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

          {/* ABSCHNITT 4: GOLDENE GRUNDVERSORGUNG VISUELL */}
          <section className="rounded-3xl border border-border bg-gradient-to-br from-gold/10 via-card to-card p-8 md:p-12 shadow-sm">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs uppercase tracking-[0.25em] text-gold font-bold block">
                  Zelluläre Basisversorgung
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-extrabold text-foreground">
                  Die Goldene Grundversorgung
                </h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Eine stabile Grundlage beginnt nicht bei einzelnen isolierten Produkten, sondern bei einer synergetischen Versorgung. Die Goldene Grundversorgung bildet innerhalb des M³-Systems die tägliche Basis für Stoffwechsel- und Regenerationsprozesse und füllt zelluläre Depots nachhaltig auf.
                </p>
                <div className="pt-2">
                  <Link
                    to="/goldene-grundversorgung"
                    className="inline-flex items-center gap-2 rounded-full bg-secondary hover:bg-secondary/80 px-6 py-3 text-xs sm:text-sm font-bold border border-border text-foreground transition"
                  >
                    <span>Mehr zur Goldenen Grundversorgung</span>
                    <ArrowRight className="w-4 h-4 text-gold" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-4 flex justify-center">
                <div className="relative rounded-2xl overflow-hidden border border-gold/30 shadow-md aspect-square w-48 sm:w-56 group bg-black">
                  <img
                    src="/images/performance/m1-cellular-capsule.jpg"
                    alt="Goldene Grundversorgung – Zelluläre Reinheit"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-2.5 left-3 right-3 text-[10px] font-mono text-gold font-bold text-center">
                    ZELLULÄRE REINHEIT
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ABSCHNITT 5: BOTTOM CTA */}
          <section className="pt-8 border-t border-border/80 text-center space-y-8">
            <div className="max-w-2xl mx-auto space-y-4">
              <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight">
                Der erste Schritt beginnt mit Verständnis.
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Gesundheit entsteht selten durch eine isolierte Maßnahme. Sie entwickelt sich, wenn die richtigen Grundlagen geschaffen werden. Lass uns prüfen, wo dein Körper aktuell steht.
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

      <Footer />
    </div>
  );
}
