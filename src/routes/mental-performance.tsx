import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/mental-performance")({
  component: MentalPerformancePage,
});

function MentalPerformancePage() {
  const WHATSAPP_URL = "https://wa.me/4917699016640?text=Hallo%20Mich%C3%A9l,%20ich%20interessiere%20mich%20f%C3%BCr%20ein%20kostenloses%20Erstgespr%C3%A4ch%20zu%20M%C2%B3%20Mental%20Performance.";

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
              M³ · Mental Performance
            </div>

            <h1 className="text-5xl md:text-7xl font-display leading-[0.95] tracking-tight mb-8">
              M³ – Mental Performance
            </h1>
            <p className="text-xl md:text-2xl text-gold font-medium leading-relaxed max-w-3xl mb-6">
              Aus Veränderung wird Gewohnheit.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mb-12 whitespace-pre-line">
              Gesundheit entsteht nicht durch Motivation allein.
              {"\n\n"}
              Sie entsteht durch Entscheidungen, die immer wieder getroffen werden.
              {"\n\n"}
              Mental Performance bedeutet, Veränderungen dauerhaft in den Alltag zu integrieren und aus Wissen langfristiges Handeln entstehen zu lassen.
            </p>

            <Link
              to="/"
              hash="system"
              className="inline-flex items-center justify-center rounded-full bg-gold-gradient px-8 py-4 font-semibold text-primary-foreground shadow-[var(--shadow-gold)] hover:opacity-90 transition"
            >
              Das M³-System kennenlernen
            </Link>
          </div>

          {/* ABSCHNITT 2: Warum Mental Performance? */}
          <section className="py-16 border-t border-border/80">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h2 className="text-3xl font-display text-gold">Warum Mental Performance?</h2>
              </div>
              <div className="md:col-span-2 text-muted-foreground leading-relaxed whitespace-pre-line text-base">
                Viele Menschen wissen bereits, was ihnen guttun würde.
                {"\n\n"}
                Sie bewegen sich mehr.
                {"\n\n"}
                Sie ernähren sich bewusster.
                {"\n\n"}
                Sie schlafen ausreichend.
                {"\n\n"}
                Und trotzdem fällt es oft schwer, neue Gewohnheiten dauerhaft beizubehalten.
                {"\n\n"}
                Nicht, weil Motivation fehlt.
                {"\n\n"}
                Sondern weil Struktur fehlt.
                {"\n\n"}
                Genau hier setzt M³ an.
              </div>
            </div>
          </section>

          {/* ABSCHNITT 3: Nachhaltige Veränderung braucht mehr als Disziplin. */}
          <section className="py-16 border-t border-border/80">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h2 className="text-3xl font-display text-gold">Nachhaltige Veränderung braucht mehr als Disziplin.</h2>
              </div>
              <div className="md:col-span-2 text-muted-foreground leading-relaxed whitespace-pre-line text-base">
                Kurzfristige Motivation ist wertvoll.
                {"\n\n"}
                Langfristige Veränderungen entstehen jedoch durch Routinen, Klarheit und Entscheidungen, die immer wieder bewusst getroffen werden.
                {"\n\n"}
                Deshalb begleiten wir nicht nur Training oder Ernährung.
                {"\n\n"}
                Wir begleiten den gesamten Veränderungsprozess.
              </div>
            </div>
          </section>

          {/* ABSCHNITT 4: Die drei Säulen nachhaltiger Veränderung */}
          <section className="py-16 border-t border-border/80">
            <h2 className="text-3xl font-display text-center mb-12">Die drei Säulen nachhaltiger Veränderung</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Klarheit",
                  desc: "Verstehen, warum Veränderung notwendig ist."
                },
                {
                  title: "Struktur",
                  desc: "Neue Gewohnheiten Schritt für Schritt in den Alltag integrieren."
                },
                {
                  title: "Kontinuität",
                  desc: "Dranbleiben, anpassen und langfristig weiterentwickeln."
                }
              ].map((item, idx) => (
                <div key={item.title} className="border border-border bg-card p-8 rounded-2xl flex flex-col justify-between hover:border-gold/40 transition-all">
                  <div>
                    <div className="w-8 h-8 rounded-full bg-gold/10 text-gold flex items-center justify-center font-display text-xs mb-6">
                      0{idx + 1}
                    </div>
                    <h3 className="text-xl font-display text-gold mb-3">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ABSCHNITT 5: M³ verbindet. */}
          <section className="py-16 border-t border-border/80">
            <div className="rounded-2xl border border-border bg-card/60 p-8 md:p-12 shadow-sm">
              <div className="max-w-3xl">
                <span className="text-xs uppercase tracking-widest text-gold font-semibold block mb-4">Verknüpfung</span>
                <h2 className="text-3xl font-display mb-6">M³ verbindet.</h2>
                <p className="text-muted-foreground leading-relaxed mb-0 whitespace-pre-line">
                  Mental Performance ist kein einzelnes Angebot.
                  {"\n\n"}
                  Es ist die Philosophie, die alle Bereiche von M³ miteinander verbindet.
                  {"\n\n"}
                  Ganz gleich, ob Body Reset, Ernährungscoaching, Performance Training oder Schmerzfrei – nachhaltige Veränderungen entstehen erst dann, wenn sie dauerhaft gelebt werden.
                </p>
              </div>
            </div>
          </section>

          {/* ABSCHNITT 6: Veränderung beginnt mit der nächsten Entscheidung. */}
          <section className="py-16 border-t border-border/80 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display mb-6">Veränderung beginnt mit der nächsten Entscheidung.</h2>
              <p className="text-muted-foreground leading-relaxed mb-10 whitespace-pre-line">
                Gesundheit ist kein einmaliges Ziel.
                {"\n\n"}
                Sie ist ein Prozess.
                {"\n\n"}
                Und jeder Prozess beginnt mit dem ersten Schritt.
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
