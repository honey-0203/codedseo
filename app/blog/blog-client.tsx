"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { useState } from "react"
import "./blog-listing.css"

const categories = ["All", "AI SEO", "SEO", "Content", "Technical SEO", "Local SEO", "Link Building"]

const topics = [
  { icon: "AI", title: "AI SEO", desc: "AI search, GEO, AEO and LLM visibility." },
  { icon: "SEO", title: "SEO", desc: "Rankings, keywords and search strategy." },
  { icon: "TECH", title: "Technical SEO", desc: "Crawling, indexing, speed and architecture." },
  { icon: "COPY", title: "Content", desc: "Content strategy and topical authority." },
  { icon: "MAP", title: "Local SEO", desc: "Local visibility and business discovery." },
  { icon: "LINK", title: "Link Building", desc: "Authority, digital PR and outreach." },
]

function symbolFor(title: string) {
  const w = (title || "AI").split(" ")[0]
  return w.slice(0, 5).toUpperCase()
}

export default function BlogClient({ initialPosts }: { initialPosts: any[] }) {
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const featured = initialPosts[0]

  const filteredPosts = initialPosts.filter((post) => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory
    const q = searchQuery.toLowerCase()
    const matchesSearch =
      (post.title || "").toLowerCase().includes(q) ||
      (post.excerpt || "").toLowerCase().includes(q)
    return matchesCategory && matchesSearch
  })

  function handleSubscribe(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    alert("Thanks for subscribing to CodedSEO.")
    e.currentTarget.reset()
  }

  return (
    <div className="blog-listing">
      <Header />

      <main>
        <section className="bl-hero">
          <div className="bl-container">
            <div className="bl-hero-inner">
              <div className="bl-badge">
                <span className="bl-dot"></span>CodedSEO Resources
              </div>
              <h1>
                Ideas That Help You <span className="bl-highlight">Rank, Grow &amp; Convert.</span>
              </h1>
              <p className="bl-hero-desc">
                Practical insights on AI SEO, search engine optimization, content strategy, technical SEO and the future of digital search — written for brands that want to grow.
              </p>
              <div className="bl-hero-actions">
                <a href="#latest" className="bl-primary-btn">Explore Latest Articles <span>↓</span></a>
                <a href="#topics" className="bl-secondary-btn">Browse Topics</a>
              </div>
            </div>
          </div>
        </section>

        {featured && (
          <section className="bl-featured-section">
            <div className="bl-container">
              <div className="bl-section-top">
                <div>
                  <span className="bl-eyebrow">Featured Insight</span>
                  <h2>Start With What&apos;s Changing</h2>
                </div>
                <p>Our latest thinking on search, AI and organic growth — distilled into practical strategies you can use.</p>
              </div>

              <article className="bl-featured-card">
                <div className="bl-featured-content">
                  <span className="bl-featured-tag">{featured.category || "AI SEO"}</span>
                  <h3>{featured.title}</h3>
                  <p>{featured.excerpt}</p>
                  <div className="bl-featured-meta">
                    <span>{featured.author}</span>
                    <span className="bl-sep">•</span>
                    <span>{featured.date}</span>
                    <span className="bl-sep">•</span>
                    <span>{featured.readTime}</span>
                  </div>
                  <Link href={`/blog/${featured.slug}`} className="bl-featured-read">
                    Read Full Article <span>→</span>
                  </Link>
                </div>
                <div className="bl-featured-visual">
                  {featured.image ? (
                    <img src={featured.image} alt={featured.title} />
                  ) : (
                    <>
                      <div className="bl-vgrid"></div>
                      <div className="bl-orbit"></div>
                      <div className="bl-core"><div className="bl-core-inner">AI</div></div>
                      <div className="bl-pill bl-pill-a">AI Overviews</div>
                      <div className="bl-pill bl-pill-b">GEO</div>
                      <div className="bl-pill bl-pill-c">Search Intent</div>
                      <div className="bl-pill bl-pill-d">LLM Visibility</div>
                    </>
                  )}
                </div>
              </article>
            </div>
          </section>
        )}

        <section className="bl-blog-section" id="latest">
          <div className="bl-container">
            <div className="bl-section-top">
              <div>
                <span className="bl-eyebrow">Latest Articles</span>
                <h2>Explore the CodedSEO Blog</h2>
              </div>
              <p>From technical SEO to AI search optimization, explore our latest strategies, guides and industry insights.</p>
            </div>

            <div className="bl-toolbar">
              <div className="bl-categories">
                {categories.map((c) => (
                  <button
                    key={c}
                    type="button"
                    className={activeCategory === c ? "bl-cat-btn active" : "bl-cat-btn"}
                    onClick={() => setActiveCategory(c)}
                  >
                    {c}
                  </button>
                ))}
              </div>
              <div className="bl-search">
                <span className="bl-search-icon">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="7"></circle>
                    <path d="m20 20-4-4"></path>
                  </svg>
                </span>
                <input
                  type="search"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {filteredPosts.length === 0 ? (
              <div className="bl-no-results">
                <h3>No articles found</h3>
                <p>Try a different keyword or select another category.</p>
              </div>
            ) : (
              <div className="bl-grid">
                {filteredPosts.map((post) => (
                  <article key={post.id} className="bl-card">
                    <Link href={`/blog/${post.slug}`} className="bl-card-visual">
                      {post.image ? (
                        <img src={post.image} alt={post.title} />
                      ) : (
                        <>
                          <div className="bl-vlines"></div>
                          <div className="bl-symbol">{symbolFor(post.title)}</div>
                        </>
                      )}
                    </Link>
                    <div className="bl-card-content">
                      <div className="bl-card-cat">{post.category || "AI SEO"}</div>
                      <h3 className="bl-card-title">{post.title}</h3>
                      <p className="bl-card-excerpt">{post.excerpt}</p>
                      <div className="bl-card-bottom">
                        <span className="bl-card-meta">{post.readTime}</span>
                        <Link href={`/blog/${post.slug}`} className="bl-read-link">Read →</Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="bl-topics" id="topics">
          <div className="bl-container">
            <div className="bl-topics-header">
              <span className="bl-eyebrow">Explore Topics</span>
              <h2>Everything You Need to Grow in Search</h2>
              <p>Go deeper into the areas that matter most to your organic growth strategy.</p>
            </div>
            <div className="bl-topic-grid">
              {topics.map((t) => (
                <a key={t.title} href="#latest" className="bl-topic-card" onClick={() => setActiveCategory(t.title)}>
                  <div className="bl-topic-icon">{t.icon}</div>
                  <h3>{t.title}</h3>
                  <p>{t.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="bl-newsletter">
          <div className="bl-container">
            <div className="bl-newsletter-box">
              <div className="bl-newsletter-content">
                <span className="bl-newsletter-label">CodedSEO Newsletter</span>
                <h2>Stay Ahead of Search.</h2>
                <p>Get practical SEO and AI search insights, strategy breakdowns and important industry updates delivered to your inbox.</p>
              </div>
              <form className="bl-newsletter-form" onSubmit={handleSubscribe}>
                <input type="email" placeholder="Your email address" required aria-label="Email address" />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </section>

        <section className="bl-final-cta">
          <div className="bl-container">
            <div className="bl-cta-box">
              <span className="bl-eyebrow">Ready to Grow?</span>
              <h2>Turn Search Visibility Into Growth.</h2>
              <p>CodedSEO combines AI-powered SEO, technical expertise and content strategy to help ambitious brands build sustainable organic growth.</p>
              <Link href="/contact" className="bl-primary-btn">Talk to CodedSEO Experts →</Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}