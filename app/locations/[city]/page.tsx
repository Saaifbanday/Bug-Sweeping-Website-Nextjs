import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/ui/PageHero";
import ContactCTA from "@/components/sections/ContactCTA";
import { cities } from "@/lib/location-data";
import { CheckCircle2, MapPin, Phone, ArrowRight } from "lucide-react";

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const data = cities.find((c) => c.slug === city);
  if (!data) return {};
  return {
    title: `${data.heroTitle} | BugSweepingTSCM.com`,
    description: data.metaDescription,
    alternates: { canonical: `https://bugsweepingtscm.com/locations/${city}` },
  };
}

const services = [
  "Business & Corporate Bug Sweeps",
  "Residential & Home Bug Sweeps",
  "Audio & Listening Device Detection",
  "Hidden Camera Detection",
  "Vehicle GPS Tracker Sweeps",
  "Telephone & VoIP Line Analysis",
];

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const data = cities.find((c) => c.slug === city);
  if (!data) notFound();

  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          label={`${data.city}, ${data.state}`}
          title={data.heroTitle}
          subtitle={data.heroSubtitle}
          breadcrumbs={[
            { label: "Locations", href: "#" },
            { label: data.city, href: "#" },
          ]}
        />

        {/* Intro + Areas served */}
        <section className="py-24" style={{ backgroundColor: "var(--bg-surface)" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Left: intro text + services (3/5) */}
              <div className="lg:col-span-3 flex flex-col gap-8">
                <div>
                  <p className="section-label mb-4">About Our {data.city} Service</p>
                  <h2
                    className="font-black mb-5 leading-tight"
                    style={{
                      fontSize: "clamp(1.6rem, 3vw, 2.25rem)",
                      color: "var(--color-text)",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    Professional Bug Sweeps in{" "}
                    <span style={{ color: "var(--color-accent)" }}>{data.city}</span>
                  </h2>
                  <p
                    className="leading-relaxed mb-6"
                    style={{ color: "var(--color-muted)", fontSize: "1.0625rem" }}
                  >
                    {data.intro}
                  </p>
                  <p
                    className="leading-relaxed"
                    style={{ color: "var(--color-muted)", fontSize: "1.0625rem" }}
                  >
                    {data.whyUs}
                  </p>
                </div>

                {/* Services in this city */}
                <div>
                  <h3
                    className="font-bold mb-5"
                    style={{ color: "var(--color-text)", fontSize: "1.25rem" }}
                  >
                    Services Available in {data.city}
                  </h3>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {services.map((s) => (
                      <li key={s} className="flex items-center gap-3">
                        <CheckCircle2
                          size={18}
                          className="shrink-0"
                          style={{ color: "var(--color-accent)" }}
                        />
                        <span style={{ color: "var(--color-muted)", fontSize: "0.9375rem" }}>
                          {s}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="flex gap-4 flex-wrap">
                  <a
                    href="https://wa.me/918882732221"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <Phone size={16} />
                    Book a Sweep in {data.city}
                  </a>
                  <Link href="/contact" className="btn-secondary">
                    Contact Us
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              {/* Right: areas served (2/5) */}
              <div className="lg:col-span-2">
                <div
                  className="rounded-2xl p-8"
                  style={{
                    backgroundColor: "var(--bg-card)",
                    border: "1px solid var(--color-border)",
                  }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: "rgba(230,57,70,0.12)" }}
                    >
                      <MapPin size={18} style={{ color: "var(--color-accent)" }} />
                    </div>
                    <h3
                      className="font-bold"
                      style={{ color: "var(--color-text)", fontSize: "1.0625rem" }}
                    >
                      Areas We Cover in {data.city}
                    </h3>
                  </div>
                  <ul className="flex flex-col gap-3">
                    {data.areas.map((area) => (
                      <li
                        key={area}
                        className="flex items-start gap-3 pb-3"
                        style={{ borderBottom: "1px solid var(--color-border)" }}
                      >
                        <span
                          className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ backgroundColor: "var(--color-accent)" }}
                        />
                        <span style={{ color: "var(--color-muted)", fontSize: "0.9375rem" }}>
                          {area}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p
                    className="mt-4 text-xs italic"
                    style={{ color: "var(--color-muted)" }}
                  >
                    Don&apos;t see your area? We cover all locations within and around {data.city}. Call us to confirm availability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process steps */}
        <section className="py-24" style={{ backgroundColor: "var(--bg-primary)" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="section-label mb-4">How It Works</p>
              <h2 className="section-title mb-5">
                Booking a Bug Sweep in{" "}
                <span style={{ color: "var(--color-accent)" }}>{data.city}</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "Contact Us",
                  desc: "Call or WhatsApp us. All communications are confidential from the first word — covered by NDA.",
                },
                {
                  step: "02",
                  title: "Threat Assessment",
                  desc: "We assess your specific situation, recommend the right sweep protocol, and provide a transparent quote.",
                },
                {
                  step: "03",
                  title: "Discreet Sweep",
                  desc: `Our technicians arrive in unmarked vehicles at your ${data.city} location at a time you choose.`,
                },
                {
                  step: "04",
                  title: "Written Report",
                  desc: "You receive a comprehensive report covering all findings, evidence collected, and recommended next steps.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="rounded-2xl p-8"
                  style={{
                    backgroundColor: "var(--bg-card)",
                    border: "1px solid var(--color-border)",
                  }}
                >
                  <div
                    className="text-5xl font-black mb-5 leading-none select-none"
                    style={{ color: "rgba(230,57,70,0.15)" }}
                  >
                    {item.step}
                  </div>
                  <h3
                    className="text-lg font-bold mb-3"
                    style={{ color: "var(--color-text)" }}
                  >
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

        <ContactCTA
          title={`Book a Professional Bug Sweep in ${data.city}`}
          subtitle="Confidential. Certified. Available 24/7 for emergencies."
          variant="accent"
        />
      </main>
      <Footer />
    </>
  );
}
