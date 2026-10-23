"use client";

// Home Security page – security-company style layout (diagonal hero, overlap photos,
// numbered dark cards, photo strip + stats band, dark segment tiles) in CodedSEO colours.

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Header as SiteHeader } from "@/components/header";
import { Footer as SiteFooter } from "@/components/footer";
import { CONTACT, telHref, whatsappHref } from "@/lib/contact";
import type { RelatedPost } from "@/lib/related-posts";
import { CFG } from "./config";
import "./security.css";

const U = (id: string, w: number) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;

// Free Unsplash photos (unsplash.com/s/photos/home-security)
const IMG = {
  hero: CFG.heroImg,
  big: { id: "photo-1496368077930-c1e31b4e5b44", alt: "Two bullet surveillance cameras attached to a wall" },
  small: CFG.sideImg,
  strip: [
    { id: "photo-1563920443079-783e5c786b83", alt: "Two grey CCTV cameras" },
    { id: "photo-1558002038-1055907df827", alt: "Smartphone held up at a front door" },
    { id: "photo-1570044389283-6713c3b1c48b", alt: "Grey IP camera on a black wall" },
    { id: "photo-1589935447067-5531094415d1", alt: "Two white security cameras on a pole against a blue sky" },
  ],
  house: { id: "photo-1494526585095-c41746248156", alt: "" },
  band: { id: "photo-1653039923048-aa285ded90ca", alt: "" },
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
const Arrow = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
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
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true"><path d="M5 12l5 5L20 7" /></svg>
);

function Head({ eyebrow, title, intro, left, light }: { eyebrow: string; title: string; intro?: React.ReactNode; left?: boolean; light?: boolean }) {
  return (
    <div className={`hs-head ${left ? "left" : ""} ${light ? "light" : ""}`}>
      <span className="hs-bar" aria-hidden="true" />
      <p className="hs-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {intro && <p className="hs-intro">{intro}</p>}
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
    <aside className="hs-strip hs-rv" aria-label={title}>
      <div><p className="hs-strip-t">{title}</p><p>{text}</p></div>
      <div className="hs-btns">
        <Link className="hs-btn white" href="/free-audit">{cta} <Chevron /></Link>
        <a className="hs-chip on-green" href={whatsappHref(wa)} target="_blank" rel="noopener noreferrer"><WaSvg />WhatsApp</a>
        <a className="hs-chip on-green" href={telHref}><PhoneSvg />Call</a>
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
      if (h) document.documentElement.style.setProperty("--hs-hdr", `${Math.round(h)}px`);
    };
    set();
    window.addEventListener("resize", set);
    let io: IntersectionObserver | undefined;
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const els = Array.from(document.querySelectorAll<HTMLElement>(".hs .hs-rv")).filter((el) => el.getBoundingClientRect().top > window.innerHeight * 0.9);
      io = new IntersectionObserver((entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("hs-in"); io?.unobserve(e.target); } }), { rootMargin: "0px 0px -8% 0px" });
      els.forEach((el, i) => { el.classList.add("hs-hide"); el.style.transitionDelay = `${(i % 3) * 90}ms`; io?.observe(el); });
    }
    return () => { window.removeEventListener("resize", set); io?.disconnect(); };
  }, []);
}

export default function SecurityHome({ posts = [] }: { posts?: RelatedPost[] }) {
  useReveal();
  const c = CFG;
  const typed = useTyping(c.rotate);
  const WA = whatsappHref(c.wa);
  const [open, setOpen] = useState(0);
  const PACKAGES = [
    { name: "Starter", price: "$199", inr: "≈ ₹16,500 per month", for: c.packageFor[0], items: ["5 target keywords", "Google Business Profile setup", "Technical SEO audit", "Review request system", "Monthly reporting"], href: "/free-audit", cta: "Start with a free audit" },
    { name: "Growth", price: "$499", inr: "≈ ₹41,500 per month", for: c.packageFor[1], items: ["15 target keywords", "Service and town pages", "Citations and trust links", "Call and quote tracking", "Weekly reporting"], href: "/free-audit", cta: "Get my free audit", pop: true },
    { name: "Enterprise", price: "Custom", inr: "Quoted after the audit", for: c.packageFor[2], items: ["Unlimited keywords", "Multi-location SEO", "Profile management per location", "Link building (50+ per month)", "Dedicated account team"], href: "/contact", cta: "Talk to sales" },
  ];
  const COMPARE: [string, string, string][] = [
    ["Focus", c.compareFocus, "Generic local SEO"],
    ["Pricing", "Published plans from $199/month", "\"Call for a quote\""],
    ["Contracts", "Month to month", "6–12 month lock-in"],
    c.compareRow,
    ["Reporting", "Calls, quotes and a live change log", "Rank screenshots"],
    ["Ownership", "Your profile, site and data stay yours", "Locked in agency accounts"],
  ];

  return (
    <>
      <SiteHeader />
      <div className="hs">
        <main>
          {/* HERO – diagonal green panel + photo + quote card */}
          <section className="hs-hero">
            <Img img={IMG.hero} w={1600} className="hs-hero-photo" sizes="(max-width: 900px) 100vw, 60vw" eager />
            <div className="hs-hero-panel" aria-hidden="true" />
            <div className="hs-wrap hs-hero-grid">
              <div className="hs-hero-copy">
                <nav className="hs-crumb" aria-label="Breadcrumb"><Link href="/">Home</Link> › <Link href="/services">SEO Services</Link> › <span>{c.crumb}</span></nav>
                <h1 className="hs-up" style={{ animationDelay: ".05s" }}>Home Security <em>SEO</em> Services</h1>
                <p className="hs-sub hs-up" style={{ animationDelay: ".18s" }}>{c.h1.sub} <b>{c.h1.subHl}</b></p>
                <p className="hs-typed hs-up" style={{ animationDelay: ".28s" }} aria-hidden="true">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="7" /><path d="M20 20l-4-4" /></svg>
                  <span>{typed}</span><i className="hs-caret" />
                </p>
                <p className="hs-lead hs-up" style={{ animationDelay: ".38s" }}>{c.lead}</p>
                <div className="hs-btns hs-up" style={{ animationDelay: ".48s" }}>
                  <Link className="hs-btn white" href="/free-audit">{c.auditCta} <Chevron /></Link>
                  <a className="hs-btn ghost" href={CONTACT.calendly} target="_blank" rel="noopener noreferrer">Book a 30-min call</a>
                </div>
                <p className="hs-byline">Written by the <Link href="/team">CodedSEO strategy team</Link> · Updated October 2026</p>
              </div>
              <aside className="hs-quote hs-up" style={{ animationDelay: ".55s" }} aria-label="Free audit">
                <p className="hs-quote-top">Free security SEO audit</p>
                <ul>{c.heroPoints.map((p) => <li key={p}><Tick />{p}</li>)}</ul>
                <Link className="hs-btn" href="/free-audit">Get my free audit <Chevron /></Link>
                <p className="hs-quote-or">or talk to a strategist</p>
                <a className="hs-quote-phone" href={telHref}><PhoneSvg />{CONTACT.phoneDisplay}</a>
                <a className="hs-quote-wa" href={WA} target="_blank" rel="noopener noreferrer"><WaSvg />Chat on WhatsApp</a>
              </aside>
            </div>
          </section>

          {/* TAB STRIP – what customers search for */}
          <div className="hs-tabs"><div className="hs-wrap hs-tabs-in">
            {c.segments.items.map((s) => { const I = s.icon; return <span key={s.t}><I size={20} strokeWidth={1.8} />{s.t}</span>; })}
          </div></div>

          {/* BASICS – numbered dark cards */}
          <section className="hs-sec"><div className="hs-wrap">
            <Head eyebrow="The basics" title={c.whatIs.title} intro={c.whatIs.intro} />
            <div className="hs-num-cards">{c.whatIs.pillars.map((p, i) => { const I = [c.services.items[0].icon, c.services.items[1].icon, c.services.items[2].icon][i]; return (
              <div key={p.t} className="hs-num-card hs-rv"><span className="hs-big">{String(i + 1).padStart(2, "0")}</span><span className="hs-ic"><I size={26} strokeWidth={1.8} /></span><h3>{p.t}</h3><p>{p.d}</p></div>
            ); })}</div>
          </div></section>

          {/* WHY – overlapped photos + fact list */}
          <section className="hs-sec pt0"><div className="hs-wrap hs-why">
            <div className="hs-stack hs-rv">
              <span className="hs-stack-block" aria-hidden="true" />
              <Img img={IMG.big} w={1000} className="hs-stack-big" sizes="(max-width: 900px) 90vw, 460px" />
              <Img img={IMG.small} w={600} className="hs-stack-small" sizes="(max-width: 900px) 50vw, 240px" />
            </div>
            <div className="hs-rv">
              <p className="hs-eyebrow">{c.why.eyebrow}</p>
              <h2>{c.why.title}</h2>
              {c.why.paras.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
              <h3 className="hs-facts-t">{c.factsTitle}</h3>
              <ul className="hs-facts">{c.facts.map((f) => <li key={f.k}><span><Tick /></span><div><b>{f.k}</b><p>{f.d}</p></div></li>)}</ul>
              <p className="hs-src">Sources: {c.sources.map((s, i) => <span key={s.url}>{i > 0 && " · "}<a href={s.url} target="_blank" rel="noopener noreferrer nofollow">{s.label}</a></span>)} · Semrush Keyword Magic Tool (US)</p>
            </div>
          </div></section>

          {/* GREEN BANNER */}
          <section className="hs-wrap"><div className="hs-banner hs-rv">
            <div><h2>{c.ctaBand.title}</h2><p>{c.ctaBand.text}</p></div>
            <div className="hs-btns"><Link className="hs-btn white" href="/free-audit">Get my free audit <Chevron /></Link><a className="hs-chip on-green" href={WA} target="_blank" rel="noopener noreferrer"><WaSvg />WhatsApp</a></div>
          </div></section>

          {/* SERVICES – heading cell + bordered grid */}
          <section className="hs-sec soft"><div className="hs-wrap">
            <div className="hs-offer">
              <div className="hs-offer-head hs-rv">
                <span className="hs-bar" aria-hidden="true" />
                <p className="hs-eyebrow">Our services</p>
                <h2>{c.services.title}</h2>
                <p>{c.services.intro} See all <Link href="/services">SEO services</Link>.</p>
              </div>
              {c.services.items.map((s) => { const I = s.icon; return (
                <Link key={s.t} href={s.href} className="hs-offer-card hs-rv"><span className="hs-ic"><I size={30} strokeWidth={1.6} /></span><h3>{s.t}</h3><p>{s.d}</p><span className="hs-arrow" aria-hidden="true"><Arrow /></span></Link>
              ); })}
            </div>
          </div></section>

          {/* PHOTO STRIP + STATS BAND */}
          <section className="hs-strip4" aria-hidden="true">{IMG.strip.map((g) => <Img key={g.id} img={g} w={700} sizes="(max-width: 900px) 50vw, 25vw" />)}</section>
          <section className="hs-stats"><div className="hs-wrap hs-stats-in">
            {STATS.map((s) => <div key={s.label}><b><CountUp value={s.value} /></b><span>{s.label}</span></div>)}
          </div></section>

          {/* SEARCHES */}
          <section className="hs-sec"><div className="hs-wrap">
            <Head eyebrow="Keywords" title={c.searches.title} intro={c.searches.intro} />
            <div className="hs-table-wrap hs-rv"><table className="hs-table"><thead><tr><th>Search type</th><th>Example searches</th><th>What ranks for it</th></tr></thead>
              <tbody>{c.searches.rows.map((r) => <tr key={r[0]}><td>{r[0]}</td><td>{r[1]}</td><td>{r[2]}</td></tr>)}</tbody></table></div>
          </div></section>

          {/* GUIDE – photo band + overlapping card */}
          <section className="hs-photoband">
            <Img img={IMG.house} w={1800} className="hs-photoband-bg" sizes="100vw" />
            <div className="hs-wrap hs-photoband-in hs-rv">
              <p className="hs-eyebrow light">Step-by-step guide</p>
              <h2>{c.guide.title}</h2>
            </div>
          </section>
          <section className="hs-wrap"><div className="hs-guide hs-rv">
            <p className="hs-guide-intro">{c.guide.intro}</p>
            <ol className="hs-steps">{c.guide.steps.map((s, i) => <li key={s.t}><span className="hs-step-n">{i + 1}</span><div><h3>{s.t}</h3><p>{s.d}</p></div></li>)}</ol>
          </div>
          <CtaStrip {...c.ctas[0]} />
          </section>

          {/* CHECKLISTS */}
          <section className="hs-sec"><div className="hs-wrap">
            <Head eyebrow="Checklists" title={c.checklists.title} intro={c.checklists.intro} />
            <div className="hs-two">{[c.checklists.left, c.checklists.right].map((l) => (
              <div key={l.t} className="hs-list hs-rv"><h3>{l.t}</h3><ul>{l.items.map((x) => <li key={x}><span><Tick /></span>{x}</li>)}</ul></div>
            ))}</div>
          </div></section>

          {/* SEGMENTS – dark tiles */}
          <section className="hs-sec dark"><div className="hs-wrap">
            <Head eyebrow="Who we help" title={c.segments.title} light intro="Every security business sells trust. The searches and the proof customers need are different for each, so your pages should be too." />
            <div className="hs-tiles">{c.segments.items.map((s) => { const I = s.icon; return (
              <div key={s.t} className="hs-tile hs-rv"><span className="hs-tile-ic"><I size={30} strokeWidth={1.6} /></span><h3>{s.t}</h3><p>{s.d}</p></div>
            ); })}</div>
          </div></section>

          {/* CHALLENGES */}
          <section className="hs-sec"><div className="hs-wrap">
            <Head eyebrow="Sound familiar?" title={c.challengesTitle} />
            <div className="hs-probs">{c.challenges.map((x) => { const I = x.icon; return (
              <div key={x.t} className="hs-prob hs-rv"><span className="hs-ic round"><I size={24} strokeWidth={1.8} /></span><div><h3>{x.t}</h3><p>{x.d}</p></div></div>
            ); })}</div>
          </div></section>

          {/* MISTAKES */}
          <section className="hs-sec soft"><div className="hs-wrap">
            <Head eyebrow="Avoid these" title={c.mistakesTitle} />
            <div className="hs-mistakes">{c.mistakes.map((m, i) => <div key={m.t} className="hs-mistake hs-rv"><span>{String(i + 1).padStart(2, "0")}</span><h3>{m.t}</h3><p>{m.d}</p></div>)}</div>
            <CtaStrip {...c.ctas[1]} />
          </div></section>

          {/* PACKAGES */}
          <section className="hs-sec" id="seo-packages"><div className="hs-wrap">
            <Head eyebrow="Pricing" title={c.packagesTitle} intro="No setup fees, no long-term contracts. Every package includes the free audit and our 90-day results guarantee." />
            <div className="hs-packs">{PACKAGES.map((p) => (
              <div key={p.name} className={`hs-pack hs-rv ${p.pop ? "pop" : ""}`}>
                {p.pop && <span className="hs-pack-tag">Most popular</span>}
                <h3>{p.name}</h3><p className="hs-pack-for">{p.for}</p>
                <p className="hs-pack-price">{p.price}{p.price !== "Custom" && <small> / month</small>}</p>
                <p className="hs-pack-inr">{p.inr}</p>
                <ul>{p.items.map((it) => <li key={it}><span><Tick /></span>{it}</li>)}</ul>
                <Link className={`hs-btn ${p.pop ? "" : "line"}`} href={p.href}>{p.cta} <Chevron /></Link>
              </div>))}
            </div>
          </div></section>

          {/* PURPOSE BAND */}
          <section className="hs-purpose">
            <Img img={IMG.band} w={1800} className="hs-photoband-bg" sizes="100vw" />
            <div className="hs-wrap hs-purpose-in hs-rv">
              <h2>Homeowners Are Searching for an Installer Right Now. Make Sure They Find You.</h2>
              <div className="hs-btns center"><Link className="hs-btn" href="/free-audit">Get my free audit <Chevron /></Link><a className="hs-btn ghost" href={telHref}><PhoneSvg /> {CONTACT.phoneDisplay}</a></div>
            </div>
          </section>

          {/* PROCESS + KPIs */}
          <section className="hs-sec"><div className="hs-wrap">
            <Head eyebrow="Your first 90 days" title="What Happens After You Hire Us" />
            <div className="hs-process">{c.process.map((p, i) => <div key={p.t} className="hs-rv"><span className="hs-big dark">{String(i + 1).padStart(2, "0")}</span><h3>{p.t}</h3><p>{p.d}</p></div>)}</div>
          </div></section>
          <section className="hs-sec pt0"><div className="hs-wrap">
            <Head eyebrow="Measuring results" title={c.kpisTitle} intro="Rankings are only part of it. These are the numbers we report every month." />
            <div className="hs-kpis">{c.kpis.map((k) => <div key={k.k} className="hs-rv"><b>{k.k}</b><span>{k.d}</span></div>)}</div>
          </div></section>

          {/* COMPARE */}
          <section className="hs-sec soft"><div className="hs-wrap">
            <Head eyebrow="Why CodedSEO" title="How We're Different From a Typical SEO Agency" intro={<>More reasons on our <Link href="/why-choose-us">why choose us</Link> page.</>} />
            <div className="hs-table-wrap hs-rv"><table className="hs-table"><thead><tr><th>What matters</th><th>CodedSEO</th><th>Typical agency</th></tr></thead>
              <tbody>{COMPARE.map((r) => <tr key={r[0]}><td>{r[0]}</td><td>{r[1]}</td><td>{r[2]}</td></tr>)}</tbody></table></div>
            <CtaStrip {...c.ctas[2]} />
          </div></section>

          {/* BLOGS (real, from Sanity) */}
          {posts.length > 0 && (
            <section className="hs-sec"><div className="hs-wrap">
              <Head eyebrow="From the CodedSEO blog" title="Local SEO Guides" intro={<>Practical guides from our team. See every article on the <Link href="/blog">CodedSEO blog</Link>.</>} />
              <div className="hs-posts">{posts.map((p) => (
                <Link key={p.slug} className="hs-post hs-rv" href={`/blog/${p.slug}`}>
                  <div className="hs-post-img">{p.image ? <img src={p.image} alt={p.imageAlt} width={720} height={450} loading="lazy" decoding="async" /> : <span aria-hidden="true">{p.category}</span>}<em>{p.date || p.category}</em></div>
                  <div className="hs-post-body"><h3>{p.title}</h3>{p.excerpt && <p>{p.excerpt}</p>}<span className="hs-more">Read more <Chevron /></span></div>
                </Link>))}
              </div>
            </div></section>
          )}

          {/* FAQ */}
          <section className="hs-sec soft"><div className="hs-wrap narrow">
            <Head eyebrow="FAQ" title={c.faqTitle} />
            <div className="hs-faq">{c.faqs.map((f, i) => (
              <div key={f.q} className={`hs-faq-item ${open === i ? "open" : ""}`}>
                <h3><button type="button" aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>{f.q}<span>{open === i ? "−" : "+"}</span></button></h3>
                <div className="hs-faq-body" hidden={open !== i}>{f.a}</div>
              </div>))}
            </div>
            <div className="hs-help">
              <div><h3>Still have questions?</h3><p>Talk to a strategist on call, WhatsApp or email.</p></div>
              <div className="hs-btns">
                <a className="hs-chip" href={telHref}><PhoneSvg />Call</a>
                <a className="hs-chip" href={WA} target="_blank" rel="noopener noreferrer"><WaSvg />WhatsApp</a>
                <a className="hs-chip" href={`mailto:${CONTACT.email}`}><MailSvg />Email</a>
              </div>
            </div>
          </div></section>

          {/* FINAL */}
          <section className="hs-final"><div className="hs-wrap hs-final-in">
            <div><h2>{c.final.title}</h2><p>{c.final.text}</p></div>
            <div className="hs-btns"><Link className="hs-btn white" href="/free-audit">Get my free audit <Chevron /></Link><a className="hs-btn ghost" href={telHref}>Call {CONTACT.phoneDisplay}</a></div>
          </div></section>
        </main>

        <div className="hs-sticky" role="region" aria-label="Quick contact">
          <a href={telHref}>Call now</a>
          <a href={WA} target="_blank" rel="noopener noreferrer">WhatsApp</a>
          <Link href="/free-audit" className="green">Free audit</Link>
        </div>
      </div>
      <SiteFooter />
    </>
  );
}
