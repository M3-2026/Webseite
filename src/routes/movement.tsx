import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/movement")({
  component: MovementPage,
});

function MovementPage() {
  const WHATSAPP_URL = "https://wa.me/4917699016640?text=Hallo%20Mich%C3%A9l,%20ich%20interessiere%20mich%20f%C3%BCr%20ein%20kostenloses%20Erstgespr%C3%A4ch%20zu%20M%C2%B2%20Movement.";

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between overflow-x-hidden">
      <Header />

      <main className="flex-grow py-24 md:py-32 relative hero-bg">
        {/* Decorative background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-gold/5 blur-3xl" />
        </div>

        <div className="relative max-w-5xl mx-auto px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition mb-12"
          >
            ← Zurück zur Startseite
          </Link>

          {/* HERO */}
          <div className="mb-24">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gold mb-8 animate-fade-in">
              M² · Movement
            </div>

            <h1 className="text-5xl md:text-7xl font-display leading-[0.95] tracking-tight mb-8">
              M² – Movement
            </h1>
            <p className="text-xl md:text-2xl text-gold font-medium leading-relaxed max-w-3xl mb-6">
              Bewegung neu denken.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mb-12 whitespace-pre-line">
              Ein leistungsfähiger Körper entsteht nicht durch härteres Training, sondern durch intelligentes Training.
              {"\n\n"}
              M² verbindet Technik, Bewegungsqualität und individuelle Strategien, damit Bewegung langfristig gesund, effektiv und nachhaltig wird.
            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-gold-gradient px-8 py-4 font-semibold text-primary-foreground shadow-[var(--shadow-gold)] hover:opacity-90 transition"
            >
              Kostenloses Erstgespräch
            </a>
          </div>

          {/* ABSCHNITT 2: Warum M²? */}
          <section className="py-16 border-t border-border/80">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h2 className="text-3xl font-display text-gold">Warum M²?</h2>
              </div>
              <div className="md:col-span-2 text-muted-foreground leading-relaxed whitespace-pre-line text-base">
                Training ist mehr als Gewichte bewegen oder Kalorien verbrennen.
                {"\n\n"}
                Nachhaltige Fortschritte entstehen dann, wenn Bewegung auf deine persönlichen Voraussetzungen abgestimmt ist.
                {"\n\n"}
                Deshalb verfolgt M² keinen Standardplan, sondern entwickelt individuelle Strategien, die zu deinem Körper, deinem Alltag und deinen Zielen passen.
              </div>
            </div>
          </section>

          {/* ABSCHNITT 3: Was bedeutet Movement? */}
          <section className="py-16 border-t border-border/80">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h2 className="text-3xl font-display text-gold">Was bedeutet Movement?</h2>
              </div>
              <div className="md:col-span-2">
                <p className="text-muted-foreground leading-relaxed mb-8 whitespace-pre-line">
                  Movement steht für weit mehr als Sport.
                  {"\n\n"}
                  Es beschreibt die Fähigkeit, sich sicher, effizient und leistungsfähig zu bewegen – unabhängig davon, ob dein Ziel Muskelaufbau, Schmerzfreiheit oder mehr Energie im Alltag ist.
                  {"\n\n"}
                  Im Mittelpunkt stehen unter anderem:
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {[
                    "Bewegungsqualität",
                    "Kraft",
                    "Stabilität",
                    "Mobilität",
                    "Koordination",
                    "Belastbarkeit"
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 py-3 px-5 rounded-xl border border-border bg-card/45">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed italic font-medium">
                  Jeder dieser Bereiche beeinflusst den anderen. Deshalb betrachten wir Bewegung als ganzheitliches System.
                </p>
              </div>
            </div>
          </section>

          {/* ABSCHNITT 4: Dein Weg innerhalb von M² */}
          <section className="py-16 border-t border-border/80">
            <h2 className="text-3xl font-display text-center mb-12">Dein Weg innerhalb von M²</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "M³ Performance Training",
                  desc: "Individuelles Training für mehr Kraft, Leistungsfähigkeit und nachhaltige Fortschritte.",
                  route: "/performance-training"
                },
                {
                  title: "M³ Schmerzfrei",
                  desc: "Mehr Beweglichkeit, mehr Funktion und mehr Vertrauen in den eigenen Körper.",
                  route: "/schmerzfrei"
                },
                {
                  title: "M³ Coaching für Zwei",
                  desc: "Gemeinsam Ziele erreichen, sich gegenseitig motivieren und dauerhaft dranbleiben.",
                  route: "/coaching-fuer-zwei"
                }
              ].map((item) => (
                <div key={item.title} className="border border-border bg-card p-8 rounded-2xl flex flex-col justify-between hover:border-gold/40 transition-all">
                  <div>
                    <h3 className="text-xl font-display text-gold mb-4">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-8">{item.desc}</p>
                  </div>
                  <Link
                    to={item.route}
                    className="w-full inline-flex items-center justify-center rounded-full border border-border py-2.5 text-xs uppercase tracking-wider font-semibold hover:bg-secondary transition text-center"
                  >
                    Mehr erfahren
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* ABSCHNITT 5: Bewegung ist individuell. */}
          <section className="py-16 border-t border-border/80">
            <div className="rounded-2xl border border-border bg-card/60 p-8 md:p-12 shadow-sm">
              <div className="max-w-3xl">
                <span className="text-xs uppercase tracking-widest text-gold font-semibold block mb-4">Einzigartigkeit</span>
                <h2 className="text-3xl font-display mb-6">Bewegung ist individuell.</h2>
                <p className="text-muted-foreground leading-relaxed mb-0 whitespace-pre-line">
                  Jeder Körper bringt unterschiedliche Voraussetzungen mit.
                  {"\n\n"}
                  Deshalb gibt es bei M² keine Standardübungen und keine pauschalen Trainingspläne.
                  {"\n\n"}
                  Jede Strategie orientiert sich an deinen persönlichen Zielen, deinem Alltag und deinem aktuellen Leistungsstand.
                </p>
              </div>
            </div>
          </section>

          {/* ABSCHNITT 6: Für wen eignet sich M²? */}
          <section className="py-16 border-t border-border/80">
            <h2 className="text-3xl font-display text-center mb-12">Für wen eignet sich M²?</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                "Muskelaufbau",
                "Schmerzfrei bewegen",
                "Leistungsfähigkeit steigern",
                "Beweglichkeit verbessern",
                "Wiedereinstieg nach Verletzungen",
                "Gesundheit langfristig erhalten"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-gold/10 text-gold flex items-center justify-center text-xs font-semibold shrink-0">✓</span>
                  <span className="text-sm font-medium text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* ABSCHNITT 7: Nachhaltige Veränderung beginnt mit der richtigen Bewegung. */}
          <section className="py-16 border-t border-border/80 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display mb-6">Nachhaltige Veränderung beginnt mit der richtigen Bewegung.</h2>
              <p className="text-muted-foreground leading-relaxed mb-10 whitespace-pre-line">
                Gesunde Bewegung bedeutet nicht, möglichst viel zu trainieren.
                {"\n\n"}
                Sie bedeutet, die richtigen Dinge konsequent zu tun.
                {"\n\n"}
                Genau dabei begleitet dich M².
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

      <Footer />
    </div>
  );
}
