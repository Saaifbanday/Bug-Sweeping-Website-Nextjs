"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

export type TocItem = { id: string; text: string; level: number };

// Matches the scroll-margin-top applied to article headings in globals.css,
// which clears the sticky header after an anchor jump.
const HEADER_OFFSET = 96;

function useActiveHeading(items: TocItem[]) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    if (items.length === 0) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      // The active section is the last heading whose top has passed the header.
      let current = items[0].id;
      for (const item of items) {
        const el = document.getElementById(item.id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= HEADER_OFFSET + 8) current = item.id;
        else break;
      }
      // Near the foot of the page the last section may never reach the top.
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 80) {
        current = items[items.length - 1].id;
      }
      setActiveId(current);
    };

    const onScroll = () => {
      if (frame === 0) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [items]);

  return activeId;
}

function TocList({
  items,
  activeId,
  onNavigate,
}: {
  items: TocItem[];
  activeId: string;
  onNavigate?: () => void;
}) {
  return (
    <ol className="toc-list">
      {items.map((item, index) => {
        const active = item.id === activeId;
        return (
          <li key={item.id} className={item.level === 3 ? "toc-item toc-item-sub" : "toc-item"}>
            <a
              href={`#${item.id}`}
              onClick={onNavigate}
              aria-current={active ? "location" : undefined}
              className={active ? "toc-link toc-link-active" : "toc-link"}
            >
              <span className="toc-num" aria-hidden="true">
                {index + 1}
              </span>
              <span className="toc-text">{item.text}</span>
            </a>
          </li>
        );
      })}
    </ol>
  );
}

export default function BlogTableOfContents({ items }: { items: TocItem[] }) {
  const activeId = useActiveHeading(items);
  const [openOnMobile, setOpenOnMobile] = useState(false);

  if (items.length < 2) return null;

  return (
    <>
      {/* Desktop and larger tablets: sticky column beside the article */}
      <nav className="toc-side" aria-labelledby="toc-heading">
        <p className="toc-heading" id="toc-heading">
          On this page
        </p>
        <TocList items={items} activeId={activeId} />
      </nav>

      {/* Small screens: a compact panel above the article */}
      <nav className="toc-mobile" aria-labelledby="toc-heading-mobile">
        <button
          type="button"
          className="toc-mobile-toggle"
          aria-expanded={openOnMobile}
          aria-controls="toc-mobile-panel"
          onClick={() => setOpenOnMobile((open) => !open)}
        >
          <span id="toc-heading-mobile">On this page</span>
          <ChevronDown
            size={16}
            style={{
              transition: "transform 0.2s",
              transform: openOnMobile ? "rotate(180deg)" : "rotate(0deg)",
            }}
          />
        </button>
        <div id="toc-mobile-panel" hidden={!openOnMobile}>
          <TocList items={items} activeId={activeId} onNavigate={() => setOpenOnMobile(false)} />
        </div>
      </nav>
    </>
  );
}
