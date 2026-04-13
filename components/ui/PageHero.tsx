import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageHeroProps {
  label: string;
  title: string;
  subtitle?: string;
  breadcrumbs?: { label: string; href: string }[];
}

export default function PageHero({ label, title, subtitle, breadcrumbs }: PageHeroProps) {
  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #080d1a 0%, #0d1526 60%, #080d1a 100%)",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      {/* Dot grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, #e63946 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Red glow */}
      <div
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(230,57,70,0.1) 0%, transparent 70%)",
          transform: "translateY(-50%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Breadcrumb */}
        {breadcrumbs && (
          <nav className="flex items-center justify-center gap-2 mb-6 text-sm" aria-label="Breadcrumb">
            <Link
              href="/"
              className="transition-colors"
              style={{ color: "var(--color-muted)" }}
            >
              Home
            </Link>
            {breadcrumbs.map((bc) => (
              <span key={bc.label} className="flex items-center gap-2">
                <ChevronRight size={14} style={{ color: "var(--color-border)" }} />
                {bc.href === "#" ? (
                  <span style={{ color: "var(--color-accent)" }}>{bc.label}</span>
                ) : (
                  <Link href={bc.href} style={{ color: "var(--color-accent)" }}>
                    {bc.label}
                  </Link>
                )}
              </span>
            ))}
          </nav>
        )}

        {/* Label + Title */}
        <p className="section-label mb-4">{label}</p>
        <h1
          className="font-extrabold tracking-tight mb-5"
          style={{
            fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
            color: "var(--color-text)",
            lineHeight: 1.15,
            letterSpacing: "-0.03em",
          }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className="section-subtitle mx-auto"
            style={{ fontSize: "1.125rem" }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
