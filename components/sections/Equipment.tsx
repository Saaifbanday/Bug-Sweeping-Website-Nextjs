"use client";

import Image from "next/image";

const equipment = [
  {
    slug: "rei-oscor-green",
    name: "REI OSCOR Green 24 GHz Spectrum Analyzer",
    description:
      "Scans the entire radio spectrum from 10 kHz to 24 GHz, detecting all active frequencies. Compares indoor vs outdoor reference scans to pinpoint hidden RF transmitters inside walls, furniture, power adapters, and more.",
  },
  {
    slug: "rei-orion-nljd",
    name: "REI ORION 2.4 Non-Linear Junction Detector",
    description:
      "Detects electronic components as tiny as a grain of rice — even when the device is completely powered off. Vital for locating eavesdropping devices hidden inside furniture, light fixtures, or ordinary household items.",
  },
  {
    slug: "handheld-nljd",
    name: "Handheld Non-Linear Junction Detector (NLJD)",
    description:
      "Identifies all kinds of electronics — active, inactive, or powered down. Detects mobile phones, tracking devices, hidden microphones, covert cameras, digital recorders, SIM cards, and any electronic circuit or microchip.",
  },
  {
    slug: "rei-andre-deluxe",
    name: "REI ANDRE Deluxe Near-Field Detection Receiver",
    description:
      "Portable broadband receiver detecting RF, infrared, visible light, carrier current, and various transmitters from 10 kHz to 6 GHz. Ideal for non-alerting initial sweeps as a companion to spectrum analyzers.",
  },
  {
    slug: "orius-wifi-hunter",
    name: "ORIUS® Wi-Fi Hunter",
    description:
      "Detects, pinpoints, and investigates any device transmitting over Wi-Fi. Identifies hidden networks, de-authenticates rogue devices, and monitors for suspicious activity, new or duplicate access points.",
  },
  {
    slug: "flir-thermal-camera",
    name: "FLIR Infrared Thermal Camera",
    description:
      "Detects active heat signatures from bugging devices hidden inside walls, ceilings, floors, furniture, light fixtures, pillows, stuffed toys, or air vents — regardless of location.",
  },
  {
    slug: "vpc-62-pole-camera",
    name: "VPC-62 Video Pole Camera",
    description:
      "Visually inspects above drop ceilings, behind heavy furniture, around corners, and other concealed spots in low-light conditions. Checks for hidden cameras and traces wires connected to covert devices.",
  },
  {
    slug: "bluesleuth-detector",
    name: "BlueSleuth™ Bluetooth Detector",
    description:
      "Detects and tracks hidden Bluetooth and BLE devices with a directional antenna providing real-time RSSI readings. Locates covert Bluetooth bugs, microphones, earpieces, and unauthorized wireless devices.",
  },
  {
    slug: "video-borescope",
    name: "Video Borescope",
    description:
      "Visually inspects inside air vents, vehicle dashboards, behind furniture, and above cabinets. An essential tool for any thorough bug sweep — used to detect hidden microphones or covert cameras in hard-to-reach places.",
  },
  {
    slug: "hidden-camera-detector",
    name: "Hidden Camera Detector",
    description:
      "Engineered to uncover concealed cameras including ultra-small pinhole types — powered on or off. Uses reverse reflection technology to spot lenses even behind tinted glass, detectable up to 60 feet away.",
  },
  {
    slug: "wolfhound-pro-gps",
    name: "GPS Tracker / Cell Phone Detector (WolfHound Pro)",
    description:
      "Locates active hidden cell phones, GSM bugs, and GPS tracking devices. Pinpoints exact location whether in standby, on calls, sending data, or transmitting live GPS signals.",
  },
  {
    slug: "countermeasure-amplifier",
    name: "Countermeasure Amplifier",
    description:
      "High-gain audio amplifier connected to telephone lines, LAN/server networks, AC power circuits, and alarm wiring to uncover hidden eavesdropping devices exploiting these connections.",
  },
  {
    slug: "rei-talan-analyzer",
    name: "REI TALAN Telephone & Line Analyzer",
    description:
      "Thorough sweep and analysis of telephone lines in residential and business environments. Inspects copper wire, digital, and VoIP systems for taps. Analyzes IP packet traffic for unauthorized interceptions.",
  },
];

function EquipmentCard({ item }: { item: (typeof equipment)[0] }) {
  const src = `/images/equipment/${item.slug}.jpg`;

  return (
    <div
      className="rounded-xl overflow-hidden flex flex-col"
      style={{
        backgroundColor: "var(--bg-card)",
        border: "1px solid var(--color-border)",
        transition: "border-color 0.2s, transform 0.2s, box-shadow 0.2s",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "rgba(230,57,70,0.4)";
        el.style.transform = "translateY(-4px)";
        el.style.boxShadow = "0 16px 40px rgba(0,0,0,0.35)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "var(--color-border)";
        el.style.transform = "translateY(0)";
        el.style.boxShadow = "none";
      }}
    >
      {/* Image area — replace placeholder div with <Image> once photos are ready */}
      <div
        className="relative w-full flex flex-col items-center justify-center gap-2"
        style={{
          height: "210px",
          backgroundColor: "var(--bg-surface)",
          borderBottom: "1px solid var(--color-border)",
        }}
      >
        {/* ── TO ADD IMAGE: place file at public{src} and uncomment below ── */}
        {/*
        <Image
          src={src}
          alt={item.name}
          fill
          className="object-cover"
        />
        */}
        <span style={{ fontSize: "2.5rem" }}>📷</span>
        <span
          className="text-center px-4 font-mono leading-snug"
          style={{ color: "var(--color-muted)", fontSize: "0.6875rem" }}
        >
          public{src}
        </span>
      </div>

      {/* Text */}
      <div className="p-6 flex flex-col gap-2 flex-1">
        <h3
          className="font-bold leading-snug"
          style={{ color: "var(--color-text)", fontSize: "1rem" }}
        >
          {item.name}
        </h3>
        <p
          className="leading-relaxed"
          style={{ color: "var(--color-muted)", fontSize: "0.9375rem" }}
        >
          {item.description}
        </p>
      </div>
    </div>
  );
}

export default function Equipment() {
  return (
    <section
      id="equipment"
      className="py-24"
      style={{ backgroundColor: "var(--bg-surface)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="section-label mb-3">Equipment We Use</p>
          <h2 className="section-title mb-4">
            Military-Grade TSCM Equipment for Bug Sweeps
          </h2>
          <p className="section-subtitle mx-auto">
            We deploy advanced, military-grade TSCM tools — from spectrum analyzers to
            NLJDs — ensuring no hidden device escapes detection.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {equipment.map((item) => (
            <EquipmentCard key={item.slug} item={item} />
          ))}
        </div>

        {/* Disclaimer note */}
        <div
          className="mt-10 rounded-xl p-6 text-center"
          style={{
            backgroundColor: "rgba(230,57,70,0.05)",
            border: "1px solid rgba(230,57,70,0.15)",
          }}
        >
          <p className="italic" style={{ color: "var(--color-muted)", fontSize: "0.9375rem" }}>
            <strong style={{ color: "var(--color-text)" }}>Note:</strong> Our technician will
            choose the appropriate detection equipment for each sweep based on your unique
            concerns and assessed threat level. Since many tools have overlapping
            capabilities, not all may be deployed. Each sweep is tailored for maximum
            effectiveness.
          </p>
        </div>
      </div>
    </section>
  );
}
