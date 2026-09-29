import { client } from "@/sanity/client";
import { SITE_URL } from "@/sanity/blog-utils";
import { getSitePages } from "@/lib/site-pages";

// Har 10 minute me naya blog list apne aap update hoga
export const revalidate = 600;

type Post = { title: string; slug: string; excerpt?: string; category?: string; publishedAt?: string };

function intro(PAGES: string) {
  return `# CodedSEO

> CodedSEO.com is a digital marketing agency for brands ready to grow globally
> through AI-powered SEO and digital marketing services.

## Services
- AI-Powered SEO
- Technical SEO
- Content Strategy
- Link Building
- Local SEO
- Analytics & Reporting

${PAGES}

## About
- Website: ${SITE_URL}
- Specialty: AI-Powered SEO & Digital Marketing
- Clients: Global Businesses`;
}

export async function GET() {
  // Website ke saare pages app folder se apne aap
  const PAGES =
    "## Pages\n" +
    getSitePages()
      .map((p) => `- ${p.title}: ${SITE_URL}${p.path}`)
      .join("\n");
  const INTRO = intro(PAGES);

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