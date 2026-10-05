import { createFileRoute } from "@tanstack/react-router";
import { Home } from "../pages/Home";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "M³ Performance & Gesundheit – Michél Meier | Personal Training & Coaching" },
      {
        name: "description",
        content:
          "M³ Performance & Gesundheit: Ganzheitliches Personal Training, das Stoffwechsel (M¹), Biomechanik (M²) und Mindset (M³) vereint. Für schmerzfreie Belastbarkeit und echte Zellenergie im Alltag.",
      },
    ],
  }),
});

function HomePage() {
  return <Home />;
}
