const nextConfig = {
  // sitemap aur llms.txt ko app folder ki files padhne deta hai (pages apne aap dhoondhne ke liye)
  outputFileTracingIncludes: {
    "/sitemap.xml": ["./app/**/page.tsx", "./app/**/layout.tsx"],
    "/llms.txt": ["./app/**/page.tsx", "./app/**/layout.tsx"],
  },
  async redirects() {
    return [
      { source: "/usa", destination: "/seo-agency-usa", permanent: true },
    ]
  },
}

export default nextConfig