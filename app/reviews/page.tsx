"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Star, Quote, CheckCircle2, TrendingUp, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const reviews = [
  {
    name: "Michael Thompson",
    role: "CEO",
    company: "TechStart Inc.",
    rating: 5,
    image: "/reviews/michael.jpg",
    content: "RankFlow transformed our online presence completely. In just 8 months, our organic traffic increased by 450% and we're now ranking #1 for our most important keywords. Their AI-powered approach is truly next-level.",
    metrics: { traffic: "+450%", keywords: "47 #1 Rankings", revenue: "+$1.2M" }
  },
  {
    name: "Sarah Williams",
    role: "Marketing Director",
    company: "StyleHub Fashion",
    rating: 5,
    image: "/reviews/sarah.jpg",
    content: "We've worked with several SEO agencies before, but RankFlow is in a different league. They don't just improve rankings - they understand our business and deliver strategies that actually drive revenue.",
    metrics: { traffic: "+847%", keywords: "2,847 Rankings", revenue: "+$2.4M" }
  },
  {
    name: "David Chen",
    role: "Founder",
    company: "HealthTech Solutions",
    rating: 5,
    image: "/reviews/david.jpg",
    content: "The team at RankFlow is exceptional. They took the time to understand our complex B2B healthcare market and developed a strategy that positions us as thought leaders. Our lead generation has tripled.",
    metrics: { traffic: "+312%", keywords: "89 #1 Rankings", revenue: "+$890K" }
  },
  {
    name: "Emily Rodriguez",
    role: "E-commerce Manager",
    company: "HomeDecor Plus",
    rating: 5,
    image: "/reviews/emily.jpg",
    content: "As an e-commerce brand, SEO is critical for us. RankFlow's approach to product optimization and technical SEO helped us dominate our category. Our conversion rate improved alongside our rankings.",
    metrics: { traffic: "+692%", keywords: "4,521 Rankings", revenue: "+$3.8M" }
  },
  {
    name: "James Mitchell",
    role: "Partner",
    company: "Mitchell Law Group",
    rating: 5,
    image: "/reviews/james.jpg",
    content: "Local SEO can make or break a law firm. RankFlow helped us dominate the local search results and Google Map Pack. Our case inquiries have quadrupled since we started working with them.",
    metrics: { traffic: "+278%", keywords: "#1 Map Pack", revenue: "+$1.5M" }
  },
  {
    name: "Amanda Foster",
    role: "CMO",
    company: "CloudSecure Inc",
    rating: 5,
    image: "/reviews/amanda.jpg",
    content: "Working with RankFlow has been a game-changer for our enterprise SaaS. Their global SEO strategy helped us establish market leadership across 15 countries. The ROI has been exceptional.",
    metrics: { traffic: "+445%", keywords: "78 #1 Rankings", revenue: "+$12M" }
  },
]

const stats = [
  { number: "4.9/5", label: "Average Rating", icon: <Star className="w-5 h-5" /> },
  { number: "500+", label: "Client Reviews", icon: <Users className="w-5 h-5" /> },
  { number: "98%", label: "Would Recommend", icon: <CheckCircle2 className="w-5 h-5" /> },
  { number: "95%", label: "Renewal Rate", icon: <TrendingUp className="w-5 h-5" /> },
]

const platforms = [
  { name: "Google", rating: "4.9", reviews: "247" },
  { name: "Clutch", rating: "4.8", reviews: "156" },
  { name: "G2", rating: "4.9", reviews: "89" },
  { name: "Trustpilot", rating: "4.7", reviews: "312" },
]

export default function ReviewsPage() {
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
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-primary text-primary" />
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Trusted by{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                500+ Businesses
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Don&apos;t just take our word for it. See what our clients have to say about 
              their experience working with RankFlow.
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
                <div className="flex justify-center text-primary mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold mb-1">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Platform Ratings */}
      <section className="py-8 border-y border-border bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8">
            {platforms.map((platform, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center font-bold text-sm">
                  {platform.name.charAt(0)}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-primary text-primary" />
                    <span className="font-bold">{platform.rating}</span>
                  </div>
                  <div className="text-xs text-muted-foreground">{platform.reviews} reviews on {platform.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl border border-border bg-card"
              >
                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                <p className="text-muted-foreground mb-6 leading-relaxed">{review.content}</p>
                
                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 mb-6 p-4 rounded-xl bg-muted/50">
                  <div className="text-center">
                    <div className="text-lg font-bold text-primary">{review.metrics.traffic}</div>
                    <div className="text-xs text-muted-foreground">Traffic</div>
                  </div>
                  <div className="text-center border-x border-border">
                    <div className="text-lg font-bold text-primary">{review.metrics.keywords}</div>
                    <div className="text-xs text-muted-foreground">Keywords</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-primary">{review.metrics.revenue}</div>
                    <div className="text-xs text-muted-foreground">Revenue</div>
                  </div>
                </div>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20" />
                  <div className="flex-1">
                    <div className="font-semibold">{review.name}</div>
                    <div className="text-sm text-muted-foreground">{review.role}, {review.company}</div>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Become Our Next Success Story?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join 500+ businesses that trust RankFlow to drive their organic growth.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">Get Your Free Audit</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/video-testimonials">Watch Video Testimonials</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
