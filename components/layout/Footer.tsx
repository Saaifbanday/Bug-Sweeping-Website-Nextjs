"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import Logo from "@/components/ui/Logo";

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
              India&apos;s premier TSCM experts protecting your privacy from
              hidden cameras, listening devices, and GPS trackers. Trusted by
              HNIs, CEOs, celebrities, and government officials nationwide.
            </p>

            {/* Social */}
            <div className="flex gap-3">
              {/* X / Twitter */}
              <a
                href="https://x.com/advancedetectiv"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X / Twitter"
                className="w-8 h-8 rounded flex items-center justify-center"
                style={{
                  backgroundColor: "var(--bg-surface)",
                  border: "1px solid var(--color-border)",
                }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  style={{ color: "var(--color-muted)" }}
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* Facebook */}
              <a
                href="https://www.facebook.com/AdvanceDetectiveAgencyOfficial/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded flex items-center justify-center"
                style={{
                  backgroundColor: "var(--bg-surface)",
                  border: "1px solid var(--color-border)",
                }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  style={{ color: "var(--color-muted)" }}
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              {/* WhatsApp */}
              <a
                href="https://wa.me/918882732221"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-8 h-8 rounded flex items-center justify-center"
                style={{
                  backgroundColor: "var(--bg-surface)",
                  border: "1px solid var(--color-border)",
                }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  style={{ color: "var(--color-muted)" }}
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
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
                href="mailto:bugsweepingtscm@gmail.com"
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
                  bugsweepingtscm@gmail.com
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
