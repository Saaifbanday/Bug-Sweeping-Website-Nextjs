import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/ui/PageHero";
import ZigZagSection from "@/components/ui/ZigZagSection";
import Stats from "@/components/sections/Stats";
import ContactCTA from "@/components/sections/ContactCTA";
import FaqAccordion from "@/components/ui/FaqAccordion";
import Image from "next/image";
import { CheckCircle2, Award, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | India's Leading Bug Sweeping & TSCM Specialists",
  description:
    "A specialist counter-surveillance practice in India. How we scope a bug sweep, which instruments we use and what a sweep can and cannot establish.",
  alternates: { canonical: "https://www.bugsweepingtscm.com/about" },
};

const approachItems = [
  {
    tab: "Our Vision",
    heading: "A Privacy-Secure India",
    body: "Our vision is to create a world where individuals and organizations can operate with complete confidence that their private conversations, strategic decisions, and personal lives are free from covert surveillance. We want BugSweepingTSCM.com to be known for saying plainly what a sweep found, and what it could not establish.",
    bullets: [
      "Leading the fight against illegal eavesdropping across India",
      "Building awareness of modern surveillance threats",
      "Making professional TSCM accessible to every privacy-conscious individual",
      "Setting the gold standard for counter-surveillance excellence",
    ],
  },
  {
    tab: "Our Mission",
    heading: "Detect. Neutralize. Protect.",
    body: "Our mission is simple: to establish, on evidence, whether a space is clean. We combine radio-frequency analysis, non-linear junction detection, optical and thermal inspection and a methodical physical search, and we document what is found in position before it is touched.",
    bullets: [
      "Use radio-frequency analysis, non-linear junction detection, thermal and optical checks on every engagement",
      "Operate with absolute discretion and zero client data retention",
      "Deliver comprehensive sweep reports post-inspection",
      "Provide pan-India coverage with zero compromise on quality",
    ],
  },
];

const zigZagItems = [
  {
    label: "Expert Team",
    title: "Internationally Recognised TSCM Specialists",
    body: "Our team is not assembled from general security professionals. Every member has specialised training in electronic counter-surveillance, and our founder was named Investigator of the Year 2026 by the World Association of Detectives at its 101st Annual Conference in Cannes. The award photographs and signed certificates are published in full on our credentials page.",
    bullets: [
      "Former RAW and IB-trained surveillance detection professionals",
      "Member of the World Association of Detectives",
      "Cyber forensics and digital intelligence experts on staff",
      "Continuous training on emerging bugging technologies",
    ],
    imageSrc: "/images/about_us/why_choose_us/image_1.png",
    imageAlt: "Expert TSCM team in action",
    cta: { label: "Contact Our Team", href: "/contact" },
  },
  {
    label: "The Instruments We Use",
    title: "Equipment That Leaves No Device Undetected",
    body: "Standard security firms use consumer-grade detectors. We deploy the same tools used by government intelligence agencies worldwide — from REI OSCOR Green 24 GHz spectrum analyzers that scan every radio frequency to ORION NLJDs that detect powered-off electronics as tiny as a grain of rice.",
    bullets: [
      "REI OSCOR Green: scans 10 kHz to 24 GHz radio spectrum",
      "ORION 2.4 NLJD: detects electronics even when completely off",
      "FLIR thermal camera: finds heat signatures inside walls and furniture",
      "BlueSleuth & ORIUS: detect Bluetooth and Wi-Fi spy devices",
    ],
    imageSrc: "/images/about_us/rel_image_3.jpeg",
    imageAlt: "TSCM instruments laid out before a sweep",
    cta: { label: "View All Equipment", href: "/#equipment" },
  },
  {
    label: "Absolute Confidentiality",
    title: "Your Privacy Is Our First Priority",
    body: "We understand that even the fact of needing a sweep is sensitive information. Every engagement is handled discreetly. We agree a time that suits you, keep the visit low key, and do not discuss who we work for.",
    bullets: [
      "All team members sign binding NDAs before every engagement",
      "A low key visit, arranged at a time that suits you",
      "Zero client data retained after sweep completion",
      "No social media mentions or case studies without explicit permission",
    ],
    imageSrc: "/images/about_us/why_choose_us/image_3.png",
    imageAlt: "Discreet professional bug sweep operation",
    cta: { label: "Book a Confidential Sweep", href: "/contact" },
  },
  {
    label: "Pan-India Coverage",
    title: "Serving Every Corner of India",
    body: "Privacy threats don't stop at city limits — and neither do we. From Mumbai's financial corridors and Delhi's diplomatic zones to Bengaluru's tech campuses and Jaipur's palatial residences, we travel to the site and scope the work the same way wherever it is.",
    bullets: [
      "Mumbai — corporate headquarters, luxury residences, private jets",
      "New Delhi — embassies, ministerial offices, government buildings",
      "Bengaluru — tech company boardrooms, R&D facilities",
      "All metro cities and Tier-2 cities on request",
    ],
    imageSrc: "/images/about_us/why_choose_us/image_4.png",
    imageAlt: "Pan-India TSCM coverage",
    cta: { label: "Check Coverage in Your City", href: "/contact" },
  },
];

const faqs = [
  {
    q: "How long does a typical bug sweep take?",
    a: "A standard residential sweep takes 2–4 hours. Corporate offices and boardrooms typically require 4–8 hours depending on size and complexity. Vehicle sweeps are completed within 1–2 hours.",
  },
  {
    q: "Do I need to vacate the premises during a sweep?",
    a: "For most sweeps, you can remain present — in fact, we encourage it so we can brief you in real time. For high-security corporate sweeps, we may request minimal staff presence in the target area.",
  },
  {
    q: "What happens if a bugging device is found?",
    a: "We document it thoroughly (photographs, frequency analysis, device type) before removal. You receive a full written report. We advise on legal options and recommend countermeasures to prevent re-installation.",
  },
  {
    q: "How often should I schedule a TSCM sweep?",
    a: "High-risk individuals (executives, government officials, celebrities) should sweep quarterly or before major events. Residences and standard businesses are typically swept annually or after staff changes.",
  },
  {
    q: "Is the sweep completely confidential?",
    a: "Yes. We do not disclose client identities or engagement details, and we keep no more of your information than we need to carry out and record the work.",
  },
  {
    q: "What areas of India do you cover?",
    a: "We provide pan-India service with primary hubs in Mumbai, Delhi, Bengaluru, and Hyderabad. We deploy to all major metros and Tier-2 cities. Contact us to confirm availability in your location.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          label="About Us"
          title="The Unseen Force Behind Your Privacy"
          subtitle="Practising since 2013, led by the World Association of Detectives Investigator of the Year 2026, with more than 500 TSCM sweeps completed across India."
          breadcrumbs={[{ label: "About Us", href: "#" }]}
        />

        {/* ── Who We Are ── */}
        <section
          style={{ backgroundColor: "var(--bg-surface)" }}
          className="py-12 sm:py-24"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Who We Are image */}
              <div className="relative rounded-2xl overflow-hidden aspect-4/3 w-full">
                <Image
                  src="/images/about_us/image_1.png"
                  alt="BugSweepingTSCM expert with equipment"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Text */}
              <div>
                <p className="section-label mb-4">Who We Are</p>
                <h2 className="section-title mb-6">
                  A Specialist{" "}
                  <span style={{ color: "var(--color-accent)" }}>
                    Counter-Surveillance
                  </span>{" "}
                  Practice
                </h2>
                <p
                  className="leading-relaxed mb-5"
                  style={{ color: "var(--color-muted)", fontSize: "1.0625rem" }}
                >
                  At{" "}
                  <strong style={{ color: "var(--color-text)" }}>
                    BugSweepingTSCM.com
                  </strong>
                  , we stand at the forefront of electronic counter-surveillance
                  (TSCM) in India. Practising since{" "}
                  <strong style={{ color: "var(--color-accent)" }}>
                    2013
                  </strong>
                  , our mission is simple yet critical:
                </p>
                <blockquote
                  className="text-lg font-semibold italic mb-6 pl-5"
                  style={{
                    borderLeft: "3px solid var(--color-accent)",
                    color: "var(--color-text)",
                  }}
                >
                  &ldquo;To protect what matters most: your privacy, your
                  conversations, your life.&rdquo;
                </blockquote>
                <p
                  className="leading-relaxed mb-8"
                  style={{ color: "var(--color-muted)", fontSize: "1.0625rem" }}
                >
                  We are a team of seasoned professionals, including{" "}
                  <strong style={{ color: "var(--color-text)" }}>
                    technicians who do this work full time
                  </strong>
                  , trained to detect even the most sophisticated surveillance
                  threats. Our reputation is built on{" "}
                  <strong style={{ color: "var(--color-accent)" }}>
                    absolute discretion, trust, and results.
                  </strong>
                </p>
                <a href="/contact" className="btn-primary">
                  Book a Free Consultation
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── W.A.D. Certificate section ── */}
        <section
          style={{ backgroundColor: "var(--bg-primary)" }}
          className="py-12 sm:py-24"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Text first */}
              <div>
                <p className="section-label mb-4">International Recognition</p>
                <h2 className="section-title mb-6">
                  A Member of the{" "}
                  <span style={{ color: "var(--color-accent)" }}>
                    World Association of Detectives
                  </span>
                </h2>
                <p
                  className="leading-relaxed mb-6"
                  style={{ color: "var(--color-muted)", fontSize: "1.0625rem" }}
                >
                  Our founder and lead specialist,{" "}
                  <strong style={{ color: "var(--color-text)" }}>
                    Hardesh Bhardwaj
                  </strong>
                  , is a member of the{" "}
                  <strong style={{ color: "var(--color-accent)" }}>
                    World Association of Detectives (W.A.D.)
                  </strong>
                  , one of the world&apos;s most prestigious professional
                  associations for investigative and surveillance professionals.
                </p>
                <p
                  className="leading-relaxed mb-8"
                  style={{ color: "var(--color-muted)", fontSize: "1.0625rem" }}
                >
                  Having attended the 99th W.A.D. Annual Conference in Kuala
                  Lumpur, Malaysia, our team stays current with global best
                  practices in financial crime investigation, AI-powered
                  security, crypto fraud detection, and counter-surveillance
                  technology.
                </p>
                <div className="flex flex-col gap-3">
                  {[
                    "W.A.D. Professional Member",
                    "International TSCM Conference Attendee",
                    "Conference sessions on financial crime and cyber threat intelligence",
                    "Conference sessions on cross-border investigation and compliance",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <Award
                        size={16}
                        style={{ color: "var(--color-accent)", flexShrink: 0 }}
                      />
                      <span
                        style={{
                          color: "var(--color-muted)",
                          fontSize: "1rem",
                        }}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
                <a
                  href="/meet-the-founder"
                  className="inline-flex items-center gap-2 mt-6 text-sm font-semibold transition-colors"
                  style={{ color: "var(--color-accent)" }}
                >
                  View Full Portfolio, Awards &amp; Certifications →
                </a>
              </div>
              {/* W.A.D. Certificate image */}
              <div className="relative rounded-2xl overflow-hidden aspect-4/3 w-full">
                <Image
                  src="/images/about_us/certificate.png"
                  alt="W.A.D. Certificate of Participation — Hardesh Bhardwaj"
                  fill
                  className="object-contain"
                  style={{ backgroundColor: "var(--bg-card)" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Our Approach — Vision / Mission / Values with ZigZag ── */}
        <section
          style={{ backgroundColor: "var(--bg-surface)" }}
          className="pt-12 sm:pt-24 pb-4"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="section-label mb-4">Our Approach</p>
            <h2 className="section-title mb-5">
              Fuelling Privacy Protection Through{" "}
              <span style={{ color: "var(--color-accent)" }}>
                Vision, Mission & Values
              </span>
            </h2>
          </div>
        </section>

        {/* Approach tabs content as ZigZag */}
        {approachItems.map((item, idx) => (
          <section
            key={item.tab}
            style={{
              backgroundColor:
                idx % 2 === 0 ? "var(--bg-surface)" : "var(--bg-primary)",
            }}
            className="py-10 sm:py-20"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div
                className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center`}
              >
                {/* Image side */}
                <div className={idx % 2 === 0 ? "lg:order-1" : "lg:order-2"}>
                  {idx === 0 ? (
                    <div className="relative rounded-2xl overflow-hidden aspect-4/3 w-full">
                      <Image
                        src="/images/about_us/rel_image_1.jpeg"
                        alt={item.heading}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="relative rounded-2xl overflow-hidden aspect-4/3 w-full">
                      <Image
                        src="/images/about_us/rel_image_2.jpeg"
                        alt={item.heading}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                </div>
                {/* Text side */}
                <div className={idx % 2 === 0 ? "lg:order-2" : "lg:order-1"}>
                  <p className="section-label mb-3">{item.tab}</p>
                  <h3 className="section-title mb-5">{item.heading}</h3>
                  <p
                    className="leading-relaxed mb-7"
                    style={{
                      color: "var(--color-muted)",
                      fontSize: "1.0625rem",
                    }}
                  >
                    {item.body}
                  </p>
                  <ul className="flex flex-col gap-3">
                    {item.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <CheckCircle2
                          size={18}
                          style={{
                            color: "var(--color-accent)",
                            flexShrink: 0,
                            marginTop: "3px",
                          }}
                        />
                        <span
                          style={{
                            color: "var(--color-muted)",
                            fontSize: "1rem",
                          }}
                        >
                          {b}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* ── Why Choose Us — ZigZag (4 items) ── */}
        <section
          style={{ backgroundColor: "var(--bg-surface)" }}
          className="pt-12 sm:pt-24 pb-4"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="section-label mb-4">Why Choose Us</p>
            <h2 className="section-title">
              Four Reasons India&apos;s Top Clients{" "}
              <span style={{ color: "var(--color-accent)" }}>Trust Us</span>
            </h2>
          </div>
        </section>
        <ZigZagSection items={zigZagItems} bgAlternate />

        {/* ── Stats ── */}
        <Stats />

        {/* ── FAQ ── */}
        <section
          style={{ backgroundColor: "var(--bg-primary)" }}
          className="py-12 sm:py-24"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="section-label mb-4">FAQ</p>
              <h2 className="section-title mb-5">Frequently Asked Questions</h2>
              <p className="section-subtitle mx-auto">
                Everything you need to know about our TSCM sweep process.
              </p>
            </div>
            <FaqAccordion items={faqs} />

            {/* Emergency contact */}
            <div
              className="mt-10 rounded-xl p-8 flex flex-col sm:flex-row items-center justify-between gap-4"
              style={{
                background:
                  "linear-gradient(135deg, rgba(230,57,70,0.1) 0%, rgba(230,57,70,0.04) 100%)",
                border: "1px solid rgba(230,57,70,0.25)",
              }}
            >
              <div>
                <p
                  className="text-sm font-semibold mb-1"
                  style={{ color: "var(--color-accent)" }}
                >
                  24 / 7 Emergency Sweep
                </p>
                <p
                  className="text-xl font-bold"
                  style={{ color: "var(--color-text)" }}
                >
                  Need an urgent sweep? Call us now.
                </p>
              </div>
              <a href="tel:+918882732221" className="btn-primary shrink-0">
                <Phone size={16} />
                +91 888 273 2221
              </a>
            </div>
          </div>
        </section>

        <ContactCTA
          title="Ready to Secure Your Privacy?"
          subtitle="Book a confidential consultation and we will talk through what a sweep would cover."
          variant="accent"
        />
      </main>
      <Footer />
    </>
  );
}
