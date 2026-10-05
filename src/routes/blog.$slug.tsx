import { createFileRoute } from "@tanstack/react-router";
import { Article } from "../pages/Article";

export const Route = createFileRoute("/blog/$slug")({
  component: ArticlePageRoute,
});

function ArticlePageRoute() {
  const { slug } = Route.useParams();
  return <Article slug={slug} />;
}
