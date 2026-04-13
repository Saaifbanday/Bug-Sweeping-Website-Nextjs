"use client";

import Link from "next/link";
import { Shield, Mail, Phone, MapPin, Globe } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "#about" },
  { label: "Our Services", href: "#services" },
  { label: "Equipment", href: "#equipment" },
  { label: "Contact Us", href: "#contact" },
];

const services = [
  "Business Bug Sweeps",
  "Residence Bug Sweeps",
  "Audio Bug Sweeps",
  "Video Bug Sweeps",
  "Telephone & Mobile Sweeps",
  "Vehicle GPS Sweeps",
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Disclaimer", href: "/disclaimer" },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      style={{
        backgroundColor: "var(--bg-card)",
        borderTop: "1px solid var(--color-border)",
      }}
    >
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div
                className="rounded-lg p-2"
                style={{ backgroundColor: "var(--color-accent)" }}
              >
                <Shield size={20} color="#fff" />
              </div>
              <div>
                <div
                  className="font-bold text-sm leading-tight"
                  style={{ color: "var(--color-text)" }}
                >
                  BUG SWEEPS
                </div>
                <div className="text-xs" style={{ color: "var(--color-accent)" }}>
                  Debugging & TSCM Services
                </div>
              </div>
            </Link>

            <p
              className="text-xs leading-relaxed mb-5"
              style={{ color: "var(--color-muted)" }}
            >
              India&apos;s premier TSCM experts protecting your privacy from hidden cameras,
              listening devices, and GPS trackers. Trusted by HNIs, CEOs, celebrities, and
              government officials nationwide.
            </p>

            {/* Social */}
            <div className="flex gap-3">
              {[
                { Icon: Globe, href: "#", label: "Website" },
                { Icon: Mail, href: "mailto:info@bugsweepingtscm.com", label: "Email" },
                { Icon: Phone, href: "tel:+918882732221", label: "Phone" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={href + Icon.name}
                  href={href}
                  className="w-8 h-8 rounded flex items-center justify-center transition-colors"
                  style={{
                    backgroundColor: "var(--bg-surface)",
                    border: "1px solid var(--color-border)",
                    color: "var(--color-muted)",
                  }}
                  aria-label={label}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-sm font-bold mb-4 uppercase tracking-widest"
              style={{ color: "var(--color-text)" }}
            >
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors"
                    style={{ color: "var(--color-muted)" }}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLElement).style.color = "var(--color-accent)")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLElement).style.color = "var(--color-muted)")
                    }
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-sm font-bold mb-4 uppercase tracking-widest"
              style={{ color: "var(--color-text)" }}
            >
              Our Services
            </h4>
            <ul className="flex flex-col gap-2">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-sm transition-colors"
                    style={{ color: "var(--color-muted)" }}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLElement).style.color = "var(--color-accent)")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLElement).style.color = "var(--color-muted)")
                    }
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-sm font-bold mb-4 uppercase tracking-widest"
              style={{ color: "var(--color-text)" }}
            >
              Contact Us
            </h4>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:info@bugsweepingtscm.com"
                className="flex items-start gap-3"
              >
                <Mail
                  size={15}
                  style={{ color: "var(--color-accent)", marginTop: "2px", flexShrink: 0 }}
                />
                <span className="text-sm" style={{ color: "var(--color-muted)" }}>
                  info@bugsweepingtscm.com
                </span>
              </a>
              <a href="tel:+918882732221" className="flex items-start gap-3">
                <Phone
                  size={15}
                  style={{ color: "var(--color-accent)", marginTop: "2px", flexShrink: 0 }}
                />
                <span className="text-sm" style={{ color: "var(--color-muted)" }}>
                  +91 888 273 2221
                </span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin
                  size={15}
                  style={{ color: "var(--color-accent)", marginTop: "2px", flexShrink: 0 }}
                />
                <span className="text-sm" style={{ color: "var(--color-muted)" }}>
                  Pan-India Service
                  <br />
                  Mumbai · Delhi · Bengaluru · Jaipur
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{ borderTop: "1px solid var(--color-border)" }}
        className="py-5"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: "var(--color-muted)" }}>
            &copy; {new Date().getFullYear()} BugSweepingTSCM.com — All Rights Reserved.
          </p>
          <div className="flex gap-4">
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs transition-colors"
                style={{ color: "var(--color-muted)" }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--color-accent)")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--color-muted)")
                }
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
