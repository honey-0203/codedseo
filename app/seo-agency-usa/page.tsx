import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import UsaHome from "./UsaHome";
import "./usa.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-poppins",
});

const URL = "https://codedseo.com/seo-agency-usa";
const TITLE = "SEO Company in the USA | SEO & AI SEO Services | CodedSEO";
const DESC =
  "CodedSEO is an SEO company helping US businesses rank on Google and in AI search. Technical SEO, content and AI SEO with transparent reporting. Get a free audit.";

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
      email: "hello@codedseo.com",
      areaServed: { "@type": "Country", name: "United States" },
      serviceType: ["SEO services", "AI SEO", "Technical SEO audit", "Local SEO"],
    },
    {
      "@type": "WebPage",
      "@id": `${URL}#webpage`,
      url: URL,
      name: TITLE,
      description: DESC,
      inLanguage: "en-US",
      dateModified: "2026-09-28",
      about: { "@id": "https://codedseo.com/#organization" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://codedseo.com" },
        { "@type": "ListItem", position: 2, name: "SEO Company USA", item: URL },
      ],
    },
  ],
};

export default function UsaPage() {
  return (
    <div className={poppins.variable}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <UsaHome />
    </div>
  );
}