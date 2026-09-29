import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bugsweepingtscm.com"),
  title: "Bug Sweeping & TSCM Services India | Award-Winning Counter-Surveillance",
  description:
    "Bug sweeping and TSCM across India, led by Hardesh Bhardwaj, named Investigator of the Year 2026 by the World Association of Detectives. Hidden cameras, audio bugs and GPS trackers found and documented.",
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
    canonical: "https://www.bugsweepingtscm.com",
  },
  openGraph: {
    title: "Bug Sweeping & TSCM Services India | Award-Winning Counter-Surveillance",
    description:
      "Bug sweeping and TSCM across India, led by Hardesh Bhardwaj, named Investigator of the Year 2026 by the World Association of Detectives. Hidden cameras, audio bugs and GPS trackers found and documented.",
    type: "website",
    locale: "en_IN",
    siteName: "BugSweepingTSCM.com",
    url: "https://www.bugsweepingtscm.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bug Sweeping TSCM India | Professional Bug Sweep Services",
    description:
      "Expert bug sweeping & TSCM across India. We detect hidden cameras, audio bugs & GPS trackers in homes, offices & vehicles.",
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
