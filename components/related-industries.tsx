import Link from "next/link";
import "./related-industries.css";

import { INDUSTRY_PAGES } from "@/lib/industries";
export { INDUSTRY_PAGES };

export function RelatedIndustries({ current }: { current: string }) {
  const items = INDUSTRY_PAGES.filter((p) => p.href !== current);
  return (
    <section className="ri" aria-labelledby="ri-title">
      <div className="ri-wrap">
        <p className="ri-eyebrow">More industries</p>
        <h2 id="ri-title">Local SEO for Other Industries We Work With</h2>
        <ul className="ri-grid">
          {items.map((p) => (
            <li key={p.href}>
              <Link href={p.href} className="ri-card">
                <b>{p.title}</b>
                <span>{p.d}</span>
                <em aria-hidden="true">→</em>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
