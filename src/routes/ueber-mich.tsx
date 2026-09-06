import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Trophy,
  Award,
  ShieldCheck,
  Target,
  Brain,
  Flame,
  Dumbbell,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Clock,
  Sparkles,
  UserCheck,
  Zap,
  Activity,
  HeartPulse,
  Play,
  Check,
} from "lucide-react";
import avatar from "@/assets/avatar.png";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PathwayCrossNav } from "@/components/PathwayCrossNav";
import { InteractiveTimeline } from "@/components/InteractiveTimeline";

export const Route = createFileRoute("/ueber-mich")({
  component: UeberMichPage,
  head: () => ({
    meta: [
      { title: "Über Michél Meier – Story, Werte & Werdegang | M³ Performance" },
      {
        name: "description",
        content:
          "25+ Jahre Bewegungserfahrung, IDO Breakdance-Weltmeister & Master Personal Trainer: Erfahre alles über Michél Meiers Geschichte und die Entstehung des M³-Systems.",
      },
    ],
  }),
});

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

function UeberMichPage() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const WHATSAPP_URL =
    "https://wa.me/4917699016640?text=Hallo%20Mich%C3%A9l,%20ich%20habe%20deine%20Geschichte%20gelesen%20und%20m%C3%B6chte%20ein%20unverbindliches%20Orientierungsgespr%C3%A4ch%20vereinbaren.";

  return (
    <div className="min-h-screen bg-white text-foreground flex flex-col justify-between overflow-x-hidden selection:bg-gold/20 selection:text-foreground">
      <Header />
      <Breadcrumbs items={[{ label: "Über Michél Meier", pillar: "gold" }]} />

      <main className="flex-grow py-12 md:py-16 relative bg-white">
        <div className="relative max-w-6xl mx-auto px-5 md:px-6 space-y-20 md:space-y-28">

          {/* ---------------------------------------------------- */}
          {/* HERO: PROFIL & TITEL */}
          {/* ---------------------------------------------------- */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-5 sm:space-y-6 min-w-0">
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gold font-bold shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Über Michél Meier · Gründer von M³</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-display font-extrabold tracking-tight leading-[1.08] text-foreground break-words hyphens-auto">
                Vom Weltmeistertitel zum <span className="text-gold">ganzheitlichen Gesundheitssystem.</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-medium leading-relaxed max-w-2xl">
                Warum selbst die härteste Disziplin scheitert, wenn das Fundament nicht stimmt – und wie aus 25 Jahren Spitzensport, Rückschlägen und Alltagsrealität das M³-System entstand.
              </p>

              {/* Quick Key Facts Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="rounded-2xl border border-border bg-white p-4 flex flex-col justify-between hover:border-gold/50 transition-colors shadow-sm">
                  <Trophy className="w-5 h-5 text-gold mb-2" />
                  <div>
                    <div className="font-display font-bold text-lg text-foreground">2006/07</div>
                    <div className="text-xs text-muted-foreground font-medium">IDO World Champion Breakdance</div>
                  </div>
                </div>

                <div className="rounded-2xl border border-border bg-white p-4 flex flex-col justify-between hover:border-primary/50 transition-colors shadow-sm">
                  <Clock className="w-5 h-5 text-primary mb-2" />
                  <div>
                    <div className="font-display font-bold text-lg text-foreground">25+ Jahre</div>
                    <div className="text-xs text-muted-foreground font-medium">Bewegungs- & Trainererfahrung</div>
                  </div>
                </div>

                <div className="rounded-2xl border border-border bg-white p-4 flex flex-col justify-between hover:border-emerald-600/50 transition-colors shadow-sm">
                  <Award className="w-5 h-5 text-emerald-600 mb-2" />
                  <div>
                    <div className="font-display font-bold text-lg text-foreground">Master Trainer</div>
                    <div className="text-xs text-muted-foreground font-medium">Personal Training Zertifizierung</div>
                  </div>
                </div>

                <div className="rounded-2xl border border-border bg-white p-4 flex flex-col justify-between hover:border-indigo-600/50 transition-colors shadow-sm">
                  <ShieldCheck className="w-5 h-5 text-indigo-600 mb-2" />
                  <div>
                    <div className="font-display font-bold text-lg text-foreground">100% Autonomie</div>
                    <div className="text-xs text-muted-foreground font-medium">System statt Coach-Abhängigkeit</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Authentic Studio Portrait */}
            <div className="lg:col-span-5 flex justify-center relative">
              <div className="relative w-full max-w-md">
                <div className="rounded-3xl overflow-hidden border-2 border-gold/40 shadow-[var(--shadow-gold)] bg-black/60 aspect-[4/5] relative group">
                  <img
                    src="/images/performance/michel-portrait-blazer.jpg"
                    alt="Michél Meier – Gründer & Coach M³"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 space-y-1">
                    <div className="font-display font-extrabold text-xl text-white">Michél Meier</div>
                    <div className="text-xs font-semibold text-gold tracking-wide">
                      IDO Breakdance World Champion · Personal Trainer & Coach
                    </div>
                  </div>
                </div>

                {/* Floating Micro Badge */}
                <div className="absolute -top-4 -right-4 bg-white border border-border/80 rounded-2xl p-3 shadow-lg flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-gold-gradient text-primary-foreground flex items-center justify-center font-display font-bold text-xs">
                    M³
                  </div>
                  <span className="text-xs font-bold text-foreground">Echte Praxis seit 1995</span>
                </div>
              </div>
            </div>
          </div>

          {/* ---------------------------------------------------- */}
          {/* KAPITEL 1: DER WENDEPUNKT & SPITZENSPORT-LEKTION */}
          {/* ---------------------------------------------------- */}
          <section className="rounded-3xl border border-border bg-white p-8 md:p-12 space-y-10 shadow-sm">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-5 text-left">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-gold">
                  <Trophy className="w-4 h-4" />
                  <span>Kapitel 1 · Die Lektion des Spitzensports</span>
                </div>

                <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight text-foreground">
                  „Ich habe am eigenen Körper gelernt, was passiert, wenn man nur Muskeln aufbaut.“
                </h2>

                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  Meine Reise begann mit 12 Jahren im Tanz- und Leistungssport. Mit 15 Jahren stand ich bereits selbst als Tanzlehrer auf der Fläche. Jahrelanges, kompromissloses Training führte mich mit den <strong className="text-foreground">„Da Rookies“</strong> bis zum <strong className="text-foreground">IDO Breakdance-Weltmeistertitel 2006/2007</strong>, auf Bühnen wie das Theater Erfurt und zu internationalen Meisterkursen.
                </p>

                <div className="border-l-2 border-gold pl-4 py-2 text-base md:text-lg italic text-foreground font-medium bg-gold/5 rounded-r-xl">
                  „Mehr pumpen, Zähne zusammenbeißen, Schmerzen ignorieren – das klassische Fitness-Denken hat mich an meine Grenzen und fast zur Zerstörung geführt.“
                </div>

                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  Schwere Verletzungen, blockierte Regeneration und ständige Erschöpfung machten mir eines unmissverständlich klar: <strong className="text-foreground">Wenn dein Fundament brennt, nützt kein härteres Training.</strong> Wenn der Darm rebelliert, der Stoffwechsel blockiert ist oder der Schlaf fehlt, bricht selbst der trainierteste Körper zusammen.
                </p>
              </div>

              {/* Dynamic Visual Pair */}
              <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden border border-border/80 shadow-md group relative aspect-[3/4] bg-black">
                    <img
                      src="/images/performance/m2-movement-flow.jpg"
                      alt="Movement Flow & Dynamik"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <span className="absolute bottom-2.5 left-3 text-[10px] uppercase font-mono tracking-wider text-white/90 font-bold">
                      Movement Flow
                    </span>
                  </div>
                </div>

                <div className="space-y-4 pt-6">
                  <div className="rounded-2xl overflow-hidden border border-border/80 shadow-md group relative aspect-[3/4] bg-black">
                    <img
                      src="/images/performance/m2-bruce-lee-mastery.jpg"
                      alt="Disziplin & Bewegungsmeisterschaft"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <span className="absolute bottom-2.5 left-3 text-[10px] uppercase font-mono tracking-wider text-white/90 font-bold">
                      Mastery Mindset
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ---------------------------------------------------- */}
          {/* MEDIA SHOWCASE: VIDEO & LIVE PERFORMANCE INFINITY MARQUEE */}
          {/* ---------------------------------------------------- */}
          <section className="space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold block">
                Einblicke & Live Action
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight text-foreground">
                25 Jahre Bewegung in Aktion
              </h2>
              <p className="text-base text-muted-foreground">
                Authentische Erfahrung aus Spitzensport, internationaler Meisterschaft und fundierter Trainerpraxis.
              </p>
            </div>

            {/* Video Showcase Card */}
            <div className="rounded-3xl border border-border bg-white p-6 md:p-10 shadow-sm text-left">
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 space-y-4">
                  <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3.5 py-1 text-xs uppercase tracking-[0.18em] text-gold font-bold">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>M³ Performance Video</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display font-extrabold text-foreground">
                    Erlebe die Philosophie von M³
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Wie aus 25 Jahren Spitzensport, Anatomie-Verständnis und echter Alltagserfahrung ein modulares Gesundheitssystem für schmerzfreie Belastbarkeit und dauerhafte Energie entstand.
                  </p>
                  <div className="text-xs font-medium text-amber-600 italic border-l-2 border-amber-500 pl-3 py-1 bg-amber-500/5 rounded-r-lg">
                    „Manchmal braucht es Verständnis. Manchmal einen Arschtritt. Oft beides.“
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <div className="aspect-video rounded-2xl bg-[#090d16] border border-slate-800 overflow-hidden relative group shadow-2xl">
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
                        className="w-full h-full flex flex-col items-center justify-center p-6 cursor-pointer text-center relative overflow-hidden group"
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30 group-hover:scale-105 transition-transform duration-700 pointer-events-none" />
                        <div className="relative z-10 flex flex-col items-center space-y-3">
                          <div className="w-16 h-16 rounded-full bg-gold-gradient text-primary-foreground flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                            <Play className="w-7 h-7 ml-1 fill-current" />
                          </div>
                          <span className="font-display font-extrabold text-sm sm:text-base text-white tracking-tight">
                            M³ Performance Video abspielen
                          </span>
                          <span className="text-xs text-slate-300">
                            Direkter Einblick in Philosophie & Methodik mit Michél
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* M³ Live Performance Infinity Carousel - ATHLETIC DARK CARBON STRIP */}
            <div className="rounded-3xl border border-slate-800 bg-[#090d16] text-white p-5 sm:p-7 shadow-2xl shadow-slate-950/25 overflow-hidden text-left space-y-4">
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
          </section>

          {/* ---------------------------------------------------- */}
          {/* PERFORMANCE STORYLINE: DIE 3 DIMENSIONEN IN AKTION */}
          {/* ---------------------------------------------------- */}
          <section className="space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold block">
                Visual Performance Storyline
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight text-foreground">
                Die 3 Dimensionen des M³-Systems
              </h2>
              <p className="text-base md:text-lg text-muted-foreground">
                Warum echtes Wohlbefinden nur entstehen kann, wenn Biochemie, Biomechanik und Mindset perfekt ineinandergreifen.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-left">
              {/* Säule 1 Visual */}
              <div className="rounded-3xl border border-border bg-white overflow-hidden flex flex-col justify-between hover:border-orange-500/50 transition-all duration-300 group shadow-sm hover:shadow-md">
                <div className="relative w-full h-56 bg-black overflow-hidden">
                  <img
                    src="/images/performance/m1-cardio-vitality.jpg"
                    alt="M1 Metabolism – Zellenergie & Vitalität"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-orange-500/20 backdrop-blur border border-orange-500/40 text-orange-600 font-mono text-[11px] font-bold uppercase">
                    M¹ · Biochemie
                  </div>
                </div>

                <div className="p-6 md:p-8 space-y-3 flex-grow flex flex-col justify-between bg-white">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-orange-600 text-xs font-bold uppercase tracking-wider">
                      <Flame className="w-4 h-4" />
                      <span>Fundament von innen</span>
                    </div>
                    <h3 className="font-display font-extrabold text-xl text-foreground">
                      Zelluläre Energie vor Muskelkraft
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      Wenn der Darm entzündet ist und Nährstoffe nicht absorbiert werden, verpufft jedes Training. Durch gezielte Darm- & Stoffwechselregulation schaffen wir die biochemische Basis für konstante Energie.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border/70">
                    <Link
                      to="/metabolism"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-600 hover:opacity-80 transition"
                    >
                      <span>M¹ Details ansehen</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Säule 2 Visual */}
              <div className="rounded-3xl border border-border bg-white overflow-hidden flex flex-col justify-between hover:border-emerald-600/50 transition-all duration-300 group shadow-sm hover:shadow-md">
                <div className="relative w-full h-56 bg-black overflow-hidden">
                  <img
                    src="/images/performance/m2-never-give-up.jpg"
                    alt="M2 Movement – Stärke & Disziplin"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-emerald-600/20 backdrop-blur border border-emerald-600/40 text-emerald-700 font-mono text-[11px] font-bold uppercase">
                    M² · Biomechanik
                  </div>
                </div>

                <div className="p-6 md:p-8 space-y-3 flex-grow flex flex-col justify-between bg-white">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-emerald-700 text-xs font-bold uppercase tracking-wider">
                      <Dumbbell className="w-4 h-4" />
                      <span>Intelligentes Training</span>
                    </div>
                    <h3 className="font-display font-extrabold text-xl text-foreground">
                      Technik schlägt Gewicht – Immer
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      25 Jahre Praxis im Leistungssport zeigen: Wer Bewegungsabläufe meistert und Schwachstellen ausgleicht, trainiert schmerzfrei, stabilisiert Gelenke und baut echte, athletische Belastbarkeit auf.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border/70">
                    <Link
                      to="/movement"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:opacity-80 transition"
                    >
                      <span>M² Details ansehen</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Säule 3 Visual */}
              <div className="rounded-3xl border border-border bg-white overflow-hidden flex flex-col justify-between hover:border-indigo-600/50 transition-all duration-300 group shadow-sm hover:shadow-md">
                <div className="relative w-full h-56 bg-black overflow-hidden">
                  <img
                    src="/images/performance/m3-neural-blueprint.jpg"
                    alt="M3 Mental – Fokus & Systematik"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-indigo-600/20 backdrop-blur border border-indigo-600/40 text-indigo-700 font-mono text-[11px] font-bold uppercase">
                    M³ · Mindset & System
                  </div>
                </div>

                <div className="p-6 md:p-8 space-y-3 flex-grow flex flex-col justify-between bg-white">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-indigo-700 text-xs font-bold uppercase tracking-wider">
                      <Brain className="w-4 h-4" />
                      <span>Routinen im Alltag</span>
                    </div>
                    <h3 className="font-display font-extrabold text-xl text-foreground">
                      Routine schlägt flüchtige Motivation
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      Nachhaltigkeit scheitert nicht am Wissen, sondern an der Ausführung bei Stress. Mit klarer Gewohnheits-Architektur und Schlaf-Optimierung wird gesunder Fortschritt zur automatischen Routine.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border/70">
                    <Link
                      to="/mental-performance"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-700 hover:opacity-80 transition"
                    >
                      <span>M³ Details ansehen</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ---------------------------------------------------- */}
          {/* KAPITEL 2: FÜR ECHTE MENSCHEN GEBAUT */}
          {/* ---------------------------------------------------- */}
          <section className="rounded-3xl border border-border bg-white p-8 md:p-12 space-y-10 shadow-sm">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
                <div className="relative w-full max-w-sm rounded-3xl overflow-hidden border border-border shadow-lg bg-black group">
                  <img
                    src="/images/performance/michel-portrait-casual.jpg"
                    alt="Michél Meier – Authentische Betreuung auf Augenhöhe"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-xs font-medium text-white/90">
                    „Echte Betreuung auf Augenhöhe – für Menschen mit Beruf & Familie.“
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 order-1 lg:order-2 space-y-5 text-left">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-gold">
                  <Activity className="w-4 h-4" />
                  <span>Kapitel 2 · Alltagstauglichkeit</span>
                </div>

                <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight text-foreground">
                  Kein 20-jähriger Fitness-Influencer. Mitten im echten Leben.
                </h2>

                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  Ich kenne die Realität abseits von perfekten Social-Media-Profilen: Schichtdienst bei den Feldjägern der Bundeswehr, fordernde Vertriebs- und Bürophasen, Termindruck und die Verantwortung als Familienvater.
                </p>

                <div className="grid sm:grid-cols-3 gap-4 pt-2">
                  <div className="rounded-2xl border border-border bg-white p-4 space-y-2 shadow-sm">
                    <div className="font-display font-extrabold text-sm text-foreground">01. Berufspraxis</div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Verständnis für Büroalltag, Dienstreisen, Schichtarbeit & Zeitknappheit.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-border bg-white p-4 space-y-2 shadow-sm">
                    <div className="font-display font-extrabold text-sm text-foreground">02. Familienleben</div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Pläne, die sich nahtlos in den Familienalltag integrieren lassen.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-border bg-white p-4 space-y-2 shadow-sm">
                    <div className="font-display font-extrabold text-sm text-foreground">03. Master Trainer</div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Fundiertes Fachwissen gepaart mit 25 Jahren Praxiserfahrung.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ---------------------------------------------------- */}
          {/* DIE 5 UNVERRÜCKBAREN M³-WERTE */}
          {/* ---------------------------------------------------- */}
          <section className="rounded-3xl border border-border bg-white p-8 md:p-12 space-y-8 text-left shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/70 pb-6">
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-gold">
                  Marken-DNA & Qualitätsversprechen
                </span>
                <h3 className="font-display font-extrabold text-2xl md:text-4xl text-foreground">
                  Die fünf M³-Werte
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground max-w-md">
                Fünf Grundsätze, nach denen jede Begleitung, jedes Training und jede Beratung unverrückbar ausgerichtet ist.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                {
                  title: "Eigenverantwortung",
                  desc: "Wir begleiten dich eng – aber nehmen dir deine Verantwortung nicht ab. Coach und Kunde tragen Verantwortung für ihren Teil des gemeinsamen Weges.",
                },
                {
                  title: "Ehrlichkeit",
                  desc: "Wir sprechen Dinge direkt an. Auch dann, wenn es einmal unbequem ist. Ehrliches Feedback ist das Fundament echter Fortschritte.",
                },
                {
                  title: "Authentizität",
                  desc: "M³ braucht keinen zweiten Michel. Persönlichkeit ist erwünscht – bodenständig, menschlich und ohne künstliches Gehabe.",
                },
                {
                  title: "Menschlichkeit",
                  desc: "Vor dem Problem steht der Mensch. Lebenssituation, Familie, Arbeit, Belastungen und persönliche Hürden gehören zum Coaching dazu.",
                },
                {
                  title: "Qualität",
                  desc: "Wir empfehlen nur Maßnahmen, die einem fundierten Anspruch genügen. Kein Verkauf um des Verkaufens willen.",
                },
              ].map((v, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-border bg-white p-5 space-y-2.5 hover:border-gold/50 transition-colors shadow-sm"
                >
                  <div className="w-8 h-8 rounded-xl bg-gold/15 text-gold flex items-center justify-center font-display font-bold text-xs">
                    0{i + 1}
                  </div>
                  <div className="font-display font-bold text-base text-foreground">
                    {v.title}
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ---------------------------------------------------- */}
          {/* KAPITEL 3: DIE M³ COACHING-PRINZIPIEN */}
          {/* ---------------------------------------------------- */}
          <section className="space-y-10">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold block">
                Arbeitsweise & Haltung
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight text-foreground">
                Worauf du dich bei mir verlassen kannst.
              </h2>
              <p className="text-muted-foreground text-sm md:text-base">
                Mein Coaching basiert auf wissenschaftlicher Systematik, ehrlicher Führung und dem klaren Ziel deiner Unabhängigkeit.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 text-left">
              <div className="rounded-2xl border border-border bg-white p-6 md:p-8 space-y-3 hover:border-gold/50 transition-colors shadow-sm">
                <div className="flex items-center gap-2.5 text-gold font-display font-bold text-lg">
                  <Target className="w-5 h-5" />
                  <span>1. Struktur statt Chaos</span>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Keine Zufallsergebnisse. Wir analysieren deine Ausgangslage (Stoffwechsel, Bewegung, Alltag) und bauen einen logischen, messbaren Fahrplan mit klaren Prioritäten.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-white p-6 md:p-8 space-y-3 hover:border-orange-500/50 transition-colors shadow-sm">
                <div className="flex items-center gap-2.5 text-orange-600 font-display font-bold text-lg">
                  <Flame className="w-5 h-5" />
                  <span>2. Verstehen vor Verändern</span>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Bevor wir an Stellschrauben drehen, verstehen wir die Ursache. Wer die biochemischen und biomechanischen Zusammenhänge begreift, trifft dauerhaft bessere Entscheidungen.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-white p-6 md:p-8 space-y-3 hover:border-emerald-600/50 transition-colors shadow-sm">
                <div className="flex items-center gap-2.5 text-emerald-700 font-display font-bold text-lg">
                  <ShieldCheck className="w-5 h-5" />
                  <span>3. Klarheit & echte Begleitung</span>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Kein Schönreden, kein Verurteilen: <em>„Verständnis, wenn Verständnis gebraucht wird. Arschtritt, wenn Arschtritt gebraucht wird.“</em> Ehrliches Feedback für echte Resultate.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-white p-6 md:p-8 space-y-3 hover:border-indigo-600/50 transition-colors shadow-sm">
                <div className="flex items-center gap-2.5 text-indigo-700 font-display font-bold text-lg">
                  <UserCheck className="w-5 h-5" />
                  <span>4. Ich mache mich überflüssig</span>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Das Ziel ist nicht dauerhafte Abhängigkeit vom Coach, sondern deine Selbstständigkeit. Du lernst das System, bis du deinen Körper und deine Routinen selbst steuerst — ein Leben lang.
                </p>
              </div>
            </div>
          </section>

          {/* ---------------------------------------------------- */}
          {/* INTERAKTIVE HORIZONTALE TIMELINE MIT DETAIL-POPUPS */}
          {/* ---------------------------------------------------- */}
          <InteractiveTimeline />

          {/* ---------------------------------------------------- */}
          {/* BOTTOM CTA */}
          {/* ---------------------------------------------------- */}
          <section className="pt-8 border-t border-border/80 text-center space-y-8">
            <div className="max-w-2xl mx-auto space-y-4">
              <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight text-foreground">
                Lass uns über deine Ausgangslage sprechen.
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Erst verstehen. Dann entscheiden: In einem unverbindlichen 20-minütigen Orientierungsgespräch schauen wir gemeinsam, wo deine wirklichen Hebel liegen.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gold-gradient px-8 py-4 font-bold text-sm md:text-base text-primary-foreground shadow-[var(--shadow-gold)] hover:opacity-95 hover:scale-[1.02] transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Orientierungsgespräch vereinbaren</span>
              </a>
              <Link
                to="/"
                hash="system"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-border bg-white px-8 py-4 font-semibold text-foreground hover:bg-slate-50 transition-all shadow-sm"
              >
                <span>Das M³-System ansehen</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>
        </div>
      </main>

      <PathwayCrossNav currentRoute="ueber-mich" />
      <Footer />
    </div>
  );
}
