"use client"

import { motion } from "framer-motion"
import {
  ArrowUpRight,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
} from "lucide-react"

import Link from "next/link"

const footerLinks = {
  services: [
    { name: "AI-Powered SEO", href: "#services" },
    { name: "Technical SEO", href: "#services" },
    { name: "Content Strategy", href: "#services" },
    { name: "Local SEO", href: "#services" },
    { name: "Link Building", href: "#services" },
    { name: "Analytics", href: "#services" },
  ],

  company: [
    { name: "About Us", href: "#" },
    { name: "Case Studies", href: "#results" },
    { name: "Careers", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Press", href: "#" },
  ],

  resources: [
    { name: "SEO Guide", href: "#" },
    { name: "Free Tools", href: "#" },
    { name: "Webinars", href: "#" },
    { name: "Newsletter", href: "#" },
    { name: "Help Center", href: "#" },
  ],

  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
  ],
}

const socialLinks = [
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "YouTube", icon: Youtube, href: "#" },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-green-500/10 bg-gradient-to-b from-[#020817] via-[#030b1d] to-black text-white">

      {/* Glow BG */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-10%] top-0 h-[400px] w-[400px] rounded-full bg-green-500/10 blur-[140px]" />

        <div className="absolute bottom-[-100px] right-[-10%] h-[350px] w-[350px] rounded-full bg-emerald-400/10 blur-[140px]" />
      </div>

      {/* CTA */}
      <div className="relative border-b border-white/5">
        <div className="container mx-auto px-4 py-14 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center"
          >

            <div>
              <h2 className="text-3xl font-black leading-tight md:text-5xl">
                Ready to 10x Your
                <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
                  {" "}Organic Traffic?
                </span>
              </h2>

              <p className="mt-4 text-lg text-zinc-400">
                Get your free SEO audit and see what&apos;s holding you back.
              </p>
            </div>

            <Link
              href="https://calendly.com/codedseo-sales/30min"
              className="group inline-flex items-center gap-3 rounded-full bg-green-500 px-8 py-5 text-sm font-bold text-black shadow-[0_0_50px_rgba(34,197,94,0.4)] transition-all duration-300 hover:scale-105 hover:bg-green-400"
            >
              Start Free Audit

              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative container mx-auto px-4 py-16 sm:px-6 lg:px-8">

        <div className="grid grid-cols-2 gap-12 lg:grid-cols-6">

          {/* Logo */}
          <div className="col-span-2">

            <Link href="/" className="inline-block">

              <div className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-2xl transition-all duration-500 hover:border-green-500/30 hover:bg-white/[0.05]">

                {/* Soft Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-400/5 opacity-70" />

                <div className="relative z-10 flex items-center justify-center">

                  <img
                    src="/codedseo.png"
                    alt="CodedSEO"
                    className="h-16 w-auto object-contain brightness-125 contrast-125"
                  />
                </div>
              </div>

            </Link>

            <p className="mt-8 max-w-sm text-lg leading-[1.8] text-zinc-300">
              Premium AI SEO, full-stack development and futuristic web experiences crafted for serious brands.
            </p>

            {/* Social */}
            <div className="mt-8 flex items-center gap-4">

              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-zinc-300 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-green-500/30 hover:bg-green-500/10 hover:text-green-400"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-6 text-xl font-bold text-white">
              Services
            </h4>

            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[17px] text-zinc-400 transition hover:text-green-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-6 text-xl font-bold text-white">
              Company
            </h4>

            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[17px] text-zinc-400 transition hover:text-green-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-6 text-xl font-bold text-white">
              Resources
            </h4>

            <ul className="space-y-4">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[17px] text-zinc-400 transition hover:text-green-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-6 text-xl font-bold text-white">
              Legal
            </h4>

            <ul className="space-y-4">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[17px] text-zinc-400 transition hover:text-green-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col items-center justify-between gap-5 border-t border-white/5 pt-8 md:flex-row">

          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} CodedSEO. All rights reserved.
          </p>

          <div className="flex items-center gap-6">

            <span className="text-sm text-zinc-500">
              Made with precision for futuristic brands
            </span>

            <div className="flex items-center gap-2 text-sm text-zinc-500">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
              All systems operational
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}