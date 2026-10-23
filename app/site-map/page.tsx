import type { Metadata } from "next";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { getSitePages, type SitePage } from "@/lib/site-pages";
import { client } from "@/sanity/client";
import { SITE_URL } from "@/sanity/blog-utils";
import "../seo-agency-usa/usa.css";
import "./site-map.css";

// HTML sitemap: pages app folder se aur blogs Sanity se APNE AAP aate hain.
// Naya page banao to yahan kuch likhna nahi padta.
export const revalidate = 600;

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], display: "swap", variable: "--font-poppins" });

const URL = `${SITE_URL}/site-map`;
const TITLE = "Sitemap | All Pages on CodedSEO";
const DESC = "Every page on CodedSEO in one place: SEO services, locations, company pages, guides and blog articles.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: URL },
  robots: { index: true, follow: true },
};

const GROUPS: { title: string; test: (p: string) => boolean }[] = [
  { title: "Company", test: (p) => /^\/(about|why-choose-us|team|reviews|video-testimonials|case-studies|contact)/.test(p) },
  { title: "SEO Services", test: (p) => /^\/(services|seo$|seo-outsourcing|digital-marketing|free-audit|local-seo-for|seo-for-)/.test(p) },
  { title: "Locations", test: (p) => /^\/seo-agency-/.test(p) },
  { title: "Resources", test: (p) => /^\/(blog|learn|tools|insights|resources)$/.test(p) },
  { title: "Legal", test: (p) => /(privacy|terms|disclaimer|refund|cookie)/.test(p) },
];

function groupPages(pages: SitePage[]) {
  const rest = pages.filter((p) => p.path !== "" && p.path !== "/site-map");
  const used = new Set<string>();
  const out = GROUPS.map((g) => {
    const items = rest.filter((p) => !used.has(p.path) && g.test(p.path));
    items.forEach((p) => used.add(p.path));
    return { title: g.title, items: items.sort((a, b) => a.title.localeCompare(b.title)) };
  });
  const other = rest.filter((p) => !used.has(p.path));
  if (other.length) out.push({ title: "More Pages", items: other });
  return out.filter((g) => g.items.length);
}

async function getPosts(): Promise<{ title: string; slug: string }[]> {
  try {
    return await client.fetch(
      `*[_type == "post" && defined(slug.current) && noindex != true] | order(publishedAt desc){ title, "slug": slug.current }`
    );
  } catch {
    return [];
  }
}

export default async function SiteMapPage() {
  const groups = groupPages(getSitePages());
  const posts = await getPosts();
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebPage", "@id": `${URL}#webpage`, url: URL, name: TITLE, description: DESC, inLanguage: "en-US", isPartOf: { "@id": "https://codedseo.com/#organization" } },
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Sitemap", item: URL },
      ] },
    ],
  };

  return (
    <div className={poppins.variable}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />
      <div className="isu">
        <main>
          <section className="sec sm-hero">
            <div className="wrap">
              <nav className="sm-crumb" aria-label="Breadcrumb"><Link href="/">Home</Link> › <span>Sitemap</span></nav>
              <h1>Sitemap</h1>
              <p className="grey">Every page on CodedSEO in one place. Looking for the file search engines read? See the <a href="/sitemap.xml">XML sitemap</a>.</p>
            </div>
          </section>
          <section className="sec pt0">
            <div className="wrap sm-grid">
              {groups.map((g) => (
                <div key={g.title} className="sm-group">
                  <h2>{g.title}</h2>
                  <ul>
                    {g.title === "Company" && <li><Link href="/">Home</Link></li>}
                    {g.items.map((p) => (
                      <li key={p.path}><Link href={p.path}>{p.title.split(" | ")[0]}</Link>{p.description && <p className="sm-desc">{p.description}</p>}</li>
                    ))}
                  </ul>
                </div>
              ))}
              {posts.length > 0 && (
                <div className="sm-group sm-wide">
                  <h2>Blog Articles</h2>
                  <ul className="sm-cols">
                    {posts.map((p) => (
                      <li key={p.slug}><Link href={`/blog/${p.slug}`}>{p.title}</Link></li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
}
