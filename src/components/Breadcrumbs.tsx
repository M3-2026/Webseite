import { Link } from "@tanstack/react-router";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
  pillar?: "m1" | "m2" | "m3" | "gold";
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  const pillarColorClasses = {
    m1: "text-orange-600 bg-orange-500/10 border-orange-500/20",
    m2: "text-emerald-700 bg-emerald-500/10 border-emerald-500/20",
    m3: "text-blue-700 bg-blue-500/10 border-blue-500/20",
    gold: "text-amber-700 bg-amber-500/10 border-amber-500/20",
  };

  return (
    <nav
      aria-label="Breadcrumb"
      className={`w-full max-w-7xl mx-auto px-5 md:px-6 py-3 flex items-center overflow-x-auto text-xs text-muted-foreground ${className}`}
    >
      <ol className="flex items-center gap-1.5 flex-nowrap whitespace-nowrap">
        {/* Home Item */}
        <li className="flex items-center">
          <Link
            to="/"
            className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors p-1 rounded-md hover:bg-secondary/60"
            title="Zur Startseite"
          >
            <Home className="w-3.5 h-3.5" />
            <span className="sr-only">Startseite</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const badgeClass = item.pillar ? pillarColorClasses[item.pillar] : "";

          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-1.5">
              <ChevronRight className="w-3 h-3 text-border shrink-0" aria-hidden="true" />
              {isLast || !item.href ? (
                <span
                  aria-current={isLast ? "page" : undefined}
                  className={`font-semibold text-foreground px-2 py-0.5 rounded-full border ${
                    badgeClass || "bg-secondary/50 border-border/70 text-foreground"
                  }`}
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.href}
                  className={`transition-colors px-2 py-0.5 rounded-md hover:bg-secondary/60 text-muted-foreground hover:text-foreground ${
                    badgeClass ? `font-semibold ${badgeClass}` : ""
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
