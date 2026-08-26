import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/darm-stoffwechselbegleitung")({
  component: DarmStoffwechselPage,
});

function DarmStoffwechselPage() {
  const WHATSAPP_URL = "https://wa.me/4917699016640?text=Hallo%20Mich%C3%A9l,%20ich%20interessiere%20mich%20f%C3%BCr%20die%20Darm-%20und%20Stoffwechselbegleitung.";

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between overflow-x-hidden">
      <Header />

      <main className="flex-grow py-24 md:py-32 relative hero-bg">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gold/5 blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition mb-12"
          >
            ← Zurück zur Startseite
          </Link>

          <div className="mb-20 grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gold mb-2">
                M¹ · Metabolism
              </div>

              <h1 className="text-4xl sm:text-6xl font-display font-extrabold leading-[0.95] text-foreground">
                Darm- & Stoffwechselbegleitung
              </h1>

              <p className="text-lg sm:text-xl text-gold font-medium leading-relaxed max-w-2xl">
                Deine ganzheitliche Begleitung für ein starkes Mikrobiom, optimale Nährstoffresorption und einen aktiven Stoffwechsel.
              </p>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm rounded-3xl overflow-hidden border-2 border-gold/30 shadow-[var(--shadow-card)] bg-black group aspect-square">
                <img
                  src="/images/performance/m1-nutrition-bowl.jpg"
                  alt="Darmgesundheit & Nährstoffaufnahme"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-xs font-mono text-gold font-bold">
                  MIKROBIOM & STOFFWECHSEL
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8 md:p-12 mb-12 shadow-sm">
            <h2 className="text-2xl font-display mb-6">Das Konzept</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Ein gesunder Darm ist der Schlüssel zu deiner Vitalität. Über eine detaillierte Analyse deines Stoffwechsels und deiner Gewohnheiten entwickeln wir ein auf dich abgestimmtes Konzept, um deine Verdauung langfristig zu regulieren.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 mt-8 pt-8 border-t border-border">
              <div>
                <h3 className="font-semibold text-gold mb-2">Darmbarriere</h3>
                <p className="text-sm text-muted-foreground">Unterstützung der Schleimhaut für ein optimales Immunsystem.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gold mb-2">Nährstoffaufnahme</h3>
                <p className="text-sm text-muted-foreground">Wir sorgen dafür, dass dein Körper das Beste aus der Nahrung aufnehmen kann.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gold mb-2">Stoffwechselaktivierung</h3>
                <p className="text-sm text-muted-foreground">Individuelle Ernährungsanpassung zur Optimierung der Energieproduktion.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-gold-gradient px-8 py-4 font-semibold text-primary-foreground shadow-[var(--shadow-gold)] hover:opacity-90 transition"
            >
              Jetzt via WhatsApp anfragen
            </a>
            <Link
              to="/"
              hash="leistungen"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-border px-8 py-4 font-semibold hover:bg-secondary transition text-center"
            >
              Andere Leistungen ansehen
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
