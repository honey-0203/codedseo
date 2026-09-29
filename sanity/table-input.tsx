"use client";
import type { ClipboardEvent } from "react";
import { set, type StringInputProps } from "sanity";

/* Google Doc / Excel / website ki table (HTML) ko tab wali lines mein badalta hai */
function htmlTableToText(html: string): string | null {
  const doc = new DOMParser().parseFromString(html, "text/html");
  const table = doc.querySelector("table");
  if (!table) return null;
  const cellText = (cell: Element) => {
    const parts = Array.from(cell.querySelectorAll("p, li"));
    const raw = parts.length ? parts.map((p) => p.textContent || "").join(" ") : cell.textContent || "";
    return raw.replace(/\s+/g, " ").trim();
  };
  const rows = Array.from(table.querySelectorAll("tr"))
    .map((tr) => Array.from(tr.querySelectorAll("th, td")).map(cellText))
    .filter((r) => r.some(Boolean));
  if (!rows.length) return null;
  return rows.map((r) => r.join("\t")).join("\n");
}

/* Table box: paste karte hi columns khud ban jaate hain */
export function TableInput(props: StringInputProps) {
  const onPaste = (e: ClipboardEvent<HTMLDivElement>) => {
    const html = e.clipboardData.getData("text/html");
    if (!html) return;
    const text = htmlTableToText(html);
    if (!text) return;
    e.preventDefault();
    props.onChange(set(text));
  };
  return <div onPasteCapture={onPaste}>{props.renderDefault(props)}</div>;
}