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
