"use client";

// Cafe page – layout ideas from a cafe/restaurant theme (full photo hero with a bar card,
// photo cards, round-icon grid, dark tabbed gallery) but written and styled as a
// CodedSEO agency page: Map Pack sample, audit bar, packages, KPIs. CodedSEO colours.

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Header as SiteHeader } from "@/components/header";
import { Footer as SiteFooter } from "@/components/footer";
import { CONTACT, telHref, whatsappHref } from "@/lib/contact";
import type { RelatedPost } from "@/lib/related-posts";
import { CFG } from "./config";
import "./cafe.css";

const U = (id: string, w: number) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;

// Free Unsplash photos (unsplash.com/s/photos/coffeshop, /cafe-exterior)
const IMG = {
  hero: { id: "photo-1768608194953-25925bc0c642", alt: "Wet street outside a cafe at night" },
  pillars: [
    { id: "photo-1600093463592-8e36ae95ef56", alt: "Rustic cafe interior with wooden tables and hanging plants" },
    { id: "photo-1598959652545-c0230cdbb01f", alt: "Wooden framed cafe menu board" },
    { id: "photo-1542372147193-a7aca54189cd", alt: "Latte, croissant and a book on a cafe table" },
  ],
  beans: { id: "photo-1447933601403-0c6688de566e", alt: "" },
  gallery: [
    { id: "photo-1495474472287-4d71bcdd2085", alt: "Three people holding coffee cups" },
    { id: "photo-1512568400610-62da28bc8a13", alt: "Latte art in a cup seen from above" },
    { id: "photo-1518739745383-0ef26e9dd7fd", alt: "People sitting inside a cafe" },
    { id: "photo-1556742526-795a8eac090e", alt: "Cafe latte on a table" },
    { id: "photo-1569096651661-820d0de8b4ab", alt: "Cafe patio tables in front of an open glass storefront" },
  ],
  side: CFG.sideImg,
  band: { id: "photo-1497935586351-b67a49e012bf", alt: "" },
};

const STATS = [
  { value: "1M+", label: "Keywords ranked" },
  { value: "100+", label: "Businesses served" },
  { value: "98%", label: "Client retention" },
  { value: "90-day", label: "Results guarantee" },
];

// Places a cafe needs to be found – we optimise listings and signals on these.
const PLATFORMS = ["Google Search", "Google Maps", "Apple Maps", "Bing Places", "Yelp", "Tripadvisor", "ChatGPT & AI Overviews"];

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
const Tick = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true"><path d="M5 12l5 5L20 7" /></svg>
);
const PinSvg = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" /></svg>
);

function Head({ eyebrow, title, intro, light }: { eyebrow: string; title: string; intro?: React.ReactNode; light?: boolean }) {
  return (
    <div className={`cf-head ${light ? "light" : ""}`}>
      <p className="cf-eyebrow"><span aria-hidden="true" />{eyebrow}<span aria-hidden="true" /></p>
      <h2>{title}</h2>
      {intro && <p className="cf-intro">{intro}</p>}
    </div>
  );
}

function Img({ img, w, className, sizes, eager }: { img: { id: string; alt: string }; w: number; className?: string; sizes?: string; eager?: boolean }) {
  const half = Math.round(w / 2);
  return (
    <img className={className} src={U(img.id, w)} srcSet={`${U(img.id, half)} ${half}w, ${U(img.id, w)} ${w}w`} sizes={sizes ?? "(max-width: 900px) 100vw, 50vw"} alt={img.alt} width={w} height={Math.round(w * 0.66)} loading={eager ? "eager" : "lazy"} fetchPriority={eager ? "high" : undefined} decoding="async" />
  );
}

function CtaStrip({ title, text, wa, cta = "Get my free audit" }: { title: string; text: string; wa: string; cta?: string }) {
  return (
    <aside className="cf-strip cf-rv" aria-label={title}>
      <div><p className="cf-strip-t">{title}</p><p>{text}</p></div>
      <div className="cf-btns">
        <Link className="cf-btn" href="/free-audit">{cta} <Chevron /></Link>
        <a className="cf-chip dark" href={whatsappHref(wa)} target="_blank" rel="noopener noreferrer"><WaSvg />WhatsApp</a>
        <a className="cf-chip dark" href={telHref}><PhoneSvg />Call</a>
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
      if (h) document.documentElement.style.setProperty("--cf-hdr", `${Math.round(h)}px`);
    };
    set();
    window.addEventListener("resize", set);
    let io: IntersectionObserver | undefined;
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const els = Array.from(document.querySelectorAll<HTMLElement>(".cf .cf-rv")).filter((el) => el.getBoundingClientRect().top > window.innerHeight * 0.9);
      io = new IntersectionObserver((entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("cf-in"); io?.unobserve(e.target); } }), { rootMargin: "0px 0px -8% 0px" });
      els.forEach((el, i) => { el.classList.add("cf-hide"); el.style.transitionDelay = `${(i % 4) * 80}ms`; io?.observe(el); });
    }
    return () => { window.removeEventListener("resize", set); io?.disconnect(); };
  }, []);
}

export default function CafeHome({ posts = [] }: { posts?: RelatedPost[] }) {
  useReveal();
  const c = CFG;
  const typed = useTyping(c.rotate);
  const WA = whatsappHref(c.wa);
  const [open, setOpen] = useState(0);
  const [tab, setTab] = useState(0);
  const PACKAGES = [
    { name: "Starter", price: "$199", inr: "≈ ₹16,500 per month", for: c.packageFor[0], items: ["5 target keywords", "Google Business Profile setup", "Technical SEO audit", "Review request system", "Monthly reporting"], href: "/free-audit", cta: "Start with a free audit" },
    { name: "Growth", price: "$499", inr: "≈ ₹41,500 per month", for: c.packageFor[1], items: ["15 target keywords", "Menu, brunch and location pages", "Local citations and links", "Call and direction tracking", "Weekly reporting"], href: "/free-audit", cta: "Get my free audit", pop: true },
    { name: "Enterprise", price: "Custom", inr: "Quoted after the audit", for: c.packageFor[2], items: ["Unlimited keywords", "Multi-location SEO", "Profile management per location", "Link building (50+ per month)", "Dedicated account team"], href: "/contact", cta: "Talk to sales" },
  ];
  const COMPARE: [string, string, string][] = [
    ["Focus", c.compareFocus, "Generic local SEO"],
    ["Pricing", "Published plans from $199/month", "\"Call for a quote\""],
    ["Contracts", "Month to month", "6–12 month lock-in"],
    c.compareRow,
    ["Reporting", "Calls, directions and a live change log", "Rank screenshots"],
    ["Ownership", "Your profile, site and data stay yours", "Locked in agency accounts"],
  ];
  const row = c.searches.rows[tab];

  return (
    <>
      <SiteHeader />
      <div className="cf">
        <main>
          {/* HERO – full photo + Map Pack sample */}
          <section className="cf-hero">
            <Img img={IMG.hero} w={1800} className="cf-hero-bg" sizes="100vw" eager />
            <div className="cf-hero-shade" aria-hidden="true" />
            <div className="cf-wrap cf-hero-grid">
              <div className="cf-hero-copy">
                <nav className="cf-crumb" aria-label="Breadcrumb"><Link href="/">Home</Link> › <Link href="/services">SEO Services</Link> › <span>{c.crumb}</span></nav>
                <p className="cf-kicker cf-up" style={{ animationDelay: ".05s" }}>SEO for cafes &amp; coffee shops</p>
                <h1 className="cf-up" style={{ animationDelay: ".15s" }}>Cafe SEO <span>Marketing</span> Agency</h1>
                <p className="cf-sub cf-up" style={{ animationDelay: ".25s" }}>{c.h1.sub} <b>{c.h1.subHl}</b></p>
                <p className="cf-lead cf-up" style={{ animationDelay: ".35s" }}>{c.lead}</p>
                <div className="cf-btns cf-up" style={{ animationDelay: ".45s" }}>
                  <Link className="cf-btn" href="/free-audit">{c.auditCta} <Chevron /></Link>
                  <a className="cf-btn ghost" href={CONTACT.calendly} target="_blank" rel="noopener noreferrer">Book a 30-min call</a>
                </div>
                <p className="cf-byline">Written by the <Link href="/team">CodedSEO strategy team</Link> · Updated October 2026</p>
              </div>
              <div className="cf-maps cf-up" style={{ animationDelay: ".55s" }} aria-hidden="true">
                <div className="cf-maps-bar"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="7" /><path d="M20 20l-4-4" /></svg><span>{typed}</span><i className="cf-caret" /></div>
                <div className="cf-maps-map"><span className="p1"><PinSvg size={26} /></span><span className="p2"><PinSvg size={20} /></span><span className="p3"><PinSvg size={20} /></span></div>
                <ul className="cf-maps-list">
                  <li className="me"><b>1</b><div><strong>Your Cafe</strong><small>4.8 ★★★★★ · Coffee shop · Open now</small><small className="g">Menu · Directions · Call</small></div></li>
                  <li><b>2</b><div><strong>Cafe nearby</strong><small>Coffee shop · 0.4 mi</small></div></li>
                  <li><b>3</b><div><strong>Chain coffee shop</strong><small>Coffee shop · 0.7 mi</small></div></li>
                </ul>
                <p className="cf-maps-note">Sample Map Pack: where we aim to put your cafe</p>
              </div>
            </div>
          </section>

          {/* AUDIT BAR – overlaps hero */}
          <div className="cf-wrap"><div className="cf-bar">
            <div><small>Customers search</small><b>&quot;cafe near me&quot;</b></div>
            <span className="cf-bar-sep" aria-hidden="true">in</span>
            <div><small>Within</small><b>Walking distance</b></div>
            <span className="cf-bar-sep" aria-hidden="true">→</span>
            <div><small>Our goal</small><b>Top 3 on Google Maps</b></div>
            <Link className="cf-btn" href="/free-audit">Check my cafe <Chevron /></Link>
          </div></div>

          {/* PILLARS – photo cards */}
          <section className="cf-sec"><div className="cf-wrap">
            <Head eyebrow="The basics" title={c.whatIs.title} intro={c.whatIs.intro} />
            <div className="cf-pcards">{c.whatIs.pillars.map((p, i) => (
              <article key={p.t} className="cf-pcard cf-rv">
                <div className="cf-pcard-img"><Img img={IMG.pillars[i]} w={800} sizes="(max-width: 900px) 100vw, 33vw" /><span>{String(i + 1).padStart(2, "0")}</span></div>
                <h3>{p.t}</h3><p>{p.d}</p>
              </article>
            ))}</div>
          </div></section>

          {/* DARK BAND – facts */}
          <section className="cf-facts">
            <Img img={IMG.beans} w={1800} className="cf-bg" sizes="100vw" />
            <div className="cf-wrap cf-facts-in cf-rv">
              <p className="cf-eyebrow light"><span aria-hidden="true" />{c.factsTitle}<span aria-hidden="true" /></p>
              <dl>{c.facts.map((f) => <div key={f.k}><dt>{f.k}</dt><dd>{f.d}</dd></div>)}</dl>
            </div>
          </section>

          {/* SERVICES – round icon grid */}
          <section className="cf-sec"><div className="cf-wrap">
            <Head eyebrow="Our services" title={c.services.title} intro={<>{c.services.intro} See all <Link href="/services">SEO services</Link>.</>} />
            <div className="cf-icons">{c.services.items.map((s) => { const I = s.icon; return (
              <Link key={s.t} href={s.href} className="cf-icon cf-rv"><span className="cf-round"><I size={26} strokeWidth={1.8} /></span><h3>{s.t}</h3><p>{s.d}</p><span className="cf-more">Learn more <Chevron /></span></Link>
            ); })}</div>
          </div></section>

          {/* PACKAGES */}
          <section className="cf-sec soft" id="seo-packages"><div className="cf-wrap">
            <Head eyebrow="Pricing" title={c.packagesTitle} intro="No setup fees, no long-term contracts. Every package includes the free audit and our 90-day results guarantee." />
            <div className="cf-packs">{PACKAGES.map((p) => (
              <div key={p.name} className={`cf-pack cf-rv ${p.pop ? "pop" : ""}`}>
                {p.pop && <span className="cf-pack-tag">Most popular</span>}
                <h3>{p.name}</h3><p className="cf-pack-for">{p.for}</p>
                <p className="cf-pack-price">{p.price}{p.price !== "Custom" && <small> / month</small>}</p>
                <p className="cf-pack-inr">{p.inr}</p>
                <ul>{p.items.map((it) => <li key={it}><span><Tick /></span>{it}</li>)}</ul>
                <Link className={`cf-btn ${p.pop ? "" : "line"}`} href={p.href}>{p.cta} <Chevron /></Link>
              </div>))}
            </div>
          </div></section>

          {/* SEARCHES – dark tabbed gallery */}
          <section className="cf-gallery">
            <div className="cf-wrap">
              <div className="cf-gal-head">
                <div><p className="cf-eyebrow light left"><span aria-hidden="true" />Keywords</p><h2>{c.searches.title}</h2></div>
                <div className="cf-tabs" role="tablist" aria-label="Search types">{c.searches.rows.map((r, i) => (
                  <button key={r[0]} type="button" role="tab" aria-selected={tab === i} className={tab === i ? "on" : ""} onClick={() => setTab(i)}>{r[0]}</button>
                ))}</div>
              </div>
              <p className="cf-gal-intro">{c.searches.intro}</p>
              <div className="cf-tabpanel" role="tabpanel">
                <div><small>People search</small><p>{row[1]}</p></div>
                <div><small>What ranks for it</small><p><b>{row[2]}</b></p></div>
              </div>
            </div>
            <div className="cf-gal-row" aria-hidden="true">{IMG.gallery.map((g) => <Img key={g.id} img={g} w={600} sizes="(max-width: 900px) 50vw, 20vw" />)}</div>
            {/* full table kept for search engines and screen readers */}
            <div className="cf-wrap"><details className="cf-alltable"><summary>See all search types in one table</summary>
              <div className="cf-table-wrap"><table className="cf-table"><thead><tr><th>Search type</th><th>Example searches</th><th>What ranks for it</th></tr></thead>
                <tbody>{c.searches.rows.map((r) => <tr key={r[0]}><td>{r[0]}</td><td>{r[1]}</td><td>{r[2]}</td></tr>)}</tbody></table></div>
            </details></div>
          </section>

          {/* WHY – text + image */}
          <section className="cf-sec"><div className="cf-wrap cf-why">
            <div className="cf-rv">
              <p className="cf-eyebrow left"><span aria-hidden="true" />{c.why.eyebrow}</p>
              <h2>{c.why.title}</h2>
              {c.why.paras.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
              <Link className="cf-btn" href="/free-audit">Get my free audit <Chevron /></Link>
            </div>
            <figure className="cf-why-img cf-rv"><Img img={IMG.side} w={1100} /></figure>
          </div></section>

          {/* STATS */}
          <section className="cf-stats"><div className="cf-wrap cf-stats-in">
            {STATS.map((s) => <div key={s.label}><b><CountUp value={s.value} /></b><span>{s.label}</span></div>)}
          </div></section>

          {/* 7 STEPS */}
          <section className="cf-sec"><div className="cf-wrap">
            <Head eyebrow="Step-by-step guide" title={c.guide.title} intro={c.guide.intro} />
            <ol className="cf-steps">{c.guide.steps.map((s, i) => <li key={s.t} className="cf-rv"><span>{i + 1}</span><div><h3>{s.t}</h3><p>{s.d}</p></div></li>)}</ol>
            <CtaStrip {...c.ctas[0]} />
          </div></section>

          {/* SEGMENTS */}
          <section className="cf-sec soft"><div className="cf-wrap">
            <Head eyebrow="Who we help" title={c.segments.title} />
            <div className="cf-segs">{c.segments.items.map((s) => { const I = s.icon; return (
              <div key={s.t} className="cf-seg cf-rv"><span className="cf-round sm"><I size={22} strokeWidth={1.8} /></span><div><h3>{s.t}</h3><p>{s.d}</p></div></div>
            ); })}</div>
          </div></section>

          {/* CHECKLISTS */}
          <section className="cf-sec"><div className="cf-wrap">
            <Head eyebrow="Checklists" title={c.checklists.title} intro={c.checklists.intro} />
            <div className="cf-two">{[c.checklists.left, c.checklists.right].map((l) => (
              <div key={l.t} className="cf-list cf-rv"><h3>{l.t}</h3><ul>{l.items.map((x) => <li key={x}><span><Tick /></span>{x}</li>)}</ul></div>
            ))}</div>
          </div></section>

          {/* CHALLENGES */}
          <section className="cf-sec soft"><div className="cf-wrap">
            <Head eyebrow="Sound familiar?" title={c.challengesTitle} />
            <div className="cf-icons">{c.challenges.map((x) => { const I = x.icon; return (
              <div key={x.t} className="cf-icon plain cf-rv"><span className="cf-round warn"><I size={24} strokeWidth={1.8} /></span><h3>{x.t}</h3><p>{x.d}</p></div>
            ); })}</div>
          </div></section>

          {/* MISTAKES */}
          <section className="cf-sec"><div className="cf-wrap">
            <Head eyebrow="Avoid these" title={c.mistakesTitle} />
            <div className="cf-mistakes">{c.mistakes.map((m, i) => <div key={m.t} className="cf-mistake cf-rv"><span>{String(i + 1).padStart(2, "0")}</span><h3>{m.t}</h3><p>{m.d}</p></div>)}</div>
            <CtaStrip {...c.ctas[1]} />
          </div></section>

          {/* CTA BAND */}
          <section className="cf-band">
            <Img img={IMG.band} w={1800} className="cf-bg" sizes="100vw" />
            <div className="cf-wrap cf-band-in cf-rv">
              <h2>{c.ctaBand.title}</h2>
              <p>{c.ctaBand.text}</p>
              <div className="cf-btns center"><Link className="cf-btn" href="/free-audit">Get my free audit <Chevron /></Link><a className="cf-btn ghost" href={WA} target="_blank" rel="noopener noreferrer"><WaSvg /> WhatsApp us</a></div>
            </div>
          </section>

          {/* PROCESS + KPIs */}
          <section className="cf-sec"><div className="cf-wrap">
            <Head eyebrow="Your first 90 days" title="What Happens After You Hire Us" />
            <div className="cf-process">{c.process.map((p, i) => <div key={p.t} className="cf-rv"><span>{String(i + 1).padStart(2, "0")}</span><h3>{p.t}</h3><p>{p.d}</p></div>)}</div>
          </div></section>
          <section className="cf-sec pt0"><div className="cf-wrap">
            <Head eyebrow="Measuring results" title={c.kpisTitle} intro="Rankings are only part of it. These are the numbers we report every month." />
            <div className="cf-kpis">{c.kpis.map((k) => <div key={k.k} className="cf-rv"><b>{k.k}</b><span>{k.d}</span></div>)}</div>
          </div></section>

          {/* COMPARE */}
          <section className="cf-sec soft"><div className="cf-wrap">
            <Head eyebrow="Why CodedSEO" title="How We're Different From a Typical SEO Agency" intro={<>More reasons on our <Link href="/why-choose-us">why choose us</Link> page.</>} />
            <div className="cf-table-wrap cf-rv"><table className="cf-table"><thead><tr><th>What matters</th><th>CodedSEO</th><th>Typical agency</th></tr></thead>
              <tbody>{COMPARE.map((r) => <tr key={r[0]}><td>{r[0]}</td><td>{r[1]}</td><td>{r[2]}</td></tr>)}</tbody></table></div>
            <CtaStrip {...c.ctas[2]} />
          </div></section>

          {/* PLATFORMS ROW */}
          <section className="cf-platforms"><div className="cf-wrap">
            <p>Where we make your cafe easy to find</p>
            <ul>{PLATFORMS.map((p) => <li key={p}>{p}</li>)}</ul>
          </div></section>

          {/* BLOGS (real, from Sanity) */}
          {posts.length > 0 && (
            <section className="cf-sec"><div className="cf-wrap">
              <Head eyebrow="From the CodedSEO blog" title="Local SEO Guides" intro={<>Practical guides from our team. See every article on the <Link href="/blog">CodedSEO blog</Link>.</>} />
              <div className="cf-posts">{posts.map((p) => (
                <Link key={p.slug} className="cf-post cf-rv" href={`/blog/${p.slug}`}>
                  <div className="cf-post-img">{p.image ? <img src={p.image} alt={p.imageAlt} width={720} height={450} loading="lazy" decoding="async" /> : <span aria-hidden="true">{p.category}</span>}</div>
                  <div className="cf-post-body"><span className="cf-tag">{p.category}</span><h3>{p.title}</h3>{p.excerpt && <p>{p.excerpt}</p>}<span className="cf-more">Read article <Chevron /></span></div>
                </Link>))}
              </div>
            </div></section>
          )}

          {/* FAQ */}
          <section className="cf-sec soft"><div className="cf-wrap narrow">
            <Head eyebrow="FAQ" title={c.faqTitle} />
            <div className="cf-faq">{c.faqs.map((f, i) => (
              <div key={f.q} className={`cf-faq-item ${open === i ? "open" : ""}`}>
                <h3><button type="button" aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>{f.q}<span>{open === i ? "−" : "+"}</span></button></h3>
                <div className="cf-faq-body" hidden={open !== i}>{f.a}</div>
              </div>))}
            </div>
            <div className="cf-help">
              <div><h3>Still have questions?</h3><p>Talk to a strategist on call, WhatsApp or email.</p></div>
              <div className="cf-btns">
                <a className="cf-chip" href={telHref}><PhoneSvg />Call</a>
                <a className="cf-chip" href={WA} target="_blank" rel="noopener noreferrer"><WaSvg />WhatsApp</a>
                <a className="cf-chip" href={`mailto:${CONTACT.email}`}><MailSvg />Email</a>
              </div>
            </div>
          </div></section>

          {/* FINAL */}
          <section className="cf-final"><div className="cf-wrap cf-final-in">
            <div><h2>{c.final.title}</h2><p>{c.final.text}</p></div>
            <div className="cf-btns"><Link className="cf-btn" href="/free-audit">Get my free audit <Chevron /></Link><a className="cf-btn ghost" href={telHref}>Call {CONTACT.phoneDisplay}</a></div>
          </div></section>
        </main>

        <div className="cf-sticky" role="region" aria-label="Quick contact">
          <a href={telHref}>Call now</a>
          <a href={WA} target="_blank" rel="noopener noreferrer">WhatsApp</a>
          <Link href="/free-audit" className="green">Free audit</Link>
        </div>
      </div>
      <SiteFooter />
    </>
  );
}
