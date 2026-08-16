import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/ueber-mich")({
  component: UeberMichPage,
});

function UeberMichPage() {
  const WHATSAPP_URL = "https://wa.me/4917699016640?text=Hallo%20Mich%C3%A9l,%20ich%20m%C3%B6chte%20mehr%20%C3%BCber%20dein%20Coaching%20erfahren.";

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

          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gold mb-8">
            Über Michél
          </div>

          <h1 className="text-4xl md:text-6xl font-display leading-[0.95] mb-6">
            Meine Geschichte
          </h1>

          <p className="text-xl text-muted-foreground leading-relaxed mb-12 max-w-2xl">
            Mehr als Training. Warum Gesundheit der einzig wahre Schlüssel zu echter Leistungsfähigkeit ist – und wie M³ entstanden ist.
          </p>

          <div className="rounded-2xl border border-border bg-card p-8 md:p-12 mb-12 shadow-sm space-y-6">
            <h2 className="text-2xl font-display mb-4">Vom Breakdance zum Gesundheitscoach</h2>
            <p className="text-muted-foreground leading-relaxed">
              Meine Reise begann im Leistungssport und Tanzbereich – genauer gesagt beim Breakdance. Hier lernte ich die extremen Fähigkeiten des menschlichen Körpers kennen, aber auch seine Grenzen und Schwachstellen durch eigene schwere Verletzungen.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Jahre des reinen Krafttrainings und klassischen Fitness-Denkens brachten mich an einen Punkt, an dem mir klar wurde: Echte und dauerhafte Performance kann nicht auf einem maroden Fundament aufgebaut werden. Wenn der Stoffwechsel nicht läuft, der Darm streikt oder die Regeneration ausbleibt, bringt das härteste Training nichts.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Aus diesem Grund habe ich das M³-System entwickelt: Die Verschmelzung aus **Metabolism** (Stoffwechsel & Darm), **Movement** (Training & Schmerzfreiheit) und **Mental Performance** (Fokus & Energie).
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-gold-gradient px-8 py-4 font-semibold text-primary-foreground shadow-[var(--shadow-gold)] hover:opacity-90 transition"
            >
              Lass uns sprechen
            </a>
            <Link
              to="/"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-border px-8 py-4 font-semibold hover:bg-secondary transition text-center"
            >
              Zurück zum System
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
