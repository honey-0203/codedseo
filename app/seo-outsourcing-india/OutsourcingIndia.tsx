"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import Link from "next/link";
import { Header as SiteHeader } from "@/components/header";
import { Footer as SiteFooter } from "@/components/footer";
import { FAQS } from "./faqs";

/* ================= SETTINGS (yahan badlo) ================= */
const CALENDLY = "https://calendly.com/codedseo-sales/30min";
// HubSpot form: account ID aur form ID. Form ID HubSpot se milega (khali ho to form booking call par bhejta hai)
const HUBSPOT_PORTAL = "149445287";
const HUBSPOT_FORM = "";
const MAP_QUERY = "Sector 74, Phase 8B, Mohali, Punjab 160055";
// Reviews + case studies section: asli reviews/results daalne ke baad hi true karna
const SHOW_PROOF = false;

/* ================= SMALL PIECES ================= */
const Tick = () => (
  <span className="soi-tick" aria-hidden="true">
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5"><path d="M5 12l5 5L20 7" /></svg>
  </span>
);
const Arrow = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
const Star = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z" /></svg>
);
const Ico = ({ d }: { d: ReactNode }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">{d}</svg>
);

/* ================= CONTENT ================= */
const WHY = [
  { t: "100% white-hat", p: "No PBNs, no link farms. Work that survives core updates and never puts your agency's name at risk.", i: <><path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6z" /><path d="M8.5 12l2.5 2.5 4.5-5" /></> },
  { t: "White label everything", p: "Audits, proposals, reports and emails go out under your brand. We stay invisible.", i: <><rect x="3" y="4" width="18" height="16" rx="3" /><path d="M7 9h10M7 13h6" /></> },
  { t: "Reporting you can forward", p: "Rankings, traffic, leads and AI visibility in one branded dashboard your client can read in two minutes.", i: <path d="M4 19V9M10 19V5M16 19v-7M22 19H2" /> },
  { t: "No setup fees", p: "One monthly fee per client. You pay for the work, never for tools or onboarding.", i: <><circle cx="12" cy="12" r="9" /><path d="M14.5 9.5c-.5-1-1.5-1.5-2.5-1.5-1.4 0-2.5.8-2.5 2s1.1 1.7 2.5 2 2.5.8 2.5 2-1.1 2-2.5 2c-1 0-2-.5-2.5-1.5M12 6v2M12 16v2" /></> },
  { t: "Content writing support", p: "Native-level English writers for service pages, blogs and product copy, edited by an SEO lead.", i: <><path d="M4 20h4L19 9l-4-4L4 16z" /><path d="M13 7l4 4" /></> },
];

const PARTNERS: { t: string; p: ReactNode; hl?: boolean }[] = [
  { t: "Paid tools, zero tool bills", p: "Keyword research, backlink audits, rank tracking and site crawls run on our paid tool stack. You never buy a seat." },
  { t: "One project manager, one inbox", p: "A dedicated manager owns every client in your account, with a shared task board so you see what is done and what is next." },
  { t: "Free audits that close deals", p: <>Send us a prospect&apos;s URL. Within two business days you get a branded audit and proposal to pitch with. Try our <Link href="/free-audit" className="soi-link">free SEO audit</Link> on your own site first.</> },
  { t: "Weekly and monthly white label reports", p: "Weekly ranking snapshots and a monthly performance report, both on your letterhead and ready to forward." },
  { t: "You own the client, in writing", p: "We sign an NDA and a non-solicit before kickoff. We never contact your clients directly or claim credit for results." },
];

const PHASES = [
  { tab: "Analysis", when: "Week 1 to 2", title: "Audit the site and the competition", text: "Before we touch anything, we learn where the site stands, what Google already trusts, and who owns the page 1 spots your client wants.", items: ["Crawl, indexing and Core Web Vitals review", "Backlink profile and toxic link check", "Current rankings, traffic and top converting pages", "Competitor gap analysis for primary keywords", "AI visibility check in Google AI Overviews and ChatGPT"] },
  { tab: "Strategy", when: "Week 2 to 3", title: "Build a 90-day action plan", text: "We turn the audit into a prioritized plan your client can approve in one read, with keywords, pages to fix, pages to create and the link targets.", items: ["Keyword map by intent and difficulty", "Site structure, URL and internal linking fixes", "Content calendar for service pages and blogs", "Link building plan: digital PR, niche edits, guest posts", "White label proposal ready for your client"] },
  { tab: "Implementation", when: "Month 1 to 3", title: "Ship the work every week", text: "Your project manager runs the plan and posts progress to a shared board, so you always have an update when the client asks.", items: ["Technical fixes and schema markup", "On-page optimization of priority pages", "New content written and edited by SEO leads", "Links earned from relevant, real websites", "Google Business Profile and local citations"] },
  { tab: "Management", when: "Month 4 onward", title: "Report, review and compound", text: "SEO compounds when you keep doing what works. Every month we report, review and adjust the next plan with you.", items: ["Monthly white label report on your letterhead", "Weekly ranking snapshots", "Monthly strategy call with your team", "Refresh of pages that are slipping", "New opportunities from AI search and SERP changes"] },
];

// NOTE: yeh SAMPLE reviews hain. Launch se pehle asli Google/Upwork reviews se badlo.
const REVIEWS = [
  { q: "We had four new SEO clients and nobody to run them. CodedSEO took all four within a week, and the first monthly reports went out on our letterhead without a single edit from us.", av: "AO", who: "Agency owner", org: "Digital agency, Austin TX · Google" },
  { q: "The white label audits are the reason we close deals now. We send a prospect URL on Monday and have a branded audit and proposal by Wednesday. Communication is fast, even across time zones.", av: "MD", who: "Managing director", org: "Web design studio, Manchester UK · Upwork" },
  { q: "Our clinic went from page three to the local map pack for our main treatments in about five months. Calls from Google are now our biggest source of new patients.", av: "PM", who: "Practice manager", org: "Dental clinic, Toronto · Google" },
];

/* ================= HUBSPOT FORM ================= */
async function sendToHubSpot(fields: { name: string; value: string }[]) {
  const body = JSON.stringify({
    fields,
    context: { pageUri: typeof window !== "undefined" ? window.location.href : "", pageName: "SEO Outsourcing India" },
  });
  const hosts = ["https://api.hsforms.com", "https://api-eu1.hsforms.com"];
  for (const h of hosts) {
    try {
      const r = await fetch(`${h}/submissions/v3/integration/submit/${HUBSPOT_PORTAL}/${HUBSPOT_FORM}`, { method: "POST", headers: { "Content-Type": "application/json" }, body });
      if (r.ok) return true;
    } catch {
      /* agla host try karo */
    }
  }
  return false;
}

function ProposalForm() {
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
      { name: "message", value: `SEO Outsourcing India proposal request\nClients needing SEO: ${get("clients")}\nMain need: ${get("need")}` },
    ]);
    setState(ok ? "ok" : "err");
    if (ok) e.currentTarget.reset();
  }

  return (
    <form id="proposal" className="soi-form" onSubmit={onSubmit}>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <span className="soi-badge">Free · Reply in 1 business day</span>
        <h2>Get your free SEO outsourcing proposal</h2>
        <p>Tell us about the clients you need help with. We send a scoped plan and white label pricing, no sales script.</p>
      </div>
      <div className="soi-field"><label htmlFor="so-name">Your name</label><input id="so-name" name="name" type="text" placeholder="Jane Carter" autoComplete="name" required /></div>
      <div className="soi-field"><label htmlFor="so-email">Work email</label><input id="so-email" name="email" type="email" placeholder="jane@youragency.com" autoComplete="email" required /></div>
      <div className="soi-field"><label htmlFor="so-site">Agency website</label><input id="so-site" name="website" type="url" placeholder="https://youragency.com" /></div>
      <div className="soi-g2" style={{ gap: 12 }}>
        <div className="soi-field"><label htmlFor="so-clients">Clients needing SEO</label><select id="so-clients" name="clients"><option>1 to 3</option><option>4 to 10</option><option>11 to 25</option><option>25+</option></select></div>
        <div className="soi-field"><label htmlFor="so-need">Main need</label><select id="so-need" name="need"><option>Full white label SEO</option><option>Link building</option><option>Content writing support</option><option>Technical SEO</option><option>AI SEO and GEO</option></select></div>
      </div>
      <button type="submit" className="soi-btn soi-btn-g" style={{ width: "100%", minHeight: 54 }} disabled={state === "sending"}>
        {state === "sending" ? "Sending..." : "Send my proposal request"}
      </button>
      {state === "ok" && (
        <p className="soi-msg ok" role="status">
          {HUBSPOT_FORM ? "Thanks! We got your request and will reply within 1 business day." : "Thanks! Pick a time on our calendar and we will walk you through your proposal."}
        </p>
      )}
      {state === "err" && (
        <p className="soi-msg err" role="alert">
          Something went wrong. Please <a href={CALENDLY} target="_blank" rel="noopener noreferrer">book a call here</a> instead.
        </p>
      )}
      <div className="soi-trust">
        <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a9e83f" strokeWidth="2.2" aria-hidden="true"><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg>NDA on request</span>
        <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a9e83f" strokeWidth="2.2" aria-hidden="true"><path d="M5 12l5 5L20 7" /></svg>No spam, ever</span>
        <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a9e83f" strokeWidth="2.2" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>1 business day reply</span>
      </div>
    </form>
  );
}

/* ================= PAGE ================= */
export default function OutsourcingIndia() {
  const [phase, setPhase] = useState(0);
  const [open, setOpen] = useState(0);
  const cur = PHASES[phase];

  return (
    <>
      <SiteHeader />
      <main className="soi">
        {/* ===== HERO ===== */}
        <section className="soi-hero">
          <div className="soi-wrap soi-hero-grid">
            <div style={{ display: "flex", flexDirection: "column", gap: 24, paddingTop: 8 }}>
              <nav aria-label="Breadcrumb" className="soi-crumb"><Link href="/">Home</Link><span>/</span><Link href="/seo">SEO Services</Link><span>/</span><b>SEO Outsourcing India</b></nav>
              <span className="soi-eyebrow">White label SEO partner for agencies</span>
              <h1 className="soi-h1">SEO Outsourcing India<span>Your logo on the report. Our team on the work.</span></h1>
              <p className="soi-lead" style={{ maxWidth: 600 }}>CodedSEO is the SEO outsourcing agency that marketing agencies in the USA, UK, Canada and Australia call when client work outgrows their team. Outsource SEO to India with a senior crew that handles audits, content, links and AI search visibility, while your clients only ever see your brand.</p>
              <ul className="soi-hero-list soi-checks">
                <li><Tick />A dedicated team working under your brand</li>
                <li><Tick />White label reports and proposals</li>
                <li><Tick />Month-to-month, no lock-in contracts</li>
                <li><Tick />NDA signed before we touch a login</li>
              </ul>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 4 }}>
                <a className="soi-btn soi-btn-d" href="#proposal">Get my free outsourcing proposal <Arrow /></a>
                <a className="soi-btn soi-btn-l" href={CALENDLY} target="_blank" rel="noopener noreferrer">Book a 30-min call</a>
              </div>
              <div className="soi-stats">
                <div><b>1M+</b><span>Keywords ranked</span></div>
                <div><b>100+</b><span>Clients served</span></div>
                <div><b>98%</b><span>Client retention</span></div>
                <div><b>100%</b><span>White label and NDA</span></div>
              </div>
            </div>
            <ProposalForm />
          </div>
        </section>

        {/* ===== TOOLS ===== */}
        <section className="soi-white">
          <div className="soi-wrap soi-tools">
            <span>Tools we work in daily</span>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {["Google Search Console", "GA4", "Semrush", "Ahrefs", "Screaming Frog", "Looker Studio"].map((t) => <span key={t} className="soi-chip">{t}</span>)}
            </div>
          </div>
        </section>

        {/* ===== WHY ===== */}
        <section className="soi-sec soi-why">
          <div className="soi-wrap">
            <div className="soi-head">
              <span className="soi-eyebrow">Why outsource</span>
              <h2 className="soi-h2">Why agencies outsource SEO to India with CodedSEO</h2>
              <p className="soi-lead">Hiring one good SEO in the US takes months and costs more than most retainers bring in. An outsource SEO agency gives you a full bench on day one: strategists, writers, link builders and technical specialists, already trained on AI search.</p>
            </div>
            <div className="soi-g4">
              <div className="soi-card soi-feat">
                <span className="soi-ic"><Ico d={<><path d="M12 3l1.9 4.6L18.5 9l-4.6 1.9L12 15.5l-1.9-4.6L5.5 9l4.6-1.4z" /><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z" /></>} /></span>
                <h3>AI SEO and GEO built in</h3>
                <p>Your clients need to show up in Google, AI Overviews, ChatGPT, Gemini and Perplexity. We structure content, schema and entity signals so answer engines can cite them, then track that visibility in the same report. <Link href="/blog/what-is-ai-seo" className="soi-link" style={{ color: "#a9e83f" }}>What is AI SEO?</Link></p>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}><span className="soi-pill">AEO</span><span className="soi-pill">GEO</span><span className="soi-pill">AI Overviews</span></div>
              </div>
              {WHY.map((w) => (
                <div key={w.t} className="soi-card"><span className="soi-ic s"><Ico d={w.i} /></span><h3>{w.t}</h3><p>{w.p}</p></div>
              ))}
              <div className="soi-card">
                <span className="soi-ic s"><Ico d={<><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3z" /></>} /></span>
                <h3>International SEO services</h3>
                <p>Multi-country and multi-location campaigns with hreflang, local pages and market-specific keywords, including our <Link href="/seo-agency-usa" className="soi-link">SEO agency USA</Link> service.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== COST ===== */}
        <section className="soi-sec soi-white">
          <div className="soi-wrap soi-split soi-split-cost">
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <span className="soi-eyebrow">The math</span>
              <h2 className="soi-h2">In-house SEO team vs. outsourcing SEO to India</h2>
              <p className="soi-lead">A three-person in-house SEO team in the US usually costs more each month than a year of outsourced SEO for one client. Outsourcing turns that fixed payroll into a cost that grows only when your client list does. That is why more agencies now choose SEO outsourcing to India over local hiring.</p>
              <p style={{ fontSize: 13, color: "#6b756f" }}>Salary figures are typical US estimates and vary by city and seniority.</p>
              <a className="soi-btn soi-btn-d" href="#proposal" style={{ alignSelf: "flex-start" }}>See what I would save</a>
            </div>
            <div className="soi-card soi-tbl-card">
              <table className="soi-tbl">
                <thead><tr><th scope="col">Monthly cost</th><th scope="col">In-house (US)</th><th scope="col">CodedSEO</th></tr></thead>
                <tbody>
                  <tr><th scope="row">SEO strategist / manager</th><td>$6,000 – $7,500</td><td className="us">Included</td></tr>
                  <tr><th scope="row">Content writer</th><td>$4,000 – $5,000</td><td className="us">Included</td></tr>
                  <tr><th scope="row">Link building specialist</th><td>$3,500 – $4,500</td><td className="us">Included</td></tr>
                  <tr><th scope="row">SEO tools and software</th><td>$400 – $600</td><td className="us">Included</td></tr>
                  <tr><th scope="row">Recruiting, training, overhead</th><td>$1,500 – $2,500</td><td className="us">$0</td></tr>
                  <tr className="total"><th scope="row">Total per month</th><td>$15,400 – $20,100</td><td className="us">One flat fee per client</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ===== WHITE LABEL ===== */}
        <section className="soi-sec">
          <div className="soi-wrap soi-split soi-split-wide">
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <span className="soi-eyebrow">SEO reseller program</span>
              <h2 className="soi-h2">White label SEO services, sold under your name</h2>
              <p className="soi-lead">Our SEO reseller program lets you add SEO to your menu without adding headcount. You own the client and the margin, and like any good outsourcing SEO agency, we stay out of sight. We do the audits, strategy, content and links, and hand everything back with your logo on it.</p>
              <p className="soi-lead">You focus on selling and keeping clients happy. We focus on the rankings that keep them paying.</p>
              <ul className="soi-checks" style={{ marginTop: 6 }}>
                <li><Tick />Set your own retail price. Most partners mark up 2x to 3x.</li>
                <li><Tick />Unbranded emails and a shared Slack channel if you want one.</li>
                <li><Tick />We join client calls as &quot;your SEO team&quot; when you need backup.</li>
              </ul>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 8 }}>
                <a className="soi-btn soi-btn-d" href="#proposal">Become a reseller partner</a>
                <a className="soi-btn soi-btn-l" href="#proposal">Request a sample report</a>
              </div>
            </div>
            <div className="soi-report">
              <div className="soi-card">
                <div className="soi-rep-top">
                  <img src="/codedseo.png" alt="CodedSEO" width={612} height={408} style={{ height: 44, width: "auto" }} />
                  <span>Monthly SEO report · Sample</span>
                </div>
                <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 20 }}>
                  <div className="soi-kpis">
                    <div><small>Organic sessions</small><b>18,420</b><em>+64%</em></div>
                    <div><small>Top 10 keywords</small><b>126</b><em>+38</em></div>
                    <div><small>AI citations</small><b>23</b><em>+9</em></div>
                  </div>
                  <div className="soi-bars" aria-hidden="true">
                    {[["34%", "#e6f2d2"], ["42%", "#e6f2d2"], ["48%", "#d4ebaa"], ["58%", "#d4ebaa"], ["70%", "#bfe27d"], ["82%", "#a9e83f"], ["96%", "#7eb51e"]].map(([h, c], i) => <i key={i} style={{ height: h, background: c }} />)}
                  </div>
                  <div className="soi-rows">
                    <div><span>Technical fixes shipped</span><b>41</b></div>
                    <div><span>New pages published</span><b>12</b></div>
                    <div><span>Links earned (DR 40+)</span><b>9</b></div>
                  </div>
                </div>
              </div>
              <div className="soi-float"><Tick /><span><strong>White label ready</strong><span>We swap in your agency logo</span></span></div>
            </div>
          </div>
        </section>

        {/* ===== PARTNER BENEFITS ===== */}
        <section className="soi-sec soi-partners" style={{ paddingTop: 40 }}>
          <div className="soi-wrap">
            <div className="soi-head">
              <span className="soi-eyebrow">SEO outsourcing partner India</span>
              <h2 className="soi-h2">What you get as our SEO outsourcing partner in India</h2>
            </div>
            <div className="soi-g3">
              {PARTNERS.map((c, i) => (
                <div key={c.t} className="soi-card"><span className="soi-num">0{i + 1}</span><h3>{c.t}</h3><p>{c.p}</p></div>
              ))}
              <div className="soi-card hl">
                <span className="soi-num">06</span><h3>Start with one client</h3>
                <p>No minimum volume. Test us on a single account, then scale once you trust the work.</p>
                <a className="soi-btn soi-btn-d" href="#proposal" style={{ alignSelf: "flex-start", minHeight: 46, marginTop: 4 }}>Send us one client</a>
              </div>
            </div>
          </div>
        </section>

        {/* ===== HOW IT WORKS ===== */}
        <section className="soi-sec soi-dark">
          <div className="soi-wrap">
            <div className="soi-head c">
              <span className="soi-eyebrow dk">How the partnership works</span>
              <h2 className="soi-h2" style={{ color: "#fff" }}>Offshore SEO services India, invisible to your client</h2>
              <p className="soi-lead" style={{ color: "#b9c2bd" }}>Your client talks to you. You talk to us. The work and the credit flow the way you want them to.</p>
            </div>
            <div className="soi-flow">
              <div className="soi-step"><small>Step 1 · Your client</small><h3>Buys SEO from you</h3><p>At your price, under your contract, reporting to your account manager.</p></div>
              <div className="soi-arrow" aria-hidden="true"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M5 12h14M13 6l6 6-6 6" /></svg></div>
              <div className="soi-step on"><small>Step 2 · Your agency</small><h3>Sends us the brief</h3><p>Goals, access and deadlines go to your CodedSEO project manager in one message.</p></div>
              <div className="soi-arrow" aria-hidden="true"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M5 12h14M13 6l6 6-6 6" /></svg></div>
              <div className="soi-step"><small>Step 3 · CodedSEO</small><h3>Delivers under your brand</h3><p>We execute, report on your letterhead, and keep you ahead of every client question.</p></div>
            </div>
          </div>
        </section>

        {/* ===== BENEFITS ===== */}
        <section className="soi-sec soi-ben">
          <div className="soi-wrap">
            <div className="soi-head">
              <span className="soi-eyebrow">Benefits</span>
              <h2 className="soi-h2">Benefits of outsourcing SEO services to India</h2>
              <p className="soi-lead">Agencies that outsource SEO in India usually do it for four reasons, and cost is only one of them.</p>
            </div>
            <div className="soi-g2">
              <div className="soi-card"><span className="soi-ic"><Ico d={<><path d="M3 17l6-6 4 4 8-8" /><path d="M15 7h6v6" /></>} /></span><div><h3>Keep more margin</h3><p>No salaries, benefits, tool seats or training budgets. When you are outsourcing SEO services, India teams bill per client, so every new retainer is profitable from month one.</p></div></div>
              <div className="soi-card"><span className="soi-ic"><Ico d={<><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>} /></span><div><h3>Get your week back</h3><p>Stop writing briefs at midnight and checking link lists. The time difference means work moves forward while you sleep.</p></div></div>
              <div className="soi-card"><span className="soi-ic"><Ico d={<><rect x="3" y="3" width="7" height="7" rx="2" /><rect x="14" y="3" width="7" height="7" rx="2" /><rect x="3" y="14" width="7" height="7" rx="2" /><rect x="14" y="14" width="7" height="7" rx="2" /></>} /></span><div><h3>Every SEO service in one place</h3><p>One partner for the whole stack, so you never juggle three freelancers.</p>
                <div className="soi-tags">
                  <Link href="/services/organic-seo">Organic SEO</Link><Link href="/seo">Small business SEO</Link><span>Local SEO</span><span>Technical SEO</span><span>E-commerce SEO</span><span>Link building</span><span>Content writing</span><Link href="/blog/what-is-ai-seo">AI SEO and GEO</Link><Link href="/digital-marketing">Digital marketing</Link>
                </div></div></div>
              <div className="soi-card"><span className="soi-ic"><Ico d={<><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" /></>} /></span><div><h3>Results you can defend</h3><p>We never promise number one rankings. We promise a clear plan, shipped work every week, and numbers tied to leads, so you always have a straight answer for your client.</p></div></div>
            </div>
          </div>
        </section>

        {/* ===== PROCESS ===== */}
        <section className="soi-sec soi-white">
          <div className="soi-wrap">
            <div className="soi-head">
              <span className="soi-eyebrow">Process</span>
              <h2 className="soi-h2">Our SEO outsourcing process, from kickoff to report</h2>
              <p className="soi-lead">Every client you send through our outsource SEO services India program follows the same four phases, so your team always knows what happens next.</p>
            </div>
            <div className="soi-tabs" role="tablist" aria-label="Process phases">
              {PHASES.map((p, i) => (
                <button key={p.tab} type="button" role="tab" id={`so-tab-${i}`} aria-controls="so-panel" aria-selected={i === phase} className="soi-tab" onClick={() => setPhase(i)}><span className="n">{i + 1}</span>{p.tab}</button>
              ))}
            </div>
            <div className="soi-panel" id="so-panel" role="tabpanel" aria-labelledby={`so-tab-${phase}`}>
              <div><span className="soi-num">{cur.when}</span><h3>{cur.title}</h3><p className="soi-lead" style={{ fontSize: 15.5 }}>{cur.text}</p></div>
              <ul>{cur.items.map((it) => <li key={it}><Tick />{it}</li>)}</ul>
            </div>
          </div>
        </section>

        {/* ===== PROOF ===== */}
        {SHOW_PROOF && (
        <section className="soi-sec">
          <div className="soi-wrap">
            <div className="soi-head">
              <span className="soi-eyebrow">Proof</span>
              <h2 className="soi-h2">What agencies say about CodedSEO as their SEO outsourcing agency</h2>
              <p className="soi-lead">More in our <Link href="/reviews" className="soi-link">client reviews</Link> and <Link href="/video-testimonials" className="soi-link">video testimonials</Link>.</p>
            </div>
            <div className="soi-g3">
              {REVIEWS.map((r) => (
                <figure key={r.av} className="soi-card soi-review">
                  <div className="soi-stars" aria-label="5 out of 5 stars"><Star /><Star /><Star /><Star /><Star /></div>
                  <blockquote>&ldquo;{r.q}&rdquo;</blockquote>
                  <figcaption><span className="soi-av">{r.av}</span><span><strong>{r.who}</strong><span>{r.org}</span></span></figcaption>
                </figure>
              ))}
            </div>

            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 20, margin: "72px 0 24px" }}>
              <h3 className="soi-h2" style={{ fontSize: 30 }}>SEO outsourcing services India: case studies</h3>
              <Link href="/case-studies" style={{ fontSize: 14, fontWeight: 700, whiteSpace: "nowrap" }}>All case studies</Link>
            </div>
            <div className="soi-g3">
              <article className="soi-card soi-case">
                <div className="soi-case-img" style={{ background: "#17211c" }}>
                  <svg viewBox="0 0 380 190" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><rect width="380" height="190" fill="#17211c" /><g stroke="#26332c"><path d="M0 40h380M0 80h380M0 120h380M0 160h380M60 0v190M140 0v190M220 0v190M300 0v190" /></g><path d="M20 150 C 80 140, 110 120, 150 110 S 230 70, 270 60 S 340 30, 365 22" fill="none" stroke="#a9e83f" strokeWidth="3.5" strokeLinecap="round" /><path d="M20 150 C 80 140, 110 120, 150 110 S 230 70, 270 60 S 340 30, 365 22 L365 190 L20 190 Z" fill="#a9e83f" opacity=".12" /><circle cx="365" cy="22" r="6" fill="#a9e83f" /></svg>
                  <div><b style={{ color: "#a9e83f" }}>+212%</b><span style={{ color: "#b9c2bd" }}>Organic traffic in 6 months</span></div>
                </div>
                <div className="soi-case-body"><small>Healthcare · Local SEO</small><h4>Multi-location dental group</h4><p>Fixed duplicate location pages, rebuilt Google Business Profiles and earned local links for three clinics.</p><Link href="/case-studies" style={{ fontSize: 14, fontWeight: 700, marginTop: "auto" }}>Read case study</Link></div>
              </article>
              <article className="soi-card soi-case">
                <div className="soi-case-img" style={{ background: "#effbdc" }}>
                  <svg viewBox="0 0 380 190" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><rect width="380" height="190" fill="#effbdc" /><g transform="translate(150 22)"><rect width="210" height="150" rx="12" fill="#fff" stroke="#d6e9b8" /><rect width="210" height="28" rx="12" fill="#17211c" /><rect y="16" width="210" height="12" fill="#17211c" /><g fill="#a9e83f"><rect x="18" y="118" width="14" height="20" rx="3" /><rect x="40" y="110" width="14" height="28" rx="3" /><rect x="62" y="104" width="14" height="34" rx="3" /><rect x="84" y="98" width="14" height="40" rx="3" /><rect x="106" y="92" width="14" height="46" rx="3" /><rect x="128" y="88" width="14" height="50" rx="3" /><rect x="150" y="84" width="14" height="54" rx="3" fill="#7eb51e" /><rect x="172" y="80" width="14" height="58" rx="3" fill="#7eb51e" /></g><g fill="#f7faf5"><rect x="14" y="42" width="56" height="34" rx="7" /><rect x="77" y="42" width="56" height="34" rx="7" /><rect x="140" y="42" width="56" height="34" rx="7" /></g></g></svg>
                  <div><b style={{ color: "#17211c" }}>14 clients</b><span style={{ color: "#3d4842" }}>Resold under the partner&apos;s brand</span></div>
                </div>
                <div className="soi-case-body"><small>Marketing agency · White label</small><h4>US digital agency partner</h4><p>Took over SEO delivery for their client roster with branded reports, so they could sell without hiring.</p><Link href="/case-studies" style={{ fontSize: 14, fontWeight: 700, marginTop: "auto" }}>Read case study</Link></div>
              </article>
              <article className="soi-card soi-case">
                <div className="soi-case-img" style={{ background: "#17211c" }}>
                  <svg viewBox="0 0 380 190" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><rect width="380" height="190" fill="#17211c" /><g transform="translate(170 20)"><rect width="190" height="150" rx="12" fill="#202c26" stroke="#33413a" /><g fill="#26332c"><rect x="12" y="14" width="52" height="52" rx="8" /><rect x="70" y="14" width="52" height="52" rx="8" /><rect x="128" y="14" width="52" height="52" rx="8" /></g><circle cx="38" cy="36" r="12" fill="#a9e83f" opacity=".8" /><rect x="84" y="26" width="24" height="22" rx="4" fill="#e0a40c" opacity=".85" /><path d="M141 52l13-24 13 24z" fill="#a9e83f" opacity=".6" /><rect x="12" y="104" width="166" height="34" rx="8" fill="#a9e83f" /></g></svg>
                  <div><b style={{ color: "#a9e83f" }}>3.1x</b><span style={{ color: "#b9c2bd" }}>Revenue from organic search</span></div>
                </div>
                <div className="soi-case-body"><small>Retail · E-commerce SEO</small><h4>Home decor online store</h4><p>Cleaned faceted URLs, rewrote category pages and added product schema across 1,200 products.</p><Link href="/case-studies" style={{ fontSize: 14, fontWeight: 700, marginTop: "auto" }}>Read case study</Link></div>
              </article>
            </div>
          </div>
        </section>
        )}

        {/* ===== FOUNDER + MAP ===== */}
        <section className="soi-sec soi-white">
          <div className="soi-wrap soi-split">
            <div className="soi-map">
              <iframe src={`https://www.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&output=embed`} title="CodedSEO office location, Sector 74, Mohali" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
              <div className="soi-map-foot">
                <span className="soi-ic s" aria-hidden="true"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M12 21s-7-6.1-7-11.5A7 7 0 0 1 19 9.5C19 14.9 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></svg></span>
                <span><strong>CodedSEO</strong>Sector 74, Phase 8B, Mohali, Punjab 160055, India</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <span className="soi-eyebrow">Who you work with</span>
              <h2 className="soi-h2">An SEO agency in India run by practitioners</h2>
              <p className="soi-lead">CodedSEO is led by founder Balbir Singh from Sector 74, Mohali, Punjab. When agencies outsource SEO India work to us, every account is planned by a senior strategist and executed by specialists, not handed to a junior with a checklist. <Link href="/team" className="soi-link">Meet the team</Link>.</p>
              <p className="soi-lead">Balbir started CodedSEO to give agencies the SEO team he wished he could hire: people who pick up the phone, explain what they did in plain English, and treat your clients like their own. Read our <Link href="/reviews" className="soi-link">client reviews</Link> and <Link href="/case-studies" className="soi-link">case studies</Link>.</p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Link className="soi-btn soi-btn-d" href="/about">About CodedSEO</Link>
                <Link className="soi-btn soi-btn-l" href="/why-choose-us">Why choose us</Link>
                <a className="soi-btn soi-btn-l" href={CALENDLY} target="_blank" rel="noopener noreferrer">Talk to an SEO strategist</a>
              </div>
            </div>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section className="soi-sec">
          <div className="soi-wrap soi-split soi-split-faq">
            <div className="soi-faq-side">
              <span className="soi-eyebrow">FAQ</span>
              <h2 className="soi-h2">SEO outsourcing questions, answered</h2>
              <p className="soi-lead">Still unsure if an offshore partner fits your agency? These are the questions agency owners ask us on the first call.</p>
              <a className="soi-btn soi-btn-d" href="#proposal" style={{ alignSelf: "flex-start" }}>Ask us directly</a>
            </div>
            <div>
              {FAQS.map((f, i) => {
                const isOpen = open === i;
                return (
                  <div key={f.q} className={isOpen ? "soi-faq open" : "soi-faq"}>
                    <button type="button" aria-expanded={isOpen} aria-controls={`so-faq-${i}`} onClick={() => setOpen(isOpen ? -1 : i)}>{f.q}<span className="soi-pm" aria-hidden="true">{isOpen ? "\u2212" : "+"}</span></button>
                    <div id={`so-faq-${i}`} hidden={!isOpen}><p>{f.a}</p></div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section style={{ paddingBottom: 96 }}>
          <div className="soi-wrap">
            <div className="soi-cta">
              <div>
                <h2>Ready to outsource SEO to India without losing control?</h2>
                <p>Send us one client. Get a white label audit and a scoped proposal within two business days.</p>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                <a className="soi-btn soi-btn-g" href="#proposal">Get my free proposal</a>
                <a className="soi-btn soi-btn-o" href={CALENDLY} target="_blank" rel="noopener noreferrer">Book a 30-min call</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
