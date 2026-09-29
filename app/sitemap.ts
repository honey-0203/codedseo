import type { MetadataRoute } from "next";
import { client } from "@/sanity/client";
import { SITE_URL } from "@/sanity/blog-utils";
import { getSitePages } from "@/lib/site-pages";

export const revalidate = 600;

// Pages: app folder se apne aap. Blogs: Sanity se apne aap.
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const pages: MetadataRoute.Sitemap = getSitePages().map((p) => ({
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