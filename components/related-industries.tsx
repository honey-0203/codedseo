import Link from "next/link";
import "./related-industries.css";

// Internal links between the industry landing pages. Add new industry pages here
// and they are linked from every other industry page automatically.
export const INDUSTRY_PAGES = [
  { href: "/local-seo-for-taxi-company", title: "Local SEO for Taxi Companies", d: "Rank for taxi near me, airport and town searches." },
  { href: "/food-delivery-service-seo-company", title: "Food Delivery Service SEO", d: "More direct orders from Google, fewer app fees." },
  { href: "/cafe-seo-marketing-agency", title: "Cafe SEO Marketing", d: "Rank for cafe near me and fill more tables." },
  { href: "/home-security-seo-services", title: "Home Security SEO Services", d: "Book more alarm, CCTV and smart-lock installs." },
] as const;

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
