import { createFileRoute } from "@tanstack/react-router";
import { ModulePage } from "../pages/ModulePage";

export const Route = createFileRoute("/darmkur")({
  component: DarmkurRoute,
  head: () => ({
    meta: [
      { title: "M¹ 16-Tage Darmkur – Michél Meier | M³ Performance" },
    ],
  }),
});

function DarmkurRoute() {
  return <ModulePage slug="darm-stoffwechselbegleitung" />;
}
