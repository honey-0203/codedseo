"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, Sparkles, Zap, Crown, Building2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const plans = [
  {
    name: "Starter",
    icon: Zap,
    description: "Perfect for small businesses starting their SEO journey",
    monthlyPrice: 199,
    yearlyPrice: 150,
    features: [
      "5 Target Keywords",
      "Technical SEO Audit",
      "On-Page Optimization",
      "Monthly Reporting",
      "Google Business Setup",
      "Email Support",
    ],
    notIncluded: [
      "AI Content Optimization",
      "Link Building",
      "Dedicated Manager",
    ],
    cta: "Start Growing",
    popular: false,
  },
  {
    name: "Growth",
    icon: Crown,
    description: "For established businesses ready to dominate their market",
    monthlyPrice: 499,
    yearlyPrice: 399,
    features: [
      "15 Target Keywords",
      "Full Technical Audit",
      "AI-Powered Content Strategy",
      "Weekly Reporting",
      "Link Building (10/month)",
      "Local SEO Optimization",
      "Competitor Analysis",
      "Priority Support",
    ],
    notIncluded: [
      "Custom Integrations",
    ],
    cta: "Accelerate Growth",
    popular: true,
  },
  {
    name: "Enterprise",
    icon: Building2,
    description: "Custom solutions for large-scale SEO domination",
    monthlyPrice: null,
    yearlyPrice: null,
    features: [
      "Unlimited Keywords",
      "Enterprise Technical SEO",
      "AI Content Generation",
      "Real-time Dashboard",
      "Link Building (50+/month)",
      "Multi-location SEO",
      "API Access",
      "Dedicated Account Team",
      "Custom Reporting",
      "24/7 Priority Support",
    ],
    notIncluded: [],
    cta: "Contact Sales",
    popular: false,
  },
]

const addOns = [
  { name: "AI Content Writing", price: "$199/mo", description: "AI-generated blog posts optimized for SEO" },
  { name: "Digital PR", price: "$499/mo", description: "Get featured in top publications" },
  { name: "Conversion Optimization", price: "$299/mo", description: "Turn traffic into customers" },
]

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <section id="pricing" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Transparent Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-balance">
            Invest in Growth,
            <span className="gradient-text"> Not Guesswork</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            No hidden fees. No long-term contracts. Just results-driven SEO services that scale with your business.
          </p>
        </motion.div>

        {/* Billing Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <span className={`text-sm font-medium transition-colors ${!isYearly ? "text-foreground" : "text-muted-foreground"}`}>
            Monthly
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className={`relative w-14 h-7 rounded-full transition-colors ${
              isYearly ? "bg-primary" : "bg-muted"
            }`}
            aria-label="Toggle yearly pricing"
          >
            <motion.div
              animate={{ x: isYearly ? 28 : 4 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="absolute top-1 w-5 h-5 rounded-full bg-white shadow-md"
            />
          </button>
          <span className={`text-sm font-medium transition-colors ${isYearly ? "text-foreground" : "text-muted-foreground"}`}>
            Yearly
          </span>
          {isYearly && (
            <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
              Save 20%
            </span>
          )}
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-2xl p-6 lg:p-8 ${
                plan.popular
                  ? "bg-card border-2 border-primary shadow-xl shadow-primary/10 lg:scale-105"
                  : "bg-card border border-border"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                  Most Popular
                </div>
              )}

              {/* Header */}
              <div className="mb-6">
                <div className={`w-12 h-12 rounded-xl ${
                  plan.popular ? "bg-primary" : "bg-primary/10"
                } flex items-center justify-center mb-4`}>
                  <plan.icon className={`w-6 h-6 ${
                    plan.popular ? "text-primary-foreground" : "text-primary"
                  }`} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="mb-6">
                {plan.monthlyPrice ? (
                  <>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-foreground">
                        ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                      </span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                    {isYearly && (
                      <p className="text-sm text-primary mt-1">
                        Billed annually (${plan.yearlyPrice! * 12}/year)
                      </p>
                    )}
                  </>
                ) : (
                  <div className="text-4xl font-bold text-foreground">Custom</div>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
                {plan.notIncluded.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 opacity-50">
                    <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="w-2 h-0.5 bg-muted-foreground" />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                className={`w-full ${
                  plan.popular
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25"
                    : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                }`}
                asChild
              >
                <Link href="https://calendly.com/codedseo-sales/30min">
                  {plan.cta}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Add-ons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-xl font-semibold text-center mb-8 text-foreground">
            Supercharge Your Plan with Add-ons
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {addOns.map((addon) => (
              <div
                key={addon.name}
                className="p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
              >
                <p className="font-semibold text-foreground mb-1">{addon.name}</p>
                <p className="text-primary font-bold mb-2">{addon.price}</p>
                <p className="text-xs text-muted-foreground">{addon.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-muted/50 border border-border">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Check className="w-6 h-6 text-primary" />
            </div>
            <div className="text-left">
              <p className="font-semibold text-foreground">90-Day Results Guarantee</p>
              <p className="text-sm text-muted-foreground">
                See measurable ranking improvements or we work for free until you do.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
