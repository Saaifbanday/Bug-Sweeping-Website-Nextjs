import { Building2, Home, Mic, Video, Smartphone, Car, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Business Bug Sweeps",
    description:
      "Protect boardroom secrets and sensitive data with our expert business bug sweeps.",
    details: [
      "Executive Offices & Boardrooms",
      "Conference Rooms & Meeting Spaces",
      "Server Rooms & IT Racks",
      "Telephone Systems & VoIP Equipment",
      "Ceilings, Light Fixtures, Smoke Detectors",
      "Company Vehicles & Private Jets",
    ],
  },
  {
    icon: Home,
    title: "Residence Bug Sweeps",
    description:
      "Ensure absolute privacy at home with our comprehensive residential bug sweeps.",
    details: [
      "Bedrooms & Dressing Areas",
      "Living Room & Lounge Spaces",
      "Home Offices & Study Rooms",
      "Bathrooms & Toilets",
      "WiFi Routers & IoT Devices",
      "Garden, Patios & Perimeter Areas",
    ],
  },
  {
    icon: Mic,
    title: "Audio Bug Sweeps",
    description:
      "Uncover hidden microphones and silent eavesdroppers with our expert audio sweeps.",
    details: [
      "Wired & Wireless RF Microphones",
      "GSM / SIM-based Bugs",
      "Voice-activated Audio Recorders (DVRs)",
      "Modified Landline Phones / VOIP Taps",
      "Laser & Microwave Microphones",
      "Smart Home & IoT Devices",
    ],
  },
  {
    icon: Video,
    title: "Video Bug Sweeps",
    description:
      "Protect your spaces from hidden eyes with our thorough video bug sweeps.",
    details: [
      "Pinhole & Wireless IP Cameras",
      "Battery-powered Mini DVR Cams",
      "Infrared / Night Vision Cameras",
      "Cameras Inside Consumer Devices",
      "Bathroom & Dressing Room Checks",
      "Under Tables, Chairs & Couches",
    ],
  },
  {
    icon: Smartphone,
    title: "Telephone & Mobile Sweeps",
    description:
      "Safeguard your calls and personal data with our telephone and mobile bug sweeps.",
    details: [
      "Hard-wired Taps on Analog Landlines",
      "VOIP & IP Phone Hacks",
      "Spyware & Malware Detection",
      "Remote Microphone Activation",
      'SIM-based Attacks "Simjacker"',
      "Bluetooth / WiFi Eavesdropping",
    ],
  },
  {
    icon: Car,
    title: "Vehicle GPS Bug Sweeps",
    description:
      "Stay in control of your movements with our vehicle GPS bug sweeps.",
    details: [
      "Real-time GPS Trackers",
      "Passive Data-logger Trackers",
      "Under Chassis & Wheel Wells",
      "Inside OBD-II Port",
      "Behind Dashboard Panels",
      "Trunk & Spare Tire Cavity",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="section-label mb-3">Our Services</p>
          <h2 className="section-title mb-4">
            Explore Our Elite Bug Sweeping &amp; TSCM Services
          </h2>
          <p className="section-subtitle mx-auto">
            From hidden cameras to rogue microphones and GPS trackers, our advanced TSCM
            services safeguard your business, home, and vehicles — delivering total peace of
            mind.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className="card p-6 flex flex-col">
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-5"
                  style={{ backgroundColor: "rgba(230,57,70,0.12)" }}
                >
                  <Icon size={22} style={{ color: "var(--color-accent)" }} />
                </div>

                {/* Title */}
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ color: "var(--color-text)" }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mb-4 leading-relaxed" style={{ color: "var(--color-muted)", fontSize: "1rem" }}>
                  {service.description}
                </p>

                {/* Details list */}
                <ul className="flex flex-col gap-2 mb-6 flex-1">
                  {service.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2">
                      <span
                        className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: "var(--color-accent)" }}
                      />
                      <span className="text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
                        {detail}
                      </span>
                    </li>
                  ))}
                  <li className="flex items-start gap-2">
                    <span
                      className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: "var(--color-accent)" }}
                    />
                    <span
                      className="text-sm font-medium"
                      style={{ color: "var(--color-accent)" }}
                    >
                      & Much More!
                    </span>
                  </li>
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  className="flex items-center gap-1 text-sm font-semibold mt-auto"
                  style={{ color: "var(--color-accent)" }}
                >
                  Learn More <ArrowRight size={14} />
                </a>
              </div>
            );
          })}
        </div>

        {/* Free quote banner */}
        <div
          className="mt-12 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{
            background: "linear-gradient(135deg, rgba(230,57,70,0.08) 0%, rgba(29,78,216,0.06) 100%)",
            border: "1px solid rgba(230,57,70,0.2)",
          }}
        >
          <div>
            <p className="text-sm font-semibold" style={{ color: "var(--color-muted)" }}>
              Free Consultation
            </p>
            <p className="text-xl font-bold" style={{ color: "var(--color-text)" }}>
              Discover How Easily We Can Secure Your Privacy.
            </p>
          </div>
          <a href="#contact" className="btn-primary shrink-0">
            Get Free Quote
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
