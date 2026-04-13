import Link from "next/link";
import { Award, Shield, Star, ArrowRight } from "lucide-react";

const associations = [
  {
    Icon: Award,
    label: "W.A.D.",
    sublabel: "World Association of Detectives",
  },
  {
    Icon: Shield,
    label: "Certified TSCM Specialists",
    sublabel: "Internationally Trained & Certified",
  },
  {
    Icon: Star,
    label: "20+ Years of Expertise",
    sublabel: "Former Intelligence Officers",
  },
];

export default function TrustBadges() {
  return (
    <section
      style={{
        backgroundColor: "var(--bg-surface)",
        borderTop: "1px solid var(--color-border)",
        borderBottom: "1px solid var(--color-border)",
      }}
      className="py-14"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p
          className="text-center text-xs font-semibold tracking-widest uppercase mb-10"
          style={{ color: "var(--color-muted)" }}
        >
          Proudly Associated With
        </p>

        <div className="flex flex-wrap items-stretch justify-center gap-6">
          {associations.map(({ Icon, label, sublabel }) => (
            <div
              key={label}
              className="flex items-center gap-4 rounded-xl px-6 py-5"
              style={{
                width: "260px",
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--color-border)",
              }}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
                style={{ backgroundColor: "rgba(230,57,70,0.12)" }}
              >
                <Icon size={22} style={{ color: "var(--color-accent)" }} />
              </div>
              <div>
                <div
                  className="font-bold text-sm leading-snug"
                  style={{ color: "var(--color-text)" }}
                >
                  {label}
                </div>
                <div
                  className="text-xs mt-0.5 leading-snug"
                  style={{ color: "var(--color-muted)" }}
                >
                  {sublabel}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View certificate CTA */}
        <div className="flex justify-center mt-8">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
            style={{ color: "var(--color-accent)" }}
          >
            View Our Certifications on About Us
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
