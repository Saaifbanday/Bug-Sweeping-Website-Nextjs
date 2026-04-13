"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, Mail, Shield } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Equipment", href: "/#equipment" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div
        style={{ backgroundColor: "var(--bg-card)", borderBottom: "1px solid var(--color-border)" }}
        className="hidden md:block py-2 px-4"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-end gap-6">
          <a
            href="mailto:info@bugsweepingtscm.com"
            className="flex items-center gap-2 text-sm"
            style={{ color: "var(--color-muted)" }}
          >
            <Mail size={13} style={{ color: "var(--color-accent)" }} />
            info@bugsweepingtscm.com
          </a>
          <a
            href="tel:+918882732221"
            className="flex items-center gap-2 text-sm"
            style={{ color: "var(--color-muted)" }}
          >
            <Phone size={13} style={{ color: "var(--color-accent)" }} />
            +91 888 273 2221
          </a>
        </div>
      </div>

      {/* Main nav */}
      <header
        style={{
          backgroundColor: scrolled ? "rgba(8,13,26,0.97)" : "var(--bg-primary)",
          borderBottom: scrolled ? "1px solid var(--color-border)" : "1px solid transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          transition: "all 0.3s ease",
        }}
        className="sticky top-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div
                style={{
                  backgroundColor: "var(--color-accent)",
                  borderRadius: "6px",
                  padding: "6px",
                  transition: "transform 0.2s",
                }}
                className="group-hover:scale-105"
              >
                <Shield size={20} color="#fff" />
              </div>
              <div>
                <div
                  className="font-bold text-sm leading-tight tracking-wide"
                  style={{ color: "var(--color-text)" }}
                >
                  BUG SWEEPS
                </div>
                <div
                  className="text-xs leading-tight"
                  style={{ color: "var(--color-accent)" }}
                >
                  Debugging & TSCM Services
                </div>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2 rounded text-sm font-medium transition-colors"
                  style={{ color: "var(--color-muted)" }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.color = "var(--color-text)";
                    (e.target as HTMLElement).style.backgroundColor = "var(--bg-card)";
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.color = "var(--color-muted)";
                    (e.target as HTMLElement).style.backgroundColor = "transparent";
                  }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+918882732221"
                className="btn-primary ml-4 text-sm"
                style={{ padding: "0.5rem 1.25rem" }}
              >
                <Phone size={14} />
                Get Free Consultation
              </a>
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded"
              style={{ color: "var(--color-text)" }}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            style={{
              backgroundColor: "var(--bg-surface)",
              borderTop: "1px solid var(--color-border)",
            }}
            className="md:hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-3 py-2.5 rounded text-sm font-medium"
                  style={{ color: "var(--color-muted)" }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+918882732221"
                className="btn-primary mt-3 justify-center"
              >
                <Phone size={14} />
                Get Free Consultation
              </a>
              <div
                className="mt-4 pt-4 flex flex-col gap-2"
                style={{ borderTop: "1px solid var(--color-border)" }}
              >
                <a
                  href="mailto:info@bugsweepingtscm.com"
                  className="flex items-center gap-2 text-xs"
                  style={{ color: "var(--color-muted)" }}
                >
                  <Mail size={12} style={{ color: "var(--color-accent)" }} />
                  info@bugsweepingtscm.com
                </a>
                <a
                  href="tel:+918882732221"
                  className="flex items-center gap-2 text-xs"
                  style={{ color: "var(--color-muted)" }}
                >
                  <Phone size={12} style={{ color: "var(--color-accent)" }} />
                  +91 888 273 2221
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
