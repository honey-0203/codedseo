// Locations menu ki list. Naya location page banao to yahan ek line add karo,
// woh header ke "Locations" menu (desktop + mobile) me apne aap aa jayega.

export type LocationCity = { name: string; href: string }

export type LocationCountry = {
  code: string // 2 letters, badge me dikhta hai
  label: string // menu me naam
  href: string // country page ka URL
  blurb: string // chhota description
  highlights: string[] // city pages na hon to yeh points dikhte hain
  cities: LocationCity[] // city pages, jaise { name: "SEO Services New York", href: "/seo-services-new-york" }
}

export const LOCATIONS: LocationCountry[] = [
  {
    code: "US",
    label: "SEO Services USA",
    href: "/seo-agency-usa",
    blurb: "SEO and AI search for businesses across all 50 states, with calls and reports in your time zone.",
    highlights: ["Local SEO and Google Maps", "SEO packages from $199/month", "Reports from Eastern to Pacific time"],
    cities: [],
  },
]