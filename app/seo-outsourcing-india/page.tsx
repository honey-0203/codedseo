import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import OutsourcingIndia from "./OutsourcingIndia";
import { FAQS } from "./faqs";
import "./so.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-poppins",
});

const URL = "https://codedseo.com/seo-outsourcing-india";
const TITLE = "SEO Outsourcing India | White Label SEO Partner | CodedSEO";
const DESC =
  "SEO outsourcing India for agencies: white label SEO services, reseller program, AI SEO and branded reports from a Mohali-based team. Get a free proposal.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: URL },
  openGraph: { title: TITLE, description: DESC, url: URL, siteName: "CodedSEO", locale: "en_US", type: "website", images: [{ url: "https://codedseo.com/codedseo.png" }] },
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
      founder: { "@type": "Person", name: "Balbir Singh" },
      address: { "@type": "PostalAddress", streetAddress: "Sector 74, Phase 8B", addressLocality: "Mohali", addressRegion: "Punjab", postalCode: "160055", addressCountry: "IN" },
    },
    {
      "@type": "Service",
      "@id": `${URL}#service`,
      name: "SEO Outsourcing India",
      serviceType: ["SEO outsourcing", "White label SEO services", "SEO reseller program", "International SEO services", "Content writing support"],
      provider: { "@id": "https://codedseo.com/#organization" },
      areaServed: ["United States", "United Kingdom", "Canada", "Australia"],
      url: URL,
    },
    {
      "@type": "WebPage",
      "@id": `${URL}#webpage`,
      url: URL,
      name: TITLE,
      description: DESC,
      inLanguage: "en-US",
      dateModified: "2026-09-30",
      about: { "@id": `${URL}#service` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://codedseo.com" },
        { "@type": "ListItem", position: 2, name: "SEO Services", item: "https://codedseo.com/seo" },
        { "@type": "ListItem", position: 3, name: "SEO Outsourcing India", item: URL },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ],
};

export default function SeoOutsourcingIndiaPage() {
  return (
    <div className={poppins.variable}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <OutsourcingIndia />
    </div>
  );
}
