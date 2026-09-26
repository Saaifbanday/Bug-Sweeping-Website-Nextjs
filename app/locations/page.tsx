import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/ui/PageHero";
import ContactCTA from "@/components/sections/ContactCTA";
import { cities } from "@/lib/location-data";
import { serializeJsonLd, faqPageNode } from "@/lib/json-ld";
import { MapPin, ArrowRight } from "lucide-react";

const url = "https://www.bugsweepingtscm.com/locations";

export const metadata: Metadata = {
  title: { absolute: "Bug Sweeping Services Across India | Locations We Cover" },
  description:
    "City by city coverage for TSCM bug sweeps across India, with the local policing and reporting detail that changes what you do when a device is found.",
  alternates: { canonical: url },
  openGraph: {
    type: "website",
    url,
    title: "Bug Sweeping Services Across India",
    description:
      "City by city coverage for TSCM bug sweeps across India, with the local policing and reporting detail that matters.",
    locale: "en_IN",
    siteName: "BugSweepingTSCM.com",
  },
};

// Grouped so the page reads as a map of the country rather than one long alphabetical list.
const regions: { region: string; states: string[] }[] = [
  { region: "North India", states: ["Delhi", "Haryana", "Uttar Pradesh", "Chandigarh", "Rajasthan"] },
  { region: "West India", states: ["Maharashtra", "Gujarat", "Goa", "Madhya Pradesh"] },
  { region: "South India", states: ["Karnataka", "Telangana", "Tamil Nadu", "Andhra Pradesh"] },
  { region: "East India", states: ["West Bengal", "Bihar"] },
];

const faqs = [
  {
    q: "Do you cover cities that do not have a page here?",
    a: "Yes. A page exists where we have verified local detail worth publishing, such as which force covers which area or what the state lets you file online. Sweeps are arranged well beyond that list, so ask about your city even if you do not see it.",
  },
  {
    q: "Why does each city page talk about police jurisdiction?",
    a: "Because it decides who takes your complaint, and getting it wrong costs hours on the day it matters. A commissionerate and a district superintendent are different chains of command, and an address that feels like part of a city is often policed by a neighbouring district.",
  },
  {
    q: "Is a bug sweep different from city to city?",
    a: "The method does not change: radio-frequency analysis, a non-linear junction detector for electronics that are switched off, optical and thermal checks, and a physical inspection. What changes is the local context, including which helpline applies, what you can file online and which rules cover hotels or hostels there.",
  },
  {
    q: "Which helpline should I use if something is found?",
    a: "112 works as the emergency number everywhere in India and 1930 covers cyber financial fraud nationally. The women's helpline is the one that varies: several states use 1091, some use 1090, others publish 181, and at least one state uses 181 for something else entirely. Each city page names the number published for that state.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${url}#webpage`,
      url,
      name: "Bug Sweeping Services Across India",
      inLanguage: "en-IN",
      isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" },
      breadcrumb: { "@id": `${url}#breadcrumb` },
      mainEntity: { "@id": `${url}#list` },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.bugsweepingtscm.com/#website",
      url: "https://www.bugsweepingtscm.com",
      name: "BugSweepingTSCM.com",
      inLanguage: "en-IN",
    },
    {
      "@type": "ItemList",
      "@id": `${url}#list`,
      name: "Cities covered",
      numberOfItems: cities.length,
      itemListElement: cities.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: c.city,
        url: `https://www.bugsweepingtscm.com/locations/${c.slug}`,
      })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.bugsweepingtscm.com" },
        { "@type": "ListItem", position: 2, name: "Locations" },
      ],
    },
    faqPageNode(faqs, `${url}#faq`),
  ],
};

export default function LocationsIndexPage() {
  const byState = new Map<string, typeof cities>();
  for (const c of cities) {
    const list = byState.get(c.state) ?? [];
    list.push(c);
    byState.set(c.state, list);
  }

  // Any state not named in the region map still gets shown, under a final group.
  const placed = new Set(regions.flatMap((r) => r.states));
  const unplaced = [...byState.keys()].filter((s) => !placed.has(s));
  const groups = [
    ...regions.map((r) => ({ region: r.region, states: r.states.filter((s) => byState.has(s)) })),
    ...(unplaced.length ? [{ region: "Elsewhere in India", states: unplaced }] : []),
  ].filter((g) => g.states.length > 0);

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
          title="Bug Sweeping Services Across India"
          subtitle="Sweeps are arranged nationwide. These pages carry the local detail that changes what you do when something is found."
          breadcrumbs={[{ label: "Home", href: "/" }]}
        />

        <section className="py-16" style={{ backgroundColor: "var(--bg-surface)" }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <p style={{ color: "var(--color-muted)", fontSize: "1.0625rem", lineHeight: 1.85 }}>
              The sweep itself is the same wherever we do it: radio-frequency analysis for anything
              transmitting, a non-linear junction detector for electronics sitting switched off,
              optical and thermal checks, and a physical inspection of the places a device can
              actually be concealed. What changes from one city to the next is everything that
              happens afterwards.
            </p>
            <p
              className="mt-5"
              style={{ color: "var(--color-muted)", fontSize: "1.0625rem", lineHeight: 1.85 }}
            >
              Which police force covers your address decides who can register the complaint, and the
              boundary is rarely where people assume it is. An industrial estate that everyone calls
              part of the city may sit in the next district. Whether you can report the matter online
              depends on the state, and in most states an online form produces a complaint rather
              than an FIR. Even the women&apos;s helpline differs: some states publish 1091, some
              1090, some 181, and in one state 181 is a grievance line for government departments
              rather than a police number at all. Each page below names what is published for that
              city, with the source checked rather than copied from another site.
            </p>
          </div>
        </section>

        <section className="py-16" style={{ backgroundColor: "var(--bg-primary)" }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {groups.map((group) => (
              <div key={group.region} className="mb-14 last:mb-0">
                <h2
                  className="font-bold mb-6"
                  style={{ color: "var(--color-text)", fontSize: "1.375rem", letterSpacing: "-0.02em" }}
                >
                  {group.region}
                </h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {group.states.flatMap((state) =>
                    (byState.get(state) ?? []).map((c) => (
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
                          <div className="min-w-0">
                            <p
                              className="font-bold"
                              style={{ color: "var(--color-text)", fontSize: "1.0625rem" }}
                            >
                              {c.city}
                            </p>
                            <p className="text-sm" style={{ color: "var(--color-muted)" }}>
                              {c.state}
                            </p>
                          </div>
                          <ArrowRight
                            size={16}
                            style={{ color: "var(--color-muted)", marginLeft: "auto", flex: "0 0 auto" }}
                          />
                        </div>
                      </Link>
                    ))
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16" style={{ backgroundColor: "var(--bg-surface)" }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-bold mb-8"
              style={{ color: "var(--color-text)", fontSize: "1.375rem", letterSpacing: "-0.02em" }}
            >
              Common questions
            </h2>
            {faqs.map((f) => (
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

        <ContactCTA subtitle="Tell us the city and what prompted the concern, and we will explain what a sweep would cover there." />
      </main>
      <Footer />
    </>
  );
}
