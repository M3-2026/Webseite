import { createFileRoute } from "@tanstack/react-router";
import { About } from "../pages/About";

export const Route = createFileRoute("/ueber-mich")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "Über Michél Meier – 30+ Jahre Bewegungserfahrung | M³ Performance" },
      {
        name: "description",
        content:
          "Vom Breakdance-Weltmeister über die Überwindung eines Bandscheibenvorfalls bis zum M³ Performance System. 30+ Jahre Bewegung, Praxis und Erfahrung.",
      },
    ],
  }),
});

function AboutPage() {
  return <About />;
}
