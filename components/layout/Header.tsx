"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import Logo from "@/components/ui/Logo";

const WHATSAPP = "https://wa.me/918882732221";

const locations = [
  { label: "Bug Sweeping Services in Mumbai", href: "/locations/mumbai" },
  { label: "Bug Sweeping Services in Delhi", href: "/locations/delhi" },
  { label: "Bug Sweeping Services in Bengaluru", href: "/locations/bengaluru" },
  { label: "Bug Sweeping Services in Chandigarh", href: "/locations/chandigarh" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [locOpen, setLocOpen] = useState(false);
  const [mobileLocOpen, setMobileLocOpen] = useState(false);
  const locRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close locations dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (locRef.current && !locRef.current.contains(e.target as Node)) {
        setLocOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div
        style={{
          backgroundColor: "var(--bg-card)",
          borderBottom: "1px solid var(--color-border)",
        }}
        className="hidden md:block py-2 px-4"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-end gap-6">
          <a
            href="mailto:bugsweepingtscm@gmail.com"
            className="flex items-center gap-2 text-sm"
            style={{ color: "var(--color-muted)" }}
          >
            <Mail size={13} style={{ color: "var(--color-accent)" }} />
            bugsweepingtscm@gmail.com
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
          backgroundColor: scrolled
            ? "rgba(8,13,26,0.97)"
            : "var(--bg-primary)",
          borderBottom: scrolled
            ? "1px solid var(--color-border)"
            : "1px solid transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          transition: "all 0.3s ease",
        }}
        className="sticky top-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/">
              <Logo size="md" />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2 rounded text-sm font-medium transition-colors"
                  style={{ color: "var(--color-muted)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color =
                      "var(--color-text)";
                    (e.currentTarget as HTMLElement).style.backgroundColor =
                      "var(--bg-card)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color =
                      "var(--color-muted)";
                    (e.currentTarget as HTMLElement).style.backgroundColor =
                      "transparent";
                  }}
                >
                  {link.label}
                </Link>
              ))}

              {/* Locations dropdown */}
              <div
                ref={locRef}
                className="relative"
                onMouseEnter={() => setLocOpen(true)}
                onMouseLeave={() => setLocOpen(false)}
              >
                <button
                  className="px-4 py-2 rounded text-sm font-medium flex items-center gap-1 transition-colors"
                  style={{
                    color: locOpen ? "var(--color-text)" : "var(--color-muted)",
                    backgroundColor: locOpen ? "var(--bg-card)" : "transparent",
                  }}
                  onClick={() => setLocOpen(!locOpen)}
                >
                  Locations
                  <ChevronDown
                    size={13}
                    style={{
                      transition: "transform 0.2s",
                      transform: locOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  />
                </button>

                {locOpen && (
                  <div
                    className="absolute top-full left-0 mt-1 rounded-xl overflow-hidden"
                    style={{
                      backgroundColor: "var(--bg-card)",
                      border: "1px solid var(--color-border)",
                      minWidth: "280px",
                      boxShadow: "0 16px 40px rgba(0,0,0,0.4)",
                    }}
                  >
                    {locations.map((loc) => (
                      <Link
                        key={loc.href}
                        href={loc.href}
                        className="block px-4 py-3 text-sm transition-colors"
                        style={{
                          color: "var(--color-muted)",
                          borderBottom: "1px solid var(--color-border)",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.color =
                            "var(--color-text)";
                          (
                            e.currentTarget as HTMLElement
                          ).style.backgroundColor = "var(--bg-surface)";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.color =
                            "var(--color-muted)";
                          (
                            e.currentTarget as HTMLElement
                          ).style.backgroundColor = "transparent";
                        }}
                        onClick={() => setLocOpen(false)}
                      >
                        {loc.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
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
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-3 py-2.5 rounded text-sm font-medium"
                  style={{ color: "var(--color-muted)" }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              {/* Locations accordion on mobile */}
              <button
                className="px-3 py-2.5 rounded text-sm font-medium flex items-center justify-between w-full"
                style={{ color: "var(--color-muted)" }}
                onClick={() => setMobileLocOpen(!mobileLocOpen)}
              >
                Locations
                <ChevronDown
                  size={13}
                  style={{
                    transition: "transform 0.2s",
                    transform: mobileLocOpen
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                  }}
                />
              </button>
              {mobileLocOpen && (
                <div className="pl-4 flex flex-col gap-1">
                  {locations.map((loc) => (
                    <Link
                      key={loc.href}
                      href={loc.href}
                      className="px-3 py-2 rounded text-sm"
                      style={{ color: "var(--color-muted)" }}
                      onClick={() => {
                        setMenuOpen(false);
                        setMobileLocOpen(false);
                      }}
                    >
                      {loc.label}
                    </Link>
                  ))}
                </div>
              )}

              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
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
                  href="mailto:bugsweepingtscm@gmail.com"
                  className="flex items-center gap-2 text-xs"
                  style={{ color: "var(--color-muted)" }}
                >
                  <Mail size={12} style={{ color: "var(--color-accent)" }} />
                  bugsweepingtscm@gmail.com
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
