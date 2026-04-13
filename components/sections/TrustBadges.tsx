import Image from "next/image";
import { Award } from "lucide-react";

export default function TrustBadges() {
  return (
    <section
      style={{
        backgroundColor: "var(--bg-surface)",
        borderTop: "1px solid var(--color-border)",
        borderBottom: "1px solid var(--color-border)",
      }}
      className="py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p
          className="text-center text-xs font-semibold tracking-widest uppercase mb-8"
          style={{ color: "var(--color-muted)" }}
        >
          Proudly Associated With
        </p>

        <div className="flex flex-wrap items-center justify-center gap-12">
          {/* W.A.D. Certificate */}
          <div className="flex items-center gap-4">
            <div
              className="rounded-lg p-3 flex items-center gap-3"
              style={{
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--color-border)",
              }}
            >
              <Award size={28} style={{ color: "var(--color-accent)" }} />
              <div>
                <div
                  className="text-xs font-bold tracking-wide"
                  style={{ color: "var(--color-text)" }}
                >
                  W.A.D.
                </div>
                <div className="text-xs" style={{ color: "var(--color-muted)" }}>
                  World Association of Detectives
                </div>
              </div>
            </div>
          </div>

          {/* Certification badge */}
          <div
            className="rounded-lg px-5 py-3 flex items-center gap-3"
            style={{
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--color-border)",
            }}
          >
            <div
              className="rounded-full p-2"
              style={{ backgroundColor: "rgba(230,57,70,0.12)" }}
            >
              <Award size={18} style={{ color: "var(--color-accent)" }} />
            </div>
            <div>
              <div
                className="text-xs font-bold"
                style={{ color: "var(--color-text)" }}
              >
                Certified TSCM Specialists
              </div>
              <div className="text-xs" style={{ color: "var(--color-muted)" }}>
                Internationally Trained & Certified
              </div>
            </div>
          </div>

          {/* Experience badge */}
          <div
            className="rounded-lg px-5 py-3 flex items-center gap-3"
            style={{
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--color-border)",
            }}
          >
            <div
              className="rounded-full p-2"
              style={{ backgroundColor: "rgba(230,57,70,0.12)" }}
            >
              <Award size={18} style={{ color: "var(--color-accent)" }} />
            </div>
            <div>
              <div
                className="text-xs font-bold"
                style={{ color: "var(--color-text)" }}
              >
                20+ Years of Expertise
              </div>
              <div className="text-xs" style={{ color: "var(--color-muted)" }}>
                Former Intelligence Officers
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
