"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { 
  Search, CheckCircle2, BarChart3, FileText, Link2, Zap,
  TrendingUp, Globe, Send, Clock
} from "lucide-react"
import { Button } from "@/components/ui/button"

const auditFeatures = [
  {
    icon: <Search className="w-5 h-5" />,
    title: "Technical SEO Analysis",
    description: "Crawlability, indexing, site speed, and Core Web Vitals assessment"
  },
  {
    icon: <FileText className="w-5 h-5" />,
    title: "On-Page SEO Review",
    description: "Title tags, meta descriptions, headers, and content optimization"
  },
  {
    icon: <Link2 className="w-5 h-5" />,
    title: "Backlink Profile Check",
    description: "Analysis of your link profile and domain authority"
  },
  {
    icon: <BarChart3 className="w-5 h-5" />,
    title: "Competitor Analysis",
    description: "See how you stack up against your top 3 competitors"
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    title: "Keyword Opportunities",
    description: "Identify high-value keywords you should be targeting"
  },
  {
    icon: <Globe className="w-5 h-5" />,
    title: "Action Plan",
    description: "Prioritized recommendations to improve your rankings"
  },
]

const testimonials = [
  {
    quote: "The free audit revealed issues we had no idea about. Within 3 months of implementing their recommendations, our traffic doubled.",
    name: "Michael T.",
    company: "TechStart Inc."
  },
  {
    quote: "I was skeptical about a free audit, but it was incredibly comprehensive. We immediately saw the value and became clients.",
    name: "Sarah W.",
    company: "StyleHub Fashion"
  },
]

export default function FreeAuditPage() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    company: ""
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState("submitting")
    await new Promise(resolve => setTimeout(resolve, 2000))
    setFormState("success")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">100% Free - No Strings Attached</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
                Get Your Free{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  SEO Audit
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Discover exactly what&apos;s holding your website back from ranking higher. 
                Our comprehensive audit analyzes 50+ SEO factors and provides actionable recommendations.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Delivered within 48 hours",
                  "No credit card required",
                  "Actionable recommendations",
                  "30-minute strategy call included"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Testimonial */}
              <div className="p-6 rounded-2xl bg-muted/50 border border-border">
                <p className="text-sm italic mb-3">&quot;{testimonials[0].quote}&quot;</p>
                <div className="text-sm">
                  <span className="font-medium">{testimonials[0].name}</span>
                  <span className="text-muted-foreground"> - {testimonials[0].company}</span>
                </div>
              </div>
            </motion.div>

            {/* Right Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="p-8 rounded-2xl bg-card border border-border shadow-xl">
                {formState === "success" ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Audit Request Received!</h3>
                    <p className="text-muted-foreground mb-2">
                      We&apos;re analyzing your website now.
                    </p>
                    <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                      <Clock className="w-4 h-4" />
                      You&apos;ll receive your audit within 48 hours
                    </p>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold mb-2">Request Your Free Audit</h2>
                    <p className="text-muted-foreground mb-6">
                      Fill out the form below and we&apos;ll analyze your website.
                    </p>
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Your Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                          placeholder="john@company.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Website URL *</label>
                        <input
                          type="url"
                          name="website"
                          value={formData.website}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                          placeholder="https://yourwebsite.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Company Name</label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                          placeholder="Your Company"
                        />
                      </div>
                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full"
                        disabled={formState === "submitting"}
                      >
                        {formState === "submitting" ? (
                          "Submitting..."
                        ) : (
                          <>
                            Get My Free Audit <Send className="w-5 h-5 ml-2" />
                          </>
                        )}
                      </Button>
                    </form>

                    <p className="text-xs text-muted-foreground text-center mt-4">
                      By submitting, you agree to our privacy policy. We&apos;ll never share your info.
                    </p>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What You'll Get */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">What Your Audit Includes</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive analysis covering all critical SEO factors
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {auditFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
