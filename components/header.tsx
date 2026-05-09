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
    name: "Who We Are",
    href: "/about",
    submenu: [
      { name: "About Us", href: "/about", description: "Our story and mission", icon: <Building2 className="w-4 h-4" /> },
      { name: "Why Choose RankFlow", href: "/why-choose-us", description: "What sets us apart", icon: <Award className="w-4 h-4" /> },
      { name: "Client Reviews", href: "/reviews", description: "What our clients say", icon: <Users className="w-4 h-4" /> },
      { name: "Video Testimonials", href: "/video-testimonials", description: "Success stories on video", icon: <Video className="w-4 h-4" /> },
      { name: "Our Team", href: "/team", description: "Meet our experts", icon: <UserCheck className="w-4 h-4" /> },
    ]
  },
  {
    name: "SEO Services",
    href: "/services",
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
    name: "Case Studies",
    href: "/case-studies",
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-xl border-b border-border shadow-lg"
          : "bg-background/80 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse" />
            </div>
            <span className="text-xl font-bold tracking-tight">
              Rank<span className="text-primary">Flow</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    activeMenu === item.name
                      ? "text-primary bg-primary/5"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  {item.name}
                  {(item.submenu || item.megaMenu) && (
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeMenu === item.name ? "rotate-180" : ""}`} />
                  )}
                </Link>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {activeMenu === item.name && item.submenu && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-72 bg-background rounded-2xl border border-border shadow-2xl overflow-hidden"
                    >
                      <div className="p-2">
                        {item.submenu.map((subItem, index) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="flex items-start gap-3 p-3 rounded-xl hover:bg-muted transition-colors group"
                          >
                            <div className="mt-0.5 p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                              {subItem.icon}
                            </div>
                            <div>
                              <div className="font-medium text-foreground">{subItem.name}</div>
                              {subItem.description && (
                                <div className="text-xs text-muted-foreground mt-0.5">{subItem.description}</div>
                              )}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Mega Menu */}
                  {activeMenu === item.name && item.megaMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[800px] bg-background rounded-2xl border border-border shadow-2xl overflow-hidden"
                    >
                      <div className="flex">
                        <div className="flex-1 grid grid-cols-3 gap-6 p-6">
                          {item.megaMenu.sections.map((section) => (
                            <div key={section.title}>
                              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                                {section.title}
                              </h3>
                              <div className="space-y-1">
                                {section.items.map((subItem) => (
                                  <Link
                                    key={subItem.name}
                                    href={subItem.href}
                                    className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted transition-colors group"
                                  >
                                    <div className="p-1.5 rounded-md bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                      {subItem.icon}
                                    </div>
                                    <div>
                                      <div className="text-sm font-medium text-foreground">{subItem.name}</div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                        {item.megaMenu.featured && (
                          <div className="w-64 bg-gradient-to-br from-primary/10 to-accent/10 p-6 flex flex-col justify-center">
                            <div className="p-3 bg-primary/20 rounded-xl w-fit mb-4">
                              <Rocket className="w-6 h-6 text-primary" />
                            </div>
                            <h4 className="font-bold text-foreground mb-2">{item.megaMenu.featured.title}</h4>
                            <p className="text-sm text-muted-foreground mb-4">{item.megaMenu.featured.description}</p>
                            <Button size="sm" asChild>
                              <Link href={item.megaMenu.featured.href}>Learn More</Link>
                            </Button>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/contact">Free Audit</Link>
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25" asChild>
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
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
            className="lg:hidden bg-background border-b border-border max-h-[80vh] overflow-y-auto"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col gap-1">
                {menuItems.map((item) => (
                  <div key={item.name}>
                    <button
                      onClick={() => setActiveMobileSubmenu(activeMobileSubmenu === item.name ? null : item.name)}
                      className="flex items-center justify-between w-full py-3 px-4 rounded-xl text-foreground hover:bg-muted transition-colors"
                    >
                      <span className="font-medium">{item.name}</span>
                      {(item.submenu || item.megaMenu) && (
                        <ChevronRight className={`w-4 h-4 transition-transform ${activeMobileSubmenu === item.name ? "rotate-90" : ""}`} />
                      )}
                    </button>
                    
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
                    <Link href="/contact">Free SEO Audit</Link>
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
