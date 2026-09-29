import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import TrustBadges from "@/components/sections/TrustBadges";
import ContactCTA from "@/components/sections/ContactCTA";
import Services from "@/components/sections/Services";
import Equipment from "@/components/sections/Equipment";
import TSCMPoints from "@/components/sections/TSCMPoints";
import HomeAbout from "@/components/sections/HomeAbout";
import FounderAuthority from "@/components/sections/FounderAuthority";
import Stats from "@/components/sections/Stats";
import Coverage from "@/components/sections/Coverage";
import Insights from "@/components/sections/Insights";
import { serializeJsonLd } from "@/lib/json-ld";

// The homepage carried no structured data at all. The founder's award is the
// strongest entity signal the site has, so it is stated here as a Person the
// Organization was founded by, with the award named.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.bugsweepingtscm.com/#website",
      url: "https://www.bugsweepingtscm.com",
      name: "BugSweepingTSCM.com",
      inLanguage: "en-IN",
      publisher: { "@id": "https://www.bugsweepingtscm.com/#organization" },
    },
    {
      "@type": "WebPage",
      "@id": "https://www.bugsweepingtscm.com/#webpage",
      url: "https://www.bugsweepingtscm.com",
      name: "Bug Sweeping and TSCM Services in India",
      inLanguage: "en-IN",
      isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" },
      about: { "@id": "https://www.bugsweepingtscm.com/#organization" },
    },
    {
      "@type": "Organization",
      "@id": "https://www.bugsweepingtscm.com/#organization",
      name: "BugSweepingTSCM",
      legalName: "ADA Advance Detective Agency Private Limited",
      url: "https://www.bugsweepingtscm.com",
      logo: "https://www.bugsweepingtscm.com/images/logo/bug-sweep.png",
      email: "info@advancedetectiveagency.com",
      telephone: "+91-8882732221",
      foundingDate: "2021-11-18",
      areaServed: { "@type": "Country", name: "India" },
      founder: { "@id": "https://www.bugsweepingtscm.com/#founder" },
      memberOf: {
        "@type": "Organization",
        name: "World Association of Detectives",
      },
    },
    {
      "@type": "Person",
      "@id": "https://www.bugsweepingtscm.com/#founder",
      name: "Hardesh Bhardwaj",
      jobTitle: "Founder and Lead TSCM Specialist",
      url: "https://www.bugsweepingtscm.com/meet-the-founder",
      image:
        "https://www.bugsweepingtscm.com/portfolio/award-ceremony-hero.jpg",
      worksFor: { "@id": "https://www.bugsweepingtscm.com/#organization" },
      award: "Investigator of the Year 2026, World Association of Detectives",
      knowsAbout: [
        "Technical surveillance countermeasures",
        "Hidden camera detection",
        "Covert audio device detection",
        "GPS tracker detection",
        "Corporate counter-espionage",
      ],
    },
    {
      "@type": "Service",
      "@id": "https://www.bugsweepingtscm.com/#service",
      name: "Bug sweeping and TSCM services in India",
      serviceType: "Technical surveillance countermeasures",
      provider: { "@id": "https://www.bugsweepingtscm.com/#organization" },
      areaServed: { "@type": "Country", name: "India" },
      mainEntityOfPage: { "@id": "https://www.bugsweepingtscm.com/#webpage" },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustBadges />
        <Services />
        <FounderAuthority />
        <Equipment />
        <TSCMPoints />
        <ContactCTA
          title="Discover How Easily We Can Secure Your Privacy"
          subtitle="Free initial consultation with our certified TSCM specialists."
          variant="accent"
        />
        <HomeAbout />
        <Stats />
        <Coverage />
        <Insights />
        <ContactCTA
          title="You Should Contact Us for Professional Bug Sweep Services"
          subtitle="Tell us what prompted the concern and we will explain what a sweep would cover."
        />
      </main>
      <Footer />
    </>
  );
}
