// State hub pages. These carry the state-level layer that a single city page cannot:
// how policing is organised across the state, what the state lets you report online,
// which helplines the state actually publishes, and any state rule on accommodation.
// They also name the districts and towns that are too small for a page of their own.
export interface StateData {
  slug: string;
  state: string;
  seoTitle: string;
  heroTitle: string;
  heroSubtitle: string;
  metaDescription: string;
  intro: string;
  /** Who polices what across the state, and where the boundaries catch people out. */
  policing: { heading: string; body: string[] };
  /** What can and cannot be filed online here, and the helplines the state publishes. */
  reporting: { heading: string; body: string[] };
  /** Any state rule on hotels, lodges, paying guest accommodation or hostels. */
  accommodation?: { heading: string; body: string[] };
  /** Districts with their principal towns. This is where the long tail of place names lives. */
  districts: { district: string; towns: string[] }[];
  /** Slugs of city pages in this state, linked as the deeper reads. */
  cityPages: string[];
  faqs: { q: string; a: string }[];
}

export const states: StateData[] = [
  {
    slug: "tamil-nadu",
    state: "Tamil Nadu",
    seoTitle: "Bug Sweeping Services in Tamil Nadu | TSCM Sweeps",
    heroTitle: "Bug Sweeping Services in Tamil Nadu",
    heroSubtitle:
      "TSCM bug sweeps across Tamil Nadu, with the state level detail that decides who takes your complaint and what you can actually file.",
    metaDescription:
      "Bug sweeping services across Tamil Nadu: TSCM sweeps district by district, with the state's policing structure, reporting rules and hostel law explained.",
    intro:
      "Tamil Nadu publishes more about its own policing than most states do, which works in your favour on the day something is found: the structure, the station numbers and the helpline list are all set out in the state's annual policy note, so it is usually possible to establish who takes a complaint before you make it. The sweep itself does not change from place to place. It combines radio-frequency analysis for anything transmitting, a non-linear junction detector that picks up electronics left switched off, optical and thermal checks, and a physical inspection of the places a device can be concealed. What this page adds is the layer around that work.",
    policing: {
      heading: "Nine commissionerates, and in eight of them the city and the district are different forces",
      body: [
        "Tamil Nadu is policed as nine commissionerates alongside thirty seven police districts, with two railway police districts on top and two hundred and seventy seven sub-divisions beneath. The commissionerates are Greater Chennai, Tambaram, Avadi, Tiruchirappalli, Coimbatore, Salem, Madurai, Tirunelveli and Tiruppur. If your address is not inside one of those nine, it sits in a police district under a superintendent, and the chain of command above your station officer is a different one.",
        "The detail that costs people a day is this: in eight of those nine cities, the city force and the surrounding district are separate, each with its own head. Coimbatore city and Coimbatore district are not the same force. Only Chennai is policed as a single unit, and even there the metropolitan area splits three ways, because Tambaram and Avadi were carved out of the old Greater Chennai area and now stand on their own. Tiruppur is its own commissionerate rather than part of Coimbatore, which surprises people who think of the two cities as one industrial belt. Railway premises anywhere in the state belong to a railway police district rather than the local force, so an incident on a platform is not a matter for the city police outside.",
        "Cyber coverage is unusually deep. The policy note lists fifty four cyber crime police stations, made up of one for each police district, one for each commissionerate, three specialised stations attached to the wings handling crimes against women and children, economic offences and the crime branch, and four zonal stations inside Chennai city. The State Cyber Crime Investigation Centre sits at the Cyber Crime Wing headquarters in Chennai and takes cases where jurisdiction cannot be established, which is often exactly the position you are in when a recording surfaces online and nobody can say where it was made.",
      ],
    },
    reporting: {
      heading: "An online complaint here is not an FIR, and the women's helpline is 1091",
      body: [
        "Start with the number, because this one changed recently. Tamil Nadu notified 1091 as the line for the Singappen Special Task Force, launched across the state on 9 June 2026 and integrated with the 112 emergency system, with seventy field units operating statewide. It is the same 1091 that the state's helpline list has long carried as the women's helpline, now with that force behind it. Any guidance written before the middle of 2026 will not mention the change, and anything telling you 1091 is a Chennai arrangement is wrong.",
        "The number that does not apply here is 181. Several states use it as their women's helpline. In Tamil Nadu it does not appear on the police emergency list at all, because it belongs to social welfare rather than the police. The list the state actually publishes runs 100 for the control room, 112 for emergencies, 1091 for women, 1098 for children, 1930 for cyber financial fraud, 103 for traffic violations, 108 for ambulance, 1093 for coastal security, 1512 for the railway police, 10581 for prohibition and drug matters, 1800 180 5522 for anti-ragging and 94999 57575 for the senior citizens line.",
        "Then the part that catches most people. You can register a complaint online through the state citizen services portal, check its status and view FIR details, but the state's own service list treats a registered online complaint, a community service register entry and an FIR as three separate things. A community service register entry is what a non-cognizable matter produces, and it is not an FIR. Voyeurism under the Bharatiya Nyaya Sanhita is cognizable, so a covert recording complaint is not something you finish from a laptop: it is made at the police station, and since February 2026 it is registered on the upgraded records system now used in every station in the state.",
      ],
    },
    accommodation: {
      heading: "There is a real camera duty here, and a hostel licence that says nothing about cameras",
      body: [
        "Two separate things get run together constantly, and the difference matters. The first is a genuine statutory duty. Since January 2025, an amendment to the state's harassment law has required whoever is in charge of an educational institution, hostel, place of worship, cinema, hotel, restaurant, hospital, mall or any other precinct to take steps including installing cameras to prevent harassment of a woman within that precinct, and, once a complaint is made, to inform the police within twenty four hours. The fine for breach was raised to fifty thousand rupees. That catch-all phrase, any other precinct, is broad enough to reach lodges, paying guest accommodation and offices.",
        "What the duty does not do is set a standard. It prescribes no retention period, no resolution, no placement and no coverage, and no rules have been made under it, so there is no camera specification anywhere in Tamil Nadu law. It is a duty to take steps, enforced through a fine, not a technical standard you can hold a hotel to. Its practical value to you is the second limb rather than the first: if you report a device and the premises stall, that twenty four hour reporting duty is a lever.",
        "The second thing is hostel licensing, and it is narrower than people assume. The Tamil Nadu Hostels and Homes for Women and Children (Regulation) Act 2014 covers buildings providing accommodation for women or children. It is not a hotels law. The licence comes from the district Collector, not the police, and an amendment in May 2025 moved applications online and extended the licence from three years to ten, at a fee of ten thousand rupees. Cameras survive in that regime only as a self-declared line on a security annexure, asking how many there are and where, alongside a visitor logbook and an emergency exit plan. The licence conditions themselves do not mention cameras at all. So a licensed hostel may have none, and one that does has chosen their positions itself. Neither tells you anything about a device hidden inside a room.",
        "We found no advisory from Tamil Nadu Police specifically about hidden or spy cameras in hotels, hostels, trial rooms or washrooms. Where a state has issued one we say so. Here there is none to point you at.",
      ],
    },
    cityPages: ["chennai", "coimbatore"],
    districts: [
      { district: "Chennai", towns: ["Chennai"] },
      { district: "Chengalpattu", towns: ["Chengalpattu", "Tambaram", "Maraimalai Nagar", "Mamallapuram", "Sriperumbudur"] },
      { district: "Tiruvallur", towns: ["Tiruvallur", "Avadi", "Ponneri", "Gummidipoondi", "Tiruttani", "Poonamallee"] },
      { district: "Kancheepuram", towns: ["Kancheepuram", "Uthiramerur", "Walajabad"] },
      { district: "Coimbatore", towns: ["Coimbatore", "Mettupalayam", "Pollachi", "Valparai", "Annur"] },
      { district: "Tiruppur", towns: ["Tiruppur", "Udumalaipettai", "Palladam", "Avinashi", "Dharapuram", "Kangeyam"] },
      { district: "Erode", towns: ["Erode", "Gobichettipalayam", "Bhavani", "Sathyamangalam", "Perundurai", "Chennimalai"] },
      { district: "Salem", towns: ["Salem", "Mettur", "Attur", "Sankari", "Omalur", "Edappadi"] },
      { district: "Namakkal", towns: ["Namakkal", "Rasipuram", "Tiruchengode", "Kumarapalayam", "Paramathi Velur"] },
      { district: "Dharmapuri", towns: ["Dharmapuri", "Harur", "Palacode", "Pennagaram"] },
      { district: "Krishnagiri", towns: ["Krishnagiri", "Hosur", "Denkanikottai", "Bargur"] },
      { district: "Tirupathur", towns: ["Tirupathur", "Vaniyambadi", "Ambur", "Jolarpettai", "Natrampalli"] },
      { district: "Vellore", towns: ["Vellore", "Katpadi", "Gudiyatham", "Pernambut", "Anaicut"] },
      { district: "Ranipet", towns: ["Ranipet", "Arakkonam", "Walajapet", "Arcot", "Sholingur"] },
      { district: "Tiruvannamalai", towns: ["Tiruvannamalai", "Arani", "Cheyyar", "Polur", "Chengam", "Vandavasi"] },
      { district: "Viluppuram", towns: ["Viluppuram", "Tindivanam", "Gingee", "Vikravandi"] },
      { district: "Kallakurichi", towns: ["Kallakurichi", "Chinnasalem", "Ulundurpet", "Sankarapuram"] },
      { district: "Cuddalore", towns: ["Cuddalore", "Chidambaram", "Neyveli", "Virudhachalam", "Panruti"] },
      { district: "Mayiladuthurai", towns: ["Mayiladuthurai", "Sirkali", "Tharangambadi", "Kuthalam"] },
      { district: "Nagapattinam", towns: ["Nagapattinam", "Velankanni", "Kilvelur", "Vedaranyam"] },
      { district: "Thiruvarur", towns: ["Thiruvarur", "Mannargudi", "Thiruthuraipoondi", "Needamangalam", "Kodavasal"] },
      { district: "Thanjavur", towns: ["Thanjavur", "Kumbakonam", "Pattukkottai", "Papanasam", "Orathanadu"] },
      { district: "Tiruchirappalli", towns: ["Tiruchirappalli", "Srirangam", "Manapparai", "Musiri", "Lalgudi", "Thuraiyur"] },
      { district: "Perambalur", towns: ["Perambalur", "Kunnam", "Veppanthattai"] },
      { district: "Ariyalur", towns: ["Ariyalur", "Jayankondam", "Sendurai"] },
      { district: "Karur", towns: ["Karur", "Kulithalai", "Krishnarayapuram", "Aravakurichi"] },
      { district: "Pudukkottai", towns: ["Pudukkottai", "Aranthangi", "Alangudi", "Ponnamaravathi", "Iluppur"] },
      { district: "Sivaganga", towns: ["Sivaganga", "Karaikudi", "Devakottai", "Manamadurai", "Ilayangudi"] },
      { district: "Madurai", towns: ["Madurai", "Usilampatti", "Melur", "Thirumangalam", "Sholavandan"] },
      { district: "Theni", towns: ["Theni", "Bodinayakanur", "Cumbum", "Periyakulam", "Andipatti"] },
      { district: "Dindigul", towns: ["Dindigul", "Palani", "Kodaikanal", "Oddanchatram", "Batlagundu"] },
      { district: "Ramanathapuram", towns: ["Ramanathapuram", "Rameswaram", "Paramakudi", "Kamuthi", "Mandapam"] },
      { district: "Virudhunagar", towns: ["Virudhunagar", "Sivakasi", "Rajapalayam", "Srivilliputhur", "Aruppukkottai", "Sattur"] },
      { district: "Tenkasi", towns: ["Tenkasi", "Sankarankoil", "Courtallam", "Kadayanallur", "Shenkottai"] },
      { district: "Tirunelveli", towns: ["Tirunelveli", "Palayamkottai", "Ambasamudram", "Nanguneri", "Cheranmadevi"] },
      { district: "Thoothukudi", towns: ["Thoothukudi", "Kovilpatti", "Tiruchendur", "Srivaikuntam", "Sathankulam"] },
      { district: "Kanniyakumari", towns: ["Nagercoil", "Marthandam", "Colachel", "Kuzhithurai", "Kanniyakumari"] },
      { district: "The Nilgiris", towns: ["Udhagamandalam", "Coonoor", "Kotagiri", "Gudalur", "Kethi"] },
    ],
    faqs: [
      {
        q: "Which police force covers my address in Tamil Nadu?",
        a: "Nine areas are commissionerates: Greater Chennai, Tambaram, Avadi, Tiruchirappalli, Coimbatore, Salem, Madurai, Tirunelveli and Tiruppur. Everywhere else is one of thirty seven police districts under a superintendent. In eight of the nine cities the city force and the surrounding district are separate, and the Chennai metropolitan area splits three ways, so confirm the station before you report anything.",
      },
      {
        q: "Is 181 the women's helpline in Tamil Nadu?",
        a: "No. It does not appear on the Tamil Nadu Police emergency helpline list, because in this state it sits with social welfare rather than the police. The police line is 1091, which is both the published women's helpline and, since 9 June 2026, the number for the Singappen Special Task Force, integrated with 112.",
      },
      {
        q: "Can I report a hidden camera online in Tamil Nadu?",
        a: "You can lodge a complaint online, but that is not an FIR. The state's own service list separates a registered online complaint, a community service register entry and an FIR, and a community service register entry is what a non-cognizable matter produces. Voyeurism is cognizable, so expect to attend the police station and ask for an FIR.",
      },
      {
        q: "Does a hotel or hostel in Tamil Nadu have to have cameras?",
        a: "There is a duty, but no standard. Since January 2025 the person in charge of a hotel, hostel, restaurant, cinema, mall, hospital or any other precinct must take steps including installing cameras to prevent harassment of a woman, and must inform the police within twenty four hours of a complaint. No retention period, resolution or placement is prescribed. Separately, a women's or children's hostel needs a Collector's licence, now valid ten years, whose conditions do not mention cameras at all.",
      },
      {
        q: "Do you cover towns outside the main cities?",
        a: "Yes. Sweeps are arranged across the state, including the district towns named in the table on this page. Chennai and Coimbatore have pages of their own because we have verified local detail worth publishing for them; that is not a limit on where we work.",
      },
    ],
  },
  {
    slug: "gujarat",
    state: "Gujarat",
    seoTitle: "Bug Sweeping Services in Gujarat | TSCM Sweeps",
    heroTitle: "Bug Sweeping Services in Gujarat",
    heroSubtitle:
      "TSCM bug sweeps across Gujarat, from the four commissionerate cities to the district towns and industrial estates.",
    metaDescription:
      "Bug sweeping services across Gujarat: TSCM sweeps district by district, with the state's policing structure, e-FIR limits and hotel reporting rules explained.",
    intro:
      "Gujarat concentrates a great deal of value in a small number of rooms: diamond units, textile buying offices, chemical and engineering plants, and the family businesses that sit behind them. The sweep we run is the same everywhere, using radio-frequency analysis for anything transmitting, a non-linear junction detector for electronics that are switched off, optical and thermal checks and a physical inspection. What changes across the state is who polices your address, what the state lets you file online, and how much of your own movement is already on record.",
    policing: {
      heading: "Only four cities have a Police Commissioner, and each has a separate rural force",
      body: [
        "Gujarat has four police commissionerates and no more: Ahmedabad City, Surat City, Vadodara City and Rajkot City. Everywhere else in the state is a district under a superintendent, grouped into ranges under an inspector general or deputy inspector general. Two claims circulate widely and both are wrong. The first adds Jamnagar, Bhavnagar and Junagadh to the list; those are district superintendencies, and the range offices there are range offices, not commissionerates. The second adds Gandhinagar; a commissionerate there has been proposed for years and has not been approved, so it does not exist. The eight city list people quote is the rollout list for a public safety camera law, which is a different thing entirely.",
        "In each of the four commissionerate cities there is also a separate rural force with its own superintendent. Ahmedabad Rural, Surat Rural, Vadodara Rural and Rajkot Rural are not the city force. This is the boundary that costs time: an industrial estate or a plant on the edge of a city very often sits on the rural side, and a complaint made to the wrong office starts the day badly. If your address is anywhere near a city limit, establish which force covers it before you need to.",
        "The state's district map itself changed recently. Gujarat has thirty four districts as of 2 October 2025, when Vav-Tharad was carved out of Banaskantha and became the thirty fourth. Some government pages have not caught up and still show thirty three. Vav-Tharad also functions as a police district in its own right.",
        "On cyber matters the state runs a cyber crime cell under the CID at Gandhinagar, with cyber crime police stations at commissionerate level, at range level and in a growing number of districts. Sources disagree on the current total, so we do not publish a number; what matters is that a cyber station exists at or above your district and that 1930 and the national portal will route a complaint if you are unsure.",
      ],
    },
    reporting: {
      heading: "The e-FIR covers almost nothing, and an online complaint is a separate thing again",
      body: [
        "Gujarat's e-FIR is narrower than its name suggests. It covers vehicle and mobile phone theft only, and only where the accused is unidentified and no force was used. It is also not an FIR at the moment you submit it: a senior officer assigns a preliminary check within twenty four hours, the investigating officer verifies the complainant within around forty eight hours, and only then is it converted into an FIR. A covert recording complaint is outside that route completely, so it is made in person at the police station.",
        "The state portal also runs e-complaint and e-FIR as two different services, and the volumes make the point better than any explanation: e-complaints filed run into the hundreds of thousands while e-FIRs are a small fraction of that. Filing something online in Gujarat usually produces a complaint, not a registered FIR, and only the second of those starts an investigation.",
        "On helplines, Gujarat Police's own published list gives 100 and 112 for police, 181 as the Abhayam women's helpline, 1930 for cyber complaints, 1098 for children, 108 for ambulance and 101 for fire. Two caveats are worth carrying. The 181 Abhayam line is run by the women and child development department rather than the police, and that department says itself that its rescue team is not a substitute for the police. And although 181 is the number on the police list, 1091 still appears on some district collectorate pages, so the two coexist and it is worth checking what your own district publishes. The traffic number still printed on some official pages was retired as a complaint line in August 2026 when traffic complaints were folded into 112.",
      ],
    },
    accommodation: {
      heading: "Your hotel has probably already sent your identity to the police",
      body: [
        "Gujarat runs a hotel reporting system that most guests never hear about. Under a police order made using the Gujarat Police Act, hotels keep a networked terminal at reception and upload each guest's name, address, mobile number, identity document and period of stay, in real time rather than in a book checked later. It began with the Ahmedabad crime branch and has spread well beyond it, and enforcement is real: a hotel manager in Ahmedabad was booked in February 2026 for failing to upload guest details. Paying guest accommodation has been pulled into the same registration push.",
        "That is worth knowing for a practical reason. If you find a device in a hotel room and need to establish who else had access to it, the occupancy record you are asking about is not an informal register that may or may not have been kept. It is a record the hotel was legally required to file with the police as it went along.",
        "What Gujarat does not have is a camera mandate you can rely on inside accommodation. The state's public safety law requires cameras covering entry and exit points and parking, with thirty days of storage, but only at premises the government has notified by footfall, and the categories reported in that notification are educational institutions, sports complexes, religious places and industrial areas rather than hotels. We could not verify the notified list directly, so we do not claim it covers your hotel. Separately there is no state statute on paying guest accommodation or hostels at all; regulation is municipal, and the High Court held in 2025 that running premises as a homestay or paying guest hostel without permission from the local authority is not allowed. Some districts add their own requirements by magistrate's order, typically a visitor register and cameras at entrances and parking with thirty day retention, but those are district orders that lapse and renew rather than state law.",
        "We found no advisory from Gujarat Police specifically about hidden or spy cameras. Its own public awareness campaigns cover online fraud, grooming, sextortion and deepfakes, and do not touch covert recording devices.",
      ],
    },
    cityPages: ["ahmedabad", "surat"],
    districts: [
      { district: "Ahmedabad", towns: ["Ahmedabad", "Dholka", "Sanand", "Bavla", "Viramgam", "Dhandhuka"] },
      { district: "Gandhinagar", towns: ["Gandhinagar", "Kalol", "Dehgam", "Mansa", "Pethapur", "Chhatral"] },
      { district: "Surat", towns: ["Surat", "Bardoli", "Mandvi", "Olpad", "Kamrej", "Palsana"] },
      { district: "Vadodara", towns: ["Vadodara", "Padra", "Dabhoi", "Savli", "Karjan", "Waghodia"] },
      { district: "Rajkot", towns: ["Rajkot", "Gondal", "Jetpur", "Dhoraji", "Upleta", "Jasdan", "Paddhari"] },
      { district: "Bhavnagar", towns: ["Bhavnagar", "Palitana", "Mahuva", "Sihor", "Gariadhar", "Talaja"] },
      { district: "Jamnagar", towns: ["Jamnagar", "Dhrol", "Kalavad", "Jamjodhpur", "Sikka", "Bedi"] },
      { district: "Junagadh", towns: ["Junagadh", "Keshod", "Mangrol", "Manavadar", "Visavadar", "Vanthali"] },
      { district: "Kutch", towns: ["Bhuj", "Gandhidham", "Anjar", "Mandvi", "Mundra", "Bhachau", "Rapar", "Kandla"] },
      { district: "Bharuch", towns: ["Bharuch", "Ankleshwar", "Jambusar", "Dahej", "Amod", "Valia"] },
      { district: "Navsari", towns: ["Navsari", "Bilimora", "Gandevi", "Chikhli", "Vansda"] },
      { district: "Valsad", towns: ["Valsad", "Vapi", "Pardi", "Umbergaon", "Dharampur", "Atul"] },
      { district: "Tapi", towns: ["Vyara", "Songadh", "Ukai", "Valod", "Nizar"] },
      { district: "Dang", towns: ["Ahwa", "Waghai", "Saputara", "Subir"] },
      { district: "Anand", towns: ["Anand", "Vallabh Vidyanagar", "Khambhat", "Petlad", "Borsad", "Umreth"] },
      { district: "Kheda", towns: ["Nadiad", "Kapadvanj", "Mahudha", "Thasra", "Kathlal", "Dakor"] },
      { district: "Panchmahal", towns: ["Godhra", "Halol", "Shehera", "Morwa Hadaf"] },
      { district: "Mahisagar", towns: ["Lunawada", "Balasinor", "Santrampur", "Virpur", "Kadana"] },
      { district: "Dahod", towns: ["Dahod", "Jhalod", "Limkheda", "Devgadh Baria", "Sanjeli"] },
      { district: "Chhota Udepur", towns: ["Chhota Udaipur", "Bodeli", "Kavant", "Sankheda"] },
      { district: "Narmada", towns: ["Rajpipla", "Dediapada", "Sagbara", "Kevadiya", "Garudeshwar"] },
      { district: "Mehsana", towns: ["Mehsana", "Visnagar", "Kadi", "Unjha", "Vijapur", "Vadnagar", "Becharaji"] },
      { district: "Patan", towns: ["Patan", "Sidhpur", "Chanasma", "Harij", "Radhanpur", "Santalpur"] },
      { district: "Banaskantha", towns: ["Palanpur", "Deesa", "Danta", "Amirgadh", "Vadgam"] },
      { district: "Vav-Tharad", towns: ["Tharad", "Vav", "Bhabhar", "Deodar", "Lakhani", "Suigam"] },
      { district: "Sabarkantha", towns: ["Himmatnagar", "Idar", "Khedbrahma", "Prantij", "Talod", "Vadali"] },
      { district: "Aravalli", towns: ["Modasa", "Bayad", "Malpur", "Meghraj", "Dhansura"] },
      { district: "Surendranagar", towns: ["Surendranagar", "Wadhwan", "Limbdi", "Dhrangadhra", "Chotila", "Thangadh"] },
      { district: "Morbi", towns: ["Morbi", "Wankaner", "Halvad", "Maliya", "Tankara"] },
      { district: "Botad", towns: ["Botad", "Gadhada", "Barwala", "Ranpur"] },
      { district: "Amreli", towns: ["Amreli", "Savarkundla", "Rajula", "Babra", "Lathi", "Damnagar"] },
      { district: "Gir Somnath", towns: ["Veraval", "Somnath", "Kodinar", "Una", "Talala", "Sutrapada"] },
      { district: "Porbandar", towns: ["Porbandar", "Ranavav", "Kutiyana"] },
      { district: "Devbhoomi Dwarka", towns: ["Khambhalia", "Dwarka", "Okha", "Bhanvad", "Salaya", "Mithapur"] },
    ],
    faqs: [
      {
        q: "Which cities in Gujarat have a Police Commissioner?",
        a: "Four: Ahmedabad, Surat, Vadodara and Rajkot. Everywhere else, including Jamnagar, Bhavnagar, Junagadh and Gandhinagar, is a district under a superintendent. Each of the four cities also has a separate rural force with its own superintendent, so an address near a city limit may not be the city police at all.",
      },
      {
        q: "Can I file an e-FIR in Gujarat for a hidden camera?",
        a: "No. The e-FIR covers vehicle and mobile phone theft only, where the accused is unidentified and no force was used, and even then it becomes an FIR only after an officer verifies the complainant, reported as within forty eight hours. A covert recording complaint is made in person at the police station.",
      },
      {
        q: "Which women's helpline does Gujarat publish?",
        a: "Gujarat Police's own list gives 181, the Abhayam line, which is run by the women and child development department rather than the police. The 1091 number still appears on some district collectorate pages, so both circulate and it is worth checking what your district publishes. Use 112 for an emergency and 1930 for cyber crime.",
      },
      {
        q: "Does my hotel in Gujarat have to report who stays there?",
        a: "Yes. Hotels upload guest name, address, mobile number, identity document and period of stay to the police in real time from a terminal at reception, and enforcement is active: a hotel manager in Ahmedabad was booked in February 2026 for not doing it. If you need to establish who had access to a room, that record exists.",
      },
      {
        q: "How many districts does Gujarat have?",
        a: "Thirty four, since 2 October 2025, when Vav-Tharad was created out of Banaskantha. Some government pages still show thirty three because they have not been updated. Vav-Tharad also operates as a police district in its own right.",
      },
    ],
  },
  {
    slug: "bihar",
    state: "Bihar",
    seoTitle: "Bug Sweeping Services in Bihar | TSCM Sweeps",
    heroTitle: "Bug Sweeping Services in Bihar",
    heroSubtitle:
      "TSCM bug sweeps across Bihar, with the state's SP-led policing structure and its reporting limits set out plainly.",
    metaDescription:
      "Bug sweeping services across Bihar: TSCM sweeps district by district, with the state's policing structure, the absence of an e-FIR and the hostel circular explained.",
    intro:
      "Bihar is policed differently from most of the states around it, and the difference is not cosmetic: it changes who you escalate to and what you can do without walking into a police station. The sweep itself is unchanged wherever we work, combining radio-frequency analysis, a non-linear junction detector that finds electronics left switched off, optical and thermal checks and a physical inspection. What this page sets out is the part that decides what happens next.",
    policing: {
      heading: "There is no police commissionerate anywhere in Bihar",
      body: [
        "Every district in Bihar, Patna included, is headed by a superintendent or senior superintendent of police working under the district magistrate's general direction and control. This is not an accident of appointments: the Bihar Police Act 2007 contains no definition of a Commissioner of Police, no commissionerate chapter and no power to declare one. It says the opposite, vesting the police administration of a district in the superintendent under the district magistrate. A Patna commissionerate has been talked about but nothing has been approved.",
        "The practical consequence is worth understanding. In a commissionerate state the police chain is self-contained and the district magistrate sits outside it. In Bihar the district magistrate is inside the chain, which makes that office a real escalation route in a way it is not in Maharashtra or Tamil Nadu. If a complaint stalls at the station and then at the superintendent, the district magistrate is not a detour.",
        "The state has thirty eight districts, grouped into twelve police ranges. The last new district, Arwal, was created in August 2001 out of Jehanabad, and none has been created since. For policing purposes the count is different from the revenue count in a way that matters when you are working out where to report: Bagaha and Naugachhia are police districts of their own on top of the thirty eight, and four railway police districts sit alongside them at Patna, Muzaffarpur, Katihar and Jamalpur.",
        "Cyber coverage is better than the state's reputation suggests. There is a cyber police station in every police district, opened across the state in June 2023, and the state nodal body is the Economic Offences Unit at police headquarters in Patna rather than a separate cyber wing. If a complaint needs to go above your district, the Economic Offences Unit is where it goes.",
      ],
    },
    reporting: {
      heading: "Bihar has no e-FIR at all, whatever the website suggests",
      body: [
        "This is the single most important thing on this page. Bihar offers an e-complaint, not an e-FIR. The citizen services portal lists an e-complaint, a facility to view an FIR already registered, and an online request through the emergency response system. None of those registers an FIR. Some of the portal's own headings use the phrase file FIR online, which is loose wording with no service behind it, and you should expect someone to quote it at you. Plan on reaching a police station in person.",
        "That makes the documentation from a sweep more useful here than in states with a working online route, because what you carry into the station is what the complaint rests on. We record what was found and where it was found before anything is moved.",
        "On helplines, Bihar Police publishes 112 for police emergencies through the integrated response system, 1930 for cyber crime, 181 as the women's helpline, 1098 for children, 15545 for prohibition matters, which is specific to this state, and a dedicated CCTV help desk line. Two corrections are worth carrying, because both send people to the wrong place. The 1090 number that a great deal of syndicated advice gives to Bihar readers belongs to Uttar Pradesh and is not the line here. And Bihar Police's own site is internally inconsistent about the women's number, listing 181 on its emergency contacts page while a quick help widget on the same site shows 1091, so if one does not connect, try the other.",
      ],
    },
    accommodation: {
      heading: "The hostel circular is real, and the High Court has said it has no teeth",
      body: [
        "In February 2026 Bihar Police headquarters issued a circular covering girls' hostels and lodges. It is more wide-ranging than most summaries suggest: registration, police verification of staff, a female warden on duty at all times, cameras at entrances, corridors and dining areas with thirty days of retention, a visitor register with controls on male access, biometric attendance for residents and staff, lighting and sanitation standards, and display of emergency numbers including 112, with checks by the state's women's safety units.",
        "What it does not have is a penalty. In May 2026 the Patna High Court held that the circular provides no consequence for non-compliance, warned that it risked becoming a paper advisory, directed the state to amend it to add fines, penalties or closure, and ordered monthly compliance reports from district superintendents. So the requirements are real and worth quoting to a hostel, but nothing currently happens to an operator who ignores them. Ask, and treat the answer as information rather than assurance.",
        "For hotels and lodges the position is simpler and less comforting. No Bihar statute requires cameras in hotel or lodge rooms or common areas. The Bihar Municipal Act licenses lodging houses as a trade licence with no camera, register or identity duty attached, and the Bihar Police Act does not reach hotels at all. Where a camera requirement exists it comes from a district police standing order, and those cover entrances, reception, corridors and parking. None of them covers the inside of a guest room, which is the space you are actually asking about.",
        "As of September 2026 neither Bihar Police nor the state government has published any advisory specifically about hidden or spy cameras in hotel rooms, trial rooms, washrooms or hostels. That is a genuine gap rather than something we failed to find.",
      ],
    },
    cityPages: ["patna"],
    districts: [
      { district: "Patna", towns: ["Patna", "Danapur", "Barh", "Masaurhi", "Fatuha", "Bakhtiarpur", "Bihta", "Maner"] },
      { district: "Nalanda", towns: ["Biharsharif", "Rajgir", "Hilsa", "Islampur", "Silao"] },
      { district: "Bhojpur", towns: ["Arrah", "Jagdishpur", "Piro", "Koilwar", "Bihiya"] },
      { district: "Buxar", towns: ["Buxar", "Dumraon", "Chausa"] },
      { district: "Rohtas", towns: ["Sasaram", "Dehri", "Bikramganj", "Nokha", "Nasriganj"] },
      { district: "Kaimur", towns: ["Bhabua", "Mohania", "Ramgarh", "Chainpur"] },
      { district: "Gaya", towns: ["Gaya", "Bodh Gaya", "Sherghati", "Tikari", "Dobhi"] },
      { district: "Aurangabad", towns: ["Aurangabad", "Daudnagar", "Rafiganj", "Nabinagar", "Obra"] },
      { district: "Nawada", towns: ["Nawada", "Hisua", "Rajauli", "Warisaliganj"] },
      { district: "Jehanabad", towns: ["Jehanabad", "Makhdumpur"] },
      { district: "Arwal", towns: ["Arwal", "Kurtha"] },
      { district: "Saran", towns: ["Chapra", "Revelganj", "Marhaura", "Sonepur", "Dighwara"] },
      { district: "Siwan", towns: ["Siwan", "Maharajganj", "Mairwa", "Barharia"] },
      { district: "Gopalganj", towns: ["Gopalganj", "Mirganj", "Hathua", "Barauli"] },
      { district: "West Champaran", towns: ["Bettiah", "Bagaha", "Narkatiaganj", "Ramnagar", "Chanpatia"] },
      { district: "East Champaran", towns: ["Motihari", "Raxaul", "Areraj", "Chakia", "Dhaka", "Sugauli"] },
      { district: "Muzaffarpur", towns: ["Muzaffarpur", "Motipur", "Kanti", "Sahebganj", "Saraiya"] },
      { district: "Sitamarhi", towns: ["Sitamarhi", "Bairgania", "Belsand", "Pupri", "Janakpur Road"] },
      { district: "Sheohar", towns: ["Sheohar", "Piprahi"] },
      { district: "Vaishali", towns: ["Hajipur", "Lalganj", "Mahnar", "Mahua", "Bidupur"] },
      { district: "Darbhanga", towns: ["Darbhanga", "Benipur", "Jale", "Singhwara"] },
      { district: "Madhubani", towns: ["Madhubani", "Jhanjharpur", "Jainagar", "Benipatti", "Rajnagar"] },
      { district: "Samastipur", towns: ["Samastipur", "Dalsinghsarai", "Rosera", "Mohiuddinagar"] },
      { district: "Begusarai", towns: ["Begusarai", "Barauni", "Teghra", "Balia", "Bakhri"] },
      { district: "Khagaria", towns: ["Khagaria", "Gogri Jamalpur", "Parbatta"] },
      { district: "Munger", towns: ["Munger", "Jamalpur", "Kharagpur", "Tarapur"] },
      { district: "Lakhisarai", towns: ["Lakhisarai", "Barahiya", "Surajgarha"] },
      { district: "Sheikhpura", towns: ["Sheikhpura", "Barbigha"] },
      { district: "Jamui", towns: ["Jamui", "Jhajha", "Sikandra"] },
      { district: "Bhagalpur", towns: ["Bhagalpur", "Kahalgaon", "Sultanganj", "Naugachhia"] },
      { district: "Banka", towns: ["Banka", "Amarpur", "Katoria"] },
      { district: "Saharsa", towns: ["Saharsa", "Simri Bakhtiarpur", "Sonbarsa"] },
      { district: "Madhepura", towns: ["Madhepura", "Murliganj", "Singheshwar"] },
      { district: "Supaul", towns: ["Supaul", "Nirmali", "Birpur", "Triveniganj"] },
      { district: "Purnia", towns: ["Purnia", "Banmankhi", "Kasba", "Dhamdaha"] },
      { district: "Katihar", towns: ["Katihar", "Manihari", "Barsoi", "Kadwa"] },
      { district: "Araria", towns: ["Araria", "Forbesganj", "Jogbani"] },
      { district: "Kishanganj", towns: ["Kishanganj", "Thakurganj", "Bahadurganj"] },
    ],
    faqs: [
      {
        q: "Does Bihar have a police commissionerate?",
        a: "No, nowhere in the state. Every district including Patna is headed by a superintendent or senior superintendent under the district magistrate's general direction and control, and the Bihar Police Act 2007 does not even provide for a Commissioner of Police. One practical effect is that the district magistrate is a genuine escalation route here, which is not the case in commissionerate states.",
      },
      {
        q: "Can I file an FIR online in Bihar?",
        a: "No. Bihar offers an e-complaint, a facility to view an FIR already registered, and an online request through the emergency response system. None of them registers an FIR. Some headings on the state portal use the phrase file FIR online, but there is no such service behind it, so plan on attending the police station in person.",
      },
      {
        q: "Is 1090 the women's helpline in Bihar?",
        a: "No. That number belongs to Uttar Pradesh, and a lot of syndicated advice gives it to Bihar readers by mistake. Bihar Police publishes 181 on its emergency contacts page, although a quick help widget on the same site shows 1091, so try the other if one does not connect. Use 112 for an emergency, 1930 for cyber crime and 15545 for prohibition matters.",
      },
      {
        q: "Does the Bihar girls' hostel circular actually require CCTV?",
        a: "It requires cameras at entrances, corridors and dining areas with thirty days of retention, alongside registration, staff police verification, a female warden at all times, a visitor register and biometric attendance. But the Patna High Court held in May 2026 that the circular carries no penalty for non-compliance and directed the state to add one. Ask a hostel about it, and treat the answer as information rather than assurance.",
      },
      {
        q: "Are hotels in Bihar required to have cameras?",
        a: "No Bihar statute requires it. The municipal law licenses lodging houses as a trade licence with no camera or register duty, and the police Act does not reach hotels. Where a requirement exists it comes from a district police standing order and covers entrances, reception, corridors and parking, never the inside of a guest room.",
      },
    ],
  },
];

