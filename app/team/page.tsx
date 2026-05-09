"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Linkedin, Twitter, Users, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const leadership = [
  {
    name: "Sarah Chen",
    role: "CEO & Founder",
    bio: "12+ years in digital marketing. Previously led SEO at Fortune 500 companies. Founded RankFlow to make enterprise-grade SEO accessible to all businesses.",
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Marcus Johnson",
    role: "Chief Strategy Officer",
    bio: "Former Google Search Quality team member. Expert in algorithm analysis and strategic SEO planning. Led campaigns generating $50M+ in client revenue.",
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Elena Rodriguez",
    role: "Director of AI & Innovation",
    bio: "Ph.D. in Machine Learning. Leads our AI-powered SEO initiatives. Previously at leading tech companies developing search algorithms.",
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "David Park",
    role: "Technical SEO Lead",
    bio: "15+ years in web development and technical SEO. Expert in site architecture, Core Web Vitals, and large-scale technical implementations.",
    linkedin: "#",
    twitter: "#"
  },
]

const team = [
  { name: "Amanda Foster", role: "Senior SEO Strategist" },
  { name: "James Mitchell", role: "Content Strategy Director" },
  { name: "Lisa Wang", role: "Link Building Manager" },
  { name: "Michael Brown", role: "Analytics Lead" },
  { name: "Rachel Green", role: "E-commerce SEO Specialist" },
  { name: "Tom Wilson", role: "Local SEO Expert" },
  { name: "Jennifer Lee", role: "Client Success Manager" },
  { name: "Robert Taylor", role: "Technical SEO Analyst" },
]

const stats = [
  { number: "50+", label: "Team Members" },
  { number: "15+", label: "Countries" },
  { number: "200+", label: "Years Combined Experience" },
  { number: "10+", label: "Industry Awards" },
]

export default function TeamPage() {
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
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Our Team</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Meet the Experts Behind{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Your Success
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              A team of passionate SEO professionals, data scientists, and digital 
              marketing experts dedicated to driving your growth.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-card border border-border">
                <div className="text-3xl font-bold text-primary mb-1">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Leadership Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Industry veterans leading the way in SEO innovation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {leadership.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border"
              >
                <div className="flex items-start gap-4">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                    <div className="flex gap-2">
                      <a href={member.linkedin} className="p-2 rounded-lg bg-muted hover:bg-primary/10 hover:text-primary transition-colors">
                        <Linkedin className="w-4 h-4" />
                      </a>
                      <a href={member.twitter} className="p-2 rounded-lg bg-muted hover:bg-primary/10 hover:text-primary transition-colors">
                        <Twitter className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Extended Team */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Specialists</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experts in every aspect of SEO and digital marketing
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="p-4 rounded-xl bg-card border border-border text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 mx-auto mb-3" />
                <h3 className="font-medium">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center p-12 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20"
          >
            <Zap className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Join Our Team
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              We&apos;re always looking for talented individuals who are passionate about 
              SEO and digital marketing. Check out our open positions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg">View Open Positions</Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/about">Learn About Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
