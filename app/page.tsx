import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import TrustBadges from "@/components/sections/TrustBadges";
import ContactCTA from "@/components/sections/ContactCTA";
import Services from "@/components/sections/Services";
import Equipment from "@/components/sections/Equipment";
import TSCMPoints from "@/components/sections/TSCMPoints";
import HomeAbout from "@/components/sections/HomeAbout";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustBadges />
        <ContactCTA
          title="You Should Contact Us for Professional Bug Sweep Services"
          subtitle="Get expert TSCM consultation — completely confidential and discreet."
        />
        <Services />
        <Equipment />
        <ContactCTA
          title="Discover How Easily We Can Secure Your Privacy"
          subtitle="Free initial consultation with our certified TSCM specialists."
          variant="accent"
        />
        <TSCMPoints />
        <HomeAbout />
        <Stats />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
