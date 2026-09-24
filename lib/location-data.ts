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
  jurisdiction?: { heading: string; body: string[] };
  settings?: { title: string; desc: string }[];
  faqs?: { q: string; a: string }[];
  guide?: { href: string; label: string };
  jsonLd?: Record<string, unknown>;
}

export const cities: CityData[] = [
  {
    slug: "mumbai",
    city: "Mumbai",
    state: "Maharashtra",
    seoTitle: "Bug Sweeping Services in Mumbai | TSCM Sweeps",
    heroTitle: "Bug Sweeping Services in Mumbai",
    heroSubtitle:
      "TSCM bug sweeps for flats, offices, boardrooms and vehicles across Mumbai, Navi Mumbai and Thane. Start with a consultation, arranged from a phone you trust.",
    intro:
      "A bug sweep in Mumbai is a systematic search of a defined space for hidden cameras, audio bugs and tracking devices. We agree the scope with you first, which rooms, vehicles and lines are covered, then examine them using radio-frequency analysis for transmitting devices, a non-linear junction detector for electronics whether they are powered or not, optical and thermal checks, and a close physical inspection of the places devices are usually concealed.",
    whyUs:
      "Two things shape a sweep in Mumbai. Flats are small, shared and stacked close together, so a radio scan picks up the building as much as the room and most of the work is separating one unexplained signal from the neighbours' devices. And in a co-operative housing society the cameras in the lobby, lift and parking already belong to the society, so the question is often who can reach the recorder rather than whether anything was planted. We look at both, and say plainly what the sweep could and could not establish.",
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
      "Bug sweeping services in Mumbai: TSCM sweeps for flats, offices and vehicles across Mumbai, Navi Mumbai and Thane. Book a private consultation.",
    jurisdiction: {
      heading: "The Mumbai region is several police commissionerates",
      body: [
        "We cover Greater Mumbai and the wider metropolitan region, which is policed by more than one force. Greater Mumbai Police covers the island city and suburbs. Thane City Police covers Thane, and Kalyan and Dombivli sit inside it as a zone. Navi Mumbai Police covers Vashi, Nerul, Belapur, Kharghar and Panvel, and has its own cyber crime police station. Mira Road, Bhayandar, Vasai and Virar fall to the Mira-Bhayandar, Vasai-Virar commissionerate. All of them come under Maharashtra Police.",
        "Which force investigates follows where the device was planted, not where you live, so a camera found in a Kharghar flat is a Navi Mumbai Police matter even if you work in Lower Parel. It is worth knowing before you report, because it decides where the case actually sits.",
        "One practical point specific to Mumbai: the city police's online complaint page accepts only minor, non-cognizable complaints, and states that an FIR for a cognizable crime can only be registered at a police station. Voyeurism is cognizable, so a hidden-camera complaint cannot be completed through that form.",
      ],
    },
    settings: [
      {
        title: "Housing societies",
        desc: "Where the society's own cameras, recorder and backup are the exposure. We look at where cameras point and who can reach the footage, not only at what might be hidden.",
      },
      {
        title: "Offices and boardrooms",
        desc: "Sweeps before a negotiation or board meeting for offices in the business districts, where regulators, an exchange and trading floors sit close together.",
      },
      {
        title: "Hotels and short stays",
        desc: "A reported Mumbai case involved a camera inside an electric plug point in a hotel room, so sockets, fittings and anything facing the bed get close attention.",
      },
      {
        title: "Vehicles",
        desc: "Tracker checks covering the underbody, wheel arches, bumpers, boot and the diagnostic port, for cars left with valets, drivers or at service centres.",
      },
    ],
    guide: {
      href: "/blog/bug-sweeping-in-mumbai",
      label: "Read our Mumbai guide: jurisdiction, society cameras and where to complain",
    },
    faqs: [
      {
        q: "Can I report a hidden camera to Mumbai Police online?",
        a: "Not as an FIR. The city police's online complaint page accepts only minor, non-cognizable complaints and says an FIR for a cognizable crime can only be registered at a police station. Voyeurism is cognizable, so the form will not complete the report. The national portal at cybercrime.gov.in takes a parallel complaint, which is routed to the state police rather than becoming an FIR itself.",
      },
      {
        q: "What affects the cost of a sweep in Mumbai?",
        a: "The number and size of the spaces, how cluttered they are, whether vehicles or phones are in scope, and the depth of the report. In Mumbai, access is often the variable: society permissions, lift and parking access, and travel across the metropolitan region all affect scheduling. Ask for a written quote listing what is included.",
      },
      {
        q: "Do you cover Navi Mumbai and Thane?",
        a: "Yes. It is worth knowing that Thane City and Navi Mumbai are separate police commissionerates from Greater Mumbai, so if a device is found, the force covering that address is the one that investigates. We plan the documentation so it is usable wherever the complaint is filed.",
      },
      {
        q: "Can you tell me who is behind the society CCTV footage?",
        a: "A sweep examines the space and the equipment in it; it does not investigate who accessed a society's recorder. What we can do is document how the system is set up, where cameras point, and who has physical or login access, which is usually what a society or the police need to take the matter further.",
      },
    ],
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://www.bugsweepingtscm.com/locations/mumbai#webpage",
          url: "https://www.bugsweepingtscm.com/locations/mumbai",
          name: "Bug Sweeping Services in Mumbai",
          inLanguage: "en-IN",
          isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" },
          breadcrumb: { "@id": "https://www.bugsweepingtscm.com/locations/mumbai#breadcrumb" },
          about: { "@id": "https://www.bugsweepingtscm.com/locations/mumbai#place" },
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
          "@id": "https://www.bugsweepingtscm.com/locations/mumbai#place",
          name: "Mumbai",
          address: { "@type": "PostalAddress", addressLocality: "Mumbai", addressRegion: "Maharashtra", addressCountry: "IN" },
        },
        {
          "@type": "Service",
          "@id": "https://www.bugsweepingtscm.com/locations/mumbai#service",
          name: "Bug sweeping and TSCM services in Mumbai",
          serviceType: "Technical surveillance countermeasures",
          provider: { "@id": "https://www.bugsweepingtscm.com/#organization" },
          areaServed: { "@id": "https://www.bugsweepingtscm.com/locations/mumbai#place" },
          mainEntityOfPage: { "@id": "https://www.bugsweepingtscm.com/locations/mumbai#webpage" },
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
          "@id": "https://www.bugsweepingtscm.com/locations/mumbai#breadcrumb",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.bugsweepingtscm.com" },
            { "@type": "ListItem", position: 2, name: "Locations", item: "https://www.bugsweepingtscm.com/locations/mumbai" },
            { "@type": "ListItem", position: 3, name: "Mumbai" },
          ],
        },
      ],
    },
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
      "People call us in Delhi for one of two reasons: something has already happened, such as a conversation that reached the wrong people, or a sweep is needed before something important, such as a negotiation or a board meeting. Either way we start by agreeing the scope, which rooms, vehicles and lines are covered, and then work through them: radio-frequency analysis for devices that transmit, a non-linear junction detector for electronics that are switched off, optical and thermal checks, and a close physical inspection of the places devices are usually concealed.",
    whyUs:
      "The part people underestimate is arranging it quietly. If a device is live, whoever placed it may be listening while you make the booking, so we discuss scope away from the space you are worried about and agree in advance what happens if something is found, including photographing it in position before anyone touches it. Reported Delhi cases have turned on exactly that sort of detail: devices concealed inside ordinary fittings, retrieved by someone with a reason to be in the building.",
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
    jurisdiction: {
      heading: "Delhi NCR is four police forces, not one",
      body: [
        "We work across Delhi and into the wider National Capital Region, and it is worth knowing before you book that the region is not one jurisdiction. Delhi Police covers Delhi and reports to the Union Ministry of Home Affairs. Gurugram and Faridabad are Haryana Police. Noida, formally Gautam Buddh Nagar, and Ghaziabad are Uttar Pradesh Police.",
        "That matters the moment something is found. The force that investigates is the one covering the place the device was planted, not the place you live, so a camera in a Gurugram office is a Haryana Police matter even if your home is in South Delhi. If devices turn up at both a Delhi home and an NCR office, they are two separate matters.",
        "It does not mean a station can turn you away. Section 173(1) of the Bharatiya Nagarik Suraksha Sanhita allows information about a cognizable offence to be recorded irrespective of where the offence was committed, and the case is then transferred. We plan the sweep with that in mind, so the documentation is usable wherever the complaint ends up.",
      ],
    },
    settings: [
      {
        title: "Offices and boardrooms",
        desc: "Sweeps before a negotiation, a funding round or a board meeting, in Delhi's business districts and the Gurugram and Noida corporate belt.",
      },
      {
        title: "Homes and rented flats",
        desc: "Reported Delhi cases have involved cameras concealed in fittings in rented rooms, so bathrooms, bedrooms and anything a landlord insists on repairing himself get close attention.",
      },
      {
        title: "Paying guest rooms and hostels",
        desc: "Delhi's student and coaching belts run on paying-guest accommodation. Cameras in a private room are an offence whatever the house rules say.",
      },
      {
        title: "Vehicles",
        desc: "Tracker checks on cars used by executives, or where someone appears to know your movements, covering the underbody, bumpers, boot and the diagnostic port.",
      },
    ],
    guide: {
      href: "/blog/bug-sweeping-in-delhi",
      label: "Read our Delhi guide: where devices turn up and where to complain",
    },
    faqs: [
      {
        q: "Do you cover Gurugram, Noida, Faridabad and Ghaziabad?",
        a: "Yes, our Delhi coverage extends across the NCR. It is worth knowing that these are different police jurisdictions: Delhi Police covers Delhi, Haryana Police covers Gurugram and Faridabad, and Uttar Pradesh Police covers Noida and Ghaziabad, so where a device is found decides which force investigates.",
      },
      {
        q: "Can I report a hidden camera to Delhi Police online?",
        a: "Not as an FIR. Delhi Police's online reporting covers vehicle and property theft, and its other online services are complaints rather than FIRs, so an offence such as voyeurism means attending a police station or one of the district cyber police stations. Our report is written so it can be handed over there.",
      },
      {
        q: "What affects the cost of a sweep in Delhi?",
        a: "The number and size of the spaces, how cluttered they are, whether vehicles or phones are in scope, and the depth of the report. Travel across the NCR and work scheduled at night or over a weekend, which is common for occupied offices in Gurugram and Noida, also affect it. Ask for a written quote listing what is included.",
      },
      {
        q: "How do I arrange a sweep without alerting whoever planted the device?",
        a: "Contact us from a different phone and a different place from the one you are worried about, keep the number of people who know small, and leave fittings and vehicles undisturbed until the sweep. Searching yourself first can both warn the other side and damage evidence.",
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
    seoTitle: "Bug Sweeping Services in Bengaluru | TSCM Sweeps",
    heroTitle: "Bug Sweeping Services in Bengaluru",
    heroSubtitle:
      "TSCM bug sweeps for offices, homes, paying guest accommodation and vehicles across Bengaluru, from the central business district out to Whitefield and Electronic City.",
    intro:
      "Bengaluru brings two jobs to a sweep that other cities bring less often. One is the office: open-plan floors and glass meeting rooms where there is nowhere obvious to hide a device and, equally, nowhere obvious for it to be missed. The other is rented accommodation, because the city runs on it. We agree the scope with you first, then work through the space using radio-frequency analysis for devices that transmit, a non-linear junction detector for electronics that are switched off, optical and thermal checks, and a physical inspection.",
    whyUs:
      "In a technology office the hard part is rarely detection in the abstract; it is telling an unexplained transmitter apart from the dozens of legitimate wireless devices in the room, from conferencing kit to badge readers to whatever a colleague has just plugged in. We check the room as it actually runs, ask what changed before your suspicion started, and set out in writing what the sweep did and did not cover.",
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
      "Bug sweeping services in Bengaluru: TSCM sweeps for offices, homes, PGs and vehicles, from the CBD to Whitefield and Electronic City. Book a consultation.",
    jurisdiction: {
      heading: "Whitefield and Electronic City are inside the city police, not rural",
      body: [
        "This trips people up when they need to report something. Bengaluru City Police is organised into zones, and its own overview lists Whitefield and Electronic City among them, alongside the directional zones for the rest of the city. So an office in Whitefield or a flat in Electronic City is a Bengaluru City Police matter, not a Bengaluru Rural one, even though both sit well outside the old city.",
        "Cyber matters follow a different path again. Karnataka routes them to CEN police stations, which handle cyber, economic and narcotic offences, and the city also has a Cyber Crime Police Station based at the Commissioner's office. A complaint made through the national portal or the 1930 helpline is routed to the CEN station covering the address.",
        "Almost nothing else can be finished online. Bengaluru City Police's e-FIR service covers vehicle theft, and the lost-article service produces a report rather than an FIR, so an offence such as voyeurism means attending the station that covers the address. The state police's police station locator will tell you which that is, and it lists Bengaluru City separately from the surrounding district.",
      ],
    },
    settings: [
      {
        title: "Offices and meeting rooms",
        desc: "Sweeps before a funding round, an acquisition or a board meeting, in office parks where dozens of legitimate wireless devices share the same room.",
      },
      {
        title: "Paying guest accommodation",
        desc: "In September 2026 the Karnataka High Court, as reported by LiveLaw, made interim directions for PG operators in the city that bar cameras in bedrooms, bathrooms, toilets and changing areas.",
      },
      {
        title: "Homes and rented flats",
        desc: "Checks after a tenancy change, a renovation or a dispute, covering fittings, smoke detectors, sockets and anything recently installed by someone else.",
      },
      {
        title: "Vehicles",
        desc: "Tracker checks covering the underbody, wheel arches, bumpers, boot and the diagnostic port, for cars used on a predictable daily route.",
      },
    ],
    faqs: [
      {
        q: "Do you cover Whitefield, Electronic City and the outer tech parks?",
        a: "Yes. It is also worth knowing that both are zones of Bengaluru City Police rather than rural jurisdictions, so a complaint about a device found there goes to the city police station covering that address.",
      },
      {
        q: "Can I report a hidden camera online in Bengaluru?",
        a: "Not as an FIR. The city police's e-FIR service covers vehicle theft, and the lost-article service is a report rather than an FIR, so an offence such as voyeurism has to be reported at the police station covering the address, or through 112. Cyber matters route to a CEN police station, including complaints made via 1930 or the national portal.",
      },
      {
        q: "Can a PG or hostel in Bengaluru put cameras in rooms?",
        a: "Cameras in bedrooms, bathrooms, toilets and changing areas were expressly barred by interim directions of the Karnataka High Court reported in September 2026, and covert recording of a private act is a criminal offence regardless. Cameras at entrances and common areas are treated differently. If you find one inside a room, document it and report it.",
      },
      {
        q: "What affects the cost of a sweep in Bengaluru?",
        a: "The number and size of the spaces, how cluttered they are, whether vehicles or phones are in scope, and the depth of the report. In office parks, access rules and after-hours scheduling often matter as much as floor area. Ask for a written quote listing what is included.",
      },
    ],
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://www.bugsweepingtscm.com/locations/bengaluru#webpage",
          url: "https://www.bugsweepingtscm.com/locations/bengaluru",
          name: "Bug Sweeping Services in Bengaluru",
          inLanguage: "en-IN",
          isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" },
          breadcrumb: { "@id": "https://www.bugsweepingtscm.com/locations/bengaluru#breadcrumb" },
          about: { "@id": "https://www.bugsweepingtscm.com/locations/bengaluru#place" },
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
          "@id": "https://www.bugsweepingtscm.com/locations/bengaluru#place",
          name: "Bengaluru",
          address: { "@type": "PostalAddress", addressLocality: "Bengaluru", addressRegion: "Karnataka", addressCountry: "IN" },
        },
        {
          "@type": "Service",
          "@id": "https://www.bugsweepingtscm.com/locations/bengaluru#service",
          name: "Bug sweeping and TSCM services in Bengaluru",
          serviceType: "Technical surveillance countermeasures",
          provider: { "@id": "https://www.bugsweepingtscm.com/#organization" },
          areaServed: { "@id": "https://www.bugsweepingtscm.com/locations/bengaluru#place" },
          mainEntityOfPage: { "@id": "https://www.bugsweepingtscm.com/locations/bengaluru#webpage" },
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
          "@id": "https://www.bugsweepingtscm.com/locations/bengaluru#breadcrumb",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.bugsweepingtscm.com" },
            { "@type": "ListItem", position: 2, name: "Locations", item: "https://www.bugsweepingtscm.com/locations/bengaluru" },
            { "@type": "ListItem", position: 3, name: "Bengaluru" },
          ],
        },
      ],
    },
  },
  {
    slug: "chandigarh",
    city: "Chandigarh",
    state: "Punjab & Haryana",
    seoTitle: "Bug Sweeping Services in Chandigarh | Tricity TSCM",
    heroTitle: "Bug Sweeping Services in Chandigarh",
    heroSubtitle:
      "TSCM bug sweeps for homes, offices and vehicles across Chandigarh, Mohali and Panchkula. One consultation, three jurisdictions, planned accordingly.",
    intro:
      "The Tricity is one place to live in and three places to report a crime in, which is the thing worth planning around before a sweep. We agree the scope with you first, then work through the space using radio-frequency analysis for devices that transmit, a non-linear junction detector for electronics that are switched off, optical and thermal checks, and a physical inspection of the places devices are usually concealed.",
    whyUs:
      "Households and offices here are often spread across the three cities: a house in a Chandigarh sector, an office in Mohali, family in Panchkula. We scope a sweep around that pattern, and because each city is policed by a different force, we document findings so the paperwork works wherever the complaint has to be filed.",
    areas: [
      "Chandigarh Sectors 1 to 62",
      "Mohali (Phases 1 to 11, IT Park, Aerocity)",
      "Panchkula (Sectors 1 to 25)",
      "Zirakpur & Kharar",
      "Derabassi",
      "SAS Nagar (Mohali) industrial areas",
    ],
    metaDescription:
      "Bug sweeping services in Chandigarh, Mohali and Panchkula: TSCM sweeps for homes, offices and vehicles across the Tricity. Book a consultation.",
    jurisdiction: {
      heading: "Three cities, three separate police forces",
      body: [
        "Chandigarh is policed by Chandigarh Police, a union territory force headed by a Director General of Police, with headquarters in Sector 9. Mohali, formally SAS Nagar, comes under Punjab Police. Panchkula is a Haryana Police commissionerate. They are three separate forces with three separate portals, and a complaint does not move between them just because the three cities run together.",
        "So the address decides everything. A device found in a Zirakpur or Mohali property is reported to Punjab Police, one found in Panchkula to Haryana Police, and one found in a Chandigarh sector to Chandigarh Police, even if your office sits in Sector 17 and the rest of your life is somewhere else.",
        "For cyber matters, the national helpline 1930 and the national portal are the simplest starting point, because they route to the right force for you. That is worth knowing here in particular: Chandigarh Police publishes more than one cyber contact number across its own pages, and it moved its citizen services to a new portal in 2026, so leading with 1930 avoids guessing which number is current. Panchkula has its own cyber police station listed in the Haryana Police directory.",
      ],
    },
    settings: [
      {
        title: "Homes across the sectors",
        desc: "Checks after a tenancy change, renovation or family dispute, covering fittings, sockets, smoke detectors and anything recently installed by someone else.",
      },
      {
        title: "Offices in Mohali and Panchkula",
        desc: "Sweeps before a negotiation or a sensitive meeting, planned around the fact that the office and the home may fall under different police forces.",
      },
      {
        title: "Paying guest rooms",
        desc: "Chandigarh's paying guest rules require a guest register kept under intimation to the police, but set no rule about cameras, so a camera in a room is a matter for the criminal law rather than the house rules.",
      },
      {
        title: "Vehicles",
        desc: "Tracker checks covering the underbody, wheel arches, bumpers, boot and the diagnostic port, for cars that move between the three cities on a regular route.",
      },
    ],
    faqs: [
      {
        q: "Do you cover Mohali, Panchkula and Zirakpur?",
        a: "Yes, we work across the Tricity. The practical point is that Chandigarh Police, Punjab Police and Haryana Police are three separate forces, so where a device is found decides which one investigates. We plan the documentation so it holds up wherever the complaint is filed.",
      },
      {
        q: "Where do I report a hidden camera in the Tricity?",
        a: "To the force covering the address where it was found: Chandigarh Police for a Chandigarh sector, Punjab Police for Mohali or Zirakpur, Haryana Police for Panchkula. Call 112 in an emergency. For anything cyber, 1930 and the national portal route the complaint to the correct force, which avoids the risk of using an out-of-date local number.",
      },
      {
        q: "Does a PG in Chandigarh have to follow camera rules?",
        a: "Chandigarh's paying guest rules cover registration with the Estate Officer, minimum space per guest and a guest register kept under intimation to the police, but they do not set camera rules. That does not make a camera in your room lawful: covert recording of a private act is a criminal offence in its own right.",
      },
      {
        q: "What affects the cost of a sweep in the Tricity?",
        a: "The number and size of the spaces, how cluttered they are, whether vehicles or phones are in scope, and the depth of the report. Covering properties in two or three of the cities in one engagement affects travel and scheduling. Ask for a written quote listing what is included.",
      },
    ],
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://www.bugsweepingtscm.com/locations/chandigarh#webpage",
          url: "https://www.bugsweepingtscm.com/locations/chandigarh",
          name: "Bug Sweeping Services in Chandigarh",
          inLanguage: "en-IN",
          isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" },
          breadcrumb: { "@id": "https://www.bugsweepingtscm.com/locations/chandigarh#breadcrumb" },
          about: { "@id": "https://www.bugsweepingtscm.com/locations/chandigarh#place" },
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
          "@id": "https://www.bugsweepingtscm.com/locations/chandigarh#place",
          name: "Chandigarh",
          address: { "@type": "PostalAddress", addressLocality: "Chandigarh", addressRegion: "Chandigarh", addressCountry: "IN" },
        },
        {
          "@type": "Service",
          "@id": "https://www.bugsweepingtscm.com/locations/chandigarh#service",
          name: "Bug sweeping and TSCM services in Chandigarh, Mohali and Panchkula",
          serviceType: "Technical surveillance countermeasures",
          provider: { "@id": "https://www.bugsweepingtscm.com/#organization" },
          areaServed: { "@id": "https://www.bugsweepingtscm.com/locations/chandigarh#place" },
          mainEntityOfPage: { "@id": "https://www.bugsweepingtscm.com/locations/chandigarh#webpage" },
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
          "@id": "https://www.bugsweepingtscm.com/locations/chandigarh#breadcrumb",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.bugsweepingtscm.com" },
            { "@type": "ListItem", position: 2, name: "Locations", item: "https://www.bugsweepingtscm.com/locations/chandigarh" },
            { "@type": "ListItem", position: 3, name: "Chandigarh" },
          ],
        },
      ],
    },
  },
];
