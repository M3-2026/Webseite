import { createFileRoute } from "@tanstack/react-router";
import { ModulePage } from "../pages/ModulePage";

export const Route = createFileRoute("/performance-training")({
  component: PerformanceTrainingRoute,
  head: () => ({
    meta: [
      { title: "M² Performance Training – Michél Meier | M³ Performance" },
    ],
  }),
});

function PerformanceTrainingRoute() {
  return <ModulePage slug="performance-training" />;
}
