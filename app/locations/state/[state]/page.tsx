import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/ui/PageHero";
import ContactCTA from "@/components/sections/ContactCTA";
import { states } from "@/lib/state-data";
import { cities } from "@/lib/location-data";
import { serializeJsonLd, faqPageNode } from "@/lib/json-ld";
import { MapPin, ArrowRight } from "lucide-react";

export function generateStaticParams() {
  return states.map((s) => ({ state: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string }>;
}): Promise<Metadata> {
  const { state } = await params;
  const data = states.find((s) => s.slug === state);
  if (!data) return {};
  const url = `https://www.bugsweepingtscm.com/locations/state/${state}`;
  return {
    title: { absolute: data.seoTitle },
    description: data.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: data.seoTitle,
      description: data.metaDescription,
      locale: "en_IN",
      siteName: "BugSweepingTSCM.com",
    },
    twitter: {
      card: "summary_large_image",
      title: data.seoTitle,
      description: data.metaDescription,
    },
  };
}

export default async function StatePage({
  params,
}: {
  params: Promise<{ state: string }>;
}) {
  const { state } = await params;
  const data = states.find((s) => s.slug === state);
  if (!data) notFound();

  const linkedCities = data.cityPages
    .map((slug) => cities.find((c) => c.slug === slug))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  // Built from the same data the page renders, so the schema cannot drift from the visible text.
  const pageUrl = `https://www.bugsweepingtscm.com/locations/state/${data.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: data.heroTitle,
        inLanguage: "en-IN",
        isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" },
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
        about: { "@id": `${pageUrl}#place` },
      },
      {
        "@type": "WebSite",
        "@id": "https://www.bugsweepingtscm.com/#website",
        url: "https://www.bugsweepingtscm.com",
        name: "BugSweepingTSCM.com",
        inLanguage: "en-IN",
      },
      {
        "@type": "AdministrativeArea",
        "@id": `${pageUrl}#place`,
        name: data.state,
        address: { "@type": "PostalAddress", addressRegion: data.state, addressCountry: "IN" },
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: `Bug sweeping and TSCM services in ${data.state}`,
        serviceType: "Technical surveillance countermeasures",
        provider: { "@id": "https://www.bugsweepingtscm.com/#organization" },
        areaServed: { "@id": `${pageUrl}#place` },
        mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
      },
      {
        "@type": "Organization",
        "@id": "https://www.bugsweepingtscm.com/#organization",
        name: "BugSweepingTSCM",
        url: "https://www.bugsweepingtscm.com",
        logo: "https://www.bugsweepingtscm.com/images/logo/bug-sweep.png",
        email: "bugsweepingtscm@gmail.com",
        telephone: "+91-8882732221",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.bugsweepingtscm.com" },
          { "@type": "ListItem", position: 2, name: "Locations", item: "https://www.bugsweepingtscm.com/locations" },
          { "@type": "ListItem", position: 3, name: data.state },
        ],
      },
      faqPageNode(data.faqs, `${pageUrl}#faq`),
    ],
  };

  const section = (s: { heading: string; body: string[] }) => (
    <section className="py-14" style={{ backgroundColor: "var(--bg-surface)" }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="font-bold mb-5"
          style={{ color: "var(--color-text)", fontSize: "1.375rem", letterSpacing: "-0.02em" }}
        >
          {s.heading}
        </h2>
        {s.body.map((p, i) => (
          <p
            key={i}
            className="mb-4 last:mb-0"
            style={{ color: "var(--color-muted)", fontSize: "1.0625rem", lineHeight: 1.85 }}
          >
            {p}
          </p>
        ))}
      </div>
    </section>
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />
      <Header />
      <main className="flex-1">
        <PageHero
          label="Locations"
          title={data.heroTitle}
          subtitle={data.heroSubtitle}
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Locations", href: "/locations" },
          ]}
        />

        <section className="py-14" style={{ backgroundColor: "var(--bg-primary)" }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <p style={{ color: "var(--color-muted)", fontSize: "1.0625rem", lineHeight: 1.85 }}>
              {data.intro}
            </p>
          </div>
        </section>

        {section(data.policing)}

        <section className="py-14" style={{ backgroundColor: "var(--bg-primary)" }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-bold mb-5"
              style={{ color: "var(--color-text)", fontSize: "1.375rem", letterSpacing: "-0.02em" }}
            >
              {data.reporting.heading}
            </h2>
            {data.reporting.body.map((p, i) => (
              <p
                key={i}
                className="mb-4 last:mb-0"
                style={{ color: "var(--color-muted)", fontSize: "1.0625rem", lineHeight: 1.85 }}
              >
                {p}
              </p>
            ))}
          </div>
        </section>

        {data.accommodation && section(data.accommodation)}

        {/* Cities with a page of their own */}
        {linkedCities.length > 0 && (
          <section className="py-14" style={{ backgroundColor: "var(--bg-primary)" }}>
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2
                className="font-bold mb-3"
                style={{ color: "var(--color-text)", fontSize: "1.375rem", letterSpacing: "-0.02em" }}
              >
                Cities in {data.state} covered in detail
              </h2>
              <p className="mb-7" style={{ color: "var(--color-muted)" }}>
                These have a page of their own, with the local jurisdiction detail and the areas
                covered.
              </p>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {linkedCities.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/locations/${c.slug}`}
                    className="card p-5 block"
                    style={{ textDecoration: "none" }}
                  >
                    <div className="flex items-start gap-3">
                      <MapPin
                        size={18}
                        style={{ color: "var(--color-accent)", flex: "0 0 auto", marginTop: 3 }}
                      />
                      <p
                        className="font-bold min-w-0"
                        style={{ color: "var(--color-text)", fontSize: "1.0625rem" }}
                      >
                        {c.city}
                      </p>
                      <ArrowRight
                        size={16}
                        style={{ color: "var(--color-muted)", marginLeft: "auto", flex: "0 0 auto" }}
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* District coverage table: where the long tail of town names lives */}
        <section className="py-14" style={{ backgroundColor: "var(--bg-surface)" }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-bold mb-3"
              style={{ color: "var(--color-text)", fontSize: "1.375rem", letterSpacing: "-0.02em" }}
            >
              Districts and towns across {data.state}
            </h2>
            <p className="mb-7" style={{ color: "var(--color-muted)" }}>
              Sweeps are arranged across the state, not only in the cities listed above. If your town
              is not named here it does not mean we cannot reach it, so please ask.
            </p>
            <div className="prose-custom">
              <div className="table-wrap">
                <table>
                  <caption>District by district, with the main towns in each.</caption>
                  <thead>
                    <tr>
                      <th scope="col">District</th>
                      <th scope="col">Towns and urban centres</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.districts.map((d) => (
                      <tr key={d.district}>
                        <th scope="row">{d.district}</th>
                        <td>{d.towns.join(", ")}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-14" style={{ backgroundColor: "var(--bg-primary)" }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-bold mb-8"
              style={{ color: "var(--color-text)", fontSize: "1.375rem", letterSpacing: "-0.02em" }}
            >
              Questions about {data.state}
            </h2>
            {data.faqs.map((f) => (
              <div key={f.q} className="mb-6">
                <h3
                  className="font-bold mb-2"
                  style={{ color: "var(--color-text)", fontSize: "1.0625rem" }}
                >
                  {f.q}
                </h3>
                <p style={{ color: "var(--color-muted)", lineHeight: 1.8 }}>{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <ContactCTA subtitle={`Tell us where in ${data.state} you are and what prompted the concern, and we will explain what a sweep would cover.`} />
      </main>
      <Footer />
    </>
  );
}
