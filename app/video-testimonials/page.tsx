"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Play, X, TrendingUp, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const videos = [
  {
    id: 1,
    name: "Michael Thompson",
    role: "CEO",
    company: "TechStart Inc.",
    thumbnail: "/videos/tech-thumb.jpg",
    duration: "3:24",
    quote: "RankFlow transformed our entire online presence in just 8 months.",
    metrics: { traffic: "+450%", revenue: "+$1.2M" }
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Marketing Director",
    company: "StyleHub Fashion",
    thumbnail: "/videos/fashion-thumb.jpg",
    duration: "4:12",
    quote: "They don't just improve rankings - they understand our business.",
    metrics: { traffic: "+847%", revenue: "+$2.4M" }
  },
  {
    id: 3,
    name: "David Chen",
    role: "Founder",
    company: "HealthTech Solutions",
    thumbnail: "/videos/health-thumb.jpg",
    duration: "2:58",
    quote: "Our lead generation has tripled since working with RankFlow.",
    metrics: { traffic: "+312%", revenue: "+$890K" }
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    role: "E-commerce Manager",
    company: "HomeDecor Plus",
    thumbnail: "/videos/home-thumb.jpg",
    duration: "3:45",
    quote: "The best SEO investment we've ever made for our e-commerce store.",
    metrics: { traffic: "+692%", revenue: "+$3.8M" }
  },
  {
    id: 5,
    name: "James Mitchell",
    role: "Partner",
    company: "Mitchell Law Group",
    thumbnail: "/videos/law-thumb.jpg",
    duration: "3:10",
    quote: "Our case inquiries have quadrupled since we started working together.",
    metrics: { traffic: "+278%", revenue: "+$1.5M" }
  },
  {
    id: 6,
    name: "Amanda Foster",
    role: "CMO",
    company: "CloudSecure Inc",
    thumbnail: "/videos/cloud-thumb.jpg",
    duration: "4:30",
    quote: "Their global SEO strategy helped us establish market leadership.",
    metrics: { traffic: "+445%", revenue: "+$12M" }
  },
]

export default function VideoTestimonialsPage() {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null)
  const currentVideo = videos.find(v => v.id === selectedVideo)

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
              <Play className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Video Success Stories</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Hear From Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Happy Clients
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Watch real clients share their experience working with RankFlow and 
              the results they&apos;ve achieved.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedVideo(video.id)}
              >
                <div className="rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
                  {/* Video Thumbnail */}
                  <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-accent/20">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                        <Play className="w-6 h-6 text-primary-foreground ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-3 right-3 px-2 py-1 rounded bg-black/70 text-white text-xs">
                      {video.duration}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <Quote className="w-6 h-6 text-primary/30 mb-2" />
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{video.quote}</p>
                    
                    {/* Metrics */}
                    <div className="flex gap-4 mb-4">
                      <div className="flex items-center gap-1.5">
                        <TrendingUp className="w-4 h-4 text-primary" />
                        <span className="text-sm font-semibold">{video.metrics.traffic}</span>
                        <span className="text-xs text-muted-foreground">Traffic</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm font-semibold text-primary">{video.metrics.revenue}</span>
                        <span className="text-xs text-muted-foreground">Revenue</span>
                      </div>
                    </div>

                    {/* Author */}
                    <div className="flex items-center gap-3 pt-4 border-t border-border">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20" />
                      <div>
                        <div className="font-medium text-sm">{video.name}</div>
                        <div className="text-xs text-muted-foreground">{video.role}, {video.company}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && currentVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-12 right-0 p-2 text-white/70 hover:text-white transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              
              {/* Video Player Placeholder */}
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center">
                <div className="text-center text-white">
                  <Play className="w-20 h-20 mx-auto mb-4 opacity-70" />
                  <p className="text-xl font-medium mb-2">{currentVideo.name}</p>
                  <p className="text-sm opacity-70">{currentVideo.company}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join these businesses and achieve remarkable organic growth with RankFlow.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">Get Started Today</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/case-studies">Read Case Studies</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
