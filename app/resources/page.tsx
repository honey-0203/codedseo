"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { 
  FileText, Lightbulb, Calculator, BookOpen, Download, 
  ArrowRight, Play, Clock, Zap
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const resourceCategories = [
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Blog",
    description: "Latest SEO insights, strategies, and industry news from our experts.",
    href: "/blog",
    count: "150+ Articles"
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "SEO Insights",
    description: "In-depth analysis and reports on SEO trends and algorithm updates.",
    href: "/insights",
    count: "Monthly Reports"
  },
  {
    icon: <Calculator className="w-6 h-6" />,
    title: "Free Tools",
    description: "SEO calculators, analyzers, and audit tools to help your strategy.",
    href: "/tools",
    count: "12 Free Tools"
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Learning Hub",
    description: "Comprehensive guides and tutorials for SEO mastery.",
    href: "/learn",
    count: "25+ Guides"
  },
]

const featuredGuides = [
  {
    title: "The Complete SEO Guide for 2026",
    description: "Everything you need to know about SEO in 2026, from basics to advanced strategies.",
    pages: "85 pages",
    downloads: "12,500+ downloads",
    category: "Guide"
  },
  {
    title: "E-commerce SEO Playbook",
    description: "Step-by-step strategies to optimize your online store for search engines.",
    pages: "62 pages",
    downloads: "8,200+ downloads",
    category: "Playbook"
  },
  {
    title: "Local SEO Checklist",
    description: "A comprehensive checklist to dominate local search results.",
    pages: "25 pages",
    downloads: "15,800+ downloads",
    category: "Checklist"
  },
]

const latestPosts = [
  {
    title: "The Complete Guide to AI-Powered SEO in 2026",
    category: "AI & SEO",
    readTime: "12 min",
    href: "/blog/1"
  },
  {
    title: "Core Web Vitals: The 2026 Update",
    category: "Technical SEO",
    readTime: "6 min",
    href: "/blog/3"
  },
  {
    title: "Content Clustering: The Secret to Topical Authority",
    category: "Content Marketing",
    readTime: "9 min",
    href: "/blog/5"
  },
]

const webinars = [
  {
    title: "Mastering AI SEO in 2026",
    date: "May 15, 2026",
    time: "2:00 PM EST",
    status: "upcoming"
  },
  {
    title: "E-commerce SEO Masterclass",
    date: "Apr 28, 2026",
    time: "2:00 PM EST",
    status: "recorded"
  },
  {
    title: "Technical SEO Deep Dive",
    date: "Apr 10, 2026",
    time: "2:00 PM EST",
    status: "recorded"
  },
]

export default function ResourcesPage() {
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
              <span className="text-sm font-medium text-primary">Free SEO Resources</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Learn, Grow, and{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Dominate SEO
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Access free guides, tools, and insights to improve your SEO strategy and 
              drive more organic traffic to your website.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {resourceCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={category.href} className="block h-full">
                  <div className="h-full p-6 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg group">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{category.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-primary font-medium">{category.count}</span>
                      <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Guides */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Downloads</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our most popular free resources to help you succeed
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredGuides.map((guide, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl border border-border bg-card"
              >
                <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 mb-4 flex items-center justify-center">
                  <Download className="w-12 h-12 text-primary/50" />
                </div>
                <span className="inline-block px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
                  {guide.category}
                </span>
                <h3 className="text-lg font-semibold mb-2">{guide.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{guide.description}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <span>{guide.pages}</span>
                  <span>{guide.downloads}</span>
                </div>
                <Button className="w-full" variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Download Free
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Latest from the Blog</h2>
              <p className="text-muted-foreground">Fresh SEO insights and strategies</p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/blog">View All Posts</Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {latestPosts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link href={post.href}>
                  <div className="p-6 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-2 py-1 rounded-full bg-muted text-xs font-medium">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {post.readTime}
                      </span>
                    </div>
                    <h3 className="font-semibold group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Webinars */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Free Webinars</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Learn from our experts in live and recorded sessions
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto space-y-4">
            {webinars.map((webinar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  webinar.status === "upcoming" ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
                }`}>
                  <Play className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">{webinar.title}</h3>
                  <p className="text-sm text-muted-foreground">{webinar.date} at {webinar.time}</p>
                </div>
                <Button variant={webinar.status === "upcoming" ? "default" : "outline"} size="sm">
                  {webinar.status === "upcoming" ? "Register" : "Watch Now"}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center p-12 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20"
          >
            <h2 className="text-3xl font-bold mb-4">Get Weekly SEO Tips</h2>
            <p className="text-muted-foreground mb-8">
              Join 15,000+ marketers receiving our best insights every week.
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
