"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TrendingUp, ArrowRight, Globe, MapPin, ShoppingCart, BarChart3, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"

const categories = [
  { id: "all", label: "All Case Studies", icon: <BarChart3 className="w-4 h-4" /> },
  { id: "worldwide", label: "Worldwide SEO", icon: <Globe className="w-4 h-4" /> },
  { id: "local", label: "Local SEO", icon: <MapPin className="w-4 h-4" /> },
  { id: "ecommerce", label: "E-commerce SEO", icon: <ShoppingCart className="w-4 h-4" /> },
]

const caseStudies = [
  {
    id: 1,
    category: "ecommerce",
    client: "StyleHub Fashion",
    industry: "E-commerce / Fashion",
    image: "/case-studies/stylehub.jpg",
    trafficIncrease: "847%",
    revenueIncrease: "$2.4M",
    timeframe: "12 months",
    description: "Transformed an online fashion retailer from obscurity to industry leader with comprehensive e-commerce SEO.",
    metrics: [
      { label: "Organic Traffic", before: "12K", after: "113K" },
      { label: "Keyword Rankings", before: "156", after: "2,847" },
      { label: "Revenue", before: "$180K", after: "$2.4M" },
    ]
  },
  {
    id: 2,
    category: "worldwide",
    client: "TechVentures SaaS",
    industry: "SaaS / Technology",
    image: "/case-studies/techventures.jpg",
    trafficIncrease: "523%",
    revenueIncrease: "$5.2M",
    timeframe: "18 months",
    description: "Global SEO campaign that established a SaaS startup as a market leader across 15 countries.",
    metrics: [
      { label: "Organic Traffic", before: "8K", after: "50K" },
      { label: "Lead Generation", before: "120/mo", after: "890/mo" },
      { label: "MRR Growth", before: "$85K", after: "$520K" },
    ]
  },
  {
    id: 3,
    category: "local",
    client: "Premier Dental Group",
    industry: "Healthcare / Dental",
    image: "/case-studies/dental.jpg",
    trafficIncrease: "312%",
    revenueIncrease: "$890K",
    timeframe: "9 months",
    description: "Local SEO strategy that helped a dental practice dominate their city and triple new patient appointments.",
    metrics: [
      { label: "Local Traffic", before: "1.2K", after: "4.9K" },
      { label: "Google Map Pack", before: "Not Ranked", after: "#1" },
      { label: "New Patients", before: "45/mo", after: "156/mo" },
    ]
  },
  {
    id: 4,
    category: "ecommerce",
    client: "HomeDecor Plus",
    industry: "E-commerce / Home & Garden",
    image: "/case-studies/homedecor.jpg",
    trafficIncrease: "692%",
    revenueIncrease: "$3.8M",
    timeframe: "14 months",
    description: "Comprehensive SEO overhaul that transformed a struggling online store into a category leader.",
    metrics: [
      { label: "Organic Traffic", before: "22K", after: "174K" },
      { label: "Product Rankings", before: "312", after: "4,521" },
      { label: "Conversion Rate", before: "1.2%", after: "3.8%" },
    ]
  },
  {
    id: 5,
    category: "worldwide",
    client: "CloudSecure Inc",
    industry: "Cybersecurity / Enterprise",
    image: "/case-studies/cloudsecure.jpg",
    trafficIncrease: "445%",
    revenueIncrease: "$12M",
    timeframe: "24 months",
    description: "Enterprise SEO strategy targeting high-value B2B keywords across global markets.",
    metrics: [
      { label: "Organic Traffic", before: "15K", after: "82K" },
      { label: "Enterprise Leads", before: "12/mo", after: "78/mo" },
      { label: "Contract Value", before: "$1.2M", after: "$12M" },
    ]
  },
  {
    id: 6,
    category: "local",
    client: "Johnson Law Firm",
    industry: "Legal / Personal Injury",
    image: "/case-studies/lawfirm.jpg",
    trafficIncrease: "278%",
    revenueIncrease: "$1.5M",
    timeframe: "8 months",
    description: "Local SEO campaign that established a law firm as the go-to choice for personal injury cases.",
    metrics: [
      { label: "Local Traffic", before: "890", after: "3.4K" },
      { label: "Case Inquiries", before: "22/mo", after: "89/mo" },
      { label: "Case Value", before: "$320K", after: "$1.5M" },
    ]
  },
]

export default function CaseStudiesPage() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredStudies = activeCategory === "all" 
    ? caseStudies 
    : caseStudies.filter(study => study.category === activeCategory)

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
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Proven Results</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Real Results for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Real Businesses
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Explore how we&apos;ve helped businesses across industries achieve remarkable 
              organic growth and sustainable results.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto"
          >
            {[
              { number: "500+", label: "Clients Served" },
              { number: "10M+", label: "Keywords Ranked" },
              { number: "$50M+", label: "Revenue Generated" },
              { number: "97%", label: "Success Rate" },
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-card border border-border">
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-y border-border sticky top-16 lg:top-20 bg-background/95 backdrop-blur-xl z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            <Filter className="w-5 h-5 text-muted-foreground flex-shrink-0" />
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                {category.icon}
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full p-6 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">{study.industry}</div>
                      <h3 className="text-2xl font-bold">{study.client}</h3>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                      <TrendingUp className="w-4 h-4" />
                      {study.trafficIncrease}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6">{study.description}</p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {study.metrics.map((metric, i) => (
                      <div key={i} className="text-center p-3 rounded-xl bg-muted/50">
                        <div className="text-xs text-muted-foreground mb-1">{metric.label}</div>
                        <div className="text-xs text-muted-foreground line-through">{metric.before}</div>
                        <div className="text-lg font-bold text-primary">{metric.after}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">
                      Achieved in <span className="font-medium text-foreground">{study.timeframe}</span>
                    </div>
                    <Link 
                      href={`/case-studies/${study.id}`}
                      className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all"
                    >
                      Read Full Story <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Be Our Next Success Story?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses that have transformed their online presence with RankFlow.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">Start Your Journey</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/video-testimonials">Watch Testimonials</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
