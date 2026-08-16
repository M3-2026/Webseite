import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import logo from "@/assets/logo.png";
import avatar from "@/assets/avatar.png";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

// WhatsApp Direktkontakt
const WHATSAPP_URL = "https://wa.me/4917699016640?text=Hallo%20Mich%C3%A9l,%20ich%20interessiere%20mich%20f%C3%BCr%20ein%20kostenloses%20Erstgespr%C3%A4ch.";

interface Service {
  name: string;
  pillar: "M1" | "M2" | "M3";
  tagline: string;
  desc: string;
  features: string[];
  featured?: boolean;
  route: string;
  whatsappUrl: string;
}

const services: Service[] = [
  // M1
  {
    name: "M³ Body Reset",
    pillar: "M1",
    tagline: "Dein Neustart von innen.",
    desc: "Gezielte Unterstützung für Stoffwechsel und Darm. Bringt deinen Körper wieder in die energetische Balance.",
    features: ["Darm-Protokoll", "Mikronährstoff-Balance", "Stoffwechsel-Aktivierung"],
    route: "/body-reset",
    whatsappUrl: "https://wa.me/4917699016640?text=Hallo%20Mich%C3%A9l,%20ich%20interessiere%20mich%20f%C3%BCr%20das%20M%C2%B9%20Body%20Reset%20Programm.",
  },
  {
    name: "Darm- & Stoffwechselbegleitung",
    pillar: "M1",
    tagline: "Ganzheitliche Begleitung.",
    desc: "Eine tiefe biochemische Analyse und Begleitung zur Behebung chronischer Energie- oder Verdauungsprobleme.",
    features: ["Laborwert-Analyse", "Persönliches Protokoll", "Fortlaufende Anpassung"],
    route: "/darm-stoffwechselbegleitung",
    whatsappUrl: "https://wa.me/4917699016640?text=Hallo%20Mich%C3%A9l,%20ich%20interessiere%20mich%20f%C3%BCr%20die%20Darm-%20und%20Stoffwechselbegleitung.",
  },
  {
    name: "M³ Ernährungscoaching",
    pillar: "M1",
    tagline: "Deine Ernährung. Dein Erfolg.",
    desc: "Keine starren Pläne, keine Verbote – sondern eine alltagstaugliche Struktur, die langfristig funktioniert.",
    features: ["Alltagstauglich", "Individuelle Struktur", "Nachhaltige Umsetzung"],
    route: "/ernaehrungscoaching",
    whatsappUrl: "https://wa.me/4917699016640?text=Hallo%20Mich%C3%A9l,%20ich%20interessiere%20mich%20f%C3%BCr%20das%20Ern%C3%A4hrungscoaching.",
  },
  {
    name: "Goldene Grundversorgung",
    pillar: "M1",
    tagline: "Die Basis für deine Gesundheit.",
    desc: "Eine sinnvolle Grundversorgung mit allen essenziellen Nährstoffen – die Grundlage für Regeneration und Vitalität.",
    features: ["Nährstoff-Basis", "Zellgesundheit", "Tägliche Vitalität"],
    route: "/goldene-grundversorgung",
    whatsappUrl: "https://wa.me/4917699016640?text=Hallo%20Mich%C3%A9l,%20ich%20interessiere%20mich%20f%C3%BCr%20die%20Goldene%20Grundversorgung.",
  },
  // M2
  {
    name: "M³ Performance Training",
    pillar: "M2",
    tagline: "Stärke mit System.",
    desc: "Intelligentes Personal Training für langfristige Fortschritte – ob Wiedereinstieg oder gezielter Muskelaufbau.",
    features: ["Kraft & Technik", "Sinnvolle Belastung", "1–2× / Woche"],
    route: "/performance-training",
    whatsappUrl: "https://wa.me/4917699016640?text=Hallo%20Mich%C3%A9l,%20ich%20interessiere%20mich%20f%C3%BCr%20das%20Performance%20Training.",
  },
  {
    name: "Schmerzfrei",
    pillar: "M2",
    tagline: "Beweglich & Stabil.",
    desc: "Mobilitätstraining und Bewegungskorrekturen zur dauerhaften Behebung von Alltags- und Trainingsschmerzen.",
    features: ["Gelenkmobilität", "Schwachstellen-Ausgleich", "Schmerzreduktion"],
    route: "/schmerzfrei",
    whatsappUrl: "https://wa.me/4917699016640?text=Hallo%20Mich%C3%A9l,%20ich%20interessiere%20mich%20f%C3%BCr%20das%20Schmerzfrei-Programm.",
  },
  {
    name: "Coaching für Zwei",
    pillar: "M2",
    tagline: "Gemeinsam stärker.",
    desc: "Personal Training für zwei Personen. Jeder auf seinem Level, mit dem Extra an Motivation durch geteilte Erfolge.",
    features: ["Partner-Training", "Hohe Verbindlichkeit", "Zwei individuelle Pläne"],
    route: "/coaching-fuer-zwei",
    whatsappUrl: "https://wa.me/4917699016640?text=Hallo%20Mich%C3%A9l,%20wir%20interessieren%20uns%20f%C3%BCr%20das%20Coaching%20f%C3%BCr%20Zwei.",
  },
  // M3
  {
    name: "M³ System Start",
    pillar: "M3",
    tagline: "Struktur für deinen Start.",
    desc: "Im System Start bringen wir Struktur in deine Situation und finden heraus, welche Schritte für dich wirklich sinnvoll sind.",
    features: ["Standortbestimmung", "Klare Orientierung", "Individueller Plan"],
    featured: true,
    route: "/system-start",
    whatsappUrl: "https://wa.me/4917699016640?text=Hallo%20Mich%C3%A9l,%20ich%20interessiere%20mich%20f%C3%BCr%20den%20M%C2%B3%20System%20Start.",
  },
  {
    name: "Mental Performance",
    pillar: "M3",
    tagline: "Fokus und Regeneration.",
    desc: "Stressresistenz, regenerativer Schlaf und mentale Routinen für Alltag, Sport und fordernde Lebensphasen.",
    features: ["Stress-Profil", "Schlaf-Optimierung", "Regenerative Techniken"],
    route: "/mental-performance",
    whatsappUrl: "https://wa.me/4917699016640?text=Hallo%20Mich%C3%A9l,%20ich%20interessiere%20mich%20f%C3%BCr%20das%20Mental%20Performance%20Coaching.",
  },
];

function ServiceCard({ s }: { s: Service }) {
  return (
    <div
      className={`relative rounded-2xl border p-10 md:p-11 flex flex-col h-full ${
        s.featured
          ? "border-gold/60 bg-gradient-to-br from-gold/10 to-transparent shadow-[var(--shadow-gold)]"
          : "border-border bg-card hover:border-gold/50 shadow-sm hover:shadow-[0_0_15px_rgba(212,175,55,0.04)]"
      } transition-all`}
    >
      {s.featured && (
        <span className="absolute -top-3 left-8 rounded-full bg-gold-gradient px-3 py-1 text-xs font-semibold text-primary-foreground uppercase tracking-wider">
          Empfohlener Start
        </span>
      )}
      <h4 className="text-2xl font-display mb-1">{s.name}</h4>
      <p className="text-xs uppercase tracking-[0.2em] text-gold mb-3">{s.tagline}</p>
      <p className="text-muted-foreground leading-[1.75] mb-6 text-[16px] md:text-[17px]">{s.desc}</p>
      <ul className="space-y-2 mb-8 mt-auto">
        {s.features.map((f) => (
          <li key={f} className="flex items-center gap-3 text-[16px] md:text-[17px]">
            <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
            {f}
          </li>
        ))}
      </ul>
      <div className="mt-6 flex flex-col gap-3">
        <Link
          to={s.route}
          className="inline-flex items-center justify-center rounded-full border border-border px-6 py-2.5 text-sm font-semibold hover:bg-secondary transition"
        >
          Details ansehen
        </Link>
        <a
          href={s.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold transition ${
            s.featured
              ? "bg-gold-gradient text-primary-foreground shadow-[var(--shadow-gold)] hover:opacity-90"
              : "bg-secondary text-foreground hover:bg-secondary/80"
          }`}
        >
          WhatsApp Anfrage
        </a>
      </div>
    </div>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border bg-card rounded-2xl overflow-hidden transition-all duration-300">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between p-6 text-left font-semibold text-lg hover:text-gold transition-colors focus:outline-none"
      >
        <span className="pr-4">{q}</span>
        <span className={`text-gold text-2xl font-light shrink-0 transition-transform duration-300 ${open ? "rotate-45" : ""}`}>
          +
        </span>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          open ? "max-h-60 border-t border-border/50 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <p className="p-6 text-[16px] md:text-[17px] text-muted-foreground leading-[1.75] whitespace-pre-line bg-card/30">
          {a}
        </p>
      </div>
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />

      {/* HERO */}
      <section id="top" className="relative hero-bg overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-gold/5 blur-3xl animate-glow" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 pt-12 pb-0 md:pt-16 flex flex-col">
          <div className="max-w-3xl mx-auto text-center animate-float-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gold mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              Performance & Gesundheit
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display leading-[0.95] tracking-tight">
              Mehr Energie.<br />
              Mehr Leistung.<br />
              <span className="text-gold">Mehr Leben.</span>
            </h1>

            <p className="mt-5 text-lg md:text-[20px] text-muted-foreground max-w-2xl mx-auto leading-[1.75] whitespace-pre-line">
              Vitalkraft beginnt nicht mit härterem Training, sondern mit einem Körper, der in seiner natürlichen Balance arbeitet.{"\n"}
              M³ verbindet Bewegung, Ernährung, Stoffwechsel und mentale Fitness zu einem systemischen Konzept – für mehr Lebenskraft, beständige Fortschritte und langfristiges Wohlbefinden.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-gold-gradient px-8 py-3.5 font-semibold text-primary-foreground shadow-[var(--shadow-gold)] hover:opacity-90 transition"
              >
                Kostenloses Erstgespräch
              </a>
              <Link to="/" hash="system" className="inline-flex items-center rounded-full border border-border px-8 py-3.5 font-semibold hover:bg-secondary transition">
                Das M³-System entdecken
              </Link>
            </div>

            <p className="mt-4 text-xs uppercase tracking-[0.25em] text-muted-foreground/70 font-medium">
              Persönlich &middot; Maßgeschneidert &middot; Systemisch
            </p>
          </div>

          <div className="mt-1 md:mt-2 flex justify-center relative">
            <img
              src={avatar}
              alt="Michél Meier – Personal Trainer"
              className="avatar-shadow h-[72vh] md:h-[82vh] max-h-[860px] w-auto object-contain object-bottom select-none pointer-events-none animate-float-up"
              style={{ animationDelay: "0.3s" }}
            />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-20 bg-gold/25 blur-3xl rounded-full" />
          </div>
        </div>
      </section>

      {/* BEREICH 1: Leistung beginnt mit Gesundheit */}
      <section id="philosophie" className="py-12 md:py-16 border-t border-border">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-2">Die Philosophie</p>
          <h2 className="text-4xl md:text-6xl font-display leading-tight mb-5">
            Leistung beginnt mit Gesundheit.
          </h2>
          
          <div className="space-y-4 text-[17px] md:text-lg text-muted-foreground leading-[1.75] max-w-2xl mx-auto mb-6">
            <p>
              Viele Menschen investieren mehr Zeit in Training, Ernährung oder neue Methoden.
            </p>
            <p>
              Und trotzdem bleiben Energie, Wohlbefinden oder langfristige Fortschritte häufig aus.
            </p>
            <p>
              Nicht, weil sie sich zu wenig bemühen.
            </p>
            <p className="font-semibold text-foreground">
              Sondern weil die Grundlage häufig übersehen wird.
            </p>
          </div>

          <div className="h-px w-12 bg-gold/30 mx-auto mb-6" />

          <div className="space-y-4 text-[17px] md:text-lg text-muted-foreground leading-[1.75] max-w-2xl mx-auto mb-6">
            <p>
              Gesundheit entsteht selten durch eine einzelne Maßnahme.
            </p>
            <p>
              Sie entwickelt sich, wenn viele Bereiche sinnvoll zusammenspielen.
            </p>
            <p className="font-medium text-gold tracking-widest uppercase text-xs md:text-sm">
              Bewegung &middot; Ernährung &middot; Stoffwechsel &middot; Regeneration &middot; Gewohnheiten
            </p>
            <p>
              Jeder dieser Bereiche beeinflusst den anderen.
            </p>
            <p>
              Genau deshalb verfolgt M³ keinen isolierten Ansatz, sondern ein strukturiertes System, das Zusammenhänge verständlich macht und individuelle Wege aufzeigt.
            </p>
            <p>
              Denn nachhaltige Veränderung beginnt nicht mit der nächsten Methode.
            </p>
            <p className="font-semibold text-foreground">
              Sie beginnt mit Verständnis.
            </p>
          </div>

          <div className="h-px w-12 bg-gold/30 mx-auto mb-6" />

          <div className="mb-6 max-w-2xl mx-auto">
            <p className="text-[19px] md:text-xl font-medium text-foreground italic leading-[1.75]">
              Wer seinen Körper besser versteht, trifft langfristig bessere Entscheidungen.
            </p>
            <p className="text-[17px] text-gold mt-1 font-semibold">
              Und genau dort beginnt M³.
            </p>
          </div>

          <div className="mt-5">
            <Link
              to="/"
              hash="system"
              className="inline-flex items-center justify-center rounded-full bg-gold-gradient px-8 py-3.5 font-semibold text-primary-foreground shadow-[var(--shadow-gold)] hover:opacity-90 transition"
            >
              Das M³-System kennenlernen
            </Link>
          </div>
        </div>
      </section>

      {/* BEREICH 3 (NEU): Vielleicht erkennst du dich hier wieder. */}
      <section id="fuer-wen" className="py-12 md:py-16 bg-card/20 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-2">Zielgruppen & Bedarfe</p>
            <h2 className="text-4xl md:text-6xl font-display">Vielleicht erkennst du dich hier wieder.</h2>
            <p className="mt-2 text-lg md:text-[20px] text-muted-foreground max-w-3xl mx-auto leading-[1.75]">
              Ganz gleich, ob du dein allgemeines Wohlbefinden stärken, deine körperliche Vitalität steigern oder einfach wieder mehr Tatkraft im Alltag spüren möchtest – M³ begleitet dich mit einem maßgeschneiderten und systemischen Konzept.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { title: "Mehr Energie", desc: "Du fühlst dich häufig müde, erschöpft oder antriebslos und möchtest wieder voller Schwung durch den Tag gehen." },
              { title: "Stoffwechsel & Darm", desc: "Du möchtest deine Verdauung, deinen Stoffwechsel und dein allgemeines Wohlbefinden dauerhaft verbessern." },
              { title: "Schmerzfrei bewegen", desc: "Du möchtest Beschwerden reduzieren, beweglicher werden und deinen Körper wieder mit Vertrauen belasten können." },
              { title: "Gesund abnehmen", desc: "Du möchtest Körperfett reduzieren – ohne radikale Diäten oder kurzfristige Lösungen." },
              { title: "Muskelaufbau & Performance", desc: "Du möchtest stärker, vitaler und belastbarer werden – mit einem strukturierten Trainingskonzept." },
              { title: "Prävention", desc: "Du möchtest frühzeitig etwas für dein Wohlbefinden tun, anstatt erst zu reagieren, wenn Beschwerden entstehen." },
              { title: "Beruf & Alltag", desc: "Du möchtest trotz Beruf, Familie und wenig Zeit eine Strategie entwickeln, die dauerhaft in dein Leben passt." },
              { title: "Langfristige Gesundheit", desc: "Du suchst keine kurzfristige Lösung, sondern eine dauerhafte Strategie für mehr Vitalität, Stabilität und Lebensqualität." }
            ].map((item, index) => (
              <div key={index} className="border border-border bg-card p-9 md:p-10 rounded-2xl flex flex-col justify-between hover:border-gold/50 shadow-sm hover:shadow-[0_0_20px_rgba(212,175,55,0.05)] transition-all hover:translate-y-[-2px]">
                <div>
                  <div className="w-8 h-8 rounded-full bg-gold/10 text-gold flex items-center justify-center font-display text-sm mb-4">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-[16px] md:text-[17px] text-muted-foreground leading-[1.75]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto text-center border-t border-border pt-6">
            <p className="text-muted-foreground leading-[1.75] whitespace-pre-line font-medium italic text-[16px] md:text-[17px]">
              Jeder Mensch bringt andere Voraussetzungen, Ziele und Herausforderungen mit. Deshalb beginnt unsere Zusammenarbeit mit einer persönlichen Analyse – nicht mit einer Standardlösung.
            </p>
          </div>
        </div>
      </section>

      {/* BEREICH 2: Das M³-System */}
      <section id="system" className="relative py-12 md:py-16 bg-card/40 border-t border-border overflow-hidden">
        {/* Animated performance background */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute -top-24 -left-24 w-[480px] h-[480px] rounded-full bg-gold/15 blur-3xl animate-drift-slow" />
          <div className="absolute top-1/2 -right-32 w-[520px] h-[520px] rounded-full bg-gold-soft/20 blur-3xl animate-drift-fast" />
          <div className="absolute bottom-0 left-1/3 w-[420px] h-[420px] rounded-full bg-primary/10 blur-3xl animate-drift-mid" />
          <div className="absolute inset-0 opacity-[0.18] bg-performance-lines animate-lines-shift" />
          <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent animate-pulse-line" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center mb-8">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-2">Das M³-System</p>
            <h2 className="text-4xl md:text-6xl font-display mb-5">Drei Säulen. Ein gemeinsames Ziel.</h2>
            <div className="text-[17px] md:text-lg text-muted-foreground leading-[1.75] max-w-2xl mx-auto space-y-2">
              <p>Gesundheit entsteht selten durch eine einzelne Maßnahme.</p>
              <p>Sie entwickelt sich, wenn die richtigen Bereiche sinnvoll zusammenspielen.</p>
              <p>Genau auf diesem Gedanken basiert das M³-System.</p>
              <p>Jede Säule übernimmt eine eigene Aufgabe – erst im Zusammenspiel entsteht eine nachhaltige Entwicklung.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-8">
            {/* M1 – Metabolism */}
            <div className="border border-border bg-card p-10 rounded-2xl flex flex-col justify-between hover:border-gold/60 hover:bg-gradient-to-b hover:from-card hover:to-gold/5 shadow-sm hover:shadow-[0_0_25px_rgba(212,175,55,0.06)] transition-all">
              <div>
                <div className="border-b border-border pb-3 mb-5">
                  <span className="font-display text-5xl text-gold/45 block mb-1">M¹</span>
                  <h3 className="text-2xl font-display mt-1">Metabolism</h3>
                  <p className="text-xs uppercase tracking-[0.15em] text-gold mt-1 font-semibold">Die Grundlage schaffen.</p>
                </div>
                <p className="text-[16px] md:text-[17px] text-muted-foreground leading-[1.75] mb-8">
                  Ein funktionierender Stoffwechsel, eine passende Ernährung und eine sinnvolle Versorgung bilden die Basis für Gesundheit, Energie und Regeneration.
                </p>
              </div>
              <Link
                to="/metabolism"
                className="w-full inline-flex items-center justify-center rounded-full bg-secondary hover:bg-secondary/80 border border-border py-3 text-sm font-semibold transition text-center text-foreground"
              >
                Mehr erfahren
              </Link>
            </div>

            {/* M2 – Movement */}
            <div className="border border-border bg-card p-10 rounded-2xl flex flex-col justify-between hover:border-gold/60 hover:bg-gradient-to-b hover:from-card hover:to-gold/5 shadow-sm hover:shadow-[0_0_25px_rgba(212,175,55,0.06)] transition-all">
              <div>
                <div className="border-b border-border pb-3 mb-5">
                  <span className="font-display text-5xl text-gold/45 block mb-1">M²</span>
                  <h3 className="text-2xl font-display mt-1">Movement</h3>
                  <p className="text-xs uppercase tracking-[0.15em] text-gold mt-1 font-semibold">Bewegung neu denken.</p>
                </div>
                <p className="text-[16px] md:text-[17px] text-muted-foreground leading-[1.75] mb-8">
                  Individuelle Bewegung schafft Belastbarkeit, Bewegungsqualität und langfristige Leistungsfähigkeit.
                </p>
              </div>
              <Link
                to="/movement"
                className="w-full inline-flex items-center justify-center rounded-full bg-secondary hover:bg-secondary/80 border border-border py-3 text-sm font-semibold transition text-center text-foreground"
              >
                Mehr erfahren
              </Link>
            </div>

            {/* M3 – Mental Performance */}
            <div className="border border-border bg-card p-10 rounded-2xl flex flex-col justify-between hover:border-gold/60 hover:bg-gradient-to-b hover:from-card hover:to-gold/5 shadow-sm hover:shadow-[0_0_25px_rgba(212,175,55,0.06)] transition-all">
              <div>
                <div className="border-b border-border pb-3 mb-5">
                  <span className="font-display text-5xl text-gold/45 block mb-1">M³</span>
                  <h3 className="text-2xl font-display mt-1">Mental Performance</h3>
                  <p className="text-xs uppercase tracking-[0.15em] text-gold mt-1 font-semibold">Aus Veränderung wird Gewohnheit.</p>
                </div>
                <p className="text-[16px] md:text-[17px] text-muted-foreground leading-[1.75] mb-8">
                  Nachhaltige Veränderungen entstehen durch Verständnis, Struktur und Entscheidungen, die dauerhaft in den Alltag integriert werden.
                </p>
              </div>
              <Link
                to="/mental-performance"
                className="w-full inline-flex items-center justify-center rounded-full bg-secondary hover:bg-secondary/80 border border-border py-3 text-sm font-semibold transition text-center text-foreground"
              >
                Mehr erfahren
              </Link>
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center border-t border-border pt-6">
            <p className="text-muted-foreground leading-[1.75] mb-5 text-[18px] md:text-[20px] whitespace-pre-line">
              Das M³-System betrachtet Gesundheit nicht als einzelne Maßnahme, sondern als einen Prozess, in dem alle Bereiche sinnvoll ineinandergreifen.
              {"\n"}
              Genau deshalb beginnt jede Zusammenarbeit mit der Frage:
              {"\n"}
              <span className="text-foreground font-semibold">Wo stehst du heute – und welcher Schritt ist für dich jetzt der richtige?</span>
            </p>
            <Link
              to="/system-start"
              className="inline-flex items-center justify-center rounded-full bg-gold-gradient px-8 py-4 font-semibold text-primary-foreground shadow-[var(--shadow-gold)] hover:opacity-90 transition"
            >
              Lass uns gemeinsam herausfinden, wo dein Weg beginnt.
            </Link>
          </div>
        </div>
      </section>

      {/* BEREICH 4 (NEU): So arbeiten wir zusammen */}
      <section id="so-arbeiten-wir" className="py-12 md:py-16 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-2">Ablauf</p>
            <h2 className="text-4xl md:text-6xl font-display">So arbeiten wir zusammen</h2>
            <p className="mt-2 text-lg md:text-[20px] text-muted-foreground max-w-3xl mx-auto leading-[1.75]">
              Jeder Mensch bringt andere Voraussetzungen mit. Deshalb beginnt bei M³ keine Begleitung mit einem Standardplan, sondern mit einer persönlichen Analyse und einer klaren Strategie.
            </p>
          </div>

          <div className="relative mb-8">
            {/* Desktop Horizontal Line */}
            <div className="hidden lg:block absolute top-1/2 left-4 right-4 h-0.5 bg-border -translate-y-1/2 z-0" />
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 relative z-10">
              {[
                { step: "01", title: "Kennenlernen", desc: "In einem unverbindlichen Erstgespräch lernen wir uns kennen, sprechen über deine Ziele, deine aktuelle Situation und finden gemeinsam heraus, ob M³ der richtige Weg für dich ist." },
                { step: "02", title: "Analyse", desc: "Wir betrachten deine Ausgangssituation ganzheitlich – von Bewegung und Ernährung bis hin zu Alltag, Regeneration und persönlichen Herausforderungen." },
                { step: "03", title: "Individuelle Strategie", desc: "Auf Grundlage deiner Ziele entwickeln wir ein persönliches Konzept, das zu deinem Alltag passt und auf langfristige Veränderungen ausgelegt ist." },
                { step: "04", title: "Umsetzung & Begleitung", desc: "Du wirst Schritt für Schritt begleitet. Dein Plan wird regelmäßig überprüft und bei Bedarf angepasst, damit du dauerhaft Fortschritte erzielst." },
                { step: "05", title: "Nachhaltige Entwicklung", desc: "Unser Ziel ist keine kurzfristige Veränderung, sondern ein gesunder, leistungsfähiger Körper und Gewohnheiten, die langfristig funktionieren." }
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center lg:items-start text-center lg:text-left bg-card lg:bg-transparent border border-border lg:border-none p-8 lg:p-0 rounded-2xl shadow-sm lg:shadow-none hover:border-gold/50 shadow-sm hover:shadow-[0_0_15px_rgba(212,175,55,0.04)] transition-all">
                  <div className="w-12 h-12 rounded-full bg-gold-gradient text-primary-foreground flex items-center justify-center font-display text-lg shadow-[var(--shadow-gold)] mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-display mb-2">{item.title}</h3>
                  <p className="text-[16px] md:text-[17px] text-muted-foreground leading-[1.75] max-w-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center border-t border-border pt-6">
            <p className="text-muted-foreground leading-[1.75] whitespace-pre-line font-medium italic text-[16px] md:text-[17px]">
              Ob Stoffwechsel, Ernährung, Bewegung oder Performance – jede Strategie wird individuell auf dich abgestimmt. Im nächsten Schritt findest du einen Überblick über die verschiedenen Möglichkeiten der Zusammenarbeit.
            </p>
          </div>
        </div>
      </section>

      {/* BEREICH 5: Deine Möglichkeiten mit M³ */}
      <section id="leistungen" className="py-12 md:py-16 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-2">Das System</p>
            <h2 className="text-4xl md:text-6xl font-display">Deine Möglichkeiten mit M³</h2>
            <p className="mt-2 text-lg md:text-[20px] text-muted-foreground max-w-3xl mx-auto leading-[1.75]">
              Jeder Mensch startet an einem anderen Punkt. Deshalb gibt es bei M³ keine Einheitslösung, sondern maßgeschneiderte Ansätze, die sich an deinen Zielen, deinem Wohlbefinden und deinem Alltag orientieren.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 md:gap-8 items-stretch mb-8">
            {/* Säule M1: Metabolism */}
            <div className="border border-border bg-card p-10 rounded-2xl flex flex-col justify-between hover:border-gold/50 shadow-sm hover:shadow-[0_0_20px_rgba(212,175,55,0.06)] transition-all">
              <div>
                <div className="border-b border-border pb-3 mb-5">
                  <span className="font-display text-5xl text-gold/45">M¹</span>
                  <h3 className="text-2xl font-display mt-1">Metabolism</h3>
                  <p className="text-xs uppercase tracking-[0.15em] text-gold mt-1">Die Grundlage schaffen</p>
                </div>
                <p className="text-[16px] md:text-[17px] text-muted-foreground leading-[1.75] mb-6">
                  Ein optimal versorgter Stoffwechsel bildet die Basis für dauerhafte Vitalität und langfristige Energie. In diesem Bereich schaffen wir die Voraussetzungen, damit dein Körper wieder in seine natürliche Balance findet.
                </p>
                <div className="mt-5">
                  <span className="text-xs uppercase tracking-wider font-semibold text-muted-foreground block mb-2">Leistungen:</span>
                  <ul className="space-y-1.5">
                    {["Body Reset", "Darm- & Stoffwechselbegleitung", "Ernährungscoaching", "Goldene Grundversorgung"].map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-[16px] md:text-[17px] text-foreground/90">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-6">
                <Link
                  to="/metabolism"
                  className="w-full inline-flex items-center justify-center rounded-full bg-gold-gradient px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-gold)] hover:opacity-90 transition animate-fade-in"
                >
                  Mehr erfahren
                </Link>
              </div>
            </div>

            {/* Säule M2: Movement */}
            <div className="border border-border bg-card p-10 rounded-2xl flex flex-col justify-between hover:border-gold/50 shadow-sm hover:shadow-[0_0_20px_rgba(212,175,55,0.06)] transition-all">
              <div>
                <div className="border-b border-border pb-3 mb-5">
                  <span className="font-display text-5xl text-gold/45">M²</span>
                  <h3 className="text-2xl font-display mt-1">Movement</h3>
                  <p className="text-xs uppercase tracking-[0.15em] text-gold mt-1">Bewegung neu denken</p>
                </div>
                <p className="text-[16px] md:text-[17px] text-muted-foreground leading-[1.75] mb-6">
                  Ob Kraftaufbau, Schmerzfreiheit oder gezielte Kräftigung – Bewegung wird präzise auf deinen Körper und deine persönlichen Ziele abgestimmt.
                </p>
                <div className="mt-5">
                  <span className="text-xs uppercase tracking-wider font-semibold text-muted-foreground block mb-2">Leistungen:</span>
                  <ul className="space-y-1.5">
                    {["Performance Training", "Schmerzfrei", "Coaching für Zwei"].map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-[16px] md:text-[17px] text-foreground/90">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-6">
                <Link
                  to="/movement"
                  className="w-full inline-flex items-center justify-center rounded-full bg-gold-gradient px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-gold)] hover:opacity-90 transition animate-fade-in"
                >
                  Mehr erfahren
                </Link>
              </div>
            </div>

            {/* Säule M3: Mental Performance */}
            <div className="border border-border bg-card p-10 rounded-2xl flex flex-col justify-between hover:border-gold/50 shadow-sm hover:shadow-[0_0_20px_rgba(212,175,55,0.06)] transition-all">
              <div>
                <div className="border-b border-border pb-3 mb-5">
                  <span className="font-display text-5xl text-gold/45">M³</span>
                  <h3 className="text-2xl font-display mt-1">Mental Performance</h3>
                  <p className="text-[16px] md:text-[17px] text-muted-foreground leading-[1.75] mb-6">Veränderung langfristig sichern</p>
                </div>
                <p className="text-[16px] md:text-[17px] text-muted-foreground leading-[1.75] mb-6">
                  Beständige Ergebnisse entstehen durch Struktur, Gewohnheiten und verlässliche Begleitung. Hier geht es darum, positive Veränderungen fest in deinen Alltag zu integrieren.
                </p>
                <div className="mt-5">
                  <span className="text-xs uppercase tracking-wider font-semibold text-muted-foreground block mb-2">Leistungen:</span>
                  <ul className="space-y-1.5">
                    {["Mental Performance", "Persönliche Begleitung", "Individuelle Strategie"].map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-[16px] md:text-[17px] text-foreground/90">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-6">
                <Link
                  to="/mental-performance"
                  className="w-full inline-flex items-center justify-center rounded-full bg-gold-gradient px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-gold)] hover:opacity-90 transition animate-fade-in"
                >
                  Mehr erfahren
                </Link>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center border-t border-border pt-6">
            <p className="text-muted-foreground leading-[1.75] font-medium italic text-[16px] md:text-[17px]">
              Ganz gleich, an welchem Punkt du gerade stehst – gemeinsam entwickeln wir das concept, das zu dir und deinem Leben passt.
            </p>
          </div>
        </div>
      </section>

      {/* BEREICH 7: Über Mich */}
      <section id="ueber" className="py-12 md:py-16 border-t border-border">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 md:gap-10 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-2">Über Michél</p>
            <h2 className="text-4xl md:text-5xl font-display leading-tight mb-3">
              Hinter M³ steckt mehr als Training.
            </h2>
            <p className="text-lg md:text-xl text-gold font-medium leading-[1.75] mb-4">
              Bewegung begleitet mich seit meinem ganzen Leben. Doch erst durch eigene Erfahrungen habe ich verstanden, dass nachhaltige Leistungsfähigkeit weit mehr bedeutet als Sport allein.
            </p>
            <div className="space-y-3 text-muted-foreground leading-[1.75] text-[16px] md:text-[17px]">
              <p>
                Als Breakdance-Weltmeister durfte ich erleben, wozu der menschliche Körper fähig ist.
              </p>
              <p>
                Gleichzeitig haben mich Verletzungen, Rückschläge und intensive Auseinandersetzungen mit Training, Ernährung und Gesundheit gelehrt, dass Höchstleistung nur dann möglich ist, wenn die Grundlagen stimmen.
              </p>
              <p>
                Heute verbinde ich diese Erfahrungen mit meinem Wissen aus den Bereichen Bewegung, Ernährung, Stoffwechsel und Gesundheitscoaching.
              </p>
              <p>
                Nicht, um Menschen möglichst schnell an ihr Ziel zu bringen.
              </p>
              <p>
                Sondern um gemeinsam nachhaltige Veränderungen zu schaffen, die langfristig funktionieren.
              </p>
              <p className="font-semibold text-foreground">
                Denn jeder Mensch ist anders. Und genau deshalb verdient auch jeder Mensch einen individuellen Weg.
              </p>
            </div>
            <div className="mt-5 border-t border-border pt-4">
              <p className="text-[16px] md:text-[17px] font-medium text-foreground italic leading-[1.75]">
                M³ ist aus der Überzeugung entstanden, dass Gesundheit die Grundlage jeder nachhaltigen Leistungsfähigkeit ist.
              </p>
            </div>
            <div className="mt-5">
              <Link
                to="/ueber-mich"
                className="inline-flex items-center justify-center rounded-full bg-gold-gradient px-8 py-3.5 font-semibold text-primary-foreground shadow-[var(--shadow-gold)] hover:opacity-90 transition"
              >
                Mehr zu meiner Geschichte erfahren
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-gold/20 to-transparent border border-gold/20 p-3 overflow-hidden">
              <iframe
                className="w-full h-full rounded-2xl"
                src="https://www.youtube.com/embed/dQrADZQ1d5I"
                title="M³ Performance"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* BEREICH 8 (NEU): Darauf kannst du dich verlassen. */}
      <section id="erwartung" className="py-12 md:py-16 bg-card/20 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-2">Zusammenarbeit</p>
            <h2 className="text-4xl md:text-6xl font-display">Darauf kannst du dich verlassen.</h2>
            <p className="mt-2 text-lg md:text-[20px] text-muted-foreground max-w-3xl mx-auto leading-[1.75]">
              Eine Zusammenarbeit auf Augenhöhe. Persönlich. Ehrlich. Dauerhaft.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            {[
              {
                title: "Maßgeschneiderte Betreuung",
                desc: "Keine Standardpläne. Jeder Mensch bringt andere Voraussetzungen, Ziele und Herausforderungen mit. Deshalb entsteht jede Strategie persönlich auf dich abgestimmt."
              },
              {
                title: "Systemischer Blick",
                desc: "Wir betrachten nicht nur Training oder Ernährung, sondern den Menschen als Ganzes. Bewegung, Stoffwechsel, Regeneration und Alltag greifen ineinander."
              },
              {
                title: "Langfristige Veränderung",
                desc: "Keine kurzfristigen Lösungen. Unser Ziel ist es, Gewohnheiten zu entwickeln, die dauerhaft funktionieren."
              },
              {
                title: "Persönliche Begleitung",
                desc: "Du wirst nicht allein gelassen. Gemeinsam überprüfen wir deine Fortschritte, passen Ansätze an und entwickeln dein Konzept kontinuierlich weiter."
              }
            ].map((item, index) => (
              <div key={index} className="border border-border bg-card p-10 rounded-2xl flex flex-col justify-between hover:border-gold/50 shadow-sm hover:shadow-[0_0_15px_rgba(212,175,55,0.04)] transition-all hover:translate-y-[-2px]">
                <div>
                  <div className="w-10 h-10 rounded-full bg-gold/10 text-gold flex items-center justify-center font-display text-sm mb-6">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="font-semibold text-lg mb-3">{item.title}</h3>
                  <p className="text-[16px] md:text-[17px] text-muted-foreground leading-[1.75]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto text-center border-t border-border pt-6">
            <p className="text-muted-foreground leading-[1.75] font-medium italic text-[16px] md:text-[17px]">
              Körperliche Balance ist kein Sprint. Sie ist ein kontinuierlicher Prozess – und genau dabei begleite ich dich.
            </p>
          </div>
        </div>
      </section>

      {/* BEREICH 9: Häufige Fragen */}
      <section id="faq" className="py-12 md:py-16 border-t border-border">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-8">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-2 font-semibold">Fragen & Antworten</p>
            <h2 className="text-4xl md:text-6xl font-display">Häufige Fragen</h2>
            <p className="mt-2 text-lg md:text-xl text-muted-foreground leading-[1.75]">
              Du hast Fragen? Das ist völlig normal. Hier findest du Antworten auf die häufigsten Themen rund um M³ und unsere Zusammenarbeit.
            </p>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto mb-8">
            {[
              {
                q: "Muss ich bereits fit sein, um mit M³ zu starten?",
                a: "Nein. Ganz im Gegenteil. M³ richtet sich an Menschen mit unterschiedlichsten Voraussetzungen – vom Einsteiger bis zum ambitionierten Sportler. Gemeinsam holen wir dich genau dort ab, wo du aktuell stehst."
              },
              {
                q: "Wie läuft das Erstgespräch ab?",
                a: "Im Erstgespräch lernen wir uns kennen, sprechen über deine Ziele, deine aktuelle Situation und klären gemeinsam, welcher Weg für dich sinnvoll ist. Erst danach entscheiden wir, ob und wie eine Zusammenarbeit aussieht."
              },
              {
                q: "Ist M³ nur für Sportler geeignet?",
                a: "Nein. M³ richtet sich an alle Menschen, die ihre Gesundheit, Leistungsfähigkeit und Lebensqualität nachhaltig verbessern möchten – unabhängig vom aktuellen Fitnesslevel."
              },
              {
                q: "Kann ich auch online betreut werden?",
                a: "Ja. Viele Inhalte lassen sich flexibel online begleiten. Je nach Zielsetzung kann die Betreuung digital, vor Ort oder kombiniert stattfinden."
              },
              {
                q: "Muss ich Nahrungsergänzungsmittel verwenden?",
                a: "Nein. Die Grundlage bilden immer Ernährung, Bewegung und ein individueller Gesundheitsansatz. Falls eine gezielte Vitalstoffversorgung sinnvoll ist, besprechen wir das transparent und auf deine persönliche Situation abgestimmt."
              },
              {
                q: "Was unterscheidet M³ von klassischem Personal Training?",
                a: "M³ betrachtet den Menschen als Ganzes. Bewegung, Ernährung, Stoffwechsel, Regeneration und mentale Leistungsfähigkeit greifen ineinander und bilden gemeinsam die Grundlage für nachhaltige Veränderungen."
              },
              {
                q: "Kann ich auch nur einzelne Bereiche nutzen?",
                a: "Ja. Je nach Ausgangssituation können einzelne Angebote oder das gesamte M³-System sinnvoll sein. Gemeinsam finden wir den Weg, der am besten zu deinen Zielen passt."
              },
              {
                q: "Wie finde ich heraus, welches Angebot das richtige für mich ist?",
                a: "Genau dafür gibt es das unverbindliche Erstgespräch. Gemeinsam analysieren wir deine Situation und entwickeln eine Empfehlung, die zu deinen Zielen und deinem Alltag passt."
              }
            ].map((faq, idx) => (
              <FAQItem key={idx} q={faq.q} a={faq.a} />
            ))}
          </div>

          <div className="max-w-3xl mx-auto text-center border-t border-border pt-6">
            <p className="text-muted-foreground leading-[1.75] font-medium italic text-[16px] md:text-[17px]">
              Du hast keine passende Antwort gefunden? Dann lass uns persönlich sprechen. Gemeinsam finden wir heraus, welcher Weg für dich der richtige ist.
            </p>
          </div>
        </div>
      </section>

      {/* BEREICH 10: Bereit für deinen nächsten Schritt? */}
      <section id="kontakt" className="py-12 md:py-16 bg-card/40 border-t border-border">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-display leading-tight mb-5">
            Bereit für<br /><span className="text-gold">deinen nächsten Schritt?</span>
          </h2>
          <p className="text-[19px] md:text-xl text-muted-foreground leading-[1.75] whitespace-pre-line max-w-2xl mx-auto mb-6">
            Veränderung beginnt mit einer Entscheidung.
            {"\n\n"}
            Ganz gleich, ob du deine Gesundheit verbessern, deine Leistungsfähigkeit steigern oder einfach wieder mehr Energie im Alltag spüren möchtest – der erste Schritt ist oft ein persönliches Gespräch.
            {"\n\n"}
            Lass uns gemeinsam herausfinden, welcher Weg zu dir passt.
          </p>
          <div className="flex flex-col items-center justify-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-gold-gradient px-8 py-4 font-semibold text-primary-foreground shadow-[var(--shadow-gold)] hover:opacity-90 transition"
            >
              Kostenloses Erstgespräch vereinbaren
            </a>
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-2">
              Unverbindlich · Persönlich · Individuell
            </span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
