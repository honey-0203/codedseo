"use client";

import { useEffect } from "react";
import "./seo.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

type TabData = {
  title: string;
  description: string;
  items: string[];
};

const services: Record<string, TabData> = {
  technical: {
    title: "Technical SEO",
    description:
      "We identify and fix technical issues that can make it harder for search engines to crawl, understand and rank your website.",
    items: [
      "Technical SEO Audit",
      "Website Architecture",
      "Core Web Vitals",
      "Indexation Optimization",
      "Schema Markup",
      "Mobile SEO",
    ],
  },
  onpage: {
    title: "On-Page SEO",
    description:
      "We optimize your most important pages so search engines and visitors can quickly understand what your business offers.",
    items: [
      "Keyword Optimization",
      "Title & Meta Optimization",
      "Header Structure",
      "Internal Linking",
      "Image Optimization",
      "Conversion Improvements",
    ],
  },
  content: {
    title: "Content SEO",
    description:
      "We create a search-focused content strategy designed to answer customer questions, capture demand and build topical authority.",
    items: [
      "Keyword Research",
      "Topic Clusters",
      "Service Pages",
      "Blog Strategy",
      "Content Optimization",
      "Content Refreshes",
    ],
  },
  local: {
    title: "Local SEO",
    description:
      "We improve your visibility across local search results so nearby customers can discover your business when they are ready to buy.",
    items: [
      "Google Business Profile",
      "Local Keywords",
      "Location Pages",
      "Local Citations",
      "Review Strategy",
      "Map Visibility",
    ],
  },
  authority: {
    title: "Authority Building",
    description:
      "We strengthen your website's authority through relevant, quality-focused strategies designed to support sustainable search visibility.",
    items: [
      "Competitor Backlink Analysis",
      "Digital PR",
      "Relevant Outreach",
      "Guest Contributions",
      "Brand Mentions",
      "Link Opportunities",
    ],
  },
};

const goals: Record<string, { title: string; description: string; points: string[] }> = {
  traffic: {
    title: "Build Consistent Organic Traffic",
    description:
      "We target relevant search opportunities and create content that helps your website attract people actively researching your products, services and solutions.",
    points: [
      "Keyword Research",
      "Content Strategy",
      "Topic Clusters",
      "Internal Linking",
      "Content Optimization",
    ],
  },
  leads: {
    title: "Turn Search Traffic Into Leads",
    description:
      "SEO should not stop at rankings. We optimize important pages and target high-intent searches that can bring more qualified enquiries.",
    points: [
      "Commercial Keywords",
      "Landing Page SEO",
      "Conversion Optimization",
      "CTA Strategy",
      "Lead Tracking",
    ],
  },
  local: {
    title: "Own Your Local Search Market",
    description:
      "Reach customers searching for businesses near them through stronger local signals, optimized profiles and location-focused content.",
    points: [
      "Google Business Profile",
      "Local Landing Pages",
      "Reviews",
      "Local Citations",
      "Map Visibility",
    ],
  },
  ecommerce: {
    title: "Increase Organic Product Sales",
    description:
      "Capture shoppers throughout the buying journey with optimized category pages, product pages and content designed around commercial searches.",
    points: [
      "Product SEO",
      "Category Optimization",
      "Commercial Keywords",
      "Internal Linking",
      "Shopping Visibility",
    ],
  },
};

export default function SeoPage() {
  useEffect(() => {
    const cleanups: Array<() => void> = [];

    /* ---------- SMOOTH SCROLL ---------- */
    const prevScroll = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "smooth";
    cleanups.push(() => {
      document.documentElement.style.scrollBehavior = prevScroll;
    });

    /* ---------- CURSOR GLOW ---------- */
    const glow = document.getElementById("cursorGlow");
    const onMove = (e: MouseEvent) => {
      if (!glow) return;
      glow.style.left = e.clientX + "px";
      glow.style.top = e.clientY + "px";
    };
    document.addEventListener("mousemove", onMove);
    cleanups.push(() => document.removeEventListener("mousemove", onMove));

    /* ---------- SCROLL REVEAL ---------- */
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("show");
        });
      },
      { threshold: 0.12 }
    );
    document
      .querySelectorAll(".seo-page .reveal")
      .forEach((el) => revealObserver.observe(el));
    cleanups.push(() => revealObserver.disconnect());

    /* ---------- SERVICE TABS ---------- */
    const serviceTabs =
      document.querySelectorAll<HTMLElement>(".seo-page .service-tab");
    serviceTabs.forEach((tab) => {
      const onClick = () => {
        serviceTabs.forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");
        const key = tab.dataset.service || "";
        const service = services[key];
        if (!service) return;
        const title = document.getElementById("serviceTitle");
        const desc = document.getElementById("serviceDescription");
        const list = document.getElementById("serviceList");
        if (title) title.textContent = service.title;
        if (desc) desc.textContent = service.description;
        if (list)
          list.innerHTML = service.items
            .map((item) => `<div>${item}</div>`)
            .join("");
      };
      tab.addEventListener("click", onClick);
      cleanups.push(() => tab.removeEventListener("click", onClick));
    });

    /* ---------- GOAL TABS ---------- */
    const goalButtons =
      document.querySelectorAll<HTMLElement>(".seo-page .goal-btn");
    goalButtons.forEach((button) => {
      const onClick = () => {
        goalButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");
        const goal = goals[button.dataset.goal || ""];
        if (!goal) return;
        const title = document.getElementById("goalTitle");
        const desc = document.getElementById("goalDescription");
        const points = document.getElementById("goalPoints");
        if (title) title.textContent = goal.title;
        if (desc) desc.textContent = goal.description;
        if (points)
          points.innerHTML = goal.points
            .map((point) => `<span>${point}</span>`)
            .join("");
      };
      button.addEventListener("click", onClick);
      cleanups.push(() => button.removeEventListener("click", onClick));
    });

    /* ---------- FAQ ---------- */
    document
      .querySelectorAll<HTMLElement>(".seo-page .faq-question")
      .forEach((question) => {
        const onClick = () => {
          const item = question.parentElement;
          document
            .querySelectorAll(".seo-page .faq-item")
            .forEach((other) => {
              if (other !== item) other.classList.remove("active");
            });
          if (item) item.classList.toggle("active");
        };
        question.addEventListener("click", onClick);
        cleanups.push(() => question.removeEventListener("click", onClick));
      });

    /* ---------- COUNTERS ---------- */
    const counters =
      document.querySelectorAll<HTMLElement>(".seo-page [data-count]");
    const counterObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const counter = entry.target as HTMLElement;
          const target = Number(counter.dataset.count);
          let current = 0;
          const increment = target / 70;
          function update() {
            current += increment;
            if (current < target) {
              counter.textContent = Math.floor(current).toLocaleString();
              requestAnimationFrame(update);
            } else {
              counter.textContent = target.toLocaleString();
              if (target === 247) counter.textContent = "+" + target + "%";
              if (target === 97) counter.textContent = target + "%";
            }
          }
          update();
          observer.unobserve(counter);
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach((counter) => counterObserver.observe(counter));
    cleanups.push(() => counterObserver.disconnect());

    /* ---------- MAGNETIC BUTTON EFFECT ---------- */
    document
      .querySelectorAll<HTMLElement>(".seo-page .btn")
      .forEach((button) => {
        const onBtnMove = (e: MouseEvent) => {
          const rect = button.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          button.style.transform = `translate(${x * 0.08}px,${y * 0.08}px)`;
        };
        const onLeave = () => {
          button.style.transform = "";
        };
        button.addEventListener("mousemove", onBtnMove);
        button.addEventListener("mouseleave", onLeave);
        cleanups.push(() => {
          button.removeEventListener("mousemove", onBtnMove);
          button.removeEventListener("mouseleave", onLeave);
        });
      });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return (
    <>
      <Header />
      <div className="seo-page">
      <div className="noise"></div>
      <div className="glow" id="cursorGlow"></div>

      <main>

      <section className="hero">

      <div className="grid-bg"></div>

      <div className="container">

      <div className="hero-grid">

      <div className="hero-content reveal">

      <div className="eyebrow">

      <span className="eyebrow-dot"></span>

      SEO BUILT FOR SMALL BUSINESS

      </div>

      <h1>

      Turn Google Searches Into
      <span className="gradient-text">
      Real Customers.
      </span>

      </h1>

      <p className="hero-description">

      Your business doesn't need more random traffic.
      It needs the right people finding you at the right time.
      Our small business SEO strategies help you build visibility,
      attract qualified visitors and turn search demand into growth.

      </p>

      <div className="hero-actions">

      <a href="#contact" className="btn btn-primary">
      Get My Free SEO Audit →
      </a>

      <a href="#services" className="btn btn-outline">
      Explore SEO Services
      </a>

      </div>

      <div className="hero-proof">

      <div className="proof-item">
      <strong>10X</strong>
      <span>Traffic Growth Potential</span>
      </div>

      <div className="proof-item">
      <strong>100+</strong>
      <span>Businesses Served</span>
      </div>

      <div className="proof-item">
      <strong>4.9/5</strong>
      <span>Client Rating</span>
      </div>

      </div>

      </div>

      <div className="hero-visual reveal">

      <div className="orbit"></div>
      <div className="orbit orbit-2"></div>

      <div className="dashboard">

      <div className="dash-top">

      <div className="dash-title">
      Organic Growth
      </div>

      <div className="live">
      <i></i>
      LIVE SEO DATA
      </div>

      </div>

      <div className="dash-chart">

      <div className="chart-grid"></div>

      <div className="chart-label">
      ORGANIC VISIBILITY
      </div>

      <div className="chart-line">

      <svg viewBox="0 0 500 150" preserveAspectRatio="none">

      <defs>

      <linearGradient id="chartGradient">

      <stop offset="0%" stopColor="#16a34a"/>
      <stop offset="100%" stopColor="#4ade80"/>

      </linearGradient>

      </defs>

      <path
      d="M0 130
      C40 125 55 110 85 115
      C120 120 125 90 160 98
      C200 107 210 72 245 79
      C280 85 300 58 325 62
      C355 67 375 35 405 45
      C440 55 455 18 500 5"

      fill="none"

      stroke="url(#chartGradient)"

      strokeWidth="5"

      strokeLinecap="round"

      />

      </svg>

      </div>

      </div>

      <div className="dash-stats">

      <div className="mini-stat">

      <span>TRAFFIC</span>

      <strong>
      +247%
      </strong>

      <div className="up">
      ↑ 32% this month
      </div>

      </div>

      <div className="mini-stat">

      <span>KEYWORDS</span>

      <strong>
      2.8K
      </strong>

      <div className="up">
      ↑ 156 new
      </div>

      </div>

      <div className="mini-stat">

      <span>LEADS</span>

      <strong>
      +84%
      </strong>

      <div className="up">
      ↑ 18% this month
      </div>

      </div>

      </div>

      </div>

      </div>

      </div>

      </div>

      </section>

      <section>

      <div className="container">

      <div className="section-head reveal">

      <div className="section-tag">
      01 / WHY SEO
      </div>

      <h2>
      Your customers are already searching.
      Can they find you?
      </h2>

      <p>
      Small businesses compete with larger brands every day.
      A focused SEO strategy helps you compete where it matters:
      the searches connected to your products, services and local market.
      </p>

      </div>

      <div className="why-grid">

      <div className="reveal">

      <div className="big-number">
      01
      </div>

      <div className="big-label">
      Search visibility gives small businesses a way to compete
      without depending entirely on paid advertising.
      </div>

      </div>

      <div className="reason-grid">

      <div className="reason reveal">

      <div className="reason-icon">⌕</div>

      <h3>
      Get Found
      </h3>

      <p>
      Appear when potential customers search for the services or products your business provides.
      </p>

      </div>

      <div className="reason reveal">

      <div className="reason-icon">↗</div>

      <h3>
      Build Qualified Traffic
      </h3>

      <p>
      Reach visitors with real search intent instead of chasing empty traffic numbers.
      </p>

      </div>

      <div className="reason reveal">

      <div className="reason-icon">◎</div>

      <h3>
      Generate More Leads
      </h3>

      <p>
      Turn relevant search visibility into calls, enquiries, bookings and sales.
      </p>

      </div>

      <div className="reason reveal">

      <div className="reason-icon">◈</div>

      <h3>
      Compete Locally
      </h3>

      <p>
      Build stronger visibility in the locations where your customers actually live and buy.
      </p>

      </div>

      </div>

      </div>

      </div>

      </section>

      <section id="services">

      <div className="container">

      <div className="section-head reveal">

      <div className="section-tag">
      02 / OUR SERVICES
      </div>

      <h2>
      SEO designed around how small businesses actually grow.
      </h2>

      <p>
      No unnecessary complexity. We combine technical SEO, content,
      local search and authority building into one focused growth strategy.
      </p>

      </div>

      <div className="service-layout">

      <div className="service-menu">

      <div className="service-tab active" data-service="technical">

      <strong>Technical SEO</strong>
      <span>Build a stronger foundation</span>

      </div>

      <div className="service-tab" data-service="onpage">

      <strong>On-Page SEO</strong>
      <span>Optimize important pages</span>

      </div>

      <div className="service-tab" data-service="content">

      <strong>Content SEO</strong>
      <span>Capture search demand</span>

      </div>

      <div className="service-tab" data-service="local">

      <strong>Local SEO</strong>
      <span>Own your local market</span>

      </div>

      <div className="service-tab" data-service="authority">

      <strong>Authority Building</strong>
      <span>Strengthen your website</span>

      </div>

      </div>

      <div className="service-content reveal">

      <div className="service-number">
      SERVICE / 01
      </div>

      <h3 id="serviceTitle">
      Technical SEO
      </h3>

      <p id="serviceDescription">
      We identify and fix technical issues that can make it harder
      for search engines to crawl, understand and rank your website.
      </p>

      <div className="service-list" id="serviceList">

      <div>Technical SEO Audit</div>
      <div>Website Architecture</div>
      <div>Core Web Vitals</div>
      <div>Indexation Optimization</div>
      <div>Schema Markup</div>
      <div>Mobile SEO</div>

      </div>

      </div>

      </div>

      </div>

      </section>

      <section id="results" className="results-section">

      <div className="container">

      <div className="section-head reveal">

      <div className="section-tag">
      03 / RESULTS
      </div>

      <h2>
      Small business SEO should create measurable movement.
      </h2>

      <p>
      We focus on the metrics that connect search visibility with
      business growth — rankings, qualified traffic, leads and conversions.
      </p>

      </div>

      <div className="result-board reveal">

      <div className="result">

      <strong data-count="247">0</strong>

      <span>
      Organic Traffic Growth
      </span>

      <small>
      ↑ Growth
      </small>

      </div>

      <div className="result">

      <strong data-count="2847">0</strong>

      <span>
      Keywords Ranked
      </span>

      <small>
      ↑ Visibility
      </small>

      </div>

      <div className="result">

      <strong data-count="156">0</strong>

      <span>
      New Leads
      </span>

      <small>
      ↑ Conversions
      </small>

      </div>

      <div className="result">

      <strong data-count="97">0</strong>

      <span>
      First Page Rankings
      </span>

      <small>
      ↑ Performance
      </small>

      </div>

      </div>

      <div className="result-chart reveal">

      <div className="fake-bars">

      <div className="fake-bar" style={{height:'18%'}}></div>
      <div className="fake-bar" style={{height:'25%'}}></div>
      <div className="fake-bar" style={{height:'31%'}}></div>
      <div className="fake-bar" style={{height:'38%'}}></div>
      <div className="fake-bar" style={{height:'45%'}}></div>
      <div className="fake-bar" style={{height:'52%'}}></div>
      <div className="fake-bar" style={{height:'63%'}}></div>
      <div className="fake-bar" style={{height:'70%'}}></div>
      <div className="fake-bar" style={{height:'79%'}}></div>
      <div className="fake-bar" style={{height:'88%'}}></div>
      <div className="fake-bar" style={{height:'96%'}}></div>

      </div>

      </div>

      </div>

      </section>

      <section className="cta">

      <div className="container">

      <div className="cta-box reveal">

      <h2>
      Your next customer may already be searching for you.
      </h2>

      <p>
      Let's find the search opportunities your competitors are winning
      and create an SEO strategy around your business goals.
      </p>

      <a href="#contact" className="btn">
      Get My Free SEO Audit →
      </a>

      </div>

      </div>

      </section>

      <section id="process">

      <div className="container">

      <div className="section-head reveal">

      <div className="section-tag">
      04 / OUR PROCESS
      </div>

      <h2>
      From search problems to sustainable growth.
      </h2>

      <p>
      A simple process keeps your SEO focused, transparent and connected
      to the goals that matter to your business.
      </p>

      </div>

      <div className="process">

      <div className="process-card reveal">

      <div className="process-num">
      01 / DISCOVER
      </div>

      <h3>
      Understand
      </h3>

      <p>
      We learn about your business, audience, competitors and current search visibility.
      </p>

      </div>

      <div className="process-card reveal">

      <div className="process-num">
      02 / STRATEGIZE
      </div>

      <h3>
      Plan
      </h3>

      <p>
      We identify the keywords, technical priorities and growth opportunities worth pursuing.
      </p>

      </div>

      <div className="process-card reveal">

      <div className="process-num">
      03 / OPTIMIZE
      </div>

      <h3>
      Execute
      </h3>

      <p>
      Our team improves your website, content, local presence and authority signals.
      </p>

      </div>

      <div className="process-card reveal">

      <div className="process-num">
      04 / GROW
      </div>

      <h3>
      Measure
      </h3>

      <p>
      We monitor rankings, traffic and leads and continuously improve the strategy.
      </p>

      </div>

      </div>

      </div>

      </section>

      <section>

      <div className="container">

      <div className="section-head reveal">

      <div className="section-tag">
      05 / STRATEGIES
      </div>

      <h2>
      SEO strategies built around your actual business goal.
      </h2>

      </div>

      <div className="goal-wrap reveal">

      <div className="goal-nav">

      <button className="goal-btn active" data-goal="traffic">
      More Traffic
      </button>

      <button className="goal-btn" data-goal="leads">
      More Leads
      </button>

      <button className="goal-btn" data-goal="local">
      Local Visibility
      </button>

      <button className="goal-btn" data-goal="ecommerce">
      More Sales
      </button>

      </div>

      <div className="goal-content">

      <h3 id="goalTitle">
      Build Consistent Organic Traffic
      </h3>

      <p id="goalDescription">
      We target relevant search opportunities and create content that
      helps your website attract people actively researching your products,
      services and solutions.
      </p>

      <div className="goal-points" id="goalPoints">

      <span>Keyword Research</span>
      <span>Content Strategy</span>
      <span>Topic Clusters</span>
      <span>Internal Linking</span>
      <span>Content Optimization</span>

      </div>

      </div>

      </div>

      </div>

      </section>

      <section id="pricing">

      <div className="container">

      <div className="section-head reveal">

      <div className="section-tag">
      06 / SEO PACKAGES
      </div>

      <h2>
      Start small. Build momentum. Scale when you're ready.
      </h2>

      <p>
      Flexible SEO packages for small businesses at different stages of growth.
      </p>

      </div>

      <div className="pricing">

      <div className="price-card reveal">

      <h3>
      Starter
      </h3>

      <div className="price">

      <strong>$199</strong>
      <span>/ month</span>

      </div>

      <p style={{color:'#5b6b60',fontSize:'13px'}}>
      For businesses starting their SEO journey.
      </p>

      <ul>

      <li>SEO Audit</li>
      <li>5 Target Keywords</li>
      <li>On-Page SEO</li>
      <li>Technical Optimization</li>
      <li>Monthly Reporting</li>
      <li>Google Business Optimization</li>

      </ul>

      <a href="#contact" className="btn btn-outline">
      Start Growing →
      </a>

      </div>

      <div className="price-card featured reveal">

      <div className="popular">
      MOST POPULAR
      </div>

      <h3>
      Growth
      </h3>

      <div className="price">

      <strong>$499</strong>
      <span>/ month</span>

      </div>

      <p style={{color:'#5b6b60',fontSize:'13px'}}>
      For established businesses ready to grow faster.
      </p>

      <ul>

      <li>Full SEO Audit</li>
      <li>15 Target Keywords</li>
      <li>Content Strategy</li>
      <li>Local SEO</li>
      <li>Competitor Analysis</li>
      <li>Link Building</li>
      <li>Weekly Reporting</li>

      </ul>

      <a href="#contact" className="btn btn-primary">
      Accelerate Growth →
      </a>

      </div>

      <div className="price-card reveal">

      <h3>
      Custom
      </h3>

      <div className="price">

      <strong>Custom</strong>

      </div>

      <p style={{color:'#5b6b60',fontSize:'13px'}}>
      For businesses with more complex SEO requirements.
      </p>

      <ul>

      <li>Unlimited Keywords</li>
      <li>Advanced Technical SEO</li>
      <li>Content Campaigns</li>
      <li>Multi-Location SEO</li>
      <li>Digital PR</li>
      <li>Custom Reporting</li>
      <li>Dedicated Strategy</li>

      </ul>

      <a href="#contact" className="btn btn-outline">
      Talk To An Expert →
      </a>

      </div>

      </div>

      </div>

      </section>

      <section className="cta">

      <div className="container">

      <div className="cta-box reveal">

      <h2>
      Stop guessing what Google wants.
      </h2>

      <p>
      Get a clear SEO roadmap showing where your website stands,
      what is holding it back and where your easiest growth opportunities are.
      </p>

      <a href="#contact" className="btn">
      Get Your Free SEO Roadmap →
      </a>

      </div>

      </div>

      </section>

      <section>

      <div className="container">

      <div className="section-head reveal">

      <div className="section-tag">
      07 / TOOLS
      </div>

      <h2>
      Powered by the tools behind smarter SEO decisions.
      </h2>

      </div>

      </div>

      <div className="tool-marquee">

      <div className="tool-track">

      <div className="tool">Google Search Console</div>
      <div className="tool">Google Analytics</div>
      <div className="tool">Semrush</div>
      <div className="tool">Ahrefs</div>
      <div className="tool">Screaming Frog</div>
      <div className="tool">Google Business Profile</div>
      <div className="tool">PageSpeed Insights</div>
      <div className="tool">Microsoft Clarity</div>

      <div className="tool">Google Search Console</div>
      <div className="tool">Google Analytics</div>
      <div className="tool">Semrush</div>
      <div className="tool">Ahrefs</div>
      <div className="tool">Screaming Frog</div>
      <div className="tool">Google Business Profile</div>
      <div className="tool">PageSpeed Insights</div>
      <div className="tool">Microsoft Clarity</div>

      </div>

      </div>

      </section>

      <section>

      <div className="container">

      <div className="section-head reveal">

      <div className="section-tag">
      08 / INDUSTRIES
      </div>

      <h2>
      SEO for businesses that need customers, not vanity metrics.
      </h2>

      <p>
      Our strategies can be adapted to different industries, business models
      and customer journeys.
      </p>

      </div>

      <div className="industry-grid">

      <div className="industry reveal">
      <div className="industry-icon">⌂</div>
      <span>Home Services</span>
      </div>

      <div className="industry reveal">
      <div className="industry-icon">⚕</div>
      <span>Healthcare</span>
      </div>

      <div className="industry reveal">
      <div className="industry-icon">▣</div>
      <span>Ecommerce</span>
      </div>

      <div className="industry reveal">
      <div className="industry-icon">◆</div>
      <span>Professional Services</span>
      </div>

      <div className="industry reveal">
      <div className="industry-icon">✈</div>
      <span>Travel & Tourism</span>
      </div>

      <div className="industry reveal">
      <div className="industry-icon">◉</div>
      <span>Real Estate</span>
      </div>

      <div className="industry reveal">
      <div className="industry-icon">▤</div>
      <span>Restaurants</span>
      </div>

      <div className="industry reveal">
      <div className="industry-icon">⚡</div>
      <span>Technology</span>
      </div>

      </div>

      </div>

      </section>

      <section>

      <div className="container">

      <div className="section-head reveal">

      <div className="section-tag">
      09 / CLIENT STORIES
      </div>

      <h2>
      What small business owners say about working with us.
      </h2>

      </div>

      <div className="testimonial-grid">

      <div className="testimonial-main reveal">

      <div className="quote">

      “Instead of giving us a generic SEO report,
      the team showed us exactly where our customers were
      searching and built the strategy around those opportunities.”

      </div>

      <div className="client">

      <div className="avatar">
      JM
      </div>

      <div>

      <strong>
      James Mitchell
      </strong>

      <span>
      Founder, Local Service Business
      </span>

      </div>

      </div>

      </div>

      <div className="testimonial-side">

      <div className="small-review reveal">

      <p>
      “Our local visibility improved significantly and we started receiving
      more relevant enquiries from Google.”
      </p>

      <strong>
      — Sarah M.
      </strong>

      </div>

      <div className="small-review reveal">

      <p>
      “The reporting is simple, clear and actually tells us what is changing.”
      </p>

      <strong>
      — Daniel R.
      </strong>

      </div>

      </div>

      </div>

      </div>

      </section>

      <section>

      <div className="container">

      <div className="section-head reveal">

      <div className="section-tag">
      10 / WHY CODEDSEO
      </div>

      <h2>
      A small-business SEO partner focused on useful growth.
      </h2>

      </div>

      <div className="choose-grid">

      <div className="choose reveal">

      <div className="choose-num">
      01
      </div>

      <h3>
      Strategy Before Tactics
      </h3>

      <p>
      Every campaign starts with understanding your business, customers,
      competition and opportunities.
      </p>

      </div>

      <div className="choose reveal">

      <div className="choose-num">
      02
      </div>

      <h3>
      Clear Reporting
      </h3>

      <p>
      You see what we worked on, what changed and how the campaign is moving.
      </p>

      </div>

      <div className="choose reveal">

      <div className="choose-num">
      03
      </div>

      <h3>
      Business-Focused SEO
      </h3>

      <p>
      We prioritize search opportunities that can contribute to enquiries,
      sales and sustainable growth.
      </p>

      </div>

      <div className="choose reveal">

      <div className="choose-num">
      04
      </div>

      <h3>
      Transparent Process
      </h3>

      <p>
      No confusing jargon or mystery deliverables. You know what happens next.
      </p>

      </div>

      <div className="choose reveal">

      <div className="choose-num">
      05
      </div>

      <h3>
      Scalable Strategies
      </h3>

      <p>
      Start with the priorities that matter today and expand your SEO as your business grows.
      </p>

      </div>

      <div className="choose reveal">

      <div className="choose-num">
      06
      </div>

      <h3>
      Long-Term Thinking
      </h3>

      <p>
      We build search visibility that becomes a business asset rather than a short-term traffic spike.
      </p>

      </div>

      </div>

      </div>

      </section>

      <section className="cta" id="contact">

      <div className="container">

      <div className="cta-box reveal">

      <h2>
      Ready to make Google work harder for your business?
      </h2>

      <p>
      Tell us what you want to achieve. We'll look at your current search
      visibility and identify the opportunities worth pursuing.
      </p>

      <a href="mailto:hello@codedseo.com" className="btn">
      Talk To An SEO Expert →
      </a>

      </div>

      </div>

      </section>

      <section id="faq">

      <div className="container">

      <div className="section-head reveal" style={{marginLeft:'auto',marginRight:'auto',textAlign:'center'}}>

      <div className="section-tag">
      11 / FAQs
      </div>

      <h2>
      Small Business SEO Questions, Answered.
      </h2>

      <p style={{marginLeft:'auto',marginRight:'auto'}}>
      Everything you need to know before starting your SEO campaign.
      </p>

      </div>

      <div className="faq">

      <div className="faq-item">

      <button className="faq-question">

      How long does small business SEO take to work?

      <span className="faq-icon">+</span>

      </button>

      <div className="faq-answer">

      <p>
      SEO is a long-term growth strategy. Some improvements can appear within
      the first few months, while stronger rankings and consistent traffic
      usually require continued optimization, content and authority building.
      </p>

      </div>

      </div>

      <div className="faq-item">

      <button className="faq-question">

      Is SEO worth it for a small business?

      <span className="faq-icon">+</span>

      </button>

      <div className="faq-answer">

      <p>
      Yes. SEO can help small businesses reach people actively searching for
      their products and services. Unlike relying only on advertising, organic
      visibility can continue generating traffic after individual campaigns end.
      </p>

      </div>

      </div>

      <div className="faq-item">

      <button className="faq-question">

      How much does small business SEO cost?

      <span className="faq-icon">+</span>

      </button>

      <div className="faq-answer">

      <p>
      SEO pricing depends on your website, competition, location and growth
      objectives. We offer different packages so businesses can start with
      important priorities and scale their strategy as they grow.
      </p>

      </div>

      </div>

      <div className="faq-item">

      <button className="faq-question">

      Can you help a new website rank on Google?

      <span className="faq-icon">+</span>

      </button>

      <div className="faq-answer">

      <p>
      Yes. For new websites, we can build the SEO foundation from the beginning,
      including site structure, keyword targeting, technical optimization,
      content planning and local search visibility.
      </p>

      </div>

      </div>

      <div className="faq-item">

      <button className="faq-question">

      Do you provide local SEO for small businesses?

      <span className="faq-icon">+</span>

      </button>

      <div className="faq-answer">

      <p>
      Yes. Local SEO can include Google Business Profile optimization,
      location-focused pages, local keyword targeting, citations, reviews
      and other strategies designed to improve visibility in local searches.
      </p>

      </div>

      </div>

      <div className="faq-item">

      <button className="faq-question">

      Will I receive SEO reports?

      <span className="faq-icon">+</span>

      </button>

      <div className="faq-answer">

      <p>
      Yes. Reporting can cover important SEO metrics such as rankings,
      organic traffic, conversions, completed work and campaign progress.
      The goal is to make your SEO performance easy to understand.
      </p>

      </div>

      </div>

      <div className="faq-item">

      <button className="faq-question">

      Can you work with my existing website?

      <span className="faq-icon">+</span>

      </button>

      <div className="faq-answer">

      <p>
      Yes. We can work with an existing website and identify technical,
      content, UX and search visibility opportunities without requiring
      a complete website rebuild.
      </p>

      </div>

      </div>

      <div className="faq-item">

      <button className="faq-question">

      Do you guarantee Google rankings?

      <span className="faq-icon">+</span>

      </button>

      <div className="faq-answer">

      <p>
      No ethical SEO company can guarantee a specific Google ranking.
      Instead, we focus on proven optimization practices, measurable
      improvements and continuous strategy refinement.
      </p>

      </div>

      </div>

      <div className="faq-item">

      <button className="faq-question">

      Can SEO help generate leads?

      <span className="faq-icon">+</span>

      </button>

      <div className="faq-answer">

      <p>
      Yes. When SEO targets high-intent searches and sends visitors to
      well-optimized landing pages, it can help increase qualified enquiries,
      calls, bookings and other valuable actions.
      </p>

      </div>

      </div>

      <div className="faq-item">

      <button className="faq-question">

      How do I get started?

      <span className="faq-icon">+</span>

      </button>

      <div className="faq-answer">

      <p>
      Start with an SEO audit or strategy discussion. We can review your
      current website, search visibility and competitors, then identify
      the priorities that make sense for your business.
      </p>

      </div>

      </div>

      </div>

      </div>

      </section>

      </main>
      </div>
      <Footer />
    </>
  );
}