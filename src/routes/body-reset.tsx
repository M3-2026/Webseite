import { createFileRoute } from "@tanstack/react-router";
import { ModulePage } from "../pages/ModulePage";

export const Route = createFileRoute("/body-reset")({
  component: BodyResetRoute,
  head: () => ({
    meta: [
      { title: "M¹ Body Reset – Michél Meier | M³ Performance" },
    ],
  }),
});

function BodyResetRoute() {
  return <ModulePage slug="body-reset" />;
}
