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
  areaGroups?: { zone: string; areas: string[] }[];
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
    areaGroups: [
      {
        zone: "South Mumbai",
        areas: ["Colaba", "Fort", "Churchgate", "Marine Lines", "Nariman Point", "Cuffe Parade", "Girgaon", "Malabar Hill", "Tardeo", "Byculla"],
      },
      {
        zone: "Central Mumbai",
        areas: ["Worli", "Lower Parel", "Parel", "Dadar", "Mahim", "Matunga", "Sion", "Wadala", "Prabhadevi"],
      },
      {
        zone: "Western suburbs",
        areas: ["Bandra", "Khar", "Santacruz", "Vile Parle", "Andheri", "Jogeshwari", "Goregaon", "Malad", "Kandivali", "Borivali", "Dahisar", "Juhu", "BKC"],
      },
      {
        zone: "Eastern suburbs",
        areas: ["Chembur", "Ghatkopar", "Vikhroli", "Bhandup", "Mulund", "Powai", "Kurla", "Kanjurmarg", "Govandi"],
      },
      {
        zone: "Navi Mumbai",
        areas: ["Vashi", "Nerul", "Belapur", "Kharghar", "Airoli", "Ghansoli", "Panvel", "Seawoods", "Taloja"],
      },
      {
        zone: "Thane and beyond",
        areas: ["Thane", "Kalyan", "Dombivli", "Mira Road", "Bhayandar", "Vasai", "Virar", "Ambernath", "Badlapur"],
      },
    ],
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
    areaGroups: [
      {
        zone: "Central Delhi",
        areas: ["Connaught Place", "Karol Bagh", "Paharganj", "Daryaganj", "Civil Lines", "Rajendra Nagar", "Patel Nagar", "Jhandewalan"],
      },
      {
        zone: "South Delhi",
        areas: ["Defence Colony", "Greater Kailash", "Hauz Khas", "Saket", "Green Park", "Malviya Nagar", "Lajpat Nagar", "Chittaranjan Park", "Nehru Place", "Kalkaji", "Mehrauli", "Sainik Farms"],
      },
      {
        zone: "West Delhi",
        areas: ["Rajouri Garden", "Punjabi Bagh", "Janakpuri", "Tilak Nagar", "Paschim Vihar", "Vikaspuri", "Uttam Nagar", "Hari Nagar", "Kirti Nagar", "Moti Nagar", "Naraina", "Subhash Nagar"],
      },
      {
        zone: "North and North West Delhi",
        areas: ["Model Town", "Ashok Vihar", "Pitampura", "Rohini", "Shalimar Bagh", "Kamla Nagar", "Mukherjee Nagar", "Narela", "Wazirpur"],
      },
      {
        zone: "East and North East Delhi",
        areas: ["Preet Vihar", "Laxmi Nagar", "Mayur Vihar", "Patparganj", "Shahdara", "Dilshad Garden", "Krishna Nagar", "Vivek Vihar", "Seelampur"],
      },
      {
        zone: "South West Delhi and Dwarka",
        areas: ["Dwarka", "Najafgarh", "Palam", "R K Puram", "Munirka", "Vasant Kunj", "Vasant Vihar", "Janakpuri West"],
      },
      {
        zone: "New Delhi and the Lutyens area",
        areas: ["Chanakyapuri", "Khan Market", "Golf Links", "Jor Bagh", "Sunder Nagar", "Pandara Road"],
      },
      {
        zone: "Gurugram",
        areas: ["Cyber City", "Golf Course Road", "Sohna Road", "Udyog Vihar", "DLF Phases 1 to 5", "MG Road", "Sushant Lok", "Manesar"],
      },
      {
        zone: "Noida and Greater Noida",
        areas: ["Sector 16", "Sector 18", "Sector 62", "Sector 125 to 132", "Noida Extension", "Greater Noida West", "Knowledge Park"],
      },
      {
        zone: "Faridabad and Ghaziabad",
        areas: ["Sector 14 to 21 Faridabad", "Ballabhgarh", "Neharpar", "Indirapuram", "Vaishali", "Kaushambi", "Raj Nagar Extension"],
      },
    ],
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
    slug: "gurugram",
    city: "Gurugram",
    state: "Haryana",
    seoTitle: "Bug Sweeping Services in Gurugram | TSCM Sweeps",
    heroTitle: "Bug Sweeping Services in Gurugram",
    heroSubtitle:
      "TSCM bug sweeps for offices, homes and vehicles across Gurugram, from Cyber City and the DLF phases out to New Gurugram and Manesar. Start with a consultation, arranged from a phone you trust.",
    intro:
      "Gurugram brings a particular pattern of work: corporate floors occupied by people who are not the building's owners, serviced offices shared between companies, and homes in condominiums where maintenance staff hold keys. We agree the scope with you first, then work through it using radio-frequency analysis for devices that transmit, a non-linear junction detector for electronics that are switched off, optical and thermal checks, and a physical inspection of the places devices are usually concealed.",
    whyUs:
      "Two practical points shape a Gurugram sweep. Offices here change hands and layouts often, so what matters is what has altered since your suspicion began: a new fitting, a contractor's visit, a device left behind by a previous tenant. And because Gurugram is Haryana Police rather than Delhi Police, we document findings for the force that will actually receive the complaint.",
    areas: [
      "Cyber City & Udyog Vihar",
      "DLF Phases 1 to 5",
      "Golf Course Road & Extension",
      "Sohna Road & Badshahpur",
      "New Gurugram (Sectors 76 to 95)",
      "Dwarka Expressway corridor",
      "Manesar & IMT",
    ],
    metaDescription:
      "Bug sweeping services in Gurugram: TSCM sweeps for offices, homes and vehicles across Cyber City, DLF, New Gurugram and Manesar. Book a consultation.",
    areaGroups: [
      {
        zone: "Old Gurugram",
        areas: ["Civil Lines", "Sector 14", "Sector 15", "Sectors 4 to 7", "Rajiv Nagar", "Jacobpura", "Sadar Bazaar", "New Colony"],
      },
      {
        zone: "Cyber City and DLF",
        areas: ["Cyber City", "DLF Phase 1", "DLF Phase 2", "DLF Phase 3", "DLF Phase 4", "DLF Phase 5", "Udyog Vihar", "MG Road", "Sushant Lok", "Sikanderpur"],
      },
      {
        zone: "Golf Course Road and Extension",
        areas: ["Sector 42", "Sector 43", "Sector 53", "Sector 54", "Sector 56", "Sector 57", "Sector 58", "Nirvana Country", "Ardee City"],
      },
      {
        zone: "Sohna Road and the south",
        areas: ["Sector 47", "Sector 48", "Sector 49", "Vatika Chowk", "Badshahpur", "Subhash Chowk", "Sohna"],
      },
      {
        zone: "New Gurugram",
        areas: ["Sector 76", "Sector 79", "Sector 82", "Sector 84", "Sector 86", "Sector 89", "Sector 92", "Sector 95", "Palam Vihar"],
      },
      {
        zone: "Dwarka Expressway corridor",
        areas: ["Sector 99", "Sector 102", "Sector 104", "Sector 106", "Sector 109", "Sector 110", "Sector 113", "Bajghera"],
      },
      {
        zone: "Manesar and the industrial belt",
        areas: ["IMT Manesar", "Sector 1 Manesar", "Bilaspur", "Pataudi Road", "Farrukhnagar", "Kherki Daula"],
      },
    ],
    jurisdiction: {
      heading: "Gurugram is Haryana Police, and there is more than one cyber station",
      body: [
        "Gurugram is policed by the Gurugram Police Commissionerate under Haryana Police, not by Delhi Police, so Delhi procedures and Delhi numbers do not apply here even though the city sits on Delhi's edge. The force publishes its own structure: four zones, East, West, South and Manesar, alongside headquarters, traffic and crime units, covering 39 police stations.",
        "For anything cyber, the detail worth knowing is that Gurugram does not have a single cyber police station. It has four, one for each zone: Cyber East, Cyber West, Cyber South and Cyber Manesar. Going to the wrong one costs time, and the force publishes a contact list for all four.",
        "There is also no e-FIR route in Haryana. The state's online citizen services take a complaint, a verification request or a lost-property report, and the FIR tools on the police portal only let you look up or download an FIR that already exists. An offence such as voyeurism therefore has to be reported at a police station; filing online and waiting is not the same thing.",
      ],
    },
    settings: [
      {
        title: "Corporate floors and meeting rooms",
        desc: "Sweeps before a negotiation, a funding round or a board meeting, in buildings where facilities staff, contractors and other tenants all have legitimate access.",
      },
      {
        title: "Condominium homes",
        desc: "Checks after a renovation, a staffing change or a dispute, covering fittings, sockets, smoke detectors and anything installed by someone else.",
      },
      {
        title: "Paying guest rooms and guest houses",
        desc: "Gurugram's district administration periodically orders PGs, hotels and guest houses to keep guest and tenant registers with identity proof and police verification, and has penalised establishments for not doing so.",
      },
      {
        title: "Vehicles",
        desc: "Tracker checks covering the underbody, wheel arches, bumpers, boot and the diagnostic port. In one reported Gurugram case a tracker was found tucked near the gearbox of a car that only a dealer had held keys to.",
      },
    ],
    guide: {
      href: "/blog/bug-sweeping-in-delhi",
      label: "Read our Delhi NCR guide: where devices turn up and where a complaint goes",
    },
    faqs: [
      {
        q: "Can I file an FIR online in Gurugram?",
        a: "No. Haryana's online police services cover complaints, verifications and lost property, and the FIR tools on the portal only let you view or download an FIR that already exists. For an offence such as voyeurism you need to attend a police station. A complaint filed online is a complaint, not an FIR, which matters if you are relying on it.",
      },
      {
        q: "Which cyber police station covers my address?",
        a: "Gurugram has four, aligned to the police zones: Cyber East, Cyber West, Cyber South and Cyber Manesar. Gurugram Police publishes contacts for each, and the national helpline 1930 and the cybercrime portal will route a complaint for you if you are not sure which zone you are in.",
      },
      {
        q: "Do you cover Manesar, Sohna and the Dwarka Expressway sectors?",
        a: "Yes, along with Old Gurugram, the DLF phases, Golf Course Road and the New Gurugram sectors. Manesar sits in its own police zone, which is worth knowing if a device is found there, because the complaint follows the zone rather than your office address.",
      },
      {
        q: "What affects the cost of a sweep in Gurugram?",
        a: "The number and size of the spaces, how cluttered they are, whether vehicles or phones are in scope, and the depth of the report. In corporate buildings, access approvals and after-hours scheduling often matter as much as floor area. Ask for a written quote listing what is included.",
      },
    ],
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://www.bugsweepingtscm.com/locations/gurugram#webpage",
          url: "https://www.bugsweepingtscm.com/locations/gurugram",
          name: "Bug Sweeping Services in Gurugram",
          inLanguage: "en-IN",
          isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" },
          breadcrumb: { "@id": "https://www.bugsweepingtscm.com/locations/gurugram#breadcrumb" },
          about: { "@id": "https://www.bugsweepingtscm.com/locations/gurugram#place" },
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
          "@id": "https://www.bugsweepingtscm.com/locations/gurugram#place",
          name: "Gurugram",
          address: { "@type": "PostalAddress", addressLocality: "Gurugram", addressRegion: "Haryana", addressCountry: "IN" },
        },
        {
          "@type": "Service",
          "@id": "https://www.bugsweepingtscm.com/locations/gurugram#service",
          name: "Bug sweeping and TSCM services in Gurugram",
          serviceType: "Technical surveillance countermeasures",
          provider: { "@id": "https://www.bugsweepingtscm.com/#organization" },
          areaServed: { "@id": "https://www.bugsweepingtscm.com/locations/gurugram#place" },
          mainEntityOfPage: { "@id": "https://www.bugsweepingtscm.com/locations/gurugram#webpage" },
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
          "@id": "https://www.bugsweepingtscm.com/locations/gurugram#breadcrumb",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.bugsweepingtscm.com" },
            { "@type": "ListItem", position: 2, name: "Locations", item: "https://www.bugsweepingtscm.com/locations/gurugram" },
            { "@type": "ListItem", position: 3, name: "Gurugram" },
          ],
        },
      ],
    },
  },
  {
    slug: "noida",
    city: "Noida",
    state: "Uttar Pradesh",
    seoTitle: "Bug Sweeping Services in Noida | TSCM Sweeps",
    heroTitle: "Bug Sweeping Services in Noida",
    heroSubtitle:
      "TSCM bug sweeps for offices, flats and vehicles across Noida, Greater Noida and Noida Extension. Start with a consultation, arranged from a phone you trust.",
    intro:
      "Noida is a sector city, and that shapes the work: purpose-built office floors, high-rise societies with shared maintenance staff, and a steady churn of tenants and fit-outs. We agree the scope with you first, then examine the space using radio-frequency analysis for devices that transmit, a non-linear junction detector for electronics that are switched off, optical and thermal checks, and a close physical inspection.",
    whyUs:
      "Local cases here point at ordinary fittings rather than exotic hardware. A camera found in a Noida play school washroom in December 2024 had been concealed inside a bulb holder, and an earlier hotel case in the city involved a device planted in a room and retrieved on a later visit. So light fittings, sockets, fixtures and anything recently replaced get close attention, and we document whatever is found in position before it is moved.",
    areas: [
      "Noida Sectors 15 to 63",
      "Sectors 75 to 78 & 93 to 110",
      "Noida Expressway (125 to 142)",
      "Greater Noida (Alpha to Delta)",
      "Knowledge Park & Tech Zone",
      "Noida Extension / Greater Noida West",
      "Yamuna Expressway & Jewar",
    ],
    metaDescription:
      "Bug sweeping services in Noida: TSCM sweeps for offices, flats and vehicles across Noida, Greater Noida and Noida Extension. Book a consultation.",
    areaGroups: [
      {
        zone: "Central Noida",
        areas: ["Sector 15", "Sector 16", "Sector 18", "Sector 27", "Sector 29", "Sector 37", "Sector 44", "Sector 50", "Sector 51", "Sector 62", "Sector 63"],
      },
      {
        zone: "Noida residential sectors",
        areas: ["Sector 70", "Sector 71", "Sector 75", "Sector 76", "Sector 77", "Sector 78", "Sector 93", "Sector 100", "Sector 104", "Sector 110", "Sector 121", "Sector 128"],
      },
      {
        zone: "Noida Expressway",
        areas: ["Sector 125", "Sector 126", "Sector 132", "Sector 135", "Sector 137", "Sector 142", "Sector 143", "Sector 168"],
      },
      {
        zone: "Greater Noida",
        areas: ["Alpha", "Beta", "Gamma", "Delta", "Pari Chowk", "Knowledge Park", "Tech Zone", "Surajpur", "Kasna"],
      },
      {
        zone: "Noida Extension and Greater Noida West",
        areas: ["Bisrakh", "Gaur City", "Ecotech zones", "Sector 1 Greater Noida West", "Sector 4", "Sector 16B", "Noida Extension"],
      },
      {
        zone: "Outer Gautam Buddh Nagar",
        areas: ["Dadri", "Dankaur", "Jarcha", "Rabupura", "Jewar", "Badalpur", "Yamuna Expressway sectors"],
      },
    ],
    jurisdiction: {
      heading: "Noida is Uttar Pradesh Police, and an online FIR is narrower than it sounds",
      body: [
        "Noida sits in Gautam Buddh Nagar district and is policed by the Police Commissionerate Gautam Buddh Nagar under Uttar Pradesh Police. Delhi Police has no role here, so Delhi helplines and Delhi reporting routes do not help. The district publishes its station list, which runs to 26 police stations and covers Greater Noida and Noida Extension as well, through stations such as Bisrakh, Surajpur, Kasna, Knowledge Park and the Ecotech areas.",
        "Uttar Pradesh does offer an e-FIR, and it is worth understanding its limits before relying on it. The portal states that the facility is available only for cases with an unknown accused. A hidden-camera case usually has a suspect in mind, a landlord, a hotel owner, an employer or an ex-partner, which puts it outside e-FIR and back at a police station.",
        "Gautam Buddh Nagar also has its own cyber police station rather than sharing a cell, and Uttar Pradesh Police publishes its contact details in the state's list of district cyber police stations. The national helpline 1930 and the cybercrime portal will route a complaint to it.",
      ],
    },
    settings: [
      {
        title: "Offices and meeting rooms",
        desc: "Sweeps before a negotiation or a board meeting, in sector office blocks where building staff, contractors and co-tenants all have reason to be on the floor.",
      },
      {
        title: "High-rise flats",
        desc: "Checks after a tenancy change, a fit-out or a dispute. Society cameras cover lobbies and lifts; anything inside your flat is a different matter entirely.",
      },
      {
        title: "Hotels and short stays",
        desc: "A 2022 Noida case involved a camera planted in a hotel room and collected on a later visit, with the footage used for extortion, so fittings facing the bed get close attention.",
      },
      {
        title: "Vehicles",
        desc: "Tracker checks covering the underbody, wheel arches, bumpers, boot and the diagnostic port, for cars parked daily in shared basements.",
      },
    ],
    guide: {
      href: "/blog/bug-sweeping-in-delhi",
      label: "Read our Delhi NCR guide: where devices turn up and where a complaint goes",
    },
    faqs: [
      {
        q: "Can I file an e-FIR in Noida for a hidden camera?",
        a: "Usually not. Uttar Pradesh's e-FIR facility is stated to be for cases with an unknown accused, and a hidden-camera complaint normally names or suspects someone with access, such as a landlord, employer or hotel operator. That means attending a police station. The separate online complaint service is a complaint, not an FIR.",
      },
      {
        q: "Is Noida covered by Delhi Police?",
        a: "No. Noida and Greater Noida are in Gautam Buddh Nagar district, policed by the Police Commissionerate Gautam Buddh Nagar under Uttar Pradesh Police. If a device is found in Noida, that is where the case sits, even if you live or work in Delhi.",
      },
      {
        q: "Which numbers should I use in Noida?",
        a: "112 for an emergency and 1930 for cyber crime, alongside the national cybercrime portal. Uttar Pradesh Police also runs 1090, its Women Power Line, for women reporting harassment. Some district helpline listings are out of date and still show older numbers, so prefer 112 and 1930.",
      },
      {
        q: "Do you cover Greater Noida and Noida Extension?",
        a: "Yes, along with the Expressway sectors and the Yamuna Expressway side. They fall within the same district and commissionerate as Noida, so the reporting route is the same even though the police station covering the address differs.",
      },
    ],
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://www.bugsweepingtscm.com/locations/noida#webpage",
          url: "https://www.bugsweepingtscm.com/locations/noida",
          name: "Bug Sweeping Services in Noida",
          inLanguage: "en-IN",
          isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" },
          breadcrumb: { "@id": "https://www.bugsweepingtscm.com/locations/noida#breadcrumb" },
          about: { "@id": "https://www.bugsweepingtscm.com/locations/noida#place" },
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
          "@id": "https://www.bugsweepingtscm.com/locations/noida#place",
          name: "Noida",
          address: { "@type": "PostalAddress", addressLocality: "Noida", addressRegion: "Uttar Pradesh", addressCountry: "IN" },
        },
        {
          "@type": "Service",
          "@id": "https://www.bugsweepingtscm.com/locations/noida#service",
          name: "Bug sweeping and TSCM services in Noida",
          serviceType: "Technical surveillance countermeasures",
          provider: { "@id": "https://www.bugsweepingtscm.com/#organization" },
          areaServed: { "@id": "https://www.bugsweepingtscm.com/locations/noida#place" },
          mainEntityOfPage: { "@id": "https://www.bugsweepingtscm.com/locations/noida#webpage" },
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
          "@id": "https://www.bugsweepingtscm.com/locations/noida#breadcrumb",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.bugsweepingtscm.com" },
            { "@type": "ListItem", position: 2, name: "Locations", item: "https://www.bugsweepingtscm.com/locations/noida" },
            { "@type": "ListItem", position: 3, name: "Noida" },
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
    areaGroups: [
      {
        zone: "Central business district",
        areas: ["MG Road", "Brigade Road", "Lavelle Road", "Richmond Town", "Shivajinagar", "Cunningham Road", "Vittal Mallya Road", "Residency Road"],
      },
      {
        zone: "East Bengaluru",
        areas: ["Indiranagar", "Whitefield", "Marathahalli", "Mahadevapura", "KR Puram", "Old Airport Road", "Domlur", "CV Raman Nagar", "Varthur"],
      },
      {
        zone: "South Bengaluru",
        areas: ["Koramangala", "HSR Layout", "BTM Layout", "JP Nagar", "Jayanagar", "Banashankari", "Electronic City", "Bommanahalli", "Sarjapur Road", "Bannerghatta Road", "Basavanagudi"],
      },
      {
        zone: "West Bengaluru",
        areas: ["Rajajinagar", "Malleshwaram", "Vijayanagar", "Basaveshwaranagar", "Yeshwanthpur", "Peenya", "Nagarbhavi", "Kengeri", "RR Nagar"],
      },
      {
        zone: "North Bengaluru",
        areas: ["Hebbal", "Yelahanka", "Jakkur", "Thanisandra", "Manyata Tech Park", "Hennur", "Devanahalli", "Sahakar Nagar", "RT Nagar"],
      },
    ],
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
    slug: "pune",
    city: "Pune",
    state: "Maharashtra",
    seoTitle: "Bug Sweeping Services in Pune | TSCM Sweeps",
    heroTitle: "Bug Sweeping Services in Pune",
    heroSubtitle:
      "TSCM bug sweeps for offices, flats and vehicles across Pune and Pimpri-Chinchwad, from the IT belt at Hinjewadi to Koregaon Park and the southern suburbs.",
    intro:
      "Pune runs on rented space: company floors in business parks, flats let to people working three-year postings, paying guest rooms around the colleges and IT parks. That is the backdrop to most sweeps here. We agree the scope with you first, then examine it using radio-frequency analysis for devices that transmit, a non-linear junction detector for electronics that are switched off, optical and thermal checks, and a close physical inspection.",
    whyUs:
      "The question we ask first in Pune is what changed. A landlord who suddenly needs access, a fit-out contractor who came back for one more visit, a device left behind by whoever had the flat before you. A reported case from Ambegaon in July 2025 involved cameras installed inside a home, including the bathroom, by someone who lived there, which is the uncomfortable pattern behind a lot of domestic sweeps. Whatever we find is photographed in position before it is moved.",
    areas: [
      "Central Pune & Deccan",
      "Koregaon Park & Kalyani Nagar",
      "Kharadi, Hadapsar & Magarpatta",
      "Baner, Aundh & Balewadi",
      "Hinjewadi & Wakad",
      "Pimpri-Chinchwad",
      "Kothrud, Warje & Sinhagad Road",
    ],
    metaDescription:
      "Bug sweeping services in Pune: TSCM sweeps for offices, flats and vehicles across Pune and Pimpri-Chinchwad. Book a private consultation.",
    areaGroups: [
      {
        zone: "Central Pune",
        areas: ["Shivajinagar", "Deccan Gymkhana", "Camp", "Swargate", "Sadashiv Peth", "Erandwane", "Model Colony", "Shaniwar Peth"],
      },
      {
        zone: "East Pune",
        areas: ["Koregaon Park", "Kalyani Nagar", "Viman Nagar", "Kharadi", "Hadapsar", "Magarpatta", "Mundhwa", "Wagholi", "Yerwada", "Lohegaon"],
      },
      {
        zone: "West Pune and the IT belt",
        areas: ["Baner", "Balewadi", "Aundh", "Pashan", "Bavdhan", "Sus", "Hinjewadi", "Wakad", "Kothrud"],
      },
      {
        zone: "South Pune",
        areas: ["Katraj", "Kondhwa", "NIBM Road", "Undri", "Bibwewadi", "Sinhagad Road", "Dhayari", "Warje", "Ambegaon"],
      },
      {
        zone: "Pimpri-Chinchwad",
        areas: ["Pimpri", "Chinchwad", "Nigdi", "Akurdi", "Pimple Saudagar", "Pimple Gurav", "Ravet", "Bhosari", "Moshi", "Chakan", "Talegaon"],
      },
      {
        zone: "Outer Pune",
        areas: ["Lonikand", "Alandi", "Dehu Road", "Talegaon Dabhade", "Maval", "Shirur Road", "Saswad Road"],
      },
    ],
    jurisdiction: {
      heading: "Pune, Pimpri-Chinchwad and Pune Rural are three different forces",
      body: [
        "This is the thing to get right before reporting anything. Pune City Police, the Pimpri-Chinchwad Police Commissionerate and Pune Rural Police are listed separately by Maharashtra Police, each with its own commissioner or superintendent and its own website. Pimpri-Chinchwad became a commissionerate in its own right in 2018.",
        "The line runs straight through the IT belt. An office in Wakad or Hinjewadi is Pimpri-Chinchwad Police; a flat in Koregaon Park is Pune City Police; the village areas beyond the tech parks can fall to Pune Rural. Since the force that investigates is the one covering the place the device was found, an address a few kilometres apart can mean a different control room and a different station.",
        "Maharashtra's citizen police portal currently does not offer its online services, and in any case a complaint form is not an FIR. For a cognizable offence such as voyeurism the report is made at a police station. Pune City Police runs a cyber police station at the city police headquarters in Shivajinagar, and the national helpline 1930 and the cybercrime portal will route a cyber complaint for you.",
      ],
    },
    settings: [
      {
        title: "Offices in the IT parks",
        desc: "Sweeps before a negotiation, an audit or a board meeting, in buildings where facilities teams, contractors and other tenants all have reason to be on the floor.",
      },
      {
        title: "Rented flats and societies",
        desc: "Checks at the start or end of a tenancy, or after a dispute, covering fittings, sockets, smoke detectors and anything a landlord installed himself.",
      },
      {
        title: "Paying guest rooms and hostels",
        desc: "Pune's student and young-professional population lives in shared accommodation. A camera covering a private room is an offence whatever the house rules say.",
      },
      {
        title: "Vehicles",
        desc: "Tracker checks covering the underbody, wheel arches, bumpers, boot and the diagnostic port, for cars parked daily in shared society basements.",
      },
    ],
    guide: {
      href: "/blog/bug-sweeping-in-mumbai",
      label: "Read our Maharashtra guide: jurisdiction, society cameras and where to complain",
    },
    faqs: [
      {
        q: "Is 103 the women's helpline in Pune?",
        a: "No, and this is a common mistake. Maharashtra Police scopes 103 to Mumbai, Thane and Navi Mumbai, and lists 1091 for the rest of the state, which includes Pune. Use 112 for an emergency, 1091 as the women's helpline here, and 1930 for cyber crime.",
      },
      {
        q: "My office is in Hinjewadi and my flat is in Pune city. Which police?",
        a: "Whichever covers the address where the device was found. Hinjewadi and Wakad fall under the Pimpri-Chinchwad Police Commissionerate, which is separate from Pune City Police, and areas further out can fall to Pune Rural. If devices turn up in both places, treat them as two matters.",
      },
      {
        q: "Can I report a hidden camera online in Pune?",
        a: "Not as an FIR. Maharashtra's citizen police portal is not currently offering its online services, and an online complaint form is not an FIR in any case. A cognizable offence such as voyeurism is reported at a police station, or at the cyber police station for cyber matters, with 1930 and the national portal as a parallel route.",
      },
      {
        q: "What affects the cost of a sweep in Pune?",
        a: "The number and size of the spaces, how cluttered they are, whether vehicles or phones are in scope, and the depth of the report. Travel between Pune and the Pimpri-Chinchwad side, and after-hours access in office buildings, also affect scheduling. Ask for a written quote listing what is included.",
      },
    ],
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://www.bugsweepingtscm.com/locations/pune#webpage",
          url: "https://www.bugsweepingtscm.com/locations/pune",
          name: "Bug Sweeping Services in Pune",
          inLanguage: "en-IN",
          isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" },
          breadcrumb: { "@id": "https://www.bugsweepingtscm.com/locations/pune#breadcrumb" },
          about: { "@id": "https://www.bugsweepingtscm.com/locations/pune#place" },
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
          "@id": "https://www.bugsweepingtscm.com/locations/pune#place",
          name: "Pune",
          address: { "@type": "PostalAddress", addressLocality: "Pune", addressRegion: "Maharashtra", addressCountry: "IN" },
        },
        {
          "@type": "Service",
          "@id": "https://www.bugsweepingtscm.com/locations/pune#service",
          name: "Bug sweeping and TSCM services in Pune",
          serviceType: "Technical surveillance countermeasures",
          provider: { "@id": "https://www.bugsweepingtscm.com/#organization" },
          areaServed: { "@id": "https://www.bugsweepingtscm.com/locations/pune#place" },
          mainEntityOfPage: { "@id": "https://www.bugsweepingtscm.com/locations/pune#webpage" },
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
          "@id": "https://www.bugsweepingtscm.com/locations/pune#breadcrumb",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.bugsweepingtscm.com" },
            { "@type": "ListItem", position: 2, name: "Locations", item: "https://www.bugsweepingtscm.com/locations/pune" },
            { "@type": "ListItem", position: 3, name: "Pune" },
          ],
        },
      ],
    },
  },
  {
    slug: "hyderabad",
    city: "Hyderabad",
    state: "Telangana",
    seoTitle: "Bug Sweeping Services in Hyderabad | TSCM Sweeps",
    heroTitle: "Bug Sweeping Services in Hyderabad",
    heroSubtitle:
      "TSCM bug sweeps for offices, flats and vehicles across Hyderabad, Secunderabad and the IT corridor at HITEC City, Madhapur and Gachibowli.",
    intro:
      "Hyderabad splits neatly into two working patterns: the corporate floors of the IT corridor, and dense residential neighbourhoods where hostels, paying guest accommodation and rented flats sit close together. We agree the scope with you first, then examine it using radio-frequency analysis for devices that transmit, a non-linear junction detector for electronics that are switched off, optical and thermal checks, and a close physical inspection.",
    whyUs:
      "Reported Telangana cases point at fittings rather than gadgets. In a 2024 case at a hotel near Shamshabad the owner was arrested after cameras were found built into switchboards and the ceiling, and in a January 2025 case at an engineering college hostel a phone had been concealed in a bathroom ventilator. So switchboards, ceiling fittings, ventilators and anything recently replaced get close attention, and whatever is found is photographed in position before it is moved.",
    areas: [
      "Banjara Hills & Jubilee Hills",
      "HITEC City & Madhapur",
      "Gachibowli & Financial District",
      "Secunderabad & Begumpet",
      "Kukatpally & Miyapur",
      "Uppal, LB Nagar & Malkajgiri",
      "Old City & Charminar",
    ],
    metaDescription:
      "Bug sweeping services in Hyderabad: TSCM sweeps for offices, flats and vehicles across the city, Secunderabad and the IT corridor. Book a consultation.",
    areaGroups: [
      {
        zone: "Central Hyderabad",
        areas: ["Banjara Hills", "Jubilee Hills", "Somajiguda", "Begumpet", "Ameerpet", "Punjagutta", "Himayatnagar", "Khairatabad", "Abids", "Nampally"],
      },
      {
        zone: "IT corridor",
        areas: ["HITEC City", "Madhapur", "Gachibowli", "Kondapur", "Raidurg", "Nanakramguda", "Financial District", "Manikonda", "Kukatpally", "Miyapur"],
      },
      {
        zone: "Secunderabad",
        areas: ["Secunderabad", "Marredpally", "Tarnaka", "Alwal", "Bowenpally", "Trimulgherry", "Sainikpuri", "Paradise"],
      },
      {
        zone: "East Hyderabad",
        areas: ["Uppal", "LB Nagar", "Nacharam", "Habsiguda", "Dilsukhnagar", "Malkajgiri", "Ghatkesar", "Medchal"],
      },
      {
        zone: "Old City",
        areas: ["Charminar", "Falaknuma", "Chandrayangutta", "Santoshnagar", "Bahadurpura", "Malakpet"],
      },
      {
        zone: "Outer Hyderabad",
        areas: ["Shamshabad", "Rajendranagar", "Kompally", "Bachupally", "Shamirpet", "Adibatla", "Patancheru"],
      },
    ],
    jurisdiction: {
      heading: "The IT corridor is Cyberabad, not Hyderabad City Police",
      body: [
        "Greater Hyderabad is covered by more than one police commissionerate, and the boundary matters most in exactly the places people work. HITEC City, Madhapur, Raidurg, Gachibowli, the Financial District and Nanakramguda fall under the Cyberabad Commissionerate, while Banjara Hills, Secunderabad, Khairatabad and the Old City are Hyderabad City Police. An office in Madhapur and a flat in Himayatnagar answer to two different commissioners.",
        "A reorganisation notified at the end of December 2025 added a further commissionerate and renamed another: the eastern side, covering areas such as Uppal, LB Nagar and Medchal, is now Malkajgiri rather than Rachakonda. Older guidance still telling residents there to contact Rachakonda Police is out of date, and boundaries have moved more than once, so confirm the current position for your address before filing.",
        "Hyderabad City Police runs a cyber crime police station at Basheerbagh, and publishes a threshold for cyber fraud: larger losses go to the cyber crime police station directly, smaller ones to the local police station. Telangana's police portal lets you lodge a petition and look up an FIR, but a petition is not an FIR, and a cognizable offence such as voyeurism is registered at a police station.",
      ],
    },
    settings: [
      {
        title: "Offices in the IT corridor",
        desc: "Sweeps before a negotiation, a funding round or a board meeting, planned around the fact that the corridor is a different police commissionerate from the city centre.",
      },
      {
        title: "Hostels and paying guest accommodation",
        desc: "Hyderabad Police has reported requiring women's hostels and PGs in the city commissionerate to register locally and keep common-area cameras working; a camera inside a room is a different matter, and an offence.",
      },
      {
        title: "Hotels and short stays",
        desc: "In a reported 2024 case near Shamshabad, cameras were found built into switchboards and the ceiling of hotel rooms, so fittings facing the bed get close attention.",
      },
      {
        title: "Vehicles",
        desc: "Tracker checks covering the underbody, wheel arches, bumpers, boot and the diagnostic port, for cars used on a predictable daily commute.",
      },
    ],
    faqs: [
      {
        q: "Which police cover HITEC City and Gachibowli?",
        a: "Cyberabad, not Hyderabad City Police. HITEC City, Madhapur, Raidurg, Gachibowli, the Financial District and Nanakramguda sit in the Cyberabad Commissionerate, which has its own commissioner and its own cyber police station. If a device is found in your Madhapur office, that is where the case sits, even if you live in the city.",
      },
      {
        q: "Is Rachakonda still the right name for the eastern suburbs?",
        a: "No. Following a reorganisation notified in December 2025, the eastern commissionerate covering areas such as Uppal, LB Nagar and Medchal is now Malkajgiri. Its old website no longer resolves, so guidance still pointing you to Rachakonda Police needs updating.",
      },
      {
        q: "Can I report a hidden camera online in Hyderabad?",
        a: "Not as an FIR. Telangana's police portal lets you lodge a petition, check its status and view an FIR that already exists, but a petition is not an FIR. A cognizable offence such as voyeurism is reported at a police station. For cyber matters use 1930 and the national portal, and Hyderabad's cyber crime police station at Basheerbagh handles larger cyber fraud directly.",
      },
      {
        q: "What affects the cost of a sweep in Hyderabad?",
        a: "The number and size of the spaces, how cluttered they are, whether vehicles or phones are in scope, and the depth of the report. In corporate buildings, access approvals and after-hours scheduling often matter as much as floor area. Ask for a written quote listing what is included.",
      },
    ],
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://www.bugsweepingtscm.com/locations/hyderabad#webpage",
          url: "https://www.bugsweepingtscm.com/locations/hyderabad",
          name: "Bug Sweeping Services in Hyderabad",
          inLanguage: "en-IN",
          isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" },
          breadcrumb: { "@id": "https://www.bugsweepingtscm.com/locations/hyderabad#breadcrumb" },
          about: { "@id": "https://www.bugsweepingtscm.com/locations/hyderabad#place" },
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
          "@id": "https://www.bugsweepingtscm.com/locations/hyderabad#place",
          name: "Hyderabad",
          address: { "@type": "PostalAddress", addressLocality: "Hyderabad", addressRegion: "Telangana", addressCountry: "IN" },
        },
        {
          "@type": "Service",
          "@id": "https://www.bugsweepingtscm.com/locations/hyderabad#service",
          name: "Bug sweeping and TSCM services in Hyderabad",
          serviceType: "Technical surveillance countermeasures",
          provider: { "@id": "https://www.bugsweepingtscm.com/#organization" },
          areaServed: { "@id": "https://www.bugsweepingtscm.com/locations/hyderabad#place" },
          mainEntityOfPage: { "@id": "https://www.bugsweepingtscm.com/locations/hyderabad#webpage" },
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
          "@id": "https://www.bugsweepingtscm.com/locations/hyderabad#breadcrumb",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.bugsweepingtscm.com" },
            { "@type": "ListItem", position: 2, name: "Locations", item: "https://www.bugsweepingtscm.com/locations/hyderabad" },
            { "@type": "ListItem", position: 3, name: "Hyderabad" },
          ],
        },
      ],
    },
  },
  {
    slug: "jaipur",
    city: "Jaipur",
    state: "Rajasthan",
    seoTitle: "Bug Sweeping Services in Jaipur | TSCM Sweeps",
    heroTitle: "Bug Sweeping Services in Jaipur",
    heroSubtitle:
      "TSCM bug sweeps for homes, offices, hotels and vehicles across Jaipur, from the walled city to Mansarovar, Vaishali Nagar and the Sitapura belt.",
    intro:
      "Most sweeps in Jaipur start with a change rather than a crisis: a new tenant, a staff change in a family business, a dispute, or a rented flat taken by students or young professionals. We agree the scope with you first, then examine it using radio-frequency analysis for devices that transmit, a non-linear junction detector for electronics that are switched off, optical and thermal checks, and a close physical inspection of the places devices are usually concealed.",
    whyUs:
      "Jaipur's housing stock ranges from havelis and old walled-city property to new apartment blocks, and that changes the physical search more than the instruments. In older buildings, wiring and cavities rarely match any drawing, so the hands-on inspection carries the weight. We tell you what was examined, what was not reachable, and what the findings do and do not prove.",
    areas: [
      "Walled City & MI Road",
      "Malviya Nagar & Jagatpura",
      "Mansarovar & Sanganer",
      "Vaishali Nagar & Ajmer Road",
      "Vidhyadhar Nagar & Jhotwara",
      "Raja Park & Adarsh Nagar",
      "Sitapura & Tonk Road",
    ],
    metaDescription:
      "Bug sweeping services in Jaipur: TSCM sweeps for homes, offices, hotels and vehicles across the city and outskirts. Book a private consultation.",
    areaGroups: [
      {
        zone: "Walled City and central Jaipur",
        areas: ["Johari Bazaar", "Chandpole", "Tripolia Bazaar", "MI Road", "Bani Park", "Civil Lines", "Ajmeri Gate", "Ghat Gate"],
      },
      {
        zone: "South Jaipur",
        areas: ["Malviya Nagar", "Jagatpura", "Pratap Nagar", "Sanganer", "Mansarovar", "Durgapura", "Tonk Road", "Sitapura"],
      },
      {
        zone: "West Jaipur",
        areas: ["Vaishali Nagar", "Nirman Nagar", "Ajmer Road", "Mahesh Nagar", "Shyam Nagar", "Sodala", "Bhankrota"],
      },
      {
        zone: "North Jaipur",
        areas: ["Vidhyadhar Nagar", "Jhotwara", "Murlipura", "Amer Road", "Kalwar Road", "Sikar Road"],
      },
      {
        zone: "East Jaipur",
        areas: ["Raja Park", "Adarsh Nagar", "Jawahar Nagar", "Transport Nagar", "Khonagorian", "Jagatpura Road"],
      },
      {
        zone: "Outer Jaipur",
        areas: ["Kukas", "Chomu", "Bagru", "Achrol", "Ring Road corridor", "Delhi Road", "Agra Road"],
      },
    ],
    jurisdiction: {
      heading: "City or rural, and why the online route will not help here",
      body: [
        "Jaipur city is a police commissionerate under Rajasthan Police, organised into east, north, south and west zones alongside a metro and crime wing, and covering 75 police stations across 21 circles. Addresses beyond the city limits are served by Jaipur Rural, which Rajasthan Police still lists as a separate police district under Jaipur Range. That distinction survives even though the revenue district of the same name was dissolved at the end of 2024, so a reader outside the commissionerate boundary is dealing with a different force.",
        "Rajasthan's online route is narrower than people assume. The state police list an e-FIR facility, and it is for vehicle theft. The lost article service states on its own page that a report lodged through it is not a subject matter for enquiry or investigation, which makes it useless for a surveillance device. An offence such as voyeurism therefore has to be reported at a police station.",
        "For cyber matters, note that Jaipur is not listed with a neighbourhood cyber thana in the way districts such as Ajmer and Alwar are. The commissionerate's cyber capability sits in a single special offences and cyber crime police station under the crime wing, so the practical route is the national helpline 1930 and the cybercrime portal, or your local station.",
      ],
    },
    settings: [
      {
        title: "Family businesses and offices",
        desc: "Sweeps before a negotiation, a partition or a succession discussion, where the people with access are often known to everyone in the room.",
      },
      {
        title: "Homes, havelis and rented flats",
        desc: "Checks at the start or end of a tenancy, or after a dispute, covering fittings, sockets, smoke detectors and anything a landlord installed himself.",
      },
      {
        title: "Hotels and guest houses",
        desc: "Jaipur's visitor traffic means high room turnover. Checks focus on fittings and objects facing the bed or bathroom, which is where devices are placed when they are placed at all.",
      },
      {
        title: "Vehicles",
        desc: "Tracker checks covering the underbody, wheel arches, bumpers, boot and the diagnostic port, for cars left with drivers or at service centres.",
      },
    ],
    faqs: [
      {
        q: "Is 181 the women's helpline in Rajasthan?",
        a: "No, and this catches people out. In Rajasthan 181 is the Rajasthan Sampark grievance helpline, not a women's line. The state Home Department lists 1090 for women and senior citizens, 1930 for cyber crime, and 112 for emergencies. Advice copied from other states will send you to the wrong queue.",
      },
      {
        q: "Can I file an FIR online in Jaipur for a hidden camera?",
        a: "No. Rajasthan's e-FIR facility is for vehicle theft, and the lost article report states that it is not a subject matter for enquiry or investigation. For an offence such as voyeurism you need to attend a police station. The online complaint service is a complaint rather than an FIR.",
      },
      {
        q: "Does Jaipur have its own cyber police station?",
        a: "Not in the district cyber thana form that some Rajasthan districts have. Jaipur's cyber capability sits in a single special offences and cyber crime police station under the commissionerate's crime wing, so for a cyber matter use 1930 or the national portal, or report at your local station, and let them route it.",
      },
      {
        q: "Do you cover areas outside the city limits?",
        a: "Yes, including Kukas, Chomu, Bagru and the Ring Road corridor. Those addresses fall under Jaipur Rural police rather than the city commissionerate, which matters if a device is found, because the complaint follows the address.",
      },
    ],
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://www.bugsweepingtscm.com/locations/jaipur#webpage",
          url: "https://www.bugsweepingtscm.com/locations/jaipur",
          name: "Bug Sweeping Services in Jaipur",
          inLanguage: "en-IN",
          isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" },
          breadcrumb: { "@id": "https://www.bugsweepingtscm.com/locations/jaipur#breadcrumb" },
          about: { "@id": "https://www.bugsweepingtscm.com/locations/jaipur#place" },
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
          "@id": "https://www.bugsweepingtscm.com/locations/jaipur#place",
          name: "Jaipur",
          address: { "@type": "PostalAddress", addressLocality: "Jaipur", addressRegion: "Rajasthan", addressCountry: "IN" },
        },
        {
          "@type": "Service",
          "@id": "https://www.bugsweepingtscm.com/locations/jaipur#service",
          name: "Bug sweeping and TSCM services in Jaipur",
          serviceType: "Technical surveillance countermeasures",
          provider: { "@id": "https://www.bugsweepingtscm.com/#organization" },
          areaServed: { "@id": "https://www.bugsweepingtscm.com/locations/jaipur#place" },
          mainEntityOfPage: { "@id": "https://www.bugsweepingtscm.com/locations/jaipur#webpage" },
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
          "@id": "https://www.bugsweepingtscm.com/locations/jaipur#breadcrumb",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.bugsweepingtscm.com" },
            { "@type": "ListItem", position: 2, name: "Locations", item: "https://www.bugsweepingtscm.com/locations/jaipur" },
            { "@type": "ListItem", position: 3, name: "Jaipur" },
          ],
        },
      ],
    },
  },
  {
    slug: "goa",
    city: "Goa",
    state: "North & South Goa",
    seoTitle: "Bug Sweeping Services in Goa | TSCM Sweeps",
    heroTitle: "Bug Sweeping Services in Goa",
    heroSubtitle:
      "TSCM bug sweeps for villas, rented homes, hotels and offices across North and South Goa, from the Bardez coast to Margao and Vasco.",
    intro:
      "Goa is a short-let economy, and that shapes the work. A villa may host a different party every week, a homestay changes guests constantly, and long-stay renters take houses furnished by someone else. We agree the scope with you first, then examine it using radio-frequency analysis for devices that transmit, a non-linear junction detector for electronics that are switched off, optical and thermal checks, and a close physical inspection.",
    whyUs:
      "In a property you did not furnish, the useful question is what was already here and who still has a key. Caretakers, cleaning staff, previous guests and owners all pass through, and turnover means anything placed once can record many different occupants before it is noticed. We check the fittings that face beds and bathrooms first, and document anything found in position before it is moved.",
    areas: [
      "Panaji & Porvorim",
      "Calangute, Candolim & Baga",
      "Anjuna, Vagator & Assagao",
      "Mapusa & Bardez",
      "Margao & Colva",
      "Vasco, Dabolim & Mormugao",
      "Palolem & Canacona",
    ],
    metaDescription:
      "Bug sweeping services in Goa: TSCM sweeps for villas, rented homes, hotels and offices across North and South Goa. Book a private consultation.",
    areaGroups: [
      {
        zone: "North Goa coast",
        areas: ["Calangute", "Candolim", "Baga", "Anjuna", "Vagator", "Arpora", "Assagao", "Siolim", "Morjim", "Ashwem", "Mandrem", "Sinquerim"],
      },
      {
        zone: "North Goa towns",
        areas: ["Panaji", "Porvorim", "Mapusa", "Saligao", "Parra", "Aldona", "Bicholim", "Old Goa", "Dona Paula"],
      },
      {
        zone: "South Goa coast",
        areas: ["Colva", "Benaulim", "Varca", "Cavelossim", "Majorda", "Betalbatim", "Palolem", "Agonda", "Patnem"],
      },
      {
        zone: "South Goa towns",
        areas: ["Margao", "Vasco da Gama", "Dabolim", "Ponda", "Curchorem", "Quepem", "Canacona", "Sanguem"],
      },
      {
        zone: "Business and industrial areas",
        areas: ["Verna", "Sancoale", "Kundaim", "Corlim", "Pilerne", "Tuem", "Mormugao Port", "Patto Panaji"],
      },
    ],
    jurisdiction: {
      heading: "One state force, and a paper trail most states do not have",
      body: [
        "Goa Police is a single state force covering the North and South districts, with 31 police stations between them, along with specialist units including a cyber crime police station whose contact details the force publishes. There is no separate city commissionerate to work out, so the practical question is simply which station covers the property.",
        "What makes Goa unusual is the registration regime behind accommodation. Under the state's tourist trade rules, every hotel-keeper has to submit guest data electronically each month, and the identity document is mandatory for the primary Indian guest as well as for foreign tourists. Failure carries fines and blocks renewal of registration. The statutory definition of a hotel is wide enough to cover premises let for money generally, which brings homestays, villas and serviced apartments into the same regime, and the homestay policy separately requires registration with the tourism department before operating and a guest register with photo identity.",
        "Two practical consequences follow. A legitimate property is registered, keeps identified guest records and can be inspected; an operator who cannot show registration is telling you something. And district magistrates in Goa have periodically ordered hotels, guest houses, shacks and private landlords to verify guest identity and file the verification with the local police station, so the paperwork you are asked for is usually a real requirement rather than an imposition.",
      ],
    },
    settings: [
      {
        title: "Villas and short lets",
        desc: "High turnover means a device placed once can record many different guests. Checks focus on fittings facing beds and bathrooms, and on anything recently added by a caretaker.",
      },
      {
        title: "Hotels and homestays",
        desc: "Cameras in public areas are ordinary security; a camera in a room or bathroom is an offence. We examine the room as a guest experiences it.",
      },
      {
        title: "Rented homes",
        desc: "Long-stay renters take houses furnished by somebody else, so the sweep covers what was already installed as much as anything new.",
      },
      {
        title: "Offices and vehicles",
        desc: "Sweeps for business premises around Panaji, Verna and Margao, and tracker checks covering the underbody, wheel arches, bumpers, boot and diagnostic port.",
      },
    ],
    faqs: [
      {
        q: "Which helpline numbers apply in Goa?",
        a: "Goa's numbering differs from much of India, so check before you dial. Goa Police lists 1091 as the women's helpline and 1090 as the senior citizens' helpline, which is the reverse of some states. Use 112 for emergencies and 1930 for cyber crime. Goa also runs 181 as a women's helpline through its health and women and child services, separate from the police line.",
      },
      {
        q: "What should a legitimate Goa property be able to show me?",
        a: "Registration under the state's tourist trade rules, which is compulsory before operating and carries a substantial penalty if skipped, and a guest register with photo identity. Hotel-keepers must also submit guest data to the tourism department electronically each month, with an identity document required for the primary Indian guest as well as foreign tourists. An operator who cannot show registration is worth a second thought.",
      },
      {
        q: "Do you cover both North and South Goa?",
        a: "Yes, from the Bardez coastal belt and Panaji through to Margao, Vasco and the Canacona end. Goa Police is a single state force across both districts, so the reporting route is the same wherever the property sits, though the station covering the address differs.",
      },
      {
        q: "What affects the cost of a sweep in Goa?",
        a: "The size and number of the spaces, how cluttered they are, whether vehicles are in scope, and the depth of the report. Villas take longer than hotel rooms, and travel between the North and South districts affects scheduling. Ask for a written quote listing what is included.",
      },
    ],
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://www.bugsweepingtscm.com/locations/goa#webpage",
          url: "https://www.bugsweepingtscm.com/locations/goa",
          name: "Bug Sweeping Services in Goa",
          inLanguage: "en-IN",
          isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" },
          breadcrumb: { "@id": "https://www.bugsweepingtscm.com/locations/goa#breadcrumb" },
          about: { "@id": "https://www.bugsweepingtscm.com/locations/goa#place" },
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
          "@id": "https://www.bugsweepingtscm.com/locations/goa#place",
          name: "Goa",
          address: { "@type": "PostalAddress", addressRegion: "Goa", addressCountry: "IN" },
        },
        {
          "@type": "Service",
          "@id": "https://www.bugsweepingtscm.com/locations/goa#service",
          name: "Bug sweeping and TSCM services in Goa",
          serviceType: "Technical surveillance countermeasures",
          provider: { "@id": "https://www.bugsweepingtscm.com/#organization" },
          areaServed: { "@id": "https://www.bugsweepingtscm.com/locations/goa#place" },
          mainEntityOfPage: { "@id": "https://www.bugsweepingtscm.com/locations/goa#webpage" },
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
          "@id": "https://www.bugsweepingtscm.com/locations/goa#breadcrumb",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.bugsweepingtscm.com" },
            { "@type": "ListItem", position: 2, name: "Locations", item: "https://www.bugsweepingtscm.com/locations/goa" },
            { "@type": "ListItem", position: 3, name: "Goa" },
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
    areaGroups: [
      {
        zone: "Chandigarh, northern sectors",
        areas: ["Sector 1 to 12", "Civil Lines", "Sector 9", "Sector 10", "Sector 11", "Manimajra", "Mani Majra Modern Housing Complex"],
      },
      {
        zone: "Chandigarh, central sectors",
        areas: ["Sector 17", "Sector 22", "Sector 26", "Sector 27", "Sector 28", "Sector 33", "Sector 34", "Sector 35", "Industrial Area Phase 1 and 2"],
      },
      {
        zone: "Chandigarh, southern sectors",
        areas: ["Sector 38", "Sector 40", "Sector 43", "Sector 44", "Sector 45", "Sector 47", "Sector 48", "Sector 49", "Maloya", "Dhanas"],
      },
      {
        zone: "Mohali and SAS Nagar",
        areas: ["Phase 1 to 11", "Sector 70", "Sector 79 to 82", "IT City", "Aerocity", "Kharar", "Zirakpur", "Derabassi", "Banur"],
      },
      {
        zone: "Panchkula",
        areas: ["Sector 1 to 12", "Sector 14 to 21", "MDC", "Industrial Area Phase 1 and 2", "Pinjore", "Kalka", "Barwala", "Raipur Rani"],
      },
    ],
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
