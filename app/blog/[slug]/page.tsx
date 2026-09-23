import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { client } from "@/sanity/client";
import {
  SITE_URL, urlFor, buildToc, readingTime, formatDate, type Block,
} from "@/sanity/blog-utils";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BlogPostScripts } from "./scripts";
import { PreferredSourceButton, SummarizeButton } from "@/components/preferred-source-button";
import { CtaBox, Callout, DataTable, Checklist, CheckIcon, findChecklistKeys, findObjectives, ObjectiveBox, SmartLink, isExternal, resolveCta, type CtaData } from "./blocks";
import "./blog-post.css";

export const revalidate = 60;

/* ---------------- Types ---------------- */
type Faq = { _key: string; question: string; answer: string };
type Cta = { heading?: string; text?: string; buttonText?: string; buttonLink?: string };
type RelatedPost = { _id: string; title: string; slug: string; excerpt?: string; category?: string };
type Post = {
  _id: string;
  _updatedAt: string;
  title: string;
  slug: string;
  category?: string;
  author?: string;
  authorRole?: string;
  publishedAt?: string;
  excerpt?: string;
  coverImage?: { alt?: string; asset?: unknown };
  body?: Block[];
  keyTakeaways?: string[];
  faqs?: Faq[];
  cta?: CtaData;
  showStats?: boolean;
  metaTitle?: string;
  metaDescription?: string;
  focusKeyword?: string;
  ogImage?: { asset?: unknown };
  canonicalUrl?: string;
  noindex?: boolean;
  picked?: RelatedPost[];
  sameCategory?: RelatedPost[];
  latest?: RelatedPost[];
};

const CTA_FIELDS = `heading, text, buttonText, buttonLink, secondaryText, secondaryLink, style`;
const RELATED_FIELDS = `_id, title, "slug": slug.current, excerpt, category`;

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  _id, _updatedAt, title, "slug": slug.current, category, author, authorRole,
  publishedAt, excerpt, coverImage, keyTakeaways, faqs, showStats,
  "body": body[]{ ..., _type == "ctaBlock" => { ..., "preset": preset->{ ${CTA_FIELDS} } } },
  "cta": cta{ ..., "preset": preset->{ ${CTA_FIELDS} } },
  metaTitle, metaDescription, focusKeyword, ogImage, canonicalUrl, noindex,
  "picked": relatedPosts[]->{ ${RELATED_FIELDS} },
  "sameCategory": *[_type == "post" && _id != ^._id && defined(slug.current) && category == ^.category]
      | order(publishedAt desc)[0...3]{ ${RELATED_FIELDS} },
  "latest": *[_type == "post" && _id != ^._id && defined(slug.current)]
      | order(publishedAt desc)[0...3]{ ${RELATED_FIELDS} }
}`;

async function getPost(slug: string): Promise<Post | null> {
  return client.fetch(POST_QUERY, { slug }, { next: { revalidate: 60 } });
}

const DEFAULT_CTA: Required<Cta> = {
  heading: "Is Your Website Ready for AI Search?",
  text: "Build a search strategy that combines technical SEO, helpful content and AI search optimization to improve your visibility across modern search experiences.",
  buttonText: "Talk to CodedSEO Experts",
  buttonLink: "/contact",
};

/* ---------------- SEO metadata ---------------- */
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: "Article not found" };

  const title = post.metaTitle || post.title;
  const description = post.metaDescription || post.excerpt || "";
  const url = post.canonicalUrl || `${SITE_URL}/blog/${post.slug}`;
  const img = post.ogImage?.asset ? post.ogImage : post.coverImage?.asset ? post.coverImage : null;
  const ogImage = img ? urlFor(img).width(1200).height(630).fit("crop").url() : undefined;

  return {
    title,
    description,
    keywords: post.focusKeyword ? [post.focusKeyword] : undefined,
    alternates: { canonical: url },
    robots: post.noindex ? { index: false, follow: true } : undefined,
    openGraph: {
      type: "article",
      url,
      title,
      description,
      publishedTime: post.publishedAt,
      modifiedTime: post._updatedAt,
      authors: post.author ? [post.author] : undefined,
      images: ogImage ? [{ url: ogImage, width: 1200, height: 630 }] : undefined,
    },
    twitter: { card: "summary_large_image", title, description, images: ogImage ? [ogImage] : undefined },
  };
}

/* ---------------- Page ---------------- */
export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const body = post.body || [];
  const { toc, ids } = buildToc(body);
  const checklistKeys = findChecklistKeys(body);
  const objectives = findObjectives(body);
  const takeaways = (post.keyTakeaways || []).filter(Boolean);
  const faqs = (post.faqs || []).filter((f) => f?.question && f?.answer);
  const ctaSource: CtaData = post.cta ? resolveCta(post.cta) : {};
  const cta = { ...DEFAULT_CTA, ...Object.fromEntries(Object.entries(ctaSource).filter(([k, v]) => v && typeof v === "string" && k !== "_type")) } as Required<Cta>;
  const minutes = readingTime(body, takeaways.join(" ") + " " + faqs.map((f) => f.answer).join(" "));
  const date = formatDate(post.publishedAt);
  const category = post.category || "AI SEO";
  const authorName = post.author || "CodedSEO Editorial Team";
  const authorRole = post.authorRole || "SEO & Content Specialist";
  const authorInitials = authorName.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase();
  const pageUrl = `${SITE_URL}/blog/${post.slug}`;
  const imageUrl = post.coverImage?.asset ? urlFor(post.coverImage).width(1200).url() : "";

  // Related: pehle manually chune hue, phir same category, phir latest
  const related: RelatedPost[] = [];
  for (const p of [...(post.picked || []), ...(post.sameCategory || []), ...(post.latest || [])]) {
    if (p?.slug && !related.some((r) => r._id === p._id)) related.push(p);
    if (related.length === 3) break;
  }

  /* Portable Text renderers */
  const components: PortableTextComponents = {
    block: {
      h2: ({ children, value }) => <h2 id={value._key ? ids[value._key] : undefined}>{children}</h2>,
      h3: ({ children, value }) => <h3 id={value._key ? ids[value._key] : undefined}>{children}</h3>,
      h1: ({ children }) => <h2>{children}</h2>,
      h4: ({ children }) => <h4>{children}</h4>,
      normal: ({ children, value }) => {
        const obj = value._key ? objectives[value._key] : undefined;
        return obj ? <ObjectiveBox label={obj.label} text={obj.text} /> : <p>{children}</p>;
      },
      blockquote: ({ children }) => <blockquote className="bp-quote">{children}</blockquote>,
    },
    list: {
      bullet: ({ children, value }) =>
        checklistKeys.has(value.children?.[0]?._key || "") ? (
          <div className="bp-check bp-check--auto"><ul className="bp-check-grid">{children}</ul></div>
        ) : <ul>{children}</ul>,
      number: ({ children, value }) =>
        checklistKeys.has(value.children?.[0]?._key || "") ? (
          <div className="bp-check bp-check--auto"><ul className="bp-check-grid">{children}</ul></div>
        ) : <ol>{children}</ol>,
    },
    listItem: {
      bullet: ({ children, value }) =>
        checklistKeys.has(value._key || "") ? <li><CheckIcon /><span>{children}</span></li> : <li>{children}</li>,
      number: ({ children, value }) =>
        checklistKeys.has(value._key || "") ? <li><CheckIcon /><span>{children}</span></li> : <li>{children}</li>,
    },
    marks: {
      link: ({ children, value }) => {
        const href: string = value?.href || "#";
        const rel = [value?.newTab || isExternal(href) ? "noopener noreferrer" : "", value?.nofollow ? "nofollow" : ""]
          .filter(Boolean).join(" ") || undefined;
        return (
          <a href={href} target={value?.newTab ? "_blank" : undefined} rel={rel}>{children}</a>
        );
      },
    },
    types: {
      image: ({ value }) =>
        value?.asset ? (
          <figure className="bp-figure">
            <img src={urlFor(value).width(1000).auto("format").url()} alt={value.alt || ""} loading="lazy" />
            {value.caption && <figcaption>{value.caption}</figcaption>}
          </figure>
        ) : null,
      ctaBlock: ({ value }) => <CtaBox value={value} />,
      infoBox: ({ value }) => <Callout value={value} />,
      tableBlock: ({ value }) => <DataTable value={value} />,
      checklistBlock: ({ value }) => <Checklist value={value} />,
    },
  };

  /* Structured data */
  const jsonLd: Record<string, unknown>[] = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.metaDescription || post.excerpt,
      image: imageUrl || undefined,
      datePublished: post.publishedAt,
      dateModified: post._updatedAt,
      author: { "@type": "Person", name: authorName },
      publisher: { "@type": "Organization", name: "CodedSEO", url: SITE_URL },
      mainEntityOfPage: pageUrl,
      articleSection: category,
      keywords: post.focusKeyword,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
        { "@type": "ListItem", position: 3, name: post.title, item: pageUrl },
      ],
    },
  ];
  if (faqs.length) {
    jsonLd.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    });
  }

  const share = encodeURIComponent(pageUrl);
  const shareTitle = encodeURIComponent(post.title);

  return (
    <div className="blog-post-page">
      <BlogPostScripts />
      <Header />
      {jsonLd.map((d, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d).replace(/</g, "\\u003c") }} />
      ))}

      <main>
        <div className="bp-container">
          <nav className="bp-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/blog">Blog</Link><span>/</span>
            <span>{category}</span>
          </nav>

          <section className="bp-hero">
            <div className="bp-category"><span className="bp-category-dot"></span>{category}</div>
            <h1>{post.title}</h1>
            {post.excerpt && <p className="bp-hero-description">{post.excerpt}</p>}

            <div className="bp-meta-actions">
              {date && (
                <div className="bp-meta-item">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                    <rect x="3" y="4" width="18" height="17" rx="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  Published: <time dateTime={post.publishedAt}>{date}</time>
                </div>
              )}
              <div className="bp-meta-item">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3 2"></path>
                </svg>
                {minutes} min. read
              </div>
            </div>

            <div className="bp-author-section">
              <div className="bp-author-avatar">{authorInitials}</div>
              <div className="bp-author-info">
                <div className="bp-author-name">{authorName}<span className="bp-verified">✓</span></div>
                <div className="bp-author-role">{authorRole}</div>
              </div>
            </div>

            <div className="bp-hero-actions">
              <PreferredSourceButton />
              <SummarizeButton url={pageUrl} />
            </div>
          </section>

          <section className="bp-featured-wrap">
            {imageUrl ? (
              <img src={imageUrl} alt={post.coverImage?.alt || post.title} className="bp-featured-visual"
                   style={{ objectFit: "cover", width: "100%" }} fetchPriority="high" />
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

          <div className="bp-layout">
            {/* Dynamic Table of Contents */}
            <aside className="bp-toc" aria-label="Table of contents">
              <div className="bp-toc-title">Contents</div>
              <ul>
                {takeaways.length > 0 && <li><a href="#key-takeaways">Key Takeaways</a></li>}
                {toc.map((item) => (
                  <li key={item.id} className={item.level === 3 ? "bp-toc-sub" : undefined}>
                    <a href={`#${item.id}`}>{item.text}</a>
                  </li>
                ))}
                {faqs.length > 0 && <li><a href="#faq">FAQs</a></li>}
              </ul>
            </aside>

            <article className="bp-article">
              {takeaways.length > 0 && (
                <section id="key-takeaways" className="bp-takeaways">
                  <h2>Key Takeaways</h2>
                  <ul>{takeaways.map((t, i) => <li key={i}>{t}</li>)}</ul>
                </section>
              )}

              <div className="bp-body">
                <PortableText value={body} components={components} />
              </div>

              {post.showStats !== false && (
                <div id="stats" className="bp-stats-grid">
                  <div className="bp-stat-card"><div className="bp-stat-number">1M+</div><div className="bp-stat-label">Keywords ranked through modern SEO strategies</div></div>
                  <div className="bp-stat-card"><div className="bp-stat-number">100+</div><div className="bp-stat-label">Brands supported with search visibility strategies</div></div>
                  <div className="bp-stat-card"><div className="bp-stat-number">98%</div><div className="bp-stat-label">Client retention across long-term campaigns</div></div>
                </div>
              )}

              <div className="bp-preferred">
                <div className="bp-preferred-content">
                  <div className="bp-google-circle">
                    <svg width="19" height="19" viewBox="0 0 24 24" aria-hidden="true">
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
                <a href="https://www.google.com/preferences/source?q=codedseo.com" target="_blank" rel="noopener noreferrer" className="bp-preferred-btn">Add Preferred Source</a>
              </div>

              {/* Dynamic bottom CTA */}
              <section className="bp-cta">
                <h2>{cta.heading}</h2>
                <p>{cta.text}</p>
                <SmartLink href={cta.buttonLink} className="bp-cta-btn">{cta.buttonText} →</SmartLink>
              </section>

              {/* Dynamic FAQ */}
              {faqs.length > 0 && (
                <section className="bp-faq" id="faq">
                  <h2>Frequently Asked Questions</h2>
                  {faqs.map((f) => (
                    <div className="bp-faq-item" key={f._key}>
                      <button className="bp-faq-question" type="button">{f.question}<span className="bp-faq-icon">+</span></button>
                      <div className="bp-faq-answer"><p>{f.answer}</p></div>
                    </div>
                  ))}
                </section>
              )}

              <div className="bp-author-section" style={{ marginTop: "50px" }}>
                <div className="bp-author-avatar">{authorInitials}</div>
                <div className="bp-author-info">
                  <div className="bp-author-name">{authorName}<span className="bp-verified">✓</span></div>
                  <div className="bp-author-role">{authorRole} at CodedSEO.</div>
                </div>
              </div>

              <div className="bp-share">
                <span className="bp-share-label">Share this article</span>
                <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${share}`} target="_blank" rel="noopener noreferrer" className="bp-share-btn" aria-label="Share on LinkedIn">in</a>
                <a href={`https://twitter.com/intent/tweet?url=${share}&text=${shareTitle}`} target="_blank" rel="noopener noreferrer" className="bp-share-btn" aria-label="Share on X">X</a>
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${share}`} target="_blank" rel="noopener noreferrer" className="bp-share-btn" aria-label="Share on Facebook">f</a>
                <button className="bp-share-btn" id="bpCopyBtn" type="button" aria-label="Copy link">↗</button>
              </div>
            </article>
          </div>
        </div>

        {/* Dynamic related posts */}
        {related.length > 0 && (
          <section className="bp-related">
            <div className="bp-container">
              <div className="bp-related-header">
                <h2>You May Also Like</h2>
                <Link href="/blog">View All Articles →</Link>
              </div>
              <div className="bp-related-grid">
                {related.map((r) => (
                  <article className="bp-related-card" key={r._id}>
                    <span className="bp-related-category">{r.category || "AI SEO"}</span>
                    <h3>{r.title}</h3>
                    {r.excerpt && <p>{r.excerpt.length > 140 ? r.excerpt.slice(0, 137) + "…" : r.excerpt}</p>}
                    <Link href={`/blog/${r.slug}`} className="bp-read-more">Read Article →</Link>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}