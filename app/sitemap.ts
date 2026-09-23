import type { MetadataRoute } from "next";
import { client } from "@/sanity/client";
import { SITE_URL } from "@/sanity/blog-utils";

export const revalidate = 600;

const STATIC_PAGES: { path: string; priority: number }[] = [
  { path: "", priority: 1 },
  { path: "/services", priority: 0.9 },
  { path: "/services/organic-seo", priority: 0.8 },
  { path: "/seo", priority: 0.8 },
  { path: "/digital-marketing", priority: 0.8 },
  { path: "/free-audit", priority: 0.8 },
  { path: "/contact", priority: 0.8 },
  { path: "/about", priority: 0.7 },
  { path: "/why-choose-us", priority: 0.6 },
  { path: "/case-studies", priority: 0.7 },
  { path: "/reviews", priority: 0.6 },
  { path: "/video-testimonials", priority: 0.5 },
  { path: "/team", priority: 0.5 },
  { path: "/blog", priority: 0.8 },
  { path: "/resources", priority: 0.5 },
  { path: "/insights", priority: 0.5 },
  { path: "/learn", priority: 0.5 },
  { path: "/tools", priority: 0.5 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const pages: MetadataRoute.Sitemap = STATIC_PAGES.map((p) => ({
    url: `${SITE_URL}${p.path}`,
    lastModified: now,
    changeFrequency: p.path === "/blog" ? "daily" : "monthly",
    priority: p.priority,
  }));

  let posts: { slug: string; updatedAt: string }[] = [];
  try {
    posts = await client.fetch(
      `*[_type == "post" && defined(slug.current) && noindex != true]{ "slug": slug.current, "updatedAt": _updatedAt }`
    );
  } catch {
    posts = [];
  }

  return [
    ...pages,
    ...posts.map((p) => ({
      url: `${SITE_URL}/blog/${p.slug}`,
      lastModified: new Date(p.updatedAt),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  ];
}