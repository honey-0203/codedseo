"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { 
  BookOpen, Play, Clock, Users, CheckCircle2, ArrowRight,
  Star, Zap, GraduationCap
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const courses = [
  {
    title: "SEO Fundamentals",
    description: "Master the basics of search engine optimization from keyword research to link building.",
    lessons: 12,
    duration: "4 hours",
    level: "Beginner",
    students: "15,420",
    rating: 4.9,
    featured: true
  },
  {
    title: "Technical SEO Masterclass",
    description: "Deep dive into site architecture, crawlability, indexing, and Core Web Vitals.",
    lessons: 18,
    duration: "6 hours",
    level: "Intermediate",
    students: "8,750",
    rating: 4.8,
    featured: true
  },
  {
    title: "E-commerce SEO Strategy",
    description: "Learn how to optimize product pages, category structures, and drive more sales.",
    lessons: 15,
    duration: "5 hours",
    level: "Intermediate",
    students: "6,320",
    rating: 4.9,
    featured: false
  },
  {
    title: "Local SEO Domination",
    description: "Rank higher in local search and Google Maps to attract nearby customers.",
    lessons: 10,
    duration: "3 hours",
    level: "Beginner",
    students: "9,180",
    rating: 4.7,
    featured: false
  },
  {
    title: "Content Strategy for SEO",
    description: "Create content that ranks and converts with data-driven strategies.",
    lessons: 14,
    duration: "4.5 hours",
    level: "Intermediate",
    students: "7,450",
    rating: 4.8,
    featured: false
  },
  {
    title: "Advanced Link Building",
    description: "Proven strategies to build high-quality backlinks that move the needle.",
    lessons: 12,
    duration: "4 hours",
    level: "Advanced",
    students: "4,890",
    rating: 4.9,
    featured: false
  },
]

const guides = [
  { title: "Complete Keyword Research Guide", readTime: "25 min", category: "Research" },
  { title: "On-Page SEO Checklist", readTime: "15 min", category: "On-Page" },
  { title: "Technical SEO Audit Template", readTime: "20 min", category: "Technical" },
  { title: "Link Building Outreach Scripts", readTime: "12 min", category: "Link Building" },
  { title: "SEO Reporting Best Practices", readTime: "18 min", category: "Analytics" },
  { title: "Google Algorithm Updates History", readTime: "30 min", category: "Industry" },
]

export default function LearnPage() {
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
              <GraduationCap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Free Learning Resources</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Master SEO with Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Learning Hub
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Free courses, guides, and tutorials to help you become an SEO expert. 
              Learn at your own pace from industry professionals.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-3 gap-6 mt-16 max-w-2xl mx-auto"
          >
            {[
              { number: "50K+", label: "Students" },
              { number: "25+", label: "Free Courses" },
              { number: "4.8", label: "Avg. Rating" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Courses</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our most popular courses to kickstart your SEO journey
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6 mb-12">
            {courses.filter(c => c.featured).map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors"
              >
                <div className="aspect-video rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 mb-4 flex items-center justify-center">
                  <Play className="w-16 h-16 text-primary/50" />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    course.level === "Beginner" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100" :
                    course.level === "Intermediate" ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100" :
                    "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100"
                  }`}>
                    {course.level}
                  </span>
                  <div className="flex items-center gap-1 text-sm">
                    <Star className="w-4 h-4 fill-primary text-primary" />
                    <span>{course.rating}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                <p className="text-muted-foreground mb-4">{course.description}</p>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <BookOpen className="w-4 h-4" /> {course.lessons} lessons
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" /> {course.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" /> {course.students}
                  </span>
                </div>
                <Button className="w-full">Start Learning Free</Button>
              </motion.div>
            ))}
          </div>

          {/* All Courses */}
          <h3 className="text-2xl font-bold mb-6">All Courses</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.filter(c => !c.featured).map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    course.level === "Beginner" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100" :
                    course.level === "Intermediate" ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100" :
                    "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100"
                  }`}>
                    {course.level}
                  </span>
                  <div className="flex items-center gap-1 text-sm">
                    <Star className="w-4 h-4 fill-primary text-primary" />
                    <span>{course.rating}</span>
                  </div>
                </div>
                <h4 className="font-semibold mb-2">{course.title}</h4>
                <p className="text-muted-foreground text-sm mb-4">{course.description}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{course.lessons} lessons</span>
                  <span>{course.duration}</span>
                  <span>{course.students} students</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Guides */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Quick Guides</h2>
              <p className="text-muted-foreground">Bite-sized guides for specific topics</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {guides.map((guide, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium group-hover:text-primary transition-colors">{guide.title}</h4>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>{guide.category}</span>
                    <span>•</span>
                    <span>{guide.readTime}</span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
              Ready for Hands-On Help?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Learning is great, but sometimes you need expert implementation. 
              Let our team handle your SEO while you focus on your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">Get Expert Help</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
