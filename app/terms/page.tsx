import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Terms & Conditions | BugSweepingTSCM.com",
  description: "Terms and Conditions for using BugSweepingTSCM.com services.",
};

const sections = [
  {
    title: "Acceptance of Terms",
    body: `By accessing this website or engaging our services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use this website or our services.`,
  },
  {
    title: "Services Provided",
    body: `BugSweepingTSCM.com provides Technical Surveillance Counter-Measure (TSCM) services including electronic sweep services, bug detection, hidden camera detection, GPS tracker location, and related counter-surveillance consulting. All services are provided for lawful purposes only.`,
  },
  {
    title: "Lawful Use Only",
    body: `Our services may only be engaged for lawful purposes. You represent and warrant that you are the owner, authorised occupant, or have explicit legal authority over any premises, vehicle, or device submitted for sweep. BugSweepingTSCM.com accepts no liability for engagements conducted on premises or devices without proper authorisation.`,
  },
  {
    title: "Confidentiality",
    body: `Both parties agree to maintain strict confidentiality regarding all aspects of the service engagement. BugSweepingTSCM.com will not disclose client identities or engagement details to any third party except as required by Indian law or valid court order. Clients agree not to disclose proprietary methodologies, equipment details, or technical procedures observed during a sweep.`,
  },
  {
    title: "Limitation of Liability",
    body: `BugSweepingTSCM.com's liability for any claim arising from a service engagement is limited to the fee paid for that specific engagement. We are not liable for indirect, consequential, or punitive damages of any kind. TSCM sweeps represent a point-in-time assessment; we cannot guarantee that a space remains free of surveillance devices following the completion of a sweep.`,
  },
  {
    title: "Intellectual Property",
    body: `All content on this website — including text, graphics, logos, and design — is the property of BugSweepingTSCM.com and is protected by applicable intellectual property laws. You may not reproduce, distribute, or use any content without our prior written consent.`,
  },
  {
    title: "Payment Terms",
    body: `Payment terms are agreed upon prior to each service engagement. Fees are non-refundable once a sweep has been conducted. Travel and accommodation costs for out-of-city engagements are additional and will be quoted in advance.`,
  },
  {
    title: "Governing Law",
    body: `These Terms and Conditions are governed by the laws of India. Any dispute arising from these terms or our services shall be subject to the exclusive jurisdiction of the courts of New Delhi, India.`,
  },
];

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          label="Legal"
          title="Terms & Conditions"
          subtitle="Please read these terms carefully before engaging our services."
          breadcrumbs={[{ label: "Terms & Conditions", href: "#" }]}
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
