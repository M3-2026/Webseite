import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ArrowRight, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";

const WHATSAPP_URL = "https://wa.me/4917699016640?text=Hallo%20Mich%C3%A9l,%20ich%20interessiere%20mich%20f%C3%BCr%20ein%20kostenloses%20Erstgespr%C3%A4ch.";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on escape key or resize
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
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

  const navLinks = [
    { label: "Start", hash: "top" },
    { label: "Philosophie", hash: "philosophie" },
    { label: "Das M³-System", hash: "system" },
    { label: "Ablauf", hash: "so-arbeiten-wir" },
    { label: "Leistungen", hash: "leistungen" },
    { label: "Über Michél", hash: "ueber" },
    { label: "FAQ", hash: "faq" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/85 border-b border-border transition-colors">
      <div className="max-w-7xl mx-auto px-5 md:px-6 h-18 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-lg p-1">
          <img src={logo} alt="M³ Performance Logo" className="h-9 w-9 object-contain transition-transform group-hover:scale-105" />
          <div className="flex flex-col">
            <span className="font-display font-extrabold text-lg md:text-xl tracking-tight leading-tight">
              M³ <span className="text-gold">Performance</span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground font-semibold">
              Gesundheit mit System
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-muted-foreground" aria-label="Hauptnavigation">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              to="/"
              hash={item.hash}
              className="hover:text-foreground transition-colors py-1 relative hover:after:w-full after:w-0 after:h-0.5 after:bg-gold after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/system-start"
            className="text-gold font-semibold hover:opacity-80 transition flex items-center gap-1 bg-gold/10 px-3 py-1.5 rounded-full border border-gold/30"
          >
            System Start
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </nav>

        {/* Desktop Action Button */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-gold)] hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            Erstgespräch
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center p-2.5 rounded-full bg-gold-gradient text-primary-foreground shadow-[var(--shadow-gold)]"
            aria-label="WhatsApp Direktkontakt"
          >
            <MessageCircle className="w-4 h-4" />
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl border border-border text-foreground hover:bg-secondary transition focus:outline-none focus:ring-2 focus:ring-gold"
            aria-label={mobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer / Overlay Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-18 z-40 bg-background/95 backdrop-blur-2xl lg:hidden flex flex-col justify-between p-6 animate-float-up">
          <nav className="flex flex-col space-y-4 pt-4" aria-label="Mobile Navigation">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                to="/"
                hash={item.hash}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl font-display font-bold py-2 border-b border-border/50 text-foreground hover:text-gold transition-colors flex items-center justify-between"
              >
                <span>{item.label}</span>
                <ArrowRight className="w-4 h-4 text-muted-foreground" />
              </Link>
            ))}
            <Link
              to="/system-start"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xl font-display font-bold py-3 text-gold flex items-center justify-between"
            >
              <span>M³ System Start</span>
              <span className="text-xs uppercase bg-gold-gradient text-primary-foreground px-2.5 py-1 rounded-full font-sans font-semibold">
                Eingangstür
              </span>
            </Link>
          </nav>

          <div className="space-y-3 pt-6 border-t border-border pb-8">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gold-gradient py-3.5 text-base font-semibold text-primary-foreground shadow-[var(--shadow-gold)]"
            >
              <MessageCircle className="w-5 h-5" />
              Kostenloses Erstgespräch anfragen
            </a>
            <p className="text-center text-xs text-muted-foreground">
              Unverbindlich · 20 Minuten Orientierung mit Michél
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
