import { client } from "@/sanity/client";
import { SITE_URL } from "@/sanity/blog-utils";

// Har 10 minute me naya blog list apne aap update hoga
export const revalidate = 600;

type Post = { title: string; slug: string; excerpt?: string; category?: string; publishedAt?: string };

const INTRO = `# CodedSEO

> CodedSEO.com is a digital marketing agency for brands ready to grow globally
> through AI-powered SEO and digital marketing services.

## Services
- AI-Powered SEO
- Technical SEO
- Content Strategy
- Link Building
- Local SEO
- Analytics & Reporting

## Pages
- Homepage: ${SITE_URL}
- Services: ${SITE_URL}/services
- Contact: ${SITE_URL}/contact
- Blog: ${SITE_URL}/blog
- Free Audit: ${SITE_URL}/free-audit
- Case Studies: ${SITE_URL}/case-studies

## About
- Website: ${SITE_URL}
- Specialty: AI-Powered SEO & Digital Marketing
- Clients: Global Businesses`;

export async function GET() {
  let posts: Post[] = [];
  try {
    posts = await client.fetch(
      `*[_type == "post" && defined(slug.current) && noindex != true] | order(publishedAt desc){
        title, "slug": slug.current, "excerpt": coalesce(metaDescription, excerpt), category, publishedAt
      }`
    );
  } catch {
    posts = [];
  }

  // Category ke hisaab se group
  const groups: Record<string, Post[]> = {};
  for (const p of posts) (groups[p.category || "Articles"] ||= []).push(p);

  const blog = Object.entries(groups)
    .map(([cat, list]) =>
      `### ${cat}\n` +
      list.map((p) => `- [${p.title}](${SITE_URL}/blog/${p.slug})${p.excerpt ? `: ${p.excerpt.replace(/\s+/g, " ").trim()}` : ""}`).join("\n")
    )
    .join("\n\n");

  const body = posts.length ? `${INTRO}\n\n## Blog Articles\n\n${blog}\n` : `${INTRO}\n`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}