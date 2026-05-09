"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { 
  Search, CheckCircle2, TrendingUp, Target, FileText, Link2,
  BarChart3, Zap, ArrowRight, Star
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const features = [
  {
    icon: <Search className="w-5 h-5" />,
    title: "Keyword Research & Strategy",
    description: "In-depth keyword analysis to identify high-value opportunities with the best ROI potential."
  },
  {
    icon: <FileText className="w-5 h-5" />,
    title: "On-Page Optimization",
    description: "Optimize titles, meta descriptions, headers, and content for maximum search visibility."
  },
  {
    icon: <Link2 className="w-5 h-5" />,
    title: "Technical SEO Audit",
    description: "Comprehensive site audit to fix crawlability, indexing, and performance issues."
  },
  {
    icon: <BarChart3 className="w-5 h-5" />,
    title: "Content Strategy",
    description: "Data-driven content planning to establish topical authority and drive organic traffic."
  },
  {
    icon: <Link2 className="w-5 h-5" />,
    title: "Link Building",
    description: "Ethical white-hat link building to increase domain authority and rankings."
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    title: "Analytics & Reporting",
    description: "Real-time dashboards and monthly reports tracking rankings, traffic, and conversions."
  },
]

const processSteps = [
  { step: "01", title: "Discovery", description: "We analyze your business, competitors, and target market to understand your unique position." },
  { step: "02", title: "Audit", description: "Comprehensive technical and content audit to identify opportunities and issues." },
  { step: "03", title: "Strategy", description: "Custom SEO strategy tailored to your goals, timeline, and budget." },
  { step: "04", title: "Execution", description: "Implementation of on-page, technical, and off-page optimizations." },
  { step: "05", title: "Optimization", description: "Continuous monitoring, testing, and refinement for maximum results." },
]

const results = [
  { metric: "312%", label: "Average Traffic Increase" },
  { metric: "89%", label: "First Page Rankings" },
  { metric: "4.2x", label: "Average ROI" },
  { metric: "97%", label: "Client Retention" },
]

const faqs = [
  {
    question: "How long does it take to see results?",
    answer: "Most clients see measurable improvements within 3-4 months, with significant results by 6 months. SEO is a long-term investment, and we focus on sustainable growth."
  },
  {
    question: "What industries do you work with?",
    answer: "We work with businesses across all industries, from e-commerce and SaaS to healthcare and legal. Our strategies are customized for each industry's unique challenges."
  },
  {
    question: "Do you guarantee rankings?",
    answer: "We don't guarantee specific rankings (no ethical SEO agency can), but we do guarantee measurable improvement and transparency. Our 97% success rate speaks for itself."
  },
  {
    question: "What's included in your organic SEO service?",
    answer: "Our service includes keyword research, on-page optimization, technical SEO, content strategy, link building, and monthly reporting. Everything you need for organic growth."
  },
]

export default function OrganicSEOPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
                <Search className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Core SEO Service</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
                Organic SEO That{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Drives Results
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Comprehensive on-page and off-page optimization to improve your organic search 
                rankings and drive targeted traffic that converts.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">Get Free Audit</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/case-studies">View Case Studies</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {results.map((result, index) => (
                <div key={index} className="p-6 rounded-2xl bg-card border border-border text-center">
                  <div className="text-3xl font-bold text-primary mb-1">{result.metric}</div>
                  <div className="text-sm text-muted-foreground">{result.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">What&apos;s Included</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need for comprehensive organic SEO success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that delivers consistent results
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                    {step.step}
                  </div>
                </div>
                <div className="flex-1 pt-3">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border"
              >
                <h3 className="font-semibold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground text-sm">{faq.answer}</p>
              </motion.div>
            ))}
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
              Ready to Dominate Organic Search?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get a free SEO audit and discover how we can help you achieve 
              first-page rankings and sustainable organic growth.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">Get Your Free Audit</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">Explore Other Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
