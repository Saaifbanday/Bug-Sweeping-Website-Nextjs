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
  title: "Bug Sweeping TSCM India | Professional Hidden Camera & Bug Sweep Services",
  description:
    "Expert bug sweeping & TSCM across India. We detect hidden cameras, audio bugs & GPS trackers in homes, offices & vehicles. Confidential.",
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
    title: "Bug Sweeping TSCM India | Professional Hidden Camera & Bug Sweep Services",
    description:
      "Expert bug sweeping & TSCM across India. We detect hidden cameras, audio bugs & GPS trackers in homes, offices & vehicles. Confidential.",
    type: "website",
    locale: "en_IN",
    siteName: "BugSweepingTSCM.com",
    url: "https://bugsweepingtscm.com",
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
