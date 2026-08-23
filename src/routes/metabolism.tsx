import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/metabolism")({
  component: MetabolismPage,
});

function MetabolismPage() {
  const WHATSAPP_URL = "https://wa.me/4917699016640?text=Hallo%20Mich%C3%A9l,%20ich%20interessiere%20mich%20f%C3%BCr%20ein%20kostenloses%20Erstgespr%C3%A4ch%20zu%20M%C2%B9%20Metabolism.";

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
              M¹ · Metabolism
            </div>

            <h1 className="text-5xl md:text-7xl font-display leading-[0.95] tracking-tight mb-8">
              M¹ – Metabolism
            </h1>
            <p className="text-xl md:text-2xl text-gold font-medium leading-relaxed max-w-3xl mb-6">
              Die Grundlage für nachhaltige Gesundheit und Leistungsfähigkeit.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mb-12 whitespace-pre-line">
              Wenn dein Fundament brennt, nützt kein härteres Training. Wir bringen Darm und Stoffwechsel in Ordnung — messbar, strukturiert und alltagstauglich.
              {"\n\n"}
              Ein funktionierender Stoffwechsel, ein gesundes Mikrobiom und eine gezielte Vitalstoffversorgung bilden die Basis für Energie, Regeneration und echte Leistungsfähigkeit.
            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-gold-gradient px-8 py-4 font-semibold text-primary-foreground shadow-[var(--shadow-gold)] hover:opacity-90 transition"
            >
              Erst verstehen. Dann entscheiden. ➔ Erstgespräch
            </a>
          </div>

          {/* ABSCHNITT 2: Warum M¹? */}
          <section className="py-16 border-t border-border/80">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h2 className="text-3xl font-display text-gold">Warum M¹?</h2>
              </div>
              <div className="md:col-span-2 text-muted-foreground leading-relaxed whitespace-pre-line text-base">
                Viele Menschen investieren Zeit in Training oder probieren immer neue Ernährungsformen aus.
                {"\n\n"}
                Trotzdem bleiben Energie, Regeneration oder nachhaltige Fortschritte häufig aus.
                {"\n\n"}
                Nicht unbedingt, weil sie zu wenig tun.
                {"\n\n"}
                Sondern weil die Grundlage häufig nicht ausreichend berücksichtigt wird.
                {"\n\n"}
                M¹ setzt genau dort an.
                {"\n\n"}
                Wir betrachten den Menschen ganzheitlich und schaffen die Voraussetzungen, damit dein Körper wieder optimal funktionieren kann.
              </div>
            </div>
          </section>

          {/* ABSCHNITT 3: Was bedeutet Metabolism? */}
          <section className="py-16 border-t border-border/80">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h2 className="text-3xl font-display text-gold">Was bedeutet Metabolism?</h2>
              </div>
              <div className="md:col-span-2">
                <p className="text-muted-foreground leading-relaxed mb-8 whitespace-pre-line">
                  Metabolism steht für weit mehr als den Stoffwechsel allein.
                  {"\n\n"}
                  Es beschreibt das Zusammenspiel zahlreicher Prozesse im Körper, die darüber entscheiden, wie effizient Energie bereitgestellt, Nährstoffe genutzt und Regeneration ermöglicht werden.
                  {"\n\n"}
                  Dazu gehören unter anderem:
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {[
                    "Ernährung",
                    "Darmgesundheit",
                    "Stoffwechsel",
                    "Regeneration",
                    "Energiehaushalt",
                    "Individuelle Versorgung"
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 py-3 px-5 rounded-xl border border-border bg-card/45">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed italic font-medium">
                  Jeder dieser Bereiche beeinflusst den anderen. Genau deshalb betrachten wir sie nicht isoliert, sondern als zusammenhängendes System.
                </p>
              </div>
            </div>
          </section>

          {/* ABSCHNITT 4: Dein Weg innerhalb von M¹ */}
          <section className="py-16 border-t border-border/80">
            <h2 className="text-3xl font-display text-center mb-12">Dein Weg innerhalb von M¹</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "M³ Body Reset",
                  desc: "Der strukturierte Einstieg für alle, die ihre Gesundheit von Grund auf verbessern möchten.",
                  route: "/body-reset"
                },
                {
                  title: "M³ System Start",
                  desc: "Die individuelle Orientierung für alle, die herausfinden möchten, welcher Weg aktuell der richtige ist.",
                  route: "/system-start"
                },
                {
                  title: "M³ Ernährungscoaching",
                  desc: "Keine Standardpläne, sondern Ernährung, die zu deinem Alltag, deinen Zielen und deinem Körper passt.",
                  route: "/ernaehrungscoaching"
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

          {/* ABSCHNITT 5: Die Goldene Grundversorgung */}
          <section className="py-16 border-t border-border/80">
            <div className="rounded-2xl border border-border bg-card/60 p-8 md:p-12 shadow-sm">
              <div className="max-w-3xl">
                <span className="text-xs uppercase tracking-widest text-gold font-semibold block mb-4">Basisversorgung</span>
                <h2 className="text-3xl font-display mb-6">Die Goldene Grundversorgung</h2>
                <p className="text-muted-foreground leading-relaxed mb-8 whitespace-pre-line">
                  Eine stabile Grundlage beginnt nicht bei einzelnen Produkten, sondern bei einer sinnvollen Versorgung.
                  {"\n\n"}
                  Die Goldene Grundversorgung bildet innerhalb des M³-Systems die Basis für zahlreiche Stoffwechsel- und Regenerationsprozesse und kann – individuell abgestimmt – eine ausgewogene Ernährung gezielt ergänzen.
                  {"\n\n"}
                  Sie ist kein kurzfristiges Konzept, sondern Teil einer langfristigen Gesundheitsstrategie.
                </p>
                <Link
                  to="/goldene-grundversorgung"
                  className="inline-flex items-center justify-center rounded-full bg-secondary hover:bg-secondary/80 px-6 py-3 text-sm font-semibold border border-border transition"
                >
                  Mehr zur Goldenen Grundversorgung
                </Link>
              </div>
            </div>
          </section>

          {/* ABSCHNITT 6: Für wen eignet sich M¹? */}
          <section className="py-16 border-t border-border/80">
            <h2 className="text-3xl font-display text-center mb-12">Für wen eignet sich M¹?</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                "Mehr Energie im Alltag",
                "Stoffwechsel unterstützen",
                "Ernährung optimieren",
                "Darmgesundheit verbessern",
                "Regeneration fördern",
                "Gesundheitsbewusstsein stärken"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-gold/10 text-gold flex items-center justify-center text-xs font-semibold shrink-0">✓</span>
                  <span className="text-sm font-medium text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* ABSCHNITT 7: Der erste Schritt beginnt mit Verständnis. */}
          <section className="py-16 border-t border-border/80 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display mb-6">Der erste Schritt beginnt mit Verständnis.</h2>
              <p className="text-muted-foreground leading-relaxed mb-10 whitespace-pre-line">
                Gesundheit entsteht selten durch eine einzelne Maßnahme.
                {"\n\n"}
                Sie entwickelt sich, wenn die richtigen Grundlagen geschaffen werden.
                {"\n\n"}
                Genau dabei begleitet dich M¹.
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
