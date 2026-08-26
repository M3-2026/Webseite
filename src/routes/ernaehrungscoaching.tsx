import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/ernaehrungscoaching")({
  component: ErnaehrungscoachingPage,
});

function ErnaehrungscoachingPage() {
  const WHATSAPP_URL = "https://wa.me/4917699016640?text=Hallo%20Mich%C3%A9l,%20ich%20interessiere%20mich%20f%C3%BCr%20ein%20kostenloses%20Erstgespr%C3%A4ch%20zu%20M%C2%B3%20Ern%C3%A4hrungscoaching.";

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
          <div className="mb-20 grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gold mb-2 animate-fade-in">
                M¹ · Metabolism Offer
              </div>

              <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold leading-[0.95] tracking-tight">
                M³ Ernährungscoaching
              </h1>
              <p className="text-xl md:text-2xl text-gold font-medium leading-relaxed max-w-2xl">
                Ernährung, die zu deinem Leben passt: Deine Ernährung. Dein Erfolg.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl whitespace-pre-line">
                Gesunde Ernährung bedeutet nicht Verzicht oder quälendes Kalorienzählen.
                {"\n\n"}
                Sie bedeutet, die richtigen Entscheidungen für deinen Stoffwechsel, deinen fordernden Alltag und deine persönlichen Ziele zu treffen. Gemeinsam entwickeln wir eine Ernährungsstruktur ohne Jojo-Effekt.
              </p>

              <div className="pt-2">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-gold-gradient px-8 py-4 font-semibold text-primary-foreground shadow-[var(--shadow-gold)] hover:opacity-90 transition"
                >
                  Kostenloses Erstgespräch
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md rounded-3xl overflow-hidden border-2 border-gold/40 shadow-[var(--shadow-gold)] bg-black group aspect-square">
                <img
                  src="/images/performance/card-ernaehrungscoaching.png"
                  alt="M³ Ernährungscoaching – Deine Ernährung. Dein Erfolg."
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          {/* ABSCHNITT 2: Warum überhaupt ein individuelles Ernährungscoaching? */}
          <section className="py-16 border-t border-border/80">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h2 className="text-3xl font-display text-gold">Warum individuelles Ernährungscoaching?</h2>
              </div>
              <div className="md:col-span-2 text-muted-foreground leading-relaxed whitespace-pre-line text-base">
                Es gibt nicht die eine Ernährung, die für jeden Menschen funktioniert.
                {"\n\n"}
                Jeder bringt unterschiedliche Ziele, Gewohnheiten, Vorlieben und Voraussetzungen mit.
                {"\n\n"}
                Deshalb entwickeln wir keine Standardpläne, sondern individuelle Lösungen, die sich nachhaltig in deinen Alltag integrieren lassen.
              </div>
            </div>
          </section>

          {/* ABSCHNITT 3: Ernährung ist mehr als Kalorien. */}
          <section className="py-16 border-t border-border/80">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h2 className="text-3xl font-display text-gold">Ernährung ist mehr als Kalorien.</h2>
              </div>
              <div className="md:col-span-2 text-muted-foreground leading-relaxed whitespace-pre-line text-base">
                Ernährung beeinflusst weit mehr als das Körpergewicht.
                {"\n\n"}
                Sie kann unter anderem dazu beitragen, Energie, Regeneration, Leistungsfähigkeit und allgemeines Wohlbefinden positiv zu unterstützen.
                {"\n\n"}
                Deshalb betrachten wir Ernährung nicht isoliert, sondern als Teil des gesamten M³-Systems.
              </div>
            </div>
          </section>

          {/* ABSCHNITT 4: Das erwartet dich */}
          <section className="py-16 border-t border-border/80">
            <h2 className="text-3xl font-display text-center mb-12">Das erwartet dich</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Analyse",
                  desc: "Gemeinsame Betrachtung deiner aktuellen Ernährungsgewohnheiten."
                },
                {
                  title: "Strategie",
                  desc: "Entwicklung einer individuellen Ernährungsstruktur."
                },
                {
                  title: "Umsetzung",
                  desc: "Praktische Lösungen für deinen Alltag."
                },
                {
                  title: "Begleitung",
                  desc: "Regelmäßige Anpassungen und persönliche Unterstützung."
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

          {/* ABSCHNITT 5: Für wen eignet sich das Ernährungscoaching? */}
          <section className="py-16 border-t border-border/80">
            <h2 className="text-3xl font-display text-center mb-12">Für wen eignet sich das Ernährungscoaching?</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                "Ernährung nachhaltig verbessern",
                "Gesunde Gewohnheiten entwickeln",
                "Leistungsfähigkeit unterstützen",
                "Körpergewicht gezielt verändern",
                "Alltag strukturieren",
                "Mehr Sicherheit im Umgang mit Ernährung gewinnen"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-gold/10 text-gold flex items-center justify-center text-xs font-semibold shrink-0">✓</span>
                  <span className="text-sm font-medium text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* ABSCHNITT 6: Ernährung darf einfach sein. */}
          <section className="py-16 border-t border-border/80 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display mb-6">Ernährung darf einfach sein.</h2>
              <p className="text-muted-foreground leading-relaxed mb-10 whitespace-pre-line">
                Gesunde Ernährung muss nicht kompliziert sein.
                {"\n\n"}
                Sie muss zu deinem Alltag passen.
                {"\n\n"}
                Genau dabei begleitet dich M³.
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
