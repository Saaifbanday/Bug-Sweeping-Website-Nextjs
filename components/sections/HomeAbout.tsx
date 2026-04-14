import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

const items = [
  {
    label: "Who We Are",
    title: "India's Most Trusted TSCM Specialists",
    body: "BugSweepingTSCM is a dedicated technical surveillance countermeasure (TSCM) firm operated by trained security professionals. We exist for one purpose: to find and neutralise hidden surveillance devices before they cause irreparable damage to your business, your family, or your reputation.",
    bullets: [
      "Certified TSCM technicians with field-proven expertise",
      "Strictly confidential. NDA-covered from the first call",
      "Unmarked vehicles, discreet arrival, zero attention drawn",
      "Deployed across India — Mumbai, Delhi, Bengaluru & beyond",
    ],
    imageSrc: "/images/homepage/first_image.png",
    imagePlaceholderLabel: "who-we-are",
  },
  {
    label: "What We Do",
    title: "Complete Privacy Audits — From Offices to Vehicles",
    body: "We perform thorough physical and electronic sweeps of any environment: boardrooms, residences, hotel rooms, personal vehicles, and executive suites. Whether you suspect corporate espionage, a domestic surveillance threat, or simply want proactive assurance — we have the expertise and equipment to deliver certainty.",
    bullets: [
      "RF & GSM transmitter detection",
      "Hidden camera and microphone discovery",
      "GPS tracker location in vehicles",
      "Telephone & VoIP line analysis",
    ],
    imageSrc: "/images/homepage/second_image.png",
    imagePlaceholderLabel: "what-we-do",
  },
  {
    label: "Our Equipment",
    title: "Equipment That Sets Us Apart",
    body: "We do not cut corners on technology. Our toolkit includes the same instruments used by government intelligence agencies and elite corporate security teams worldwide. Every piece of equipment is professionally maintained and calibrated before each deployment.",
    bullets: [
      "REI OSCOR Green — 24 GHz full-spectrum analyzer",
      "REI ORION 2.4 NLJD — detects powered-off devices",
      "FLIR Thermal Camera — heat-signature detection",
      "WolfHound Pro — GPS tracker & GSM bug locator",
    ],
    imageSrc: "/images/homepage/third_image.png",
    imagePlaceholderLabel: "our-equipment",
  },
  {
    label: "Why Choose Us",
    title: "Why India's Most Privacy-Conscious Clients Trust Us",
    body: "Our clients include C-suite executives, government officials, high-net-worth individuals, and legal professionals. They come to us because the stakes are high — and they know a thorough, certified sweep requires far more than a consumer-grade detector from an online marketplace.",
    bullets: [
      "20+ years of combined TSCM field experience",
      "500+ successful sweeps across India",
      "100% confidentiality — clients never disclosed",
      "Detailed written report with every sweep",
    ],
    imageSrc: "/images/homepage/fourth_image.png",
    imagePlaceholderLabel: "why-choose-us",
  },
];

export default function HomeAbout() {
  return (
    <section className="py-24" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <p className="section-label mb-4">About BugSweepingTSCM</p>
          <h2 className="section-title mb-5">
            We Offer Elite Counter-Surveillance &amp;{" "}
            <span style={{ color: "var(--color-accent)" }}>Privacy Protection</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Trusted by India&apos;s leading executives, officials, and high-net-worth individuals
            for discreet, comprehensive bug sweep services.
          </p>
        </div>

        {/* Alternating ZigZag rows */}
        <div className="flex flex-col gap-16 sm:gap-24">
          {items.map((item, idx) => {
            const isEven = idx % 2 === 0;

            const imagePlaceholder = (
              <div
                className="relative rounded-2xl overflow-hidden w-full"
                style={{ minHeight: "280px" }}
              >
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  fill
                  className="object-cover rounded-2xl"
                />
                <div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(230,57,70,0.06) 0%, rgba(8,13,26,0.18) 100%)",
                  }}
                />
              </div>
            );

            const textBlock = (
              <div className="flex flex-col justify-center gap-6">
                <p className="section-label">{item.label}</p>
                <h3
                  className="font-black leading-tight"
                  style={{
                    color: "var(--color-text)",
                    fontSize: "clamp(1.6rem, 3vw, 2.25rem)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  className="leading-relaxed"
                  style={{ color: "var(--color-muted)", fontSize: "1.0625rem" }}
                >
                  {item.body}
                </p>
                <ul className="flex flex-col gap-3">
                  {item.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <CheckCircle2
                        size={20}
                        className="shrink-0 mt-0.5"
                        style={{ color: "var(--color-accent)" }}
                      />
                      <span style={{ color: "var(--color-muted)", fontSize: "1rem" }}>
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
                {idx === items.length - 1 && (
                  <div className="flex gap-4 flex-wrap mt-2">
                    <Link href="/about" className="btn-primary">
                      More About Us
                    </Link>
                    <Link href="/contact" className="btn-secondary">
                      Book a Sweep
                    </Link>
                  </div>
                )}
              </div>
            );

            return (
              <div
                key={item.label}
                className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
              >
                {isEven ? (
                  <>
                    <div>{imagePlaceholder}</div>
                    <div>{textBlock}</div>
                  </>
                ) : (
                  <>
                    <div className="order-2 lg:order-2">{imagePlaceholder}</div>
                    <div className="order-1 lg:order-1">{textBlock}</div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
