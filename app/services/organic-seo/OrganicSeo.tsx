"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import Link from "next/link";
import { Header as SiteHeader } from "@/components/header";
import { Footer as SiteFooter } from "@/components/footer";
import { FAQS, STEPS } from "./faqs";

/* ================= SETTINGS (yahan badlo) ================= */
const CALENDLY = "https://calendly.com/codedseo-sales/30min";
// HubSpot form: account ID aur form ID (khali ho to form booking call par bhejta hai)
const HUBSPOT_PORTAL = "149445287";
const HUBSPOT_FORM = "";

/* ================= SMALL PIECES ================= */
const Tick = () => (
  <span className="soi-tick" aria-hidden="true">
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5"><path d="M5 12l5 5L20 7" /></svg>
  </span>
);
const Cross = () => (
  <span className="os-x" aria-hidden="true">
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5"><path d="M6 6l12 12M18 6L6 18" /></svg>
  </span>
);
const Arrow = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
const Ico = ({ d }: { d: ReactNode }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">{d}</svg>
);
const I = {
  search: <><circle cx="11" cy="11" r="7" /><path d="M20 20l-3.5-3.5" /></>,
  gear: <><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" /></>,
  doc: <><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" /><path d="M14 3v6h6M8 13h8M8 17h5" /></>,
  pen: <><path d="M4 20h4L19 9l-4-4L4 16z" /><path d="M13 7l4 4" /></>,
  link: <><path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1" /><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1" /></>,
  pin: <><path d="M12 21s-7-6.1-7-11.5A7 7 0 0 1 19 9.5C19 14.9 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></>,
  code: <path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14" />,
  tree: <><rect x="9" y="3" width="6" height="5" rx="1.5" /><rect x="3" y="16" width="6" height="5" rx="1.5" /><rect x="15" y="16" width="6" height="5" rx="1.5" /><path d="M12 8v4M6 16v-2h12v2" /></>,
  spark: <><path d="M12 3l1.9 4.6L18.5 9l-4.6 1.9L12 15.5l-1.9-4.6L5.5 9l4.6-1.4z" /><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z" /></>,
  chart: <path d="M4 19V9M10 19V5M16 19v-7M22 19H2" />,
  target: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" /></>,
  eye: <><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" /><circle cx="12" cy="12" r="3" /></>,
};

/* ================= CONTENT ================= */
const PROBLEMS = [
  "Traffic is growing, but the phone is not ringing",
  "You rank for keywords nobody buys from",
  "Competitors with weaker offers outrank you",
  "New pages take weeks to get indexed, or never do",
  "Blog posts go live and then get forgotten",
  "Rankings dropped after a Google update and never came back",
  "Your brand is missing from AI Overviews and ChatGPT answers",
  "Your last SEO reports were full of numbers you could not act on",
];

const SOURCES = [
  ["Google search results", "The ten blue links most clicks still go to"],
  ["Google Maps and local pack", "Where nearby buyers pick a business"],
  ["AI Overviews", "The answer box at the top of Google"],
  ["ChatGPT, Gemini and Perplexity", "AI assistants that cite websites as sources"],
  ["Bing and DuckDuckGo", "Smaller, but often higher-intent searchers"],
];

const COMPARE = [
  ["What you pay for", "The work, once", "Every single click"],
  ["Time to first results", "3 to 6 months", "Same day"],
  ["When you stop paying", "Traffic keeps coming", "Traffic stops at once"],
  ["Trust from searchers", "High, it is earned", "Lower, many skip ads"],
  ["Long-term return", "Compounds every month", "Flat, rises with bids"],
  ["Best for", "Lasting, owned growth", "Launches and quick tests"],
];

const PILLARS = [
  ["Search intelligence", "We map what your buyers search, what ranks today and where the gaps are, before writing a single line."],
  ["Website optimization", "Fast, crawlable, well-structured pages that Google and AI engines can read and trust."],
  ["Content authority", "Pages and guides that answer real questions better than anyone ranking now."],
  ["Growth and conversion", "Links, local signals and conversion fixes so traffic turns into calls, forms and sales."],
];

const INCLUDED: { i: ReactNode; t: string; p: ReactNode }[] = [
  { i: I.search, t: "Keyword research", p: "Buyer-intent keywords mapped to the right page, not a spreadsheet of vanity terms." },
  { i: I.gear, t: "Technical SEO", p: "Crawling, indexing, Core Web Vitals, redirects and site structure fixed first." },
  { i: I.doc, t: "On-page optimization", p: "Titles, headings, copy and media tuned for search intent and readability." },
  { i: I.pen, t: "Content creation", p: "Service pages, guides and blogs written by humans and edited by an SEO lead." },
  { i: I.tree, t: "Internal linking", p: "A clear path from every blog to the pages that make you money." },
  { i: I.link, t: "White-hat link building", p: "Links from real, relevant websites through outreach and digital PR." },
  { i: I.pin, t: "Local SEO", p: "Google Business Profile, citations and location pages for nearby buyers." },
  { i: I.code, t: "Schema markup", p: "Structured data for rich results, FAQs, reviews and AI engines." },
  { i: I.spark, t: "AI search optimization", p: <>Content and entities shaped so AI Overviews and ChatGPT cite you. <Link href="/blog/what-is-ai-seo" className="soi-link">What is AI SEO?</Link></> },
  { i: I.eye, t: "Competitor analysis", p: "What top competitors rank for, and the gaps you can win fastest." },
  { i: I.target, t: "Conversion optimization", p: "CTAs, forms and page flow tuned so visitors become leads." },
  { i: I.chart, t: "Analytics and reporting", p: "GA4, Search Console and a monthly report you can read in two minutes." },
];

const QUESTIONS = [
  "Which pages already bring leads, and which only bring traffic?",
  "What are buyers in your market actually typing into Google?",
  "Why do competitors outrank you, and is it content, links or tech?",
  "What is blocking Google from crawling and trusting your site?",
  "Which three fixes would move revenue fastest?",
];

const TIMELINE = [
  ["Month 1", "Audit, keyword map and technical fixes. Quick wins on pages that already rank on page 2."],
  ["Months 2 to 3", "New and improved pages go live. Impressions climb and long-tail keywords start ranking."],
  ["Months 4 to 6", "Steady traffic growth. Priority keywords move toward page 1 and leads start to follow."],
  ["Months 6 to 12", "Compounding results. Competitive keywords, stronger authority and predictable lead flow."],
];

const BUSINESS: { t: string; p: string; href?: string; label?: string }[] = [
  { t: "Small businesses", p: "Organic SEO services for small business owners who need calls, not dashboards.", href: "/seo", label: "Small business SEO" },
  { t: "Local service companies", p: "Plumbers, clinics, law firms and anyone who wins on Google Maps." },
  { t: "E-commerce stores", p: "Category and product pages that rank and sell, at any catalog size." },
  { t: "SaaS and B2B", p: "Content that ranks for problem searches and books demos." },
  { t: "Professional services", p: "Accountants, consultants and agencies selling trust and expertise." },
  { t: "Healthcare", p: "Careful, accurate content that meets Google's higher bar for health topics." },
  { t: "US businesses", p: "Organic SEO built for American markets, local and national.", href: "/seo-agency-usa", label: "SEO agency USA" },
  { t: "Marketing agencies", p: "White label organic SEO delivered under your brand.", href: "/seo-outsourcing-india", label: "SEO outsourcing India" },
];

const AI_POINTS = [
  "Clear, direct answers near the top of every page",
  "FAQ, Organization and Service schema on key pages",
  "Consistent brand facts across your site and listings",
  "Content that cites sources and shows real experience",
  "Monthly tracking of AI Overview and ChatGPT mentions",
];

const MONTHLY = [
  "A prioritized task list, agreed with you at the start of the month",
  "Technical fixes shipped and logged",
  "New or improved pages published",
  "Quality links earned from relevant sites",
  "Google Business Profile updates (local clients)",
  "Keyword ranking report with what moved and why",
  "Traffic, leads and conversions from GA4",
  "AI Overview and ChatGPT visibility check",
  "A 30-minute strategy call",
  "Next month's plan, in plain English",
];

const WHY = [
  ["Strategy before tasks", "Every plan starts with your revenue goals, not a fixed checklist."],
  ["Senior organic SEO experts", "A senior organic search expert owns your account; specialists do the work."],
  ["White-hat only", "No PBNs or link schemes. Nothing that can come back to hurt you."],
  ["AI search built in", "Google, AI Overviews and ChatGPT in one plan, at no extra cost."],
  ["Plain-English reporting", "Leads and revenue first, rankings second, jargon never."],
  ["No lock-in contracts", "Month-to-month. We keep clients with results, 98% stay."],
];

const EXPLORE = [
  ["SEO outsourcing India", "/seo-outsourcing-india"],
  ["SEO agency USA", "/seo-agency-usa"],
  ["Small business SEO", "/seo"],
  ["Free SEO audit", "/free-audit"],
  ["What is AI SEO", "/blog/what-is-ai-seo"],
  ["How AI search is changing SEO", "/blog/how-ai-search-is-changing-seo-in-2026"],
  ["Best AI SEO agencies", "/blog/best-ai-seo-geo-agencies"],
  ["Digital marketing", "/digital-marketing"],
  ["Case studies", "/case-studies"],
];

/* ================= HUBSPOT FORM ================= */
async function sendToHubSpot(fields: { name: string; value: string }[]) {
  const body = JSON.stringify({
    fields,
    context: { pageUri: typeof window !== "undefined" ? window.location.href : "", pageName: "Organic SEO Services" },
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

function AuditForm() {
  const [state, setState] = useState<"idle" | "sending" | "ok" | "err">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
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
      { name: "website", value: get("website") },
      { name: "message", value: `Organic SEO free audit request\nMain goal: ${get("goal")}` },
    ]);
    setState(ok ? "ok" : "err");
    if (ok) e.currentTarget.reset();
  }

  return (
    <form id="audit" className="soi-form" onSubmit={onSubmit}>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <span className="soi-badge">Free · Ready in 2 business days</span>
        <h2>Get a free organic SEO audit</h2>
        <p>See what is stopping your site from ranking, and the first five fixes we would make. No sales script.</p>
      </div>
      <div className="soi-field"><label htmlFor="os-name">Your name</label><input id="os-name" name="name" type="text" placeholder="Jane Carter" autoComplete="name" required /></div>
      <div className="soi-field"><label htmlFor="os-email">Work email</label><input id="os-email" name="email" type="email" placeholder="jane@company.com" autoComplete="email" required /></div>
      <div className="soi-field"><label htmlFor="os-site">Website</label><input id="os-site" name="website" type="url" placeholder="https://yourcompany.com" /></div>
      <div className="soi-field"><label htmlFor="os-goal">Main goal</label><select id="os-goal" name="goal"><option>More leads and calls</option><option>More online sales</option><option>Rank in my local area</option><option>Recover lost traffic</option><option>Show up in AI answers</option></select></div>
      <button type="submit" className="soi-btn soi-btn-g" style={{ width: "100%", minHeight: 54 }} disabled={state === "sending"}>
        {state === "sending" ? "Sending..." : "Send me my free audit"}
      </button>
      {state === "ok" && (
        <p className="soi-msg ok" role="status">
          {HUBSPOT_FORM ? "Thanks! Your audit request is in. We will email you within 2 business days." : "Thanks! Pick a time on our calendar and we will walk you through your audit."}
        </p>
      )}
      {state === "err" && (
        <p className="soi-msg err" role="alert">
          Something went wrong. Please <a href={CALENDLY} target="_blank" rel="noopener noreferrer">book a call here</a> instead.
        </p>
      )}
      <div className="soi-trust"><span>No credit card</span><span>No spam, ever</span><span>Real human review</span></div>
    </form>
  );
}

/* ================= PAGE ================= */
export default function OrganicSeo() {
  const [step, setStep] = useState(0);
  const [open, setOpen] = useState(0);
  const cur = STEPS[step];

  return (
    <>
      <SiteHeader />
      <main className="soi">
        {/* ===== HERO ===== */}
        <section className="soi-hero">
          <div className="soi-wrap soi-hero-grid">
            <div style={{ display: "flex", flexDirection: "column", gap: 24, paddingTop: 8 }}>
              <nav aria-label="Breadcrumb" className="soi-crumb"><Link href="/">Home</Link><span>/</span><Link href="/services">SEO Services</Link><span>/</span><b>Organic SEO Services</b></nav>
              <span className="soi-eyebrow">Organic SEO company</span>
              <h1 className="soi-h1">Organic SEO Services<span>Rankings that turn into leads, sales and revenue.</span></h1>
              <p className="soi-lead" style={{ maxWidth: 600 }}>CodedSEO is an organic SEO company that grows qualified traffic you never pay per click for. Our organic SEO specialists fix what holds your site back, publish the content your buyers search for and earn links Google trusts, then track every step to leads and revenue.</p>
              <ul className="soi-hero-list soi-checks">
                <li><Tick />Technical SEO, content and links in one plan</li>
                <li><Tick />Built for Google and AI Overviews</li>
                <li><Tick />Month-to-month, no lock-in contracts</li>
                <li><Tick />Reports tied to leads, not vanity rankings</li>
              </ul>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 4 }}>
                <a className="soi-btn soi-btn-d" href="#audit">Get my free SEO audit <Arrow /></a>
                <a className="soi-btn soi-btn-l" href={CALENDLY} target="_blank" rel="noopener noreferrer">Book a 30-min call</a>
              </div>
              <div className="soi-stats">
                <div><b>1M+</b><span>Keywords ranked</span></div>
                <div><b>100+</b><span>Clients served</span></div>
                <div><b>98%</b><span>Client retention</span></div>
                <div><b>AI</b><span>Search ready</span></div>
              </div>
            </div>
            <AuditForm />
          </div>
        </section>

        {/* ===== PROBLEMS ===== */}
        <section className="soi-sec soi-white">
          <div className="soi-wrap">
            <div className="soi-head c">
              <span className="soi-eyebrow">Sound familiar?</span>
              <h2 className="soi-h2">Is your website ranking but failing to deliver?</h2>
              <p className="soi-lead">Rankings alone do not pay the bills. These are the signs we see most often before a business calls an organic SEO firm or organic search agency.</p>
            </div>
            <div className="soi-g2" style={{ gap: 12 }}>
              {PROBLEMS.map((p) => <div key={p} className="os-prob"><Cross />{p}</div>)}
            </div>
            <div className="os-strip">
              <p>If two or more sound like you, the fix is a strategy, not more SEO tasks.</p>
              <a className="soi-btn soi-btn-d" href="#audit" style={{ minHeight: 48 }}>Get my free audit</a>
            </div>
          </div>
        </section>

        {/* ===== WHAT IS ===== */}
        <section className="soi-sec">
          <div className="soi-wrap soi-split">
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <span className="soi-eyebrow">The basics</span>
              <h2 className="soi-h2">What are organic SEO services?</h2>
              <p className="soi-lead"><strong style={{ color: "#17211c" }}>Organic SEO services improve a website so it ranks in unpaid search results on Google, Bing and AI answer engines.</strong> Organic search engine optimization services cover technical fixes, keyword research, content, on-page optimization and link building. They are also called natural search engine optimization services, or simply natural SEO services, because you earn the traffic instead of paying for every click.</p>
              <p className="soi-lead">Ads stop the day the budget stops. Organic search optimization keeps working: a page that ranks this year can bring leads for years, which is why organic SEO marketing has the best long-term return of any channel for most businesses. Learn <Link href="/blog/what-is-ai-seo" className="soi-link">how AI SEO fits in</Link>.</p>
            </div>
            <div className="soi-card os-src" style={{ padding: 28 }}>
              <h3 style={{ fontSize: 15, marginBottom: 10 }}>Where organic traffic comes from</h3>
              {SOURCES.map(([t, d], i) => (
                <div key={t}><b>0{i + 1}</b><span><strong>{t}</strong><span>{d}</span></span></div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== COMPARE ===== */}
        <section className="soi-sec soi-white">
          <div className="soi-wrap soi-split soi-split-cost">
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <span className="soi-eyebrow">Organic vs paid</span>
              <h2 className="soi-h2">Why should you consider organic SEO services?</h2>
              <p className="soi-lead">Paid ads rent attention. Organic SEO builds an asset you own. The smartest budgets use both, and we also run <Link href="/digital-marketing" className="soi-link">paid ads and digital marketing</Link>, but only an organic search engine ranking keeps paying you back after the spend stops.</p>
              <a className="soi-btn soi-btn-d" href="#audit" style={{ alignSelf: "flex-start" }}>See my organic potential</a>
            </div>
            <div className="soi-card soi-tbl-card">
              <table className="soi-tbl">
                <thead><tr><th scope="col">Factor</th><th scope="col">Organic SEO</th><th scope="col">Paid ads (PPC)</th></tr></thead>
                <tbody>{COMPARE.map(([a, b, c]) => <tr key={a}><th scope="row">{a}</th><td className="us">{b}</td><td>{c}</td></tr>)}</tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ===== FRAMEWORK ===== */}
        <section className="soi-sec soi-dark">
          <div className="soi-wrap">
            <div className="soi-head c">
              <span className="soi-eyebrow dk">How we think</span>
              <h2 className="soi-h2" style={{ color: "#fff" }}>Our organic SEO growth framework</h2>
              <p className="soi-lead" style={{ color: "#b9c2bd" }}>Four pillars, worked in this order, so every hour of SEO moves revenue and not just rankings.</p>
            </div>
            <div className="soi-g4">
              {PILLARS.map(([t, d], i) => <div key={t} className="os-pillar"><small>0{i + 1}</small><h3>{t}</h3><p>{d}</p></div>)}
            </div>
          </div>
        </section>

        {/* ===== INCLUDED ===== */}
        <section className="soi-sec soi-why">
          <div className="soi-wrap">
            <div className="soi-head">
              <span className="soi-eyebrow">What you get</span>
              <h2 className="soi-h2">What&apos;s included in our organic SEO services</h2>
              <p className="soi-lead">One team, one plan, every part of organic SEO optimization and organic search engine optimization management covered. No add-on surprises.</p>
            </div>
            <div className="soi-g4">
              {INCLUDED.map((c) => <div key={c.t} className="soi-card"><span className="soi-ic s"><Ico d={c.i} /></span><h3>{c.t}</h3><p>{c.p}</p></div>)}
            </div>
          </div>
        </section>

        {/* ===== STRATEGY FIRST ===== */}
        <section className="soi-sec soi-white">
          <div className="soi-wrap soi-split">
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <span className="soi-eyebrow">Strategy first</span>
              <h2 className="soi-h2">We don&apos;t just start with random SEO tasks</h2>
              <p className="soi-lead">Many agencies sell a fixed checklist: ten blogs, twenty links, a monthly report. Our organic SEO consultants start by answering five questions about your business. The answers decide what we do first, and what we never do at all. That is what real organic SEO consulting looks like.</p>
              <a className="soi-btn soi-btn-d" href="#audit" style={{ alignSelf: "flex-start" }}>Answer them for my site</a>
            </div>
            <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {QUESTIONS.map((q, i) => <li key={q} className="os-q"><span className="n">{i + 1}</span>{q}</li>)}
            </ol>
          </div>
        </section>

        {/* ===== PROCESS ===== */}
        <section className="soi-sec">
          <div className="soi-wrap">
            <div className="soi-head">
              <span className="soi-eyebrow">Process</span>
              <h2 className="soi-h2">Our organic SEO process</h2>
              <p className="soi-lead">Six steps, the same for every client, so you always know what happens next and why.</p>
            </div>
            <div className="soi-tabs" role="tablist" aria-label="Process steps">
              {STEPS.map((p, i) => (
                <button key={p.tab} type="button" role="tab" id={`os-tab-${i}`} aria-controls="os-panel" aria-selected={i === step} className="soi-tab" onClick={() => setStep(i)}><span className="n">{i + 1}</span>{p.tab}</button>
              ))}
            </div>
            <div className="soi-panel" id="os-panel" role="tabpanel" aria-labelledby={`os-tab-${step}`} style={{ background: "#fff" }}>
              <div><span className="soi-num">{cur.when}</span><h3>{cur.title}</h3><p className="soi-lead" style={{ fontSize: 15.5 }}>{cur.text}</p></div>
              <ul>{cur.items.map((it) => <li key={it}><Tick />{it}</li>)}</ul>
            </div>
          </div>
        </section>

        {/* ===== TIMELINE ===== */}
        <section className="soi-sec soi-white">
          <div className="soi-wrap soi-split soi-split-cost" style={{ alignItems: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <span className="soi-eyebrow">Timeline</span>
              <h2 className="soi-h2">When can I expect results from organic SEO?</h2>
              <p className="soi-lead">Most sites see clear movement in organic SEO ranking within 3 to 6 months and strong organic SEO growth in 6 to 12. Newer sites and competitive industries take longer. Anyone promising page 1 in two weeks is selling something else. See real results in our <Link href="/case-studies" className="soi-link">case studies</Link>.</p>
            </div>
            <div>{TIMELINE.map(([a, b]) => <div key={a} className="os-tl"><b>{a}</b><p>{b}</p></div>)}</div>
          </div>
        </section>

        {/* ===== BUSINESS MODELS ===== */}
        <section className="soi-sec">
          <div className="soi-wrap">
            <div className="soi-head">
              <span className="soi-eyebrow">Who it&apos;s for</span>
              <h2 className="soi-h2">Organic SEO for different business models</h2>
              <p className="soi-lead">The fundamentals are the same. The keywords, pages and priorities are not. We shape organic SEO solutions around how you make money.</p>
            </div>
            <div className="soi-g4">
              {BUSINESS.map((b) => (
                <div key={b.t} className="soi-card os-biz">
                  <h3>{b.t}</h3><p>{b.p}</p>
                  {b.href && <Link href={b.href} className="more">{b.label} →</Link>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== AI SEARCH ===== */}
        <section className="soi-sec soi-dark">
          <div className="soi-wrap soi-split">
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <span className="soi-eyebrow dk">Modern search</span>
              <h2 className="soi-h2" style={{ color: "#fff" }}>Organic SEO for Google, AI Overviews and modern search engines</h2>
              <p className="soi-lead" style={{ color: "#b9c2bd" }}>Search is no longer ten blue links. Your buyers now get answers from AI Overviews, ChatGPT and Perplexity, and those answers cite websites. We optimize for both, in the same plan. Read <Link href="/blog/how-ai-search-is-changing-seo-in-2026" className="soi-link" style={{ color: "#a9e83f" }}>how AI search is changing SEO</Link>.</p>
              <ul className="soi-checks">{AI_POINTS.map((x) => <li key={x}><Tick />{x}</li>)}</ul>
            </div>
            <div className="os-ai" aria-hidden="true">
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span className="soi-ic s" style={{ width: 30, height: 30, borderRadius: 8 }}><Ico d={I.spark} /></span>
                <strong style={{ color: "#17211c", fontSize: 15 }}>AI Overview</strong>
                <span style={{ marginLeft: "auto", fontSize: 12, color: "#6b756f" }}>Example</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
                <i className="os-bar" style={{ width: "92%" }} /><i className="os-bar" style={{ width: "100%" }} /><i className="os-bar" style={{ width: "78%" }} /><i className="os-bar" style={{ width: "86%" }} />
              </div>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#6b756f", textTransform: "uppercase", letterSpacing: ".08em", marginTop: 6 }}>Sources</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <div className="os-srcrow on">
                  <span style={{ width: 26, height: 26, borderRadius: "50%", background: "#17211c", color: "#a9e83f", fontSize: 11, fontWeight: 800, display: "grid", placeItems: "center" }}>Y</span>
                  <span style={{ fontSize: 14, fontWeight: 700, color: "#17211c" }}>yourwebsite.com</span>
                  <span style={{ marginLeft: "auto", fontSize: 11, fontWeight: 700, color: "#3f6a0c", background: "#effbdc", padding: "3px 8px", borderRadius: 999 }}>Cited</span>
                </div>
                <div className="os-srcrow"><i style={{ width: 26, height: 26, borderRadius: "50%", background: "#e6ece8" }} /><i className="os-bar" style={{ width: 120, height: 9 }} /></div>
                <div className="os-srcrow"><i style={{ width: 26, height: 26, borderRadius: "50%", background: "#e6ece8" }} /><i className="os-bar" style={{ width: 96, height: 9 }} /></div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== MONTHLY ===== */}
        <section className="soi-sec">
          <div className="soi-wrap">
            <div className="soi-head c">
              <span className="soi-eyebrow">Every month</span>
              <h2 className="soi-h2">What you get each month with our organic SEO services</h2>
              <p className="soi-lead">No black box. You always know what was done, what changed and what comes next.</p>
            </div>
            <div className="soi-g2" style={{ gap: 12 }}>{MONTHLY.map((m) => <div key={m} className="os-q"><Tick />{m}</div>)}</div>
          </div>
        </section>

        {/* ===== WHY CHOOSE ===== */}
        <section className="soi-sec soi-white soi-partners">
          <div className="soi-wrap">
            <div className="soi-head">
              <span className="soi-eyebrow">Why CodedSEO</span>
              <h2 className="soi-h2">Why choose CodedSEO as your organic SEO company</h2>
              <p className="soi-lead">A focused team from Sector 74, Mohali, working for businesses in the USA, UK, Canada, Australia and India. What sets us apart from other organic SEO companies and organic SEO agencies: <Link href="/why-choose-us" className="soi-link">why clients choose us</Link>, <Link href="/team" className="soi-link">our team</Link> and <Link href="/reviews" className="soi-link">client reviews</Link>.</p>
            </div>
            <div className="soi-g3">
              {WHY.map(([t, d], i) => <div key={t} className="soi-card"><span className="soi-num">0{i + 1}</span><h3>{t}</h3><p>{d}</p></div>)}
            </div>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section className="soi-sec">
          <div className="soi-wrap soi-split soi-split-faq">
            <div className="soi-faq-side">
              <span className="soi-eyebrow">FAQ</span>
              <h2 className="soi-h2">Organic SEO services: your questions answered</h2>
              <p className="soi-lead">Straight answers to what business owners ask before hiring an organic SEO agency.</p>
              <a className="soi-btn soi-btn-d" href="#audit" style={{ alignSelf: "flex-start" }}>Ask about my site</a>
            </div>
            <div>
              {FAQS.map((f, i) => {
                const isOpen = open === i;
                return (
                  <div key={f.q} className={isOpen ? "soi-faq open" : "soi-faq"}>
                    <button type="button" aria-expanded={isOpen} aria-controls={`os-faq-${i}`} onClick={() => setOpen(isOpen ? -1 : i)}>{f.q}<span className="soi-pm" aria-hidden="true">{isOpen ? "\u2212" : "+"}</span></button>
                    <div id={`os-faq-${i}`} hidden={!isOpen}><p>{f.a}</p></div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===== CTA + EXPLORE ===== */}
        <section style={{ paddingBottom: 80 }}>
          <div className="soi-wrap">
            <div className="soi-cta">
              <div>
                <h2>Ready to build an organic growth channel that keeps growing?</h2>
                <p>Get a <Link href="/free-audit" className="soi-link" style={{ color: "#a9e83f" }}>free SEO audit</Link> with your first five fixes, or talk to an organic SEO specialist this week.</p>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                <a className="soi-btn soi-btn-g" href="#audit">Get my free SEO audit</a>
                <a className="soi-btn soi-btn-o" href={CALENDLY} target="_blank" rel="noopener noreferrer">Book a 30-min call</a>
              </div>
            </div>
            <nav className="os-explore" aria-label="Explore more">
              <span>Explore more</span>
              {EXPLORE.map(([t, h]) => <Link key={h} href={h}>{t}</Link>)}
            </nav>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
