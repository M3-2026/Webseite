import { createFileRoute } from "@tanstack/react-router";
import { Home } from "../pages/Home";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "M³ PERFORMANCE & GESUNDHEIT – Leistung Beginnt Mit Gesundheit | Michél Meier" },
      {
        name: "description",
        content:
          "M³ Performance & Gesundheit: Leistung beginnt mit Gesundheit. Ganzheitliches Personal Training, das Stoffwechsel (M¹), Biomechanik (M²) und Mindset (M³) vereint.",
      },
    ],
  }),
});

function HomePage() {
  return <Home />;
}
