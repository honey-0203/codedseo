"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Header as SiteHeader } from "@/components/header";
import { Footer as SiteFooter } from "@/components/footer";
import { GROUPS, INDUSTRIES, PLATFORMS, STEPS, FAQ_CATS, CASES, REVIEWS } from "./home-data";

/* ================= SETTINGS (yahan badlo) ================= */
const CALENDLY = "https://calendly.com/codedseo-sales/30min";
const HUBSPOT_PORTAL = "149445287";
const HUBSPOT_FORM = ""; // HubSpot form GUID (khali ho to form Calendly kholta hai)
const SHOW_PROOF = false; // asli case studies + reviews aane par true karo

const LOOKING_FOR: { group: string; items: string[] }[] = [
  { group: "SEO & Marketing", items: ["SEO Services", "AI SEO / GEO", "Local SEO", "SEO Outsourcing / White Label", "Link Building", "Content Writing", "Google Ads (PPC)", "Social Media Marketing", "Complete Digital Marketing"] },
  { group: "Website Development", items: ["Custom Website Development", "WordPress Development", "Shopify / E-commerce Development", "Next.js / React Development", "Landing Page Design", "Website Redesign / Migration", "Web Design & Development"] },
  { group: "HubSpot & CRM", items: ["HubSpot Setup & Onboarding", "HubSpot CMS Website", "New CRM Setup", "CRM Customization / Changes", "CRM Migration"] },
  { group: "Other", items: ["Training / Internship", "Other"] },
];

/* ================= SMALL PIECES ================= */
const Arrow = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
const Star = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l3 6.5 7 .8-5.2 4.8 1.4 7L12 17.6 5.8 21.1l1.4-7L2 9.3l7-.8z" /></svg>
);
function chartPath(pts: number[]) {
  const line = "M" + pts.map((y, k) => `${Math.round((k * 300) / (pts.length - 1))} ${y}`).join(" L");
  return { line, area: `${line} L300 110 L0 110 Z` };
}

/* ================= HUBSPOT ================= */
async function sendToHubSpot(fields: { name: string; value: string }[]) {
  const body = JSON.stringify({
    fields,
    context: { pageUri: typeof window !== "undefined" ? window.location.href : "", pageName: "Homepage" },
  });
  for (const h of ["https://api.hsforms.com", "https://api-eu1.hsforms.com"]) {
    try {
      const r = await fetch(`${h}/submissions/v3/integration/submit/${HUBSPOT_PORTAL}/${HUBSPOT_FORM}`, { method: "POST", headers: { "Content-Type": "application/json" }, body });
      if (r.ok) return true;
    } catch {
      /* agla host try karo */
    }
  }
  return false;
}

function LeadForm() {
  const [state, setState] = useState<"idle" | "sending" | "ok" | "err">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const f = new FormData(form);
    const get = (k: string) => String(f.get(k) || "").trim();
    if (!HUBSPOT_FORM) {
      window.open(CALENDLY, "_blank", "noopener");
      setState("ok");
      return;
    }
    setState("sending");
    const ok = await sendToHubSpot([
      { name: "firstname", value: get("name") },
      { name: "email", value: get("email") },
      { name: "phone", value: get("phone") },
      { name: "website", value: get("website") },
      { name: "looking_for", value: get("looking") },
      { name: "message", value: get("message") },
    ]);
    setState(ok ? "ok" : "err");
    if (ok) form.reset();
  }

  return (
    <form id="contact" className="soi-form hp-fade2" onSubmit={onSubmit}>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <span className="soi-badge">Free growth plan</span>
        <h2>Tell us what you need. We reply within 1 business day.</h2>
      </div>
      <div className="hp-row2">
        <div className="soi-field"><label htmlFor="hp-name">First name</label><input id="hp-name" name="name" type="text" placeholder="Jane" autoComplete="given-name" /></div>
        <div className="soi-field"><label htmlFor="hp-email">Email *</label><input id="hp-email" name="email" type="email" placeholder="jane@company.com" autoComplete="email" required /></div>
      </div>
      <div className="hp-row2">
        <div className="soi-field"><label htmlFor="hp-phone">Phone *</label><input id="hp-phone" name="phone" type="tel" placeholder="+1 555 000 0000" autoComplete="tel" required /></div>
        <div className="soi-field"><label htmlFor="hp-site">Website URL</label><input id="hp-site" name="website" type="text" placeholder="yourwebsite.com" /></div>
      </div>
      <div className="soi-field">
        <label htmlFor="hp-look">Looking for *</label>
        <select id="hp-look" name="looking" required defaultValue="">
          <option value="" disabled>Select a service</option>
          {LOOKING_FOR.map((g) => (
            <optgroup key={g.group} label={g.group}>
              {g.items.map((i) => <option key={i} value={i}>{i}</option>)}
            </optgroup>
          ))}
        </select>
      </div>
      <div className="soi-field"><label htmlFor="hp-msg">What are your business challenges?</label><textarea id="hp-msg" name="message" rows={3} placeholder="A few lines about your goals" /></div>
      <button type="submit" className="soi-btn soi-btn-g" style={{ width: "100%", minHeight: 54 }} disabled={state === "sending"}>
        {state === "sending" ? "Sending..." : "Get my free plan"}
      </button>
      {state === "ok" && (
        <p className="soi-msg ok" role="status">
          {HUBSPOT_FORM ? "Thanks! We got your details and will reply within 1 business day." : "Thanks! Pick a time on our calendar and we will talk through your plan."}
        </p>
      )}
      {state === "err" && (
        <p className="soi-msg err" role="alert">
          Something went wrong. Please <a href={CALENDLY} target="_blank" rel="noopener noreferrer">book a call here</a> instead.
        </p>
      )}
      <div className="soi-trust"><span>No spam</span><span>Your details stay private</span><span>Real human reply</span></div>
    </form>
  );
}

function AuditBar() {
  const router = useRouter();
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const url = String(new FormData(e.currentTarget).get("url") || "").trim();
    router.push(url ? `/free-audit?url=${encodeURIComponent(url)}` : "/free-audit");
  }
  return (
    <form className="hp-audit-form" onSubmit={onSubmit}>
      <label htmlFor="hp-audit" className="hp-sr">Website URL</label>
      <input id="hp-audit" name="url" type="text" placeholder="Enter your website URL" />
      <button type="submit" className="soi-btn soi-btn-d hp-pulse">Get free audit</button>
    </form>
  );
}

/* ================= PAGE ================= */
export default function HomePage() {
  const [open, setOpen] = useState("0-0");

  return (
    <>
      <SiteHeader />
      <main className="soi hp">
        {/* ===== HERO ===== */}
        <section className="soi-hero">
          <div className="soi-wrap soi-hero-grid">
            <div className="hp-fade" style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <span className="soi-eyebrow">SEO · Digital Marketing · Web Development · HubSpot CRM</span>
              <h1 className="soi-h1 hp-h1"><mark>SEO Agency</mark> &amp; Digital Marketing Company for Growing Businesses</h1>
              <p className="soi-lead">CodedSEO is an SEO agency and web development company helping businesses in the USA, UK, Canada and Australia get found on Google, run Google Ads that pay back, build fast WordPress, Shopify and Next.js websites, and manage every lead in HubSpot CRM. One team, one plan, one report.</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="soi-btn soi-btn-g hp-pulse">Book a free strategy call <Arrow /></a>
                <Link href="/free-audit" className="soi-btn soi-btn-l">Get a free SEO audit</Link>
              </div>
              <div className="soi-stats hp-stats">
                <div><b>1M+</b><span>Keywords ranked</span></div>
                <div><b>100+</b><span>Clients served</span></div>
                <div><b>98%</b><span>Client retention</span></div>
              </div>
            </div>
            <LeadForm />
          </div>
        </section>

        {/* ===== INDUSTRIES STRIP ===== */}
        <section aria-label="Industries" className="hp-strip">
          <p>Industries CodedSEO works with across the USA, UK, Canada and Australia</p>
          <div className="hp-marquee-box">
            <div className="hp-marquee">
              {[...INDUSTRIES, ...INDUSTRIES].map((b, i) => <span key={i} className="soi-chip" aria-hidden={i >= INDUSTRIES.length}>{b}</span>)}
            </div>
          </div>
        </section>

        {/* ===== QUICK JUMP ===== */}
        <nav aria-label="Services" className="soi-wrap hp-jump">
          {GROUPS.map((g) => <a key={g.id} href={`#${g.id}`}>{g.label}</a>)}
        </nav>

        {/* ===== SERVICES INTRO ===== */}
        <section className="soi-wrap" style={{ paddingTop: 48 }}>
          <div className="soi-head" style={{ marginBottom: 0 }}>
            <span className="soi-eyebrow">Our services</span>
            <h2 className="soi-h2">Full-service digital marketing agency for SEO, websites and CRM</h2>
            <p className="soi-lead">Most businesses juggle an SEO company, an ads freelancer, a web developer and a CRM consultant. At CodedSEO, one team handles all of it, so your rankings, ads, website and sales pipeline work as one system.</p>
          </div>
        </section>

        {/* ===== SERVICE GROUPS ===== */}
        {GROUPS.map((g) => (
          <section key={g.id} id={g.id} className="soi-wrap hp-group-sec">
            <div className={g.dark ? "hp-group dk" : "hp-group"}>
              <div className="hp-group-head">
                <div style={{ display: "flex", flexDirection: "column", gap: 10, maxWidth: 720 }}>
                  <span className="hp-tag">{g.label}</span>
                  <h2>{g.h2}</h2>
                  <p>{g.intro}</p>
                </div>
                {g.ctaHref.startsWith("/") ? (
                  <Link href={g.ctaHref} className={g.dark ? "soi-btn soi-btn-g" : "soi-btn soi-btn-d"}>{g.cta} <Arrow /></Link>
                ) : (
                  <a href={g.ctaHref} className={g.dark ? "soi-btn soi-btn-g" : "soi-btn soi-btn-d"}>{g.cta} <Arrow /></a>
                )}
              </div>
              <div className="hp-cards">
                {g.cards.map((c) => (
                  <article key={c.t} className="hp-card">
                    <h3>{c.href ? <Link href={c.href}>{c.t}</Link> : c.t}</h3>
                    <p>{c.d}</p>
                    <ul>{c.tags.map((t) => <li key={t}>{t}</li>)}</ul>
                  </article>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* ===== AUDIT BANNER (CRO) ===== */}
        <section className="soi-wrap" style={{ padding: "32px 32px" }}>
          <div className="hp-audit">
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <span className="hp-tag dk">Free · 48-hour turnaround</span>
              <h2>Find out why your website is not getting leads</h2>
              <p>Get a free audit of your SEO, site speed and conversion setup, with the top fixes in plain English.</p>
            </div>
            <AuditBar />
          </div>
        </section>

        {/* ===== CASE STUDIES (SHOW_PROOF) ===== */}
        {SHOW_PROOF && (
          <section id="case-studies" className="soi-sec">
            <div className="soi-wrap">
              <div className="hp-row-head">
                <div className="soi-head" style={{ marginBottom: 0 }}>
                  <span className="soi-eyebrow">Case studies</span>
                  <h2 className="soi-h2">Real projects, real numbers</h2>
                  <p className="soi-lead">How CodedSEO helped businesses grow traffic, leads and sales with SEO, websites and CRM.</p>
                </div>
                <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="soi-btn soi-btn-d">Get results like these</a>
              </div>
              <div className="soi-g3">
                {CASES.map((cs) => {
                  const p = chartPath(cs.pts);
                  return (
                    <article key={cs.title} className="soi-card soi-case">
                      <div className="hp-case-chart">
                        <svg viewBox="0 0 300 110" preserveAspectRatio="none" aria-hidden="true"><path d={p.area} fill="rgba(169,232,63,0.18)" /><path d={p.line} fill="none" stroke="#a9e83f" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </div>
                      <div className="soi-case-body">
                        <small>{cs.service} · {cs.place}</small>
                        <h4>{cs.title}</h4>
                        <p>{cs.text}</p>
                        <div className="soi-kpis" style={{ gridTemplateColumns: "repeat(2,minmax(0,1fr))" }}>
                          <div><b>{cs.v1}</b><small>{cs.m1}</small></div>
                          <div><b>{cs.v2}</b><small>{cs.m2}</small></div>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* ===== REVIEWS (SHOW_PROOF) ===== */}
        {SHOW_PROOF && (
          <section className="soi-sec soi-dark">
            <div className="soi-wrap">
              <div className="soi-head">
                <span className="soi-eyebrow dk">Client reviews</span>
                <h2 className="soi-h2" style={{ color: "#fff" }}>What our clients say</h2>
              </div>
              <div className="soi-g3">
                {REVIEWS.map((r) => (
                  <figure key={r.name} className="hp-review">
                    <div className="hp-stars" aria-label="5 out of 5 stars"><Star /><Star /><Star /><Star /><Star /></div>
                    <blockquote>{r.quote}</blockquote>
                    <figcaption>
                      <span className="hp-av">{r.init}</span>
                      <span><strong>{r.name}</strong><span>{r.role}</span></span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ===== PLATFORMS ===== */}
        <section className="soi-wrap" style={{ padding: "56px 32px" }}>
          <div className="soi-head c" style={{ marginBottom: 24 }}>
            <span className="soi-eyebrow">Platforms &amp; tools</span>
            <h2 className="soi-h2">Technologies we work with</h2>
          </div>
          <ul className="hp-platforms">{PLATFORMS.map((p) => <li key={p} className="soi-chip">{p}</li>)}</ul>
        </section>

        {/* ===== GROWTH SYSTEM ===== */}
        <section className="soi-sec soi-dark">
          <div className="soi-wrap">
            <div className="soi-head">
              <span className="soi-eyebrow dk">How it fits together</span>
              <h2 className="soi-h2" style={{ color: "#fff" }}>One growth system, not four separate vendors</h2>
            </div>
            <div className="soi-flow">
              <div className="soi-step"><small>01 · Get found</small><h3>SEO and ads bring the right traffic</h3><p>Rankings for buyer-intent searches, plus Google and social ads for leads while SEO builds.</p></div>
              <div className="soi-arrow"><Arrow /></div>
              <div className="soi-step"><small>02 · Convert</small><h3>Your website turns visits into leads</h3><p>Fast pages, clear offers and forms placed where people are ready to act.</p></div>
              <div className="soi-arrow"><Arrow /></div>
              <div className="soi-step on"><small>03 · Close</small><h3>HubSpot CRM turns leads into revenue</h3><p>Every form lands in your CRM with its source, so you know which keywords and ads bring paying clients.</p></div>
            </div>
          </div>
        </section>

        {/* ===== WHY CODEDSEO ===== */}
        <section className="soi-sec">
          <div className="soi-wrap soi-split">
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <span className="soi-eyebrow">Why CodedSEO</span>
              <h2 className="soi-h2">Why businesses choose CodedSEO as their SEO company</h2>
              <p className="soi-lead">CodedSEO was built for business owners who are tired of vague reports and agencies that never talk to each other. We keep things simple: clear plans, honest timelines and results you can see in your CRM.</p>
              <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="soi-btn soi-btn-g" style={{ alignSelf: "flex-start" }}>Talk to the CodedSEO team <Arrow /></a>
            </div>
            <div className="soi-g2">
              <div className="soi-card hp-why"><b>1M+</b><h3>Keywords ranked</h3><p>Proven SEO experience across industries and markets.</p></div>
              <div className="soi-card hp-why"><b>98%</b><h3>Client retention</h3><p>Clients stay because the results and reporting are real.</p></div>
              <div className="soi-card hp-why dk"><b>1 team</b><h3>SEO, ads, web &amp; CRM</h3><p>No hand-offs between agencies, one point of contact.</p></div>
              <div className="soi-card hp-why"><b>100+</b><h3>Clients served</h3><p>Businesses and agencies in the USA, UK, Canada and Australia.</p></div>
            </div>
          </div>
        </section>

        {/* ===== PROCESS ===== */}
        <section className="soi-sec soi-white">
          <div className="soi-wrap">
            <div className="soi-head">
              <span className="soi-eyebrow">Our process</span>
              <h2 className="soi-h2">What working with us looks like</h2>
            </div>
            <ol className="soi-g4 hp-steps">
              {STEPS.map((s, i) => (
                <li key={s.title} className="soi-card"><span>{i + 1}</span><h3>{s.title}</h3><p>{s.text}</p></li>
              ))}
            </ol>
          </div>
        </section>

        {/* ===== WHO WE HELP ===== */}
        <section className="soi-sec">
          <div className="soi-wrap soi-g2">
            <div className="hp-who dk">
              <span className="soi-eyebrow dk">For businesses</span>
              <h2>Growing companies in the USA, UK, Canada and Australia</h2>
              <p>Service businesses, e-commerce brands and B2B companies that want steady leads and a website and CRM that keep up.</p>
              <Link href="/seo-agency-usa">SEO agency for USA businesses</Link>
            </div>
            <div className="hp-who">
              <span className="soi-eyebrow">For agencies</span>
              <h2>White label SEO, marketing and development partner</h2>
              <p>We deliver under your brand from our team in Mohali, India. You keep the client relationship, we do the work.</p>
              <Link href="/seo-outsourcing-india">SEO outsourcing to India</Link>
            </div>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section id="faq" className="soi-sec soi-white">
          <div className="soi-wrap">
            <div className="soi-head c">
              <span className="soi-eyebrow">FAQ</span>
              <h2 className="soi-h2">Frequently asked questions</h2>
              <p className="soi-lead">Everything about our SEO, digital marketing, web development and CRM services.</p>
            </div>
            <div className="hp-faq-grid">
              {FAQ_CATS.map((cat, ci) => (
                <div key={cat.title} className="hp-faq-cat">
                  <h3>{cat.title}</h3>
                  {cat.items.map((f, ii) => {
                    const key = `${ci}-${ii}`;
                    const isOpen = open === key;
                    return (
                      <div key={f.q} className={isOpen ? "hp-faq open" : "hp-faq"}>
                        <button type="button" aria-expanded={isOpen} aria-controls={`faq-${key}`} onClick={() => setOpen(isOpen ? "" : key)}>
                          {f.q}<span className="hp-pm" aria-hidden="true">+</span>
                        </button>
                        <div id={`faq-${key}`} className="hp-faq-a"><div><p>{f.a}</p></div></div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
            <div className="hp-faq-cta">
              <p>Still have a question?</p>
              <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="soi-btn soi-btn-d">Ask us on a free call</a>
              <a href="mailto:sales@codedseo.com" className="soi-link">sales@codedseo.com</a>
            </div>
          </div>
        </section>

        {/* ===== FINAL CTA ===== */}
        <section className="soi-sec">
          <div className="soi-wrap">
            <div className="soi-cta">
              <div>
                <h2>Ready to grow with one team for SEO, marketing, web and CRM?</h2>
                <p>Book a free 30-minute call. We will look at your business and tell you honestly where to start.</p>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="soi-btn soi-btn-g">Book a free call <Arrow /></a>
                <Link href="/free-audit" className="soi-btn soi-btn-o">Free SEO audit</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
