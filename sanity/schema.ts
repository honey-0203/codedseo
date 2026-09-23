import { defineType, defineField, defineArrayMember } from "sanity";

export const BLOG_CATEGORIES = ["AI SEO", "SEO", "Content", "Technical SEO", "Local SEO", "Link Building"];

const ctaBlock = defineType({
  name: "ctaBlock",
  title: "CTA Box",
  type: "object",
  fields: [
    defineField({ name: "heading", title: "Heading", type: "string", validation: (R) => R.required() }),
    defineField({ name: "text", title: "Text", type: "text", rows: 3 }),
    defineField({ name: "buttonText", title: "Button Text", type: "string", initialValue: "Get a Free SEO Audit" }),
    defineField({ name: "buttonLink", title: "Button Link", type: "string", initialValue: "/free-audit" }),
  ],
  preview: { select: { title: "heading" }, prepare: ({ title }) => ({ title: `CTA: ${title || ""}` }) },
});

const infoBox = defineType({
  name: "infoBox",
  title: "Info Box",
  type: "object",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "text", title: "Text", type: "text", rows: 3, validation: (R) => R.required() }),
  ],
  preview: { select: { title: "title", subtitle: "text" }, prepare: ({ title, subtitle }) => ({ title: `Info: ${title || ""}`, subtitle }) },
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
    defineField({ name: "title", title: "Title (H1)", type: "string", group: "content", validation: (R) => R.required() }),
    defineField({ name: "slug", title: "Slug (URL)", type: "slug", group: "content", options: { source: "title", maxLength: 80 }, validation: (R) => R.required() }),
    defineField({ name: "category", title: "Category", type: "string", group: "content", options: { list: BLOG_CATEGORIES, layout: "dropdown" }, initialValue: "AI SEO" }),
    defineField({ name: "coverImage", title: "Cover Image", type: "image", group: "content", options: { hotspot: true }, fields: [defineField({ name: "alt", title: "Alt text (SEO)", type: "string" })] }),
    defineField({ name: "author", title: "Author", type: "string", group: "content" }),
    defineField({ name: "authorRole", title: "Author Role", type: "string", group: "content", initialValue: "SEO & Content Specialist" }),
    defineField({ name: "publishedAt", title: "Published At", type: "datetime", group: "content", initialValue: () => new Date().toISOString() }),
    defineField({ name: "excerpt", title: "Short Description", type: "text", rows: 3, group: "content" }),
    defineField({
      name: "body",
      title: "Content",
      type: "array",
      group: "content",
      description: "Headings ke liye 'Heading 2' / 'Heading 3' use karo, TOC inhi se banega.",
      of: [
        defineArrayMember({
          type: "block",
          styles: [
              { title: "Heading 1 (use mat karo)", value: "h1" },
            { title: "Heading 2", value: "h2" },
            { title: "Heading 3", value: "h3" },
            { title: "Heading 4", value: "h4" },
            { title: "Quote", value: "blockquote" },
          ],
          marks: {
            annotations: [
              {
                name: "link",
                title: "Link",
                type: "object",
                fields: [
                  { name: "href", title: "URL", type: "string" },
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
            defineField({ name: "caption", title: "Caption", type: "string" }),
          ],
        }),
        defineArrayMember({ type: "ctaBlock" }),
        defineArrayMember({ type: "infoBox" }),
      ],
    }),

    defineField({ name: "keyTakeaways", title: "Key Takeaways", type: "array", group: "extras", of: [{ type: "string" }] }),
    defineField({
      name: "faqs",
      title: "FAQs",
      type: "array",
      group: "extras",
      of: [
        defineArrayMember({
          type: "object",
          name: "faq",
          fields: [
            defineField({ name: "question", title: "Question", type: "string", validation: (R) => R.required() }),
            defineField({ name: "answer", title: "Answer", type: "text", rows: 3, validation: (R) => R.required() }),
          ],
          preview: { select: { title: "question", subtitle: "answer" } },
        }),
      ],
    }),
    defineField({
      name: "cta",
      title: "Bottom CTA",
      type: "object",
      group: "extras",
      fields: [
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({ name: "text", title: "Text", type: "text", rows: 3 }),
        defineField({ name: "buttonText", title: "Button Text", type: "string" }),
        defineField({ name: "buttonLink", title: "Button Link", type: "string" }),
      ],
    }),
    defineField({ name: "showStats", title: "Stats section dikhana hai?", type: "boolean", group: "extras", initialValue: true }),
    defineField({
      name: "relatedPosts",
      title: "Related Posts",
      type: "array",
      group: "extras",
      of: [{ type: "reference", to: [{ type: "post" }] }],
      validation: (R) => R.max(3),
    }),

    defineField({ name: "metaTitle", title: "Meta Title", type: "string", group: "seo", validation: (R) => R.max(65).warning("60 characters se chhota rakho") }),
    defineField({ name: "metaDescription", title: "Meta Description", type: "text", rows: 3, group: "seo", validation: (R) => R.max(165).warning("160 characters se chhota rakho") }),
    defineField({ name: "focusKeyword", title: "Focus Keyword", type: "string", group: "seo" }),
    defineField({ name: "ogImage", title: "Social Share Image", type: "image", group: "seo" }),
    defineField({ name: "canonicalUrl", title: "Canonical URL", type: "url", group: "seo" }),
    defineField({ name: "noindex", title: "Google se chhupao (noindex)", type: "boolean", group: "seo", initialValue: false }),
  ],
  preview: { select: { title: "title", subtitle: "category", media: "coverImage" } },
});

export const schema = {
  types: [post, ctaBlock, infoBox],
};