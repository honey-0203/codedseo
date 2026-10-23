import type { Metadata } from "next";

// Is page ka apna SEO title, description aur canonical (page.tsx client component hai, isliye yahan).
const URL = "https://codedseo.com/team";
const TITLE = "Our Team | SEO Experts at CodedSEO";
const DESC = "Meet the CodedSEO team of SEO strategists, content writers and developers who plan, build and report on your SEO campaigns.";

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
