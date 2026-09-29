import Link from "next/link";
import { SITE_URL } from "@/sanity/blog-utils";

/* ---------------- Shared link ---------------- */
export const isExternal = (href = "") => /^https?:\/\//i.test(href) && !href.startsWith(SITE_URL);

export function SmartLink({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  return isExternal(href) ? (
    <a href={href} className={className} target="_blank" rel="noopener noreferrer">{children}</a>
  ) : (
    <Link href={href} className={className}>{children}</Link>
  );
}

/* ---------------- CTA box (content ke beech) ---------------- */
export type CtaData = {
  heading?: string;
  text?: string;
  buttonText?: string;
  buttonLink?: string;
  secondaryText?: string;
  secondaryLink?: string;
  style?: "dark" | "light";
  preset?: CtaData | null;
};

/** Saved CTA chuna hai to wahi, warna custom fields */
export function resolveCta(value: CtaData): CtaData {
  return value?.preset?.heading ? value.preset : value;
}

export function CtaBox({ value }: { value: CtaData }) {
  const cta = resolveCta(value);
  if (!cta?.heading) return null;
  const style = cta.style === "light" ? "light" : "dark";

  return (
    <aside className={`bp-icta bp-icta--${style}`} aria-label={cta.heading}>
      <div className="bp-icta-copy">
        <p className="bp-icta-title">{cta.heading}</p>
        {cta.text && <p className="bp-icta-text">{cta.text}</p>}
      </div>
      {(cta.buttonText || cta.secondaryText) && (
        <div className="bp-icta-actions">
          {cta.buttonText && (
            <SmartLink href={cta.buttonLink || "/contact"} className="bp-icta-btn">
              {cta.buttonText}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </SmartLink>
          )}
          {cta.secondaryText && cta.secondaryLink && (
            <SmartLink href={cta.secondaryLink} className="bp-icta-link">{cta.secondaryText}</SmartLink>
          )}
        </div>
      )}
    </aside>
  );
}

/* ---------------- Pro tip / Expert insight / Note ---------------- */
const CALLOUT_LABEL = { tip: "Pro tip", insight: "Expert insight", note: "Note", fact: "Did You Know?" } as const;

/* **bold** aur [text](https://link) ko asli bold / link banata hai */
function renderInline(text: string): React.ReactNode[] {
  const out: React.ReactNode[] = [];
  const re = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)\s]+)\)/g;
  let last = 0;
  let i = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    if (m[1]) out.push(<strong key={i++}>{m[1]}</strong>);
    else out.push(<SmartLink key={i++} href={m[3]}>{m[2]}</SmartLink>);
    last = re.lastIndex;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

const CalloutIcon = ({ variant }: { variant: keyof typeof CALLOUT_LABEL }) =>
  variant === "tip" ? (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
      <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.6.5 1 1.2 1 2V17h5.2v-1.2c0-.8.4-1.5 1-2A6 6 0 0 0 12 3z" />
    </svg>
  ) : variant === "insight" ? (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
      <path d="M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.4 6.8 19.1l1-5.8-4.3-4.1 5.9-.9z" />
    </svg>
  ) : (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
      <circle cx="12" cy="12" r="9" /><path d="M12 11v6M12 7.5v.01" />
    </svg>
  );

export function Callout({ value }: { value: { variant?: string; title?: string; text?: string } }) {
  const variant = (value?.variant && value.variant in CALLOUT_LABEL ? value.variant : "tip") as keyof typeof CALLOUT_LABEL;
  if (!value?.text) return null;
  const title = value.title || CALLOUT_LABEL[variant];
  if (variant === "fact") {
    return (
      <div className="bp-callout bp-callout--fact">
        <p className="bp-callout-head">{title}</p>
        <p className="bp-callout-body">{renderInline(value.text)}</p>
      </div>
    );
  }
  return (
    <div className={`bp-callout bp-callout--${variant}`}>
      <span className="bp-callout-icon"><CalloutIcon variant={variant} /></span>
      <p><strong className="bp-callout-title">{title}</strong>{renderInline(value.text)}</p>
    </div>
  );
}

/* ---------------- Table (paste se) ---------------- */
function parseRows(raw = ""): string[][] {
  const lines = raw.replace(/\r/g, "").split("\n").map((l) => l.trim()).filter(Boolean);
  const rows = lines.map((line) => {
    if (line.includes("\t")) return line.split("\t").map((c) => c.trim());
    if (line.includes("|")) return line.replace(/^\||\|$/g, "").split("|").map((c) => c.trim());
    return [line];
  });
  // markdown separator rows (---|---) hata do
  return rows.filter((r) => !r.every((c) => /^:?-{2,}:?$/.test(c)));
}

export function DataTable({ value }: { value: { rows?: string; hasHeader?: boolean; caption?: string; columns?: number } }) {
  let rows = parseRows(value?.rows);
  // har cell alag line mein aaya ho to "Kitne columns?" ke hisaab se rows banao
  const n = Math.floor(value?.columns || 0);
  if (n >= 2 && rows.every((r) => r.length === 1)) {
    const flat = rows.map((r) => r[0]);
    rows = [];
    for (let i = 0; i < flat.length; i += n) rows.push(flat.slice(i, i + n));
  }
  if (!rows.length) return null;
  const cols = Math.max(...rows.map((r) => r.length));
  const pad = (r: string[]) => [...r, ...Array(cols - r.length).fill("")];
  const hasHeader = value.hasHeader !== false;
  const head = hasHeader ? pad(rows[0]) : null;
  const body = (hasHeader ? rows.slice(1) : rows).map(pad);

  return (
    <figure className="bp-table">
      <div className="bp-table-scroll">
        <table>
          {head && (
            <thead><tr>{head.map((c, i) => <th key={i} scope="col">{c}</th>)}</tr></thead>
          )}
          <tbody>
            {body.map((r, i) => (
              <tr key={i}>{r.map((c, j) => (j === 0 ? <th key={j} scope="row">{c}</th> : <td key={j}>{c}</td>))}</tr>
            ))}
          </tbody>
        </table>
      </div>
      {value.caption && <figcaption>{value.caption}</figcaption>}
    </figure>
  );
}

/* ---------------- Checklist ---------------- */
export function Checklist({ value }: { value: { title?: string; intro?: string; items?: string } }) {
  const items = (value?.items || "")
    .replace(/\r/g, "")
    .split("\n")
    .map((l) => l.replace(/^\s*(?:[-*•●▪◦✓✔]|\d+[.)]|\[[ xX]?\])\s*/, "").trim())
    .filter(Boolean);
  if (!items.length) return null;

  return (
    <section className="bp-check" aria-label={value.title || "Checklist"}>
      {value.title && <h3 className="bp-check-title">{value.title}</h3>}
      {value.intro && <p className="bp-check-intro">{value.intro}</p>}
      <ul className="bp-check-grid">
        {items.map((item, i) => (
          <li key={i}>
            <CheckIcon />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ---------------- Auto checklist ----------------
   Jis heading me "checklist" word ho, uske neeche wali bullet/number list
   apne aap checklist design me dikhegi. */
type PTBlock = { _type: string; _key: string; style?: string; listItem?: string; children?: { text?: string }[] };

export function findChecklistKeys(body: PTBlock[] = []): Set<string> {
  const keys = new Set<string>();
  let active = false;
  let gap = 0;
  let found = false;
  for (const b of body) {
    const isHeading = b._type === "block" && /^h[1-4]$/.test(b.style || "");
    if (isHeading) {
      const text = (b.children || []).map((c) => c.text || "").join("");
      active = /check\s*-?\s*list/i.test(text);
      gap = 0;
      found = false;
      continue;
    }
    if (!active) continue;
    if (b._type === "block" && b.listItem) {
      keys.add(b._key);
      found = true;
    } else if (b._type === "block" && !b.listItem && !found && gap < 2) {
      gap++; // heading ke baad 1-2 intro lines chal jayengi
    } else {
      active = false;
    }
  }
  return keys;
}

export const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <circle cx="12" cy="12" r="9.5" /><path d="M8 12.5l2.7 2.7L16.5 9" />
  </svg>
);

/* ---------------- Objective / Summary box ----------------
   Content me jo paragraph "Objective:", "Summary:" ya "TL;DR:" se shuru ho,
   wo apne aap highlight card ban jata hai. */
const OBJECTIVE_RE = /^\s*(objective|summary|tl;?dr|in short)\s*[:\-–]\s*/i;

export function findObjectives(body: PTBlock[] = []): Record<string, { label: string; text: string }> {
  const out: Record<string, { label: string; text: string }> = {};
  for (const b of body) {
    if (b._type !== "block" || b.listItem || (b.style && b.style !== "normal")) continue;
    const text = (b.children || []).map((c) => c.text || "").join("");
    const m = text.match(OBJECTIVE_RE);
    if (!m) continue;
    const rest = text.slice(m[0].length).trim();
    if (!rest) continue;
    const raw = m[1].toLowerCase();
    const label = raw.startsWith("tl") ? "TL;DR" : raw === "in short" ? "In short" : raw[0].toUpperCase() + raw.slice(1);
    out[b._key] = { label, text: rest };
  }
  return out;
}

export function ObjectiveBox({ label, text }: { label: string; text: string }) {
  return (
    <aside className="bp-objective" aria-label={label}>
      <div className="bp-objective-head">
        <span className="bp-objective-icon" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="8.5" /><circle cx="12" cy="12" r="4.5" /><circle cx="12" cy="12" r="1" fill="currentColor" />
          </svg>
        </span>
        <span className="bp-objective-label">{label}</span>
      </div>
      <p className="bp-objective-text">{text}</p>
    </aside>
  );
}

/* ---------------- Fact / Did You Know (auto) ----------------
   Content me jo paragraph "Fact:" ya "Did you know:" se shuru ho,
   wo apne aap "Did You Know?" box ban jata hai. Uske bahar wale links nofollow. */
const FACT_RE = /^\s*(fact|did you know\??)\s*[:\-–]\s*/i;
type FactSpan = { _type?: string; text?: string; marks?: string[] };
type FactBlock = { _type: string; _key: string; style?: string; listItem?: string; children?: FactSpan[]; markDefs?: { _key: string }[] };

export function prepareFacts<T>(body: T[] = []): { body: T[]; factLinks: Set<string> } {
  const factLinks = new Set<string>();
  const out = body.map((raw) => {
    const b = raw as unknown as FactBlock;
    if (b._type !== "block" || b.listItem || (b.style && b.style !== "normal")) return raw;
    const children = b.children || [];
    const text = children.map((c) => c.text || "").join("");
    const m = text.match(FACT_RE);
    if (!m || !text.slice(m[0].length).trim()) return raw;
    // "Fact:" wala hissa hatao, baaki bold / links waise hi rahenge
    let cut = m[0].length;
    const kept: FactSpan[] = [];
    for (const c of children) {
      const t = c.text || "";
      if (cut >= t.length) { cut -= t.length; continue; }
      kept.push({ ...c, text: t.slice(cut) });
      cut = 0;
    }
    if (kept[0]) kept[0] = { ...kept[0], text: (kept[0].text || "").replace(/^\s+/, "") };
    (b.markDefs || []).forEach((d) => factLinks.add(d._key));
    return { ...b, children: kept, _fact: true } as unknown as T;
  });
  return { body: out, factLinks };
}

export function FactBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="bp-callout bp-callout--fact">
      <p className="bp-callout-head">Did You Know?</p>
      <p className="bp-callout-body">{children}</p>
    </div>
  );
}