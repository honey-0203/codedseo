import Link from "next/link";
import { Fragment } from "react";

// Lets page copy carry in-content links with a tiny markup: "read our [cafe SEO guide](/cafe-seo-marketing-agency)".
const LINK = /\[([^\]]+)\]\(([^)\s]+)\)/g;

export function Rich({ text }: { text: string }) {
  const out: React.ReactNode[] = [];
  let last = 0;
  for (const m of text.matchAll(LINK)) {
    const i = m.index ?? 0;
    if (i > last) out.push(text.slice(last, i));
    const [, label, href] = m;
    out.push(
      href.startsWith("/") ? <Link key={i} href={href} className="in-link">{label}</Link> : <a key={i} href={href} className="in-link" target="_blank" rel="noopener noreferrer">{label}</a>,
    );
    last = i + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return <Fragment>{out}</Fragment>;
}

// Same text without the link markup (for schema, meta and other plain-text uses).
export const plain = (text: string) => text.replace(LINK, "$1");
