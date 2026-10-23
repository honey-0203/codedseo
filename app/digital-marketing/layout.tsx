import type { Metadata } from "next";

// Is page ka apna SEO title, description aur canonical (page.tsx client component hai, isliye yahan).
const URL = "https://codedseo.com/digital-marketing";
const TITLE = "Digital Marketing Services | PPC, Content & Social | CodedSEO";
const DESC = "Digital marketing services that support your SEO: Google Ads, content marketing, social media, email and conversion rate optimization.";

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
