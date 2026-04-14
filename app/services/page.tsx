import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/ui/PageHero";
import ZigZagSection from "@/components/ui/ZigZagSection";
import Testimonials from "@/components/sections/Testimonials";
import ContactCTA from "@/components/sections/ContactCTA";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Services | BugSweepingTSCM.com — Bug Sweep & TSCM Services India",
  description:
    "Business bug sweeps, residential privacy protection, audio/video bug sweeps, telephone taps, vehicle GPS tracker detection. Comprehensive TSCM services across India.",
};

// 4 primary services with full zigzag image layout
const zigZagServices = [
  {
    label: "Service 01",
    title: "Business Bug Sweeps",
    body: "Boardrooms discuss strategy. Executive suites hold sensitive negotiations. Conference rooms host confidential deals. These are prime targets for corporate espionage and our most critical sweep environments. We protect the spaces where your most valuable information is spoken aloud.",
    bullets: [
      "Executive offices, boardrooms & conference rooms",
      "Server rooms, IT racks & VoIP telephone systems",
      "Ceilings, light fixtures, smoke detectors & walls",
      "Restrooms, locker rooms & reception areas",
      "Company vehicles, private jets & yachts",
    ],
    imageSrc: "/images/services/business_bug.PNG",
    imageAlt: "Business boardroom bug sweep",
    cta: { label: "Book a Business Sweep", href: "/contact" },
  },
  {
    label: "Service 02",
    title: "Residence Bug Sweeps",
    body: "Your home should be your sanctuary, a place where you can speak freely without fear. Modern eavesdropping devices can be hidden anywhere: inside power outlets, beneath floorboards, inside common household objects. Our residential sweeps cover every room, every surface, every suspect object.",
    bullets: [
      "Bedrooms, dressing areas & living rooms",
      "Home offices, study rooms & kitchens",
      "Bathrooms, toilets & entryways",
      "WiFi routers, smart TVs & IoT devices",
      "Garden, patios & perimeter areas",
    ],
    imageSrc: "/images/services/residence_bug.PNG",
    imageAlt: "Residential sweep and bedroom inspection",
    cta: { label: "Protect Your Home", href: "/contact" },
  },
  {
    label: "Service 03",
    title: "Audio & Video Bug Sweeps",
    body: "Listening devices and covert cameras are the most common surveillance tools, and also the most difficult to detect without professional equipment. Our combined audio/video sweep covers every possible concealment spot, from pinhole cameras hidden behind tinted glass to GSM microphones inside common office items.",
    bullets: [
      "Wired & wireless RF microphones",
      "GSM / SIM bugs & voice-activated recorders",
      "Pinhole cameras & wireless IP cameras",
      "Infrared & night-vision hidden cameras",
      "Cameras disguised as consumer electronics",
    ],
    imageSrc: "/images/services/audio_and_video_bug.PNG",
    imageAlt: "Audio and video bug sweep",
    cta: { label: "Schedule a Sweep", href: "/contact" },
  },
  {
    label: "Service 04",
    title: "Vehicle GPS & Telephone Sweeps",
    body: "GPS trackers can monitor your every movement. They are placed under chassis, inside OBD-II ports, or tucked behind dashboard panels in minutes. Phone taps and spyware can silently stream every call and message. Our vehicle and telephone sweeps use the WolfHound Pro and REI TALAN to locate every active and passive threat.",
    bullets: [
      "Real-time & passive GPS trackers under chassis, in bumpers",
      "OBD-II port devices & inside trunk compartments",
      "Hard-wired phone taps on analog & digital lines",
      "VOIP interception & SIM-based attack detection",
      "Spyware, stalkerware & remote microphone activation",
    ],
    imageSrc: "/images/services/vehicle_gps.PNG",
    imageAlt: "Vehicle GPS sweep and phone tap detection",
    cta: { label: "Book Vehicle Sweep", href: "/contact" },
  },
];

// All 6 services for the quick-reference grid
const allServices = [
  {
    title: "Business Bug Sweeps",
    desc: "Complete sweep of corporate offices, boardrooms, conference rooms, server rooms, and company vehicles.",
  },
  {
    title: "Residence Bug Sweeps",
    desc: "Thorough sweep of every room: bedrooms, bathrooms, home offices, and IoT-connected devices.",
  },
  {
    title: "Audio Bug Sweeps",
    desc: "Detection of wired/wireless microphones, GSM bugs, voice recorders, and smart home eavesdroppers.",
  },
  {
    title: "Video Bug Sweeps",
    desc: "Uncovering of pinhole cameras, wireless IP cameras, and hidden recording devices in any location.",
  },
  {
    title: "Telephone & Mobile Sweeps",
    desc: "Detection of phone taps, VOIP interceptions, SIM attacks, spyware, and remote microphone activation.",
  },
  {
    title: "Vehicle GPS Sweeps",
    desc: "Location of real-time and passive GPS trackers hidden in vehicles, OBD-II ports, and wheel wells.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          label="Our Services"
          title="Comprehensive Bug Sweeping & TSCM Services"
          subtitle="From boardrooms to bedrooms, vehicles to VoIP lines. Our certified TSCM specialists deploy military-grade equipment to detect and neutralize every surveillance threat."
          breadcrumbs={[{ label: "Services", href: "#" }]}
        />

        {/* ── Quick reference service grid ── */}
        <section style={{ backgroundColor: "var(--bg-surface)" }} className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="section-label mb-4">What We Cover</p>
              <h2 className="section-title">
                Six Ways We{" "}
                <span style={{ color: "var(--color-accent)" }}>Protect Your Privacy</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {allServices.map((s, i) => (
                <div key={s.title} className="card p-7">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold mb-5"
                    style={{ backgroundColor: "rgba(230,57,70,0.12)", color: "var(--color-accent)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-lg font-bold mb-3" style={{ color: "var(--color-text)" }}>
                    {s.title}
                  </h3>
                  <p className="leading-relaxed mb-5" style={{ color: "var(--color-muted)", fontSize: "0.9375rem" }}>
                    {s.desc}
                  </p>
                  <a
                    href="/contact"
                    className="flex items-center gap-1 text-sm font-semibold"
                    style={{ color: "var(--color-accent)" }}
                  >
                    Get a Quote <ArrowRight size={14} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Detailed ZigZag (4 primary services with images) ── */}
        <section style={{ backgroundColor: "var(--bg-primary)" }} className="pt-24 pb-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="section-label mb-4">In Detail</p>
            <h2 className="section-title mb-5">
              Our Four Primary{" "}
              <span style={{ color: "var(--color-accent)" }}>Sweep Categories</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Each sweep is tailored to the specific threat environment. No two engagements are identical.
            </p>
          </div>
        </section>
        <ZigZagSection items={zigZagServices} bgAlternate />

        {/* ── Process section ── */}
        <section style={{ backgroundColor: "var(--bg-surface)" }} className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="section-label mb-4">Our Process</p>
              <h2 className="section-title mb-5">
                How a Professional Sweep{" "}
                <span style={{ color: "var(--color-accent)" }}>Works</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "Confidential Consultation",
                  desc: "We discuss your concerns, assess the threat level, and plan the sweep protocol, all under strict NDA.",
                },
                {
                  step: "02",
                  title: "Equipment Deployment",
                  desc: "Our team arrives discreetly with the appropriate military-grade TSCM tools for your specific environment.",
                },
                {
                  step: "03",
                  title: "Systematic Sweep",
                  desc: "Every room, device, and surface is scanned using spectrum analyzers, NLJDs, thermal cameras, and RF detectors.",
                },
                {
                  step: "04",
                  title: "Report & Remediation",
                  desc: "You receive a full written report of all findings, with photographs and recommendations for countermeasures.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="rounded-2xl p-8 relative overflow-hidden"
                  style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--color-border)" }}
                >
                  <div
                    className="text-6xl font-black mb-5 leading-none select-none"
                    style={{ color: "rgba(230,57,70,0.12)" }}
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

        {/* ── Sliding testimonials ── */}
        <Testimonials />

        <ContactCTA
          title="Ready to Book Your Sweep?"
          subtitle="Speak to a certified TSCM specialist, completely confidential."
          variant="accent"
        />
      </main>
      <Footer />
    </>
  );
}
