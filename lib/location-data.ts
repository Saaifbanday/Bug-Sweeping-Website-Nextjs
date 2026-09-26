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
    slug: "ahmedabad",
    city: "Ahmedabad",
    state: "Gujarat",
    seoTitle: "Bug Sweeping Services in Ahmedabad | TSCM Sweeps",
    heroTitle: "Bug Sweeping Services in Ahmedabad",
    heroSubtitle:
      "TSCM bug sweeps for offices, homes and vehicles across Ahmedabad, from the walled city and Maninagar out to the SG Highway belt, Bopal and Sanand.",
    intro:
      "Ahmedabad work splits between family businesses where the people with access are known to everyone, and corporate floors along the western corridor where they are not. We agree the scope with you first, then examine it using radio-frequency analysis for devices that transmit, a non-linear junction detector for electronics that are switched off, optical and thermal checks, and a close physical inspection of the places devices are usually concealed.",
    whyUs:
      "Two reported Gujarat cases show how these devices actually surface here. In September 2026 a woman in Ahmedabad found a tracking device on her scooter while it was being serviced, and filed a complaint at Sarkhej police station. In 2023 a tracker tag was found glued under a car seat cover, again at a service visit. Routine servicing is where vehicle devices tend to turn up, which is why our vehicle checks cover the places a quick look never reaches.",
    areas: [
      "Navrangpura & Vastrapur",
      "SG Highway & Bodakdev",
      "Prahlad Nagar & Satellite",
      "Bopal, Shela & Gota",
      "Maninagar & east Ahmedabad",
      "Walled city & Shahibaug",
      "Sanand, Changodar & Bavla",
    ],
    metaDescription:
      "Bug sweeping services in Ahmedabad: TSCM sweeps for offices, homes and vehicles across the city and the SG Highway belt. Book a consultation.",
    areaGroups: [
      {
        zone: "West Ahmedabad",
        areas: ["Navrangpura", "Vastrapur", "Bodakdev", "Thaltej", "Satellite", "Prahlad Nagar", "Ambawadi", "Paldi", "Ellisbridge"],
      },
      {
        zone: "SG Highway and the western fringe",
        areas: ["SG Highway", "Bopal", "Shela", "Ghuma", "Gota", "Hebatpur", "Khodiyar", "Science City", "Shilaj"],
      },
      {
        zone: "North Ahmedabad",
        areas: ["Sabarmati", "Chandkheda", "Motera", "Ranip", "New Ranip", "Nava Vadaj", "Chandlodia", "Tragad"],
      },
      {
        zone: "East Ahmedabad",
        areas: ["Maninagar", "Vastral", "Naroda", "Bapunagar", "Nikol", "Odhav", "CTM", "Vatva", "Isanpur", "Ghodasar"],
      },
      {
        zone: "Walled city and central",
        areas: ["Lal Darwaja", "Kalupur", "Relief Road", "Astodia", "Dariapur", "Shahibaug", "Khadia", "Raipur"],
      },
      {
        zone: "South and industrial belt",
        areas: ["Narol", "Sarkhej", "Juhapura", "Changodar", "Aslali", "Vatva GIDC", "Sanand", "Bavla"],
      },
      {
        zone: "Gandhinagar side",
        areas: ["Gandhinagar", "Infocity", "Adalaj", "Kudasan", "Randesan", "Kalol", "Zundal"],
      },
    ],
    jurisdiction: {
      heading: "Check which force covers your address, because it changed recently",
      body: [
        "Ahmedabad City Police is a commissionerate under Gujarat Police, organised into seven zones and fourteen divisions covering thirty-nine police stations, alongside a women's police station and the traffic stations. Gandhinagar is separate, policed as its own district rather than by Ahmedabad City, and the GIFT City area sits on that side of the line rather than inside the city commissionerate.",
        "The boundary moved in 2025. Reported changes notified in May that year brought a series of fringe stretches into Ahmedabad City Police from the rural and Gandhinagar sides, including the ring road around Bopal, the Gota, Hebatpur and Khodiyar belt, the Adalaj side around Tragad and Zundal, and the Changodar and Aslali stretch, each attached to a named city station. Anyone out on that fringe who assumes the rural police still cover them may start at the wrong station.",
        "Gujarat does offer an e-FIR, and it is narrower than the name suggests. It covers vehicle and mobile phone theft, only where the accused is unidentified and no force was used, and the submission is not itself an FIR: an investigating officer verifies the complainant, reported as within forty-eight hours, before the station in charge registers a case. A hidden camera or tracker complaint, which usually has a suspect in mind, falls outside that route entirely and means attending the police station.",
      ],
    },
    settings: [
      {
        title: "Family businesses and offices",
        desc: "Sweeps before a negotiation, a partition or a succession discussion, and for corporate floors along the western corridor.",
      },
      {
        title: "Homes and rented flats",
        desc: "Checks after a tenancy change, renovation or dispute, covering fittings, sockets, smoke detectors and anything installed by someone else.",
      },
      {
        title: "Vehicles",
        desc: "Tracker checks covering the underbody, wheel arches, bumpers, boot, seat cavities and the diagnostic port. Reported Gujarat cases have surfaced devices during routine servicing.",
      },
      {
        title: "Hotels and short stays",
        desc: "Checks focused on fittings, sockets and objects facing the bed or bathroom, which is where devices are placed when they are placed at all.",
      },
    ],
    faqs: [
      {
        q: "Can I file an e-FIR in Ahmedabad for a hidden camera or tracker?",
        a: "No. Gujarat's e-FIR covers vehicle and mobile phone theft, and only where the accused is unidentified and no force was used. It is also not an FIR on submission: an officer verifies the complainant first, reported as within forty-eight hours, before a case is registered. A surveillance device complaint means attending the police station.",
      },
      {
        q: "Which police cover Bopal, Gota and the SG Highway fringe?",
        a: "Ahmedabad City Police, following jurisdiction changes reported in May 2025 that moved several fringe stretches in from the rural and Gandhinagar sides and attached them to named city stations. If your address is out on that fringe, confirm the current station rather than assuming the rural police still cover it.",
      },
      {
        q: "Do you cover Gandhinagar and GIFT City?",
        a: "Yes, we work across both. Worth knowing for reporting: Gandhinagar is policed separately from Ahmedabad City, and the GIFT City area sits on that side, so a device found there is a matter for the Gandhinagar side rather than the city commissionerate.",
      },
      {
        q: "Which numbers should I use in Ahmedabad?",
        a: "112 for an emergency and 1930 for cyber crime. Gujarat Police lists 181 as the Abhayam women's helpline, which is the state's own line rather than the number used in several other states, so advice copied from elsewhere may send you to the wrong place.",
      },
    ],
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://www.bugsweepingtscm.com/locations/ahmedabad#webpage",
          url: "https://www.bugsweepingtscm.com/locations/ahmedabad",
          name: "Bug Sweeping Services in Ahmedabad",
          inLanguage: "en-IN",
          isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" },
          breadcrumb: { "@id": "https://www.bugsweepingtscm.com/locations/ahmedabad#breadcrumb" },
          about: { "@id": "https://www.bugsweepingtscm.com/locations/ahmedabad#place" },
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
          "@id": "https://www.bugsweepingtscm.com/locations/ahmedabad#place",
          name: "Ahmedabad",
          address: { "@type": "PostalAddress", addressLocality: "Ahmedabad", addressRegion: "Gujarat", addressCountry: "IN" },
        },
        {
          "@type": "Service",
          "@id": "https://www.bugsweepingtscm.com/locations/ahmedabad#service",
          name: "Bug sweeping and TSCM services in Ahmedabad",
          serviceType: "Technical surveillance countermeasures",
          provider: { "@id": "https://www.bugsweepingtscm.com/#organization" },
          areaServed: { "@id": "https://www.bugsweepingtscm.com/locations/ahmedabad#place" },
          mainEntityOfPage: { "@id": "https://www.bugsweepingtscm.com/locations/ahmedabad#webpage" },
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
          "@id": "https://www.bugsweepingtscm.com/locations/ahmedabad#breadcrumb",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.bugsweepingtscm.com" },
            { "@type": "ListItem", position: 2, name: "Locations", item: "https://www.bugsweepingtscm.com/locations/ahmedabad" },
            { "@type": "ListItem", position: 3, name: "Ahmedabad" },
          ],
        },
      ],
    },
  },
  {
    slug: "lucknow",
    city: "Lucknow",
    state: "Uttar Pradesh",
    seoTitle: "Bug Sweeping Services in Lucknow | TSCM Sweeps",
    heroTitle: "Bug Sweeping Services in Lucknow",
    heroSubtitle:
      "TSCM bug sweeps for homes, offices and vehicles across Lucknow, from Hazratganj and Gomti Nagar to Alambagh, Sushant Golf City and the outer roads.",
    intro:
      "Lucknow brings a particular mix: government and institutional offices, family businesses, and a large rented market serving students and young professionals. We agree the scope with you first, then examine it using radio-frequency analysis for devices that transmit, a non-linear junction detector for electronics that are switched off, optical and thermal checks, and a close physical inspection of the places devices are usually concealed.",
    whyUs:
      "The question we start with is who has had lawful access and what changed. A landlord who suddenly needs entry, a contractor who came back, a device left behind by a previous tenant. Elsewhere in Uttar Pradesh, a case reported from Kanpur in May 2026 involved cameras found across hotel rooms with footage being sold on, which is a reminder that in short stays the fittings facing the bed deserve attention rather than a glance.",
    areas: [
      "Hazratganj & Qaiserbagh",
      "Gomti Nagar & Vibhuti Khand",
      "Indira Nagar & Mahanagar",
      "Aliganj & Jankipuram",
      "Alambagh & Krishna Nagar",
      "Sushant Golf City & Amar Shaheed Path",
      "Chinhat & Faizabad Road",
    ],
    metaDescription:
      "Bug sweeping services in Lucknow: TSCM sweeps for homes, offices and vehicles across the city and outer roads. Book a private consultation.",
    areaGroups: [
      {
        zone: "Central Lucknow",
        areas: ["Hazratganj", "Qaiserbagh", "Aminabad", "Charbagh", "Husainganj", "Lalbagh", "Chowk", "Aishbagh"],
      },
      {
        zone: "Gomti Nagar side",
        areas: ["Gomti Nagar", "Gomti Nagar Extension", "Vibhuti Khand", "Vipul Khand", "Vinay Khand", "Patrakarpuram", "Indira Nagar", "Mahanagar"],
      },
      {
        zone: "North and trans-Gomti",
        areas: ["Aliganj", "Jankipuram", "Vikas Nagar", "Sitapur Road", "IIM Road", "Madiyaon", "Kursi Road"],
      },
      {
        zone: "West and south Lucknow",
        areas: ["Alambagh", "Rajajipuram", "Krishna Nagar", "Aashiana", "Talkatora", "Sarojini Nagar", "Kanpur Road", "LDA Colony"],
      },
      {
        zone: "Outer Lucknow",
        areas: ["Sushant Golf City", "Amar Shaheed Path", "Chinhat", "Faizabad Road", "Bakshi Ka Talab", "Kakori", "Mohanlalganj", "Banthra"],
      },
    ],
    jurisdiction: {
      heading: "A commissionerate since 2020, and an online FIR that will not take your case",
      body: [
        "Lucknow has been policed as a commissionerate under Uttar Pradesh Police since January 2020, organised into five zones and thirteen divisions covering around fifty police stations. That matters for practical reasons as much as structural ones: guidance still addressed to a senior superintendent of police is describing an office that no longer runs the city.",
        "Uttar Pradesh's e-FIR portal states in its own words that the facility is available only for cases with an unknown accused and for non-special-report matters. A hidden camera or tracker complaint usually points at someone with access, a landlord, an employer, a hotel operator or a former partner, which puts it outside e-FIR. The separate citizen portal takes complaints, tenant and paying guest verification and similar services, but a complaint form is not an FIR either, so the report is made at the police station.",
        "Two Lucknow-specific routes are worth knowing. The city has its own cyber police station, listed with its contact address in the state police's published list of district cyber police stations, and 1090, the Women Power Line, is not merely a number that works here: it is run from Lucknow by the Uttar Pradesh Police Women and Child Security Organization, operating around the clock and linked to police stations across the state.",
      ],
    },
    settings: [
      {
        title: "Offices and institutional premises",
        desc: "Sweeps before a negotiation, a tender discussion or a sensitive meeting, in buildings where support staff and contractors hold routine access.",
      },
      {
        title: "Homes and rented flats",
        desc: "Checks at the start or end of a tenancy, or after a dispute, covering fittings, sockets, smoke detectors and anything a landlord installed himself.",
      },
      {
        title: "Paying guest rooms and hostels",
        desc: "Shared accommodation around the colleges and coaching centres. A camera covering a private room is an offence whatever the house rules say.",
      },
      {
        title: "Vehicles",
        desc: "Tracker checks covering the underbody, wheel arches, bumpers, boot and the diagnostic port, for cars left with drivers or at service centres.",
      },
    ],
    faqs: [
      {
        q: "Can I file an e-FIR in Lucknow for a hidden camera?",
        a: "Usually not. The Uttar Pradesh e-FIR portal states that the facility is only for cases with an unknown accused and non-special-report matters. A hidden camera complaint normally names or suspects someone with access, which puts it outside that route, so the report is made at the police station. The citizen portal's complaint service is a complaint, not an FIR.",
      },
      {
        q: "Is 1090 useful in Lucknow, or should I call 181?",
        a: "1090, the Women Power Line, is run from Lucknow itself by the Uttar Pradesh Police Women and Child Security Organization, operates around the clock and is linked to police stations across the state. For a woman reporting stalking or covert recording it is the more specialised route. Use 112 for an emergency and 1930 for cyber crime.",
      },
      {
        q: "Does Lucknow have its own cyber police station?",
        a: "Yes. Lucknow appears with its own entry, including a contact address, in the state police's published list of district cyber police stations. For cyber matters you can also use 1930 or the national cybercrime portal, which route the complaint to the right station.",
      },
      {
        q: "What affects the cost of a sweep in Lucknow?",
        a: "The number and size of the spaces, how cluttered they are, whether vehicles or phones are in scope, and the depth of the report. Access arrangements and after-hours scheduling for occupied offices also affect it. Ask for a written quote listing what is included.",
      },
    ],
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://www.bugsweepingtscm.com/locations/lucknow#webpage",
          url: "https://www.bugsweepingtscm.com/locations/lucknow",
          name: "Bug Sweeping Services in Lucknow",
          inLanguage: "en-IN",
          isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" },
          breadcrumb: { "@id": "https://www.bugsweepingtscm.com/locations/lucknow#breadcrumb" },
          about: { "@id": "https://www.bugsweepingtscm.com/locations/lucknow#place" },
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
          "@id": "https://www.bugsweepingtscm.com/locations/lucknow#place",
          name: "Lucknow",
          address: { "@type": "PostalAddress", addressLocality: "Lucknow", addressRegion: "Uttar Pradesh", addressCountry: "IN" },
        },
        {
          "@type": "Service",
          "@id": "https://www.bugsweepingtscm.com/locations/lucknow#service",
          name: "Bug sweeping and TSCM services in Lucknow",
          serviceType: "Technical surveillance countermeasures",
          provider: { "@id": "https://www.bugsweepingtscm.com/#organization" },
          areaServed: { "@id": "https://www.bugsweepingtscm.com/locations/lucknow#place" },
          mainEntityOfPage: { "@id": "https://www.bugsweepingtscm.com/locations/lucknow#webpage" },
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
          "@id": "https://www.bugsweepingtscm.com/locations/lucknow#breadcrumb",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.bugsweepingtscm.com" },
            { "@type": "ListItem", position: 2, name: "Locations", item: "https://www.bugsweepingtscm.com/locations/lucknow" },
            { "@type": "ListItem", position: 3, name: "Lucknow" },
          ],
        },
      ],
    },
  },
  {
    slug: "kolkata",
    city: "Kolkata",
    state: "West Bengal",
    seoTitle: "Bug Sweeping Services in Kolkata | TSCM Sweeps",
    heroTitle: "Bug Sweeping Services in Kolkata",
    heroSubtitle:
      "TSCM bug sweeps for offices, flats and vehicles across Kolkata, Salt Lake, Sector V and New Town, along with Howrah and the northern suburbs.",
    intro:
      "Kolkata work divides between old buildings, where wiring and cavities rarely match any drawing, and the newer office stock out towards Salt Lake and New Town. We agree the scope with you first, then examine it using radio-frequency analysis for devices that transmit, a non-linear junction detector for electronics that are switched off, optical and thermal checks, and a close physical inspection of the places devices are usually concealed.",
    whyUs:
      "In older property the physical search carries most of the weight, because there is no as-built drawing to check against and generations of alterations sit behind the plaster. In the newer office buildings the problem inverts: the room is full of legitimate wireless equipment, and the work is separating one unexplained signal from all of it. We say in writing which areas we examined, which we could not reach, and what the result does and does not prove.",
    areas: [
      "Park Street & BBD Bagh",
      "Ballygunge & Alipore",
      "Salt Lake & Sector V",
      "New Town & Rajarhat",
      "Jadavpur & Tollygunge",
      "EM Bypass & Beleghata",
      "Howrah & northern suburbs",
    ],
    metaDescription:
      "Bug sweeping services in Kolkata: TSCM sweeps for offices, flats and vehicles across the city, Salt Lake, Sector V and New Town. Book a consultation.",
    areaGroups: [
      {
        zone: "Central Kolkata",
        areas: ["Park Street", "Esplanade", "BBD Bagh", "Bowbazar", "Burrabazar", "Entally", "Sealdah", "Chowringhee"],
      },
      {
        zone: "South Kolkata",
        areas: ["Ballygunge", "Alipore", "Bhowanipore", "Gariahat", "Kasba", "Jadavpur", "Tollygunge", "Garia", "Behala", "New Alipore"],
      },
      {
        zone: "North Kolkata",
        areas: ["Shyambazar", "Sovabazar", "Maniktala", "Belgachia", "Cossipore", "Ultadanga", "Jorasanko", "Shobhabazar"],
      },
      {
        zone: "East Kolkata",
        areas: ["EM Bypass", "Beleghata", "Topsia", "Tangra", "Anandapur", "Kankurgachhi", "Phoolbagan", "Science City"],
      },
      {
        zone: "Salt Lake, Sector V and New Town",
        areas: ["Salt Lake Sector I", "Sector II", "Sector III", "Sector V", "New Town", "Rajarhat", "Eco Park", "Techno City", "Lake Town"],
      },
      {
        zone: "Howrah and the suburbs",
        areas: ["Howrah", "Shibpur", "Santragachi", "Barrackpore", "Dum Dum", "Madhyamgram", "Baranagar", "Barasat"],
      },
    ],
    jurisdiction: {
      heading: "Sector V and New Town are not Kolkata Police",
      body: [
        "This catches out more office clients than any other detail here. Kolkata Police is its own force, organised into ten divisions covering seventy-nine territorial police stations as listed in the 2023 state gazette. Salt Lake, Sector V, New Town and Rajarhat appear nowhere on that list, because they fall under the Bidhannagar Police Commissionerate, a separate force with its own stations, including Electronics Complex for the Sector V township and dedicated stations for New Town and Rajarhat.",
        "That matters when something is found. An office in Sector V reports to Bidhannagar, which also runs its own cyber crime police station, while a flat in Ballygunge reports to Kolkata Police, whose cyber capability since 2018 sits in a dedicated station in each division rather than only at Lalbazar. Howrah and Barrackpore are separate commissionerates again.",
        "One more practical point: nothing you submit online in West Bengal is an FIR. The state citizen portal describes itself as a way of intimating your grievance to the local police station, and carries its own warning that it should not be referred to in a court of law. Kolkata Police's citizen portal lets you download an FIR rather than file one. For a cognizable offence such as voyeurism, the report is made at the station, ideally with the device left in place and photographed.",
      ],
    },
    settings: [
      {
        title: "Offices in Sector V and the CBD",
        desc: "Sweeps before a negotiation or board meeting, planned around the fact that the IT township is a different police commissionerate from the city centre.",
      },
      {
        title: "Flats and older buildings",
        desc: "Checks after a tenancy change, a renovation or a dispute, where decades of alterations mean the physical inspection matters more than any instrument reading.",
      },
      {
        title: "Hotels and short stays",
        desc: "Checks focused on fittings, sockets and anything facing the bed or bathroom. West Bengal's published guidance tells hotels to run CCTV in public areas; a camera in your room is a different matter entirely.",
      },
      {
        title: "Vehicles",
        desc: "Tracker checks covering the underbody, wheel arches, bumpers, boot and the diagnostic port, for cars left with drivers or at service centres.",
      },
    ],
    faqs: [
      {
        q: "My office is in Sector V. Which police cover me?",
        a: "Bidhannagar Police Commissionerate, not Kolkata Police. Salt Lake, Sector V, New Town and Rajarhat sit outside the list of Kolkata Police stations published in the 2023 state gazette, and Bidhannagar runs its own stations for those areas along with its own cyber crime police station. If a device is found in your Sector V office, that is where the case sits.",
      },
      {
        q: "Can I file an FIR online in Kolkata?",
        a: "No. West Bengal's citizen portal describes itself as a way to intimate your grievance to the local police station, and warns on its own page that it should not be referred to in a court of law. Kolkata Police's portal lets you download an FIR that already exists rather than file a new one. A cognizable offence means attending the police station.",
      },
      {
        q: "Where do cyber complaints go in Kolkata?",
        a: "Kolkata Police has run a cyber police station since 2010 and, since 2018, a dedicated cyber police station in each of its divisions, so you do not have to travel to Lalbazar. It also publishes a city cyber helpline alongside the national 1930 number and the cybercrime portal. In Salt Lake and New Town, Bidhannagar's own cyber crime police station is the right door.",
      },
      {
        q: "Is there a rule about cameras in Kolkata paying guest accommodation?",
        a: "We could not find any West Bengal registration or camera rule for paying guest accommodation or hostels on an official source, and neither Kolkata Police nor the state police publishes an advisory about hidden cameras. The protection you have comes from the criminal law on voyeurism rather than from any local licensing condition, so do not assume a baseline exists.",
      },
    ],
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://www.bugsweepingtscm.com/locations/kolkata#webpage",
          url: "https://www.bugsweepingtscm.com/locations/kolkata",
          name: "Bug Sweeping Services in Kolkata",
          inLanguage: "en-IN",
          isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" },
          breadcrumb: { "@id": "https://www.bugsweepingtscm.com/locations/kolkata#breadcrumb" },
          about: { "@id": "https://www.bugsweepingtscm.com/locations/kolkata#place" },
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
          "@id": "https://www.bugsweepingtscm.com/locations/kolkata#place",
          name: "Kolkata",
          address: { "@type": "PostalAddress", addressLocality: "Kolkata", addressRegion: "West Bengal", addressCountry: "IN" },
        },
        {
          "@type": "Service",
          "@id": "https://www.bugsweepingtscm.com/locations/kolkata#service",
          name: "Bug sweeping and TSCM services in Kolkata",
          serviceType: "Technical surveillance countermeasures",
          provider: { "@id": "https://www.bugsweepingtscm.com/#organization" },
          areaServed: { "@id": "https://www.bugsweepingtscm.com/locations/kolkata#place" },
          mainEntityOfPage: { "@id": "https://www.bugsweepingtscm.com/locations/kolkata#webpage" },
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
          "@id": "https://www.bugsweepingtscm.com/locations/kolkata#breadcrumb",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.bugsweepingtscm.com" },
            { "@type": "ListItem", position: 2, name: "Locations", item: "https://www.bugsweepingtscm.com/locations/kolkata" },
            { "@type": "ListItem", position: 3, name: "Kolkata" },
          ],
        },
      ],
    },
  },
  {
    slug: "chennai",
    city: "Chennai",
    state: "Tamil Nadu",
    seoTitle: "Bug Sweeping Services in Chennai | TSCM Sweeps",
    heroTitle: "Bug Sweeping Services in Chennai",
    heroSubtitle:
      "TSCM bug sweeps for offices, homes and vehicles across Chennai, from the central business area and Anna Nagar to the OMR corridor, Tambaram and Avadi.",
    intro:
      "Chennai brings two distinct jobs: corporate floors along the IT corridor, and a large rented and hostel market across the city. We agree the scope with you first, then examine it using radio-frequency analysis for devices that transmit, a non-linear junction detector for electronics that are switched off, optical and thermal checks, and a close physical inspection of the places devices are usually concealed.",
    whyUs:
      "Reported Chennai cases point at fittings and at moments when strangers are lawfully inside. In a 2018 case at a hostel in Adambakkam, cameras were found concealed in light fittings, a dressing area and a bathroom switchboard, reportedly placed during renovation work; reports differ on whether six or nine were recovered. In 2023 a man was arrested in Velachery after complaints from a working women's hostel, having used an ordinary mobile phone rather than any specialist device. Renovations, repairs and ordinary phones are the pattern worth checking for.",
    areas: [
      "T Nagar & Nungambakkam",
      "Anna Nagar & Kilpauk",
      "Adyar & Besant Nagar",
      "Velachery & Guindy",
      "OMR & Sholinganallur",
      "Tambaram & Chromepet",
      "Avadi & Ambattur",
    ],
    metaDescription:
      "Bug sweeping services in Chennai: TSCM sweeps for offices, homes and vehicles across the city, the OMR corridor, Tambaram and Avadi. Book a consultation.",
    areaGroups: [
      {
        zone: "Central Chennai",
        areas: ["T Nagar", "Nungambakkam", "Egmore", "Royapettah", "Mylapore", "Alwarpet", "Teynampet", "Anna Salai", "Chetpet"],
      },
      {
        zone: "North Chennai",
        areas: ["Royapuram", "Washermanpet", "Tondiarpet", "Perambur", "Vyasarpadi", "Manali", "Ennore", "Purasawalkam"],
      },
      {
        zone: "South Chennai",
        areas: ["Adyar", "Besant Nagar", "Thiruvanmiyur", "Velachery", "Guindy", "Saidapet", "Kotturpuram", "Madipakkam"],
      },
      {
        zone: "West Chennai",
        areas: ["Anna Nagar", "Kilpauk", "Aminjikarai", "Vadapalani", "Virugambakkam", "Mogappair", "Porur", "Valasaravakkam"],
      },
      {
        zone: "OMR and the IT corridor",
        areas: ["Perungudi", "Thoraipakkam", "Sholinganallur", "Navalur", "Siruseri", "Taramani", "Karapakkam", "Kelambakkam"],
      },
      {
        zone: "Tambaram side",
        areas: ["Tambaram", "Chromepet", "Pallavaram", "Selaiyur", "Perungalathur", "Vandalur", "Medavakkam", "Guduvancheri"],
      },
      {
        zone: "Avadi and the north west",
        areas: ["Avadi", "Ambattur", "Thirumullaivoyal", "Red Hills", "Poonamallee", "Pattabiram", "Thiruninravur"],
      },
    ],
    jurisdiction: {
      heading: "Three commissionerates, and four cyber stations in the city",
      body: [
        "Greater Chennai Police covers 103 law and order police stations along with thirty-nine all women police stations and seventy-two traffic stations, serving a population of around seventy-two lakh. What surprises people is where it stops: Tambaram and Avadi have been separate commissionerates since the start of 2022, created by trifurcating the earlier Greater Chennai Police under a 2022 state Act. Avadi alone runs two law and order districts and around thirty stations. Someone in Tambaram or Red Hills who walks into a Greater Chennai station is in the wrong commissionerate.",
        "For cyber matters, Tamil Nadu runs fifty-four cyber crime police stations, and Chennai city has four zonal ones covering its east, south, north and west zones. The state Cyber Crime Wing is headquartered in Chennai and includes an investigation centre that exists precisely for cases where the territorial jurisdiction of the complainant or the accused cannot be determined, which is a useful escalation to know about if a case crosses boundaries.",
        "On reporting, the state police portal lets the public register a complaint online and look up an FIR, but an online complaint is its own category rather than an FIR, and Tamil Nadu separately maintains a community service register for non-cognizable matters. One practical warning worth having: of the calls made to the 1930 cyber helpline over a recent seven month period, official figures show only about one in eight were converted into complaints, so ask for your call to be recorded as a complaint and note the acknowledgement number.",
      ],
    },
    settings: [
      {
        title: "Offices on the IT corridor",
        desc: "Sweeps before a negotiation, an audit or a board meeting, in buildings where facilities teams, contractors and other tenants all have reason to be on the floor.",
      },
      {
        title: "Hostels and rented accommodation",
        desc: "Hostels for women and children in Tamil Nadu need a licence from the Collector, and since May 2025 it runs ten years. The licence sets no camera standard, so a camera inside a room remains a criminal matter rather than a house rule.",
      },
      {
        title: "Homes during and after building work",
        desc: "Reported Chennai cases have involved devices placed during renovation, so a sweep after contractors leave is worth more than one booked months later.",
      },
      {
        title: "Vehicles",
        desc: "Tracker checks covering the underbody, wheel arches, bumpers, boot and the diagnostic port, for cars left with drivers or at service centres.",
      },
    ],
    faqs: [
      {
        q: "Do Tambaram and Avadi come under Greater Chennai Police?",
        a: "No. Both have been separate police commissionerates since the start of 2022, created by trifurcating the earlier Greater Chennai Police under a state Act. If a device is found in Tambaram, Chromepet, Avadi or Red Hills, the complaint goes to that commissionerate rather than to a Greater Chennai station, even if you work in the city.",
      },
      {
        q: "Which cyber police station covers Chennai?",
        a: "Chennai city has four zonal cyber crime police stations, covering the east, south, north and west zones, out of fifty-four across Tamil Nadu. The state Cyber Crime Wing is headquartered in Chennai and runs an investigation centre for cases where the jurisdiction of the complainant or the accused cannot be determined. The 1930 helpline and the national portal will route a complaint for you.",
      },
      {
        q: "Is 181 the women's helpline in Chennai?",
        a: "181 exists in Tamil Nadu, but it is run by social welfare rather than the police, and it does not appear on the state police's own helpline list. The police list carries 1091 for women, now notified for a dedicated city task force and integrated with 112, alongside 1930 for cyber crime. For an urgent matter, 112 is the number.",
      },
      {
        q: "Can I report a hidden camera online in Chennai?",
        a: "You can register a complaint through the state police citizen portal, but an online complaint is a separate category from an FIR, and Tamil Nadu keeps a community service register for non-cognizable matters. For an offence such as voyeurism, go to the police station, and use 1930 in parallel for anything cyber.",
      },
    ],
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://www.bugsweepingtscm.com/locations/chennai#webpage",
          url: "https://www.bugsweepingtscm.com/locations/chennai",
          name: "Bug Sweeping Services in Chennai",
          inLanguage: "en-IN",
          isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" },
          breadcrumb: { "@id": "https://www.bugsweepingtscm.com/locations/chennai#breadcrumb" },
          about: { "@id": "https://www.bugsweepingtscm.com/locations/chennai#place" },
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
          "@id": "https://www.bugsweepingtscm.com/locations/chennai#place",
          name: "Chennai",
          address: { "@type": "PostalAddress", addressLocality: "Chennai", addressRegion: "Tamil Nadu", addressCountry: "IN" },
        },
        {
          "@type": "Service",
          "@id": "https://www.bugsweepingtscm.com/locations/chennai#service",
          name: "Bug sweeping and TSCM services in Chennai",
          serviceType: "Technical surveillance countermeasures",
          provider: { "@id": "https://www.bugsweepingtscm.com/#organization" },
          areaServed: { "@id": "https://www.bugsweepingtscm.com/locations/chennai#place" },
          mainEntityOfPage: { "@id": "https://www.bugsweepingtscm.com/locations/chennai#webpage" },
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
          "@id": "https://www.bugsweepingtscm.com/locations/chennai#breadcrumb",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.bugsweepingtscm.com" },
            { "@type": "ListItem", position: 2, name: "Locations", item: "https://www.bugsweepingtscm.com/locations/chennai" },
            { "@type": "ListItem", position: 3, name: "Chennai" },
          ],
        },
      ],
    },
  },
  {
    slug: "surat",
    city: "Surat",
    state: "Gujarat",
    seoTitle: "Bug Sweeping Services in Surat | TSCM Sweeps",
    heroTitle: "Bug Sweeping Services in Surat",
    heroSubtitle:
      "TSCM bug sweeps for offices, factories, homes and vehicles across Surat, from Athwalines and Vesu to the Hazira, Sachin and Pandesara industrial belts.",
    intro:
      "Surat's commercial sweeps are shaped by what the city does: diamond units where a single room holds enormous value, and textile businesses where designs and buyer lists are the asset. The district administration puts three quarters of the world's diamond cutting and polishing here, across more than five thousand units, alongside tens of thousands of textile enterprises. We agree the scope with you first, then work through it with radio-frequency analysis, a non-linear junction detector for electronics that are switched off, optical and thermal checks, and a close physical inspection.",
    whyUs:
      "The reported local case is a reminder that the device is usually ordinary. In August 2025 a cleaner at a Piplod restaurant was arrested after a customer spotted a mobile phone placed on the ventilation grill of the women's washroom, with one of the two phones seized carrying no SIM and used only for recording. Vents, grills and high fittings are where we look before anything exotic, and whatever is found is documented in position before it is moved.",
    areas: [
      "Athwalines & Piplod",
      "Vesu & Dumas Road",
      "Adajan & Palanpur",
      "Varachha & Katargam",
      "Udhna & Pandesara",
      "Sachin GIDC & Hazira",
      "Kamrej & Olpad",
    ],
    metaDescription:
      "Bug sweeping services in Surat: TSCM sweeps for offices, factories, homes and vehicles across the city and its industrial belts. Book a consultation.",
    areaGroups: [
      {
        zone: "West Surat",
        areas: ["Athwalines", "Piplod", "Vesu", "Dumas Road", "Pal", "Adajan", "Palanpur", "Rander", "City Light"],
      },
      {
        zone: "North and east Surat",
        areas: ["Varachha", "Katargam", "Kapodra", "Amroli", "Sarthana", "Nana Varachha", "Mota Varachha", "Utran"],
      },
      {
        zone: "South Surat",
        areas: ["Udhna", "Pandesara", "Limbayat", "Bhestan", "Bamroli", "Dindoli", "Parvat Patiya"],
      },
      {
        zone: "Industrial belts",
        areas: ["Hazira", "Sachin", "Sachin GIDC", "Ichchhapor", "Magdalla", "Pandesara GIDC", "Khatodara"],
      },
      {
        zone: "Surat district",
        areas: ["Kamrej", "Olpad", "Kadodara", "Palsana", "Bardoli", "Mandvi", "Kosamba", "Kim"],
      },
    ],
    jurisdiction: {
      heading: "City or district, and why the numbers you read elsewhere are stale",
      body: [
        "Surat City Police is a commissionerate, and its published structure is larger than most content sites suggest: two additional commissioner sectors, seven zones numbered one to seven, and fourteen divisions lettered A to N. The widely copied line about four zones, eight divisions and twenty-eight police stations describes an older arrangement, so treat any station count you read online with caution.",
        "The split that matters commercially is city against district. Hazira, Sachin, Sachin GIDC, Pandesara and Ichchhapor are covered by named city police stations, so a plant there deals with Surat City Police. Kamrej and Olpad fall to Surat Rural, a separate superintendent's force with sixteen stations across four divisions. Dialling the wrong one costs hours on the day something is found.",
        "On reporting, Gujarat's e-FIR facility covers vehicle and mobile phone theft only, where the accused is unidentified and no force was used, and it is not an FIR on submission: an officer verifies the complainant, reported as within forty-eight hours, before a case is registered. A covert recording complaint falls outside that route entirely. For cyber matters Surat runs a cyber crime police station with several inspector-led units on a shared line, alongside 1930 and the national portal, and the women's helpline on Gujarat Police's own list is 181, the Abhayam line, though 1091 still appears on some district collectorate pages, so check which one your district publishes.",
      ],
    },
    settings: [
      {
        title: "Diamond and textile offices",
        desc: "Sweeps before a negotiation, a buyer visit or a partnership change, in premises where value is concentrated in a few rooms and staff access is routine.",
      },
      {
        title: "Factories and industrial units",
        desc: "Checks across meeting rooms, cabins and vehicle bays in the Hazira, Sachin and Pandesara belts, planned around shift patterns.",
      },
      {
        title: "Homes and rented flats",
        desc: "Checks at the start or end of a tenancy, or after a dispute, covering fittings, sockets, vents and anything recently installed by someone else.",
      },
      {
        title: "Vehicles",
        desc: "Tracker checks for cars and two-wheelers, working through the underbody, wheel arches, bumpers, boot and the diagnostic port under the dashboard.",
      },
    ],
    faqs: [
      {
        q: "Is Hazira or Sachin covered by Surat City Police or the district force?",
        a: "Hazira, Sachin, Sachin GIDC, Pandesara and Ichchhapor are covered by named Surat City police stations, so they sit inside the commissionerate. Kamrej and Olpad fall to Surat Rural, which is a separate force with its own superintendent. Where a device is found decides which one takes the complaint.",
      },
      {
        q: "Can I file an e-FIR in Surat for a hidden camera?",
        a: "No. Gujarat's e-FIR covers vehicle and mobile phone theft, only where the accused is unidentified and no force was used, and it is not an FIR on submission: an officer verifies the complainant first, reported as within forty-eight hours. A covert recording complaint means attending the police station.",
      },
      {
        q: "Which helpline should a woman in Surat use?",
        a: "Gujarat Police's own helpline list gives 181, the Abhayam line, which runs statewide with rescue vans and a panic-button app and is operated by the women and child development department rather than the police. The 1091 number still appears on some district collectorate pages, so the two coexist and it is worth checking what your district publishes. Use 112 for an emergency and 1930 for cyber crime.",
      },
      {
        q: "What affects the cost of a sweep in Surat?",
        a: "The number and size of the spaces, how cluttered they are, whether vehicles are in scope, and the depth of the report. In industrial premises, shift timing and access approvals often matter as much as floor area. Ask for a written quote listing what is included.",
      },
    ],
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        { "@type": "WebPage", "@id": "https://www.bugsweepingtscm.com/locations/surat#webpage", url: "https://www.bugsweepingtscm.com/locations/surat", name: "Bug Sweeping Services in Surat", inLanguage: "en-IN", isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" }, breadcrumb: { "@id": "https://www.bugsweepingtscm.com/locations/surat#breadcrumb" }, about: { "@id": "https://www.bugsweepingtscm.com/locations/surat#place" } },
        { "@type": "WebSite", "@id": "https://www.bugsweepingtscm.com/#website", url: "https://www.bugsweepingtscm.com", name: "BugSweepingTSCM.com", publisher: { "@id": "https://www.bugsweepingtscm.com/#organization" }, inLanguage: "en-IN" },
        { "@type": "Place", "@id": "https://www.bugsweepingtscm.com/locations/surat#place", name: "Surat", address: { "@type": "PostalAddress", addressLocality: "Surat", addressRegion: "Gujarat", addressCountry: "IN" } },
        { "@type": "Service", "@id": "https://www.bugsweepingtscm.com/locations/surat#service", name: "Bug sweeping and TSCM services in Surat", serviceType: "Technical surveillance countermeasures", provider: { "@id": "https://www.bugsweepingtscm.com/#organization" }, areaServed: { "@id": "https://www.bugsweepingtscm.com/locations/surat#place" }, mainEntityOfPage: { "@id": "https://www.bugsweepingtscm.com/locations/surat#webpage" } },
        { "@type": "Organization", "@id": "https://www.bugsweepingtscm.com/#organization", name: "BugSweepingTSCM", url: "https://www.bugsweepingtscm.com", logo: "https://www.bugsweepingtscm.com/images/logo/bug-sweep.png", email: "bugsweepingtscm@gmail.com", telephone: "+91-8882732221" },
        { "@type": "BreadcrumbList", "@id": "https://www.bugsweepingtscm.com/locations/surat#breadcrumb", itemListElement: [ { "@type": "ListItem", position: 1, name: "Home", item: "https://www.bugsweepingtscm.com" }, { "@type": "ListItem", position: 2, name: "Locations", item: "https://www.bugsweepingtscm.com/locations/surat" }, { "@type": "ListItem", position: 3, name: "Surat" } ] },
      ],
    },
  },
  {
    slug: "nagpur",
    city: "Nagpur",
    state: "Maharashtra",
    seoTitle: "Bug Sweeping Services in Nagpur | TSCM Sweeps",
    heroTitle: "Bug Sweeping Services in Nagpur",
    heroSubtitle:
      "TSCM bug sweeps for offices, homes and vehicles across Nagpur, from Civil Lines and Dharampeth to the MIHAN and Hingna industrial areas.",
    intro:
      "Nagpur combines government and legal offices, family businesses and the newer corporate floors around MIHAN, the multi-modal hub whose special economic zone the state development corporation puts at over a thousand hectares. We agree the scope with you first, then examine it using radio-frequency analysis for devices that transmit, a non-linear junction detector for electronics that are switched off, optical and thermal checks, and a close physical inspection.",
    whyUs:
      "Most covert recording reported locally involves an ordinary phone used opportunistically rather than a planted device. In a case reported in early 2025, a man was caught filming through a washroom window at a Sitabuldi cultural centre, with twenty recordings found on his phone. That shapes where we look: sightlines through windows, vents and gaps get checked alongside the fittings inside the room.",
    areas: [
      "Civil Lines & Sitabuldi",
      "Dharampeth & Ramdaspeth",
      "Sadar & Kamptee Road",
      "Wardha Road & Ajni",
      "MIHAN & Khapri",
      "Hingna & MIDC",
      "Manish Nagar & Besa",
    ],
    metaDescription:
      "Bug sweeping services in Nagpur: TSCM sweeps for offices, homes and vehicles across the city, MIHAN and the industrial areas. Book a consultation.",
    areaGroups: [
      {
        zone: "Central Nagpur",
        areas: ["Civil Lines", "Sitabuldi", "Dhantoli", "Ramdaspeth", "Dharampeth", "Sadar", "Gandhibagh", "Itwari"],
      },
      {
        zone: "South Nagpur",
        areas: ["Ajni", "Wardha Road", "Manish Nagar", "Besa", "Beltarodi", "Sonegaon", "Jaitala", "Trimurti Nagar"],
      },
      {
        zone: "East Nagpur",
        areas: ["Nandanvan", "Sakkardara", "Wathoda", "Bhandewadi", "Kalamna", "Lakadganj", "Pardi"],
      },
      {
        zone: "North and west Nagpur",
        areas: ["Jaripatka", "Kapil Nagar", "Mankapur", "Gittikhadan", "Ambazari", "Bajaj Nagar", "Koradi", "Kamptee"],
      },
      {
        zone: "Industrial and outer areas",
        areas: ["MIHAN", "Khapri", "Hingna", "Hingna MIDC", "Butibori", "Wadi", "Kanhan", "Khaparkheda"],
      },
    ],
    jurisdiction: {
      heading: "Nagpur uses 1091, and has two cyber police stations",
      body: [
        "Start with the helpline, because this is the detail most often copied wrongly. Maharashtra Police states on its own citizen portal that the 103 women's helpline runs in the Mumbai, Thane and Navi Mumbai police units, and that the rest of Maharashtra uses 1091. Nagpur City Police publishes 1091 on its own site. Any page telling a Nagpur reader to dial 103 is repeating Mumbai's number.",
        "Nagpur City Police is separate from Nagpur Rural, which has its own superintendent, so an address outside the city limits is a different force. Unusually for a city this size, the city directory lists two cyber police stations rather than one, a north and a south, alongside a cyber crime unit at Police Bhavan in Civil Lines. Nagpur also publishes 14407 alongside the national 1930 number.",
        "Online reporting routes through the state citizen portal, and Nagpur publishes no policy of its own about what that portal can do. Mumbai Police, which runs on the same system, states plainly that its online complaints cover only minor, non-cognizable matters and that an FIR for a cognizable crime can only be registered at a police station. Voyeurism is cognizable, so plan on attending the station.",
      ],
    },
    settings: [
      {
        title: "Offices and chambers",
        desc: "Sweeps before a negotiation, a hearing or a board meeting, in premises where support staff and contractors hold routine access.",
      },
      {
        title: "MIHAN and industrial premises",
        desc: "Checks across meeting rooms, cabins and vehicle bays in the special economic zone and the Hingna and Butibori belts.",
      },
      {
        title: "Hotels and lodges",
        desc: "Nagpur Police was reported in September 2026 to have ordered hotels, lodges and guest houses to verify guest identity and keep entrance camera footage for ninety days. That is a record-keeping rule, not protection inside your room, which is where we look.",
      },
      {
        title: "Homes and rented flats",
        desc: "Checks after a tenancy change or a dispute, covering fittings, vents, window sightlines and anything recently installed by someone else.",
      },
    ],
    faqs: [
      {
        q: "Is 103 the women's helpline in Nagpur?",
        a: "No. Maharashtra Police states that 103 runs in the Mumbai, Thane and Navi Mumbai police units and that the rest of the state uses 1091, and Nagpur City Police publishes 1091 on its own site. Use 112 for an emergency and 1930 for cyber crime; Nagpur also publishes 14407 for cyber complaints.",
      },
      {
        q: "Where do cyber complaints go in Nagpur?",
        a: "The city directory lists two cyber police stations, a north and a south, alongside a cyber crime unit based at Police Bhavan in Civil Lines. That is a deeper structure than most cities this size. The 1930 helpline and the national portal will route a complaint if you are unsure which covers your address.",
      },
      {
        q: "Can I report a hidden camera online in Nagpur?",
        a: "Not as an FIR. Nagpur routes online complaints to the Maharashtra citizen portal and publishes no policy of its own. Mumbai Police, on the same system, states that online complaints cover only minor, non-cognizable matters and that a cognizable offence can only be registered at a police station. Voyeurism is cognizable.",
      },
      {
        q: "Do you cover MIHAN, Hingna and Butibori?",
        a: "Yes, along with the city itself. Worth checking before you report anything: Nagpur Rural is a separate force from Nagpur City Police, so an address beyond the city limits may fall to a different superintendent even though it feels like the same place.",
      },
    ],
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        { "@type": "WebPage", "@id": "https://www.bugsweepingtscm.com/locations/nagpur#webpage", url: "https://www.bugsweepingtscm.com/locations/nagpur", name: "Bug Sweeping Services in Nagpur", inLanguage: "en-IN", isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" }, breadcrumb: { "@id": "https://www.bugsweepingtscm.com/locations/nagpur#breadcrumb" }, about: { "@id": "https://www.bugsweepingtscm.com/locations/nagpur#place" } },
        { "@type": "WebSite", "@id": "https://www.bugsweepingtscm.com/#website", url: "https://www.bugsweepingtscm.com", name: "BugSweepingTSCM.com", publisher: { "@id": "https://www.bugsweepingtscm.com/#organization" }, inLanguage: "en-IN" },
        { "@type": "Place", "@id": "https://www.bugsweepingtscm.com/locations/nagpur#place", name: "Nagpur", address: { "@type": "PostalAddress", addressLocality: "Nagpur", addressRegion: "Maharashtra", addressCountry: "IN" } },
        { "@type": "Service", "@id": "https://www.bugsweepingtscm.com/locations/nagpur#service", name: "Bug sweeping and TSCM services in Nagpur", serviceType: "Technical surveillance countermeasures", provider: { "@id": "https://www.bugsweepingtscm.com/#organization" }, areaServed: { "@id": "https://www.bugsweepingtscm.com/locations/nagpur#place" }, mainEntityOfPage: { "@id": "https://www.bugsweepingtscm.com/locations/nagpur#webpage" } },
        { "@type": "Organization", "@id": "https://www.bugsweepingtscm.com/#organization", name: "BugSweepingTSCM", url: "https://www.bugsweepingtscm.com", logo: "https://www.bugsweepingtscm.com/images/logo/bug-sweep.png", email: "bugsweepingtscm@gmail.com", telephone: "+91-8882732221" },
        { "@type": "BreadcrumbList", "@id": "https://www.bugsweepingtscm.com/locations/nagpur#breadcrumb", itemListElement: [ { "@type": "ListItem", position: 1, name: "Home", item: "https://www.bugsweepingtscm.com" }, { "@type": "ListItem", position: 2, name: "Locations", item: "https://www.bugsweepingtscm.com/locations/nagpur" }, { "@type": "ListItem", position: 3, name: "Nagpur" } ] },
      ],
    },
  },
  {
    slug: "indore",
    city: "Indore",
    state: "Madhya Pradesh",
    seoTitle: "Bug Sweeping Services in Indore | TSCM Sweeps",
    heroTitle: "Bug Sweeping Services in Indore",
    heroSubtitle:
      "TSCM bug sweeps for offices, homes, hostels and vehicles across Indore, from Vijay Nagar and Palasia to Rau, Super Corridor and the outer areas.",
    intro:
      "Indore is the state's commercial centre and a heavy student city, so sweeps here divide between business premises and rented accommodation. We settle the scope with you first. The sweep itself runs radio-frequency analysis across the space, a non-linear junction detector over surfaces and fittings to catch electronics that are powered down, optical and thermal checks, and a physical search of the spots a device can actually be hidden in",
    whyUs:
      "A reported Indore case from April 2026 shows how ordinary the settings are: a camera was found in a common washroom of an office complex near Janjeerwala Square, a cleaner was arrested, and the case was registered at Tukoganj police station under the voyeurism provision of the Bharatiya Nyaya Sanhita with the devices sent for forensic examination. Shared washrooms, service areas and anything a maintenance worker can reach unobserved get close attention.",
    areas: [
      "Vijay Nagar & Scheme 54",
      "Palasia & AB Road",
      "Old Palasia & Tukoganj",
      "Rau & Super Corridor",
      "Bhanwarkuan & Rajendra Nagar",
      "Sudama Nagar & Annapurna",
      "Pithampur & Mhow side",
    ],
    metaDescription:
      "Bug sweeping services in Indore: TSCM sweeps for offices, homes, hostels and vehicles across the city and outskirts. Book a private consultation.",
    areaGroups: [
      {
        zone: "Central Indore",
        areas: ["Palasia", "Old Palasia", "Tukoganj", "MG Road", "Rajwada", "Sarafa", "Chhawni", "Siyaganj"],
      },
      {
        zone: "East Indore",
        areas: ["Vijay Nagar", "Scheme 54", "Scheme 78", "Nipania", "Bicholi Mardana", "Khajrana", "Bengali Square", "Ring Road"],
      },
      {
        zone: "South Indore",
        areas: ["Bhanwarkuan", "Rajendra Nagar", "Sudama Nagar", "Annapurna", "Dwarkapuri", "Silicon City", "Khandwa Road"],
      },
      {
        zone: "West and north Indore",
        areas: ["Vijay Nagar West", "Bapat Square", "Sukhliya", "Malviya Nagar", "Lasudiya", "Super Corridor", "Gandhi Nagar", "Airport area"],
      },
      {
        zone: "Outer Indore",
        areas: ["Rau", "Mhow", "Simrol", "Sanwer", "Depalpur", "Hatod", "Betma", "Pithampur"],
      },
    ],
    jurisdiction: {
      heading: "Rau is city police, Mhow is rural, Pithampur is another district",
      body: [
        "Indore has been policed as a commissionerate since December 2021, organised into four zones each under a deputy commissioner. The boundary catches people out on the outskirts. Rau sits inside the commissionerate. Further out, at Mhow, Simrol, Sanwer, Depalpur, Hatod and Betma, it is worth confirming which office covers the address before you need it: the commissionerate's published jurisdiction takes in the whole district and its villages, while rural stations are also listed separately, and our own sources disagree about where the line now falls. What is not in doubt is Pithampur, which is not Indore at all but Dhar district, so a sweep at a Pithampur plant that calls Indore Police is calling the wrong force.",
        "Two helpline corrections matter in Madhya Pradesh. Both city police sites publish 1090 as the women's helpline. The 181 number, which is a women's line in several other states, is the Chief Minister's grievance helpline here, for complaints about government departments rather than police emergencies. Use 112 for an emergency, 1090 for women, 1930 for cyber crime, and the city's own cyber cell alongside them.",
        "Madhya Pradesh does have an e-FIR, and the state police call it an optional facility rather than an FIR in itself. Its scope is wider than most write-ups suggest, because they describe the categories it launched with: the portal now lists theft, vehicle theft, online financial fraud and crimes against women and children. The catch is the same whatever the category. You are expected at the police station within about three days, and the portal states that the e-FIR is rejected if you do not appear, so for a covert recording it is at best a way of starting the clock rather than a way of avoiding the station. One local lever worth knowing: police commissioner orders in Indore require hotels, lodges, hostels and landlords to report occupant details, breach is an offence, and cases were filed against establishments in a drive in November 2025. Those orders run for a couple of months at a time and are reissued, so ask which one is current.",
      ],
    },
    settings: [
      {
        title: "Offices and shared premises",
        desc: "Sweeps covering meeting rooms and the shared washrooms and service areas that the reported local case turned on.",
      },
      {
        title: "Hostels and paying guest rooms",
        desc: "Indore's student population lives in shared accommodation. Operators are already required to report occupant details to the police, which is a lever if a landlord resists questions.",
      },
      {
        title: "Homes and rented flats",
        desc: "Checks at the start or end of a tenancy, or after a dispute, covering fittings, sockets, smoke detectors and anything recently installed by someone else.",
      },
      {
        title: "Vehicles",
        desc: "Cars handed to drivers or left at a workshop get checked underneath, around the bumpers and wheel arches, inside the boot lining and at the diagnostic port.",
      },
    ],
    faqs: [
      {
        q: "Is Pithampur covered by Indore Police?",
        a: "No. Pithampur is policed by Dhar district, not Indore, which is the clearest of the boundaries here. Rau is inside the Indore commissionerate. For Mhow, Simrol, Sanwer, Depalpur, Hatod and Betma, confirm the covering station before you report: the commissionerate's published jurisdiction covers the whole district and its villages, but rural stations are listed separately too, and sources do not agree on where the line sits.",
      },
      {
        q: "Is 181 the women's helpline in Indore?",
        a: "No. In Madhya Pradesh 181 is the Chief Minister's grievance helpline for complaints about government departments. Both Indore and Bhopal police publish 1090 as the women's helpline. Use 112 for an emergency and 1930 for cyber crime.",
      },
      {
        q: "Can I file an e-FIR in Indore for a hidden camera?",
        a: "You may be able to start one, but it will not finish the job. Madhya Pradesh Police call the e-FIR an optional facility, and the portal now lists theft, vehicle theft, online financial fraud and crimes against women and children rather than only the vehicle theft category it launched with. Either way you are expected at the police station within about three days, and the portal states that the e-FIR is rejected if you do not appear.",
      },
      {
        q: "Can I ask a hostel or landlord in Indore about their police reporting?",
        a: "Yes. Police commissioner orders in Indore require hotels, lodges, hostels and landlords to report occupant details to the local police station, breach is a punishable offence, and cases were filed against establishments in a drive in November 2025. These orders run for a couple of months and are reissued, so ask which one is current. There is no camera rule and no separate paying guest licence in the city that we could verify.",
      },
    ],
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        { "@type": "WebPage", "@id": "https://www.bugsweepingtscm.com/locations/indore#webpage", url: "https://www.bugsweepingtscm.com/locations/indore", name: "Bug Sweeping Services in Indore", inLanguage: "en-IN", isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" }, breadcrumb: { "@id": "https://www.bugsweepingtscm.com/locations/indore#breadcrumb" }, about: { "@id": "https://www.bugsweepingtscm.com/locations/indore#place" } },
        { "@type": "WebSite", "@id": "https://www.bugsweepingtscm.com/#website", url: "https://www.bugsweepingtscm.com", name: "BugSweepingTSCM.com", publisher: { "@id": "https://www.bugsweepingtscm.com/#organization" }, inLanguage: "en-IN" },
        { "@type": "Place", "@id": "https://www.bugsweepingtscm.com/locations/indore#place", name: "Indore", address: { "@type": "PostalAddress", addressLocality: "Indore", addressRegion: "Madhya Pradesh", addressCountry: "IN" } },
        { "@type": "Service", "@id": "https://www.bugsweepingtscm.com/locations/indore#service", name: "Bug sweeping and TSCM services in Indore", serviceType: "Technical surveillance countermeasures", provider: { "@id": "https://www.bugsweepingtscm.com/#organization" }, areaServed: { "@id": "https://www.bugsweepingtscm.com/locations/indore#place" }, mainEntityOfPage: { "@id": "https://www.bugsweepingtscm.com/locations/indore#webpage" } },
        { "@type": "Organization", "@id": "https://www.bugsweepingtscm.com/#organization", name: "BugSweepingTSCM", url: "https://www.bugsweepingtscm.com", logo: "https://www.bugsweepingtscm.com/images/logo/bug-sweep.png", email: "bugsweepingtscm@gmail.com", telephone: "+91-8882732221" },
        { "@type": "BreadcrumbList", "@id": "https://www.bugsweepingtscm.com/locations/indore#breadcrumb", itemListElement: [ { "@type": "ListItem", position: 1, name: "Home", item: "https://www.bugsweepingtscm.com" }, { "@type": "ListItem", position: 2, name: "Locations", item: "https://www.bugsweepingtscm.com/locations/indore" }, { "@type": "ListItem", position: 3, name: "Indore" } ] },
      ],
    },
  },
  {
    slug: "bhopal",
    city: "Bhopal",
    state: "Madhya Pradesh",
    seoTitle: "Bug Sweeping Services in Bhopal | TSCM Sweeps",
    heroTitle: "Bug Sweeping Services in Bhopal",
    heroSubtitle:
      "TSCM bug sweeps for offices, homes and vehicles across Bhopal, from Arera Colony and MP Nagar to Kolar, Bairagarh and the outer areas.",
    intro:
      "Bhopal is the state capital, so a large share of the work sits around government, institutional and professional offices, alongside homes and rented flats. Scope is agreed before we arrive. The sweep then combines radio-frequency analysis, a non-linear junction detector that responds to dormant electronics, optical and thermal checks, and a hands-on inspection of fittings, voids and furniture",
    whyUs:
      "The local case worth knowing did not happen in a hotel. In December 2024 a mobile phone was reported found in the false ceiling of a changing room at a diagnostic centre in Arera Hills, spotted by a patient's husband, with an employee arrested. Clinics, salons, fitting rooms and any space where people change deserve the same attention as bedrooms, and false ceilings are exactly the void a quick visual check skips.",
    areas: [
      "MP Nagar & Arera Colony",
      "Shyamla Hills & Shahpura",
      "Kolar Road & Bagsewaniya",
      "Bairagarh & Gandhi Nagar",
      "Govindpura & Piplani",
      "Old City & Ibrahimpura",
      "Misrod & Bhojpur Road",
    ],
    metaDescription:
      "Bug sweeping services in Bhopal: TSCM sweeps for offices, homes and vehicles across the capital and its outskirts. Book a private consultation.",
    areaGroups: [
      {
        zone: "New Bhopal",
        areas: ["MP Nagar", "Arera Colony", "Arera Hills", "Shahpura", "Shyamla Hills", "TT Nagar", "Char Imli", "Habibganj"],
      },
      {
        zone: "South Bhopal",
        areas: ["Kolar Road", "Bagsewaniya", "Bagmugaliya", "Misrod", "Katara Hills", "Bhojpur Road", "Chunabhatti"],
      },
      {
        zone: "East Bhopal",
        areas: ["Govindpura", "Piplani", "Awadhpuri", "Ayodhya Nagar", "Ashoka Garden", "Anand Nagar", "BHEL area"],
      },
      {
        zone: "Old city",
        areas: ["Ibrahimpura", "Hamidia Road", "Peer Gate", "Shahjahanabad", "Jahangirabad", "Kohefiza", "Talaiya", "Budhwara"],
      },
      {
        zone: "West and outer Bhopal",
        areas: ["Bairagarh", "Gandhi Nagar", "Khajuri Sadak", "Nishatpura", "Ratibad", "Neelbad", "Berasia", "Mandideep"],
      },
    ],
    jurisdiction: {
      heading: "What the commissionerate covers, and where it stops",
      body: [
        "Bhopal has been policed as a commissionerate since December 2021, and its own site describes thirty-four police stations plus four special stations organised across four zones, covering the district's villages as well as the city. Bairagarh and Kolar are inside it, in the fourth zone, so they are city police rather than rural. Berasia and a handful of other stations remain outside under a rural superintendent, and Mandideep, the industrial town people often treat as part of Bhopal, is in Raisen district and policed from there.",
        "Check the number before you need it. Bhopal Police publish 1090 for women. The 181 line, which several states use for exactly that purpose, is the Chief Minister's grievance helpline here and handles complaints about government departments rather than police emergencies, so advice copied from another state will misdirect you. Emergencies go to 112, cyber fraud to 1930, and local cyber matters to the commissionerate's cyber cell.",
        "The state's e-FIR does not do what its name suggests. Madhya Pradesh Police call it an optional facility rather than a registered FIR. Its categories are broader than the launch-era write-ups still in circulation, covering theft, vehicle theft, online financial fraud and crimes against women and children, so a covert recording is not necessarily outside it. What does not change is the ending: you are expected at the police station within roughly three days, and the portal states the e-FIR is rejected if you do not appear. Treat it as a way of starting the record, not a way of staying at home. Bhopal is also the one city in this state where an official camera advisory exists: guidance issued in November 2025 after a hospital camera hack told people to secure their own systems and to avoid installing cameras in bedrooms, changing rooms and bathrooms. It is about hardening your own CCTV rather than finding a hidden device, and it is worth reading in that light.",
      ],
    },
    settings: [
      {
        title: "Government and professional offices",
        desc: "Booked ahead of a tender discussion, a negotiation or a closed meeting, in buildings where cleaning crews, vendors and visitors pass through every day.",
      },
      {
        title: "Clinics, salons and changing areas",
        desc: "The reported local case involved a phone concealed in a false ceiling at a diagnostic centre, so ceiling voids, vents and fittings above head height get checked properly.",
      },
      {
        title: "Homes and rented flats",
        desc: "Worth doing when a tenancy changes hands or a dispute turns bitter. We look at light fittings, sockets, detectors and any object that arrived in the room without you.",
      },
      {
        title: "Vehicles",
        desc: "A tracker sweep takes in the wheel arches, bumpers, boot lining and the diagnostic port under the dashboard, which is where a self-powered unit is easiest to leave.",
      },
    ],
    faqs: [
      {
        q: "Are Kolar and Bairagarh covered by Bhopal city police?",
        a: "Yes. Both sit inside the commissionerate's fourth zone. Berasia and some neighbouring stations remain under a rural superintendent, and Mandideep is in Raisen district and policed from there, which matters if a device is found at an industrial unit that feels like part of Bhopal.",
      },
      {
        q: "Is 181 the women's helpline in Bhopal?",
        a: "No. That number is the Chief Minister's grievance helpline in this state, for complaints against government departments. The women's helpline published by Bhopal Police is 1090. Emergencies go to 112 and cyber fraud to 1930.",
      },
      {
        q: "Does Bhopal have any official guidance about cameras and privacy?",
        a: "Yes, with a caveat. Guidance issued in November 2025, after a hospital camera system was hacked, advised securing your own cameras, changing default passwords and avoiding cameras in bedrooms, changing rooms and bathrooms. It is about protecting systems you own rather than detecting a covert device someone else has placed.",
      },
      {
        q: "Can I file an e-FIR in Bhopal for a hidden camera?",
        a: "Partly, but it does not spare you the visit. Madhya Pradesh Police call the e-FIR an optional facility rather than a registered FIR, and the portal's categories now run wider than the vehicle theft framing that older write-ups repeat, taking in theft, online financial fraud and crimes against women and children. You are still expected at the police station within roughly three days, and the e-FIR is rejected if you do not appear.",
      },
    ],
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        { "@type": "WebPage", "@id": "https://www.bugsweepingtscm.com/locations/bhopal#webpage", url: "https://www.bugsweepingtscm.com/locations/bhopal", name: "Bug Sweeping Services in Bhopal", inLanguage: "en-IN", isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" }, breadcrumb: { "@id": "https://www.bugsweepingtscm.com/locations/bhopal#breadcrumb" }, about: { "@id": "https://www.bugsweepingtscm.com/locations/bhopal#place" } },
        { "@type": "WebSite", "@id": "https://www.bugsweepingtscm.com/#website", url: "https://www.bugsweepingtscm.com", name: "BugSweepingTSCM.com", publisher: { "@id": "https://www.bugsweepingtscm.com/#organization" }, inLanguage: "en-IN" },
        { "@type": "Place", "@id": "https://www.bugsweepingtscm.com/locations/bhopal#place", name: "Bhopal", address: { "@type": "PostalAddress", addressLocality: "Bhopal", addressRegion: "Madhya Pradesh", addressCountry: "IN" } },
        { "@type": "Service", "@id": "https://www.bugsweepingtscm.com/locations/bhopal#service", name: "Bug sweeping and TSCM services in Bhopal", serviceType: "Technical surveillance countermeasures", provider: { "@id": "https://www.bugsweepingtscm.com/#organization" }, areaServed: { "@id": "https://www.bugsweepingtscm.com/locations/bhopal#place" }, mainEntityOfPage: { "@id": "https://www.bugsweepingtscm.com/locations/bhopal#webpage" } },
        { "@type": "Organization", "@id": "https://www.bugsweepingtscm.com/#organization", name: "BugSweepingTSCM", url: "https://www.bugsweepingtscm.com", logo: "https://www.bugsweepingtscm.com/images/logo/bug-sweep.png", email: "bugsweepingtscm@gmail.com", telephone: "+91-8882732221" },
        { "@type": "BreadcrumbList", "@id": "https://www.bugsweepingtscm.com/locations/bhopal#breadcrumb", itemListElement: [ { "@type": "ListItem", position: 1, name: "Home", item: "https://www.bugsweepingtscm.com" }, { "@type": "ListItem", position: 2, name: "Locations", item: "https://www.bugsweepingtscm.com/locations/bhopal" }, { "@type": "ListItem", position: 3, name: "Bhopal" } ] },
      ],
    },
  },
  {
    slug: "kanpur",
    city: "Kanpur",
    state: "Uttar Pradesh",
    seoTitle: "Bug Sweeping Services in Kanpur | TSCM Sweeps",
    heroTitle: "Bug Sweeping Services in Kanpur",
    heroSubtitle:
      "TSCM bug sweeps for homes, offices, hotels and vehicles across Kanpur, from Civil Lines and Swaroop Nagar to the Panki, Dada Nagar and Jajmau industrial belts.",
    intro:
      "Kanpur mixes old industrial property, family-run businesses and a large rented market around the colleges. We agree the scope with you first, then examine it using radio-frequency analysis for devices that transmit, a non-linear junction detector for electronics that are switched off, optical and thermal checks, and a close physical inspection of the places devices are usually concealed.",
    whyUs:
      "The local case worth knowing shapes how we check hotel and guest rooms here. In May 2026, cameras were reported found in all ten rooms of a hotel in the Rawatpur area, concealed inside the power adapters serving the televisions, with around 250 recordings recovered and several arrests made. A charger or adapter is the one object in a room that everybody plugs into and nobody inspects, so that is where we start rather than finish.",
    areas: [
      "Civil Lines & Mall Road",
      "Swaroop Nagar & Arya Nagar",
      "Kakadeo & Kalyanpur",
      "Govind Nagar & Kidwai Nagar",
      "Barra & Naubasta",
      "Panki & Dada Nagar",
      "Jajmau & Chakeri",
    ],
    metaDescription:
      "Bug sweeping services in Kanpur: TSCM sweeps for homes, offices, hotels and vehicles across the city and its industrial belts. Book a consultation.",
    areaGroups: [
      {
        zone: "Central Kanpur",
        areas: ["Civil Lines", "Mall Road", "Parade", "Chunniganj", "Gumti No 5", "Harsh Nagar", "Arya Nagar", "Swaroop Nagar", "Meston Road"],
      },
      {
        zone: "South Kanpur",
        areas: ["Govind Nagar", "Kidwai Nagar", "Barra", "Naubasta", "Yashoda Nagar", "Sarvodaya Nagar", "Shyam Nagar", "Hanspuram"],
      },
      {
        zone: "West Kanpur",
        areas: ["Kakadeo", "Kalyanpur", "Rawatpur", "Vikas Nagar", "Shastri Nagar", "Keshav Puram", "Gujaini", "Ratanpur"],
      },
      {
        zone: "East Kanpur",
        areas: ["Jajmau", "Chakeri", "Ashok Nagar", "Harjinder Nagar", "Defence Colony", "Tikra", "Kanpur Cantt"],
      },
      {
        zone: "Industrial belts",
        areas: ["Panki", "Panki Industrial Area", "Dada Nagar", "Fazalganj", "Jajmau tanneries", "Vijay Nagar", "Armapur"],
      },
      {
        zone: "Outer Kanpur",
        areas: ["Bithoor", "Mandhana", "Sachendi", "Bilhaur", "Ghatampur", "Chaubepur", "Narwal"],
      },
    ],
    jurisdiction: {
      heading: "A commissionerate, so the escalation ladder is different",
      body: [
        "Kanpur Nagar is policed as a commissionerate, which changes who you go to when a complaint stalls. Above the station house officer sits an assistant commissioner for the circle, then a deputy commissioner for the zone, the city being divided into east, west and south zones alongside separate crime and traffic wings, then the additional commissioners and the commissioner. Advice written for the rest of Uttar Pradesh, which tells you to approach a superintendent of police, is describing a structure the city no longer uses.",
        "Kanpur Dehat is a separate district with its own force, so it is worth checking which side of the line an address sits on. The industrial areas people ask about most, Panki, Dada Nagar and Jajmau, are inside Kanpur Nagar and therefore inside the commissionerate.",
        "Two reporting points matter here. Uttar Pradesh's e-FIR facility states on the portal itself that it is available only for cases with an unknown accused and non special report matters, so a complaint that names a hotel operator, a landlord or a former partner falls outside it and belongs at the police station. Kanpur does, however, have its own cyber police station listed in the state police's cyber index, which is the right desk for a recording or device matter alongside 1930 and the national portal.",
      ],
    },
    settings: [
      {
        title: "Hotels and guest rooms",
        desc: "Checks that start at the power adapters, chargers and fittings serving televisions and bedside points, which is where the reported local case concealed its cameras.",
      },
      {
        title: "Offices and industrial premises",
        desc: "Sweeps before a negotiation, a tender or a partnership discussion, in premises where contractors and maintenance staff hold routine access.",
      },
      {
        title: "Homes and rented flats",
        desc: "Checks at the start or end of a tenancy, or after a dispute, covering fittings, sockets, smoke detectors and anything a landlord installed himself.",
      },
      {
        title: "Vehicles",
        desc: "Vehicles left with a driver or at a workshop are checked underneath, at the bumpers and wheel arches, in the boot lining and at the diagnostic port.",
      },
    ],
    faqs: [
      {
        q: "Can I file an e-FIR in Kanpur for a hidden camera?",
        a: "Usually not. The Uttar Pradesh e-FIR portal states that the facility is only for cases with an unknown accused and non special report matters. A hidden camera complaint normally points at someone with access, so the report belongs at the police station. The state citizen portal's complaint service is a complaint rather than an FIR.",
      },
      {
        q: "My complaint is not moving. Who do I escalate to in Kanpur?",
        a: "Because Kanpur is a commissionerate, escalation runs from the station house officer to the assistant commissioner for the circle, then to the deputy commissioner for your zone, east, west or south, and upward to the additional commissioners and the commissioner. There is no superintendent of police in the city structure to write to.",
      },
      {
        q: "Does Kanpur have its own cyber police station?",
        a: "Yes. Kanpur appears with its own entry, including a published email address, in the Uttar Pradesh Police index of district cyber police stations. For a recording or device matter you can use that desk, and 1930 or the national cybercrime portal will route a complaint for you.",
      },
      {
        q: "Do you cover Panki, Dada Nagar and Jajmau?",
        a: "Yes, along with the rest of the city and the outer areas towards Bithoor and Mandhana. Those industrial belts sit inside Kanpur Nagar, so they fall under the commissionerate rather than the neighbouring district force, which matters if a device is found and a complaint follows.",
      },
    ],
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://www.bugsweepingtscm.com/locations/kanpur#webpage",
          url: "https://www.bugsweepingtscm.com/locations/kanpur",
          name: "Bug Sweeping Services in Kanpur",
          inLanguage: "en-IN",
          isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" },
          breadcrumb: { "@id": "https://www.bugsweepingtscm.com/locations/kanpur#breadcrumb" },
          about: { "@id": "https://www.bugsweepingtscm.com/locations/kanpur#place" },
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
          "@id": "https://www.bugsweepingtscm.com/locations/kanpur#place",
          name: "Kanpur",
          address: { "@type": "PostalAddress", addressLocality: "Kanpur", addressRegion: "Uttar Pradesh", addressCountry: "IN" },
        },
        {
          "@type": "Service",
          "@id": "https://www.bugsweepingtscm.com/locations/kanpur#service",
          name: "Bug sweeping and TSCM services in Kanpur",
          serviceType: "Technical surveillance countermeasures",
          provider: { "@id": "https://www.bugsweepingtscm.com/#organization" },
          areaServed: { "@id": "https://www.bugsweepingtscm.com/locations/kanpur#place" },
          mainEntityOfPage: { "@id": "https://www.bugsweepingtscm.com/locations/kanpur#webpage" },
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
          "@id": "https://www.bugsweepingtscm.com/locations/kanpur#breadcrumb",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.bugsweepingtscm.com" },
            { "@type": "ListItem", position: 2, name: "Locations", item: "https://www.bugsweepingtscm.com/locations/kanpur" },
            { "@type": "ListItem", position: 3, name: "Kanpur" },
          ],
        },
      ],
    },
  },
  {
    slug: "patna",
    city: "Patna",
    state: "Bihar",
    seoTitle: "Bug Sweeping Services in Patna | TSCM Sweeps",
    heroTitle: "Bug Sweeping Services in Patna",
    heroSubtitle:
      "TSCM bug sweeps for homes, offices, hostels and vehicles across Patna, from Gandhi Maidan and Boring Road to Kankarbagh, Danapur and Phulwari Sharif.",
    intro:
      "Patna runs on rented accommodation and coaching, alongside government and professional offices in the centre. Scope comes first, agreed with you before anything is booked. On site we run radio-frequency analysis, sweep surfaces with a non-linear junction detector so that a device left switched off still shows up, take optical and thermal readings, and inspect the room by hand",
    whyUs:
      "Student accommodation is the setting people ask about most here, and it is also where the rules changed recently. Elsewhere in Bihar, a camera was reported found above a geyser in a hostel bathroom, which is the sort of placement a glance around the room will never catch. We check fittings, fixtures and anything mounted high or recently replaced, and we document what we find in position before it is moved.",
    areas: [
      "Gandhi Maidan & Fraser Road",
      "Boring Road & Patliputra",
      "Kankarbagh & Rajendra Nagar",
      "Bailey Road & Ashiana Nagar",
      "Patna City & Agamkuan",
      "Danapur & Khagaul",
      "Phulwari Sharif & Bihta",
    ],
    metaDescription:
      "Bug sweeping services in Patna: TSCM sweeps for homes, offices, hostels and vehicles across the city and outskirts. Book a private consultation.",
    areaGroups: [
      {
        zone: "Central Patna",
        areas: ["Gandhi Maidan", "Fraser Road", "Exhibition Road", "Dak Bungalow", "Bankipore", "Kadamkuan", "Patna Junction area", "Buddha Colony"],
      },
      {
        zone: "West Patna",
        areas: ["Boring Road", "Boring Canal Road", "Patliputra Colony", "Rajiv Nagar", "Shastri Nagar", "Bailey Road", "Ashiana Nagar", "Rupaspur"],
      },
      {
        zone: "East Patna",
        areas: ["Kankarbagh", "Rajendra Nagar", "Bahadurpur", "Agamkuan", "Gulzarbagh", "Patna City", "Chowk", "Khajekalan"],
      },
      {
        zone: "Student and coaching belt",
        areas: ["Musallahpur Hat", "Bhikhna Pahari", "Mithapur", "Anisabad", "Jakkanpur", "Saidpur", "Machhua Toli"],
      },
      {
        zone: "Outer Patna",
        areas: ["Danapur", "Khagaul", "Phulwari Sharif", "Bihta", "Fatuha", "Masaurhi", "Naubatpur", "Bikram"],
      },
    ],
    jurisdiction: {
      heading: "There is no police commissioner in Patna",
      body: [
        "Patna is not a commissionerate. The district is led by a senior superintendent of police, with superintendents for the central, east, west and rural areas beneath, along with wings for traffic, crime and law and order. That means escalation runs from the station house officer to the sub-divisional police officer, then to the superintendent for your area and on to the senior superintendent. Guidance copied from Delhi, Lucknow or Kanpur, which tells you to approach a deputy commissioner, is describing an office Patna does not have.",
        "Patna does have its own cyber police station, listed with a published email address and mobile number in the district's own police directory, and Bihar notified a cyber police station in every district from 2023. For financial fraud, 1930 remains the fastest route, with the national cybercrime portal alongside it.",
        "Bihar has no e-FIR. The state citizen services portal lets you lodge an electronic complaint, download a copy of an FIR that already exists and request tenant, driver or domestic staff verification, but an online complaint is not an FIR, and a cognizable offence such as voyeurism is registered at the police station. One helpline correction worth making: 1090 is Uttar Pradesh's women's line and does not apply here. In Bihar the women's helpline is 181, with 112 for emergencies.",
      ],
    },
    settings: [
      {
        title: "Hostels and paying guest rooms",
        desc: "Since a police circular issued in February 2026, girls' hostels and lodges in Bihar are told to register, run cameras in entrances, corridors and dining areas with footage kept for thirty days, maintain a visitor register and have staff police-verified.",
      },
      {
        title: "Homes and rented flats",
        desc: "Checks at the start or end of a tenancy, or after a dispute, covering fittings, sockets, smoke detectors and anything mounted high or recently replaced.",
      },
      {
        title: "Offices and chambers",
        desc: "Sweeps before a negotiation, a tender discussion or a sensitive meeting, in premises where support staff and contractors hold routine access.",
      },
      {
        title: "Vehicles",
        desc: "A tracker check works through the underbody, wheel arches, bumpers and boot, and ends at the diagnostic port, where a powered unit can sit unnoticed.",
      },
    ],
    faqs: [
      {
        q: "Who do I escalate a complaint to in Patna?",
        a: "Patna is led by a senior superintendent of police rather than a commissioner, so escalation runs from the station house officer to the sub-divisional police officer, then the superintendent for the central, east, west or rural area, and then the senior superintendent. Advice telling you to write to a deputy commissioner is describing another city's structure.",
      },
      {
        q: "Can I file an FIR online in Patna?",
        a: "No. Bihar's citizen services portal takes an electronic complaint, lets you download an FIR that already exists and handles verifications, but there is no e-FIR facility in the state and an online complaint is not an FIR. For an offence such as voyeurism the report is made at the police station.",
      },
      {
        q: "What can I ask a Patna hostel to show me?",
        a: "Since a Bihar Police circular of February 2026, girls' hostels and lodges are directed to register with the competent authority, run cameras covering entrances, corridors and dining areas with footage retained for at least thirty days, keep a visitor register and have staff police-verified. Worth knowing: the Patna High Court has observed that the circular carries no penalty for non-compliance, so you may have to escalate rather than assume enforcement.",
      },
      {
        q: "Is 1090 the women's helpline in Bihar?",
        a: "No. 1090 is the Uttar Pradesh Women Power Line and does not apply in Bihar. The women's helpline here is 181, alongside 112 for emergencies, 1930 for cyber crime and 1098 for children. Patna district also publishes its own control room numbers.",
      },
    ],
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://www.bugsweepingtscm.com/locations/patna#webpage",
          url: "https://www.bugsweepingtscm.com/locations/patna",
          name: "Bug Sweeping Services in Patna",
          inLanguage: "en-IN",
          isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" },
          breadcrumb: { "@id": "https://www.bugsweepingtscm.com/locations/patna#breadcrumb" },
          about: { "@id": "https://www.bugsweepingtscm.com/locations/patna#place" },
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
          "@id": "https://www.bugsweepingtscm.com/locations/patna#place",
          name: "Patna",
          address: { "@type": "PostalAddress", addressLocality: "Patna", addressRegion: "Bihar", addressCountry: "IN" },
        },
        {
          "@type": "Service",
          "@id": "https://www.bugsweepingtscm.com/locations/patna#service",
          name: "Bug sweeping and TSCM services in Patna",
          serviceType: "Technical surveillance countermeasures",
          provider: { "@id": "https://www.bugsweepingtscm.com/#organization" },
          areaServed: { "@id": "https://www.bugsweepingtscm.com/locations/patna#place" },
          mainEntityOfPage: { "@id": "https://www.bugsweepingtscm.com/locations/patna#webpage" },
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
          "@id": "https://www.bugsweepingtscm.com/locations/patna#breadcrumb",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.bugsweepingtscm.com" },
            { "@type": "ListItem", position: 2, name: "Locations", item: "https://www.bugsweepingtscm.com/locations/patna" },
            { "@type": "ListItem", position: 3, name: "Patna" },
          ],
        },
      ],
    },
  },
  {
    slug: "visakhapatnam",
    city: "Visakhapatnam",
    state: "Andhra Pradesh",
    seoTitle: "Bug Sweeping Services in Visakhapatnam | TSCM Sweeps",
    heroTitle: "Bug Sweeping Services in Visakhapatnam",
    heroSubtitle:
      "TSCM bug sweeps for offices, homes, hostels and vehicles across Visakhapatnam, from Dwaraka Nagar and Rushikonda to Gajuwaka and the industrial belt.",
    intro:
      "Visakhapatnam runs a port, a steel plant, a pharmaceutical belt and a growing corporate corridor, alongside a large student and hostel population. Scope is agreed with you at the outset. We then work the space with radio-frequency analysis, a non-linear junction detector that picks up electronics even when they are switched off, optical and thermal checks, and a close hands-on inspection",
    whyUs:
      "One local episode is worth knowing precisely because nothing was found. In July 2025, within Dwaraka police station limits, a group confronted and assaulted four men at a lodge beside a girls' hostel over an allegation of covert filming. Police examined the phones and the assistant commissioner stated plainly that no evidence was found; the matter was treated as a miscommunication and no case was registered. Suspicion is not evidence. A documented sweep either gives you something a police officer can act on or clears the room, and both outcomes are better than a confrontation.",
    areas: [
      "Dwaraka Nagar & Siripuram",
      "MVP Colony & Seethammadhara",
      "Rushikonda & Madhurawada",
      "Gajuwaka & Steel Plant area",
      "Duvvada & Kurmannapalem",
      "Beach Road & Lawson's Bay",
      "Pendurthi & Anandapuram",
    ],
    metaDescription:
      "Bug sweeping services in Visakhapatnam: TSCM sweeps for offices, homes, hostels and vehicles across the city and its industrial belt. Book a consultation.",
    areaGroups: [
      {
        zone: "Central Visakhapatnam",
        areas: ["Dwaraka Nagar", "Siripuram", "Asilmetta", "Jagadamba", "Daba Gardens", "Allipuram", "Maharanipeta", "Ram Nagar"],
      },
      {
        zone: "North and beach side",
        areas: ["MVP Colony", "Seethammadhara", "Lawson's Bay Colony", "Beach Road", "Kailasagiri", "Rushikonda", "Madhurawada", "Yendada"],
      },
      {
        zone: "West Visakhapatnam",
        areas: ["Akkayyapalem", "Gopalapatnam", "NAD Junction", "Marripalem", "Kancharapalem", "Simhachalam", "Adavivaram"],
      },
      {
        zone: "South and industrial",
        areas: ["Gajuwaka", "Steel Plant township", "Kurmannapalem", "Duvvada", "Aganampudi", "Malkapuram", "Scindia", "Port area"],
      },
      {
        zone: "Outer belt",
        areas: ["Pendurthi", "Anandapuram", "Bheemili", "Sabbavaram", "Parawada", "Atchutapuram", "Rambilli", "Vizianagaram road"],
      },
    ],
    jurisdiction: {
      heading: "Two things Visakhapatnam pages usually get wrong",
      body: [
        "The first is jurisdiction on the industrial side. Visakhapatnam City Police is a commissionerate with its office at Police Barracks, Suryabagh, and it covers the corporation area including Gajuwaka, the steel plant side, Duvvada, Rushikonda and Madhurawada. But after the April 2022 district reorganisation, the pharma and SEZ belt sits outside it: Atchutapuram, Rambilli, Parawada and Sabbavaram fall to the neighbouring district force. A plant manager at Atchutapuram who rings the city commissionerate is in the wrong queue on the one day that matters.",
        "The second is the Disha framework, which a great many pages still cite. The Andhra Pradesh Disha Bill never received Presidential assent, and the state cabinet withdrew it in August 2026 after the home ministry advised that the Bharatiya Nyaya Sanhita and Bharatiya Nagarik Suraksha Sanhita already cover the ground. The Disha SOS app has been rebranded as the SHAKTHI app, which sends a short audio and video clip with your location to the control room when the SOS is pressed. The Disha Mahila police stations, including the one opened in Visakhapatnam in 2020, continue to function. So the stations and the app are real; the Act is not.",
        "On reporting, the state citizen portal offers lodging a petition and checking its status, which is not the same as registering an FIR, and we could find no official page describing an AP e-FIR for this kind of complaint. Plan on attending the police station. The city's cyber crime police station is active but the funnel is narrow: press reporting for January to August 2026 put it at more than a thousand complaints producing around a hundred and forty FIRs. What you can document decides which side of that ratio you land on. The district administration publishes 181 as the women's helpline here, alongside 112 for emergencies and 1930 for cyber crime.",
      ],
    },
    settings: [
      {
        title: "Corporate and port offices",
        desc: "Timed ahead of a negotiation, a tender discussion or a change of partners, and planned around who else holds a key to the room.",
      },
      {
        title: "Industrial and SEZ premises",
        desc: "Checks across meeting rooms, cabins and vehicle bays. Worth confirming which force covers the address before anything is found.",
      },
      {
        title: "Hostels and paying guest rooms",
        desc: "Andhra Pradesh publishes no hostel registration or camera rule that we could verify, so there is no compliance record to fall back on. A sweep is the check that actually exists.",
      },
      {
        title: "Homes, rented flats and vehicles",
        desc: "Checks after a tenancy change or a dispute, covering fittings, vents and sockets, plus tracker checks on the underbody, wheel arches, boot and diagnostic port.",
      },
    ],
    faqs: [
      {
        q: "Is Atchutapuram or Parawada covered by Visakhapatnam City Police?",
        a: "No. After the April 2022 district reorganisation, Atchutapuram, Rambilli, Parawada and Sabbavaram fall to the neighbouring district force rather than the city commissionerate. Gajuwaka, the steel plant area, Duvvada, Rushikonda and Madhurawada are inside the corporation and are city police areas.",
      },
      {
        q: "Can I still invoke the Disha Act in Visakhapatnam?",
        a: "No. The Disha Bill never received Presidential assent and the state cabinet withdrew it in August 2026, after the home ministry advised that the Bharatiya Nyaya Sanhita and Bharatiya Nagarik Suraksha Sanhita cover the same ground. The Disha Mahila police stations still function and the SOS app now runs as the SHAKTHI app.",
      },
      {
        q: "Does a complaint to the Visakhapatnam cyber crime police station become an FIR?",
        a: "Not automatically. Press reporting for January to August 2026 put the station at more than a thousand complaints producing around a hundred and forty FIRs. Evidence quality is what moves a complaint across that line, which is why a sweep report that records where a device was found matters more than a description of what you suspect.",
      },
      {
        q: "Which helpline should a woman in Visakhapatnam use?",
        a: "The district administration lists 181 as the women's helpline, with 112 for emergencies, 100 for police, 1930 for cyber financial fraud and 1098 for children. The number used in Tamil Nadu and Maharashtra is not the one published here, so advice copied from another state may send you to the wrong line.",
      },
    ],
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        { "@type": "WebPage", "@id": "https://www.bugsweepingtscm.com/locations/visakhapatnam#webpage", url: "https://www.bugsweepingtscm.com/locations/visakhapatnam", name: "Bug Sweeping Services in Visakhapatnam", inLanguage: "en-IN", isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" }, breadcrumb: { "@id": "https://www.bugsweepingtscm.com/locations/visakhapatnam#breadcrumb" }, about: { "@id": "https://www.bugsweepingtscm.com/locations/visakhapatnam#place" } },
        { "@type": "WebSite", "@id": "https://www.bugsweepingtscm.com/#website", url: "https://www.bugsweepingtscm.com", name: "BugSweepingTSCM.com", publisher: { "@id": "https://www.bugsweepingtscm.com/#organization" }, inLanguage: "en-IN" },
        { "@type": "Place", "@id": "https://www.bugsweepingtscm.com/locations/visakhapatnam#place", name: "Visakhapatnam", address: { "@type": "PostalAddress", addressLocality: "Visakhapatnam", addressRegion: "Andhra Pradesh", addressCountry: "IN" } },
        { "@type": "Service", "@id": "https://www.bugsweepingtscm.com/locations/visakhapatnam#service", name: "Bug sweeping and TSCM services in Visakhapatnam", serviceType: "Technical surveillance countermeasures", provider: { "@id": "https://www.bugsweepingtscm.com/#organization" }, areaServed: { "@id": "https://www.bugsweepingtscm.com/locations/visakhapatnam#place" }, mainEntityOfPage: { "@id": "https://www.bugsweepingtscm.com/locations/visakhapatnam#webpage" } },
        { "@type": "Organization", "@id": "https://www.bugsweepingtscm.com/#organization", name: "BugSweepingTSCM", url: "https://www.bugsweepingtscm.com", logo: "https://www.bugsweepingtscm.com/images/logo/bug-sweep.png", email: "bugsweepingtscm@gmail.com", telephone: "+91-8882732221" },
        { "@type": "BreadcrumbList", "@id": "https://www.bugsweepingtscm.com/locations/visakhapatnam#breadcrumb", itemListElement: [ { "@type": "ListItem", position: 1, name: "Home", item: "https://www.bugsweepingtscm.com" }, { "@type": "ListItem", position: 2, name: "Locations", item: "https://www.bugsweepingtscm.com/locations/visakhapatnam" }, { "@type": "ListItem", position: 3, name: "Visakhapatnam" } ] },
      ],
    },
  },
  {
    slug: "coimbatore",
    city: "Coimbatore",
    state: "Tamil Nadu",
    seoTitle: "Bug Sweeping Services in Coimbatore | TSCM Sweeps",
    heroTitle: "Bug Sweeping Services in Coimbatore",
    heroSubtitle:
      "TSCM bug sweeps for offices, factories, hostels, homes and vehicles across Coimbatore, from RS Puram and Peelamedu to Saravanampatti and the outer belts.",
    intro:
      "Coimbatore mixes engineering and textile manufacturing with an information technology corridor and a very large student population in hostels and shared accommodation. We fix the scope with you before the visit. The sweep uses radio-frequency analysis for anything transmitting, a non-linear junction detector for electronics sitting dormant, optical and thermal checks, and a methodical physical search of fittings, vents and furniture",
    whyUs:
      "The district's most serious documented case was about recording used as leverage. In the Pollachi case, a group filmed assaults and used the footage to extort money and further compliance; after a central investigation, the Mahila Court in Coimbatore convicted nine men in May 2025 and sentenced them to imprisonment for the remainder of their lives, with compensation ordered for eight survivors. Recording is often not the end in itself, which is why we document what is found in position rather than simply removing it.",
    areas: [
      "RS Puram & Gandhipuram",
      "Peelamedu & Hopes College",
      "Saravanampatti & Kalapatti",
      "Vadavalli & Thudiyalur",
      "Singanallur & Ondipudur",
      "Kuniyamuthur & Kurichi",
      "Race Course & Avinashi Road",
    ],
    metaDescription:
      "Bug sweeping services in Coimbatore: TSCM sweeps for offices, factories, hostels, homes and vehicles across the city. Book a private consultation.",
    areaGroups: [
      {
        zone: "Central Coimbatore",
        areas: ["RS Puram", "Gandhipuram", "Town Hall", "Race Course", "Tatabad", "Sai Baba Colony", "Ram Nagar", "Sivananda Colony"],
      },
      {
        zone: "East Coimbatore",
        areas: ["Peelamedu", "Hopes College", "Avinashi Road", "Singanallur", "Ondipudur", "Ganapathy", "Uppilipalayam", "Nava India"],
      },
      {
        zone: "North Coimbatore",
        areas: ["Saravanampatti", "Kalapatti", "Thudiyalur", "Vellakinar", "Chinnavedampatti", "Vilankurichi", "Kavundampalayam", "Kovilpalayam"],
      },
      {
        zone: "West Coimbatore",
        areas: ["Vadavalli", "Veerakeralam", "Thondamuthur road", "Perur", "Selvapuram", "Podanur", "Ukkadam"],
      },
      {
        zone: "South and district",
        areas: ["Kuniyamuthur", "Kurichi", "Sundarapuram", "Madukkarai", "Pollachi", "Annur", "Sulur", "Karamadai"],
      },
    ],
    jurisdiction: {
      heading: "A new helpline, a complaint that is not an FIR, and a licence without cameras",
      body: [
        "Start with the number that changed this year. Tamil Nadu's police policy note records that 1091 is the dedicated line for the Singappen Special Task Force, launched across the state on 9 June 2026 and integrated with the 112 emergency system, with seventy field units operating statewide. This is not a Chennai-only arrangement, and pages written before mid-2026 will not mention it. The state's own emergency list does not include the 181 number that serves as a women's police line in some other states; in Tamil Nadu that sits with social welfare rather than the police.",
        "Second, what an online complaint actually is. The citizen services portal lets you register a complaint, check its status, and view FIR or community service register details, and the policy note lists a registered online complaint, the status of a community service register and the status of an FIR as three separate services. A community service register entry is what a non-cognizable matter produces. Voyeurism is cognizable, so a covert recording complaint means attending the police station, and the case gets registered on the upgraded records system that went live across Tamil Nadu in February 2026.",
        "Third, jurisdiction and hostels. Coimbatore City is one of nine commissionerates in the state and has its own cyber crime police station, one of the fifty four the policy note lists, which include one for each police district and one for each commissionerate; the city office is on Huzur Road at Uppilipalayam. Pollachi and the outer taluks are district police under a separate superintendent, Tiruppur is its own commissionerate, and railway premises fall to the railway police district rather than the city. On accommodation, two separate things are often run together. The Tamil Nadu Hostels and Homes for Women and Children (Regulation) Act 2014 requires a licence from the Collector for hostels housing women or children; since an amendment in May 2025 the application is online and the licence runs ten years rather than three. That licensing regime says nothing about cameras: they appear only as a self-declared line on the security annexure, with no minimum, no specification and no retention period. Separately, and this is the part worth knowing, an amendment in force since January 2025 places a statutory duty on whoever is in charge of a hostel, hotel, restaurant, cinema, mall, hospital or any other precinct to take steps including installing cameras to prevent harassment of a woman, and to inform the police within twenty four hours of a complaint. So there is a duty, but it sets no standard, and neither the duty nor the licence tells you anything about a device someone has hidden inside a room.",
      ],
    },
    settings: [
      {
        title: "Manufacturing and engineering units",
        desc: "Sweeps covering meeting rooms, cabins and vehicle bays where design, pricing or supplier information is discussed.",
      },
      {
        title: "Offices and the IT corridor",
        desc: "Checks before a negotiation, a client visit or a partnership change, in premises where contractors and support staff hold routine access.",
      },
      {
        title: "Hostels and paying guest rooms",
        desc: "Ask to see the licence, which comes from the Collector and now runs ten years. Cameras on it are self-declared with no specification, so a licence tells you nothing about what is inside a room.",
      },
      {
        title: "Homes, rented flats and vehicles",
        desc: "Checks after a tenancy change or a dispute, plus tracker checks covering the underbody, wheel arches, bumpers, boot and the diagnostic port.",
      },
    ],
    faqs: [
      {
        q: "What is the women's helpline in Coimbatore?",
        a: "1091, which now reaches the Singappen Special Task Force launched across Tamil Nadu on 9 June 2026 and integrated with the 112 emergency system. Tamil Nadu's official police helpline list does not carry the 181 number used elsewhere; in this state that line sits with social welfare rather than the police. Use 1930 for cyber crime.",
      },
      {
        q: "Can I report a hidden camera online in Coimbatore?",
        a: "You can register a complaint online, but that is not an FIR. The state's own service list treats a registered online complaint, a community service register entry and an FIR as three different things, and a community service register entry is what a non-cognizable matter produces. Voyeurism is cognizable, so plan on attending the police station.",
      },
      {
        q: "Is Pollachi covered by Coimbatore City Police?",
        a: "No. Pollachi and the outer taluks are district police under a separate superintendent, Tiruppur is its own commissionerate, and railway premises fall to the railway police district. This is the norm in Tamil Nadu rather than a quirk: in eight of the nine commissionerate cities the city and the surrounding district are two different forces, and only Chennai is policed as one. The city limits expanded in 2011 to take in Saravanampatti, Kalapatti, Thudiyalur, Vadavalli, Kuniyamuthur and others, so check which station covers your street rather than assuming.",
      },
      {
        q: "Are hostels in Coimbatore required to install CCTV?",
        a: "Not by the licence. Under the Tamil Nadu Hostels and Homes for Women and Children (Regulation) Act 2014 the licence comes from the Collector and, since a May 2025 amendment, runs ten years, and cameras on it are self-declared with no specification or retention period. A separate state amendment in force since January 2025 does place a duty on the person in charge of a hostel to take steps including installing cameras to prevent harassment of a woman, but it sets no standard for them. Either way, cameras at the entrance say nothing about a device hidden in a room.",
      },
    ],
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        { "@type": "WebPage", "@id": "https://www.bugsweepingtscm.com/locations/coimbatore#webpage", url: "https://www.bugsweepingtscm.com/locations/coimbatore", name: "Bug Sweeping Services in Coimbatore", inLanguage: "en-IN", isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" }, breadcrumb: { "@id": "https://www.bugsweepingtscm.com/locations/coimbatore#breadcrumb" }, about: { "@id": "https://www.bugsweepingtscm.com/locations/coimbatore#place" } },
        { "@type": "WebSite", "@id": "https://www.bugsweepingtscm.com/#website", url: "https://www.bugsweepingtscm.com", name: "BugSweepingTSCM.com", publisher: { "@id": "https://www.bugsweepingtscm.com/#organization" }, inLanguage: "en-IN" },
        { "@type": "Place", "@id": "https://www.bugsweepingtscm.com/locations/coimbatore#place", name: "Coimbatore", address: { "@type": "PostalAddress", addressLocality: "Coimbatore", addressRegion: "Tamil Nadu", addressCountry: "IN" } },
        { "@type": "Service", "@id": "https://www.bugsweepingtscm.com/locations/coimbatore#service", name: "Bug sweeping and TSCM services in Coimbatore", serviceType: "Technical surveillance countermeasures", provider: { "@id": "https://www.bugsweepingtscm.com/#organization" }, areaServed: { "@id": "https://www.bugsweepingtscm.com/locations/coimbatore#place" }, mainEntityOfPage: { "@id": "https://www.bugsweepingtscm.com/locations/coimbatore#webpage" } },
        { "@type": "Organization", "@id": "https://www.bugsweepingtscm.com/#organization", name: "BugSweepingTSCM", url: "https://www.bugsweepingtscm.com", logo: "https://www.bugsweepingtscm.com/images/logo/bug-sweep.png", email: "bugsweepingtscm@gmail.com", telephone: "+91-8882732221" },
        { "@type": "BreadcrumbList", "@id": "https://www.bugsweepingtscm.com/locations/coimbatore#breadcrumb", itemListElement: [ { "@type": "ListItem", position: 1, name: "Home", item: "https://www.bugsweepingtscm.com" }, { "@type": "ListItem", position: 2, name: "Locations", item: "https://www.bugsweepingtscm.com/locations/coimbatore" }, { "@type": "ListItem", position: 3, name: "Coimbatore" } ] },
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
