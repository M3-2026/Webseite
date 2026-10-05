import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  Clock,
  ArrowLeft,
  ArrowRight,
  Flame,
  Dumbbell,
  Brain,
  MessageCircle,
  Calendar,
  Share2,
  Sparkles,
  CheckCircle2,
  Compass,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { posts, Post } from "@/data/posts";
import avatar from "@/assets/avatar.png";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) {
      throw notFound();
    }
    return { post };
  },
  head: ({ loaderData }) => {
    const post = loaderData?.post;
    return {
      meta: [
        { title: post ? `${post.title} | M³ Journal` : "Artikel nicht gefunden | M³ Journal" },
        { name: "description", content: post?.excerpt || "M³ Performance Journal Artikel" },
      ],
    };
  },
  component: BlogPostPage,
});

function BlogPostPage() {
  const { post } = Route.useLoaderData();

  if (!post) {
    return (
      <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
        <Header />
        <main className="py-20 text-center space-y-4">
          <h1 className="text-2xl font-bold">Artikel nicht gefunden</h1>
          <Link to="/blog" className="text-amber-600 font-bold underline">
            Zurück zur Übersicht
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const pillarMeta = {
    m1: {
      name: "M¹ Metabolism",
      label: "Stoffwechsel & Fundament",
      color: "text-orange-600 border-orange-500/30 bg-orange-500/10",
      pillarLink: "/metabolism",
      icon: Flame,
    },
    m2: {
      name: "M² Movement",
      label: "Biomechanik & Belastbarkeit",
      color: "text-emerald-700 border-emerald-500/30 bg-emerald-500/10",
      pillarLink: "/movement",
      icon: Dumbbell,
    },
    m3: {
      name: "M³ Mindset",
      label: "Entscheidungsökonomie & Schlaf",
      color: "text-blue-700 border-blue-500/30 bg-blue-500/10",
      pillarLink: "/mental-performance",
      icon: Brain,
    },
  };

  const meta = pillarMeta[post.pillar];
  const Icon = meta.icon;

  // Find related posts (exclude current)
  const relatedPosts = posts
    .filter((p) => p.slug !== post.slug)
    .sort((a, b) => (a.pillar === post.pillar ? -1 : 1))
    .slice(0, 3);

  const formattedDate = new Date(post.date).toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const WHATSAPP_ARTICLE_URL = `https://wa.me/4917699016640?text=${encodeURIComponent(
    `Hallo Michél, ich habe deinen Artikel "${post.title}" gelesen und möchte mich zu meiner Situation austauschen.`
  )}`;

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between overflow-x-hidden selection:bg-gold/20 selection:text-foreground">
      <Header />
      <Breadcrumbs
        items={[
          { label: "Journal", href: "/blog" },
          { label: post.title, pillar: post.pillar },
        ]}
      />

      <main className="flex-grow py-8 md:py-14 relative hero-bg text-left">
        <article className="max-w-4xl mx-auto px-5 md:px-6 space-y-10 md:space-y-14">
          
          {/* Top Bar: Back link & Pillar Badge */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/70 pb-5">
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Zurück zur Journal-Übersicht</span>
            </Link>

            <div className="flex items-center gap-3">
              <Link
                to={meta.pillarLink}
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${meta.color} hover:opacity-80 transition`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{meta.name}</span>
              </Link>
            </div>
          </div>

          {/* Article Header */}
          <header className="space-y-5">
            <div className="flex items-center gap-4 text-xs text-muted-foreground font-mono">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-gold" />
                <span>{formattedDate}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-gold" />
                <span>{post.minutes} Min. Lesezeit</span>
              </div>
              <span>•</span>
              <span>Von Michél Meier</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight leading-[1.1] text-foreground">
              {post.title}
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground font-medium leading-relaxed border-l-4 border-gold pl-4 py-1 bg-gold/5 rounded-r-2xl">
              {post.excerpt}
            </p>
          </header>

          {/* Hero Media */}
          <div className="relative rounded-3xl overflow-hidden border border-border shadow-xl aspect-[16/9] bg-black">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Article Structured Body Content */}
          <div className="space-y-8 text-foreground/90 leading-relaxed font-sans text-base md:text-lg">
            {post.sections.map((sec, idx) => (
              <div key={idx} className="space-y-3">
                {sec.h && (
                  <h2 className="text-xl md:text-2xl font-display font-bold text-foreground pt-4 border-t border-border/50">
                    {sec.h}
                  </h2>
                )}
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  {sec.p}
                </p>
              </div>
            ))}
          </div>

          {/* Author Box */}
          <div className="rounded-3xl border border-border bg-card p-6 md:p-8 flex flex-col sm:flex-row items-center gap-6 shadow-sm">
            <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-gold/40 shrink-0 bg-black/30 shadow-md">
              <img
                src={avatar}
                alt="Michél Meier"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="space-y-2 text-center sm:text-left flex-grow">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <span className="font-display font-extrabold text-base text-foreground">
                  Michél Meier
                </span>
                <span className="text-[10px] uppercase font-mono font-bold px-2 py-0.5 rounded-full bg-gold/15 text-gold border border-gold/30">
                  Gründer M³ Performance
                </span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                IDO Breakdance-Weltmeister, 30+ Jahre Bewegungspraxis & Master Personal Trainer i.A. Michél verbindet biochemische Stoffwechselordnung, intelligente Biomechanik und mentale Routinen zu einem alltagstauglichen System.
              </p>
              <div className="pt-1">
                <Link
                  to="/ueber-mich"
                  className="text-xs font-bold text-amber-600 hover:underline inline-flex items-center gap-1"
                >
                  <span>Mehr über Michéls Geschichte & Werdegang erfahren</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>

          {/* Direct Strategy CTA Box */}
          <div className="rounded-3xl border-2 border-amber-500/40 bg-gradient-to-br from-amber-500/10 via-card to-card p-8 md:p-10 space-y-6 shadow-xl">
            <div className="space-y-2 text-left">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700 font-mono">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>Persönlicher Transfer</span>
              </div>
              <h3 className="font-display font-extrabold text-2xl md:text-3xl text-foreground">
                Wie lässt sich dieser Hebel in deinen Alltag übertragen?
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-2xl">
                Jeder Körper und jeder Kalender ist einzigartig. Im kostenlosen 20-minütigen Orientierungsgespräch schauen wir direkt auf deine aktuelle Situation und finden heraus, welche Säule bei dir als Erstes tragen muss.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <a
                href={WHATSAPP_ARTICLE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gold-gradient px-8 py-3.5 text-sm font-bold text-primary-foreground shadow-[var(--shadow-gold)] hover:opacity-95 transition"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Erstgespräch zu diesem Thema anfragen</span>
              </a>
              <Link
                to="/system-start"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-bold text-foreground hover:bg-secondary transition"
              >
                <Compass className="w-4 h-4 text-amber-600" />
                <span>M³ System Start</span>
              </Link>
            </div>
          </div>

          {/* Related Articles Section */}
          <div className="space-y-6 pt-6 border-t border-border/70">
            <h3 className="font-display font-extrabold text-xl md:text-2xl text-foreground">
              Passende Texte aus dem Journal
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedPosts.map((rel) => {
                const relMeta = pillarMeta[rel.pillar];
                return (
                  <Link
                    key={rel.slug}
                    to="/blog/$slug"
                    params={{ slug: rel.slug }}
                    className="rounded-2xl border border-border bg-card p-4 flex flex-col justify-between hover:border-gold/40 hover:shadow-md transition group text-left"
                  >
                    <div className="space-y-2">
                      <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border ${relMeta.color}`}>
                        {relMeta.name}
                      </span>
                      <h4 className="font-display font-bold text-sm text-foreground group-hover:text-amber-600 transition-colors leading-snug">
                        {rel.title}
                      </h4>
                    </div>

                    <div className="pt-3 flex items-center justify-between text-[11px] text-muted-foreground font-mono">
                      <span>{rel.minutes} Min.</span>
                      <span className="text-amber-600 font-bold group-hover:translate-x-1 transition-transform">
                        Lesen →
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

        </article>
      </main>

      <Footer />
    </div>
  );
}
