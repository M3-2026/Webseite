import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/system-start")({
  component: SystemStartPage,
});

function SystemStartPage() {
  const WHATSAPP_URL = "https://wa.me/4917699016640?text=Hallo%20Mich%C3%A9l,%20ich%20interessiere%20mich%20f%C3%BCr%20ein%20kostenloses%20Erstgespr%C3%A4ch%20zum%20M%C2%B3%20System%20Start.";

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
              M³ · Orientierung
            </div>

            <h1 className="text-5xl md:text-7xl font-display leading-[0.95] tracking-tight mb-8">
              M³ System Start
            </h1>
            <p className="text-xl md:text-2xl text-gold font-medium leading-relaxed max-w-3xl mb-6">
              Der richtige Weg beginnt mit einer klaren Ausgangslage.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mb-12 whitespace-pre-line">
              Jeder Mensch startet an einem anderen Punkt.
              {"\n\n"}
              Deshalb beginnt bei M³ keine Zusammenarbeit mit einem Standardplan, sondern mit einer individuellen Analyse deiner Situation, deiner Ziele und deiner persönlichen Voraussetzungen.
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

      <Footer />
    </div>
  );
}
