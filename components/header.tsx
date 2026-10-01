"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Menu, X, ChevronDown, ChevronRight, Zap, Search, TrendingUp,
  Globe, ShoppingCart, Bot, Link2, Users, Building2, Target,
  Megaphone, Share2, PenTool, Code, UserCheck, Headphones, Tag, Rocket,
  Award, Video, FileText, Lightbulb, BookOpen, BarChart3, MapPin, Play
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { LOCATIONS } from "@/lib/locations"
import { LocationsMenu } from "@/components/locations-menu"
import { NavPanel, type NavFeature } from "@/components/nav-panel"

interface SubMenuItem {
  name: string
  href: string
  description?: string
  icon?: React.ReactNode
}

interface MenuItem {
  name: string
  href: string
  submenu?: SubMenuItem[]
  locationMenu?: boolean
  feature?: NavFeature
  columns?: number
  align?: "left" | "center" | "right"
  megaMenu?: {
    sections: {
      title: string
      items: SubMenuItem[]
    }[]
    featured?: {
      title: string
      description: string
      href: string
      image?: string
    }
  }
}

const menuItems: MenuItem[] = [
  {
    name: "Home",
    href: "/",
  },

  {
    name: "Who We Are",
    href: "/about",
    align: "left",
    feature: {
      eyebrow: "About CodedSEO",
      title: "An SEO team from Mohali, built for global brands",
      text: "Senior strategists, writers and link builders working for clients in the USA, UK, Canada and Australia.",
      visual: "stat",
      stat: { label: "Client retention", value: "98%" },
      cta: { label: "Meet the team", href: "/team" },
      sub: { label: "Read client reviews", href: "/reviews" },
    },
    submenu: [
      { name: "About Us", href: "/about", description: "Our story and mission", icon: <Building2 className="w-4 h-4" /> },
      { name: "Why Choose CodedSEO", href: "/why-choose-us", description: "What sets us apart", icon: <Award className="w-4 h-4" /> },
      { name: "Client Reviews", href: "/reviews", description: "What our clients say", icon: <Users className="w-4 h-4" /> },
      { name: "Video Testimonials", href: "/video-testimonials", description: "Success stories on video", icon: <Video className="w-4 h-4" /> },
      { name: "Our Team", href: "/team", description: "Meet our experts", icon: <UserCheck className="w-4 h-4" /> },
    ]
  },
  {
    name: "SEO Services",
    href: "/services",
    columns: 2,
    feature: {
      eyebrow: "For agencies",
      title: "SEO Outsourcing India",
      text: "White label SEO delivered under your brand. You keep the client, we do the work.",
      visual: "bars",
      cta: { label: "Become a partner", href: "/seo-outsourcing-india" },
      sub: { label: "Or get a free SEO audit", href: "/free-audit" },
    },
    megaMenu: {
      sections: [
        {
          title: "Core SEO",
          items: [
            { name: "Organic SEO", href: "/services/organic-seo", description: "Rank higher organically", icon: <Search className="w-4 h-4" /> },
            { name: "E-commerce SEO", href: "/services/ecommerce-seo", description: "Boost product visibility", icon: <ShoppingCart className="w-4 h-4" /> },
            { name: "AI-Powered SEO", href: "/services/ai-seo", description: "Next-gen optimization", icon: <Bot className="w-4 h-4" /> },
            { name: "Local SEO", href: "/services/local-seo", description: "Dominate local search", icon: <MapPin className="w-4 h-4" /> },
          ]
        },
        {
          title: "Link Building",
          items: [
            { name: "Backlink Services", href: "/services/backlinks", description: "Quality link building", icon: <Link2 className="w-4 h-4" /> },
            { name: "Guest Posting", href: "/services/guest-posting", description: "Authority content placement", icon: <FileText className="w-4 h-4" /> },
            { name: "Digital PR", href: "/services/digital-pr", description: "Earned media coverage", icon: <Megaphone className="w-4 h-4" /> },
          ]
        },
        {
          title: "Consulting",
          items: [
            { name: "SEO Consultancy", href: "/services/consultancy", description: "Expert guidance", icon: <Lightbulb className="w-4 h-4" /> },
            { name: "SEO Audit", href: "/services/seo-audit", description: "Comprehensive analysis", icon: <BarChart3 className="w-4 h-4" /> },
            { name: "Industry Solutions", href: "/services/industries", description: "Vertical expertise", icon: <Building2 className="w-4 h-4" /> },
          ]
        },
        {
          title: "Who It's For",
          items: [
            { name: "Small Business SEO", href: "/seo", description: "SEO built for small businesses", icon: <TrendingUp className="w-4 h-4" /> },
            { name: "SEO Outsourcing India", href: "/seo-outsourcing-india", description: "White label SEO for agencies", icon: <Tag className="w-4 h-4" /> },
          ]
        }
      ],
      featured: {
        title: "Free SEO Audit",
        description: "Get a comprehensive analysis of your website's SEO health with actionable recommendations.",
        href: "/free-audit"
      }
    }
  },
  {
    name: "Digital Marketing",
    href: "/digital-marketing",
    columns: 3,
    feature: {
      eyebrow: "Full funnel",
      title: "Complete digital strategy",
      text: "SEO, Google Ads and content working as one plan, so every channel feeds the next.",
      visual: "bars",
      cta: { label: "Plan my strategy", href: "/contact" },
      sub: { label: "Or get a free SEO audit", href: "/free-audit" },
    },
    megaMenu: {
      sections: [
        {
          title: "Paid Advertising",
          items: [
            { name: "Google Ads (PPC)", href: "/digital-marketing/google-ads", description: "Pay-per-click campaigns", icon: <Target className="w-4 h-4" /> },
            { name: "Facebook Ads", href: "/digital-marketing/facebook-ads", description: "Social media advertising", icon: <Share2 className="w-4 h-4" /> },
            { name: "LinkedIn Ads", href: "/digital-marketing/linkedin-ads", description: "B2B advertising", icon: <Users className="w-4 h-4" /> },
            { name: "Retargeting", href: "/digital-marketing/retargeting", description: "Convert lost visitors", icon: <Rocket className="w-4 h-4" /> },
          ]
        },
        {
          title: "Content & Social",
          items: [
            { name: "Content Marketing", href: "/digital-marketing/content-marketing", description: "Engaging content strategy", icon: <PenTool className="w-4 h-4" /> },
            { name: "Social Media Marketing", href: "/digital-marketing/social-media", description: "Build your presence", icon: <Share2 className="w-4 h-4" /> },
            { name: "Email Marketing", href: "/digital-marketing/email-marketing", description: "Nurture and convert", icon: <Megaphone className="w-4 h-4" /> },
            { name: "Video Marketing", href: "/digital-marketing/video-marketing", description: "Visual storytelling", icon: <Play className="w-4 h-4" /> },
          ]
        },
        {
          title: "Development & More",
          items: [
            { name: "Web Design", href: "/digital-marketing/web-design", description: "Beautiful websites", icon: <Code className="w-4 h-4" /> },
            { name: "Web Development", href: "/digital-marketing/web-development", description: "Custom solutions", icon: <Code className="w-4 h-4" /> },
            { name: "CRO Services", href: "/digital-marketing/cro", description: "Conversion optimization", icon: <TrendingUp className="w-4 h-4" /> },
            { name: "White Label", href: "/digital-marketing/white-label", description: "Agency partnerships", icon: <Tag className="w-4 h-4" /> },
          ]
        }
      ],
      featured: {
        title: "Complete Digital Strategy",
        description: "Get a tailored digital marketing plan that combines SEO, PPC, and content for maximum ROI.",
        href: "/contact"
      }
    }
  },
  {
    name: "Locations",
    href: LOCATIONS[0]?.href ?? "/seo-agency-usa",
    locationMenu: true,
  },
  {
    name: "Case Studies",
    href: "/case-studies",
    align: "right",
    feature: {
      eyebrow: "Results",
      title: "1M+ keywords ranked for 100+ clients",
      text: "See the strategies behind real traffic, lead and revenue growth.",
      visual: "line",
      cta: { label: "View case studies", href: "/case-studies" },
      sub: { label: "Watch video testimonials", href: "/video-testimonials" },
    },
    submenu: [
      { name: "Worldwide SEO", href: "/case-studies/worldwide", description: "Global success stories", icon: <Globe className="w-4 h-4" /> },
      { name: "Local SEO", href: "/case-studies/local", description: "Local market wins", icon: <MapPin className="w-4 h-4" /> },
      { name: "E-commerce SEO", href: "/case-studies/ecommerce", description: "Online store growth", icon: <ShoppingCart className="w-4 h-4" /> },
      { name: "All Case Studies", href: "/case-studies", description: "Browse all results", icon: <BarChart3 className="w-4 h-4" /> },
      { name: "Video Testimonials", href: "/video-testimonials", description: "Client success stories", icon: <Video className="w-4 h-4" /> },
    ]
  },
  {
    name: "Resources",
    href: "/resources",
    align: "right",
    feature: {
      eyebrow: "Latest guide",
      title: "7 Best AI SEO/GEO Agencies in 2026",
      text: "Ranked and reviewed, with the questions to ask before you hire one.",
      cta: { label: "Read the guide", href: "/blog/best-ai-seo-geo-agencies" },
      sub: { label: "All articles", href: "/blog" },
    },
    submenu: [
      { name: "Blog", href: "/blog", description: "Latest SEO insights", icon: <FileText className="w-4 h-4" /> },
      { name: "SEO Insights", href: "/insights", description: "Industry analysis", icon: <Lightbulb className="w-4 h-4" /> },
      { name: "Free Tools", href: "/tools", description: "SEO calculators & tools", icon: <BarChart3 className="w-4 h-4" /> },
      { name: "Learning Hub", href: "/learn", description: "SEO guides & tutorials", icon: <BookOpen className="w-4 h-4" /> },
    ]
  }
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState<string | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleMouseEnter = (menuName: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setActiveMenu(menuName)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null)
    }, 150)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-background/95 backdrop-blur-xl border-b border-border shadow-lg"
        : "bg-background/80 backdrop-blur-md"
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex shrink-0 items-center">
            <img
              src="/codedseo.png"
              alt="CodedSEO Logo"
              className="h-30 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-0.5 2xl:gap-1">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 whitespace-nowrap px-2.5 2xl:px-4 py-2 text-sm font-medium rounded-lg transition-colors ${activeMenu === item.name
                    ? "text-primary bg-primary/5"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                >
                  {item.name}
                  {(item.submenu || item.megaMenu || item.locationMenu) && (
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeMenu === item.name ? "rotate-180" : ""}`} />
                  )}
                </Link>

                {/* Dropdown Menu (sab menus ek design) */}
                <AnimatePresence>
                  {activeMenu === item.name && (item.submenu || item.megaMenu) && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className={`absolute top-full mt-2 max-w-[calc(100vw-32px)] overflow-hidden rounded-3xl border border-border bg-background shadow-[0_30px_80px_-20px_rgba(0,0,0,0.35)] ${
                        item.align === "left" ? "left-0" : item.align === "right" ? "right-0" : "left-1/2 -translate-x-1/2"
                      } ${(item.columns ?? 1) >= 3 ? "w-[1040px]" : (item.columns ?? 1) === 2 ? "w-[880px]" : "w-[600px]"}`}
                    >
                      <NavPanel
                        sections={item.megaMenu ? item.megaMenu.sections : [{ title: item.name, items: item.submenu ?? [] }]}
                        feature={item.feature}
                        columns={item.columns ?? 1}
                      />
                    </motion.div>
                  )}

                  {/* Locations Menu */}
                  {activeMenu === item.name && item.locationMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[1000px] max-w-[calc(100vw-32px)] rounded-3xl border border-border bg-background shadow-[0_30px_80px_-20px_rgba(0,0,0,0.35)] overflow-hidden"
                    >
                      <LocationsMenu />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>
                    {/* CTA Buttons */}
          {/* Premium CTA Buttons */}
          <div className="hidden xl:flex shrink-0 items-center gap-3 2xl:gap-4">

            {/* Contact Button */}
            <Link
              href="/contact"
              className="group relative hidden 2xl:inline-flex whitespace-nowrap items-center justify-center overflow-hidden rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:border-green-500 hover:text-green-600 hover:shadow-lg"
            >
              <span className="relative z-10 flex items-center gap-2">
                Contact Us
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </Link>

            {/* Book Meeting Button */}
            <a href="https://calendly.com/codedseo-sales/30min" target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center justify-center overflow-hidden whitespace-nowrap rounded-full bg-green-600 px-5 2xl:px-6 py-3 text-sm font-bold text-white shadow-[0_10px_30px_rgba(34,197,94,0.35)] transition-all duration-300 hover:scale-105 hover:bg-green-700">
              <span className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-600 opacity-100"></span>

              <span className="relative z-10 flex items-center gap-2">
                Book a Meeting

                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 transition-all duration-300 group-hover:translate-x-1">
                  →
                </div>
              </span>
            </a>
          </div>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-background border-b border-border max-h-[80vh] overflow-y-auto"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col gap-1">
                {menuItems.map((item) => (
                  <div key={item.name}>
                    {!(item.submenu || item.megaMenu || item.locationMenu) ? (
                      <Link href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-between w-full py-3 px-4 rounded-xl text-foreground hover:bg-muted transition-colors">
                        <span className="font-medium">{item.name}</span>
                      </Link>
                    ) : (
                    <button
                      onClick={() => setActiveMobileSubmenu(activeMobileSubmenu === item.name ? null : item.name)}
                      className="flex items-center justify-between w-full py-3 px-4 rounded-xl text-foreground hover:bg-muted transition-colors"
                    >
                      <span className="font-medium">{item.name}</span>
                      {(item.submenu || item.megaMenu || item.locationMenu) && (
                        <ChevronRight className={`w-4 h-4 transition-transform ${activeMobileSubmenu === item.name ? "rotate-90" : ""}`} />
                      )}
                    </button>
                    )}

                    <AnimatePresence>
                      {activeMobileSubmenu === item.name && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-4 overflow-hidden"
                        >
                          {item.submenu && item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="flex items-center gap-3 py-2.5 px-4 text-muted-foreground hover:text-foreground transition-colors"
                            >
                              {subItem.icon}
                              <span>{subItem.name}</span>
                            </Link>
                          ))}
                          {item.locationMenu && LOCATIONS.map((loc) => (
                            <div key={loc.href} className="mb-2">
                              <Link href={loc.href} onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 py-2.5 px-4 text-foreground hover:text-primary transition-colors">
                                <span className="flex h-6 w-7 items-center justify-center rounded-md bg-primary/10 text-[10px] font-bold text-primary">{loc.code}</span>
                                <span>{loc.label}</span>
                              </Link>
                              {loc.cities.map((city) => (
                                <Link key={city.href} href={city.href} onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 py-2 pl-14 pr-4 text-sm text-muted-foreground hover:text-foreground transition-colors">
                                  <MapPin className="w-3.5 h-3.5" />
                                  <span>{city.name}</span>
                                </Link>
                              ))}
                            </div>
                          ))}
                          {item.megaMenu && item.megaMenu.sections.map((section) => (
                            <div key={section.title} className="mb-3">
                              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-4 py-2">
                                {section.title}
                              </div>
                              {section.items.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className="flex items-center gap-3 py-2.5 px-4 text-muted-foreground hover:text-foreground transition-colors"
                                >
                                  {subItem.icon}
                                  <span>{subItem.name}</span>
                                </Link>
                              ))}
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}

                <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-border">
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/free-audit">Free SEO Audit</Link>
                  </Button>
                  <Button className="w-full bg-primary hover:bg-primary/90" asChild>
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}