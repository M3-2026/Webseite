import { createFileRoute, Link } from "@tanstack/react-router";
import {
  MessageCircle,
  Calendar,
  Phone,
  Instagram,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Compass,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { contact, wa } from "@/data/content";

export const Route = createFileRoute("/kontakt")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Kontakt & Erstgespräch – Michél Meier | M³ Performance" },
      {
        name: "description",
        content:
          "20–30 Minuten Orientierungsgespräch mit Michél Meier: Unverbindlich per WhatsApp, Telefon oder Video via Cal.com buchen.",
      },
    ],
  }),
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between overflow-x-hidden selection:bg-gold/20 selection:text-foreground">
      <Header />
      <Breadcrumbs items={[{ label: "Kontakt & Erstgespräch", pillar: "gold" }]} />

      <main className="flex-grow py-10 md:py-16 relative hero-bg text-left">
        <div className="relative max-w-5xl mx-auto px-5 md:px-6 space-y-12 md:space-y-16">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gold font-bold shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direkter Kontakt & Dialog</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight leading-[1.05] text-foreground">
              Erstgespräch mit <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500">Michél.</span>
            </h1>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              20–30 Minuten Orientierung. Einordnung, Priorität, nächster Schritt. Unverbindlich — per WhatsApp, Telefon oder direkt im Online-Kalender gebucht.
            </p>
          </div>

          {/* Primary Action Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {/* Card 1: Cal.com 30-Min Booking */}
            <div className="rounded-3xl border-2 border-amber-500/40 bg-gradient-to-br from-amber-500/10 via-card to-card p-6 md:p-8 flex flex-col justify-between shadow-xl space-y-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-700 bg-amber-500/15 px-3 py-1 rounded-full border border-amber-500/30">
                    Online-Kalender
                  </span>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground font-mono">
                    <Clock className="w-3.5 h-3.5 text-gold" />
                    <span>30 Min. Slot</span>
                  </div>
                </div>

                <h2 className="font-display font-bold text-2xl text-foreground">
                  30 Min. Kennenlern-Termin buchen
                </h2>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Wähle direkt einen freien Termin in Michéls Kalender für ein Video- oder Telefongespräch via Cal.com aus.
                </p>

                <ul className="space-y-2 pt-2 text-xs text-foreground/90">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                    <span>Fester Termin ohne Hin-und-Her-Schreiben</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                    <span>Google Meet oder Telefongespräch</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                    <span>Kostenlos & 100% unverbindlich</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-border/70">
                <a
                  href={contact.cal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gold-gradient py-3.5 px-6 font-bold text-xs sm:text-sm text-primary-foreground shadow-[var(--shadow-gold)] hover:opacity-95 hover:scale-[1.02] transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  <span>30 Min. Termin via Cal.com buchen</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Card 2: WhatsApp Direkt-Chat */}
            <div className="rounded-3xl border border-border bg-card p-6 md:p-8 flex flex-col justify-between shadow-sm space-y-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-700 bg-emerald-500/15 px-3 py-1 rounded-full border border-emerald-500/30">
                    Direkt & Unkompliziert
                  </span>
                  <span className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Online
                  </span>
                </div>

                <h2 className="font-display font-bold text-2xl text-foreground">
                  Schreib Michél auf WhatsApp
                </h2>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Kein Formular, kein Fragebogen vorab. Schreib kurz, wo es aktuell hakt — Michél meldet sich persönlich bei dir zurück.
                </p>

                <ul className="space-y-2 pt-2 text-xs text-foreground/90">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Direkter Draht zu Michél</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Sprachnachricht oder Text möglich</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Schnelle persönliche Rückmeldung</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-border/70">
                <a
                  href={wa.talk}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-700 py-3.5 px-6 font-bold text-xs sm:text-sm text-white shadow-md hover:scale-[1.02] transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Chat starten</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* 3-Step Process Explanation */}
          <section className="rounded-3xl border border-border bg-card p-8 md:p-10 space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-gold">
                Transparenz
              </span>
              <h3 className="font-display font-extrabold text-2xl text-foreground">
                So läuft das Erstgespräch ab
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="rounded-2xl border border-border bg-secondary/30 p-5 space-y-2">
                <div className="w-8 h-8 rounded-xl bg-gold-gradient text-primary-foreground flex items-center justify-center font-display font-bold text-xs">
                  01
                </div>
                <h4 className="font-display font-bold text-base text-foreground">1. Nachricht</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Du schreibst kurz, wo es gerade hakt. Kein Formular. Kein starrer Fragebogen vorab.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-secondary/30 p-5 space-y-2">
                <div className="w-8 h-8 rounded-xl bg-gold-gradient text-primary-foreground flex items-center justify-center font-display font-bold text-xs">
                  02
                </div>
                <h4 className="font-display font-bold text-base text-foreground">2. Gespräch</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Wir prüfen ehrlich, ob M³ der richtige Hebel ist. Danach erhältst du eine erste Einschätzung.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-secondary/30 p-5 space-y-2">
                <div className="w-8 h-8 rounded-xl bg-gold-gradient text-primary-foreground flex items-center justify-center font-display font-bold text-xs">
                  03
                </div>
                <h4 className="font-display font-bold text-base text-foreground">3. Nächster Schritt</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  System Start oder das passende Modul. Du entscheidest in Ruhe. Kein Verkaufsdruck.
                </p>
              </div>
            </div>
          </section>

          {/* Alternative Channels Strip */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground pt-4 border-t border-border/70">
            <a
              href="tel:+4917699016640"
              className="flex items-center gap-2 hover:text-amber-600 transition font-semibold"
            >
              <Phone className="w-4 h-4 text-gold" />
              <span>Telefon: +49 176 99016640</span>
            </a>
            <span>•</span>
            <a
              href={contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-amber-600 transition font-semibold"
            >
              <Instagram className="w-4 h-4 text-purple-600" />
              <span>Instagram: @michelmeiermoves</span>
            </a>
            <span>•</span>
            <Link
              to="/katalog"
              className="flex items-center gap-2 hover:text-amber-600 transition font-semibold"
            >
              <Sparkles className="w-4 h-4 text-gold" />
              <span>Alle Module im Katalog ansehen</span>
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
