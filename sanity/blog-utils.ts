import { createImageUrlBuilder } from "@sanity/image-url";
import { client } from "./client";

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://codedseo.com").replace(/\/$/, "");

const builder = createImageUrlBuilder(client);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const urlFor = (source: any) => builder.image(source);

type Span = { text?: string };
export type Block = {
  _type: string;
  _key: string;
  style?: string;
  children?: Span[];
  [key: string]: unknown;
};

export const blockText = (block: Block) =>
  (block.children || []).map((c) => c.text || "").join("");

export const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/<[^>]*>/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 80) || "section";

export type TocItem = { id: string; text: string; level: 2 | 3 };

export function buildToc(body: Block[] = []) {
  const ids: Record<string, string> = {};
  const used = new Set<string>(["key-takeaways", "faq", "stats"]);
  const toc: TocItem[] = [];

  for (const block of body) {
    if (block._type !== "block" || (block.style !== "h2" && block.style !== "h3")) continue;
    const text = blockText(block).trim();
    if (!text) continue;
    const base = slugify(text);
    let id = base;
    let n = 2;
    while (used.has(id)) id = `${base}-${n++}`;
    used.add(id);
    ids[block._key] = id;
    toc.push({ id, text, level: block.style === "h2" ? 2 : 3 });
  }
  return { toc, ids };
}

export function readingTime(body: Block[] = [], extra = "") {
  const words = body
    .filter((b) => b._type === "block")
    .map(blockText)
    .join(" ")
    .concat(" ", extra)
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export function formatDate(iso?: string) {
  return iso
    ? new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
    : "";
}