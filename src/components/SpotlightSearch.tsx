import { useState, useEffect, useMemo, useRef } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import {
  Search,
  X,
  ArrowRight,
  Flame,
  Dumbbell,
  Brain,
  Sparkles,
  User,
  Compass,
  FileText,
  Activity,
  Layers,
  HeartHandshake,
} from "lucide-react";

export interface SearchEntry {
  title: string;
  subtitle: string;
  href: string;
  category: "Pillars" | "Offers" | "Overview" | "About";
  pillar?: "m1" | "m2" | "m3" | "gold";
  keywords: string[];
  icon: typeof Search;
}

export const SEARCH_DIRECTORY: SearchEntry[] = [
  {
    title: "M³ System Start",
    subtitle: "Deine Eingangstür: Standortbestimmung & 360°-Analyse",
    href: "/system-start",
    category: "Overview",
    pillar: "gold",
    keywords: ["start", "eingang", "analyse", "kompass", "erstgespräch", "orientierung", "test"],
    icon: Compass,
  },
  {
    title: "M³ Body Reset",
    subtitle: "Flaggschiff-Konzept: 16-Tage Darmkur, Stoffwechselkur & Grundversorgung",
    href: "/body-reset",
    category: "Offers",
    pillar: "gold",
    keywords: ["reset", "darm", "stoffwechsel", "kur", "flaggschiff", "reinigung", "energie"],
    icon: Sparkles,
  },
  {
    title: "M¹ Metabolism",
    subtitle: "Fundament für Zellenergie, Mikrobiom & Blutzucker",
    href: "/metabolism",
    category: "Pillars",
    pillar: "m1",
    keywords: ["metabolism", "stoffwechsel", "m1", "darm", "nährstoffe", "blutzucker", "energie", "säule"],
    icon: Flame,
  },
  {
    title: "M³ Ernährungscoaching",
    subtitle: "Individuelle 1:1 Makro-Struktur für Alltag & Familie ohne Diät-Zwang",
    href: "/ernaehrungscoaching",
    category: "Offers",
    pillar: "m1",
    keywords: ["ernährung", "coaching", "makros", "diät", "kalorien", "essen", "kochen", "plan"],
    icon: Flame,
  },
  {
    title: "Darm- & Stoffwechselbegleitung",
    subtitle: "Spezifische Unterstützung bei Blähbauch, Trägheit & Unverträglichkeiten",
    href: "/darm-stoffwechselbegleitung",
    category: "Offers",
    pillar: "m1",
    keywords: ["darm", "begleitung", "mikrobiom", "blähbauch", "stoffwechsel", "verdauung"],
    icon: Activity,
  },
  {
    title: "Goldene Grundversorgung",
    subtitle: "Tägliche Mikronährstoff-Basis für Vitalität und Zellschutz",
    href: "/goldene-grundversorgung",
    category: "Offers",
    pillar: "m1",
    keywords: ["grundversorgung", "vitamine", "mineralien", "nährstoffe", "supplemente", "gold"],
    icon: Sparkles,
  },
  {
    title: "M² Movement",
    subtitle: "Funktionelle Biomechanik: Technik schlägt Gewicht – Immer",
    href: "/movement",
    category: "Pillars",
    pillar: "m2",
    keywords: ["movement", "bewegung", "m2", "training", "anatomie", "biomechanik", "kraft", "säule"],
    icon: Dumbbell,
  },
  {
    title: "M³ Schmerzfrei-Programm",
    subtitle: "Gezielte Mobilisation & Ursachenbehebung bei Rücken- & Nackenbeschwerden",
    href: "/schmerzfrei",
    category: "Offers",
    pillar: "m2",
    keywords: ["schmerz", "schmerzfrei", "rücken", "nacken", "gelenke", "reha", "physio", "haltung"],
    icon: Dumbbell,
  },
  {
    title: "M³ Performance Training",
    subtitle: "1:1 Personal Training für Maximalkraft, Schnellkraft & Athletik",
    href: "/performance-training",
    category: "Offers",
    pillar: "m2",
    keywords: ["performance", "training", "personal training", "kraft", "athletik", "muskelaufbau"],
    icon: Dumbbell,
  },
  {
    title: "Coaching für Zwei",
    subtitle: "Personal Training für Paare & Freunde mit doppelter Motivation",
    href: "/coaching-fuer-zwei",
    category: "Offers",
    pillar: "m2",
    keywords: ["zwei", "partner", "paare", "freunde", "duo", "training"],
    icon: HeartHandshake,
  },
  {
    title: "M³ Mental Performance",
    subtitle: "Routinen, Stressresilienz & Schlaf für dauerhafte Disziplin",
    href: "/mental-performance",
    category: "Pillars",
    pillar: "m3",
    keywords: ["mental", "mindset", "m3", "schlaf", "stress", "routine", "disziplin", "resilienz", "säule"],
    icon: Brain,
  },
  {
    title: "Über Michél Meier",
    subtitle: "25+ Jahre Athletik, IDO Breakdance-Weltmeister & Coach-Werdegang",
    href: "/ueber-mich",
    category: "About",
    pillar: "gold",
    keywords: ["über mich", "michel", "story", "weltmeister", "trainer", "philosophie", "werte"],
    icon: User,
  },
  {
    title: "Interaktive Sitemap",
    subtitle: "Vollständige Übersicht aller 14 Haupt- und Unterseiten des M³ Systems",
    href: "/sitemap",
    category: "Overview",
    pillar: "gold",
    keywords: ["sitemap", "übersicht", "navigation", "alle seiten", "verzeichnis", "inhalte"],
    icon: Layers,
  },
];

interface SpotlightSearchProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SpotlightSearch({ isOpen, onClose }: SpotlightSearchProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Filter entries
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return SEARCH_DIRECTORY;

    return SEARCH_DIRECTORY.filter((item) => {
      const matchTitle = item.title.toLowerCase().includes(q);
      const matchSubtitle = item.subtitle.toLowerCase().includes(q);
      const matchKeywords = item.keywords.some((k) => k.toLowerCase().includes(q));
      return matchTitle || matchSubtitle || matchKeywords;
    });
  }, [query]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev < filtered.length - 1 ? prev + 1 : 0));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : filtered.length - 1));
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filtered[selectedIndex]) {
          navigate({ to: filtered[selectedIndex].href });
          onClose();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filtered, selectedIndex, navigate, onClose]);

  // Scroll active item into view
  useEffect(() => {
    if (!listRef.current) return;
    const activeEl = listRef.current.children[selectedIndex] as HTMLElement;
    if (activeEl) {
      activeEl.scrollIntoView({ block: "nearest" });
    }
  }, [selectedIndex]);

  if (!isOpen) return null;

  const pillarColorClasses = {
    m1: "text-orange-600 bg-orange-500/10 border-orange-500/30",
    m2: "text-emerald-700 bg-emerald-500/10 border-emerald-500/30",
    m3: "text-blue-700 bg-blue-500/10 border-blue-500/30",
    gold: "text-amber-700 bg-amber-500/10 border-amber-500/30",
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 md:p-20 bg-black/60 backdrop-blur-md animate-fade-in">
      <div
        className="w-full max-w-2xl bg-card border border-border/90 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh] animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header */}
        <div className="flex items-center px-4 md:px-6 py-4 border-b border-border/80 gap-3 bg-secondary/20">
          <Search className="w-5 h-5 text-amber-600 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Suche nach Thema, Säule, Angebot oder Ziel..."
            className="w-full bg-transparent text-foreground placeholder:text-muted-foreground text-sm md:text-base font-medium focus:outline-none"
            aria-label="Schnellsuche im M³ System"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="p-1 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary transition"
              aria-label="Eingabe löschen"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="text-xs font-mono font-bold px-2 py-1 rounded bg-secondary text-muted-foreground border border-border shrink-0 hover:bg-secondary/80"
          >
            ESC
          </button>
        </div>

        {/* Results List */}
        <div ref={listRef} className="overflow-y-auto p-3 space-y-1.5 flex-1">
          {filtered.length === 0 ? (
            <div className="p-8 text-center space-y-2">
              <p className="text-sm font-semibold text-foreground">Keine Treffer für „{query}“</p>
              <p className="text-xs text-muted-foreground">
                Versuche es mit Begriffen wie <em>Darm</em>, <em>Schmerzfrei</em>, <em>Ernährung</em>, <em>Mindset</em> oder <em>Reset</em>.
              </p>
            </div>
          ) : (
            filtered.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              const Icon = item.icon;
              const badgeClass = item.pillar ? pillarColorClasses[item.pillar] : "";

              return (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={onClose}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full flex items-center justify-between p-3 rounded-2xl transition-all text-left group ${
                    isSelected
                      ? "bg-secondary/90 border border-amber-500/40 shadow-sm"
                      : "hover:bg-secondary/50 border border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${
                        badgeClass || "bg-secondary border-border text-foreground"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-display font-bold text-sm text-foreground truncate group-hover:text-amber-600 transition-colors">
                          {item.title}
                        </span>
                        <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-secondary text-muted-foreground border border-border/60 shrink-0">
                          {item.category}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground truncate max-w-md">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0 pl-2">
                    <ArrowRight
                      className={`w-4 h-4 transition-transform ${
                        isSelected ? "text-amber-600 translate-x-1" : "text-muted-foreground opacity-40"
                      }`}
                    />
                  </div>
                </Link>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2.5 bg-secondary/30 border-t border-border/70 flex items-center justify-between text-[11px] text-muted-foreground">
          <div className="flex items-center gap-3">
            <span>
              <kbd className="px-1.5 py-0.5 rounded bg-card border border-border font-mono text-[10px]">↑</kbd>{" "}
              <kbd className="px-1.5 py-0.5 rounded bg-card border border-border font-mono text-[10px]">↓</kbd> Navigieren
            </span>
            <span>
              <kbd className="px-1.5 py-0.5 rounded bg-card border border-border font-mono text-[10px]">↵</kbd> Auswählen
            </span>
          </div>
          <Link
            to="/sitemap"
            onClick={onClose}
            className="font-semibold text-amber-600 hover:underline flex items-center gap-1"
          >
            Alle 14 Seiten im Verzeichnis →
          </Link>
        </div>
      </div>
    </div>
  );
}
