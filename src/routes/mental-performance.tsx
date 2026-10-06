import { createFileRoute } from "@tanstack/react-router";
import { MentalPage } from "../pages/MentalPage";

export const Route = createFileRoute("/mental-performance")({
  component: MentalPerformancePageRoute,
  head: () => ({
    meta: [
      { title: "M³ Mindset & Mentale Klarheit – Fokus, Schlaf & Alltags-Routinen" },
      {
        name: "description",
        content:
          "Ruhe im Kopf, gesunder Schlaf und Gewohnheiten, die im echten Leben halten. Das mentale Fundament für nachhaltigen Erfolg.",
      },
    ],
  }),
});

function MentalPerformancePageRoute() {
  return <MentalPage />;
}
