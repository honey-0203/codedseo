import {
  Coffee, Cat, Dice5, Croissant, Sun, Store, MapPin, Star, Search, Wrench, Link2, Camera,
  MapPinOff, PhoneOff, Layers, Sparkles, BarChart3, Clock, UtensilsCrossed,
} from "lucide-react";
import type { IndustryConfig } from "@/components/industry/IndustryPage";

/* Keywords ("cafe seo marketing agency" sheet, Semrush US):
   cafe seo marketing agency (140, KD 2) · seo for cafes (50, KD 13) · cafe seo (40, KD 0)
   seo for cat cafes (30) · seo cafe (20) · local seo for cafes and restaurants (10)
   seo for board game cafes (10) · seo for cafe (10) */

export const STEPS = [
  { t: "Pick the right Google Business Profile category", d: "\"Coffee shop\" or \"Cafe\" as your primary category, with secondary ones only for what you really are, such as bakery or breakfast restaurant. Categories decide which searches you can appear for." },
  { t: "Add your menu with the menu editor", d: "Google's menu editor lets food and drink businesses add sections, items, descriptions and prices. Changes can take 24 to 48 hours to show, so update it before a new seasonal menu launches." },
  { t: "Fill in the attributes people filter by", d: "Wi-Fi, outdoor seating, dog-friendly, vegan options, wheelchair access. People searching \"cafe with wifi near me\" are matched on these details." },
  { t: "Post real photos every month", d: "The counter, the latte art, the window seat, the cat on the sofa. Fresh, real photos get more views than stock images and show Google the profile is active." },
  { t: "Ask regulars for reviews that mention what they order", d: "A small table card or receipt QR code works. Reviews that say \"best flat white\" or \"quiet place to work\" help you rank for those searches." },
  { t: "Give your website one page per thing people search for", d: "Menu, brunch, coffee beans, events, private hire, and a page for each location. Each one can rank for its own search." },
  { t: "Add CafeOrCoffeeShop schema and keep details identical everywhere", d: "Structured data tells Google your hours, menu and location. Keep the same name, address and phone on Google, Apple Maps, Yelp and Instagram." },
];

export const FAQS = [
  { q: "What does a cafe SEO marketing agency do?", a: "A cafe SEO marketing agency helps your coffee shop show up when people nearby search for a cafe, a coffee or a place to work or meet, and turns those searches into visits. That covers your Google Business Profile, menu, photos and reviews, local listings and a website built around what people search for." },
  { q: "Is SEO worth it for a single cafe?", a: "Usually yes, because most cafe customers live or work nearby and decide on their phone. Being in the top three Map Pack results for \"cafe near me\" and \"coffee shop open now\" in your area brings walk-ins every day without paying per click." },
  { q: "Do cat cafes and board game cafes need different SEO?", a: "They need the same foundations plus pages for what makes them special: booking slots, visit rules, game library or resident cats, pricing and events. People search for these specifically, often from further away, so those pages can bring visitors from across the city." },
  { q: "How long does cafe SEO take to show results?", a: "Profile, menu and photo updates often show movement in 4 to 8 weeks. Menu changes on Google can take 24 to 48 hours to appear. Organic rankings for your website usually take 3 to 6 months." },
  { q: "How much does SEO for cafes cost?", a: "Our SEO packages start at $199 per month for Starter and $499 per month for Growth. A single cafe usually starts on Starter; groups with several locations or a roastery and online shop usually need Growth." },
  { q: "Can you help with local SEO for cafes and restaurants together?", a: "Yes. Cafes that also serve brunch or dinner need the right categories, menus for each service and pages for each meal people search for. We plan it so the pages support each other instead of competing." },
  { q: "What should a cafe website have for SEO?", a: "A text menu with prices, opening hours, a map and parking info, pages for brunch, events and private hire, real photos, reviews, a page per location, and CafeOrCoffeeShop schema with the same details as your Google profile." },
  { q: "Do you guarantee cafe SEO results?", a: "No one controls Google, so we never promise a specific ranking. We do offer a 90-day results guarantee: if you don't see measurable ranking improvements, we keep working for free until you do." },
];

export const CFG: IndustryConfig = {
  crumb: "Cafes & Coffee Shops",
  h1: { pre: "Cafe SEO", box: "Marketing", post: "Agency", sub: "Turn \"Cafe Near Me\" Into", subHl: "Full Tables" },
  rotate: ["cafe near me", "coffee shop open now", "brunch near me", "cafe with wifi", "cat cafe near me"],
  lead: "CodedSEO is a cafe SEO marketing agency for coffee shops, brunch spots and themed cafes. We get you into the Google Map Pack and onto page one for the searches your neighbours make every morning, with a menu, photos and reviews that make them walk in.",
  heroPoints: ["Built for \"cafe near me\" searches", "No contracts, no hidden fees", "Menu, photos and reviews done right", "More walk-ins, not just views"],
  heroImg: { id: "photo-1766767164066-d2f4571e75d1", alt: "Barista making coffee behind the counter in a cafe" },
  sideImg: { id: "photo-1766250343186-847200b11032", alt: "Barista making coffee with an espresso machine" },
  ctaImg: { id: "photo-1766767164066-d2f4571e75d1", alt: "" },
  overlay: { icon: Coffee, name: "Your Cafe", cat: "Coffee shop · Open now", actions: "Menu · Directions · Call" },
  floatBig: { k: "KD 2", d: "Difficulty for \"cafe seo marketing agency\"" },
  floatChip: { icon: Camera, text: "New photos posted weekly" },
  badge: "FREE CAFE SEO AUDIT",
  marquee: ["Cafe near me", "Coffee shop open now", "Google Maps", "Menu SEO", "Photo updates", "Review growth", "Brunch", "Cat cafes", "Board game cafes", "AI search"],
  wa: "Hi CodedSEO, I'd like a free SEO audit for my cafe.",
  auditCta: "Get my free cafe SEO audit",
  whatIs: {
    title: "What Is SEO for Cafes?",
    intro: "SEO for cafes means being the cafe people pick when they search on the way to work, on a lunch break or on a Sunday morning. It rests on three parts.",
    pillars: [
      { t: "Google Business Profile", d: "Your listing on Search and Maps: categories, hours, menu, attributes like Wi-Fi and outdoor seating, photos and reviews. For a cafe it does most of the work." },
      { t: "Website & menu", d: "A fast site with a text menu, opening hours, location details and pages for brunch, events and private hire, so Google can match you to each search." },
      { t: "Reputation & listings", d: "Reviews that mention your coffee and atmosphere, and the same details on Apple Maps, Yelp, TripAdvisor and Instagram." },
    ],
  },
  why: {
    eyebrow: "Why cafe SEO is different",
    title: "Cafe Customers Decide in Seconds, Usually Within Walking Distance",
    paras: [
      "Nobody plans a coffee a week ahead. People search \"coffee near me\" or \"cafe open now\", look at the top three results, check the photos and walk to the one that looks right. Distance matters, but so do your photos, rating, opening hours and whether Google knows you have Wi-Fi or vegan milk.",
      "That's why SEO for cafes is mostly about a complete, active Google profile and a website that backs it up. A few well-chosen pages (menu, brunch, events, each location) beat dozens of blog posts.",
    ],
  },
  factsTitle: "Cafe SEO at a glance",
  facts: [
    { k: "Menu", d: "Google's menu editor lets food and drink businesses add sections, items and prices" },
    { k: "24–48h", d: "Time Google says menu changes can take to appear on Maps and Search" },
    { k: "140 / mo", d: "US searches for \"cafe seo marketing agency\" (Semrush)" },
    { k: "KD 2", d: "Keyword difficulty for that search, so a strong page can rank" },
  ],
  sources: [
    { label: "Google Business Profile Help: menu editor", url: "https://support.google.com/business/answer/9455840?hl=en" },
  ],
  searches: {
    title: "The Searches Coffee Lovers Actually Use",
    intro: "Every type of search needs its own page or profile detail. Swap [area] for your own and you have a starting keyword plan.",
    rows: [
      ["Right now", "cafe near me, coffee shop open now, coffee near me", "Google Business Profile + accurate hours"],
      ["Work & study", "cafe with wifi [area], quiet cafe to work, laptop friendly cafe", "Attributes + a \"work from here\" page"],
      ["Food", "brunch near me, breakfast cafe [area], best pastries [area]", "Brunch and menu pages with photos"],
      ["Diet", "vegan cafe [area], gluten free cafe near me, oat milk coffee", "Menu tags and diet pages"],
      ["Themed", "cat cafe [city], board game cafe near me", "Booking, rules and pricing pages"],
      ["Events & hire", "cafe for private party [area], coffee catering", "Events and private hire page"],
    ],
  },
  guide: {
    title: "How to Do SEO for a Cafe in 7 Steps",
    intro: "Doing it yourself? Start here. These are the steps we follow for cafe clients, in the order that brings walk-ins fastest.",
    steps: STEPS,
  },
  checklists: {
    title: "Google Business Profile and Website Checklist for Cafes",
    intro: "Go through both lists. Every unchecked item is a customer walking into the cafe next door.",
    left: { t: "Google Business Profile", items: [
      "Primary category \"Coffee shop\" or \"Cafe\"; secondary only for what you really offer",
      "Exact hours, including holidays and early openings",
      "Menu added with sections, items, descriptions and prices",
      "Attributes: Wi-Fi, outdoor seating, dog-friendly, vegan options, accessibility",
      "Real photos of the counter, seating, drinks and food, updated monthly",
      "A phone number that is answered during opening hours",
      "Weekly posts: seasonal drinks, events, new pastries",
      "Replies to every review within a day or two",
    ] },
    right: { t: "Your website", items: [
      "Text menu with prices (not only a PDF or photo)",
      "Opening hours, address, map and parking info on every page",
      "Pages for brunch, events, private hire and coffee beans if you sell them",
      "A page for each location with its own photos and hours",
      "Booking page for themed cafes (cat cafe, board game cafe)",
      "Real reviews and Instagram photos on the page",
      "Pages that load in under 3 seconds on mobile data",
      "CafeOrCoffeeShop schema with the same name and phone as Google",
    ] },
  },
  challengesTitle: "Why Cafes Lose Customers on Google",
  challenges: [
    { icon: MapPinOff, t: "Not in the top three on Maps", d: "A chain or a newer cafe with more photos and reviews takes the Map Pack, even if your coffee is better." },
    { icon: Clock, t: "Wrong or missing hours", d: "If Google says you're closed, or doesn't know you open at 7 am, early customers go elsewhere and leave annoyed reviews." },
    { icon: Camera, t: "Old or stock photos", d: "People choose a cafe by how it looks. Dark, outdated or stock photos lose clicks to places that show their real space." },
    { icon: PhoneOff, t: "Menu nobody can read", d: "A blurry menu photo or a PDF that won't open on a phone sends people to the next result." },
    { icon: Sparkles, t: "Invisible in AI answers", d: "When someone asks ChatGPT or Google AI Overviews for a quiet cafe with Wi-Fi nearby, AI tools name the places they can verify from attributes and reviews." },
    { icon: BarChart3, t: "No idea what's working", d: "Without tracking calls, direction requests and menu views, you can't tell whether Instagram, Google or word of mouth fills your tables." },
  ],
  mistakesTitle: "5 Cafe SEO Mistakes That Cost Customers",
  mistakes: [
    { t: "Forgetting to update hours", d: "Holiday hours and early closures that aren't on Google lead to locked doors and one-star reviews." },
    { t: "Keyword-stuffed business names", d: "Adding \"Best Coffee & Brunch\" to your Google name breaks Google's guidelines. Use your real business name." },
    { t: "Menu only on Instagram", d: "Google can't read Instagram stories. Put a text menu on your website and in your Business Profile." },
    { t: "Ignoring attributes", d: "Leaving Wi-Fi, outdoor seating or vegan options blank means you can't be matched to searches that filter by them." },
    { t: "Copy-paste location pages", d: "Every location needs its own photos, hours and details. Pages that only swap the address are thin content." },
  ],
  services: {
    title: "SEO for Cafes, Done for You",
    intro: "Want a cafe SEO team to handle it? Pick one service or combine them. Every plan starts with the same free audit.",
    items: [
      { icon: MapPin, t: "Google Business Profile for Cafes", d: "Categories, hours, menu, attributes, photos and weekly posts, managed for you.", href: "/services" },
      { icon: UtensilsCrossed, t: "Menu & Page Building", d: "A crawlable menu plus pages for brunch, events, private hire and each location.", href: "/services/organic-seo" },
      { icon: Star, t: "Review Generation", d: "Table cards and receipt QR codes that bring in reviews mentioning your best drinks.", href: "/services" },
      { icon: Wrench, t: "Technical SEO & Speed", d: "Fast mobile pages, CafeOrCoffeeShop schema and clean indexing.", href: "/free-audit" },
      { icon: Search, t: "AI SEO for Local Searches", d: "Attribute, review and listing work so ChatGPT and AI Overviews can recommend your cafe.", href: "/blog/what-is-ai-seo" },
      { icon: Link2, t: "Local Listings & Links", d: "Consistent listings on maps and food guides, plus links from local blogs and events.", href: "/services" },
    ],
  },
  segments: {
    title: "Cafes and Coffee Shops We Work With",
    items: [
      { icon: Coffee, t: "Independent coffee shops", d: "Neighbourhood and specialty coffee" },
      { icon: Croissant, t: "Bakery cafes", d: "Pastries, bread and coffee" },
      { icon: Sun, t: "Brunch spots", d: "Breakfast and weekend crowds" },
      { icon: Cat, t: "Cat cafes", d: "Bookings, visits and adoptions" },
      { icon: Dice5, t: "Board game cafes", d: "Game nights and table bookings" },
      { icon: Store, t: "Multi-location cafes", d: "Small chains and roasteries" },
    ],
  },
  packagesTitle: "Cafe SEO Packages With Clear Monthly Prices",
  packageFor: ["Single cafes starting with SEO", "Cafes with several locations or an online shop", "Coffee chains and franchise groups"],
  ctaBand: { title: "See Where Your Cafe Ranks Today", text: "Our free audit checks your Map Pack position around your cafe, your Google profile, menu and photos, and the three competitors taking your customers." },
  process: [
    { t: "Week 1 · Audit", d: "Map Pack scan around your cafe, profile and menu review, photo and review check, site speed." },
    { t: "Weeks 2–3 · Plan", d: "A keyword map for coffee, food, work-friendly and themed searches, plus a fix list you approve." },
    { t: "Weeks 3–10 · Build", d: "Profile fixes, menu and location pages, review cards, citations and local links, all logged." },
    { t: "Week 12+ · Scale", d: "Events, private hire and new locations, plus AI search work based on what brings people in." },
  ],
  kpisTitle: "How to Know Your Cafe SEO Is Working",
  kpis: [
    { k: "Directions", d: "Direction requests from your Google profile" },
    { k: "Calls", d: "Calls for bookings, catering and questions" },
    { k: "Map Pack", d: "Position for \"cafe near me\" in a grid around your cafe" },
    { k: "Menu views", d: "How often people open your menu on Google" },
    { k: "Reviews", d: "New reviews per month and average rating" },
    { k: "AI visibility", d: "Whether ChatGPT and AI Overviews name your cafe" },
  ],
  compareFocus: "Cafe and food searches only",
  compareRow: ["Pages", "Menu, brunch, events and location pages", "One homepage for everything"],
  ctas: [
    { title: "Want us to do these 7 steps for you?", text: "We handle the profile, menu, photos, reviews and pages. You keep pouring.", wa: "Hi CodedSEO, I want help with SEO for my cafe." },
    { title: "Not sure if your cafe is making these mistakes?", text: "Our free audit checks your Google profile, menu and website and tells you in 48 hours.", wa: "Hi CodedSEO, can you check my cafe for these SEO mistakes?", cta: "Check my cafe" },
    { title: "Ready for fuller tables from Google?", text: "Talk to a strategist today. No contract, no pressure.", wa: "Hi CodedSEO, I want more customers for my cafe from Google." },
  ],
  faqTitle: "Cafe SEO Questions, Answered",
  faqs: FAQS,
  final: { title: "Ready for More Customers Walking In?", text: "Get a free audit and see what's keeping your cafe out of the Map Pack." },
};
