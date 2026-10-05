import { createFileRoute } from "@tanstack/react-router";
import { ModulePage } from "../pages/ModulePage";

export const Route = createFileRoute("/darm-stoffwechselbegleitung")({
  component: DarmStoffwechselbegleitungRoute,
  head: () => ({
    meta: [
      { title: "M¹ Darmbegleitung – Michél Meier | M³ Performance" },
    ],
  }),
});

function DarmStoffwechselbegleitungRoute() {
  return <ModulePage slug="darm-stoffwechselbegleitung" />;
}
