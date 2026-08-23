import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Flame,
  Dumbbell,
  Brain,
  MessageCircle,
  Play,
  Compass,
  Check,
  X,
  Target,
  ShieldCheck,
  ChevronDown,
  Layers,
  Activity,
} from "lucide-react";
import avatar from "@/assets/avatar.png";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: IndexPage,
});

// Standard WhatsApp Kontakt
const BASE_WHATSAPP = "https://wa.me/4917699016640";
const WHATSAPP_URL = `${BASE_WHATSAPP}?text=Hallo%20Mich%C3%A9l,%20ich%20interessiere%20mich%20f%C3%BCr%20ein%20kostenloses%20Erstgespr%C3%A4ch.`;

interface ServiceItem {
  name: string;
  pillar: "M1" | "M2" | "M3";
  pillarName: string;
  tagline: string;
  desc: string;
  features: string[];
  route: string;
  whatsappMessage: string;
  badge?: string;
}

const services: ServiceItem[] = [
  // M1
  {
    name: "M³ Body Reset",
    pillar: "M1",
    pillarName: "Metabolism",
    tagline: "Ganzheitlicher Neustart von innen",
    desc: "Das modulare Konzept für Darm und Stoffwechsel: Beinhaltet die 16-Tage Darmkur, die gezielte Stoffwechselkur sowie die tägliche Goldene Grundversorgung.",
    features: ["16-Tage Darmkur & Mikrobiom", "Stoffwechselkur (min. 21 Tage)", "Goldene Grundversorgung"],
    badge: "Ganzheitliches Konzept",
    route: "/body-reset",
    whatsappMessage: "Hallo Michél, ich interessiere mich für den M³ Body Reset.",
  },
  {
    name: "M³ Ernährungscoaching",
    pillar: "M1",
    pillarName: "Metabolism",
    tagline: "Deine Ernährung. Dein Alltag.",
    desc: "Keine starren Diät-Korsetts oder Verbote – sondern eine alltagstaugliche 1:1 Ernährungsstruktur, die dich langfristig ernährt und perfekt zu Beruf, Sport und Familie passt.",
    features: ["1:1 persönliche Begleitung", "Individuelle Makro-Struktur", "Dauerhafte Routine ohne Jojo-Effekt"],
    badge: "1:1 Coaching",
    route: "/ernaehrungscoaching",
    whatsappMessage: "Hallo Michél, ich interessiere mich für das 1:1 Ernährungscoaching.",
  },
  // M2
  {
    name: "M³ Performance Training",
    pillar: "M2",
    pillarName: "Movement",
    tagline: "Stärke mit System",
    desc: "Intelligentes 1:1 Personal Training für echte Leistungsfähigkeit – Technik vor Gewicht, Struktur statt Chaos.",
    features: ["Präzise Technik & Kontrolle", "Individueller Kraftaufbau", "1–2× wöchentlich"],
    badge: "1:1 Personal Training",
    route: "/performance-training",
    whatsappMessage: "Hallo Michél, ich interessiere mich für das Performance Training.",
  },
  {
    name: "M³ Schmerzfrei",
    pillar: "M2",
    pillarName: "Movement",
    tagline: "Beweglich & Stabil",
    desc: "Gezieltes Mobilitätstraining und Bewegungskorrekturen zur dauerhaften Behebung von Rücken-, Nacken- und Gelenkbeschwerden.",
    features: ["Gelenkmobilität", "Schwachstellen-Ausgleich", "Schmerzfreie Belastbarkeit"],
    badge: "Mobilität & Reha",
    route: "/schmerzfrei",
    whatsappMessage: "Hallo Michél, ich interessiere mich für das Schmerzfrei-Programm.",
  },
  {
    name: "Coaching für Zwei",
    pillar: "M2",
    pillarName: "Movement",
    tagline: "Gemeinsam stärker",
    desc: "Personal Training für zwei Personen (Partner oder Freunde) – jeder auf seinem individuellen Level, mit doppelter Motivation und Verbindlichkeit.",
    features: ["Partner-Training", "Hohe Verbindlichkeit", "Zwei maßgeschneiderte Pläne"],
    badge: "Partner-Coaching",
    route: "/coaching-fuer-zwei",
    whatsappMessage: "Hallo Michél, wir interessieren uns für das Coaching für Zwei.",
  },
  // M3
  {
    name: "M³ System Start",
    pillar: "M3",
    pillarName: "Mental & System",
    tagline: "Die Eingangstür zu M³",
    desc: "Erst verstehen, dann handeln: In einer ganzheitlichen Standortbestimmung analysieren wir deinen Ist-Zustand und erstellen deinen individuellen 3-Säulen-Fahrplan.",
    features: ["Ganzheitliche Standortbestimmung", "Klare Engpass-Priorisierung", "Individueller Fahrplan über alle Säulen"],
    badge: "Empfohlener Einstieg",
    route: "/system-start",
    whatsappMessage: "Hallo Michél, ich möchte mit dem M³ System Start beginnen.",
  },
  {
    name: "M³ Mental Performance",
    pillar: "M3",
    pillarName: "Mental Performance",
    tagline: "Dranbleiben & verankern",
    desc: "Aus Motivation wird Disziplin, aus Disziplin wird Routine. Stressresistenz, Schlaf-Optimierung, mentale Routinen und langfristige Selbstständigkeit.",
    features: ["Stress- & Schlaf-Optimierung", "Routinen-Architektur", "Langfristige Selbstständigkeit"],
    badge: "Mindset & Routinen",
    route: "/mental-performance",
    whatsappMessage: "Hallo Michél, ich interessiere mich für das Mental Performance Coaching.",
  },
];

// ----------------------------------------------------
// EDUTAINMENT COMPONENT: M³ System Start Kompass
// ----------------------------------------------------
function SystemStartKompass() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedEngpass, setSelectedEngpass] = useState<string>("");
  const [selectedZiel, setSelectedZiel] = useState<string>("");

  const engpassOptions = [
    {
      id: "m1",
      pillar: "M¹ Metabolism",
      title: "Energie & Stoffwechsel",
      desc: "Häufig müde, Verdauungsprobleme, Blähbauch, Heißhunger oder das Gefühl, dass der Stoffwechsel blockiert ist.",
      icon: Flame,
      color: "border-primary/40 text-primary bg-primary/5",
    },
    {
      id: "m2",
      pillar: "M² Movement",
      title: "Körper & Schmerzen",
      desc: "Rücken- oder Gelenkbeschwerden, Kraftlosigkeit, Verspannungen oder Unsicherheit bei der richtigen Trainingsausführung.",
      icon: Dumbbell,
      color: "border-emerald-600/40 text-emerald-700 bg-emerald-600/5",
    },
    {
      id: "m3",
      pillar: "M³ Mental & System",
      title: "Chaos & fehlende Routinen",
      desc: "Zu viel auf einmal probiert, ständig abgebrochen, kein klarer roter Faden und Stress im Alltag frisst die Vorsätze auf.",
      icon: Brain,
      color: "border-indigo-600/40 text-indigo-700 bg-indigo-600/5",
    },
  ];

  const zielOptions = [
    {
      id: "vitalitaet",
      title: "Wieder volle Vitalität & Leichtigkeit",
      desc: "Morgens erholt aufwachen, Verdauung im Einklang, stabiles Energielevel über den ganzen Tag.",
    },
    {
      id: "belastbarkeit",
      title: "Schmerzfrei, stark & athletisch belastbar",
      desc: "Dem eigenen Körper wieder vertrauen, gezielt Muskeln aufbauen und beschwerdefrei durchs Leben gehen.",
    },
    {
      id: "autonomie",
      title: "Ein System, das ein Leben lang hält",
      desc: "Keine Abhängigkeit von Plänen, sondern das Wissen, wie du jederzeit selbst auf Kurs bleibst.",
    },
  ];

  const handleSelectEngpass = (id: string) => {
    setSelectedEngpass(id);
    setStep(2);
  };

  const handleSelectZiel = (id: string) => {
    setSelectedZiel(id);
    setStep(3);
  };

  const resetKompass = () => {
    setStep(1);
    setSelectedEngpass("");
    setSelectedZiel("");
  };

  // Diagnostic result evaluation
  const getRecommendation = () => {
    let focusTitle = "M¹ Metabolism & Basis-Stoffwechsel";
    let focusDesc = "Dein Körper braucht zuerst Ruhe im Fundament. Bevor wir hohe Trainingsreize setzen, optimieren wir Darm, Vitalstoffversorgung und Stoffwechselprozesse.";
    let pillarCode = "M1";

    if (selectedEngpass === "m2") {
      focusTitle = "M² Movement & Schmerzfreie Belastbarkeit";
      focusDesc = "Technik vor Gewicht: Wir identifizieren deine biomechanischen Engpässe und bauen gezielt Stabilität und Kraft auf, ohne deinen Körper zu überlasten.";
      pillarCode = "M2";
    } else if (selectedEngpass === "m3") {
      focusTitle = "M³ Mental Performance & System-Start";
      focusDesc = "Schritt für Schritt statt alles auf einmal: Wir reduzieren die Komplexität und etablieren minimale, hochwirksame Alltagsgewohnheiten.";
      pillarCode = "M3";
    }

    const prefilledText = encodeURIComponent(
      `Hallo Michél, ich habe den M³ System-Kompass ausgefüllt. Mein Engpass: ${
        selectedEngpass === "m1" ? "Stoffwechsel/Energie" : selectedEngpass === "m2" ? "Bewegung/Schmerzen" : "Routinen/Chaos"
      }. Mein Ziel: ${selectedZiel}. Ich möchte das unverbindliche Erstgespräch nutzen!`
    );

    return { focusTitle, focusDesc, pillarCode, prefilledUrl: `${BASE_WHATSAPP}?text=${prefilledText}` };
  };

  const result = getRecommendation();

  return (
    <div className="relative rounded-3xl border border-border/90 bg-card p-6 md:p-10 shadow-[var(--shadow-card)] overflow-hidden">
      {/* Header bar of the quiz */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/70 pb-6 mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gold/15 text-gold flex items-center justify-center">
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-display text-xl md:text-2xl font-bold tracking-tight">
              M³ System-Kompass
            </h3>
            <p className="text-xs text-muted-foreground">
              In 60 Sekunden zu deinem persönlichen Start-Schwerpunkt
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Schritt {step} von 3
          </span>
          <div className="flex gap-1.5">
            <span className={`w-6 h-1.5 rounded-full transition-all ${step >= 1 ? "bg-gold" : "bg-border"}`} />
            <span className={`w-6 h-1.5 rounded-full transition-all ${step >= 2 ? "bg-gold" : "bg-border"}`} />
            <span className={`w-6 h-1.5 rounded-full transition-all ${step >= 3 ? "bg-gold" : "bg-border"}`} />
          </div>
        </div>
      </div>

      {/* Step 1: Engpass */}
      {step === 1 && (
        <div className="space-y-6 animate-float-up">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-gold mb-1 block">
              Schritt 1: Standortbestimmung
            </span>
            <h4 className="text-2xl md:text-3xl font-display font-extrabold">
              Wo spürst du aktuell die größte Hürde in deinem Leben?
            </h4>
            <p className="text-sm text-muted-foreground mt-2">
              Verstehen vor Verändern: Wähle den Bereich, der dich im Alltag am meisten Energie oder Wohlbefinden kostet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            {engpassOptions.map((opt) => {
              const Icon = opt.icon;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => handleSelectEngpass(opt.id)}
                  className="group text-left rounded-2xl border border-border p-6 hover:border-gold/60 hover:bg-secondary/40 transition-all duration-200 flex flex-col justify-between focus:outline-none focus:ring-2 focus:ring-gold cursor-pointer"
                >
                  <div>
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${opt.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold tracking-wider uppercase text-gold block mb-1">
                      {opt.pillar}
                    </span>
                    <h5 className="font-display font-bold text-lg text-foreground mb-2">
                      {opt.title}
                    </h5>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {opt.desc}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-2 text-xs font-bold text-gold group-hover:translate-x-1 transition-transform">
                    <span>Auswählen</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Step 2: Ziel */}
      {step === 2 && (
        <div className="space-y-6 animate-float-up">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-gold mb-1 block">
              Schritt 2: Zielausrichtung
            </span>
            <h4 className="text-2xl md:text-3xl font-display font-extrabold">
              Was ist dein wichtigstes Resultat für die kommenden 6 Monate?
            </h4>
            <p className="text-sm text-muted-foreground mt-2">
              Nicht möglichst viel auf einmal – sondern das eine Ziel, das für dich den größten Unterschied macht.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            {zielOptions.map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => handleSelectZiel(opt.title)}
                className="group text-left rounded-2xl border border-border p-6 hover:border-gold/60 hover:bg-secondary/40 transition-all duration-200 flex flex-col justify-between focus:outline-none focus:ring-2 focus:ring-gold cursor-pointer"
              >
                <div>
                  <div className="w-8 h-8 rounded-full bg-gold/10 text-gold flex items-center justify-center font-display font-bold text-sm mb-4">
                    ✓
                  </div>
                  <h5 className="font-display font-bold text-lg text-foreground mb-2">
                    {opt.title}
                  </h5>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {opt.desc}
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-2 text-xs font-bold text-gold group-hover:translate-x-1 transition-transform">
                  <span>Diesen Weg wählen</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </button>
            ))}
          </div>

          <div className="pt-2">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="text-xs text-muted-foreground hover:text-foreground underline transition cursor-pointer"
            >
              ← Zurück zu Schritt 1
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Ergebnis & Klarer CTA */}
      {step === 3 && (
        <div className="space-y-6 animate-float-up">
          <div className="rounded-2xl bg-gradient-to-br from-gold/15 via-gold/5 to-transparent border border-gold/40 p-6 md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-3.5 py-1 text-xs font-bold text-primary-foreground uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                Deine M³ System-Empfehlung
              </span>
              <span className="text-xs font-mono font-semibold text-gold">
                Fokus-Säule: {result.pillarCode}
              </span>
            </div>

            <h4 className="text-2xl md:text-3xl font-display font-extrabold text-foreground mb-3">
              {result.focusTitle}
            </h4>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl mb-6">
              {result.focusDesc}
            </p>

            <div className="grid sm:grid-cols-2 gap-4 border-t border-gold/20 pt-4 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span className="text-xs text-foreground font-medium">
                  Kein Blindflug: Wir analysieren exakt, wo deine wichtigste Stellschraube liegt.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span className="text-xs text-foreground font-medium">
                  Ziel ist Selbstständigkeit: Du lernst, deinen Körper selbst zu steuern.
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href={result.prefilledUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gold-gradient px-7 py-3.5 font-bold text-sm text-primary-foreground shadow-[var(--shadow-gold)] hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                Ergebnis im 20-Min. Erstgespräch besprechen
              </a>
              <button
                type="button"
                onClick={resetKompass}
                className="text-xs font-semibold text-muted-foreground hover:text-foreground transition underline cursor-pointer"
              >
                Kompass neu starten
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ----------------------------------------------------
// INTERACTIVE 3-SÄULEN EXPLORER (M1, M2, M3)
// ----------------------------------------------------
function PillarTriadExplorer() {
  const [activeTab, setActiveTab] = useState<"m1" | "m2" | "m3">("m1");

  const pillars = {
    m1: {
      tag: "M¹ · METABOLISM",
      headline: "Die Basis schaffen. Gesundheit von innen.",
      quote: "„Wenn dein Fundament brennt, nützt kein härteres Training.“",
      text: "Wir bringen Darm und Stoffwechsel in Ordnung — messbar, strukturiert und alltagstauglich. In M¹ regulieren wir Mikrobiom, Verdauung und zelluläre Vitalstoffe, damit dein Körper wieder die volle Energie für Training und Alltag hat.",
      features: [
        "M³ Body Reset – Modulares Konzept für Darm & Stoffwechsel",
        "Ganzheitliche Darm- & Stoffwechselbegleitung",
        "Alltagstaugliches 1:1 Ernährungscoaching ohne Verbote",
        "Goldene Grundversorgung für zelluläre Vitalität",
      ],
      link: "/metabolism",
      btnText: "M¹ Metabolism vertiefen",
      badgeColor: "bg-primary/10 text-primary border-primary/30",
    },
    m2: {
      tag: "M² · MOVEMENT",
      headline: "In Bewegung kommen. Technik vor Gewicht.",
      quote: "„Bewegung schafft Leistungsfähigkeit, Stabilität und Vertrauen in den eigenen Körper.“",
      text: "Weder Drill noch blindes Auspowern: Wir trainieren deinen Körper intelligent, präzise und anatomisch sinnvoll. Schmerzen werden reduziert, Schwachstellen ausgeglichen und echte athletische Belastbarkeit aufgebaut.",
      features: [
        "M³ Performance Training – 1:1 Personal Coaching",
        "M³ Schmerzfrei – Mobilität & Gelenkentlastung",
        "Coaching für Zwei – Gemeinsam mit System trainieren",
        "Sinnvolle Belastungssteuerung für jedes Level",
      ],
      link: "/movement",
      btnText: "M² Movement vertiefen",
      badgeColor: "bg-emerald-600/10 text-emerald-700 border-emerald-600/30",
    },
    m3: {
      tag: "M³ · MENTAL PERFORMANCE",
      headline: "Dranbleiben. Aus Disziplin wird Routine.",
      quote: "„Mindset allein verändert nichts. Entscheidend ist die dauerhafte Umsetzung im echten Alltag.“",
      text: "Nachhaltige Veränderung scheitert selten am Wissen, sondern an fehlender Struktur im fordernden Alltag. M³ gibt dir Werkzeuge, Schlaf- und Stressstrategien an die Hand, bis du vollkommen eigenständig auf Kurs bleibst.",
      features: [
        "M³ System Start – Die Eingangstür zur Analyse",
        "Stress- & Regenerationsarchitektur",
        "Schlaf-Optimierung & mentale Routinen",
        "Selbstständigkeit statt Coach-Abhängigkeit",
      ],
      link: "/mental-performance",
      btnText: "M³ Mental Performance vertiefen",
      badgeColor: "bg-indigo-600/10 text-indigo-700 border-indigo-600/30",
    },
  };

  const current = pillars[activeTab];

  return (
    <div className="rounded-3xl border border-border bg-card p-6 md:p-10 shadow-[var(--shadow-card)]">
      {/* Tab Switchers */}
      <div className="grid grid-cols-3 gap-2 md:gap-3 p-1.5 rounded-2xl bg-secondary/60 border border-border mb-8">
        {(["m1", "m2", "m3"] as const).map((key) => (
          <button
            key={key}
            type="button"
            onClick={() => setActiveTab(key)}
            className={`py-3 px-2 md:px-4 rounded-xl font-display font-bold text-sm md:text-base transition-all text-center flex flex-col md:flex-row items-center justify-center gap-1.5 md:gap-2 cursor-pointer ${
              activeTab === key
                ? "bg-card text-foreground shadow-sm border border-border/80"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <span className="text-gold font-mono uppercase text-xs">
              {key.toUpperCase()}
            </span>
            <span className="truncate">
              {key === "m1" ? "Metabolism" : key === "m2" ? "Movement" : "Mental"}
            </span>
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="grid lg:grid-cols-12 gap-8 items-center animate-float-up" key={activeTab}>
        <div className="lg:col-span-7 space-y-4">
          <div className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-wider border ${current.badgeColor}`}>
            {current.tag}
          </div>
          <h3 className="text-2xl md:text-4xl font-display font-extrabold tracking-tight text-foreground">
            {current.headline}
          </h3>
          <p className="text-base text-gold font-medium italic border-l-2 border-gold pl-4 py-1">
            {current.quote}
          </p>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            {current.text}
          </p>
          <div className="pt-3">
            <Link
              to={current.link}
              className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-6 py-3 text-sm font-bold text-primary-foreground shadow-[var(--shadow-gold)] hover:opacity-95 hover:scale-[1.02] transition-all"
            >
              <span>{current.btnText}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5 rounded-2xl bg-secondary/40 border border-border p-6 md:p-8 space-y-4">
          <h4 className="font-display font-bold text-xs uppercase tracking-widest text-muted-foreground">
            Zentrale Bausteine in dieser Säule
          </h4>
          <ul className="space-y-3">
            {current.features.map((feat, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-foreground/90 leading-snug">
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------
// FAQ Accordion Item
// ----------------------------------------------------
function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border/80 bg-card rounded-2xl overflow-hidden transition-all duration-200 hover:border-gold/40">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between p-6 text-left font-display font-bold text-lg md:text-xl hover:text-gold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold cursor-pointer"
      >
        <span className="pr-4">{q}</span>
        <ChevronDown
          className={`w-5 h-5 text-gold shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <div className="px-6 pb-6 pt-1 text-sm md:text-base text-muted-foreground leading-relaxed border-t border-border/40 bg-secondary/15 animate-float-up">
          {a}
        </div>
      )}
    </div>
  );
}

// ----------------------------------------------------
// MAIN INDEX COMPONENT
// ----------------------------------------------------
function IndexPage() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-gold/20 selection:text-foreground">
      <Header />

      {/* ---------------------------------------------------- */}
      {/* 1. HERO SECTION (Brand-DNA & Golden Circle Hierarchy) */}
      {/* ---------------------------------------------------- */}
      <section id="top" className="relative hero-bg overflow-hidden border-b border-border/70 pt-10 md:pt-16 pb-0">
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-gold/8 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-5 md:px-6 flex flex-col">
          <div className="max-w-4xl mx-auto text-center animate-float-up space-y-6">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-card/80 backdrop-blur px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gold font-bold shadow-sm">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              M³ Systemische Performance & Gesundheit
            </div>

            {/* Main Headline Hierarchy */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold leading-[1.02] tracking-tight text-foreground">
              Leistung beginnt mit <span className="text-gold">Gesundheit.</span>
            </h1>

            {/* Emotional Subclaim */}
            <p className="text-xl md:text-3xl font-display font-bold text-foreground/90 tracking-tight">
              Mehr Energie. Mehr Leistung. Mehr Leben.
            </p>

            {/* Value Proposition */}
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Gesundheit nicht dem Zufall überlassen. Das eigene Leben aktiv gestalten.
              M³ verbindet Stoffwechsel (<span className="text-foreground font-semibold">M¹</span>), intelligentes Training (<span className="text-foreground font-semibold">M²</span>) und mentale Routinen (<span className="text-foreground font-semibold">M³</span>) zu einem System, das wirklich zu deinem Alltag passt.
            </p>

            {/* Dual Actions */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-8 py-4 text-sm md:text-base font-bold text-primary-foreground shadow-[var(--shadow-gold)] hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Erst verstehen. Dann entscheiden. ➔ Orientierungsgespräch
              </a>
              <Link
                to="/"
                hash="system-kompass"
                className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/90 px-8 py-4 text-sm md:text-base font-semibold text-foreground hover:bg-secondary transition-all shadow-sm"
              >
                <Compass className="w-4 h-4 text-gold" />
                System-Kompass starten
              </Link>
            </div>

            {/* Trust Anchors */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              <span>✓ Verstehen vor Verändern</span>
              <span className="hidden sm:inline">·</span>
              <span>✓ Individuell statt Stange</span>
              <span className="hidden sm:inline">·</span>
              <span>✓ Ziel: Selbstständigkeit</span>
            </div>
          </div>

          {/* Hero Avatar Michél Meier */}
          <div className="mt-8 md:mt-10 flex justify-center relative">
            <div className="relative">
              <img
                src={avatar}
                alt="Michél Meier – Gründer & Coach M³ Performance"
                className="avatar-shadow h-[62vh] sm:h-[72vh] md:h-[80vh] max-h-[820px] w-auto object-contain object-bottom select-none pointer-events-none animate-float-up"
              />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[450px] h-20 bg-gold/20 blur-3xl rounded-full pointer-events-none" />

              {/* Floating Credential Badge */}
              <div className="absolute bottom-6 left-4 md:-left-8 bg-card/90 backdrop-blur-md border border-border/80 rounded-2xl p-3.5 shadow-lg flex items-center gap-3 animate-float-up">
                <div className="w-10 h-10 rounded-xl bg-gold-gradient text-primary-foreground flex items-center justify-center font-display font-bold text-sm">
                  M³
                </div>
                <div>
                  <div className="font-display font-bold text-sm text-foreground">Michél Meier</div>
                  <div className="text-[11px] text-muted-foreground">Breakdance-Weltmeister & Gesundheitscoach</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 2. EDUTAINMENT INTERACTION: M³ System-Kompass */}
      {/* ---------------------------------------------------- */}
      <section id="system-kompass" className="py-16 md:py-24 border-b border-border/70 bg-secondary/25">
        <div className="max-w-5xl mx-auto px-5 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold block">
              M³ System Start
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight">
              Nicht irgendein Angebot.<br className="hidden md:inline" /> Deine Eingangstür.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Du musst nicht vorher wissen, ob du Darmbegleitung, Personal Training oder Ernährungsberatung brauchst. Der <strong>M³ System Start</strong> schafft Klarheit, analysiert deine Ausgangslage und baut deinen individuellen Fahrplan.
            </p>
          </div>

          {/* Interactive Diagnostic Tool */}
          <SystemStartKompass />
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 3. PHILOSOPHIE: Verstehen vor Verändern */}
      {/* ---------------------------------------------------- */}
      <section id="philosophie" className="py-16 md:py-24 border-b border-border/70 bg-card">
        <div className="max-w-5xl mx-auto px-5 md:px-6">
          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-5 space-y-4 text-left">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold block">
                Die M³ Philosophie
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight leading-tight">
                Warum viele scheitern –<br className="hidden md:inline" /> und was M³ anders macht.
              </h2>
              <p className="text-base text-gold font-medium italic">
                „Wer seinen Körper besser versteht, trifft dauerhaft bessere Entscheidungen.“
              </p>
            </div>

            <div className="md:col-span-7 space-y-4 text-base text-muted-foreground leading-relaxed">
              <p>
                Viele Menschen investieren viel Disziplin in harte Trainingspläne oder radikale Diäten. Und trotzdem bleiben echte Energie, Schmerzfreiheit oder langfristige Fortschritte aus.
              </p>
              <p className="font-semibold text-foreground">
                Nicht, weil sie sich zu wenig anstrengen – sondern weil die biochemischen und mentalen Grundlagen übersehen werden.
              </p>
              <div className="rounded-2xl bg-secondary/50 border border-border p-5 space-y-3">
                <div className="text-xs uppercase tracking-wider font-bold text-foreground">
                  Unsere Leitprinzipien:
                </div>
                <div className="text-sm font-medium text-foreground">
                  • <strong>Struktur statt Chaos.</strong>
                </div>
                <div className="text-sm font-medium text-foreground">
                  • <strong>Technik vor Gewicht.</strong>
                </div>
                <div className="text-sm font-medium text-foreground">
                  • <strong>Ergebnis statt Zufall.</strong>
                </div>
                <div className="text-xs text-muted-foreground pt-2 border-t border-border/60 italic">
                  „Verständnis, wenn Verständnis gebraucht wird. Arschtritt, wenn Arschtritt gebraucht wird.“
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 4. DAS M³ SYSTEM: Die 3 Säulen Explorer */}
      {/* ---------------------------------------------------- */}
      <section id="system" className="py-16 md:py-24 border-b border-border/70 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-5 md:px-6 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold block">
              Ganzheitliche Architektur
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight">
              Drei Säulen. Ein nahtloses System.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Gesundheit ist kein isolierter Muskel. Stoffwechsel, Bewegung und Gewohnheiten beeinflussen sich gegenseitig.
            </p>
          </div>

          <PillarTriadExplorer />
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 5. FÜR WEN IST M³? (Resonanz statt generischer Kachelflut) */}
      {/* ---------------------------------------------------- */}
      <section id="zielgruppen" className="py-16 md:py-24 border-b border-border/70 bg-card">
        <div className="max-w-6xl mx-auto px-5 md:px-6 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold block">
              Zielgruppen & Passgenauigkeit
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight">
              Du willst etwas verändern – weißt aber nicht, an welcher Stellschraube du zuerst drehen sollst?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Wir arbeiten mit Menschen, die echte Eigenverantwortung schätzen und bereit für nachhaltige Veränderung sind.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Primäre Zielgruppe: Ideal Match */}
            <div className="rounded-3xl border-2 border-gold/40 bg-gradient-to-br from-gold/10 via-card to-card p-8 md:p-10 flex flex-col justify-between shadow-sm">
              <div className="space-y-5">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold">
                  <CheckCircle2 className="w-4 h-4" />
                  Für wen M³ perfekt ist
                </div>
                <h3 className="font-display font-bold text-2xl md:text-3xl text-foreground">
                  „Ich will etwas verändern – brauche aber Orientierung und ein klares System.“
                </h3>
                <ul className="space-y-3 text-sm md:text-base text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <span><strong>Wenig Energie & Stoffwechsel-Chaos:</strong> Du fühlst dich oft antriebslos, aufgebläht oder unrund.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <span><strong>Körperliche Beschwerden:</strong> Schmerzen schränken deinen Alltag oder dein Training ein.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <span><strong>Wenig Zeit im Alltag:</strong> Beruf und Familie erfordern Lösungen, die realistisch umsetzbar sind.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <span><strong>Wunsch nach Autonomie:</strong> Du willst verstehen, was dir guttut, statt ewig vom Coach abzuhängen.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gold-gradient py-3.5 px-6 font-bold text-sm text-primary-foreground shadow-[var(--shadow-gold)] hover:opacity-95 transition"
                >
                  Unverbindlich prüfen lassen
                </a>
              </div>
            </div>

            {/* Wer NICHT zu M³ passt */}
            <div className="rounded-3xl border border-border bg-secondary/30 p-8 md:p-10 flex flex-col justify-between">
              <div className="space-y-5">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  <X className="w-4 h-4 text-destructive" />
                  Wer NICHT zu M³ passt
                </div>
                <h3 className="font-display font-bold text-2xl md:text-3xl text-foreground">
                  Ehrlichkeit vor Verkauf: M³ verlangt Mitarbeit.
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Wir verkaufen dir keine Wunderpillen und kein Fitness-Influencer-Gehabe. Wenn du nach folgenden Dingen suchst, sind wir der falsche Partner:
                </p>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <X className="w-4 h-4 text-destructive shrink-0 mt-1" />
                    <span>Schnelle 14-Tage-Crash-Diäten ohne Bereitschaft zu echten Gewohnheitsänderungen.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="w-4 h-4 text-destructive shrink-0 mt-1" />
                    <span>Reines Konsumieren von Information ohne eigene Umsetzung und Verantwortung.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="w-4 h-4 text-destructive shrink-0 mt-1" />
                    <span>Erwartung permanenter Fremdsteuerung, ohne den Wunsch nach Selbstständigkeit.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8 border-t border-border/80 space-y-2">
                <p className="text-sm font-bold text-foreground">
                  „Ich mache mich absichtlich überflüssig.“
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Du lernst das System, bis du deinen Körper selbst steuerst — ein Leben lang. Der Coach kann begleiten, korrigieren und antreiben. Gehen muss der Kunde selbst.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 6. ABLAUF: So arbeiten wir zusammen (Timeline) */}
      {/* ---------------------------------------------------- */}
      <section id="so-arbeiten-wir" className="py-16 md:py-24 border-b border-border/70 bg-secondary/20">
        <div className="max-w-6xl mx-auto px-5 md:px-6 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold block">
              Der 5-Stufen-Prozess
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight">
              So arbeiten wir zusammen
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Struktur statt Zufall: Von der ersten Analyse bis zur gefestigten Routine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {[
              { step: "01", title: "Kennenlernen", desc: "Unverbindliches Gespräch über deine Situation, Ziele und Erwartungen." },
              { step: "02", title: "Analyse", desc: "Ganzheitliche Bestandsaufnahme von Stoffwechsel, Bewegung und Alltag." },
              { step: "03", title: "Strategie", desc: "Dein maßgeschneiderter Fahrplan mit klaren Prioritäten." },
              { step: "04", title: "Begleitung", desc: "Schritt-für-Schritt Umsetzung mit engmaschiger Korrektur." },
              { step: "05", title: "Routine", desc: "Verstetigung der Gewohnheiten bis zur vollständigen Selbstständigkeit." },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-border bg-card p-6 flex flex-col justify-between hover:border-gold/50 shadow-sm transition-all hover:translate-y-[-2px]"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-gold-gradient text-primary-foreground flex items-center justify-center font-display font-bold text-sm mb-4 shadow-[var(--shadow-gold)]">
                    {item.step}
                  </div>
                  <h3 className="font-display font-bold text-lg text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 7. ALLE LEISTUNGEN IM ÜBERBLICK (Kategorisiert nach M1, M2, M3) */}
      {/* ---------------------------------------------------- */}
      <section id="leistungen" className="py-16 md:py-24 border-b border-border/70 bg-card">
        <div className="max-w-7xl mx-auto px-5 md:px-6 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold block">
              Die Bausteine
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight">
              Deine Möglichkeiten mit M³
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Alle Angebote greifen modular ineinander oder können gezielt als Einzellösung genutzt werden.
            </p>
            <div className="pt-2 flex justify-center">
              <a
                href="https://wa.me/c/4917699016640"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/5 px-6 py-2.5 text-xs sm:text-sm font-bold text-gold hover:bg-gold/10 transition shadow-sm hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>M³ WhatsApp-Katalog öffnen</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* KATEGORIE 1: M1 METABOLISM */}
          <div className="rounded-3xl border border-border bg-secondary/20 p-6 md:p-10 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border/70 pb-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-primary/10 text-primary flex items-center justify-center border border-primary/25 font-display font-bold text-sm shrink-0">
                  M¹
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-2xl text-foreground">
                    Metabolism
                  </h3>
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider">
                    Die Basis schaffen · Gesundheit von innen
                  </p>
                </div>
              </div>
              <Link
                to="/metabolism"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:opacity-80 transition self-start sm:self-auto"
              >
                <span>Alle M¹ Details ansehen</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {services
                .filter((s) => s.pillar === "M1")
                .map((s, idx) => (
                  <div
                    key={idx}
                    className={`rounded-2xl border p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 ${
                      s.badge
                        ? "border-gold/60 bg-gradient-to-br from-gold/10 via-card to-card shadow-[var(--shadow-gold)]"
                        : "border-border bg-card hover:border-primary/50 shadow-sm hover:shadow-md"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-primary">
                          {s.pillar} · {s.pillarName}
                        </span>
                        {s.badge && (
                          <span className="rounded-full bg-gold-gradient px-2.5 py-0.5 text-[10px] font-bold text-primary-foreground uppercase tracking-wider">
                            {s.badge}
                          </span>
                        )}
                      </div>

                      <h4 className="font-display font-bold text-xl text-foreground mb-1">
                        {s.name}
                      </h4>
                      <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3 font-semibold">
                        {s.tagline}
                      </p>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                        {s.desc}
                      </p>

                      <ul className="space-y-2 mb-6 border-t border-border/60 pt-4">
                        {s.features.map((f, fIdx) => (
                          <li key={fIdx} className="flex items-center gap-2 text-xs text-foreground/90 font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col gap-2 pt-2 mt-auto">
                      <Link
                        to={s.route}
                        className="w-full inline-flex items-center justify-center rounded-full border border-border px-4 py-2.5 text-xs font-bold text-foreground hover:bg-secondary transition"
                      >
                        Details ansehen
                      </Link>
                      <a
                        href={`${BASE_WHATSAPP}?text=${encodeURIComponent(s.whatsappMessage)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-1.5 rounded-full bg-secondary hover:bg-secondary/80 px-4 py-2.5 text-xs font-bold text-foreground transition"
                      >
                        <MessageCircle className="w-3.5 h-3.5 text-primary" />
                        WhatsApp Anfrage
                      </a>
                    </div>
                  </div>
                ))}
            </div>

            {/* Integrierte Kernbausteine Infoleiste */}
            <div className="max-w-4xl mx-auto rounded-2xl border border-primary/20 bg-card/60 p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="space-y-1">
                <div className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
                  <span>💡</span> Integrierte Kernbausteine im Body Reset
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Die <strong>Darm- & Stoffwechselbegleitung</strong> sowie die <strong>Goldene Grundversorgung</strong> sind feste Kernbausteine des Body Resets – können bei Bedarf aber auch einzeln vertieft werden.
                </p>
              </div>
              <div className="flex items-center gap-3 shrink-0 pt-1 sm:pt-0">
                <Link
                  to="/darm-stoffwechselbegleitung"
                  className="text-xs font-bold text-primary hover:underline underline-offset-4"
                >
                  Darmbegleitung →
                </Link>
                <span className="text-border">|</span>
                <Link
                  to="/goldene-grundversorgung"
                  className="text-xs font-bold text-primary hover:underline underline-offset-4"
                >
                  Grundversorgung →
                </Link>
              </div>
            </div>
          </div>

          {/* KATEGORIE 2: M2 MOVEMENT */}
          <div className="rounded-3xl border border-border bg-secondary/20 p-6 md:p-10 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border/70 pb-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-600/10 text-emerald-700 flex items-center justify-center border border-emerald-600/25 font-display font-bold text-sm shrink-0">
                  M²
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-2xl text-foreground">
                    Movement
                  </h3>
                  <p className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">
                    In Bewegung kommen · Leistungsfähig & Schmerzfrei
                  </p>
                </div>
              </div>
              <Link
                to="/movement"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:opacity-80 transition self-start sm:self-auto"
              >
                <span>Alle M² Details ansehen</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {services
                .filter((s) => s.pillar === "M2")
                .map((s, idx) => (
                  <div
                    key={idx}
                    className={`rounded-2xl border p-6 flex flex-col justify-between transition-all duration-200 ${
                      s.badge
                        ? "border-gold/60 bg-gradient-to-br from-gold/10 via-card to-card shadow-[var(--shadow-gold)]"
                        : "border-border bg-card hover:border-emerald-600/50 shadow-sm hover:shadow-md"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-700">
                          {s.pillar} · {s.pillarName}
                        </span>
                        {s.badge && (
                          <span className="rounded-full bg-gold-gradient px-2.5 py-0.5 text-[10px] font-bold text-primary-foreground uppercase tracking-wider">
                            {s.badge}
                          </span>
                        )}
                      </div>

                      <h4 className="font-display font-bold text-lg text-foreground mb-1">
                        {s.name}
                      </h4>
                      <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3 font-semibold">
                        {s.tagline}
                      </p>
                      <p className="text-xs text-muted-foreground leading-relaxed mb-6">
                        {s.desc}
                      </p>

                      <ul className="space-y-2 mb-6 border-t border-border/60 pt-4">
                        {s.features.map((f, fIdx) => (
                          <li key={fIdx} className="flex items-center gap-2 text-xs text-foreground/90 font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col gap-2 pt-2 mt-auto">
                      <Link
                        to={s.route}
                        className="w-full inline-flex items-center justify-center rounded-full border border-border px-4 py-2.5 text-xs font-bold text-foreground hover:bg-secondary transition"
                      >
                        Details ansehen
                      </Link>
                      <a
                        href={`${BASE_WHATSAPP}?text=${encodeURIComponent(s.whatsappMessage)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-1.5 rounded-full bg-secondary hover:bg-secondary/80 px-4 py-2.5 text-xs font-bold text-foreground transition"
                      >
                        <MessageCircle className="w-3.5 h-3.5 text-emerald-700" />
                        WhatsApp Anfrage
                      </a>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* KATEGORIE 3: M3 MENTAL PERFORMANCE & SYSTEM */}
          <div className="rounded-3xl border border-border bg-secondary/20 p-6 md:p-10 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border/70 pb-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-indigo-600/10 text-indigo-700 flex items-center justify-center border border-indigo-600/25 font-display font-bold text-sm shrink-0">
                  M³
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-2xl text-foreground">
                    Mental Performance & System
                  </h3>
                  <p className="text-xs font-semibold text-indigo-700 uppercase tracking-wider">
                    Dranbleiben · Veränderung im Alltag verankern
                  </p>
                </div>
              </div>
              <Link
                to="/mental-performance"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-700 hover:opacity-80 transition self-start sm:self-auto"
              >
                <span>Alle M³ Details ansehen</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {services
                .filter((s) => s.pillar === "M3")
                .map((s, idx) => (
                  <div
                    key={idx}
                    className={`rounded-2xl border p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 ${
                      s.badge
                        ? "border-gold/60 bg-gradient-to-br from-gold/10 via-card to-card shadow-[var(--shadow-gold)]"
                        : "border-border bg-card hover:border-indigo-600/50 shadow-sm hover:shadow-md"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-indigo-700">
                          {s.pillar} · {s.pillarName}
                        </span>
                        {s.badge && (
                          <span className="rounded-full bg-gold-gradient px-2.5 py-0.5 text-[10px] font-bold text-primary-foreground uppercase tracking-wider">
                            {s.badge}
                          </span>
                        )}
                      </div>

                      <h4 className="font-display font-bold text-xl text-foreground mb-1">
                        {s.name}
                      </h4>
                      <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3 font-semibold">
                        {s.tagline}
                      </p>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                        {s.desc}
                      </p>

                      <ul className="space-y-2 mb-6 border-t border-border/60 pt-4">
                        {s.features.map((f, fIdx) => (
                          <li key={fIdx} className="flex items-center gap-2 text-xs text-foreground/90 font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 shrink-0" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col gap-2 pt-2 mt-auto">
                      <Link
                        to={s.route}
                        className="w-full inline-flex items-center justify-center rounded-full border border-border px-4 py-2.5 text-xs font-bold text-foreground hover:bg-secondary transition"
                      >
                        Details ansehen
                      </Link>
                      <a
                        href={`${BASE_WHATSAPP}?text=${encodeURIComponent(s.whatsappMessage)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-1.5 rounded-full bg-secondary hover:bg-secondary/80 px-4 py-2.5 text-xs font-bold text-foreground transition"
                      >
                        <MessageCircle className="w-3.5 h-3.5 text-indigo-700" />
                        WhatsApp Anfrage
                      </a>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 8. ÜBER MICHÉL: Story & High-Trust Video Facade */}
      {/* ---------------------------------------------------- */}
      <section id="ueber" className="py-16 md:py-24 border-b border-border/70 bg-secondary/25">
        <div className="max-w-6xl mx-auto px-5 md:px-6">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold block">
                  Die Geschichte hinter M³
                </span>
                <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight">
                  Hinter M³ steckt mehr als Training.
                </h2>
              </div>

              <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                <p className="text-foreground font-semibold">
                  Als Breakdance-Weltmeister durfte ich erleben, wozu der menschliche Körper fähig ist.
                </p>
                <p>
                  Gleichzeitig haben mich schwere Verletzungen, Rückschläge und intensive Auseinandersetzungen mit Biochemie, Stoffwechsel und mentalen Blockaden gelehrt: Echte Höchstleistung bricht sofort zusammen, wenn das Fundament nicht stimmt.
                </p>
                <p>
                  Heute verbinde ich diese Erfahrung mit systemischem Gesundheitscoaching. Nicht, um dir das nächste Extrem aufzuzwingen – sondern um dir die Werkzeuge zu geben, mit denen du dein Leben dauerhaft meisterst.
                </p>
                <p className="text-gold font-medium italic border-l-2 border-gold pl-4 py-1">
                  „Manchmal braucht es Verständnis. Manchmal einen Arschtritt. Oft beides.“
                </p>
              </div>

              <div className="pt-2 flex items-center gap-4">
                <Link
                  to="/ueber-mich"
                  className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-[var(--shadow-gold)] hover:opacity-95 transition"
                >
                  Meine ganze Story lesen
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Video Facade (Privacy Friendly & Fast Loading) */}
            <div className="lg:col-span-6">
              <div className="aspect-video rounded-3xl bg-card border border-border overflow-hidden shadow-xl relative group">
                {videoLoaded ? (
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube-nocookie.com/embed/dQrADZQ1d5I?autoplay=1"
                    title="M³ Performance & Gesundheit – Michél Meier"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div
                    onClick={() => setVideoLoaded(true)}
                    className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-card via-secondary to-card p-6 cursor-pointer text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-gold-gradient text-primary-foreground flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform mb-4">
                      <Play className="w-6 h-6 ml-1 fill-current" />
                    </div>
                    <h4 className="font-display font-bold text-lg text-foreground">
                      M³ Performance Video ansehen
                    </h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      Klicken zum Laden (Datenschutzfreundlich via YouTube-NoCookie)
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 9. DIE 5 M³-WERTE: Fundament des Coachings */}
      {/* ---------------------------------------------------- */}
      <section className="py-16 md:py-24 border-b border-border/70 bg-card">
        <div className="max-w-6xl mx-auto px-5 md:px-6 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold block">
              Die M³ Werte
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight">
              Darauf kannst du dich verlassen
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Fünf unverrückbare Prinzipien, nach denen jede Begleitung ausgerichtet ist.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              {
                title: "Eigenverantwortung",
                desc: "Wir begleiten dich eng – aber nehmen dir deine Verantwortung nicht ab.",
              },
              {
                title: "Ehrlichkeit",
                desc: "Wir sprechen Dinge direkt an – auch dann, wenn es einmal unbequem ist.",
              },
              {
                title: "Authentizität",
                desc: "Kein aufgesetztes Gehabe. Wir bleiben menschlich, pragmatisch und echt.",
              },
              {
                title: "Menschlichkeit",
                desc: "Vor dem Problem steht der Mensch mit all seinen Alltagshürden.",
              },
              {
                title: "Qualität",
                desc: "Wir empfehlen nur Maßnahmen, die einem fundierten Anspruch genügen.",
              },
            ].map((v, i) => (
              <div key={i} className="rounded-2xl border border-border bg-secondary/30 p-6 flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-full bg-gold/15 text-gold flex items-center justify-center font-display font-bold text-xs mb-4">
                    0{i + 1}
                  </div>
                  <h3 className="font-display font-bold text-base text-foreground mb-2">
                    {v.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 10. FAQ SECTION: Häufige Fragen */}
      {/* ---------------------------------------------------- */}
      <section id="faq" className="py-16 md:py-24 border-b border-border/70 bg-secondary/20">
        <div className="max-w-4xl mx-auto px-5 md:px-6 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold block">
              Klarheit vorab
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight">
              Häufige Fragen
            </h2>
            <p className="text-base text-muted-foreground">
              Transparenz ab dem ersten Tag: Hier findest du Antworten auf die wichtigsten Fragen.
            </p>
          </div>

          <div className="space-y-3">
            <FAQItem
              q="Muss ich bereits fit sein, um mit M³ zu starten?"
              a="Nein, absolut nicht. Ganz im Gegenteil: M³ holt dich exakt dort ab, wo du heute stehst. Egal ob nach langer Pause, mit Übergewicht, Schmerzen oder als Sportler mit Leistungsambitionen."
            />
            <FAQItem
              q="Wie läuft das kostenlose Erstgespräch ab?"
              a="In rund 20 Minuten per Telefon oder Video sprechen wir über deine aktuellen Hürden, deinen Alltag und deine Ziele. Wir prüfen ehrlich, ob M³ der richtige Hebel für dich ist. Danach erhältst du eine erste Einschätzung – völlig unverbindlich."
            />
            <FAQItem
              q="Kann die Betreuung auch komplett online stattfinden?"
              a="Ja. Stoffwechselanalysen, Ernährungsbegleitung und mentale Routinen lassen sich ortsunabhängig digital durchführen. Beim Personal Training kombinieren wir je nach Wohnort Präsenz-Sessions mit digitaler Begleitung."
            />
            <FAQItem
              q="Was unterscheidet M³ von klassischem Personal Training?"
              a="Klassische Trainer lassen dich schwitzen und schicken dich nach 60 Minuten heim. M³ betrachtet das Gesamtsystem: Wenn dein Darm rebelliert oder du vor Stress nicht schläfst, verpufft jedes Training. Wir lösen die Ursachen, nicht die Symptome."
            />
            <FAQItem
              q="Muss ich Nahrungsergänzungsmittel einnehmen?"
              a="Nein. Die Basis sind immer echte Nahrung, Bewegung und Regeneration. Falls eine gezielte Mikronährstoff-Optimierung sinnvoll ist, besprechen wir das transparent und wissenschaftlich fundiert."
            />
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 11. FINAL HIGH-CONVERTING CTA */}
      {/* ---------------------------------------------------- */}
      <section id="kontakt" className="py-20 md:py-28 bg-card relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gold/10 blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-5 md:px-6 text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold block">
            Dein nächster Schritt
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-extrabold tracking-tight">
            Bereit, deine Gesundheit <span className="text-gold">neu zu strukturieren?</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Veränderung beginnt mit einer Entscheidung. Lass uns im persönlichen Gespräch herausfinden, welcher Weg wirklich zu deinem Leben passt.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gold-gradient px-8 py-4 text-base font-bold text-primary-foreground shadow-[var(--shadow-gold)] hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              Kostenloses Erstgespräch anfragen
            </a>
            <Link
              to="/system-start"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-border px-8 py-4 text-base font-semibold hover:bg-secondary transition"
            >
              Mehr über den M³ System Start
            </Link>
          </div>

          <p className="text-xs text-muted-foreground uppercase tracking-widest pt-2">
            Unverbindlich · 20 Minuten Orientierung · Direkt mit Michél
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
