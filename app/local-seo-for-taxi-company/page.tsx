import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import TaxiHome from "./TaxiHome";
import { FAQS } from "./faqs";
import { CONTACT } from "@/lib/contact";
import { getRelatedPosts } from "@/lib/related-posts";
import "../seo-agency-usa/usa.css";
import "./taxi.css";

// Blogs Sanity se live aate hain (har 10 min refresh). Koi fake card nahi.
export const revalidate = 600;

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-poppins",
});

const URL = "https://codedseo.com/local-seo-for-taxi-company";
const TITLE = "Local SEO for Taxi Company | Taxi SEO Services | CodedSEO";
const DESC =
  "Local SEO for taxi companies: rank in Google Maps for taxi near me, airport and town searches. 7-step guide, pricing from $199/mo and a free audit.";

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
      name: "Local SEO for Taxi Companies",
      serviceType: "Local Search Engine Optimization",
      audience: { "@type": "BusinessAudience", audienceType: "Taxi and cab companies" },
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
      name: "How to do local SEO for a taxi company",
      step: [
        "Set up your Google Business Profile as a service-area business",
        "Add every service people search for",
        "Build a page for each town and airport",
        "Ask every happy rider for a review",
        "Make the phone number impossible to miss",
        "Keep your name, address and phone the same everywhere",
        "Add TaxiService schema and track calls",
      ].map((name, i) => ({ "@type": "HowToStep", position: i + 1, name })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://codedseo.com" },
        { "@type": "ListItem", position: 2, name: "SEO Services", item: "https://codedseo.com/services" },
        { "@type": "ListItem", position: 3, name: "Local SEO for Taxi Companies", item: URL },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ],
};

export default async function TaxiPage() {
  const posts = await getRelatedPosts(/local|google|map|gmb|business profile|review|lead|near me/i);
  return (
    <div className={poppins.variable}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <TaxiHome posts={posts} />
    </div>
  );
}
