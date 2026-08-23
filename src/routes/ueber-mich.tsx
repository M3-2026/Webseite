import { createFileRoute, Link } from "@tanstack/react-router";
import avatar from "@/assets/avatar.png";
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

      <main className="flex-grow py-20 md:py-28 relative hero-bg">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-gold/5 blur-3xl" />
        </div>

        <div className="relative max-w-5xl mx-auto px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition mb-10"
          >
            ← Zurück zur Startseite
          </Link>

          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gold mb-6">
            Über Michél
          </div>

          <h1 className="text-4xl md:text-6xl font-display font-extrabold tracking-tight mb-6">
            Meine Geschichte
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12 max-w-3xl">
            Mehr als Training. Warum Gesundheit der einzig wahre Schlüssel zu echter Leistungsfähigkeit ist – und wie M³ entstanden ist.
          </p>

          <div className="grid md:grid-cols-12 gap-8 items-center mb-12">
            <div className="md:col-span-5 flex justify-center">
              <div className="relative">
                <img
                  src={avatar}
                  alt="Michél Meier"
                  className="avatar-shadow h-[40vh] sm:h-[48vh] max-h-[500px] w-auto object-contain object-bottom select-none"
                />
              </div>
            </div>

            <div className="md:col-span-7 rounded-2xl border border-border bg-card p-8 md:p-10 shadow-sm space-y-5">
              <h2 className="text-2xl md:text-3xl font-display font-bold">Vom Breakdance zum Gesundheitscoach</h2>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                Meine Reise begann im Leistungssport und Tanzbereich – genauer gesagt beim Breakdance. Hier lernte ich die extremen Fähigkeiten des menschlichen Körpers kennen, aber auch seine Grenzen und Schwachstellen durch eigene schwere Verletzungen.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                Jahre des reinen Krafttrainings und klassischen Fitness-Denkens brachten mich an einen Punkt, an dem mir klar wurde: Echte und dauerhafte Performance kann nicht auf einem maroden Fundament aufgebaut werden. Wenn der Stoffwechsel nicht läuft, der Darm streikt oder die Regeneration ausbleibt, bringt das härteste Training nichts.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                Aus diesem Grund habe ich das M³-System entwickelt: Die Verschmelzung aus <strong className="text-foreground">Metabolism</strong> (Stoffwechsel & Darm), <strong className="text-foreground">Movement</strong> (Training & Schmerzfreiheit) und <strong className="text-foreground">Mental Performance</strong> (Fokus & Energie).
              </p>
            </div>
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
