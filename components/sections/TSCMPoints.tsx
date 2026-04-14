import Link from "next/link";

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
    <section className="py-24" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="section-label mb-4">TSCM Coverage</p>
          <h2 className="section-title mb-5">
            Key Vulnerability Points
            <br className="hidden md:block" />
            <span style={{ color: "var(--color-accent)" }}> in Your Organisation</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A robust TSCM programme systematically inspects every potential entry point for
            surveillance — physical and electronic — before sensitive activity takes place.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((point) => (
            <div
              key={point.label}
              className="rounded-2xl p-5 sm:p-8 flex gap-4 sm:gap-5"
              style={{
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--color-border)",
              }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 text-2xl"
                style={{ backgroundColor: "rgba(230,57,70,0.1)" }}
              >
                {point.emoji}
              </div>
              <div>
                <h3
                  className="font-bold mb-2"
                  style={{ color: "var(--color-text)", fontSize: "1.0625rem" }}
                >
                  {point.label}
                </h3>
                <p
                  className="leading-relaxed"
                  style={{ color: "var(--color-muted)", fontSize: "0.9375rem" }}
                >
                  {point.desc}
                </p>
              </div>
            </div>
          ))}

          {/* CTA Card */}
          <div
            className="rounded-2xl p-8 flex flex-col items-center justify-center text-center gap-5"
            style={{
              background: "linear-gradient(135deg, rgba(230,57,70,0.15) 0%, rgba(230,57,70,0.05) 100%)",
              border: "1px solid rgba(230,57,70,0.3)",
            }}
          >
            <p className="font-bold" style={{ color: "var(--color-text)", fontSize: "1.125rem" }}>
              Is Your Organisation Secure?
            </p>
            <p style={{ color: "var(--color-muted)", fontSize: "0.9375rem" }}>
              A single undetected device can cost you everything.
            </p>
            <Link
              href="https://wa.me/918882732221"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book a Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
