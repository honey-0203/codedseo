"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { LOCATIONS } from "@/lib/locations"
import { NavFeatureCard, NavItemLink, NavTitle } from "@/components/nav-panel"

export function LocationsMenu() {
  const [active, setActive] = useState(0)
  const country = LOCATIONS[active] ?? LOCATIONS[0]
  if (!country) return null

  return (
    <div className="grid grid-cols-[220px_minmax(0,1fr)_260px] gap-2 p-3">
      {/* Countries */}
      <div className="px-1 py-3">
        <NavTitle>Countries</NavTitle>
        <div className="flex flex-col">
          {LOCATIONS.map((loc, i) => (
            <NavItemLink key={loc.href} item={{ name: loc.label, href: loc.href }} onHover={() => setActive(i)} active={i === active} />
          ))}
        </div>
      </div>

      {/* Country ke pages / cities */}
      <div className="min-w-0 px-1 py-3">
        <NavTitle>{country.listTitle ?? `Cities in ${country.name}`}</NavTitle>
        <div className="grid max-h-[340px] grid-cols-2 gap-x-1 overflow-y-auto">
          {country.cities.map((city) => <NavItemLink key={city.name} item={city} />)}
        </div>
        <Link href={country.href} className="mt-3 inline-flex items-center gap-1 px-3 text-xs font-semibold text-[#3f6a0c] hover:underline">
          View {country.name} page <ArrowRight className="h-3 w-3" />
        </Link>
      </div>

      <NavFeatureCard
        f={{
          eyebrow: "Local SEO",
          title: "Need SEO in your market?",
          text: "Get a free audit built around your city, competitors and customers.",
          visual: "line",
          cta: { label: "Get free SEO audit", href: "/free-audit" },
          sub: { label: "Or talk to us", href: "/contact" },
        }}
      />
    </div>
  )
}