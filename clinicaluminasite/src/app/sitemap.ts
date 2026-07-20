import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { treatments } from "@/data/treatments";
import { specialists } from "@/data/specialists";
import { articles } from "@/data/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: site.url, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${site.url}/clinica`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/tratamentos`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${site.url}/especialistas`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${site.url}/resultados`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${site.url}/conteudos`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${site.url}/contato`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/politica-de-privacidade`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];

  return [
    ...staticRoutes,
    ...treatments.map((t) => ({
      url: `${site.url}/tratamentos/${t.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    ...specialists.map((s) => ({
      url: `${site.url}/especialistas/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...articles.map((a) => ({
      url: `${site.url}/conteudos/${a.slug}`,
      lastModified: new Date(`${a.date}T12:00:00`),
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}
