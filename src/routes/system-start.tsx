import { createFileRoute } from "@tanstack/react-router";
import { SystemStart } from "../pages/SystemStart";

export const Route = createFileRoute("/system-start")({
  component: SystemStartPage,
  head: () => ({
    meta: [
      { title: "M³ System Start – Michél Meier" },
      {
        name: "description",
        content:
          "Nicht irgendein Angebot. Deine Eingangstür ins M³ System. Wir ordnen deinen Status quo ein und definieren deinen ersten Schritt.",
      },
    ],
  }),
});

function SystemStartPage() {
  return <SystemStart />;
}
