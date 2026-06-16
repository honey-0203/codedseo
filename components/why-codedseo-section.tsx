"use client"

import { motion } from "framer-motion"
import {
  Code2,
  Database,
  Globe,
  Cpu,
  Server,
  Layers3,
  ArrowRight,
} from "lucide-react"

const stack = [
  "React",
  "Next.js",
  "Node.js",
  "TypeScript",
  "MongoDB",
  "Tailwind CSS",
]

const cards = [
  {
    icon: <Code2 className="w-7 h-7" />,
    title: "Frontend Development",
    desc: "Modern responsive interfaces with React, Next.js and premium UI animations.",
  },
  {
    icon: <Database className="w-7 h-7" />,
    title: "Backend & APIs",
    desc: "Secure backend architecture, APIs, authentication and CRM systems.",
  },
  {
    icon: <Globe className="w-7 h-7" />,
    title: "AI SEO Optimization",
    desc: "SEO-first development for speed, rankings and organic business growth.",
  },
  {
    icon: <Server className="w-7 h-7" />,
    title: "Full Stack Solutions",
    desc: "Complete scalable web applications with modern technologies.",
  },
]

export function WhyCodedSEOSection() {
  return (
    <section className="relative overflow-hidden bg-black py-28 text-white">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-green-500/20 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-emerald-400/10 blur-[140px]" />

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-4xl text-center"
        >

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-5 py-2 text-sm text-green-400 backdrop-blur-xl">
            <Cpu className="h-4 w-4" />
            AI Powered Development & SEO
          </div>

          <h2 className="mb-8 text-5xl font-black leading-tight md:text-7xl">
            We Build
            <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
              {" "}Future Ready{" "}
            </span>
            Digital Experiences
          </h2>

          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-zinc-400">
            From modern web design and full-stack development to AI-powered SEO
            systems — CodedSEO helps businesses scale with technology,
            performance and stunning user experiences.
          </p>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-20 flex flex-wrap items-center justify-center gap-4"
        >
          {stack.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.08 }}
              className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-zinc-300 backdrop-blur-xl transition-all hover:border-green-500/30 hover:bg-green-500/10 hover:text-white"
            >
              {item}
            </motion.div>
          ))}
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2">

          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-2xl"
            >

              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-400/5" />
              </div>

              <div className="relative z-10">

                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-green-500/20 bg-green-500/10 text-green-400">
                  {card.icon}
                </div>

                <h3 className="mb-4 text-3xl font-bold">
                  {card.title}
                </h3>

                <p className="mb-8 leading-relaxed text-zinc-400">
                  {card.desc}
                </p>

                <div className="flex items-center gap-2 text-green-400">
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>

              </div>

            </motion.div>
          ))}

        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative mt-24 overflow-hidden rounded-[40px] border border-green-500/20 bg-gradient-to-r from-green-500/10 to-emerald-400/10 p-12 text-center backdrop-blur-2xl"
        >

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.18),transparent_40%)]" />

          <Layers3 className="mx-auto mb-6 h-16 w-16 text-green-400" />

          <h3 className="mb-5 text-4xl font-black">
            Need a Powerful Website & SEO Strategy?
          </h3>

          <p className="mx-auto mb-8 max-w-2xl text-zinc-300">
            We create visually stunning websites with full-stack architecture,
            backend systems and AI-powered SEO strategies for serious business growth.
          </p>

          <button className="group inline-flex items-center gap-3 rounded-full bg-green-500 px-8 py-4 text-sm font-bold text-black transition-all duration-300 hover:scale-105 hover:bg-green-400">
            Start Your Project
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

        </motion.div>

      </div>
    </section>
  )
}