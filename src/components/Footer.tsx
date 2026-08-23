import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";
import { ArrowUpRight } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/4917699016640?text=Hallo%20Mich%C3%A9l,%20ich%20m%C3%B6chte%20Kontakt%20aufnehmen.";

export function Footer() {
  return (
    <footer className="border-t border-border/80 bg-card/60 pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-border/60">
          {/* Brand & Claim */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="M³ Performance Logo" className="h-9 w-9 object-contain" />
              <span className="font-display font-extrabold text-xl tracking-tight">
                M³ <span className="text-gold">Performance</span>
              </span>
            </div>
            <p className="text-sm font-semibold text-foreground tracking-tight">
              Leistung beginnt mit Gesundheit.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              M³ begleitet Menschen dabei, ihre Gesundheit, Bewegung und Gewohnheiten neu zu strukturieren und einen Weg zu entwickeln, der wirklich zu ihrem Leben passt.
            </p>
            <p className="text-xs uppercase tracking-[0.2em] text-gold font-semibold pt-1">
              Dein Ziel. Dein Weg. Dein System.
            </p>
          </div>

          {/* Säulen */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-foreground mb-4">
              Das System
            </h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>
                <Link to="/system-start" className="hover:text-gold transition-colors flex items-center gap-1 font-semibold text-foreground">
                  M³ System Start
                  <span className="text-[10px] bg-gold/15 text-gold px-1.5 py-0.5 rounded font-mono">Start</span>
                </Link>
              </li>
              <li>
                <Link to="/metabolism" className="hover:text-gold transition-colors">
                  M¹ Metabolism
                </Link>
              </li>
              <li>
                <Link to="/movement" className="hover:text-gold transition-colors">
                  M² Movement
                </Link>
              </li>
              <li>
                <Link to="/mental-performance" className="hover:text-gold transition-colors">
                  M³ Mental Performance
                </Link>
              </li>
            </ul>
          </div>

          {/* Angebote */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-foreground mb-4">
              Angebote
            </h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>
                <Link to="/body-reset" className="hover:text-gold transition-colors">
                  M³ Body Reset
                </Link>
              </li>
              <li>
                <Link to="/ernaehrungscoaching" className="hover:text-gold transition-colors">
                  Ernährungscoaching
                </Link>
              </li>
              <li>
                <Link to="/performance-training" className="hover:text-gold transition-colors">
                  Performance Training
                </Link>
              </li>
              <li>
                <Link to="/schmerzfrei" className="hover:text-gold transition-colors">
                  Schmerzfrei-Begleitung
                </Link>
              </li>
              <li>
                <Link to="/coaching-fuer-zwei" className="hover:text-gold transition-colors">
                  Coaching für Zwei
                </Link>
              </li>
            </ul>
          </div>

          {/* Direktkontakt */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-foreground mb-4">
              Kontakt & Dialog
            </h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors inline-flex items-center gap-1 text-foreground font-medium"
                >
                  WhatsApp Erstgespräch
                  <ArrowUpRight className="w-3.5 h-3.5 text-gold" />
                </a>
              </li>
              <li>
                <Link to="/ueber-mich" className="hover:text-gold transition-colors">
                  Über Michél Meier
                </Link>
              </li>
              <li>
                <Link to="/" hash="faq" className="hover:text-gold transition-colors">
                  Häufige Fragen (FAQ)
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>
            © {new Date().getFullYear()} Michél Meier · M³ Performance & Gesundheit. Alle Rechte vorbehalten.
          </div>
          <div className="flex items-center gap-6">
            <span>Struktur statt Chaos. Technik vor Gewicht. Ergebnis statt Zufall.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
