import { useState, useRef, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  X,
  Sparkles,
  Trophy,
  Clock,
  ArrowRight,
  ShieldCheck,
  Flame,
  Activity,
  Heart,
  ExternalLink,
  MessageCircle,
  Award,
  Compass,
  CheckCircle2,
} from "lucide-react";

export interface Milestone {
  id: string;
  year: string;
  era: string;
  category: "roots" | "champion" | "crisis" | "m3";
  categoryLabel: string;
  title: string;
  shortDesc: string;
  image: string;
  badge: string;
  fullStory: {
    lead: string;
    paragraphs: string[];
    highlights: string[];
    lesson: string;
    quote?: string;
  };
}

export const MILESTONES: Milestone[] = [
  {
    id: "roots-1995",
    year: "1995 – 1998",
    era: "Wurzeln & Anfänge",
    category: "roots",
    categoryLabel: "Jugend & Wurzeln",
    title: "Frühe Schicksale, Breakdance & Erste Verantwortung",
    shortDesc:
      "Mit 12 Jahren Entdeckung des Tanzsports. Schwere Verluste in jungen Jahren und der Beginn einer lebenslangen Leidenschaft.",
    image: "/images/performance/hero-performance-3.jpg",
    badge: "Fundament & Passion",
    fullStory: {
      lead: "Meine Reise begann nicht im Glanz, sondern mitten im echten Leben und mit frühen, prägenden Prüfungen.",
      paragraphs: [
        "Mit 12 Jahren entdeckte ich meine Leidenschaft für Hip Hop und Breakdance. Doch die Jugend war von schweren Verlusten geprägt: Mit 14 Jahren verlor ich meinen Vater innerhalb weniger Monate an Krebs. Kurz darauf verstarben mein Opa und meine Oma. Meine Großmutter lebte zuvor bei uns – erkrankt an Alzheimer. Als 15-Jähriger hatte ich sie nachts bei mir im Zimmer und erklärte ihr oft stundenlang, wer ich bin.",
        "1996 überlebte ich mit Freunden nur knapp einen schweren Autounfall mit mehrfachem Überschlag. Doch das Tanzen gab mir Halt, Fokus und Richtung: Mit 15 Jahren stand ich bereits als Tanzlehrer auf der Fläche und wirkte im ersten Thüringer Jugend-Musical „Crazy Town“ (u.a. mit Clueso und VIVA-Moderatorin Janine Reinhard) mit.",
        "1997 war ich Mitbegründer der legendären Formation „Nasty Stylistix“, mit der wir bereits 1998 Thüringenmeister im Breakdance wurden.",
      ],
      highlights: [
        "Einstieg in den Tanzsport mit 12 Jahren",
        "Erste Lehrtätigkeit als Tanzlehrer mit 15 Jahren",
        "Musical 'Crazy Town' mit Clueso & Janine Reinhard",
        "Mitbegründer der 'Nasty Stylistix' (Thüringenmeister 1998)",
      ],
      lesson:
        "Frühe Verluste und Schicksalsschläge lehren dich: Niemand rettet dich. Du musst selbst Verantwortung für dein Leben und deinen Weg übernehmen.",
      quote: "„Schicksalsschläge formen den Charakter – die Bewegung gab mir den Fokus, den ich brauchte.“",
    },
  },
  {
    id: "military-1998",
    year: "1998 – 2001",
    era: "Disziplin & Lehre",
    category: "roots",
    categoryLabel: "Jugend & Wurzeln",
    title: "Feldjäger-Disziplin & Tanzlehrerausbildung",
    shortDesc:
      "Wehrdienst bei den Feldjägern der Bundeswehr und die fundierte Ausbildung zum staatlich geprüften Tanzlehrer.",
    image: "/images/performance/m2-bruce-lee-mastery.jpg",
    badge: "Struktur & Führung",
    fullStory: {
      lead: "Struktur statt Chaos: Hier lernte ich, wie entscheidend klare Abläufe und mentale Disziplin für den Erfolg sind.",
      paragraphs: [
        "Von 1998 bis 1999 leistete ich meinen Wehrdienst bei den Feldjägern (Militärpolizei) der Bundeswehr. Diese Zeit prägte mein Verständnis für Führung, absolute Zuverlässigkeit, Schichtbelastung und Teamkoordination unter Druck nachhaltig.",
        "Direkt im Anschluss (1999–2001) absolvierte ich meine praktische Tanzlehrerausbildung bei Traut & Heigl in Heiligenhaus. Neben sportlicher Hochleistung lernte ich hier Didaktik, Biomechanik und die Kunst, komplexe Bewegungsabläufe verständlich und motivierend zu vermitteln.",
      ],
      highlights: [
        "Wehrdienst bei den Feldjägern der Bundeswehr (Führung & Disziplin)",
        "Tanzlehrerausbildung bei Traut & Heigl (Didaktik & Unterrichtspraxis)",
        "Erste eigene Kurse und Workshops in ganz Deutschland",
      ],
      lesson:
        "Disziplin ist keine Strafe, sondern das Fundament für Freiheit, physische Belastbarkeit und dauerhafte Höchstleistung.",
      quote: "„Wer in schwierigen Situationen Ruhe bewahrt, behält die Kontrolle über seinen Körper und sein Ziel.“",
    },
  },
  {
    id: "pro-2001",
    year: "2001 – 2005",
    era: "Profitanz & Masterclasses",
    category: "champion",
    categoryLabel: "Weltmeister-Ära",
    title: "Tanzfabrik Erfurt & Masterclasses mit Weltstars",
    shortDesc:
      "Profitänzer, Battle of the Year National und Meisterkurse mit internationalen Ikonen von Britney Spears bis Justin Timberlake.",
    image: "/images/performance/hero-performance-2.jpg",
    badge: "Athletik & Perfektion",
    fullStory: {
      lead: "Tägliches kompromissloses Training, nationale Meisterschaften und der intensive Austausch mit der Weltelite des Tanzes.",
      paragraphs: [
        "Als fester Dozent an der Tanzfabrik Erfurt bildete ich Hunderte Tänzer aus und vertiefte meine eigene Athletik. 2005 platzierten wir uns mit den „Nasty Stylistix“ beim nationalen Battle of the Year.",
        "Gleichzeitig nutzte ich jede Gelegenheit, um von den besten Dozenten der Welt zu lernen: Masterclasses mit Breakdance-Legende Storm, Marco da Silva (No Angels), Marvin A. Smith (Britney Spears), Marty Kudelka (Justin Timberlake) und Dante Harper (Streetstyle).",
      ],
      highlights: [
        "Platzierung beim Battle of the Year National",
        "Masterclasses mit Storm, Marvin A. Smith, Marty Kudelka",
        "Dozent an der Tanzfabrik Erfurt für hunderte Schüler",
      ],
      lesson:
        "Wahre Meisterschaft entsteht durch bedingungslose Präzision in den Grundlagen – Technik schlägt immer bloße Kraft.",
    },
  },
  {
    id: "worldchamp-2006",
    year: "2006 – 2007",
    era: "Weltmeistertitel & Theater",
    category: "champion",
    categoryLabel: "Weltmeister-Ära",
    title: "IDO Breakdance-Weltmeister & Theater Erfurt",
    shortDesc:
      "Weltmeistertitel mit den „Da Rookies“ und renommierte Solorollen auf den großen Bühnen des Theater Erfurt.",
    image: "/images/performance/hero-performance-1.jpg",
    badge: "Weltklasse 2006/07",
    fullStory: {
      lead: "Der Höhepunkt jahrelangen Trainings: Weltmeister auf internationaler Bühne und gefeierte Theaterproduktionen.",
      paragraphs: [
        "Mit den „Da Rookies“ erreichten wir den absoluten Zenit: 2006/2007 gewannen wir den IDO Breakdance-Weltmeistertitel und setzten uns gegen die stärkste internationale Konkurrenz durch.",
        "Parallel stand ich als Solist auf den renommiertesten Theaterbühnen – unter anderem am Theater Erfurt in Meisterwerken wie „Anatevka“ und „Strawinsky – Der Feuervogel“. Es folgten TV-Auftritte, internationale Meisterkurse und Showacts vor tausenden Zuschauern in ganz Europa.",
      ],
      highlights: [
        "IDO World Champion 2006/2007 mit den 'Da Rookies'",
        "Solist am Theater Erfurt ('Anatevka', 'Strawinsky – Der Feuervogel')",
        "Internationale Shows und TV-Produktionen in ganz Europa",
      ],
      lesson:
        "Auf Weltklasse-Niveau entscheidet nicht nur körperliche Fitness, sondern absolute Nervenstärke, mentale Klarheit und Teamführung auf den Punkt.",
      quote: "„Auf der Bühne vor 2.000 Menschen gibt es keinen zweiten Versuch. Du musst im Moment abliefern.“",
    },
  },
  {
    id: "projects-2008",
    year: "2008 – 2015",
    era: "Choreografie & Vaterschaft",
    category: "roots",
    categoryLabel: "Jugend & Wurzeln",
    title: "Internationale Großprojekte & Alleinerziehender Vater",
    shortDesc:
      "Leitung europaweiter Jugendprojekte ('Air4Day', 'De-Light-House') und die größte persönliche Verantwortung des Lebens.",
    image: "/images/performance/hero-performance-5.jpg",
    badge: "Projektleitung & Familie",
    fullStory: {
      lead: "Große internationale Kulturprojekte organisieren – und gleichzeitig als alleinerziehender Vater voll im echten Leben stehen.",
      paragraphs: [
        "In dieser Phase leitete, moderierte und choreografierte ich internationale Großprojekte wie „Air4Day meets Kingz Of The Circle“, „De-Light-House“ und „DLH 2.0 Streetskillz“ sowie bilaterale Austauschprogramme in Frankreich und den Niederlanden (Den Haag, Picardie). Ich engagierte mich intensiv als Schirmherr für benachteiligte Jugendliche.",
        "Privat stellte sich die größte Prüfung: Die Mutter meiner Tochter verließ uns, als die Kleine ca. 1 Jahr alt war. Von einem Tag auf den anderen übernahm ich als alleinerziehender Vater die volle Verantwortung für Familie, Beruf, Schichtarbeit und Alltag – ohne Ausreden.",
      ],
      highlights: [
        "Projektleiter & Moderator von 'Air4Day' & 'Kingz Of The Circle'",
        "Internationale Austauschprogramme (Deutschland, Frankreich, Niederlande)",
        "Volle Verantwortung als alleinerziehender Vater",
      ],
      lesson:
        "Verantwortung für ein Kind zeigt dir ungeschönt, was echte Prioritäten im Alltag bedeuten: Kein Platz für Ausreden oder Schönfärberei.",
      quote: "„Echte Stärke beweist sich nicht im Scheinwerferlicht, sondern wenn du nachts am Kinderbett stehst und am nächsten Tag ablieferst.“",
    },
  },
  {
    id: "crisis-2016",
    year: "2016 – 2021",
    era: "Der Schicksalhafte Wendepunkt",
    category: "crisis",
    categoryLabel: "Krise & Transformation",
    title: "Bandscheibenvorfall, Schmerzen & Der Weckruf",
    shortDesc:
      "Schwerer HWS-Vorfall (C6/C7), Impingement, Darmprobleme und die fundamentale Erkenntnis: Höchstleistung scheitert ohne Fundament.",
    image: "/images/performance/m2-never-give-up.jpg",
    badge: "Krise & Reset",
    fullStory: {
      lead: "Als der Körper stoppte: Der schmerzhafte Zusammenbruch und die wichtigste Wende meines gesamten Lebens.",
      paragraphs: [
        "2016 erlitt ich einen schweren HWS-Bandscheibenvorfall (C6/C7). Von einem Tag auf den anderen war die gewohnte Stabilität weg. Es folgten ein hartnäckiges Schulter-Impingement, chronische Entzündungen und Darm-Parasiten. Trotz Medikamenten blieb die Genesung aus. Mein Mindset war am Boden – Rückzug, schlechte Ernährung, Frust.",
        "Doch genau an diesem Tiefpunkt fiel die Entscheidung: Keine voreilige OP! Ich begann ein radikales Eigenstudium der Biochemie, Zellgesundheit, Darmregeneration, gezielten Supplementierung und funktionellen Biomechanik.",
        "Schritt für Schritt baute ich mich von innen nach außen wieder auf – bis ich schmerzfrei wieder auf dem Kopf stand und mich bewegte wie in alten Zeiten!",
      ],
      highlights: [
        "Schwerer HWS-Bandscheibenvorfall (C6/C7) & Schulter-Impingement",
        "Chronische Darmprobleme und Erschöpfung durch Entzündungen",
        "Komplette schmerzfreie Rehabilitation ohne Operation",
        "Geburtsstunde des Verständnisses für Biochemie & Zellenergie",
      ],
      lesson:
        "Wenn dein biochemisches Fundament brennt, nützt kein härteres Training. Erst Darm und Zellgesundheit heilen, dann schmerzfrei belasten.",
      quote: "„Niemand wird dich retten. Du musst selbst anfangen, die volle Verantwortung für deine Gesundheit zu übernehmen.“",
    },
  },
  {
    id: "transformation-2022",
    year: "2022 – 2023",
    era: "Wissenschaft & Rekonstruktion",
    category: "crisis",
    categoryLabel: "Krise & Transformation",
    title: "90-Tage Challenge & Psychologische Modulauswertung",
    shortDesc:
      "Intensive 90-Tage Transformation, zertifizierte Berufscoachings (TÜV) und die offizielle Bestätigung höchster Durchhaltekraft.",
    image: "/images/performance/m3-neural-blueprint.jpg",
    badge: "Validierung & Coaching",
    fullStory: {
      lead: "Die Verschmelzung aus 25 Jahren Erfahrung, psychologischer Analyse und wissenschaftlich fundierter Ernährungs- und Trainingslehre.",
      paragraphs: [
        "Ende 2022 startete ich meine 90-Tage Challenge und bewies mir und meinem Umfeld erneut, wozu der Körper fähig ist, wenn Training, Ernährung und Routinen perfekt synchronisiert sind.",
        "Gleichzeitig absolvierte ich Weiterbildungen im Bewerbungsmanagement und Berufscoaching (TÜV Rheinland). Die offizielle Modulauswertung der Bundesagentur für Arbeit attestierte mir Maximalwerte (Bereich 5 von 5) in Führungs- und Gestaltungsmotivation, Durchhaltevermögen, Selbstwirksamkeit, Ergebnisorientierung und konfliktfähiger Empathie.",
      ],
      highlights: [
        "Erfolgreiche 90-Tage Transformation & Body Recomposition",
        "Zertifizierte Weiterbildungen im Berufscoaching (TÜV Rheinland)",
        "Maximalwerte (5/5) in Durchhaltevermögen, Führung & Selbstwirksamkeit",
        "Entwicklung des 3-Säulen-Prinzips (Metabolism, Movement, Mental)",
      ],
      lesson:
        "Nachhaltige Veränderung scheitert nicht am Wissen, sondern an der alltagstauglichen Ausführung bei Stress.",
    },
  },
  {
    id: "m3-2024",
    year: "2024 – Heute",
    era: "M³ Performance & Master Personal Trainer",
    category: "m3",
    categoryLabel: "M³ Performance",
    title: "Gründung M³ Performance & Master Personal Training",
    shortDesc:
      "Bündelung der gesamten Lebenspraxis im M³-System: 1:1 Betreuung für schmerzfreie Belastbarkeit, Vitalität und Unabhängigkeit.",
    image: "/images/performance/michel-portrait-blazer.jpg",
    badge: "M³ Gründer & Master Coach",
    fullStory: {
      lead: "Mein Lebenswerk in Aktion: Menschen mitten im Leben zu echter Gesundheit, Vitalität und Autonomie führen.",
      paragraphs: [
        "Seit Januar 2024 konzentriere ich mich zu 100 % auf meine Kernkompetenz: M³ Performance & Gesundheit. Begleitend absolviere ich die Ausbildung zum Master Personal Trainer.",
        "Über Instagram (@michelmeiermoves) und in der persönlichen 1:1 Betreuung helfe ich Unternehmern, Führungskräften und Familienmenschen, Nachmittagstiefs, Verspannungen und Stoffwechselblockaden dauerhaft aufzulösen.",
      ],
      highlights: [
        "Gründung von M³ Performance (Metabolism · Movement · Mental)",
        "Master Personal Trainer Zertifizierung",
        "Tägliche Impulse auf Instagram (@michelmeiermoves)",
        "Persönliche 1:1 Begleitung mit messbaren Ergebnissen",
      ],
      lesson:
        "Ich mache mich überflüssig: Du lernst deinen Körper, deine Ernährung und deine Routinen selbstständig dauerhaft zu steuern.",
      quote: "„Manchmal braucht es Verständnis. Manchmal einen Arschtritt. Oft beides.“",
    },
  },
];

export function InteractiveTimeline() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedMilestone, setSelectedMilestone] = useState<Milestone | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  const filteredMilestones =
    activeCategory === "all"
      ? MILESTONES
      : MILESTONES.filter((m) => m.category === activeCategory);

  const updateScrollMetrics = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    if (maxScroll > 0) {
      const progress = (el.scrollLeft / maxScroll) * 100;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
      setCanScrollLeft(el.scrollLeft > 10);
      setCanScrollRight(el.scrollLeft < maxScroll - 10);
    } else {
      setScrollProgress(0);
      setCanScrollLeft(false);
      setCanScrollRight(false);
    }
  };

  useEffect(() => {
    updateScrollMetrics();
    const el = scrollContainerRef.current;
    if (el) {
      el.addEventListener("scroll", updateScrollMetrics, { passive: true });
      window.addEventListener("resize", updateScrollMetrics);
      return () => {
        el.removeEventListener("scroll", updateScrollMetrics);
        window.removeEventListener("resize", updateScrollMetrics);
      };
    }
  }, [filteredMilestones]);

  const scroll = (direction: "left" | "right") => {
    const el = scrollContainerRef.current;
    if (el) {
      const scrollAmount = direction === "left" ? -280 : 280;
      el.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    setScrollProgress(val);
    const el = scrollContainerRef.current;
    if (el) {
      const maxScroll = el.scrollWidth - el.clientWidth;
      el.scrollLeft = (val / 100) * maxScroll;
    }
  };

  const scrollToMilestoneIndex = (index: number) => {
    const el = scrollContainerRef.current;
    if (el && filteredMilestones.length > 1) {
      const maxScroll = el.scrollWidth - el.clientWidth;
      const targetScroll = (index / (filteredMilestones.length - 1)) * maxScroll;
      el.scrollTo({ left: targetScroll, behavior: "smooth" });
    }
  };

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedMilestone(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedMilestone) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedMilestone]);

  const WHATSAPP_URL =
    "https://wa.me/4917699016640?text=Hallo%20Mich%C3%A9l,%20ich%20habe%20deine%20interaktive%20Timeline%20gesehen%20und%20m%C3%B6chte%20ein%20Orientierungsgespr%C3%A4ch%20vereinbaren.";

  const getMilestoneIcon = (id: string, category: string) => {
    switch (id) {
      case "roots-1995":
        return <Compass className="w-4 h-4 text-primary-foreground" />;
      case "military-1998":
        return <ShieldCheck className="w-4 h-4 text-primary-foreground" />;
      case "pro-2001":
        return <Award className="w-4 h-4 text-primary-foreground" />;
      case "worldchamp-2006":
        return <Trophy className="w-4 h-4 text-primary-foreground" />;
      case "projects-2008":
        return <Heart className="w-4 h-4 text-primary-foreground" />;
      case "crisis-2016":
        return <Flame className="w-4 h-4 text-primary-foreground" />;
      case "transformation-2022":
        return <Activity className="w-4 h-4 text-primary-foreground" />;
      case "m3-2024":
        return <Sparkles className="w-4 h-4 text-primary-foreground" />;
      default:
        return category === "champion" ? (
          <Trophy className="w-4 h-4 text-primary-foreground" />
        ) : (
          <Clock className="w-4 h-4 text-primary-foreground" />
        );
    }
  };

  return (
    <section className="space-y-6 text-left relative">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border/70 pb-5">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-gold font-bold">
            <Clock className="w-3.5 h-3.5" />
            <span>Interaktive Lebensstationen & Meilensteine</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold tracking-tight text-foreground">
            25+ Jahre Bewegung & Performance
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl">
            Vom frühen Einstieg und Weltmeistertitel über schwere Rückschläge bis zum M³-System. Klicke auf eine Station für die exklusiven Hintergrunddetails.
          </p>
        </div>

        {/* Instagram Badge */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="https://www.instagram.com/michelmeiermoves/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-border bg-white text-xs font-bold text-foreground hover:border-pink-500 hover:text-pink-600 transition-all shadow-sm group"
          >
            <span className="w-2 h-2 rounded-full bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-500" />
            <span>@michelmeiermoves</span>
            <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-pink-600 transition" />
          </a>
        </div>
      </div>

      {/* Filter Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        {[
          { id: "all", label: "Alle Stationen (8)" },
          { id: "roots", label: "Wurzeln & Jugend (1995–2001)" },
          { id: "champion", label: "Weltmeister-Ära (2001–2007)" },
          { id: "crisis", label: "Krise & Transformation (2016–2023)" },
          { id: "m3", label: "M³ Performance (Heute)" },
        ].map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide transition-all whitespace-nowrap cursor-pointer border ${
              activeCategory === cat.id
                ? "bg-gold-gradient text-primary-foreground border-transparent shadow-[var(--shadow-gold)]"
                : "bg-white text-muted-foreground border-border hover:text-foreground hover:border-gold/40 shadow-xs"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Horizontal Connected Timeline Track with Compact Cards */}
      <div className="relative pt-1">
        <div
          ref={scrollContainerRef}
          className="overflow-x-auto pb-4 pt-2 scroll-smooth scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          <div className="min-w-max relative flex gap-5 md:gap-6 px-3 py-2">
            {/* Continuous Top Connector Line spanning across the timeline track */}
            <div className="absolute top-[22px] left-12 right-12 h-[2px] bg-gradient-to-r from-gold/30 via-gold to-gold/30 z-0 pointer-events-none rounded-full shadow-2xs" />

            {filteredMilestones.map((item) => (
              <div
                key={item.id}
                className="w-[235px] sm:w-[260px] md:w-[280px] shrink-0 flex flex-col items-center select-none group"
              >
                {/* Pin Node on the Line */}
                <button
                  type="button"
                  onClick={() => setSelectedMilestone(item)}
                  className="relative z-10 w-10 h-10 rounded-full bg-gold-gradient text-primary-foreground flex items-center justify-center border-3 border-white shadow-sm ring-2 ring-gold/30 group-hover:scale-115 group-hover:ring-gold group-hover:shadow-md transition-all duration-300 cursor-pointer focus:outline-none"
                  aria-label={`Station ${item.year}: ${item.title}`}
                >
                  {getMilestoneIcon(item.id, item.category)}
                </button>

                {/* Date Label directly underneath the node */}
                <div className="mt-2 mb-3 text-center">
                  <span className="inline-block font-mono font-bold text-[11px] text-foreground bg-slate-50 hover:bg-gold/10 border border-border px-2.5 py-0.5 rounded-full group-hover:border-gold/60 transition-colors shadow-2xs">
                    {item.year}
                  </span>
                </div>

                {/* Compact Card Container directly below */}
                <div
                  onClick={() => setSelectedMilestone(item)}
                  className="w-full bg-white rounded-2xl border border-border hover:border-gold/60 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer text-left group-hover:-translate-y-1"
                >
                  {/* Thumbnail Image */}
                  <div className="relative w-full aspect-[16/10] bg-slate-900 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Top Right Badge */}
                    <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-gold/90 text-primary-foreground font-display text-[9px] font-extrabold uppercase tracking-wider shadow-xs">
                      {item.badge}
                    </div>

                    {/* Bottom Era String */}
                    <div className="absolute bottom-2 left-2.5 right-2.5 text-white">
                      <span className="text-[9px] font-mono uppercase tracking-widest text-gold font-bold">
                        {item.era}
                      </span>
                    </div>
                  </div>

                  {/* Card Content: Title & Short Text */}
                  <div className="p-3.5 sm:p-4 space-y-2 flex-grow flex flex-col justify-between bg-white">
                    <div className="space-y-1.5">
                      <h3 className="font-display font-extrabold text-sm sm:text-base text-foreground group-hover:text-gold transition-colors leading-snug line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-[11px] sm:text-xs text-muted-foreground leading-relaxed line-clamp-2">
                        {item.shortDesc}
                      </p>
                    </div>

                    {/* Open Story Action Link */}
                    <div className="pt-2.5 border-t border-border/70 flex items-center justify-between text-[11px] font-bold text-gold group-hover:translate-x-0.5 transition-transform">
                      <span>Story & Details öffnen</span>
                      <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold-gradient group-hover:text-primary-foreground transition-all shadow-2xs">
                        <ArrowRight className="w-3 h-3" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ---------------------------------------------------- */}
        {/* INTERACTIVE BOTTOM SCROLLBAR / PROGRESS CONTROLS */}
        {/* ---------------------------------------------------- */}
        <div className="mt-2 pt-3 border-t border-border/70 flex flex-col sm:flex-row items-center justify-between gap-3 bg-slate-50/60 rounded-2xl p-3 border">
          {/* Left Step Button */}
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            aria-label="Timeline nach links scrollen"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-white text-xs font-bold text-foreground hover:border-gold hover:text-gold disabled:opacity-30 disabled:hover:border-border disabled:hover:text-foreground transition-all shadow-2xs cursor-pointer shrink-0"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            <span>Zurück</span>
          </button>

          {/* Interactive Scrub / Progress Slider Bar */}
          <div className="flex-1 w-full max-w-lg flex items-center gap-3 px-2">
            <div className="relative flex-1 flex items-center group py-2">
              {/* Background Track with Milestone Marks */}
              <div className="w-full h-2 bg-slate-200/90 rounded-full overflow-hidden relative shadow-inner">
                <div
                  className="h-full bg-gold-gradient rounded-full transition-all duration-150"
                  style={{ width: `${Math.max(12, scrollProgress)}%` }}
                />
              </div>

              {/* Draggable scrub range input */}
              <input
                type="range"
                min="0"
                max="100"
                value={scrollProgress}
                onChange={handleSliderChange}
                aria-label="Timeline Scroll-Leiste: Von links nach rechts ziehen"
                className="absolute inset-0 w-full opacity-0 cursor-ew-resize h-8 -top-1"
              />
            </div>

            {/* Quick-Jump Milestone Dots */}
            <div className="hidden md:flex items-center gap-1 shrink-0">
              {filteredMilestones.map((m, idx) => {
                const stepPercent = (idx / Math.max(1, filteredMilestones.length - 1)) * 100;
                const isActive = Math.abs(scrollProgress - stepPercent) < 15;
                return (
                  <button
                    key={m.id}
                    onClick={() => scrollToMilestoneIndex(idx)}
                    title={`${m.year}: ${m.title}`}
                    className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                      isActive ? "bg-gold scale-125" : "bg-slate-300 hover:bg-slate-400"
                    }`}
                  />
                );
              })}
            </div>

            <span className="text-[10px] font-mono text-muted-foreground shrink-0 select-none font-semibold">
              {Math.round(scrollProgress)}%
            </span>
          </div>

          {/* Right Step Button */}
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            aria-label="Timeline nach rechts scrollen"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-white text-xs font-bold text-foreground hover:border-gold hover:text-gold disabled:opacity-30 disabled:hover:border-border disabled:hover:text-foreground transition-all shadow-2xs cursor-pointer shrink-0"
          >
            <span>Weiter</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* DETAIL POPUP / MODAL DIALOG */}
      {/* ---------------------------------------------------- */}
      {selectedMilestone && (
        <div
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn"
          onClick={() => setSelectedMilestone(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-3xl bg-white rounded-3xl border border-border shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col animate-float-up text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Image */}
            <div className="relative w-full h-56 sm:h-72 bg-slate-950 shrink-0">
              <img
                src={selectedMilestone.image}
                alt={selectedMilestone.title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/20" />

              {/* Close Button */}
              <button
                onClick={() => setSelectedMilestone(null)}
                aria-label="Popup schließen"
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 text-white hover:bg-black/90 border border-white/20 flex items-center justify-center transition-all cursor-pointer shadow-lg hover:scale-105"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header Badges & Title */}
              <div className="absolute bottom-5 left-5 right-5 space-y-2 text-white">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-gold-gradient text-primary-foreground font-mono text-xs font-bold shadow-md">
                    {selectedMilestone.year}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur border border-white/30 text-white font-mono text-xs font-semibold">
                    {selectedMilestone.era}
                  </span>
                </div>
                <h3 className="font-display font-extrabold text-xl sm:text-2xl md:text-3xl text-white leading-tight">
                  {selectedMilestone.title}
                </h3>
              </div>
            </div>

            {/* Modal Body - Scrollable Content */}
            <div className="p-6 sm:p-8 space-y-6 overflow-y-auto bg-white flex-grow">
              {/* Lead Paragraph */}
              <p className="text-base sm:text-lg font-semibold text-foreground leading-relaxed border-l-3 border-gold pl-4 py-1 bg-gold/5 rounded-r-xl">
                {selectedMilestone.fullStory.lead}
              </p>

              {/* Full Story Paragraphs */}
              <div className="space-y-4 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {selectedMilestone.fullStory.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Key Highlights */}
              <div className="rounded-2xl border border-border bg-slate-50 p-4 sm:p-5 space-y-3">
                <div className="font-display font-bold text-xs uppercase tracking-wider text-foreground flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-gold" />
                  <span>Wichtige Wegmarken dieser Phase</span>
                </div>
                <ul className="grid sm:grid-cols-2 gap-2 text-xs text-foreground/90">
                  {selectedMilestone.fullStory.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Lesson Callout */}
              <div className="rounded-2xl border border-gold/40 bg-gold/10 p-4 sm:p-5 space-y-1.5">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-gold flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  <span>Die wichtigste Lektion & Erkenntnis</span>
                </div>
                <p className="text-xs sm:text-sm font-medium text-foreground leading-relaxed">
                  {selectedMilestone.fullStory.lesson}
                </p>
              </div>

              {/* Optional Quote */}
              {selectedMilestone.fullStory.quote && (
                <div className="text-xs sm:text-sm italic text-amber-700 border-l-2 border-amber-500 pl-4 py-1.5 bg-amber-500/5 rounded-r-lg font-medium">
                  {selectedMilestone.fullStory.quote}
                </div>
              )}

              {/* Footer Actions inside Modal */}
              <div className="pt-4 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
                <a
                  href="https://www.instagram.com/michelmeiermoves/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-border bg-white text-xs font-bold text-foreground hover:border-pink-500 hover:text-pink-600 transition shadow-sm"
                >
                  <span>Auf Instagram (@michelmeiermoves) ansehen</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gold-gradient text-xs sm:text-sm font-bold text-primary-foreground shadow-[var(--shadow-gold)] hover:opacity-95 transition"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Gespräch mit Michél vereinbaren</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
