import { createFileRoute } from "@tanstack/react-router";
import { Privacy } from "../pages/Legal";

export const Route = createFileRoute("/datenschutz")({
  component: DatenschutzPage,
  head: () => ({
    meta: [
      { title: "Datenschutzerklärung – M³ Performance & Gesundheit" },
    ],
  }),
});

function DatenschutzPage() {
  return <Privacy />;
}
