import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  useLocation,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { ThemeProvider } from "../theme";
import { LocaleProvider } from "../locale";
import { Layout } from "../components/Layout";

function NotFoundComponent() {
  return (
    <main className="bento-page">
      <div className="wrap" style={{ textAlign: "center", padding: "64px 20px" }}>
        <p className="eyebrow">404</p>
        <h1 style={{ marginTop: 12 }}>Seite nicht gefunden</h1>
        <p className="lead" style={{ margin: "14px auto" }}>Diese Seite existiert nicht im M³-System.</p>
        <div style={{ marginTop: 24 }}>
          <Link to="/" className="btn btn-gold">
            Zur Startseite
          </Link>
        </div>
      </div>
    </main>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => { reportLovableError(error, { boundary: "tanstack_root_error_component" }); }, [error]);
  return (
    <main className="bento-page">
      <div className="wrap" style={{ textAlign: "center", padding: "64px 20px" }}>
        <h1 style={{ marginTop: 12 }}>Etwas ist schiefgelaufen</h1>
        <p className="lead" style={{ margin: "14px auto" }}>Bitte versuche es erneut.</p>
        <button
          onClick={() => { router.invalidate(); reset(); }}
          className="btn btn-gold"
          style={{ marginTop: 16 }}
        >
          Erneut versuchen
        </button>
      </div>
    </main>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "M³ Performance & Gesundheit – Michél Meier | Personal Training & Coaching" },
      { name: "description", content: "Mehr Energie. Mehr Leistung. Mehr Leben. Personal Training, Ernährung, Stoffwechsel & Gesundheitscoaching mit Michél Meier." },
      { property: "og:title", content: "M³ Performance – Personal Training & Gesundheit" },
      { property: "og:description", content: "Mehr Energie. Mehr Leistung. Mehr Leben. Personal Training, Ernährung, Stoffwechsel & Gesundheitscoaching mit Michél Meier." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "M³ Performance – Personal Training & Gesundheit" },
      { name: "twitter:description", content: "Mehr Energie. Mehr Leistung. Mehr Leben. Personal Training, Ernährung, Stoffwechsel & Gesundheitscoaching mit Michél Meier." },
      { property: "og:image", content: "/images/hero-system.jpg" },
      { name: "twitter:image", content: "/images/hero-system.jpg" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,600;1,700;1,800&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  const location = useLocation();
  const canonicalUrl = `https://m3-performance.com${location.pathname === '/' ? '' : location.pathname}`;

  return (
    <html lang="de">
      <head>
        <HeadContent />
        <link rel="canonical" href={canonicalUrl} />
      </head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <LocaleProvider>
          <Layout />
        </LocaleProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
