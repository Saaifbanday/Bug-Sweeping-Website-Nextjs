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
      "Mumbai is India's financial capital and the city most frequently targeted by corporate surveillance. With the highest concentration of high-net-worth individuals, multinational boardrooms, and high-stakes business negotiations in the country, Mumbai's executives and professionals face a surveillance threat that is both sophisticated and constant. Our TSCM technicians operate across the city, providing same-day emergency sweeps and advance bookings with complete discretion.",
    whyUs:
      "Our Mumbai-based deployments cover the full range of TSCM services: corporate boardroom sweeps before mergers and acquisitions, residential sweeps for HNI clients in South Mumbai and Bandra, vehicle GPS sweeps for C-suite executives, and telephone line analysis for offices in BKC and Lower Parel. We arrive in unmarked vehicles, complete the sweep without disrupting your operations, and provide a written report on the same day.",
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
      "Professional bug sweeping & TSCM services in Mumbai. Hidden camera, listening device & GPS tracker detection for offices, homes & vehicles. Certified specialists. Call +91 888 273 2221.",
  },
  {
    slug: "delhi",
    city: "Delhi",
    state: "NCR",
    heroTitle: "Bug Sweeping Services in Delhi & NCR",
    heroSubtitle:
      "India's most trusted TSCM specialists available across New Delhi, Gurgaon, Noida, and Faridabad. Discreet, certified bug sweep services for government, corporate, and private clients.",
    intro:
      "Delhi NCR is home to the highest concentration of government offices, diplomatic missions, and corporate headquarters in India. The region's political and economic significance makes it a prime target for sophisticated surveillance operations. Our TSCM team has extensive experience in the region, with particular expertise in sweeping ministerial offices, corporate towers, five-star hotel suites, and executive residences.",
    whyUs:
      "Clients across Delhi NCR trust us because we understand the specific threat environment of the capital, ranging from foreign-intelligence-grade equipment to commercially available GSM bugs. Every sweep is conducted by certified technicians using REI spectrum analysers, NLJDs, and thermal cameras. We maintain a rapid-response deployment capability for Delhi NCR, with technicians available on short notice for urgent sweeps.",
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
      "Bug sweeping & TSCM services in Delhi NCR. Certified specialists detect hidden cameras, listening devices & GPS trackers in offices, homes & vehicles. Call +91 888 273 2221.",
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
      "Bug sweeping & TSCM services in Bengaluru. Certified specialists for tech companies, offices & homes. Hidden device detection & GPS tracker sweeps. Call +91 888 273 2221.",
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
      "Our Chandigarh Tricity deployments cover residential sweeps for HNI clients across Sector neighbourhoods, corporate office sweeps in Mohali's IT Park and industrial areas, and vehicle GPS sweeps for clients who have reason to believe they are being tracked. We operate with the same discretion and professionalism as our Metro deployments, and all engagements are covered by strict NDA.",
    areas: [
      "Chandigarh Sectors (1–62)",
      "Mohali (Phase 1–11, IT Park, Aerocity)",
      "Panchkula (Sectors 1–25)",
      "Zirakpur & Kharar",
      "Derabassi & Dera Bassi",
      "SAS Nagar (Mohali) industrial areas",
    ],
    metaDescription:
      "Bug sweeping & TSCM services in Chandigarh, Mohali & Panchkula. Certified specialists for offices, homes & vehicles. Call +91 888 273 2221.",
  },
];
