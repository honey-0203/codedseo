"use client";

import Link from "next/link";
import Script from "next/script";
import { useEffect, useRef } from "react";

// Google ka official deeplink (script na chale to ye khulega)
const DEEPLINK = "https://www.google.com/preferences/source?q=codedseo.com";

type PreferredSourceApi = { init: (o: { theme?: string; lang?: string }) => void; addPreferredSource: () => void };

const BTN =
  "inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-black px-5 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:border-green-500/40";

const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
    <path fill="#4285F4" d="M21.35 12.27c0-.72-.06-1.41-.18-2.07H12v3.92h5.24a4.48 4.48 0 0 1-1.94 2.94v2.45h3.14c1.84-1.7 2.91-4.2 2.91-7.24z" />
    <path fill="#34A853" d="M12 21.75c2.63 0 4.84-.87 6.45-2.35l-3.14-2.45c-.87.58-1.98.92-3.31.92-2.54 0-4.7-1.72-5.47-4.03H3.28v2.53A9.74 9.74 0 0 0 12 21.75z" />
    <path fill="#FBBC05" d="M6.53 13.84A5.86 5.86 0 0 1 6.22 12c0-.64.11-1.26.31-1.84V7.63H3.28A9.74 9.74 0 0 0 2.25 12c0 1.57.38 3.05 1.03 4.37l3.25-2.53z" />
    <path fill="#EA4335" d="M12 6.13c1.43 0 2.71.49 3.72 1.45l2.79-2.79C16.83 3.13 14.63 2.25 12 2.25a9.74 9.74 0 0 0-8.72 5.38l3.25 2.53C7.3 7.85 9.46 6.13 12 6.13z" />
  </svg>
);

/* ---------- Google Preferred Source button ---------- */
export function PreferredSourceButton({ className = "" }: { className?: string }) {
  const api = useRef<PreferredSourceApi | null>(null);

  useEffect(() => {
    const w = window as unknown as { PREFERRED_SOURCE?: Array<(ps: PreferredSourceApi) => void> };
    w.PREFERRED_SOURCE = w.PREFERRED_SOURCE || [];
    w.PREFERRED_SOURCE.push((ps) => {
      try {
        ps.init({ theme: "dark", lang: "en" });
        api.current = ps;
      } catch {
        api.current = null;
      }
    });
  }, []);

  return (
    <>
      <Script src="https://news.google.com/swg/js/v1/publisher.js" strategy="lazyOnload" />
      <Link
        href={DEEPLINK}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => {
          if (!api.current) return;
          e.preventDefault();
          try {
            api.current.addPreferredSource();
          } catch {
            window.open(DEEPLINK, "_blank", "noopener,noreferrer");
          }
        }}
        className={`${BTN} ${className}`}
      >
        <GoogleIcon />
        <span>
          Add <span className="text-[#6ea8ff]">us</span> as preferred source on Google
        </span>
      </Link>
    </>
  );
}

/* ---------- Summarize in ChatGPT button ---------- */
export function SummarizeButton({ url, className = "" }: { url: string; className?: string }) {
  const prompt = `Summarize this article in simple points and list the key takeaways: ${url}`;
  const href = `https://chatgpt.com/?q=${encodeURIComponent(prompt)}`;

  return (
    <Link href={href} target="_blank" rel="noopener noreferrer nofollow" className={`${BTN} ${className}`}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M12 3l1.8 4.6L18.5 9.4l-4.7 1.8L12 16l-1.8-4.8L5.5 9.4l4.7-1.8z" />
        <path d="M18.5 15.5l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8z" />
      </svg>
      <span>Summarize in ChatGPT</span>
    </Link>
  );
}