import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const routes = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/stretch-ceilings", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/pricing", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/projects", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/contact", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.6, changeFrequency: "monthly" as const },
    // Room pages
    { path: "/stretch-ceiling-living-room", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/stretch-ceiling-bathroom", priority: 0.8, changeFrequency: "monthly" as const },
    // Type pages
    { path: "/stretch-ceiling-matte", priority: 0.75, changeFrequency: "monthly" as const },
    { path: "/stretch-ceiling-glossy", priority: 0.75, changeFrequency: "monthly" as const },
    { path: "/lighted-stretch-ceiling", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/acoustic-stretch-ceiling", priority: 0.75, changeFrequency: "monthly" as const },
    { path: "/printed-stretch-ceiling", priority: 0.75, changeFrequency: "monthly" as const },
    // Lighting pages
    { path: "/stretch-ceiling-led-strip", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/stretch-ceiling-magnetic-track", priority: 0.7, changeFrequency: "monthly" as const },
    // Comparison & guide
    { path: "/stretch-ceiling-vs-drywall", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/stretch-ceiling-guide", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/stretch-ceiling-repair", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/barrisol", priority: 0.75, changeFrequency: "monthly" as const },
    // B2B
    { path: "/stretch-ceilings-for-business", priority: 0.75, changeFrequency: "monthly" as const },
    { path: "/stretch-ceilings-for-architects", priority: 0.7, changeFrequency: "monthly" as const },
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
