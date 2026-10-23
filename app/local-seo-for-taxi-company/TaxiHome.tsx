"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  MapPin, Star, Smartphone, Plane, Link2, Wrench, MapPinOff, Layers, PhoneOff, Sparkles, Car, BarChart3,
  Accessibility, Briefcase, Moon, Route, Users, Search,
} from "lucide-react";
import { Header as SiteHeader } from "@/components/header";
import { Footer as SiteFooter } from "@/components/footer";
import { CONTACT, telHref, whatsappHref } from "@/lib/contact";
import type { RelatedPost } from "@/lib/related-posts";
import { FAQS } from "./faqs";
import "../seo-agency-frisco/frisco.css";

/* ================= LINKS ================= */

const CALENDLY = CONTACT.calendly;
const EMAIL = CONTACT.email;
const WA = whatsappHref("Hi CodedSEO, I'd like a free local SEO audit for my taxi company.");

/* ================= CONTENT =================
   Keywords ("local seo for taxi company" sheet, Semrush US):
   local seo for taxi company (590, KD 0, informational) · seo for taxi companies (40)
   hire taxi seo expert (20) · seo taxi (20) · taxi seo (20)
*/

const HERO_POINTS = [
  "Built for \"taxi near me\" searches",
  "No contracts, no hidden fees",
  "Airport and town pages that rank",
  "More calls, not just more clicks",
];

const STATS = [
  { value: "1M+", label: "Keywords ranked", sub: "Tracked across client campaigns" },
  { value: "100+", label: "Businesses served", sub: "Across the United States and beyond" },
  { value: "98%", label: "Client retention", sub: "Clients who stay with us" },
  { value: "90-day", label: "Results guarantee", sub: "Or we keep working for free" },
];

const FACTS = [
  { k: "20", d: "Service areas Google lets a taxi company list on its Business Profile" },
  { k: "~2 hrs", d: "Google's suggested maximum driving time for a service area" },
  { k: "590 / mo", d: "US searches for \"local seo for taxi company\" (Semrush)" },
  { k: "KD 0", d: "Keyword difficulty for that search, so a well-built page can rank" },
];

const STEPS = [
  { t: "Set up your Google Business Profile as a service-area business", d: "Pick \"Taxi service\" as your primary category, hide your home or depot address if passengers don't come to it, and list the towns, ZIP codes and airport you actually cover." },
  { t: "Add every service people search for", d: "Airport transfers, long-distance trips, wheelchair-accessible rides, corporate accounts, school runs. Each one is a separate search and a separate reason to choose you over an app." },
  { t: "Build a page for each town and airport", d: "\"Taxi to DFW airport\" and \"taxi in McKinney\" are different searches. A short, specific page for each, with real pickup points and typical fares, beats one generic page." },
  { t: "Ask every happy rider for a review", d: "Send a review link by text after the ride. Reviews that mention the airport, the town or the driver help Google match you to those searches." },
  { t: "Make the phone number impossible to miss", d: "Most taxi searches happen on a phone, often in a hurry. A sticky call button, a one-tap WhatsApp link and a two-field booking form turn visits into rides." },
  { t: "Keep your name, address and phone the same everywhere", d: "List the business on Apple Maps, Bing Places, Yelp and local directories with exactly the same details as your Google profile." },
  { t: "Add TaxiService schema and track calls", d: "Structured data tells Google what you do and where. Call tracking shows which pages and searches actually produce rides." },
];

const CHALLENGES = [
  { icon: Smartphone, t: "Losing riders to ride-hailing apps", d: "Apps own the \"I need a ride now\" moment. Local companies win when they show up for the searches apps don't serve well: pre-booked airport runs, flat fares and accessible rides." },
  { icon: MapPinOff, t: "Not showing in the Map Pack", d: "A competitor with fresher reviews and the right categories takes the top three spots, even if your cars and drivers are better." },
  { icon: PhoneOff, t: "Visitors who never call", d: "If the number is buried, the site is slow or the booking form asks for ten fields, a rider in a hurry simply goes back and taps the next result." },
  { icon: Layers, t: "One page for every town", d: "A single homepage can't rank for every suburb and airport you cover. Google needs a clear page for each place." },
  { icon: Sparkles, t: "Invisible in AI answers", d: "When someone asks ChatGPT or Google AI Overviews for a reliable airport taxi nearby, AI tools name the companies they can verify. Thin listings get skipped." },
  { icon: BarChart3, t: "No idea which ads or pages work", d: "Without call tracking you can't tell whether bookings came from Google, a directory or a flyer, so budget goes to the wrong place." },
];

const SERVICES = [
  { icon: MapPin, t: "Google Business Profile for Taxis", d: "Service-area setup, categories, services, photos, posts and a review system that keeps fresh reviews coming in every week.", href: "/services" },
  { icon: Route, t: "Town & Airport Pages", d: "A useful page for each town, suburb and airport you serve, with pickup details and FAQs riders actually ask.", href: "/services/organic-seo" },
  { icon: Star, t: "Review Generation", d: "Automated review requests by text after each ride, plus replies that build trust with the next rider.", href: "/services" },
  { icon: Wrench, t: "Technical SEO & Speed", d: "Fast mobile pages, click-to-call everywhere, TaxiService schema and clean indexing.", href: "/free-audit" },
  { icon: Search, t: "AI SEO for Local Searches", d: "Entity and listing work so ChatGPT, Gemini and Google AI Overviews can recommend your taxi company.", href: "/blog/what-is-ai-seo" },
  { icon: Link2, t: "Local Citations & Links", d: "Consistent listings on maps and directories, plus links from local businesses, hotels and event venues.", href: "/services" },
];

const SEGMENTS = [
  { icon: Car, t: "Local cab companies", d: "Town and suburb rides" },
  { icon: Plane, t: "Airport transfers", d: "Pre-booked pickups and drop-offs" },
  { icon: Accessibility, t: "Accessible transport", d: "Wheelchair-accessible vehicles" },
  { icon: Briefcase, t: "Corporate accounts", d: "Business travel and staff rides" },
  { icon: Moon, t: "Late-night services", d: "Bars, events and shift workers" },
  { icon: Users, t: "Shuttles & group rides", d: "Weddings, tours and events" },
];


const PILLARS = [
  { t: "Google Business Profile", d: "Your free listing on Google Search and Maps. For a taxi company it does most of the heavy lifting: categories, service areas, hours, photos, reviews and the call button." },
  { t: "Website & service pages", d: "Pages that prove to Google (and to riders) what you offer and where: towns, airports, accessible rides, corporate accounts, fares and how to book." },
  { t: "Reputation & citations", d: "Reviews, replies and consistent listings on Apple Maps, Bing Places, Yelp and local directories. They tell Google you are real, active and trusted." },
];

const SEARCH_TYPES = [
  ["Urgent rides", "taxi near me, cab near me now, 24 hour taxi [town]", "Google Business Profile + fast mobile homepage"],
  ["Airport", "taxi to [airport], [airport] taxi service, airport cab [town]", "One page per airport with pickup points and typical fares"],
  ["Town & suburb", "taxi in [town], [town] cab company, local taxi [ZIP]", "One page per town you actually serve"],
  ["Specialist", "wheelchair taxi [town], minivan taxi, school taxi", "A page for each service you offer"],
  ["Price checks", "taxi fare from [A] to [B], flat rate taxi [town]", "A fare guide or calculator page"],
  ["Business", "corporate taxi account [town], business car service", "Corporate accounts page with a quote form"],
];

const GBP_CHECKLIST = [
  "Primary category \"Taxi service\"; add secondary categories only for what you really offer (for example airport shuttle or chauffeur service)",
  "Address hidden if riders don't come to your depot, with up to 20 service areas listed",
  "Accurate hours (mark 24 hours only if you truly answer 24/7)",
  "A local phone number that is answered, the same one used on your website",
  "Photos of real vehicles, drivers and your livery, not stock images",
  "Services listed one by one: airport transfers, long distance, accessible rides, corporate",
  "A booking link that opens your booking form or WhatsApp",
  "Weekly posts: airport tips, event-night service, holiday hours",
];

const SITE_CHECKLIST = [
  "Click-to-call button visible on every phone screen",
  "Booking form with no more than 3–4 fields",
  "A page for each town and airport you serve",
  "Fares or a fare estimate, plus accepted payment methods",
  "Licence, insurance and vehicle details for trust",
  "Real reviews shown on the page, linked to your Google profile",
  "Pages that load in under 3 seconds on mobile data",
  "TaxiService or LocalBusiness schema, with the same name and phone as Google",
];

const MISTAKES = [
  { t: "Fake addresses for more towns", d: "Virtual offices or a friend's address to \"appear\" in another town can get your profile suspended. Use service areas instead." },
  { t: "Keyword-stuffed business names", d: "Adding \"Best Cheap Airport Taxi\" to your Google name breaks Google's guidelines. Use your real business name." },
  { t: "Copy-paste town pages", d: "Ten pages that only swap the town name are thin content. Each page needs real local details: pickup points, landmarks, typical trips." },
  { t: "Ignoring reviews", d: "Unanswered complaints are read by every future rider. Reply to every review, good or bad, within a day or two." },
  { t: "A slow, app-like website", d: "Heavy sliders and pop-ups push riders back to Google. Speed and a visible phone number beat fancy design." },
];

const KPIS = [
  { k: "Calls", d: "Phone calls from Google Business Profile and from the website, tracked separately" },
  { k: "Bookings", d: "Form and WhatsApp bookings, by page" },
  { k: "Map Pack", d: "Position for \"taxi near me\" across a grid of your service area" },
  { k: "Rankings", d: "Town and airport keywords, week by week" },
  { k: "Reviews", d: "New reviews per month and average rating" },
  { k: "AI visibility", d: "Whether ChatGPT and AI Overviews name your company" },
];

const PACKAGES = [
  { name: "Starter", price: "$199", inr: "≈ ₹16,500", note: "per month", for: "Single-town taxi companies starting with SEO", items: ["5 target keywords", "Google Business Profile setup", "Technical SEO audit", "Review request system", "Monthly reporting"], cta: "/free-audit", ctaText: "Start with a free audit" },
  { name: "Growth", price: "$499", inr: "≈ ₹41,500", note: "per month", for: "Taxi companies covering several towns or an airport", items: ["15 target keywords", "Town and airport pages", "Local citations and links", "Call tracking setup", "Weekly reporting"], cta: "/free-audit", ctaText: "Get my free audit", popular: true },
  { name: "Enterprise", price: "Custom", inr: "", note: "quoted after audit", for: "Fleets in several cities", items: ["Unlimited keywords", "Multi-location SEO", "Profile management per location", "Link building (50+ per month)", "Dedicated account team"], cta: "/contact", ctaText: "Talk to sales" },
];

const PROCESS = [
  { t: "Week 1 · Audit", d: "Map Pack scan across your service area, Google Business Profile review, site speed and the three competitors taking your rides." },
  { t: "Weeks 2–3 · Plan", d: "A keyword map by town, airport and service, plus a written fix list you approve before we start." },
  { t: "Weeks 3–10 · Build", d: "Profile fixes, new town and airport pages, review requests, citations and local links, all logged where you can see them." },
  { t: "Week 12+ · Scale", d: "Add more towns, corporate and accessible-ride pages, and AI search work based on what brings in bookings." },
];

const COMPARE = [
  ["Focus", "Taxi and ride searches only", "Generic local SEO"],
  ["Pricing", "Published plans from $199/month", "\"Call for a quote\""],
  ["Contracts", "Month to month", "6–12 month lock-in"],
  ["Pages", "One for each town and airport", "One homepage for everything"],
  ["Reporting", "Calls, bookings and a live change log", "Rank screenshots"],
  ["Ownership", "Your profile, site and data stay yours", "Locked in agency accounts"],
];

/* ================= IMAGES (Unsplash, free license) ================= */

const UNSPLASH = (id: string, w: number) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;
const IMG_HERO = { id: "photo-1630717285906-29364ffacea0", alt: "Yellow taxi cab on a city street, the kind of taxi company local SEO helps rank for taxi near me" };
const IMG_NIGHT = { id: "photo-1610886023290-6ba32b20e354", alt: "Taxi cab on a city road at night" };
const IMG_SIDE = { id: "photo-1628947733273-cdae71c9bfd3", alt: "Taxi cab on the road near a city building" };

function Photo({ id, alt }: { id: string; alt: string }) {
  return (
    <img
      className="fr-photo"
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

function Chevron() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}

const PhoneSvg = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/></svg>
);
const WaSvg = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4c1.7.7 2.4.8 3.2.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3z"/></svg>
);
const MailSvg = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>
);

/* ================= SECTIONS ================= */

const ROTATE = ["taxi near me", "airport taxi", "cab near me now", "24 hour taxi", "wheelchair taxi"];

function useTyping(words: string[]) {
  const [text, setText] = useState(words[0]);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let w = 0, i = words[0].length, del = true, t: ReturnType<typeof setTimeout>;
    const tick = () => {
      const word = words[w];
      if (del) {
        i--;
        if (i <= 0) { del = false; w = (w + 1) % words.length; }
      } else {
        i++;
        if (i >= words[w].length) { del = true; setText(words[w]); t = setTimeout(tick, 1800); return; }
      }
      setText((del ? word : words[w]).slice(0, Math.max(i, 0)));
      t = setTimeout(tick, del ? 45 : 85);
    };
    t = setTimeout(tick, 1800);
    return () => clearTimeout(t);
  }, [words]);
  return text;
}

function Hero() {
  const typed = useTyping(ROTATE);
  return (
    <section className="tx-hero">
      <img
        className="tx-hero-bg"
        src={UNSPLASH(IMG_HERO.id, 1800)}
        srcSet={`${UNSPLASH(IMG_HERO.id, 900)} 900w, ${UNSPLASH(IMG_HERO.id, 1400)} 1400w, ${UNSPLASH(IMG_HERO.id, 1800)} 1800w`}
        sizes="100vw"
        alt={IMG_HERO.alt}
        width={1800}
        height={1100}
        fetchPriority="high"
        decoding="async"
      />
      <div className="tx-hero-shade" aria-hidden="true" />
      <div className="wrap tx-hero-grid">
        <div className="tx-hero-copy">
          <nav className="tx-crumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link> › <Link href="/services">SEO Services</Link> › <span>Taxi Companies</span>
          </nav>
          <p className="tx-pill"><span className="tx-dot" />Local SEO for taxi & cab companies</p>
          <h1 className="tx-h1">
            <span className="tx-line" style={{ animationDelay: "0.05s" }}>Local SEO for</span>{" "}
            <span className="tx-line tx-box" style={{ animationDelay: "0.2s" }}>Taxi</span>{" "}
            <span className="tx-line" style={{ animationDelay: "0.3s" }}>Companies</span>
            <span className="tx-sub tx-line" style={{ animationDelay: "0.45s" }}>That Turns Searches Into <span className="tx-hl">Booked Rides</span></span>
          </h1>
          <p className="tx-typed" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="7" /><path d="M20 20l-4-4" /></svg>
            <span>{typed}</span><i className="tx-caret" />
          </p>
          <p className="tx-lead">Local SEO for a taxi company is about one moment: someone nearby needs a ride and picks up their phone. CodedSEO puts your cab business in the Google Map Pack, on page one for your towns and airports, and inside AI answers, with a call button they can tap in one second.</p>
          <ul className="tx-ticks">
            {HERO_POINTS.map((p) => <li key={p}>{p}</li>)}
          </ul>
          <div className="tx-cta">
            <Link className="btn" href="/free-audit">Get my free taxi SEO audit <Chevron /></Link>
            <a className="btn tx-ghost" href={CALENDLY} target="_blank" rel="noopener noreferrer">Book a 30-min call</a>
          </div>
          <div className="fr-contact tx-contact">
            <a className="fr-chip" href={telHref} aria-label={`Call ${CONTACT.phoneDisplay}`}><PhoneSvg />{CONTACT.phoneDisplay}</a>
            <a className="fr-chip wa" href={WA} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp"><WaSvg />WhatsApp</a>
          </div>
          <p className="tx-byline">Written by the <Link href="/team">CodedSEO strategy team</Link> · Updated October 2026</p>
        </div>

        <div className="tx-float" aria-hidden="true">
          <svg className="tx-badge" viewBox="0 0 120 120"><defs><path id="txc" d="M60 60m-46 0a46 46 0 1 1 92 0a46 46 0 1 1-92 0" /></defs><text><textPath href="#txc">FREE TAXI SEO AUDIT • FREE TAXI SEO AUDIT • </textPath></text></svg>
          <div className="tx-fcard tx-f1">
            <span className="fr-ov-pin"><Car size={22} strokeWidth={2.4} /></span>
            <span>
              <b><em>#1</em> Your Taxi Co.</b>
              <span className="fr-ov-rate"><strong>4.9</strong> <span className="stars">★★★★★</span> <small>(sample)</small></span>
              <small>Taxi service · Open 24 hours</small>
              <small className="g">Call · Book · Directions</small>
            </span>
          </div>
          <div className="tx-fcard tx-f2">
            <span className="tx-fbig">20</span>
            <small>Service areas you can list on Google</small>
          </div>
          <div className="tx-fcard tx-f3">
            <Plane size={18} strokeWidth={2.4} /> <span>taxi to the airport · page 1</span>
          </div>
        </div>
      </div>
    </section>
  );
}

const MARQUEE = ["Taxi near me", "Airport transfers", "Google Maps", "Review growth", "Town pages", "Click-to-call", "AI search", "Wheelchair taxis", "Corporate accounts", "24/7 rides"];

function Marquee() {
  return (
    <div className="tx-mq-wrap" aria-hidden="true">
      <div className="tx-marquee tx-mq-b">
        <div className="tx-mq-track tx-rev">
          {[...MARQUEE, ...MARQUEE].map((m, i) => <span key={i}>{m}<i>✦</i></span>)}
        </div>
      </div>
      <div className="tx-marquee">
        <div className="tx-mq-track">
          {[...MARQUEE, ...MARQUEE].map((m, i) => <span key={i}>{m}<i>✦</i></span>)}
        </div>
      </div>
    </div>
  );
}

function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [shown, setShown] = useState(value);
  useEffect(() => {
    const m = value.match(/^([\d.]+)(.*)$/);
    const el = ref.current;
    if (!m || !el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const target = parseFloat(m[1]); const suffix = m[2];
    setShown(`0${suffix}`);
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now();
      const step = (now: number) => {
        const k = Math.min((now - t0) / 1600, 1);
        setShown(`${Math.round(target * (1 - Math.pow(1 - k, 3)))}${suffix}`);
        if (k < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [value]);
  return <p className="stat-num" ref={ref}>{shown}</p>;
}

function Stats() {
  return (
    <section className="stats">
      <div className="wrap">
        <div className="stats-card">
          {STATS.map((s) => (
            <div key={s.label} className="stat">
              <CountUp value={s.value} />
              <p className="stat-label">{s.label}</p>
              <p className="stat-sub">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Why() {
  return (
    <section className="sec">
      <div className="wrap two-col">
        <div>
          <p className="eyebrow">Why taxi SEO is different</p>
          <h2>Taxi Searches Are Urgent, Local and Almost Always on a Phone</h2>
          <p className="grey">A dentist can wait a week for an appointment. A rider standing outside an airport terminal or a restaurant at midnight decides in under a minute. That is why SEO for taxi companies is less about long blog posts and more about being in the Map Pack, loading fast on mobile and making the call button the first thing people see.</p>
          <p className="grey">Most taxi companies also don&apos;t have a storefront. Google treats you as a <strong>service-area business</strong>: your address stays hidden and you rank by the areas you cover, your categories, your reviews and how well your website backs all of that up.</p>
          <Photo id={IMG_SIDE.id} alt={IMG_SIDE.alt} />
        </div>
        <div className="facts fr-facts">
          <h3>Taxi SEO at a glance</h3>
          <dl>
            {FACTS.map((f) => (
              <div key={f.k}><dt>{f.k}</dt><dd>{f.d}</dd></div>
            ))}
          </dl>
          <p className="fr-src">
            Sources: <a href="https://support.google.com/business/answer/10514137?hl=en" target="_blank" rel="noopener noreferrer nofollow">Google Business Profile Help: service-area businesses</a> · Semrush Keyword Magic Tool (US)
          </p>
        </div>
      </div>
    </section>
  );
}


function WhatIs() {
  return (
    <section className="sec soft">
      <div className="wrap">
        <div className="head">
          <p className="eyebrow">The basics</p>
          <h2>What Is Local SEO for a Taxi Company?</h2>
          <p className="grey">Local SEO for a taxi company means making your business the obvious choice when someone nearby searches for a ride. It is not one trick. It rests on three things working together, and if one is weak, the other two can&apos;t carry you.</p>
        </div>
        <div className="grid3">
          {PILLARS.map((p, i) => (
            <div key={p.t} className="icard">
              <span className="fr-step">{String(i + 1).padStart(2, "0")}</span>
              <h3>{p.t}</h3>
              <p>{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SearchTypes() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="head">
          <p className="eyebrow">Keywords</p>
          <h2>The Searches Your Riders Actually Use</h2>
          <p className="grey">Every type of search needs a different page. Replace [town] and [airport] with the places you serve and you have the start of your keyword plan.</p>
        </div>
        <div className="fr-table-wrap">
          <table className="fr-table tx-table">
            <thead><tr><th>Search type</th><th>Example searches</th><th>What ranks for it</th></tr></thead>
            <tbody>
              {SEARCH_TYPES.map((r) => (
                <tr key={r[0]}><td>{r[0]}</td><td>{r[1]}</td><td>{r[2]}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function Checklists() {
  return (
    <section className="sec soft">
      <div className="wrap">
        <div className="head">
          <p className="eyebrow">Checklists</p>
          <h2>Google Business Profile and Website Checklist for Taxi Companies</h2>
          <p className="grey">Go through both lists. Every unchecked item is a ride going to someone else.</p>
        </div>
        <div className="tx-two">
          <div className="tx-list">
            <h3>Google Business Profile</h3>
            <ul className="ticks">{GBP_CHECKLIST.map((x) => <li key={x}>{x}</li>)}</ul>
          </div>
          <div className="tx-list">
            <h3>Your website</h3>
            <ul className="ticks">{SITE_CHECKLIST.map((x) => <li key={x}>{x}</li>)}</ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Mistakes() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="head">
          <p className="eyebrow">Avoid these</p>
          <h2>5 Taxi SEO Mistakes That Cost Rides</h2>
        </div>
        <div className="tx-mistakes">
          {MISTAKES.map((m, i) => (
            <div key={m.t} className="tx-mistake">
              <span className="tx-x">{i + 1}</span>
              <div><h3>{m.t}</h3><p>{m.d}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Kpis() {
  return (
    <section className="sec pt0">
      <div className="wrap">
        <div className="head">
          <p className="eyebrow">Measuring results</p>
          <h2>How to Know Your Taxi SEO Is Working</h2>
          <p className="grey">Rankings are only part of it. These are the numbers we report every month.</p>
        </div>
        <div className="tx-kpis">
          {KPIS.map((k) => (
            <div key={k.k} className="tx-kpi"><b>{k.k}</b><span>{k.d}</span></div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Guide() {
  return (
    <section className="sec soft">
      <div className="wrap">
        <div className="head">
          <p className="eyebrow">Step-by-step guide</p>
          <h2>How to Do Local SEO for a Taxi Company in 7 Steps</h2>
          <p className="grey">Doing it yourself? Start here. These are the same steps we follow for every taxi and cab client, in the order that brings rides fastest.</p>
        </div>
        <ol className="tx-steps">
          {STEPS.map((s, i) => (
            <li key={s.t}>
              <span className="tx-num">{i + 1}</span>
              <div>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Challenges() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="head">
          <p className="eyebrow">Sound familiar?</p>
          <h2>Why Taxi Companies Lose Rides on Google</h2>
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
    <section className="sec soft">
      <div className="wrap">
        <div className="head">
          <p className="eyebrow">Taxi SEO services</p>
          <h2>SEO for Taxi Companies, Done for You</h2>
          <p className="grey">Want a taxi SEO expert to handle it? Pick one service or combine them. Every plan starts with the same free audit. See all <Link href="/services">SEO services</Link>.</p>
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

function Segments() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="head">
          <p className="eyebrow">Who we help</p>
          <h2>Taxi and Transport Businesses We Work With</h2>
        </div>
        <div className="ind-grid tx-seg">
          {SEGMENTS.map((s) => (
            <div key={s.t} className="ind fr-ind">
              <Ic icon={s.icon} />
              <h3>{s.t}</h3>
              <p>{s.d}</p>
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
          <h2>Taxi SEO Packages With Clear Monthly Prices</h2>
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
        <div className="tx-ctaimg">
          <img className="tx-ctaimg-bg" src={UNSPLASH(IMG_NIGHT.id, 1600)} alt="" width={1600} height={900} loading="lazy" decoding="async" />
          <div className="tx-ctaimg-in">
            <p className="cta-eyebrow">Free, no obligation</p>
            <h2>See Where Your Taxi Company Ranks Today</h2>
            <p>Our free audit checks your Map Pack position across the towns you serve, your Google Business Profile and the three competitors taking your rides, then gives you the three fixes that matter most.</p>
            <div className="cta-btns">
              <Link className="btn" href="/free-audit">Get my free audit <Chevron /></Link>
              <a className="btn outline" href={WA} target="_blank" rel="noopener noreferrer">WhatsApp us</a>
            </div>
            <ul className="cta-trust"><li>No contracts</li><li>Delivered in 48 hours</li><li>Written by a real strategist</li></ul>
          </div>
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
          <h2>What Happens After You Hire Us</h2>
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

function Compare() {
  return (
    <section className="sec soft">
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

function Reading({ posts }: { posts: RelatedPost[] }) {
  if (!posts.length) return null;
  return (
    <section className="sec">
      <div className="wrap">
        <div className="head">
          <p className="eyebrow">From the CodedSEO blog</p>
          <h2>Local SEO Guides</h2>
          <p className="grey">Practical guides from our team. See every article on the <Link href="/blog">CodedSEO blog</Link>.</p>
        </div>
        <div className="fr-posts">
          {posts.map((p) => (
            <Link key={p.slug} className="fr-post" href={`/blog/${p.slug}`}>
              <div className="fr-post-img">
                {p.image ? <img src={p.image} alt={p.imageAlt} width={720} height={450} loading="lazy" decoding="async" /> : <span aria-hidden="true">{p.category}</span>}
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
          <h2>Taxi SEO Questions, Answered</h2>
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
            <a className="fr-chip" href={telHref}><PhoneSvg />Call</a>
            <a className="fr-chip wa" href={WA} target="_blank" rel="noopener noreferrer"><WaSvg />WhatsApp</a>
            <a className="fr-chip" href={`mailto:${EMAIL}`}><MailSvg />Email</a>
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
          <h2>Ready for More Rides From Google?</h2>
          <p>Get a free audit and see exactly what&apos;s keeping your taxi company out of the Map Pack.</p>
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

const REVEAL = ".tx-page .head, .tx-page .icard, .tx-page .tx-steps li, .tx-page .fr-table-wrap, .tx-page .pack, .tx-page .tx-mistake, .tx-page .tx-kpi, .tx-page .tx-list, .tx-page .ind, .tx-page .facts, .tx-page .fr-photo, .tx-page .fr-post";

function useReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const els = Array.from(document.querySelectorAll<HTMLElement>(REVEAL)).filter((el) => el.getBoundingClientRect().top > window.innerHeight * 0.9);
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("tx-in"); io.unobserve(e.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px" });
    els.forEach((el, i) => { el.classList.add("tx-rv"); el.style.transitionDelay = `${(i % 3) * 80}ms`; io.observe(el); });
    return () => io.disconnect();
  }, []);
}

export default function TaxiHome({ posts = [] }: { posts?: RelatedPost[] }) {
  useReveal();
  return (
    <>
      <SiteHeader />
      <div className="isu tx-page">
        <main>
          <Hero />
          <Marquee />
          <Stats />
          <WhatIs />
          <Why />
          <SearchTypes />
          <Guide />
          <Checklists />
          <Challenges />
          <Mistakes />
          <Services />
          <Segments />
          <Packages />
          <CtaBand />
          <Process />
          <Kpis />
          <Compare />
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
