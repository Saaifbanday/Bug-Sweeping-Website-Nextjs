import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bugsweepingtscm.com"),
  title: "Bug Sweeping TSCM | Expert Bug Sweeping & TSCM Services – Nationwide",
  description:
    "India's premier Technical Surveillance Counter-Measures (TSCM) experts. Professional bug sweeping for businesses, residences, and vehicles. Hidden cameras, spy apps, GPS trackers — detected and neutralized. Trusted by HNIs, CEOs, and celebrities.",
  keywords: [
    "bug sweeping",
    "TSCM",
    "technical surveillance counter measures",
    "hidden camera detection",
    "spy device detection",
    "GPS tracker detection",
    "counter surveillance India",
    "corporate espionage protection",
    "bug sweep services India",
  ],
  authors: [{ name: "BugSweepingTSCM.com" }],
  alternates: {
    canonical: "https://bugsweepingtscm.com",
  },
  openGraph: {
    title: "Bug Sweeping TSCM | Expert Bug Sweeping & TSCM Services",
    description:
      "India's premier TSCM experts. Professional bug sweeping for businesses, residences, and vehicles.",
    type: "website",
    locale: "en_IN",
    siteName: "BugSweepingTSCM.com",
    url: "https://bugsweepingtscm.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bug Sweeping TSCM | Expert TSCM Services India",
    description:
      "India's premier TSCM experts. Professional bug sweeping for businesses, residences, and vehicles.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
