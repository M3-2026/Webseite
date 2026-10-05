import { createFileRoute } from "@tanstack/react-router";
import { ModulePage } from "../pages/ModulePage";

export const Route = createFileRoute("/schmerzfrei")({
  component: SchmerzfreiRoute,
  head: () => ({
    meta: [
      { title: "M² Schmerzfrei – Michél Meier | M³ Performance" },
    ],
  }),
});

function SchmerzfreiRoute() {
  return <ModulePage slug="schmerzfrei" />;
}
