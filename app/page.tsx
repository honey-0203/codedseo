import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { ResultsSection } from "@/components/results-section"
import { PricingSection } from "@/components/pricing-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQSection } from "@/components/faq-section"
import ContactSection from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />

      <HeroSection />

      <ServicesSection />

      <ContactSection />


      <ResultsSection />

      <TestimonialsSection />

      <PricingSection />

      <FAQSection />

      <Footer />
    </main>
  )
}