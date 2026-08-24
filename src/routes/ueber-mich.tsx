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

      <main className="flex-grow py-20 md:py-28 relative hero-bg">
        {/* Ambient Glow */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-gold/8 blur-3xl" />
        </div>

        <div className="relative max-w-5xl mx-auto px-5 md:px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition mb-10 group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            <span>Zurück zur Startseite</span>
          </Link>

          {/* HERO / INTRO */}
          <div className="mb-20 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-card/80 backdrop-blur px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gold font-bold shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Über Michél Meier · Gründer von M³</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight leading-[1.02] text-foreground">
              Vom Weltmeistertitel zum <span className="text-gold">ganzheitlichen Gesundheitssystem.</span>
            </h1>

            <p className="text-lg md:text-2xl text-muted-foreground font-medium leading-relaxed max-w-3xl">
              Warum selbst die härteste Disziplin scheitert, wenn das Fundament nicht stimmt – und wie aus 25 Jahren Spitzensport, Rückschlägen und Alltagsrealität das M³-System entstand.
            </p>

            {/* Quick Key Facts Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
              <div className="rounded-2xl border border-border bg-card/70 p-4 flex flex-col justify-between">
                <Trophy className="w-5 h-5 text-gold mb-2" />
                <div>
                  <div className="font-display font-bold text-lg text-foreground">2006/07</div>
                  <div className="text-xs text-muted-foreground font-medium">IDO World Champion Breakdance</div>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-card/70 p-4 flex flex-col justify-between">
                <Clock className="w-5 h-5 text-primary mb-2" />
                <div>
                  <div className="font-display font-bold text-lg text-foreground">25+ Jahre</div>
                  <div className="text-xs text-muted-foreground font-medium">Bewegungs- & Trainererfahrung</div>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-card/70 p-4 flex flex-col justify-between">
                <Award className="w-5 h-5 text-emerald-600 mb-2" />
                <div>
                  <div className="font-display font-bold text-lg text-foreground">Master Trainer</div>
                  <div className="text-xs text-muted-foreground font-medium">Personal Training Zertifizierung</div>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-card/70 p-4 flex flex-col justify-between">
                <ShieldCheck className="w-5 h-5 text-indigo-600 mb-2" />
                <div>
                  <div className="font-display font-bold text-lg text-foreground">100% Autonomie</div>
                  <div className="text-xs text-muted-foreground font-medium">System statt Coach-Abhängigkeit</div>
                </div>
              </div>
            </div>
          </div>

          {/* MAIN PROFILE & STORY SPLIT */}
          <div className="grid md:grid-cols-12 gap-10 items-center mb-20">
            <div className="md:col-span-5 flex justify-center relative">
              <div className="relative">
                <img
                  src={avatar}
                  alt="Michél Meier – M³ Gründer und Coach"
                  className="avatar-shadow h-[45vh] sm:h-[55vh] max-h-[550px] w-auto object-contain object-bottom select-none"
                />
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-card/90 backdrop-blur border border-border/80 rounded-2xl px-4 py-2 text-center shadow-lg whitespace-nowrap">
                  <div className="font-display font-bold text-sm text-foreground">Michél Meier</div>
                  <div className="text-[11px] text-gold font-medium">Breakdance-Weltmeister & Coach</div>
                </div>
              </div>
            </div>

            <div className="md:col-span-7 space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold block">
                  Der Wendepunkt
                </span>
                <h2 className="text-2xl md:text-4xl font-display font-extrabold tracking-tight">
                  „Ich habe am eigenen Körper gelernt, was passiert, wenn man nur Muskeln aufbaut.“
                </h2>
              </div>

              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                Meine Reise begann mit 12 Jahren im Tanz- und Leistungssport. Mit 15 Jahren stand ich bereits selbst als Tanzlehrer auf der Fläche. Jahrelanges, kompromissloses Training führte mich mit den <strong className="text-foreground">„Da Rookies“</strong> bis zum <strong className="text-foreground">IDO Breakdance-Weltmeistertitel 2006/2007</strong>, auf Bühnen wie das Theater Erfurt und zu internationalen Workshops mit Choreografen von Weltstars.
              </p>

              <div className="border-l-2 border-gold/50 pl-4 py-1 text-sm md:text-base italic text-foreground/90 font-medium">
                „Mehr pumpen, Zähne zusammenbeißen, Schmerzen ignorieren – das klassische Fitness-Denken hat mich fast zerstört.“
              </div>

              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                Schwere Verletzungen, blockierte Regeneration und ständige Erschöpfung machten mir eines unmissverständlich klar: <strong className="text-foreground">Wenn dein Fundament brennt, nützt kein härteres Training.</strong> Wenn der Darm rebelliert, der Stoffwechsel blockiert ist oder der Schlaf fehlt, bricht selbst ein Weltmeisterkörper zusammen.
              </p>
            </div>
          </div>

          {/* KAPITEL 2: FÜR ECHTE MENSCHEN GEBAUT */}
          <section className="py-16 border-t border-border/80 space-y-8">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold block">
                Alltagstauglichkeit statt Elfenbeinturm
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight">
                Kein 20-jähriger Fitness-Influencer. Mitten im echten Leben.
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-border bg-card p-6 space-y-3 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                  01
                </div>
                <h3 className="font-display font-bold text-lg text-foreground">
                  Erfahrung aus der Arbeitswelt
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Ob Wehrdienst bei den Feldjägern, fordernde Vertriebsphasen oder Backoffice: Ich kenne Schichtarbeit, Termindruck und den fordernden Spagat zwischen Beruf und Gesundheit aus eigener Praxis.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 space-y-3 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-emerald-600/10 text-emerald-700 flex items-center justify-center font-bold text-sm">
                  02
                </div>
                <h3 className="font-display font-bold text-lg text-foreground">
                  Familie & echte Verantwortung
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Als Vater weiß ich, dass niemand Zeit für 2 Stunden tägliches Gym oder komplizierte 5-Gänge-Diätpläne hat. Gesundheit muss sich in den Alltag einfügen – nicht umgekehrt.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 space-y-3 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-indigo-600/10 text-indigo-700 flex items-center justify-center font-bold text-sm">
                  03
                </div>
                <h3 className="font-display font-bold text-lg text-foreground">
                  Rückkehr zur Kernkompetenz
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Mit fundierter ernährungswissenschaftlicher Basis, kontinuierlichen Trainerweiterbildungen und der Ausbildung zum Master Personal Trainer verbinde ich Wissenschaft mit 25 Jahren Körpererfahrung.
                </p>
              </div>
            </div>
          </section>

          {/* KAPITEL 3: DIE M³ COACHING-PRINZIPIEN */}
          <section className="py-16 border-t border-border/80 space-y-10">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold block">
                Haltung & Werte
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight">
                Worauf du dich bei mir verlassen kannst.
              </h2>
              <p className="text-muted-foreground text-sm md:text-base">
                Mein Coaching basiert auf wissenschaftlicher Systematik, ehrlicher Kommunikation und dem Ziel deiner vollständigen Unabhängigkeit.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-border bg-card p-6 md:p-8 space-y-3">
                <div className="flex items-center gap-2.5 text-gold font-display font-bold text-lg">
                  <Target className="w-5 h-5" />
                  <span>1. Struktur statt Chaos</span>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Keine Zufallsergebnisse. Wir analysieren deine Ausgangslage (Stoffwechsel, Bewegung, Alltag) und bauen einen logischen, messbaren Fahrplan mit klaren Prioritäten.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 md:p-8 space-y-3">
                <div className="flex items-center gap-2.5 text-primary font-display font-bold text-lg">
                  <Flame className="w-5 h-5" />
                  <span>2. Verstehen vor Verändern</span>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Bevor wir an Stellschrauben drehen, verstehen wir die Ursache. Wer die biochemischen und biomechanischen Zusammenhänge begreift, trifft dauerhaft bessere Entscheidungen.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 md:p-8 space-y-3">
                <div className="flex items-center gap-2.5 text-emerald-700 font-display font-bold text-lg">
                  <ShieldCheck className="w-5 h-5" />
                  <span>3. Klarheit & echte Begleitung</span>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Kein Schönreden, kein Verurteilen: <em>„Verständnis, wenn Verständnis gebraucht wird. Arschtritt, wenn Arschtritt gebraucht wird.“</em> Ehrliches Feedback für echte Resultate.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 md:p-8 space-y-3">
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

          {/* MEILENSTEINE / TIMELINE */}
          <section className="py-16 border-t border-border/80 space-y-10">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold block">
                Stationen
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight">
                Ein Weg voller Praxis & Erfahrung
              </h2>
            </div>

            <div className="relative max-w-3xl mx-auto space-y-6">
              {[
                {
                  year: "1995 – 2005",
                  title: "Frühe Leidenschaft & Fundament",
                  desc: "Beginn mit Breakdance & Hip Hop, erste Unterrichtstätigkeit mit 15 Jahren, Mitbegründer der 'Nasty Stylistix' (Thüringenmeister) und Musical-Projekte mit Clueso.",
                },
                {
                  year: "2006 / 2007",
                  title: "IDO Breakdance World Champion",
                  desc: "Weltmeistertitel mit den 'Da Rookies', nationale & internationale Meisterschaften, Solist am Theater Erfurt ('Anatevka', 'Strawinsky – Der Feuervogel').",
                },
                {
                  year: "2012 – 2021",
                  title: "Tanzdozent, Choreograf & Projektleiter",
                  desc: "Leitung internationaler Tanzprojekte, Dozententätigkeit in Deutschland, Frankreich und den Niederlanden, Schirmherr für soziale Jugendprojekte.",
                },
                {
                  year: "2024 – Heute",
                  title: "M³ Performance & Master Personal Trainer",
                  desc: "Bündelung von 25 Jahren Praxiserfahrung in das M³-System (Metabolism, Movement, Mental) und Ausbildung zum Master Personal Trainer.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-border bg-card/60 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-gold/50 transition-all"
                >
                  <div className="sm:w-1/4">
                    <span className="font-mono font-bold text-xs uppercase tracking-wider text-gold px-3 py-1 rounded-full bg-gold/10 inline-block">
                      {item.year}
                    </span>
                  </div>
                  <div className="sm:w-3/4 space-y-1">
                    <h4 className="font-display font-bold text-base text-foreground">
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

          {/* BOTTOM CTA */}
          <section className="pt-16 border-t border-border/80 text-center space-y-8">
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
