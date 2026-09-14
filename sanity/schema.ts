import { defineType, defineField } from "sanity";

export const post = defineType({
  name: "post",
  title: "Blog Post",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "slug", title: "Slug (URL)", type: "slug", options: { source: "title" }, validation: (Rule) => Rule.required() }),
    defineField({ name: "coverImage", title: "Cover Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "author", title: "Author", type: "string" }),
    defineField({ name: "publishedAt", title: "Published At", type: "datetime", initialValue: () => new Date().toISOString() }),
    defineField({ name: "excerpt", title: "Short Description", type: "text", rows: 3 }),
    defineField({ name: "body", title: "Content", type: "array", of: [{ type: "block" }, { type: "image", options: { hotspot: true } }] }),
  ],
});

export const schema = {
  types: [post],
};