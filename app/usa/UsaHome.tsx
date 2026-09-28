"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/* ================= DATA ================= */

const SITE = "https://indeedseo.com";
const IMG = "https://indeedseo.com/wp-content/themes/twentytwenty-child/images/number-one-seo-images/";
const MEGA = "https://indeedseo.com/images/mega-images/";
const US_PHONE = "+1 808 999 0096";
const US_TEL = "tel:+18089990096";
const IN_PHONE = "+91-7814544108";
const IN_TEL = "tel:+917814544108";
const EMAIL = "info@indeedseo.com";
const WHATSAPP = "https://wa.me/917814544108?text=Hello,%20Need%20Information%20About%20SEO%20Services?";
const CALENDLY = "https://calendly.com/gurpreet-15/new-meeting-1";
const unsplash = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=70`;

type MegaItem = {
  title: string;
  desc: string;
  href: string;
  icon: string;
  links?: { t: string; h: string }[];
  rich?: { t: string; d: string; h: string }[];
  aside?: string;
};

const MEGA_ITEMS: MegaItem[] = [
  {
    title: "SEO Services", desc: "Rank higher on Google across the US", href: "/search-engine-optimization", icon: "indeed-mega-tab-1-icon.svg",
    links: [
      { t: "On Page Optimization", h: "/on-page-optimization" }, { t: "Off Page Optimization", h: "/off-page-optimization" },
      { t: "Google My Business Optimization", h: "/google-my-business-optimization" }, { t: "App Store Optimization", h: "/app-store-optimization-services" },
      { t: "Technical SEO Services", h: "/technical-seo-audit-service" }, { t: "Local SEO Services", h: "/local-seo-service-company" },
      { t: "E-commerce SEO Services", h: "/shopify-seo-services" }, { t: "SEO Link Building", h: "/link-building-for-seo" },
      { t: "Healthcare SEO Services", h: "/healthcare-seo-services" }, { t: "Real Estate SEO Services", h: "/real-estate-seo-services" },
      { t: "Dental SEO Services", h: "/dental-seo-services" }, { t: "SEO for Plastic Surgeons", h: "/seo-for-plastic-surgeons" },
      { t: "SEO Services for Hotels", h: "/seo-services-for-hotels" }, { t: "SEO for Construction Companies", h: "/seo-for-construction-companies" },
      { t: "SEO For Cryptocurrency", h: "/seo-for-cryptocurrency" }, { t: "All SEO Services", h: "/services" },
    ],
    aside: "200+ In House SEO Specialists",
  },
  {
    title: "Social Media Marketing", desc: "Grow your brand on every platform", href: "/social-media-marketing", icon: "indeed-mega-tab-3-icon.svg",
    links: [
      { t: "Facebook Marketing Services", h: "/facebook-marketing-services" }, { t: "Instagram Marketing Services", h: "/instagram-marketing-services" },
      { t: "LinkedIn Marketing Services", h: "/linkedin-marketing-services" }, { t: "Youtube Marketing Services", h: "/youtube-marketing-services" },
      { t: "Twitter Marketing Services", h: "/twitter-marketing-services" }, { t: "Pinterest Marketing Services", h: "/pinterest-marketing-services" },
      { t: "Quora Marketing Services", h: "/quora-marketing-services" },
    ],
    aside: "200+ In House Social Media Specialists",
  },
  {
    title: "Online Reputation Management", desc: "Protect how people see your brand", href: "/online-reputation-management-services", icon: "indeed-mega-tab-5-icon.svg",
    rich: [
      { t: "Remove Negative Comments", d: "We identify and remove negative comments that damage your reputation.", h: "/remove-negative-comments" },
      { t: "Push Down Negative Search Results", d: "We suppress negative results and fill the first pages of Google, Yahoo and Bing with positive content.", h: "/push-down-negative-search-results" },
      { t: "Brand Reputation Management", d: "A complete strategy to monitor and control your brand's reputation online.", h: "/brand-reputation-management" },
    ],
  },
  {
    title: "Pay Per Click", desc: "Paid campaigns built for ROI", href: "/pay-per-click-marketing", icon: "indeed-mega-tab-2-icon.svg",
    links: [
      { t: "Google Ads Management", h: "/google-ads-management" }, { t: "Facebook Ads Management", h: "/facebook-ads-management" },
      { t: "Instagram Ads Management", h: "/instagram-ads-management" }, { t: "LinkedIn Ads Management", h: "/linkedin-ads-management" },
      { t: "Amazon Ads Management", h: "/amazon-ads-management" }, { t: "Google Adwords Campaign Management", h: "/google-adwords-campaign-management" },
    ],
    aside: "200+ In House PPC Specialists",
  },
  {
    title: "Link Building", desc: "Earn authority with quality backlinks", href: "/link-building-for-seo", icon: "indeed-mega-tab-4-icon.svg",
    rich: [
      { t: "Guest Post Services", d: "Quality guest posts on relevant, authoritative websites.", h: "/guest-post-services" },
      { t: "Buy Edu Backlinks", d: "Carefully selected .edu backlinks for maximum impact.", h: "/buy-edu-backlinks" },
      { t: "Press Release Services", d: "Press releases that spread your message to the right audience.", h: "/press-release-services" },
    ],
  },
  {
    title: "Content Writing", desc: "Content that ranks and converts", href: "/content-writing-services", icon: "indeed-mega-tab-6-icon.svg",
    rich: [
      { t: "Article Writing Services", d: "Informative, keyword-optimized articles for your industry.", h: "/article-writing-services" },
      { t: "Blog Writing Services", d: "Engaging, SEO-friendly blog posts written for your audience.", h: "/blog-writing-services" },
      { t: "SEO Content Writing Services", d: "Keyword-rich website content tailored to your business.", h: "/seo-content-writing-services" },
    ],
  },
  {
    title: "White Label SEO", desc: "Our team, delivered under your brand", href: "/white-label-seo", icon: "white-label.svg",
    links: [
      { t: "White Label Digital Marketing", h: "/white-label-digital-marketing" }, { t: "White Label SEO Reseller", h: "/white-label-seo-reseller" },
      { t: "White Label PPC Marketing", h: "/white-label-ppc-marketing" }, { t: "White Label Social Media Marketing", h: "/white-label-social-media-marketing" },
      { t: "White Label App Marketing", h: "/white-label-app-marketing" },
    ],
    aside: "200+ In House SEO Specialists",
  },
  {
    title: "AI SEO Services", desc: "Get found by AI search and answer engines", href: "/ai-marketing-agency", icon: "indeed-mega-tab-1-icon.svg",
    links: [
      { t: "Gemini SEO", h: "/gemini-seo" }, { t: "SEO for ChatGPT", h: "/chatgpt-for-seo" }, { t: "AEO Services", h: "/aeo-services" },
      { t: "LLM SEO", h: "/llm-seo" }, { t: "GEO Marketing", h: "/geo-marketing" }, { t: "Perplexity SEO", h: "/perplexity-seo" },
      { t: "DeepSeek SEO", h: "/deepseek-seo" }, { t: "Chatbot Marketing", h: "/chatbot-marketing" }, { t: "AI Marketing Agency", h: "/ai-marketing-agency" },
    ],
    aside: "200+ In House SEO Specialists",
  },
];

const RESOURCES = [
  { t: "News", d: "Agency updates & press coverage", h: "/news" },
  { t: "Blog", d: "Guides, tips & SEO deep dives", h: "/blog/" },
  { t: "Videos", d: "Webinars, tutorials & results", h: "/videos" },
  { t: "Web Stories", d: "Quick, visual tap-through stories", h: "/blog/web-stories/" },
];

const STATS = [
  { value: "500K", suffix: "+", label: "Leads Generated", sub: "For US businesses with data-driven campaigns" },
  { value: "100K", suffix: "+", label: "Keywords Ranked", sub: "On Google page 1 across the USA" },
  { value: "98", suffix: "%", label: "On Time Delivery", sub: "Consistent & seamless execution" },
  { value: "24/7", suffix: "", label: "Business Support", sub: "Support across all US time zones" },
];

const RATINGS = [
  { img: "award-comp-1.webp", alt: "Clutch", label: "Top Rated SEO Marketing Agency", score: "5.0", full: 5 },
  { img: "award-comp-2.webp", alt: "SEMrush", label: "Top SEO Marketing Company", score: "5.0", full: 5 },
  { img: "award-comp-3.webp", alt: "GoodFirms", label: "Best SEO Marketing Services", score: "5.0", full: 5 },
  { img: "award-comp-4.webp", alt: "Google", label: "4.9 Star Rating", score: "4.9", full: 4 },
  { img: "award-comp-5.webp", alt: "Trustpilot", label: "Excellent Rating", score: "4.8", full: 4 },
];

const TESTIMONIALS = [
  { role: "CEO", company: "Technology Company, California", title: "Improving Online Visibility and Generating Qualified B2B Leads", text: "IndeedSEO helped us improve our online visibility and generate more qualified B2B leads. Their data-driven approach and consistent support made a real difference in our digital growth." },
  { role: "Founder", company: "eCommerce Brand, New York", title: "Driving Website Traffic and Stronger Customer Engagement", text: "After working with IndeedSEO, we saw significant improvements in website traffic and customer engagement. Their team understood our goals and delivered results that matched our expectations." },
  { role: "Marketing Director", company: "Real Estate Company, Texas", title: "Better Rankings, More Leads, and Sustainable Growth", text: "We appreciated their transparency, communication, and focus on measurable results. Their digital marketing services helped us achieve better rankings, more leads, and sustainable growth." },
  { role: "Director", company: "Healthcare Company, Florida", title: "Building a Stronger Digital Presence Through Expert SEO", text: "From strategy discussions to regular updates, the entire process has been smooth and professional. IndeedSEO's expertise has helped us build a stronger digital presence and generate better opportunities." },
];

const CASES = [
  {
    name: "Moneytree Realty", industry: "Real Estate", sub: "Property Consulting / Lead Generation", img: unsplash("photo-1741156386380-0236c72eb6f9"),
    desc: "Moneytree Realty partnered with IndeedSEO to target high-intent property buyers and improve local visibility.",
    strategies: ["High-intent keyword targeting for property searches", "Local SEO optimization to improve visibility", "Content optimization and technical SEO improvements", "Landing page optimization for better conversions"],
    results: [{ v: "165%", l: "Organic Traffic Growth" }, { v: "2.5X", l: "Improvement in Lead Conversions" }], href: "/case-study/moneytree-realty",
  },
  {
    name: "Appsforrent", industry: "IT / Cloud Services", sub: "B2B Technology", img: unsplash("photo-1667984390538-3dea7a3fe33d"),
    desc: "IndeedSEO helped Appsforrent improve search visibility and generate qualified leads for its cloud solutions.",
    strategies: ["AI-powered SEO for better visibility and search intent targeting", "High-intent keyword optimization for cloud solutions", "Google Ads campaigns for qualified lead generation", "Content optimization based on user needs"],
    results: [{ v: "190%", l: "Organic Website Traffic Growth" }, { v: "135%", l: "Increase in Qualified Leads" }], href: "/case-study/appsforrent",
  },
  {
    name: "Colors Queen Cosmetics", industry: "Beauty & Skincare", sub: "B2C Brand / Social Media Marketing", img: unsplash("photo-1741896135490-4062a3b21abf"),
    desc: "IndeedSEO grew Colors Queen Cosmetics' social presence through content and community-driven strategies.",
    strategies: ["Social media content planning and creation", "Instagram Reels and visual content strategy", "Trend and hashtag research for better reach", "Community management and audience engagement"],
    results: [{ v: "5.7M+", l: "Facebook Reach" }, { v: "207K+", l: "Instagram Followers" }], href: "/case-study/colors-queen-cosmetics",
  },
  {
    name: "Frenchie Shop", industry: "Pet Products", sub: "B2C eCommerce", img: unsplash("photo-1746645012316-39ef59320d9b"),
    desc: "IndeedSEO helped Frenchie Shop, a premium pet apparel brand, boost its online visibility and drive more traffic in a competitive eCommerce niche.",
    strategies: ["eCommerce SEO improvements", "Category and product page optimization", "Content-driven organic growth campaigns", "Strategic backlink acquisition"],
    results: [{ v: "7.6K+", l: "Backlinks Generated" }, { v: "86.4%", l: "Organic Traffic Growth" }], href: "/case-study/frenchie-shop",
  },
];

const SERVICES = [
  {
    id: "seo", tab: "SEO Services", title: "SEO Services", href: "/search-engine-optimization", img: "digital-marketing-1.webp",
    desc: "Grow your US business with SEO that delivers sustainable, long-term results. We combine technical expertise, content strategy, AI-driven insights and authority building to help your website rank higher on Google, tailored to your industry, market and goals.",
    provide: ["Technical SEO audits and website optimization", "On-page and off-page SEO", "Keyword research and competitor analysis", "Local, Enterprise, and E-commerce SEO", "AI-powered content optimization", "Internal linking and schema markup", "Website migration and SEO recovery", "Ongoing SEO reporting and tracking"],
    benefits: ["Increase organic website traffic", "Improve keyword rankings", "Generate high-quality leads", "Reduce dependency on paid ads", "Enhance user experience and performance", "Build long-term brand authority", "Deliver measurable ROI"],
  },
  {
    id: "social", tab: "Social Media Services", title: "Social Media Marketing Services", href: "/social-media-marketing", img: "digital-marketing-2.webp",
    desc: "Strengthen your brand presence and connect with American audiences on the platforms they use every day. Our social strategies increase awareness, drive engagement and generate qualified leads through organic and paid campaigns.",
    provide: ["Social media strategy and planning", "Facebook, Instagram, LinkedIn, X, and YouTube marketing", "Content creation and publishing", "Community management", "Paid social advertising", "Influencer collaborations", "Social media analytics and reporting"],
    benefits: ["Increase brand awareness", "Build customer trust and loyalty", "Improve audience engagement", "Generate qualified leads", "Drive more website traffic", "Support customer retention", "Strengthen your online community"],
  },
  {
    id: "ppc", tab: "Pay-Per-Click (PPC) Advertising", title: "Pay-Per-Click (PPC) Advertising", href: "/pay-per-click-marketing", img: "digital-marketing-3.webp",
    desc: "Reach your ideal US customers instantly with highly targeted PPC campaigns. Our specialists create, optimize and manage campaigns that maximize conversions while keeping ad costs under control.",
    provide: ["Google Ads management", "Microsoft Ads", "Meta Ads (Facebook & Instagram)", "LinkedIn and YouTube Ads", "Shopping and Performance Max campaigns", "Remarketing campaigns", "Landing page optimization", "Conversion tracking and reporting"],
    benefits: ["Generate immediate website traffic", "Increase qualified leads and sales", "Maximize advertising ROI", "Lower cost per acquisition (CPA)", "Reach highly targeted audiences", "Scale campaigns with measurable results", "Improve conversion rates"],
  },
  {
    id: "orm", tab: "Online Reputation Management", title: "Online Reputation Management", href: "/online-reputation-management-services", img: "digital-marketing-4.webp",
    desc: "Protect, manage and strengthen your online reputation. We help US businesses monitor their digital presence, improve customer reviews and build a trustworthy image that influences buying decisions.",
    provide: ["Brand reputation monitoring", "Review management", "Google Business Profile optimization", "Brand mention tracking", "Reputation recovery strategies", "Online brand protection", "Customer feedback management", "Reputation reporting"],
    benefits: ["Build customer trust", "Improve online ratings and reviews", "Increase brand credibility", "Attract more customers", "Protect your business reputation", "Improve local search visibility", "Strengthen customer relationships"],
  },
  {
    id: "links", tab: "Link Building", title: "Link Building", href: "/link-building-for-seo", img: "digital-marketing-5.webp",
    desc: "Build website authority with ethical, white-hat link building designed for long-term SEO success. We earn high-quality backlinks from relevant, authoritative websites that improve rankings and credibility.",
    provide: ["Editorial backlinks", "Guest posting", "Manual outreach campaigns", "Digital PR", "Niche edits", "Resource page link building", "Local citations", "Backlink profile audits"],
    benefits: ["Improve domain authority", "Achieve higher keyword rankings", "Increase organic traffic", "Build website credibility", "Strengthen topical authority", "Improve search engine trust", "Support long-term SEO growth"],
  },
  {
    id: "content", tab: "Content Writing", title: "Content Writing", href: "/content-writing-services", img: "digital-marketing-6.webp",
    desc: "Create content that ranks, engages and converts. Our writers produce SEO-optimized, user-focused content for US audiences that matches search intent and supports your business goals.",
    provide: ["Website content writing", "Service and landing pages", "SEO blog writing", "Product descriptions", "Technical content", "Industry-specific articles", "Content optimization", "AI-assisted content enhancement"],
    benefits: ["Improve search engine rankings", "Increase website engagement", "Generate more qualified leads", "Establish industry authority", "Improve conversion rates", "Support content marketing campaigns", "Deliver valuable customer experiences"],
  },
  {
    id: "ai", tab: "AI SEO & GEO", title: "AI SEO & GEO", href: "", img: "ai-seo-1.webp",
    desc: "Prepare your business for the future of search with AI SEO and Generative Engine Optimization (GEO). We optimize your presence for Google AI Overviews, ChatGPT, Gemini, Claude and Perplexity, improving discoverability across search engines and LLMs.",
    provide: ["AI SEO strategy", "Generative Engine Optimization (GEO)", "Google AI Overviews optimization", "ChatGPT optimization", "Gemini, Claude, and Perplexity optimization", "Entity SEO and semantic optimization", "Structured data implementation", "AI visibility monitoring"],
    benefits: ["Increase visibility in AI-powered search", "Improve brand mentions in LLMs", "Build topical authority", "Future-proof your SEO strategy", "Reach users beyond search engines", "Enhance content discoverability", "Gain a competitive advantage"],
  },
];

const WHITE_LABEL = [
  { t: "White Label SEO", d: "Boost your clients' rankings with keyword research, technical SEO, content optimization and link building.", h: "/white-label-seo" },
  { t: "White Label SEO Reseller Services", d: "Grow your agency with reliable fulfillment, transparent reporting and dedicated expert support.", h: "/white-label-seo-reseller" },
  { t: "White Label PPC Marketing", d: "Deliver effective PPC campaigns with expert ad management, targeting, optimization and tracking.", h: "/white-label-ppc-marketing" },
  { t: "White Label Social Media Marketing", d: "Offer complete social media services with content creation, scheduling, engagement and campaigns.", h: "/white-label-social-media-marketing" },
  { t: "White Label App Marketing", d: "Help clients grow app downloads and visibility with targeted app marketing solutions.", h: "/white-label-app-marketing" },
];

const BENEFITS = [
  { t: "Guaranteed Results", d: "Results even in competitive niches such as SEO for crypto, legal and healthcare." },
  { t: "Higher Visibility", d: "Rank on page 1, where 90%+ of clicks happen." },
  { t: "Brand Credibility", d: "Top rankings signal trust and authority to potential buyers." },
  { t: "Quality Leads", d: "Attract US buyers already searching for what you offer." },
  { t: "More Conversions", d: "SEO traffic converts 8x better than outbound marketing because you reach buyers at the moment of intent." },
  { t: "Best ROI", d: "SEO works 24/7. Rankings you build today keep delivering leads for months and years." },
];

const INDUSTRIES = [
  { t: "Real Estate Marketing Services", h: "/real-estate-seo-services", img: unsplash("photo-1560518883-ce09059eeffa") },
  { t: "Healthcare Marketing Services", h: "/healthcare-seo-services", img: IMG + "seo-expertise-2.webp" },
  { t: "Plumbing Marketing Services", h: "/seo-for-plumbers", img: IMG + "seo-expertise-3.webp" },
  { t: "Shopify Marketing Services", h: "/shopify-seo-services", img: IMG + "seo-expertise-4.webp" },
  { t: "Marketing Services for Hotels", h: "/seo-services-for-hotels", img: IMG + "seo-expertise-5.webp" },
  { t: "Marketing for Construction Companies", h: "/seo-for-construction-companies", img: IMG + "seo-expertise-6.webp" },
  { t: "Roofing Marketing Services", h: "/roofing-seo-company", img: IMG + "seo-expertise-7.webp" },
  { t: "Carpet Cleaning Marketing Services", h: "/seo-for-carpet-cleaners", img: IMG + "seo-expertise-8.webp" },
  { t: "HVAC Marketing Services", h: "/hvac-seo-company", img: IMG + "seo-expertise-9.webp" },
  { t: "Pest Control SEO", h: "/pest-control-seo-services", img: IMG + "seo-expertise-10.webp" },
  { t: "Dental Marketing Services", h: "/dental-seo-services", img: IMG + "seo-expertise-11.webp" },
  { t: "Auto Repair Marketing Services", h: "/seo-for-auto-repair", img: IMG + "seo-expertise-12.webp" },
  { t: "Crypto SEO", h: "/seo-for-cryptocurrency", img: IMG + "seo-expertise-13.webp" },
  { t: "Enterprise Marketing Services", h: "/enterprise-seo-services", img: IMG + "seo-expertise-14.webp" },
  { t: "Lawyer SEO", h: "/seo-for-lawyers", img: IMG + "seo-expertise-15.webp" },
  { t: "Plastic Surgeon SEO", h: "/seo-for-plastic-surgeons", img: "https://indeedseo.com/wp-content/themes/twentytwenty-child/images/surgeons-img/cta-1.webp" },
  { t: "Electrician SEO", h: "/seo-services-for-electricians", img: IMG + "seo-expertise-17.webp" },
  { t: "Restaurant Marketing Services", h: "/seo-for-restaurants", img: unsplash("photo-1517248135467-4c7edcad34c4") },
  { t: "Gym & Fitness Marketing Services", h: "", img: unsplash("photo-1571019613454-1cb2f99b2d8b") },
  { t: "Insurance Marketing Services", h: "/insurance-marketing-services", img: unsplash("photo-1450101499163-c8848c66ca85") },
  { t: "Locksmith Marketing Services", h: "/seo-for-locksmith", img: unsplash("photo-1749477417968-2bc986bc6a42") },
  { t: "Photographer Marketing Services", h: "/seo-services-for-photographers", img: unsplash("photo-1520390138845-fd2d229dd553") },
  { t: "Immigration Marketing Services", h: "/seo-for-immigration", img: unsplash("photo-1454496406107-dc34337da8d6") },
];

const PILLARS = [
  { t: "1. Expertise", d: "14+ years of experience and 250+ digital marketing professionals, combining industry knowledge with the latest search trends." },
  { t: "2. Proven Results", d: "A data-driven approach that has delivered thousands of improved rankings, more organic visibility and lead growth across industries." },
  { t: "3. Transparency", d: "Clear reporting, regular updates and full visibility into campaign progress, scheduled around your US business hours." },
  { t: "4. Value", d: "Trusted by 1,000+ businesses worldwide, with flexible plans designed to maximize your marketing investment." },
];

const PROCESS = [
  { t: "Discovery & Research", d: "We learn about your business, goals, audience, competitors and market opportunities to draft a precise plan of action.", icon: "work-process-icon-1.webp" },
  { t: "Strategy Planning", d: "We create a tailored strategy that targets the right channels, keywords, content and growth areas for your US market.", icon: "work-process-icon-2.webp" },
  { t: "Campaign Implementation", d: "Our team runs campaigns across SEO, content, paid ads, social media and other channels to reach your target audience.", icon: "work-process-icon-3.webp" },
  { t: "Tracking & Optimization", d: "We track performance, analyze data and optimize campaigns to improve results and maximize your marketing ROI.", icon: "work-process-icon-4.webp" },
  { t: "Reporting & Growth", d: "Transparent reports and regular insights keep you informed while we identify new opportunities for growth.", icon: "work-process-icon-5.webp" },
];

const FAQS = [
  { q: "What digital marketing services do you offer in the USA?", a: "We help US businesses grow online with SEO, PPC, content marketing, social media marketing, AI SEO, reputation management and other digital solutions." },
  { q: "How do you create a digital marketing plan?", a: "We first understand your business, audience and goals, then create a customized approach that fits your market and budget." },
  { q: "How long does it take to see results?", a: "It depends on your objectives, industry and competition, but consistent improvements can be tracked as campaigns progress. Most clients see movement within 90 days." },
  { q: "Can you help improve my website traffic?", a: "Yes. Our solutions focus on increasing visibility, attracting relevant visitors and generating opportunities." },
  { q: "Do you work with businesses of all sizes?", a: "Absolutely. We serve startups, local businesses and enterprise brands across the US and tailor our approach to each one." },
  { q: "Will I get updates about my campaign?", a: "Yes. You get regular reports, updates and calls scheduled around your US time zone." },
  { q: "Can I choose specific digital marketing services?", a: "Of course. From SEO and PPC to social media and a full digital marketing strategy, we'll build a plan around your goals." },
  { q: "How do I get started?", a: "Reach out to our team. We'll discuss your goals, understand your challenges and suggest the right way forward." },
];

const OFFICES = [
  { title: "Top SEO Company in USA", addr: "11844 Bandera Road #199, Helotes, TX 78023, USA", img: "address-img-2.webp", map: "https://maps.app.goo.gl/SsXX4yZkrRYHV6bQ7" },
  { title: "Best SEO Company in India", addr: "F-34, 2nd Floor, Phase-8, Industrial Area, Sahibzada Ajit Singh Nagar 160071", img: "address-img-1.webp", map: "https://maps.app.goo.gl/u96RQDNGDvEmJo19A" },
  { title: "Top SEO Company in Dubai", addr: "Office 132, Building A - Dubai Outsource City - Dubai - United Arab Emirates", img: "address-img-3.webp", map: "https://maps.app.goo.gl/njfZobEbBVsz4atY9" },
];

const FOOTER_EXPERTS = [
  [{ t: "SEO for Lawyers", h: "/seo-for-lawyers" }, { t: "Real Estate SEO Services", h: "/real-estate-seo-services" }, { t: "SEO For Restaurant", h: "/seo-for-restaurants" }, { t: "SEO for Hospitality Industry", h: "/seo-for-hospitality-industry" }],
  [{ t: "SEO for Carpet Cleaners", h: "/seo-for-carpet-cleaners" }, { t: "SEO for Hair Salon", h: "/seo-for-hair-salon" }, { t: "SEO for Plumbers", h: "/seo-for-plumbers" }, { t: "Pest Control SEO Services", h: "/pest-control-seo-services" }],
  [{ t: "SEO Services for Hotels", h: "/seo-services-for-hotels" }, { t: "SEO for Construction Companies", h: "/seo-for-construction-companies" }, { t: "SEO Services for Photographers", h: "/seo-services-for-photographers" }, { t: "SEO for Auto Repair", h: "/seo-for-auto-repair" }],
  [{ t: "SEO For Cryptocurrency", h: "/seo-for-cryptocurrency" }, { t: "SEO For Locksmith", h: "/seo-for-locksmith" }, { t: "SEO for Plastic Surgeons", h: "/seo-for-plastic-surgeons" }, { t: "View More", h: "/services" }],
];

const FOOTER_COLS = [
  { title: "White Label Services", links: [{ t: "White Label SEO Reseller", h: "/white-label-seo-reseller" }, { t: "White Label Digital Marketing", h: "/white-label-digital-marketing" }, { t: "White Label PPC Marketing", h: "/white-label-ppc-marketing" }, { t: "White Label Social Media Marketing", h: "/white-label-social-media-marketing" }, { t: "White Label App Marketing", h: "/white-label-app-marketing" }] },
  { title: "Services", links: [{ t: "SEO Services", h: "/search-engine-optimization" }, { t: "Online Reputation Management", h: "/online-reputation-management-services" }, { t: "Pay-Per Click (PPC)", h: "/pay-per-click-marketing" }, { t: "Social Media Marketing", h: "/social-media-marketing" }, { t: "App Marketing", h: "/app-marketing-services" }, { t: "Content Marketing", h: "/content-writing-services" }, { t: "Affiliate Marketing", h: "/affiliate-marketing-services" }] },
  { title: "Industries", links: [{ t: "Healthcare", h: "/healthcare-seo-services" }, { t: "Hospitality", h: "/seo-services-for-hotels" }, { t: "Real Estate", h: "/real-estate-seo-services" }, { t: "Blockchain", h: "/seo-for-cryptocurrency" }, { t: "AI Marketing", h: "/ai-marketing-agency" }, { t: "SearchGPT", h: "/searchgpt-marketing" }] },
];

const SCAM_TEXT =
  "Please be cautious of scams that misuse the IndeedSEO name to promote part-time jobs or business opportunities on social networking sites. IndeedSEO will not be responsible for any financial or material losses. Our official website is the sole platform for legitimate connections. If you encounter any suspicious activity, please report it to info@IndeedSeo.com.";

const u = (h: string) => (h.startsWith("http") ? h : SITE + h);
/* ================= HOOKS ================= */

function useWidth() {
  const [w, setW] = useState(1440);
  useEffect(() => {
    const on = () => setW(window.innerWidth);
    on();
    window.addEventListener("resize", on);
    return () => window.removeEventListener("resize", on);
  }, []);
  return w;
}

function useSlider(count: number, perView: number, delay: number, loop = true) {
  const max = Math.max(0, count - perView);
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const next = useCallback(() => setI((p) => (p >= max ? (loop ? 0 : max) : p + 1)), [max, loop]);
  const prev = useCallback(() => setI((p) => (p <= 0 ? (loop ? max : 0) : p - 1)), [max, loop]);
  useEffect(() => {
    if (i > max) setI(max);
  }, [i, max]);
  useEffect(() => {
    if (paused || delay <= 0) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const t = setTimeout(next, delay);
    return () => clearTimeout(t);
  }, [i, paused, delay, next]);
  return { i, setI, next, prev, max, hoverProps: { onMouseEnter: () => setPaused(true), onMouseLeave: () => setPaused(false) } };
}

function useInView<T extends Element>(threshold = 0.3) {
  const ref = useRef<T>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setSeen(true);
        io.disconnect();
      }
    }, { threshold });
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, seen };
}

/* ================= SMALL PIECES ================= */

function SvcIcon({ id }: { id: string }) {
  const p = { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };
  switch (id) {
    case "seo": return <svg {...p}><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.35-4.35" /></svg>;
    case "social": return <svg {...p}><circle cx="6" cy="12" r="2.5" /><circle cx="18" cy="6" r="2.5" /><circle cx="18" cy="18" r="2.5" /><path d="M8.2 10.8l7.6-3.6M8.2 13.2l7.6 3.6" /></svg>;
    case "ppc": return <svg {...p}><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="4.5" /><circle cx="12" cy="12" r="1" /></svg>;
    case "orm": return <svg {...p}><path d="M12 3l7 3v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6z" /></svg>;
    case "links": return <svg {...p}><path d="M10 14a4 4 0 005.7 0l3-3a4 4 0 00-5.7-5.7l-1.5 1.5" /><path d="M14 10a4 4 0 00-5.7 0l-3 3a4 4 0 005.7 5.7l1.5-1.5" /></svg>;
    case "content": return <svg {...p}><path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8z" /><path d="M14 3v5h5M9 13h6M9 17h6" /></svg>;
    default: return <svg {...p}><path d="M12 2l1.9 4.6 4.6 1.9-4.6 1.9L12 15l-1.9-4.6L5.5 8.5l4.6-1.9z" /><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z" /></svg>;
  }
}


function Dot() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="9" stroke="#fff" strokeWidth="3" />
      <circle cx="11" cy="11" r="4.85" fill="#fff" />
    </svg>
  );
}

function Check() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M8 12.5l2.5 2.5L16 9" />
    </svg>
  );
}

function Chevron({ dir = "right" }: { dir?: "right" | "left" | "down" }) {
  const d = dir === "right" ? "M9 6l6 6-6 6" : dir === "left" ? "M15 6l-6 6 6 6" : "M6 9l6 6 6-6";
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <path d={d} />
    </svg>
  );
}

function Counter({ value, suffix, start }: { value: string; suffix: string; start: boolean }) {
  const isK = value.includes("K");
  const num = parseFloat(value);
  const animatable = !Number.isNaN(num) && !value.includes("/");
  const [shown, setShown] = useState(animatable ? (isK ? "0K" : "0") : value);
  useEffect(() => {
    if (!start || !animatable) return;
    const target = num * (isK ? 1000 : 1);
    const t0 = performance.now();
    const dur = 2500;
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - t0) / dur, 1);
      const cur = Math.floor((1 - Math.pow(1 - p, 4)) * target);
      setShown(isK ? `${Math.floor(cur / 1000)}K` : `${cur}`);
      if (p < 1) raf = requestAnimationFrame(tick);
      else setShown(value);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, animatable, num, isK, value]);
  return (
    <h3 className="stat-num">
      {shown}
      {suffix && <span className="hl">{suffix}</span>}
    </h3>
  );
}

/* ================= HEADER ================= */

function Header({ onQuote }: { onQuote: () => void }) {
  const [megaOpen, setMegaOpen] = useState(false);
  const [resOpen, setResOpen] = useState(false);
  const [rail, setRail] = useState(0);
  const [mobile, setMobile] = useState(false);
  const [mOpen, setMOpen] = useState<string | null>(null);
  const [m2Open, setM2Open] = useState<number | null>(null);

  useEffect(() => {
    document.body.style.overflow = mobile ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobile(false);
        setMegaOpen(false);
        setResOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobile]);

  const item = MEGA_ITEMS[rail];

  return (
    <header className="hdr">
      <div className="topbar">
        <div className="wrap topbar-in">
          <ul className="top-contacts">
            <li><a href={US_TEL}><img src="https://indeedseo.com/wp-content/themes/twentytwenty-child/images/us.png" alt="" width={24} height={16} />{US_PHONE}</a></li>
            <li><a href={IN_TEL}><img src="https://indeedseo.com/wp-content/themes/twentytwenty-child/images/india.png" alt="" width={24} height={16} />{IN_PHONE}</a></li>
            <li className="hide-sm"><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
          </ul>
          <div className="top-cta">
            <a className="top-btn wa" href={WHATSAPP} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
            <a className="top-btn book" href={CALENDLY} target="_blank" rel="noopener noreferrer">Book a Meeting</a>
          </div>
        </div>
      </div>

      <nav className="nav" aria-label="Main">
        <div className="wrap nav-in">
          <a className="logo" href={SITE}><img src="https://indeedseo.com/images/logo.png" alt="IndeedSEO" width={130} height={65} /></a>

          <ul className="menu">
            <li className="has-mega" onMouseEnter={() => setMegaOpen(true)} onMouseLeave={() => setMegaOpen(false)}>
              <button type="button" className="menu-link active" aria-expanded={megaOpen} onClick={() => setMegaOpen((v) => !v)}>Solutions <Chevron dir="down" /></button>
              <div className={`mega ${megaOpen ? "open" : ""}`} role="region" aria-label="Solutions menu">
                <div className="mega-in">
                  <div className="mega-rail">
                    {MEGA_ITEMS.map((m, idx) => (
                      <a key={m.title} href={u(m.href)} className={`rail-item ${idx === rail ? "on" : ""}`} onMouseEnter={() => setRail(idx)} onFocus={() => setRail(idx)}>
                        <img src={MEGA + m.icon} alt="" width={24} height={24} />
                        <span>
                          <strong>{m.title}</strong>
                          <small>{m.desc}</small>
                        </span>
                      </a>
                    ))}
                  </div>
                  <div className="mega-stage">
                    {item.links && (
                      <div className="mega-grid">
                        <ul className="mega-list">
                          {item.links.map((l) => (
                            <li key={l.t}><a href={u(l.h)}>{l.t}</a></li>
                          ))}
                        </ul>
                        {item.aside && (
                          <div className="mega-aside">
                            <span className="aside-k">Always available</span>
                            <ul>
                              <li>Results-driven, guaranteed results</li>
                              <li>Google Partner Agency</li>
                              <li>Serving clients across all 50 states</li>
                              <li>{item.aside}</li>
                            </ul>
                          </div>
                        )}
                      </div>
                    )}
                    {item.rich && (
                      <div className="mega-rich">
                        {item.rich.map((r) => (
                          <a key={r.t} href={u(r.h)}>
                            <strong>{r.t}</strong>
                            <span>{r.d}</span>
                          </a>
                        ))}
                      </div>
                    )}
                    <div className="mega-cta">
                      <p>Ready to start your next project? <a href={u("/requestaquote")}>Get a Quote</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li><a className="menu-link" href={u("/about")}>About Us</a></li>
            <li><a className="menu-link" href={u("/casestudies")}>Case Studies</a></li>
            <li className="has-sub" onMouseEnter={() => setResOpen(true)} onMouseLeave={() => setResOpen(false)}>
              <button type="button" className="menu-link" aria-expanded={resOpen} onClick={() => setResOpen((v) => !v)}>Resources <Chevron dir="down" /></button>
              <ul className={`sub ${resOpen ? "open" : ""}`}>
                {RESOURCES.map((r) => (
                  <li key={r.t}><a href={u(r.h)}><strong>{r.t}</strong><small>{r.d}</small></a></li>
                ))}
              </ul>
            </li>
            <li><a className="menu-link" href={u("/contact")}>Contact Us</a></li>
          </ul>

          <div className="nav-right">
            <a className="badge-logo" href="https://www.google.com/partners/agency?id=6391920880" target="_blank" rel="noopener noreferrer"><img src="https://indeedseo.com/images/google-partner.svg" alt="Google Partner" width={60} height={60} /></a>
            <a className="badge-logo" href="https://www.semrush.com/agencies/indeedseo/" target="_blank" rel="noopener noreferrer"><img src="https://indeedseo.com/images/home-page/semrush-badge.svg" alt="Semrush" width={60} height={60} /></a>
            <button type="button" className="quote-btn" onClick={onQuote}>Get Quote</button>
            <button type="button" className="burger" aria-label="Open menu" aria-expanded={mobile} onClick={() => setMobile(true)}>
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      <div className={`mnav ${mobile ? "open" : ""}`} aria-hidden={!mobile}>
        <div className="mnav-head">
          <img src="https://indeedseo.com/images/logo.png" alt="IndeedSEO" width={116} height={58} />
          <button type="button" className="mnav-close" aria-label="Close menu" onClick={() => setMobile(false)}>×</button>
        </div>
        <div className="mnav-body">
          <a className="m-row" href={SITE}>Home</a>
          <button type="button" className="m-row" aria-expanded={mOpen === "sol"} onClick={() => setMOpen(mOpen === "sol" ? null : "sol")}>Solutions <Chevron dir="down" /></button>
          {mOpen === "sol" && (
            <div className="m-sub">
              {MEGA_ITEMS.map((m, idx) => (
                <div key={m.title} className="m-item2">
                  <button type="button" className="m-row2" aria-expanded={m2Open === idx} onClick={() => setM2Open(m2Open === idx ? null : idx)}>{m.title} <Chevron dir="down" /></button>
                  {m2Open === idx && (
                    <div className="m-sub2">
                      <a href={u(m.href)}>{m.title}</a>
                      {(m.links ?? m.rich?.map((r) => ({ t: r.t, h: r.h })) ?? []).map((l) => (
                        <a key={l.t} href={u(l.h)}>{l.t}</a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
          <a className="m-row" href={u("/about")}>About Us</a>
          <a className="m-row" href={u("/casestudies")}>Case Studies</a>
          <button type="button" className="m-row" aria-expanded={mOpen === "res"} onClick={() => setMOpen(mOpen === "res" ? null : "res")}>Resources <Chevron dir="down" /></button>
          {mOpen === "res" && (
            <div className="m-sub">
              {RESOURCES.map((r) => (
                <a key={r.t} className="m-link" href={u(r.h)}>{r.t}</a>
              ))}
            </div>
          )}
          <a className="m-row" href={u("/contact")}>Contact Us</a>
        </div>
        <div className="mnav-foot">
          <button type="button" className="quote-btn full" onClick={() => { setMobile(false); onQuote(); }}>Get Quote</button>
          <div className="m-contacts">
            <a href={US_TEL}>{US_PHONE}</a>
            <a href={IN_TEL}>{IN_PHONE}</a>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </div>
        </div>
      </div>
    </header>
  );
}
/* ================= SECTIONS ================= */

function Hero({ onQuote }: { onQuote: () => void }) {
  return (
    <section className="hero" style={{ backgroundImage: `url(${IMG}hero-growth.webp)` }}>
      <div className="wrap">
        <div className="hero-copy">
          <span className="pill">★ No. 1 Digital Marketing Agency for US Businesses</span>
          <h1>Leading <b className="hl">Digital Marketing Agency in the USA</b> Trusted by 1,000+ Businesses Worldwide</h1>
          <p>Did you know that 75% of users never scroll beyond the first page of search results? IndeedSEO helps American businesses improve rankings, attract qualified traffic and grow with SEO, PPC and AI-driven digital marketing.</p>
          <ul className="ticks two">
            <li>No Long-Term Contracts</li>
            <li>Results in 90 Days or Less*</li>
            <li>100% White-Hat SEO</li>
            <li>US Office in Helotes, Texas</li>
          </ul>
          <div className="hero-cta">
            <button type="button" className="btn" onClick={onQuote}>Book a free strategy call <Dot /></button>
            <span className="note"><i />No obligation. Just results.</span>
          </div>
        </div>
        <div className="hero-badges">
          {["Google Partner", "SEMrush Certified Partner", "DesignRush", "Clutch", "Shopify Partner"].map((b) => (
            <div key={b} className="hbadge">{b}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const { ref, seen } = useInView<HTMLDivElement>();
  return (
    <section className="stats">
      <div className="wrap">
        <div className="stats-card" ref={ref}>
          {STATS.map((s) => (
            <div key={s.label} className="stat">
              <Counter value={s.value} suffix={s.suffix} start={seen} />
              <p className="stat-label">{s.label}</p>
              <p className="stat-sub">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Achievements({ onQuote }: { onQuote: () => void }) {
  const s = useSlider(TESTIMONIALS.length, 1, 4000);
  return (
    <section className="sec">
      <div className="wrap">
        <div className="ach-card">
          <div className="ach-left">
            <span className="eyebrow">Trusted. Recognized. Result-Driven.</span>
            <h2>Achievements &amp; Recognitions as <span className="hl">No. 1 Digital Marketing Agency 2026</span></h2>
            <p className="grey">IndeedSEO is recognized as a leading SEO and marketing agency by Clutch, DesignRush, GoodFirms, Semrush and other leading review platforms trusted by US buyers.</p>
            <div className="ratings">
              {RATINGS.map((r) => (
                <div key={r.alt} className="rating">
                  <img src={IMG + r.img} alt={r.alt} loading="lazy" />
                  <p>{r.label}</p>
                  <div className="stars">
                    <span>{"★".repeat(r.full)}<span className="dim">{"★".repeat(5 - r.full)}</span></span>
                    <b>{r.score}</b>
                  </div>
                </div>
              ))}
            </div>
            <button type="button" className="btn mt" onClick={onQuote}>Partner with us today! <Dot /></button>
          </div>
          <div className="ach-right" {...s.hoverProps}>
            <div className="slider">
              <div className="track" style={{ transform: `translateX(-${s.i * 100}%)` }}>
                {TESTIMONIALS.map((t) => (
                  <div key={t.title} className="slide">
                    <div className="tcard">
                      <span className="quote-ic">“</span>
                      <div className="person">
                        <span className="avatar">{t.role[0]}</span>
                        <div><strong>{t.role}</strong><small>{t.company}</small></div>
                      </div>
                      <h3>{t.title}</h3>
                      <p>{t.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="arrows">
              <button type="button" aria-label="Previous testimonial" onClick={s.prev}><Chevron dir="left" /></button>
              <button type="button" aria-label="Next testimonial" className="fill" onClick={s.next}><Chevron /></button>
            </div>
          </div>
          <div className="ach-note">
            <p>Our commitment to excellence and data-driven SEO has helped <strong>1000+ businesses</strong> grow their online presence and achieve top rankings.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Welcome({ onQuote }: { onQuote: () => void }) {
  return (
    <section className="sec pt0">
      <div className="wrap two-col">
        <div>
          <p className="eyebrow plain">About IndeedSEO</p>
          <h2>Welcome to IndeedSEO – Your Trusted <span className="hl">Digital Marketing Partner in the USA</span></h2>
          <p className="grey">Founded in 2012, IndeedSEO serves businesses across the United States from our office in Helotes, Texas, backed by a 250+ member delivery team. From local service businesses to national brands, we work with companies of every size and industry.</p>
          <p className="grey">Get complete digital marketing solutions, including SEO, PPC, AI SEO, social media, content marketing and online reputation management, built for the competitive US market.</p>
          <p className="grey">Dedicated project managers, transparent reporting and meetings scheduled in your time zone give you complete visibility into campaign performance and results.</p>
          <button type="button" className="btn" onClick={onQuote}>Request a Free Quote! <Dot /></button>
        </div>
        <div className="welcome-img">
          <img src={IMG + "indeedseo-about.webp"} alt="IndeedSEO digital marketing team" loading="lazy" />
        </div>
      </div>
    </section>
  );
}

function CaseStudies() {
  const s = useSlider(CASES.length, 1, 3000);
  return (
    <section className="sec" id="case-studies">
      <div className="wrap">
        <div className="head">
          <span className="eyebrow">Our Success Stories</span>
          <h2>Case Studies That Prove <span className="hl">IndeedSEO is a Top Digital Marketing Company</span> for US Brands</h2>
          <p className="grey">Real results. Proven growth. Helping businesses earn relevant organic traffic and win competitive search rankings.</p>
        </div>
        <div className="slider" {...s.hoverProps}>
          <div className="track" style={{ transform: `translateX(-${s.i * 100}%)` }}>
            {CASES.map((c) => (
              <div key={c.name} className="slide">
                <div className="case">
                  <div className="case-visual">
                    <img src={c.img} alt={`${c.name} case study`} loading="lazy" />
                    <span className="case-badge"><strong>{c.industry}</strong><small>{c.sub}</small></span>
                    <div className="case-bar">
                      {c.results.map((r) => (
                        <span key={r.l}><strong>{r.v}</strong><small>{r.l}</small></span>
                      ))}
                    </div>
                  </div>
                  <div className="case-info">
                    <h3>{c.name}</h3>
                    <p className="grey">{c.desc}</p>
                    <h4>Strategies Implemented:</h4>
                    <ul className="case-list">
                      {c.strategies.map((x) => (
                        <li key={x}><Check />{x}</li>
                      ))}
                    </ul>
                    <h4>Results Achieved:</h4>
                    <div className="case-results">
                      {c.results.map((r) => (
                        <div key={r.l}><strong>{r.v}</strong><small>{r.l}</small></div>
                      ))}
                    </div>
                    <a className="case-cta" href={u(c.href)}>Learn More <Chevron /></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="dots-row">
          <button type="button" className="circle" aria-label="Previous case study" onClick={s.prev}><Chevron dir="left" /></button>
          <div className="dots">
            {CASES.map((c, idx) => (
              <button key={c.name} type="button" aria-label={`Go to ${c.name}`} className={idx === s.i ? "on" : ""} onClick={() => s.setI(idx)} />
            ))}
          </div>
          <button type="button" className="circle fill" aria-label="Next case study" onClick={s.next}><Chevron /></button>
        </div>
      </div>
    </section>
  );
}

function ServiceTabs({ onQuote }: { onQuote: () => void }) {
  const [active, setActive] = useState(SERVICES[0].id);
  const refs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id.replace("svc-", ""))),
      { rootMargin: "-45% 0px -45% 0px" }
    );
    Object.values(refs.current).forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const go = (id: string) => {
    const el = refs.current[id];
    if (!el) return;
    setActive(id);
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 160, behavior: "smooth" });
  };

  return (
    <section className="sec pb0">
      <div className="wrap">
        <div className="head">
          <h2>AI Powered <span className="hl">Digital Marketing</span> &amp; SEO Services That Drive Real Results</h2>
          <p>As a full-service agency and <a href={u("/white-label-digital-marketing")}>white label marketing partner</a>, IndeedSEO delivers AI-driven SEO, content marketing, link building, local SEO, PPC, social media, AEO, GEO and performance marketing, customized to your industry and your US audience.</p>
        </div>
        <div className="svc">
          <div className="svc-nav">
            {SERVICES.map((sv, idx) => (
              <button key={sv.id} type="button" className={`svc-tab ${active === sv.id ? "on" : ""}`} onClick={() => go(sv.id)} aria-current={active === sv.id}>
                <span className="svc-ic"><SvcIcon id={sv.id} /></span>
                <span className="svc-name">{sv.tab}</span>
                <span className="svc-num">{String(idx + 1).padStart(2, "0")}</span>
                <span className="svc-go"><Chevron /></span>
              </button>
            ))}
          </div>
          <div className="svc-blocks">
            {SERVICES.map((sv) => (
              <div key={sv.id} id={`svc-${sv.id}`} ref={(el) => { refs.current[sv.id] = el; }} className="svc-block">
                <div className="svc-img"><img src={IMG + sv.img} alt={sv.title} loading="lazy" /></div>
                <div className="svc-box">
                  <div className="svc-head">
                    <span className="svc-badge"><SvcIcon id={sv.id} /></span>
                    <h3>{sv.href ? <a href={u(sv.href)}>{sv.title}</a> : sv.title}</h3>
                  </div>
                  <p>{sv.desc}</p>
                  <div className="svc-lists">
                    <div>
                      <span className="svc-sub">What We Provide</span>
                      <ul className="ticks light">{sv.provide.map((x) => <li key={x}>{x}</li>)}</ul>
                    </div>
                    <div>
                      <span className="svc-sub">Business Benefits</span>
                      <ul className="ticks light">{sv.benefits.map((x) => <li key={x}>{x}</li>)}</ul>
                    </div>
                  </div>
                  {sv.href ? (
                    <a className="btn" href={u(sv.href)}><Dot /> Learn More</a>
                  ) : (
                    <button type="button" className="btn" onClick={onQuote}><Dot /> Learn More</button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhiteLabel() {
  return (
    <section className="sec pb0">
      <div className="wrap">
        <div className="head">
          <h2>White Label Digital Marketing Services to <span className="hl">Scale Your US Agency</span></h2>
          <p className="grey">With global SEO spending projected to pass $100B, agencies across the US are adding search services. Partner with IndeedSEO to expand your offering with <a href={u("/white-label-seo")}>white label SEO</a> and digital marketing fulfillment.</p>
        </div>
        <div className="grid3">
          {WHITE_LABEL.map((w) => (
            <div key={w.t} className="icard">
              <span className="ibadge">◎</span>
              <h3><a href={u(w.h)}>{w.t}</a></h3>
              <p>{w.d}</p>
            </div>
          ))}
          <div className="icard dark">
            <h3>Ready to Scale Your Agency?</h3>
            <p>Partner with IndeedSEO for reliable white label fulfillment across SEO, PPC and social media.</p>
            <a className="wl-btn" href={u("/contact")}>Get Started <Chevron /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section className="sec pb0">
      <div className="wrap two-col top">
        <div className="sticky">
          <p className="eyebrow plain">Why choose us</p>
          <h2>Benefits Of <span className="hl">Digital Marketing &amp; SEO Services</span> For Your Business</h2>
          <p className="grey">SEO improves your website&apos;s visibility on Google so customers find you before your competitors. A professional SEO agency handles everything from fixing technical errors to researching the keywords US buyers use, creating content that ranks and building authority through links and citations.</p>
          <div className="benefit-visual">
            <img src={IMG + "benefits-digital.webp"} alt="Benefits of digital marketing" loading="lazy" />
            <div className="goal"><strong>Our Goal</strong>Drive more traffic, generate leads &amp; grow your business</div>
          </div>
        </div>
        <div className="benefit-list">
          {BENEFITS.map((b) => (
            <div key={b.t} className="benefit">
              <span className="b-ic">✓</span>
              <span><strong>{b.t}</strong>{b.d}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaBand({ eyebrow, title, text, trust, onQuote, second }: { eyebrow: string; title: React.ReactNode; text: string; trust: string[]; onQuote: () => void; second?: string }) {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="cta-band">
          <span className="cta-eyebrow">{eyebrow}</span>
          <h2>{title}</h2>
          <p>{text}</p>
          <div className="cta-btns">
            <button type="button" className="btn" onClick={onQuote}>Book a free strategy call</button>
            {second && <button type="button" className="btn outline" onClick={onQuote}>{second}</button>}
          </div>
          <ul className="cta-trust">{trust.map((t) => <li key={t}>✓ {t}</li>)}</ul>
        </div>
      </div>
    </section>
  );
}
function Industries() {
  return (
    <section className="sec pt0">
      <div className="wrap">
        <div className="head">
          <h2>IndeedSEO Serving US Businesses Across <span className="hl">20+ Industries</span></h2>
          <p className="grey">From law firms in New York to roofers in Texas, we build SEO strategies around how customers in your industry search.</p>
        </div>
        <div className="grid4">
          {INDUSTRIES.map((ind) => (
            <a key={ind.t} className="ind" href={ind.h ? u(ind.h) : undefined}>
              <div className="ind-img"><img src={ind.img} alt={ind.t} loading="lazy" /></div>
              <div className="ind-foot"><h3>{ind.t}</h3><span className="ind-arrow"><Chevron /></span></div>
            </a>
          ))}
          <a className="ind-cta" href={u("/services")}>
            <span>Don&apos;t See Your Industry?</span>
            <h3>View All Our Services</h3>
            <p>Explore our full range of SEO and digital marketing solutions for every business type.</p>
          </a>
        </div>
      </div>
    </section>
  );
}

function Pillars() {
  return (
    <section className="sec fade">
      <div className="wrap">
        <div className="head">
          <h2>The Four Pillars That <span className="hl">Shape Our Success</span></h2>
          <p className="grey">Expertise, proven results, transparency and value: the four principles behind every campaign we run.</p>
        </div>
        <div className="grid4 tight">
          {PILLARS.map((p) => (
            <div key={p.t} className="icard"><h3>{p.t}</h3><p>{p.d}</p></div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Clients() {
  return (
    <section className="sec">
      <div className="wrap head">
        <h2>We are <span className="hl">Trusted By Our</span> Global Clients</h2>
        <p>We provide reliable SEO solutions that help clients across the US and worldwide lead their markets and beat the competition.</p>
      </div>
      <div className="marquee">
        <div className="marquee-track slow">
          <img src={IMG + "client-slider.webp"} alt="Our global clients" />
          <img src={IMG + "client-slider.webp"} alt="" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

function Process() {
  const w = useWidth();
  const per = w < 768 ? 1 : w < 1200 ? 2 : 3;
  const s = useSlider(PROCESS.length, per, 0, false);
  return (
    <section className="sec process">
      <div className="wrap">
        <div className="head">
          <h2>Our <span className="hl">Digital Marketing Process</span></h2>
          <p>From planning to performance tracking, a systematic approach that strengthens your brand and creates real business opportunities.</p>
        </div>
        <div className="slider visible">
          <div className="track" style={{ transform: `translateX(-${(s.i * 100) / per}%)` }}>
            {PROCESS.map((p, idx) => (
              <div key={p.t} className="slide" style={{ flex: `0 0 ${100 / per}%` }}>
                <div className="step">
                  <div className="step-top">
                    <span className="step-num">{idx + 1}</span>
                    <img src={IMG + p.icon} alt="" width={56} height={56} loading="lazy" />
                    <span className="step-line" />
                  </div>
                  <p className="step-phase">Step {idx + 1}</p>
                  <h4>{p.t}</h4>
                  <p>{p.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="arrows right">
          <button type="button" aria-label="Previous step" onClick={s.prev} disabled={s.i === 0}><Chevron dir="left" /></button>
          <button type="button" aria-label="Next step" className="fill" onClick={s.next} disabled={s.i === s.max}><Chevron /></button>
        </div>
      </div>
    </section>
  );
}

function TrustBadges() {
  const badges = Array.from({ length: 9 }, (_, i) => `${IMG}companies-${i + 1}.svg`);
  return (
    <section className="sec trust" style={{ backgroundImage: `url(${IMG}archive-bg.webp)` }}>
      <div className="wrap head">
        <span className="eyebrow">Trusted By Industry Leaders</span>
        <h2>Recognized for <span className="hl">Excellence.</span><br />Trusted by <span className="hl">Thousands.</span></h2>
        <p>Our commitment to quality, transparency and results has earned recognition from <strong>leading organizations worldwide.</strong></p>
      </div>
      <div className="marquee">
        <div className="marquee-track">
          {[...badges, ...badges].map((b, i) => (
            <div key={i} className="tbadge" aria-hidden={i >= badges.length}>
              <img src={b} alt={i < badges.length ? "Industry recognition badge" : ""} loading="lazy" />
              <span>★★★★★</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section className="sec">
      <div className="wrap narrow">
        <h2 className="center">Frequently Asked Questions</h2>
        <div className="faq">
          {FAQS.map((f, idx) => (
            <div key={f.q} className={`faq-item ${open === idx ? "open" : ""}`}>
              <h3>
                <button type="button" aria-expanded={open === idx} onClick={() => setOpen(open === idx ? -1 : idx)}>
                  {f.q}<span className="faq-ic">{open === idx ? "−" : "+"}</span>
                </button>
              </h3>
              <div className="faq-body" hidden={open !== idx}>{f.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta({ onQuote }: { onQuote: () => void }) {
  return (
    <section className="final">
      <div className="wrap center">
        <p className="final-eyebrow">Get started today</p>
        <h2>Start Your Business Growth Journey Today!</h2>
        <p>Partner with IndeedSEO to reach the right US audience and grow faster.</p>
        <div className="cta-btns">
          <button type="button" className="btn" onClick={onQuote}>Call an SEO Expert Now</button>
          <a className="btn outline" href={US_TEL}>Call {US_PHONE}</a>
        </div>
      </div>
    </section>
  );
}

/* ================= MODAL FORM ================= */

function QuoteModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const firstRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setStatus("idle");
      setTimeout(() => firstRef.current?.focus(), 50);
    }
  }, [open]);

  if (!open) return null;

  const validate = () => {
    const e: Record<string, string> = {};
    if (!/^[a-zA-Z\s]{2,}$/.test(form.name.trim())) e.name = "Enter your full name using letters only.";
    if (!/^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/.test(form.email.trim())) e.email = "Enter a valid email address, like name@company.com.";
    if (form.phone.replace(/\D/g, "").length < 10) e.phone = "Enter a phone number with at least 10 digits.";
    if (!form.message.trim()) e.message = "Tell us briefly what you need help with.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    // TODO: yahan apna API endpoint lagayein (jaise /api/contact ya HubSpot form)
    await new Promise((r) => setTimeout(r, 800));
    setStatus("sent");
  };

  const field = (k: keyof typeof form, label: string, type = "text") => (
    <label className="f">
      <span className="sr">{label}</span>
      <input ref={k === "name" ? firstRef : undefined} type={type} placeholder={label} value={form[k]} onChange={(e) => setForm({ ...form, [k]: e.target.value })} aria-invalid={!!errors[k]} />
      {errors[k] && <small className="err">{errors[k]}</small>}
    </label>
  );

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-label="Get in touch" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal-x" aria-label="Close" onClick={onClose}>×</button>
        <div className="modal-left">
          <h2>Want To Boost Your Online Presence?</h2>
          <p>Generate more leads and appear at the top of search results across the US.</p>
          <h3 className="tag">Our Certifications</h3>
          <img src="https://indeedseo.com/images/home-page/indeed-certify.png" alt="Our certifications" loading="lazy" />
          <h3 className="tag">Featured In</h3>
          <img src="https://indeedseo.com/images/home-page/indeed-featured1.png" alt="Featured in" loading="lazy" />
        </div>
        <div className="modal-form">
          {status === "sent" ? (
            <div className="sent">
              <h2>Request received</h2>
              <p>Thanks, {form.name.split(" ")[0]}. A strategist will email you at {form.email} within one business day.</p>
              <button type="button" className="btn" onClick={onClose}>Close</button>
            </div>
          ) : (
            <form onSubmit={submit} noValidate>
              <h2 className="center">Get In Touch</h2>
              <p className="center grey">Fill in your requirements to get started!</p>
              {field("name", "Full Name")}
              {field("email", "Email", "email")}
              {field("phone", "Phone Number (US)", "tel")}
              <label className="f">
                <span className="sr">Message</span>
                <textarea rows={4} placeholder="Message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} aria-invalid={!!errors.message} />
                {errors.message && <small className="err">{errors.message}</small>}
              </label>
              <div className="checks">
                <label><input type="checkbox" defaultChecked /> Check out new offers</label>
                <label><input type="checkbox" defaultChecked /> Get a free audit in 24 hours</label>
                <label><input type="checkbox" defaultChecked /> Get free consultation</label>
              </div>
              <button type="submit" className="submit" disabled={status === "sending"}>{status === "sending" ? "Sending..." : "Send Request"}</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

/* ================= FOOTER ================= */

function Footer() {
  const w = useWidth();
  const per = w < 768 ? 1 : w < 1200 ? 2 : 3;
  const s = useSlider(OFFICES.length, per, 4000);
  return (
    <footer className="ftr">
      <div className="wrap ftr-top">
        <div className="ftr-about">
          <a href={SITE}><img src="https://indeedseo.com/wp-content/themes/twentytwenty-child/images/footer-images/footer-logo.webp" alt="IndeedSEO" width={180} height={71} /></a>
          <p>IndeedSEO provides SEO, SEM, PPC, ORM, content writing and link building services that help US businesses expand and promote their brand with proven strategies.</p>
        </div>
        <div className="slider">
          <div className="track" style={{ transform: `translateX(-${(s.i * 100) / per}%)` }}>
            {OFFICES.map((o) => (
              <div key={o.title} className="slide" style={{ flex: `0 0 ${100 / per}%` }}>
                <div className="office">
                  <img src={`https://indeedseo.com/wp-content/themes/twentytwenty-child/images/footer-images/${o.img}`} alt={o.title} loading="lazy" />
                  <a href={o.map} target="_blank" rel="noopener noreferrer"><h5>{o.title}</h5></a>
                  <p>{o.addr}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="wrap">
        <h6 className="ftr-h">Other Services Experts</h6>
        <div className="ftr-grid4">
          {FOOTER_EXPERTS.map((col, i) => (
            <ul key={i}>{col.map((l) => <li key={l.t}><a href={u(l.h)}>{l.t}</a></li>)}</ul>
          ))}
        </div>
      </div>

      <div className="ftr-cta">
        <h2>Join Our Reseller Program &amp; Earn up to $2000/Month</h2>
        <a className="ftr-btn" href={u("/reseller-partner/")}>Reseller Partner</a>
      </div>

      <div className="wrap ftr-grid4 bottom">
        {FOOTER_COLS.map((c) => (
          <div key={c.title}>
            <h6 className="ftr-h">{c.title}</h6>
            <ul>{c.links.map((l) => <li key={l.t}><a href={u(l.h)}>{l.t}</a></li>)}</ul>
          </div>
        ))}
        <div>
          <h6 className="ftr-h">Let&apos;s Get Talking</h6>
          <ul className="ftr-contact">
            <li><a href={US_TEL}>USA: {US_PHONE}</a></li>
            <li><a href={IN_TEL}>India: {IN_PHONE}</a></li>
            <li><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
          </ul>
          <h6 className="ftr-h mt">Follow Us on</h6>
          <ul className="social">
            <li><a href="https://www.facebook.com/indeedseo" target="_blank" rel="noopener noreferrer" aria-label="Facebook">f</a></li>
            <li><a href="https://www.linkedin.com/company/indeedseo" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">in</a></li>
            <li><a href="https://www.instagram.com/indeedseo" target="_blank" rel="noopener noreferrer" aria-label="Instagram">ig</a></li>
            <li><a href="https://www.youtube.com/@Indeedseoagency" target="_blank" rel="noopener noreferrer" aria-label="YouTube">▶</a></li>
          </ul>
        </div>
      </div>

      <div className="copy">
        <div className="wrap copy-in">
          <p>© 2026 <a href={SITE}>Indeedseo.com</a> | All rights reserved</p>
          <div className="scam">
            <span className="scam-t">⚠ Scam Alert :-</span>
            <div className="scam-box"><div className="scam-run"><span>{SCAM_TEXT}</span><span aria-hidden="true">{SCAM_TEXT}</span></div></div>
          </div>
          <p className="right"><a href={u("/term-and-conditions")}>Term &amp; Condition</a> • <a href={u("/privacy-policy")}>Privacy Policy</a></p>
        </div>
      </div>
    </footer>
  );
}

/* ================= PAGE ================= */

export default function UsaHome() {
  const [modal, setModal] = useState(false);
  const [cookie, setCookie] = useState<"hidden" | "show" | "closed">("hidden");
  const openModal = () => setModal(true);

  useEffect(() => {
    const on = () => {
      if (window.scrollY > 50) setCookie((c) => (c === "hidden" ? "show" : c));
    };
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    document.body.style.overflow = modal ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setModal(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [modal]);

  return (
    <div className="isu">
      <Header onQuote={openModal} />
      <main>
        <Hero onQuote={openModal} />
        <Stats />
        <Achievements onQuote={openModal} />
        <Welcome onQuote={openModal} />
        <CaseStudies />
        <ServiceTabs onQuote={openModal} />
        <WhiteLabel />
        <Benefits />
        <CtaBand
          eyebrow="Top-Rated SEO Company for the USA"
          title={<>Did you know that <span className="hl">75%</span> of users never scroll beyond the first page of search results?</>}
          text="IndeedSEO offers SEO and digital marketing services that help US businesses improve rankings, attract qualified traffic and grow."
          trust={["No Long-Term Contracts", "Results in 90 Days or Less*", "100% White-Hat SEO", "1,000+ Businesses Served Globally"]}
          second="Get a free SEO audit"
          onQuote={openModal}
        />
        <Industries />
        <Pillars />
        <Clients />
        <Process />
        <CtaBand
          eyebrow="Free & No-Obligation"
          title={<><span className="hl">Ready to Grow</span> Your Online Presence?</>}
          text="Talk to our digital marketing specialists for free and uncover opportunities to improve your marketing performance."
          trust={["Boost Rankings", "Generate More Leads", "Grow Your Business"]}
          onQuote={openModal}
        />
        <TrustBadges />
        <Faq />
        <FinalCta onQuote={openModal} />
      </main>
      <Footer />

      <a className="wa-float" href={WHATSAPP} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp"><img src="https://indeedseo.com/images/whatslogo.svg" alt="" width={47} height={47} /></a>

      {cookie === "show" && (
        <div className="cookie">
          <p>We use cookies to enhance your user experience. By continuing to visit this site you agree to our use of cookies.</p>
          <button type="button" aria-label="Close cookie notice" onClick={() => setCookie("closed")}>×</button>
        </div>
      )}

      <QuoteModal open={modal} onClose={() => setModal(false)} />
    </div>
  );
}