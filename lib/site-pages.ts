import fs from "node:fs";
import path from "node:path";

// app folder ke saare pages khud dhoondta hai, taaki sitemap aur llms.txt me
// naya page apne aap add ho jaye. Kuch bhi haath se likhne ki zaroorat nahi.

export type SitePage = { path: string; title: string; priority: number };

const APP_DIR = path.join(process.cwd(), "app");
const SKIP_DIRS = new Set(["studio", "api"]);
const PAGE_FILES = ["page.tsx", "page.jsx", "page.ts", "page.js"];

// Agar kabhi files na mil payein to yeh list use hogi (safety)
const FALLBACK: string[] = [
  "", "/services", "/services/organic-seo", "/seo-agency-usa", "/seo", "/digital-marketing",
  "/free-audit", "/contact", "/about", "/why-choose-us", "/case-studies", "/reviews",
  "/video-testimonials", "/team", "/blog", "/resources", "/insights", "/learn", "/tools",
];

function priorityFor(p: string): number {
  if (p === "") return 1;
  if (p === "/services") return 0.9;
  if (/(privacy|terms|disclaimer|refund|cookie)/.test(p)) return 0.3;
  if (["/video-testimonials", "/team", "/resources", "/insights", "/learn", "/tools"].includes(p)) return 0.5;
  return 0.8;
}

function humanize(p: string): string {
  if (p === "") return "Home";
  const last = p.split("/").pop() || "";
  return last.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()).replace(/\bSeo\b/g, "SEO");
}

function titleFor(dir: string, p: string): string {
  // Sirf page ke SEO title (export const metadata) se naam lo
  for (const f of [...PAGE_FILES, "layout.tsx"]) {
    const file = path.join(dir, f);
    if (!fs.existsSync(file)) continue;
    const src = fs.readFileSync(file, "utf8");
    const meta = src.indexOf("metadata");
    if (meta === -1) continue;
    const block = src.slice(meta, meta + 600);
    let t = block.match(/title:\s*"([^"]+)"/)?.[1];
    if (!t && /title:\s*TITLE/.test(block)) t = src.match(/const TITLE\s*=\s*"([^"]+)"/)?.[1];
    if (t) return t.replace(/\s*\|\s*CodedSEO\s*$/i, "").trim();
  }
  return humanize(p);
}

function walk(dir: string, route: string, out: SitePage[]) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  if (entries.some((e) => e.isFile() && PAGE_FILES.includes(e.name))) {
    out.push({ path: route, title: titleFor(dir, route), priority: priorityFor(route) });
  }
  for (const e of entries) {
    if (!e.isDirectory()) continue;
    const name = e.name;
    if (name.startsWith("[") || name.startsWith("_") || name.startsWith("@") || name.includes(".")) continue;
    if (route === "" && SKIP_DIRS.has(name)) continue;
    const isGroup = name.startsWith("(") && name.endsWith(")");
    walk(path.join(dir, name), isGroup ? route : `${route}/${name}`, out);
  }
}

export function getSitePages(): SitePage[] {
  try {
    const out: SitePage[] = [];
    walk(APP_DIR, "", out);
    if (out.length > 3) return out.sort((a, b) => b.priority - a.priority || a.path.localeCompare(b.path));
  } catch {
    // niche fallback
  }
  return FALLBACK.map((p) => ({ path: p, title: humanize(p), priority: priorityFor(p) }));
}