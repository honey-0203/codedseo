import { defineType, defineField, defineArrayMember } from "sanity";

/* ---------- Blog categories (listing page filters se match karti hain) ---------- */
export const BLOG_CATEGORIES = [
  "AI SEO",
  "SEO",
  "Content",
  "Technical SEO",
  "Local SEO",
  "Link Building",
];

/* ---------- CTA fields (Saved CTA aur CTA Box dono me same) ---------- */
const ctaFields = [
  defineField({ name: "heading", title: "Heading", type: "string" }),
  defineField({ name: "text", title: "Text", type: "text", rows: 3 }),
  defineField({ name: "buttonText", title: "Button Text", type: "string", initialValue: "Talk to Our SEO Experts" }),
  defineField({ name: "buttonLink", title: "Button Link", type: "string", initialValue: "/contact", description: "Jaise /contact, /free-audit ya pura https:// link" }),
  defineField({ name: "secondaryText", title: "Second Button Text (optional)", type: "string" }),
  defineField({ name: "secondaryLink", title: "Second Button Link (optional)", type: "string" }),
  defineField({
    name: "style", title: "Design", type: "string", initialValue: "dark",
    options: { list: [{ title: "Dark (black + green)", value: "dark" }, { title: "Light (green)", value: "light" }], layout: "radio", direction: "horizontal" },
  }),
];

/* ---------- Saved CTA: ek baar banao, har blog me use karo ---------- */
export const savedCta = defineType({
  name: "savedCta",
  title: "Saved CTA",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Naam (sirf aapke liye)", type: "string", validation: (R) => R.required(), description: "Jaise: Free Audit CTA, Book a Call CTA" }),
    ...ctaFields,
  ],
  preview: { select: { title: "name", subtitle: "heading" } },
});

/* ---------- Content ke beech me daalne wala CTA box ---------- */
const ctaBlock = defineType({
  name: "ctaBlock",
  title: "CTA Box",
  type: "object",
  fields: [
    defineField({
      name: "preset", title: "Saved CTA chuno", type: "reference", to: [{ type: "savedCta" }],
      description: "Saved CTA chunoge to wahi dikhega. Naya likhna ho to ise khali chhodo aur neeche bharo.",
    }),
    ...ctaFields,
  ],
  preview: {
    select: { heading: "heading", presetName: "preset.name" },
    prepare: ({ heading, presetName }) => ({ title: `CTA: ${presetName || heading || "(khali)"}` }),
  },
});

/* ---------- Pro Tip / Expert Insight / Note box ---------- */
const infoBox = defineType({
  name: "infoBox",
  title: "Tip / Insight Box",
  type: "object",
  fields: [
    defineField({
      name: "variant", title: "Type", type: "string", initialValue: "tip",
      options: { list: [{ title: "Pro Tip (orange)", value: "tip" }, { title: "Expert Insight (green)", value: "insight" }, { title: "Note (grey)", value: "note" }], layout: "radio", direction: "horizontal" },
    }),
    defineField({ name: "title", title: "Title", type: "string", description: "Khali chhodoge to Type ka naam aayega (Pro tip / Expert insight / Note)" }),
    defineField({ name: "text", title: "Text", type: "text", rows: 3, validation: (R) => R.required() }),
  ],
  preview: {
    select: { title: "title", variant: "variant", subtitle: "text" },
    prepare: ({ title, variant, subtitle }) => ({ title: `${variant === "insight" ? "Insight" : variant === "note" ? "Note" : "Tip"}: ${title || ""}`, subtitle }),
  },
});

/* ---------- Table: Google Doc / Excel se copy karke paste karo ---------- */
const tableBlock = defineType({
  name: "tableBlock",
  title: "Table",
  type: "object",
  fields: [
    defineField({
      name: "rows", title: "Table paste karo", type: "text", rows: 8,
      description: "Google Doc ya Excel me poori table select karke copy karo aur yahan paste karo. Har line = ek row.",
      validation: (R) => R.required(),
    }),
    defineField({ name: "hasHeader", title: "Pehli row heading hai?", type: "boolean", initialValue: true }),
    defineField({ name: "caption", title: "Caption (optional)", type: "string" }),
  ],
  preview: {
    select: { rows: "rows" },
    prepare: ({ rows }) => ({ title: `Table: ${(rows || "").split("\n")[0].replace(/\t/g, " | ").slice(0, 60)}` }),
  },
});

/* ---------- Checklist: har line ek point ---------- */
const checklistBlock = defineType({
  name: "checklistBlock",
  title: "Checklist",
  type: "object",
  fields: [
    defineField({ name: "title", title: "Title (optional)", type: "string", description: "Jaise: AI SEO Checklist" }),
    defineField({ name: "intro", title: "Intro line (optional)", type: "text", rows: 2 }),
    defineField({
      name: "items", title: "Points (har line ek point)", type: "text", rows: 10,
      description: "Google Doc se bullet list copy karke paste karo. Har line ek checklist point banegi.",
      validation: (R) => R.required(),
    }),
  ],
  preview: {
    select: { title: "title", items: "items" },
    prepare: ({ title, items }) => ({ title: `Checklist: ${title || ""}`, subtitle: `${(items || "").split("\n").filter((l: string) => l.trim()).length} points` }),
  },
});

export const post = defineType({
  name: "post",
  title: "Blog Post",
  type: "document",
  groups: [
    { name: "content", title: "Content", default: true },
    { name: "extras", title: "Takeaways, FAQ & CTA" },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    /* ===== Content ===== */
    defineField({ name: "title", title: "Title (H1)", type: "string", group: "content", validation: (R) => R.required() }),
    defineField({
      name: "slug", title: "Slug (URL)", type: "slug", group: "content",
      options: { source: "title", maxLength: 80 },
      description: "Chhota aur keyword wala rakho, jaise ai-seo-guide",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "category", title: "Category", type: "string", group: "content",
      options: { list: BLOG_CATEGORIES, layout: "dropdown" },
      initialValue: "AI SEO",
    }),
    defineField({
      name: "coverImage", title: "Cover Image", type: "image", group: "content",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", title: "Alt text (SEO)", type: "string" })],
    }),
    defineField({ name: "author", title: "Author", type: "string", group: "content" }),
    defineField({ name: "authorRole", title: "Author Role", type: "string", group: "content", initialValue: "SEO & Content Specialist" }),
    defineField({ name: "publishedAt", title: "Published At", type: "datetime", group: "content", initialValue: () => new Date().toISOString() }),
    defineField({ name: "excerpt", title: "Short Description", type: "text", rows: 3, group: "content" }),
    defineField({
      name: "body", title: "Content", type: "array", group: "content",
      description: "Headings ke liye 'Heading 2' / 'Heading 3' style use karo — Table of Contents inhi se apne aap banega.",
      of: [
        defineArrayMember({
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "Heading 1 (use mat karo)", value: "h1" },
            { title: "Heading 2", value: "h2" },
            { title: "Heading 3", value: "h3" },
            { title: "Heading 4", value: "h4" },
            { title: "Quote", value: "blockquote" },
          ],
          marks: {
            annotations: [
              {
                name: "link", title: "Link", type: "object",
                fields: [
                  { name: "href", title: "URL", type: "string", description: "Internal: /contact  |  External: https://..." },
                  { name: "newTab", title: "New tab me kholo", type: "boolean", initialValue: false },
                  { name: "nofollow", title: "Nofollow", type: "boolean", initialValue: false },
                ],
              },
            ],
          },
        }),
        defineArrayMember({
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({ name: "alt", title: "Alt text (SEO)", type: "string" }),
            defineField({ name: "caption", title: "Caption (optional)", type: "string" }),
          ],
        }),
        defineArrayMember({ type: "ctaBlock" }),
        defineArrayMember({ type: "infoBox" }),
        defineArrayMember({ type: "tableBlock" }),
        defineArrayMember({ type: "checklistBlock" }),
      ],
    }),

    /* ===== Takeaways, FAQ & CTA ===== */
    defineField({
      name: "keyTakeaways", title: "Key Takeaways", type: "array", group: "extras",
      of: [{ type: "string" }],
      description: "Khali chhodoge to ye box blog me nahi dikhega.",
    }),
    defineField({
      name: "faqs", title: "FAQs", type: "array", group: "extras",
      description: "Google ke liye FAQ schema apne aap banega.",
      of: [
        defineArrayMember({
          type: "object", name: "faq",
          fields: [
            defineField({ name: "question", title: "Question", type: "string", validation: (R) => R.required() }),
            defineField({ name: "answer", title: "Answer", type: "text", rows: 3, validation: (R) => R.required() }),
          ],
          preview: { select: { title: "question", subtitle: "answer" } },
        }),
      ],
    }),
    defineField({
      name: "cta", title: "Bottom CTA", type: "object", group: "extras",
      description: "Khali chhodoge to default CTA dikhega.",
      fields: [
        defineField({ name: "preset", title: "Saved CTA chuno", type: "reference", to: [{ type: "savedCta" }] }),
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({ name: "text", title: "Text", type: "text", rows: 3 }),
        defineField({ name: "buttonText", title: "Button Text", type: "string" }),
        defineField({ name: "buttonLink", title: "Button Link", type: "string" }),
      ],
    }),
    defineField({ name: "showStats", title: "Stats section dikhana hai?", type: "boolean", group: "extras", initialValue: true }),
    defineField({
      name: "relatedPosts", title: "Related Posts", type: "array", group: "extras",
      description: "Khali chhodoge to same category ke latest posts apne aap dikhenge.",
      of: [{ type: "reference", to: [{ type: "post" }] }],
      validation: (R) => R.max(3),
    }),

    /* ===== SEO ===== */
    defineField({ name: "metaTitle", title: "Meta Title", type: "string", group: "seo", description: "50–60 characters. Khali ho to Title use hoga.", validation: (R) => R.max(65).warning("60 characters se lamba title Google me cut ho sakta hai") }),
    defineField({ name: "metaDescription", title: "Meta Description", type: "text", rows: 3, group: "seo", description: "140–160 characters. Khali ho to Short Description use hoga.", validation: (R) => R.max(165).warning("160 characters se lamba description Google me cut ho sakta hai") }),
    defineField({ name: "focusKeyword", title: "Focus Keyword", type: "string", group: "seo" }),
    defineField({ name: "ogImage", title: "Social Share Image", type: "image", group: "seo", description: "Khali ho to Cover Image use hogi. Size 1200×630." }),
    defineField({ name: "canonicalUrl", title: "Canonical URL", type: "url", group: "seo", description: "Sirf tab bharo jab ye content kisi aur URL ka copy ho." }),
    defineField({ name: "noindex", title: "Google se chhupao (noindex)", type: "boolean", group: "seo", initialValue: false }),
  ],
  orderings: [{ title: "Newest first", name: "publishedDesc", by: [{ field: "publishedAt", direction: "desc" }] }],
  preview: {
    select: { title: "title", subtitle: "category", media: "coverImage" },
  },
});

export const schema = {
  types: [post, savedCta, ctaBlock, infoBox, tableBlock, checklistBlock],
};