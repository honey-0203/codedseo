import Link from "next/link"
import { ArrowUpRight, Mail, MapPin } from "lucide-react"
import { PreferredSourceButton } from "@/components/preferred-source-button"

const CALENDLY = "https://calendly.com/codedseo-sales/30min"

const columns = [
  {
    title: "Services",
    links: [
      { name: "SEO Services", href: "/services" },
      { name: "Organic SEO", href: "/services/organic-seo" },
      { name: "Small Business SEO", href: "/seo" },
      { name: "SEO Agency USA", href: "/seo-agency-usa" },
      { name: "Digital Marketing", href: "/digital-marketing" },
      { name: "Free SEO Audit", href: "/free-audit" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Why Choose Us", href: "/why-choose-us" },
      { name: "Our Team", href: "/team" },
      { name: "Case Studies", href: "/case-studies" },
      { name: "Client Reviews", href: "/reviews" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Blog", href: "/blog" },
      { name: "Learn SEO", href: "/learn" },
      { name: "Free SEO Tools", href: "/tools" },
      { name: "Insights", href: "/insights" },
      { name: "Resources", href: "/resources" },
      { name: "Video Testimonials", href: "/video-testimonials" },
    ],
  },
]

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms & Conditions", href: "/terms-and-conditions" },
  { name: "Legal Disclaimer", href: "/legal-disclaimer" },
  { name: "Cancellation & Refund Policy", href: "/cancellation-refund-policy" },
]

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050807] text-white">
      {/* CTA */}
      <div className="border-b border-white/10">
        <div className="container mx-auto flex flex-col gap-6 px-4 py-12 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold leading-tight md:text-3xl">Want more customers from Google?</h2>
            <p className="mt-2 text-[15px] leading-relaxed text-zinc-400">Book a free 30-minute call. We will look at your site and tell you honestly what is holding it back.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-green-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-green-400">Book a free call <ArrowUpRight className="h-4 w-4" /></a>
            <Link href="/free-audit" className="inline-flex items-center rounded-lg border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-green-500/60">Get a free SEO audit</Link>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="container mx-auto px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-12">
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block overflow-hidden rounded-xl bg-white px-1" aria-label="CodedSEO home">
              <img src="/codedseo.png" alt="CodedSEO" className="-my-[20px] h-[92px] w-auto" />
            </Link>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-zinc-400">
              CodedSEO is an SEO and AI search agency helping businesses in the USA and worldwide get found on Google and in AI answers.
            </p>
            <ul className="mt-6 space-y-3 text-[15px] text-zinc-300">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                <a href="mailto:sales@codedseo.com" className="transition hover:text-green-400">sales@codedseo.com</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                <span>Mohali, Punjab, India<br /><span className="text-zinc-500">Serving clients across the USA</span></span>
              </li>
            </ul>
            <div className="mt-6">
              <PreferredSourceButton />
            </div>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500">{col.title}</h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-[15px] text-zinc-300 transition hover:text-green-400">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto flex flex-col gap-4 px-4 py-6 text-sm sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p className="text-zinc-500">© {new Date().getFullYear()} CodedSEO. All rights reserved.</p>
          <nav aria-label="Legal" className="flex flex-wrap items-center gap-x-4 gap-y-2">
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-zinc-400 transition hover:text-green-400">{link.name}</Link>
            ))}
            <a href="/sitemap.xml" className="text-zinc-400 transition hover:text-green-400">Sitemap</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}