import type { Metadata } from "next";

// Is page ka apna SEO title, description aur canonical (page.tsx client component hai, isliye yahan).
const URL = "https://codedseo.com/case-studies";
const TITLE = "SEO Case Studies | Client Results | CodedSEO";
const DESC = "See how CodedSEO approaches SEO projects across local, ecommerce and B2B businesses, from the first audit to measurable growth.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: URL },
  openGraph: { title: TITLE, description: DESC, url: URL, siteName: "CodedSEO", locale: "en_US", type: "website" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC },
  robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
