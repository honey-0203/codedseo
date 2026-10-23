"use client";

// Food Delivery page – restaurant-style design (cream, gold, dark photo bands).
// Content config.ts se aata hai; layout yahan alag hai taaki page unique lage.

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Header as SiteHeader } from "@/components/header";
import { Footer as SiteFooter } from "@/components/footer";
import { CONTACT, telHref, whatsappHref } from "@/lib/contact";
import { Rich } from "@/lib/rich";
import { RelatedIndustries } from "@/components/related-industries";
import type { RelatedPost } from "@/lib/related-posts";
import { CFG } from "./config";
import "./food.css";

const U = (id: string, w: number) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;

// Free Unsplash photos (unsplash.com/s/photos/foods, /dark-food, /chef)
const IMG = {
  hero: { id: "photo-1555939594-58d7cb561ad1", alt: "Grilled meat and vegetables served on a dark table" },
  rider: CFG.heroImg,
  phone: CFG.sideImg,
  bandL: { id: "photo-1677175183792-e6a9b8b14305", alt: "Pizza on a wooden cutting board" },
  bandC: { id: "photo-1683827449087-ccf5a9e6283c", alt: "Plate of pasta with bacon" },
  bandR: { id: "photo-1611309454921-16cef3438ee0", alt: "Burger with lettuce and tomato" },
  table: { id: "photo-1683260644159-e8423e0fb44f", alt: "" },
  chef: { id: "photo-1589293053074-e5499abade96", alt: "Chef in a white shirt cooking at the stove" },
  grid: [
    { id: "photo-1625604087024-7fb428fc4626", alt: "Grilled meat on a steel tray" },
    { id: "photo-1546069901-ba9599a7e63c", alt: "Bowl of vegetables and meat" },
    { id: "photo-1467003909585-2f8a72700288", alt: "Salmon fillet with salsa" },
    { id: "photo-1512621776951-a57141f2eefd", alt: "Bowl of vegetable salad" },
    { id: "photo-1569718212165-3a8278d5f624", alt: "Bowl of ramen with egg" },
    { id: "photo-1473093295043-cdd812d0e601", alt: "Pesto pasta with sliced tomatoes" },
  ],
  dark: { id: "photo-1625604086816-4bfaf603e842", alt: "" },
};

const STATS = [
  { value: "1M+", label: "Keywords ranked" },
  { value: "100+", label: "Businesses served" },
  { value: "98%", label: "Client retention" },
  { value: "90-day", label: "Results guarantee" },
];

const Chevron = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg>
);
const PhoneSvg = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/></svg>
);
const WaSvg = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4c1.7.7 2.4.8 3.2.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3z"/></svg>
);
const MailSvg = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>
);
const Divider = () => (
  <svg className="fd-div" width="90" height="12" viewBox="0 0 90 12" aria-hidden="true"><path d="M0 6h34M56 6h34" stroke="currentColor" strokeWidth="1" /><path d="M45 1l5 5-5 5-5-5z" fill="currentColor" /></svg>
);

function Head({ script, title, intro, light }: { script: string; title: string; intro?: React.ReactNode; light?: boolean }) {
  return (
    <div className={`fd-head ${light ? "light" : ""}`}>
      <p className="fd-script">{script}</p>
      <h2>{title}</h2>
      <Divider />
      {intro && <p className="fd-intro">{intro}</p>}
    </div>
  );
}

function Img({ img, w, className, sizes }: { img: { id: string; alt: string }; w: number; className?: string; sizes?: string }) {
  return (
    <img className={className} src={U(img.id, w)} srcSet={`${U(img.id, Math.round(w / 2))} ${Math.round(w / 2)}w, ${U(img.id, w)} ${w}w`} sizes={sizes ?? "(max-width: 900px) 100vw, 50vw"} alt={img.alt} width={w} height={Math.round(w * 0.66)} loading="lazy" decoding="async" />
  );
}

function CtaStrip({ title, text, wa, cta = "Get my free audit" }: { title: string; text: string; wa: string; cta?: string }) {
  return (
    <aside className="fd-strip fd-rv" aria-label={title}>
      <div><p className="fd-strip-t">{title}</p><p>{text}</p></div>
      <div className="fd-strip-btns">
        <Link className="fd-btn" href="/free-audit">{cta} <Chevron /></Link>
        <a className="fd-chip" href={whatsappHref(wa)} target="_blank" rel="noopener noreferrer"><WaSvg />WhatsApp</a>
        <a className="fd-chip" href={telHref}><PhoneSvg />Call</a>
      </div>
    </aside>
  );
}

function useTyping(words: string[]) {
  const [text, setText] = useState(words[0]);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let w = 0, i = words[0].length, del = true, t: ReturnType<typeof setTimeout>;
    const tick = () => {
      if (del) { i--; if (i <= 0) { del = false; w = (w + 1) % words.length; } }
      else { i++; if (i >= words[w].length) { del = true; setText(words[w]); t = setTimeout(tick, 1800); return; } }
      setText(words[w].slice(0, Math.max(i, 0)));
      t = setTimeout(tick, del ? 45 : 85);
    };
    t = setTimeout(tick, 1800);
    return () => clearTimeout(t);
  }, [words]);
  return text;
}

function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [shown, setShown] = useState(value);
  useEffect(() => {
    const m = value.match(/^([\d.]+)(.*)$/);
    const el = ref.current;
    if (!m || !el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const target = parseFloat(m[1]); const suffix = m[2];
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now();
      const step = (now: number) => {
        const k = Math.min((now - t0) / 1500, 1);
        setShown(`${Math.round(target * (1 - Math.pow(1 - k, 3)))}${suffix}`);
        if (k < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [value]);
  return <span ref={ref}>{shown}</span>;
}

function useReveal() {
  useEffect(() => {
    const set = () => {
      const h = document.querySelector("header")?.getBoundingClientRect().height;
      if (h) document.documentElement.style.setProperty("--fd-hdr", `${Math.round(h)}px`);
    };
    set();
    window.addEventListener("resize", set);
    let io: IntersectionObserver | undefined;
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const els = Array.from(document.querySelectorAll<HTMLElement>(".fd .fd-rv")).filter((el) => el.getBoundingClientRect().top > window.innerHeight * 0.9);
      io = new IntersectionObserver((entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("fd-in"); io?.unobserve(e.target); } }), { rootMargin: "0px 0px -8% 0px" });
      els.forEach((el, i) => { el.classList.add("fd-hide"); el.style.transitionDelay = `${(i % 3) * 90}ms`; io?.observe(el); });
    }
    return () => { window.removeEventListener("resize", set); io?.disconnect(); };
  }, []);
}

export default function FoodHome({ posts = [] }: { posts?: RelatedPost[] }) {
  useReveal();
  const c = CFG;
  const typed = useTyping(c.rotate);
  const WA = whatsappHref(c.wa);
  const [open, setOpen] = useState(0);
  const segL = c.segments.items.slice(0, 3);
  const segR = c.segments.items.slice(3);
  const PACKAGES = [
    { name: "Starter", price: "$199", inr: "≈ ₹16,500 per month", for: c.packageFor[0], items: ["5 target keywords", "Google Business Profile setup", "Technical SEO audit", "Review request system", "Monthly reporting"], href: "/free-audit", cta: "Start with a free audit" },
    { name: "Growth", price: "$499", inr: "≈ ₹41,500 per month", for: c.packageFor[1], items: ["15 target keywords", "Menu, dish and area pages", "Local citations and links", "Call and order tracking", "Weekly reporting"], href: "/free-audit", cta: "Get my free audit", pop: true },
    { name: "Enterprise", price: "Custom", inr: "Quoted after the audit", for: c.packageFor[2], items: ["Unlimited keywords", "Multi-location SEO", "Profile management per location", "Link building (50+ per month)", "Dedicated account team"], href: "/contact", cta: "Talk to sales" },
  ];
  const COMPARE: [string, string, string][] = [
    ["Focus", c.compareFocus, "Generic local SEO"],
    ["Pricing", "Published plans from $199/month", "\"Call for a quote\""],
    ["Contracts", "Month to month", "6–12 month lock-in"],
    c.compareRow,
    ["Reporting", "Calls, orders and a live change log", "Rank screenshots"],
    ["Ownership", "Your profile, site and data stay yours", "Locked in agency accounts"],
  ];

  return (
    <>
      <SiteHeader />
      <div className="fd">
        <main>
          {/* HERO – full photo, centred like a restaurant site */}
          <section className="fd-hero">
            <img className="fd-hero-bg" src={U(IMG.hero.id, 1800)} srcSet={`${U(IMG.hero.id, 900)} 900w, ${U(IMG.hero.id, 1400)} 1400w, ${U(IMG.hero.id, 1800)} 1800w`} sizes="100vw" alt={IMG.hero.alt} width={1800} height={1100} fetchPriority="high" decoding="async" />
            <div className="fd-hero-shade" aria-hidden="true" />
            <div className="fd-wrap fd-hero-in">
              <nav className="fd-crumb" aria-label="Breadcrumb"><Link href="/">Home</Link> <span>/</span> <Link href="/services">SEO Services</Link> <span>/</span> <span>{c.crumb}</span></nav>
              <p className="fd-script fd-up" style={{ animationDelay: ".05s" }}>More direct orders, fewer app fees</p>
              <h1 className="fd-up" style={{ animationDelay: ".18s" }}>Food Delivery Service <span>SEO</span> Company</h1>
              <p className="fd-typed fd-up" style={{ animationDelay: ".3s" }} aria-hidden="true">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="7" /><path d="M20 20l-4-4" /></svg>
                <span>{typed}</span><i className="fd-caret" />
              </p>
              <p className="fd-lead fd-up" style={{ animationDelay: ".4s" }}>{c.lead}</p>
              <div className="fd-hero-cta fd-up" style={{ animationDelay: ".5s" }}>
                <Link className="fd-btn" href="/free-audit">{c.auditCta} <Chevron /></Link>
                <a className="fd-btn ghost" href={CONTACT.calendly} target="_blank" rel="noopener noreferrer">Book a 30-min call</a>
              </div>
              <div className="fd-hero-contact fd-up" style={{ animationDelay: ".6s" }}>
                <a href={telHref}><PhoneSvg />{CONTACT.phoneDisplay}</a>
                <a href={WA} target="_blank" rel="noopener noreferrer"><WaSvg />WhatsApp</a>
              </div>
              <ul className="fd-hero-ticks fd-up" style={{ animationDelay: ".7s" }}>{c.heroPoints.map((p) => <li key={p}>{p}</li>)}</ul>
              <p className="fd-byline">Written by the <Link href="/team">CodedSEO strategy team</Link> · Updated October 2026</p>
            </div>
            <a className="fd-scroll" href="#fd-start" aria-label="Scroll to content"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /><path d="M6 4l6 6 6-6" opacity=".5" /></svg></a>
          </section>

          {/* STATS */}
          <section className="fd-stats" id="fd-start"><div className="fd-wrap fd-stats-in">
            {STATS.map((s) => <div key={s.label}><b><CountUp value={s.value} /></b><span>{s.label}</span></div>)}
          </div></section>

          {/* ABOUT 1 – image right with offset frame */}
          <section className="fd-sec"><div className="fd-wrap fd-split">
            <div className="fd-split-copy fd-rv">
              <p className="fd-script">The basics</p>
              <h2>{c.whatIs.title}</h2>
              <Divider />
              <p><Rich text={c.whatIs.intro} /></p>
              <ol className="fd-pillars">{c.whatIs.pillars.map((p, i) => <li key={p.t}><span>{String(i + 1).padStart(2, "0")}</span><div><h3>{p.t}</h3><p><Rich text={p.d} /></p></div></li>)}</ol>
              <Link className="fd-btn sm" href="/services">Our SEO services <Chevron /></Link>
            </div>
            <figure className="fd-frame fd-rv"><Img img={IMG.rider} w={1100} /></figure>
          </div></section>

          {/* ABOUT 2 – image left */}
          <section className="fd-sec pt0"><div className="fd-wrap fd-split rev">
            <figure className="fd-frame left fd-rv"><Img img={IMG.phone} w={1100} /></figure>
            <div className="fd-split-copy fd-rv">
              <p className="fd-script">{c.why.eyebrow}</p>
              <h2>{c.why.title}</h2>
              <Divider />
              {c.why.paras.map((p) => <p key={p.slice(0, 24)}><Rich text={p} /></p>)}
              <Link className="fd-btn sm" href="/free-audit">Get my free audit <Chevron /></Link>
            </div>
          </div></section>

          {/* 3-PHOTO BAND with facts */}
          <section className="fd-band3">
            <Img img={IMG.bandL} w={700} className="fd-band3-side" sizes="20vw" />
            <div className="fd-band3-mid">
              <Img img={IMG.bandC} w={1400} className="fd-band3-bg" sizes="60vw" />
              <div className="fd-band3-in">
                <p className="fd-script">{c.factsTitle}</p>
                <h2>Four Numbers Worth Knowing</h2>
                <dl>{c.facts.map((f) => <div key={f.k}><dt>{f.k}</dt><dd>{f.d}</dd></div>)}</dl>
              </div>
            </div>
            <Img img={IMG.bandR} w={700} className="fd-band3-side" sizes="20vw" />
          </section>

          {/* CHALLENGES – bordered icon cards */}
          <section className="fd-sec"><div className="fd-wrap">
            <Head script="Sound familiar?" title={c.challengesTitle} />
            <div className="fd-cards">{c.challenges.map((x) => { const I = x.icon; return (
              <div key={x.t} className="fd-card fd-rv"><span className="fd-ic"><I size={30} strokeWidth={1.4} /></span><h3>{x.t}</h3><p><Rich text={x.d} /></p></div>
            ); })}</div>
          </div></section>

          {/* DASHED OFFER BAND */}
          <section className="fd-offer">
            <Img img={IMG.table} w={1800} className="fd-offer-bg" sizes="100vw" />
            <div className="fd-offer-in fd-rv">
              <p className="fd-script">Free, no obligation</p>
              <div className="fd-dashed">
                <p className="fd-offer-big">Free Delivery SEO Audit</p>
                <p>{c.ctaBand.text}</p>
              </div>
              <p className="fd-script sm">Delivered in 48 hours</p>
              <div className="fd-offer-btns"><Link className="fd-btn" href="/free-audit">Get my free audit <Chevron /></Link><a className="fd-btn ghost" href={WA} target="_blank" rel="noopener noreferrer"><WaSvg /> WhatsApp us</a></div>
            </div>
          </section>

          {/* 7 STEPS */}
          <section className="fd-sec"><div className="fd-wrap">
            <Head script="Step-by-step guide" title={c.guide.title} intro={c.guide.intro} />
            <ol className="fd-steps">{c.guide.steps.map((s, i) => <li key={s.t} className="fd-rv"><span className="fd-num">{i + 1}</span><div><h3>{s.t}</h3><p><Rich text={s.d} /></p></div></li>)}</ol>
            <CtaStrip {...c.ctas[0]} />
          </div></section>

          {/* SERVICES */}
          <section className="fd-sec cream"><div className="fd-wrap">
            <Head script="Our services" title={c.services.title} intro={<>{c.services.intro} See all <Link href="/services">SEO services</Link>.</>} />
            <div className="fd-cards">{c.services.items.map((s) => { const I = s.icon; return (
              <Link key={s.t} href={s.href} className="fd-card link fd-rv"><span className="fd-ic"><I size={30} strokeWidth={1.4} /></span><h3>{s.t}</h3><p><Rich text={s.d} /></p><span className="fd-more">Learn more <Chevron /></span></Link>
            ); })}</div>
          </div></section>

          {/* PACKAGES */}
          <section className="fd-sec" id="seo-packages"><div className="fd-wrap">
            <Head script="Pricing" title={c.packagesTitle} intro="No setup fees, no long-term contracts. Every package includes the free audit and our 90-day results guarantee." />
            <div className="fd-packs">{PACKAGES.map((p) => (
              <div key={p.name} className={`fd-pack fd-rv ${p.pop ? "pop" : ""}`}>
                {p.pop && <span className="fd-pack-tag">Most popular</span>}
                <h3>{p.name}</h3><p className="fd-pack-for">{p.for}</p>
                <p className="fd-pack-price">{p.price}{p.price !== "Custom" && <small> / month</small>}</p>
                <p className="fd-pack-inr">{p.inr}</p>
                <ul>{p.items.map((it) => <li key={it}>{it}</li>)}</ul>
                <Link className={`fd-btn ${p.pop ? "" : "line"}`} href={p.href}>{p.cta} <Chevron /></Link>
              </div>))}
            </div>
          </div></section>

          {/* SEGMENTS – chef in the middle */}
          <section className="fd-sec cream"><div className="fd-wrap">
            <Head script="Who we help" title={c.segments.title} />
            <div className="fd-chef">
              <ul className="fd-chef-col left">{segL.map((s) => { const I = s.icon; return <li key={s.t} className="fd-rv"><div><h3>{s.t}</h3><p><Rich text={s.d} /></p></div><span className="fd-ic sm"><I size={24} strokeWidth={1.5} /></span></li>; })}</ul>
              <figure className="fd-chef-img fd-rv"><Img img={IMG.chef} w={800} sizes="(max-width: 900px) 80vw, 340px" /></figure>
              <ul className="fd-chef-col">{segR.map((s) => { const I = s.icon; return <li key={s.t} className="fd-rv"><span className="fd-ic sm"><I size={24} strokeWidth={1.5} /></span><div><h3>{s.t}</h3><p><Rich text={s.d} /></p></div></li>; })}</ul>
            </div>
          </div></section>

          {/* SEARCHES – cream panel + photo grid */}
          <section className="fd-menu">
            <div className="fd-menu-panel fd-rv">
              <p className="fd-script">Keywords</p>
              <h2>{c.searches.title}</h2>
              <Divider />
              <p>{c.searches.intro}</p>
              <a className="fd-btn sm" href="#fd-search-table">See the keyword plan <Chevron /></a>
            </div>
            <div className="fd-menu-grid">{IMG.grid.map((g, i) => (
              <figure key={g.id}><Img img={g} w={600} sizes="(max-width: 900px) 50vw, 22vw" /><figcaption>{c.searches.rows[i][0]}</figcaption></figure>
            ))}</div>
          </section>
          <section className="fd-sec cream pt-sm" id="fd-search-table"><div className="fd-wrap">
            <div className="fd-table-wrap fd-rv"><table className="fd-table"><thead><tr><th>Search type</th><th>Example searches</th><th>What ranks for it</th></tr></thead>
              <tbody>{c.searches.rows.map((r) => <tr key={r[0]}><td>{r[0]}</td><td>{r[1]}</td><td>{r[2]}</td></tr>)}</tbody></table></div>
          </div></section>

          {/* CHECKLISTS */}
          <section className="fd-sec"><div className="fd-wrap">
            <Head script="Checklists" title={c.checklists.title} intro={c.checklists.intro} />
            <div className="fd-two">{[c.checklists.left, c.checklists.right].map((l) => (
              <div key={l.t} className="fd-list fd-rv"><h3>{l.t}</h3><ul>{l.items.map((x) => <li key={x}><Rich text={x} /></li>)}</ul></div>
            ))}</div>
          </div></section>

          {/* MISTAKES */}
          <section className="fd-sec cream"><div className="fd-wrap">
            <Head script="Avoid these" title={c.mistakesTitle} />
            <div className="fd-mistakes">{c.mistakes.map((m, i) => <div key={m.t} className="fd-mistake fd-rv"><span>{String(i + 1).padStart(2, "0")}</span><h3>{m.t}</h3><p><Rich text={m.d} /></p></div>)}</div>
            <CtaStrip {...c.ctas[1]} />
          </div></section>

          {/* DARK BAND */}
          <section className="fd-darkband">
            <Img img={IMG.dark} w={1800} className="fd-offer-bg" sizes="100vw" />
            <div className="fd-darkband-in fd-rv">
              <h2>{c.ctaBand.title}</h2>
              <p className="fd-script">Talk to a strategist, not a salesperson</p>
              <div className="fd-offer-btns"><Link className="fd-btn" href="/free-audit">Get my free audit <Chevron /></Link><a className="fd-btn ghost" href={telHref}><PhoneSvg /> {CONTACT.phoneDisplay}</a></div>
            </div>
          </section>

          {/* PROCESS + KPIs */}
          <section className="fd-sec"><div className="fd-wrap">
            <Head script="Your first 90 days" title="What Happens After You Hire Us" />
            <div className="fd-process">{c.process.map((p, i) => <div key={p.t} className="fd-rv"><span>{String(i + 1).padStart(2, "0")}</span><h3>{p.t}</h3><p><Rich text={p.d} /></p></div>)}</div>
          </div></section>
          <section className="fd-sec pt0"><div className="fd-wrap">
            <Head script="Measuring results" title={c.kpisTitle} intro="Rankings are only part of it. These are the numbers we report every month." />
            <div className="fd-kpis">{c.kpis.map((k) => <div key={k.k} className="fd-rv"><b>{k.k}</b><span>{k.d}</span></div>)}</div>
          </div></section>

          {/* COMPARE */}
          <section className="fd-sec cream"><div className="fd-wrap">
            <Head script="Why CodedSEO" title="How We're Different From a Typical SEO Agency" intro={<>More reasons on our <Link href="/why-choose-us">why choose us</Link> page.</>} />
            <div className="fd-table-wrap fd-rv"><table className="fd-table"><thead><tr><th>What matters</th><th>CodedSEO</th><th>Typical agency</th></tr></thead>
              <tbody>{COMPARE.map((r) => <tr key={r[0]}><td>{r[0]}</td><td>{r[1]}</td><td>{r[2]}</td></tr>)}</tbody></table></div>
            <CtaStrip {...c.ctas[2]} />
          </div></section>

          {/* BLOGS (real, from Sanity) */}
          {posts.length > 0 && (
            <section className="fd-sec"><div className="fd-wrap">
              <Head script="Latest from our blog" title="Local SEO Guides" intro={<>Practical guides from our team. See every article on the <Link href="/blog">CodedSEO blog</Link>.</>} />
              <div className="fd-posts">{posts.map((p) => (
                <Link key={p.slug} className="fd-post fd-rv" href={`/blog/${p.slug}`}>
                  <div className="fd-post-img">{p.image ? <img src={p.image} alt={p.imageAlt} width={1200} height={630} loading="lazy" decoding="async" /> : <span aria-hidden="true">{p.category}</span>}</div>
                  <div className="fd-post-body"><span className="fd-tag">{p.category}</span><h3>{p.title}</h3>{p.excerpt && <p>{p.excerpt}</p>}<span className="fd-more">Read article <Chevron /></span></div>
                </Link>))}
              </div>
            </div></section>
          )}

          <RelatedIndustries current="/food-delivery-service-seo-company" />
          {/* FAQ */}
          <section className="fd-sec cream"><div className="fd-wrap narrow">
            <Head script="FAQ" title={c.faqTitle} />
            <div className="fd-faq">{c.faqs.map((f, i) => (
              <div key={f.q} className={`fd-faq-item ${open === i ? "open" : ""}`}>
                <h3><button type="button" aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>{f.q}<span>{open === i ? "−" : "+"}</span></button></h3>
                <div className="fd-faq-body" hidden={open !== i}><Rich text={f.a} /></div>
              </div>))}
            </div>
            <div className="fd-help">
              <div><h3>Still have questions?</h3><p>Talk to a strategist on call, WhatsApp or email.</p></div>
              <div className="fd-strip-btns">
                <a className="fd-chip" href={telHref}><PhoneSvg />Call</a>
                <a className="fd-chip" href={WA} target="_blank" rel="noopener noreferrer"><WaSvg />WhatsApp</a>
                <a className="fd-chip" href={`mailto:${CONTACT.email}`}><MailSvg />Email</a>
              </div>
            </div>
          </div></section>

          {/* FINAL */}
          <section className="fd-final"><div className="fd-wrap fd-final-in">
            <div><p className="fd-script">Let&apos;s get cooking</p><h2>{c.final.title}</h2><p>{c.final.text}</p></div>
            <div className="fd-offer-btns"><Link className="fd-btn" href="/free-audit">Get my free audit <Chevron /></Link><a className="fd-btn ghost" href={telHref}>Call {CONTACT.phoneDisplay}</a></div>
          </div></section>
        </main>

        <div className="fd-sticky" role="region" aria-label="Quick contact">
          <a href={telHref}>Call now</a>
          <a href={WA} target="_blank" rel="noopener noreferrer">WhatsApp</a>
          <Link href="/free-audit" className="gold">Free audit</Link>
        </div>
      </div>
      <SiteFooter />
    </>
  );
}
