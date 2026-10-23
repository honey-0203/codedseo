import { client } from "@/sanity/client";
import { urlFor } from "@/sanity/blog-utils";

// Landing pages ke "Guides" section ke liye ASLI blogs Sanity se.
// `match` jitna relevant hoga, wahi blog pehle aayega. Kuch na mile to [] (section chhup jata hai).

export type RelatedPost = { title: string; slug: string; category: string; excerpt: string; date: string; image: string; imageAlt: string };

export async function getRelatedPosts(match: RegExp, limit = 3): Promise<RelatedPost[]> {
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const rows: any[] = await client.fetch(
      `*[_type == "post" && defined(slug.current) && noindex != true] | order(publishedAt desc)[0...20]{
        title, "slug": slug.current, category, publishedAt, coverImage,
        "excerpt": coalesce(excerpt, metaDescription)
      }`
    );
    return rows
      .map((r, i) => ({ r, score: (match.test(`${r.title} ${r.category}`) ? 10 : 0) - i * 0.1 }))
      .sort((a, b) => b.score - a.score)
      .slice(0, limit)
      .map(({ r }) => ({
        title: r.title || "",
        slug: r.slug,
        category: r.category || "Blog",
        excerpt: (r.excerpt || "").replace(/\s+/g, " ").trim(),
        date: r.publishedAt ? new Date(r.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : "",
        image: r.coverImage ? urlFor(r.coverImage).width(720).height(450).fit("crop").auto("format").url() : "",
        imageAlt: r.coverImage?.alt || r.title || "",
      }));
  } catch {
    return [];
  }
}
