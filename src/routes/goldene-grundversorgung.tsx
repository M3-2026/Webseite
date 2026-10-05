import { createFileRoute } from "@tanstack/react-router";
import { ModulePage } from "../pages/ModulePage";

export const Route = createFileRoute("/goldene-grundversorgung")({
  component: GoldeneGrundversorgungRoute,
  head: () => ({
    meta: [
      { title: "Goldene Grundversorgung – Michél Meier | M³ Performance" },
    ],
  }),
});

function GoldeneGrundversorgungRoute() {
  return <ModulePage slug="goldene-grundversorgung" />;
}
