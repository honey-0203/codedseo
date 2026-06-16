import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://codedseo.com"),

  title: "Best Digital Marketing Agency | AI-Powered SEO | CodedSEO",

  description:
    "CodedSEO is the best digital marketing agency for brands ready to grow globally. AI-powered SEO strategies that deliver real traffic, leads, and revenue.",

  alternates: {
    canonical: "https://codedseo.com/",
  },

  openGraph: {
    title: "Best Digital Marketing Agency | AI-Powered SEO | CodedSEO",
    description:
      "CodedSEO is the best digital marketing agency combining AI with proven SEO strategies for global brands.",
    url: "https://codedseo.com/",
    type: "website",
  },

  icons: {
    icon: "/favicon.png",
  },
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6WFDP34879"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6WFDP34879');
          `}
        </Script>
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-background`}
      >
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}