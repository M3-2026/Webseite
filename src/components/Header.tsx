import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import {
  Menu,
  X,
  ArrowRight,
  MessageCircle,
  Search,
  ChevronDown,
  Flame,
  Dumbbell,
  Brain,
  Sparkles,
  User,
  Compass,
  Activity,
  HeartHandshake,
  Layers,
} from "lucide-react";
import logo from "@/assets/logo.png";
import { SpotlightSearch } from "@/components/SpotlightSearch";

const WHATSAPP_URL =
  "https://wa.me/4917699016640?text=Hallo%20Mich%C3%A9l,%20ich%20interessiere%20mich%20f%C3%BCr%20ein%20kostenloses%20Erstgespr%C3%A4ch.";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>("system");
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Detect scroll for dynamic sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Global keyboard shortcut for Spotlight Search (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        setActiveDropdown(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleMouseEnter = (menuKey: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(menuKey);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "backdrop-blur-2xl bg-background/90 border-b border-border shadow-sm py-0"
            : "backdrop-blur-xl bg-background/80 border-b border-border/70 py-0.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-6 h-18 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <Link
            to="/"
            onClick={() => {
              setActiveDropdown(null);
              setMobileMenuOpen(false);
            }}
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-xl p-1 shrink-0"
          >
            <img
              src={logo}
              alt="M³ Performance Logo"
              className="h-9 w-9 object-contain transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col text-left">
              <span className="font-display font-extrabold text-lg md:text-xl tracking-tight leading-tight">
                M³ <span className="text-amber-600">Performance</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground font-semibold">
                Gesundheit mit System
              </span>
            </div>
          </Link>

          {/* Desktop Mega-Menu Navigation */}
          <nav
            className="hidden lg:flex items-center gap-2 xl:gap-3 text-sm font-semibold text-foreground/90"
            aria-label="Hauptnavigation"
          >
            {/* 1. Das M³ System Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("system")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                className={`flex items-center gap-1.5 px-3 py-2 rounded-xl transition-all ${
                  activeDropdown === "system"
                    ? "bg-secondary text-amber-700 font-bold"
                    : "hover:bg-secondary/60 text-foreground/80 hover:text-foreground"
                }`}
                aria-expanded={activeDropdown === "system"}
              >
                <span>Das M³-System</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === "system" ? "rotate-180 text-amber-600" : "text-muted-foreground"
                  }`}
                />
              </button>

              {activeDropdown === "system" && (
                <div className="absolute top-full left-0 w-[540px] mt-1 p-4 bg-card/95 backdrop-blur-2xl border border-border/90 rounded-3xl shadow-2xl animate-scale-up grid grid-cols-12 gap-3 text-left z-50">
                  {/* Left: 3 Pillars */}
                  <div className="col-span-7 space-y-1.5 border-r border-border/70 pr-3">
                    <div className="text-[10px] font-mono uppercase tracking-wider font-bold text-muted-foreground px-2 pb-1">
                      Die Drei Säulen
                    </div>

                    <Link
                      to="/metabolism"
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-start gap-3 p-2.5 rounded-2xl hover:bg-orange-500/10 transition group border border-transparent hover:border-orange-500/30"
                    >
                      <div className="w-8 h-8 rounded-xl bg-orange-500/15 text-orange-600 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                        M¹
                      </div>
                      <div>
                        <div className="text-xs font-bold text-foreground group-hover:text-orange-600 transition-colors">
                          Metabolism
                        </div>
                        <div className="text-[11px] text-muted-foreground leading-tight">
                          Darm, Mikrobiom & Zellenergie
                        </div>
                      </div>
                    </Link>

                    <Link
                      to="/movement"
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-start gap-3 p-2.5 rounded-2xl hover:bg-emerald-500/10 transition group border border-transparent hover:border-emerald-500/30"
                    >
                      <div className="w-8 h-8 rounded-xl bg-emerald-500/15 text-emerald-700 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                        M²
                      </div>
                      <div>
                        <div className="text-xs font-bold text-foreground group-hover:text-emerald-700 transition-colors">
                          Movement
                        </div>
                        <div className="text-[11px] text-muted-foreground leading-tight">
                          Biomechanik: Technik vor Gewicht
                        </div>
                      </div>
                    </Link>

                    <Link
                      to="/mental-performance"
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-start gap-3 p-2.5 rounded-2xl hover:bg-blue-500/10 transition group border border-transparent hover:border-blue-500/30"
                    >
                      <div className="w-8 h-8 rounded-xl bg-blue-500/15 text-blue-700 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                        M³
                      </div>
                      <div>
                        <div className="text-xs font-bold text-foreground group-hover:text-blue-700 transition-colors">
                          Mental Performance
                        </div>
                        <div className="text-[11px] text-muted-foreground leading-tight">
                          Routinen, Resilienz & Schlaf
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* Right: Featured Flagship Box */}
                  <div className="col-span-5 flex flex-col justify-between p-3 rounded-2xl bg-[#090d16] text-white border border-amber-500/40">
                    <div className="space-y-1.5">
                      <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-amber-400 bg-amber-500/15 px-2 py-0.5 rounded-full inline-block">
                        Flaggschiff
                      </span>
                      <div className="font-display font-bold text-sm text-white">M³ Body Reset</div>
                      <p className="text-[10px] text-slate-300 leading-tight">
                        Darmkur, Stoffwechsel & Grundversorgung in einem System.
                      </p>
                    </div>
                    <Link
                      to="/body-reset"
                      onClick={() => setActiveDropdown(null)}
                      className="mt-3 inline-flex items-center justify-between text-[11px] font-bold text-amber-400 hover:underline pt-2 border-t border-slate-800"
                    >
                      <span>Reset ansehen</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* 2. Leistungen & Module Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("offers")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                className={`flex items-center gap-1.5 px-3 py-2 rounded-xl transition-all ${
                  activeDropdown === "offers"
                    ? "bg-secondary text-amber-700 font-bold"
                    : "hover:bg-secondary/60 text-foreground/80 hover:text-foreground"
                }`}
                aria-expanded={activeDropdown === "offers"}
              >
                <span>Leistungen & Module</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === "offers" ? "rotate-180 text-amber-600" : "text-muted-foreground"
                  }`}
                />
              </button>

              {activeDropdown === "offers" && (
                <div className="absolute top-full left-0 w-[620px] mt-1 p-4 bg-card/95 backdrop-blur-2xl border border-border/90 rounded-3xl shadow-2xl animate-scale-up grid grid-cols-2 gap-4 text-left z-50">
                    {/* Column 1: M1 Stoffwechsel & Ernährung */}
                  <div className="space-y-1.5">
                    <div className="text-[10px] font-mono uppercase tracking-wider font-bold text-orange-600 px-2 pb-1 flex items-center gap-1.5">
                      <Flame className="w-3 h-3" />
                      <span>M¹ · Stoffwechsel & Ernährung</span>
                    </div>

                    <Link
                      to="/body-reset"
                      onClick={() => setActiveDropdown(null)}
                      className="block p-2.5 rounded-2xl hover:bg-orange-500/10 transition group border border-transparent hover:border-orange-500/30"
                    >
                      <div className="text-xs font-bold text-foreground group-hover:text-orange-600 flex items-center justify-between">
                        <span>M³ Body Reset</span>
                        <span className="text-[9px] font-mono font-bold bg-amber-500/15 text-amber-700 px-1.5 py-0.5 rounded">Flaggschiff</span>
                      </div>
                      <div className="text-[11px] text-muted-foreground mt-0.5">3-Phasen-Reset für Darm & Stoffwechsel</div>
                    </Link>

                    <Link
                      to="/ernaehrungscoaching"
                      onClick={() => setActiveDropdown(null)}
                      className="block p-2.5 rounded-2xl hover:bg-orange-500/10 transition group border border-transparent hover:border-orange-500/30"
                    >
                      <div className="text-xs font-bold text-foreground group-hover:text-orange-600">
                        1:1 Ernährungscoaching
                      </div>
                      <div className="text-[11px] text-muted-foreground mt-0.5">Alltagstaugliche Makro-Struktur ohne Diät-Korsett</div>
                    </Link>

                    <Link
                      to="/darm-stoffwechselbegleitung"
                      onClick={() => setActiveDropdown(null)}
                      className="block p-2.5 rounded-2xl hover:bg-orange-500/10 transition group border border-transparent hover:border-orange-500/30"
                    >
                      <div className="text-xs font-bold text-foreground group-hover:text-orange-600">
                        Darmbegleitung
                      </div>
                      <div className="text-[11px] text-muted-foreground mt-0.5">Mikrobiom- & gezielte Darmregulation</div>
                    </Link>

                    <Link
                      to="/goldene-grundversorgung"
                      onClick={() => setActiveDropdown(null)}
                      className="block p-2.5 rounded-2xl hover:bg-orange-500/10 transition group border border-transparent hover:border-orange-500/30"
                    >
                      <div className="text-xs font-bold text-foreground group-hover:text-amber-600">
                        Goldene Grundversorgung
                      </div>
                      <div className="text-[11px] text-muted-foreground mt-0.5">Tägliche Mikronährstoff- & Zellbasis</div>
                    </Link>
                  </div>

                  {/* Column 2: M2 Bewegung & Training */}
                  <div className="space-y-1.5 border-l border-border/70 pl-4">
                    <div className="text-[10px] font-mono uppercase tracking-wider font-bold text-emerald-700 px-2 pb-1 flex items-center gap-1.5">
                      <Dumbbell className="w-3 h-3" />
                      <span>M² · Bewegung & Reha</span>
                    </div>

                    <Link
                      to="/performance-training"
                      onClick={() => setActiveDropdown(null)}
                      className="block p-2.5 rounded-2xl hover:bg-emerald-500/10 transition group border border-transparent hover:border-emerald-500/30"
                    >
                      <div className="text-xs font-bold text-foreground group-hover:text-emerald-700">
                        M³ Performance Training
                      </div>
                      <div className="text-[11px] text-muted-foreground mt-0.5">Intelligenter Kraftaufbau ohne Verschleiß (1:1)</div>
                    </Link>

                    <Link
                      to="/schmerzfrei"
                      onClick={() => setActiveDropdown(null)}
                      className="block p-2.5 rounded-2xl hover:bg-emerald-500/10 transition group border border-transparent hover:border-emerald-500/30"
                    >
                      <div className="text-xs font-bold text-foreground group-hover:text-emerald-700">
                        M³ Schmerzfrei
                      </div>
                      <div className="text-[11px] text-muted-foreground mt-0.5">Gezielte Schmerzbefreiung für Rücken & Nacken</div>
                    </Link>

                    <Link
                      to="/coaching-fuer-zwei"
                      onClick={() => setActiveDropdown(null)}
                      className="block p-2.5 rounded-2xl hover:bg-emerald-500/10 transition group border border-transparent hover:border-emerald-500/30"
                    >
                      <div className="text-xs font-bold text-foreground group-hover:text-emerald-700">
                        Coaching für Zwei
                      </div>
                      <div className="text-[11px] text-muted-foreground mt-0.5">Gemeinsam trainieren mit doppelter Verbindlichkeit</div>
                    </Link>

                    <div className="pt-2 border-t border-border/60">
                      <Link
                        to="/sitemap"
                        onClick={() => setActiveDropdown(null)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-600"
                      >
                        <Layers className="w-3.5 h-3.5" />
                        <span>Alle Module in der Übersicht</span>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 3. Über Michél Link */}
            <Link
              to="/ueber-mich"
              onClick={() => setActiveDropdown(null)}
              className="px-3 py-2 rounded-xl hover:bg-secondary/60 transition text-foreground/80 hover:text-foreground"
            >
              Über Michél
            </Link>

            {/* 4. Sitemap Verzeichnis Link */}
            <Link
              to="/sitemap"
              onClick={() => setActiveDropdown(null)}
              className="px-3 py-2 rounded-xl hover:bg-secondary/60 transition text-foreground/80 hover:text-foreground"
            >
              Sitemap
            </Link>

            {/* 5. System Start Pill */}
            <Link
              to="/system-start"
              onClick={() => setActiveDropdown(null)}
              className="ml-2 inline-flex items-center gap-1.5 text-amber-700 font-bold bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/30 hover:bg-amber-500/20 transition shadow-sm"
            >
              <Compass className="w-3.5 h-3.5 text-amber-600" />
              <span>System Start</span>
            </Link>
          </nav>

          {/* Desktop Right Action Bar: Search Trigger & WhatsApp CTA */}
          <div className="hidden lg:flex items-center gap-2.5">
            {/* Quick-Finder Command-K Trigger */}
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-border bg-card hover:bg-secondary text-xs text-muted-foreground hover:text-foreground transition shadow-sm"
              title="Spotlight Suche öffnen (Cmd + K)"
              aria-label="Schnellsuche öffnen"
            >
              <Search className="w-3.5 h-3.5 text-amber-600" />
              <span>Suchen...</span>
              <kbd className="text-[10px] font-mono bg-secondary px-1.5 py-0.5 rounded border border-border">
                ⌘K
              </kbd>
            </button>

            {/* WhatsApp Primary CTA */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-gold-gradient px-5 py-2 text-xs xl:text-sm font-bold text-primary-foreground shadow-[var(--shadow-gold)] hover:shadow-[var(--shadow-gold-hover)] hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Erstgespräch</span>
            </a>
          </div>

          {/* Mobile Actions: Search, WhatsApp & Hamburger */}
          <div className="flex items-center gap-1.5 lg:hidden">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="p-2.5 rounded-full border border-border bg-card text-foreground hover:bg-secondary transition"
              aria-label="Schnellsuche öffnen"
            >
              <Search className="w-4 h-4 text-amber-600" />
            </button>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-gold-gradient text-primary-foreground shadow-sm"
              aria-label="WhatsApp Direktkontakt"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl border border-border text-foreground hover:bg-secondary transition focus:outline-none focus:ring-2 focus:ring-amber-500"
              aria-label={mobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Full-Screen Drawer / Slide-Out */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 top-18 z-50 bg-background/98 backdrop-blur-3xl lg:hidden flex flex-col justify-between p-5 overflow-y-auto animate-float-up">
            <div className="space-y-4">
              {/* Quick Search Bar inside Mobile Drawer */}
              <div
                onClick={() => {
                  setMobileMenuOpen(false);
                  setSearchOpen(true);
                }}
                className="flex items-center justify-between p-3.5 rounded-2xl border border-border bg-card text-xs text-muted-foreground cursor-pointer shadow-sm"
              >
                <div className="flex items-center gap-2.5">
                  <Search className="w-4 h-4 text-amber-600" />
                  <span>Thema, Säule oder Modul suchen...</span>
                </div>
                <kbd className="px-1.5 py-0.5 rounded bg-secondary font-mono text-[10px]">Suchen</kbd>
              </div>

              {/* Accordion Group 1: Das M³ System */}
              <div className="rounded-2xl border border-border/80 bg-card overflow-hidden">
                <button
                  type="button"
                  onClick={() => setMobileAccordion(mobileAccordion === "system" ? null : "system")}
                  className="w-full p-4 flex items-center justify-between font-display font-bold text-sm text-foreground hover:bg-secondary/40 transition"
                >
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-600" />
                    <span>Das M³-System (3 Säulen)</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      mobileAccordion === "system" ? "rotate-180 text-amber-600" : "text-muted-foreground"
                    }`}
                  />
                </button>

                {mobileAccordion === "system" && (
                  <div className="p-3 pt-0 space-y-1.5 border-t border-border/60">
                    <Link
                      to="/metabolism"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between p-2.5 rounded-xl hover:bg-orange-500/10 text-xs font-bold text-foreground"
                    >
                      <span className="flex items-center gap-2">
                        <Flame className="w-3.5 h-3.5 text-orange-600" />
                        <span>M¹ Metabolism</span>
                      </span>
                      <span className="text-[10px] text-orange-600">Darm & Energie</span>
                    </Link>

                    <Link
                      to="/movement"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between p-2.5 rounded-xl hover:bg-emerald-500/10 text-xs font-bold text-foreground"
                    >
                      <span className="flex items-center gap-2">
                        <Dumbbell className="w-3.5 h-3.5 text-emerald-700" />
                        <span>M² Movement</span>
                      </span>
                      <span className="text-[10px] text-emerald-700">Biomechanik</span>
                    </Link>

                    <Link
                      to="/mental-performance"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between p-2.5 rounded-xl hover:bg-blue-500/10 text-xs font-bold text-foreground"
                    >
                      <span className="flex items-center gap-2">
                        <Brain className="w-3.5 h-3.5 text-blue-700" />
                        <span>M³ Mental Performance</span>
                      </span>
                      <span className="text-[10px] text-blue-700">Mindset & Schlaf</span>
                    </Link>
                  </div>
                )}
              </div>

              {/* Accordion Group 2: Modulare Angebote */}
              <div className="rounded-2xl border border-border/80 bg-card overflow-hidden">
                <button
                  type="button"
                  onClick={() => setMobileAccordion(mobileAccordion === "offers" ? null : "offers")}
                  className="w-full p-4 flex items-center justify-between font-display font-bold text-sm text-foreground hover:bg-secondary/40 transition"
                >
                  <span className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-amber-600" />
                    <span>Alle Leistungen & Programme</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      mobileAccordion === "offers" ? "rotate-180 text-amber-600" : "text-muted-foreground"
                    }`}
                  />
                </button>

                {mobileAccordion === "offers" && (
                  <div className="p-3 pt-0 space-y-1 border-t border-border/60 text-xs font-medium">
                    <Link
                      to="/body-reset"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between p-2.5 rounded-xl bg-amber-500/10 text-amber-800 font-bold"
                    >
                      <span>M³ Body Reset (Flaggschiff)</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <Link
                      to="/ernaehrungscoaching"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block p-2 rounded-xl text-foreground hover:bg-secondary"
                    >
                      1:1 Ernährungscoaching
                    </Link>
                    <Link
                      to="/schmerzfrei"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block p-2 rounded-xl text-foreground hover:bg-secondary"
                    >
                      M³ Schmerzfrei-Begleitung
                    </Link>
                    <Link
                      to="/performance-training"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block p-2 rounded-xl text-foreground hover:bg-secondary"
                    >
                      1:1 Performance Training
                    </Link>
                    <Link
                      to="/coaching-fuer-zwei"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block p-2 rounded-xl text-foreground hover:bg-secondary"
                    >
                      Coaching für Zwei
                    </Link>
                    <Link
                      to="/darm-stoffwechselbegleitung"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block p-2 rounded-xl text-foreground hover:bg-secondary"
                    >
                      Darm- & Stoffwechselbegleitung
                    </Link>
                    <Link
                      to="/goldene-grundversorgung"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block p-2 rounded-xl text-foreground hover:bg-secondary"
                    >
                      Goldene Grundversorgung
                    </Link>
                  </div>
                )}
              </div>

              {/* Direct Links */}
              <div className="grid grid-cols-2 gap-2.5 pt-1">
                <Link
                  to="/system-start"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-800 font-bold text-xs flex items-center justify-between"
                >
                  <span>M³ System Start</span>
                  <Compass className="w-3.5 h-3.5 text-amber-600" />
                </Link>

                <Link
                  to="/ueber-mich"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-3 rounded-2xl bg-card border border-border text-foreground font-bold text-xs flex items-center justify-between"
                >
                  <span>Über Michél</span>
                  <User className="w-3.5 h-3.5 text-muted-foreground" />
                </Link>
              </div>

              <Link
                to="/sitemap"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full p-3 rounded-2xl bg-secondary/60 border border-border text-center font-bold text-xs text-foreground flex items-center justify-center gap-1.5"
              >
                <Layers className="w-3.5 h-3.5 text-amber-600" />
                <span>Gesamtes System-Verzeichnis (Sitemap)</span>
              </Link>
            </div>

            {/* Mobile Footer CTAs */}
            <div className="space-y-3 pt-6 border-t border-border mt-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gold-gradient py-3.5 text-sm font-bold text-primary-foreground shadow-[var(--shadow-gold)]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Kostenloses Erstgespräch anfragen</span>
              </a>
              <p className="text-center text-[11px] text-muted-foreground">
                20 Minuten Orientierung & persönliche Analyse mit Michél
              </p>
            </div>
          </div>
        )}
      </header>

      {/* Spotlight Search Modal */}
      <SpotlightSearch isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
