"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { 
  Zap, Bot, Users, Shield, Clock, Award, TrendingUp, 
  CheckCircle2, Star, ArrowRight, Target, BarChart3
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const reasons = [
  {
    icon: <Bot className="w-6 h-6" />,
    title: "AI-Powered Technology",
    description: "We leverage cutting-edge artificial intelligence to analyze data, predict trends, and optimize strategies faster than humanly possible.",
    highlight: "300% more efficient"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Dedicated Team",
    description: "You get a dedicated team of SEO specialists, content strategists, and account managers working exclusively on your success.",
    highlight: "5+ experts per client"
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Proven Results",
    description: "We have a 97% success rate with our clients, consistently delivering first-page rankings and measurable ROI.",
    highlight: "97% success rate"
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "100% White-Hat",
    description: "We only use ethical, Google-approved SEO techniques. No shortcuts, no penalties, just sustainable growth.",
    highlight: "Zero penalties"
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Faster Results",
    description: "Our AI-driven approach identifies quick wins while building long-term authority, delivering results in weeks, not months.",
    highlight: "2x faster results"
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Transparent Reporting",
    description: "Real-time dashboards, weekly updates, and monthly strategy calls keep you informed every step of the way.",
    highlight: "24/7 dashboard access"
  },
]

const comparisons = [
  { feature: "AI-Powered Analysis", us: true, others: false },
  { feature: "Dedicated Account Team", us: true, others: false },
  { feature: "Real-Time Reporting", us: true, others: false },
  { feature: "90-Day Results Guarantee", us: true, others: false },
  { feature: "No Long-Term Contracts", us: true, others: false },
  { feature: "Custom Strategy", us: true, others: true },
  { feature: "Monthly Reviews", us: true, others: true },
  { feature: "On-Page Optimization", us: true, others: true },
]

const guarantees = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "90-Day Results Guarantee",
    description: "If you don't see measurable improvement in 90 days, we'll work for free until you do."
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "No Penalty Promise",
    description: "Our white-hat techniques ensure your site will never face Google penalties."
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Cancel Anytime",
    description: "No long-term contracts. You stay because of results, not obligations."
  },
]

export default function WhyChooseUsPage() {
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
              <Award className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">#1 AI-Powered SEO Agency</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Why Businesses Choose{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                RankFlow
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              We&apos;re not just another SEO agency. We combine cutting-edge AI technology with 
              human expertise to deliver results that matter.
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
              { number: "12+", label: "Years Experience" },
              { number: "500+", label: "Happy Clients" },
              { number: "97%", label: "Success Rate" },
              { number: "98%", label: "Retention Rate" },
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-card border border-border">
                <div className="text-3xl font-bold text-primary mb-1">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Reasons Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">What Sets Us Apart</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Six key reasons why leading brands trust RankFlow for their SEO
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                  {reason.icon}
                </div>
                <div className="inline-block px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
                  {reason.highlight}
                </div>
                <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                <p className="text-muted-foreground text-sm">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">RankFlow vs. Other Agencies</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how we stack up against traditional SEO agencies
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="rounded-2xl border border-border overflow-hidden">
              <div className="grid grid-cols-3 bg-muted/50 border-b border-border">
                <div className="p-4 font-medium">Feature</div>
                <div className="p-4 font-medium text-center text-primary border-x border-border">RankFlow</div>
                <div className="p-4 font-medium text-center text-muted-foreground">Others</div>
              </div>
              {comparisons.map((item, index) => (
                <div key={index} className="grid grid-cols-3 border-b border-border last:border-0">
                  <div className="p-4 text-sm">{item.feature}</div>
                  <div className="p-4 flex justify-center border-x border-border">
                    {item.us ? (
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    ) : (
                      <span className="w-5 h-5 rounded-full border-2 border-muted-foreground/30" />
                    )}
                  </div>
                  <div className="p-4 flex justify-center">
                    {item.others ? (
                      <CheckCircle2 className="w-5 h-5 text-muted-foreground" />
                    ) : (
                      <span className="w-5 h-5 rounded-full border-2 border-muted-foreground/30" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Guarantees Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Guarantees</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We put our money where our mouth is
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {guarantees.map((guarantee, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border text-center"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                  {guarantee.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{guarantee.title}</h3>
                <p className="text-muted-foreground text-sm">{guarantee.description}</p>
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
              Ready to Experience the Difference?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join 500+ businesses that have chosen RankFlow for superior SEO results.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">Get Your Free Audit</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/case-studies">See Our Results</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
