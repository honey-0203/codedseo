"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star, Quote, ChevronLeft, ChevronRight, Play, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "CEO",
    company: "TechVenture Labs",
    image: "SM",
    rating: 5,
    quote: "RankFlow completely transformed our online presence. Within 6 months, we went from page 5 to ranking #1 for our most competitive keywords. The ROI has been incredible - we've seen a 340% increase in organic leads.",
    metrics: { traffic: "+847%", keywords: "1,240", revenue: "+$420K" },
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Marketing Director",
    company: "ScaleUp Commerce",
    image: "MC",
    rating: 5,
    quote: "The AI-powered approach RankFlow uses is unlike anything I've experienced. They identified ranking opportunities our previous agency completely missed. Our e-commerce revenue from organic search has tripled.",
    metrics: { traffic: "+523%", keywords: "3,890", revenue: "+$890K" },
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Founder",
    company: "HealthFirst Clinic",
    image: "ER",
    rating: 5,
    quote: "As a local healthcare provider, we were skeptical about SEO. RankFlow proved us wrong. We now dominate local search results and have had to hire additional staff to handle the patient inquiries.",
    metrics: { traffic: "+692%", keywords: "456", revenue: "+$280K" },
    color: "from-pink-500 to-rose-500",
  },
  {
    id: 4,
    name: "David Park",
    role: "VP of Growth",
    company: "FinanceFlow Pro",
    image: "DP",
    rating: 5,
    quote: "The competitive intelligence and reporting from RankFlow is world-class. We finally understand what's moving the needle. Our cost per acquisition through organic has dropped by 67%.",
    metrics: { traffic: "+412%", keywords: "2,180", revenue: "+$1.2M" },
    color: "from-violet-500 to-purple-500",
  },
]

const logos = [
  "TechVenture", "ScaleUp", "HealthFirst", "FinanceFlow", "GrowthCo", "DataStream"
]

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [autoPlay])

  const handlePrev = () => {
    setAutoPlay(false)
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setAutoPlay(false)
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Client Success Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-balance">
            Trusted by
            <span className="gradient-text"> 500+ Brands</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Don&apos;t just take our word for it. Hear from the businesses we&apos;ve helped achieve extraordinary growth.
          </p>
        </motion.div>

        {/* Main Testimonial Carousel */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="bg-card rounded-3xl border border-border p-6 lg:p-10 shadow-xl"
              >
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Left: Quote */}
                  <div>
                    <Quote className="w-12 h-12 text-primary/20 mb-6" />
                    
                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    {/* Quote Text */}
                    <p className="text-lg lg:text-xl text-foreground leading-relaxed mb-8">
                      &ldquo;{testimonials[activeIndex].quote}&rdquo;
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${testimonials[activeIndex].color} flex items-center justify-center text-white font-bold text-lg`}>
                        {testimonials[activeIndex].image}
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{testimonials[activeIndex].name}</p>
                        <p className="text-sm text-muted-foreground">
                          {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right: Metrics */}
                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(testimonials[activeIndex].metrics).map(([key, value]) => (
                      <div
                        key={key}
                        className="text-center p-5 rounded-2xl bg-muted/50 border border-border"
                      >
                        <p className="text-2xl lg:text-3xl font-bold text-primary mb-1">{value}</p>
                        <p className="text-xs text-muted-foreground capitalize">
                          {key === "traffic" ? "Traffic Growth" : key === "keywords" ? "Keywords Ranked" : "Added Revenue"}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={handlePrev}
                className="rounded-full"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              {/* Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setAutoPlay(false)
                      setActiveIndex(index)
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? "w-8 bg-primary"
                        : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={handleNext}
                className="rounded-full"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t border-border pt-12"
        >
          <p className="text-center text-sm text-muted-foreground mb-8">
            Join these industry leaders who trust RankFlow
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
            {logos.map((logo, index) => (
              <motion.div
                key={logo}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.4 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ opacity: 1 }}
                className="text-xl font-bold text-muted-foreground transition-opacity cursor-default"
              >
                {logo}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Video Testimonials CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors cursor-pointer group">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all">
              <Play className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
            </div>
            <div className="text-left">
              <p className="font-semibold text-foreground">Watch Video Testimonials</p>
              <p className="text-sm text-muted-foreground">See real stories from our clients</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
