import { createFileRoute } from "@tanstack/react-router";
import { Sitemap } from "../pages/Sitemap";

export const Route = createFileRoute("/sitemap")({
  component: SitemapPage,
  head: () => ({
    meta: [
      { title: "Sitemap – M³ Performance & Gesundheit" },
    ],
  }),
});

function SitemapPage() {
  return <Sitemap />;
}
