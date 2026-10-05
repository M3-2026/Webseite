import { createFileRoute } from "@tanstack/react-router";
import { Blog } from "../pages/Blog";

export const Route = createFileRoute("/blog")({
  component: BlogPage,
  head: () => ({
    meta: [
      { title: "M³ Journal – Wissenschaft & Praxis | Michél Meier" },
      {
        name: "description",
        content:
          "10 fundamentale Texte aus der Praxis: Warum der Blutzucker abstürzt, warum Last ohne Bahn verschleißt und wie Routinen ohne Hype halten.",
      },
    ],
  }),
});

function BlogPage() {
  return <Blog />;
}
