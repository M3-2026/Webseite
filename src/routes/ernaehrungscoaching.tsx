import { createFileRoute } from "@tanstack/react-router";
import { ModulePage } from "../pages/ModulePage";

export const Route = createFileRoute("/ernaehrungscoaching")({
  component: ErnaehrungscoachingRoute,
  head: () => ({
    meta: [
      { title: "M¹ Ernährungscoaching – Michél Meier | M³ Performance" },
    ],
  }),
});

function ErnaehrungscoachingRoute() {
  return <ModulePage slug="ernaehrungscoaching" />;
}
