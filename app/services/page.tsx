"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { 
  Search, ShoppingCart, Bot, MapPin, Link2, FileText, Megaphone, 
  Lightbulb, BarChart3, Building2, ArrowRight, CheckCircle2, Zap
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  {
    icon: <Search className="w-6 h-6" />,
    title: "Organic SEO",
    description: "Comprehensive on-page and off-page optimization to improve your organic search rankings and drive targeted traffic.",
    features: ["Keyword Research & Strategy", "On-Page Optimization", "Technical SEO Audit", "Content Strategy"],
    href: "/services/organic-seo",
    popular: false
  },
  {
    icon: <ShoppingCart className="w-6 h-6" />,
    title: "E-commerce SEO",
    description: "Specialized SEO strategies for online stores to increase product visibility and drive more sales.",
    features: ["Product Page Optimization", "Category Structure", "Schema Markup", "Competitor Analysis"],
    href: "/services/ecommerce-seo",
    popular: false
  },
  {
    icon: <Bot className="w-6 h-6" />,
    title: "AI-Powered SEO",
    description: "Leverage cutting-edge AI technology for predictive analytics, content optimization, and automated reporting.",
    features: ["AI Content Analysis", "Predictive Rankings", "Automated Monitoring", "Smart Recommendations"],
    href: "/services/ai-seo",
    popular: true
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Local SEO",
    description: "Dominate local search results and attract more customers from your geographic area.",
    features: ["Google Business Profile", "Local Citations", "Review Management", "Local Link Building"],
    href: "/services/local-seo",
    popular: false
  },
  {
    icon: <Link2 className="w-6 h-6" />,
    title: "Backlink Services",
    description: "Build high-quality backlinks from authoritative websites to boost your domain authority.",
    features: ["Guest Posting", "Broken Link Building", "Resource Link Building", "Competitor Backlink Analysis"],
    href: "/services/backlinks",
    popular: false
  },
  {
    icon: <Megaphone className="w-6 h-6" />,
    title: "Digital PR",
    description: "Earn media coverage and high-authority links through strategic PR campaigns.",
    features: ["Press Release Distribution", "Journalist Outreach", "Story Pitching", "Brand Mentions"],
    href: "/services/digital-pr",
    popular: false
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "SEO Consultancy",
    description: "Expert guidance and strategic advice to help your in-house team achieve better results.",
    features: ["Strategy Development", "Team Training", "Process Optimization", "Monthly Reviews"],
    href: "/services/consultancy",
    popular: false
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "SEO Audit",
    description: "Comprehensive technical and content audit with actionable recommendations for improvement.",
    features: ["Technical Analysis", "Content Audit", "Competitor Review", "Prioritized Action Plan"],
    href: "/services/seo-audit",
    popular: false
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    title: "Industry Solutions",
    description: "Tailored SEO strategies designed for specific industries and verticals.",
    features: ["SaaS SEO", "Healthcare SEO", "Finance SEO", "Legal SEO"],
    href: "/services/industries",
    popular: false
  },
]

const processSteps = [
  { step: "01", title: "Discovery", description: "We analyze your business, competitors, and market to understand your unique needs." },
  { step: "02", title: "Strategy", description: "Our team develops a customized SEO strategy aligned with your business goals." },
  { step: "03", title: "Execution", description: "We implement the strategy with precision, focusing on quick wins and long-term growth." },
  { step: "04", title: "Optimization", description: "Continuous monitoring and optimization to maximize results and ROI." },
]

export default function ServicesPage() {
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
              <span className="text-sm font-medium text-primary">Comprehensive SEO Solutions</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              SEO Services That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Drive Real Growth
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              From technical SEO to content strategy, we offer end-to-end solutions 
              designed to increase your organic visibility and revenue.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Link href={service.href} className="block h-full">
                  <div className={`relative h-full p-6 rounded-2xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                    service.popular 
                      ? "bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30" 
                      : "bg-card border-border hover:border-primary/50"
                  }`}>
                    {service.popular && (
                      <div className="absolute -top-3 right-6 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                        Most Popular
                      </div>
                    )}
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                      service.popular ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
                    }`}>
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center gap-2 text-primary font-medium text-sm">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative p-6 rounded-2xl bg-card border border-border"
              >
                <div className="text-5xl font-bold text-primary/20 mb-4">{step.step}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
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
              Not Sure Which Service You Need?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get a free consultation with our SEO experts. We&apos;ll analyze your website 
              and recommend the best strategy for your business goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">Get Free Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/case-studies">View Success Stories</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
