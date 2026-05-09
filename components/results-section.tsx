"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  TrendingUp, 
  ExternalLink,
  ArrowRight,
  Trophy,
  Target,
  BarChart3,
  Sparkles
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const caseStudies = [
  {
    id: 1,
    company: "TechStart Inc.",
    industry: "SaaS",
    logo: "T",
    challenge: "Struggling to rank for competitive B2B software keywords with minimal organic presence.",
    results: {
      traffic: { value: "847%", label: "Traffic Increase" },
      keywords: { value: "2,340", label: "Keywords Ranked" },
      leads: { value: "156%", label: "Lead Growth" },
    },
    timeline: "6 months",
    keywordRankings: [
      { keyword: "project management software", position: 1 },
      { keyword: "team collaboration tools", position: 2 },
      { keyword: "enterprise task management", position: 1 },
    ],
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: 2,
    company: "HealthPlus Clinic",
    industry: "Healthcare",
    logo: "H",
    challenge: "Local visibility was poor despite being a top-rated medical practice in the area.",
    results: {
      traffic: { value: "523%", label: "Local Traffic" },
      keywords: { value: "890", label: "Local Keywords" },
      leads: { value: "234%", label: "Appointments" },
    },
    timeline: "4 months",
    keywordRankings: [
      { keyword: "best clinic near me", position: 1 },
      { keyword: "family doctor [city]", position: 1 },
      { keyword: "urgent care nearby", position: 2 },
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    company: "LuxeStyle Fashion",
    industry: "E-Commerce",
    logo: "L",
    challenge: "High competition in fashion e-commerce with poor category page rankings.",
    results: {
      traffic: { value: "692%", label: "Organic Revenue" },
      keywords: { value: "4,120", label: "Product Rankings" },
      leads: { value: "189%", label: "Conversion Rate" },
    },
    timeline: "8 months",
    keywordRankings: [
      { keyword: "designer handbags online", position: 1 },
      { keyword: "luxury fashion store", position: 3 },
      { keyword: "premium clothing brands", position: 2 },
    ],
    color: "from-pink-500 to-rose-500",
  },
]

const stats = [
  { icon: TrendingUp, value: "10M+", label: "Keywords Ranked", description: "Across all clients" },
  { icon: Trophy, value: "500+", label: "Success Stories", description: "Happy clients worldwide" },
  { icon: Target, value: "97%", label: "First Page Rankings", description: "Within 6 months" },
  { icon: BarChart3, value: "$50M+", label: "Revenue Generated", description: "For our clients" },
]

export function ResultsSection() {
  const [activeCase, setActiveCase] = useState(0)

  return (
    <section id="results" className="py-24 lg:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Proven Results</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-balance">
            Real Results,
            <span className="gradient-text"> Real Growth</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            We don&apos;t just promise results—we deliver them. See how we&apos;ve transformed businesses across industries.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border text-center hover:border-primary/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-3xl lg:text-4xl font-bold text-foreground mb-1">{stat.value}</p>
              <p className="text-sm font-medium text-foreground mb-1">{stat.label}</p>
              <p className="text-xs text-muted-foreground">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Case Studies */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Case Study Selector */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold mb-6 text-foreground">Featured Case Studies</h3>
            {caseStudies.map((study, index) => (
              <button
                key={study.id}
                onClick={() => setActiveCase(index)}
                className={`w-full p-5 rounded-xl text-left transition-all duration-300 ${
                  activeCase === index
                    ? "bg-card border-2 border-primary shadow-lg shadow-primary/10"
                    : "bg-card/50 border border-border hover:border-primary/30"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${study.color} flex items-center justify-center text-white font-bold text-lg`}>
                    {study.logo}
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-foreground">{study.company}</p>
                    <p className="text-sm text-muted-foreground">{study.industry}</p>
                  </div>
                  <div className={`transition-transform ${activeCase === index ? "rotate-90" : ""}`}>
                    <ArrowRight className="w-5 h-5 text-primary" />
                  </div>
                </div>
              </button>
            ))}
          </motion.div>

          {/* Case Study Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCase}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-card rounded-2xl border border-border p-6 lg:p-8"
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${caseStudies[activeCase].color} flex items-center justify-center text-white font-bold text-2xl`}>
                    {caseStudies[activeCase].logo}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground">{caseStudies[activeCase].company}</h4>
                    <p className="text-sm text-muted-foreground">
                      {caseStudies[activeCase].industry} • {caseStudies[activeCase].timeline}
                    </p>
                  </div>
                </div>

                {/* Challenge */}
                <div className="mb-6">
                  <p className="text-sm font-medium text-muted-foreground mb-2">THE CHALLENGE</p>
                  <p className="text-foreground">{caseStudies[activeCase].challenge}</p>
                </div>

                {/* Results */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {Object.values(caseStudies[activeCase].results).map((result) => (
                    <div key={result.label} className="text-center p-4 rounded-xl bg-muted/50">
                      <p className="text-2xl lg:text-3xl font-bold text-primary mb-1">{result.value}</p>
                      <p className="text-xs text-muted-foreground">{result.label}</p>
                    </div>
                  ))}
                </div>

                {/* Keyword Rankings */}
                <div className="mb-6">
                  <p className="text-sm font-medium text-muted-foreground mb-3">TOP KEYWORD RANKINGS</p>
                  <div className="space-y-2">
                    {caseStudies[activeCase].keywordRankings.map((ranking) => (
                      <div
                        key={ranking.keyword}
                        className="flex items-center justify-between p-3 rounded-lg bg-muted/50"
                      >
                        <span className="text-sm text-foreground">{ranking.keyword}</span>
                        <span className={`text-sm font-bold ${
                          ranking.position === 1 ? "text-primary" : "text-muted-foreground"
                        }`}>
                          #{ranking.position}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                  <Link href="#contact">
                    Get Similar Results
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
