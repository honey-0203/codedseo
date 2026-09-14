"use client";

import { useEffect } from "react";

export function BlogPostScripts() {
  useEffect(() => {
    // FAQ accordion
    const questions = document.querySelectorAll<HTMLButtonElement>(".bp-faq-question");
    const handlers: Array<() => void> = [];

    questions.forEach((question) => {
      const handler = () => {
        const item = question.parentElement as HTMLElement;
        const answer = item.querySelector<HTMLElement>(".bp-faq-answer");

        document.querySelectorAll<HTMLElement>(".bp-faq-item").forEach((other) => {
          if (other !== item) {
            other.classList.remove("open");
            const a = other.querySelector<HTMLElement>(".bp-faq-answer");
            if (a) a.style.maxHeight = "";
          }
        });

        item.classList.toggle("open");
        if (answer) {
          answer.style.maxHeight = item.classList.contains("open")
            ? answer.scrollHeight + "px"
            : "";
        }
      };
      question.addEventListener("click", handler);
      handlers.push(() => question.removeEventListener("click", handler));
    });

    // Copy link
    const copyBtn = document.getElementById("bpCopyBtn");
    const copyLink = () => {
      navigator.clipboard.writeText(window.location.href);
      alert("Article link copied!");
    };
    copyBtn?.addEventListener("click", copyLink);

    // TOC active on scroll
    const sections = document.querySelectorAll<HTMLElement>(".bp-article section[id], .bp-article div[id]");
    const tocLinks = document.querySelectorAll<HTMLAnchorElement>(".bp-toc a");
    const onScroll = () => {
      let current = "";
      sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 180) current = section.id;
      });
      tocLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === "#" + current);
      });
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      handlers.forEach((h) => h());
      copyBtn?.removeEventListener("click", copyLink);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return null;
}