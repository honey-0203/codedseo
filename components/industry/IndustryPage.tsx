"use client";

// Industry landing page template (Taxi page wala design, dark + CodedSEO green).
// Har industry page ka apna config (content, photos, keywords) hota hai – design same, content unique.

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { Header as SiteHeader } from "@/components/header";
import { Footer as SiteFooter } from "@/components/footer";
import { InlineCta } from "@/components/inline-cta";
import { CONTACT, telHref, whatsappHref } from "@/lib/contact";
import type { RelatedPost } from "@/lib/related-posts";
import "../../app/seo-agency-frisco/frisco.css";
import "../../app/local-seo-for-taxi-company/taxi.css";

export type Img = { id: string; alt: string };
export type IconItem = { icon: LucideIcon; t: string; d: string };
export type Faq = { q: string; a: string };

export type IndustryConfig = {
  crumb: string;
  h1: { pre: string; box: string; post: string; sub: string; subHl: string };
  rotate: string[];
  lead: string;
  heroPoints: string[];
  heroImg: Img;
  sideImg: Img;
  ctaImg: Img;
  overlay: { icon: LucideIcon; name: string; cat: string; actions: string };
  floatBig: { k: string; d: string };
  floatChip: { icon: LucideIcon; text: string };
  badge: string;
  marquee: string[];
  wa: string;
  auditCta: string;
  whatIs: { title: string; intro: string; pillars: { t: string; d: string }[] };
  why: { eyebrow: string; title: string; paras: string[] };
  factsTitle: string;
  facts: { k: string; d: string }[];
  sources: { label: string; url: string }[];
  searches: { title: string; intro: string; rows: [string, string, string][] };
  guide: { title: string; intro: string; steps: { t: string; d: string }[] };
  checklists: { title: string; intro: string; left: { t: string; items: string[] }; right: { t: string; items: string[] } };
  challengesTitle: string;
  challenges: IconItem[];
  mistakesTitle: string;
  mistakes: { t: string; d: string }[];
  services: { title: string; intro: string; items: (IconItem & { href: string })[] };
  segments: { title: string; items: IconItem[] };
  packagesTitle: string;
  packageFor: [string, string, string];
  ctaBand: { title: string; text: string };
  process: { t: string; d: string }[];
  kpisTitle: string;
  kpis: { k: string; d: string }[];
  compareFocus: string;
  compareRow: [string, string, string];
  ctas: [{ title: string; text: string; wa: string; cta?: string }, { title: string; text: string; wa: string; cta?: string }, { title: string; text: string; wa: string; cta?: string }];
  faqTitle: string;
  faqs: Faq[];
  final: { title: string; text: string };
};

const STATS = [
  { value: "1M+", label: "Keywords ranked", sub: "Tracked across client campaigns" },
  { value: "100+", label: "Businesses served", sub: "Across the United States and beyond" },
  { value: "98%", label: "Client retention", sub: "Clients who stay with us" },
  { value: "90-day", label: "Results guarantee", sub: "Or we keep working for free" },
];

const UNSPLASH = (id: string, w: number) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;

function Ic({ icon: Icon }: { icon: LucideIcon }) {
  return <span className="fr-ic" aria-hidden="true"><Icon size={22} strokeWidth={2} /></span>;
}
function Chevron() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg>;
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

function useTyping(words: string[]) {
  const [text, setText] = useState(words[0]);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let w = 0, i = words[0].length, del = true, t: ReturnType<typeof setTimeout>;
    const tick = () => {
      const word = words[w];
      if (del) { i--; if (i <= 0) { del = false; w = (w + 1) % words.length; } }
      else { i++; if (i >= words[w].length) { del = true; setText(words[w]); t = setTimeout(tick, 1800); return; } }
      setText((del ? word : words[w]).slice(0, Math.max(i, 0)));
      t = setTimeout(tick, del ? 45 : 85);
    };
    t = setTimeout(tick, 1800);
    return () => clearTimeout(t);
  }, [words]);
  return text;
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

const REVEAL = ".tx-page .head, .tx-page .icard, .tx-page .tx-steps li, .tx-page .fr-table-wrap, .tx-page .pack, .tx-page .tx-mistake, .tx-page .tx-kpi, .tx-page .tx-list, .tx-page .ind, .tx-page .facts, .tx-page .fr-photo, .tx-page .fr-post";

function usePageEffects() {
  useEffect(() => {
    const set = () => {
      const h = document.querySelector("header")?.getBoundingClientRect().height;
      if (h) document.documentElement.style.setProperty("--tx-hdr", `${Math.round(h)}px`);
    };
    set();
    window.addEventListener("resize", set);
    let io: IntersectionObserver | undefined;
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const els = Array.from(document.querySelectorAll<HTMLElement>(REVEAL)).filter((el) => el.getBoundingClientRect().top > window.innerHeight * 0.9);
      io = new IntersectionObserver((entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("tx-in"); io?.unobserve(e.target); } }), { rootMargin: "0px 0px -8% 0px" });
      els.forEach((el, i) => { el.classList.add("tx-rv"); el.style.transitionDelay = `${(i % 3) * 80}ms`; io?.observe(el); });
    }
    return () => { window.removeEventListener("resize", set); io?.disconnect(); };
  }, []);
}

export default function IndustryPage({ cfg, posts = [] }: { cfg: IndustryConfig; posts?: RelatedPost[] }) {
  usePageEffects();
  const typed = useTyping(cfg.rotate);
  const WA = whatsappHref(cfg.wa);
  const Over = cfg.overlay.icon;
  const Chip = cfg.floatChip.icon;
  const PACKAGES = [
    { name: "Starter", price: "$199", inr: "≈ ₹16,500", note: "per month", for: cfg.packageFor[0], items: ["5 target keywords", "Google Business Profile setup", "Technical SEO audit", "Review request system", "Monthly reporting"], cta: "/free-audit", ctaText: "Start with a free audit" },
    { name: "Growth", price: "$499", inr: "≈ ₹41,500", note: "per month", for: cfg.packageFor[1], items: ["15 target keywords", "Service and location pages", "Local citations and links", "Call and order tracking", "Weekly reporting"], cta: "/free-audit", ctaText: "Get my free audit", popular: true },
    { name: "Enterprise", price: "Custom", inr: "", note: "quoted after audit", for: cfg.packageFor[2], items: ["Unlimited keywords", "Multi-location SEO", "Profile management per location", "Link building (50+ per month)", "Dedicated account team"], cta: "/contact", ctaText: "Talk to sales" },
  ];
  const COMPARE: [string, string, string][] = [
    ["Focus", cfg.compareFocus, "Generic local SEO"],
    ["Pricing", "Published plans from $199/month", "\"Call for a quote\""],
    ["Contracts", "Month to month", "6–12 month lock-in"],
    cfg.compareRow,
    ["Reporting", "Calls, orders and a live change log", "Rank screenshots"],
    ["Ownership", "Your profile, site and data stay yours", "Locked in agency accounts"],
  ];
  const [open, setOpen] = useState(0);

  return (
    <>
      <SiteHeader />
      <div className="isu tx-page">
        <main>
          {/* HERO */}
          <section className="tx-hero">
            <img className="tx-hero-bg" src={UNSPLASH(cfg.heroImg.id, 1800)} srcSet={`${UNSPLASH(cfg.heroImg.id, 900)} 900w, ${UNSPLASH(cfg.heroImg.id, 1400)} 1400w, ${UNSPLASH(cfg.heroImg.id, 1800)} 1800w`} sizes="100vw" alt={cfg.heroImg.alt} width={1800} height={1100} fetchPriority="high" decoding="async" />
            <div className="tx-hero-shade" aria-hidden="true" />
            <div className="wrap tx-hero-grid">
              <div className="tx-hero-copy">
                <nav className="tx-crumb" aria-label="Breadcrumb">
                  <Link href="/">Home</Link> › <Link href="/services">SEO Services</Link> › <span>{cfg.crumb}</span>
                </nav>
                <h1 className="tx-h1">
                  <span className="tx-line" style={{ animationDelay: "0.05s" }}>{cfg.h1.pre}</span>{" "}
                  <span className="tx-line tx-box" style={{ animationDelay: "0.2s" }}>{cfg.h1.box}</span>{" "}
                  <span className="tx-line" style={{ animationDelay: "0.3s" }}>{cfg.h1.post}</span>
                  <span className="tx-sub tx-line" style={{ animationDelay: "0.45s" }}>{cfg.h1.sub} <span className="tx-hl">{cfg.h1.subHl}</span></span>
                </h1>
                <p className="tx-typed" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="7" /><path d="M20 20l-4-4" /></svg>
                  <span>{typed}</span><i className="tx-caret" />
                </p>
                <p className="tx-lead">{cfg.lead}</p>
                <ul className="tx-ticks">{cfg.heroPoints.map((p) => <li key={p}>{p}</li>)}</ul>
                <div className="tx-cta">
                  <Link className="btn" href="/free-audit">{cfg.auditCta} <Chevron /></Link>
                  <a className="btn tx-ghost" href={CONTACT.calendly} target="_blank" rel="noopener noreferrer">Book a 30-min call</a>
                </div>
                <div className="fr-contact tx-contact">
                  <a className="fr-chip" href={telHref} aria-label={`Call ${CONTACT.phoneDisplay}`}><PhoneSvg />{CONTACT.phoneDisplay}</a>
                  <a className="fr-chip wa" href={WA} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp"><WaSvg />WhatsApp</a>
                </div>
                <p className="tx-byline">Written by the <Link href="/team">CodedSEO strategy team</Link> · Updated October 2026</p>
              </div>
              <div className="tx-float" aria-hidden="true">
                <svg className="tx-badge" viewBox="0 0 120 120"><defs><path id="txc" d="M60 60m-46 0a46 46 0 1 1 92 0a46 46 0 1 1-92 0" /></defs><text><textPath href="#txc" {...(cfg.badge.length > 20 ? { textLength: 286, lengthAdjust: "spacing" } : {})}>{cfg.badge.length > 20 ? `${cfg.badge} • ` : `${cfg.badge} • ${cfg.badge} • `}</textPath></text></svg>
                <div className="tx-fcard tx-f1">
                  <span className="fr-ov-pin"><Over size={22} strokeWidth={2.4} /></span>
                  <span>
                    <b><em>#1</em> {cfg.overlay.name}</b>
                    <span className="fr-ov-rate"><strong>4.9</strong> <span className="stars">★★★★★</span> <small>(sample)</small></span>
                    <small>{cfg.overlay.cat}</small>
                    <small className="g">{cfg.overlay.actions}</small>
                  </span>
                </div>
                <div className="tx-fcard tx-f2"><span className="tx-fbig">{cfg.floatBig.k}</span><small>{cfg.floatBig.d}</small></div>
                <div className="tx-fcard tx-f3"><Chip size={18} strokeWidth={2.4} /> <span>{cfg.floatChip.text}</span></div>
              </div>
            </div>
          </section>

          {/* STATS */}
          <section className="stats"><div className="wrap"><div className="stats-card">
            {STATS.map((s) => <div key={s.label} className="stat"><CountUp value={s.value} /><p className="stat-label">{s.label}</p><p className="stat-sub">{s.sub}</p></div>)}
          </div></div></section>

          {/* WHAT IS */}
          <section className="sec soft"><div className="wrap">
            <div className="head"><p className="eyebrow">The basics</p><h2>{cfg.whatIs.title}</h2><p className="grey">{cfg.whatIs.intro}</p></div>
            <div className="grid3">{cfg.whatIs.pillars.map((p, i) => <div key={p.t} className="icard"><span className="fr-step">{String(i + 1).padStart(2, "0")}</span><h3>{p.t}</h3><p>{p.d}</p></div>)}</div>
          </div></section>

          {/* WHY + FACTS */}
          <section className="sec"><div className="wrap two-col">
            <div>
              <p className="eyebrow">{cfg.why.eyebrow}</p>
              <h2>{cfg.why.title}</h2>
              {cfg.why.paras.map((p) => <p key={p.slice(0, 20)} className="grey">{p}</p>)}
              <img className="fr-photo" src={UNSPLASH(cfg.sideImg.id, 1200)} srcSet={`${UNSPLASH(cfg.sideImg.id, 600)} 600w, ${UNSPLASH(cfg.sideImg.id, 1200)} 1200w`} sizes="(max-width: 1000px) 100vw, 560px" alt={cfg.sideImg.alt} width={1200} height={750} loading="lazy" decoding="async" />
            </div>
            <div className="facts fr-facts">
              <h3>{cfg.factsTitle}</h3>
              <dl>{cfg.facts.map((f) => <div key={f.k}><dt>{f.k}</dt><dd>{f.d}</dd></div>)}</dl>
              <p className="fr-src">Sources: {cfg.sources.map((s, i) => <span key={s.url}>{i > 0 && " · "}<a href={s.url} target="_blank" rel="noopener noreferrer nofollow">{s.label}</a></span>)} · Semrush Keyword Magic Tool (US)</p>
            </div>
          </div></section>

          {/* SEARCHES */}
          <section className="sec"><div className="wrap">
            <div className="head"><p className="eyebrow">Keywords</p><h2>{cfg.searches.title}</h2><p className="grey">{cfg.searches.intro}</p></div>
            <div className="fr-table-wrap"><table className="fr-table tx-table"><thead><tr><th>Search type</th><th>Example searches</th><th>What ranks for it</th></tr></thead>
              <tbody>{cfg.searches.rows.map((r) => <tr key={r[0]}><td>{r[0]}</td><td>{r[1]}</td><td>{r[2]}</td></tr>)}</tbody></table></div>
          </div></section>

          {/* GUIDE */}
          <section className="sec soft"><div className="wrap">
            <div className="head"><p className="eyebrow">Step-by-step guide</p><h2>{cfg.guide.title}</h2><p className="grey">{cfg.guide.intro}</p></div>
            <ol className="tx-steps">{cfg.guide.steps.map((s, i) => <li key={s.t}><span className="tx-num">{i + 1}</span><div><h3>{s.t}</h3><p>{s.d}</p></div></li>)}</ol>
            <InlineCta {...cfg.ctas[0]} />
          </div></section>

          {/* SERVICES */}
          <section className="sec soft"><div className="wrap">
            <div className="head"><p className="eyebrow">Our services</p><h2>{cfg.services.title}</h2><p className="grey">{cfg.services.intro} See all <Link href="/services">SEO services</Link>.</p></div>
            <div className="grid3">{cfg.services.items.map((s) => <Link key={s.t} className="icard" href={s.href}><Ic icon={s.icon} /><h3>{s.t}</h3><p>{s.d}</p><span className="card-link">Learn more <Chevron /></span></Link>)}</div>
          </div></section>

          {/* SEGMENTS */}
          <section className="sec"><div className="wrap">
            <div className="head"><p className="eyebrow">Who we help</p><h2>{cfg.segments.title}</h2></div>
            <div className="ind-grid tx-seg">{cfg.segments.items.map((s) => <div key={s.t} className="ind fr-ind"><Ic icon={s.icon} /><h3>{s.t}</h3><p>{s.d}</p></div>)}</div>
          </div></section>

          {/* PACKAGES */}
          <section className="sec soft" id="seo-packages"><div className="wrap">
            <div className="head"><p className="eyebrow">Pricing</p><h2>{cfg.packagesTitle}</h2><p className="grey">No setup fees, no long-term contracts. Every package includes the free audit and our 90-day results guarantee.</p></div>
            <div className="pack-grid">{PACKAGES.map((pk) => (
              <div key={pk.name} className={`pack ${pk.popular ? "pop" : ""}`}>
                {pk.popular && <span className="pack-badge">Most popular</span>}
                <h3>{pk.name}</h3><p className="pack-for">{pk.for}</p>
                <p className="pack-price">{pk.price} <small>{pk.note}</small></p>
                {pk.inr && <p className="fr-inr">{pk.inr} per month</p>}
                <ul className="ticks">{pk.items.map((it) => <li key={it}>{it}</li>)}</ul>
                <Link className={`btn ${pk.popular ? "" : "line"}`} href={pk.cta}>{pk.ctaText} <Chevron /></Link>
              </div>))}
            </div>
          </div></section>

          {/* CHECKLISTS */}
          <section className="sec soft"><div className="wrap">
            <div className="head"><p className="eyebrow">Checklists</p><h2>{cfg.checklists.title}</h2><p className="grey">{cfg.checklists.intro}</p></div>
            <div className="tx-two">
              {[cfg.checklists.left, cfg.checklists.right].map((l) => <div key={l.t} className="tx-list"><h3>{l.t}</h3><ul className="ticks">{l.items.map((x) => <li key={x}>{x}</li>)}</ul></div>)}
            </div>
          </div></section>

          {/* CHALLENGES */}
          <section className="sec"><div className="wrap">
            <div className="head"><p className="eyebrow">Sound familiar?</p><h2>{cfg.challengesTitle}</h2></div>
            <div className="grid3">{cfg.challenges.map((c) => <div key={c.t} className="icard"><Ic icon={c.icon} /><h3>{c.t}</h3><p>{c.d}</p></div>)}</div>
          </div></section>

          {/* MISTAKES */}
          <section className="sec"><div className="wrap">
            <div className="head"><p className="eyebrow">Avoid these</p><h2>{cfg.mistakesTitle}</h2></div>
            <div className="tx-mistakes">{cfg.mistakes.map((m, i) => <div key={m.t} className="tx-mistake"><span className="tx-x">{i + 1}</span><div><h3>{m.t}</h3><p>{m.d}</p></div></div>)}</div>
            <InlineCta {...cfg.ctas[1]} />
          </div></section>

          {/* CTA BAND (image) */}
          <section className="sec"><div className="wrap"><div className="tx-ctaimg">
            <img className="tx-ctaimg-bg" src={UNSPLASH(cfg.ctaImg.id, 1600)} alt="" width={1600} height={900} loading="lazy" decoding="async" />
            <div className="tx-ctaimg-in">
              <p className="cta-eyebrow">Free, no obligation</p>
              <h2>{cfg.ctaBand.title}</h2>
              <p>{cfg.ctaBand.text}</p>
              <div className="cta-btns"><Link className="btn" href="/free-audit">Get my free audit <Chevron /></Link><a className="btn outline" href={WA} target="_blank" rel="noopener noreferrer">WhatsApp us</a></div>
              <ul className="cta-trust"><li>No contracts</li><li>Delivered in 48 hours</li><li>Written by a real strategist</li></ul>
            </div>
          </div></div></section>

          {/* PROCESS */}
          <section className="sec pt0"><div className="wrap">
            <div className="head"><p className="eyebrow">Your first 90 days</p><h2>What Happens After You Hire Us</h2></div>
            <div className="fr-steps">{cfg.process.map((p, i) => <div key={p.t} className="icard"><span className="fr-step">{String(i + 1).padStart(2, "0")}</span><h3>{p.t}</h3><p>{p.d}</p></div>)}</div>
          </div></section>

          {/* KPIs */}
          <section className="sec pt0"><div className="wrap">
            <div className="head"><p className="eyebrow">Measuring results</p><h2>{cfg.kpisTitle}</h2><p className="grey">Rankings are only part of it. These are the numbers we report every month.</p></div>
            <div className="tx-kpis">{cfg.kpis.map((k) => <div key={k.k} className="tx-kpi"><b>{k.k}</b><span>{k.d}</span></div>)}</div>
          </div></section>

          {/* COMPARE */}
          <section className="sec soft"><div className="wrap">
            <div className="head"><p className="eyebrow">Why CodedSEO</p><h2>How We&apos;re Different From a Typical SEO Agency</h2><p className="grey">More reasons on our <Link href="/why-choose-us">why choose us</Link> page.</p></div>
            <div className="fr-table-wrap"><table className="fr-table"><thead><tr><th>What matters</th><th>CodedSEO</th><th>Typical agency</th></tr></thead>
              <tbody>{COMPARE.map((r) => <tr key={r[0]}><td>{r[0]}</td><td>{r[1]}</td><td>{r[2]}</td></tr>)}</tbody></table></div>
            <InlineCta {...cfg.ctas[2]} />
          </div></section>

          {/* BLOGS (real, from Sanity) */}
          {posts.length > 0 && (
            <section className="sec"><div className="wrap">
              <div className="head"><p className="eyebrow">From the CodedSEO blog</p><h2>Local SEO Guides</h2><p className="grey">Practical guides from our team. See every article on the <Link href="/blog">CodedSEO blog</Link>.</p></div>
              <div className="fr-posts">{posts.map((p) => (
                <Link key={p.slug} className="fr-post" href={`/blog/${p.slug}`}>
                  <div className="fr-post-img">{p.image ? <img src={p.image} alt={p.imageAlt} width={720} height={450} loading="lazy" decoding="async" /> : <span aria-hidden="true">{p.category}</span>}</div>
                  <div className="fr-post-body"><span className="fr-post-cat">{p.category}</span><h3>{p.title}</h3>{p.excerpt && <p>{p.excerpt}</p>}<span className="fr-post-foot">{p.date && <time>{p.date}</time>}<span className="card-link">Read article <Chevron /></span></span></div>
                </Link>))}
              </div>
              <div className="center fr-posts-more"><Link className="btn line" href="/blog">View all articles <Chevron /></Link></div>
            </div></section>
          )}

          {/* FAQ */}
          <section className="sec pt0"><div className="wrap narrow">
            <div className="head"><p className="eyebrow">FAQ</p><h2>{cfg.faqTitle}</h2></div>
            <div className="faq">{cfg.faqs.map((f, idx) => (
              <div key={f.q} className={`faq-item ${open === idx ? "open" : ""}`}>
                <h3><button type="button" aria-expanded={open === idx} onClick={() => setOpen(open === idx ? -1 : idx)}>{f.q}<span className="faq-ic">{open === idx ? "−" : "+"}</span></button></h3>
                <div className="faq-body" hidden={open !== idx}>{f.a}</div>
              </div>))}
            </div>
            <div className="fr-help">
              <div><h3>Still have questions?</h3><p>Talk to a strategist on call, WhatsApp or email.</p></div>
              <div className="fr-help-btns">
                <a className="fr-chip" href={telHref}><PhoneSvg />Call</a>
                <a className="fr-chip wa" href={WA} target="_blank" rel="noopener noreferrer"><WaSvg />WhatsApp</a>
                <a className="fr-chip" href={`mailto:${CONTACT.email}`}><MailSvg />Email</a>
              </div>
            </div>
          </div></section>

          {/* FINAL */}
          <section className="final"><div className="wrap final-in">
            <div><h2>{cfg.final.title}</h2><p>{cfg.final.text}</p></div>
            <div className="cta-btns"><Link className="btn light" href="/free-audit">Get my free audit <Chevron /></Link><a className="btn outline" href={telHref}>Call {CONTACT.phoneDisplay}</a></div>
          </div></section>
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
