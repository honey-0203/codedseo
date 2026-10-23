import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import CafeHome from "./CafeHome";
import { FAQS, STEPS } from "./config";
import { CONTACT } from "@/lib/contact";
import { getRelatedPosts } from "@/lib/related-posts";

// Blogs Sanity se live aate hain (har 10 min refresh). Koi fake card nahi.
export const revalidate = 600;

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-poppins",
});

const URL = "https://codedseo.com/cafe-seo-marketing-agency";
const TITLE = "Cafe SEO Marketing Agency | SEO for Cafes & Coffee Shops | CodedSEO";
const DESC =
  "Cafe SEO marketing agency for coffee shops, cat cafes and board game cafes. Rank for cafe near me in Google Maps and fill more tables. From $199/mo.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: URL },
  openGraph: { title: TITLE, description: DESC, url: URL, siteName: "CodedSEO", locale: "en_US", type: "website" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC },
  robots: { index: true, follow: true },
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
      name: "SEO for Cafes and Coffee Shops",
      serviceType: "Local Search Engine Optimization",
      audience: { "@type": "BusinessAudience", audienceType: "Cafes, coffee shops, cat cafes and board game cafes" },
      provider: { "@id": "https://codedseo.com/#organization" },
      areaServed: { "@type": "Country", name: "United States" },
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
      about: { "@id": `${URL}#service` },
    },
    {
      "@type": "HowTo",
      name: "How to do SEO for a cafe",
      step: STEPS.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.t, text: s.d })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://codedseo.com" },
        { "@type": "ListItem", position: 2, name: "SEO Services", item: "https://codedseo.com/services" },
        { "@type": "ListItem", position: 3, name: "Cafe SEO Marketing", item: URL },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ],
};

export default async function CafePage() {
  const posts = await getRelatedPosts(/local|google|map|gmb|business profile|review|cafe|restaurant|near me/i);
  return (
    <div className={poppins.variable}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <CafeHome posts={posts} />
    </div>
  );
}
