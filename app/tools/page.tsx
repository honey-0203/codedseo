"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { 
  Calculator, Search, Link2, FileText, BarChart3, Globe,
  Zap, ArrowRight, Star, CheckCircle2
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const tools = [
  {
    icon: <Search className="w-6 h-6" />,
    title: "Keyword Density Checker",
    description: "Analyze your content's keyword density to ensure optimal SEO without over-optimization.",
    popular: true,
    users: "45K+ users"
  },
  {
    icon: <Link2 className="w-6 h-6" />,
    title: "Backlink Analyzer",
    description: "Check your website's backlink profile and identify opportunities for improvement.",
    popular: true,
    users: "38K+ users"
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "SEO ROI Calculator",
    description: "Calculate the potential return on investment from your SEO campaigns.",
    popular: false,
    users: "22K+ users"
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Meta Tag Generator",
    description: "Create optimized title tags and meta descriptions for your web pages.",
    popular: true,
    users: "67K+ users"
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Website Speed Test",
    description: "Test your website's loading speed and get recommendations for improvement.",
    popular: false,
    users: "51K+ users"
  },
  {
    icon: <Calculator className="w-6 h-6" />,
    title: "Domain Authority Checker",
    description: "Check the domain authority score of any website instantly.",
    popular: false,
    users: "33K+ users"
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "XML Sitemap Generator",
    description: "Generate a complete XML sitemap for your website automatically.",
    popular: false,
    users: "28K+ users"
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: "SERP Simulator",
    description: "Preview how your page will appear in Google search results.",
    popular: false,
    users: "41K+ users"
  },
  {
    icon: <Link2 className="w-6 h-6" />,
    title: "Broken Link Checker",
    description: "Find and fix broken links on your website that hurt SEO.",
    popular: false,
    users: "19K+ users"
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Keyword Rank Tracker",
    description: "Track your keyword rankings across search engines over time.",
    popular: false,
    users: "36K+ users"
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Content Readability Analyzer",
    description: "Check your content's readability score and improve user engagement.",
    popular: false,
    users: "24K+ users"
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Mobile-Friendly Test",
    description: "Test if your website is optimized for mobile devices.",
    popular: false,
    users: "47K+ users"
  },
]

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">100% Free Tools</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Free SEO Tools to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Boost Your Rankings
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Professional-grade SEO tools, completely free. No sign-up required. 
              Start optimizing your website today.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-3 gap-6 mt-16 max-w-2xl mx-auto"
          >
            {[
              { number: "12", label: "Free Tools" },
              { number: "500K+", label: "Monthly Users" },
              { number: "4.9", label: "User Rating" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group"
              >
                <div className={`relative h-full p-6 rounded-2xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  tool.popular 
                    ? "bg-gradient-to-br from-primary/5 to-accent/5 border-primary/30 hover:border-primary/50" 
                    : "bg-card border-border hover:border-primary/50"
                }`}>
                  {tool.popular && (
                    <div className="absolute -top-3 right-6 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full flex items-center gap-1">
                      <Star className="w-3 h-3" /> Popular
                    </div>
                  )}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    tool.popular ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
                  }`}>
                    {tool.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{tool.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{tool.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{tool.users}</span>
                    <Button size="sm" variant={tool.popular ? "default" : "outline"} className="gap-1">
                      Use Tool <ArrowRight className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Free Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Are These Tools Free?</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We believe everyone deserves access to quality SEO tools
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "No Hidden Costs",
                  description: "All tools are completely free with no premium tiers or hidden features."
                },
                {
                  title: "No Sign-Up Required",
                  description: "Use any tool instantly without creating an account or providing personal info."
                },
                {
                  title: "Community First",
                  description: "We're committed to helping businesses succeed, regardless of budget."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-card border border-border text-center"
                >
                  <CheckCircle2 className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center p-12 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Need More Than Free Tools?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get a complete SEO strategy with our professional services and take your 
              rankings to the next level.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">Get Free Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">View Our Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
