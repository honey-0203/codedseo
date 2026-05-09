import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: 'RankFlow | #1 AI-Powered SEO Agency 2026 - Dominate Search Rankings',
  description: 'Transform your online presence with RankFlow. We combine cutting-edge AI technology with proven SEO strategies to deliver 10x organic traffic growth. Trusted by 500+ brands worldwide.',
  keywords: 'SEO agency, AI SEO, digital marketing, search engine optimization, organic traffic, keyword ranking',
  openGraph: {
    title: 'RankFlow | #1 AI-Powered SEO Agency 2026',
    description: 'Transform your online presence with AI-powered SEO strategies that deliver 10x organic traffic growth.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
