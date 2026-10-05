import { createFileRoute } from "@tanstack/react-router";
import { Imprint } from "../pages/Legal";

export const Route = createFileRoute("/impressum")({
  component: ImpressumPage,
  head: () => ({
    meta: [
      { title: "Impressum – M³ Performance & Gesundheit" },
    ],
  }),
});

function ImpressumPage() {
  return <Imprint />;
}
