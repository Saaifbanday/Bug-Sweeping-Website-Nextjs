import { Phone } from "lucide-react";

const points = [
  {
    label: "Conference Rooms",
    desc: "Confidential strategies are discussed here — prime eavesdropping targets.",
    emoji: "🪑",
  },
  {
    label: "Executive Offices",
    desc: "Sensitive files, strategic plans, and private conversations stored here.",
    emoji: "🏢",
  },
  {
    label: "Vehicles",
    desc: "Company and personal vehicles can be bugged with trackers or microphones.",
    emoji: "🚗",
  },
  {
    label: "IT Equipment & Networks",
    desc: "Servers, routers, and Wi-Fi are frequent targets for cyber intrusions.",
    emoji: "💻",
  },
  {
    label: "Mail Rooms",
    desc: "Incoming parcels may conceal covert listening or tracking devices.",
    emoji: "📬",
  },
  {
    label: "Waste Bins & Shredding",
    desc: "Improperly discarded confidential documents expose sensitive information.",
    emoji: "🗑️",
  },
  {
    label: "Reception & Waiting Areas",
    desc: "Public-facing areas are potential spots for hidden surveillance tools.",
    emoji: "🔔",
  },
];

export default function TSCMPoints() {
  return (
    <section
      className="py-20"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="section-label mb-3">TSCM Coverage</p>
          <h2 className="section-title mb-4">
            Technical Surveillance Counter Measures (TSCM) —<br className="hidden md:block" />
            Key Vulnerability Points in Your Organization
          </h2>
          <p className="section-subtitle mx-auto">
            TSCM are essential for safeguarding your organization against espionage and data
            leaks. A robust TSCM program systematically inspects all these areas through
            physical sweeps and advanced electronic checks.
          </p>
        </div>

        {/* Center focal + surrounding points */}
        <div className="relative">
          {/* Mobile: simple grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {points.map((point) => (
              <div
                key={point.label}
                className="rounded-lg p-5 flex items-start gap-3"
                style={{
                  backgroundColor: "var(--bg-card)",
                  border: "1px solid var(--color-border)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 text-lg"
                  style={{ backgroundColor: "rgba(230,57,70,0.1)" }}
                >
                  {point.emoji}
                </div>
                <div>
                  <h3
                    className="text-sm font-bold mb-1"
                    style={{ color: "var(--color-text)" }}
                  >
                    {point.label}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--color-muted)" }}>
                    {point.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* CTA Card */}
            <div
              className="rounded-lg p-5 flex flex-col items-center justify-center text-center"
              style={{
                background: "linear-gradient(135deg, rgba(230,57,70,0.15) 0%, rgba(230,57,70,0.05) 100%)",
                border: "1px solid rgba(230,57,70,0.3)",
              }}
            >
              <p
                className="text-sm font-bold mb-3"
                style={{ color: "var(--color-text)" }}
              >
                Is Your Organization Secure?
              </p>
              <a
                href="tel:+918882732221"
                className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded"
                style={{
                  backgroundColor: "var(--color-accent)",
                  color: "#fff",
                }}
              >
                <Phone size={14} />
                Call for Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
