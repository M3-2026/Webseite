import { createFileRoute } from "@tanstack/react-router";
import { MentalPage } from "../pages/MentalPage";

export const Route = createFileRoute("/mental-performance")({
  component: MentalPerformancePageRoute,
  head: () => ({
    meta: [
      { title: "M³ REPEAT – Mindset, Disziplin, Routinen & Nachhaltige Veränderung" },
      {
        name: "description",
        content:
          "M³ REPEAT: Der Leitgedanke und die Philosophie des M³-Systems. Aus Motivation wird Disziplin, aus Disziplin Routine, aus Routine Gewohnheit.",
      },
    ],
  }),
});

function MentalPerformancePageRoute() {
  return <MentalPage />;
}
