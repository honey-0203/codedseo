"use client"

import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"

// Header ke saare dropdown menus isi ek design se bante hain.
export type NavLink = { name: string; href: string; description?: string }
export type NavSection = { title: string; items: NavLink[] }
export type NavFeature = {
  eyebrow: string
  title: string
  text: string
  cta: { label: string; href: string }
  sub?: { label: string; href: string }
  visual?: "bars" | "line" | "stat"
  stat?: { label: string; value: string }
}

/* Ek link: dot + naam + chhoti line, hover par arrow */
export function NavItemLink({ item, onHover, active }: { item: NavLink; onHover?: () => void; active?: boolean }) {
  return (
    <Link href={item.href} onMouseEnter={onHover} className={`group flex items-start justify-between gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-[#f3f8ee] ${active ? "bg-[#f3f8ee]" : ""}`}>
      <span className="min-w-0">
        <span className="flex items-center gap-2 text-[14.5px] font-semibold leading-snug text-[#17211c]">
          <span className={`h-1.5 w-1.5 shrink-0 rounded-full transition-colors group-hover:bg-[#7eb51e] ${active ? "bg-[#7eb51e]" : "bg-[#c9d2cc]"}`} />
          {item.name}
        </span>
        {item.description && <span className="mt-0.5 block pl-3.5 text-xs leading-relaxed text-[#6b756f]">{item.description}</span>}
      </span>
      <ArrowRight className={`mt-1 h-4 w-4 shrink-0 text-[#3f6a0c] transition-all group-hover:translate-x-0 group-hover:opacity-100 ${active ? "translate-x-0 opacity-100" : "-translate-x-1 opacity-0"}`} />
    </Link>
  )
}

/* Section ka chhota heading + patli line */
export function NavTitle({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-2 flex items-center gap-2 px-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#6b756f]">
      {children}
      <span className="h-px flex-1 bg-[#e3e9e1]" />
    </p>
  )
}

/* Right side ka dark card */
export function NavFeatureCard({ f }: { f: NavFeature }) {
  return (
    <div className="flex flex-col rounded-2xl bg-[#17211c] p-5 text-white [background-image:linear-gradient(rgba(255,255,255,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.045)_1px,transparent_1px)] [background-size:22px_22px]">
      <span className="w-fit rounded-full bg-[#a9e83f] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#17211c]">{f.eyebrow}</span>
      <h4 className="mt-4 text-lg font-bold leading-snug">{f.title}</h4>
      <p className="mt-2 text-sm leading-relaxed text-white/70">{f.text}</p>

      {f.visual === "bars" && (
        <div className="mb-5 mt-4 rounded-xl border border-white/10 bg-white/[0.04] p-3">
          <div className="flex items-center justify-between text-[11px] text-white/60">
            <span>Organic growth</span>
            <span className="font-semibold text-[#a9e83f]">+64%</span>
          </div>
          <div className="mt-3 flex h-10 items-end gap-1.5" aria-hidden="true">
            {[30, 42, 48, 60, 72, 86, 100].map((h, i) => (
              <span key={i} className="flex-1 rounded-t-sm" style={{ height: `${h}%`, background: i > 4 ? "#a9e83f" : "rgba(169,232,63,.35)" }} />
            ))}
          </div>
        </div>
      )}

      {f.visual === "line" && (
        <div className="mb-5 mt-4 rounded-xl border border-white/10 bg-white/[0.04] p-3">
          <p className="text-[11px] text-white/60">Organic visibility</p>
          <svg viewBox="0 0 200 56" className="mt-2 h-12 w-full" fill="none" aria-hidden="true">
            <path d="M0 48 C25 46 35 36 60 38 S95 26 120 22 S165 10 200 4 L200 56 L0 56 Z" fill="rgba(169,232,63,.14)" />
            <path d="M0 48 C25 46 35 36 60 38 S95 26 120 22 S165 10 200 4" stroke="#a9e83f" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      )}

      {f.visual === "stat" && f.stat && (
        <div className="mb-5 mt-4 rounded-xl border border-white/10 bg-white/[0.04] p-3">
          <p className="text-[11px] text-white/60">{f.stat.label}</p>
          <p className="mt-1 text-3xl font-bold text-[#a9e83f]">{f.stat.value}</p>
        </div>
      )}

      <Link href={f.cta.href} className="mt-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#a9e83f] px-4 py-3 text-sm font-semibold text-[#17211c] transition hover:bg-[#b8f05a]">
        {f.cta.label} <ArrowRight className="h-4 w-4" />
      </Link>
      {f.sub && (
        <Link href={f.sub.href} className="mt-3 inline-flex items-center justify-center gap-1 text-xs font-semibold text-white/75 hover:text-white">
          {f.sub.label} <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      )}
    </div>
  )
}

/* Poora panel: sections ke columns + dark card */
export function NavPanel({ sections, feature, columns = 2 }: { sections: NavSection[]; feature?: NavFeature; columns?: number }) {
  const cols = Array.from({ length: columns }, (_, c) => sections.filter((_, i) => i % columns === c))
  const grid = feature
    ? { gridTemplateColumns: `repeat(${columns}, minmax(0,1fr)) 260px` }
    : { gridTemplateColumns: `repeat(${columns}, minmax(0,1fr))` }

  return (
    <div className="grid gap-2 p-3" style={grid}>
      {cols.map((list, c) => (
        <div key={c} className="flex flex-col gap-6 px-1 py-3">
          {list.map((section) => (
            <div key={section.title}>
              <NavTitle>{section.title}</NavTitle>
              <div className="flex flex-col">
                {section.items.map((item) => <NavItemLink key={item.href + item.name} item={item} />)}
              </div>
            </div>
          ))}
        </div>
      ))}
      {feature && <NavFeatureCard f={feature} />}
    </div>
  )
}