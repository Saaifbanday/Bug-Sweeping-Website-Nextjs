import { Shield, CheckCircle2 } from "lucide-react";

const services = [
  "Business Bug Sweeps",
  "Residential Privacy Protection",
  "Vehicle & GPS Tracker Detection",
  "Wi-Fi & Network Security Sweeps",
  "Telephone & Mobile Device Checks",
  "VIP & Celebrity Privacy Audits",
];

const equipment = [
  "REI OSCOR Green Spectrum Analyzers (10 kHz to 24 GHz)",
  "ORION NLJD: detects electronics even when off",
  "Wi-Fi Hunter & Bluetooth Locators",
  "Thermal Imagers & Video Pole Cameras for hidden spaces",
  "Digital TDR Line Analyzers for phone & VoIP",
];

const trustPoints = [
  "20+ Years of Elite Counter-Surveillance Experience",
  "Trusted by CEOs, Celebrities, Government Officials & HNIs",
  "Fully confidential operations with zero disruptions",
  "Pan-India service: from Mumbai penthouses to Delhi embassies, Bengaluru boardrooms to Jaipur palaces",
];

export default function AboutUs() {
  return (
    <section id="about" className="py-20" style={{ backgroundColor: "var(--bg-surface)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="text-center mb-14">
          <p className="section-label mb-3">About Us</p>
          <h2 className="section-title mb-4">
            We Offer Elite Counter-Surveillance &amp;{" "}
            <span style={{ color: "var(--color-accent)" }}>Privacy Protection</span>
          </h2>
        </div>

        {/* Who We Are */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image placeholder */}
          <div
            className="rounded-2xl overflow-hidden relative flex items-center justify-center"
            style={{
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--color-border)",
              minHeight: "380px",
            }}
          >
            <div className="flex flex-col items-center gap-4 p-8 text-center">
              <div
                className="rounded-full p-6"
                style={{
                  backgroundColor: "rgba(230,57,70,0.1)",
                  border: "1px solid rgba(230,57,70,0.2)",
                }}
              >
                <Shield size={56} style={{ color: "var(--color-accent)" }} />
              </div>
              <p className="text-sm" style={{ color: "var(--color-muted)" }}>
                [ Image — TSCM Expert performing bug sweep ]
              </p>
            </div>
            {/* Replace above with:
            <Image
              src="/images/about-sweep.jpg"
              alt="TSCM Expert performing bug sweep"
              fill
              className="object-cover"
            /> */}
          </div>

          {/* Text */}
          <div>
            <p className="section-label mb-3">Who We Are</p>
            <h3
              className="text-2xl font-bold mb-4"
              style={{ color: "var(--color-text)" }}
            >
              The Unseen Force Behind Your Privacy
            </h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--color-muted)" }}>
              At{" "}
              <strong style={{ color: "var(--color-text)" }}>
                BugSweepingTSCM.com
              </strong>
              , we stand at the forefront of electronic counter-surveillance (TSCM) in India
              and beyond. With over{" "}
              <strong style={{ color: "var(--color-accent)" }}>20 years of expertise</strong>,
              our mission is simple yet critical:
            </p>
            <blockquote
              className="text-base font-semibold italic mb-5 pl-4"
              style={{
                borderLeft: "3px solid var(--color-accent)",
                color: "var(--color-text)",
              }}
            >
              &ldquo;To protect what matters most: your privacy, your conversations, your
              life.&rdquo;
            </blockquote>
            <p className="text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
              We are a team of seasoned professionals, including{" "}
              <strong style={{ color: "var(--color-text)" }}>
                former intelligence officers, cyber experts, and certified TSCM specialists
              </strong>
              , trained to detect even the most sophisticated threats. Our reputation is built
              on{" "}
              <strong style={{ color: "var(--color-accent)" }}>
                absolute discretion, trust, and results.
              </strong>
            </p>
          </div>
        </div>

        {/* What We Do */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          <div>
            <p className="section-label mb-3">What We Do</p>
            <h3
              className="text-2xl font-bold mb-2"
              style={{ color: "var(--color-text)" }}
            >
              Detect. Neutralize. Protect.
            </h3>
            <p className="text-sm mb-6" style={{ color: "var(--color-muted)" }}>
              We specialize exclusively in{" "}
              <strong style={{ color: "var(--color-text)" }}>
                Technical Surveillance Counter-Measures (TSCM)
              </strong>{" "}
              commonly known as bug sweeping. Our comprehensive services include:
            </p>
            <ul className="flex flex-col gap-3">
              {services.map((s) => (
                <li key={s} className="flex items-center gap-3">
                  <CheckCircle2 size={16} style={{ color: "var(--color-accent)", flexShrink: 0 }} />
                  <span className="text-sm" style={{ color: "var(--color-muted)" }}>
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Equipment That Sets Us Apart */}
          <div>
            <p className="section-label mb-3">Equipment That Sets Us Apart</p>
            <h3
              className="text-2xl font-bold mb-2"
              style={{ color: "var(--color-text)" }}
            >
              Military-Grade TSCM Technology
            </h3>
            <p className="text-sm mb-6" style={{ color: "var(--color-muted)" }}>
              We deploy only{" "}
              <strong style={{ color: "var(--color-accent)" }}>
                military-grade TSCM equipment
              </strong>
              , including:
            </p>
            <ul className="flex flex-col gap-3">
              {equipment.map((e) => (
                <li key={e} className="flex items-center gap-3">
                  <CheckCircle2 size={16} style={{ color: "var(--color-accent)", flexShrink: 0 }} />
                  <span className="text-sm" style={{ color: "var(--color-muted)" }}>
                    {e}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Why Clients Trust Us */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, var(--bg-card) 0%, rgba(13,21,38,0.8) 100%)",
            border: "1px solid var(--color-border)",
          }}
        >
          <div className="grid lg:grid-cols-2">
            {/* Image placeholder */}
            <div
              className="relative min-h-64 lg:min-h-full flex items-center justify-center"
              style={{ backgroundColor: "rgba(230,57,70,0.04)" }}
            >
              <div className="text-center p-8">
                <p
                  className="text-4xl font-black mb-2"
                  style={{ color: "var(--color-text)" }}
                >
                  Your World.
                  <br />
                  <span style={{ color: "var(--color-accent)" }}>Protected.</span>
                </p>
              </div>
              {/* Replace with:
              <Image
                src="/images/about-protected.jpg"
                alt="Privacy protection"
                fill
                className="object-cover"
              /> */}
            </div>

            {/* Text */}
            <div className="p-8 lg:p-10">
              <p className="section-label mb-3">Why Clients Trust Us</p>
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: "var(--color-text)" }}
              >
                Discretion, Expertise & Results
              </h3>
              <blockquote
                className="text-sm italic mb-6 pl-4"
                style={{
                  borderLeft: "3px solid var(--color-accent)",
                  color: "var(--color-muted)",
                }}
              >
                &ldquo;When privacy is not an option, but an absolute necessity, we are
                the ones you call.&rdquo;
              </blockquote>
              <ul className="flex flex-col gap-3">
                {trustPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle2
                      size={16}
                      style={{ color: "var(--color-accent)", flexShrink: 0, marginTop: "2px" }}
                    />
                    <span className="text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
