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
} from "lucide-react";
import avatar from "@/assets/avatar.png";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/ueber-mich")({
  component: UeberMichPage,
});

function UeberMichPage() {
  const WHATSAPP_URL =
    "https://wa.me/4917699016640?text=Hallo%20Mich%C3%A9l,%20ich%20habe%20deine%20Geschichte%20gelesen%20und%20m%C3%B6chte%20ein%20unverbindliches%20Orientierungsgespr%C3%A4ch%20vereinbaren.";

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between overflow-x-hidden selection:bg-gold/20 selection:text-foreground">
      <Header />

      <main className="flex-grow py-16 md:py-24 relative hero-bg">
        {/* Ambient Glow */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-gold/8 blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-5 md:px-6 space-y-20 md:space-y-28">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            <span>Zurück zur Startseite</span>
          </Link>

          {/* ---------------------------------------------------- */}
          {/* HERO: PROFIL & TITEL */}
          {/* ---------------------------------------------------- */}
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-card/80 backdrop-blur px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gold font-bold shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Über Michél Meier · Gründer von M³</span>
              </div>

              <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight leading-[1.02] text-foreground">
                Vom Weltmeistertitel zum <span className="text-gold">ganzheitlichen Gesundheitssystem.</span>
              </h1>

              <p className="text-lg md:text-2xl text-muted-foreground font-medium leading-relaxed max-w-2xl">
                Warum selbst die härteste Disziplin scheitert, wenn das Fundament nicht stimmt – und wie aus 25 Jahren Spitzensport, Rückschlägen und Alltagsrealität das M³-System entstand.
              </p>

              {/* Quick Key Facts Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="rounded-2xl border border-border bg-card/70 p-4 flex flex-col justify-between hover:border-gold/50 transition-colors shadow-sm">
                  <Trophy className="w-5 h-5 text-gold mb-2" />
                  <div>
                    <div className="font-display font-bold text-lg text-foreground">2006/07</div>
                    <div className="text-xs text-muted-foreground font-medium">IDO World Champion Breakdance</div>
                  </div>
                </div>

                <div className="rounded-2xl border border-border bg-card/70 p-4 flex flex-col justify-between hover:border-primary/50 transition-colors shadow-sm">
                  <Clock className="w-5 h-5 text-primary mb-2" />
                  <div>
                    <div className="font-display font-bold text-lg text-foreground">25+ Jahre</div>
                    <div className="text-xs text-muted-foreground font-medium">Bewegungs- & Trainererfahrung</div>
                  </div>
                </div>

                <div className="rounded-2xl border border-border bg-card/70 p-4 flex flex-col justify-between hover:border-emerald-600/50 transition-colors shadow-sm">
                  <Award className="w-5 h-5 text-emerald-600 mb-2" />
                  <div>
                    <div className="font-display font-bold text-lg text-foreground">Master Trainer</div>
                    <div className="text-xs text-muted-foreground font-medium">Personal Training Zertifizierung</div>
                  </div>
                </div>

                <div className="rounded-2xl border border-border bg-card/70 p-4 flex flex-col justify-between hover:border-indigo-600/50 transition-colors shadow-sm">
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
                      IDO Breakdance World Champion · Master Personal Trainer
                    </div>
                  </div>
                </div>

                {/* Floating Micro Badge */}
                <div className="absolute -top-4 -right-4 bg-card/90 backdrop-blur-md border border-border/80 rounded-2xl p-3 shadow-lg flex items-center gap-2.5">
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
          <section className="rounded-3xl border border-border bg-card/60 p-8 md:p-12 space-y-10">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-gold">
                  <Trophy className="w-4 h-4" />
                  <span>Kapitel 1 · Die Lektion des Spitzensports</span>
                </div>

                <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight">
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
          {/* PERFORMANCE STORYLINE: DIE 3 DIMENSIONEN IN AKTION */}
          {/* ---------------------------------------------------- */}
          <section className="space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold block">
                Visual Performance Storyline
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight">
                Die 3 Dimensionen des M³-Systems
              </h2>
              <p className="text-base md:text-lg text-muted-foreground">
                Warum echtes Wohlbefinden nur entstehen kann, wenn Biochemie, Biomechanik und Mindset perfekt ineinandergreifen.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Säule 1 Visual */}
              <div className="rounded-3xl border border-border bg-card overflow-hidden flex flex-col justify-between hover:border-primary/50 transition-all duration-300 group shadow-sm hover:shadow-md">
                <div className="relative w-full h-56 bg-black overflow-hidden">
                  <img
                    src="/images/performance/m1-cardio-vitality.jpg"
                    alt="M1 Metabolism – Zellenergie & Vitalität"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-primary/20 backdrop-blur border border-primary/40 text-primary font-mono text-[11px] font-bold uppercase">
                    M¹ · Biochemie
                  </div>
                </div>

                <div className="p-6 md:p-8 space-y-3 flex-grow flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-wider">
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
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:opacity-80 transition"
                    >
                      <span>M¹ Details ansehen</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Säule 2 Visual */}
              <div className="rounded-3xl border border-border bg-card overflow-hidden flex flex-col justify-between hover:border-emerald-600/50 transition-all duration-300 group shadow-sm hover:shadow-md">
                <div className="relative w-full h-56 bg-black overflow-hidden">
                  <img
                    src="/images/performance/m2-never-give-up.jpg"
                    alt="M2 Movement – Stärke & Disziplin"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-emerald-600/20 backdrop-blur border border-emerald-600/40 text-emerald-700 font-mono text-[11px] font-bold uppercase">
                    M² · Biomechanik
                  </div>
                </div>

                <div className="p-6 md:p-8 space-y-3 flex-grow flex flex-col justify-between">
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
              <div className="rounded-3xl border border-border bg-card overflow-hidden flex flex-col justify-between hover:border-indigo-600/50 transition-all duration-300 group shadow-sm hover:shadow-md">
                <div className="relative w-full h-56 bg-black overflow-hidden">
                  <img
                    src="/images/performance/m3-neural-blueprint.jpg"
                    alt="M3 Mental – Fokus & Systematik"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-indigo-600/20 backdrop-blur border border-indigo-600/40 text-indigo-700 font-mono text-[11px] font-bold uppercase">
                    M³ · Mindset & System
                  </div>
                </div>

                <div className="p-6 md:p-8 space-y-3 flex-grow flex flex-col justify-between">
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
          <section className="rounded-3xl border border-border bg-secondary/30 p-8 md:p-12 space-y-10">
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

              <div className="lg:col-span-7 order-1 lg:order-2 space-y-5">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-gold">
                  <Activity className="w-4 h-4" />
                  <span>Kapitel 2 · Alltagstauglichkeit</span>
                </div>

                <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight">
                  Kein 20-jähriger Fitness-Influencer. Mitten im echten Leben.
                </h2>

                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  Ich kenne die Realität abseits von perfekten Social-Media-Profilen: Schichtdienst bei den Feldjägern der Bundeswehr, fordernde Vertriebs- und Bürophasen, Termindruck und die Verantwortung als Familienvater.
                </p>

                <div className="grid sm:grid-cols-3 gap-4 pt-2">
                  <div className="rounded-2xl border border-border bg-card p-4 space-y-2">
                    <div className="font-display font-extrabold text-sm text-foreground">01. Berufspraxis</div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Verständnis für Büroalltag, Dienstreisen, Schichtarbeit & Zeitknappheit.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-border bg-card p-4 space-y-2">
                    <div className="font-display font-extrabold text-sm text-foreground">02. Familienleben</div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Pläne, die sich nahtlos in den Familienalltag integrieren lassen.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-border bg-card p-4 space-y-2">
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
          {/* KAPITEL 3: DIE M³ COACHING-PRINZIPIEN */}
          {/* ---------------------------------------------------- */}
          <section className="space-y-10">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold block">
                Haltung & Werte
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight">
                Worauf du dich bei mir verlassen kannst.
              </h2>
              <p className="text-muted-foreground text-sm md:text-base">
                Mein Coaching basiert auf wissenschaftlicher Systematik, ehrlicher Führung und dem klaren Ziel deiner Unabhängigkeit.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-border bg-card p-6 md:p-8 space-y-3 hover:border-gold/50 transition-colors shadow-sm">
                <div className="flex items-center gap-2.5 text-gold font-display font-bold text-lg">
                  <Target className="w-5 h-5" />
                  <span>1. Struktur statt Chaos</span>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Keine Zufallsergebnisse. Wir analysieren deine Ausgangslage (Stoffwechsel, Bewegung, Alltag) und bauen einen logischen, messbaren Fahrplan mit klaren Prioritäten.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 md:p-8 space-y-3 hover:border-primary/50 transition-colors shadow-sm">
                <div className="flex items-center gap-2.5 text-primary font-display font-bold text-lg">
                  <Flame className="w-5 h-5" />
                  <span>2. Verstehen vor Verändern</span>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Bevor wir an Stellschrauben drehen, verstehen wir die Ursache. Wer die biochemischen und biomechanischen Zusammenhänge begreift, trifft dauerhaft bessere Entscheidungen.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 md:p-8 space-y-3 hover:border-emerald-600/50 transition-colors shadow-sm">
                <div className="flex items-center gap-2.5 text-emerald-700 font-display font-bold text-lg">
                  <ShieldCheck className="w-5 h-5" />
                  <span>3. Klarheit & echte Begleitung</span>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Kein Schönreden, kein Verurteilen: <em>„Verständnis, wenn Verständnis gebraucht wird. Arschtritt, wenn Arschtritt gebraucht wird.“</em> Ehrliches Feedback für echte Resultate.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 md:p-8 space-y-3 hover:border-indigo-600/50 transition-colors shadow-sm">
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
          {/* MEILENSTEINE / TIMELINE */}
          {/* ---------------------------------------------------- */}
          <section className="space-y-10">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold block">
                Meilensteine & Stationen
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight">
                25+ Jahre Bewegung & Performance
              </h2>
            </div>

            <div className="relative max-w-4xl mx-auto space-y-4">
              {[
                {
                  year: "1995 – 2005",
                  tag: "Fundament",
                  title: "Frühe Leidenschaft & Erste Lehrtätigkeit",
                  desc: "Einstieg in Breakdance & Hip Hop mit 12 Jahren, erste Unterrichtstätigkeit mit 15 Jahren, Mitbegründer der 'Nasty Stylistix' (Thüringenmeister) und Bühnenprojekte mit Künstlern wie Clueso.",
                },
                {
                  year: "2006 / 2007",
                  tag: "Weltklasse",
                  title: "IDO Breakdance World Champion",
                  desc: "Weltmeistertitel mit den 'Da Rookies', internationale Meisterschaften, Solist am Theater Erfurt ('Anatevka', 'Strawinsky – Der Feuervogel') und europaweite Workshops.",
                },
                {
                  year: "2012 – 2021",
                  tag: "Dozentur & Reha",
                  title: "Tanzdozent, Choreograf & Projektleiter",
                  desc: "Leitung internationaler Tanzprojekte in Deutschland, Frankreich und den Niederlanden, Schirmherr sozialer Jugendinitiativen und Vertiefung präventiver Bewegungsmuster.",
                },
                {
                  year: "2024 – Heute",
                  tag: "Ganzheitlichkeit",
                  title: "M³ Performance & Master Personal Trainer",
                  desc: "Bündelung von 25 Jahren Praxiserfahrung in das modulare M³-System (Metabolism, Movement, Mental) und Vollendung der Master Personal Trainer Ausbildung.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-border bg-card/70 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-gold/50 transition-all shadow-sm group"
                >
                  <div className="sm:w-1/3 flex items-center gap-3">
                    <span className="font-mono font-bold text-xs uppercase tracking-wider text-gold px-3 py-1 rounded-full bg-gold/10 inline-block">
                      {item.year}
                    </span>
                    <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">
                      {item.tag}
                    </span>
                  </div>
                  <div className="sm:w-2/3 space-y-1">
                    <h4 className="font-display font-bold text-base text-foreground group-hover:text-gold transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ---------------------------------------------------- */}
          {/* BOTTOM CTA */}
          {/* ---------------------------------------------------- */}
          <section className="pt-8 border-t border-border/80 text-center space-y-8">
            <div className="max-w-2xl mx-auto space-y-4">
              <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight">
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
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-8 py-4 font-semibold text-foreground hover:bg-secondary transition-all"
              >
                <span>Das M³-System ansehen</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
