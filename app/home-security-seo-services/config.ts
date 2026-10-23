import {
  Shield, ShieldCheck, Camera, Lock, Bell, House, Building2, KeyRound, BadgeCheck, MapPin, Star, Search, Wrench, Link2,
  MapPinOff, PhoneOff, Layers, Sparkles, BarChart3, Megaphone,
} from "lucide-react";
import type { IndustryConfig } from "@/lib/industry-config";

/* Keywords ("home security seo services" sheet, Semrush US):
   home security systems seo agency (40) · home security seo services (30, CPC $22.57)
   home security seo (20) · seo for home security companies (10) */

export const STEPS = [
  { t: "Set up your Google Business Profile as a service-area business", d: "Like [taxi companies](/local-seo-for-taxi-company), most installers visit the customer, so hide your address if customers don't come to you and list the towns and ZIP codes you actually cover. Use the category that matches your work, such as security system supplier or installer." },
  { t: "List every service separately", d: "Alarm installation, CCTV and camera installation, video doorbells, smart locks, 24/7 monitoring, commercial access control. Each is its own search and its own reason to call you." },
  { t: "Build a page for each service and each main town", d: "\"Security camera installation in Plano\" and \"alarm monitoring company near me\" are different searches. A specific page for each, with real job photos, beats one generic services page." },
  { t: "Show proof of trust on every page", d: "Licence numbers where your state requires them, insurance, brands you're certified for, warranty terms and real reviews. Security buyers check these before they call." },
  { t: "Ask every customer for a review after installation", d: "Send the review link by text when the job is finished. Reviews that mention the service and the town help you rank for both." },
  { t: "Look at Google Local Services Ads alongside SEO", d: "Home security is an eligible Local Services Ads category in the US, and businesses that pass Google's screening can show the Google Verified badge. SEO and LSA use the same reviews and profile, so they support each other." },
  { t: "Add LocalBusiness schema and track every call", d: "Structured data tells Google what you install and where. Call tracking shows which pages and searches bring booked site surveys." },
];

export const FAQS = [
  { q: "What are home security SEO services?", a: "Home security SEO services make your alarm, camera or smart-home security business show up when homeowners nearby search for installation, monitoring or a security company, and turn those searches into booked site surveys. That covers your Google Business Profile, service and town pages, reviews, trust signals and local listings." },
  { q: "Why is SEO worth it for home security companies?", a: "Clicks in this industry are expensive. Semrush shows a CPC of over $22 for \"home security seo services\" alone, and customer-facing searches like \"alarm installation near me\" cost advertisers even more. Ranking organically and in the Map Pack brings calls you don't pay for per click." },
  { q: "Should a home security company use Local Services Ads too?", a: "Often yes. Home security is an eligible Local Services Ads category in the US, and passing Google's screening gives you the Google Verified badge. SEO builds the profile, reviews and pages that make those ads and your organic listing more convincing." },
  { q: "Can we rank in towns where we don't have an office?", a: "Yes, if you really serve them. Add them as service areas on your Google Business Profile and build a useful page for each one with real job photos. Don't use virtual offices or fake addresses, which can get your profile suspended." },
  { q: "How long does home security SEO take to work?", a: "Profile fixes, service listings and review requests often show movement within 4 to 8 weeks. Ranking service and town pages for competitive searches usually takes 3 to 6 months." },
  { q: "How much do your home security SEO services cost?", a: "Our SEO packages start at $199 per month for Starter and $499 per month for Growth. A single-office installer usually starts on Starter; companies covering several towns or selling monitoring plans usually need Growth. US companies can also see our wider [SEO services in the USA](/seo-agency-usa)." },
  { q: "What should a home security website have for SEO?", a: "A page for each service and main town, real installation photos, licence and insurance details, brands you install, warranty and monitoring terms, reviews, a quote form with a few fields, a visible phone number, and LocalBusiness schema matching your Google profile." },
  { q: "Do you guarantee home security SEO results?", a: "No one controls Google, so we never promise a specific ranking. We do offer a 90-day results guarantee: if you don't see measurable ranking improvements, we keep working for free until you do." },
];

export const CFG: IndustryConfig = {
  crumb: "Home Security Companies",
  h1: { pre: "Home Security", box: "SEO", post: "Services", sub: "More Booked Installs From", subHl: "Google Search & Maps" },
  rotate: ["home security near me", "alarm installation near me", "security camera installers", "smart lock installation", "home alarm monitoring"],
  lead: "CodedSEO offers home security SEO services for alarm installers, camera and CCTV companies and smart-home security businesses. We get you into the Map Pack and onto page one for the searches homeowners make before they call, and make your trust signals impossible to miss.",
  heroPoints: ["Built for \"installers near me\" searches", "No contracts, no hidden fees", "Trust signals on every page", "More site surveys, not just clicks"],
  heroImg: { id: "photo-1633194883650-df448a10d554", alt: "Security camera mounted on the side of a house wall" },
  sideImg: { id: "photo-1528817466667-942353411fee", alt: "Home alarm system keypad on a wall" },
  ctaImg: { id: "photo-1633194883650-df448a10d554", alt: "" },
  overlay: { icon: ShieldCheck, name: "Your Security Co.", cat: "Security system installer", actions: "Call · Get quote · Website" },
  floatBig: { k: "$22.57", d: "Semrush CPC for \"home security seo services\"" },
  floatChip: { icon: BadgeCheck, text: "LSA eligible · Google Verified" },
  badge: "FREE SECURITY SEO AUDIT",
  marquee: ["Home security near me", "Alarm installation", "CCTV installers", "Google Maps", "Review growth", "Trust signals", "Local Services Ads", "Smart locks", "Monitoring", "AI search"],
  wa: "Hi CodedSEO, I'd like a free SEO audit for my home security company.",
  auditCta: "Get my free security SEO audit",
  whatIs: {
    title: "What Are Home Security SEO Services?",
    intro: "SEO for home security companies is about earning the homeowner's trust before the first call. It rests on three parts working together.",
    pillars: [
      { t: "Google Business Profile", d: "Your listing on Search and Maps as a service-area business: categories, service areas, services, photos of real installs, reviews and the call button." },
      { t: "Service & town pages", d: "A page for each service (alarms, cameras, smart locks, monitoring) and each main town, with real job photos and clear next steps." },
      { t: "Trust & reputation", d: "Licences, insurance, certified brands, warranty terms and reviews, plus consistent listings on Apple Maps, Bing, Yelp and the BBB." },
    ],
  },
  why: {
    eyebrow: "Why security SEO is different",
    title: "Homeowners Check Trust Before They Let Anyone Install a Camera",
    paras: [
      "A home security purchase is personal. People are inviting a stranger to wire their home, see their floor plan and hold their alarm codes. They compare reviews, look for licences and certifications, and check how long a company has been around before they book a site survey.",
      "Clicks are also expensive in this industry, so a business that ranks organically and in the Map Pack has a real cost advantage. SEO for home security companies is about winning those searches with [organic SEO](/services/organic-seo) and showing proof of trust the moment someone lands on your page.",
    ],
  },
  factsTitle: "Security SEO at a glance",
  facts: [
    { k: "LSA", d: "Home security is an eligible Google Local Services Ads category in the US" },
    { k: "Verified", d: "Businesses that pass Google's screening can show the Google Verified badge" },
    { k: "$22.57", d: "Semrush CPC for \"home security seo services\": clicks here are expensive" },
    { k: "100 / mo", d: "Combined US searches for our 4 target keywords (Semrush)" },
  ],
  sources: [
    { label: "Google Ads Help: Local Services Ads categories", url: "https://support.google.com/adwords/answer/6224841" },
    { label: "Google Business Profile Help: service-area businesses", url: "https://support.google.com/business/answer/10514137?hl=en" },
  ],
  searches: {
    title: "The Searches Homeowners Actually Use",
    intro: "Every type of search needs its own page. Swap [town] for the places you serve and you have the start of a keyword plan.",
    rows: [
      ["Urgent", "home security near me, security company near me, alarm repair near me", "Google Business Profile + fast homepage"],
      ["Install", "security camera installation [town], CCTV installers near me", "One page per service"],
      ["Smart home", "smart lock installation, video doorbell install [town]", "Smart-home security pages"],
      ["Monitoring", "home alarm monitoring [town], 24/7 monitoring service", "Monitoring plans and pricing page"],
      ["Commercial", "business security systems [town], access control installer", "Commercial security page"],
      ["Comparison", "best home security company [town], [brand] installer near me", "Brands, reviews and why-us pages"],
    ],
  },
  guide: {
    title: "How to Do SEO for a Home Security Company in 7 Steps",
    intro: "Doing it yourself? Start here. These are the steps we follow for security clients, in the order that brings booked installs fastest.",
    steps: STEPS,
  },
  checklists: {
    title: "Google Business Profile and Website Checklist for Security Companies",
    intro: "Go through both lists. Every unchecked item is a homeowner calling a competitor.",
    left: { t: "Google Business Profile", items: [
      "Primary category that matches your work (for example security system supplier or installer)",
      "Address hidden if customers don't visit you, with your real service areas listed",
      "Every service listed: alarms, cameras, doorbells, smart locks, monitoring",
      "Photos of real installations, vans and team, not stock images",
      "A local phone number that is answered, the same one used on your website",
      "Accurate hours, plus emergency or monitoring availability if you offer it",
      "Weekly posts: recent installs, seasonal tips, new products",
      "Replies to every review within a day or two",
    ] },
    right: { t: "Your website", items: [
      "A page for each service and each main town",
      "Licence and insurance details where customers can see them",
      "Brands you install and any certifications",
      "Warranty and monitoring contract terms in plain English",
      "Quote form with no more than 3–4 fields",
      "Click-to-call button visible on every phone screen",
      "Real reviews and installation photos on the page",
      "LocalBusiness schema with the same name and phone as Google",
    ] },
  },
  challengesTitle: "Why Home Security Companies Lose Customers on Google",
  challenges: [
    { icon: Megaphone, t: "Paying high prices per click", d: "Ads in home security are expensive. Relying only on paid clicks makes every booked survey cost more than it should." },
    { icon: MapPinOff, t: "Not showing in the Map Pack", d: "National brands and competitors with more reviews take the top three spots, even if you install faster and better." },
    { icon: ShieldCheck, t: "Weak trust signals", d: "No licence, insurance, brands or real install photos on the site, so homeowners hesitate and keep looking." },
    { icon: Layers, t: "One page for every service", d: "A single \"services\" page can't rank for cameras, alarms, smart locks and monitoring in every town you cover." },
    { icon: Sparkles, t: "Invisible in AI answers", d: "When someone asks ChatGPT or Google AI Overviews for a reliable alarm installer nearby, AI tools name the companies they can verify. Read how [AI SEO](/blog/what-is-ai-seo) changes that." },
    { icon: PhoneOff, t: "Calls nobody tracks", d: "Without call tracking you can't tell which page or search produced a booked survey, so marketing money goes to the wrong place." },
  ],
  mistakesTitle: "5 Home Security SEO Mistakes That Cost Installs",
  mistakes: [
    { t: "Virtual offices to appear in more towns", d: "Fake or virtual addresses break Google's guidelines and can get your profile suspended. Use service areas instead." },
    { t: "Keyword-stuffed business names", d: "Adding \"Best Alarm & CCTV Installers\" to your Google name breaks the guidelines. Use your real business name." },
    { t: "Stock photos everywhere", d: "Homeowners want to see your work and your team. Real install photos build more trust than generic security images." },
    { t: "Hiding prices and contract terms", d: "Unclear monitoring contracts make people nervous. Clear starting prices and terms get more calls, not fewer." },
    { t: "Copy-paste town pages", d: "Pages that only swap the town name are thin content. Each needs real jobs, local details and its own photos." },
  ],
  services: {
    title: "SEO for Home Security Companies, Done for You",
    intro: "Want a home security SEO team to handle it? Pick one service or combine them. Every plan starts with the same free audit.",
    items: [
      { icon: MapPin, t: "Google Business Profile for Installers", d: "Service-area setup, categories, services, real install photos, posts and a review system.", href: "/services" },
      { icon: Camera, t: "Service & Town Pages", d: "A page for each service and main town, with real jobs and clear calls to action.", href: "/services/organic-seo" },
      { icon: Star, t: "Review Generation", d: "Review requests by text after every install, plus replies that build trust.", href: "/services" },
      { icon: Wrench, t: "Technical SEO & Speed", d: "Fast mobile pages, click-to-call, LocalBusiness schema and clean indexing.", href: "/free-audit" },
      { icon: Search, t: "AI SEO for Local Searches", d: "Entity, review and listing work so ChatGPT and AI Overviews can recommend you.", href: "/blog/what-is-ai-seo" },
      { icon: Link2, t: "Citations & Trust Links", d: "Consistent listings on maps, BBB and trade directories, plus links from local partners.", href: "/services" },
    ],
  },
  segments: {
    title: "Security Businesses We Work With",
    items: [
      { icon: Bell, t: "Alarm installers", d: "Burglar and fire alarm systems" },
      { icon: Camera, t: "CCTV & camera installers", d: "Home and business cameras" },
      { icon: Lock, t: "Smart lock & doorbell", d: "Smart-home security installs" },
      { icon: Shield, t: "Monitoring companies", d: "24/7 alarm monitoring plans" },
      { icon: Building2, t: "Commercial security", d: "Access control and offices" },
      { icon: KeyRound, t: "Security locksmiths", d: "High-security locks and safes" },
    ],
  },
  packagesTitle: "Home Security SEO Packages With Clear Monthly Prices",
  packageFor: ["Single-office installers starting with SEO", "Installers covering several towns or selling monitoring", "Regional and multi-location security companies"],
  ctaBand: { title: "See Where Your Security Company Ranks Today", text: "Our free audit checks your Map Pack position across your service area, your Google profile and trust signals, and the three competitors taking your calls." },
  process: [
    { t: "Week 1 · Audit", d: "Map Pack scan across your service area, profile review, trust-signal check and site speed." },
    { t: "Weeks 2–3 · Plan", d: "A keyword map by service and town, plus a written fix list you approve before we start." },
    { t: "Weeks 3–10 · Build", d: "Profile fixes, service and town pages, review requests, citations and trust links, all logged." },
    { t: "Week 12+ · Scale", d: "More towns, commercial and smart-home pages, and AI search work based on what books surveys." },
  ],
  kpisTitle: "How to Know Your Security SEO Is Working",
  kpis: [
    { k: "Calls", d: "Calls from Google Business Profile and the website, tracked separately" },
    { k: "Quotes", d: "Quote and site-survey requests, by page" },
    { k: "Map Pack", d: "Position for \"home security near me\" across your service area" },
    { k: "Rankings", d: "Service and town keywords, week by week" },
    { k: "Reviews", d: "New reviews per month and average rating" },
    { k: "AI visibility", d: "Whether ChatGPT and AI Overviews name your company" },
  ],
  compareFocus: "Security and home-service searches only",
  compareRow: ["Pages", "A page for each service and town", "One services page for everything"],
  ctas: [
    { title: "Want us to do these 7 steps for you?", text: "We handle the profile, pages, reviews and tracking. You keep installing.", wa: "Hi CodedSEO, I want help with SEO for my home security company." },
    { title: "Not sure if you're making these mistakes?", text: "Our free audit checks your Google profile, trust signals and website and tells you in 48 hours.", wa: "Hi CodedSEO, can you check my security company for these SEO mistakes?", cta: "Check my security website" },
    { title: "Ready for more booked installs from Google?", text: "Talk to a strategist today. No contract, no pressure.", wa: "Hi CodedSEO, I want more installs from Google for my security company." },
  ],
  faqTitle: "Home Security SEO Questions, Answered",
  faqs: FAQS,
  final: { title: "Ready for More Booked Installs?", text: "Get a free audit and see what's keeping your security company out of the Map Pack." },
};
