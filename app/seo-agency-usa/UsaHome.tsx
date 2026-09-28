"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Header as SiteHeader } from "@/components/header";
import { Footer as SiteFooter } from "@/components/footer";

/* ================= LINKS ================= */

const CALENDLY = "https://calendly.com/codedseo-sales/30min";
const EMAIL = "hello@codedseo.com";

/* ================= CONTENT ================= */

const HERO_POINTS = [
  "No long-term contracts or hidden fees",
  "Reports scheduled in your US time zone",
  "White-hat work only, no link schemes",
  "Built for Google and AI answers",
];

const STATS = [
  { value: "1M", suffix: "+", label: "Keywords ranked", sub: "Tracked across client campaigns" },
  { value: "100", suffix: "+", label: "Businesses served", sub: "Across the United States and beyond" },
  { value: "98", suffix: "%", label: "Client retention", sub: "Clients who stay with us" },
  { value: "ET–PT", suffix: "", label: "Time-zone coverage", sub: "Calls and reports on your hours" },
];

const MONTHLY = [
  { t: "A plan you can read in five minutes", d: "Every month starts with a one-page plan: which pages we will work on, which keywords they target and why those matter to revenue. No 40-page decks." },
  { t: "Work you can check line by line", d: "You get a live change log of every title, page, fix and link we ship. If something is not in the log, it did not happen." },
  { t: "Rankings, traffic and leads in one view", d: "We connect Search Console, GA4 and your CRM so you can see which searches turned into calls, forms and sales, not just positions." },
  { t: "A strategist, not a ticket queue", d: "A dedicated strategist owns your account, joins your calls and knows your business, so you never have to explain things twice." },
];

const ROADMAP = [
  {
    phase: "Days 1–30", title: "Audit and fix the foundation",
    tasks: ["Full technical crawl: indexing, speed, Core Web Vitals, schema", "Search Console and GA4 set up and verified", "Keyword map built around what your US buyers actually search", "Quick wins: titles, internal links and thin pages fixed first"],
    see: "A clean technical baseline and the first pages moving for low-competition terms.",
  },
  {
    phase: "Days 31–60", title: "Build pages that deserve to rank",
    tasks: ["Service and location pages rewritten around search intent", "Content briefs with sources, FAQs and expert input", "Google Business Profile optimized for each location", "Structured data added for services, FAQs and reviews"],
    see: "More impressions in Search Console and longer visits on key pages.",
  },
  {
    phase: "Days 61–90", title: "Earn authority and AI visibility",
    tasks: ["Relevant, editorial backlinks and digital PR outreach", "Entity and brand signals for Google AI Overviews and ChatGPT", "Conversion fixes on pages that already get traffic", "First quarterly review with next-quarter priorities"],
    see: "Top-10 movement on target keywords and more calls and form fills.",
  },
  {
    phase: "Month 4+", title: "Compound what works",
    tasks: ["Double down on pages and topics that convert", "Expand into new cities, services or product lines", "Ongoing content, links and technical monitoring", "Monthly reporting tied to leads and revenue"],
    see: "Steady growth in organic leads with lower cost per acquisition than paid ads.",
  },
];

const SERVICES = [
  {
    id: "organic", tab: "Organic SEO", title: "Organic SEO Services", href: "/services/organic-seo",
    desc: "Organic SEO grows the traffic you do not pay for per click. We fix what stops Google from understanding your site, then build pages and authority around the searches your buyers use before they call.",
    provide: ["Keyword research mapped to revenue", "On-page optimization for service pages", "Internal linking and site structure", "Topical authority content plans", "Monthly rank and traffic reporting"],
    result: ["More qualified organic traffic", "Less reliance on paid ads", "Rankings that hold after updates"],
  },
  {
    id: "local", tab: "Local SEO & GMB", title: "Local SEO Services", href: "/services",
    desc: "For businesses that serve a city or region, the Google Maps pack is where the calls come from. Our GMB services and local SEO put you in front of nearby buyers searching \"near me\" on desktop, mobile and voice search.",
    provide: ["Google Business Profile (GMB) optimization", "Google Maps ranking and review strategy", "Location pages for every city you serve", "Local citations and NAP cleanup", "Voice search optimization for local queries"],
    result: ["More calls and direction requests", "Visibility in the Map Pack", "Consistent listings across the web"],
  },
  {
    id: "technical", tab: "Technical SEO", title: "Technical SEO Services", href: "/free-audit",
    desc: "If Google cannot crawl, render or index a page, nothing else matters. Our technical SEO services check every page for indexing, speed, Core Web Vitals, duplicate content and structured data, then rank fixes by impact.",
    provide: ["Full site crawl and index coverage review", "Core Web Vitals and page speed fixes", "Canonical, redirect and sitemap cleanup", "Schema and structured data", "Prioritized fix list for your developers"],
    result: ["Pages Google can actually index", "Faster, more usable pages", "A clear list of what to fix first"],
  },
  {
    id: "ai", tab: "AI SEO & GEO", title: "AI SEO Services", href: "/blog/what-is-ai-seo",
    desc: "More US buyers now ask ChatGPT, Gemini, Perplexity and Google AI Overviews before they search. Our AI SEO services cover AEO, GEO and LLM optimization so AI tools can find, trust and mention your brand.",
    provide: ["AI visibility audit across major assistants", "Answer Engine Optimization (AEO)", "Generative Engine Optimization (GEO)", "Entity-based SEO and knowledge graph signals", "Schema markup and llms.txt setup"],
    result: ["Your brand named in AI answers", "Traffic from generative search", "Stronger entity and topical authority"],
  },
  {
    id: "links", tab: "Link Building & PR", title: "Link Building Services", href: "/services",
    desc: "Links from respected sites are still one of the strongest signals Google uses. Our link building services earn editorial mentions through outreach, Digital PR and guest posting, never through paid link schemes.",
    provide: ["Editorial outreach and niche edits", "Digital PR services and data stories", "Guest posting services on relevant sites", "Unlinked brand mention recovery", "Backlink profile audits and cleanup"],
    result: ["Higher domain authority", "Rankings for competitive terms", "Brand mentions AI tools pick up"],
  },
  {
    id: "content", tab: "SEO Content Writing", title: "SEO Content Writing", href: "/digital-marketing",
    desc: "Good SEO content answers the question better than anyone else ranking. Our writers start from keyword research and real expertise, then write pages with the contextual relevance Google's NLP systems look for.",
    provide: ["Keyword research and content briefs", "Service, location and landing pages", "Blog and content marketing articles", "Expert interviews and fact checks", "Refresh of pages that lost rankings"],
    result: ["Pages that match search intent", "Content that earns links", "More leads from existing traffic"],
  },
  {
    id: "marketing", tab: "Digital Marketing", title: "Digital Marketing Services", href: "/digital-marketing",
    desc: "SEO works best with the rest of your marketing. We connect search with paid ads, content marketing, email and conversion work so every channel feeds the others instead of competing for budget.",
    provide: ["Google Ads alongside organic keywords", "Content marketing and distribution", "Conversion rate optimization", "Landing pages for campaigns", "Unified reporting across channels"],
    result: ["Lower blended cost per lead", "Faster wins while SEO builds", "One team, one report"],
  },
];

const AUDIENCES = [
  { t: "Small businesses", d: "Local shops, clinics, law firms and home service companies that need affordable SEO and a strong spot in Google Maps for their city.", href: "/services" },
  { t: "Ecommerce stores", d: "Shopify and WooCommerce brands that need category and product pages to rank without cannibalizing each other.", href: "/services" },
  { t: "SaaS and B2B companies", d: "Software and service companies that sell on long research cycles and need content that ranks at every stage.", href: "/seo" },
  { t: "Agencies (white label)", d: "Marketing agencies that want reliable SEO fulfillment under their own brand, with reports they can resell.", href: "/digital-marketing" },
  { t: "Multi-location brands", d: "Franchises and chains that need location pages and profiles managed consistently across states.", href: "/contact" },
];

const BENEFITS = [
  { t: "Leads that come to you", d: "People who find you through search are already looking for what you sell. That is why organic leads usually close faster than cold outreach." },
  { t: "Visibility in AI and zero-click results", d: "Google AI Overviews, featured snippets, voice assistants and ChatGPT answer many questions without a click. Zero-click search optimization makes sure your brand is the one they quote." },
  { t: "Costs that go down over time", d: "Paid ads stop the day the budget stops. Pages that rank keep bringing visitors for months without paying per click." },
  { t: "Trust before the first call", d: "A business on page one with clear, expert content looks established. Buyers arrive already convinced you are a real option." },
  { t: "Decisions based on data", d: "Search Console and GA4 show exactly which searches bring customers, so you invest more in what works and stop what does not." },
];

const INDUSTRIES = [
  { t: "Home services", d: "HVAC, plumbing, roofing, electrical" },
  { t: "Healthcare & dental", d: "Clinics, dentists, med spas" },
  { t: "Legal", d: "Personal injury, family, immigration" },
  { t: "Real estate", d: "Brokerages, agents, property managers" },
  { t: "Ecommerce", d: "Shopify, WooCommerce, DTC brands" },
  { t: "SaaS & tech", d: "B2B software, IT services" },
  { t: "Finance & insurance", d: "Advisors, agencies, fintech" },
  { t: "Hospitality", d: "Hotels, restaurants, travel" },
  { t: "Construction", d: "Contractors, remodelers, builders" },
  { t: "Education", d: "Schools, courses, training" },
  { t: "Automotive", d: "Dealers, repair shops, detailing" },
];

const EEAT = [
  { k: "E", t: "Experience", d: "We show real first-hand work on your pages: project photos, before-and-after results, and the specifics only someone who does the job would know." },
  { k: "E", t: "Expertise", d: "Content is written from interviews with you or your team, reviewed for accuracy and signed with real author names and credentials." },
  { k: "A", t: "Authoritativeness", d: "We build topical authority around your core services and earn mentions from sites your industry respects, so Google and AI tools see others vouching for you." },
  { k: "T", t: "Trust", d: "Clear contact details, reviews, policies, secure pages and honest claims. Trust is the part of E-E-A-T Google weighs most." },
];

const READING = [
  { t: "What is AI SEO?", d: "A plain-English guide to optimizing for AI search tools and what changes for your content.", href: "/blog/what-is-ai-seo", tag: "Blog" },
  { t: "How AI Search Is Changing SEO in 2026", d: "What Google AI Overviews and chat assistants mean for rankings, clicks and brand visibility.", href: "/blog/how-ai-search-is-changing-seo-in-2026", tag: "Blog" },
  { t: "SEO learning hub", d: "Short lessons on the basics of search, from keywords to internal linking and technical SEO.", href: "/learn", tag: "Learn" },
  { t: "Free SEO tools", d: "Tools for keyword research, title checks and technical issues that we use ourselves.", href: "/tools", tag: "Tools" },
];

const PROCESS = [
  { t: "Discovery call", d: "A 30-minute call about your business, markets, competitors and what a new customer is worth to you." },
  { t: "Free audit", d: "We review your site, rankings and competitors and send a short list of the biggest opportunities." },
  { t: "90-day plan", d: "You get a written plan with priorities, deliverables and the numbers we will report on." },
  { t: "Execution", d: "We ship fixes, pages and links every week and log every change where you can see it." },
  { t: "Review and scale", d: "Monthly reports and quarterly reviews decide what to double down on next." },
];

const PACKAGES = [
  { name: "Starter", price: "$199", note: "per month", for: "Small businesses starting with SEO", items: ["5 target keywords", "Technical SEO audit", "On-page optimization", "Google Business Profile setup", "Monthly reporting"], cta: "/free-audit", ctaText: "Start with a free audit" },
  { name: "Growth", price: "$499", note: "per month", for: "Established businesses ready to compete", items: ["15 target keywords", "Full technical audit", "AI-powered content strategy", "Link building (10 per month)", "Local SEO and weekly reporting"], cta: "/free-audit", ctaText: "Get my free audit", popular: true },
  { name: "Enterprise", price: "Custom", note: "quoted after audit", for: "Multi-location and large sites", items: ["Unlimited keywords", "Enterprise technical SEO", "Multi-location SEO", "Link building (50+ per month)", "Dedicated account team"], cta: "/contact", ctaText: "Talk to sales" },
];

const GLOSSARY = [
  { t: "AEO", full: "Answer Engine Optimization", d: "Structuring answers so Google snippets, voice assistants and chatbots can quote them directly." },
  { t: "GEO", full: "Generative Engine Optimization", d: "Making your content easy for generative search tools to summarize and cite as a source." },
  { t: "LLM optimization", full: "AI visibility", d: "Tracking and improving how often large language models mention your brand for your topics." },
  { t: "Entity-based SEO", full: "Knowledge graph signals", d: "Defining who you are, what you do and where, so search engines connect your brand to the right topics." },
  { t: "Topical authority", full: "Depth over volume", d: "Covering a subject completely with linked pages, so Google sees you as a go-to source." },
  { t: "Zero-click search", full: "Visibility without a visit", d: "Owning snippets, maps and AI answers where people get what they need on the results page." },
  { t: "Voice search", full: "Conversational queries", d: "Optimizing for spoken questions on phones and smart speakers, often with local intent." },
  { t: "NLP & context", full: "Contextual relevance", d: "Writing with the entities and related terms Google's language models expect for a topic." },
];

const TOOLS = ["Google Search Console", "Google Analytics 4", "Google Business Profile", "Looker Studio", "Ahrefs", "Semrush", "Screaming Frog", "PageSpeed Insights", "Schema Validator", "Surfer"];

const FAQS = [
  { q: "How much do SEO services cost in the USA?", a: "Our SEO packages start at $199 per month for Starter and $499 per month for Growth, with custom pricing for enterprise and multi-location brands. There are no hidden fees and no long-term contracts. The free audit tells you which package fits your competition and goals." },
  { q: "How do I hire an SEO agency in the USA?", a: "Start with a free audit and a short call. A good SEO agency should explain what is holding your site back, show a written plan with timelines, and tell you exactly what you will get each month. Avoid anyone who promises a specific ranking or will not show their work." },
  { q: "Are your SEO services good for small businesses?", a: "Yes. Our Starter package was built for small businesses in the USA that need local SEO, a Google Business Profile that ranks in Google Maps and a technically sound website, without an enterprise budget." },
  { q: "How long does SEO take to show results?", a: "Technical fixes and quick wins can show movement within the first 30 to 60 days. Competitive keywords usually take three to six months. We share Search Console data every month so you can see progress before rankings peak." },
  { q: "Do you work with businesses in every US state?", a: "Yes. We provide SEO services across the United States and schedule calls and reports in your time zone, from Eastern to Pacific." },
  { q: "What is AI SEO, AEO and GEO?", a: "AI SEO makes your brand easier for tools like ChatGPT, Gemini and Google AI Overviews to find and cite. AEO (Answer Engine Optimization) targets direct answers and featured snippets, and GEO (Generative Engine Optimization) targets AI-generated results. We include all three in our strategy." },
  { q: "Do you guarantee first-page rankings?", a: "No one controls Google, so we never promise a specific position. What we do offer is a 90-day results guarantee: if you do not see measurable ranking improvements, we keep working for free until you do." },
  { q: "Will I own the content and links you build?", a: "Yes. Every page, article and account we create belongs to you. If you leave, everything stays on your site and in your accounts." },
  { q: "Can you work with our in-house team or developer?", a: "Yes. Many clients have their own developers or writers. We provide clear briefs and fix lists and handle the parts your team does not have time for." },
];

/* ================= HOOKS ================= */

function useWidth() {
  const [w, setW] = useState(1440);
  useEffect(() => {
    const on = () => setW(window.innerWidth);
    on();
    window.addEventListener("resize", on);
    return () => window.removeEventListener("resize", on);
  }, []);
  return w;
}

function useSlider(count: number, perView: number, delay: number, loop = true) {
  const max = Math.max(0, count - perView);
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const next = useCallback(() => setI((p) => (p >= max ? (loop ? 0 : max) : p + 1)), [max, loop]);
  const prev = useCallback(() => setI((p) => (p <= 0 ? (loop ? max : 0) : p - 1)), [max, loop]);
  useEffect(() => {
    if (i > max) setI(max);
  }, [i, max]);
  useEffect(() => {
    if (paused || delay <= 0) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setTimeout(next, delay);
    return () => clearTimeout(t);
  }, [i, paused, delay, next]);
  return { i, setI, next, prev, max, hoverProps: { onMouseEnter: () => setPaused(true), onMouseLeave: () => setPaused(false) } };
}

function useInView<T extends Element>(threshold = 0.3) {
  const ref = useRef<T>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setSeen(true);
        io.disconnect();
      }
    }, { threshold });
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, seen };
}

/* ================= SMALL PIECES ================= */

function Chevron({ dir = "right" }: { dir?: "right" | "left" }) {
  const d = dir === "right" ? "M9 6l6 6-6 6" : "M15 6l-6 6 6 6";
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <path d={d} />
    </svg>
  );
}

function Counter({ value, suffix, start }: { value: string; suffix: string; start: boolean }) {
  const num = parseFloat(value);
  const unit = value.replace(/[\d.]/g, "");
  const animatable = !Number.isNaN(num) && /^[\d.]+[KM]?$/.test(value);
  const [shown, setShown] = useState(value);
  useEffect(() => {
    if (!start || !animatable) return;
    const t0 = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - t0) / 1800, 1);
      setShown(`${Math.round((1 - Math.pow(1 - p, 3)) * num)}${unit}`);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, animatable, num, unit]);
  return (
    <p className="stat-num">
      {shown}
      {suffix && <span className="hl">{suffix}</span>}
    </p>
  );
}

/* ================= SECTIONS ================= */

function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="pill">Professional SEO services in the USA</p>
          <h1>SEO Agency USA: Get Found on <span className="hl">Google and in AI Search</span></h1>
          <p className="lead">CodedSEO is a <Link href="/">search engine optimization company</Link> helping American businesses rank for the searches that bring in customers. Our SEO services in the USA combine technical SEO, expert content and AI search optimization, and we show you every change we make.</p>
          <ul className="ticks two">
            {HERO_POINTS.map((p) => <li key={p}>{p}</li>)}
          </ul>
          <div className="hero-cta">
            <Link className="btn" href="/free-audit">Get a free SEO audit <Chevron /></Link>
            <a className="btn ghost" href={CALENDLY} target="_blank" rel="noopener noreferrer">Book a 30-min call</a>
          </div>
          <p className="byline">Reviewed by the <Link href="/team">CodedSEO strategy team</Link> · Updated September 2026</p>
        </div>

        <div className="rank-card" aria-label="Example ranking report">
          <div className="rank-head">
            <span>Keyword tracker</span>
            <span className="rank-tag">Sample report</span>
          </div>
          <ul className="rank-list">
            <li><span>seo company near me</span><b className="up">#4 <small>▲ 17</small></b></li>
            <li><span>emergency plumber austin</span><b className="up">#2 <small>▲ 9</small></b></li>
            <li><span>best crm for small business</span><b className="up">#7 <small>▲ 23</small></b></li>
            <li><span>personal injury lawyer miami</span><b className="up">#5 <small>▲ 11</small></b></li>
          </ul>
          <div className="rank-foot">
            <div><strong>+212%</strong><small>Organic clicks</small></div>
            <div><strong>Cited</strong><small>in AI Overviews</small></div>
          </div>
          <p className="rank-note">Illustrative example of the report format you receive.</p>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const { ref, seen } = useInView<HTMLDivElement>();
  return (
    <section className="stats">
      <div className="wrap">
        <div className="stats-card" ref={ref}>
          {STATS.map((s) => (
            <div key={s.label} className="stat">
              <Counter value={s.value} suffix={s.suffix} start={seen} />
              <p className="stat-label">{s.label}</p>
              <p className="stat-sub">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Monthly() {
  const s = useSlider(MONTHLY.length, 1, 5000);
  return (
    <section className="sec">
      <div className="wrap">
        <div className="split-card">
          <div>
            <p className="eyebrow">How we work</p>
            <h2>Professional SEO Services You Can Actually See Working</h2>
            <p className="grey">Most businesses that come to us have paid an agency before and could not tell what they were paying for. We built CodedSEO the other way around: every task is visible, every report ties back to leads, and you can leave any month.</p>
            <div className="mini-links">
              <Link href="/why-choose-us">Why clients choose us</Link>
              <Link href="/reviews">Read client reviews</Link>
              <Link href="/video-testimonials">Watch video testimonials</Link>
            </div>
          </div>
          <div {...s.hoverProps}>
            <div className="slider">
              <div className="track" style={{ transform: `translateX(-${s.i * 100}%)` }}>
                {MONTHLY.map((m, idx) => (
                  <div key={m.t} className="slide">
                    <div className="note-card">
                      <span className="note-num">{String(idx + 1).padStart(2, "0")} / {String(MONTHLY.length).padStart(2, "0")}</span>
                      <h3>{m.t}</h3>
                      <p>{m.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="arrows">
              <button type="button" aria-label="Previous" onClick={s.prev}><Chevron dir="left" /></button>
              <button type="button" aria-label="Next" className="fill" onClick={s.next}><Chevron /></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="sec pt0">
      <div className="wrap two-col">
        <div>
          <p className="eyebrow">About CodedSEO</p>
          <h2>An SEO Provider Built for the Way Americans Search in 2026</h2>
          <p className="grey">CodedSEO is an SEO and AI search agency working with businesses across the United States. Unlike many SEO providers in the USA, our team combines technical SEO, content strategy and development, so the person who finds a problem on your site is usually the person who can fix it.</p>
          <p className="grey">We started because search changed faster than most agencies did. Buyers now compare options on Google, in Maps and inside AI assistants. We optimize for all three, and we write for people first.</p>
          <div className="hero-cta">
            <Link className="btn" href="/about">More about us <Chevron /></Link>
            <Link className="btn line" href="/team">Meet the team</Link>
          </div>
        </div>
        <div className="facts">
          <h3>What you can expect</h3>
          <dl>
            <div><dt>Contracts</dt><dd>No long-term contracts, no hidden fees</dd></div>
            <div><dt>Guarantee</dt><dd>90-day results guarantee</dd></div>
            <div><dt>Reporting</dt><dd>Monthly report plus a live change log</dd></div>
            <div><dt>Free audit</dt><dd>Delivered within 48 hours</dd></div>
            <div><dt>Ownership</dt><dd>All content, links and accounts stay yours</dd></div>
            <div><dt>Contact</dt><dd><a href={`mailto:${EMAIL}`}>{EMAIL}</a></dd></div>
          </dl>
        </div>
      </div>
    </section>
  );
}

function Roadmap() {
  const s = useSlider(ROADMAP.length, 1, 6000);
  return (
    <section className="sec soft" id="roadmap">
      <div className="wrap">
        <div className="head">
          <p className="eyebrow">Your first 90 days</p>
          <h2>What Happens After You Hire Our SEO Agency in the USA</h2>
          <p className="grey">No mystery months. Here is the order we work in and what you should see at each stage. For finished projects, see our <Link href="/case-studies">case studies</Link>.</p>
        </div>
        <div className="phase-tabs" role="tablist">
          {ROADMAP.map((r, idx) => (
            <button key={r.phase} type="button" role="tab" aria-selected={idx === s.i} className={idx === s.i ? "on" : ""} onClick={() => s.setI(idx)}>{r.phase}</button>
          ))}
        </div>
        <div className="slider" {...s.hoverProps}>
          <div className="track" style={{ transform: `translateX(-${s.i * 100}%)` }}>
            {ROADMAP.map((r) => (
              <div key={r.phase} className="slide">
                <div className="phase">
                  <div className="phase-left">
                    <span className="phase-label">{r.phase}</span>
                    <h3>{r.title}</h3>
                    <div className="phase-see">
                      <strong>What you will see</strong>
                      <p>{r.see}</p>
                    </div>
                  </div>
                  <ul className="ticks">
                    {r.tasks.map((t) => <li key={t}>{t}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceTabs() {
  const [active, setActive] = useState(SERVICES[0].id);
  const refs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id.replace("svc-", ""))),
      { rootMargin: "-45% 0px -45% 0px" }
    );
    Object.values(refs.current).forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const go = (id: string) => {
    const el = refs.current[id];
    if (!el) return;
    setActive(id);
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 100, behavior: "smooth" });
  };

  return (
    <section className="sec pb0">
      <div className="wrap">
        <div className="head">
          <p className="eyebrow">Search engine optimization services USA</p>
          <h2>SEO Services in the United States for Every Stage of Growth</h2>
          <p className="grey">Pick one service or combine them. Every plan starts with the same audit, so we fix the biggest problems first. We also offer <Link href="/services">Digital PR services</Link>, <Link href="/services">guest posting services</Link> and the <Link href="/digital-marketing">best digital marketing services</Link> to support your rankings.</p>
        </div>
        <div className="svc">
          <div className="svc-nav">
            {SERVICES.map((sv, idx) => (
              <button key={sv.id} type="button" className={`svc-tab ${active === sv.id ? "on" : ""}`} onClick={() => go(sv.id)} aria-current={active === sv.id}>
                <span className="svc-num">{String(idx + 1).padStart(2, "0")}</span>
                <span className="svc-name">{sv.tab}</span>
                <span className="svc-go"><Chevron /></span>
              </button>
            ))}
          </div>
          <div className="svc-blocks">
            {SERVICES.map((sv) => (
              <div key={sv.id} id={`svc-${sv.id}`} ref={(el) => { refs.current[sv.id] = el; }} className="svc-block">
                <h3><Link href={sv.href}>{sv.title}</Link></h3>
                <p>{sv.desc}</p>
                <div className="svc-lists">
                  <div>
                    <span className="svc-sub">What we do</span>
                    <ul className="ticks light">{sv.provide.map((x) => <li key={x}>{x}</li>)}</ul>
                  </div>
                  <div>
                    <span className="svc-sub">What you get</span>
                    <ul className="ticks light">{sv.result.map((x) => <li key={x}>{x}</li>)}</ul>
                  </div>
                </div>
                <Link className="btn" href={sv.href}>Learn more <Chevron /></Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Audiences() {
  return (
    <section className="sec pb0">
      <div className="wrap">
        <div className="head">
          <p className="eyebrow">Who we work with</p>
          <h2>SEO for Small Businesses, Ecommerce and B2B Across the USA</h2>
          <p className="grey">A roofer in Dallas and a SaaS company in San Francisco need very different SEO. We shape the plan around your sales cycle.</p>
        </div>
        <div className="grid3">
          {AUDIENCES.map((a) => (
            <Link key={a.t} className="icard" href={a.href}>
              <h3>{a.t}</h3>
              <p>{a.d}</p>
              <span className="card-link">Explore <Chevron /></span>
            </Link>
          ))}
          <div className="icard dark">
            <h3>Not sure where you fit?</h3>
            <p>Tell us about your business and we will tell you honestly whether SEO is the right channel right now.</p>
            <Link className="btn" href="/contact">Talk to a strategist <Chevron /></Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section className="sec pb0">
      <div className="wrap two-col top">
        <div className="sticky">
          <p className="eyebrow">Why SEO</p>
          <h2>Why US Businesses Invest in Search Engine Optimization</h2>
          <p className="grey">SEO is the process of making your website the best answer for the searches your customers make, on Google and now in AI tools. Done well, it becomes the channel that keeps working after the budget is spent.</p>
          <div className="goal">
            <strong>Want the full picture?</strong>
            <span>Read <Link href="/blog/how-ai-search-is-changing-seo-in-2026">how AI search is changing SEO in 2026</Link>.</span>
          </div>
        </div>
        <div className="benefit-list">
          {BENEFITS.map((b, idx) => (
            <div key={b.t} className="benefit">
              <span className="b-num">{idx + 1}</span>
              <span><strong>{b.t}</strong>{b.d}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaBand({ eyebrow, title, text, points }: { eyebrow: string; title: string; text: string; points: string[] }) {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="cta-band">
          <p className="cta-eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
          <p>{text}</p>
          <div className="cta-btns">
            <Link className="btn" href="/free-audit">Get my free audit <Chevron /></Link>
            <a className="btn outline" href={CALENDLY} target="_blank" rel="noopener noreferrer">Book a call</a>
          </div>
          <ul className="cta-trust">{points.map((t) => <li key={t}>{t}</li>)}</ul>
        </div>
      </div>
    </section>
  );
}

function Packages() {
  return (
    <section className="sec pt0" id="seo-packages">
      <div className="wrap">
        <div className="head">
          <p className="eyebrow">SEO packages USA</p>
          <h2>Transparent SEO Packages for US Businesses</h2>
          <p className="grey">Clear monthly prices, no setup fees and no long-term contracts. Every package includes the free audit and our 90-day results guarantee. Full details are on our <Link href="/#pricing">pricing section</Link>.</p>
        </div>
        <div className="pack-grid">
          {PACKAGES.map((pk) => (
            <div key={pk.name} className={`pack ${pk.popular ? "pop" : ""}`}>
              {pk.popular && <span className="pack-badge">Most popular</span>}
              <h3>{pk.name}</h3>
              <p className="pack-for">{pk.for}</p>
              <p className="pack-price">{pk.price} <small>{pk.note}</small></p>
              <ul className="ticks">{pk.items.map((it) => <li key={it}>{it}</li>)}</ul>
              <Link className={`btn ${pk.popular ? "" : "line"}`} href={pk.cta}>{pk.ctaText} <Chevron /></Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Glossary() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="head">
          <p className="eyebrow">Generative search</p>
          <h2>SEO Beyond the Ten Blue Links</h2>
          <p className="grey">Search now happens in Google, Maps, voice assistants and AI agents. These are the parts of modern SEO we build into every plan, explained in plain English.</p>
        </div>
        <div className="gloss">
          {GLOSSARY.map((g) => (
            <div key={g.t} className="gloss-item">
              <h3>{g.t}</h3>
              <p className="gloss-full">{g.full}</p>
              <p>{g.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Industries() {
  return (
    <section className="sec pt0">
      <div className="wrap">
        <div className="head">
          <p className="eyebrow">Industries</p>
          <h2>Industries We Help Rank Across the US</h2>
          <p className="grey">Each industry has its own search habits, rules and competitors. These are the ones we know best.</p>
        </div>
        <div className="ind-grid">
          {INDUSTRIES.map((ind) => (
            <div key={ind.t} className="ind">
              <h3>{ind.t}</h3>
              <p>{ind.d}</p>
            </div>
          ))}
          <Link className="ind cta" href="/services">
            <h3>Don&apos;t see yours?</h3>
            <p>View all services <Chevron /></p>
          </Link>
        </div>
      </div>
    </section>
  );
}

function Eeat() {
  return (
    <section className="sec soft">
      <div className="wrap">
        <div className="head">
          <p className="eyebrow">Google E-E-A-T</p>
          <h2>How We Build Experience, Expertise, Authority and Trust</h2>
          <p className="grey">Google&apos;s quality guidelines reward content that shows real experience and comes from a trustworthy source. Here is how we build each signal into your site.</p>
        </div>
        <div className="eeat">
          {EEAT.map((e) => (
            <div key={e.t} className="eeat-card">
              <span className="eeat-k">{e.k}</span>
              <h3>{e.t}</h3>
              <p>{e.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reading() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="head left">
          <p className="eyebrow">From our team</p>
          <h2>Learn How Modern SEO Works</h2>
          <p className="grey">Free guides written by the people who do the work. More on the <Link href="/blog">CodedSEO blog</Link> and in <Link href="/insights">insights</Link> and <Link href="/resources">resources</Link>.</p>
        </div>
        <div className="read-grid">
          {READING.map((r) => (
            <Link key={r.t} className="read" href={r.href}>
              <span className="read-tag">{r.tag}</span>
              <h3>{r.t}</h3>
              <p>{r.d}</p>
              <span className="card-link">Read <Chevron /></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const w = useWidth();
  const per = w < 768 ? 1 : w < 1200 ? 2 : 3;
  const s = useSlider(PROCESS.length, per, 0, false);
  return (
    <section className="sec process">
      <div className="wrap">
        <div className="head">
          <p className="eyebrow dark">Getting started</p>
          <h2>From First Call to First Results</h2>
          <p>Five steps, no long sales process. Most clients go from discovery call to live work in under two weeks.</p>
        </div>
        <div className="slider visible">
          <div className="track" style={{ transform: `translateX(-${(s.i * 100) / per}%)` }}>
            {PROCESS.map((p, idx) => (
              <div key={p.t} className="slide" style={{ flex: `0 0 ${100 / per}%` }}>
                <div className="step">
                  <div className="step-top">
                    <span className="step-num">{idx + 1}</span>
                    <span className="step-line" />
                  </div>
                  <h3>{p.t}</h3>
                  <p>{p.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="arrows right">
          <button type="button" aria-label="Previous step" onClick={s.prev} disabled={s.i === 0}><Chevron dir="left" /></button>
          <button type="button" aria-label="Next step" className="fill" onClick={s.next} disabled={s.i === s.max}><Chevron /></button>
        </div>
      </div>
    </section>
  );
}

function Tools() {
  return (
    <section className="sec tools">
      <div className="wrap head">
        <p className="eyebrow">Our toolkit</p>
        <h2>The Tools Behind Every Report</h2>
        <p className="grey">We use the same industry-standard tools as in-house SEO teams, and you get access to the data, not just screenshots.</p>
      </div>
      <div className="marquee">
        <div className="marquee-track">
          {[...TOOLS, ...TOOLS].map((t, i) => (
            <span key={i} className="tool" aria-hidden={i >= TOOLS.length}>{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section className="sec">
      <div className="wrap narrow">
        <div className="head">
          <p className="eyebrow">FAQ</p>
          <h2>Questions About Hiring an SEO Agency in the USA</h2>
        </div>
        <div className="faq">
          {FAQS.map((f, idx) => (
            <div key={f.q} className={`faq-item ${open === idx ? "open" : ""}`}>
              <h3>
                <button type="button" aria-expanded={open === idx} onClick={() => setOpen(open === idx ? -1 : idx)}>
                  {f.q}<span className="faq-ic">{open === idx ? "−" : "+"}</span>
                </button>
              </h3>
              <div className="faq-body" hidden={open !== idx}>{f.a}</div>
            </div>
          ))}
        </div>
        <p className="center grey faq-more">Still have questions? <Link href="/contact">Contact our team</Link> or email <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.</p>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="final">
      <div className="wrap final-in">
        <div>
          <h2>Ready to Grow Your Organic Traffic?</h2>
          <p>Get a free SEO audit and see exactly what is holding your site back.</p>
        </div>
        <div className="cta-btns">
          <Link className="btn light" href="/free-audit">Get my free audit <Chevron /></Link>
          <Link className="btn outline" href="/contact">Contact us</Link>
        </div>
      </div>
    </section>
  );
}

/* ================= PAGE ================= */

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function UsaHome() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SiteHeader />
      <div className="isu">
        <main>
          <Hero />
          <Stats />
          <Monthly />
          <About />
          <Roadmap />
          <ServiceTabs />
          <Audiences />
          <Benefits />
          <Packages />
          <CtaBand
            eyebrow="Free, no obligation"
            title="Find Out What Is Stopping You From Ranking"
            text="Our free audit checks your technical setup, content and competitors, and gives you the three changes that will make the biggest difference."
            points={["No contracts", "Delivered in 48 hours", "Written by a real strategist"]}
          />
          <Industries />
          <Eeat />
          <Glossary />
          <Reading />
          <Process />
          <Tools />
          <Faq />
          <FinalCta />
        </main>
      </div>
      <SiteFooter />
    </>
  );
}