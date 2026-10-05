import { createFileRoute } from "@tanstack/react-router";
import { MentalPage } from "../pages/MentalPage";

export const Route = createFileRoute("/mental-performance")({
  component: MentalPerformancePageRoute,
  head: () => ({
    meta: [
      { title: "M³ Mental Performance – Neuronale Klarheit & Routinen" },
      {
        name: "description",
        content:
          "Entscheidungsökonomie, tiefer Schlaf und Stressresilienz. Neuronale Leistungsfähigkeit, trainiert wie ein Muskel.",
      },
    ],
  }),
});

function MentalPerformancePageRoute() {
  return <MentalPage />;
}
