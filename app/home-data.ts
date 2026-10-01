// Homepage ka saara content yahan hai (text badalna ho to sirf ye file edit karo)

export type Card = { t: string; d: string; tags: string[]; href?: string };
export type Group = {
  id: string;
  label: string;
  h2: string;
  intro: string;
  cta: string;
  ctaHref: string;
  dark?: boolean;
  cards: Card[];
};

export const GROUPS: Group[] = [
  {
    id: "seo",
    label: "SEO Services",
    h2: "SEO services that rank you on Google and AI search",
    intro: "CodedSEO combines local SEO services, technical SEO, ecommerce SEO, SEO audits and white-hat link building services to grow organic traffic from buyers in the USA, UK, Canada and Australia.",
    cta: "Explore organic SEO",
    ctaHref: "/services/organic-seo",
    cards: [
      { t: "AI-Powered SEO", d: "Leverage machine learning to predict ranking opportunities and optimize your content strategy for Google, AI Overviews and ChatGPT.", tags: ["GPT Search Optimization", "Predictive Analytics", "Auto Content Scoring"] },
      { t: "Technical SEO", d: "Deep-dive audits that uncover every technical barrier preventing your site from reaching its full ranking potential.", tags: ["Core Web Vitals", "Site Architecture", "Schema Markup"] },
      { t: "Content Strategy", d: "Data-driven content planning that targets high-intent keywords and builds topical authority in your niche.", tags: ["Topic Clusters", "Content Gaps", "E-E-A-T Optimization"] },
      { t: "Local SEO", d: "Dominate local search results with optimized Google Business Profiles and location-specific strategies.", tags: ["GBP Optimization", "Local Citations", "Review Management"] },
      { t: "Link Building", d: "White-hat link acquisition from authoritative domains that builds your domain authority sustainably.", tags: ["Digital PR", "Guest Posting", "HARO Outreach"] },
      { t: "Analytics & Reporting", d: "Clear dashboards and monthly reports that track every metric that matters to your business.", tags: ["Custom Dashboards", "ROI Tracking", "Competitor Intel"] },
      { t: "E-commerce SEO", d: "Category and product page optimization that helps online stores win more organic sales.", tags: ["Product Schema", "Category Pages", "Shopify SEO"] },
      { t: "White Label SEO", d: "Fully managed SEO delivered under your agency brand by our team in India.", tags: ["White Label Reports", "Agency Partners", "Dedicated Team"], href: "/seo-outsourcing-india" },
    ],
  },
  {
    id: "digital-marketing",
    label: "Digital Marketing",
    dark: true,
    h2: "Digital marketing services: Google Ads, PPC and social media",
    intro: "As a Google Ads agency and social media marketing agency, CodedSEO runs PPC management, Facebook and LinkedIn ads, CRO and email campaigns that bring enquiries while your SEO builds long-term traffic.",
    cta: "Plan my campaign",
    ctaHref: "#contact",
    cards: [
      { t: "Google Ads (PPC)", d: "Search, Shopping and Performance Max campaigns built around keywords that convert.", tags: ["Search Ads", "Shopping Ads", "Conversion Tracking"] },
      { t: "Facebook & Instagram Ads", d: "Targeted Meta ad campaigns for lead generation and e-commerce sales.", tags: ["Lead Ads", "Catalog Ads", "Audience Targeting"] },
      { t: "LinkedIn Ads", d: "B2B advertising that reaches decision makers by job title, industry and company size.", tags: ["B2B Leads", "Lead Gen Forms", "ABM"] },
      { t: "Retargeting", d: "Bring back visitors who left without converting, across Google and social platforms.", tags: ["Display Retargeting", "Social Retargeting", "Dynamic Ads"] },
      { t: "Content Marketing", d: "Blogs, guides and resources that attract, educate and convert your audience.", tags: ["Blog Writing", "Lead Magnets", "Content Calendar"] },
      { t: "Social Media Marketing", d: "Consistent posting and community management that builds your brand presence.", tags: ["Content Creation", "Scheduling", "Engagement"] },
      { t: "Email Marketing", d: "Newsletters and automated sequences that nurture leads into customers.", tags: ["Automation", "Newsletters", "Segmentation"] },
      { t: "Video Marketing", d: "Short-form and explainer videos for ads, social media and your website.", tags: ["Reels & Shorts", "Explainers", "YouTube"] },
      { t: "CRO Services", d: "Conversion rate optimization that gets more leads from the traffic you already have.", tags: ["A/B Testing", "Heatmaps", "Landing Pages"] },
      { t: "White Label Marketing", d: "Agency partnerships for ads, social and content delivered under your brand.", tags: ["Agency Partners", "Your Branding", "Reporting"] },
    ],
  },
  {
    id: "web-development",
    label: "Web Design & Development",
    h2: "Web development company for fast, SEO-ready websites",
    intro: "From custom website development and WordPress development services to Shopify development, website redesign and maintenance services, CodedSEO builds sites that load fast, rank well and turn visitors into enquiries.",
    cta: "Get a website quote",
    ctaHref: "#contact",
    cards: [
      { t: "Custom Website Development", d: "Websites built from scratch around your brand, content and conversion goals.", tags: ["Custom Design", "Responsive", "SEO-Ready"] },
      { t: "WordPress Development", d: "Custom WordPress themes, plugins and fixes, with speed and security built in.", tags: ["Custom Themes", "Elementor", "WooCommerce"] },
      { t: "Shopify & E-commerce Development", d: "Online stores that are easy to manage and built to sell.", tags: ["Shopify Stores", "WooCommerce", "Payment Setup"] },
      { t: "Next.js & React Development", d: "Modern, lightning-fast websites and web apps for growing brands.", tags: ["Next.js", "React", "Headless CMS"] },
      { t: "Landing Page Design", d: "High-converting landing pages for ads, launches and lead generation.", tags: ["Ad Landing Pages", "A/B Ready", "Fast Load"] },
      { t: "UI/UX Design", d: "Clear, user-friendly designs and prototypes before a single line of code.", tags: ["Wireframes", "Prototypes", "Design Systems"] },
      { t: "Website Redesign Services", d: "Move or redesign your site without losing rankings or traffic.", tags: ["SEO-Safe Migration", "Redirects", "Platform Switch"] },
      { t: "Website Speed Optimization", d: "Faster pages and better Core Web Vitals for users and Google.", tags: ["Core Web Vitals", "Image Optimization", "Caching"] },
    ],
  },
  {
    id: "hubspot-crm",
    label: "HubSpot & CRM",
    dark: true,
    h2: "HubSpot consultant and CRM implementation services",
    intro: "From HubSpot onboarding services to CRM migration and HubSpot integration services, CodedSEO sets up your CRM so every lead from your website, ads and email is tracked, followed up and reported.",
    cta: "Talk to a CRM expert",
    ctaHref: "#contact",
    cards: [
      { t: "HubSpot Setup & Onboarding", d: "Your HubSpot account configured, connected to your website and ready for your team.", tags: ["Account Setup", "Form Integration", "Team Training"] },
      { t: "HubSpot CMS Website", d: "Websites built on HubSpot CMS that your marketing team can edit without a developer.", tags: ["HubSpot Themes", "Custom Modules", "Blog Setup"] },
      { t: "HubSpot Marketing Automation", d: "Workflows, email sequences and lead scoring that run on autopilot.", tags: ["Workflows", "Lead Scoring", "Sequences"] },
      { t: "New CRM Setup", d: "Pipelines, deal stages, properties and dashboards built around how you sell.", tags: ["Sales Pipeline", "Custom Properties", "Dashboards"] },
      { t: "CRM Customization", d: "Changes to your existing CRM so it matches your process, not the other way round.", tags: ["Custom Objects", "Automation", "Reports"] },
      { t: "CRM Migration", d: "Move contacts, deals and history from spreadsheets, Zoho or Salesforce to HubSpot safely.", tags: ["Data Cleanup", "Zoho to HubSpot", "Salesforce to HubSpot"] },
      { t: "CRM Integrations", d: "Connect HubSpot with your website, ads, email and other business tools.", tags: ["API Integrations", "Zapier", "Ads Sync"] },
      { t: "Training & Support", d: "Hands-on training and ongoing support so your team actually uses the CRM.", tags: ["Team Training", "Documentation", "Ongoing Support"] },
    ],
  },
  {
    id: "it-services",
    label: "IT Services",
    h2: "IT services company for web apps, integrations and support",
    intro: "Custom web application development, API integration services, website security and business email, handled by the same CodedSEO team that builds your website.",
    cta: "Discuss your project",
    ctaHref: "#contact",
    cards: [
      { t: "Custom Web App Development", d: "Dashboards, portals and internal tools built for your workflow.", tags: ["Web Apps", "Client Portals", "Dashboards"] },
      { t: "API & Third-Party Integrations", d: "Connect your website, CRM, payments and business software.", tags: ["REST APIs", "Payment Gateways", "Automation"] },
      { t: "Website Maintenance Services", d: "Updates, backups, fixes and monitoring so your site never breaks.", tags: ["Updates", "Backups", "Uptime Monitoring"] },
      { t: "Website Security", d: "Malware cleanup, SSL, firewalls and hardening for WordPress and custom sites.", tags: ["Malware Removal", "SSL", "Firewall"] },
      { t: "Hosting, Domain & DNS Setup", d: "Reliable hosting, domain and DNS configured correctly the first time.", tags: ["Vercel", "Hostinger", "DNS Records"] },
      { t: "Business Email Setup", d: "Professional email on your domain with proper SPF and DKIM so mail lands in the inbox.", tags: ["Google Workspace", "Zoho Mail", "SPF & DKIM"] },
    ],
  },
];

export const INDUSTRIES = ["Home Services", "E-commerce", "SaaS & Tech", "Healthcare", "Legal", "Real Estate", "Manufacturing", "Education", "Marketing Agencies", "Local Businesses"];

export const PLATFORMS = ["WordPress", "Shopify", "WooCommerce", "Next.js", "React", "HubSpot", "Google Ads", "Meta Ads", "LinkedIn Ads", "Google Analytics 4", "Google Search Console", "Semrush", "Ahrefs", "Sanity CMS", "Vercel", "Zoho"];

export const STEPS = [
  { title: "Free audit & call", text: "We review your website, rankings, ads and lead flow, then share what is holding you back." },
  { title: "Clear plan & quote", text: "A written roadmap with priorities, timelines and a fixed scope, before any work starts." },
  { title: "Build & launch", text: "SEO, campaigns, website and CRM delivered by one coordinated team." },
  { title: "Report & improve", text: "Monthly reports on rankings, traffic, leads and sales, in plain English." },
];

export const FAQ_CATS: { title: string; items: { q: string; a: string }[] }[] = [
  {
    title: "General",
    items: [
      { q: "What does a digital marketing agency do?", a: "A digital marketing agency helps you get customers online through SEO, paid ads, social media, email and a website that converts. CodedSEO handles all of these, plus web development and CRM setup." },
      { q: "How do I choose the right SEO agency?", a: "Look for real case studies, clear reporting, honest timelines and a team that explains its plan in plain language. Avoid anyone who guarantees #1 rankings." },
      { q: "How does an agency help my business grow?", a: "You get specialists in SEO, ads, design and CRM without hiring a full in-house team, and one plan that connects traffic to leads and sales." },
      { q: "Do I need SEO, ads or both?", a: "Ads bring leads quickly while you pay; SEO builds traffic that keeps coming. Most growing businesses use ads in the short term and SEO for the long term." },
      { q: "Do you work with small businesses?", a: "Yes. We work with small businesses, growing companies and agencies, and size the plan to your budget and goals." },
    ],
  },
  {
    title: "About CodedSEO",
    items: [
      { q: "What makes CodedSEO different?", a: "One team handles SEO, marketing, web development and HubSpot CRM, so your rankings, website and sales pipeline are planned together instead of by separate vendors." },
      { q: "Where is CodedSEO based?", a: "Our office is in Sector 74, Phase 8B, Mohali, Punjab, India. We work with clients across the USA, UK, Canada and Australia and schedule calls in your time zone." },
      { q: "Which industries do you work with?", a: "We work with service businesses, e-commerce brands, B2B companies and agencies. Tell us your industry on a free call and we will share how we would approach it." },
      { q: "Do you offer white label services for agencies?", a: "Yes. We deliver SEO, marketing and development under your brand. You keep the client relationship, we do the work." },
      { q: "Can I apply for an internship or training?", a: "Yes. Choose \"Training / Internship\" in the contact form and our team will get back to you." },
    ],
  },
  {
    title: "Web Development & CRM",
    items: [
      { q: "Do you build WordPress and Shopify websites?", a: "Yes. We build and fix WordPress, WooCommerce and Shopify sites, and use Next.js and React when you need something faster or more custom." },
      { q: "Can you redesign my website without losing rankings?", a: "Yes. We map every URL, set up redirects and keep your SEO content and structure so rankings are protected during a redesign or migration." },
      { q: "Do you set up HubSpot CRM for small businesses?", a: "Yes. We set up HubSpot, connect your website forms, build your sales pipeline and train your team, on the free plan or a paid one." },
      { q: "Can you migrate our CRM to HubSpot?", a: "Yes. We move contacts, companies, deals and history from spreadsheets, Zoho, Salesforce and other CRMs, and clean the data along the way." },
      { q: "Do you offer website maintenance after launch?", a: "Yes. We offer ongoing updates, backups, security checks and fixes so your site keeps running smoothly." },
    ],
  },
  {
    title: "Fee & Contract",
    items: [
      { q: "How much do your services cost?", a: "Pricing depends on your goals, competition and scope. After a free call we send a clear written quote, with no hidden costs." },
      { q: "How can I request a quote or proposal?", a: "Book a free call or fill in the form on this page. We reply within one business day." },
      { q: "Do you offer a free consultation?", a: "Yes. The first 30-minute strategy call and a basic website audit are free, with no obligation." },
      { q: "Do you require long-term contracts?", a: "Terms depend on the service and are agreed in your proposal before work starts, so you always know what you are signing up for." },
      { q: "Which payment methods do you accept?", a: "Accepted payment options are listed in your proposal. Ask us on the call if you need a specific method." },
    ],
  },
  {
    title: "Results",
    items: [
      { q: "How soon can I expect results from SEO?", a: "Most sites see early movement in 3 to 4 months and stronger results in 6 to 12 months, depending on competition and where the site starts." },
      { q: "How soon do paid ads bring leads?", a: "Ads can start bringing enquiries within days of launch. The first few weeks are used to test and improve targeting and cost per lead." },
      { q: "Do you guarantee first page rankings?", a: "No honest agency can guarantee a position on Google. We commit to clear work, transparent reporting and the strategy that gives you the best chance." },
      { q: "How do you report results?", a: "You get a monthly report on rankings, traffic, leads and what we are doing next, in plain English." },
      { q: "Can you help my local business show up on Google Maps?", a: "Yes. Local SEO and Google Business Profile optimization help you appear in map results for customers near you." },
    ],
  },
];

/* ========== CASE STUDIES + REVIEWS ==========
   SAMPLE content hai. Asli client data milne par yahan badlo,
   phir HomePage.tsx mein SHOW_PROOF = true karo. Tab tak website par nahi dikhega. */
export const CASES = [
  { service: "SEO", place: "Home Services · Texas, USA", title: "Local service business doubles organic leads", text: "Ranking on page 3 for \"near me\" searches. We fixed technical issues, rebuilt service pages and optimized the Google Business Profile.", v1: "+212%", m1: "Organic traffic in 9 months", v2: "48", m2: "Keywords on page 1", pts: [92, 88, 84, 76, 60, 48, 30, 14] },
  { service: "Web Development", place: "E-commerce · London, UK", title: "Shopify store rebuilt for speed and sales", text: "Slow theme and a confusing checkout. We rebuilt the store on Shopify with faster pages and a cleaner product flow.", v1: "+64%", m1: "Conversion rate", v2: "1.8s", m2: "Mobile load time", pts: [80, 78, 70, 62, 50, 44, 36, 28] },
  { service: "HubSpot CRM", place: "B2B Services · Toronto, Canada", title: "Spreadsheets to a HubSpot sales pipeline", text: "Leads lived in email and spreadsheets. We migrated the data to HubSpot, connected website forms and automated follow-ups.", v1: "100%", m1: "Leads tracked in CRM", v2: "12 hrs", m2: "Saved per week", pts: [96, 90, 72, 66, 52, 40, 26, 18] },
];

export const REVIEWS = [
  { init: "JM", name: "J. Miller", role: "Owner, Plumbing Company · Texas, USA", service: "SEO", quote: "CodedSEO explained every step in plain English. Within a few months we were showing up on Google Maps for the areas we actually serve, and the calls started coming in." },
  { init: "SP", name: "S. Patel", role: "Founder, Online Store · London, UK", service: "Web Development", quote: "Our new Shopify site is faster and much easier to manage. The team kept our rankings safe during the move, which was my biggest worry." },
  { init: "DL", name: "D. Lawson", role: "Sales Director, B2B Firm · Toronto, Canada", service: "HubSpot CRM", quote: "We finally know where every lead comes from. CodedSEO set up HubSpot around how we actually sell, not the other way round." },
];
