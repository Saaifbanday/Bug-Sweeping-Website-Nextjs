"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
}

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <div className="flex flex-col gap-3">
      {items.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={faq.q}
            className="rounded-xl overflow-hidden"
            style={{
              backgroundColor: "var(--bg-card)",
              border: `1px solid ${isOpen ? "rgba(230,57,70,0.35)" : "var(--color-border)"}`,
              transition: "border-color 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            {/* Question row */}
            <button
              onClick={() => toggle(idx)}
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              style={{ cursor: "pointer", background: "none", border: "none" }}
              aria-expanded={isOpen}
            >
              <span
                className="font-semibold leading-snug"
                style={{ color: "var(--color-text)", fontSize: "1rem" }}
              >
                {faq.q}
              </span>
              <ChevronDown
                size={18}
                style={{
                  color: "var(--color-accent)",
                  flexShrink: 0,
                  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              />
            </button>

            {/* Answer — CSS max-height transition */}
            <div
              style={{
                maxHeight: isOpen ? "500px" : "0px",
                overflow: "hidden",
                transition: "max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              <p
                className="px-6 pb-6 leading-relaxed"
                style={{ color: "var(--color-muted)", fontSize: "1rem" }}
              >
                {faq.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
