import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import {
  Layers,
  Sparkles,
  Search,
  ArrowRight,
  MessageCircle,
  Flame,
  Dumbbell,
  Brain,
  CheckCircle2,
  Filter,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { modules, ModuleItem } from "@/data/content";

export const Route = createFileRoute("/katalog")({
  component: CatalogPage,
  head: () => ({
    meta: [
      { title: "M³ Angebots-Katalog – Alle Module von Einstieg bis High-Ticket" },
      {
        name: "description",
        content:
          "Alle M³ Module in der Übersicht: Von kostenlosen Einstiegs-Checks über 1:1 Coaching bis hin zu High-Ticket Betreuungen in M¹ Metabolism, M² Movement und M³ Mindset.",
      },
    ],
  }),
});

function CatalogPage() {
  const [pillarFilter, setPillarFilter] = useState<"all" | "m1" | "m2" | "m3">("all");
  const [tierFilter, setTierFilter] = useState<"all" | "free" | "entry" | "core" | "premium" | "high">("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredModules = useMemo(() => {
    return modules.filter((mod) => {
      const matchesPillar = pillarFilter === "all" || mod.pillar === pillarFilter;
      const matchesTier = tierFilter === "all" || mod.tier === tierFilter;
      const matchesSearch =
        searchQuery === "" ||
        mod.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        mod.kicker.toLowerCase().includes(searchQuery.toLowerCase()) ||
        mod.text.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesPillar && matchesTier && matchesSearch;
    });
  }, [pillarFilter, tierFilter, searchQuery]);

  const pillarMeta = {
    m1: { name: "M¹ Metabolism", color: "text-orange-600 border-orange-500/30 bg-orange-500/10", icon: Flame },
    m2: { name: "M² Movement", color: "text-emerald-700 border-emerald-500/30 bg-emerald-500/10", icon: Dumbbell },
    m3: { name: "M³ Mindset", color: "text-blue-700 border-blue-500/30 bg-blue-500/10", icon: Brain },
  };

  const tierLabels = {
    free: { label: "Kostenlos", bg: "bg-emerald-500/15 text-emerald-700 border-emerald-500/30" },
    entry: { label: "Einstieg", bg: "bg-blue-500/15 text-blue-700 border-blue-500/30" },
    core: { label: "Kern", bg: "bg-amber-500/15 text-amber-700 border-amber-500/30" },
    premium: { label: "Premium", bg: "bg-purple-500/15 text-purple-700 border-purple-500/30" },
    high: { label: "High Ticket", bg: "bg-red-500/15 text-red-700 border-red-500/30" },
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between overflow-x-hidden selection:bg-gold/20 selection:text-foreground">
      <Header />
      <Breadcrumbs items={[{ label: "Angebots-Katalog", pillar: "gold" }]} />

      <main className="flex-grow py-10 md:py-16 relative hero-bg text-left">
        <div className="relative max-w-6xl mx-auto px-5 md:px-6 space-y-12 md:space-y-16">
          
          {/* Hero Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gold font-bold shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>M³ Modul-Architektur</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight leading-[1.05] text-foreground">
              Alle Module. <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500">Eine Übersicht.</span>
            </h1>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Ein strukturierter Baukasten über alle drei Säulen: Von kostenlosen Orientierungs-Checks über gezielte Einstiegs-Resets bis hin zu intensiven High-Ticket Betreuungen.
            </p>

            <div className="pt-2 flex justify-center">
              <a
                href="https://wa.me/c/4917699016640"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-6 py-2.5 text-xs sm:text-sm font-bold text-amber-700 hover:bg-amber-500/20 transition shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp-Katalog direkt auf dem Smartphone öffnen</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Filters & Search */}
          <div className="p-4 rounded-3xl bg-card border border-border shadow-sm space-y-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Pillar Tabs */}
              <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
                <button
                  type="button"
                  onClick={() => setPillarFilter("all")}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    pillarFilter === "all"
                      ? "bg-gold-gradient text-primary-foreground shadow-sm"
                      : "bg-secondary text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Alle Säulen
                </button>
                <button
                  type="button"
                  onClick={() => setPillarFilter("m1")}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
                    pillarFilter === "m1"
                      ? "bg-orange-500 text-white shadow-sm"
                      : "bg-secondary text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Flame className="w-3 h-3" />
                  <span>M¹ Metabolism</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPillarFilter("m2")}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
                    pillarFilter === "m2"
                      ? "bg-emerald-600 text-white shadow-sm"
                      : "bg-secondary text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Dumbbell className="w-3 h-3" />
                  <span>M² Movement</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPillarFilter("m3")}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
                    pillarFilter === "m3"
                      ? "bg-blue-600 text-white shadow-sm"
                      : "bg-secondary text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Brain className="w-3 h-3" />
                  <span>M³ Mindset</span>
                </button>
              </div>

              {/* Search */}
              <div className="relative w-full md:w-72">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Modul oder Thema suchen..."
                  className="w-full pl-9 pr-4 py-2 rounded-xl bg-secondary/50 border border-border text-xs focus:outline-none focus:ring-2 focus:ring-gold/50 text-foreground"
                />
              </div>
            </div>

            {/* Tier filter pill bar */}
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-border/50 text-xs">
              <span className="text-muted-foreground font-semibold flex items-center gap-1 text-[11px] uppercase tracking-wider">
                <Filter className="w-3 h-3 text-gold" />
                Stufe:
              </span>
              {(["all", "free", "entry", "core", "premium", "high"] as const).map((tierKey) => (
                <button
                  key={tierKey}
                  type="button"
                  onClick={() => setTierFilter(tierKey)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
                    tierFilter === tierKey
                      ? "bg-foreground text-background shadow-xs"
                      : "bg-secondary/70 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tierKey === "all" ? "Alle Stufen" : tierLabels[tierKey].label}
                </button>
              ))}
            </div>
          </div>

          {/* Module Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredModules.map((mod) => {
              const meta = pillarMeta[mod.pillar];
              const tierBadge = tierLabels[mod.tier];
              const Icon = meta.icon;

              return (
                <div
                  key={mod.slug}
                  className="rounded-3xl border border-border bg-card overflow-hidden shadow-sm hover:border-gold/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Media Header */}
                    <div className="relative aspect-[16/9] overflow-hidden bg-black">
                      <img
                        src={mod.image}
                        alt={mod.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                      
                      <div className="absolute top-3 left-3 flex items-center gap-2">
                        <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-md border ${meta.color}`}>
                          <Icon className="w-3 h-3" />
                          <span>{meta.name}</span>
                        </span>
                      </div>

                      <div className="absolute top-3 right-3">
                        <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-md border ${tierBadge.bg}`}>
                          {tierBadge.label}
                        </span>
                      </div>

                      <div className="absolute bottom-3 left-3 right-3 text-white">
                        <div className="text-[10px] uppercase font-mono font-semibold text-gold tracking-wide">
                          {mod.badge}
                        </div>
                        <h3 className="font-display font-bold text-lg text-white leading-tight">
                          {mod.title}
                        </h3>
                      </div>
                    </div>

                    {/* Body */}
                    <div className="p-5 space-y-3">
                      <p className="text-xs font-semibold text-amber-600 uppercase tracking-wider">
                        {mod.kicker}
                      </p>
                      <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                        {mod.text}
                      </p>

                      {/* Included highlights */}
                      <div className="pt-2 space-y-1.5 border-t border-border/50">
                        {mod.includes.slice(0, 2).map((inc, i) => (
                          <div key={i} className="flex items-start gap-2 text-[11px] text-foreground/90">
                            <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{inc}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Footer CTAs */}
                  <div className="p-5 pt-0 border-t border-border/50 mt-3 flex items-center gap-2">
                    <a
                      href={mod.wa}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-1.5 rounded-full bg-gold-gradient py-2.5 px-4 text-xs font-bold text-primary-foreground shadow-sm hover:opacity-95 transition"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Anfragen</span>
                    </a>

                    {/* Dedicated route link if route exists */}
                    {(mod.slug === "body-reset" ||
                      mod.slug === "ernaehrungscoaching" ||
                      mod.slug === "schmerzfrei" ||
                      mod.slug === "performance-training" ||
                      mod.slug === "coaching-fuer-zwei" ||
                      mod.slug === "darm-stoffwechselbegleitung" ||
                      mod.slug === "goldene-grundversorgung") && (
                      <Link
                        to={`/${mod.slug}`}
                        className="inline-flex items-center justify-center rounded-full border border-border px-3 py-2.5 text-xs font-bold text-foreground hover:bg-secondary transition shrink-0"
                      >
                        Details
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {filteredModules.length === 0 && (
            <div className="p-12 text-center rounded-3xl bg-card border border-border space-y-3">
              <Layers className="w-8 h-8 text-muted-foreground mx-auto" />
              <div className="font-display font-bold text-base text-foreground">Keine Module gefunden</div>
              <p className="text-xs text-muted-foreground">
                Versuche es mit anderen Filter-Kriterien.
              </p>
            </div>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
}
