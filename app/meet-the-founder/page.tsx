import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/components/ui/Logo";
import HoverCard from "@/components/ui/HoverCard";
import ContactCTA from "@/components/sections/ContactCTA";
import {
  ArrowLeft,
  Trophy,
  Award,
  Star,
  Building2,
  Mic,
  Users,
  FileText,
  ExternalLink,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Portfolio | Hardesh Bhardwaj, W.A.D. Investigator of the Year 2026",
  description:
    "The credentials behind BugSweepingTSCM.com: Hardesh Bhardwaj, Founder of ADA Advance Detective Agency, W.A.D. Investigator of the Year 2026, with 13 years of practice, certifications, conference recognitions, and award photos.",
  alternates: { canonical: "https://www.bugsweepingtscm.com/meet-the-founder" },
};

const stats = [
  { icon: Trophy, value: "Investigator of the Year", label: "W.A.D. Award, 2026" },
  { icon: Star, value: "13 Years", label: "In Practice Since 2013" },
  { icon: Users, value: "3,000+", label: "Cases Handled" },
  { icon: Building2, value: "500+", label: "TSCM Sweeps Completed" },
];

const galleryItems = [
  {
    src: "/portfolio/wad-conference-speaking.png",
    alt: "Hardesh Bhardwaj addressing delegates at the W.A.D. 101st Annual Conference, Cannes",
    caption: "Addressing delegates at the W.A.D. 101st Annual Conference",
    aspect: "aspect-3/4",
  },
  {
    src: "/portfolio/wad-conference-networking.jpg",
    alt: "Hardesh Bhardwaj with Mike LaCorte (Past President) and Bob Heales (President Emeritus), World Association of Detectives",
    caption: "With Mike LaCorte (Past President) & Bob Heales (President Emeritus), W.A.D.",
    aspect: "aspect-3/4",
  },
  {
    src: "/portfolio/wad-cannes-conference-2.jpg",
    alt: "Hardesh Bhardwaj at the W.A.D. 101st Annual Conference welcome desk, Cannes, France",
    caption: "W.A.D. 101st Annual Conference, Cannes, France",
    aspect: "aspect-4/3",
  },
  {
    src: "/portfolio/wad-cannes-conference-1.jpg",
    alt: "Hardesh Bhardwaj at the W.A.D. 101st Annual Conference, Hotel Le Gray d'Albion, Cannes",
    caption: "Hôtel Le Gray d'Albion, Cannes, September 2026",
    aspect: "aspect-3/4",
  },
  {
    src: "/portfolio/wad-cannes-conference-3.jpg",
    alt: "Hardesh Bhardwaj, delegate badge, W.A.D. 101st Annual Conference, Cannes",
    caption: "Registered delegate, W.A.D. 101st Annual Conference",
    aspect: "aspect-3/4",
  },
  {
    src: "/portfolio/award-ceremony-alternate.png",
    alt: "Hardesh Bhardwaj receiving the Investigator of the Year Award 2026 on stage in Cannes",
    caption: "Receiving the Investigator of the Year Award, Cannes 2026",
    aspect: "aspect-4/3",
  },
];

const certifications = [
  {
    title: "Certificate of Attendance, 101st W.A.D. Annual Conference",
    issuer: "World Association of Detectives · Cannes, France · 2–6 September 2026",
    detail: "6 Continuing Education Units (CEUs), signed by Bob Heales (Executive Director) and Phillip Ryffel (President).",
    preview: "/portfolio/wad-certificate-2026-preview.png",
    file: "/portfolio/wad-certificate-2026.pdf",
  },
  {
    title: "Certificate of Participation, 99th W.A.D. Annual Conference",
    issuer: "World Association of Detectives · Kuala Lumpur, Malaysia · 24–29 September 2024",
    detail: "6 CEUs covering financial crime, AI in investigations, and cross-border compliance, signed by R.P. Chauhan (President 2023–2024).",
    preview: "/images/about_us/certificate.png",
    file: "/portfolio/wad-certificate-2024.pdf",
  },
  {
    title: "Certificate of Incorporation",
    issuer: "Government of India · Ministry of Corporate Affairs",
    detail: "ADA Advance Detective Agency Private Limited, incorporated 18 November 2021 (CIN: U74999DL2021PTC390132).",
    preview: "/portfolio/certificate-of-incorporation-preview.png",
    file: "/portfolio/certificate-of-incorporation.pdf",
  },
];

export default function PortfolioPage() {
  return (
    <main className="flex-1">
      {/* ── Minimal top bar (no site navigation; this is a standalone credentials page) ── */}
      <div
        style={{
          backgroundColor: "var(--bg-card)",
          borderBottom: "1px solid var(--color-border)",
        }}
        className="py-4"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Logo size="sm" />
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
            style={{ color: "var(--color-muted)" }}
          >
            <ArrowLeft size={15} />
            Back to Home
          </Link>
        </div>
      </div>

      {/* ── Hero ── */}
      <section
        className="relative py-16 sm:py-24 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #080d1a 0%, #0d1526 60%, #080d1a 100%)",
          borderBottom: "1px solid var(--color-border)",
        }}
      >
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, #e63946 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(230,57,70,0.12) 0%, transparent 70%)",
            transform: "translateY(-50%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <h1
                className="font-extrabold tracking-tight mb-5"
                style={{
                  fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
                  color: "var(--color-text)",
                  lineHeight: 1.15,
                  letterSpacing: "-0.03em",
                }}
              >
                Hardesh Bhardwaj
              </h1>
              <p
                className="font-semibold mb-4"
                style={{ color: "var(--color-accent)", fontSize: "1.125rem" }}
              >
                Founder &amp; Lead TSCM Specialist, ADA Advance Detective Agency Pvt. Ltd.
              </p>
              <p
                className="italic mb-6 pl-4"
                style={{
                  borderLeft: "3px solid var(--color-accent)",
                  color: "var(--color-text)",
                  fontSize: "1.0625rem",
                }}
              >
                &ldquo;Evidence first. Everything else follows.&rdquo;
              </p>
              <p
                className="leading-relaxed mb-8"
                style={{ color: "var(--color-muted)", fontSize: "1.0625rem" }}
              >
                Named{" "}
                <strong style={{ color: "var(--color-text)" }}>
                  Investigator of the Year 2026
                </strong>{" "}
                by the World Association of Detectives (W.A.D.) at its 101st Annual
                Conference in Cannes, France. Since 2013, Hardesh Bhardwaj has run
                corporate, personal, and technical-security investigations for clients
                in India and abroad. This page collects the awards, conference
                recognitions, and certifications behind that work.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/contact" className="btn-primary">
                  Book a Confidential Sweep
                </a>
                <a href="#certifications" className="btn-secondary">
                  View Certifications
                </a>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden aspect-3/4 w-full max-w-md mx-auto lg:max-w-none">
              <Image
                src="/portfolio/award-ceremony-hero.jpg"
                alt="Hardesh Bhardwaj receiving the W.A.D. Investigator of the Year Award 2026 in Cannes, France"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick stats ── */}
      <section
        className="py-14"
        style={{
          background: "linear-gradient(135deg, var(--color-accent) 0%, #c1121f 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="text-center">
                <Icon size={26} style={{ color: "#fff", margin: "0 auto 0.75rem" }} />
                <div className="text-lg md:text-xl font-black mb-1" style={{ color: "#fff" }}>
                  {value}
                </div>
                <div className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.8)" }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Award & Recognition ── */}
      <section style={{ backgroundColor: "var(--bg-surface)" }} className="py-12 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="relative rounded-2xl overflow-hidden aspect-3/4 w-full max-w-sm mx-auto lg:max-w-none lg:order-2">
              <Image
                src="/portfolio/investigator-of-the-year-award.jpg"
                alt="W.A.D. Investigator of the Year Award 2026 crystal plaque, presented to Hardesh Bhardwaj"
                fill
                className="object-cover"
                style={{ backgroundColor: "var(--bg-card)" }}
              />
            </div>
            <div className="lg:order-1">
              <p className="section-label mb-4">Award &amp; Recognition</p>
              <h2 className="section-title mb-6">
                Investigator of the{" "}
                <span style={{ color: "var(--color-accent)" }}>Year, 2026</span>
              </h2>
              <p
                className="leading-relaxed mb-5"
                style={{ color: "var(--color-muted)", fontSize: "1.0625rem" }}
              >
                On{" "}
                <strong style={{ color: "var(--color-text)" }}>
                  5 September 2026
                </strong>
                , Hardesh Bhardwaj was presented the{" "}
                <strong style={{ color: "var(--color-accent)" }}>
                  Investigator of the Year Award
                </strong>{" "}
                by the World Association of Detectives (W.A.D.), established 1925,
                at the 101st Annual Conference held at Hôtel Le Gray d&apos;Albion,
                Cannes, France.
              </p>
              <p
                className="leading-relaxed mb-8"
                style={{ color: "var(--color-muted)", fontSize: "1.0625rem" }}
              >
                The award was presented by{" "}
                <strong style={{ color: "var(--color-text)" }}>
                  Philip Ryffel
                </strong>{" "}
                (President) and{" "}
                <strong style={{ color: "var(--color-text)" }}>
                  Robert A. Heales
                </strong>{" "}
                (Executive Director), recognizing his contributions to
                investigative and counter-surveillance excellence on the global
                stage.
              </p>
              <div className="flex items-center gap-3">
                <Award size={18} style={{ color: "var(--color-accent)", flexShrink: 0 }} />
                <span style={{ color: "var(--color-muted)", fontSize: "1rem" }}>
                  Presented to Hardesh Bhardwaj, India
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Global conferences / speaking engagements ── */}
      <section style={{ backgroundColor: "var(--bg-primary)" }} className="py-12 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label mb-4">On the Global Stage</p>
            <h2 className="section-title mb-5">
              Representing India at the{" "}
              <span style={{ color: "var(--color-accent)" }}>
                W.A.D. 101st Annual Conference
              </span>
            </h2>
            <p className="section-subtitle mx-auto">
              <Mic size={16} style={{ display: "inline", marginRight: 6, color: "var(--color-accent)" }} />
              Cannes, France · 2–6 September 2026: networking and speaking
              alongside detectives, investigators, and TSCM specialists from
              around the world.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item) => (
              <HoverCard
                key={item.src}
                className="card overflow-hidden"
                style={{ backgroundColor: "var(--bg-card)" }}
              >
                <div className={`relative w-full ${item.aspect}`}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <p
                  className="text-sm px-4 py-4"
                  style={{ color: "var(--color-muted)" }}
                >
                  {item.caption}
                </p>
              </HoverCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── Certifications & Credentials ── */}
      <section
        id="certifications"
        style={{ backgroundColor: "var(--bg-surface)" }}
        className="py-12 sm:py-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label mb-4">Certifications &amp; Credentials</p>
            <h2 className="section-title mb-5">Verified Documentation</h2>
            <p className="section-subtitle mx-auto">
              Official certificates and registration documents. Click any card
              to view or download the full PDF.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <a key={cert.file} href={cert.file} target="_blank" rel="noopener noreferrer">
                <HoverCard className="card overflow-hidden h-full flex flex-col">
                  <div
                    className="relative w-full aspect-4/3"
                    style={{ backgroundColor: "#fff" }}
                  >
                    <Image
                      src={cert.preview}
                      alt={cert.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3
                      className="font-bold text-base mb-2 leading-snug"
                      style={{ color: "var(--color-text)" }}
                    >
                      {cert.title}
                    </h3>
                    <p
                      className="text-xs font-semibold mb-3 uppercase tracking-wide"
                      style={{ color: "var(--color-accent)" }}
                    >
                      {cert.issuer}
                    </p>
                    <p
                      className="text-sm leading-relaxed mb-4"
                      style={{ color: "var(--color-muted)" }}
                    >
                      {cert.detail}
                    </p>
                    <div
                      className="flex items-center gap-2 text-sm font-semibold mt-auto"
                      style={{ color: "var(--color-text)" }}
                    >
                      <FileText size={15} style={{ color: "var(--color-accent)" }} />
                      View Certificate
                      <ExternalLink size={13} style={{ color: "var(--color-muted)" }} />
                    </div>
                  </div>
                </HoverCard>
              </a>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA
        title="Want India's Award-Winning TSCM Specialist on Your Case?"
        subtitle="Book a confidential consultation with the team behind these credentials."
        variant="accent"
      />

      {/* Bottom back-to-home link */}
      <div
        style={{ backgroundColor: "var(--bg-card)", borderTop: "1px solid var(--color-border)" }}
        className="py-6 text-center"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
          style={{ color: "var(--color-muted)" }}
        >
          <ArrowLeft size={15} />
          Back to BugSweepingTSCM.com
        </Link>
      </div>
    </main>
  );
}
