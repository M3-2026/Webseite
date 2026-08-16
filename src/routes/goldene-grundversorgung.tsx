import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/goldene-grundversorgung")({
  component: GoldeneGrundversorgungPage,
});

function GoldeneGrundversorgungPage() {
  const WHATSAPP_URL = "https://wa.me/4917699016640?text=Hallo%20Mich%C3%A9l,%20ich%20interessiere%20mich%20f%C3%BCr%20ein%20kostenloses%20Erstgespr%C3%A4ch%20zur%20Goldenen%20Grundversorgung.";

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
              M¹ · Metabolism Offer
            </div>

            <h1 className="text-5xl md:text-7xl font-display leading-[0.95] tracking-tight mb-8">
              Goldene Grundversorgung
            </h1>
            <p className="text-xl md:text-2xl text-gold font-medium leading-relaxed max-w-3xl mb-6">
              Gesundheit beginnt mit den richtigen Grundlagen.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mb-12 whitespace-pre-line">
              Ein leistungsfähiger Körper benötigt jeden Tag eine Vielzahl an Nährstoffen, um Stoffwechselprozesse, Regeneration und normale Körperfunktionen optimal zu unterstützen.
              {"\n\n"}
              Die Goldene Grundversorgung bildet innerhalb des M³-Systems die Basis für eine individuelle und langfristig gedachte Gesundheitsstrategie.
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

          {/* ABSCHNITT 2: Warum überhaupt eine Grundversorgung? */}
          <section className="py-16 border-t border-border/80">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h2 className="text-3xl font-display text-gold">Warum überhaupt eine Grundversorgung?</h2>
              </div>
              <div className="md:col-span-2 text-muted-foreground leading-relaxed whitespace-pre-line text-base">
                Unser Körper arbeitet rund um die Uhr.
                {"\n\n"}
                Für Energie, Regeneration, Immunsystem, Konzentration und viele weitere Prozesse benötigt er täglich eine ausreichende Versorgung mit essenziellen Nährstoffen.
                {"\n\n"}
                Eine ausgewogene Ernährung bildet dabei immer die wichtigste Grundlage.
                {"\n\n"}
                Je nach Lebensstil, Belastung oder individueller Situation kann eine gezielte Ergänzung sinnvoll sein.
              </div>
            </div>
          </section>

          {/* ABSCHNITT 3: Die Philosophie hinter der Goldenen Grundversorgung */}
          <section className="py-16 border-t border-border/80">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h2 className="text-3xl font-display text-gold">Die Philosophie dahinter</h2>
              </div>
              <div className="md:col-span-2 text-muted-foreground leading-relaxed whitespace-pre-line text-base">
                Die Goldene Grundversorgung verfolgt keinen pauschalen Ansatz.
                {"\n\n"}
                Jeder Mensch bringt unterschiedliche Voraussetzungen mit.
                {"\n\n"}
                Deshalb betrachten wir immer den gesamten Menschen und entwickeln eine individuelle Empfehlung, die zu deinem Alltag, deinen Zielen und deinen persönlichen Bedürfnissen passt.
              </div>
            </div>
          </section>

          {/* ABSCHNITT 4: Die vier Grundpfeiler */}
          <section className="py-16 border-t border-border/80">
            <h2 className="text-3xl font-display text-center mb-12">Die vier Grundpfeiler</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Ernährung",
                  desc: "Eine abwechslungsreiche und ausgewogene Ernährung bleibt die wichtigste Grundlage."
                },
                {
                  title: "Bewegung",
                  desc: "Regelmäßige Bewegung unterstützt zahlreiche körperliche Funktionen und ergänzt eine gesunde Lebensweise."
                },
                {
                  title: "Regeneration",
                  desc: "Schlaf, Erholung und Stressmanagement sind entscheidende Faktoren für langfristige Gesundheit."
                },
                {
                  title: "Individuelle Versorgung",
                  desc: "Je nach persönlicher Situation kann eine gezielte Ergänzung sinnvoll sein, um die allgemeine Versorgung zu unterstützen."
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

          {/* ABSCHNITT 5: Weniger ist oft mehr. */}
          <section className="py-16 border-t border-border/80">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h2 className="text-3xl font-display text-gold">Weniger ist oft mehr.</h2>
              </div>
              <div className="md:col-span-2 text-muted-foreground leading-relaxed whitespace-pre-line text-base">
                Die Goldene Grundversorgung bedeutet nicht, möglichst viele Produkte einzunehmen.
                {"\n\n"}
                Sie bedeutet, gezielt und sinnvoll dort zu unterstützen, wo es individuell notwendig ist.
                {"\n\n"}
                Qualität geht dabei immer vor Quantität.
              </div>
            </div>
          </section>

          {/* ABSCHNITT 6: Die Grundlage für alles Weitere */}
          <section className="py-16 border-t border-border/80">
            <div className="rounded-2xl border border-border bg-card/60 p-8 md:p-12 shadow-sm">
              <div className="max-w-3xl">
                <span className="text-xs uppercase tracking-widest text-gold font-semibold block mb-4">Einbindung</span>
                <h2 className="text-3xl font-display mb-6">Die Grundlage für alles Weitere</h2>
                <p className="text-muted-foreground leading-relaxed mb-0 whitespace-pre-line">
                  Innerhalb des M³-Systems bildet die Goldene Grundversorgung einen wichtigen Baustein.
                  {"\n\n"}
                  Sie ergänzt Ernährung, Bewegung und individuelle Gesundheitsstrategien sinnvoll und langfristig.
                </p>
              </div>
            </div>
          </section>

          {/* ABSCHLUSS: Gesundheit entsteht nicht durch Zufall. */}
          <section className="py-16 border-t border-border/80 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display mb-6">Gesundheit entsteht nicht durch Zufall.</h2>
              <p className="text-muted-foreground leading-relaxed mb-10 whitespace-pre-line">
                Sie entwickelt sich durch viele kleine Entscheidungen, die täglich getroffen werden.
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
