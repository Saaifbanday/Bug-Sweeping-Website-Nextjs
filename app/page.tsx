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
    // The Organization and Person nodes are defined once in the root layout
    // (lib/site-entity.ts), so they ship on every route with one @id each. This page
    // only references them, which keeps a single entity for the firm and a single one
    // for the founder instead of the two Person nodes that existed before.
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
          subtitle="A first consultation costs nothing. Tell us what is worrying you."
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
