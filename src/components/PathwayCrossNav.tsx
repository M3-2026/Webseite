import { Link } from "@tanstack/react-router";
import { ArrowRight, Compass, MessageCircle, Sparkles, Flame, Dumbbell, Brain, CheckCircle2 } from "lucide-react";

export interface PathwayItem {
  title: string;
  subtitle: string;
  href: string;
  pillar?: "m1" | "m2" | "m3" | "gold";
  tag: string;
}

interface PathwayCrossNavProps {
  currentRoute: string;
  customHeading?: string;
  customSubtitle?: string;
  customPathways?: PathwayItem[];
}

const DEFAULT_PATHWAYS: Record<string, PathwayItem[]> = {
  metabolism: [
    {
      title: "M³ Body Reset",
      subtitle: "Ganzheitlicher Neustart: 16-Tage Darmkur, Stoffwechselkur & Grundversorgung",
      href: "/body-reset",
      pillar: "gold",
      tag: "Flaggschiff-Konzept",
    },
    {
      title: "1:1 Ernährungscoaching",
      subtitle: "Alltagstaugliche Makro-Struktur ohne Diät-Korsett und ohne Jojo-Effekt",
      href: "/ernaehrungscoaching",
      pillar: "m1",
      tag: "1:1 Begleitung",
    },
    {
      title: "M² Movement Biomechanik",
      subtitle: "Entdecke, wie optimierte Bewegung deinen Stoffwechsel zusätzlich antreibt",
      href: "/movement",
      pillar: "m2",
      tag: "Säule 2",
    },
  ],
  movement: [
    {
      title: "M³ Schmerzfrei-Begleitung",
      subtitle: "Gezielte Mobilisation & Ursachenbehebung bei Rücken- & Nackenbeschwerden",
      href: "/schmerzfrei",
      pillar: "m2",
      tag: "Reha & Mobilität",
    },
    {
      title: "M³ Performance Training",
      subtitle: "1:1 Personal Training für echte Kraft, Explosivität & Körperbeherrschung",
      href: "/performance-training",
      pillar: "m2",
      tag: "Athletik",
    },
    {
      title: "M¹ Metabolism Fundament",
      subtitle: "Verbinde deine Bewegung mit stabiler Zellenergie und optimiertem Stoffwechsel",
      href: "/metabolism",
      pillar: "m1",
      tag: "Säule 1",
    },
  ],
  "mental-performance": [
    {
      title: "M³ System Start",
      subtitle: "Lass deine persönliche Ausgangslage & Gewohnheiten im 360°-Kompass analysieren",
      href: "/system-start",
      pillar: "gold",
      tag: "Eingangstür",
    },
    {
      title: "M¹ Metabolism",
      subtitle: "Erfahre, wie Darmgesundheit und Blutzucker deine mentale Klarheit steuern",
      href: "/metabolism",
      pillar: "m1",
      tag: "Säule 1",
    },
    {
      title: "Über Michél Meier",
      subtitle: "25+ Jahre Erfahrung im Spitzensport & wie Disziplin zur Routine wird",
      href: "/ueber-mich",
      pillar: "gold",
      tag: "Story & Werte",
    },
  ],
  "body-reset": [
    {
      title: "1:1 Ernährungscoaching",
      subtitle: "Sichere deine Reset-Ergebnisse langfristig mit alltagstauglichen Makros ab",
      href: "/ernaehrungscoaching",
      pillar: "m1",
      tag: "Ernährung",
    },
    {
      title: "M³ System Start",
      subtitle: "Der strukturierte Einstieg zur Abstimmung deiner persönlichen Reset-Phase",
      href: "/system-start",
      pillar: "gold",
      tag: "Eingangstür",
    },
    {
      title: "M² Movement Biomechanik",
      subtitle: "Aktiviere deinen Körper während des Resets mit schmerzfreier Bewegung",
      href: "/movement",
      pillar: "m2",
      tag: "Säule 2",
    },
  ],
};

export function PathwayCrossNav({
  currentRoute,
  customHeading = "Vernetzte Wege im M³-System",
  customSubtitle = "Gesundheit ist kein isolierter Baustein. Entdecke die idealen nächsten Schritte für deine Transformation.",
  customPathways,
}: PathwayCrossNavProps) {
  const pathways =
    customPathways ||
    DEFAULT_PATHWAYS[currentRoute] || [
      {
        title: "M³ System Start",
        subtitle: "Dein persönlicher Einstieg & 360°-Standortbestimmung mit Michél",
        href: "/system-start",
        pillar: "gold",
        tag: "Eingangstür",
      },
      {
        title: "M³ Body Reset",
        subtitle: "Das modulare Flaggschiff-Konzept für Darm und Stoffwechsel",
        href: "/body-reset",
        pillar: "gold",
        tag: "Flaggschiff",
      },
      {
        title: "Interaktive Sitemap",
        subtitle: "Alle 14 Module, Säulen und Programme im direkten Überblick",
        href: "/sitemap",
        pillar: "gold",
        tag: "System-Verzeichnis",
      },
    ];

  const pillarBorderClasses = {
    m1: "border-orange-500/30 bg-gradient-to-br from-orange-500/10 via-card to-card hover:border-orange-500/60 hover:shadow-orange-500/10",
    m2: "border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 via-card to-card hover:border-emerald-500/60 hover:shadow-emerald-500/10",
    m3: "border-blue-500/30 bg-gradient-to-br from-blue-500/10 via-card to-card hover:border-blue-500/60 hover:shadow-blue-500/10",
    gold: "border-amber-500/40 bg-gradient-to-br from-amber-500/10 via-card to-card hover:border-amber-500/70 hover:shadow-amber-500/15",
  };

  const pillarTextClasses = {
    m1: "text-orange-600",
    m2: "text-emerald-700",
    m3: "text-blue-700",
    gold: "text-amber-700",
  };

  return (
    <section className="py-12 md:py-16 border-t border-border/80 bg-secondary/15">
      <div className="max-w-7xl mx-auto px-5 md:px-6 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border/60 pb-6 text-left">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-amber-700 font-bold block mb-1">
              Ganzheitliche Vernetzung
            </span>
            <h2 className="text-2xl md:text-3xl font-display font-extrabold text-foreground">
              {customHeading}
            </h2>
            <p className="text-xs md:text-sm text-muted-foreground mt-1 max-w-2xl">
              {customSubtitle}
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/sitemap"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-600 transition bg-card border border-amber-500/30 px-3.5 py-2 rounded-full shadow-sm"
            >
              <span>Alle Module im Verzeichnis</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* 3 Pathway Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {pathways.map((item, idx) => {
            const pillar = item.pillar || "gold";
            const borderClass = pillarBorderClasses[pillar];
            const textClass = pillarTextClasses[pillar];

            return (
              <Link
                key={idx}
                to={item.href}
                className={`rounded-3xl border p-6 flex flex-col justify-between shadow-sm transition-all hover:scale-[1.02] hover:shadow-lg text-left group ${borderClass}`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-mono uppercase tracking-wider font-bold px-2.5 py-0.5 rounded-full bg-secondary/80 border border-border/70 ${textClass}`}>
                      {item.tag}
                    </span>
                    <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${textClass}`} />
                  </div>
                  <h3 className={`text-lg md:text-xl font-display font-extrabold text-foreground transition-colors group-hover:${textClass}`}>
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>

                <div className="pt-4 mt-2 border-t border-border/50 flex items-center justify-between text-xs font-bold">
                  <span className={textClass}>Details ansehen</span>
                  <span className="text-[10px] text-muted-foreground font-normal">M³ vernetzt</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
