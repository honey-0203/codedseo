"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, ChevronRight, MapPin } from "lucide-react"
import { LOCATIONS } from "@/lib/locations"

export function LocationsMenu() {
  const [active, setActive] = useState(0)
  const country = LOCATIONS[active] ?? LOCATIONS[0]
  if (!country) return null

  return (
    <div className="grid grid-cols-[210px_minmax(0,1fr)_250px] gap-3 p-3">
      {/* Countries */}
      <div className="rounded-2xl bg-muted p-3">
        <p className="mb-2 px-2 pt-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">Countries</p>
        <div className="space-y-1">
          {LOCATIONS.map((loc, i) => (
            <Link
              key={loc.href}
              href={loc.href}
              onMouseEnter={() => setActive(i)}
              className={`flex items-center justify-between gap-2 rounded-xl px-2.5 py-2.5 text-sm font-medium transition-all ${
                i === active ? "bg-background text-primary shadow-sm" : "text-foreground hover:bg-background/70"
              }`}
            >
              <span className="flex items-center gap-2.5">
                <span className="flex h-7 w-8 items-center justify-center rounded-md bg-primary/10 text-[10px] font-bold tracking-wide text-primary">{loc.code}</span>
                {loc.label}
              </span>
              <ChevronRight className="h-4 w-4 shrink-0 opacity-50" />
            </Link>
          ))}
        </div>
      </div>

      {/* Cities / pages */}
      <div className="min-w-0 px-2 py-2">
        <div className="mb-2 flex items-center justify-between gap-3 px-2">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">{country.listTitle ?? `Cities in ${country.name}`}</p>
          <Link href={country.href} className="inline-flex items-center gap-1 whitespace-nowrap text-xs font-semibold text-primary hover:underline">
            View country page <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
        <div className="grid max-h-[340px] grid-cols-2 gap-x-2 gap-y-0.5 overflow-y-auto pr-1">
          {country.cities.map((city) => (
            <Link key={city.name} href={city.href} className="group flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-muted/60">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <MapPin className="h-[18px] w-[18px]" />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-semibold leading-snug text-foreground">{city.name}</span>
                {city.description && <span className="mt-0.5 line-clamp-2 block text-xs leading-relaxed text-muted-foreground">{city.description}</span>}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA card */}
      <div className="flex flex-col rounded-2xl bg-gradient-to-b from-[#0d1f16] to-[#090e1a] p-4 text-white">
        <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/60">Organic visibility</p>
          <svg viewBox="0 0 200 64" className="mt-2 h-14 w-full" fill="none" aria-hidden="true">
            <defs>
              <linearGradient id="lm-fill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#22c55e" stopOpacity="0.35" />
                <stop offset="1" stopColor="#22c55e" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0 54 C25 52 35 40 60 42 S95 30 120 26 S165 12 200 6 L200 64 L0 64 Z" fill="url(#lm-fill)" />
            <path d="M0 54 C25 52 35 40 60 42 S95 30 120 26 S165 12 200 6" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
        <h4 className="mt-5 text-lg font-bold leading-snug">Need SEO in your market?</h4>
        <p className="mb-5 mt-2 text-sm leading-relaxed text-white/70">Get a free audit built around your city, competitors and customers.</p>
        <Link href="/free-audit" className="mt-auto inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90">
          Get free SEO audit <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}