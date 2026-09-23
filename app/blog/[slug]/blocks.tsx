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
const CALLOUT_LABEL = { tip: "Pro tip", insight: "Expert insight", note: "Note" } as const;

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
  return (
    <div className={`bp-callout bp-callout--${variant}`}>
      <span className="bp-callout-icon"><CalloutIcon variant={variant} /></span>
      <p><strong>{value.title || CALLOUT_LABEL[variant]}</strong>{value.text}</p>
    </div>
  );
}