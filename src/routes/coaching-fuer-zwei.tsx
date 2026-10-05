import { createFileRoute } from "@tanstack/react-router";
import { ModulePage } from "../pages/ModulePage";

export const Route = createFileRoute("/coaching-fuer-zwei")({
  component: CoachingFuerZweiRoute,
  head: () => ({
    meta: [
      { title: "M² Coaching für Zwei – Michél Meier | M³ Performance" },
    ],
  }),
});

function CoachingFuerZweiRoute() {
  return <ModulePage slug="coaching-fuer-zwei" />;
}
