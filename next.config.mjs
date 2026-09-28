const nextConfig = {
  async redirects() {
    return [
      { source: "/usa", destination: "/seo-agency-usa", permanent: true },
    ]
  },
}

export default nextConfig