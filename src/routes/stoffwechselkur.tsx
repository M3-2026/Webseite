import { createFileRoute } from "@tanstack/react-router";
import { ModulePage } from "../pages/ModulePage";

export const Route = createFileRoute("/stoffwechselkur")({
  component: StoffwechselkurRoute,
  head: () => ({
    meta: [
      { title: "M¹ Stoffwechselkur – Michél Meier | M³ Performance" },
    ],
  }),
});

function StoffwechselkurRoute() {
  return <ModulePage slug="stoffwechselkur" />;
}
