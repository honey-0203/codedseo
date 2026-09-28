import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import UsaHome from "./UsaHome";
import "./usa.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Digital Marketing Agency USA | SEO, PPC & AI SEO Services",
  description:
    "IndeedSEO is a digital marketing agency serving businesses across the USA with SEO, PPC, social media, AI SEO and reputation management that deliver measurable growth.",
  alternates: { canonical: "https://indeedseo.com/usa" },
  openGraph: {
    title: "Digital Marketing Agency USA | SEO, PPC & AI SEO Services",
    description:
      "SEO, PPC, social media and AI SEO services for US businesses. 1,000+ businesses served, results in 90 days or less.",
    url: "https://indeedseo.com/usa",
    siteName: "IndeedSEO",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "IndeedSEO",
  url: "https://indeedseo.com/usa",
  logo: "https://indeedseo.com/images/logo.png",
  email: "info@indeedseo.com",
  telephone: "+1-808-999-0096",
  address: {
    "@type": "PostalAddress",
    streetAddress: "11844 Bandera Road #199",
    addressLocality: "Helotes",
    addressRegion: "TX",
    postalCode: "78023",
    addressCountry: "US",
  },
  sameAs: [
    "https://www.facebook.com/indeedseo",
    "https://www.instagram.com/indeedseo",
    "https://www.linkedin.com/company/indeedseo",
  ],
};

export default function UsaPage() {
  return (
    <div className={poppins.variable}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <UsaHome />
    </div>
  );
}