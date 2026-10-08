export { posts } from './posts';

export const contact = {
  phone: '4917699016640',
  instagram: 'https://www.instagram.com/michelmeiermoves/',
  cal: 'https://cal.com/michelmeier/30min',
  wa: (text: string) =>
    `https://wa.me/4917699016640?text=${encodeURIComponent(text)}`,
  catalog: 'https://wa.me/c/4917699016640',
};

export const wa = {
  talk: contact.wa('Hallo Michél, ich interessiere mich für ein kostenloses Erstgespräch.'),
  start: contact.wa('Hallo Michél, ich möchte den M³ System Start machen.'),
  bodyReset: contact.wa('Hallo Michél, ich interessiere mich für den Body Reset.'),
  nutrition: contact.wa('Hallo Michél, ich interessiere mich für das Ernährungscoaching.'),
  painfree: contact.wa('Hallo Michél, ich interessiere mich für Schmerzfrei.'),
  training: contact.wa('Hallo Michél, ich interessiere mich für das Performance Training.'),
  duo: contact.wa('Hallo Michél, wir interessieren uns für das Coaching für Zwei.'),
  gut: contact.wa('Hallo Michél, ich interessiere mich für die 16-Tage Darmkur.'),
  metabolicCure: contact.wa('Hallo Michél, ich interessiere mich für die Stoffwechselkur.'),
  supply: contact.wa('Hallo Michél, ich interessiere mich für die Goldene Grundversorgung.'),
  mental: contact.wa('Hallo Michél, ich interessiere mich für M³ Mindset & Mentale Klarheit.'),
  m2Mobility: contact.wa('Hallo Michél, ich interessiere mich für den Mobility Reset.'),
  m3Check: contact.wa('Hallo Michél, ich möchte den kostenlosen M³ Orientierungs-Check.'),
  m3Sleep: contact.wa('Hallo Michél, ich interessiere mich für den M³ Schlaf-Impuls.'),
  m3Routines: contact.wa('Hallo Michél, ich interessiere mich für M³ Alltags-Routinen.'),
  m3Hold: contact.wa('Hallo Michél, ich interessiere mich für M³ Notfall-Routinen.'),
};

export interface ScienceCard {
  title: string;
  text: string;
  image: string;
}

export interface Principle {
  title: string;
  text: string;
}

export interface Experience {
  image: string;
  title: string;
  text: string;
  quote: string;
}

export interface Pillar {
  id: 'm1' | 'm2' | 'm3';
  slug: string;
  mark: string;
  name: string;
  label: string;
  title: string;
  quote: string;
  lead: string;
  body: string;
  color: string;
  image: string;
  science: ScienceCard[];
  experience: Experience;
  principles: Principle[];
  signals: string[];
  prompts?: { q: string; hint: string }[];
}

export const pillars: Pillar[] = [
  {
    id: 'm1',
    slug: 'metabolism',
    mark: 'M¹',
    name: 'Metabolism',
    label: 'Fundament',
    title: 'Gesundheit von innen',
    quote: 'Wenn dein Fundament brennt, nützt kein härteres Training.',
    lead: 'Darm, Energie, Blutzucker und eine vernünftige Grundversorgung — damit Leistung wieder möglich wird.',
    body: 'M¹ ist die erste Säule, weil Leistung oft zuerst ein Stoffwechselthema ist — und erst danach ein Trainingsthema. Darm, Blutzucker und Versorgung entscheiden, ob der Körper Energie hat oder nur noch kompensiert. Wir bringen das in eine klare, zeitlich begrenzte Ordnung. Kein Detox-Theater. Keine Verbotsliste.',
    color: '#e8a14a',
    image: '/images/mod-body-reset.jpg',
    science: [
      {
        title: 'Darm und Energie',
        text: 'Der Darm steuert mehr als die Verdauung. Über Immunsignale und den Nervenweg zum Gehirn beeinflusst er Entzündung, Stimmung und verfügbare Energie. Ein gereizter Darm erklärt oft Müdigkeit, Heißhunger und „Nebel im Kopf“ — Probleme, die kein härteres Training löst.',
        image: '/images/blog-mikrobiom.jpg',
      },
      {
        title: 'Blutzucker bestimmt den Tag',
        text: 'Starke Schwankungen des Blutzuckers erzeugen Nachmittagstiefs, Heißhungerattacken und unruhigen Schlaf. Stabilere Mahlzeiten — genug Protein, Ballaststoffe, sinnvolles Timing — beruhigen das. Das ist Physiologie, keine Diätmoral.',
        image: '/images/blog-blutzucker.jpg',
      },
      {
        title: 'Was die Zellen brauchen',
        text: 'Muskeln und Organe brauchen Energie in Form von ATP — dem „Treibstoff“ der Zelle. Dafür braucht der Körper unter anderem Eisen, B-Vitamine, Magnesium und Vitamin D in ausreichender, gut aufnehmbarer Form. Fehlen sie, bleiben Kraft und Erholung begrenzt — egal wie gut der Trainingsplan ist.',
        image: '/images/mod-supply.jpg',
      },
      {
        title: 'Stille Entzündung',
        text: 'Ein überlasteter Darm hält den Körper oft in einem leisen Alarmzustand. Gelenke, Haut, Schlaf und Regeneration zahlen mit. Erst wenn dieses Rauschen sinkt, trägt Belastung wieder.',
        image: '/images/mod-gut.jpg',
      },
    ],
    experience: {
      image: '/images/michel-work-nutrition.jpg',
      title: 'Die Wende kam nicht durch mehr Training.',
      text: 'Nach einem Bandscheibenvorfall im Halswirbelbereich (C6/C7, 2016–2021) reichte Disziplin nicht mehr. Taubheit, Fehldiagnosen, ein Körper, der trotz Willen nicht mitzog. Michél hat den Weg zurück nicht über mehr Sätze gefunden, sondern über Darm, Ernährung und Versorgung — später verdichtet in der 90-Tage-Arbeit und der Mikrobiom-Sanierung 2022/23. M¹ ist die Antwort auf das, was er selbst zu spät verstanden hat: Wenn das Fundament brennt, macht mehr Last den Brand größer.',
      quote: 'Ich habe am eigenen Körper gelernt, dass Leistung ohne Stoffwechselordnung nur Verschleiß ist.',
    },
    principles: [
      {
        title: 'Erst Status, dann Eingriff',
        text: 'Verdauung, Energieverlauf, Schlaf und bisherige Versuche kommen auf den Tisch. Kein Schema F, keine 20 parallelen Biohacks.',
      },
      {
        title: 'Zeitlich begrenzt, dann Alltag',
        text: 'Reset-Phasen haben ein Ende. Was bleibt, ist eine Grundversorgung und eine Mahlzeitenlogik, die Beruf und Familie trägt.',
      },
      {
        title: 'Nahrung vor Dose',
        text: 'Mikronährstoffe nur, wenn sie einen klaren Hebel haben. Die Basis bleibt Essen, Rhythmus und Schlaf.',
      },
    ],
    signals: [
      'Müde trotz Schlaf, Heißhunger, Blähbauch oder das Gefühl eines blockierten Stoffwechsels',
      'Training bringt keinen Fortschritt — oder macht dich leerer',
      'Diäten wurden durchgehalten und danach wieder verloren',
    ],
  },
  {
    id: 'm2',
    slug: 'movement',
    mark: 'M²',
    name: 'Movement',
    label: 'Biomechanik',
    title: 'Technik vor Gewicht',
    quote: 'Technik schlägt Gewicht – Immer.',
    lead: 'Saubere Technik, stabile Gelenke und Training, das im Alltag trägt — ohne Verschleiß.',
    body: 'M² folgt auf das Fundament, weil Last ohne saubere Bewegung nur Ausweichmuster verstärkt. Wir trainieren Bewegungen, nicht isolierte Muskeln: Kontrolle, stabile Gelenke, klare Kraftübertragung. Intensität kommt, sobald die Technik trägt. Nicht vorher.',
    color: '#3dba8a',
    image: '/images/michel-trainer.jpg',
    science: [
      {
        title: 'Kontrolle vor Last',
        text: 'Dein Nervensystem steuert Timing, Stabilität und Kraftschluss. Ohne saubere Ansteuerung erzeugt mehr Gewicht nur lautere Ausweichmuster — oft genau dort, wo es später schmerzt.',
        image: '/images/blog-technik.jpg',
      },
      {
        title: 'Die Bewegungskette',
        text: 'Schmerz sitzt selten am Ort der Ursache. Eine steife Hüfte oder ein fehlender Fußkontakt zwingt Knie, unteren Rücken oder Nacken zur Kompensation. Wir suchen die Stelle, die die Kette unterbricht.',
        image: '/images/blog-kette.jpg',
      },
      {
        title: 'Schmerz und Belastbarkeit',
        text: 'Schmerz ist ein Schutzsignal, kein reines Gewebemaß. Gereizte Strukturen brauchen dosierte, saubere Belastung — nicht Schonung ohne Ende und nicht Ego-Sätze. Kapazität wächst, wenn die Bewegung wieder tragfähig ist.',
        image: '/images/blog-belastbarkeit.jpg',
      },
      {
        title: 'Qualität vor Kalender',
        text: 'Kraft und Explosivität brauchen Wiederholbarkeit. Erst wenn die Bewegung unter Ermüdung hält, steigt Last oder Tempo. Das ist Trainingslehre, kein Stil.',
        image: '/images/mod-training-v2.jpg',
      },
    ],
    experience: {
      image: '/images/michel-trainer.jpg',
      title: '30+ Jahre Bewegung — und ein Wirbel, der alles gestoppt hat.',
      text: 'Breakdance, Bühne, Battle of the Year, IDO-Weltmeister 2006/2007: Michél kennt hohe Belastung, Explosivität und Wiederholung unter Druck. Der Bandscheibenvorfall im Halswirbelbereich (C6/C7) hat gezeigt, wie schnell das System kippt, wenn Technik und Gewebe nicht mehr tragen. Zurück in die Belastbarkeit führte nicht Stillstand, sondern präzise Bahnen, Mobilität und dosierter Reiz. Deshalb ist „Technik vor Gewicht“ bei ihm keine Formel aus einem Lehrbuch. Es ist der Unterschied zwischen weitermachen und ausfallen.',
      quote: 'Ich weiß, wie sich ein Körper anfühlt, der nicht mehr gehorcht — und was ihn wieder tragfähig macht.',
    },
    principles: [
      {
        title: 'Screen vor Plan',
        text: 'Bewegungsqualität, Schwachstellen, echte Kapazität. Der Spiegel ist kein Maß.',
      },
      {
        title: 'Ursache vor Symptom',
        text: 'Wir korrigieren die Bahn, die den Schmerz erzeugt — nicht nur die Stelle, die brennt.',
      },
      {
        title: 'Last erst nach sauberer Wiederholung',
        text: '1:1-Korrektur live. Intensität folgt, wenn die Technik unter Last hält.',
      },
    ],
    signals: [
      'Rücken, Nacken oder Gelenke bremsen Alltag oder Training',
      'Unsicherheit bei der Ausführung, Plateau trotz Aufwand',
      'Nach Verletzung oder langer Pause wieder belastbar werden — ohne Rateversuch',
    ],
  },
  {
    id: 'm3',
    slug: 'mental-performance',
    mark: 'M³',
    name: 'Mental Performance',
    label: 'Entscheidungsökonomie',
    title: 'Leistung scheitert zuerst im Kopf.',
    quote: 'Wer jeden Tag neu entscheidet, verliert gegen den Kalender.',
    lead: 'Schlaf, Stress und wenige feststehende Entscheidungen — damit M¹ und M² im Alltag halten.',
    body: 'Mental Performance ist kein Mood und kein Motivationsabo. Es ist Entscheidungsökonomie: weniger offene Fragen, klarere Wenn-dann-Regeln, Schlaf und Stress als harte Leistungsfaktoren. Ohne diese Schicht zerfallen M¹ und M² nach drei guten Wochen. Ziel ist Selbstverantwortung — nicht Abhängigkeit von Michél.',
    color: '#e8a14a',
    image: '/images/mental-hero.png',
    prompts: [
      {
        q: 'Was opferst du als Erstes, wenn dein Kalender brennt?',
        hint: 'Schlaf, saubere Mahlzeiten oder dein Training? Wer unter Stress sofort die eigene biologische Basis kürzt, hat kein Zeitproblem – sondern keine geschützte Mindestroutine. In M³ definieren wir Non-Negotiables, die selbst im dichtesten Alltag unantastbar stehen bleiben.',
      },
      {
        q: 'Wie oft verhandelst du tagsüber mit dir selbst über dein Training & Essen?',
        hint: 'Jede innere Verhandlung verbraucht Willenskraft aus demselben Tank wie dein Job. Wer abends erst entscheidet, verliert gegen Erschöpfung. M³ ersetzt zermürbende Selbstverhandlung durch feste Wenn-Dann-Regeln (Entscheidungsökonomie).',
      },
      {
        q: 'Funktioniert dein System auch an Tagen, an denen du null Motivation hast?',
        hint: 'Motivation ist ein unzuverlässiges Gefühl – Systeme sind biologische Verlässlichkeit. Wenn dein Fortschritt von Motivation abhängt, zerfällt er nach drei Wochen. M³ baut deine Gewohnheiten so, dass dein Standard trägt, selbst wenn der Kopf streikt.',
      },
    ],
    science: [
      {
        title: 'Willenskraft ist endlich',
        text: 'Selbstkontrolle verbraucht Aufmerksamkeit und Schlaf. Wer jeden Tag neu entscheidet, verliert gegen den Kalender. Stabile Wenn-dann-Paare entlasten den präfrontalen Cortex. Disziplin wird zur Umgebung — nicht zum täglichen Kampf.',
        image: '/images/mental-decide.png',
      },
      {
        title: 'Schlaf steuert Fehlerquote',
        text: 'Tiefschlaf repariert Gewebe und Stoffwechsel. REM reguliert Emotionen. Fragmentierter Schlaf erhöht Schmerz, Cravings und Entscheidungsfehler. Schlaf ist keine Soft-Skill. Er ist Leistungsarbeit.',
        image: '/images/blog-schlaf.jpg',
      },
      {
        title: 'Stress frisst Klarheit',
        text: 'Chronische HPA-Aktivierung hält Cortisol unruhig, senkt Erholung und verschiebt Hunger und Entzündung. Atmung, Abendritual und echte Lastpausen sind physiologische Hebel — kein Wellness.',
        image: '/images/mental-hero.png',
      },
      {
        title: 'Autonomie schlägt Aufsicht',
        text: 'Menschen bleiben in Systemen, die sie selbst steuern. Deshalb: minimale, sichtbare Routinen und klare Entscheidungskriterien. Der Coach wird überflüssig. Das ist Absicht.',
        image: '/images/mental-focus.png',
      },
    ],
    experience: {
      image: '/images/michel-portrait.jpg',
      title: 'Disziplin hat im Sport gereicht. Im Leben nicht.',
      text: 'Alleinerziehender Vater. 13 Ausgaben Air4Day. Schul- und Jugendprojekte. Ein Halswirbel, der die alte Härte unmöglich machte. Michél kennt den Punkt, an dem Vorsätze den Alltag verlieren — nicht aus Schwäche, sondern weil zu viele Entscheidungen offen bleiben. M³ kommt aus diesem Bruch: weniger Heroismus, mehr Struktur. Verständnis, wo jemand hält. Ein klarer Impuls, wo jemand sich dreht. Ohne Dogma. Mit dem Ziel, dass du ohne ihn weiterkommst.',
      quote: 'Manchmal braucht es Verständnis. Manchmal einen Arschtritt. Oft beides.',
    },
    principles: [
      {
        title: 'Entscheidungen schließen — nicht stapeln',
        text: 'Drei feststehende Regeln schlagen zwölf offene Optionen.',
      },
      {
        title: 'Schlaf und Stress zuerst lesen',
        text: 'Bevor neue Habits kommen: Was regiert Abend und Morgen wirklich?',
      },
      {
        title: 'Selbststeuerung als Exit',
        text: 'Du lernst, wann du nachsteuerst. M³ ist Rahmen — kein Abo auf Motivation.',
      },
    ],
    signals: [
      'Zu viele offene Entscheidungen, ständig Abbruch, kein roter Faden',
      'Stress frisst Vorsätze — Schlaf kippt zuerst',
      'M¹ oder M² greifen — und zerfallen im Alltag wieder',
    ],
  },
];

export interface ModuleItem {
  slug: string;
  pillar: 'm1' | 'm2' | 'm3';
  tier: 'free' | 'entry' | 'core' | 'premium' | 'high';
  priceLabel: string;
  badge: string;
  title: string;
  kicker: string;
  text: string;
  tags: string[];
  image: string;
  wa: string;
  forWhom: string[];
  includes: string[];
  steps: { title: string; text: string }[];
  outcome: string;
}

export const modules: ModuleItem[] = [
  {
    slug: 'body-reset',
    pillar: 'm1',
    tier: 'premium',
    priceLabel: 'Kombi-Reset · 3 Bausteine',
    badge: '360° Reset-Dach',
    title: 'M³ Body Reset',
    kicker: 'Drei biologische Bausteine. Ein zellulärer Neustart.',
    text: 'Body Reset ist das physiologische Dach für deinen Neustart von innen. Es verbindet drei eigenständige Bausteine, die einzeln oder nacheinander greifen: die 16-Tage-Darmkur (Darmreinigung & Zellentgiftung), die Stoffwechselkur (Genom- & Stoffwechsel-Reset) und die Goldene Grundversorgung (tägliche Mikronährstoff-Basis). Du beziehst nur die benötigten Produkte — die persönliche 1:1 Betreuung durch Michél ist komplett kostenfrei inklusive.',
    tags: ['16-Tage Darmkur', 'Stoffwechselkur', 'Goldene Grundversorgung', '1:1 Betreuung inklusive'],
    image: '/images/mod-body-reset.jpg',
    wa: wa.bodyReset,
    forWhom: [
      'Müde trotz Schlaf, Blähbauch oder blockierter Stoffwechsel',
      'Wunsch nach tiefgreifender Entgiftung und zellulärem Reset',
      'Du willst die 3 Bausteine verstehen und gezielt für deinen Bedarf einsetzen',
    ],
    includes: [
      '16-Tage-Darmkur: Darmreinigung, Reizreduktion & Mikrobiom-Entlastung',
      'Stoffwechselkur: Genom-Reset, mind. 21 Tage streng + mind. 21 Tage Stabilisierung',
      'Goldene Grundversorgung: tägliche Mikronährstoff-Basis für die Zellen',
      'Kostenlose 1:1 Betreuung durch Michél bei Bezug der Kur-Produkte inklusive',
    ],
    steps: [
      {
        title: 'Standort & Bedarf',
        text: 'Ehrliche Prüfung: Welche der 3 Bausteine brauchst du wirklich zuerst?',
      },
      {
        title: 'Gezielte Kur-Phasen',
        text: 'Darmkur, Stoffwechselkur oder Grundversorgung — modular und nacheinander.',
      },
      {
        title: 'Dauerhafte Basis',
        text: 'Resets haben ein klares Ende. Was bleibt, ist volle Zellenergie im Alltag.',
      },
    ],
    outcome:
      'Volle Zellenergie von innen und ein saniertes Fundament — mit maßgeschneiderten Bausteinen ohne starre Zwänge.',
  },
  {
    slug: 'ernaehrungscoaching',
    pillar: 'm1',
    tier: 'core',
    priceLabel: '1:1 Coaching',
    badge: 'Alltag & Struktur',
    title: 'Ernährungscoaching',
    kicker: 'Deine Ernährung. Dein Alltag.',
    text: 'Kein Diät-Korsett, keine Produkte und keine Verbotsliste. Wir bauen gemeinsam eine alltagstaugliche Struktur: wann und wie du isst, damit der Blutzucker ruhiger bleibt, der Heißhunger nachlässt und Beruf sowie Familie mitlaufen können. Ziel ist eine verständliche Logik, die du dauerhaft selbstständig ohne fremde Hilfe meisterst.',
    tags: ['Alltagsstruktur', 'Blutzucker-Balance', 'Ohne Verbote', '1:1 Betreuung'],
    image: '/images/mod-nutrition.jpg',
    wa: wa.nutrition,
    forWhom: [
      'Beruf und Familie im Dauerlauf — wenig Zeit zum Kochen',
      'Diätmüde — keine Lust auf neue Verbote und Jojo-Effekte',
      'Wunsch nach stabiler Energie über den ganzen Tag ohne Nachmittagstiefs',
    ],
    includes: [
      '1:1-Begleitung mit Blick auf deinen realen Kalender',
      'Mahlzeitenlogik & Timing statt starrer Kalorientabellen',
      'Anpassung an Beruf, Reisen, Familie und Stressphasen',
      'Klare Kriterien, wie du deine Ernährung selbstständig steuerst',
    ],
    steps: [
      {
        title: 'Ist-Zustand',
        text: 'Was du wirklich isst, wann die Energie einbricht, wo der Alltag reinfunkt.',
      },
      {
        title: 'Struktur & Rhythmus',
        text: 'Eine Mahlzeitenlogik, die in deinen Tag passt — nicht umgekehrt.',
      },
      {
        title: 'Nachhaltigkeit',
        text: 'Wir justieren nach, bis deine Ernährung stabil sitzt und du völlig autark bist.',
      },
    ],
    outcome: 'Essen, das Energie gibt und in den Tag passt — verständlich, frei und ohne Diät-Dogmen.',
  },
  {
    slug: 'darm-stoffwechselbegleitung',
    pillar: 'm1',
    tier: 'core',
    priceLabel: 'Produktbezug · Betreuung inklusive',
    badge: 'Darmreinigung',
    title: '16-Tage Darmkur',
    kicker: 'Darmreinigung & Zellentgiftung.',
    text: 'Gezielte Darmreinigung und Zellentgiftung in 16 Tagen: Reizreduktion, Entlastung des Magen-Darm-Trakts und nachhaltige Beruhigung des Mikrobioms. Ein kompakter, zeitlich klar begrenzter Einstieg, um stille Entzündungen zu senken. Du beziehst nur die benötigten Produkte – die persönliche 1:1 Begleitung durch Michél ist für dich komplett inklusive.',
    tags: ['16 Tage', 'Darmreinigung', 'Zellentgiftung', 'Mikrobiom', 'Betreuung inklusive'],
    image: '/images/mod-gut.jpg',
    wa: wa.gut,
    forWhom: [
      'Blähbauch, Verdauungsbeschwerden oder Unverträglichkeiten',
      'Gefühl von Trägheit und blockierter Nährstoffaufnahme',
      'Wunsch nach einer schnellen, spürbaren Entlastung von innen',
    ],
    includes: [
      '16-Tage-Protokoll zur gezielten Darmreinigung und Zellentgiftung',
      'Schonende Beruhigung von Schleimhäuten und Mikrobiom',
      'Persönliche 1:1 Begleitung durch Michél während der gesamten 16 Tage',
      'Kostenlose Betreuung bei Bezug der benötigten Kur-Produkte',
    ],
    steps: [
      {
        title: 'Vorbereitung',
        text: 'Einfacher Einstieg und sanfte Umstellung für die Darmreinigung.',
      },
      {
        title: '16 Tage Entgiftung',
        text: 'Fokus auf Zellentlastung, Beruhigung und Ordnung im Magen-Darm-Trakt.',
      },
      {
        title: 'Stabilisierung',
        text: 'Wiedereingliederung in den Alltag mit spürbar mehr Frische und Leichtigkeit.',
      },
    ],
    outcome: 'Ein beruhigter Darm, spürbare Leichtigkeit und ein entlastetes Mikrobiom als starkes Fundament.',
  },
  {
    slug: 'stoffwechselkur',
    pillar: 'm1',
    tier: 'core',
    priceLabel: 'Produktbezug · Betreuung inklusive',
    badge: 'Genom- & Stoffwechsel-Reset',
    title: 'Stoffwechselkur',
    kicker: 'Genom- & Stoffwechsel-Reset.',
    text: 'Ein tiefgreifendes, meist einmaliges Reset-Erlebnis für deinen Stoffwechsel und das zelluläre Genom. Ablauf in 2 Phasen: Mindestens 21 Tage strenge Phase (oder so lange, bis dein individuelles Idealgewicht erreicht ist) gefolgt von mindestens 21 Tagen kontrollierter Stabilisierungsphase. Inklusive Grundversorgung. Du beziehst nur die Produkte – Michéls 1:1 Begleitung ist inklusive.',
    tags: ['21 Tage streng', '21 Tage Stabilisierung', 'Genom-Reset', 'Betreuung inklusive'],
    image: '/images/blog-blutzucker.jpg',
    wa: wa.metabolicCure,
    forWhom: [
      'Stoffwechsel fühlt sich nach vielen Diäten verlangsamt oder blockiert an',
      'Wunsch nach nachhaltigem Gewichtsverlust und Erreichen des Idealgewichts',
      'Tiefgreifende Neuordnung der Fettverbrennung statt kurzfristiger Hungerkuren',
    ],
    includes: [
      'Mindestens 21 Tage strenge Phase (bzw. bis zum Idealgewicht)',
      'Mindestens 21 Tage Stabilisierungsphase zur Sollwert-Fixierung',
      'Integrierte Mikronährstoff-Grundversorgung für maximale Zellenergie',
      'Persönliche 1:1 Betreuung durch Michél während beider Phasen inklusive',
    ],
    steps: [
      {
        title: 'Vorbereitung & Zielsetzung',
        text: 'Individuelle Analyse & Festlegung deiner Phasen und des Idealgewichts.',
      },
      {
        title: 'Strenge Phase (min. 21 Tage)',
        text: 'Gezielte Aktivierung des Fettstoffwechsels und zellulärer Reset mit 1:1 Begleitung.',
      },
      {
        title: 'Stabilisierungsphase (min. 21 Tage)',
        text: 'Fixierung des neuen Stoffwechsel-Sollwerts für dauerhaften Erfolg ohne Jojo.',
      },
    ],
    outcome: 'Ein tiefgreifender, dauerhafter Stoffwechsel-Reset mit gesichertem Idealgewicht und neuer Vitalität.',
  },
  {
    slug: 'goldene-grundversorgung',
    pillar: 'm1',
    tier: 'entry',
    priceLabel: 'Produktbezug · Betreuung inklusive',
    badge: 'Tägliche Basis',
    title: 'Goldene Grundversorgung',
    kicker: 'Tägliche Mikronährstoff-Basis.',
    text: 'Die solide, dauerhafte Mikronährstoff-Basis für deine Zellen: ausgewählte Vitamine, Mineralien und Spurenelemente in höchster Bioverfügbarkeit. Die perfekte tägliche Routine – oft der erste unkomplizierte Einstieg oder das lebenslange Fundament für Vitalität und Immunsystem. Du beziehst nur die Produkte, Michéls persönliche Beratung ist inklusive.',
    tags: ['Tägliche Basis', 'Zellenergie', 'Bioverfügbarkeit', 'Betreuung inklusive'],
    image: '/images/mod-supply.jpg',
    wa: wa.supply,
    forWhom: [
      'Wenig Zeit, hohe Alltagsbelastung und stressige Phasen',
      'Vermutete Mikronährstofflücken in der täglichen Ernährung',
      'Wunsch nach maximaler Zellenergie und einem starken Immunsystem',
    ],
    includes: [
      'Ehrliche Bedarfsprüfung — gezielte Hebel statt Produktstapel',
      'Ausgewählte Mikronährstoffe in optimal bioverfügbarer Form',
      'Einfache Integration in deine tägliche Morgenroutine',
      'Persönliche Beratung und Begleitung durch Michél inklusive',
    ],
    steps: [
      {
        title: 'Bedarfsanalyse',
        text: 'Ehrliche Prüfung deiner Lebenssituation und gezielte Nährstoffauswahl.',
      },
      {
        title: 'Etablierung',
        text: 'Einfacher Einbau in deine tägliche Morgenroutine ohne Aufwand.',
      },
      {
        title: 'Dauerhafte Vitalität',
        text: 'Konstante zelluläre Grundversorgung als starkes Schutzschild im Alltag.',
      },
    ],
    outcome: 'Ein solides tägliches Zellfundament für anhaltende Energie, Leistungsfähigkeit und Vitalität.',
  },
  {
    slug: 'schmerzfrei',
    pillar: 'm2',
    tier: 'core',
    priceLabel: 'Kern',
    badge: 'Mobilität',
    title: 'Schmerzfrei',
    kicker: 'Ursache finden. Dann wieder belasten.',
    text: 'Rücken, Nacken oder Gelenke bremsen dich — und du weißt nicht, ob du schonen, dehnen oder einfach „durchziehen“ sollst. Bei Schmerzfrei suchen wir die Ursache in der Bewegungskette, stellen Mobilität und Technik wieder her und bauen belastbare Kraft auf. Nicht Symptom-Massage. Sondern: wieder sicher und schmerzfrei im Alltag und Training.',
    tags: ['Rücken', 'Nacken', 'Gelenke'],
    image: '/images/blog-technik.jpg',
    wa: wa.painfree,
    forWhom: [
      'Rücken-, Nacken- oder Gelenkbeschwerden',
      'Schmerz bremst Training oder Beruf',
      'Unsicherheit bei der Ausführung',
    ],
    includes: [
      'Ursachenanalyse statt reiner Symptomarbeit',
      '1:1 Mobilitäts- und Technikarbeit',
      'Schrittweise Aufbau schmerzfreier Belastbarkeit',
      'Klare Regeln, wann Last wieder sinnvoll ist',
    ],
    steps: [
      {
        title: 'Ursache',
        text: 'Wo das System ausweicht — nicht nur, wo es wehtut.',
      },
      {
        title: 'Bewegung',
        text: 'Technik und Mobilität, bis die Bahn wieder sauber ist.',
      },
      {
        title: 'Last',
        text: 'Erst dann Intensität. Technik vor Gewicht — immer.',
      },
    ],
    outcome: 'Wieder belastbar im Alltag — ohne dass jeder Satz ein Risiko ist.',
  },
  {
    slug: 'performance-training',
    pillar: 'm2',
    tier: 'premium',
    priceLabel: 'Premium',
    badge: '1:1 Training',
    title: 'Performance Training',
    kicker: 'Kraft, Explosivität, Körperbeherrschung',
    text: 'Intelligentes 1:1 Personal Training für echte Kraft und Kontrolle. Wir starten mit einem ehrlichen Blick auf Bewegungsqualität und Kapazität — nicht mit dem Spiegel. Technik wird live korrigiert. Last und Tempo steigen erst, wenn die Wiederholung unter Ermüdung hält. Für dich, wenn du mehr Leistung willst, ohne den Körper zu verschleißen.',
    tags: ['Maximalkraft', 'Athletik', 'Technik'],
    image: '/images/mod-training-v2.jpg',
    wa: wa.training,
    forWhom: [
      'Mehr Kraft und Explosivität',
      'Plateau trotz Aufwand',
      'Technik vor Ego — und trotzdem Leistung',
    ],
    includes: [
      '1:1 Personal Training mit klarer Progression',
      'Live-Technikkorrektur',
      'Aufbau von Kraft, Kontrolle und Belastbarkeit',
      'Abstimmung auf Beruf, Alter und Vorgeschichte',
    ],
    steps: [
      {
        title: 'Screen',
        text: 'Bewegungsqualität, Schwachstellen, echte Kapazität.',
      },
      {
        title: 'Technik',
        text: 'Präzise Korrektur, bis die Bewegung sitzt.',
      },
      {
        title: 'Leistung',
        text: 'Last und Tempo folgen der Qualität — nicht dem Kalender.',
      },
    ],
    outcome: 'Mehr Kraft und Kontrolle — auf einem Fundament, das mitzieht.',
  },
  {
    slug: 'coaching-fuer-zwei',
    pillar: 'm2',
    tier: 'premium',
    priceLabel: 'Premium',
    badge: 'Für Zwei',
    title: 'Coaching für Zwei',
    kicker: 'Partner oder Freunde — gemeinsam, aber individuell.',
    text: 'Personal Training zu zweit: ein Termin, zwei Körper, zwei Pläne. Ihr motiviert euch gegenseitig, ohne dass einer im Schema des anderen mitläuft. Ideal für Paare oder Freunde, die zusammen starten und trotzdem unterschiedliche Ausgangspunkte haben.',
    tags: ['Paare', 'Freunde', 'Teamgeist'],
    image: '/images/michel-work-nature.jpg',
    wa: wa.duo,
    forWhom: [
      'Paare oder Freunde',
      'Gemeinsam starten, individuell bleiben',
      'Doppelte Motivation ohne Einheitsplan',
    ],
    includes: [
      'Zwei individuelle Analysen und Pläne',
      'Gemeinsame Termine im gleichen Raum',
      'Korrektur für beide Körper',
      'Eigene Progression bei gemeinsamem Rhythmus',
    ],
    steps: [
      {
        title: 'Zwei Ist-Zustände',
        text: 'Jeder Körper bekommt seine Analyse — kein Schema F für beide.',
      },
      {
        title: 'Gemeinsam trainieren',
        text: 'Ein Raum, zwei Reize, doppelte Motivation.',
      },
      {
        title: 'Eigener Weg',
        text: 'Progression bleibt individuell, der Rhythmus gemeinsam.',
      },
    ],
    outcome: 'Zusammen dranbleiben — ohne dass einer im Plan des anderen mitläuft.',
  },
  {
    slug: 'm2-mobility',
    pillar: 'm2',
    tier: 'entry',
    priceLabel: 'Einstieg',
    badge: 'Mobility',
    title: 'Mobility Reset',
    kicker: 'Beweglichkeit zurückholen — ohne Zirkus.',
    text: 'Ein kompakter Einstieg, wenn du steif, ausweichend oder „eingerostet“ bist, aber noch keine volle Schmerzfrei-Begleitung brauchst. Gezielte Mobility-Sessions, die Alltag und Training wieder vorbereiten.',
    tags: ['Mobility', 'Einstieg', 'Technik'],
    image: '/images/michel-trainer.jpg',
    wa: wa.m2Mobility,
    forWhom: [
      'Steifheit nach Büro oder Pause',
      'Technik fühlt sich blockiert an',
      'Zu früh für intensives Performance-Training',
    ],
    includes: [
      'Gezielte Mobility-Arbeit',
      'Alltagsnahe Übungen',
      'Klare Dosis statt Stunden-Flow',
      'Brücke zu Schmerzfrei oder Performance',
    ],
    steps: [
      { title: 'Engpass', text: 'Welche Bahn fehlt wirklich?' },
      { title: 'Öffnen', text: 'Wenige, wirksame Drills.' },
      { title: 'Übertrag', text: 'In Alltag und Training einbauen.' },
    ],
    outcome: 'Mehr Bewegungsfreiheit — als sauberer Einstieg in M².',
  },
];

export interface AudienceItem {
  title: string;
  persona: string;
  dailyLife: string;
  approach: string;
  image: string;
}

export const audience: AudienceItem[] = [
  {
    title: 'Führungskräfte & 60h-Woche',
    persona: 'Sarah · Managing Director & Gründerin',
    dailyLife:
      '„Hi Michél, 12h-Tage und Dauermeetings killen mich gerade. Ab 14:30 Uhr falle ich in ein massives Loch, abends kreisen die Gedanken und ich schlafe trotz Erschöpfung nur oberflächlich. Ich brauche volle Klarheit, aber mein Kalender hat null Puffer für stundenlange Routinen.“',
    approach:
      '„Hi Sarah, kein Stressor extra in deinem Kalender: Wir setzen direkt an deiner Blutzuckerkurve und deinem Cortisol-Rhythmus an. Wir etablieren 3 feste, stressfreie Ernährungskerne und zwei 90-Sekunden-Zirkadian-Trigger für den Vormittag. Damit stoppen wir das Nachmittagstief und du fährst abends das Nervensystem gezielt herunter – tiefer Schlaf, ohne Zeitverlust.“',
    image: '/images/aud-exec-face.jpg',
  },
  {
    title: 'Schreibtisch & Chronische Schmerzen',
    persona: 'Markus · Tech Lead & Architekt',
    dailyLife:
      '„Hi Michél, sitze 9-10h am Code. Im Lendenwirbelbereich brennt es dumpf, der Nacken ist bretthart. Massagen und Physio bringen immer nur für zwei Tage Ruhe. Ich brauche endlich eine dauerhafte Lösung, die mich im Alltag nicht einschränkt.“',
    approach:
      '„Hi Markus, kenne ich aus eigener Erfahrung mit meinem HWS-Vorfall: Reines Dehnen bringt nichts, wenn die neuronale Ansteuerung der Gelenkkette blockiert ist. Wir testen deine Hüft- und Rumpfstabilisatoren und schalten die inaktiven Muskeln wieder scharf. Dazu gibt’s 3 gezielte 2-Minuten-Resets direkt am Schreibtisch – so beheben wir die Ursache, nicht nur das Symptom.“',
    image: '/images/aud-desk-face.jpg',
  },
  {
    title: 'Diät-Müde & Stoffwechsel-Blockade',
    persona: 'Elena · Executive & Mutter',
    dailyLife:
      '„Hi Michél, ich habe jahrelang Low-Carb und Kalorientracken durchgezogen. Trotz aller Disziplin: ständiger Blähbauch, Heißhunger am Abend und auf der Waage rührt sich absolut nichts mehr. Es fühlt sich an, als hätte mein Körper komplett dichtgemacht.“',
    approach:
      '„Hi Elena, Schluss mit Verzicht und Diätstress! Dein Stoffwechsel ist nicht kaputt, sondern im zellulären Schutzmodus. Wir reparieren zuerst dein Mikrobiom, stabilisieren deinen Glukosespiegel und versorgen deine Mitochondrien wieder mit gezielten Nährstoffen. Sobald deine Zellen Energie bekommen, schaltet der Körper von Blockade auf natürliche Fettverbrennung – ganz ohne Jojo-Effekt.“',
    image: '/images/aud-diet-face.jpg',
  },
  {
    title: 'Ambitionierte & Sportler-Plateau',
    persona: 'David · Hyrox-Athlet & Unternehmer',
    dailyLife:
      '„Hi Michél, ich ziehe 5 harte Einheiten pro Woche durch, aber meine Hyrox-Zeiten stagnieren komplett. Dazu zwickt ständig die linke Achillessehne und ich brauche nach Intervallen Tage, um wieder frisch zu sein. Wo hakt es?“',
    approach:
      '„Hi David, mehr Härte zerstört, wo Präzision fehlt. Bei dir kompensiert die Kette eine Asymmetrie im Becken, was die Sehne überlastet. Wir analysieren deine Bewegungsmuster, optimieren deine intrazelluläre Mikronährstoffversorgung und stellen dein Training auf ein periodisiertes Kraft-Mobilitäts-System um. Mehr Output bei deutlich schnellerer Regeneration.“',
    image: '/images/aud-athlete-face.jpg',
  },
];

export const process = [
  { n: '01', title: 'Kennenlernen', text: 'Unverbindliches Gespräch über deine Situation, Ziele und Erwartungen.' },
  { n: '02', title: 'Analyse', text: 'Ganzheitliche Bestandsaufnahme von Stoffwechsel, Bewegung und Alltag.' },
  { n: '03', title: 'Strategie', text: 'Dein maßgeschneiderter Fahrplan mit klaren Prioritäten.' },
  { n: '04', title: 'Begleitung', text: 'Schritt-für-Schritt Umsetzung mit engmaschiger Korrektur.' },
  { n: '05', title: 'Routine', text: 'Verstetigung der Gewohnheiten bis zur vollständigen Selbstständigkeit.' },
];

export const faqs = [
  {
    q: 'Muss ich bereits fit sein, um mit M³ zu starten?',
    a: 'Nein, absolut nicht. Ganz im Gegenteil: M³ holt dich exakt dort ab, wo du heute stehst. Egal ob nach langer Pause, mit Übergewicht, Schmerzen oder als Sportler mit Leistungsambitionen.',
  },
  {
    q: 'Wie läuft das kostenlose Erstgespräch ab?',
    a: 'In rund 20 Minuten per Telefon oder Video sprechen wir über deine aktuellen Hürden, deinen Alltag und deine Ziele. Wir prüfen ehrlich, ob M³ der richtige Hebel für dich ist. Danach erhältst du eine erste Einschätzung – völlig unverbindlich.',
  },
  {
    q: 'Kann die Betreuung auch komplett online stattfinden?',
    a: 'Ja. Stoffwechselanalysen, Ernährungsbegleitung und mentale Routinen lassen sich ortsunabhängig digital durchführen. Beim Personal Training kombinieren wir je nach Wohnort Präsenz-Sessions mit digitaler Begleitung.',
  },
  {
    q: 'Was unterscheidet M³ von klassischem Personal Training?',
    a: 'Klassische Trainer lassen dich schwitzen und schicken dich nach 60 Minuten heim. M³ betrachtet das Gesamtsystem: Wenn dein Darm rebelliert oder du vor Stress nicht schläfst, verpufft jedes Training. Wir lösen die Ursachen, nicht die Symptome.',
  },
  {
    q: 'Muss ich Nahrungsergänzungsmittel einnehmen?',
    a: 'Nein. Die Basis sind immer echte Nahrung, Bewegung und Regeneration. Falls eine gezielte Mikronährstoff-Optimierung sinnvoll ist, besprechen wir das transparent und wissenschaftlich fundiert.',
  },
  {
    q: 'Womit starte ich, wenn ich nicht weiß, wo das Problem liegt?',
    a: 'Mit dem System Start. Wir klären zuerst, ob Stoffwechsel, Bewegung oder Routinen der Engpass sind – und bauen danach den Fahrplan. Du musst nicht vorher wissen, welches Modul du brauchst.',
  },
  {
    q: 'Wie viel Zeit brauche ich pro Woche?',
    a: 'So viel, wie dein Alltag hergibt – und nicht mehr. Wir bauen minimale Routinen, die in Beruf und Familie passen. Lieber drei saubere Hebel als ein Plan, den du nach zwei Wochen abbrichst.',
  },
  {
    q: 'Arbeitet ihr mit starren Diäten oder Verboten?',
    a: 'Nein. Keine 14-Tage-Crash-Diäten, keine Korsetts. In der Ernährung geht es um alltagstaugliche Struktur, Blutzucker und Stoffwechsel – ohne Jojo-Effekt.',
  },
  {
    q: 'Was, wenn ich Schmerzen habe und nicht richtig trainieren kann?',
    a: 'Dann ist das der Startpunkt, nicht das Hindernis. Über M² klären wir Ursachen an Rücken, Nacken und Gelenken, bevor Last und Intensität erhöht werden. Technik schlägt Gewicht – immer.',
  },
  {
    q: 'Kann ich als Paar oder mit einem Freund starten?',
    a: 'Ja. Das M² Coaching für Zwei ist genau dafür: individuelle Pläne, gemeinsame Termine, doppelte Motivation – ohne dass einer im Schema des anderen mitläuft.',
  },
  {
    q: 'Wie lange dauert es, bis sich etwas verändert?',
    a: 'Energie und Klarheit merken viele schon in den ersten Wochen, sobald Darm, Schlaf oder Technik greifen. Haltbare Routinen brauchen länger – genau deshalb begleiten wir, bis du selbst steuerst.',
  },
  {
    q: 'Für wen ist M³ nicht geeignet?',
    a: 'Für alle, die eine Wunderpille, einen 6-Wochen-Kick oder reines Abtrainieren ohne Ursachenarbeit suchen. M³ ist 1:1-Begleitung mit dem Ziel Autonomie – nicht ein Abo, das dich abhängig hält.',
  },
  {
    q: 'Wie geht es nach dem Erstgespräch weiter?',
    a: 'Wenn es passt, folgt Analyse, Priorität und ein klarer nächster Schritt: System Start oder das passende Modul. Du entscheidest. Es gibt keinen Druck und keinen Standardvertrag von der Stange.',
  },
];

export const compass = [
  {
    id: 'm1',
    title: 'Energie & Stoffwechsel',
    text: 'Häufig müde, Verdauungsprobleme, Blähbauch, Heißhunger oder das Gefühl, dass der Stoffwechsel blockiert ist.',
    image: '/images/mod-body-reset.jpg',
  },
  {
    id: 'm2',
    title: 'Körper & Schmerzen',
    text: 'Rücken- oder Gelenkbeschwerden, Kraftlosigkeit, Verspannungen oder Unsicherheit bei der richtigen Trainingsausführung.',
    image: '/images/blog-technik.jpg',
  },
  {
    id: 'm3',
    title: 'Chaos & fehlende Routinen',
    text: 'Zu viel auf einmal probiert, ständig abgebrochen, kein klarer roter Faden und Stress im Alltag frisst die Vorsätze auf.',
    image: '/images/aud-exec.jpg',
  },
] as const;

export const startProof = [
  {
    title: 'Ein Katalog fragt nach der Wahl. Ein Eingang fragt nach dem Engpass.',
    text: 'Body Reset, Schmerzfrei, Performance — das sind Module. Wer dort startet, hat die Diagnose schon selbst gestellt. Der System Start tut das Gegenteil: er prüft zuerst, ob Stoffwechsel, Bewegung oder Routinen der begrenzende Faktor sind. Deshalb ist er kein Angebot unter anderen. Er ist die Stelle, an der das System dich einordnet.',
    image: '/images/blog-plaene.jpg',
  },
  {
    title: 'Die Säulen bedingen einander. Parallel starten ist Raten.',
    text: 'M¹, M² und M³ sind keine Menüpunkte. Last auf einem brennenden Fundament erzeugt Verschleiß. Saubere Technik zerfällt, wenn Schlaf und Stress die Wiederholung fressen. Wer drei Hebel gleichzeitig zieht, kann nicht sagen, welcher trägt. Die feste Reihenfolge existiert, weil der Körper eine Reihenfolge hat — nicht weil es sich besser verkauft.',
    image: '/images/blog-fundament.jpg',
  },
  {
    title: 'Du musst die Säule nicht kennen. Das ist die Arbeit.',
    text: 'Müde trotz Training. Schmerz trotz Pause. Pläne, die in Woche drei kippen. Dieselben Symptome können in drei verschiedenen Säulen sitzen. Der System Start nimmt dir die Vorentscheidung ab: Status, Priorität, ein nächster Schritt. Danach erst ein Modul — oder keiner, wenn es nicht passt.',
    image: '/images/blog-willenskraft.jpg',
  },
  {
    title: 'Status vor Eingriff. So arbeitet Michél.',
    text: 'Nach dem Bandscheibenvorfall im Halswirbelbereich hat mehr Disziplin den Körper nicht zurückgeholt. Der Weg zurück begann mit der Frage, was zuerst trägt. Genau diese Frage stellt der System Start: nicht „welches Paket willst du“, sondern „wo hält das System nicht“. Erst dann folgen Reset, Technik oder Routine.',
    image: '/images/michel-trainer.jpg',
  },
] as const;

export const michelSlides = [
  { src: '/images/michel-trainer.png', label: 'Trainer' },
  { src: '/images/michel-politik.png', label: 'Politik' },
] as const;
