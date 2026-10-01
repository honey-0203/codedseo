import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import OrganicSeo from "./OrganicSeo";
import { FAQS, STEPS } from "./faqs";
import "../../seo-outsourcing-india/so.css";
import "./os.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-poppins",
});

const SITE = "https://codedseo.com";
const URL = `${SITE}/services/organic-seo`;
const TITLE = "Organic SEO Services | Organic SEO Company | CodedSEO";
const DESC =
  "Organic SEO services that grow traffic, leads and sales. Technical SEO, content, links and AI search from an organic SEO company trusted by 100+ clients.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: ["organic seo services", "organic seo company", "organic search engine optimization services", "organic seo specialists", "natural search engine optimization services", "organic seo agency", "organic seo services for small business"],
  alternates: { canonical: URL },
  openGraph: { title: TITLE, description: DESC, url: URL, siteName: "CodedSEO", locale: "en_US", type: "website", images: [{ url: `${SITE}/codedseo.png` }] },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC },
  robots: { index: true, follow: true },
};

const INCLUDED = ["Keyword research", "Technical SEO", "On-page optimization", "Content creation", "Internal linking", "White-hat link building", "Local SEO", "Schema markup", "AI search optimization", "Competitor analysis", "Conversion optimization", "Analytics and reporting"];

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
      founder: { "@type": "Person", name: "Balbir Singh" },
      address: { "@type": "PostalAddress", streetAddress: "Sector 74, Phase 8B", addressLocality: "Mohali", addressRegion: "Punjab", postalCode: "160055", addressCountry: "IN" },
      areaServed: ["United States", "United Kingdom", "Canada", "Australia", "India"],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      url: SITE,
      name: "CodedSEO",
      publisher: { "@id": `${SITE}/#organization` },
    },
    {
      "@type": "Service",
      "@id": `${URL}#service`,
      name: "Organic SEO Services",
      alternateName: ["Organic search engine optimization services", "Natural search engine optimization services"],
      serviceType: "Organic SEO",
      description: DESC,
      url: URL,
      provider: { "@id": `${SITE}/#organization` },
      areaServed: ["United States", "United Kingdom", "Canada", "Australia", "India"],
      audience: { "@type": "BusinessAudience", audienceType: "Small businesses, local businesses, e-commerce, SaaS and agencies" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "What's included in our organic SEO services",
        itemListElement: INCLUDED.map((n) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: n } })),
      },
    },
    {
      "@type": "WebPage",
      "@id": `${URL}#webpage`,
      url: URL,
      name: TITLE,
      description: DESC,
      inLanguage: "en-US",
      isPartOf: { "@id": `${SITE}/#website` },
      about: { "@id": `${URL}#service` },
      breadcrumb: { "@id": `${URL}#breadcrumb` },
      dateModified: "2026-10-01",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE },
        { "@type": "ListItem", position: 2, name: "SEO Services", item: `${SITE}/services` },
        { "@type": "ListItem", position: 3, name: "Organic SEO Services", item: URL },
      ],
    },
    {
      "@type": "HowTo",
      "@id": `${URL}#process`,
      name: "Our organic SEO process",
      step: STEPS.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.title, text: s.text })),
    },
    {
      "@type": "FAQPage",
      "@id": `${URL}#faq`,
      mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ],
};

export default function OrganicSeoPage() {
  return (
    <div className={poppins.variable}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <OrganicSeo />
    </div>
  );
}