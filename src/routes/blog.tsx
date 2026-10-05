import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import {
  BookOpen,
  Sparkles,
  Search,
  Clock,
  ArrowRight,
  Flame,
  Dumbbell,
  Brain,
  MessageCircle,
  Compass,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { posts, Post } from "@/data/posts";

export const Route = createFileRoute("/blog")({
  component: BlogPage,
  head: () => ({
    meta: [
      { title: "M³ Journal & Wissenschaft – Praxiswissen zu Stoffwechsel, Biomechanik & Mindset" },
      {
        name: "description",
        content:
          "10 fundamentale Artikel aus der Praxis: Warum härteres Training scheitert wenn das Fundament brennt, wie Blutzucker funktioniert und warum Routinen ohne Motivation halten.",
      },
    ],
  }),
});

function BlogPage() {
  const [selectedPillar, setSelectedPillar] = useState<"all" | "m1" | "m2" | "m3">("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesPillar = selectedPillar === "all" || post.pillar === selectedPillar;
      const matchesSearch =
        searchQuery === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesPillar && matchesSearch;
    });
  }, [selectedPillar, searchQuery]);

  const pillarMeta = {
    m1: { name: "M¹ Metabolism", color: "text-orange-600 border-orange-500/30 bg-orange-500/10", icon: Flame },
    m2: { name: "M² Movement", color: "text-emerald-700 border-emerald-500/30 bg-emerald-500/10", icon: Dumbbell },
    m3: { name: "M³ Mindset", color: "text-blue-700 border-blue-500/30 bg-blue-500/10", icon: Brain },
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between overflow-x-hidden selection:bg-gold/20 selection:text-foreground">
      <Header />
      <Breadcrumbs items={[{ label: "Journal & Wissenschaft", pillar: "gold" }]} />

      <main className="flex-grow py-10 md:py-16 relative hero-bg">
        <div className="relative max-w-6xl mx-auto px-5 md:px-6 space-y-12 md:space-y-16">
          
          {/* Header & Mission */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gold font-bold shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>M³ Journal & Wissenschaft</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight leading-[1.05] text-foreground">
              Aus dem System. <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500">Wissen aus der Praxis.</span>
            </h1>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Keine Theorie für die Schublade. 10 fundamentale Texte aus über 30 Jahren Erfahrung — warum der Blutzucker abstürzt, warum Last ohne saubere Bahn verschleißt und wie Routinen ohne Motivations-Hype halten.
            </p>
          </div>

          {/* Search & Pillar Filter Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-3 rounded-2xl bg-card border border-border shadow-sm">
            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              <button
                type="button"
                onClick={() => setSelectedPillar("all")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedPillar === "all"
                    ? "bg-gold-gradient text-primary-foreground shadow-sm"
                    : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                }`}
              >
                Alle Texte ({posts.length})
              </button>
              <button
                type="button"
                onClick={() => setSelectedPillar("m1")}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  selectedPillar === "m1"
                    ? "bg-orange-500 text-white shadow-sm"
                    : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                }`}
              >
                <Flame className="w-3.5 h-3.5" />
                <span>M¹ Metabolism ({posts.filter((p) => p.pillar === "m1").length})</span>
              </button>
              <button
                type="button"
                onClick={() => setSelectedPillar("m2")}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  selectedPillar === "m2"
                    ? "bg-emerald-600 text-white shadow-sm"
                    : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                }`}
              >
                <Dumbbell className="w-3.5 h-3.5" />
                <span>M² Movement ({posts.filter((p) => p.pillar === "m2").length})</span>
              </button>
              <button
                type="button"
                onClick={() => setSelectedPillar("m3")}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  selectedPillar === "m3"
                    ? "bg-blue-600 text-white shadow-sm"
                    : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                }`}
              >
                <Brain className="w-3.5 h-3.5" />
                <span>M³ Mindset ({posts.filter((p) => p.pillar === "m3").length})</span>
              </button>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Thema suchen (z. B. Blutzucker)..."
                className="w-full pl-9 pr-4 py-2 rounded-xl bg-secondary/50 border border-border text-xs focus:outline-none focus:ring-2 focus:ring-gold/50 text-foreground"
              />
            </div>
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => {
              const meta = pillarMeta[post.pillar];
              const Icon = meta.icon;

              return (
                <article
                  key={post.slug}
                  className="rounded-3xl border border-border bg-card overflow-hidden shadow-sm hover:border-gold/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group text-left"
                >
                  <div>
                    {/* Media Thumbnail */}
                    <Link to="/blog/$slug" params={{ slug: post.slug }} className="block relative aspect-[16/10] overflow-hidden bg-black">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      
                      {/* Badge Top Left */}
                      <div className="absolute top-3 left-3">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-md border ${meta.color}`}>
                          <Icon className="w-3 h-3" />
                          <span>{meta.name}</span>
                        </span>
                      </div>

                      {/* Minutes Read Bottom Right */}
                      <div className="absolute bottom-3 right-3 text-white text-[11px] font-mono font-semibold flex items-center gap-1 bg-black/60 backdrop-blur-md px-2.5 py-0.5 rounded-md">
                        <Clock className="w-3 h-3 text-gold" />
                        <span>{post.minutes} Min. Lesezeit</span>
                      </div>
                    </Link>

                    {/* Content */}
                    <div className="p-6 space-y-3">
                      <h2 className="font-display font-extrabold text-lg md:text-xl text-foreground leading-snug group-hover:text-amber-600 transition-colors">
                        <Link to="/blog/$slug" params={{ slug: post.slug }}>
                          {post.title}
                        </Link>
                      </h2>

                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="p-6 pt-0 border-t border-border/50 mt-4 flex items-center justify-between">
                    <span className="text-[11px] text-muted-foreground font-mono">
                      {new Date(post.date).toLocaleDateString("de-DE", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>

                    <Link
                      to="/blog/$slug"
                      params={{ slug: post.slug }}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 group-hover:translate-x-1 transition-transform"
                    >
                      <span>Artikel lesen</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          {filteredPosts.length === 0 && (
            <div className="p-12 text-center rounded-3xl bg-card border border-border space-y-3">
              <BookOpen className="w-8 h-8 text-muted-foreground mx-auto" />
              <div className="font-display font-bold text-base text-foreground">Keine Artikel gefunden</div>
              <p className="text-xs text-muted-foreground">
                Versuche es mit einem anderen Suchbegriff oder setze den Säulen-Filter zurück.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedPillar("all");
                  setSearchQuery("");
                }}
                className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 underline cursor-pointer"
              >
                Filter zurücksetzen
              </button>
            </div>
          )}

          {/* Bottom Consultation Strip */}
          <section className="rounded-3xl border border-gold/30 bg-gradient-to-br from-gold/10 via-card to-card p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 text-left shadow-lg">
            <div className="space-y-2 max-w-xl">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-gold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-gold" />
                Vom Wissen zur individuellen Umsetzung
              </span>
              <h3 className="font-display font-extrabold text-2xl md:text-3xl text-foreground">
                Möchtest du herausfinden, wo dein persönlicher Engpass liegt?
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Im unverbindlichen 20-minütigen Kennenlerngespräch analysieren wir deine Ausgangslage und ordnen dich in das M³-System ein.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
              <a
                href="https://wa.me/4917699016640?text=Hallo%20Mich%C3%A9l,%20ich%20habe%20einen%20Artikel%20im%20Journal%20gelesen%20und%20m%C3%B6chte%20ein%20Erstgespr%C3%A4ch."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gold-gradient px-6 py-3.5 text-xs sm:text-sm font-bold text-primary-foreground shadow-[var(--shadow-gold)] hover:opacity-95 transition"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Erstgespräch anfragen</span>
              </a>
              <Link
                to="/system-start"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 rounded-full border border-border bg-card px-5 py-3.5 text-xs sm:text-sm font-bold text-foreground hover:bg-secondary transition"
              >
                <Compass className="w-4 h-4 text-amber-600" />
                <span>M³ System Start</span>
              </Link>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
