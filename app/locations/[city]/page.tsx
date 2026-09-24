import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/ui/PageHero";
import ContactCTA from "@/components/sections/ContactCTA";
import { cities } from "@/lib/location-data";
import { serializeJsonLd, faqPageNode } from "@/lib/json-ld";
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
  const url = `https://www.bugsweepingtscm.com/locations/${city}`;
  const title = data.seoTitle ?? `${data.heroTitle} | BugSweepingTSCM.com`;
  return {
    title: data.seoTitle ? { absolute: data.seoTitle } : title,
    description: data.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title,
      description: data.metaDescription,
      locale: "en_IN",
      siteName: "BugSweepingTSCM.com",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: data.metaDescription,
    },
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

  // Append the FAQPage node so the markup is built from the same array that renders the visible FAQ.
  const graph = data.jsonLd?.["@graph"];
  const jsonLd =
    data.jsonLd && data.faqs?.length && Array.isArray(graph)
      ? {
          ...data.jsonLd,
          "@graph": [
            ...graph,
            faqPageNode(data.faqs, `https://www.bugsweepingtscm.com/locations/${city}#faq`),
          ],
        }
      : data.jsonLd;

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
        />
      )}
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
                    className="mt-4 text-sm italic"
                    style={{ color: "var(--color-muted)" }}
                  >
                    Don&apos;t see your area? Call us and we will confirm whether we cover it.
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
                  title: "Get in touch",
                  desc: "Call or message us from a phone you trust, away from the space you are worried about.",
                },
                {
                  step: "02",
                  title: "Agree the scope",
                  desc: "We discuss what triggered the concern, which rooms, vehicles and lines to cover, and quote for that scope.",
                },
                {
                  step: "03",
                  title: "The sweep",
                  desc: `We examine the agreed areas at your ${data.city} location at a time you choose, and document anything found in position before it is touched.`,
                },
                {
                  step: "04",
                  title: "Written report",
                  desc: "You receive a report covering the areas examined, the methods used, the findings, and the limits of what a sweep can establish.",
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

        {/* Jurisdiction and local risk settings: the city-specific part of the page */}
        {data.jurisdiction && (
          <section className="py-24" style={{ backgroundColor: "var(--bg-primary)" }}>
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <p className="section-label mb-4">Coverage</p>
              <h2 className="section-title mb-6">{data.jurisdiction.heading}</h2>
              {data.jurisdiction.body.map((para) => (
                <p
                  key={para.slice(0, 40)}
                  className="mb-5 leading-relaxed"
                  style={{ color: "var(--color-muted)", fontSize: "1.0625rem" }}
                >
                  {para}
                </p>
              ))}
            </div>
          </section>
        )}

        {data.settings && data.settings.length > 0 && (
          <section className="py-24" style={{ backgroundColor: "var(--bg-surface)" }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-14">
                <p className="section-label mb-4">Where sweeps are asked for</p>
                <h2 className="section-title mb-5">
                  Common situations in{" "}
                  <span style={{ color: "var(--color-accent)" }}>{data.city}</span>
                </h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {data.settings.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl p-8"
                    style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--color-border)" }}
                  >
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
        )}

        {/* What you receive, and the honest limits. Kept short; the detail lives on /services. */}
        {data.faqs && data.faqs.length > 0 && (
          <section className="py-24" style={{ backgroundColor: "var(--bg-primary)" }}>
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <p className="section-label mb-4">What you receive</p>
              <h2 className="section-title mb-6">The report, and what it can establish</h2>
              <p className="mb-5 leading-relaxed" style={{ color: "var(--color-muted)", fontSize: "1.0625rem" }}>
                After the sweep you receive a written report: the areas examined and any that could not be
                accessed, the methods used in each, anything found with photographs taken in position, and
                practical recommendations. If a device is found, we document it before anyone moves it, so the
                evidence survives for a police complaint.
              </p>
              <p className="mb-5 leading-relaxed" style={{ color: "var(--color-muted)", fontSize: "1.0625rem" }}>
                A sweep reports what was found in the areas examined, with the methods used, at the time of the
                visit. Finding nothing does not prove nothing was ever there, and no sweep keeps a space clean
                afterwards. We would rather say that plainly than promise complete detection.
              </p>
              <p className="leading-relaxed" style={{ color: "var(--color-muted)", fontSize: "1.0625rem" }}>
                The full range of sweeps is described on our{" "}
                <Link href="/services" style={{ color: "var(--color-accent)" }}>
                  services page
                </Link>
                , and our{" "}
                <Link href="/blog/bug-sweeping-in-india" style={{ color: "var(--color-accent)" }}>
                  national guide
                </Link>{" "}
                covers how to prepare, what drives the cost, and what to do if you find a device. The
                credentials behind the work, including company registration and award documentation, are on the{" "}
                <Link href="/meet-the-founder" style={{ color: "var(--color-accent)" }}>
                  founder page
                </Link>
                .
              </p>
            </div>
          </section>
        )}

        {data.faqs && data.faqs.length > 0 && (
          <section className="py-24" style={{ backgroundColor: "var(--bg-surface)" }}>
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <p className="section-label mb-4">Questions</p>
              <h2 className="section-title mb-10">
                Bug sweeping in{" "}
                <span style={{ color: "var(--color-accent)" }}>{data.city}</span>: common questions
              </h2>
              <div className="flex flex-col gap-8">
                {data.faqs.map((faq) => (
                  <div key={faq.q}>
                    <h3
                      className="font-bold mb-3"
                      style={{ color: "var(--color-text)", fontSize: "1.125rem" }}
                    >
                      {faq.q}
                    </h3>
                    <p style={{ color: "var(--color-muted)", fontSize: "1.0625rem", lineHeight: "1.8" }}>
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>

              {data.guide && (
                <Link
                  href={data.guide.href}
                  className="inline-flex items-center gap-2 mt-10 font-semibold"
                  style={{ color: "var(--color-accent)" }}
                >
                  {data.guide.label}
                  <ArrowRight size={16} />
                </Link>
              )}
            </div>
          </section>
        )}

        <ContactCTA
          title={`Book a Professional Bug Sweep in ${data.city}`}
          subtitle="Tell us what you are worried about and we will explain what a sweep would cover."
          variant="accent"
        />
      </main>
      <Footer />
    </>
  );
}
