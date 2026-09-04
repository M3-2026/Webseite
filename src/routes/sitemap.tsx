import { useState, useMemo } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import {
  Search,
  ArrowRight,
  Flame,
  Dumbbell,
  Brain,
  Sparkles,
  User,
  Compass,
  Activity,
  HeartHandshake,
  MessageCircle,
  ExternalLink,
  Filter,
  CheckCircle2,
  BookOpen,
} from "lucide-react";

export const Route = createFileRoute("/sitemap")({
  component: SitemapPage,
  head: () => ({
    meta: [
      { title: "Sitemap & System-Verzeichnis – M³ Performance" },
      {
        name: "description",
        content:
          "Vollständiges Inhalts- und Modulverzeichnis von M³ Performance. Finde alle Informationen zu Stoffwechsel, Biomechanik, Mindset, Body Reset und Personal Training.",
      },
    ],
  }),
});

interface SitemapItem {
  title: string;
  subtitle: string;
  description: string;
  href: string;
  category: "system" | "metabolism" | "movement" | "mindset" | "about";
  pillar?: "m1" | "m2" | "m3" | "gold";
  pillarLabel: string;
  targetAudience: string;
  keyBenefits: string[];
  icon: typeof Sparkles;
  whatsappMessage?: string;
}

const SITEMAP_ITEMS: SitemapItem[] = [
  {
    title: "M³ System Start",
    subtitle: "Deine persönliche Eingangstür & Standortbestimmung",
    description:
      "Strukturierte 360°-Analyse deiner Ausgangslage über alle 3 Säulen hinweg. Erhalte deinen individuellen Fahrplan für Gesundheit, Training und Energie.",
    href: "/system-start",
    category: "system",
    pillar: "gold",
    pillarLabel: "Eingangstor",
    targetAudience: "Jeder, der Klarheit und einen maßgeschneiderten Einstieg sucht",
    keyBenefits: ["360° Bestandsaufnahme", "Individuelle Säulen-Gewichtung", "Klare Entscheidungsgrundlage"],
    icon: Compass,
    whatsappMessage: "Hallo Michél, ich interessiere mich für den M³ System Start.",
  },
  {
    title: "M¹ Body Reset",
    subtitle: "Ganzheitlicher Neustart für Darm und Stoffwechsel",
    description:
      "Das modulare Flaggschiff-Konzept: 16-Tage Darmkur zur Mikrobiom-Entlastung, gezielte Stoffwechselkur zur Fettverbrennung und tägliche Goldene Grundversorgung.",
    href: "/body-reset",
    category: "metabolism",
    pillar: "gold",
    pillarLabel: "M¹ · Flaggschiff",
    targetAudience: "Menschen mit Trägheit, Blähbauch, Heißhunger oder Stoffwechselblockaden",
    keyBenefits: ["16-Tage Darmreinigung", "Aktivierte Fettverbrennung", "Zelluläre Mikronährstoffe"],
    icon: Sparkles,
    whatsappMessage: "Hallo Michél, ich interessiere mich für den M¹ Body Reset.",
  },
  {
    title: "M¹ Metabolism",
    subtitle: "Säule 1: Gesundheit von innen",
    description:
      "Die biochemische Basis für Leistungsfähigkeit: Mikrobiom, Darmgesundheit, zelluläre Vitalstoffe und stabiler Blutzuckerspiegel als Schutz vor Energielöchern.",
    href: "/metabolism",
    category: "system",
    pillar: "m1",
    pillarLabel: "Säule 1",
    targetAudience: "Menschen mit chronischem Nachmittagstief und unruhiger Verdauung",
    keyBenefits: ["Darmbarriere-Stärkung", "Konstante Zellenergie", "Stoffwechsel-Aktivierung"],
    icon: Flame,
    whatsappMessage: "Hallo Michél, ich möchte mehr über die Säule M¹ Metabolism erfahren.",
  },
  {
    title: "M¹ Ernährungscoaching",
    subtitle: "Alltagstaugliche Makro-Struktur ohne Verbote",
    description:
      "Keine starren Diät-Korsetts oder Jojo-Effekte: Wir bauen eine Ernährungsstruktur, die sich flexibel in 60-Stunden-Arbeitswochen und Familienalltag einfügt.",
    href: "/ernaehrungscoaching",
    category: "metabolism",
    pillar: "m1",
    pillarLabel: "M¹ · Ernährung",
    targetAudience: "Vielbeschäftigte Berufstätige, die ohne Diätstress ihr Wohlfühlgewicht erreichen wollen",
    keyBenefits: ["Individuelle Makronährstoffe", "Echtes Restaurant- & Reise-Handling", "Dauerhafte Gewohnheiten"],
    icon: Flame,
    whatsappMessage: "Hallo Michél, ich interessiere mich für das M¹ Ernährungscoaching.",
  },
  {
    title: "M¹ Darmbegleitung",
    subtitle: "Gezielte Vertiefung für ein starkes Mikrobiom",
    description:
      "Intensive 1:1 Begleitung bei spezifischen Magen-Darm-Themen, Nahrungsmittelunverträglichkeiten und Stoffwechselträgheit mit fundierten Protokollen.",
    href: "/darm-stoffwechselbegleitung",
    category: "metabolism",
    pillar: "m1",
    pillarLabel: "M¹ · Spezialmodul",
    targetAudience: "Personen mit wiederkehrenden Verdauungsbeschwerden & Reizdarmsymptomen",
    keyBenefits: ["Mikrobiom-Aufbauprotokoll", "Entzündungshemmende Ernährung", "Engmaschige WhatsApp-Begleitung"],
    icon: Activity,
    whatsappMessage: "Hallo Michél, ich interessiere mich für die M¹ Darmbegleitung.",
  },
  {
    title: "M¹ Goldene Grundversorgung",
    subtitle: "Tägliche zelluläre Mikronährstoff-Basis",
    description:
      "Die hoch bioverfügbare Basisversorgung mit essentiellen Vitaminen, Spurenelementen und Antioxidantien zur Absicherung deiner täglichen Zellgesundheit.",
    href: "/goldene-grundversorgung",
    category: "metabolism",
    pillar: "m1",
    pillarLabel: "M¹ · Mikronährstoffe",
    targetAudience: "Jeder, der eine verlässliche zelluläre Vitalstoffbasis im Alltag sicherstellen will",
    keyBenefits: ["Höchste Bioverfügbarkeit", "Stärkung des Immunsystems", "Optimale Regeneration"],
    icon: Sparkles,
    whatsappMessage: "Hallo Michél, ich möchte mehr über die M¹ Goldene Grundversorgung wissen.",
  },
  {
    title: "M² Movement",
    subtitle: "Säule 2: Technik vor Gewicht – Immer",
    description:
      "Funktionelle Biomechanik, Gelenkstabilität und intelligente Bewegungsmuster. Wir trainieren Bewegungen, nicht isolierte Muskeln, um Schmerzen dauerhaft zu beseitigen.",
    href: "/movement",
    category: "system",
    pillar: "m2",
    pillarLabel: "Säule 2",
    targetAudience: "Menschen mit Haltungsfehlern oder dem Wunsch nach verletzungsfreier Bewegung",
    keyBenefits: ["Anatomische Fehlerkorrektur", "Gelenkschonender Kraftaufbau", "Alltagstaugliche Beweglichkeit"],
    icon: Dumbbell,
    whatsappMessage: "Hallo Michél, ich möchte mehr über die Säule M² Movement erfahren.",
  },
  {
    title: "M² Schmerzfrei",
    subtitle: "Rücken-, Nacken- & Gelenkmobilität",
    description:
      "Schluss mit Schreibtisch-Verspannungen und Schonhaltungen: Präzise 1:1 Analyse von Dysbalancen und strukturierte Mobilisation für einen schmerzfreien Alltag.",
    href: "/schmerzfrei",
    category: "movement",
    pillar: "m2",
    pillarLabel: "M² · Reha & Mobilität",
    targetAudience: "Büro- und Schreibtischtäter mit chronischen Verspannungen im Nacken/Rücken",
    keyBenefits: ["Ursachen- statt Symptombehebung", "Effektive 5-Minuten Alltagsroutinen", "Spürbare Erleichterung"],
    icon: Dumbbell,
    whatsappMessage: "Hallo Michél, ich interessiere mich für M² Schmerzfrei.",
  },
  {
    title: "M² Performance Training",
    subtitle: "1:1 Personal Training für Kraft & Explosivität",
    description:
      "Hochindividuelles Personal Training, das Maximalkraft, Schnellkraft und athletische Körperbeherrschung verbindet – basierend auf 25+ Jahren Weltklasse-Erfahrung.",
    href: "/performance-training",
    category: "movement",
    pillar: "m2",
    pillarLabel: "M² · Athletik",
    targetAudience: "Sportler, Ambitionierte und Führungskräfte, die ein neues Kraftlevel erreichen wollen",
    keyBenefits: ["1:1 Begleitung bei jeder Wiederholung", "Progressive Leistungssteigerung", "Feinste Biomechanik"],
    icon: Dumbbell,
    whatsappMessage: "Hallo Michél, ich interessiere mich für das M² Performance Training.",
  },
  {
    title: "M² Coaching für Zwei",
    subtitle: "Personal Training für Paare & Freunde",
    description:
      "Gemeinsam fit werden mit doppelter Motivation: Individuell angepasste Trainingspläne für zwei Personen, kombiniert mit maximalem Spaß und Teamgeist.",
    href: "/coaching-fuer-zwei",
    category: "movement",
    pillar: "m2",
    pillarLabel: "M² · Partner",
    targetAudience: "Paare, Geschwister oder Freunde, die gemeinsam gesund und stark werden möchten",
    keyBenefits: ["Gemeinsames Training mit individuellen Zielen", "Doppelte Verbindlichkeit", "Gegenseitige Motivation"],
    icon: HeartHandshake,
    whatsappMessage: "Hallo Michél, wir interessieren uns für das M² Coaching für Zwei.",
  },
  {
    title: "M³ Mental Performance",
    subtitle: "Säule 3: Aus Disziplin wird Routine",
    description:
      "Mentale Kälte, Stressresistenz, Schlaf-Optimierung und minimale Alltagsroutinen: Wir bauen Strukturen auf, die dich unabhängig machen und ein Leben lang halten.",
    href: "/mental-performance",
    category: "system",
    pillar: "m3",
    pillarLabel: "Säule 3",
    targetAudience: "Menschen mit hoher beruflicher Belastung, die innere Ruhe und Fokus suchen",
    keyBenefits: ["Schlaf- & Regenerationsarchitektur", "Stressresilienz & Cortisolregulation", "Gewohnheiten, die halten"],
    icon: Brain,
    whatsappMessage: "Hallo Michél, ich möchte mehr über M³ Mental Performance erfahren.",
  },
  {
    title: "Über Michél Meier",
    subtitle: "25+ Jahre Bewegungspraxis & Weltmeisterjahre",
    description:
      "Vom Breakdance-Weltmeistertitel 2006/07 und schweren Rückschlägen zur Entwicklung des modularen M³ Gesundheitssystems. Erfahre alles über Michéls Philosophie und Werte.",
    href: "/ueber-mich",
    category: "about",
    pillar: "gold",
    pillarLabel: "Story & Werte",
    targetAudience: "Jeder, der wissen möchte, wer hinter M³ Performance steht",
    keyBenefits: ["Echte gelebte Bewegungserfahrung", "5 unverrückbare Qualitätswerte", "100% persönliche Betreuung"],
    icon: User,
    whatsappMessage: "Hallo Michél, ich habe deine Story gelesen und möchte Kontakt aufnehmen.",
  },
];

const HOMEPAGE_SECTIONS = [
  { label: "Hero & Intro", hash: "top", desc: "Leistung beginnt mit Gesundheit – Schnelleinstieg" },
  { label: "Trinity Bento", hash: "system", desc: "Die drei Säulen: Metabolism, Movement & Mindset" },
  { label: "System-Kompass", hash: "system-kompass", desc: "Interaktive Bedarfsanalyse & Eingangstür" },
  { label: "Modulare Bausteine", hash: "leistungen", desc: "Alle 8 Coaching- und Gesundheitsprogramme" },
  { label: "Über Michél & Werte", hash: "ueber", desc: "Weltmeisterjahre, Philosophie & Prinzipien" },
];

export function SitemapPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredItems = useMemo(() => {
    return SITEMAP_ITEMS.filter((item) => {
      const matchesCategory =
        selectedCategory === "all" ||
        (selectedCategory === "system" && item.category === "system") ||
        (selectedCategory === "metabolism" && item.category === "metabolism") ||
        (selectedCategory === "movement" && item.category === "movement") ||
        (selectedCategory === "about" && item.category === "about");

      const q = searchQuery.trim().toLowerCase();
      if (!q) return matchesCategory;

      const matchesSearch =
        item.title.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.targetAudience.toLowerCase().includes(q) ||
        item.keyBenefits.some((b) => b.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const pillarColorClasses = {
    m1: "border-orange-500/30 bg-gradient-to-br from-orange-500/10 via-card to-card hover:border-orange-500/60 text-orange-600",
    m2: "border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 via-card to-card hover:border-emerald-500/60 text-emerald-700",
    m3: "border-blue-500/30 bg-gradient-to-br from-blue-500/10 via-card to-card hover:border-blue-500/60 text-blue-700",
    gold: "border-amber-500/40 bg-gradient-to-br from-amber-500/10 via-card to-card hover:border-amber-500/70 text-amber-700",
  };

  const pillarBadgeClasses = {
    m1: "bg-orange-500/15 text-orange-600 border-orange-500/30",
    m2: "bg-emerald-500/15 text-emerald-700 border-emerald-500/30",
    m3: "bg-blue-500/15 text-blue-700 border-blue-500/30",
    gold: "bg-amber-500/15 text-amber-700 border-amber-500/30",
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between selection:bg-gold/20">
      <Header />

      <main className="flex-1 pb-16">
        {/* Breadcrumbs */}
        <Breadcrumbs items={[{ label: "Sitemap & System-Verzeichnis", pillar: "gold" }]} />

        {/* Hero Section */}
        <section className="py-12 md:py-16 border-b border-border/70 bg-secondary/20">
          <div className="max-w-7xl mx-auto px-5 md:px-6 space-y-6 text-center">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-amber-700 font-bold block">
              Inhalts- & Modulverzeichnis
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-foreground tracking-tight">
              M³ System-Sitemap
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Vollständige Übersicht aller Hauptsäulen, Spezialangebote und Kernkapitel von M³ Performance & Gesundheit.
            </p>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto pt-2">
              <div className="relative flex items-center">
                <Search className="w-5 h-5 text-amber-600 absolute left-4 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Thema, Beschwerde oder Modul suchen (z. B. Darm, Schmerzfrei, Kraft)..."
                  className="w-full pl-12 pr-4 py-3.5 rounded-full border border-border bg-card shadow-sm text-sm font-medium text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-amber-500/40"
                  aria-label="Sitemap durchsuchen"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 text-xs font-bold text-muted-foreground hover:text-foreground"
                  >
                    Löschen
                  </button>
                )}
              </div>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
              {[
                { id: "all", label: `Alle Seiten (${SITEMAP_ITEMS.length})` },
                { id: "system", label: "Die 3 Säulen" },
                { id: "metabolism", label: "M¹ Stoffwechsel & Darm" },
                { id: "movement", label: "M² Training & Reha" },
                { id: "about", label: "Über Michél" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                    selectedCategory === tab.id
                      ? "bg-gold-gradient text-primary-foreground shadow-sm"
                      : "bg-card border border-border/80 text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Directory Cards Grid */}
        <section className="py-12 md:py-16 max-w-7xl mx-auto px-5 md:px-6">
          <div className="flex items-center justify-between pb-6 border-b border-border/70 mb-8">
            <h2 className="text-xl md:text-2xl font-display font-extrabold text-foreground flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-amber-600" />
              <span>Gefundene Module & Seiten ({filteredItems.length})</span>
            </h2>
            <span className="text-xs text-muted-foreground">Klicke für Details oder WhatsApp-Anfrage</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => {
              const pillar = item.pillar || "gold";
              const borderClass = pillarColorClasses[pillar];
              const badgeClass = pillarBadgeClasses[pillar];
              const Icon = item.icon;
              const whatsappUrl = `https://wa.me/4917699016640?text=${encodeURIComponent(
                item.whatsappMessage || `Hallo Michél, ich habe eine Frage zu ${item.title}.`
              )}`;

              return (
                <div
                  key={item.href}
                  className={`rounded-3xl border p-6 md:p-7 flex flex-col justify-between shadow-sm transition-all hover:scale-[1.02] hover:shadow-xl text-left ${borderClass}`}
                >
                  <div className="space-y-4">
                    {/* Header: Badge & Icon */}
                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] font-mono uppercase tracking-wider font-bold px-2.5 py-0.5 rounded-full border ${badgeClass}`}>
                        {item.pillarLabel}
                      </span>
                      <div className="w-9 h-9 rounded-xl bg-card border border-border/80 flex items-center justify-center shrink-0 shadow-sm">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Title & Subtitle */}
                    <div>
                      <h3 className="text-xl font-display font-extrabold text-foreground mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {item.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>

                    {/* Target Audience */}
                    <div className="p-2.5 rounded-xl bg-secondary/40 border border-border/60 text-[11px] text-foreground">
                      <strong className="text-muted-foreground font-semibold block mb-0.5">Ideal für:</strong>
                      {item.targetAudience}
                    </div>

                    {/* Key Benefits */}
                    <div className="space-y-1.5 pt-1">
                      {item.keyBenefits.map((benefit, bIdx) => (
                        <div key={bIdx} className="flex items-center gap-1.5 text-xs text-foreground/90 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-6 mt-4 border-t border-border/60 flex items-center gap-2">
                    <Link
                      to={item.href}
                      className="w-full inline-flex items-center justify-center gap-1.5 rounded-full bg-card border border-border px-4 py-2.5 text-xs font-bold text-foreground hover:bg-secondary transition shadow-sm"
                    >
                      <span>Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-1.5 rounded-full bg-gold-gradient px-4 py-2.5 text-xs font-bold text-primary-foreground shadow-sm hover:opacity-95 transition"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Anfragen</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Startseite Kapitel Schnellsprung */}
        <section className="py-12 bg-secondary/30 border-t border-border/80">
          <div className="max-w-7xl mx-auto px-5 md:px-6 space-y-6 text-left">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-amber-700 font-bold block mb-1">
                Startseiten-Architektur
              </span>
              <h2 className="text-xl md:text-2xl font-display font-extrabold text-foreground">
                Direktsprung in die Startseiten-Kapitel
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
              {HOMEPAGE_SECTIONS.map((sec) => (
                <Link
                  key={sec.hash}
                  to="/"
                  hash={sec.hash}
                  className="rounded-2xl border border-border bg-card p-4 hover:border-amber-500/50 hover:shadow-md transition-all group flex flex-col justify-between"
                >
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-foreground group-hover:text-amber-600 transition-colors flex items-center justify-between">
                      <span>{sec.label}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                    </span>
                    <p className="text-[11px] text-muted-foreground leading-snug">
                      {sec.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
