import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/ui/PageHero";
import ContactForm from "@/components/sections/ContactForm";
import { Mail, Phone, MapPin, Clock, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us for Bug Sweeps | 24/7 Confidential TSCM Services India",
  description:
    "Need a bug sweep? Contact our certified TSCM experts today. Available 24/7 across India for discreet home, office & vehicle sweeps.",
  alternates: { canonical: "https://www.bugsweepingtscm.com/contact" },
};

const contactDetails = [
  {
    icon: Mail,
    label: "Email Us",
    lines: ["bugsweepingtscm@gmail.com"],
    href: "mailto:bugsweepingtscm@gmail.com",
  },
  {
    icon: Phone,
    label: "Call Us",
    lines: ["+91 888 273 2221"],
    href: "tel:+918882732221",
  },
  {
    icon: MapPin,
    label: "Service Area",
    lines: ["Pan-India Coverage", "Mumbai · Delhi · Bengaluru · Hyderabad · Jaipur"],
    href: null,
  },
  {
    icon: Clock,
    label: "Availability",
    lines: ["24 / 7 for Emergency Sweeps", "Advance bookings: Mon–Sat, 9 AM–7 PM"],
    href: null,
  },
];

const ourApproach = [
  {
    step: "01",
    title: "Confidential First Call",
    desc: "Tell us your concerns over a secure call. Everything shared is strictly confidential, covered by NDA from the first word.",
  },
  {
    step: "02",
    title: "Threat Assessment",
    desc: "We assess the risk profile of your location, recommend the right sweep protocol, and provide a transparent quote.",
  },
  {
    step: "03",
    title: "Discreet Deployment",
    desc: "Our team arrives in unmarked vehicles at a time of your choosing — no disruption, no attention drawn.",
  },
  {
    step: "04",
    title: "Full Written Report",
    desc: "Post-sweep, you receive a comprehensive report covering all findings, evidence, and recommended countermeasures.",
  },
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          label="Contact Us"
          title="Get in Touch: Completely Confidential"
          subtitle="Whether you suspect surveillance or simply want peace of mind, our certified TSCM specialists are ready to help. Every enquiry is handled with absolute discretion."
          breadcrumbs={[{ label: "Contact Us", href: "#" }]}
        />

        {/* ── Contact info cards + form ── */}
        <section style={{ backgroundColor: "var(--bg-surface)" }} className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-12">

              {/* Left: contact info (2/5) */}
              <div className="lg:col-span-2 flex flex-col gap-6">
                <div>
                  <p className="section-label mb-4">Reach Us Directly</p>
                  <h2 className="section-title mb-5" style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)" }}>
                    We&apos;re Here{" "}
                    <span style={{ color: "var(--color-accent)" }}>24 / 7</span>
                  </h2>
                  <p style={{ color: "var(--color-muted)", fontSize: "1.0625rem", lineHeight: "1.75" }}>
                    For emergency sweeps, contact us directly by phone. For advance bookings and general enquiries, use the form or email us.
                  </p>
                </div>

                {/* Contact cards */}
                {contactDetails.map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <div
                      className="flex items-start gap-5 rounded-xl p-6"
                      style={{
                        backgroundColor: "var(--bg-card)",
                        border: "1px solid var(--color-border)",
                      }}
                    >
                      <div
                        className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0"
                        style={{ backgroundColor: "rgba(230,57,70,0.12)" }}
                      >
                        <Icon size={20} style={{ color: "var(--color-accent)" }} />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "var(--color-muted)" }}>
                          {item.label}
                        </p>
                        {item.lines.map((line) => (
                          <p key={line} className="font-semibold leading-snug" style={{ color: "var(--color-text)", fontSize: "0.9375rem" }}>
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  );
                  return item.href ? (
                    <a key={item.label} href={item.href} className="block hover:opacity-90 transition-opacity">
                      {content}
                    </a>
                  ) : (
                    <div key={item.label}>{content}</div>
                  );
                })}

                {/* Confidentiality badge */}
                <div
                  className="rounded-xl p-6 flex items-start gap-4"
                  style={{
                    background: "linear-gradient(135deg, rgba(230,57,70,0.1) 0%, rgba(230,57,70,0.04) 100%)",
                    border: "1px solid rgba(230,57,70,0.25)",
                  }}
                >
                  <Shield size={22} style={{ color: "var(--color-accent)", flexShrink: 0, marginTop: "2px" }} />
                  <p style={{ color: "var(--color-muted)", fontSize: "0.9375rem", lineHeight: "1.75" }}>
                    <strong style={{ color: "var(--color-text)" }}>100% Confidential.</strong> All enquiries are covered by strict NDA. We do not disclose client identities or engagement details under any circumstances.
                  </p>
                </div>
              </div>

              {/* Right: form (3/5) */}
              <div className="lg:col-span-3">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* ── Our Approach ── */}
        <section style={{ backgroundColor: "var(--bg-primary)" }} className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="section-label mb-4">Our Approach</p>
              <h2 className="section-title mb-5">
                What Happens After You{" "}
                <span style={{ color: "var(--color-accent)" }}>Contact Us</span>
              </h2>
              <p className="section-subtitle mx-auto">
                From first call to final report, here is exactly how we work.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {ourApproach.map((item) => (
                <div
                  key={item.step}
                  className="rounded-2xl p-8"
                  style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--color-border)" }}
                >
                  <div
                    className="text-5xl font-black mb-5 leading-none select-none"
                    style={{ color: "rgba(230,57,70,0.15)" }}
                  >
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold mb-3" style={{ color: "var(--color-text)" }}>
                    {item.title}
                  </h3>
                  <p style={{ color: "var(--color-muted)", fontSize: "0.9375rem", lineHeight: "1.75" }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
