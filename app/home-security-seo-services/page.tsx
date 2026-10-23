import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import SecurityHome from "./SecurityHome";
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

const URL = "https://codedseo.com/home-security-seo-services";
const TITLE = "Home Security SEO Services | SEO for Security Companies | CodedSEO";
const DESC =
  "Home security SEO services for alarm, CCTV and smart-lock installers. Rank in Google Maps, build trust and book more installs. From $199/mo, free audit.";

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
      name: "SEO for Home Security Companies",
      serviceType: "Local Search Engine Optimization",
      audience: { "@type": "BusinessAudience", audienceType: "Home security, alarm, CCTV and smart-home security installers" },
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
      name: "How to do SEO for a home security company",
      step: STEPS.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.t, text: s.d })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://codedseo.com" },
        { "@type": "ListItem", position: 2, name: "SEO Services", item: "https://codedseo.com/services" },
        { "@type": "ListItem", position: 3, name: "Home Security SEO Services", item: URL },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ],
};

export default async function HomeSecurityPage() {
  const posts = await getRelatedPosts(/local|google|map|gmb|business profile|review|lead|service area|near me/i);
  return (
    <div className={poppins.variable}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <SecurityHome posts={posts} />
    </div>
  );
}
