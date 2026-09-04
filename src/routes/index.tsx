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
  HeartPulse,
  TrendingUp,
  UserCheck,
  Zap,
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
  image: string;
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
    image: "/images/performance/hero-body-reset.jpg",
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
    image: "/images/performance/hero-nutrition.jpg",
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
    image: "/images/performance/hero-performance-training.jpg",
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
    image: "/images/performance/hero-schmerzfrei.jpg",
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
    image: "/images/performance/hero-coaching-zwei.jpg",
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
    image: "/images/performance/hero-system-start.jpg",
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
    image: "/images/performance/m3-neural-blueprint.jpg",
  },
];

interface HeroTestimonial {
  name: string;
  initials: string;
  role: string;
  pillar: string;
  badgeClass: string;
  quote: string;
  result: string;
}

const HERO_TESTIMONIALS: HeroTestimonial[] = [
  {
    name: "Dr. Christian B.",
    initials: "CB",
    role: "Unternehmer (44 J.)",
    pillar: "M¹ Stoffwechsel & M³ Mindset",
    badgeClass: "bg-primary/10 text-primary border-primary/25",
    quote: "Nach 12 Wochen M³ habe ich meine Nachmittagstiefs komplett eliminiert. Michél versteht es, Gesundheit in einen 60-Stunden-Alltag einzubauen, ohne dass man das Gefühl hat, auf etwas zu verzichten.",
    result: "+40% Fokus & Vitalität",
  },
  {
    name: "Sandra M.",
    initials: "SM",
    role: "Projektleiterin & Mutter (38 J.)",
    pillar: "M² Movement & Personal Training",
    badgeClass: "bg-emerald-600/10 text-emerald-700 border-emerald-600/25",
    quote: "Endlich schmerzfrei im unteren Rücken nach jahrelangem Schreibtischsitzen. Das Training mit Michél ist kein stupides Gewichte stemmen, sondern echtes anatomisches Verstehen.",
    result: "100% Schmerzfrei",
  },
  {
    name: "Marcus V.",
    initials: "MV",
    role: "Geschäftsführer & Läufer (51 J.)",
    pillar: "M³ System Start & Performance",
    badgeClass: "bg-indigo-600/10 text-indigo-700 border-indigo-600/25",
    quote: "Michél hat mir gezeigt: Wenn das Fundament brennt, nützt kein härteres Training. Erst haben wir Schlaf & Darm geregelt, dann explodierten meine Laufzeiten.",
    result: "Halbmarathon-PB",
  },
  {
    name: "Elena & Jan K.",
    initials: "EK",
    role: "Coaching für Zwei (35 & 39 J.)",
    pillar: "M¹ Ernährung & M² Training",
    badgeClass: "bg-primary/10 text-primary border-primary/25",
    quote: "Gemeinsam als Paar gesunde Routinen zu etablieren war der Gamechanger. Michél holt beide auf ihrem Niveau ab — mit Humor, Fachwissen und klaren Leitplanken.",
    result: "-14 kg Gemeinsam",
  },
  {
    name: "Stefan W.",
    initials: "SW",
    role: "Vertriebsleiter (47 J.)",
    pillar: "M¹ Body Reset & Begleitung",
    badgeClass: "bg-emerald-600/10 text-emerald-700 border-emerald-600/25",
    quote: "Der M³ Body Reset hat meine Verdauung und mein Energielevel von Grund auf transformiert. Michéls Betreuung ist direkt, wissenschaftlich fundiert und alltagstauglich.",
    result: "Dauerhafte Energie",
  },
  {
    name: "Julia T.",
    initials: "JT",
    role: "Architektin & Freizeitsportlerin (32 J.)",
    pillar: "M² Biomechanik & Haltung",
    badgeClass: "bg-indigo-600/10 text-indigo-700 border-indigo-600/25",
    quote: "Man merkt in jeder Sekunde seine 25 Jahre Bewegungserfahrung. Er sieht minimale Fehlstellungen sofort und korrigiert sie präzise. Bestes Personal Training!",
    result: "Gelenke stabilisiert",
  },
];

const HERO_TESTIMONIALS_DOUBLED = [...HERO_TESTIMONIALS, ...HERO_TESTIMONIALS];

const HERO_PERFORMANCE_PICTURES = [
  { image: "/images/performance/hero-performance-1.jpg", alt: "Michél Meier – Breakdance World Champion Flying Freeze" },
  { image: "/images/performance/hero-performance-2.jpg", alt: "Michél Meier – Headstand Freeze Studio" },
  { image: "/images/performance/hero-performance-5.jpg", alt: "Michél Meier – OBEY Cap Elbow Lever Freeze" },
  { image: "/images/performance/hero-performance-3.jpg", alt: "Michél Meier – Urban Street Balance Freeze" },
  { image: "/images/performance/hero-performance-4.jpg", alt: "Michél Meier – Rooftop One-Arm Freeze" },
];

const HERO_PERFORMANCE_PICTURES_DOUBLED = [
  ...HERO_PERFORMANCE_PICTURES,
  ...HERO_PERFORMANCE_PICTURES,
  ...HERO_PERFORMANCE_PICTURES,
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
    <div className="relative rounded-3xl border border-border/90 bg-card p-6 md:p-8 shadow-sm overflow-hidden h-full flex flex-col justify-between text-left">
      {/* Header bar of the quiz */}
      <div>
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/70 pb-5 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gold/15 text-gold flex items-center justify-center font-bold">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display text-lg md:text-xl font-bold tracking-tight">
                M³ System-Kompass
              </h3>
              <p className="text-xs text-muted-foreground">
                In 60 Sekunden zu deinem persönlichen Start-Schwerpunkt
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
              Schritt {step}/3
            </span>
            <div className="flex gap-1">
              <span className={`w-5 h-1.5 rounded-full transition-all ${step >= 1 ? "bg-gold" : "bg-border"}`} />
              <span className={`w-5 h-1.5 rounded-full transition-all ${step >= 2 ? "bg-gold" : "bg-border"}`} />
              <span className={`w-5 h-1.5 rounded-full transition-all ${step >= 3 ? "bg-gold" : "bg-border"}`} />
            </div>
          </div>
        </div>

        {/* Step 1: Engpass */}
        {step === 1 && (
          <div className="space-y-4 animate-float-up">
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-gold block">
                Schritt 1 · Standortbestimmung
              </span>
              <h4 className="text-xl md:text-2xl font-display font-extrabold text-foreground">
                Wo spürst du aktuell deine größte Hürde?
              </h4>
            </div>

            <div className="grid grid-cols-1 gap-3 pt-1">
              {engpassOptions.map((opt) => {
                const Icon = opt.icon;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => handleSelectEngpass(opt.id)}
                    className="group text-left rounded-2xl border border-border p-4 hover:border-gold/60 hover:bg-secondary/40 transition-all flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-gold cursor-pointer"
                  >
                    <div className="flex items-start gap-3.5">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${opt.color}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase text-gold block">
                          {opt.pillar}
                        </span>
                        <div className="font-display font-bold text-sm text-foreground">
                          {opt.title}
                        </div>
                        <div className="text-xs text-muted-foreground line-clamp-1">
                          {opt.desc}
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-gold group-hover:translate-x-1 transition-all shrink-0" />
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Step 2: Ziel */}
        {step === 2 && (
          <div className="space-y-4 animate-float-up">
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-gold block">
                Schritt 2 · Zielausrichtung
              </span>
              <h4 className="text-xl md:text-2xl font-display font-extrabold text-foreground">
                Was ist dein wichtigstes Resultat für die nächsten Monate?
              </h4>
            </div>

            <div className="grid grid-cols-1 gap-3 pt-1">
              {zielOptions.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => handleSelectZiel(opt.title)}
                  className="group text-left rounded-2xl border border-border p-4 hover:border-gold/60 hover:bg-secondary/40 transition-all flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-gold cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-gold/10 text-gold flex items-center justify-center font-bold text-xs shrink-0">
                      ✓
                    </div>
                    <div>
                      <div className="font-display font-bold text-sm text-foreground">
                        {opt.title}
                      </div>
                      <div className="text-xs text-muted-foreground line-clamp-1">
                        {opt.desc}
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-gold group-hover:translate-x-1 transition-all shrink-0" />
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

        {/* Step 3: Ergebnis */}
        {step === 3 && (
          <div className="space-y-4 animate-float-up">
            <div className="rounded-2xl bg-gradient-to-br from-gold/15 via-gold/5 to-transparent border border-gold/40 p-5 md:p-6 space-y-4">
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gold-gradient px-3 py-0.5 text-[10px] font-bold text-primary-foreground uppercase tracking-wider">
                  <Sparkles className="w-3 h-3" />
                  Deine M³ Empfehlung
                </span>
                <span className="text-xs font-mono font-bold text-gold">
                  Fokus: {result.pillarCode}
                </span>
              </div>

              <div>
                <h4 className="text-lg md:text-xl font-display font-extrabold text-foreground mb-1">
                  {result.focusTitle}
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {result.focusDesc}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <a
                  href={result.prefilledUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gold-gradient px-6 py-3 font-bold text-xs md:text-sm text-primary-foreground shadow-[var(--shadow-gold)] hover:opacity-95 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  Ergebnis im Erstgespräch besprechen
                </a>
                <button
                  type="button"
                  onClick={resetKompass}
                  className="text-xs font-semibold text-muted-foreground hover:text-foreground underline cursor-pointer"
                >
                  Neu starten
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
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
      image: "/images/performance/m1-vitality-glass.jpg",
      imageCaption: "Zelluläre Vitalstoffversorgung & Mikrobiom-Balance",
      features: [
        "M³ Body Reset – Modulares Konzept für Darm & Stoffwechsel",
        "Ganzheitliche Darm- & Stoffwechselbegleitung",
        "Alltagstaugliches 1:1 Ernährungscoaching ohne Verbote",
        "Goldene Grundversorgung für zelluläre Vitalität",
      ],
      link: "/metabolism",
      btnText: "M¹ Metabolism vertiefen",
      badgeColor: "bg-primary/10 text-primary border-primary/30",
      nodeColor: "border-primary text-primary bg-primary/10 shadow-[0_0_20px_oklch(0.58_0.14_45/0.25)]",
    },
    m2: {
      tag: "M² · MOVEMENT",
      headline: "In Bewegung kommen. Technik vor Gewicht.",
      quote: "„Bewegung schafft Leistungsfähigkeit, Stabilität und Vertrauen in den eigenen Körper.“",
      text: "Weder Drill noch blindes Auspowern: Wir trainieren deinen Körper intelligent, präzise und anatomisch sinnvoll. Schmerzen werden reduziert, Schwachstellen ausgeglichen und echte athletische Belastbarkeit aufgebaut.",
      image: "/images/performance/m2-movement-flow.jpg",
      imageCaption: "Intelligente Biomechanik & explosive Bewegungsqualität",
      features: [
        "M³ Performance Training – 1:1 Personal Coaching",
        "M³ Schmerzfrei – Mobilität & Gelenkentlastung",
        "Coaching für Zwei – Gemeinsam mit System trainieren",
        "Sinnvolle Belastungssteuerung für jedes Level",
      ],
      link: "/movement",
      btnText: "M² Movement vertiefen",
      badgeColor: "bg-emerald-600/10 text-emerald-700 border-emerald-600/30",
      nodeColor: "border-emerald-600 text-emerald-700 bg-emerald-600/10 shadow-[0_0_20px_rgba(5,150,105,0.25)]",
    },
    m3: {
      tag: "M³ · MENTAL PERFORMANCE",
      headline: "Dranbleiben. Aus Disziplin wird Routine.",
      quote: "„Mindset allein verändert nichts. Entscheidend ist die dauerhafte Umsetzung im echten Alltag.“",
      text: "Nachhaltige Veränderung scheitert selten am Wissen, sondern an fehlender Struktur im fordernden Alltag. M³ gibt dir Werkzeuge, Schlaf- und Stressstrategien an die Hand, bis du vollkommen eigenständig auf Kurs bleibst.",
      image: "/images/performance/m3-neural-blueprint.jpg",
      imageCaption: "Mentale Architektur, Schlafqualität & Gewohnheitsverankerung",
      features: [
        "M³ System Start – Die Eingangstür zur Analyse",
        "Stress- & Regenerationsarchitektur",
        "Schlaf-Optimierung & mentale Routinen",
        "Selbstständigkeit statt Coach-Abhängigkeit",
      ],
      link: "/mental-performance",
      btnText: "M³ Mental Performance vertiefen",
      badgeColor: "bg-indigo-600/10 text-indigo-700 border-indigo-600/30",
      nodeColor: "border-indigo-600 text-indigo-700 bg-indigo-600/10 shadow-[0_0_20px_rgba(79,70,229,0.25)]",
    },
  };

  const current = pillars[activeTab] || pillars.m1;

  return (
    <div className="space-y-6">
      {/* Visual Interactive Triad Diagram & Switcher */}
      <div className="rounded-2xl bg-secondary/30 border border-border/70 p-5 md:p-6 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden">
        {/* Interactive SVG Connector Triangle */}
        <div className="relative w-full max-w-[280px] h-[190px] shrink-0 mx-auto select-none">
          <svg className="w-full h-full" viewBox="0 0 320 220" fill="none">
            <path
              d="M 160 35 L 265 175 L 55 175 Z"
              stroke="currentColor"
              className="text-border"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            <path
              d={
                activeTab === "m1"
                  ? "M 160 35 L 265 175 M 160 35 L 55 175"
                  : activeTab === "m2"
                  ? "M 55 175 L 160 35 M 55 175 L 265 175"
                  : "M 265 175 L 160 35 M 265 175 L 55 175"
              }
              stroke={activeTab === "m1" ? "var(--color-primary)" : activeTab === "m2" ? "#059669" : "#4f46e5"}
              strokeWidth="3"
              strokeLinecap="round"
              className="transition-all duration-500"
            />
          </svg>

          {/* Node M1 (Top) */}
          <button
            type="button"
            onClick={() => setActiveTab("m1")}
            className={`absolute top-0 left-1/2 -translate-x-1/2 w-14 h-14 rounded-2xl border-2 flex flex-col items-center justify-center gap-0.5 cursor-pointer transition-all duration-300 ${
              activeTab === "m1" ? current.nodeColor : "border-border bg-card hover:border-primary/60 text-muted-foreground"
            }`}
          >
            <Flame className="w-4 h-4" />
            <span className="font-display font-extrabold text-[11px]">M¹</span>
          </button>

          {/* Node M2 (Bottom-Left) */}
          <button
            type="button"
            onClick={() => setActiveTab("m2")}
            className={`absolute bottom-0 left-2 w-14 h-14 rounded-2xl border-2 flex flex-col items-center justify-center gap-0.5 cursor-pointer transition-all duration-300 ${
              activeTab === "m2" ? current.nodeColor : "border-border bg-card hover:border-emerald-600/60 text-muted-foreground"
            }`}
          >
            <Dumbbell className="w-4 h-4" />
            <span className="font-display font-extrabold text-[11px]">M²</span>
          </button>

          {/* Node M3 (Bottom-Right) */}
          <button
            type="button"
            onClick={() => setActiveTab("m3")}
            className={`absolute bottom-0 right-2 w-14 h-14 rounded-2xl border-2 flex flex-col items-center justify-center gap-0.5 cursor-pointer transition-all duration-300 ${
              activeTab === "m3" ? current.nodeColor : "border-border bg-card hover:border-indigo-600/60 text-muted-foreground"
            }`}
          >
            <Brain className="w-4 h-4" />
            <span className="font-display font-extrabold text-[11px]">M³</span>
          </button>
        </div>

        {/* Dynamic Caption & Switcher */}
        <div className="space-y-3 text-center md:text-left max-w-md">
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider bg-card border border-border">
            <Activity className="w-3.5 h-3.5 text-gold" />
            <span>Interaktives Triaden-Zusammenspiel</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            {activeTab === "m1" && "M¹ liefert die biochemische Grundlage: Ohne gesunden Darm & aktiven Stoffwechsel verpufft jedes Training."}
            {activeTab === "m2" && "M² formt die körperliche Belastbarkeit: Intelligente Bewegung schützt vor Schmerzen und baut echte Kraft auf."}
            {activeTab === "m3" && "M³ verankert die Routinen im Alltag: Stressmanagement und Schlaf sichern die dauerhafte Umsetzung."}
          </p>

          <div className="flex gap-2 pt-1">
            {(["m1", "m2", "m3"] as const).map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => setActiveTab(key)}
                className={`py-1.5 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === key
                    ? "bg-card text-foreground shadow-sm border border-gold/40"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {key.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Details Row */}
      <div className="grid lg:grid-cols-12 gap-6 items-center animate-float-up" key={activeTab}>
        <div className="lg:col-span-7 space-y-3 text-left">
          <div className={`inline-flex items-center gap-1.5 rounded-full px-3 py-0.5 text-xs font-bold uppercase tracking-wider border ${current.badgeColor}`}>
            {current.tag}
          </div>
          <h3 className="text-xl md:text-3xl font-display font-extrabold tracking-tight text-foreground">
            {current.headline}
          </h3>
          <p className="text-xs sm:text-sm text-gold font-medium italic border-l-2 border-gold pl-3 py-0.5">
            {current.quote}
          </p>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            {current.text}
          </p>
          <div className="pt-2">
            <Link
              to={current.link}
              className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-5 py-2.5 text-xs font-bold text-primary-foreground shadow-[var(--shadow-gold)] hover:opacity-95 transition-all"
            >
              <span>{current.btnText}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col gap-3">
          <div className="relative w-full h-40 rounded-2xl overflow-hidden border border-border/80 group shadow-sm bg-black">
            <img
              src={current.image}
              alt={current.headline}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            <div className="absolute bottom-2.5 left-3 right-3 text-[11px] font-semibold text-white drop-shadow flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse shrink-0" />
              <span className="truncate">{current.imageCaption}</span>
            </div>
          </div>

          <div className="rounded-xl bg-secondary/40 border border-border p-3.5 space-y-2">
            <div className="font-display font-bold text-[10px] uppercase tracking-widest text-muted-foreground">
              Zentrale Bausteine
            </div>
            <ul className="space-y-1.5">
              {current.features.map((feat, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-foreground/90 leading-tight">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
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
        className="w-full flex items-center justify-between p-5 sm:p-6 text-left font-display font-bold text-base md:text-lg hover:text-gold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold cursor-pointer"
      >
        <span className="pr-4">{q}</span>
        <ChevronDown
          className={`w-5 h-5 text-gold shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1 text-xs sm:text-sm text-muted-foreground leading-relaxed border-t border-border/40 bg-secondary/15 animate-float-up">
          {a}
        </div>
      )}
    </div>
  );
}

// ----------------------------------------------------
// MAIN INDEX PAGE COMPONENT
// ----------------------------------------------------
function IndexPage() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-gold/20 selection:text-foreground">
      <Header />

      {/* ---------------------------------------------------- */}
      {/* 1. HERO SECTION (Identity & Authority Bento + Infinity Performance Carousel) */}
      {/* ---------------------------------------------------- */}
      <section id="top" className="relative hero-bg overflow-hidden border-b border-border/70 min-h-[calc(100dvh-4.5rem)] lg:h-[calc(100dvh-4.5rem)] flex flex-col justify-between pt-3 sm:pt-4 md:pt-6 pb-0">
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-amber-500/10 blur-3xl" />
        </div>

        {/* Main Content Area */}
        <div className="relative max-w-7xl mx-auto px-5 md:px-6 w-full flex-grow flex items-end">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-end w-full pt-2 md:pt-4 pb-0">
            {/* Left Column: Clean, punchy text block with prominent authority */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5 pb-4 lg:pb-8 text-left animate-float-up">
              {/* Top Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-3.5 py-1 text-xs uppercase tracking-[0.22em] text-amber-700 font-bold shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>1:1 Coaching & Gesundheitssystem</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] xl:text-[3.8rem] font-display font-extrabold leading-[1.04] tracking-tight text-foreground text-left">
                Leistung beginnt mit <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500">Gesundheit.</span>
              </h1>

              {/* Distilled Value Proposition */}
              <p className="text-base sm:text-lg md:text-xl text-foreground/90 font-medium leading-relaxed text-left max-w-xl">
                Ganzheitliches Personal Training, das Stoffwechsel (<strong className="text-orange-600 font-bold">M¹</strong>), Biomechanik (<strong className="text-emerald-700 font-bold">M²</strong>) und Mindset (<strong className="text-blue-700 font-bold">M³</strong>) vereint – für schmerzfreie Belastbarkeit und echte Zellenergie im Alltag.
              </p>

              {/* Dual Actions */}
              <div className="pt-1 flex flex-wrap items-center gap-3 text-left">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-6 sm:px-8 py-3.5 sm:py-4 text-sm md:text-base font-bold text-primary-foreground shadow-[var(--shadow-gold)] hover:shadow-[var(--shadow-gold-hover)] hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  Kostenloses Erstgespräch
                </a>
                <a
                  href="#system-kompass"
                  className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/90 px-5 sm:px-6 py-3.5 sm:py-4 text-sm md:text-base font-semibold text-foreground hover:bg-secondary transition-all shadow-sm"
                >
                  <Compass className="w-4 h-4 text-amber-600" />
                  System-Kompass
                </a>
              </div>

              {/* Authority Credential Strip */}
              <div className="pt-1.5 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-xs font-semibold text-muted-foreground text-left border-t border-border/60 max-w-lg">
                <div className="flex items-center gap-1.5 pt-0.5">
                  <span className="text-amber-500">★</span>
                  <span className="text-foreground font-semibold">Personal Trainer & Coach</span>
                </div>
                <div className="flex items-center gap-1.5 pt-0.5">
                  <span className="text-amber-500">★</span>
                  <span>25+ Jahre Praxis</span>
                </div>
                <div className="flex items-center gap-1.5 pt-0.5">
                  <span className="text-amber-500">★</span>
                  <span>IDO Weltmeister</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Portrait with floating quotes */}
            <div className="lg:col-span-5 relative flex justify-center items-end self-end pt-4 lg:pt-0">
              <div className="relative w-full max-w-[440px] lg:max-w-none flex justify-center items-end">
                <img
                  src={avatar}
                  alt="Michél Meier – Personal Trainer & Gesundheitscoach"
                  className="avatar-shadow h-[44vh] sm:h-[50vh] md:h-[54vh] lg:h-[58vh] xl:h-[62vh] max-h-[640px] w-auto object-contain object-bottom select-none pointer-events-none animate-float-up z-10"
                />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[380px] h-20 bg-amber-500/20 blur-3xl rounded-full pointer-events-none" />

                {/* Quote 1: Top-Left */}
                <div className="absolute top-1 -left-3 sm:-left-8 lg:-left-12 max-w-[190px] xl:max-w-[210px] bg-card/95 backdrop-blur-md border border-orange-500/35 rounded-2xl p-2.5 sm:p-3.5 shadow-xl animate-float-up z-20 hover:scale-105 transition-transform text-left">
                  <div className="flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider text-orange-600 font-bold mb-0.5">
                    <Flame className="w-3 h-3 text-orange-500" />
                    <span>M¹ · Fundament</span>
                  </div>
                  <p className="text-[10px] sm:text-xs font-medium text-foreground italic leading-snug">
                    „Wenn dein Fundament brennt, nützt kein härteres Training.“
                  </p>
                </div>

                {/* Quote 2: Top-Right */}
                <div className="absolute top-1 -right-3 sm:-right-8 lg:-right-12 max-w-[190px] xl:max-w-[210px] bg-card/95 backdrop-blur-md border border-emerald-500/35 rounded-2xl p-2.5 sm:p-3.5 shadow-xl animate-float-up z-20 hover:scale-105 transition-transform text-left">
                  <div className="flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider text-emerald-700 font-bold mb-0.5">
                    <Dumbbell className="w-3 h-3 text-emerald-600" />
                    <span>M² · Biomechanik</span>
                  </div>
                  <p className="text-[10px] sm:text-xs font-medium text-foreground italic leading-snug">
                    „Technik schlägt Gewicht – Immer.“
                  </p>
                </div>

                {/* Quote 3: Mid/Upper-Right */}
                <div className="absolute top-[35%] -right-3 sm:-right-8 lg:-right-12 max-w-[190px] xl:max-w-[210px] bg-card/95 backdrop-blur-md border border-blue-500/35 rounded-2xl p-2.5 sm:p-3.5 shadow-xl animate-float-up z-20 hover:scale-105 transition-transform text-left">
                  <div className="flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider text-blue-700 font-bold mb-0.5">
                    <Brain className="w-3 h-3 text-blue-600" />
                    <span>M³ · Mindset</span>
                  </div>
                  <p className="text-[10px] sm:text-xs font-medium text-foreground italic leading-snug">
                    „Routine schlägt flüchtige Motivation.“
                  </p>
                </div>

                {/* Credential Badge: Lower-Left */}
                <div className="absolute bottom-4 -left-3 sm:-left-8 lg:-left-12 bg-card/95 backdrop-blur-md border border-amber-500/40 rounded-2xl p-2.5 sm:p-3.5 shadow-2xl flex items-center gap-2.5 animate-float-up z-20 text-left">
                  <div className="w-9 h-9 rounded-xl bg-gold-gradient text-primary-foreground flex items-center justify-center font-display font-bold text-xs shrink-0 shadow-sm">
                    M³
                  </div>
                  <div className="space-y-0.5">
                    <div className="font-display font-bold text-xs text-foreground">Michél Meier</div>
                    <div className="text-[10px] sm:text-[11px] text-amber-600 font-semibold">Personal Trainer & Coach</div>
                    <div className="text-[9px] sm:text-[10px] text-muted-foreground flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>IDO Weltmeister · 1:1 Betreuung</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 2. BENTO CHAPTER 1: DAS M³ TRINITY BENTO (3 Säulen & Philosophie-Hub) */}
      {/* ---------------------------------------------------- */}
      <section id="system" className="relative py-16 md:py-24 border-b border-border/70 bg-card">
        <span id="philosophie" className="absolute -top-24 pointer-events-none" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-5 md:px-6 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold block">
              Ganzheitliche System-Architektur
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight">
              Drei Säulen. Ein vernetztes System.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Gesundheit ist kein isolierter Muskel. Stoffwechsel, Biomechanik und Mindset bedingen einander.
            </p>
          </div>

          {/* Master Trinity Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            {/* Bento 1: M1 Metabolism (4 cols) */}
            <div className="md:col-span-4 rounded-3xl border border-orange-500/30 bg-gradient-to-br from-orange-500/10 via-card to-card p-6 md:p-8 flex flex-col justify-between shadow-sm hover:border-orange-500/60 hover:shadow-xl hover:shadow-orange-500/10 transition-all text-left group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-orange-500/15 text-orange-600 flex items-center justify-center font-display font-bold text-sm">
                    M¹
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-orange-600 bg-orange-500/15 px-2.5 py-0.5 rounded-full border border-orange-500/30">
                    Metabolism
                  </span>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-1 group-hover:text-orange-600 transition-colors">
                    Gesundheit von innen
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Mikrobiom, Darmgesundheit, zelluläre Vitalstoffe und regulierter Blutzucker als Fundament für dauerhafte Energie.
                  </p>
                </div>
                <div className="text-xs font-medium text-amber-600 italic border-l-2 border-amber-500 pl-3 py-1 bg-amber-500/5 rounded-r-lg">
                  „Wenn dein Fundament brennt, nützt kein härteres Training.“
                </div>
              </div>
              <div className="pt-6">
                <Link
                  to="/metabolism"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-600 hover:opacity-80 transition"
                >
                  <span>M¹ Details ansehen</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Bento 2: M2 Movement (4 cols) */}
            <div className="md:col-span-4 rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 via-card to-card p-6 md:p-8 flex flex-col justify-between shadow-sm hover:border-emerald-500/60 hover:shadow-xl hover:shadow-emerald-500/10 transition-all text-left group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-500/15 text-emerald-700 flex items-center justify-center font-display font-bold text-sm">
                    M²
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-emerald-700 bg-emerald-500/15 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                    Movement
                  </span>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-1 group-hover:text-emerald-700 transition-colors">
                    Technik vor Gewicht
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Funktionelle Biomechanik, 1:1 Personal Training, Gelenkstabilität und schmerzfreie Belastbarkeit im Alltag.
                  </p>
                </div>
                <div className="text-xs font-medium text-amber-600 italic border-l-2 border-amber-500 pl-3 py-1 bg-amber-500/5 rounded-r-lg">
                  „Technik schlägt Gewicht – Immer.“
                </div>
              </div>
              <div className="pt-6">
                <Link
                  to="/movement"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:opacity-80 transition"
                >
                  <span>M² Details ansehen</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Bento 3: M3 Mindset (4 cols) */}
            <div className="md:col-span-4 rounded-3xl border border-blue-500/30 bg-gradient-to-br from-blue-500/10 via-card to-card p-6 md:p-8 flex flex-col justify-between shadow-sm hover:border-blue-500/60 hover:shadow-xl hover:shadow-blue-500/10 transition-all text-left group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-blue-500/15 text-blue-700 flex items-center justify-center font-display font-bold text-sm">
                    M³
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-blue-700 bg-blue-500/15 px-2.5 py-0.5 rounded-full border border-blue-500/30">
                    Mindset & Routinen
                  </span>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-1 group-hover:text-blue-700 transition-colors">
                    Aus Disziplin wird Routine
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Stressresilienz, Schlaf-Optimierung, minimale Alltagsgewohnheiten und nachhaltige Selbstständigkeit.
                  </p>
                </div>
                <div className="text-xs font-medium text-amber-600 italic border-l-2 border-amber-500 pl-3 py-1 bg-amber-500/5 rounded-r-lg">
                  „Routine schlägt flüchtige Motivation.“
                </div>
              </div>
              <div className="pt-6">
                <Link
                  to="/mental-performance"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:opacity-80 transition"
                >
                  <span>M³ Details ansehen</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Bento 4: Der Interaktive Synergie-Hub (12 cols) */}
            <div className="md:col-span-12 rounded-3xl border border-border/90 bg-secondary/20 p-6 md:p-10 shadow-sm">
              <PillarTriadExplorer />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 3. BENTO CHAPTER 2: DIAGNOSTIC & PERSONA BENTO (System Start & Resonanz) */}
      {/* ---------------------------------------------------- */}
      <section id="system-kompass" className="py-16 md:py-24 border-b border-border/70 bg-secondary/25">
        <div className="max-w-7xl mx-auto px-5 md:px-6 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold block">
              M³ System Start
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight">
              Nicht irgendein Angebot. Deine Eingangstür.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Du musst nicht vorher wissen, was du brauchst. Der <strong>M³ System Start</strong> schafft Klarheit, analysiert deine Ausgangslage und baut deinen individuellen Fahrplan.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left Tile: Interactive Kompass (7 cols) */}
            <div className="lg:col-span-7">
              <SystemStartKompass />
            </div>

            {/* Right Tile: Target Personas & Transparenz (5 cols) */}
            <div className="lg:col-span-5 rounded-3xl border border-border/90 bg-card p-6 md:p-8 flex flex-col justify-between shadow-sm text-left">
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold mb-2">
                    <CheckCircle2 className="w-4 h-4 text-gold" />
                    <span>Für wen M³ perfekt ist</span>
                  </div>
                  <h3 className="font-display font-bold text-xl md:text-2xl text-foreground">
                    Echte Resultate für echte Menschen
                  </h3>
                </div>

                <div className="space-y-2.5 text-xs sm:text-sm text-muted-foreground">
                  <div className="flex items-start gap-2.5 p-2 rounded-xl bg-secondary/40">
                    <span className="text-gold font-bold">✓</span>
                    <span><strong>Führungskräfte & 60h-Woche:</strong> Volle Vitalität ohne Nachmittagstiefs.</span>
                  </div>
                  <div className="flex items-start gap-2.5 p-2 rounded-xl bg-secondary/40">
                    <span className="text-gold font-bold">✓</span>
                    <span><strong>Schreibtisch-Schmerzen:</strong> Wieder schmerzfrei und anatomisch stabil.</span>
                  </div>
                  <div className="flex items-start gap-2.5 p-2 rounded-xl bg-secondary/40">
                    <span className="text-gold font-bold">✓</span>
                    <span><strong>Diät-Müde:</strong> Stoffwechsel-Reset ohne Jojo-Effekt und ohne Verbote.</span>
                  </div>
                  <div className="flex items-start gap-2.5 p-2 rounded-xl bg-secondary/40">
                    <span className="text-gold font-bold">✓</span>
                    <span><strong>Sportler & Ambitionierte:</strong> Plateaus durchbrechen & Belastbarkeit steigern.</span>
                  </div>
                </div>

                {/* Filter / Not a fit */}
                <div className="pt-4 border-t border-border/70 space-y-2">
                  <div className="text-[11px] uppercase tracking-wider font-bold text-muted-foreground flex items-center gap-1.5">
                    <X className="w-3.5 h-3.5 text-destructive" />
                    <span>Ehrlichkeit vor Verkauf</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Keine Wunderpillen, keine 14-Tage-Crash-Diäten. Wir begleiten dich, bis du deinen Körper selbstständig steuerst.
                  </p>
                </div>
              </div>

              <div className="pt-6">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gold-gradient py-3.5 px-6 font-bold text-xs sm:text-sm text-primary-foreground shadow-[var(--shadow-gold)] hover:opacity-95 transition"
                >
                  <MessageCircle className="w-4 h-4" />
                  Unverbindlich prüfen lassen
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 4. BENTO CHAPTER 3: SOLUTION ECOSYSTEM BENTO (Die 8 Angebote) */}
      {/* ---------------------------------------------------- */}
      <section id="leistungen" className="py-16 md:py-24 border-b border-border/70 bg-card">
        <div className="max-w-7xl mx-auto px-5 md:px-6 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold block">
              Modulare Bausteine
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

          {/* Asymmetric Solution Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            {/* Tile 1: Flagship Body Reset (7 cols) - ATHLETIC DARK CARBON HERO CARD */}
            <div className="md:col-span-7 rounded-3xl border-2 border-amber-500/50 bg-[#090d16] text-white p-6 md:p-8 flex flex-col justify-between shadow-2xl shadow-amber-500/10 text-left group relative overflow-hidden">
              {/* Subtle Kinetic Ambient Glow in Dark Card */}
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                    M¹ · METABOLISM FLAGGSCHIFF
                  </span>
                  <span className="rounded-full bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 px-3.5 py-1 text-[11px] font-black text-slate-950 uppercase tracking-wider shadow-md">
                    Ganzheitliches Konzept
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-display font-black text-white mb-1 group-hover:text-amber-400 transition-colors">
                    M³ Body Reset
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-amber-300/90 mb-3">
                    Ganzheitlicher Neustart von innen
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    Das modulare Konzept für Darm und Stoffwechsel: Beinhaltet die 16-Tage Darmkur, die gezielte Stoffwechselkur sowie die tägliche Goldene Grundversorgung.
                  </p>
                </div>

                <div className="grid sm:grid-cols-3 gap-2 py-3 border-t border-b border-slate-800 text-xs font-medium text-slate-200">
                  <div className="flex items-center gap-2 bg-slate-900/80 border border-slate-800 rounded-xl p-2.5">
                    <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                    <span className="font-semibold">16-Tage Darmkur</span>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-900/80 border border-slate-800 rounded-xl p-2.5">
                    <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                    <span className="font-semibold">Stoffwechselkur</span>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-900/80 border border-slate-800 rounded-xl p-2.5">
                    <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                    <span className="font-semibold">Grundversorgung</span>
                  </div>
                </div>
              </div>

              <div className="relative pt-6 flex flex-col sm:flex-row items-center gap-3">
                <Link
                  to="/body-reset"
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-800/80 px-6 py-2.5 text-xs font-bold text-white hover:bg-slate-700 transition"
                >
                  Details ansehen
                </Link>
                <a
                  href={`${BASE_WHATSAPP}?text=Hallo%20Mich%C3%A9l,%20ich%20interessiere%20mich%20f%C3%BCr%20den%20M%C3%B3%20Body%20Reset.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 rounded-full bg-gold-gradient px-6 py-2.5 text-xs font-bold text-primary-foreground shadow-lg shadow-amber-500/25 hover:scale-105 transition-all"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  WhatsApp Anfrage
                </a>
              </div>
            </div>

            {/* Tile 2: 1:1 Ernährungscoaching (5 cols) */}
            <div className="md:col-span-5 rounded-3xl border border-orange-500/25 bg-card p-6 md:p-8 flex flex-col justify-between shadow-sm hover:border-orange-500/50 hover:shadow-lg transition-all text-left group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-600">
                    M¹ · ERNÄHRUNG
                  </span>
                  <span className="text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full bg-orange-500/15 text-orange-600 border border-orange-500/20">
                    1:1 Coaching
                  </span>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-display font-extrabold text-foreground mb-1 group-hover:text-orange-600 transition-colors">
                    M³ Ernährungscoaching
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    Deine Ernährung. Dein Alltag.
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Keine starren Diät-Korsetts oder Verbote – sondern eine alltagstaugliche 1:1 Makro-Struktur ohne Jojo-Effekt.
                  </p>
                </div>

                <ul className="space-y-1.5 border-t border-border/60 pt-3 text-xs text-muted-foreground">
                  <li className="flex items-center gap-2 text-foreground font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                    <span>Individuelle Makro-Struktur</span>
                  </li>
                  <li className="flex items-center gap-2 text-foreground font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                    <span>Perfekt für Beruf & Familie</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 flex items-center gap-3">
                <Link
                  to="/ernaehrungscoaching"
                  className="w-full inline-flex items-center justify-center rounded-full border border-border px-4 py-2.5 text-xs font-bold text-foreground hover:bg-secondary transition"
                >
                  Details
                </Link>
                <a
                  href={`${BASE_WHATSAPP}?text=Hallo%20Mich%C3%A9l,%20ich%20interessiere%20mich%20f%C3%BCr%20das%201:1%20Ern%C3%A4hrungscoaching.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1 rounded-full bg-secondary hover:bg-secondary/80 px-4 py-2.5 text-xs font-bold text-foreground transition"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-orange-600" />
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Tile 3: M3 Schmerzfrei (4 cols) */}
            <div className="md:col-span-4 rounded-3xl border border-emerald-500/25 bg-card p-6 flex flex-col justify-between shadow-sm hover:border-emerald-500/50 hover:shadow-lg transition-all text-left group">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-700">
                    M² · REHA
                  </span>
                  <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-700 border border-emerald-500/20">
                    Mobilität
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-display font-bold text-foreground group-hover:text-emerald-700 transition-colors">
                  M³ Schmerzfrei
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Gezielte Mobilität & Ursachenbehebung bei Rücken-, Nacken- und Gelenkbeschwerden.
                </p>
              </div>
              <div className="pt-5 flex items-center gap-2">
                <Link
                  to="/schmerzfrei"
                  className="w-full inline-flex items-center justify-center rounded-full border border-border px-3 py-2 text-xs font-bold text-foreground hover:bg-secondary transition"
                >
                  Details
                </Link>
                <a
                  href={`${BASE_WHATSAPP}?text=Hallo%20Mich%C3%A9l,%20ich%20interessiere%20mich%20f%C3%BCr%20das%20Schmerzfrei-Programm.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1 rounded-full bg-secondary hover:bg-secondary/80 px-3 py-2 text-xs font-bold text-foreground transition"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-700" />
                  Anfrage
                </a>
              </div>
            </div>

            {/* Tile 4: M3 Performance Training (4 cols) */}
            <div className="md:col-span-4 rounded-3xl border border-emerald-500/25 bg-card p-6 flex flex-col justify-between shadow-sm hover:border-emerald-500/50 hover:shadow-lg transition-all text-left group">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-700">
                    M² · ATHLETIK
                  </span>
                  <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-700 border border-emerald-500/20">
                    1:1 Training
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-display font-bold text-foreground group-hover:text-emerald-700 transition-colors">
                  M³ Performance Training
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Intelligentes 1:1 Personal Training für echte Kraft, Explosivität und Körperbeherrschung.
                </p>
              </div>
              <div className="pt-5 flex items-center gap-2">
                <Link
                  to="/performance-training"
                  className="w-full inline-flex items-center justify-center rounded-full border border-border px-3 py-2 text-xs font-bold text-foreground hover:bg-secondary transition"
                >
                  Details
                </Link>
                <a
                  href={`${BASE_WHATSAPP}?text=Hallo%20Mich%C3%A9l,%20ich%20interessiere%20mich%20f%C3%BCr%20das%20Performance%20Training.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1 rounded-full bg-secondary hover:bg-secondary/80 px-3 py-2 text-xs font-bold text-foreground transition"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-700" />
                  Anfrage
                </a>
              </div>
            </div>

            {/* Tile 5: Coaching für Zwei (4 cols) */}
            <div className="md:col-span-4 rounded-3xl border border-emerald-500/25 bg-card p-6 flex flex-col justify-between shadow-sm hover:border-emerald-500/50 hover:shadow-lg transition-all text-left group">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-700">
                    M² · PARTNER
                  </span>
                  <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-700 border border-emerald-500/20">
                    Für Zwei
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-display font-bold text-foreground group-hover:text-emerald-700 transition-colors">
                  Coaching für Zwei
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Personal Training für Partner oder Freunde – individuelle Pläne mit doppelter Motivation.
                </p>
              </div>
              <div className="pt-5 flex items-center gap-2">
                <Link
                  to="/coaching-fuer-zwei"
                  className="w-full inline-flex items-center justify-center rounded-full border border-border px-3 py-2 text-xs font-bold text-foreground hover:bg-secondary transition"
                >
                  Details
                </Link>
                <a
                  href={`${BASE_WHATSAPP}?text=Hallo%20Mich%C3%A9l,%20wir%20interessieren%20uns%20f%C3%BCr%20das%20Coaching%20f%C3%BCr%20Zwei.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1 rounded-full bg-secondary hover:bg-secondary/80 px-3 py-2 text-xs font-bold text-foreground transition"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-700" />
                  Anfrage
                </a>
              </div>
            </div>

            {/* Tile 6: Spezialvertiefungen (12 cols) */}
            <div className="md:col-span-12 rounded-2xl border border-amber-500/25 bg-amber-500/5 p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-left">
              <div className="space-y-1">
                <div className="text-xs font-bold uppercase tracking-wider text-amber-700 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  <span>Weitere Kern-Bausteine & Spezialmodule</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Ganzheitliche Vertiefungen für <strong>Darmbegleitung</strong>, <strong>Goldene Grundversorgung</strong> und <strong>Mental Performance Coaching</strong>.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <Link to="/darm-stoffwechselbegleitung" className="text-xs font-bold text-orange-600 hover:underline">
                  Darmbegleitung →
                </Link>
                <span className="text-border">|</span>
                <Link to="/goldene-grundversorgung" className="text-xs font-bold text-amber-600 hover:underline">
                  Grundversorgung →
                </Link>
                <span className="text-border">|</span>
                <Link to="/mental-performance" className="text-xs font-bold text-blue-700 hover:underline">
                  Mental Performance →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 5. BENTO CHAPTER 4: STORY, PROOF & TRUST BENTO */}
      {/* ---------------------------------------------------- */}
      <section id="ueber" className="py-16 md:py-24 border-b border-border/70 bg-secondary/25">
        <div className="max-w-7xl mx-auto px-5 md:px-6 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold block">
              Authentizität & Erfahrung
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight">
              Hinter M³ steckt mehr als Training.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Tile 1: Story & Video Facade (5 cols) */}
            <div className="lg:col-span-5 rounded-3xl border border-border bg-card p-6 md:p-8 flex flex-col justify-between shadow-sm text-left">
              <div className="space-y-4">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600">
                  Michél Meier · Personal Trainer & Coach
                </span>
                <h3 className="text-xl md:text-2xl font-display font-extrabold text-foreground">
                  25+ Jahre Bewegungspraxis & Weltmeisterjahre
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Als IDO Breakdance-Weltmeister durfte ich erleben, wozu der Körper fähig ist. Schwere Rückschläge und Darmthemen lehrten mich: Höchstleistung zerbricht ohne biochemisches Fundament.
                </p>
                <div className="text-xs font-medium text-amber-600 italic border-l-2 border-amber-500 pl-3 py-1 bg-amber-500/5 rounded-r-lg">
                  „Manchmal braucht es Verständnis. Manchmal einen Arschtritt. Oft beides.“
                </div>

                {/* Video Facade */}
                <div className="aspect-video rounded-2xl bg-secondary/50 border border-border overflow-hidden relative group mt-3">
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
                      className="w-full h-full flex flex-col items-center justify-center p-4 cursor-pointer text-center"
                    >
                      <div className="w-12 h-12 rounded-full bg-gold-gradient text-primary-foreground flex items-center justify-center shadow-md group-hover:scale-110 transition-transform mb-2">
                        <Play className="w-5 h-5 ml-0.5 fill-current" />
                      </div>
                      <span className="font-display font-bold text-xs text-foreground">
                        M³ Performance Video abspielen
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div className="pt-6">
                <Link
                  to="/ueber-mich"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gold-gradient py-3 text-xs sm:text-sm font-bold text-primary-foreground shadow-[var(--shadow-gold)] hover:opacity-95 transition"
                >
                  Meine ganze Story lesen
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Tile 2: Praxis-Ergebnisse & Mehrwert (7 cols) */}
            <div className="lg:col-span-7 rounded-3xl border border-border bg-card p-6 md:p-8 flex flex-col justify-between shadow-sm text-left overflow-hidden">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/70 pb-4">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600">
                      Ergebnisse & Methodik
                    </span>
                    <h3 className="font-display font-bold text-xl text-foreground">
                      Was dich im M³-System erwartet
                    </h3>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-semibold">
                    <span className="text-emerald-700 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20 font-bold">
                      100% Persönliche 1:1 Betreuung
                    </span>
                  </div>
                </div>

                {/* 4 Core Pillars Results Grid */}
                <div className="grid sm:grid-cols-2 gap-3.5 pt-1">
                  <div className="rounded-2xl border border-orange-500/25 bg-orange-500/5 p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 font-bold text-xs text-orange-600">
                        <Flame className="w-3.5 h-3.5" />
                        <span>M¹ · Stoffwechsel & Darm</span>
                      </div>
                      <span className="text-[9px] font-bold text-orange-700 bg-orange-500/15 px-2 py-0.5 rounded-full">
                        Zellenergie
                      </span>
                    </div>
                    <p className="text-xs text-foreground/90 leading-relaxed">
                      Keine Nachmittagstiefs mehr: Gezielte Entlastung von Verdauung & Darm, optimierte Nährstoffversorgung und stabiler Blutzucker.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-emerald-500/25 bg-emerald-500/5 p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 font-bold text-xs text-emerald-700">
                        <Dumbbell className="w-3.5 h-3.5" />
                        <span>M² · Biomechanik</span>
                      </div>
                      <span className="text-[9px] font-bold text-emerald-700 bg-emerald-500/15 px-2 py-0.5 rounded-full">
                        Schmerzfrei
                      </span>
                    </div>
                    <p className="text-xs text-foreground/90 leading-relaxed">
                      Technik vor Gewicht: Beseitigung von Dysbalancen und Verspannungen im Rücken- & Nackenbereich durch präzise 1:1 Bewegungskorrektur.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-orange-500/25 bg-orange-500/5 p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 font-bold text-xs text-orange-600">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>M¹ · Alltagsernährung</span>
                      </div>
                      <span className="text-[9px] font-bold text-orange-700 bg-orange-500/15 px-2 py-0.5 rounded-full">
                        Ohne Diät-Zwang
                      </span>
                    </div>
                    <p className="text-xs text-foreground/90 leading-relaxed">
                      Individuelle Makro-Struktur, die perfekt zu 60h-Arbeitswochen, Sport und Familie passt – ohne Jojo-Effekt und ohne Verbote.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-blue-500/25 bg-blue-500/5 p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 font-bold text-xs text-blue-700">
                        <Brain className="w-3.5 h-3.5" />
                        <span>M³ · Mindset & Routine</span>
                      </div>
                      <span className="text-[9px] font-bold text-blue-700 bg-blue-500/15 px-2 py-0.5 rounded-full">
                        Selbstständigkeit
                      </span>
                    </div>
                    <p className="text-xs text-foreground/90 leading-relaxed">
                      Routinen-Architektur und Stressresistenz: Du lernst deinen Körper selbstständig zu steuern – dauerhaft und unabhängig.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between text-xs text-muted-foreground">
                <span>Ehrlichkeit vor leeren Versprechungen</span>
                <Link to="/system-start" className="font-bold text-amber-600 hover:underline flex items-center gap-1">
                  M³ System Start kennenlernen →
                </Link>
              </div>
            </div>

            {/* Tile: M³ Live Performance Infinity Carousel (12 cols) - ATHLETIC DARK CARBON STRIP */}
            <div className="lg:col-span-12 rounded-3xl border border-slate-800 bg-[#090d16] text-white p-5 sm:p-7 shadow-2xl shadow-slate-950/25 overflow-hidden text-left space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 px-1">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-amber-400 font-bold">
                    M³ Live Performance · 25+ Jahre Bewegungspraxis & Weltmeisterjahre
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                  <span className="text-white font-semibold">Breakdance-Weltmeister</span>
                  <span>·</span>
                  <span className="text-amber-400">Personal Trainer & Coach</span>
                </div>
              </div>

              {/* Infinity Marquee Track with Action Pictures */}
              <div className="relative w-full overflow-hidden marquee-mask pt-1">
                <div className="flex gap-3 sm:gap-4 w-max animate-marquee-left marquee-pause py-1">
                  {HERO_PERFORMANCE_PICTURES_DOUBLED.map((p, idx) => (
                    <div
                      key={`${p.image}-${idx}`}
                      className="h-[155px] sm:h-[175px] md:h-[195px] shrink-0 bg-slate-900/90 rounded-2xl overflow-hidden border border-slate-700/80 shadow-md hover:shadow-xl hover:border-amber-400 hover:shadow-amber-500/20 transition-all p-1.5 flex items-center justify-center group cursor-pointer"
                    >
                      <img
                        src={p.image}
                        alt={p.alt}
                        className="h-full w-auto max-w-none object-contain rounded-xl select-none group-hover:scale-[1.03] transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tile 3: 5 M³-Werte & Qualitätsgarantien (12 cols) */}
            <div className="lg:col-span-12 rounded-3xl border border-border bg-card p-6 md:p-8 space-y-6 text-left">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/70 pb-4">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-gold">
                    Unverrückbare Prinzipien
                  </span>
                  <h3 className="font-display font-extrabold text-xl md:text-2xl text-foreground">
                    Darauf kannst du dich verlassen
                  </h3>
                </div>
                <p className="text-xs text-muted-foreground">
                  Fünf Werte, nach denen jede Begleitung ausgerichtet ist.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                {[
                  { title: "Eigenverantwortung", desc: "Wir begleiten dich eng – aber nehmen dir deine Verantwortung nicht ab." },
                  { title: "Ehrlichkeit", desc: "Wir sprechen Dinge direkt an – auch dann, wenn es einmal unbequem ist." },
                  { title: "Authentizität", desc: "Kein aufgesetztes Gehabe. Wir bleiben menschlich, pragmatisch und echt." },
                  { title: "Menschlichkeit", desc: "Vor dem Problem steht der Mensch mit all seinen Alltagshürden." },
                  { title: "Qualität", desc: "Wir empfehlen nur Maßnahmen, die einem fundierten Anspruch genügen." },
                ].map((v, i) => (
                  <div key={i} className="rounded-2xl border border-border/80 bg-secondary/20 p-4 space-y-2">
                    <div className="w-7 h-7 rounded-lg bg-gold/15 text-gold flex items-center justify-center font-display font-bold text-xs">
                      0{i + 1}
                    </div>
                    <div className="font-display font-bold text-sm text-foreground">
                      {v.title}
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 6. BENTO CHAPTER 5: DER 5-STUFEN-PROZESS & FAQ & FINAL CTA */}
      {/* ---------------------------------------------------- */}
      <section id="so-arbeiten-wir" className="py-16 md:py-24 border-b border-border/70 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-5 md:px-6 space-y-12">
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

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { step: "01", phase: "Diagnostik", title: "Kennenlernen", desc: "Unverbindliches Gespräch über deine Situation, Ziele und Erwartungen." },
              { step: "02", phase: "Biometrie", title: "Analyse", desc: "Ganzheitliche Bestandsaufnahme von Stoffwechsel, Bewegung und Alltag." },
              { step: "03", phase: "Masterplan", title: "Strategie", desc: "Dein maßgeschneiderter Fahrplan mit klaren Prioritäten." },
              { step: "04", phase: "Begleitung", title: "Begleitung", desc: "Schritt-für-Schritt Umsetzung mit engmaschiger Korrektur." },
              { step: "05", phase: "Autonomie", title: "Routine", desc: "Verstetigung der Gewohnheiten bis zur vollständigen Selbstständigkeit." },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-border bg-card p-5 flex flex-col justify-between hover:border-gold/50 shadow-sm transition-all text-left group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-gold-gradient text-primary-foreground flex items-center justify-center font-display font-bold text-xs shadow-sm">
                      {item.step}
                    </div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-gold font-bold px-2 py-0.5 rounded-full bg-gold/10">
                      {item.phase}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-base text-foreground mb-1.5 group-hover:text-gold transition-colors">
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
      {/* 7. FAQ SECTION */}
      {/* ---------------------------------------------------- */}
      <section id="faq" className="py-16 md:py-24 border-b border-border/70 bg-card">
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
      {/* 8. FINAL HIGH-CONVERTING CTA */}
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
