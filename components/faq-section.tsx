"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus, Sparkles, HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "How long does it take to see SEO results?",
    answer: "Most clients start seeing measurable improvements within 3-4 months, with significant ranking gains by month 6. However, competitive industries may take 6-12 months for top rankings. We provide monthly progress reports so you can track improvements in real-time."
  },
  {
    question: "What makes your AI-powered SEO different?",
    answer: "Our proprietary AI analyzes millions of ranking factors and competitor data points to identify high-impact opportunities traditional agencies miss. It predicts algorithm changes, automates content optimization, and provides real-time recommendations - giving you a significant competitive advantage."
  },
  {
    question: "Do you guarantee first page rankings?",
    answer: "We don't make empty promises about specific rankings (that's a red flag with any SEO agency). What we do guarantee is measurable improvement in your organic traffic and keyword positions within 90 days, or we'll continue working at no additional cost until you see results."
  },
  {
    question: "How do you report on progress?",
    answer: "You'll get access to a real-time dashboard showing keyword rankings, traffic growth, and conversion data. We also provide detailed monthly reports with insights, recommendations, and next-month strategy. Plus, you'll have regular calls with your dedicated account manager."
  },
  {
    question: "Can you work with our existing marketing team?",
    answer: "Absolutely! We regularly collaborate with in-house marketing teams and other agencies. We can provide training, share our tools and insights, and work within your existing workflow. Many clients see us as an extension of their team rather than an outside vendor."
  },
  {
    question: "What industries do you specialize in?",
    answer: "We've delivered exceptional results across SaaS, e-commerce, healthcare, finance, professional services, and local businesses. Our AI-powered approach adapts to any industry, and we have dedicated specialists for highly regulated sectors."
  },
  {
    question: "What's included in the free SEO audit?",
    answer: "Our comprehensive audit includes technical SEO analysis, on-page optimization opportunities, competitor benchmarking, keyword gap analysis, backlink profile review, and a custom roadmap with prioritized recommendations. It's valued at $2,500 but completely free with no obligations."
  },
  {
    question: "How do your pricing plans work?",
    answer: "We offer flexible monthly plans with no long-term contracts required. Pricing is based on the scope of work, number of target keywords, and your competitive landscape. All plans include dedicated support, reporting dashboards, and our AI optimization tools."
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-24 lg:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
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
            <HelpCircle className="w-4 h-4" />
            <span>FAQ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-balance">
            Got Questions?
            <span className="gradient-text"> We&apos;ve Got Answers</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Everything you need to know about working with RankFlow. Can&apos;t find what you&apos;re looking for? Reach out to our team.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={`w-full flex items-center justify-between gap-4 p-5 rounded-xl text-left transition-all duration-300 ${
                  openIndex === index
                    ? "bg-card border border-primary/30 shadow-lg"
                    : "bg-card border border-border hover:border-primary/20"
                }`}
              >
                <span className={`font-semibold transition-colors ${
                  openIndex === index ? "text-primary" : "text-foreground"
                }`}>
                  {faq.question}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
                  openIndex === index 
                    ? "bg-primary text-primary-foreground rotate-180" 
                    : "bg-muted text-muted-foreground"
                }`}>
                  {openIndex === index ? (
                    <Minus className="w-4 h-4" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 pt-0">
                      <p className="text-muted-foreground leading-relaxed pl-0">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Still Have Questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Still have questions? We&apos;re here to help.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            <Sparkles className="w-4 h-4" />
            Contact our team
          </a>
        </motion.div>
      </div>
    </section>
  )
}
