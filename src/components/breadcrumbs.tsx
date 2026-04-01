import { Link } from "react-router-dom";
import { SITE_URL } from "@/lib/site-config";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: `${SITE_URL}${item.href}` } : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="breadcrumb" className="bg-sky-light border-b border-sky-border">
        <div className="section-container py-3">
          <ol className="flex flex-wrap items-center gap-1.5 text-small text-sky-muted">
            {items.map((item, i) => (
              <li key={i} className="flex items-center gap-1.5">
                {i > 0 && <span className="text-sky-border">/</span>}
                {item.href ? (
                  <Link
                    to={item.href}
                    className="hover:text-sky-navy transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-sky-graphite font-medium">
                    {item.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
}
