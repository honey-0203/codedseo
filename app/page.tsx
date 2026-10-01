import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import HomePage from "./HomePage";
import { GROUPS, FAQ_CATS } from "./home-data";
import "./seo-outsourcing-india/so.css";
import "./home.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-poppins",
});

const SITE = "https://codedseo.com";
const URL = `${SITE}/`;
const TITLE = "SEO Agency & Digital Marketing Company | CodedSEO";
const DESC =
  "CodedSEO is an SEO agency and web development company for businesses in the USA, UK, Canada and Australia. SEO, Google Ads, WordPress, Shopify and HubSpot CRM.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESC,
  keywords: ["seo agency", "seo company", "seo services", "digital marketing company", "digital marketing agency", "full service digital marketing agency", "web development company", "local seo services", "google ads agency", "white label seo", "wordpress development services", "hubspot consultant"],
  alternates: { canonical: URL },
  openGraph: { title: TITLE, description: DESC, url: URL, siteName: "CodedSEO", locale: "en_US", type: "website", images: [{ url: `${SITE}/codedseo.png` }] },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC },
  robots: { index: true, follow: true },
};

const ALL_FAQS = FAQ_CATS.flatMap((c) => c.items);

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${SITE}/#organization`,
      name: "CodedSEO",
      url: SITE,
      logo: `${SITE}/codedseo.png`,
      image: `${SITE}/codedseo.png`,
      email: "sales@codedseo.com",
      description: DESC,
      founder: { "@type": "Person", name: "Balbir Singh" },
      address: { "@type": "PostalAddress", streetAddress: "Sector 74, Phase 8B", addressLocality: "Mohali", addressRegion: "Punjab", postalCode: "160055", addressCountry: "IN" },
      areaServed: ["United States", "United Kingdom", "Canada", "Australia", "India"],
      knowsAbout: ["SEO", "Local SEO", "Technical SEO", "Google Ads", "Social Media Marketing", "Web Development", "WordPress", "Shopify", "Next.js", "HubSpot CRM", "CRM Migration"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "CodedSEO services",
        itemListElement: GROUPS.map((g) => ({
          "@type": "OfferCatalog",
          name: g.label,
          itemListElement: g.cards.map((c) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: c.t, description: c.d } })),
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      url: SITE,
      name: "CodedSEO",
      publisher: { "@id": `${SITE}/#organization` },
    },
    {
      "@type": "WebPage",
      "@id": `${URL}#webpage`,
      url: URL,
      name: TITLE,
      description: DESC,
      inLanguage: "en-US",
      isPartOf: { "@id": `${SITE}/#website` },
      about: { "@id": `${SITE}/#organization` },
      dateModified: "2026-10-01",
    },
    {
      "@type": "FAQPage",
      "@id": `${URL}#faq`,
      mainEntity: ALL_FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ],
};

export default function Home() {
  return (
    <div className={poppins.variable}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <HomePage />
    </div>
  );
}
