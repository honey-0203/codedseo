"use client"

import { motion } from "framer-motion"
import { 
  Search, 
  BarChart3, 
  Globe, 
  Zap, 
  Target, 
  Layers,
  ArrowUpRight,
  Sparkles,
  Bot,
  FileSearch
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  {
    icon: Bot,
    title: "AI-Powered SEO",
    description: "Leverage machine learning algorithms to predict ranking opportunities and optimize your content strategy with unprecedented precision.",
    features: ["GPT Search Optimization", "Predictive Analytics", "Auto Content Scoring"],
    color: "from-emerald-500 to-teal-500",
    popular: true,
  },
  {
    icon: Search,
    title: "Technical SEO",
    description: "Deep-dive audits that uncover every technical barrier preventing your site from reaching its full ranking potential.",
    features: ["Core Web Vitals", "Site Architecture", "Schema Markup"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: FileSearch,
    title: "Content Strategy",
    description: "Data-driven content planning that targets high-intent keywords and builds topical authority in your niche.",
    features: ["Topic Clusters", "Content Gaps", "E-E-A-T Optimization"],
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Globe,
    title: "Local SEO",
    description: "Dominate local search results with optimized Google Business profiles and location-specific strategies.",
    features: ["GMB Optimization", "Local Citations", "Review Management"],
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Layers,
    title: "Link Building",
    description: "White-hat link acquisition from authoritative domains that boost your domain authority sustainably.",
    features: ["Digital PR", "Guest Posting", "HARO Outreach"],
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Real-time dashboards and comprehensive reports that track every metric that matters to your business.",
    features: ["Custom Dashboards", "ROI Tracking", "Competitor Intel"],
    color: "from-cyan-500 to-blue-500",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export function ServicesSection() {
  return (
    <section id="services" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Our Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-balance">
            Everything You Need to
            <span className="gradient-text"> Rank #1</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            From AI-driven optimization to manual outreach, our comprehensive suite of SEO services 
            covers every aspect of search engine success.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group relative"
            >
              <div className="h-full p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                    Most Popular
                  </div>
                )}

                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} p-3 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-full h-full text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Link */}
                <Link 
                  href="https://www.codedseo.com/contact"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
                >
                  Learn More
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            Not sure which service you need? Let&apos;s find the perfect strategy for your business.
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25"
            asChild
          >
            <Link href="https://www.codedseo.com/contact">
              Get Custom Proposal
              <ArrowUpRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
