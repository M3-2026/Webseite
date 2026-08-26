import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/coaching-fuer-zwei")({
  component: CoachingFuerZweiPage,
});

function CoachingFuerZweiPage() {
  const WHATSAPP_URL = "https://wa.me/4917699016640?text=Hallo%20Mich%C3%A9l,%20wir%20interessieren%20uns%20f%C3%BCr%20ein%20kostenloses%20Erstgespr%C3%A4ch%20zu%20M%C2%B3%20Coaching%20f%C3%BCr%20Zwei.";

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
                M² · Movement Offer
              </div>

              <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold leading-[0.95] tracking-tight">
                M³ Coaching für Zwei
              </h1>
              <p className="text-xl md:text-2xl text-gold font-medium leading-relaxed max-w-2xl">
                Gemeinsam fällt Veränderung leichter: Gemeinsam stark.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl whitespace-pre-line">
                Gemeinsame Ziele schaffen maximale Verbindlichkeit, Motivation und Freude an der nachhaltigen Veränderung.
                {"\n\n"}
                Mit dem M³ Coaching für Zwei trainiert ihr gemeinsam als Paar, Freunde oder Geschäftspartner – individuell angepasst an das jeweilige Leistungsniveau jedes Einzelnen.
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
                  src="/images/performance/card-coaching-fuer-zwei.png"
                  alt="M³ Coaching für Zwei – Gemeinsam stark."
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          {/* ABSCHNITT 2: Warum gemeinsam? */}
          <section className="py-16 border-t border-border/80">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h2 className="text-3xl font-display text-gold">Warum gemeinsam?</h2>
              </div>
              <div className="md:col-span-2 text-muted-foreground leading-relaxed whitespace-pre-line text-base">
                Viele Veränderungen scheitern nicht am Wissen.
                {"\n\n"}
                Sie scheitern daran, dass der Alltag wieder die Kontrolle übernimmt.
                {"\n\n"}
                Ein gemeinsamer Weg schafft Motivation, gegenseitige Unterstützung und mehr Kontinuität.
                {"\n\n"}
                Gemeinsam fällt es oft leichter, neue Gewohnheiten dauerhaft zu etablieren.
              </div>
            </div>
          </section>

          {/* ABSCHNITT 3: Für wen eignet sich das Coaching? */}
          <section className="py-16 border-t border-border/80">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h2 className="text-3xl font-display text-gold">Für wen eignet sich das Coaching?</h2>
              </div>
              <div className="md:col-span-2">
                <p className="text-muted-foreground leading-relaxed mb-8 whitespace-pre-line">
                  Das Coaching ist für alle geeignet, die gemeinsam ihre Gesundheit verbessern möchten.
                  {"\n\n"}
                  Zum Beispiel:
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {[
                    "Paare",
                    "Freunde",
                    "Geschwister",
                    "Eltern und erwachsene Kinder",
                    "Trainingspartner"
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 py-3 px-5 rounded-xl border border-border bg-card/45">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed italic font-medium">
                  Jeder bringt eigene Ziele mit. Die Strategien werden individuell entwickelt und trotzdem gemeinsam begleitet.
                </p>
              </div>
            </div>
          </section>

          {/* ABSCHNITT 4: Das erwartet euch */}
          <section className="py-16 border-t border-border/80">
            <h2 className="text-3xl font-display text-center mb-12">Das erwartet euch</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Gemeinsamer Start",
                  desc: "Analyse eurer Ausgangssituation und eurer Ziele."
                },
                {
                  title: "Individuelle Strategien",
                  desc: "Jeder erhält einen eigenen Fahrplan – abgestimmt auf die persönlichen Voraussetzungen."
                },
                {
                  title: "Gegenseitige Motivation",
                  desc: "Gemeinsam fällt es leichter, neue Routinen zu entwickeln und dranzubleiben."
                },
                {
                  title: "Langfristige Begleitung",
                  desc: "Regelmäßige Anpassungen sorgen dafür, dass ihr euch gemeinsam weiterentwickelt."
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

          {/* ABSCHNITT 5: Gemeinsam wachsen. */}
          <section className="py-16 border-t border-border/80 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display mb-6">Gemeinsam wachsen.</h2>
              <p className="text-muted-foreground leading-relaxed mb-10 whitespace-pre-line">
                Gesundheit bedeutet nicht, alles alleine schaffen zu müssen.
                {"\n\n"}
                Manchmal ist der beste Weg der, den man gemeinsam geht.
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
