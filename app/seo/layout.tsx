import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Company for Small Businesses | CodedSEO",
  description:
    "Grow your small business with SEO strategies designed to increase rankings, qualified traffic, leads, and local visibility.",
};

export default function SeoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}