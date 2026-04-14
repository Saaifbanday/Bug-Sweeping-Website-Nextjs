import Image from "next/image";
import { ArrowRight, Shield, Eye, Wifi } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #080d1a 0%, #0d1526 50%, #080d1a 100%)",
        minHeight: "92vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, #e63946 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Red glow top-left */}
      <div
        className="absolute top-0 left-0 w-96 h-96 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(230,57,70,0.12) 0%, transparent 70%)",
          transform: "translate(-30%, -30%)",
        }}
      />

      {/* Blue glow bottom-right */}
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(29,78,216,0.1) 0%, transparent 70%)",
          transform: "translate(30%, 30%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left — Text Content */}
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase"
                style={{
                  backgroundColor: "rgba(230,57,70,0.12)",
                  color: "var(--color-accent)",
                  border: "1px solid rgba(230,57,70,0.25)",
                }}
              >
                Advanced Bug Sweeping & TSCM Solutions
              </span>
            </div>

            {/* Headline */}
            <h1
              className="font-bold leading-tight mb-6"
              style={{
                fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
                color: "var(--color-text)",
              }}
            >
              Secure Your Homes,
              <br />
              <span style={{ color: "var(--color-accent)" }}>Offices,</span> and
              Lives
              <br />
              from Hidden Surveillance.
            </h1>

            {/* Subtext */}
            <p
              className="text-base leading-relaxed mb-3"
              style={{
                color: "var(--color-muted)",
                maxWidth: "520px",
              }}
            >
              Experience unmatched privacy protection with India&apos;s premier
              experts in electronic counter-surveillance.
            </p>

            {/* Trust line */}
            <p
              className="text-sm font-medium mb-8 italic"
              style={{ color: "var(--color-accent)" }}
            >
              Exclusive. Discreet. Trusted by HNIs, CEOs, and celebrities.
            </p>

            {/* Peace of mind tagline */}
            <p
              className="text-base mb-8 font-semibold"
              style={{ color: "var(--color-text)" }}
            >
              Get The Peace Of Mind You Deserve!
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-8 sm:mb-12">
              <a
                href="https://wa.me/918882732221"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base"
              >
                Get Started
                <ArrowRight size={16} />
              </a>
              <a href="#services" className="btn-secondary text-base">
                View Services
                <ArrowRight size={16} />
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6">
              {[
                { icon: Shield, label: "20+ Years Experience" },
                { icon: Eye, label: "Military-Grade Equipment" },
                { icon: Wifi, label: "Pan-India Coverage" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <div
                    className="rounded-full p-1.5"
                    style={{ backgroundColor: "rgba(230,57,70,0.12)" }}
                  >
                    <Icon size={14} style={{ color: "var(--color-accent)" }} />
                  </div>
                  <span
                    className="text-sm font-medium"
                    style={{ color: "var(--color-muted)" }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Hero image */}
          <div className="relative flex justify-center lg:justify-end">
            <div
              className="relative rounded-2xl overflow-hidden w-full aspect-4/3 sm:aspect-3/4 lg:aspect-4/5"
              style={{ maxWidth: "520px" }}
            >
              <Image
                src="/images/hero section/Untitled-design-5.png"
                alt="TSCM Expert conducting bug sweep"
                fill
                className="object-cover"
                priority
              />

              {/* Floating card — stat */}
              <div
                className="absolute bottom-6 left-6 rounded-lg px-4 py-3"
                style={{
                  backgroundColor: "rgba(8,13,26,0.9)",
                  border: "1px solid var(--color-border)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="rounded-full p-2"
                    style={{ backgroundColor: "rgba(230,57,70,0.15)" }}
                  >
                    <Shield
                      size={16}
                      style={{ color: "var(--color-accent)" }}
                    />
                  </div>
                  <div>
                    <div
                      className="text-lg font-bold leading-none"
                      style={{ color: "var(--color-text)" }}
                    >
                      500+
                    </div>
                    <div
                      className="text-xs"
                      style={{ color: "var(--color-muted)" }}
                    >
                      Sweeps Completed
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative ring */}
            <div
              className="absolute -top-4 -right-4 w-24 h-24 rounded-full border opacity-10"
              style={{ borderColor: "var(--color-accent)" }}
            />
            <div
              className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full border opacity-10"
              style={{ borderColor: "var(--color-accent)" }}
            />
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20"
        style={{
          background:
            "linear-gradient(to bottom, transparent, var(--bg-primary))",
        }}
      />
    </section>
  );
}
