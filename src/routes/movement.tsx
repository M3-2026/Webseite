import { createFileRoute } from "@tanstack/react-router";
import { PillarPage } from "../pages/PillarPage";

export const Route = createFileRoute("/movement")({
  component: MovementPageRoute,
  head: () => ({
    meta: [
      { title: "M² Movement – Biomechanik & Schmerzfreiheit | M³ Performance" },
      {
        name: "description",
        content:
          "Technik vor Gewicht, funktionelle Mobilität und Gelenkstabilität. Schmerzfreie Belastbarkeit im Alltag und Sport.",
      },
    ],
  }),
});

function MovementPageRoute() {
  return <PillarPage slug="movement" />;
}
