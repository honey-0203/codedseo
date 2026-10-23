import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import FriscoHome from "./FriscoHome";
import { FAQS } from "./faqs";
import "../seo-agency-usa/usa.css";
import { CONTACT } from "@/lib/contact";
import { client } from "@/sanity/client";
import { urlFor } from "@/sanity/blog-utils";
import type { FriscoPost } from "./FriscoHome";

// Blogs Sanity se live aate hain (har 10 min refresh). Koi fake card nahi.
export const revalidate = 600;

const LOCAL_RE = /local|google|map|gmb|business profile|review|lead|ai|search/i;

async function getPosts(): Promise<FriscoPost[]> {
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const rows: any[] = await client.fetch(
      `*[_type == "post" && defined(slug.current) && noindex != true] | order(publishedAt desc)[0...12]{
        title, "slug": slug.current, category, publishedAt, coverImage,
        "excerpt": coalesce(excerpt, metaDescription)
      }`
    );
    const scored = rows
      .map((r, i) => ({ r, score: (LOCAL_RE.test(`${r.title} ${r.category}`) ? 10 : 0) - i }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
      .map(({ r }) => r);
    return scored.map((r) => ({
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

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-poppins",
});

const URL = "https://codedseo.com/seo-agency-frisco";
const TITLE = "SEO Company Frisco TX | Frisco SEO Services | CodedSEO";
const DESC =
  "Need an SEO company in Frisco, TX? CodedSEO helps Frisco businesses rank in Google Maps, search and AI answers. Plans from $199/mo.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: URL },
  openGraph: { title: TITLE, description: DESC, url: URL, siteName: "CodedSEO", locale: "en_US", type: "website", images: [{ url: "https://codedseo.com/images/seo-company-frisco-tx-og.png", width: 1200, height: 630, alt: "SEO company Frisco TX – CodedSEO" }] },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC, images: ["https://codedseo.com/images/seo-company-frisco-tx-og.png"] },
  robots: { index: true, follow: true },
  other: { "geo.region": "US-TX", "geo.placename": "Frisco" },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://codedseo.com/#organization",
      name: "CodedSEO",
      url: "https://codedseo.com",
      logo: "https://codedseo.com/codedseo.png",
      email: CONTACT.email,
      telephone: CONTACT.phoneTel,
      founder: { "@type": "Person", name: "Balbir Singh" },
    },
    {
      "@type": "Service",
      "@id": `${URL}#service`,
      name: "Frisco SEO Services",
      serviceType: "Search Engine Optimization",
      provider: { "@id": "https://codedseo.com/#organization" },
      areaServed: [
        { "@type": "City", name: "Frisco", containedInPlace: { "@type": "State", name: "Texas" } },
        { "@type": "City", name: "Plano" },
        { "@type": "City", name: "McKinney" },
        { "@type": "City", name: "Prosper" },
        { "@type": "City", name: "Little Elm" },
        { "@type": "City", name: "The Colony" },
      ],
      offers: [
        { "@type": "Offer", name: "Starter", price: "199", priceCurrency: "USD" },
        { "@type": "Offer", name: "Growth", price: "499", priceCurrency: "USD" },
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${URL}#webpage`,
      url: URL,
      name: TITLE,
      description: DESC,
      inLanguage: "en-US",
      dateModified: "2026-10-24",
      primaryImageOfPage: { "@type": "ImageObject", url: "https://codedseo.com/images/seo-company-frisco-tx.svg" },
      about: { "@id": `${URL}#service` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://codedseo.com" },
        { "@type": "ListItem", position: 2, name: "SEO Agency USA", item: "https://codedseo.com/seo-agency-usa" },
        { "@type": "ListItem", position: 3, name: "SEO Company Frisco", item: URL },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ],
};

export default async function FriscoPage() {
  const posts = await getPosts();
  return (
    <div className={poppins.variable}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <FriscoHome posts={posts} />
    </div>
  );
}
