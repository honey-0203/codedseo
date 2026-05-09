"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { 
  Target, Share2, Users, Rocket, PenTool, Play, Megaphone, Code, 
  TrendingUp, Tag, ArrowRight, CheckCircle2, Zap
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "Google Ads (PPC)",
    description: "Drive immediate traffic and conversions with expertly managed pay-per-click campaigns.",
    features: ["Keyword Research", "Ad Copy Optimization", "Landing Page Testing", "Bid Management"],
    href: "/digital-marketing/google-ads",
  },
  {
    icon: <Share2 className="w-6 h-6" />,
    title: "Social Media Marketing",
    description: "Build your brand presence and engage your audience across all major social platforms.",
    features: ["Content Strategy", "Community Management", "Influencer Outreach", "Analytics & Reporting"],
    href: "/digital-marketing/social-media",
  },
  {
    icon: <PenTool className="w-6 h-6" />,
    title: "Content Marketing",
    description: "Create compelling content that attracts, engages, and converts your target audience.",
    features: ["Blog Writing", "Infographics", "Whitepapers", "Content Distribution"],
    href: "/digital-marketing/content-marketing",
  },
  {
    icon: <Megaphone className="w-6 h-6" />,
    title: "Email Marketing",
    description: "Nurture leads and drive repeat business with targeted email campaigns.",
    features: ["List Segmentation", "Automation Flows", "A/B Testing", "Deliverability Optimization"],
    href: "/digital-marketing/email-marketing",
  },
  {
    icon: <Play className="w-6 h-6" />,
    title: "Video Marketing",
    description: "Engage your audience with compelling video content across YouTube and social platforms.",
    features: ["Video Strategy", "Production Support", "YouTube SEO", "Video Ads"],
    href: "/digital-marketing/video-marketing",
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "Web Design & Development",
    description: "Build beautiful, high-converting websites that represent your brand.",
    features: ["UI/UX Design", "Responsive Development", "CMS Integration", "Performance Optimization"],
    href: "/digital-marketing/web-design",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Conversion Rate Optimization",
    description: "Turn more visitors into customers with data-driven CRO strategies.",
    features: ["A/B Testing", "User Research", "Heat Map Analysis", "Funnel Optimization"],
    href: "/digital-marketing/cro",
  },
  {
    icon: <Tag className="w-6 h-6" />,
    title: "White Label Services",
    description: "Partner with us to offer digital marketing services under your brand.",
    features: ["Reseller Programs", "Custom Reporting", "Dedicated Support", "Flexible Pricing"],
    href: "/digital-marketing/white-label",
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Retargeting Campaigns",
    description: "Re-engage lost visitors and convert them into customers with smart retargeting.",
    features: ["Pixel Setup", "Audience Segmentation", "Dynamic Ads", "Cross-Platform Retargeting"],
    href: "/digital-marketing/retargeting",
  },
]

const benefits = [
  { title: "Integrated Strategy", description: "All channels work together for maximum impact" },
  { title: "Data-Driven Decisions", description: "Every decision backed by analytics and testing" },
  { title: "Dedicated Team", description: "Experts in each discipline working on your account" },
  { title: "Transparent Reporting", description: "Real-time dashboards and monthly reviews" },
]

export default function DigitalMarketingPage() {
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
              <span className="text-sm font-medium text-primary">Full-Service Digital Agency</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Digital Marketing That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Delivers Results
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              From paid advertising to content creation, we offer comprehensive digital marketing 
              solutions that drive growth and maximize your ROI.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Button size="lg" asChild>
                <Link href="/contact">Get Free Strategy Call</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/case-studies">View Our Work</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="py-8 bg-muted/50 border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium text-sm">{benefit.title}</div>
                  <div className="text-xs text-muted-foreground">{benefit.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Digital Marketing Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A complete suite of digital marketing solutions tailored to your business goals
            </p>
          </motion.div>

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
                  <div className="h-full p-6 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
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

      {/* Stats Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "$25M+", label: "Ad Spend Managed" },
              { number: "400%", label: "Average ROAS" },
              { number: "2M+", label: "Leads Generated" },
              { number: "150+", label: "Active Campaigns" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
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
              Ready to Accelerate Your Growth?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get a free digital marketing audit and discover untapped opportunities 
              to grow your business online.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">Get Free Audit</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">Explore SEO Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
