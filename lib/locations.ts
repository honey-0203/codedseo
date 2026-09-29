// Header ke "Locations" menu ki list.
// Naya country/city page banao to yahan ek entry add karo, menu me apne aap aa jayega.

export type LocationLink = { name: string; href: string; description?: string }

export type LocationCountry = {
  code: string // 2 letters, chhota badge
  name: string // "USA"
  label: string // menu me naam: "SEO Services USA"
  href: string // country page ka URL
  listTitle?: string // beech wali list ka heading (na do to "Cities in USA" dikhega)
  cities: LocationLink[] // city pages ya us country ke important pages
}

export const LOCATIONS: LocationCountry[] = [
  {
    code: "US",
    name: "USA",
    label: "SEO Services USA",
    href: "/seo-agency-usa",
    listTitle: "Explore the USA",
    cities: [
      { name: "SEO Packages USA", href: "/seo-agency-usa#seo-packages", description: "Starter $199, Growth $499 and custom plans." },
      { name: "90-Day SEO Roadmap", href: "/seo-agency-usa#roadmap", description: "What happens in your first three months." },
      { name: "Local SEO for the USA", href: "/seo-agency-usa#svc-local", description: "Google Maps, GMB and near-me searches." },
      { name: "AI SEO and GEO", href: "/seo-agency-usa#svc-ai", description: "Get cited in ChatGPT and AI Overviews." },
      { name: "Technical SEO", href: "/seo-agency-usa#svc-technical", description: "Crawling, speed and Core Web Vitals." },
      { name: "Link Building", href: "/seo-agency-usa#svc-links", description: "Editorial links and digital PR." },
    ],
  },
]