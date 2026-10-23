"use client";

import { useState } from "react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  MapPin, Search, Wrench, Bot, PenTool, Link2, MapPinOff, Layers, PhoneOff, Sparkles, Building2, BarChart3,
  House, Stethoscope, Scale, UtensilsCrossed, Dumbbell, Laptop, ShoppingBag,
} from "lucide-react";
import { Header as SiteHeader } from "@/components/header";
import { Footer as SiteFooter } from "@/components/footer";
import "./frisco.css";
import { FAQS } from "./faqs";
import { CONTACT, telHref, whatsappHref } from "@/lib/contact";

/* ================= LINKS ================= */

const CALENDLY = CONTACT.calendly;
const EMAIL = CONTACT.email;
const WA = whatsappHref("Hi CodedSEO, I'd like a free SEO audit for my Frisco business.");

/* ================= CONTENT =================
   Keywords (Semrush US, 15 Oct 2026 – "Frisco SEO Keywords" sheet):
   seo company frisco (590) · frisco seo (480) · seo frisco (260) · seo frisco tx (260)
   frisco seo services (210) · seo agency frisco (170) · local seo services frisco tx (110)
*/

const HERO_POINTS = [
  "Built for Frisco & Collin County",
  "No contracts, no hidden fees",
  "Calls on Central Time",
  "Maps, organic & AI in one plan",
];

const STATS = [
  { value: "1M+", label: "Keywords ranked", sub: "Tracked across client campaigns" },
  { value: "100+", label: "Businesses served", sub: "Across the United States and beyond" },
  { value: "98%", label: "Client retention", sub: "Clients who stay with us" },
  { value: "90-day", label: "Results guarantee", sub: "Or we keep working for free" },
];

const FACTS = [
  { k: "248,971", d: "Current population estimate for the City of Frisco" },
  { k: "~600%", d: "Population growth since 2000, per the Frisco 2040 Plan" },
  { k: "2 counties", d: "Frisco sits in both Collin and Denton County" },
  { k: "590 / mo", d: "US searches for \"seo company frisco\" (Semrush, Oct 2026)" },
];

const CHALLENGES = [
  { icon: MapPinOff, t: "Stuck outside the Map Pack", d: "A competitor three miles away shows up first because their Google Business Profile has better categories, fresher reviews and more photos, not because they do better work." },
  { icon: Layers, t: "One page trying to rank everywhere", d: "A single \"Dallas-Fort Worth\" page can't win Frisco, Plano and McKinney at once. Google wants a clear page for each place you serve." },
  { icon: PhoneOff, t: "Traffic, but the phone stays quiet", d: "Slow mobile pages, a phone number buried in the footer and a contact form with ten fields turn ready buyers into bounces." },
  { icon: Sparkles, t: "Missing from AI answers", d: "When someone asks ChatGPT or Google AI Overviews for the best provider in Frisco, AI tools name the brands they can verify. If your details are thin, you're left out." },
  { icon: Building2, t: "Fighting national brands and Dallas agencies", d: "Frisco's growth attracts franchises and big-budget advertisers. Small local businesses need sharper targeting, not a bigger budget." },
  { icon: BarChart3, t: "Reports that don't connect to revenue", d: "Rank screenshots don't tell you which searches turned into booked jobs. Without calls and forms tracked, you can't tell what's working." },
];

const SERVICES = [
  { icon: MapPin, t: "Local SEO Services Frisco TX", d: "Google Business Profile optimization, review strategy, local citations and NAP cleanup so you show up in Google Maps across Frisco ZIP codes.", href: "/services" },
  { icon: Search, t: "Organic SEO", d: "Keyword research mapped to revenue, on-page optimization and internal linking for the service pages your Frisco buyers search for.", href: "/services/organic-seo" },
  { icon: Wrench, t: "Technical SEO", d: "Crawling, indexing, Core Web Vitals, schema and mobile speed, with a prioritized fix list your developer can follow.", href: "/free-audit" },
  { icon: Bot, t: "AI SEO, AEO & GEO", d: "Entity-based SEO, structured data and answer-ready content so ChatGPT, Gemini and Google AI Overviews can cite your business.", href: "/blog/what-is-ai-seo" },
  { icon: PenTool, t: "SEO Content Writing", d: "City and service pages written from interviews with your team, with real local detail and FAQs, not spun templates.", href: "/digital-marketing" },
  { icon: Link2, t: "Link Building & Digital PR", d: "Editorial links and mentions from relevant Texas and industry sites through outreach and guest posting, never link schemes.", href: "/services" },
];

const BENEFITS = [
  { t: "More calls and direction requests", d: "Your Google Business Profile becomes a lead source you can measure, not just a listing." },
  { t: "A page for every area you serve", d: "Frisco, Prosper, Little Elm and The Colony each get their own relevant page without duplicate content." },
  { t: "Visibility in zero-click results", d: "Featured snippets, the Map Pack and AI answers often decide the call before anyone visits a website." },
  { t: "Costs that drop over time", d: "Ads stop when the budget stops. Pages that rank keep bringing Frisco customers for months." },
  { t: "Proof every month", d: "Search Console, GA4 and call tracking show which searches turned into leads." },
];

const PACKAGES = [
  { name: "Starter", price: "$199", inr: "≈ ₹16,500", note: "per month", for: "Single-location Frisco businesses starting with SEO", items: ["5 target keywords", "Technical SEO audit", "On-page optimization", "Google Business Profile setup", "Monthly reporting"], cta: "/free-audit", ctaText: "Start with a free audit" },
  { name: "Growth", price: "$499", inr: "≈ ₹41,500", note: "per month", for: "Businesses competing across Frisco and Collin County", items: ["15 target keywords", "Full technical audit", "City pages for nearby areas", "Link building (10 per month)", "Local SEO and weekly reporting"], cta: "/free-audit", ctaText: "Get my free audit", popular: true },
  { name: "Enterprise", price: "Custom", inr: "", note: "quoted after audit", for: "Multi-location brands across DFW", items: ["Unlimited keywords", "Enterprise technical SEO", "Multi-location SEO", "Link building (50+ per month)", "Dedicated account team"], cta: "/contact", ctaText: "Talk to sales" },
];

const INDUSTRIES = [
  { icon: House, t: "Home services", d: "HVAC, plumbing, roofing, pools" },
  { icon: Stethoscope, t: "Healthcare & dental", d: "Clinics, dentists, med spas" },
  { icon: Building2, t: "Real estate & builders", d: "Agents, new-home builders" },
  { icon: Scale, t: "Legal", d: "Family, injury, estate planning" },
  { icon: UtensilsCrossed, t: "Restaurants & cafes", d: "Dining, catering, delivery" },
  { icon: Dumbbell, t: "Sports & fitness", d: "Gyms, golf, youth sports" },
  { icon: Laptop, t: "SaaS & B2B", d: "Tech firms along the Tollway" },
  { icon: ShoppingBag, t: "Retail & ecommerce", d: "Local shops and online stores" },
];

const AREAS = ["Frisco 75033", "Frisco 75034", "Frisco 75035", "Frisco 75036", "Stonebriar", "Frisco Square", "The Star district", "PGA Frisco area", "Plano", "McKinney", "Prosper", "Little Elm", "The Colony", "Allen"];

const PROCESS = [
  { t: "Week 1 · Audit", d: "Frisco rank check, Map Pack grid scan, technical crawl and a look at the three competitors beating you." },
  { t: "Weeks 2–3 · Plan", d: "Keyword map by service and area, Google Business Profile plan and a written fix list you approve." },
  { t: "Weeks 3–10 · Build", d: "Technical fixes, new service and city pages, reviews, citations and local links, all logged where you can see them." },
  { t: "Week 12+ · Scale", d: "Expand to Plano, McKinney and Prosper, add AI search work and double down on what turns into calls." },
];

const COMPARE = [
  ["Local strategy", "A plan for each Frisco-area city", "One page for all of DFW"],
  ["Pricing", "Published plans from $199/month", "\"Call for a quote\""],
  ["Contracts", "Month to month", "6–12 month lock-in"],
  ["AI search", "ChatGPT, Gemini, Perplexity & AI Overviews", "Google rankings only"],
  ["Reporting", "Calls, forms and a live change log", "Rank screenshots"],
  ["Ownership", "Your content, profile and data stay yours", "Locked in agency accounts"],
];

export type FriscoPost = { title: string; slug: string; category: string; excerpt: string; date: string; image: string; imageAlt: string };



/* ================= IMAGES (Unsplash, free license) ================= */

const UNSPLASH = (id: string, w: number) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;
const IMG_HERO = { id: "photo-1596309559272-627cc03fcf3b", alt: "Local business storefront in North Texas, the kind of Frisco business our SEO company helps rank #1 on Google Maps" };
const IMG_CITY = { id: "photo-1691635187988-d03b9ac5e045", alt: "Aerial view of a fast-growing North Texas city with new buildings and roads" };
const IMG_DATA = { id: "photo-1526628953301-3e589a6a8b74", alt: "SEO analytics dashboard showing organic traffic and lead growth" };

function Photo({ id, alt, className }: { id: string; alt: string; className?: string }) {
  return (
    <img
      className={`fr-photo ${className ?? ""}`}
      src={UNSPLASH(id, 1200)}
      srcSet={`${UNSPLASH(id, 600)} 600w, ${UNSPLASH(id, 900)} 900w, ${UNSPLASH(id, 1200)} 1200w`}
      sizes="(max-width: 1000px) 100vw, 560px"
      alt={alt}
      width={1200}
      height={750}
      loading="lazy"
      decoding="async"
    />
  );
}

function Ic({ icon: Icon }: { icon: LucideIcon }) {
  return <span className="fr-ic" aria-hidden="true"><Icon size={22} strokeWidth={2} /></span>;
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

/* ================= SECTIONS ================= */

function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <nav className="fr-crumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link> › <Link href="/seo-agency-usa">SEO Agency USA</Link> › <span>Frisco, TX</span>
          </nav>
          <p className="pill">Frisco, Texas · Local SEO + AI search</p>
          <h1>SEO Company Frisco Businesses Hire to Win <span className="hl">Google Maps and AI Search</span></h1>
          <p className="lead">Frisco is one of the fastest-growing cities in the country, and every new household is searching for a dentist, plumber, realtor or lawyer it hasn&apos;t picked yet. CodedSEO helps local businesses show up first when those customers search, on Google, in the Map Pack and inside AI tools like ChatGPT.</p>
          <ul className="ticks two fr-ticks">
            {HERO_POINTS.map((p) => <li key={p}>{p}</li>)}
          </ul>
          <div className="hero-cta">
            <Link className="btn" href="/free-audit">Get my free Frisco SEO audit <Chevron /></Link>
            <a className="btn ghost" href={CALENDLY} target="_blank" rel="noopener noreferrer">Book a 30-min call</a>
          </div>
          <div className="fr-contact">
                        <a className="fr-chip" href={telHref} aria-label={`Call ${CONTACT.phoneDisplay}`}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/></svg>
              {CONTACT.phoneDisplay}
            </a>
            <a className="fr-chip wa" href={WA} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4c1.7.7 2.4.8 3.2.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3z"/></svg>
              WhatsApp
            </a>
          </div>
          <p className="byline">Written by the <Link href="/team">CodedSEO strategy team</Link> · Updated October 2026</p>
        </div>

        <figure className="fr-hero-img">
          <img
            src={UNSPLASH(IMG_HERO.id, 1100)}
            srcSet={`${UNSPLASH(IMG_HERO.id, 600)} 600w, ${UNSPLASH(IMG_HERO.id, 900)} 900w, ${UNSPLASH(IMG_HERO.id, 1100)} 1100w`}
            sizes="(max-width: 1000px) 100vw, 560px"
            alt={IMG_HERO.alt}
            width={1100}
            height={1000}
            fetchPriority="high"
            decoding="async"
          />
          <span className="fr-ov-pinbig" aria-hidden="true">
            <svg width="64" height="78" viewBox="0 0 64 78"><path d="M32 2C15.4 2 2 15 2 31.5 2 54 32 76 32 76s30-22 30-44.5C62 15 48.6 2 32 2z" fill="#16a34a" /><circle cx="32" cy="31" r="13" fill="#fff" /><path d="M26 31l4.5 4.5L39 27" fill="none" stroke="#16a34a" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </span>
          <div className="fr-ov" aria-hidden="true">
            <div className="fr-ov-search">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="7" /><path d="M20 20l-4-4" /></svg>
              <span>seo company frisco</span>
              <i className="fr-ov-caret" />
            </div>
            <div className="fr-ov-card">
              <span className="fr-ov-pin"><MapPin size={22} strokeWidth={2.4} /></span>
              <span>
                <b><em>#1</em> Your Business</b>
                <span className="fr-ov-rate"><strong>4.9</strong> <span className="stars">★★★★★</span> <small>(128)</small></span>
                <small>SEO agency · Frisco, TX</small>
                <small className="g">Open now · Call · Directions</small>
              </span>
            </div>
          </div>
        </figure>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="stats">
      <div className="wrap">
        <div className="stats-card">
          {STATS.map((s) => (
            <div key={s.label} className="stat">
              <p className="stat-num">{s.value}</p>
              <p className="stat-label">{s.label}</p>
              <p className="stat-sub">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Market() {
  return (
    <section className="sec">
      <div className="wrap two-col">
        <div>
          <p className="eyebrow">Why Frisco SEO is different</p>
          <h2>A Fast-Growing City Means New Customers Searching Every Month</h2>
          <p className="grey">Growth brings opportunity and competition at the same time. National franchises, Dallas agencies and new local businesses all chase the same Frisco searches, and the results change a lot between Stonebriar in the south and the newer neighborhoods north of US-380.</p>
          <p className="grey">Frisco also spans Collin and Denton County and several ZIP codes, so &quot;near me&quot; results for the same service can look different a few miles apart. Our Frisco SEO services start from how your customers actually search here, not a generic Texas template.</p>

        </div>
        <div>
        <Photo id={IMG_CITY.id} alt={IMG_CITY.alt} />
        <div className="facts fr-facts">
          <h3>Frisco at a glance</h3>
          <dl>
            {FACTS.map((f) => (
              <div key={f.k}><dt>{f.k}</dt><dd>{f.d}</dd></div>
            ))}
          </dl>
          <p className="fr-src">
            Sources: <a href="https://www.friscotexas.gov/1454/Demographics" target="_blank" rel="noopener noreferrer nofollow">City of Frisco Demographics</a> · <a href="https://www.friscotexas.gov/DocumentCenter/View/36069/2040-Comp-Plan-Chapter-6-PDF" target="_blank" rel="noopener noreferrer nofollow">Frisco 2040 Comprehensive Plan</a> · Semrush Keyword Magic Tool (US, 15 Oct 2026)
          </p>
        </div>
        </div>
      </div>
    </section>
  );
}

function Challenges() {
  return (
    <section className="sec soft">
      <div className="wrap">
        <div className="head">
          <p className="eyebrow">Sound familiar?</p>
          <h2>Problems We Fix for Frisco Businesses</h2>
          <p className="grey">Most Frisco businesses we audit aren&apos;t invisible because of bad luck. It&apos;s usually one or more of these.</p>
        </div>
        <div className="grid3">
          {CHALLENGES.map((c) => (
            <div key={c.t} className="icard">
              <Ic icon={c.icon} />
              <h3>{c.t}</h3>
              <p>{c.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="head">
          <p className="eyebrow">Frisco SEO services</p>
          <h2>Everything You Need to Rank in Frisco, From One Team</h2>
          <p className="grey">Pick one service or combine them. Every plan starts with the same free audit, so we fix the biggest problems first. See all <Link href="/services">SEO services</Link> or our wider <Link href="/digital-marketing">digital marketing services</Link>.</p>
        </div>
        <div className="grid3">
          {SERVICES.map((s) => (
            <Link key={s.t} className="icard" href={s.href}>
              <Ic icon={s.icon} />
              <h3>{s.t}</h3>
              <p>{s.d}</p>
              <span className="card-link">Learn more <Chevron /></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section className="sec pt0">
      <div className="wrap two-col top">
        <div className="sticky">
          <p className="eyebrow">What you get</p>
          <h2>Outcomes Our Frisco SEO Agency Works Toward</h2>
          <p className="grey">We report on business results, not vanity metrics. Every month you see calls, form fills, direction requests and keyword movement for Frisco searches, plus a live log of every change we made.</p>
          <Photo id={IMG_DATA.id} alt={IMG_DATA.alt} />
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

function Packages() {
  return (
    <section className="sec soft" id="seo-packages">
      <div className="wrap">
        <div className="head">
          <p className="eyebrow">Pricing</p>
          <h2>Frisco SEO Packages With Clear Monthly Prices</h2>
          <p className="grey">No setup fees, no long-term contracts. Every package includes the free audit and our 90-day results guarantee.</p>
        </div>
        <div className="pack-grid">
          {PACKAGES.map((pk) => (
            <div key={pk.name} className={`pack ${pk.popular ? "pop" : ""}`}>
              {pk.popular && <span className="pack-badge">Most popular</span>}
              <h3>{pk.name}</h3>
              <p className="pack-for">{pk.for}</p>
              <p className="pack-price">{pk.price} <small>{pk.note}</small></p>
              {pk.inr && <p className="fr-inr">{pk.inr} per month</p>}
              <ul className="ticks">{pk.items.map((it) => <li key={it}>{it}</li>)}</ul>
              <Link className={`btn ${pk.popular ? "" : "line"}`} href={pk.cta}>{pk.ctaText} <Chevron /></Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaBand() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="cta-band">
          <p className="cta-eyebrow">Free, no obligation</p>
          <h2>See Where You Rank in Frisco Today</h2>
          <p>Our free audit checks your Map Pack position across Frisco, your technical setup and your top three competitors, then gives you the three changes that will make the biggest difference.</p>
          <div className="cta-btns">
            <Link className="btn" href="/free-audit">Get my free audit <Chevron /></Link>
            <a className="btn outline" href={WA} target="_blank" rel="noopener noreferrer">WhatsApp us</a>
          </div>
          <ul className="cta-trust"><li>No contracts</li><li>Delivered in 48 hours</li><li>Written by a real strategist</li></ul>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="sec pt0">
      <div className="wrap">
        <div className="head">
          <p className="eyebrow">Your first 90 days</p>
          <h2>What Happens After You Hire Our SEO Company in Frisco</h2>
          <p className="grey">No mystery months. Here is the order we work in and what you should see at each stage.</p>
        </div>
        <div className="fr-steps">
          {PROCESS.map((p, idx) => (
            <div key={p.t} className="icard">
              <span className="fr-step">{String(idx + 1).padStart(2, "0")}</span>
              <h3>{p.t}</h3>
              <p>{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Industries() {
  return (
    <section className="sec soft">
      <div className="wrap">
        <div className="head">
          <p className="eyebrow">Industries</p>
          <h2>Frisco Industries We Help Rank</h2>
        </div>
        <div className="ind-grid">
          {INDUSTRIES.map((ind) => (
            <div key={ind.t} className="ind fr-ind">
              <Ic icon={ind.icon} />
              <h3>{ind.t}</h3>
              <p>{ind.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Compare() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="head">
          <p className="eyebrow">Why CodedSEO</p>
          <h2>How We&apos;re Different From a Typical SEO Agency</h2>
          <p className="grey">More reasons on our <Link href="/why-choose-us">why choose us</Link> page.</p>
        </div>
        <div className="fr-table-wrap">
          <table className="fr-table">
            <thead><tr><th>What matters</th><th>CodedSEO</th><th>Typical agency</th></tr></thead>
            <tbody>
              {COMPARE.map((r) => (
                <tr key={r[0]}><td>{r[0]}</td><td>{r[1]}</td><td>{r[2]}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function Areas() {
  return (
    <section className="sec soft">
      <div className="wrap two-col">
        <div>
          <p className="eyebrow">Service area</p>
          <h2>SEO Frisco TX and Across North Texas</h2>
          <p className="grey">We work with businesses in every Frisco ZIP code and the cities around it, building a separate local plan for each market you want to win. Serving customers outside Texas too? See our <Link href="/seo-agency-usa">SEO agency USA</Link> page.</p>
          <div className="hero-cta">
            <Link className="btn" href="/contact">Talk to a strategist <Chevron /></Link>
            <Link className="btn line" href="/reviews">Read client reviews</Link>
          </div>
        </div>
        <ul className="fr-areas">
          {AREAS.map((a) => <li key={a}>{a}</li>)}
        </ul>
      </div>
    </section>
  );
}

function Reading({ posts }: { posts: FriscoPost[] }) {
  // Sirf asli published blogs. Koi blog na mile to section hi nahi dikhega.
  if (!posts.length) return null;
  return (
    <section className="sec soft">
      <div className="wrap">
        <div className="head">
          <p className="eyebrow">From the CodedSEO blog</p>
          <h2>Guides for Frisco Business Owners</h2>
          <p className="grey">Practical guides from our team. See every article on the <Link href="/blog">CodedSEO blog</Link>.</p>
        </div>
        <div className="fr-posts">
          {posts.map((p) => (
            <Link key={p.slug} className="fr-post" href={`/blog/${p.slug}`}>
              <div className="fr-post-img">
                {p.image ? (
                  <img src={p.image} alt={p.imageAlt} width={720} height={450} loading="lazy" decoding="async" />
                ) : (
                  <span aria-hidden="true">{p.category}</span>
                )}
              </div>
              <div className="fr-post-body">
                <span className="fr-post-cat">{p.category}</span>
                <h3>{p.title}</h3>
                {p.excerpt && <p>{p.excerpt}</p>}
                <span className="fr-post-foot">{p.date && <time>{p.date}</time>}<span className="card-link">Read article <Chevron /></span></span>
              </div>
            </Link>
          ))}
        </div>
        <div className="center fr-posts-more"><Link className="btn line" href="/blog">View all articles <Chevron /></Link></div>
      </div>
    </section>
  );
}

function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section className="sec pt0">
      <div className="wrap narrow">
        <div className="head">
          <p className="eyebrow">FAQ</p>
          <h2>Frisco SEO Questions, Answered</h2>
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
        <div className="fr-help">
          <div>
            <h3>Still have questions?</h3>
            <p>Talk to a strategist on call, WhatsApp or email.</p>
          </div>
          <div className="fr-help-btns">
            <a className="fr-chip" href={telHref}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/></svg>
              Call
            </a>
            <a className="fr-chip wa" href={WA} target="_blank" rel="noopener noreferrer">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4c1.7.7 2.4.8 3.2.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3z"/></svg>
              WhatsApp
            </a>
            <a className="fr-chip" href={`mailto:${EMAIL}`}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="final">
      <div className="wrap final-in">
        <div>
          <h2>Ready to Be the Business Frisco Finds First?</h2>
          <p>Get a free audit from an SEO company Frisco businesses can actually see working.</p>
        </div>
        <div className="cta-btns">
          <Link className="btn light" href="/free-audit">Get my free audit <Chevron /></Link>
          <a className="btn outline" href={telHref}>Call {CONTACT.phoneDisplay}</a>
        </div>
      </div>
    </section>
  );
}

/* ================= PAGE ================= */

export default function FriscoHome({ posts = [] }: { posts?: FriscoPost[] }) {
  return (
    <>
      <SiteHeader />
      <div className="isu">
        <main>
          <Hero />
          <Stats />
          <Market />
          <Challenges />
          <Services />
          <Benefits />
          <Packages />
          <CtaBand />
          <Process />
          <Industries />
          <Compare />
          <Areas />
          <Reading posts={posts} />
          <Faq />
          <FinalCta />
        </main>
      </div>
      <div className="isu">
        <div className="fr-sticky" role="region" aria-label="Quick contact">
          <a href={telHref} className="fr-sticky-call">Call now</a>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="fr-sticky-wa">WhatsApp</a>
          <Link href="/free-audit" className="fr-sticky-audit">Free audit</Link>
        </div>
      </div>
      <SiteFooter />
    </>
  );
}
