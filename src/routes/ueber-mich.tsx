import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Trophy,
  Award,
  ShieldCheck,
  Target,
  Flame,
  Clock,
  Sparkles,
  UserCheck,
  Activity,
  Play,
  Heart,
  Compass,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { InteractiveTimeline } from "@/components/InteractiveTimeline";

export const Route = createFileRoute("/ueber-mich")({
  component: UeberMichPage,
  head: () => ({
    meta: [
      { title: "Über Michél Meier – Story, Werte & Werdegang | M³ Performance" },
      {
        name: "description",
        content:
          "25+ Jahre Bewegungserfahrung, IDO Breakdance-Weltmeister & Master Personal Trainer: Erfahre alles über Michél Meiers Geschichte, Werte und die Entstehung des M³-Systems.",
      },
    ],
  }),
});

const HERO_PERFORMANCE_PICTURES = [
  { image: "/images/performance/hero-performance-1.jpg", alt: "Michél Meier – Breakdance World Champion Flying Freeze" },
  { image: "/images/gym-shooting/A7401556.jpg", alt: "Michél Meier – Landmine Barbell Rotation Training" },
  { image: "/images/performance/hero-performance-2.jpg", alt: "Michél Meier – Headstand Freeze Studio" },
  { image: "/images/gym-shooting/A7401533.jpg", alt: "Michél Meier – Functional Core Training 20kg" },
  { image: "/images/performance/hero-performance-5.jpg", alt: "Michél Meier – OBEY Cap Elbow Lever Freeze" },
  { image: "/images/gym-shooting/A7401604.jpg", alt: "Michél Meier – Heavy Dumbbell Press 34kg" },
  { image: "/images/performance/hero-performance-3.jpg", alt: "Michél Meier – Urban Street Balance Freeze" },
  { image: "/images/gym-shooting/A7401466.jpg", alt: "Michél Meier – Cossack Squat & Hip Mobility" },
  { image: "/images/performance/hero-performance-4.jpg", alt: "Michél Meier – Rooftop One-Arm Freeze" },
  { image: "/images/gym-shooting/A7401490.jpg", alt: "Michél Meier – Personal Trainer & Coach" },
];

const HERO_PERFORMANCE_PICTURES_DOUBLED = [
  ...HERO_PERFORMANCE_PICTURES,
  ...HERO_PERFORMANCE_PICTURES,
  ...HERO_PERFORMANCE_PICTURES,
];

function UeberMichPage() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <div className="min-h-screen bg-white text-foreground flex flex-col justify-between overflow-x-hidden selection:bg-gold/20 selection:text-foreground">
      <Header />
      <Breadcrumbs items={[{ label: "Über Michél Meier", pillar: "gold" }]} />

      <main className="flex-grow py-10 md:py-16 relative bg-white">
        <div className="relative max-w-6xl mx-auto px-5 md:px-6 space-y-16 md:space-y-24">

          {/* ---------------------------------------------------- */}
          {/* HERO: PROFIL & EXECUTIVE SUMMARY */}
          {/* ---------------------------------------------------- */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-5 sm:space-y-6 min-w-0 text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gold font-bold shadow-2xs">
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
                <div className="rounded-2xl border border-border bg-white p-4 flex flex-col justify-between hover:border-gold/50 transition-colors shadow-xs">
                  <Trophy className="w-5 h-5 text-gold mb-2" />
                  <div>
                    <div className="font-display font-bold text-lg text-foreground">2006/07</div>
                    <div className="text-xs text-muted-foreground font-medium">IDO World Champion Breakdance</div>
                  </div>
                </div>

                <div className="rounded-2xl border border-border bg-white p-4 flex flex-col justify-between hover:border-primary/50 transition-colors shadow-xs">
                  <Clock className="w-5 h-5 text-primary mb-2" />
                  <div>
                    <div className="font-display font-bold text-lg text-foreground">25+ Jahre</div>
                    <div className="text-xs text-muted-foreground font-medium">Bewegungs- & Trainererfahrung</div>
                  </div>
                </div>

                <div className="rounded-2xl border border-border bg-white p-4 flex flex-col justify-between hover:border-emerald-600/50 transition-colors shadow-xs">
                  <Award className="w-5 h-5 text-emerald-600 mb-2" />
                  <div>
                    <div className="font-display font-bold text-lg text-foreground">Master Trainer</div>
                    <div className="text-xs text-muted-foreground font-medium">Personal Training Zertifizierung</div>
                  </div>
                </div>

                <div className="rounded-2xl border border-border bg-white p-4 flex flex-col justify-between hover:border-indigo-600/50 transition-colors shadow-xs">
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
                  <div className="absolute bottom-5 left-5 right-5 space-y-1 text-left">
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
          {/* MEDIA SHOWCASE: VIDEO & LIVE ACTION */}
          {/* ---------------------------------------------------- */}
          <section className="space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold block">
                Einblicke & Live Action
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-extrabold tracking-tight text-foreground">
                25 Jahre Bewegung in Aktion
              </h2>
              <p className="text-sm md:text-base text-muted-foreground">
                Authentische Erfahrung aus internationalem Spitzensport, Theaterproduktionen und moderner Coaching-Praxis.
              </p>
            </div>

            {/* Video Showcase Card */}
            <div className="rounded-3xl border border-border bg-white p-6 md:p-10 shadow-xs text-left">
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
                    Wie aus 25 Jahren Spitzensport, Anatomie-Verständnis und echter Alltagserfahrung ein modulares Gesundheitssystem für schmerzfreie Belastbarkeit und dauerhafte Vitalität entstand.
                  </p>
                  <div className="text-xs font-medium text-amber-700 italic border-l-2 border-amber-500 pl-3 py-1 bg-amber-500/5 rounded-r-lg">
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

            {/* M³ Live Performance Infinity Carousel */}
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
          {/* INTERAKTIVE HORIZONTALE TIMELINE MIT DETAIL-POPUPS */}
          {/* ---------------------------------------------------- */}
          <InteractiveTimeline />

          {/* ---------------------------------------------------- */}
          {/* DIE 5 UNVERRÜCKBAREN M³-WERTE */}
          {/* ---------------------------------------------------- */}
          <section className="rounded-3xl border border-border bg-white p-8 md:p-12 space-y-8 text-left shadow-xs">
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
                  className="rounded-2xl border border-border bg-white p-5 space-y-2.5 hover:border-gold/50 transition-colors shadow-2xs"
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
          {/* COACHING-PRINZIPIEN & HALTUNG */}
          {/* ---------------------------------------------------- */}
          <section className="space-y-10">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold block">
                Arbeitsweise & Haltung
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-extrabold tracking-tight text-foreground">
                Worauf du dich bei mir verlassen kannst.
              </h2>
              <p className="text-muted-foreground text-xs sm:text-sm md:text-base">
                Mein Coaching basiert auf wissenschaftlicher Systematik, ehrlicher Führung und dem klaren Ziel deiner dauerhaften Autonomie.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 text-left">
              <div className="rounded-2xl border border-border bg-white p-6 md:p-8 space-y-3 hover:border-gold/50 transition-colors shadow-xs">
                <div className="flex items-center gap-2.5 text-gold font-display font-bold text-lg">
                  <Target className="w-5 h-5" />
                  <span>1. Struktur statt Chaos</span>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Keine Zufallsergebnisse. Wir analysieren deine Ausgangslage (Stoffwechsel, Bewegung, Alltag) und bauen einen logischen, messbaren Fahrplan mit klaren Prioritäten.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-white p-6 md:p-8 space-y-3 hover:border-orange-500/50 transition-colors shadow-xs">
                <div className="flex items-center gap-2.5 text-orange-600 font-display font-bold text-lg">
                  <Flame className="w-5 h-5" />
                  <span>2. Verstehen vor Verändern</span>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Bevor wir an Stellschrauben drehen, verstehen wir die Ursache. Wer die biochemischen und biomechanischen Zusammenhänge begreift, trifft dauerhaft bessere Entscheidungen.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-white p-6 md:p-8 space-y-3 hover:border-emerald-600/50 transition-colors shadow-xs">
                <div className="flex items-center gap-2.5 text-emerald-700 font-display font-bold text-lg">
                  <ShieldCheck className="w-5 h-5" />
                  <span>3. Klarheit & echte Begleitung</span>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Kein Schönreden, kein Verurteilen: <em>„Verständnis, wenn Verständnis gebraucht wird. Arschtritt, wenn Arschtritt gebraucht wird.“</em> Ehrliches Feedback für echte Resultate.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-white p-6 md:p-8 space-y-3 hover:border-indigo-600/50 transition-colors shadow-xs">
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
        </div>
      </main>

      <Footer />
    </div>
  );
}
