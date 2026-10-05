import { createFileRoute } from "@tanstack/react-router";
import { PillarPage } from "../pages/PillarPage";

export const Route = createFileRoute("/metabolism")({
  component: MetabolismPageRoute,
  head: () => ({
    meta: [
      { title: "M¹ Metabolism – Stoffwechsel & Zellenergie | M³ Performance" },
      {
        name: "description",
        content:
          "Darmgesundheit, stabiler Blutzucker und zelluläre Grundversorgung. Das biologische Fundament für echte Leistungsfähigkeit.",
      },
    ],
  }),
});

function MetabolismPageRoute() {
  return <PillarPage slug="metabolism" />;
}
