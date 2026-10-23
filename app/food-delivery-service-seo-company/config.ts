import {
  Bike, Truck, ChefHat, Package, Store, Smartphone, MapPin, Star, Search, Wrench, Link2, PenTool,
  Percent, MapPinOff, PhoneOff, Layers, Sparkles, BarChart3, UtensilsCrossed, Clock,
} from "lucide-react";
import type { IndustryConfig } from "@/lib/industry-config";

/* Keywords ("food delivery service seo company" sheet, Semrush US):
   food delivery service seo company (260, KD 6, commercial) · food delivery service seo agency (40, KD 5)
   food delivery service seo services (40) · food delivery service seo experts (30) · food delivery service seo (10) */

export const STEPS = [
  { t: "Claim and complete your Google Business Profile", d: "Choose the category that matches what you really are (a restaurant, a meal-delivery service, a caterer), add delivery areas, hours for each service and real photos of your food and packaging." },
  { t: "Set your own ordering link as the preferred option", d: "Google shows third-party providers and your own ordering links under the profile. Add your direct ordering link and mark it as preferred for delivery and pickup so more orders skip the commission." },
  { t: "Publish your menu where Google can read it", d: "Use the Business Profile menu editor and a crawlable menu page on your site, with item names, descriptions and prices that match what customers actually order." },
  { t: "Build a page for every area you deliver to", d: "\"Food delivery in Frisco\" and \"late-night delivery near campus\" are different searches. A short page per area, with delivery times and minimum order, beats one generic page." },
  { t: "Turn every delivered order into a review request", d: "Add a review link to the receipt, the bag insert or the confirmation text. Reviews that mention the dish and the delivery speed help you rank for both." },
  { t: "Make ordering one tap on mobile", d: "Most delivery searches happen on a phone at mealtime. A sticky order button, Apple/Google Pay and a checkout with as few fields as possible convert far better than a long form." },
  { t: "Add Restaurant and Menu schema, then track orders by source", d: "Structured data tells Google your cuisine, hours, delivery areas and menu. Order tracking shows which pages and searches bring direct orders." },
];

export const FAQS = [
  { q: "What does a food delivery service SEO company do?", a: "A food delivery service SEO company makes your business show up when people search for food delivery nearby, then turns those searches into direct orders. That covers your Google Business Profile and ordering links, menu and area pages, reviews, local listings and a fast mobile ordering flow." },
  { q: "Can SEO reduce how much we pay delivery apps?", a: "It can shift part of your orders to your own channel. Google lets you add your own ordering link next to third-party providers and mark it as the preferred option for delivery or pickup, and good rankings for your own site send people straight to it instead of an app." },
  { q: "Do ghost kitchens and virtual brands need SEO?", a: "Yes, but the setup is different. A delivery-only kitchen usually has no dining room, so Google profile rules, categories and service areas have to be handled carefully. We set it up within Google's guidelines and build the website pages each brand needs." },
  { q: "How long does it take to rank for food delivery searches?", a: "Profile fixes, menu updates and review growth often show movement in 4 to 8 weeks. Menu changes on Google can take 24 to 48 hours to appear. Ranking area pages for competitive delivery searches usually takes 3 to 6 months." },
  { q: "How much does food delivery SEO cost?", a: "Our SEO packages start at $199 per month for Starter and $499 per month for Growth. A single-location delivery business usually starts on Starter; businesses covering several areas or brands need Growth for the extra pages and links." },
  { q: "Should I hire a food delivery SEO agency or do it myself?", a: "You can claim your profile, add your ordering link and ask for reviews yourself. Hire a food delivery SEO agency or SEO experts when you want area pages, schema, order tracking and links handled for you, or when competitors keep outranking you." },
  { q: "What should our ordering website have for SEO?", a: "A crawlable menu with prices, a page for each delivery area, delivery times and minimum order, a one-tap order button on mobile, real reviews, Restaurant and Menu schema, and the same name, address and phone as your Google profile." },
  { q: "Do you guarantee food delivery SEO results?", a: "No one controls Google, so we never promise a specific ranking. We do offer a 90-day results guarantee: if you don't see measurable ranking improvements, we keep working for free until you do." },
];

export const CFG: IndustryConfig = {
  crumb: "Food Delivery Businesses",
  h1: { pre: "Food Delivery Service", box: "SEO", post: "Company", sub: "More Direct Orders,", subHl: "Fewer App Fees" },
  rotate: ["food delivery near me", "late night delivery", "order food online", "healthy meal delivery", "pizza delivery near me"],
  lead: "CodedSEO is a food delivery service SEO company for restaurants, ghost kitchens and local delivery brands. We help you rank on Google and in the Map Pack for delivery searches, then send hungry customers to your own ordering page instead of an app that takes a cut of every order.",
  heroPoints: ["Built for \"delivery near me\" searches", "No contracts, no hidden fees", "Your own ordering link first", "More direct orders, not just clicks"],
  heroImg: { id: "photo-1617347454431-f49d7ff5c3b1", alt: "Food delivery driver on a scooter riding through the city at night" },
  sideImg: { id: "photo-1760888549280-4aef010720bd", alt: "Hand holding a smartphone with a food ordering app open" },
  ctaImg: { id: "photo-1598769398698-bab7f1b4cadd", alt: "" },
  overlay: { icon: Bike, name: "Your Kitchen", cat: "Food delivery · Open until 1 am", actions: "Order online · Call · Menu" },
  floatBig: { k: "24–48h", d: "Time for menu changes to show on Google" },
  floatChip: { icon: Smartphone, text: "Order online · preferred" },
  badge: "FREE DELIVERY SEO AUDIT",
  marquee: ["Delivery near me", "Order online", "Google Maps", "Menu SEO", "Review growth", "Direct orders", "Ghost kitchens", "AI search", "Area pages", "Mobile checkout"],
  wa: "Hi CodedSEO, I'd like a free SEO audit for my food delivery business.",
  auditCta: "Get my free delivery SEO audit",
  whatIs: {
    title: "What Does a Food Delivery Service SEO Company Do?",
    intro: "Food delivery SEO is about being found at mealtime and getting the order on your own terms. It rests on three parts working together.",
    pillars: [
      { t: "Google Business Profile & ordering", d: "Your listing on Search and Maps, with categories, delivery areas, hours, photos, reviews and the ordering options Google shows under your name, including your own link." },
      { t: "Menu & area pages", d: "A crawlable menu and a page for each area you deliver to, so Google can match you to searches for a dish, a cuisine or a neighbourhood." },
      { t: "Reviews & listings", d: "Fresh reviews that mention food and delivery speed, plus consistent listings on Apple Maps, Bing, Yelp and food directories." },
    ],
  },
  why: {
    eyebrow: "Why delivery SEO is different",
    title: "Delivery Searches Happen at Mealtime, on a Phone, in a Hurry",
    paras: [
      "Someone searching \"food delivery near me\" at 8 pm is going to order in the next few minutes. They pick from the Map Pack, glance at photos and ratings, and tap whichever ordering button loads fastest. Long articles don't win that moment; a complete profile, a fast menu and a one-tap order button do.",
      "Delivery apps are part of the picture, and many customers will keep using them. The goal of SEO for food delivery services is to win the customers who search Google first and send them to your own ordering page, where you keep the margin and the customer data.",
    ],
  },
  factsTitle: "Delivery SEO at a glance",
  facts: [
    { k: "Preferred", d: "Google lets you mark your own ordering link as preferred for delivery or pickup" },
    { k: "24–48h", d: "Time Google says menu changes can take to appear on Maps and Search" },
    { k: "260 / mo", d: "US searches for \"food delivery service seo company\" (Semrush)" },
    { k: "KD 6", d: "Keyword difficulty for that search, so a strong page can rank" },
  ],
  sources: [
    { label: "Google Business Profile Help: online ordering", url: "https://support.google.com/business/answer/10842217" },
    { label: "Google Business Profile Help: menu editor", url: "https://support.google.com/business/answer/9455840?hl=en" },
  ],
  searches: {
    title: "The Searches Hungry Customers Actually Use",
    intro: "Each type of search needs its own page or profile feature. Swap [area] and [dish] for your own and you have the start of a keyword plan.",
    rows: [
      ["Urgent", "food delivery near me, delivery open now, late night food delivery", "Google Business Profile + fast ordering page"],
      ["Dish or cuisine", "[dish] delivery [area], best [cuisine] delivery near me", "Menu page with item names and photos"],
      ["Area", "food delivery in [area], [area] takeaway delivery", "One page per delivery area"],
      ["Diet", "vegan delivery [area], gluten free food delivery, healthy meal delivery", "Pages for each diet you genuinely serve"],
      ["Offers", "free delivery [area], food delivery deals near me", "An offers page and Google posts"],
      ["Catering & office", "office lunch delivery [area], catering delivery near me", "A catering and corporate orders page"],
    ],
  },
  guide: {
    title: "How to Do SEO for a Food Delivery Service in 7 Steps",
    intro: "Doing it yourself? Start here. These are the steps we follow for delivery clients, in the order that brings direct orders fastest.",
    steps: STEPS,
  },
  checklists: {
    title: "Google Business Profile and Ordering Website Checklist",
    intro: "Go through both lists. Every unchecked item is an order going to an app or a competitor.",
    left: { t: "Google Business Profile", items: [
      "Primary category that matches your business, not a keyword you want to rank for",
      "Delivery areas and separate hours for delivery and pickup",
      "Your own ordering link added and set as preferred",
      "Menu added with sections, items, descriptions and prices",
      "Real photos of dishes and packaging, updated monthly",
      "Attributes filled in: delivery, no-contact delivery, pickup",
      "A phone number that is answered during service hours",
      "Weekly posts: new dishes, offers, holiday hours",
    ] },
    right: { t: "Your ordering website", items: [
      "Crawlable menu (text, not only a PDF or image)",
      "Sticky order button visible on every phone screen",
      "Checkout with as few fields as possible, plus wallet payments",
      "A page for each delivery area with times and minimum order",
      "Delivery fees and minimum order shown before checkout",
      "Real reviews on the page, linked to your Google profile",
      "Pages that load in under 3 seconds on mobile data",
      "Restaurant and Menu schema with the same name and phone as Google",
    ] },
  },
  challengesTitle: "Why Delivery Businesses Lose Orders on Google",
  challenges: [
    { icon: Percent, t: "Paying commission on every order", d: "When the only way to order is through an app, every customer costs a commission, even the ones who searched for you by name." },
    { icon: MapPinOff, t: "Missing from the Map Pack", d: "Competitors with more photos, fresher reviews and complete menus take the top three spots at mealtime." },
    { icon: PhoneOff, t: "Slow or broken ordering", d: "A menu that loads as a PDF, a checkout that asks for an account, or a page that times out on mobile sends people straight back to the app." },
    { icon: Layers, t: "One page for every area", d: "A single homepage can't rank for every neighbourhood you deliver to. Google needs a clear page for each one." },
    { icon: Sparkles, t: "Invisible in AI answers", d: "When someone asks ChatGPT or Google AI Overviews where to order a dish nearby, AI tools name the places they can verify from menus, reviews and listings." },
    { icon: BarChart3, t: "No idea where orders come from", d: "Without tracking you can't tell which orders came from Google, the app or a flyer, so marketing money goes to the wrong place." },
  ],
  mistakesTitle: "5 Food Delivery SEO Mistakes That Cost Orders",
  mistakes: [
    { t: "Menu only as an image or PDF", d: "Google and AI tools read text. A photo of your menu is better than nothing, but a text menu page ranks for dish searches." },
    { t: "Letting apps be the only ordering link", d: "If your own link isn't on your Google profile, customers who searched for you go to an app by default." },
    { t: "Keyword-stuffed business names", d: "Adding \"Best Cheap Food Delivery\" to your Google name breaks Google's guidelines. Use your real business name." },
    { t: "Copy-paste area pages", d: "Pages that only swap the area name are thin content. Each needs real details: delivery times, landmarks, popular orders." },
    { t: "Ignoring bad reviews about delivery", d: "Cold food and late orders get mentioned. Reply to every review, fix the cause, and future customers will see that you care." },
  ],
  services: {
    title: "SEO for Food Delivery Services, Done for You",
    intro: "Want food delivery service SEO experts to handle it? Pick one service or combine them. Every plan starts with the same free audit.",
    items: [
      { icon: MapPin, t: "Google Business Profile & Ordering", d: "Categories, delivery areas, menu, photos, posts and your own ordering link set as preferred.", href: "/services" },
      { icon: UtensilsCrossed, t: "Menu & Dish Pages", d: "Crawlable menu and pages for your best-selling dishes and cuisines, written for how people search.", href: "/services/organic-seo" },
      { icon: Star, t: "Review Generation", d: "Review requests on receipts, bag inserts and texts, plus replies that build trust.", href: "/services" },
      { icon: Wrench, t: "Technical SEO & Speed", d: "Fast mobile pages, one-tap ordering, Restaurant and Menu schema and clean indexing.", href: "/free-audit" },
      { icon: Search, t: "AI SEO for Food Searches", d: "Menu, review and listing work so ChatGPT, Gemini and Google AI Overviews can recommend you.", href: "/blog/what-is-ai-seo" },
      { icon: Link2, t: "Local Citations & Links", d: "Consistent listings on maps and food directories, plus links from local blogs and events.", href: "/services" },
    ],
  },
  segments: {
    title: "Food Delivery Businesses We Work With",
    items: [
      { icon: Store, t: "Restaurants with delivery", d: "Own drivers or app partners" },
      { icon: ChefHat, t: "Ghost kitchens", d: "Delivery-only and virtual brands" },
      { icon: Package, t: "Meal-prep delivery", d: "Weekly and subscription meals" },
      { icon: Truck, t: "Local delivery services", d: "Courier and same-day delivery" },
      { icon: UtensilsCrossed, t: "Catering delivery", d: "Office lunches and events" },
      { icon: Clock, t: "Late-night food", d: "Pizza, burgers and snacks" },
    ],
  },
  packagesTitle: "Food Delivery SEO Packages With Clear Monthly Prices",
  packageFor: ["Single-location delivery businesses", "Delivery across several areas or brands", "Chains and multi-brand kitchens"],
  ctaBand: { title: "See Where Your Delivery Business Ranks Today", text: "Our free audit checks your Map Pack position across your delivery areas, your Google profile and ordering links, and the three competitors taking your orders." },
  process: [
    { t: "Week 1 · Audit", d: "Map Pack scan across your delivery area, profile and ordering-link review, menu and site speed check." },
    { t: "Weeks 2–3 · Plan", d: "A keyword map by dish, cuisine and area, plus a written fix list you approve before we start." },
    { t: "Weeks 3–10 · Build", d: "Profile fixes, menu and area pages, review requests, citations and local links, all logged where you can see them." },
    { t: "Week 12+ · Scale", d: "More areas, catering and diet pages, and AI search work based on what brings direct orders." },
  ],
  kpisTitle: "How to Know Your Delivery SEO Is Working",
  kpis: [
    { k: "Direct orders", d: "Orders through your own ordering link, by page and source" },
    { k: "Calls", d: "Phone orders from Google and from the website" },
    { k: "Map Pack", d: "Position for \"food delivery near me\" across your delivery area" },
    { k: "Menu views", d: "How often people open your menu on Google" },
    { k: "Reviews", d: "New reviews per month and average rating" },
    { k: "AI visibility", d: "Whether ChatGPT and AI Overviews name your business" },
  ],
  compareFocus: "Food and delivery searches only",
  compareRow: ["Pages", "Menu, dish and area pages", "One homepage for everything"],
  ctas: [
    { title: "Want us to do these 7 steps for you?", text: "We handle the profile, menu, pages, reviews and tracking. You keep cooking.", wa: "Hi CodedSEO, I want help with SEO for my food delivery business." },
    { title: "Not sure if you're making these mistakes?", text: "Our free audit checks your Google profile, menu and ordering flow and tells you in 48 hours.", wa: "Hi CodedSEO, can you check my food delivery business for these SEO mistakes?", cta: "Check my delivery website" },
    { title: "Ready for more direct orders from Google?", text: "Talk to a strategist today. No contract, no pressure.", wa: "Hi CodedSEO, I want more direct orders from Google." },
  ],
  faqTitle: "Food Delivery SEO Questions, Answered",
  faqs: FAQS,
  final: { title: "Ready for More Direct Orders?", text: "Get a free audit and see what's keeping your delivery business out of the Map Pack." },
};
