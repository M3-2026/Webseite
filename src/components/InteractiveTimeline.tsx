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
    era: "Wurzeln & Schicksale",
    category: "roots",
    categoryLabel: "Jugend & Wurzeln",
    title: "Frühe Schicksale, Breakdance & Erste Verantwortung",
    shortDesc:
      "Vom Aufwachsen über der Familiengastronomie, schweren Verlusten und der nächtlichen Alzheimer-Begleitung der Großmutter bis zum Jugendmusical mit Clueso.",
    image: "/images/performance/hero-performance-3.jpg",
    badge: "Wurzeln & Leidenschaft",
    fullStory: {
      lead:
        "Meine Reise begann nicht mit perfekten Trainingsplänen, sondern auf rauem Beton – und mit harten Prüfungen, die mich zwangen, früh erwachsen zu werden.",
      paragraphs: [
        "Mit 12 Jahren infizierte mich das Breakdance-Fieber. Es waren die 90er: Pappkartons auf dem Asphalt, scheppernde Kassettenrekorder, endlose Versuche, die Gesetze der Schwerkraft zu überlisten. Die Bewegung war mein Ventil, mein kreativer Ausdruck und mein sicherer emotionaler Hafen.",
        "Wir lebten damals im Haus direkt über unserer familieneigenen Gastronomie, die meine Eltern gemeinsam aufgebaut hatten. Doch als ich 14 Jahre alt war, riss der Krebstod meines Vaters innerhalb weniger Monate das bisherige Leben komplett auseinander – meine Mutter führte den Betrieb fortan unter enormem Einsatz alleine weiter.",
        "Kurz darauf verstarb auch mein Großvater, und meine schwer an Alzheimer erkrankte Großmutter zog zu uns. Ein ganzes Jahr lang schlief sie bei mir im Kinderzimmer. Nachts wurde ich regelmäßig durch lautes Poltern wach, wenn sie desorientiert im Dunkeln durch die Wohnung irrte. Ich stand Nacht für Nacht auf, beruhigte sie sanft, stellte mich geduldig immer wieder neu vor, wer ich bin – und begleitete sie behutsam zurück ins Bett. Dieses Jahr hat sich tief in mein Herz eingebrannt und mich gelehrt, was bedingungslose Hingabe, Empathie und Geduld wirklich bedeuten.",
        "1996 überlebte ich gemeinsam mit Freunden einen schweren Autounfall mit mehrfachem Überschlag wie durch ein Wunder. Aus diesen Prüfungen wuchs eine unbändige Kraft: Mit 15 Jahren stand ich bereits selbst als Tanzlehrer auf der Fläche und wirkte im ersten Thüringer Jugend-Musical „Crazy Town“ (an der Seite des damals noch jungen Clueso und der späteren VIVA-Moderatorin Janine Reinhard) mit.",
        "1997 gründete ich mit Freunden die Breakdance-Formation „Nasty Stylistix“, mit der wir bereits 1998 den Titel als Thüringenmeister holten und die ostdeutsche Szene aufmischten.",
      ],
      highlights: [
        "Erste Schritte im Breakdance & Hip Hop mit 12 Jahren auf der Straße",
        "Familiengastronomie & frühe Verantwortung nach dem Verlust des Vaters",
        "Ein Jahr nächtliche Fürsorge für die an Alzheimer erkrankte Großmutter",
        "Mit 15 Jahren bereits erste Lehrtätigkeit als Tanzlehrer",
        "Ensemble-Mitglied im 1. Thüringer Jugendmusical 'Crazy Town' (mit Clueso)",
        "Mitbegründer der 'Nasty Stylistix' & Thüringenmeister 1998",
      ],
      lesson:
        "Schwere Schicksale und Verluste nehmen dir die Illusion, dass dich irgendjemand rettet. Du lernst früh: Wenn du dein Leben und deine Energie nicht selbst in die Hand nimmst, tut es niemand für dich.",
      quote:
        "„Die Bewegung hat mich in den dunkelsten Stunden gehalten – dort habe ich gelernt, was unbändiger Wille, Empathie und echte Selbstverantwortung bedeuten.“",
    },
  },
  {
    id: "military-1998",
    year: "1998 – 2001",
    era: "Disziplin & Lehre",
    category: "roots",
    categoryLabel: "Jugend & Wurzeln",
    title: "Feldjäger-Führung & Staatlich geprüfte Tanzlehrerausbildung",
    shortDesc:
      "Wehrdienst bei den Feldjägern (Militärpolizei) der Bundeswehr und die fundierte 3-jährige Vollzeitausbildung bei Traut & Heigl in Heiligenhaus.",
    image: "/images/performance/m2-bruce-lee-mastery.jpg",
    badge: "Struktur & Pädagogik",
    fullStory: {
      lead:
        "Kameradschaft, Disziplin und klare Abläufe unter extremem Druck – kombiniert mit fundierter Bewegungsdidaktik, Pädagogik und funktioneller Anatomie.",
      paragraphs: [
        "Von 1998 bis 1999 leistete ich meinen Grundwehrdienst bei den Feldjägern (Militärpolizei) der Bundeswehr. Schichtbetrieb bei Tag und Nacht, Alarmbereitschaft, Absicherung und Eskortenfahrten lehrten mich, was es bedeutet, unter mentaler und physischer Dauerbelastung die Ruhe zu bewahren und im Team bedingungslos Verantwortung zu tragen.",
        "Direkt im Anschluss (1999–2001) zog es mich nach Nordrhein-Westfalen zur renommierten Tanzschule Traut & Heigl in Heiligenhaus. Hier absolvierte ich eine dreijährige, intensive praktische Vollzeitausbildung zum staatlich geprüften Tanzlehrer.",
        "In dieser Phase eignete ich mir das wissenschaftliche Fundament der Bewegungslehre an: Funktionelle Anatomie, Haltungsanalysen, Rhythmusgefühl, Didaktik und die Kunst, komplexe motorische Muster so zu zerlegen, dass Menschen jeden Alters und Leistungsniveaus sie sicher und mit Begeisterung erlernen können.",
      ],
      highlights: [
        "Feldjäger-Wehrdienst (Bundeswehr): Führung, Disziplin & Schichtbelastung",
        "3-jährige Tanzlehrerausbildung bei Traut & Heigl (Heiligenhaus)",
        "Fundierte Ausbildung in funktioneller Anatomie & Bewegungsvermittlung",
        "Start der deutschlandweiten Workshop- und Coaching-Tätigkeit",
      ],
      lesson:
        "Disziplin ist keine Einschränkung, sondern der Schlüssel zur Freiheit. Wenn deine täglichen Routinen und deine Struktur stehen, bleibst du auch im größten Alltagsstress belastbar.",
      quote:
        "„Wer gelernt hat, seinen eigenen Körper und Geist zu disziplinieren, kann andere Menschen mit Klarheit und echter Empathie führen.“",
    },
  },
  {
    id: "pro-2001",
    year: "2001 – 2005",
    era: "Profitanz & Masterclasses",
    category: "champion",
    categoryLabel: "Weltmeister-Ära",
    title: "Tanzfabrik Erfurt, Battle of the Year & Internationale Masterclasses",
    shortDesc:
      "Dozent an der Tanzfabrik Erfurt, nationale Meisterschaften und Meisterkurse mit Weltstars von Britney Spears bis Justin Timberlake.",
    image: "/images/performance/hero-performance-2.jpg",
    badge: "Hochleistung & Elite",
    fullStory: {
      lead:
        "Tägliches Ausreizen der menschlichen Leistungsgrenzen, Hunderte Schüler und der direkte Austausch mit den besten Choreografen des Planeten.",
      paragraphs: [
        "Nach meiner Ausbildung kehrte ich nach Erfurt zurück und wurde fester Dozent an der renommierten „Tanzfabrik Erfurt“. Über viele Jahre bildete ich hunderte Tänzer, Jugendliche und Nachwuchstalente aus und etablierte Thüringen als festen Punkt auf der deutschen Urban-Dance-Landkarte.",
        "Gleichzeitig trainierten wir mit den „Nasty Stylistix“ bis zur physischen Erschöpfung. 2005 gelang uns der Durchbruch beim nationalen Vorentscheid des legendären „Battle of the Year“ (der inoffiziellen Weltmeisterschaft der Breakdance-Crews) mit einer Top-Platzierung.",
        "Um meine eigene Leistungsfähigkeit auf internationales Niveau zu heben, saugte ich jedes Wissen auf: Ich absolvierte Masterclasses und intensives Coaching bei Ikonen der globalen Tanz- und Performance-Welt – darunter Breakdance-Legende Storm (Niels Robitzky), Marco da Silva (No Angels), Marvin A. Smith (Britney Spears), Marty Kudelka (Chef-Choreograf von Justin Timberlake) und US-Pionier Dante Harper.",
      ],
      highlights: [
        "Leitender Dozent an der Tanzfabrik Erfurt (Hunderte Absolventen)",
        "Erfolgreiche Platzierung beim Battle of the Year National 2005",
        "Masterclasses mit Storm, Marvin A. Smith (Britney Spears) & Marty Kudelka (Justin Timberlake)",
        "Perfektionierung von Athletik, Kraftausdauer und Höchstleistungs-Choreografie",
      ],
      lesson:
        "Wahre Spitzenleistung entsteht niemals durch Zufall. Sie ist das Resultat der bedingungslosen Wiederholung der Grundlagen, bis jede Faser deines Körpers automatisch reagiert.",
      quote:
        "„Von den weltbesten Coaches habe ich gelernt: Erst wenn die Grundlagen absolut perfekt sitzen, entsteht echte Magie auf der Bühne.“",
    },
  },
  {
    id: "worldchamp-2006",
    year: "2006 – 2007",
    era: "Weltmeistertitel & Theater",
    category: "champion",
    categoryLabel: "Weltmeister-Ära",
    title: "IDO Breakdance-Weltmeister & Solorollen am Theater Erfurt",
    shortDesc:
      "Der Weltmeistertitel mit den „Da Rookies“ und renommierte Solorollen in „Anatevka“ und „Der Feuervogel“ am Theater Erfurt.",
    image: "/images/performance/hero-performance-1.jpg",
    badge: "Weltklasse & Kunst",
    fullStory: {
      lead:
        "Der Traum jedes Athleten wird Wirklichkeit: Offizieller Weltmeistertitel und Standing Ovations auf den renommiertesten Bühnen Europas.",
      paragraphs: [
        "2006 schloss ich mich der Ausnahme-Formation „Da Rookies“ an – einer der stärksten und renommiertesten Breakdance-Crews Europas. In monatelangem Höchstleistungstraining perfektionierten wir Akrobatik, Kraft und synchrone Schnelligkeit.",
        "2006/2007 dann der historische Triumph: Vor internationaler Fachjury und tausenden Zuschauern gewannen wir den offiziellen IDO Breakdance-Weltmeistertitel und setzten uns gegen die Weltspitze durch.",
        "Parallel öffnete sich die Tür zur Hochkultur: Als fest engagierter Solist stand ich am Theater Erfurt auf der Bühne in großen Opern- und Ballettinszenierungen – darunter der Broadway-Klassiker „Anatevka“ und Igor Strawinskys Meisterwerk „Der Feuervogel“. Es folgten europaweite Tourneen, Fernsehauftritte und Galashows vor großem Publikum.",
      ],
      highlights: [
        "Offizieller IDO Breakdance-Weltmeister 2006/2007 mit den 'Da Rookies'",
        "Solist am Theater Erfurt in 'Anatevka' und 'Strawinsky – Der Feuervogel'",
        "Internationale Galashows, TV-Auftritte & Tourneen durch ganz Europa",
        "Verschmelzung von urbaner Höchstleistungs-Akrobatik und klassischem Theater",
      ],
      lesson:
        "Unter maximalem Druck vor 2.000 Menschen gibt es keinen Konjunktiv. Nur wenn Geist und Körper eine unzerstörbare Einheit bilden, kannst du auf den Punkt Spitzenleistung abrufen.",
      quote:
        "„Weltmeister wirst du nicht am Tag des Wettkampfs – du wirst es an den tausenden Tagen davor im stillen Trainingsraum.“",
    },
  },
  {
    id: "projects-2008",
    year: "2008 – 2015",
    era: "Choreografie & Vaterschaft",
    category: "roots",
    categoryLabel: "Jugend & Wurzeln",
    title: "Internationale Großprojekte & Das Leben als alleinerziehender Vater",
    shortDesc:
      "Leitung von Kultur- und Jugendprojekten („Air4Day“, „De-Light-House“) und die größte persönliche Bewährungsprobe des Lebens.",
    image: "/images/performance/hero-performance-5.jpg",
    badge: "Führung & Familie",
    fullStory: {
      lead:
        "Internationale Events mit tausenden Teilnehmern organisieren – und gleichzeitig als alleinerziehender Vater das Leben eines Kleinkinds meistern.",
      paragraphs: [
        "In dieser Schaffensphase konzipierte, choreografierte und leitete ich internationale Großprojekte wie „Air4Day meets Kingz Of The Circle“, „De-Light-House“ und „DLH 2.0 Streetskillz“. Zudem leitete ich bilaterale Austauschprogramme mit Frankreich (Picardie) und den Niederlanden (Den Haag) und engagierte mich als Schirmherr für benachteiligte Jugendliche.",
        "Doch mitten in dieser intensiven Phase stellte das Leben mir die größte Prüfung: Als meine Tochter gerade einmal ein Jahr alt war, trennte sich ihre Mutter und verließ unsere Familie. Von einer Sekunde auf die andere war ich alleinerziehender Vater eines Kleinkinds.",
        "Es folgten Jahre des extremen Spagats: Zwischen Windeln wechseln, Brei kochen, schlaflosen Nächten, Kindergartenorganisation, Schichtbetrieb und internationalen Projektfristen gab es kein Netz und keinen doppelten Boden. Diese Jahre ohne Ausreden haben mein Verständnis von alltagstauglicher Organisation und echter Belastbarkeit für immer geprägt.",
      ],
      highlights: [
        "Projektleitung & Moderation von 'Air4Day' & 'Kingz Of The Circle'",
        "Bilaterale Jugendaustauschprogramme (Deutschland, Frankreich, Niederlande)",
        "Schirmherrschaft & Integrationsarbeit für benachteiligte Jugendliche",
        "Volle Verantwortung und Meisterschaft als alleinerziehender Vater ab dem 1. Lebensjahr",
      ],
      lesson:
        "Ein Kind alleine großzuziehen zeigt dir ungeschminkt, was echte Prioritäten bedeuten. Es gibt keine Ausreden – wenn du funktionieren musst, brauchst du Systeme, die auch bei Schlafmangel und Zeitnot greifen.",
      quote:
        "„Echte Stärke zeigt sich nicht im Rampenlicht, sondern wenn du nachts um 3 Uhr Fieber misst und morgens um 8 Uhr mit vollem Einsatz vor deinen Schülern stehst.“",
    },
  },
  {
    id: "crisis-2016",
    year: "2016 – 2021",
    era: "Der Schicksalhafte Wendepunkt",
    category: "crisis",
    categoryLabel: "Krise & Transformation",
    title: "HWS-Bandscheibenvorfall, Schmerz-Odyssee & Die Biochemie-Wende",
    shortDesc:
      "Schwerer Halswirbelsäulenvorfall (C6/C7), chronische Entzündungen und Darmprobleme – und die radikale Selbstheilung ohne Operation.",
    image: "/images/gym-shooting/A7401521.jpg",
    badge: "Krise & Der Reset",
    fullStory: {
      lead:
        "Als der Weltmeister-Körper plötzlich kollabierte: Die dunkelste Phase meines Lebens und die Geburtsstunde des M³-Gesundheitssystems.",
      paragraphs: [
        "2016 zog mein Körper die absolute Notbremse. Ein schwerer Bandscheibenvorfall in der Halswirbelsäule (HWS C6/C7) mit Nervenkompression raubte mir über Nacht Kraft und Beweglichkeit. Es folgten ein massives Schulter-Impingement, ständige Nackenkrämpfe, Taubheitsgefühle in den Fingern, chronische Entzündungsschübe und eine schwere Darmdysbiose durch Parasitenbefall.",
        "Die Schulmedizin bot mir fast ausschließlich Schmerzmittel, Cortisonspritzen und eine dringende Wirbelsäulen-OP (Versteifung) an. Ich erlebte den totalen mentalen Tiefpunkt: Rückzug, Frustration, schwere Schlafstörungen und eine fatale Abwärtsspirale.",
        "An diesem Tiefpunkt traf ich die mutigste Entscheidung meines Lebens: Keine voreilige OP! Ich begann ein fünfjähriges, radikales Selbststudium in funktioneller Biochemie, mitochondrialer Zellenergie (ATP), Mikrobiom- und Darmsanierung sowie Neuro-Athletik und Faszientraining.",
        "Ich heilte meinen Darm, löschte die chronischen Entzündungen von innen heraus und baute meine Biomechanik millimetergenau neu auf. Das Ergebnis: Ich wurde zu 100 % schmerzfrei, stand wieder auf dem Kopf und hatte mehr Energie und Belastbarkeit als je zuvor.",
      ],
      highlights: [
        "Schwerer Bandscheibenvorfall HWS (C6/C7), Impingement & Nervenblockaden",
        "Chronische Darmbeschwerden, Erschöpfung und Entzündungs-Odyssee",
        "Mutige Entscheidung gegen Operation & Versteifung der Wirbelsäule",
        "5 Jahre intensives Selbststudium in Biochemie, Zellgesundheit & Mikrobiom",
        "Vollständige, 100% schmerzfreie Regeneration aus eigener Kraft",
      ],
      lesson:
        "Wenn dein biochemisches Fundament und dein Darm brennen, ist jedes harte Training wie Benzin ins Feuer. Du musst erst die Zellenergie und den Stoffwechsel reparieren – dann wird der Körper von allein wieder schmerzfrei und leistungsfähig.",
      quote:
        "„Niemand wird dich retten. Du musst selbst die volle Verantwortung für deinen Körper übernehmen und die Ursachen an der Wurzel heilen.“",
    },
  },
  {
    id: "transformation-2022",
    year: "2022 – 2023",
    era: "Wissenschaft & Rekonstruktion",
    category: "crisis",
    categoryLabel: "Krise & Transformation",
    title: "Die 90-Tage Challenge, TÜV-Zertifizierung & Psychologische Bestnoten",
    shortDesc:
      "Rigorose Selbsttransformation, Zertifizierung zum Berufscoach (TÜV Rheinland) und Höchstnoten (5/5) in Führung, Durchhaltewille und Selbstwirksamkeit.",
    image: "/images/gym-shooting/A7401576.jpg",
    badge: "Validierung & System",
    fullStory: {
      lead:
        "Die Fusion aus 25 Jahren Bewegungserfahrung, biochemischer Wissenschaft und fundierter psychologischer Führungskompetenz.",
      paragraphs: [
        "Ende 2022 stellte ich mich der eigenen Bewährungsprobe: In einer wissenschaftlich dokumentierten 90-Tage Transformation synchronisierte ich Ernährung, Krafttraining, Zellstoffwechsel und Schlafrhythmus perfekt. Das Ergebnis war eine radikale Körpertransformation und der finale Beweis, wie mächtig ein ganzheitliches System ist.",
        "Parallel professionalisierte ich meine Coaching-Methodik: Ich absolvierte fundierte Weiterbildungen im Bewerbungsmanagement und Berufscoaching (TÜV Rheinland), um Klienten auch psychologisch und mental durch schwierige Lebensphasen zu führen.",
        "Die offizielle psychologische Potenzial- und Eignungsdiagnostik (Bundesagentur für Arbeit) attestierte mir die absoluten Maximalwerte (Bereich 5 von 5) in: Führungs- und Gestaltungsmotivation, Durchhaltevermögen & Frustrationstoleranz, Selbstwirksamkeit, Ergebnisorientierung und konfliktfähiger Empathie.",
        "Aus dieser Kombination entstand der finale Bauplan von M³: Die drei untrennbaren Säulen Metabolism (Stoffwechsel), Movement (Bewegung) und Mental (Mindset).",
      ],
      highlights: [
        "Erfolgreiche 90-Tage Challenge: Dokumentierte Bestform & Vitalitätsmaximum",
        "Zertifizierter Berufscoach & Bewerbungsmanager (TÜV Rheinland)",
        "Offizielle Bestnoten (5 von 5) in Durchhaltevermögen, Führung & Selbstwirksamkeit",
        "Entwicklung des geschützten 3-Säulen-Systems von M³ Performance",
      ],
      lesson:
        "Große Transformationen scheitern selten am Mangel an Wissen, sondern an fehlender psychologischer Struktur und mangelnder Alltagstauglichkeit unter hoher beruflicher Belastung.",
      quote:
        "„Disziplin wird einfach, wenn das System logisch ist und du die ersten spürbaren Resultate an deinem eigenen Körper siehst.“",
    },
  },
  {
    id: "m3-2024",
    year: "2024 – Heute",
    era: "M³ Performance & Master Coach",
    category: "m3",
    categoryLabel: "M³ Performance",
    title: "M³ Performance, Master Personal Trainer & Das Autonomie-Prinzip",
    shortDesc:
      "Die Bündelung eines Lebenswerks: 1:1 Betreuung von Unternehmern und Führungskräften für dauerhafte Vitalität, Schmerzfreiheit und Unabhängigkeit.",
    image: "/images/gym-shooting/A7401490.jpg",
    badge: "Lebenswerk & 1:1 Coaching",
    fullStory: {
      lead:
        "Mein Lebenswerk in Aktion: Menschen mitten im Leben zu echter Gesundheit, schmerzfreier Kraft und dauerhafter Eigenverantwortung führen.",
      paragraphs: [
        "Seit Januar 2024 widme ich mich zu 100 % meiner Berufung: M³ Performance & Gesundheit. Begleitend absolviere ich die Ausbildung zum Master Personal Trainer i.A. – der höchsten nationalen Qualitätsstufe im Personal Training.",
        "Auf meinem Instagram-Kanal (@michelmeiermoves) teile ich täglich ungeschönte, praxisnahe Einblicke aus Training, Biochemie und Lebensführung, die tausende Menschen inspirieren und wachrütteln.",
        "In der exklusiven 1:1 Begleitung helfe ich vielbeschäftigten Unternehmern, Selbstständigen und Führungskräften, chronische Nacken- und Rückenschmerzen zu besiegen, Nachmittagstiefs und Bauchfett loszuwerden und ihr Energieniveau dauerhaft zu verdoppeln.",
        "Unser oberstes Credo bei M³ lautet: Autonomie statt Abhängigkeit. Ich mache mich für meine Klienten bewusst überflüssig, indem ich ihnen beibringe, wie ihr Körper, ihr Stoffwechsel und ihr Nervensystem funktionieren – für ein Leben in voller Kraft und Unabhängigkeit.",
      ],
      highlights: [
        "Gründung & Vollzeit-Fokus auf M³ Performance & Gesundheit",
        "Master Personal Trainer (i.A.) Ausbildung (Höchste Qualifikationsstufe)",
        "Tägliche Bewegungsimpulse & Aufklärung auf Instagram (@michelmeiermoves)",
        "Exklusive 1:1 Betreuung mit messbaren Resultaten in Stoffwechsel & Schmerzfreiheit",
        "100% Autonomie-Fokus: Klienten lernen, sich dauerhaft selbst zu steuern",
      ],
      lesson:
        "Wahre Gesundheit bedeutet Unabhängigkeit. Du brauchst keinen Trainer, der dich ein Leben lang an der Hand hält – du brauchst das Wissen und das System, um dich selbst dauerhaft in Bestform zu halten.",
      quote:
        "„Manchmal braucht es Verständnis. Manchmal einen Arschtritt. Oft beides. Aber immer mit dem Ziel deiner vollkommenen Freiheit.“",
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
