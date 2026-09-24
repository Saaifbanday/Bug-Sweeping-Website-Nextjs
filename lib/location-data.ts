export interface CityData {
  slug: string;
  city: string;
  state: string;
  heroTitle: string;
  heroSubtitle: string;
  intro: string;
  whyUs: string;
  areas: string[];
  metaDescription: string;
  // Optional fields used by refreshed city pages; older entries fall back to defaults.
  seoTitle?: string;
  faqs?: { q: string; a: string }[];
  guide?: { href: string; label: string };
  jsonLd?: Record<string, unknown>;
}

export const cities: CityData[] = [
  {
    slug: "mumbai",
    city: "Mumbai",
    state: "Maharashtra",
    heroTitle: "Bug Sweeping Services in Mumbai",
    heroSubtitle:
      "Professional TSCM bug sweep services across Mumbai, Navi Mumbai, and Thane. Hidden cameras, listening devices, and GPS trackers found and removed, completely confidentially.",
    intro:
      "Mumbai is India's financial capital and the city most frequently targeted by corporate surveillance. With the highest concentration of high-net-worth individuals, multinational boardrooms, and high-stakes business negotiations in the country, Mumbai's executives and professionals face a surveillance threat that is both sophisticated and constant. Our TSCM technicians work across the city, handling both urgent requests and bookings made in advance.",
    whyUs:
      "Our Mumbai-based deployments cover the full range of TSCM services: corporate boardroom sweeps before mergers and acquisitions, residential sweeps for HNI clients in South Mumbai and Bandra, vehicle GPS sweeps for C-suite executives, and telephone line analysis for offices in BKC and Lower Parel. We agree the scope with you in advance, work without disrupting your operations, and provide a written report setting out the areas examined, the methods used and the findings.",
    areas: [
      "South Mumbai (Nariman Point, Fort, Colaba)",
      "Bandra, Juhu & Western Suburbs",
      "Andheri, Goregaon & Malad",
      "Powai, Vikhroli & Eastern Suburbs",
      "BKC & Kurla",
      "Navi Mumbai (Vashi, Belapur, Kharghar)",
      "Thane & Kalyan",
    ],
    metaDescription:
      "Professional bug sweeping & TSCM in Mumbai. We detect hidden cameras, audio bugs & GPS trackers in offices, homes & vehicles. Confidential.",
  },
  {
    slug: "delhi",
    city: "Delhi",
    state: "Delhi NCR",
    seoTitle: "Bug Sweeping Services in Delhi NCR | TSCM Sweeps",
    heroTitle: "Bug Sweeping Services in Delhi",
    heroSubtitle:
      "TSCM bug sweeps for homes, offices, boardrooms and vehicles across Delhi, with coverage extending into Gurugram, Noida, Faridabad and Ghaziabad. Start with a consultation, arranged from a phone you trust.",
    intro:
      "A bug sweep in Delhi is a systematic search of a defined space for hidden cameras, audio bugs and tracking devices. We agree the scope with you first, which rooms, vehicles and lines are covered, then examine them using radio-frequency analysis to find transmitting devices, a non-linear junction detector to find electronics whether they are powered or not, optical and thermal checks, and a close physical inspection of the places devices are commonly concealed. You receive a written report setting out the areas examined, the methods used, anything found, and the limits of what the sweep could establish.",
    whyUs:
      "Delhi is where a sweep most often has to be arranged quietly. If a device is live, whoever placed it may be listening while you make the booking, so we discuss scope away from the space you are worried about and agree in advance what happens if something is found, including photographing it in position before anyone touches it. We work across the capital and into the wider NCR, which matters because a device found in a Gurugram or Noida office falls to a different police force from one found in Delhi.",
    areas: [
      "Central Delhi (Connaught Place, Lutyen's Zone)",
      "South Delhi (Defence Colony, Greater Kailash, Hauz Khas)",
      "North & West Delhi",
      "Gurgaon / Gurugram (Cyber City, Golf Course Road)",
      "Noida & Greater Noida",
      "Faridabad & Ballabhgarh",
      "Ghaziabad & Indirapuram",
    ],
    metaDescription:
      "Bug sweeping services in Delhi NCR: TSCM sweeps for homes, offices and vehicles, covering hidden cameras, audio bugs and trackers. Book a consultation.",
    guide: {
      href: "/blog/bug-sweeping-in-delhi",
      label: "Read our Delhi guide: where devices turn up and where to complain",
    },
    faqs: [
      {
        q: "What does a bug sweep in Delhi include?",
        a: "Radio-frequency analysis for transmitting devices, a non-linear junction detector for electronics that are switched off, optical and thermal checks, and a physical inspection of the places devices are usually concealed. Phones, telephone lines and vehicles are separate items of scope, agreed before the visit. You receive a written report covering the areas examined, the methods used and the findings.",
      },
      {
        q: "How much does a bug sweep in Delhi cost?",
        a: "There is no standard rate. The price depends on the number and size of the spaces, how cluttered they are, which methods are included, whether vehicles or phones are in scope, travel and timing, and the depth of the report. Ask for a written quote that lists what is included rather than a headline figure.",
      },
      {
        q: "Do you cover Gurugram, Noida, Faridabad and Ghaziabad?",
        a: "Yes, our Delhi coverage extends across the NCR. It is worth knowing that these are different police jurisdictions: Delhi Police covers Delhi, Haryana Police covers Gurugram and Faridabad, and Uttar Pradesh Police covers Noida and Ghaziabad, so where a device is found decides which force investigates.",
      },
      {
        q: "How do I arrange a sweep without alerting whoever planted the device?",
        a: "Contact us from a different phone and a different place from the one you are worried about, keep the number of people who know small, and leave fittings and vehicles undisturbed until the sweep. Searching yourself first can both warn the other side and damage evidence.",
      },
      {
        q: "What can a bug sweep not tell me?",
        a: "A sweep reports what was found in the areas examined, with the methods used, at the time of the visit. Finding nothing does not prove nothing was ever there, and no sweep can keep a space clean afterwards. Anyone offering guaranteed or complete detection is overstating what the equipment does.",
      },
    ],
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://www.bugsweepingtscm.com/locations/delhi#webpage",
          url: "https://www.bugsweepingtscm.com/locations/delhi",
          name: "Bug Sweeping Services in Delhi NCR",
          inLanguage: "en-IN",
          isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" },
          breadcrumb: { "@id": "https://www.bugsweepingtscm.com/locations/delhi#breadcrumb" },
          about: { "@id": "https://www.bugsweepingtscm.com/locations/delhi#place" },
        },
        {
          "@type": "WebSite",
          "@id": "https://www.bugsweepingtscm.com/#website",
          url: "https://www.bugsweepingtscm.com",
          name: "BugSweepingTSCM.com",
          publisher: { "@id": "https://www.bugsweepingtscm.com/#organization" },
          inLanguage: "en-IN",
        },
        {
          "@type": "Place",
          "@id": "https://www.bugsweepingtscm.com/locations/delhi#place",
          name: "Delhi",
          address: { "@type": "PostalAddress", addressLocality: "Delhi", addressRegion: "Delhi", addressCountry: "IN" },
        },
        {
          "@type": "Service",
          "@id": "https://www.bugsweepingtscm.com/locations/delhi#service",
          name: "Bug sweeping and TSCM services in Delhi",
          serviceType: "Technical surveillance countermeasures",
          provider: { "@id": "https://www.bugsweepingtscm.com/#organization" },
          areaServed: { "@id": "https://www.bugsweepingtscm.com/locations/delhi#place" },
          mainEntityOfPage: { "@id": "https://www.bugsweepingtscm.com/locations/delhi#webpage" },
        },
        {
          "@type": "Organization",
          "@id": "https://www.bugsweepingtscm.com/#organization",
          name: "BugSweepingTSCM",
          url: "https://www.bugsweepingtscm.com",
          logo: "https://www.bugsweepingtscm.com/images/logo/bug-sweep.png",
          email: "bugsweepingtscm@gmail.com",
          telephone: "+91-8882732221",
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://www.bugsweepingtscm.com/locations/delhi#breadcrumb",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.bugsweepingtscm.com" },
            { "@type": "ListItem", position: 2, name: "Locations", item: "https://www.bugsweepingtscm.com/locations/delhi" },
            { "@type": "ListItem", position: 3, name: "Delhi" },
          ],
        },
      ],
    },
  },
  {
    slug: "bengaluru",
    city: "Bengaluru",
    state: "Karnataka",
    heroTitle: "Bug Sweeping Services in Bengaluru",
    heroSubtitle:
      "TSCM and bug sweep services for India's technology capital. Corporate boardrooms, executive residences, and vehicles swept by certified specialists across Bengaluru.",
    intro:
      "Bengaluru's status as India's technology hub brings a unique surveillance risk profile. Intellectual property worth billions is developed in the city's office parks and research facilities. Corporate espionage in Bengaluru most commonly targets product roadmaps, client contracts, hiring strategies, and acquisition targets, information that adversaries are willing to invest significantly to obtain through covert electronic means.",
    whyUs:
      "Our Bengaluru TSCM deployments specialise in technology company environments: the open-plan offices and glass-walled boardrooms where traditional concealment logic does not apply. We understand the threat vectors specific to the tech industry and carry equipment calibrated to detect the low-power, Wi-Fi and Bluetooth transmitters increasingly used in corporate espionage. Our sweeps cover Whitefield, Electronic City, Koramangala, and the CBD.",
    areas: [
      "CBD (MG Road, Brigade Road, Lavelle Road)",
      "Koramangala & HSR Layout",
      "Indiranagar & Ulsoor",
      "Whitefield & ITPL",
      "Electronic City & Hosur Road",
      "Jayanagar & JP Nagar",
      "Hebbal & Manyata Tech Park",
    ],
    metaDescription:
      "Professional bug sweeping & TSCM in Bengaluru. We detect hidden cameras, audio bugs & GPS trackers for tech companies, homes & offices.",
  },
  {
    slug: "chandigarh",
    city: "Chandigarh",
    state: "Punjab & Haryana",
    heroTitle: "Bug Sweeping Services in Chandigarh",
    heroSubtitle:
      "Professional TSCM bug sweep services in Chandigarh, Mohali, and Panchkula. Serving government officials, business owners, and private clients across the Tricity.",
    intro:
      "Chandigarh's role as the joint capital of Punjab and Haryana, combined with its proximity to key commercial hubs in Mohali and Panchkula, creates a significant demand for professional TSCM services. The city is home to senior government officials, successful business families, and a growing corporate sector, all of whom require the kind of privacy assurance that a professional bug sweep provides.",
    whyUs:
      "Our Chandigarh Tricity deployments cover residential sweeps for HNI clients across Sector neighbourhoods, corporate office sweeps in Mohali's IT Park and industrial areas, and vehicle GPS sweeps for clients who have reason to believe they are being tracked. Scope and terms are agreed with you before any visit, and the sweep is documented in a written report.",
    areas: [
      "Chandigarh Sectors (1–62)",
      "Mohali (Phase 1–11, IT Park, Aerocity)",
      "Panchkula (Sectors 1–25)",
      "Zirakpur & Kharar",
      "Derabassi",
      "SAS Nagar (Mohali) industrial areas",
    ],
    metaDescription:
      "Expert bug sweeping & TSCM in Chandigarh, Mohali & Panchkula. We detect hidden cameras, audio bugs & GPS trackers for homes & offices.",
  },
];
