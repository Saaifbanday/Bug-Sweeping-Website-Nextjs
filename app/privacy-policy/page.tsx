import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy | BugSweepingTSCM.com",
  description: "Privacy Policy for BugSweepingTSCM.com: how we collect, use, and protect your information.",
};

const sections = [
  {
    title: "Information We Collect",
    body: `When you use our website or contact us, we may collect the following information: your name, email address, phone number, and city/location as provided through our contact form. We also collect standard server log data such as IP addresses and browser type for security and analytics purposes. We do not collect payment information directly — any transactions are handled by third-party processors.`,
  },
  {
    title: "How We Use Your Information",
    body: `Information you provide is used solely to respond to your enquiry, arrange service appointments, and communicate with you about our TSCM services. We do not use your personal data for marketing purposes without your explicit consent. We do not sell, trade, or transfer your personal information to third parties under any circumstances.`,
  },
  {
    title: "Confidentiality of Client Engagements",
    body: `All client enquiries and service engagements are treated with absolute confidentiality. We operate under strict NDA terms from the first point of contact. Client identities, engagement details, findings, and reports are never disclosed to any third party, including law enforcement, unless compelled by a valid court order under Indian law.`,
  },
  {
    title: "Cookies",
    body: `Our website uses minimal cookies necessary for basic functionality. We do not use tracking cookies or third-party advertising cookies. You may disable cookies in your browser settings without affecting your ability to use the site.`,
  },
  {
    title: "Data Security",
    body: `We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. Our website uses HTTPS encryption for all data transmission.`,
  },
  {
    title: "Data Retention",
    body: `We retain personal data only for as long as necessary to fulfil the purpose for which it was collected, or as required by applicable law. Contact form submissions are retained for a maximum of 12 months unless an ongoing engagement requires longer retention.`,
  },
  {
    title: "Your Rights",
    body: `You have the right to request access to, correction of, or deletion of your personal data held by us. To exercise these rights, contact us at info@bugsweepingtscm.com. We will respond to all requests within 30 days.`,
  },
  {
    title: "Changes to This Policy",
    body: `We may update this Privacy Policy from time to time. The date of the most recent revision will be noted at the bottom of this page. Continued use of the website after changes constitutes acceptance of the updated policy.`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          label="Legal"
          title="Privacy Policy"
          subtitle="How BugSweepingTSCM.com collects, uses, and protects your information."
          breadcrumbs={[{ label: "Privacy Policy", href: "#" }]}
        />
        <section className="py-20" style={{ backgroundColor: "var(--bg-surface)" }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="mb-10" style={{ color: "var(--color-muted)", fontSize: "0.9375rem" }}>
              Last updated: January 2025
            </p>
            <div className="flex flex-col gap-10">
              {sections.map((s) => (
                <div key={s.title}>
                  <h2 className="font-bold mb-3" style={{ color: "var(--color-text)", fontSize: "1.25rem" }}>
                    {s.title}
                  </h2>
                  <p className="leading-relaxed" style={{ color: "var(--color-muted)", fontSize: "1rem" }}>
                    {s.body}
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
