"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import { Header as SiteHeader } from "@/components/header";
import { Footer as SiteFooter } from "@/components/footer";
import "./legal.css";

export type LegalSection = {
  id: string;
  label: string;
  eyebrow: string;
  title: string;
  content: ReactNode;
};

export type LegalPageProps = {
  kicker: string;
  title: string;
  accent: string;
  intro: string;
  updated: string;
  shieldIcon?: string;
  shieldLabel: string;
  sidebarTitle: string;
  notice: { title: string; text: ReactNode };
  sections: LegalSection[];
  cta: { title: string; text: string; href: string; label: string };
};

export default function LegalPage(props: LegalPageProps) {
  const { kicker, title, accent, intro, updated, shieldIcon = "✓", shieldLabel, sidebarTitle, notice, sections, cta } = props;
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState(sections[0]?.id ?? "");
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const reveals = root.querySelectorAll(".lgl-reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          io.unobserve(e.target);
        }
      }),
      { threshold: 0.08 }
    );
    reveals.forEach((el) => io.observe(el));

    const spy = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-30% 0px -60% 0px" }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) spy.observe(el);
    });

    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      io.disconnect();
      spy.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [sections]);

  return (
    <>
      <SiteHeader />
      <div ref={rootRef} className="lgl relative overflow-x-clip bg-[#050806] font-[family-name:var(--font-poppins)] leading-[1.7] text-[#f4faf5] [background-image:radial-gradient(circle_at_15%_8%,rgba(75,220,71,.075),transparent_25%),radial-gradient(circle_at_90%_30%,rgba(81,226,75,.055),transparent_28%)]">
        {/* background */}
        <div className="lgl-grid-bg pointer-events-none absolute inset-0 opacity-20" aria-hidden="true" />
        <div className="pointer-events-none absolute right-[-250px] top-[20%] h-[550px] w-[550px] rounded-full bg-[radial-gradient(circle,rgba(91,232,75,.08),transparent_68%)]" aria-hidden="true" />
        {["left-[8%] top-[18%]", "left-[72%] top-[32%] [animation-delay:2s]", "left-[46%] top-[58%] [animation-delay:4s]", "right-[7%] top-[76%] [animation-delay:6s]"].map((pos) => (
          <span key={pos} className={`lgl-particle pointer-events-none absolute h-1 w-1 rounded-full bg-[#72e957] opacity-30 ${pos}`} aria-hidden="true" />
        ))}
        <div className="lgl-grad-bg fixed left-0 top-0 z-[5000] h-0.5 shadow-[0_0_15px_rgba(106,232,82,.6)]" style={{ width: `${progress}%` }} aria-hidden="true" />

        
        {/* hero */}
        <section className="lgl-hero relative overflow-hidden pb-[70px] pt-[140px] md:min-h-[680px] md:pb-[100px] md:pt-[180px]">
          <div className="relative mx-auto grid w-[min(1180px,92%)] items-center gap-6 md:grid-cols-[1.1fr_.9fr] md:gap-[70px]">
            <div className="lgl-reveal">
              <p className="mb-[26px] inline-flex items-center gap-[9px] rounded-full border border-[rgba(107,232,84,.2)] bg-[rgba(102,230,82,.045)] px-3 py-[7px] text-[10px] font-bold uppercase tracking-[1.8px] text-[#8ce878]">
                <span className="h-[7px] w-[7px] rounded-full bg-[#72e957] shadow-[0_0_16px_#72e957]" />
                {kicker}
              </p>
              <h1 className="text-[52px] font-bold leading-[.95] tracking-[-3px] md:text-[clamp(55px,7vw,88px)] md:tracking-[-4px]">
                {title}
                <span className="lgl-grad-text block">{accent}</span>
              </h1>
              <p className="mt-7 max-w-[650px] text-sm text-[#929e96] md:text-[15px]">{intro}</p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:gap-7">
                <div className="border-l border-[rgba(105,231,83,.35)] pl-[14px] text-[11px] text-[#7a867e]">
                  <strong className="mb-[3px] block text-[13px] text-[#dce9de]">CodedSEO</strong>
                  SEO &amp; Digital Growth Agency
                </div>
                <div className="border-l border-[rgba(105,231,83,.35)] pl-[14px] text-[11px] text-[#7a867e]">
                  <strong className="mb-[3px] block text-[13px] text-[#dce9de]">Last Updated</strong>
                  {updated}
                </div>
              </div>
            </div>

            <div className="lgl-reveal relative order-first flex min-h-[300px] items-center justify-center md:order-none md:min-h-[430px]" aria-hidden="true">
              <div className="lgl-orbit absolute h-[280px] w-[280px] rounded-full border border-[rgba(111,232,87,.1)] md:h-[380px] md:w-[380px]" />
              <div className="lgl-shield lgl-grad-bg relative flex h-[185px] w-[160px] items-center justify-center shadow-[0_0_80px_rgba(100,232,79,.18)] md:h-[235px] md:w-[205px]">
                <div className="relative z-[2] text-center">
                  <div className="text-[34px] leading-none text-[#72e957] [text-shadow:0_0_25px_rgba(113,232,87,.5)] md:text-[42px]">{shieldIcon}</div>
                  <small className="mt-2.5 block text-[8px] uppercase tracking-[2px] text-[#8a978e]">{shieldLabel}</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* policy */}
        <section className="relative pb-[120px] pt-5">
          <div className="mx-auto grid w-[min(1180px,92%)] items-start gap-[30px] md:grid-cols-[220px_1fr] md:gap-[65px]">
            <aside className="flex overflow-x-auto border-b border-white/[.07] pb-3 md:sticky md:top-[110px] md:block md:overflow-visible md:border-0 md:pb-0">
              <p className="mb-4 hidden text-[10px] font-bold uppercase tracking-[2px] text-[#6f7c73] md:block">{sidebarTitle}</p>
              {sections.map((s, i) => (
                <a key={s.id} href={`#${s.id}`} className={`block whitespace-nowrap border-b px-[13px] py-[9px] text-[11px] transition md:whitespace-normal md:border-b-0 md:border-l ${active === s.id ? "border-[#72e957] bg-[linear-gradient(90deg,rgba(104,231,83,.06),transparent)] text-[#8aeb75]" : "border-white/[.07] text-[#7a867e] hover:border-[#72e957] hover:text-[#8aeb75]"}`}>
                  {String(i + 1).padStart(2, "0")}. {s.label}
                </a>
              ))}
            </aside>

            <main className="min-w-0 max-w-[830px]">
              <div className="lgl-notice lgl-reveal relative mb-[50px] overflow-hidden rounded-[22px] border border-[rgba(105,231,82,.18)] bg-[linear-gradient(135deg,rgba(101,229,80,.065),rgba(255,255,255,.018))] p-[30px]">
                <div className="mb-2.5 flex items-center gap-2.5">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[rgba(105,231,82,.09)] text-xs text-[#72e957]">!</span>
                  <p className="text-[11px] font-bold uppercase tracking-[1.4px] text-[#92eb7c]">{notice.title}</p>
                </div>
                <div className="relative z-[2] text-[13px] text-[#9aa69e]">{notice.text}</div>
              </div>

              {sections.map((s, i) => (
                <article
                  key={s.id}
                  id={s.id}
                  className="lgl-block lgl-reveal mb-12 scroll-mt-[110px] border-b border-white/[.065] pb-12 last-of-type:border-b-0 [&_li]:my-[9px] [&_li]:pl-1 [&_li]:text-[13px] md:[&_li]:text-sm [&_li]:text-[#98a49c] [&_p]:mb-4 [&_p]:text-[13px] md:[&_p]:text-sm [&_p]:text-[#98a49c] [&_ul]:mb-[22px] [&_ul]:ml-6 [&_ul]:mt-[18px] [&_ul]:list-disc"
                >
                  <p className="!mb-2 !text-[10px] font-semibold tracking-[1.7px] !text-[#70e35b]">
                    {String(i + 1).padStart(2, "0")} / {s.eyebrow.toUpperCase()}
                  </p>
                  <h2 className="mb-[17px] text-[25px] font-bold leading-[1.15] tracking-[-1px] text-[#f0f7f1] md:text-[29px]">{s.title}</h2>
                  {s.content}
                </article>
              ))}

              <div className="lgl-cta lgl-grad-bg lgl-reveal relative mt-4 overflow-hidden rounded-[28px] px-[25px] py-8 text-[#061006] md:p-[50px]">
                <h2 className="relative z-[2] text-[29px] font-bold leading-none tracking-[-1.4px] md:text-[38px]">{cta.title}</h2>
                <p className="relative z-[2] mt-[14px] max-w-[630px] text-[13px] text-[#173119]">{cta.text}</p>
                <Link href={cta.href} className="relative z-[2] mt-[23px] inline-flex rounded-[11px] bg-[#061006] px-[19px] py-3 text-xs font-bold text-[#ddffd7] transition hover:-translate-y-[3px] hover:shadow-[0_15px_35px_rgba(0,0,0,.18)]">
                  {cta.label} →
                </Link>
              </div>
            </main>
          </div>
        </section>
      </div>
      <SiteFooter />
    </>
  );
}