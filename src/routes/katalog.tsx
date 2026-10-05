import { createFileRoute } from "@tanstack/react-router";
import { Catalog } from "../pages/Catalog";

export const Route = createFileRoute("/katalog")({
  component: CatalogPage,
  head: () => ({
    meta: [
      { title: "M³ Angebotskatalog – Alle Module im Überblick" },
      {
        name: "description",
        content:
          "Der modulare Baukasten von M³ Performance: Von kostenlosen Checks bis zu High-Ticket Betreuungen in den Säulen M¹, M² und M³.",
      },
    ],
  }),
});

function CatalogPage() {
  return <Catalog />;
}
