import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";
import { ArrowUpRight, Layers, Compass, MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/4917699016640?text=Hallo%20Mich%C3%A9l,%20ich%20m%C3%B6chte%20Kontakt%20aufnehmen.";

export function Footer() {
  return (
    <footer className="border-t border-border/80 bg-white pt-16 pb-12 transition-colors text-left">
      <div className="max-w-7xl mx-auto px-5 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-border/60">
          {/* Brand & Claim */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-flex items-center gap-3">
              <img src={logo} alt="M³ Performance Logo" className="h-9 w-9 object-contain" />
              <span className="font-display font-extrabold text-xl tracking-tight text-foreground">
                M³ <span className="text-amber-600">Performance</span>
              </span>
            </Link>
            <p className="text-sm font-semibold text-foreground tracking-tight">
              Leistung beginnt mit Gesundheit.
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-sm">
              M³ vereint Stoffwechsel (<strong className="text-orange-600">M¹</strong>), Biomechanik (<strong className="text-emerald-700">M²</strong>) und Mindset (<strong className="text-blue-700">M³</strong>) zu einem alltagstauglichen System für schmerzfreie Belastbarkeit und dauerhafte Zellenergie.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <Link
                to="/sitemap"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-600 transition bg-secondary/80 px-3 py-1.5 rounded-full border border-border"
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Interaktive Sitemap</span>
              </Link>
              <Link
                to="/system-start"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-foreground hover:text-amber-600 transition bg-secondary/80 px-3 py-1.5 rounded-full border border-border"
              >
                <Compass className="w-3.5 h-3.5 text-amber-600" />
                <span>System Start</span>
              </Link>
            </div>
          </div>

          {/* 3 Säulen */}
          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-foreground mb-4">
              Das M³-System
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-muted-foreground">
              <li>
                <Link to="/system-start" className="hover:text-amber-600 transition-colors flex items-center gap-1 font-bold text-foreground">
                  M³ System Start
                  <span className="text-[9px] bg-amber-500/15 text-amber-700 px-1.5 py-0.5 rounded font-mono">Eingang</span>
                </Link>
              </li>
              <li>
                <Link to="/metabolism" className="hover:text-orange-600 transition-colors">
                  M¹ Metabolism (Stoffwechsel)
                </Link>
              </li>
              <li>
                <Link to="/movement" className="hover:text-emerald-700 transition-colors">
                  M² Movement (Biomechanik)
                </Link>
              </li>
              <li>
                <Link to="/mental-performance" className="hover:text-blue-700 transition-colors">
                  M³ Mental Performance
                </Link>
              </li>
              <li className="pt-1">
                <Link to="/ueber-mich" className="hover:text-amber-600 transition-colors font-medium text-foreground">
                  Über Michél Meier
                </Link>
              </li>
            </ul>
          </div>

          {/* Modulare Angebote */}
          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-foreground mb-4">
              Programme & Module
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-muted-foreground">
              <li>
                <Link to="/body-reset" className="hover:text-amber-600 transition-colors font-semibold text-foreground">
                  M¹ Body Reset (Flaggschiff)
                </Link>
              </li>
              <li>
                <Link to="/ernaehrungscoaching" className="hover:text-amber-600 transition-colors">
                  M¹ Ernährungscoaching
                </Link>
              </li>
              <li>
                <Link to="/schmerzfrei" className="hover:text-amber-600 transition-colors">
                  M² Schmerzfrei
                </Link>
              </li>
              <li>
                <Link to="/performance-training" className="hover:text-amber-600 transition-colors">
                  M² Performance Training
                </Link>
              </li>
              <li>
                <Link to="/coaching-fuer-zwei" className="hover:text-amber-600 transition-colors">
                  M² Coaching für Zwei
                </Link>
              </li>
              <li>
                <Link to="/darm-stoffwechselbegleitung" className="hover:text-amber-600 transition-colors">
                  M¹ Darmbegleitung
                </Link>
              </li>
              <li>
                <Link to="/goldene-grundversorgung" className="hover:text-amber-600 transition-colors">
                  M¹ Goldene Grundversorgung
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontakt & Dialog */}
          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-foreground mb-4">
              Kontakt & Journal
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-muted-foreground">
              <li>
                <Link to="/blog" className="hover:text-amber-600 transition-colors flex items-center gap-1 font-bold text-foreground">
                  <span>M³ Journal & Wissenschaft</span>
                  <span className="text-[9px] bg-amber-500/15 text-amber-700 px-1.5 py-0.5 rounded font-mono">10 Texte</span>
                </Link>
              </li>
              <li>
                <Link to="/katalog" className="hover:text-amber-600 transition-colors font-medium text-foreground">
                  <span>Modul-Katalog</span>
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="hover:text-amber-600 transition-colors font-medium text-foreground">
                  <span>Kontakt & Anfahrt</span>
                </Link>
              </li>
              <li>
                <a
                  href="https://cal.com/michelmeier/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-600 transition-colors inline-flex items-center gap-1 text-amber-700 font-bold"
                >
                  <span>30 Min. Slot buchen (Cal.com)</span>
                  <ArrowUpRight className="w-3 h-3 text-amber-600" />
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-600 transition-colors inline-flex items-center gap-1 text-foreground font-semibold"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp Erstgespräch</span>
                  <ArrowUpRight className="w-3 h-3 text-amber-600" />
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/c/4917699016640"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-600 transition-colors inline-flex items-center gap-1 text-muted-foreground hover:text-foreground"
                >
                  <span>WhatsApp Katalog</span>
                  <ArrowUpRight className="w-3 h-3 text-amber-600" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>
            © {new Date().getFullYear()} Michél Meier · M³ Performance & Gesundheit. Alle Rechte vorbehalten.
          </div>
          <div className="flex flex-wrap items-center gap-4 text-[11px]">
            <Link to="/impressum" className="hover:underline text-foreground font-semibold">
              Impressum
            </Link>
            <span>·</span>
            <Link to="/datenschutz" className="hover:underline text-foreground font-semibold">
              Datenschutz
            </Link>
            <span>·</span>
            <Link to="/sitemap" className="hover:underline text-foreground font-semibold">
              Sitemap
            </Link>
            <span>·</span>
            <span>Struktur statt Chaos. Technik vor Gewicht. Ergebnis statt Zufall.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
