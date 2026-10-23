import type { Metadata } from "next";

// Is page ka apna SEO title, description aur canonical (page.tsx client component hai, isliye yahan).
const URL = "https://codedseo.com/about";
const TITLE = "About CodedSEO | AI-Powered SEO Agency";
const DESC = "Meet CodedSEO, an SEO and AI search agency founded by Balbir Singh, helping businesses in the USA and worldwide grow organic traffic and leads.";

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
