import { notFound } from "next/navigation";
import { client } from "@/sanity/client";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";
import "./blog-post.css";
import { BlogPostScripts } from "./scripts";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const builder = imageUrlBuilder(client);

async function getPost(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    title, author, publishedAt, excerpt, coverImage, body
  }`;
  return client.fetch(query, { slug }, { next: { revalidate: 60 } });
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const imageUrl = post.coverImage ? builder.image(post.coverImage).width(1200).url() : "";
  const date = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
    : "";
  const authorName = post.author || "CodedSEO Editorial Team";
  const authorInitials = authorName.split(" ").map((w: string) => w[0]).slice(0, 2).join("").toUpperCase();

  return (
    <div className="blog-post-page">
      <BlogPostScripts />
      <Header />

      <main>
        <div className="bp-container">
          {/* Breadcrumb */}
          <div className="bp-breadcrumb">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/blog">Resources</Link><span>/</span>
            <span>Blog</span>
          </div>

          {/* Hero */}
          <section className="bp-hero">
            <div className="bp-category"><span className="bp-category-dot"></span>AI SEO</div>
            <h1>{post.title}</h1>
            {post.excerpt && <p className="bp-hero-description">{post.excerpt}</p>}

            <div className="bp-meta-actions">
              <div className="bp-meta-item">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3" y="4" width="18" height="17" rx="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                Published: {date}
              </div>
              <div className="bp-meta-item">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3 2"></path>
                </svg>
                10 min. read
              </div>
            </div>

            <div className="bp-author-section">
              <div className="bp-author-avatar">{authorInitials}</div>
              <div className="bp-author-info">
                <div className="bp-author-name">{authorName}<span className="bp-verified">✓</span></div>
                <div className="bp-author-role">SEO &amp; Content Specialist</div>
              </div>
            </div>
          </section>

          {/* Featured visual */}
          <section className="bp-featured-wrap">
            {imageUrl ? (
              <img src={imageUrl} alt={post.title} className="bp-featured-visual" style={{ objectFit: "cover", width: "100%" }} />
            ) : (
              <div className="bp-featured-visual">
                <div className="bp-visual-grid"></div>
                <div className="bp-orbit"></div>
                <div className="bp-core"><div className="bp-core-inner">AI</div></div>
                <div className="bp-pill bp-pill-1">AI Overviews</div>
                <div className="bp-pill bp-pill-2">Answer Engines</div>
                <div className="bp-pill bp-pill-3">Search Intent</div>
                <div className="bp-pill bp-pill-4">LLM Visibility</div>
              </div>
            )}
          </section>

          {/* Layout */}
          <div className="bp-layout">
            {/* TOC */}
            <aside className="bp-toc">
              <div className="bp-toc-title">Contents</div>
              <ul>
                <li><a href="#key-takeaways">Key Takeaways</a></li>
                <li><a href="#content">Article</a></li>
                <li><a href="#stats">By the Numbers</a></li>
                <li><a href="#faq">FAQs</a></li>
              </ul>
            </aside>

            {/* Article */}
            <article className="bp-article">
              {/* Key Takeaways */}
              <section id="key-takeaways" className="bp-takeaways">
                <h2>Key Takeaways</h2>
                <ul>
                  <li>AI-powered search is changing how users discover information online.</li>
                  <li>Search visibility now depends on relevance, authority, clarity and context.</li>
                  <li>Helpful, structured content gives search engines and AI systems clearer information.</li>
                  <li>Traditional SEO remains important, but brands need to expand for AI search.</li>
                  <li>Optimize content for both human users and AI-driven discovery.</li>
                </ul>
              </section>

              {/* Sanity content */}
              <section id="content">
                {post.body && <PortableText value={post.body} />}
              </section>

              {/* Info box */}
              <div className="bp-info-box">
                <strong>The important shift</strong>
                SEO is no longer only about getting a page into a search result. It is about making your content useful, understandable and trustworthy enough to be selected as a source for an answer.
              </div>

              {/* Stats */}
              <div id="stats" className="bp-stats-grid">
                <div className="bp-stat-card">
                  <div className="bp-stat-number">1M+</div>
                  <div className="bp-stat-label">Keywords ranked through modern SEO strategies</div>
                </div>
                <div className="bp-stat-card">
                  <div className="bp-stat-number">100+</div>
                  <div className="bp-stat-label">Brands supported with search visibility strategies</div>
                </div>
                <div className="bp-stat-card">
                  <div className="bp-stat-number">98%</div>
                  <div className="bp-stat-label">Client retention across long-term campaigns</div>
                </div>
              </div>

              {/* Preferred source */}
              <div className="bp-preferred">
                <div className="bp-preferred-content">
                  <div className="bp-google-circle">
                    <svg width="19" height="19" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M21.35 12.27c0-.72-.06-1.41-.18-2.07H12v3.92h5.24a4.48 4.48 0 0 1-1.94 2.94v2.45h3.14c1.84-1.7 2.91-4.2 2.91-7.24z"/>
                      <path fill="#34A853" d="M12 21.75c2.63 0 4.84-.87 6.45-2.35l-3.14-2.45c-.87.58-1.98.92-3.31.92-2.54 0-4.7-1.72-5.47-4.03H3.28v2.53A9.74 9.74 0 0 0 12 21.75z"/>
                      <path fill="#FBBC05" d="M6.53 13.84A5.86 5.86 0 0 1 6.22 12c0-.64.11-1.26.31-1.84V7.63H3.28A9.74 9.74 0 0 0 2.25 12c0 1.57.38 3.05 1.03 4.37l3.25-2.53z"/>
                      <path fill="#EA4335" d="M12 6.13c1.43 0 2.71.49 3.72 1.45l2.79-2.79C16.83 3.13 14.63 2.25 12 2.25a9.74 9.74 0 0 0-8.72 5.38l3.25 2.53C7.3 7.85 9.46 6.13 12 6.13z"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Add CodedSEO as a preferred source on Google</h4>
                    <p>Get CodedSEO content more easily when researching AI SEO and search trends.</p>
                  </div>
                </div>
                <a href="https://www.google.com/preferences/source" target="_blank" rel="noopener noreferrer" className="bp-preferred-btn">
                  Add Preferred Source
                </a>
              </div>

              {/* CTA */}
              <section className="bp-cta">
                <h2>Is Your Website Ready for AI Search?</h2>
                <p>Build a search strategy that combines technical SEO, helpful content and AI search optimization to improve your visibility across modern search experiences.</p>
                <Link href="/contact" className="bp-cta-btn">Talk to CodedSEO Experts →</Link>
              </section>

              {/* FAQ */}
              <section className="bp-faq" id="faq">
                <h2>Frequently Asked Questions</h2>
                <div className="bp-faq-item">
                  <button className="bp-faq-question" type="button">What is AI SEO?<span className="bp-faq-icon">+</span></button>
                  <div className="bp-faq-answer"><p>AI SEO is the practice of optimizing websites and content for AI-powered search experiences. It combines traditional SEO with clear information, natural language, topical relevance and structured content.</p></div>
                </div>
                <div className="bp-faq-item">
                  <button className="bp-faq-question" type="button">Is traditional SEO still important in 2026?<span className="bp-faq-icon">+</span></button>
                  <div className="bp-faq-answer"><p>Yes. Technical SEO, crawling, indexing, website performance, content quality and authority remain important. AI search builds on these foundations rather than replacing them.</p></div>
                </div>
                <div className="bp-faq-item">
                  <button className="bp-faq-question" type="button">How can I optimize content for AI search?<span className="bp-faq-icon">+</span></button>
                  <div className="bp-faq-answer"><p>Start by answering real customer questions clearly. Build topical depth, use descriptive headings, provide useful examples and maintain a technically accessible website.</p></div>
                </div>
                <div className="bp-faq-item">
                  <button className="bp-faq-question" type="button">What is the difference between AEO and SEO?<span className="bp-faq-icon">+</span></button>
                  <div className="bp-faq-answer"><p>SEO focuses broadly on improving search visibility, while Answer Engine Optimization focuses on helping content become a useful answer for conversational and AI-powered search systems.</p></div>
                </div>
              </section>

              {/* Author bio */}
              <div className="bp-author-section" style={{ marginTop: "50px" }}>
                <div className="bp-author-avatar">{authorInitials}</div>
                <div className="bp-author-info">
                  <div className="bp-author-name">{authorName}<span className="bp-verified">✓</span></div>
                  <div className="bp-author-role">Writes about SEO, AI search and content strategy at CodedSEO.</div>
                </div>
              </div>

              {/* Share */}
              <div className="bp-share">
                <span className="bp-share-label">Share this article</span>
                <a href="#" className="bp-share-btn">in</a>
                <a href="#" className="bp-share-btn">X</a>
                <a href="#" className="bp-share-btn">f</a>
                <button className="bp-share-btn" id="bpCopyBtn" type="button">↗</button>
              </div>
            </article>
          </div>
        </div>

        {/* Related */}
        <section className="bp-related">
          <div className="bp-container">
            <div className="bp-related-header">
              <h2>You May Also Like</h2>
              <Link href="/blog">View All Articles →</Link>
            </div>
            <div className="bp-related-grid">
              <article className="bp-related-card">
                <span className="bp-related-category">AI SEO</span>
                <h3>What Is Generative Engine Optimization?</h3>
                <p>Understand how GEO works and why businesses are preparing their content for AI-powered search.</p>
                <Link href="/blog" className="bp-read-more">Read Article →</Link>
              </article>
              <article className="bp-related-card">
                <span className="bp-related-category">SEO</span>
                <h3>How to Build an AI-Ready SEO Strategy</h3>
                <p>Explore the key elements businesses need to include when building a modern search strategy.</p>
                <Link href="/blog" className="bp-read-more">Read Article →</Link>
              </article>
              <article className="bp-related-card">
                <span className="bp-related-category">Search</span>
                <h3>How Search Intent Impacts Content Rankings</h3>
                <p>Learn why understanding the reason behind a search can improve content relevance and performance.</p>
                <Link href="/blog" className="bp-read-more">Read Article →</Link>
              </article>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}