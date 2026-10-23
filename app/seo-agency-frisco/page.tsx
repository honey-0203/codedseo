import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import FriscoHome from "./FriscoHome";
import { FAQS } from "./faqs";
import "../seo-agency-usa/usa.css";
import { CONTACT } from "@/lib/contact";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-poppins",
});

const URL = "https://codedseo.com/seo-agency-frisco";
const TITLE = "SEO Company Frisco TX | Frisco SEO Services | CodedSEO";
const DESC =
  "Looking for an SEO company in Frisco, TX? CodedSEO helps Frisco businesses rank in Google Maps, organic search and AI answers. Plans from $199/mo. Free audit.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: URL },
  openGraph: { title: TITLE, description: DESC, url: URL, siteName: "CodedSEO", locale: "en_US", type: "website" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC },
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
      about: { "@id": `${URL}#service` },
      reviewedBy: { "@type": "Person", name: "Balbir Singh" },
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

export default function FriscoPage() {
  return (
    <div className={poppins.variable}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <FriscoHome />
    </div>
  );
}
