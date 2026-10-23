"use client";

import Link from "next/link";
import { CONTACT, telHref, whatsappHref } from "@/lib/contact";

// Content ke beech wala chhota CTA strip (CRO). Light aur dark dono pages par chalta hai.
// Use: <InlineCta title="..." text="..." wa="WhatsApp ka pehle se likha message" />

export function InlineCta({ title, text, wa, cta = "Get my free audit" }: { title: string; text: string; wa: string; cta?: string }) {
  return (
    <aside className="icta" aria-label="Talk to CodedSEO">
      <div className="icta-copy">
        <strong>{title}</strong>
        <span>{text}</span>
      </div>
      <div className="icta-btns">
        <Link className="icta-btn main" href="/free-audit">{cta}</Link>
        <a className="icta-btn wa" href={whatsappHref(wa)} target="_blank" rel="noopener noreferrer">WhatsApp</a>
        <a className="icta-btn" href={telHref}>Call {CONTACT.phoneDisplay}</a>
      </div>
    </aside>
  );
}
