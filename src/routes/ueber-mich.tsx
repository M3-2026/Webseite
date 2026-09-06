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
  Play,
  HeartHandshake,
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

function UeberMichPage() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <div className="min-h-screen bg-white text-foreground flex flex-col justify-between overflow-x-hidden selection:bg-gold/20 selection:text-foreground">
      <Header />
      <Breadcrumbs items={[{ label: "Über Michél Meier", pillar: "gold" }]} />

      <main className="flex-grow py-10 md:py-16 relative bg-white">
        <div className="relative max-w-6xl mx-auto px-5 md:px-6 space-y-16 md:space-y-20">

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

              {/* Minimalist Key Facts Bar */}
              <div className="flex flex-wrap gap-2.5 pt-2">
                <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-border bg-slate-50/80 text-xs font-semibold text-foreground shadow-2xs">
                  <Trophy className="w-4 h-4 text-gold shrink-0" />
                  <span>IDO World Champion Breakdance</span>
                </div>

                <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-border bg-slate-50/80 text-xs font-semibold text-foreground shadow-2xs">
                  <Clock className="w-4 h-4 text-primary shrink-0" />
                  <span>25+ Jahre Bewegungspraxis</span>
                </div>

                <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-border bg-slate-50/80 text-xs font-semibold text-foreground shadow-2xs">
                  <Award className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Master Personal Trainer</span>
                </div>

                <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-border bg-slate-50/80 text-xs font-semibold text-foreground shadow-2xs">
                  <ShieldCheck className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span>100% Autonomie-Fokus</span>
                </div>
              </div>
            </div>

            {/* Authentic Studio Portrait */}
            <div className="lg:col-span-5 flex justify-center relative">
              <div className="relative w-full max-w-md">
                <div className="rounded-3xl overflow-hidden border-2 border-gold/40 shadow-[var(--shadow-gold)] bg-black/60 aspect-[4/5] relative group">
                  <img
                    src="/images/gym-shooting/A7401490_enhanced.jpg"
                    alt="Michél Meier – Master Personal Trainer & Gründer M³"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
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
          {/* VIDEO SHOWCASE: FOKUSSIERTER EINBLICK */}
          {/* ---------------------------------------------------- */}
          <section className="rounded-3xl border border-border bg-white p-6 md:p-10 shadow-xs text-left">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3.5 py-1 text-xs uppercase tracking-[0.18em] text-gold font-bold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>M³ Video-Einblick</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-foreground">
                  Erlebe die Philosophie von M³
                </h2>
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
          </section>

          {/* ---------------------------------------------------- */}
          {/* DAS HERZSTÜCK: INTERAKTIVE HORIZONTALE TIMELINE */}
          {/* ---------------------------------------------------- */}
          <InteractiveTimeline />

          {/* ---------------------------------------------------- */}
          {/* WERTE & HALTUNG (EINHEITLICHER, SCHLANKER ABSCHNITT) */}
          {/* ---------------------------------------------------- */}
          <section className="rounded-3xl border border-border bg-white p-8 md:p-12 space-y-8 text-left shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/70 pb-6">
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-gold">
                  Marken-DNA & Qualitätsversprechen
                </span>
                <h3 className="font-display font-extrabold text-2xl md:text-4xl text-foreground">
                  Werte & Haltung
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground max-w-md">
                Vier unverrückbare Grundsätze, nach denen jede Begleitung, jedes Training und jede Beratung ausgerichtet ist.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  icon: <UserCheck className="w-5 h-5 text-gold" />,
                  title: "Eigenverantwortung & Autonomie",
                  desc: "Wir begleiten dich eng – aber mit dem klaren Ziel deiner Unabhängigkeit. Du lernst das System, um deinen Körper, deinen Stoffwechsel und deinen Alltag dauerhaft selbst zu steuern.",
                },
                {
                  icon: <Target className="w-5 h-5 text-amber-600" />,
                  title: "Struktur vor Zufall",
                  desc: "Keine Experimente. Wir analysieren deine Ausgangslage (Stoffwechsel, Biomechanik, Alltag) und bauen einen logischen, messbaren Fahrplan mit klaren Prioritäten.",
                },
                {
                  icon: <HeartHandshake className="w-5 h-5 text-emerald-600" />,
                  title: "Ehrlichkeit & Menschlichkeit",
                  desc: "Klare Worte ohne Schönfärberei. Vor dem Problem steht der Mensch: Lebenssituation, Beruf und Belastungen fließen ein – mit ehrlicher Führung für spürbare Resultate.",
                },
                {
                  icon: <ShieldCheck className="w-5 h-5 text-indigo-600" />,
                  title: "Kompromisslose Qualität",
                  desc: "Aus 25 Jahren Spitzensport und Praxis: Nur Maßnahmen, die einem fundierten physiologischen Anspruch genügen. Kein Trend-Hype, sondern dauerhafte Schmerzfreiheit und Belastbarkeit.",
                },
              ].map((v, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-border bg-white p-6 space-y-3.5 hover:border-gold/50 transition-all duration-300 shadow-2xs hover:shadow-xs flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-9 h-9 rounded-xl bg-slate-50 border border-border flex items-center justify-center shadow-2xs">
                        {v.icon}
                      </div>
                      <span className="font-mono text-xs font-bold text-muted-foreground/60">
                        0{i + 1}
                      </span>
                    </div>
                    <div className="font-display font-extrabold text-base text-foreground leading-snug">
                      {v.title}
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
