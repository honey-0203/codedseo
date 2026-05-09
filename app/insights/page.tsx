"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { 
  Lightbulb, TrendingUp, BarChart3, ArrowRight, Calendar,
  Download, Eye, Zap
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const reports = [
  {
    title: "State of SEO 2026",
    description: "Comprehensive analysis of SEO trends, algorithm updates, and best practices for 2026.",
    date: "April 2026",
    views: "24,500",
    category: "Annual Report",
    featured: true
  },
  {
    title: "AI in SEO: Complete Guide",
    description: "How artificial intelligence is transforming search optimization and what it means for marketers.",
    date: "March 2026",
    views: "18,200",
    category: "Industry Analysis",
    featured: true
  },
  {
    title: "Core Web Vitals Impact Study",
    description: "Analysis of how Core Web Vitals affect rankings across 10,000+ websites.",
    date: "March 2026",
    views: "15,800",
    category: "Research",
    featured: false
  },
  {
    title: "E-commerce SEO Benchmark Report",
    description: "Performance benchmarks and best practices for e-commerce websites.",
    date: "February 2026",
    views: "12,400",
    category: "Benchmark",
    featured: false
  },
  {
    title: "Local SEO Ranking Factors 2026",
    description: "The most important factors affecting local search rankings this year.",
    date: "February 2026",
    views: "11,200",
    category: "Research",
    featured: false
  },
  {
    title: "Link Building Effectiveness Study",
    description: "Analysis of which link building strategies deliver the best results.",
    date: "January 2026",
    views: "9,800",
    category: "Research",
    featured: false
  },
]

const trends = [
  {
    title: "AI-Generated Content",
    change: "+847%",
    direction: "up",
    description: "Adoption of AI content tools in SEO strategies"
  },
  {
    title: "Voice Search Queries",
    change: "+234%",
    direction: "up",
    description: "Growth in voice-based search interactions"
  },
  {
    title: "Zero-Click Searches",
    change: "+56%",
    direction: "up",
    description: "Searches answered directly in SERPs"
  },
  {
    title: "Mobile-First Indexing",
    change: "98%",
    direction: "stable",
    description: "Websites now indexed mobile-first"
  },
]

export default function InsightsPage() {
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
              <Lightbulb className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Industry Insights</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              SEO Research &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Industry Analysis
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Data-driven insights, research reports, and trend analysis to help you 
              stay ahead in the ever-evolving world of SEO.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trends Section */}
      <section className="py-12 border-y border-border bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-bold">Current SEO Trends</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trends.map((trend, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border"
              >
                <div className={`text-2xl font-bold mb-1 ${
                  trend.direction === "up" ? "text-primary" : "text-muted-foreground"
                }`}>
                  {trend.change}
                </div>
                <h3 className="font-semibold mb-1">{trend.title}</h3>
                <p className="text-xs text-muted-foreground">{trend.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Reports */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Reports</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our most comprehensive research and analysis
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6 mb-12">
            {reports.filter(r => r.featured).map((report, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    {report.category}
                  </span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {report.date}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3">{report.title}</h3>
                <p className="text-muted-foreground mb-6">{report.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <Eye className="w-4 h-4" /> {report.views} views
                  </span>
                  <Button className="gap-2">
                    <Download className="w-4 h-4" /> Download Report
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* All Reports */}
          <h3 className="text-2xl font-bold mb-6">All Reports</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reports.filter(r => !r.featured).map((report, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-2 py-1 rounded-full bg-muted text-xs font-medium">
                    {report.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{report.date}</span>
                </div>
                <h4 className="font-semibold mb-2">{report.title}</h4>
                <p className="text-muted-foreground text-sm mb-4">{report.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Eye className="w-3 h-3" /> {report.views}
                  </span>
                  <Button variant="ghost" size="sm" className="gap-1">
                    Read <ArrowRight className="w-3 h-3" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <BarChart3 className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Get Monthly Insights</h2>
            <p className="text-muted-foreground mb-8">
              Receive our latest research and analysis directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <Button size="lg">Subscribe</Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
