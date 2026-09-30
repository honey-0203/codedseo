"use client"

import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"

type Item = { name: string; href: string; description?: string }
type Section = { title: string; items: Item[] }

// SEO Services dropdown (desktop). Sections header.tsx se aate hain.
export function SeoServicesMenu({ sections }: { sections: Section[] }) {
  const left = sections.filter((_, i) => i % 2 === 0)
  const right = sections.filter((_, i) => i % 2 === 1)

  const Col = ({ list }: { list: Section[] }) => (
    <div className="flex flex-col gap-6">
      {list.map((section) => (
        <div key={section.title}>
          <p className="mb-2 flex items-center gap-2 px-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#6b756f]">
            {section.title}
            <span className="h-px flex-1 bg-[#e3e9e1]" />
          </p>
          <div className="flex flex-col">
            {section.items.map((item) => (
              <Link key={item.href + item.name} href={item.href} className="group flex items-start justify-between gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-[#f3f8ee]">
                <span className="min-w-0">
                  <span className="flex items-center gap-2 text-[14.5px] font-semibold leading-snug text-[#17211c]">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#c9d2cc] transition-colors group-hover:bg-[#7eb51e]" />
                    {item.name}
                  </span>
                  {item.description && <span className="mt-0.5 block pl-3.5 text-xs leading-relaxed text-[#6b756f]">{item.description}</span>}
                </span>
                <ArrowRight className="mt-1 h-4 w-4 shrink-0 -translate-x-1 text-[#3f6a0c] opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  )

  return (
    <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)_270px] gap-2 p-3">
      <div className="px-1 py-3"><Col list={left} /></div>
      <div className="px-1 py-3"><Col list={right} /></div>

      {/* Featured: SEO Outsourcing India */}
      <div className="flex flex-col rounded-2xl bg-[#17211c] p-5 text-white [background-image:linear-gradient(rgba(255,255,255,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.045)_1px,transparent_1px)] [background-size:22px_22px]">
        <span className="w-fit rounded-full bg-[#a9e83f] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#17211c]">For agencies</span>
        <h4 className="mt-4 text-lg font-bold leading-snug">SEO Outsourcing India</h4>
        <p className="mt-2 text-sm leading-relaxed text-white/70">White label SEO delivered under your brand. You keep the client, we do the work.</p>
        <div className="mb-5 mt-4 rounded-xl border border-white/10 bg-white/[0.04] p-3">
          <div className="flex items-center justify-between text-[11px] text-white/60">
            <span>Your agency report</span>
            <span className="font-semibold text-[#a9e83f]">+64%</span>
          </div>
          <div className="mt-3 flex h-10 items-end gap-1.5" aria-hidden="true">
            {[30, 42, 48, 60, 72, 86, 100].map((h, i) => (
              <span key={i} className="flex-1 rounded-t-sm" style={{ height: `${h}%`, background: i > 4 ? "#a9e83f" : "rgba(169,232,63,.35)" }} />
            ))}
          </div>
        </div>
        <Link href="/seo-outsourcing-india" className="mt-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#a9e83f] px-4 py-3 text-sm font-semibold text-[#17211c] transition hover:bg-[#b8f05a]">
          Become a partner <ArrowRight className="h-4 w-4" />
        </Link>
        <Link href="/free-audit" className="mt-3 inline-flex items-center justify-center gap-1 text-xs font-semibold text-white/75 hover:text-white">
          Or get a free SEO audit <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  )
}