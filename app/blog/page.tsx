"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Calendar, Clock, ArrowRight, Search, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"

const categories = ["All", "SEO", "Content Marketing", "Technical SEO", "AI & SEO", "Case Studies", "Industry News"]

const blogPosts = [
  {
    id: 1,
    title: "The Complete Guide to AI-Powered SEO in 2026",
    excerpt: "Discover how artificial intelligence is revolutionizing search engine optimization and how you can leverage these tools for better rankings.",
    category: "AI & SEO",
    author: "Sarah Chen",
    date: "Apr 15, 2026",
    readTime: "12 min read",
    featured: true,
    image: "/blog/ai-seo.jpg"
  },
  {
    id: 2,
    title: "How We Increased E-commerce Revenue by 847%: A Case Study",
    excerpt: "A deep dive into our comprehensive SEO strategy that transformed an online fashion retailer into an industry leader.",
    category: "Case Studies",
    author: "Marcus Johnson",
    date: "Apr 10, 2026",
    readTime: "8 min read",
    featured: true,
    image: "/blog/case-study.jpg"
  },
  {
    id: 3,
    title: "Core Web Vitals: The 2026 Update and What It Means for Your Site",
    excerpt: "Google's latest Core Web Vitals update introduces new metrics. Here's what you need to know to maintain your rankings.",
    category: "Technical SEO",
    author: "David Park",
    date: "Apr 8, 2026",
    readTime: "6 min read",
    featured: false,
    image: "/blog/core-vitals.jpg"
  },
  {
    id: 4,
    title: "Local SEO Strategies That Work in 2026",
    excerpt: "From Google Business Profile optimization to local link building, master the tactics that drive local search success.",
    category: "SEO",
    author: "Elena Rodriguez",
    date: "Apr 5, 2026",
    readTime: "10 min read",
    featured: false,
    image: "/blog/local-seo.jpg"
  },
  {
    id: 5,
    title: "Content Clustering: The Secret to Topical Authority",
    excerpt: "Learn how to structure your content into topic clusters that establish authority and improve rankings across related keywords.",
    category: "Content Marketing",
    author: "Sarah Chen",
    date: "Apr 2, 2026",
    readTime: "9 min read",
    featured: false,
    image: "/blog/content-clusters.jpg"
  },
  {
    id: 6,
    title: "E-E-A-T in 2026: Building Trust and Authority",
    excerpt: "Experience, Expertise, Authoritativeness, and Trust remain crucial. Here's how to demonstrate E-E-A-T to Google.",
    category: "SEO",
    author: "Marcus Johnson",
    date: "Mar 28, 2026",
    readTime: "7 min read",
    featured: false,
    image: "/blog/eeat.jpg"
  },
  {
    id: 7,
    title: "Schema Markup: The Complete Implementation Guide",
    excerpt: "From product schema to FAQ markup, learn how to implement structured data that enhances your search appearance.",
    category: "Technical SEO",
    author: "David Park",
    date: "Mar 25, 2026",
    readTime: "11 min read",
    featured: false,
    image: "/blog/schema.jpg"
  },
  {
    id: 8,
    title: "The Future of Voice Search Optimization",
    excerpt: "With voice assistants becoming smarter, optimizing for voice search is more important than ever. Here's how to do it right.",
    category: "AI & SEO",
    author: "Elena Rodriguez",
    date: "Mar 22, 2026",
    readTime: "8 min read",
    featured: false,
    image: "/blog/voice-search.jpg"
  },
]

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredPosts = filteredPosts.filter(post => post.featured)
  const regularPosts = filteredPosts.filter(post => !post.featured)

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              SEO Insights &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Industry News
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Expert insights, actionable strategies, and the latest trends in SEO and digital marketing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 border-y border-border sticky top-16 lg:top-20 bg-background/95 backdrop-blur-xl z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center gap-4">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            
            {/* Categories */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-8">Featured Articles</h2>
            <div className="grid lg:grid-cols-2 gap-6">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <Link href={`/blog/${post.id}`}>
                    <div className="h-full p-6 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
                      <div className="aspect-video rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 mb-4" />
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                          {post.category}
                        </span>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="font-medium text-foreground">{post.author}</span>
                          <span>·</span>
                          <span>{post.date}</span>
                        </div>
                        <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group"
              >
                <Link href={`/blog/${post.id}`}>
                  <div className="h-full p-6 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                    <div className="aspect-video rounded-xl bg-gradient-to-br from-muted to-muted/50 mb-4" />
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>{post.author}</span>
                      <span>·</span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
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
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-8">
              Get the latest SEO insights and strategies delivered to your inbox weekly.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <Button size="lg">Subscribe</Button>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Join 15,000+ marketers. No spam, unsubscribe anytime.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
