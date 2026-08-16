import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

const WHATSAPP_URL = "https://wa.me/4917699016640";

export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="M³ Performance Logo" className="h-9 w-9 object-contain" />
          <span className="font-display text-xl tracking-wider">
            M³ <span className="text-gold">Performance</span>
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-8 text-sm text-muted-foreground">
          <Link to="/" hash="top" className="hover:text-foreground transition">Start</Link>
          <Link to="/" hash="philosophie" className="hover:text-foreground transition">Philosophie</Link>
          <Link to="/" hash="system" className="hover:text-foreground transition">Das M³-System</Link>
          <Link to="/" hash="leistungen" className="hover:text-foreground transition">Leistungen</Link>
          <Link to="/" hash="ueber" className="hover:text-foreground transition">Über Mich</Link>
          <Link to="/" hash="faq" className="hover:text-foreground transition">FAQ</Link>
          <Link to="/" hash="kontakt" className="hover:text-foreground transition">Kontakt</Link>
        </nav>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-full bg-gold-gradient px-5 py-2 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-gold)] hover:opacity-90 transition"
        >
          WhatsApp Kontakt
        </a>
      </div>
    </header>
  );
}
