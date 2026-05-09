"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Award, Users, Target, Zap, TrendingUp, Globe, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const stats = [
  { number: "12+", label: "Years Experience" },
  { number: "500+", label: "Clients Worldwide" },
  { number: "10M+", label: "Keywords Ranked" },
  { number: "98%", label: "Client Retention" },
]

const values = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "Results-Driven",
    description: "We focus on measurable outcomes that directly impact your bottom line, not vanity metrics."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Innovation First",
    description: "We stay ahead of algorithm changes and leverage cutting-edge AI tools for better results."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Client Partnership",
    description: "We work as an extension of your team, with transparent communication and shared goals."
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Excellence Always",
    description: "Every campaign receives our full attention and commitment to exceptional quality."
  },
]

const timeline = [
  { year: "2014", title: "Founded", description: "Started with a vision to revolutionize SEO through data-driven strategies." },
  { year: "2017", title: "100 Clients", description: "Reached our first major milestone, serving clients across 15 countries." },
  { year: "2020", title: "AI Integration", description: "Pioneered AI-powered SEO solutions, boosting efficiency by 300%." },
  { year: "2023", title: "Global Expansion", description: "Expanded to 5 continents with offices in NYC, London, and Singapore." },
  { year: "2026", title: "Industry Leader", description: "Recognized as the #1 AI-powered SEO agency worldwide." },
]

const team = [
  { name: "Sarah Chen", role: "CEO & Founder", image: "/team/sarah.jpg" },
  { name: "Marcus Johnson", role: "Head of SEO", image: "/team/marcus.jpg" },
  { name: "Elena Rodriguez", role: "Director of AI Strategy", image: "/team/elena.jpg" },
  { name: "David Park", role: "Technical SEO Lead", image: "/team/david.jpg" },
]

export default function AboutPage() {
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
              <Globe className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Trusted by 500+ Brands Worldwide</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              We&apos;re on a Mission to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Transform Digital Growth
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              RankFlow combines cutting-edge AI technology with proven SEO strategies to help businesses 
              dominate search rankings and achieve sustainable organic growth.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-card border border-border">
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  RankFlow was founded in 2014 with a simple belief: SEO should be transparent, 
                  measurable, and focused on real business results—not just rankings.
                </p>
                <p>
                  Over the years, we&apos;ve grown from a small team of passionate SEO specialists 
                  into a global agency serving over 500 clients across 40+ countries. Our success 
                  is built on a foundation of continuous innovation and an unwavering commitment 
                  to our clients&apos; growth.
                </p>
                <p>
                  Today, we&apos;re proud to be at the forefront of AI-powered SEO, combining machine 
                  learning algorithms with human expertise to deliver results that consistently 
                  exceed expectations.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-8">
                <Button asChild>
                  <Link href="/contact">Work With Us</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/case-studies">See Our Results</Link>
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 p-8 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                  {[TrendingUp, Target, Award, Zap].map((Icon, i) => (
                    <div key={i} className="aspect-square rounded-2xl bg-background/80 backdrop-blur flex items-center justify-center shadow-lg">
                      <Icon className="w-12 h-12 text-primary" />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Key milestones in our growth story
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    {item.year}
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-0.5 h-full bg-border mt-2" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
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
              Ready to Grow Your Business?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join 500+ businesses that trust RankFlow to drive their organic growth. 
              Let&apos;s discuss how we can help you achieve your goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">Get Your Free Audit</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/case-studies">View Case Studies</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
