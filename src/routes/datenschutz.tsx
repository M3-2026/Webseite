import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { legal } from "@/data/legal";

export const Route = createFileRoute("/datenschutz")({
  component: DatenschutzPage,
  head: () => ({
    meta: [
      { title: "Datenschutzerklärung | M³ Performance" },
      { name: "description", content: "Datenschutzerklärung und Informationen zur Datenverarbeitung bei M³ Performance." },
    ],
  }),
});

function DatenschutzPage() {
  const content = legal.de.privacy;

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between overflow-x-hidden selection:bg-gold/20 selection:text-foreground">
      <Header />
      <Breadcrumbs items={[{ label: "Datenschutz", pillar: "gold" }]} />

      <main className="flex-grow py-12 md:py-16 relative hero-bg text-left">
        <div className="relative max-w-4xl mx-auto px-5 md:px-6 space-y-10">
          <div className="space-y-2 border-b border-border/70 pb-6">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-gold">
              {content.eyebrow}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-foreground">
              {content.title}
            </h1>
            <p className="text-sm text-muted-foreground">{content.lead}</p>
          </div>

          <div className="space-y-8 text-foreground/90">
            {content.sections.map((sec, i) => (
              <div key={i} className="space-y-2 rounded-2xl bg-card border border-border p-6 shadow-xs">
                <h2 className="font-display font-bold text-lg text-foreground">{sec.h}</h2>
                <div className="space-y-2 text-xs sm:text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                  {sec.p.map((par, pIdx) => (
                    <p key={pIdx}>{par}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
