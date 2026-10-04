"use client";

import { useRef, useEffect } from "react";
import { Star, Quote } from "lucide-react";

// NOTE (4 Oct 2026): the five testimonials previously here named individuals with sensitive
// roles and described specific findings. Nothing in content-engine/site-facts.md or
// field-notes.md supports them, and skill section 1A blocks client names and titles.
// They were removed and this component was unhooked from /services. Do not re-enable it
// until real, consented, anonymised case summaries are recorded in field-notes.md.
const testimonials: {
  name: string;
  role: string;
  rating: number;
  text: string;
  initial: string;
}[] = [];

// Triple the cards so the loop is seamless across all screen widths
const CARDS = [...testimonials, ...testimonials, ...testimonials];

function TestimonialCard({ t }: { t: (typeof testimonials)[0] }) {
  return (
    <div
      className="relative flex flex-col rounded-2xl p-8 shrink-0"
      style={{
        width: "380px",
        backgroundColor: "var(--bg-card)",
        border: "1px solid var(--color-border)",
      }}
    >
      <Quote
        size={40}
        className="absolute top-6 right-6 opacity-[0.08]"
        style={{ color: "var(--color-accent)" }}
      />
      {/* Stars */}
      <div className="flex gap-1 mb-5">
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} size={16} fill="#f4c430" style={{ color: "#f4c430" }} />
        ))}
      </div>
      {/* Quote text */}
      <p
        className="leading-relaxed mb-7 flex-1 italic"
        style={{ color: "var(--color-muted)", fontSize: "1rem" }}
      >
        &ldquo;{t.text}&rdquo;
      </p>
      {/* Author */}
      <div className="flex items-center gap-4">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center font-bold shrink-0"
          style={{
            backgroundColor: "var(--color-accent)",
            color: "#fff",
            fontSize: "1.0625rem",
          }}
        >
          {t.initial}
        </div>
        <div>
          <div
            className="font-bold"
            style={{ color: "var(--color-text)", fontSize: "1rem" }}
          >
            {t.name}
          </div>
          <div style={{ color: "var(--color-muted)", fontSize: "0.875rem" }}>
            {t.role}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(0);
  const pausedRef = useRef(false);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const SPEED = 0.6; // px per frame — adjust for faster/slower scroll

    function animate() {
      const track = trackRef.current;
      if (track && !pausedRef.current) {
        posRef.current += SPEED;
        // Reset when we've scrolled through 1/3 of total width (one full set)
        const resetAt = track.scrollWidth / 3;
        if (posRef.current >= resetAt) {
          posRef.current = 0;
        }
        track.style.transform = `translateX(-${posRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    }

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <section className="py-24" style={{ backgroundColor: "var(--bg-primary)" }}>
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14 text-center">
        <p className="section-label mb-4">Client Testimonials</p>
        <h2 className="section-title mb-5">What Our Clients Say</h2>
        <p className="section-subtitle mx-auto">
          Trusted by India&apos;s most privacy-conscious individuals and organizations.
        </p>
      </div>

      {/* Scrolling strip — full viewport width */}
      <div
        className="overflow-hidden w-full"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
        }}
        onMouseEnter={() => (pausedRef.current = true)}
        onMouseLeave={() => (pausedRef.current = false)}
      >
        <div
          ref={trackRef}
          className="flex py-4"
          style={{ gap: "1.5rem", width: "max-content", willChange: "transform" }}
        >
          {CARDS.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
      </div>

      {/* Badges */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 flex flex-wrap justify-center gap-4">
        {["Confidential", "Specialist practice"].map(
          (badge) => (
            <div
              key={badge}
              className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold"
              style={{
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--color-border)",
                color: "var(--color-muted)",
                fontSize: "0.9375rem",
              }}
            >
              <Star size={14} fill="#f4c430" style={{ color: "#f4c430" }} />
              {badge}
            </div>
          )
        )}
      </div>
    </section>
  );
}
