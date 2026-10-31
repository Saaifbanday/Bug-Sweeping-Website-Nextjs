"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import Logo from "@/components/ui/Logo";
import { socialProfiles, groupSites, profileIconPaths } from "@/lib/site-entity";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Founder", href: "/meet-the-founder" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
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
            <Link href="/" className="block mb-5">
              <Logo size="sm" />
            </Link>

            <p
              className="text-xs leading-relaxed mb-5"
              style={{ color: "var(--color-muted)" }}
            >
              Technical surveillance countermeasures across India: hidden cameras,
              listening devices and GPS trackers found, documented and reported.
              Led by the World Association of Detectives Investigator of the Year 2026.
            </p>

            {/* Profiles. Order, labels and URLs come from lib/site-entity.ts, which also
                feeds the schema sameAs, so the visible links and the markup cannot drift. */}
            <div className="flex flex-wrap gap-2.5 mb-5">
              {socialProfiles
                .filter((p) => p.inFooter)
                .map((p) => (
                  <a
                    key={p.label}
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer me"
                    aria-label={p.label}
                    title={p.label}
                    className="social-chip w-9 h-9 rounded-lg flex items-center justify-center"
                    style={{
                      backgroundColor: "var(--bg-surface)",
                      border: "1px solid var(--color-border)",
                    }}
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d={profileIconPaths[p.icon]} />
                    </svg>
                  </a>
                ))}
            </div>

            {/* The firm's other properties, linked so the identity claim is visible, not schema-only. */}
            <div className="text-xs leading-relaxed" style={{ color: "var(--color-muted)" }}>
              <p className="mb-1">Part of Advance Detective Agency</p>
              {/* One per line: the column is narrow, and an inline separator dangles
                  at the end of a wrapped line on desktop. */}
              <div className="flex flex-wrap gap-x-3 gap-y-1">
                {groupSites.map((site) => (
                  <a
                    key={site.url}
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group-site-link"
                    style={{ color: "var(--color-muted)", textDecoration: "underline" }}
                  >
                    {site.label}
                  </a>
                ))}
              </div>
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
                      ((e.target as HTMLElement).style.color =
                        "var(--color-accent)")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLElement).style.color =
                        "var(--color-muted)")
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
                      ((e.target as HTMLElement).style.color =
                        "var(--color-accent)")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLElement).style.color =
                        "var(--color-muted)")
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
                href="mailto:info@advancedetectiveagency.com"
                className="flex items-start gap-3"
              >
                <Mail
                  size={15}
                  style={{
                    color: "var(--color-accent)",
                    marginTop: "2px",
                    flexShrink: 0,
                  }}
                />
                <span
                  className="text-sm"
                  style={{ color: "var(--color-muted)" }}
                >
                  info@advancedetectiveagency.com
                </span>
              </a>
              <a href="tel:+918882732221" className="flex items-start gap-3">
                <Phone
                  size={15}
                  style={{
                    color: "var(--color-accent)",
                    marginTop: "2px",
                    flexShrink: 0,
                  }}
                />
                <span
                  className="text-sm"
                  style={{ color: "var(--color-muted)" }}
                >
                  +91 888 273 2221
                </span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin
                  size={15}
                  style={{
                    color: "var(--color-accent)",
                    marginTop: "2px",
                    flexShrink: 0,
                  }}
                />
                <span
                  className="text-sm"
                  style={{ color: "var(--color-muted)" }}
                >
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
            &copy; {new Date().getFullYear()} BugSweepingTSCM.com. All Rights
            Reserved.
          </p>
          <div className="flex gap-4">
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs transition-colors"
                style={{ color: "var(--color-muted)" }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color =
                    "var(--color-accent)")
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
