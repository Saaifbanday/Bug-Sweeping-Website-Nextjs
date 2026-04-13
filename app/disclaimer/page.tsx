import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Disclaimer | BugSweepingTSCM.com",
  description: "Disclaimer for BugSweepingTSCM.com — limitations on information and liability.",
};

const sections = [
  {
    title: "Website Information",
    body: `The information provided on BugSweepingTSCM.com is for general informational purposes only. While we strive to keep information accurate and current, we make no representations or warranties of any kind — express or implied — about the completeness, accuracy, or suitability of the information on this website for any particular purpose.`,
  },
  {
    title: "Not Legal or Investigative Advice",
    body: `Nothing on this website constitutes legal, investigative, or professional advice. Information about surveillance threats, detection methods, and countermeasures is provided for general awareness only. For advice specific to your situation, contact our team directly for a confidential consultation.`,
  },
  {
    title: "Service Limitations",
    body: `TSCM sweeps represent a thorough point-in-time assessment using professional equipment and techniques. However, no sweep can guarantee detection of every possible surveillance device in every conceivable configuration. New technologies and highly sophisticated state-level surveillance techniques may fall outside the scope of commercially available TSCM equipment. BugSweepingTSCM.com does not warrant that any premises swept will remain surveillance-free indefinitely following a sweep.`,
  },
  {
    title: "Third-Party Links",
    body: `This website may contain links to third-party websites for informational purposes. We have no control over the content of those sites and accept no responsibility for them or for any loss or damage arising from your use of them.`,
  },
  {
    title: "Use of This Website",
    body: `Your use of this website is at your own risk. BugSweepingTSCM.com will not be liable for any loss or damage — including indirect or consequential loss — arising from use of, or inability to use, this website or its content.`,
  },
  {
    title: "Accuracy of Client Testimonials",
    body: `Testimonials and case references on this website reflect individual client experiences. Results may vary depending on the nature of the engagement, the environment swept, and other factors. Past results do not guarantee future outcomes.`,
  },
];

export default function DisclaimerPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          label="Legal"
          title="Disclaimer"
          subtitle="Important limitations on the information and services provided by BugSweepingTSCM.com."
          breadcrumbs={[{ label: "Disclaimer", href: "#" }]}
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
