import type { Metadata } from "next";

// Is page ka apna SEO title, description aur canonical (page.tsx client component hai, isliye yahan).
const URL = "https://codedseo.com/learn";
const TITLE = "Learn SEO | Free SEO Guides & Tutorials | CodedSEO";
const DESC = "Free SEO lessons and tutorials from CodedSEO: keywords, on-page SEO, technical SEO, internal linking and AI search, explained simply.";

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
