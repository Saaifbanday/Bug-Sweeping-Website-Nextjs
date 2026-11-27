export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  coverImage: string;
  content: string; // HTML string
  // Optional fields used by content-engine posts; older posts fall back to defaults.
  seoTitle?: string;
  metaDescription?: string;
  coverImageAlt?: string;
  ogImage?: string; // PNG fallback for social cards that do not read WebP
  dateModified?: string;
  publishedBy?: string;
  cta?: { heading: string; text: string; label: string };
  jsonLd?: Record<string, unknown>;
}

// FAQ entries for content-engine posts. The same array renders the visible FAQ and the FAQPage JSON-LD,
// so the markup always matches the page.
interface Faq {
  q: string;
  a: string;
}

function faqHtml(faqs: Faq[]) {
  return faqs.map((f) => `        <h3>${f.q}</h3>\n        <p>${f.a}</p>`).join("\n");
}

function faqJsonLd(faqs: Faq[], id: string) {
  return {
    "@type": "FAQPage",
    "@id": id,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}



const bugSweepingMumbaiFaqs: Faq[] = [
  {
    q: "Can I report a hidden camera to Mumbai Police online?",
    a: "Not as an FIR. Mumbai Police's online complaint page states that it entertains only minor, non-cognizable crimes, and that an FIR for a cognizable crime can only be registered at a police station. Voyeurism is cognizable, so the online form will not complete the report. You can file in parallel on the national portal at cybercrime.gov.in, which routes the complaint to the relevant state police.",
  },
  {
    q: "I live in Thane but the camera was in a Mumbai hotel. Which police force?",
    a: "The force where the offence happened, so Greater Mumbai Police in that example, because Thane City, Navi Mumbai and Mira-Bhayandar, Vasai-Virar are separate commissionerates. Under Section 173(1) of the Bharatiya Nagarik Suraksha Sanhita any police station must record information about a cognizable offence irrespective of where it was committed, and transfer it, so your local station cannot turn you away.",
  },
  {
    q: "Is 1091 the women's helpline in Mumbai?",
    a: "Not in Mumbai. Maharashtra Police lists 103 as the women's assistance number for Mumbai, Thane and Navi Mumbai, and 1091 for the rest of the state. Use 112 for any emergency and 1930 for cyber crime.",
  },
  {
    q: "Can my housing society point a camera at my flat door?",
    a: "Cameras in lobbies, lifts and parking are ordinary society security, installed and maintained by the society under the Maharashtra model bye-laws. A camera trained on a particular flat is different: in a case concerning a Colaba building, the Bombay High Court restrained residents from keeping cameras on a neighbour's flat without consent and confined them to their own floor. Raise the placement with the managing committee and the general body first.",
  },
  {
    q: "How quickly should I ask for CCTV footage in Mumbai?",
    a: "Immediately, and in writing. Retention periods on building and hotel systems are short, often a couple of weeks, and orders requiring premises to keep footage are issued for fixed periods. Ask the society or hotel to preserve the relevant footage the day you realise you need it, and tell the police which system holds it.",
  },
];
const bugSweepingDelhiFaqs: Faq[] = [
  {
    q: "Does a complaint on cybercrime.gov.in count as an FIR?",
    a: "No. The national cybercrime portal takes the complaint and passes it to the police of the relevant state or union territory; whether it becomes an FIR, and what follows, is for that force to decide. For an offence such as voyeurism or stalking in Delhi, go to the police station as well.",
  },
  {
    q: "Can I file an FIR online in Delhi for a hidden camera?",
    a: "Not at present. Delhi Police's e-FIR portals cover vehicle and property theft, and its other online services are complaints rather than FIRs. Section 173(1) of the Bharatiya Nagarik Suraksha Sanhita does allow information to be given by electronic communication, but it has to be signed within three days, so in practice a hidden-camera FIR means attending the police station.",
  },
  {
    q: "Is 1930 the right helpline if I find a hidden camera?",
    a: "Usually not. 1930 is the national cyber crime helpline and is geared to online fraud, especially where money has moved. For a device found in a room, call 112 in an emergency and report to the local police station or your district cyber police station. Delhi Police also lists 1091 for women in distress, and the Delhi government lists 181.",
  },
  {
    q: "Can a landlord or PG owner in Delhi put a camera in my room?",
    a: "A camera covering a private room, bathroom or changing area is the conduct Section 77 of the Bharatiya Nyaya Sanhita treats as voyeurism, and consent to being recorded does not extend to sharing the recording. Cameras in entrances and common areas are treated differently, and Delhi's draft paying-guest legislation would require them there. If you find a camera inside your room, document it and report it.",
  },
  {
    q: "Can I report without giving my name?",
    a: "The national cybercrime portal offers an anonymous option within its women and children reporting track. A police complaint normally identifies the complainant, though where a woman reports voyeurism or stalking the information must be recorded by a woman police officer, and you are entitled to a free copy of what is recorded.",
  },
];
const bugSweepingIndiaFaqs: Faq[] = [
  {
    q: "How long does a bug sweep take?",
    a: "It depends on the number and size of spaces, how cluttered they are, and whether vehicles or phones are included. A single room or car is usually a matter of hours rather than days, while a multi-floor office can need a longer or phased engagement. A provider should give you a time estimate after scoping, not before.",
  },
  {
    q: "Are debugging, bug sweeping and TSCM the same thing?",
    a: "In a security context, yes. Technical surveillance countermeasures (TSCM) is the formal term, bug sweeping is the common description, and debugging service is how many Indian providers and clients refer to the same work. It is unrelated to debugging software.",
  },
  {
    q: "Do hidden camera detector apps work?",
    a: "Only partly. A phone can help you spot a lens glint with the torch, or the infrared lights of some night-vision cameras through its camera, but it cannot measure most radio signals, and no app can find a device that records to a memory card without transmitting. Treat apps as a travel check, not a sweep.",
  },
  {
    q: "Does a bug sweep check my phone for spyware?",
    a: "Not automatically. A room or vehicle sweep looks for physical devices; checking a phone for spyware or stalkerware is separate work that has to be agreed in the scope. If you suspect a partner or family member is monitoring your phone, seek help from a device they cannot access, and do not reset the phone or delete apps first, because that can alert them and erase evidence. Our guide on whether someone is monitoring your phone sets out the checks that establish something and where help exists in India.",
  },
];

const officeBuggedFaqs: Faq[] = [
  {
    q: "Do clicks or static on a call mean my office phone is tapped?",
    a: "No. Interception is carried out inside the operator's network rather than by adding anything to your line, your handset or your room, so there is nothing for you to hear. Microsoft's own call quality guidance attributes robotic audio to jitter once it passes roughly 30 milliseconds, gaps and clipped speech to packet loss, and echo to the microphone picking up the loudspeaker again. Noise on a call is information about your network and the acoustics of the room.",
  },
  {
    q: "Does *#21# tell me if my phone is tapped?",
    a: "No. It is a supplementary service code defined in the GSM standards, where service code 21 means call forwarding unconditional. Dialling it asks the network whether every incoming call is being forwarded somewhere, and it returns that and nothing else. If it shows forwarding is active that is worth taking up with your operator, because unexpected call forwarding is a genuine problem, but it is not interception and it says nothing about your office.",
  },
  {
    q: "Do bug detector apps work?",
    a: "No, and the limitation is architectural rather than a matter of app quality. Android exposes motion, environmental and position sensors, with no sensor type for radio frequency spectrum and no interface that gives an application raw spectrum. Such apps generally fall back on the magnetometer, which measures the ambient geomagnetic field so that a compass works, and responds to screws, hinges, desk frames and speaker magnets at close range. That is why they alarm almost continuously in a furnished office.",
  },
  {
    q: "A competitor knew our pricing. Does that prove the boardroom is bugged?",
    a: "Not on its own. A competitor pricing just under you can usually be modelled from the market, so it is weak evidence. What carries weight is an arbitrary detail that could not have been guessed or reconstructed: a verbatim phrase, a number that was wrong in the room and wrong again outside it, or a named internal objection. Before concluding that a device is involved, rule out insider disclosure, document and email leaks, shared calendars that expose a meeting's existence and attendees, and third parties who legitimately hold the same fact.",
  },
  {
    q: "If a sweep finds nothing, does that mean my office is clean?",
    a: "No, and this is the limitation worth understanding before you commission one. A sweep reports what was found in the areas accessed, by the methods used, at the time of the visit. A recorder that stores to internal memory transmits nothing, so a radio search cannot exclude it. A device that was not transmitting while the team was there will not appear either. A compromised laptop or conferencing system is a cybersecurity matter that no radio sweep addresses. A sweep that found no signals is not the same statement as a room with nothing in it.",
  },
  {
    q: "What should I do if I find a device in my office?",
    a: "If anyone is in immediate danger, call 112. Otherwise leave the object exactly where it is, because pulling it apart or taking it away destroys what would make it useful later. Photograph it in position, note where it was, and write down who has had access to that room and when. A suspected offence is a matter for the local police, and cyber complaints including the publication of private images can be filed at cybercrime.gov.in. Note that 1930 is the helpline for urgent financial cyber fraud rather than a general number for this situation.",
  },
];

const hiddenCameraFaqs: Faq[] = [
  {
    q: "Can a hidden camera work without Wi-Fi?",
    a: "Yes, and this is the case that defeats most detection advice. A camera can record to a memory card inside itself with its radio switched off, which means it joins no network, appears in no Wi-Fi scan and emits nothing for a radio detector to find. Whoever placed it has to come back for the card, which is why several Indian cases involve the same person returning on a pretext. In a Delhi case reported in September 2024 the accused repeatedly asked for the flat keys saying he needed to do electrical repairs, in order to collect footage.",
  },
  {
    q: "Does the phone torch and infrared trick actually find hidden cameras?",
    a: "Only sometimes, and a negative result proves nothing. The torch can catch a glint from a lens, but only when you are nearly square on to it, which is exactly the geometry a recessed pinhole lens avoids. The infrared check only finds a camera whose infrared illuminators are switched on, and those run in the dark, so a camera in a lit room or one with no illuminators shows nothing. Rear cameras on phones usually carry an infrared cut filter. Apple's own support documentation puts it plainly, saying that some cameras might detect infrared light, which is a manufacturer confirming the test is camera dependent.",
  },
  {
    q: "Do hidden camera detector apps work?",
    a: "No. The limit is the hardware rather than the app. A phone has no sensor for radio spectrum and no interface that would give an app raw spectrum, so these apps fall back on the magnetometer, which exists to make a compass work and reacts to screws, hinges and speaker magnets at close range. Others scan the Wi-Fi network, which misses any camera recording to a memory card, any camera running its own hotspot, and anything on the building's own network rather than the one you joined.",
  },
  {
    q: "Is it illegal to put a hidden camera in a hotel room in India?",
    a: "Two provisions are usually in play and they protect different people. Section 77 of the Bharatiya Nyaya Sanhita, 2023, which came into force on 1 July 2024, covers watching, capturing or circulating the image of a woman engaged in a private act where she would expect not to be observed, and carries a minimum of one year rising to three, or three to seven on a second conviction. Section 66E of the Information Technology Act, 2000 applies to any person regardless of gender, but only to the image of a private area as that term is defined in the section, and carries up to three years or a fine up to two lakh rupees or both.",
  },
  {
    q: "Which number should I call if I find a camera in my room?",
    a: "Call 112, the national emergency number, and go to the police for a first information report. Do not call 1930. That is the helpline for urgent financial cyber fraud, run as the front end of the financial fraud reporting system, and its own published guidance asks callers for transaction details. It is the wrong desk for a hidden camera, and it is one of the most commonly repeated errors in Indian advice on this subject. Use cybercrime.gov.in in addition if the footage is being circulated online or used to make demands.",
  },
  {
    q: "Can I report it at a police station away from where it happened?",
    a: "Yes. Section 173(1) of the Bharatiya Nagarik Suraksha Sanhita, 2023 says that information about a cognizable offence may be given irrespective of the area where the offence was committed, which is what people mean by a zero first information report. So a traveller who finds a camera in another state can report it after getting home. The same provision allows the information to be given by electronic communication, to be signed within three days, and where a woman gives information about an offence under section 77 it is to be recorded by a woman police officer or any woman officer. Section 173(2) entitles you to a free copy of what was recorded.",
  },
  {
    q: "Does a hidden camera have to be found by equipment?",
    a: "Often not. In the Indian cases that reached arrest, the cue was mundane. A tenant in Hyderabad noticed a loose screw on a bathroom light fitting that had recently been repaired. A woman in Delhi noticed an unfamiliar laptop session logged into her messaging account and then searched her flat. In a company hostel in Tamil Nadu a resident simply spotted the device and told the warden. Noticing that something has changed in a room you know well is a better early signal than any consumer gadget.",
  },
];

const corporateEspionageFaqs: Faq[] = [
  {
    q: "Is there a trade secrets law in India?",
    a: "No. There is no separate statute protecting trade secrets or undisclosed information in India, a point the World Intellectual Property Organization states plainly in its country overview. What protects confidential business information instead is contract, the equitable action for breach of confidence, and a scattering of provisions in the criminal law and the Information Technology Act. The Law Commission of India recommended a dedicated statute in March 2024 and annexed a draft bill to its report. It has not been enacted, and no such bill appears on the PRS legislative tracker as at October 2026.",
  },
  {
    q: "Is a non-compete clause enforceable in India after an employee leaves?",
    a: "Generally no. A negative covenant that operates during employment can be enforced, but a restraint that operates after the employment ends is void under section 27 of the Indian Contract Act, 1872. The Law Commission records that this interpretation has been consistent since 1874 and has been approved by the Supreme Court, and that in an overwhelming majority of decisions courts have refused to restrain a former employee from joining a competitor. The idea that a post-employment restraint survives if it is reasonable in time and area is English law, not Indian law, and it is one of the most common errors in Indian commentary on this subject.",
  },
  {
    q: "Can an employee be prosecuted for copying our customer database?",
    a: "There are routes, though none is as straightforward as people expect. Section 43(b) of the Information Technology Act, 2000 covers copying or extracting data without the permission of the owner, and section 66 makes doing that dishonestly or fraudulently a criminal offence. Criminal breach of trust under section 316 of the Bharatiya Nyaya Sanhita, 2023 is often the better fit for an employee, because it turns on entrustment and on breach of a contract touching the discharge of that trust, which maps onto a confidentiality clause; where the accused is a clerk or servant it carries up to seven years. Theft is awkward, because theft requires movable property and no Indian court has settled whether data is movable property.",
  },
  {
    q: "Does the Official Secrets Act cover corporate information?",
    a: "No. The Law Commission's 2024 report says the Act focuses on protecting government information and does not adequately address trade secrets or confidential business information in the private sector, since it is built around defence, military and prohibited place concepts. This matters because the most publicised Indian case in this area is often described as an Official Secrets Act matter. On the record of the first information report and the chargesheet, the charges were ordinary property, forgery and conspiracy provisions, and the Act was not invoked.",
  },
  {
    q: "If we recover a device, can the recordings be used in evidence?",
    a: "Only with the right certificate, and the provision changed recently. Most Indian commentary still refers to section 65B of the Indian Evidence Act, 1872. That Act was replaced by the Bharatiya Sakshya Adhiniyam, 2023 from 1 July 2024, and the governing provision is now section 63. The certificate has to be submitted with the electronic record at each instance it is tendered for admission, not once, and it has to be signed both by the person in charge of the device and by an expert, in the form set out in the Schedule. That form requires the make, model and serial or identifying number of the device and the hash value of the record with the algorithm named, with the hash report enclosed.",
  },
  {
    q: "Will a bug sweep protect our confidential information?",
    a: "It addresses one layer of three, and the smallest one in most organisations. A sweep looks for devices placed in a space. It does not reach a compromised laptop or conferencing system, where the microphone is already in the room and audio leaves as ordinary encrypted traffic, and it does not reach an insider who is entitled to the information and simply passes it on. Those need governance and records rather than instruments, and Indian law already requires some of those records.",
  },
];

const vehicleTrackerFaqs: Faq[] = [
  {
    q: "Is it illegal to put a GPS tracker on someone's car in India?",
    a: "There is no Indian offence of covertly tracking an adult's location as such, which surprises most people. Cases are prosecuted by analogy. Stalking under section 78 of the Bharatiya Nyaya Sanhita, 2023 is the provision usually cited, but on its own words it applies only where the offender is a man and the person protected is a woman, and its two limbs concern repeated contact and the monitoring of a woman's use of electronic communication rather than her location. Criminal trespass under section 329 is gender neutral and fits the physical act of interfering with your vehicle, though the penalty is small. If the installation damaged the car, mischief may apply.",
  },
  {
    q: "Will my phone tell me if there is a tracker on my car?",
    a: "Only for Bluetooth item trackers, and only some of them. Apple and Google shipped unwanted tracking alerts in May 2024, on iOS 17.5 and later and on Android 6 and later. Google's own documentation says the alerts work with Find Hub network compatible tags, headphones and Apple AirTags, and its list does not include Tile or Samsung Galaxy SmartTag. No phone alert of any kind detects a cellular GPS tracker, which is the type used in the serious Indian cases. If it is a Bluetooth tag you have been warned about, our guide to <a href=\"/blog/unknown-tracker-detected\">what an unknown tracker alert actually proves</a> covers the alert wordings, the published specification and the order to act in. A silent phone is not a clean car.",
  },
  {
    q: "Why did my iPhone not warn me about a tracker?",
    a: "The alerts have conditions that are easy to break without realising. Apple's documentation requires iOS 17.5 or later, Location Services on, Significant Locations switched on under System Services, Bluetooth on, tracking notifications allowed, and the device not in Airplane Mode. Someone who turns Significant Locations off for privacy has switched off their own tracker detection. Apple also notes that if an item has been with you overnight its identifier may have changed, and the system uses that identifier to work out that the same item is moving with you.",
  },
  {
    q: "Should I remove a tracker as soon as I find one?",
    a: "Not automatically, and Google's own guidance declines to give a blanket instruction. Two things are in tension. Turning the device off stops further tracking, but Google notes that some trackers, if turned off, may be factory reset and no longer linked to their original owner, in which case law enforcement cannot establish who owned it. And if you believe the person tracking you may react badly to losing the signal, leaving it in place while you get help may be the safer course. Photograph it where it sits, note the position, and take advice before disturbing it.",
  },
  {
    q: "Can a bug detector find a GPS tracker on my car?",
    a: "Less reliably than the marketing suggests, and the name is misleading. A tracker receives GPS, which emits nothing. What can be detected is the device talking to the mobile network, and it only does that while transmitting. Cellular trackers are commonly configured to sleep with the modem switched off and wake briefly to upload, and many are motion triggered, so a device can be silent precisely while a parked car is being swept. A logger that stores to internal memory and transmits at all is not detectable by any radio method. Physical search is what finds these.",
  },
  {
    q: "Can I use a GPS jammer to block a tracker on my own car?",
    a: "No. The Department of Telecommunications advisory publicised in July 2022 states that use of a cellular signal jammer, GPS blocker or other signal jamming device is generally illegal except as specifically permitted by the Government of India, and that private organisations and individuals cannot procure or use jammers in India. The current jammer guidelines confine procurement to central and state government bodies, defence forces and security agencies, through two designated public sector undertakings. There is no route by which a private individual in India can lawfully obtain one.",
  },
  {
    q: "Where do I report a tracker found on my vehicle?",
    a: "The local police, not 1930. That helpline is for urgent financial cyber fraud, so a physical device bolted to a car is the wrong desk for it. Under section 173(1) of the Bharatiya Nagarik Suraksha Sanhita, 2023 information about a cognizable offence may be given at any police station irrespective of where the offence happened, and may be given electronically and signed within three days. One thing worth knowing: for offences punishable with three years or more but less than seven, section 173(3) lets the station officer, with permission from an officer of at least Deputy Superintendent rank, run a preliminary enquiry for up to fourteen days before registering a case. If you are told the matter is being looked into first, ask whether such an enquiry has been authorised.",
  },
];

const phoneMonitoringFaqs: Faq[] = [
  {
    q: "How do I know if my phone is being monitored?",
    a: "Not from how the phone behaves. The checks that actually tell you something are a settings audit rather than a scan: on an iPhone, Settings then General then VPN and Device Management, where Apple states that if you see no profiles then no device management profile is installed; on Android, the full app list under Settings then Apps then See all apps, plus device admin apps, accessibility services and special app access. Then check your accounts, because a good deal of monitoring involves no app on the phone at all.",
  },
  {
    q: "Does battery drain or an overheating phone mean spyware?",
    a: "No, and treating it as evidence works in both directions. The Coalition Against Stalkerware puts it plainly: unusual behaviour such as rapid battery drain or data spikes may be a sign, but it does not have to be, and some monitoring software runs with no such side effects at all. Apple's and Google's own support pages list ordinary causes for exactly these symptoms, including software updates, battery ageing, heat, streaming and background refresh, and neither mentions spyware. The better signal is the other person knowing things they should have no way of knowing.",
  },
  {
    q: "Do spy app detector apps work?",
    a: "On an iPhone, no. Apple documents that all third party apps are sandboxed, that the sandbox is designed to prevent apps gathering information stored by other apps, and that system files are shielded from apps, so an App Store app has no documented mechanism for inspecting other apps or the filesystem. On Android it is different: a security app can enumerate installed packages and match them against known monitoring software, which is why reputable products detect a good deal of it. Independent testing published by the Electronic Frontier Foundation with AV-Comparatives in November 2025 found wide variation, with Google Play Protect among the weakest performers.",
  },
  {
    q: "Should I delete the app as soon as I find it?",
    a: "Not automatically, and this is the most important thing on this page. The Coalition Against Stalkerware warns that removing monitoring software, or making significant changes, may be detected by the person who installed it and could increase the abuse, and that deleting it also deletes the evidence you would need if you later report it. Their advice is to make a safety plan first, using a device the other person has not had access to, and to attempt removal only if you believe it is safe. If you are in immediate danger, call 112.",
  },
  {
    q: "Is it illegal for a husband or wife to install spyware on the other's phone in India?",
    a: "Installing monitoring software on another adult's phone without permission engages section 43 of the Information Technology Act, 2000, which covers accessing a device and downloading or copying data without the permission of the owner, and carries a civil liability to pay compensation. Section 66 makes the same conduct a criminal offence where it is done dishonestly or fraudulently, punishable with up to three years or a fine up to five lakh rupees. Where the person monitored is a woman and the person monitoring is a man, section 78 of the Bharatiya Nyaya Sanhita, 2023 covers monitoring a woman's use of electronic communication.",
  },
  {
    q: "I am a man and my wife is monitoring my phone. Do I have any protection?",
    a: "Partly, and the position is worth stating precisely because it is usually got wrong in both directions. The stalking offence is closed to you: section 78 of the Bharatiya Nyaya Sanhita can only be committed by a man against a woman, in its own words, and we could not find a gender neutral Indian stalking offence. But the computer misuse provisions are gender neutral. Section 43 of the Information Technology Act applies to any person accessing a device without the owner's permission, and section 66 applies to any person doing so dishonestly or fraudulently.",
  },
  {
    q: "Where can I get help in India?",
    a: "For an emergency, 112, which is the national emergency number. The women's helpline is 181, but check one thing first: the Ministry of Women and Child Development's own page, last updated 23 October 2026, states that it is operational in all States and Union Territories except West Bengal. The National Commission for Women runs 14490 for complaint registration and referral, and its own page says that for emergencies you should call 112 instead. There is no Government of India helpline specifically for someone whose phone is being monitored by a partner, which is a real gap.",
  },
];

const sweepFrequencyFaqs: Faq[] = [
  {
    q: "How often should a business sweep for bugs?",
    a: "There is no published answer, and anyone giving you one is giving you their opinion. No government authority we could find sets an interval. The United States Department of Defense instruction that governs its own countermeasures programme states that facilities may not automatically receive a recurrent sweep, and makes the trigger a documented threat analysis of that specific facility. The United Kingdom's Cabinet Office guidance for TOP SECRET meeting spaces says sweeps should be undertaken periodically and names no number. If the British government will not put an interval on a TOP SECRET meeting room, a vendor cannot honestly put one on your boardroom.",
  },
  {
    q: "Is there any Indian law that requires a bug sweep?",
    a: "None that we could verify, in any sector. What does exist is adjacent. The Information Technology Rules of 2011 require a compliant information security programme to contain physical security control measures alongside managerial, technical and operational ones, with an annual independent audit as the condition of a safe harbour rather than as a universal duty. The security manual for licensed defence industries requires a yearly internal and two-yearly external security audit. SEBI's cybersecurity framework requires physical access control for critical systems. None of these names a sweep.",
  },
  {
    q: "Our provider recommends quarterly sweeps. Is that right?",
    a: "It may be right for your situation, but ask what it is based on. We read fourteen provider pages on this question, in India and abroad, asserting everything from annual to four times a year per area. Not one cited a standard, a regulator, a statute, a study or a government instruction. Two of them directly contradicted each other. A quarterly interval for a room that hosts two sensitive discussions a year is not caution, it is a subscription. The better question is what has changed in that room since it was last examined.",
  },
  {
    q: "What triggers a sweep, if not the calendar?",
    a: "The triggers that published doctrine actually names are events rather than dates. Before, during and after a sensitive discussion held in a space that is not normally secured. After construction, renovation or modification of the area. Before new electronic systems such as video conferencing or telephony go live, which is the cheap moment rather than the expensive one. On suspicion or on a specific indicator. And the one almost nobody mentions: when a new item enters the room. Both the United States Department of Energy and the United Kingdom's guidance for TOP SECRET areas trigger on equipment, furnishings and gifts entering a space.",
  },
  {
    q: "What is the difference between a survey and an inspection?",
    a: "A survey is the comprehensive examination that establishes what the space looks like when it is clean: a thorough technical, physical and visual examination to identify hazards and any devices present. An inspection is a limited activity that evaluates what has changed in that environment since, to see whether a modification or upgrade has created a vulnerability. The first establishes a reference state; the second checks against it. A first examination and a repeat examination are therefore not the same purchase, which is a distinction most providers do not draw.",
  },
  {
    q: "When is a sweep the wrong thing to buy?",
    a: "When the room has no access control to protect. The Department of Defense instruction records that surveys of facilities open to uncontrolled access have proven counterproductive by giving occupants a false sense of security, and that such requests should be approved only if no other facility is available. There is a second case. The documented technique for capturing conversation is frequently the microphone already in the room, in a laptop or a conferencing unit, which no radio search detects. An organisation that has not controlled devices or access has cheaper work to do first.",
  },
  {
    q: "Does ISO 27001 require a bug sweep?",
    a: "No control in it names eavesdropping, sweeping or technical surveillance countermeasures, as far as we can establish. The standard's physical controls cover security perimeters, entry, securing offices and rooms, physical security monitoring and protection against physical threats. The standard itself is paywalled, so we do not quote its text. The Indian link is that the Information Technology Rules of 2011 name ISO 27001 as one standard that can satisfy reasonable security practices, with annual independent audit as the condition. Even that route never names a sweep.",
  },
];

const hotelCameraFaqs: Faq[] = [
  {
    q: "What are the chances of a hidden camera in a hotel room?",
    a: "There is no reliable figure, for India or anywhere. The number that circulates, eleven per cent, comes from a 2019 IPX1031 survey that asked about Airbnb properties and produced no hotel figure at all. Later articles restate it as hotels. Documented Indian cases are real and rare enough that each one is news.",
  },
  {
    q: "How do I check a hotel room for a hidden camera?",
    a: "Look before you scan. With the lights off, move a torch slowly across glass, mirrors, vents and anything facing the bed or the shower, watching for a small bright return. Then check the high bathroom fittings: the geyser, the exhaust and the cistern. Do not unscrew or dismantle anything that is not yours.",
  },
  {
    q: "Can I scan the hotel Wi-Fi to find a camera?",
    a: "Usually not. Guest networks are normally configured so devices cannot see each other, so a scanning app may list nothing useful. A camera can also sit on its own network, or record to a memory card with its radio off. A clean scan in a hotel establishes almost nothing.",
  },
  {
    q: "Is it legal for a hotel in India to have a camera in a guest room?",
    a: "Recording a guest in a private space without consent engages the criminal law, and the applicable Indian sections are set out in our hidden camera guide. A camera in a lobby or corridor is a separate question from one in a room or bathroom. For your own situation, take legal advice.",
  },
  {
    q: "Does OYO have hidden cameras in its rooms?",
    a: "There is no verified basis for saying any hotel brand's rooms contain cameras. In the widely reported Noida case of 2022, police said two men who booked the room planted the camera, checked out and returned a week later for it. A source told PTI the company operates no hotels and only lists properties.",
  },
  {
    q: "What should I do if I find a camera in a hotel room?",
    a: "If you believe you are in immediate danger, call 112. Otherwise, and only if it is safe, leave the device where it is, photograph it in place with enough of the surroundings to show its position, note the time, and report it to the police. A dismantled device is a damaged exhibit.",
  },
  {
    q: "Does the fingernail test on the bathroom mirror work?",
    a: "It checks for the wrong thing. A two-way mirror is not the pattern in any Indian case we could verify. Those cases involved a small camera placed in or on an object, such as one left on top of a geyser in a shared washroom. Time on the mirror is time not spent on the fittings overhead.",
  },
];

const unknownTrackerFaqs: Faq[] = [
  {
    q: "What does \"Unknown Accessory Detected\" mean?",
    a: "It means your iPhone has seen a Find My compatible accessory travelling with you that is separated from its owner, and could not identify it fully. Apple's guidance is precise on one point most articles get wrong: this particular wording covers AirPods and other accessories, not AirTags. An AirTag produces \"AirTag Found Moving With You\" instead.",
  },
  {
    q: "Someone put an AirTag in my car. How do I find it?",
    a: "Expect it to be inside rather than underneath. In the Ahmedabad case the tag was glued under the seat cover behind the driver's seat, and was found at a car service station, not by hand. Play the sound, then search the cabin: under and inside seat upholstery, the boot lining, the spare wheel well and the glovebox. Our vehicle guide covers a full search.",
  },
  {
    q: "Can I check for an AirTag on an Android phone?",
    a: "Yes. Android 6 and later carry unknown tracker alerts, and you can run a manual scan under Settings, then Safety and Emergency, then Unknown tracker alerts, then Scan now. Google says the scan takes about ten seconds. You can play a sound on what it finds, but Apple's Precision Finding, which walks you to the tag by distance and direction, needs an Ultra Wideband iPhone.",
  },
  {
    q: "Will the owner know if I play the sound on the tracker?",
    a: "No. Google states plainly that you will not notify the owner if you play the sound. Disabling the tracker is different: that stops future location updates, which the owner may notice, and they may still see its last recorded location. So locating it is a quieter step than switching it off.",
  },
  {
    q: "Does turning off Bluetooth or using airplane mode stop them tracking me?",
    a: "No. Both Apple and Google say switching off your own Bluetooth, location or Find My does not stop the tracker's owner seeing where it is. The tag reports through other people's passing phones, not through yours. Only disabling the tag itself stops the updates.",
  },
  {
    q: "How long before my phone alerts me about an unknown tracker?",
    a: "There is no guaranteed time. The published specification sets no deadline for how quickly a platform must notify you, and in the Ahmedabad case the first alert came in May and the device was only found at the end of August. Treat the alert as a signal that something is there, never as a measure of how long it has been there.",
  },
  {
    q: "Is tracking someone with an AirTag illegal in India?",
    a: "There is no provision naming trackers, but conduct has been charged. The Ahmedabad cyber cell registered its FIR under the stalking provision of the Indian Penal Code and section 66E of the Information Technology Act. The penal code has since been replaced by the Bharatiya Nyaya Sanhita, so the section numbering has moved. Take legal advice on your own situation.",
  },
];

const listeningDeviceFaqs: Faq[] = [
  {
    q: "Can a cell phone detect a listening device?",
    a: "Not reliably, and not in the way the apps imply. A phone has receivers tuned to the bands it needs for mobile, Wi-Fi, Bluetooth, GNSS and NFC. It has no general purpose radio power meter, so it cannot sweep across the spectrum looking for an unexplained transmitter. What the apps actually read is the magnetometer, which responds to any lump of ferrous metal, including a screw or a hinge. Our guide to the signs an office is bugged sets out why these apps fail in more detail.",
  },
  {
    q: "Can a listening device work without Wi-Fi?",
    a: "Yes, by three different routes. It can carry a SIM and use the mobile network, which needs no Wi-Fi at all. It can transmit on its own short range radio link to a receiver somewhere nearby. Or it can record to internal memory and transmit nothing, in which case someone has to come back for it. That third kind emits no signal at all, which is why a radio-only check cannot clear a room.",
  },
  {
    q: "How long can a listening device keep working?",
    a: "That depends on where its power comes from, not on how good it is. Quectel's figures for its M66 cellular module put the peak transmit current at 1.6 A against a sleep current of 1.3 mA, a ratio of more than a thousand to one. Months of operation means mains power, or long silences, or a device someone retrieves and recharges.",
  },
  {
    q: "How far away can a listening device hear a conversation?",
    a: "Much less far than the marketing suggests, because the physics works against it. Sound pressure falls by roughly 6 dB each time the distance doubles, while the room's own noise from air conditioning, traffic and computer fans does not fall off at all. A microphone four times further from the talkers loses about 12 dB of their speech and gains nothing against the background, which is why these devices sit close to where people are.",
  },
  {
    q: "What does a hidden listening device look like?",
    a: "Often, like nothing at all. The most heavily examined bugging allegation in Indian government history, the 2011 dispute over the Union Finance Minister's office in North Block, ended with no device recovered: what was actually found was adhesive, which one agency called planted and another concluded was chewing gum. In practice you are looking for an object that has a reason to be powered and no reason to be where it is, not for a recognisable gadget.",
  },
  {
    q: "Is it illegal to put a listening device in an office in India?",
    a: "The provisions that bite are not the ones people expect, because the privacy offences usually quoted concern images rather than audio. For a device carrying a SIM, read section 42(3) of the Telecommunications Act, 2023: it covers obtaining a telecommunication identifier by fraud, cheating or personation, and knowingly possessing radio equipment that uses unauthorised or tampered identifiers, with up to three years, a fine up to fifty lakh rupees, or both. Section 42(7) makes those offences cognizable and non-bailable. How it applies to your situation is a question for a lawyer.",
  },
];

const phoneListeningFaqs: Faq[] = [
  {
    q: "Is my phone listening to me for ads?",
    a: "No evidence supports it, and the one company that sold the idea was penalised for it. In May 2026 the United States Federal Trade Commission charged Cox Media Group and two partner firms over a service marketed as listening to conversations overheard by smart devices in real time. The FTC found it did not listen in on conversations or use voice data at all, and that the business consisted of reselling email lists obtained from other data brokers at a significant markup. The three firms agreed to pay 930,000 dollars in total.",
  },
  {
    q: "Then why do I see ads about something I only talked about?",
    a: "Because the targeting does not need your microphone to reach you. Advertising systems already know your location, your network, the contacts and accounts you share things with, what you and the people around you have browsed and bought, and what data brokers have sold about you. The person you were talking to may simply have searched for it. There is also a recall effect: you notice the one ad that matches a conversation and forget the thousands that did not.",
  },
  {
    q: "Are voice assistants always listening?",
    a: "In a narrow and honest sense, yes. A wake word only works if the device processes incoming audio continuously to check whether the wake word was said, so the microphone is active even when the assistant is not responding. That is different from a permanent recording being sent somewhere. False activations are an inherent property of wake word detection, and every major assistant lets you review and delete the voice history it has stored.",
  },
  {
    q: "How do I check whether an app is using my microphone right now?",
    a: "Look for the indicator. On Android, Samsung describes the green dot at the top of the screen as a tool that tells you when an application is accessing the camera or microphone, and tapping it in the notification panel shows which app. iPhones show an equivalent indicator when the microphone is in use. To review standing permissions on Android, Samsung's guidance is Settings, then Privacy, then Permission Manager.",
  },
  {
    q: "How do I stop my phone from listening to me?",
    a: "Revoke microphone permission from the apps that have no reason to hold it, through the permission manager on Android or privacy settings on iPhone. Turn the wake word off in the assistant's own settings if you do not use it, and delete the stored voice history while you are there. None of this is dramatic and none of it requires an app: the controls are already on the phone, and a detector app will not add anything.",
  },
  {
    q: "Is a privacy or detector app worth installing to stop this?",
    a: "No. An app cannot see what another app is doing with the microphone any better than the operating system already shows you, and installing one adds another party with permissions on your phone. The useful controls are the built-in ones. Our guide to the signs an office is bugged explains in more detail why phone-based detector apps cannot do what they claim.",
  },
];

const smartTvFaqs: Faq[] = [
  {
    q: "Is my smart TV listening to my conversations?",
    a: "Almost certainly not. On Samsung's own account the microphone sits in the remote control, and the company says it collects interactive voice commands only when you make a specific search request by pressing the activation button. The television's real data collection is not audio at all: it is automatic content recognition, which identifies what is on the screen rather than what is said in the room.",
  },
  {
    q: "What is ACR on a smart TV?",
    a: "Automatic content recognition. The television samples what is on the screen, turns each sample into a signature, and matches that signature against a database of known content to work out what you are watching. Samsung describes its own implementation as generating unique signatures that allow the capture of certain information regarding viewership, including viewing history and IP address. It identifies content, not conversation.",
  },
  {
    q: "Does ACR see what I watch through a set-top box?",
    a: "Yes, and this is the part most people do not expect. Because the fingerprint is taken from the screen itself, the input does not matter. In the Federal Trade Commission's 2017 case against Vizio, the televisions captured second-by-second information about video displayed on the screen from cable, broadband, set-top box, DVD, over-the-air broadcasts and streaming devices alike.",
  },
  {
    q: "Did I agree to this?",
    a: "Probably, during setup. Samsung states that ACR only runs if you opted in by consenting to the Viewing Information Services notice, which is one of the screens in the first-run wizard. That is the same kind of click-through acceptance the United States Federal Trade Commission refused to treat as opt-in consent in a separate 2026 case about advertising.",
  },
  {
    q: "How do I turn off tracking on my smart TV?",
    a: "Look for the setting by name rather than by menu path, because the menus move between models and software versions. On Samsung it is Viewing Information Services, usually under the terms and privacy section of Settings, alongside a separate interest-based advertising toggle. On LG the equivalent is Live Plus, on Vizio it is Viewing Data, on Sony it is Samba Interactive TV, and on Roku-based sets, including many TCL and Hisense models, it is the option to use information from TV inputs. Switching it off does not affect picture or sound.",
  },
  {
    q: "Does my smart TV have a camera?",
    a: "Most do not. A handful of older models shipped with a built-in camera for video calling, and a few current premium sets support a clip-on camera sold separately, which is only present if somebody attached it. If your television has no visible lens and no camera accessory plugged into it, there is no camera. The televisions worth worrying about in a room are not the ones you bought.",
  },
];

const laptopCameraFaqs: Faq[] = [
  {
    q: "Can someone watch me through my laptop camera without the light coming on?",
    a: "On current hardware that is the one thing the design is built to prevent, and on older hardware it has been done. In 2014 two Johns Hopkins researchers published a method for disabling the indicator LED on a class of Apple iSight webcams used in Macs up to roughly 2008, capturing video with no visual indication, from an ordinary application without root privileges. Apple's current platform security documentation describes an architecture intended to stop even software with root or kernel privileges from engaging the camera without lighting the indicator. The light is a hardware guarantee, not a law of nature, and which guarantee you have depends on the machine.",
  },
  {
    q: "Why does my laptop camera light turn on by itself?",
    a: "Usually because something legitimate asked for it. Video call applications check the camera when they start or when a meeting window opens, face sign-in wakes it at the lock screen, browser tabs that were granted camera access can reclaim it when you return to them, and some drivers and update routines test the device. A brief flash as an application launches is ordinary. A light that stays on while you are using nothing is the case worth investigating.",
  },
  {
    q: "How do I see which app is using my camera?",
    a: "Use the operating system rather than an app. On Windows the camera controls live under Settings, then Privacy and security, then Camera, where a master camera access toggle sits above a per-app list. Microsoft notes one real limitation there: camera privacy settings for desktop apps cannot be changed at an individual desktop app level, so classic desktop programs are governed as a single group. On a Mac, the indicator is the live signal and camera permissions are listed in the privacy settings.",
  },
  {
    q: "Can my employer watch me through my work laptop camera?",
    a: "The capability exists in remote administration software, and the best documented instance was an institution rather than a criminal. The Johns Hopkins paper records that the Lower Merion School District issued MacBooks preloaded with a remote administration tool that let officials capture images from the webcams. On a managed device the honest questions are what software is installed and what your employer disclosed, not whether it is technically possible. The indicator light still applies to that software exactly as it applies to any other.",
  },
  {
    q: "Should I cover my laptop camera?",
    a: "It is a reasonable thing to do, with one caution that comes from the manufacturer. Apple warns that closing a MacBook with a camera cover installed may damage the display, because the clearance between display and keyboard is designed to very tight tolerances, and says that a cover should be no thicker than an average piece of printer paper, about 0.1 mm. Apple also notes that covering the camera may interfere with the ambient light sensor, which affects automatic brightness and True Tone.",
  },
  {
    q: "Will a bug sweep tell me whether my webcam has been hacked?",
    a: "No, and nobody should tell you otherwise. A camera compromised through software sends its video out inside ordinary encrypted internet traffic, over the network connection you already use. There is no unexplained emission for a radio search to find and no concealed object to locate, because the camera is the one you bought. That question is answered on the machine, by examining what is installed and what has access, which is forensic work rather than a sweep of a room.",
  },
];

const employerMonitoringFaqs: Faq[] = [
  {
    q: "Is employee monitoring legal in India?",
    a: "There is no dedicated employee monitoring statute, and the Digital Personal Data Protection Act, 2023 does not make consent the mechanism. Section 7 sets out certain legitimate uses, which sit alongside consent rather than under it, and clause (i) covers processing for the purposes of employment or those related to safeguarding the employer from loss or liability, giving examples such as guarding against spying by competitors and keeping business secrets confidential. Processing for a purpose outside that is a different question. How the clause applies to a particular arrangement is a matter for a lawyer.",
  },
  {
    q: "Can my employer read my Microsoft Teams messages?",
    a: "The content exists in a form the organisation can search. Microsoft's current eDiscovery documentation states that messages in one to one chats and group chats are stored in the Exchange Online mailbox of every participant, and that channel messages are stored in the mailbox associated with the team. Chat messages discoverable through those tools include chats with yourself. Whether anyone actually looks is a matter of policy and permissions, not of technical possibility.",
  },
  {
    q: "If I edit or delete a message, is the original gone?",
    a: "Not necessarily. Microsoft's eDiscovery documentation says that if the user is on hold, previous versions of edited messages are also preserved. A hold is something an organisation applies, usually when litigation or an investigation is anticipated. Editing a message changes what colleagues see in the client. It does not necessarily change what the compliance record holds.",
  },
  {
    q: "Can my employer see my browsing history on a managed device?",
    a: "Not through device management itself. Microsoft's Intune documentation lists what an organisation can never see, and that list includes calling and web browsing history, email and text messages, contacts, calendar, passwords, pictures including the camera roll, and the content of user-created documents. That is a statement about what the management platform exposes, not about separate monitoring software an employer may also install, or about browsing done through a company network or a company browser profile.",
  },
  {
    q: "Can my employer see my location or my personal apps?",
    a: "It depends on who owns the device, and Microsoft's documentation draws the line clearly. An organisation can view a lost corporate-owned device's location, and Microsoft states plainly that they cannot view a personal device's location. On app inventory, a corporate-owned device shows all installed apps, while a personal device shows the managed app inventory, which is work and school apps. Microsoft adds that some configurations allow organisations to see more than the managed app inventory on a personal device.",
  },
  {
    q: "How do I tell whether my work laptop is being monitored?",
    a: "Start from ownership and enrolment rather than from a search for hidden software. Check whether the device is enrolled in management, look at what is installed, and read the acceptable use or IT policy you were given, which is where any monitoring should be described. If a company-owned Windows device is managed, Microsoft documents that the organisation can query details including file paths and file names, registry and event log entries, and details about running processes.",
  },
];

const landlordCameraFaqs: Faq[] = [
  {
    q: "Can my landlord put cameras inside the house I rent?",
    a: "Inside the part of the premises you occupy, a camera is in the space the tenancy gives you, and in a bathroom, bedroom or changing area it moves out of the realm of house rules entirely and into the voyeurism and privacy provisions of criminal law. Ownership of the building does not create a right to watch the inside of a home somebody else is living in. A camera in a genuinely common entrance is a different question from a camera in a living room, and the two should never be argued as one thing.",
  },
  {
    q: "Can my landlord or neighbour point a camera at my door?",
    a: "An Indian court has now said no in terms. On 2 November 2026 LiveLaw reported that the Allahabad High Court, hearing a petition by a man whose neighbour's camera covered the entry and exit points of his house, held that no private CCTV camera can be installed and positioned in such a manner as to interfere with the privacy of a neighbour. The court did not order the camera moved. It disposed of the petition and directed the petitioner to apply to the District Magistrate, who must decide within one month.",
  },
  {
    q: "What should I do about a camera I object to?",
    a: "Start by establishing what it actually covers, because that is the question everything else turns on, and photograph its position from where you stand rather than handling it. Raise it in writing with the landlord or the society so there is a record and a dated request. The Allahabad High Court's route in the neighbour case was an application to the District Magistrate. If the camera covers a bathroom, bedroom or changing area, that is not a dispute to negotiate, it is a police matter.",
  },
  {
    q: "Is a camera in the common entrance of my building allowed?",
    a: "A camera covering a shared entrance, lift or corridor is an ordinary security measure and is treated very differently from one covering a private space. The line is not the building, it is what falls inside the frame. A camera at an entrance that also covers the inside of a doorway, or that is angled to see into a window or a balcony, stops being an entrance camera in substance whatever it is called.",
  },
  {
    q: "Does India have a law about landlords and CCTV specifically?",
    a: "No dedicated statute governs it, which is why the question is answered through general privacy and criminal provisions and, now, through what courts say about where a private camera may point. The notice and consent machinery under the Digital Personal Data Protection Rules, 2025 commences in May 2027, so the separate question of what a landlord or a housing society must tell residents about cameras is not yet operating. How any of this applies to your tenancy is a question for a lawyer.",
  },
  {
    q: "Can I remove or cover a camera I think is unlawful?",
    a: "Removing or disabling something is rarely the right first move, because it destroys the evidence of what it was and where it pointed, and it can turn your complaint into a dispute about your own conduct. Record what exists, raise it in writing, and take the route that fits: the landlord or society for a camera in a shared area, the police for one covering a private space. Our guide to hidden cameras in hotels and paying guest accommodation covers the case where the camera was never disclosed at all.",
  },
];

const wifiDeviceFaqs: Faq[] = [
  {
    q: "Why is there an unknown device on my Wi-Fi?",
    a: "Most often because a phone you own is not using its real hardware address. Apple's devices identify themselves to each network using a different Wi-Fi address, and Android has used a randomised address by default since Android 10. The router only ever sees that address, so a device you have used for years can appear under a name it does not recognise. An unfamiliar entry is a prompt to identify, not evidence of an intruder.",
  },
  {
    q: "Does a randomised address change every day?",
    a: "Usually not, and this is where most advice is wrong. Android's default is persistent randomisation: the address is derived from the network profile and, in Google's own words, stays the same until a factory reset, with forgetting and rejoining the network making no difference. On Apple devices the rotating option changes the address every two weeks, and the fixed option does not rotate at all. So a genuinely new entry appearing today is not automatically explained by randomisation.",
  },
  {
    q: "How do I work out which device an unknown entry is?",
    a: "Match addresses rather than guessing from names. Open the Wi-Fi settings on each of your own devices, find the address it reports for that specific network, and compare it with the list on the router. Work through the household one device at a time, including the ones nobody thinks of, such as televisions, set-top boxes, speakers, printers, consoles and anything with an app. The entry that remains after everything known is accounted for is the only one worth worrying about.",
  },
  {
    q: "Would a hidden camera show up in the list?",
    a: "Only if it is on your network, and that is a real limitation rather than a technicality. A camera joined to your Wi-Fi appears like any other client. A camera that runs its own hotspot, uses a mobile SIM, is wired, or simply records to a memory card and transmits nothing, does not appear at all, because it is not using your network. That last kind emits nothing to find by any network method, which is why a device list cannot clear a room.",
  },
  {
    q: "Should I just change my Wi-Fi password?",
    a: "It is a reasonable step and it is more effective than blocking an address. Changing the password disconnects everything and forces each device to rejoin, which both removes anything that should not be there and gives you a clean list to work from as your own devices come back one by one. Blocking by address is weaker, because the address is the thing that can be changed.",
  },
  {
    q: "Can my internet provider or the router see more than I can?",
    a: "The router sees the addresses and traffic volumes of everything connected to it, which is more than the app interface usually shows you. Logging into the router's own administration page rather than the provider's mobile app will often give you a fuller client list, including wired devices that the app omits. Which of these your provider exposes differs between operators and between router models, so the honest answer is to check your own equipment.",
  },
];

const phoneTappedFaqs: Faq[] = [
  {
    q: "How can I tell if my phone is tapped?",
    a: "Not from the handset, and that is the honest answer nobody sells. A lawful interception in India happens at the telecom operator, not on your device, so there is nothing on the phone to find and no code to dial that reveals it. Unlawful interception of your conversations almost always means software installed on the device instead, which is a different problem with different evidence. The folklore signs, clicks, static, a warm battery, were debunked decades ago.",
  },
  {
    q: "Who can authorise a phone tap in India?",
    a: "Under the Telecommunications (Procedures and Safeguards for Lawful Interception of Messages) Rules, 2024, the competent authority is the Union Home Secretary for the Centre and the Secretary in charge of the Home Department for a State. It is not a police officer's decision, not a court order in the ordinary sense, and not something a telecom operator can do on request.",
  },
  {
    q: "How long can an interception order last?",
    a: "Each order stays in force, unless revoked earlier, for a period not exceeding sixty days, and it can be renewed. The Rules set an outer limit: no order may remain in force beyond a total of 180 days. That ceiling is one of the most useful things to know, because it means lawful interception is time-bound by design rather than open-ended.",
  },
  {
    q: "Is anyone checking that these orders are lawful?",
    a: "Yes, and the machinery is specified. Every order must go to a review committee within seven working days. At the Centre that committee is chaired by the Cabinet Secretary with the Secretaries of Legal Affairs and Telecommunications; in a State it is chaired by the Chief Secretary. The committee meets every two months, and if it finds an order does not comply with section 20 it may set aside the order and direct destruction of the copies of the intercepted messages.",
  },
  {
    q: "What happens to the recordings afterwards?",
    a: "The Rules impose destruction timetables rather than leaving it open. Records held by the authorised agency, the competent authority and the review committee are to be destroyed every six months, unless they are or are likely to be required for functional requirements or under court directions. The Department of Telecommunications and the telecom entities involved must destroy their records within two months of the interception order being discontinued.",
  },
  {
    q: "Does *#21# or any similar code show whether my phone is tapped?",
    a: "No. Those codes report call forwarding settings, which is a different thing entirely and tells you nothing about interception. Our guide to the signs an office is bugged takes that particular myth apart along with the clicks and static that people have reported for decades.",
  },
];

const whatsappFaqs: Faq[] = [
  {
    q: "Can someone read my WhatsApp messages from another phone?",
    a: "The realistic route is linked devices rather than interception. WhatsApp lets you link up to four companion devices to one account, and a linked device then receives your messages. Linking requires somebody to scan a QR code on your phone while it is open and in your hands, which is why the risk here is physical access to your handset rather than anything remote. The Linked Devices screen in WhatsApp lists what is currently linked, and anything there can be logged out.",
  },
  {
    q: "How do I see which devices are logged into my WhatsApp?",
    a: "Open WhatsApp, go to Settings and then Linked Devices. The screen lists every companion device currently linked to your account, along with when it was last active. Anything you do not recognise can be logged out from that same screen, which takes effect immediately. Checking this periodically is the single most useful habit for this particular worry.",
  },
  {
    q: "Does a linked device stay connected forever?",
    a: "No, and this is a useful property. WhatsApp requires you to log in on your primary phone at least every 14 days to keep linked devices connected. A companion device that somebody linked without your knowledge therefore has a built-in expiry, and it will drop off if your primary phone stops checking in. It also means a device linked a month ago and never used since may already be gone.",
  },
  {
    q: "Can someone read my WhatsApp by scanning a QR code?",
    a: "That is exactly how linking works, which is why the QR code screen deserves respect. The code has to be scanned by a device while your own phone is open and showing the linking screen, so the scenario is somebody with your handset in their hands for a minute, not somebody at a distance. The defence is the same as for most phone-based surveillance: a lock screen nobody else can open, and knowing who has had the device.",
  },
  {
    q: "Is WhatsApp itself reading or handing over my messages?",
    a: "Message content on WhatsApp is end-to-end encrypted, which is a different protection from the one most people are asking about. It means the content is not readable in transit. It does not protect against somebody who has access to one of the endpoints, which is to say your own phone in somebody else's hands, or a device you have linked. Almost every real case is about an endpoint rather than about the encryption.",
  },
  {
    q: "What about my WhatsApp backup?",
    a: "A backup is a separate copy living in a cloud account rather than on the phone, so whoever controls that cloud account is a separate consideration from whoever controls WhatsApp. If you are working through who can reach your messages, the account holding the backup belongs on the same list, and our guide to checking who has access to your Google account covers how to audit one of them.",
  },
];

const publicWifiFaqs: Faq[] = [
  {
    q: "Is hotel Wi-Fi safe to use?",
    a: "Far safer than the standard advice assumes, because the threat that advice was written for has largely been closed. Google reports that when the analysis is limited to public sites, HTTPS adoption reaches 98 per cent on Windows and over 99 per cent on Android and Mac. Encrypted traffic cannot be read by somebody else on the same network. The residual risk is the small fraction that is not encrypted, and Google's own framing is the useful one: an attacker only needs a single insecure navigation.",
  },
  {
    q: "Do I need a VPN on public Wi-Fi?",
    a: "A VPN moves the trust rather than removing the risk, and that is the honest way to think about it. It stops the local network and its operator from seeing where you connect, which is a genuine benefit. It does not make an insecure site secure, and it hands the same visibility to the VPN provider instead. If you would not trust the hotel with that information, the question becomes whether you trust the VPN company more, which is a real question rather than a rhetorical one.",
  },
  {
    q: "What actually changed to make public Wi-Fi less dangerous?",
    a: "Encryption became the default on the web. The classic warning described an attacker on the same network reading your traffic, and that depended on traffic being readable. With HTTPS now covering almost all public browsing, the content and the specific pages are no longer visible to somebody sitting in the same cafe. Chrome is going further: in Chrome 154, in October 2026, the Always Use Secure Connections setting turns on by default for public sites, warning users before a first insecure connection.",
  },
  {
    q: "What is still actually risky on a shared network?",
    a: "Three things rather than the general sense of danger. The sites that are still plain HTTP, which Google notes are often invisible to the user because redirects hide them. Captive portal pages, which deliberately intercept your first connection and train people to accept warnings. And other devices on the same network, which matters because being on somebody's local network is precisely the position that lets an attacker exploit insecure local traffic.",
  },
  {
    q: "Is it safe to do banking on hotel Wi-Fi?",
    a: "Banking is among the better-protected things you can do, because banks were early and thorough on encryption and add their own authentication on top. The ordinary advice to avoid it on public networks is a holdover from the era this page describes. If you want a rule that is simple and still correct, use mobile data for anything you would be unwilling to redo, and do not dismiss a certificate warning on any network, ever.",
  },
  {
    q: "Should I worry about the hotel itself watching my traffic?",
    a: "The network operator sees which servers you connect to, even when it cannot read the content, and that metadata is real. This is the one place a VPN genuinely helps. It is also a different concern from the one most people have in a hotel room, and if the worry is the room rather than the network, our guide to hidden cameras in hotels and paying guest accommodation is the better page.",
  },
];

const googleAccessFaqs: Faq[] = [
  {
    q: "How do I see who has access to my Google account?",
    a: "Google publishes the route. Open your Google Account, go to Security and sign-in, and in the Your devices panel choose Manage all devices. Google says the list shows devices where you are currently signed in or have been in the last few weeks. Read every entry rather than scanning for something alarming, because a device you set up yourself and forgot looks exactly like one you did not.",
  },
  {
    q: "Why does one device appear several times in the list?",
    a: "Because Google lists sessions rather than only devices. Google describes a session as a period of time during which you are signed in to your account, and several sessions on a single device are normal rather than suspicious. The practical consequence is that if you decide to sign a device out, and it shows multiple sessions, you need to sign out of all of them rather than just the first.",
  },
  {
    q: "I signed a device out and it came back. What does that mean?",
    a: "It means whoever is using it still has a way in, and that is more informative than the original entry was. A session that returns after being removed points at either a saved password somebody else holds or continuing physical access to a device. At that point the useful step is changing the password and reviewing two-step verification rather than signing the session out again.",
  },
  {
    q: "Does signing a device out remove an app's access as well?",
    a: "No, and this is the gap most people miss. Third-party applications and services that you connected to your account hold their own access, granted separately, and a session sign-out does not revoke it. Those connections are listed in the same security settings under third-party access and need reviewing on their own terms, because an old app you no longer use may still be able to reach your data.",
  },
  {
    q: "What should I check first if I think somebody is in my account?",
    a: "In this order: the device and session list, recent security activity, the account recovery phone number and email address, and anything forwarding your mail onward. Recovery details matter most, because somebody who has changed them can take the account back after you remove them. Do all of it from a device you believe is clean, and change the password before you finish rather than after.",
  },
  {
    q: "Is this the same problem as spyware on my phone?",
    a: "No, and the difference decides what you should do. Account access means somebody has your credentials or a live session, and it is fixed in the account's own settings. Software installed on a device is a different problem with different evidence, and removing it first can be the wrong move. Our guide to phone monitoring and stalkerware deals with that case.",
  },
];

const bengaluruPgFaqs: Faq[] = [
  {
    q: "Are CCTV cameras allowed in Bengaluru PGs?",
    a: "In some places they are required and in others they are prohibited, which is why a blanket answer is wrong. On LiveLaw's report of the Karnataka High Court's order of 10 September 2026, CCTV installation is prohibited in bedrooms, bathrooms and toilets, while PGs housing women or vulnerable persons must have CCTV in common areas. So a camera covering a corridor or an entrance may be there because the court said it should be. A camera covering a bedroom or a washroom is a different matter entirely.",
  },
  {
    q: "What did the Karnataka High Court actually order about PGs?",
    a: "The order of 10 September 2026 was made by Justice Suraj Govindaraj in M/s Princess Ladies PG v. The Chief Commissioner and connected petitions, WP 14750/2025. Bar and Bench reported it as guidelines for the regulation, inspection and safety of private paying guest accommodation in Bengaluru, directing authorities to identify unlicensed PGs, run risk-based inspections, and ensure compliance with fire, building, electrical and occupant safety norms. The camera directions sit inside that wider framework rather than standing alone.",
  },
  {
    q: "How many Bengaluru PGs are actually unlicensed?",
    a: "The figure came from the authority itself rather than from a campaign group. The News Minute reported on 18 September 2026 that the Greater Bengaluru Authority, through advocate B S Karthikeyan, told the court that of around 5,000 PG accommodations inspected in the East Zone, nearly 2,500 were operating without proper licences, sanctioned building plans or fire safety clearances. At the hearing of 27 October the GBA put the non-compliant share across the city at nearly half.",
  },
  {
    q: "Can my PG be sealed, and what happens to me if it is?",
    a: "Sealing is on the table and the court has said so in terms. LiveLaw reported that on 27 October 2026 the court warned non-compliant PGs of sealing, while noting it had held back because sealing would hurt students and employees who depend on them. The court has consistently said occupants must be given adequate time to relocate, and earlier reporting referred to three weeks. If your building receives a notice, that time is the thing to establish first.",
  },
  {
    q: "Should I ask whether my PG is licensed before moving in?",
    a: "It has stopped being a pedantic question and become a practical one. With roughly half of inspected premises found non-compliant and sealing now explicitly available to the authorities, whether a PG holds a licence, a sanctioned building plan and a fire safety clearance affects whether you will still be living there in six months. Ask to see them, and keep a copy of what you are shown.",
  },
  {
    q: "What do I do if I find a camera in a bedroom or bathroom?",
    a: "Treat it as a criminal matter rather than a complaint to the manager. Photograph it in place from where you stand, without handling or dismantling it, and note exactly what it covers. Report it to the police: cybercrime complaints, including the publication of private images, can be filed at cybercrime.gov.in, which routes to the relevant state police, and in immediate danger call 112. Our national guide to hidden cameras in hotels and paying guest accommodation covers what the Indian cases show about who actually places them.",
  },
];

const hyderabadCameraFaqs: Faq[] = [
  {
    q: "Is a Hyderabad hotel or mall required to check for hidden cameras?",
    a: "Hyderabad has gone further than most Indian cities on this. When the city police launched its She Netra teams in April 2026, Deccan Chronicle reported that establishments must procure their own camera detectors and conduct regular internal sweeps, and must appoint a Customer Safety In-charge to act as nodal officer with the She Teams. Siasat reported the same requirement, that the respective management would be responsible for procuring the camera detectors. Institutions that violate the rules, and the employees responsible, face blacklisting.",
  },
  {
    q: "What is She Netra?",
    a: "Seven police teams, one for each of Hyderabad's seven zones, launched on 10 April 2026 by Commissioner VC Sajjanar at the Old Commissionerate Office in Basheerbagh. Deccan Chronicle reported that they exist to detect and neutralise hidden cameras in public and private spaces such as hotels, malls and hostels, and that they conduct frequent surprise inspections across the city. The practical point for a guest is that these premises are now subject to unannounced checks by people looking specifically for cameras.",
  },
  {
    q: "Do businesses have to declare that their premises are free of hidden cameras?",
    a: "A circular from the Director General of Police, dated 29 March, set out guidelines of that kind. ETV Bharat, reporting a Telangana High Court hearing in September 2025, described it as requiring warning notices to be displayed prominently in establishments and requiring shop and mall owners to submit declarations to local police inspectors every six months confirming that their premises are free of such devices. The petition before the court alleged that the Women's Safety Department had failed to implement it.",
  },
  {
    q: "Do the cameras in Hyderabad hostels actually work?",
    a: "Often not, and the figure comes from the police themselves. Deccan Chronicle reported on 18 July 2026 that ten special teams with 35 personnel inspected 446 hostels over nine weeks under Suraksha Nivas 1.0, part of Project Safe Stay. While 97.5 per cent of those hostels had CCTV, more than 30 per cent of the cameras were non-functional. None of the hostels had fire exit plans, and 62 per cent scored below 40 on safety.",
  },
  {
    q: "Which police force covers my address in Hyderabad?",
    a: "It depends on where you are, and the boundary runs through the places people work. HITEC City, Madhapur, Raidurg, Gachibowli and the Financial District are Cyberabad Commissionerate, while Banjara Hills, Secunderabad, Khairatabad and the Old City are Hyderabad City Police. A reorganisation at the end of December 2025 also renamed the eastern commissionerate. Our Hyderabad page sets this out, and it is worth confirming the current position for your address before filing anything.",
  },
  {
    q: "What should I do if I find a camera in a room in Hyderabad?",
    a: "Treat it as a criminal matter rather than a complaint to the management. Photograph it in place from where you stand, without handling or dismantling it, and note what it covers. Report it to the police: cybercrime complaints, including the publication of private images, can be filed at cybercrime.gov.in, which routes to the relevant state police, and in immediate danger call 112. Because a camera in a private space is a cognizable offence, it is registered at a police station rather than through an online petition.",
  },
];

const kolkataCctvFaqs: Faq[] = [
  {
    q: "Can a family member install CCTV inside a shared house without my consent?",
    a: "Not inside the residential portion, on the clearest Indian authority there is. The Calcutta High Court held that installing CCTV cameras inside the residential portion of a dwelling house without the consent of co-occupants or co-trustees violates their right to privacy, and the Supreme Court declined to interfere with that judgment on 9 May 2025. The dispute was between two brothers over cameras one had installed to protect valuables and an antique collection.",
  },
  {
    q: "Did the court ban CCTV in the house altogether?",
    a: "No, and that is the part most summaries miss. The High Court ordered the removal of five cameras from the residential portion, not every camera on the property. ThePrint's report records that the parties were left at liberty to take an alternative measure for the security of valuable articles preserved in the building, and that the parties shall enjoy joint control over the CCTV cameras, their record and management. The remedy was shared control, not prohibition.",
  },
  {
    q: "What is the legal basis for this?",
    a: "Article 21, through the Supreme Court's 2017 Puttaswamy judgment. LiveLaw's report records that the Calcutta High Court relied on Puttaswamy for the proposition that the right to privacy of every individual is guaranteed and protected by Article 21, and that privacy is an intrinsic part of the right to life and personal liberty. The court also found that operating the cameras without the co-trustee's consent amounted to restrictions on his right to free enjoyment of property.",
  },
  {
    q: "Does this ruling apply outside West Bengal?",
    a: "It is binding in West Bengal and persuasive elsewhere, which is a meaningful difference. A Calcutta High Court judgment binds courts in its own jurisdiction. Because the Supreme Court declined to interfere rather than deciding the point itself, the dismissal does not create binding national precedent in the way a reasoned Supreme Court judgment would, but the judgment stands and is the most directly applicable Indian authority on cameras inside a shared dwelling.",
  },
  {
    q: "Is this the same question as a landlord putting up cameras?",
    a: "No, and the difference is who holds rights in the property. This case concerned co-occupants and co-trustees of the same dwelling, people with their own claim to the space. A landlord and a tenant is a different relationship, and a neighbour pointing a camera at your door is a third. Our guide to whether a landlord can put cameras up covers those, including a separate ruling from the Allahabad High Court about where a private camera may point.",
  },
  {
    q: "What about hotels and guest houses in Kolkata?",
    a: "That is a separate and currently very active enforcement question. Business Today reported on 9 September 2026 that after a fire at a guest house on Mirza Ghalib Street on 19 August killed nine people, joint teams from the state fire services department, the Kolkata Municipal Corporation and Kolkata Police inspected 960 establishments and served temporary closure notices on 919 of them for non-compliance with fire safety norms. Only 41 were compliant.",
  },
];

const kochiNeighbourCameraFaqs: Faq[] = [
  {
    q: "Can I make my neighbour remove a CCTV camera facing my house?",
    a: "In Kerala, not on the strength of privacy alone. In Sivasankaran @ Sankarankutty v. State of Kerala, WP(C) 8754/2025, Justice N. Nagaresh held that unless there is an established case of snooping into the affairs of the petitioners, removal cannot be directed. The couple had alleged the camera covered their drawing room and bedroom; what was missing was material showing that it did.",
  },
  {
    q: "Are there rules in Kerala on how a private person may install CCTV?",
    a: "The High Court asked for them in January 2023. In Agnes Michale v. Cheranalloor Grama Panchayat it held that the situation called for guidelines on the manner in which CCTV cameras are to be installed, and directed the State Police Chief to frame them with the State Government. We could not locate any published set, so if you are told one exists, ask for its number and date.",
  },
  {
    q: "The Allahabad High Court said a private camera cannot interfere with a neighbour's privacy. Does that apply in Kochi?",
    a: "It is persuasive, not binding, because a judgment of one High Court does not bind courts in another state. For an address in Kochi the governing court is the Kerala High Court, and its latest word sets a higher evidential bar. Plan on proving what the camera covers rather than on the principle deciding it for you.",
  },
  {
    q: "Does the Digital Personal Data Protection Act help against a neighbour's camera?",
    a: "No, and this is the point most people get wrong. Section 3(c)(i) says the Act does not apply to personal data processed by an individual for any personal or domestic purpose, and a resident's camera on their own house is the clearest instance of that. What remains is Article 21 and, where a private act is captured, the criminal law.",
  },
  {
    q: "What should I record before I complain about a camera?",
    a: "The camera's position and, separately, the view from each place you say is exposed, so the two together show the line of sight. Photograph from your own property and do not touch the camera. Then put the request in writing so there is a dated record. In the 2025 case the couple had done that much; it was the absence of coverage evidence that decided it.",
  },
  {
    q: "Is a camera covering my gate a criminal offence?",
    a: "Usually not. Section 77 of the Bharatiya Nyaya Sanhita concerns watching or capturing the image of a woman engaged in a private act where she would usually expect privacy, and a gate or a shared pathway is not that. A camera with a bathroom or bedroom in frame is a different matter, and it belongs with the police.",
  },
];

const ahmedabadCctvHackFaqs: Faq[] = [
  {
    q: "Can CCTV cameras really be hacked?",
    a: "Yes, and there is an Indian case on the record rather than a hypothetical. Ahmedabad Cyber Crime Branch registered a case on 17 February 2025 after footage from a maternity hospital's labour room appeared on paid channels. On the police account carried by PTI, the recorder was entered by a brute force attack against an unsecured IP address and port. Nothing was planted and nothing was concealed. The cameras were the hospital's own.",
  },
  {
    q: "How would I know whether my own cameras are exposed?",
    a: "The risky combination is remote viewing switched on, a port opened on the router to allow it, and a recorder password that is the factory default or reused from somewhere else. Look at the recorder rather than the cameras: check the list of user accounts for names you did not create, check whether remote access is enabled, and check whether anyone outside the premises still has the password.",
  },
  {
    q: "Is hacking a CCTV system a criminal offence in India?",
    a: "The accused in the Ahmedabad case were first booked under sections 66E and 67 of the Information Technology Act, which cover capturing or transmitting private images without consent and obscene material in electronic form. Reports record that further provisions were added later, including section 66F of the same Act. The point for a premises owner is that the offence is committed against the people recorded, who were in the owner's care.",
  },
  {
    q: "Should I just take my cameras off the internet?",
    a: "If nobody genuinely needs to watch the feed from outside the building, then yes, and that single change removes most of the exposure. If remote viewing is needed, prefer the manufacturer's own application over opening a port on the router to the recorder, change every default credential, and keep the recorder's firmware current. Those are the measures the Cyber Swachhta Kendra alert sets out.",
  },
  {
    q: "Can a bug sweep tell me whether my CCTV was hacked?",
    a: "No, and anybody who says otherwise is selling you the wrong thing. A physical examination finds devices that were put somewhere they should not be. Whether a recorder was accessed from outside is answered from its own logs, its account list and the router's configuration. They are different jobs, and the second one is usually cheaper.",
  },
  {
    q: "What should I ask a hospital, salon or PG about their cameras?",
    a: "Four questions, and they are reasonable ones to ask. Who can view the live feed, and from where. Is remote access enabled at all. How long is footage kept and on what device. And who else holds the recorder password, including any installer or contractor who set it up and never came back. A place that cannot answer those has not thought about it.",
  },
];

const cctvRulesFaqs: Faq[] = [
  {
    q: "Is there a CCTV Act in India?",
    a: "No. There is no single statute called a CCTV Act. Four separate bodies of law apply at once: the Bureau of Indian Standards registration rules govern the device that may lawfully be sold, High Court decisions govern where a camera may point, the Digital Personal Data Protection Act, 2023 governs the footage once a business or society holds it, and the criminal law applies when somebody is filmed in a private act.",
  },
  {
    q: "Does my CCTV camera need BIS registration?",
    a: "The camera has to be a registered model for it to be lawfully sold in India. CCTV cameras and CCTV recorders sit in the Ministry of Electronics and Information Technology's Compulsory Registration Order under IS 13252 (Part 1). Since 9 April 2025 a registration also needs a security test report against the Essential Requirement(s) for Security of CCTV, known as ER:01. The obligation falls on the manufacturer or importer rather than on you as the buyer, but the model you own is either on the register or it is not.",
  },
  {
    q: "How do I check whether a camera is a registered model?",
    a: "Ask the seller for the registration held for that exact model number, not for the brand. Packaging for a model that has passed the security test may carry the line that the camera complies with Essential Requirement(s) for Security. A brand being well known establishes nothing: Reuters reported on 1 October 2026 that more than 700 of roughly 770 internet camera listings it reviewed on Amazon and Flipkart were models absent from the public register.",
  },
  {
    q: "How long must CCTV footage be kept in India?",
    a: "For ordinary private premises, no Indian law sets a retention period. The only detailed storage rule comes from the Supreme Court's directions on cameras inside police stations, where systems capable of eighteen months of recording were required. A housing society, office or shop decides its own period, which is why that decision should be written down rather than left to whatever the recorder does by default.",
  },
  {
    q: "Do I need to put up a sign saying CCTV is in use?",
    a: "There is no general Indian law requiring a CCTV sign on private premises. The duty arrives from a different direction. Under the Digital Personal Data Protection Act, 2023 and the Rules notified on 14 November 2025, an organisation processing personal data has to give the people concerned a clear, standalone notice of the purpose, and recognisable footage of a person is personal data.",
  },
  {
    q: "Can I install a camera at my own front door?",
    a: "A camera covering your own door and your own property is the ordinary case and nobody needs permission for it. The difficulty starts with coverage rather than ownership. Courts in India have treated a private camera that reaches into a neighbour's windows or private space as a different matter from one watching your own entrance, and the rulings do not all begin from the same position.",
  },
  {
    q: "Does the DPDP Act apply to the cameras at my own house?",
    a: "Section 3 of the Act excludes personal data processed by an individual for a personal or domestic purpose. A household camera watching its own gate normally sits inside that exclusion. A housing society, an employer, a clinic or a shop is not an individual acting domestically, so the exclusion does not carry across to them.",
  },
];

const spyCameraLegalFaqs: Faq[] = [
  {
    q: "Is it legal to buy a spy camera in India?",
    a: "Buying a concealed camera is not itself listed as an offence in Indian law, and that is why the trade is open. Two other things are regulated. The device has its own compliance requirements, because a wireless camera needs equipment type approval from the Wireless Planning and Coordination Wing and a camera sold as CCTV needs registration with the Bureau of Indian Standards. And the use is squarely covered by the criminal law. The purchase is the least regulated step in the chain.",
  },
  {
    q: "Which law applies if someone films me with a hidden camera?",
    a: "Two provisions do different work. Section 77 of the Bharatiya Nyaya Sanhita, 2023 covers watching, capturing or spreading images of a woman engaged in a private act where she expects privacy, with one to three years on a first conviction and three to seven on a later one. Section 66E of the Information Technology Act, 2000 covers intentionally capturing, publishing or transmitting an image of a person's private area without consent in circumstances violating privacy, with up to three years or a fine up to two lakh rupees, or both.",
  },
  {
    q: "Is selling spy cameras illegal in India?",
    a: "There is no provision that makes the sale of a concealed camera an offence by itself, which is exactly the gap a Lok Sabha submission of 24 July 2019 complained about, asking why these devices were available in the open market both online and offline without any regulation or licensing system. Selling an uncertified wireless device is a different matter, and that is where sellers are exposed.",
  },
  {
    q: "Does a wireless spy camera need government approval?",
    a: "A wireless device operating in India's de-licensed bands needs Equipment Type Approval. The Department of Telecommunications grants it through self-declaration on the Saral Sanchar portal for a fee of ten thousand rupees, and its own service page names cameras among the products covered. Radar, jamming devices, drones and satellite equipment are excluded from the self-declaration route. A device manufactured outside India needs the approval before it is imported.",
  },
  {
    q: "Can I buy a hidden camera detector in India?",
    a: "Yes. Owning and using a detector to examine a space you are entitled to be in is not restricted, and this is the purchase that actually matches what most people on this page want. A jammer is the opposite case: the Department of Telecommunications advisory of July 2022 states that cellular jammers, GPS blockers and other jamming devices are generally illegal for private individuals and organisations to procure or use.",
  },
  {
    q: "I think there is a camera in my room. What should I do first?",
    a: "If you believe you are in immediate danger, call 112. Otherwise, and only if it is safe, leave the device where it is, photograph it in place with enough of the surroundings to show what it was pointing at, note the time, and report it to the local police. A cybercrime complaint can be filed at cybercrime.gov.in, which routes to the relevant state police. Dismantling the device damages the only evidence of where it was aimed.",
  },
];

const callRecordingFaqs: Faq[] = [
  {
    q: "Is call recording legal in India without consent?",
    a: "No Indian statute makes it an offence for a person taking part in a call to record it, and that is why the question has no clean yes or no answer. The law puts its weight elsewhere: on interception by somebody who is not on the call, which is tightly controlled, and on what is done with a recording afterwards. Sharing a private recording can engage separate provisions even where making it did not.",
  },
  {
    q: "Is a recorded call accepted as evidence in an Indian court?",
    a: "It can be. In Vibhor Garg v. Neha, decided on 14 July 2025, the Supreme Court held that a spouse's secretly recorded telephone conversation is admissible in matrimonial proceedings, and said that a recording made without the speaker's consent is not a prohibition on the admissibility of the evidence. The Court also required courts to treat such material with caution, with relevance, voice identification and accuracy proved and no sign of tampering.",
  },
  {
    q: "Can the police record my phone calls?",
    a: "Only through a lawful interception order under Section 20 of the Telecommunications Act, 2023, following the procedure notified on 6 December 2024. An order cannot be made at all unless the issuing authority has considered that the information could not be obtained by any other reasonable means, and an order issued in the field without the competent authority's signature has to be confirmed within seven working days.",
  },
  {
    q: "What happens if an interception order is not confirmed in time?",
    a: "The Rules are unusually direct about it. Where an order issued in the field is not confirmed by the competent authority within seven working days of issue, the interception must cease at once, the intercepted messages cannot be used for any purpose including as evidence in a court of law, and copies must be destroyed within two working days with written confirmation to the competent authority.",
  },
  {
    q: "Why can my phone no longer record calls?",
    a: "Because of a platform rule rather than Indian law. Google's Play Store policy from 11 May 2022 stopped third party applications using the accessibility interface to record calls, which is how most recording apps on Android had worked. Handsets whose manufacturer builds recording into the dialler were not affected, and several of those announce the recording to both sides when it starts.",
  },
  {
    q: "Can somebody record my calls from my own phone?",
    a: "That is a different problem from interception, and it is the one worth checking. Software installed on the handset is the realistic route for an individual, which is why the question usually belongs with a look at the device, its accounts and what has permission to use the microphone rather than with the telecom operator. Our guide on whether a phone is tapped sets out what can and cannot be told from the handset itself.",
  },
];

const societyCctvFaqs: Faq[] = [
  {
    q: "What do the rules say about CCTV in a housing society?",
    a: "Far less than most committees assume. In the Maharashtra model bye-laws for a co-operative housing society of the flat owner type, dated 2 September 2014, cameras appear once, in bye-law 67(a), which makes the society responsible for repairing and maintaining security appliances including CCTV. There is no provision on where cameras may point, how long footage is kept, who may view it or whether residents must be told.",
  },
  {
    q: "Can a member demand CCTV footage from the society?",
    a: "There is no bye-law that says so. Bye-law 23(a) gives a member the right to inspect books, registers and documents free of cost as provided in Section 32 of the Act and to obtain copies on payment, and footage is not a book, a register or a document. In practice access depends on whether the committee has adopted a written policy, which is why adopting one is worth more than arguing about it afterwards.",
  },
  {
    q: "Does the DPDP Act apply to a housing society's cameras?",
    a: "Recognisable footage of a person is personal data, and a society is not an individual processing data for a personal or domestic purpose, so the exclusion that covers a household camera does not cover the society. The Digital Personal Data Protection Rules, 2025 were notified on 14 November 2025 with an eighteen month phased compliance period. How the duties apply to a residential building has not been tested, so a written policy is the sensible position rather than a settled requirement.",
  },
  {
    q: "Can a society camera point at my flat door?",
    a: "A camera covering a common lobby will usually take in flat doors, and that is not the dispute that reaches courts. The dispute is a camera positioned so that it covers the inside of a home when a door opens, or a private balcony or window. Indian High Courts have taken different starting points on when such a camera must be moved, and our guides on a neighbour's camera and on CCTV in a shared home set out both.",
  },
  {
    q: "How long should a society keep CCTV footage?",
    a: "No Indian law sets a period for private premises, so the recorder's default is doing the deciding in most buildings. That is the wrong way round. A committee should fix a period deliberately, record it in the minutes, and apply it, because an unwritten practice is impossible to defend to a resident, to an insurer or to a police officer asking why a particular week is missing.",
  },
  {
    q: "Who should hold the password to the society's recorder?",
    a: "A named, recorded list of people rather than a role, and the list should exclude anyone who has left. The installer who commissioned the system years ago is the account that gets forgotten most often. Reviewing it costs nothing, and it is the single most useful thing a committee can do in an afternoon.",
  },
];

const droneFaqs: Faq[] = [
  {
    q: "Is it legal to fly a drone over my house in India?",
    a: "The Drone Rules, 2021 answer a different question from the one you are asking. They divide Indian airspace into green, yellow and red zones. In a green zone, which is airspace up to 400 feet that has not been marked yellow or red, no permission at all is needed for a drone weighing up to 500 kilograms. Most residential neighbourhoods are green zone airspace, so the flight over your roof may require nothing from anybody.",
  },
  {
    q: "Can I shoot down or jam a drone over my property?",
    a: "No to both, and the second one is a criminal risk you may not expect. The Department of Telecommunications advisory of July 2022 states that signal jamming devices, including jammers and blockers, are generally illegal for private individuals and organisations to procure or use. Bringing down an aircraft in flight over a residential area creates its own obvious hazards. Neither is a remedy, and both convert you from complainant to respondent.",
  },
  {
    q: "How do I know whether the drone needed permission?",
    a: "Check the drone airspace map on the Digital Sky platform, which the Ministry of Civil Aviation makes freely available without any login. It marks the yellow and red zones. If your address is in a yellow zone, flight there required permission from the relevant air traffic control authority, and in a red zone it required permission from the Central Government. That single check tells you whether you are reporting an unauthorised flight or a lawful one.",
  },
  {
    q: "Does a drone operator in India need a licence and registration?",
    a: "Usually yes. Under the Drone Rules, 2021 no person may operate an unmanned aircraft system without first registering it on the Digital Sky platform and obtaining a unique identification number, unless exempted. A remote pilot licence is also required, with exemptions for nano drones, which weigh up to 250 grams, and for micro drones, up to two kilograms, flown for non-commercial purposes.",
  },
  {
    q: "What is the penalty for flying a drone illegally in India?",
    a: "The Drone Rules, 2021 reduced the maximum penalty for violations to one lakh rupees, down from several lakhs under the earlier regime. That is the aviation penalty. It sits separately from any criminal liability arising from what the drone recorded, which is the part that matters if the flight was about you rather than about the sky.",
  },
  {
    q: "Who do I report a drone to?",
    a: "The local police, in writing, with the date, time, duration and direction of flight, and any photographs you took from the ground. If you believe you are in immediate danger, call 112. Where images of a person have been captured or circulated, a complaint can also be filed at cybercrime.gov.in, which routes to the relevant state police. A complaint there does not automatically become an FIR.",
  },
];

const getFootageFaqs: Faq[] = [
  {
    q: "Can I force a shop or a neighbour to give me CCTV footage?",
    a: "No. No Indian statute gives a private person a right to a copy of a recording somebody else owns. What you can do is ask the holder to preserve it, which costs them nothing and is far more likely to be agreed than disclosure, and then give the police enough detail to require its production. Section 94 of the Bharatiya Nagarik Suraksha Sanhita, 2023 places that power with a court or with the officer in charge of a police station, not with you.",
  },
  {
    q: "How do I get CCTV footage from an ATM or a bank?",
    a: "Through the same two steps, in the same order. Write to the branch the day you realise the footage matters, naming the date, the clock window and the machine, and ask for preservation rather than a copy. Then report the matter so that the police can require production. Whether a particular bank is a public authority for the purposes of the Right to Information Act is a separate question that depends on the bank, so do not plan your case around an RTI application until you have confirmed that it applies.",
  },
  {
    q: "How long do I have before the footage is overwritten?",
    a: "Less time than most people assume, and no Indian law fixes the period for ordinary private premises. A recorder keeps writing until the disk fills and then writes over the oldest material, so the window is whatever that particular system happens to hold. Treat the request as something to send on the first day, not the second week. Our guide to CCTV camera rules in India explains why no retention period exists outside police stations.",
  },
  {
    q: "Can I get footage from traffic cameras or city surveillance?",
    a: "Those systems are run by the police or by a city authority rather than by a private holder, so the realistic route is a request through the police station handling your complaint. If the operator is a public authority, an application under the Right to Information Act is also open to you, subject to the exemptions. We could not find a published counter service anywhere in India that hands a member of the public a copy of city camera footage on demand, so be careful with any website that promises one.",
  },
  {
    q: "The police collected the footage. Will they give me a copy?",
    a: "Not as a matter of course. Material collected during an investigation forms part of the case record, and what you receive and when is governed by the stage the case has reached. Section 94 also protects the position of the person who produced it. Ask your lawyer to apply for what you need rather than asking the investigating officer informally, and keep your own dated copy of every request you sent.",
  },
  {
    q: "Is a pen drive copy from the shopkeeper enough for court?",
    a: "Often not, and this is the step that gets missed. Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 requires a certificate in the form set out in the Schedule to accompany the electronic record each time it is submitted, and that form asks for the source device, its make, model and serial number, and a hash value of the record with the hash report enclosed. A file copied at a counter with none of that attached is a file, not yet evidence.",
  },
];

const phoneSearchFaqs: Faq[] = [
  {
    q: "Can the police search my phone without a warrant in India?",
    a: "Section 185 of the Bharatiya Nagarik Suraksha Sanhita, 2023 lets an officer in charge of a police station, or an officer conducting an investigation, search without a warrant, but only on conditions. The officer must have reasonable grounds to believe the thing sought is there and cannot be obtained without undue delay, must record those grounds in writing in the case diary before searching, and must keep the search to the thing specified. The Sanhita does not separately address how far the contents of a seized device may be examined, which is why that question is still being worked out by the courts.",
  },
  {
    q: "Do I have to give the police my phone password?",
    a: "The High Courts have not agreed on this. In 2021 the Karnataka High Court held in Virendra Khanna that a direction to provide a password, passcode or biometrics does not amount to testimonial compulsion under Article 20(3), and that an adverse inference may be drawn if the accused does not cooperate. In January 2024 the Delhi High Court said in Sanket Bhadresh Modi that an accused cannot be coerced to reveal passwords of seized devices while the trial is ongoing. A single judge decision of one High Court does not bind courts in another state, so get a lawyer's view on your own situation rather than acting on a headline.",
  },
  {
    q: "What paperwork should exist after a search?",
    a: "More than most people are given. Section 103 requires a list of everything seized, recording where each item was found, signed by the witnesses, with a signed copy delivered to the occupant of the place searched. Section 105 requires the search or the taking of possession to be recorded through audio-video electronic means, preferably a mobile phone, and the recording to be forwarded without delay to the District Magistrate, Sub-divisional Magistrate or Judicial Magistrate of the first class. Section 185(5) requires copies of the recorded grounds to reach the nearest Magistrate within 48 hours, and says the owner or occupier may get a copy from that Magistrate free of cost on application.",
  },
  {
    q: "Can the police copy everything on the phone?",
    a: "Cloning a seized device is treated as part of the investigation rather than as a separate decision. In Virendra Khanna the Karnataka High Court proceeded on the basis that the investigating agency may clone the device and use the data during the investigation or trial, while adding that the data is not to be given to a third party during the investigation without the court's written permission. What is not settled anywhere is whether a case about one offence permits a reading of everything on the device, which is the question several petitions have asked the courts to answer.",
  },
  {
    q: "How do I get my phone back?",
    a: "Through the court, not the police station. Where property is produced before a criminal court, section 497 of the Sanhita allows the court to make such order as it thinks fit for its proper custody pending the inquiry or trial, and it also provides for the court to prepare a description of the property and arrange photographs or video of it, which can then be used as evidence. That machinery exists precisely so the physical object does not have to sit in a storeroom for years. Ask your lawyer to apply rather than asking the investigating officer informally.",
  },
  {
    q: "Is a phone search the same as a phone tap?",
    a: "No, and confusing the two leads people to look in the wrong place. Interception happens inside the telecom operator's network under the Telecommunications Act, 2023 and its rules, with nothing added to your handset and nothing for you to notice. A search is a physical act: the device is taken, examined and usually copied. Our guide on whether your phone is tapped covers the first, and this page covers the second.",
  },
];

const consentPhotoFaqs: Faq[] = [
  {
    q: "Is taking photos without consent illegal in India?",
    a: "Not in itself. India has no general provision that makes photographing a person an offence because they did not agree. The criminal provisions people reach for are narrower than that. Section 77 of the Bharatiya Nyaya Sanhita, 2023 is about a woman engaged in a private act in circumstances providing privacy, and section 66E of the Information Technology Act, 2000 is about the image of a private area captured in circumstances violating privacy. If neither set of elements is present, the answer lies in civil remedies and in platform rules rather than in a criminal complaint.",
  },
  {
    q: "Someone photographed me in a public place. Can I make them delete it?",
    a: "Not by demanding it on the spot, and trying to take somebody's phone turns your complaint into a separate dispute about your own conduct. If the image falls inside the provisions above, or if it has been published, there are routes with teeth. If it does not, what remains is a request, a complaint to the venue or employer where that applies, and advice from a lawyer about civil remedies in your situation.",
  },
  {
    q: "I agreed to the photo but not to it being shared. Does that matter?",
    a: "It matters a great deal, and this is the part most people do not know. Explanation 2 to section 77 of the Bharatiya Nyaya Sanhita addresses exactly that position: where the victim consents to the capture of the images but not to their dissemination to third persons, such dissemination is to be considered an offence under that section. Consent to be photographed is not consent to be circulated.",
  },
  {
    q: "How fast must a platform remove an intimate or morphed image?",
    a: "Twenty-four hours. Rule 3(2)(b) of the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021 requires an intermediary, on a complaint by the individual or by any person on their behalf, to take all reasonable and practicable measures within twenty-four hours to remove or disable access to content which exposes a person's private area, shows them in full or partial nudity, depicts them in a sexual act or conduct, or is in the nature of impersonation in electronic form, including artificially morphed images. Rule 3(2)(c) requires the platform to run a mechanism for receiving those complaints.",
  },
  {
    q: "The platform ignored me. What then?",
    a: "There is a statutory appeal, and very few people use it. Rule 3A of the same Rules establishes Grievance Appellate Committees. A person aggrieved by the decision of a platform's Grievance Officer, or whose grievance is not resolved within the time the Rules allow, may appeal within thirty days of the communication from that officer. The Committee is to endeavour to resolve the appeal within thirty calendar days, the whole process is conducted online, and every order it passes is to be complied with by the intermediary.",
  },
  {
    q: "Is photographing someone's house or car without permission an offence?",
    a: "The provisions above are about images of a person, not of a building or a vehicle, so they do not usually apply. Repeated attention directed at a particular household is a different matter and is better described to the police as what it is, with dates and a log, rather than argued as a photography question. Our guide to a neighbour's camera pointing at your house covers the fixed-camera version of the same complaint.",
  },
];

const dashCamFaqs: Faq[] = [
  {
    q: "Are dash cams legal in India?",
    a: "Nothing in Indian law prohibits fitting one to your own vehicle. There is no registration, no permit and no approval for the device itself. The questions that do arise are about where you mount it, whether it records audio, and what you do with the footage afterwards, and those have different answers from one another.",
  },
  {
    q: "Where can I mount a dash cam without getting a challan?",
    a: "Out of your own field of view, which in practice means tucked behind or beside the rear view mirror rather than in the middle of the windscreen. We searched the Central Motor Vehicles Rules, 1989 for a provision about objects placed in the driver's line of sight and did not find one; the rules in that chapter deal with brakes, steering gears, safety glass and windscreen wipers. Rules about obstructing a driver's view sit in state motor vehicle rules, so the enforceable answer where you drive is a state one.",
  },
  {
    q: "Can dash cam footage be used in court in India?",
    a: "It can, but the file alone is not enough. A video is an electronic record, and section 63 of the Bharatiya Sakshya Adhiniyam, 2023 requires a certificate in the form given in the Act's Schedule to accompany it each time it is submitted. That form asks for the source device, its make, model and serial number, and a hash value of the record with the hash report enclosed. Take the card out and keep the original file rather than trimming a clip and sharing the trimmed copy around.",
  },
  {
    q: "Can I report another driver using my dash cam video?",
    a: "In some cities, yes, and the mechanism is official. Delhi Traffic Police re-launched its Traffic Sentinel Scheme as Traffic Prahari on 1 September 2024, where a registered user uploads photographs or videos of violations and earns points, with certain offences requiring video rather than a photograph: red light jumping, dangerous or zigzag driving and using a mobile phone while driving each need video. Check whether your own city runs a comparable scheme before assuming one exists.",
  },
  {
    q: "Does a dash cam record my passengers' conversations?",
    a: "Most have a microphone and many have it enabled by default. That turns a road safety device into a recording of whoever is in the car, which is a separate question from the video and is worth settling by switching audio off unless you have a reason to keep it. Our guide to call recording in India covers why the consent of the people being recorded is the issue rather than ownership of the device.",
  },
  {
    q: "Can somebody else see my dash cam footage?",
    a: "If the camera has Wi-Fi or a cloud account, treat it as a connected camera rather than as a tape recorder. The questions are the same ones that apply to any networked camera: who holds the account, whether remote viewing is switched on, whether the default password was ever changed, and who had the vehicle. A camera in a car that somebody else set up is a camera somebody else may still be able to reach.",
  },
];

const followedFaqs: Faq[] = [
  {
    q: "How can I tell if someone is following me in a car?",
    a: "The useful signal is not a car staying behind you, which happens constantly on a shared route. It is a vehicle that turns with you through changes you made without planning them, that is still there after a stop long enough to break any shared journey, and that you have now seen on days with nothing in common. One of those is a coincidence. All three together is a pattern, and a pattern is what you write down.",
  },
  {
    q: "They always know where I have been. Does that mean I am being followed?",
    a: "Usually not. Someone turning up where you are is far more often explained by information than by pursuit: a location shared inside a family or messaging app and forgotten about, an account signed in on a second device, a tracker in a bag or vehicle, or a car's own connected service. Those are checkable, and checking them is cheaper and faster than trying to detect a person on the road.",
  },
  {
    q: "What should I do if a car is following me right now?",
    a: "Do not go home, and do not stop somewhere isolated to confront anybody. Drive to a place that is busy and staffed, such as a fuel station, a hospital gate, a hotel entrance or a police station, and contact 112. If you cannot safely speak, the Emergency Response Support System takes more than voice calls. Stay in the vehicle with the doors locked while you wait, and note the registration number rather than trying to photograph the driver at close range.",
  },
  {
    q: "Can I contact 112 without speaking?",
    a: "Yes. The Ministry of Home Affairs describes ERSS-112 as receiving distress calls over ten different channels, listing voice call, SMS, SOS, email, web request, chatbot, media crawler, signals from connected devices, WhatsApp and external signals, all arriving at the same answering point in your state. That matters when speaking out loud would make the situation worse.",
  },
  {
    q: "What should I write down?",
    a: "Date, time, the place you noticed it, the direction you were travelling, a description of the vehicle or person, the registration number if you have it safely, and what happened. Write it the same day in one file rather than leaving it scattered across messages to different people. A single dated log is what turns four uneasy feelings into something a police station can act on.",
  },
  {
    q: "Will a sweep tell me whether I am being followed?",
    a: "No, and nobody should suggest otherwise. An examination of a vehicle or a home finds what is physically there: a tracker, a recorder, a camera. It cannot tell you whether a car behind you on the road had any interest in you. What it can do is settle the much more common explanation, which is that a device or an account is reporting your movements.",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-tell-if-someone-is-following-you",
    title: "Someone Is Following You: How to Tell, and What to Do",
    seoTitle: "How to Tell If Someone Is Following You in India",
    metaDescription:
      "Before deciding you are being followed, rule out the explanation that fits more often. Then the response, in order, and how to reach 112 without speaking.",
    excerpt:
      "Most people who feel followed are right that something is wrong and wrong about what it is. Being found is usually about information rather than pursuit, and the two have completely different answers.",
    date: "2026-11-27",
    readTime: "9 min read",
    category: "Bug Sweep Tips",
    coverImage: "/images/blogs/how-to-tell-if-someone-is-following-you.webp",
    ogImage: "/images/blogs/how-to-tell-if-someone-is-following-you.png",
    coverImageAlt:
      "Being followed guide cover: one route marked with repeated sightings, and a signal reaching the same point from a device instead",
    publishedBy: "BugSweepingTSCM",
    cta: {
      heading: "Want the simpler explanation ruled out first?",
      text: "If somebody keeps knowing where you have been, the usual answer is a device or an account rather than a person on the road. A private consultation can help you decide what is worth examining, in your vehicle, your home or your phone. Please get in touch when it suits you.",
      label: "Request a consultation on WhatsApp",
    },
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://www.bugsweepingtscm.com/blog/how-to-tell-if-someone-is-following-you#webpage",
          url: "https://www.bugsweepingtscm.com/blog/how-to-tell-if-someone-is-following-you",
          name: "How to Tell If Someone Is Following You in India",
          inLanguage: "en-IN",
          isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" },
          breadcrumb: { "@id": "https://www.bugsweepingtscm.com/blog/how-to-tell-if-someone-is-following-you#breadcrumb" },
          primaryImageOfPage: { "@id": "https://www.bugsweepingtscm.com/blog/how-to-tell-if-someone-is-following-you#primaryimage" },
          about: {
            "@type": "Place",
            name: "India",
            address: { "@type": "PostalAddress", addressCountry: "IN" },
          },
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
          "@type": "ImageObject",
          "@id": "https://www.bugsweepingtscm.com/blog/how-to-tell-if-someone-is-following-you#primaryimage",
          url: "https://www.bugsweepingtscm.com/images/blogs/how-to-tell-if-someone-is-following-you.png",
          width: 1200,
          height: 630,
        },
        {
          "@type": "BlogPosting",
          "@id": "https://www.bugsweepingtscm.com/blog/how-to-tell-if-someone-is-following-you#article",
          headline: "Someone Is Following You: How to Tell, and What to Do",
          description:
            "Before deciding you are being followed, rule out the explanation that fits more often. Then the response, in order, and how to reach 112 without speaking.",
          datePublished: "2026-11-27",
          image: { "@id": "https://www.bugsweepingtscm.com/blog/how-to-tell-if-someone-is-following-you#primaryimage" },
          mainEntityOfPage: { "@id": "https://www.bugsweepingtscm.com/blog/how-to-tell-if-someone-is-following-you#webpage" },
          inLanguage: "en-IN",
          author: { "@id": "https://www.bugsweepingtscm.com/#organization" },
          publisher: { "@id": "https://www.bugsweepingtscm.com/#organization" },
          about: [
            { "@type": "Thing", name: "Personal safety" },
            { "@type": "Thing", name: "Surveillance" },
            { "@type": "Thing", name: "Emergency services" },
          ],
          spatialCoverage: { "@type": "Place", name: "India" },
          isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" },
        },
        {
          "@type": "Organization",
          "@id": "https://www.bugsweepingtscm.com/#organization",
          name: "BugSweepingTSCM",
          url: "https://www.bugsweepingtscm.com",
          logo: "https://www.bugsweepingtscm.com/images/logo/bug-sweep.png",
          email: "info@advancedetectiveagency.com",
          telephone: "+91-8882732221",
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://www.bugsweepingtscm.com/blog/how-to-tell-if-someone-is-following-you#breadcrumb",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.bugsweepingtscm.com" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.bugsweepingtscm.com/blog" },
            { "@type": "ListItem", position: 3, name: "Someone Is Following You" },
          ],
        },
        faqJsonLd(followedFaqs, "https://www.bugsweepingtscm.com/blog/how-to-tell-if-someone-is-following-you#faq"),
      ],
    },
    content: `
      <div class="answer-box">
        <p><strong>Short answer:</strong> Before deciding that you are being followed, rule out the explanation that fits more often, which is that something is already reporting where you are. A shared location, an account, a tracker or a vehicle's own connected service accounts for most cases of somebody always knowing. If a person genuinely is following you, the response is not to lose them. It is to not go home, to reach a staffed public place, and to contact 112, which accepts far more than voice calls.</p>
      </div>

      <p>Nearly everyone who asks this question has already decided what the answer is. They want a technique for confirming a tail, and the internet obligingly supplies one borrowed from films: take four turns in the same direction and see who is still there.</p>

      <p>The technique is not useless. It is just an answer to the wrong question, asked too early, and it carries a cost. A person who spends two weeks watching mirrors is a person who has not checked the thing that explains most of these cases in an afternoon.</p>

      <h2>Being found and being followed are different problems</h2>
      <p>Separate the two sensations, because people describe them in the same words.</p>

      <p>The first is <strong>being found</strong>. Somebody turns up at places you did not announce. They know you were at a restaurant, or that you left early, or which route you took. Nothing was ever visible behind you.</p>

      <p>The second is <strong>being followed</strong>. You keep seeing the same vehicle or the same person on the road or on foot, usually in motion, usually behind you.</p>

      <p>Pursuit is laborious, expensive and easy to notice. Information is none of those things. If somebody consistently knows where you have been without ever being seen, the probable explanation is that something told them, and that is a question with a definite answer.</p>

      <h2>Rule out the explanation that costs nothing to check</h2>
      <p>Four ordinary sources account for most of these cases, and all four are checkable from a chair.</p>

      <ol>
        <li><strong>A location you shared and forgot.</strong> Family sharing, a messaging app's live location left on indefinitely, a shared calendar with addresses in it. These are set up in a moment of convenience, often years ago, and nothing reminds you they exist.</li>
        <li><strong>An account somebody else can still reach.</strong> A signed-in session on a device that is no longer yours, or an account recovery route that still points to somebody else. Our guide to <a href="/blog/who-has-access-to-my-google-account">who has access to your Google account</a> covers what to look at and in what order.</li>
        <li><strong>A tracker.</strong> A Bluetooth tag in a bag or a car, or a tracker fitted to a vehicle. Our guide to <a href="/blog/unknown-tracker-detected">an unknown tracker alert</a> covers the consumer tags and the alerts your phone already produces, and our guide to <a href="/blog/vehicle-gps-tracking">vehicle tracking</a> covers the devices that get fitted to a car.</li>
        <li><strong>The phone itself.</strong> Monitoring software, or simply an account on the handset that somebody else controls. Our guide to <a href="/blog/is-someone-monitoring-your-phone">whether someone is monitoring your phone</a> sets out which checks establish something and which prove nothing, and why resetting the device first is usually the wrong move.</li>
      </ol>

      <p>One test separates this group from an actual follower, and it requires nothing dangerous. Think about where they appeared. If they turn up at destinations you never announced and never drove to in a predictable way, that is information. If they appear behind you in traffic and then vanish, that is a road.</p>

      <h2>When it really is a person</h2>
      <p>Sometimes the answer is the plain one, and the worst thing to do with that conclusion is to treat it as a puzzle to be solved by driving.</p>

      <p>What actually matters is not confirming a tail in one journey. It is accumulating a record across several, because a pattern that repeats is what a police station can act on and a single uneasy afternoon is not.</p>

      <p>So keep a log. One file, written the same day: date, time, where you were, the direction of travel, a description of the vehicle or person, the registration number if you obtained it without taking a risk, and what happened. Note what was ordinary about the day as well, because a sighting on a route you take every morning carries less weight than one on a journey you made once.</p>

      <h2>What to do while it is happening</h2>
      <p>This is the part where the film version becomes dangerous, so it is written in order.</p>

      <ol>
        <li><strong>Do not go home, and do not go anywhere quiet.</strong> The purpose of following somebody is frequently to learn where they end up. An isolated place to confront a driver is the single worst choice available.</li>
        <li><strong>Go somewhere staffed and busy.</strong> A fuel station, a hospital gate, a hotel or mall entrance, a police station. Staff, lights and cameras do more for you than speed does.</li>
        <li><strong>Contact 112.</strong> The Ministry of Home Affairs describes <a href="https://www.mha.gov.in/emergency-response-support-system-erss" rel="noopener noreferrer" target="_blank">ERSS-112</a> as a nationwide unified emergency response system that receives distress calls over ten different channels, listing voice call, SMS, SOS, email, web request, chatbot, media crawler, signals from connected devices, WhatsApp and external signals, which are routed to the public safety answering point in your state and dispatched from there. If speaking aloud would make things worse, you are not limited to a phone call.</li>
        <li><strong>Stay in the vehicle, with the doors locked,</strong> if you are driving and have reached a safe place. If you are on foot, go inside a staffed premises rather than waiting outside it.</li>
        <li><strong>Note the registration number. Do not photograph anyone at close range.</strong> A number written down is evidence. A phone held up at a car window is an escalation.</li>
        <li><strong>Ask the venue to preserve its footage, in writing, the same day.</strong> Recordings are overwritten in days, and nobody will keep one for you unless asked. Our guide to <a href="/blog/how-to-get-cctv-footage-in-india">getting CCTV footage somebody else holds</a> sets out what that request should say and who actually has the power to require production.</li>
      </ol>

      <h2>Making a complaint that can be acted on</h2>
      <p>Take three things to the police station rather than one. The log, so the pattern is visible at a glance. The locations where footage exists, with the dates and clock windows, so that it can be required before it is overwritten. And anything you already found when you checked the four sources above, because a tracker recovered from a vehicle is a physical fact rather than an impression.</p>

      <p>Whether the conduct amounts to a specific offence depends on what happened and on who is involved, and the Indian provisions in this area are narrower than most people expect, including on who they protect. Our guide to <a href="/blog/unknown-tracker-detected">an unknown tracker alert</a> works through that question in the context of a tag found in a bag or a car, including the gap it leaves. Where anyone is in immediate danger, 112 comes before all of it.</p>

      <h2>What a check can and cannot establish</h2>
      <p>A physical examination reports what was found in the areas accessed, by the methods used, under the conditions present, at the time of the visit. Finding no device does not prove that none exists, and no examination promises complete detection or future protection.</p>

      <p>Here the limit is worth stating plainly, because it is the question people arrive with. No examination can tell you whether a car behind you was following you, or who was driving it. That is for the police, and for whatever recordings exist along the route. What an examination can do is answer the other half, which is whether a tracker, a recorder or a camera is physically present in your vehicle or your home, and whether an account or a device is reporting your movements. In most of the cases that reach us, that is where the answer turns out to be.</p>

      <h2>Frequently asked questions</h2>
${faqHtml(followedFaqs)}
    `,
  },
  {
    slug: "are-dash-cams-legal-in-india",
    title: "Are Dash Cams Legal in India?",
    seoTitle: "Are Dash Cams Legal in India? What the Rules Say",
    metaDescription:
      "Nothing in Indian law bans a dash cam. The real questions arrive later: where it sits, what it hears, whether the clip is evidence, and who else can reach it.",
    excerpt:
      "The device is the easy part. Follow a single clip from the moment it is recorded to the moment it is used, and five different legal questions appear, only one of which is about the camera.",
    date: "2026-11-27",
    readTime: "8 min read",
    category: "Vehicle Sweeps",
    coverImage: "/images/blogs/are-dash-cams-legal-in-india.webp",
    ogImage: "/images/blogs/are-dash-cams-legal-in-india.png",
    coverImageAlt:
      "Dash cam guide cover: a windscreen view with a camera mounted beside the mirror and a clip moving through five marked stages",
    publishedBy: "BugSweepingTSCM",
    cta: {
      heading: "Wondering what else is riding in your vehicle?",
      text: "A dash cam is the camera you know about. Trackers and recorders fitted by somebody else are the ones people come to us about, usually after a car has been serviced, shared or parked somewhere it normally is not. A private consultation can help you decide what is worth examining.",
      label: "Request a consultation on WhatsApp",
    },
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://www.bugsweepingtscm.com/blog/are-dash-cams-legal-in-india#webpage",
          url: "https://www.bugsweepingtscm.com/blog/are-dash-cams-legal-in-india",
          name: "Are Dash Cams Legal in India? What the Rules Say",
          inLanguage: "en-IN",
          isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" },
          breadcrumb: { "@id": "https://www.bugsweepingtscm.com/blog/are-dash-cams-legal-in-india#breadcrumb" },
          primaryImageOfPage: { "@id": "https://www.bugsweepingtscm.com/blog/are-dash-cams-legal-in-india#primaryimage" },
          about: {
            "@type": "Place",
            name: "India",
            address: { "@type": "PostalAddress", addressCountry: "IN" },
          },
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
          "@type": "ImageObject",
          "@id": "https://www.bugsweepingtscm.com/blog/are-dash-cams-legal-in-india#primaryimage",
          url: "https://www.bugsweepingtscm.com/images/blogs/are-dash-cams-legal-in-india.png",
          width: 1200,
          height: 630,
        },
        {
          "@type": "BlogPosting",
          "@id": "https://www.bugsweepingtscm.com/blog/are-dash-cams-legal-in-india#article",
          headline: "Are Dash Cams Legal in India?",
          description:
            "Nothing in Indian law bans a dash cam. The real questions arrive later: where it sits, what it hears, whether the clip is evidence, and who else can reach it.",
          datePublished: "2026-11-27",
          image: { "@id": "https://www.bugsweepingtscm.com/blog/are-dash-cams-legal-in-india#primaryimage" },
          mainEntityOfPage: { "@id": "https://www.bugsweepingtscm.com/blog/are-dash-cams-legal-in-india#webpage" },
          inLanguage: "en-IN",
          author: { "@id": "https://www.bugsweepingtscm.com/#organization" },
          publisher: { "@id": "https://www.bugsweepingtscm.com/#organization" },
          about: [
            { "@type": "Thing", name: "Dashcam" },
            { "@type": "Thing", name: "Road traffic law" },
            { "@type": "Thing", name: "Digital evidence" },
          ],
          spatialCoverage: { "@type": "Place", name: "India" },
          isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" },
        },
        {
          "@type": "Organization",
          "@id": "https://www.bugsweepingtscm.com/#organization",
          name: "BugSweepingTSCM",
          url: "https://www.bugsweepingtscm.com",
          logo: "https://www.bugsweepingtscm.com/images/logo/bug-sweep.png",
          email: "info@advancedetectiveagency.com",
          telephone: "+91-8882732221",
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://www.bugsweepingtscm.com/blog/are-dash-cams-legal-in-india#breadcrumb",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.bugsweepingtscm.com" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.bugsweepingtscm.com/blog" },
            { "@type": "ListItem", position: 3, name: "Are Dash Cams Legal in India" },
          ],
        },
        faqJsonLd(dashCamFaqs, "https://www.bugsweepingtscm.com/blog/are-dash-cams-legal-in-india#faq"),
      ],
    },
    content: `
      <div class="answer-box">
        <p><strong>Short answer:</strong> Yes. No Indian law prohibits fitting a dash cam to your own vehicle, and the device needs no permit or approval. The questions worth your attention arrive afterwards, and they are about placement, audio, evidence and access rather than about legality. Follow one clip from the moment it is recorded and you can see all four.</p>
      </div>

      <p>Most writing on this subject answers a question nobody is really asking. Whether the camera is allowed is the least interesting part, because nothing prohibits it. What decides whether a dash cam helps you or creates a problem is what happens to a clip after it exists.</p>

      <p>So take one clip and follow it through.</p>

      <h2>Stage one: where the camera sits</h2>
      <p>This is the only stage where a traffic officer is likely to be involved, and the rule people quote often does not exist in the form they think.</p>

      <p>We searched the Central Motor Vehicles Rules, 1989, listed with the rest of the central legislation on the <a href="https://morth.gov.in/en/motor-vehicle-legislation" rel="noopener noreferrer" target="_blank">Ministry of Road Transport and Highways site</a>, for a provision about objects placed in the driver's field of view, and did not find one. The chapter that covers the windscreen deals with brakes, steering gears, safety glass and windscreen wipers, which are properties of the vehicle rather than of what you attach to it.</p>

      <p>Rules about obstructing a driver's view generally sit in the state motor vehicle rules, which differ from state to state. That is the practical answer to the mounting question: there is no national dash cam placement rule to comply with, and the risk is a local one about your own line of sight. Mounted high and tight against the mirror housing, a dash cam sits outside the swept area a driver actually looks through. Stuck in the middle of the windscreen with a long arm and a dangling cable, it does not.</p>

      <h2>Stage two: what the camera hears</h2>
      <p>Almost every dash cam has a microphone, and on many it is on by default. That is a different device from the one you thought you bought.</p>

      <p>A camera that records the road is a record of a public event. A camera that records the cabin is a recording of whoever is sitting in your car, including colleagues, clients, drivers and family, usually without any of them knowing. Owning the device does not settle whether recording the people inside it is appropriate, and our guide to <a href="/blog/is-call-recording-legal-in-india">call recording in India</a> explains why consent of the people recorded, rather than ownership of the equipment, is where that question actually sits.</p>

      <p>The practical step is one menu toggle. Turn audio off unless there is a reason to keep it, and tell passengers if you keep it on.</p>

      <h2>Stage three: the clip becomes evidence</h2>
      <p>This is the stage that most often goes wrong, and it goes wrong before anybody reaches a court.</p>

      <p>A video is an electronic record. Section 63 of the Bharatiya Sakshya Adhiniyam, 2023, published as <a href="https://egazette.gov.in/WriteReadData/2023/250882.pdf" rel="noopener noreferrer" target="_blank">gazette notification CG-DL-E-25122023-250882 of 25 December 2023</a>, requires a certificate in the form set out in the Act's Schedule to accompany an electronic record each time it is submitted for admission. That form asks what the source was, with a DVR, a flash drive, a mobile and cloud storage among the options to tick, and then asks for make, model, serial number and a hash of the record, with the hash report enclosed. Part B of the form is to be completed by an expert.</p>

      <p>Now consider the usual sequence after an incident: the clip is trimmed on a phone, forwarded on a messaging app, re-encoded by every forward, and the memory card keeps recording until the original is overwritten. At the end of that chain nobody can say what the source was.</p>

      <p>So the useful habit is short. Stop the recording, take the card out, and keep the original file untouched, with the camera's own make, model and serial number noted. Share copies, never the original. Our guide to <a href="/blog/how-to-get-cctv-footage-in-india">getting CCTV footage somebody else holds</a> describes the same certificate problem from the other side, where the footage belongs to a shop or a society.</p>

      <h2>Stage four: reporting somebody else</h2>
      <p>Dash cam owners routinely want to report what they filmed, and in some cities there is now an official way to do it.</p>

      <p>Delhi Traffic Police runs a citizen reporting scheme that began in 2015 and was <a href="https://traffic.delhipolice.gov.in/en/node/67" rel="noopener noreferrer" target="_blank">re-launched as Traffic Prahari on 1 September 2024</a>. A user registers with a mobile number and uploads photographs or videos of violations, earning points that can be redeemed for prizes. The points table is instructive for a dash cam owner, because it shows which offences the police will not accept a still image for. Red light jumping, dangerous or zigzag driving and using a mobile phone while driving each carry points only for video. Driving against the flow of traffic carries the highest points of the photograph categories.</p>

      <p>That is a scheme in one city, not a national right, so check what your own traffic police actually runs before planning around it. What travels everywhere is the principle underneath: electronic evidence of a violation now has an official route, and a usable report identifies the vehicle, the place and the time rather than simply showing bad driving.</p>

      <h2>Stage five: the clip gets posted</h2>
      <p>The last stage is the one that turns a road incident into a different kind of dispute.</p>

      <p>Footage of an identifiable person, posted publicly with a caption naming or accusing them, is no longer a record of an accident. It is publication, and it attracts its own consequences. Our guide to <a href="/blog/taking-photos-without-consent-india">taking photos of someone without consent in India</a> sets out what the criminal provisions actually require and, just as usefully, what the platform rules require once an image is up.</p>

      <p>Send the clip to the insurer, the police or the official reporting channel. Posting it is a separate decision, and it is almost never the one that helps your claim.</p>

      <h2>The part a security firm notices first</h2>
      <p>There is one more thing about dash cams that rarely appears in a buying guide. Many now have Wi-Fi, an app and a cloud account, which makes them networked cameras inside a vehicle rather than sealed recorders.</p>

      <p>Treat a connected dash cam the way you would treat any other camera on a network. Who holds the account it is paired with. Whether remote viewing is switched on. Whether the password that came in the box was ever changed. Who has had the vehicle, and whether anyone else paired a phone to it. Our guide to <a href="/blog/can-cctv-be-hacked-ahmedabad">whether CCTV can be hacked</a> covers how those accounts are usually reached, and our guide to <a href="/blog/vehicle-gps-tracking">vehicle tracking</a> covers the device people more often find in a car that they did not install.</p>

      <h2>What a check can and cannot establish</h2>
      <p>A physical examination reports what was found in the areas accessed, by the methods used, under the conditions present, at the time of the visit. Finding no device does not prove that none exists, and no examination promises complete detection or future protection.</p>

      <p>For a vehicle that means an examination can find a tracker or a recorder that somebody else fitted, and can tell you what is physically present behind trim and under seats. It cannot tell you who placed it, and it cannot recover what your own camera overwrote last week. The legal points on this page were checked against the sources linked above on 27 November 2026 and are general information rather than advice on your situation, and state rules differ, so confirm the position where you drive.</p>

      <h2>Frequently asked questions</h2>
${faqHtml(dashCamFaqs)}
    `,
  },
  {
    slug: "taking-photos-without-consent-india",
    title: "Taking Photos of Someone Without Consent in India",
    seoTitle: "Taking Photos Without Consent: The Law in India",
    metaDescription:
      "India has no general law against photographing a person. What the law reaches is narrower, and what gets an image taken down is faster. Both explained here.",
    excerpt:
      "Consent is not the test Indian law applies, which is why the question is so often answered wrongly in both directions. Two provisions define what is an offence, and a separate rule gives platforms twenty-four hours.",
    date: "2026-11-27",
    readTime: "9 min read",
    category: "Bug Sweep Tips",
    coverImage: "/images/blogs/taking-photos-without-consent-india.webp",
    ogImage: "/images/blogs/taking-photos-without-consent-india.png",
    coverImageAlt:
      "Consent and photography cover: a phone camera frame with two conditions marked inside it and a twenty-four hour timer beside",
    publishedBy: "BugSweepingTSCM",
    cta: {
      heading: "Not sure whether a camera is pointed at you deliberately?",
      text: "A phone in a crowd is one thing. A lens that keeps appearing in the same place is another, and it is worth answering properly. A private consultation can help you work out what is worth examining. Please get in touch when it suits you.",
      label: "Request a consultation on WhatsApp",
    },
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://www.bugsweepingtscm.com/blog/taking-photos-without-consent-india#webpage",
          url: "https://www.bugsweepingtscm.com/blog/taking-photos-without-consent-india",
          name: "Taking Photos Without Consent: The Law in India",
          inLanguage: "en-IN",
          isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" },
          breadcrumb: { "@id": "https://www.bugsweepingtscm.com/blog/taking-photos-without-consent-india#breadcrumb" },
          primaryImageOfPage: { "@id": "https://www.bugsweepingtscm.com/blog/taking-photos-without-consent-india#primaryimage" },
          about: {
            "@type": "Place",
            name: "India",
            address: { "@type": "PostalAddress", addressCountry: "IN" },
          },
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
          "@type": "ImageObject",
          "@id": "https://www.bugsweepingtscm.com/blog/taking-photos-without-consent-india#primaryimage",
          url: "https://www.bugsweepingtscm.com/images/blogs/taking-photos-without-consent-india.png",
          width: 1200,
          height: 630,
        },
        {
          "@type": "BlogPosting",
          "@id": "https://www.bugsweepingtscm.com/blog/taking-photos-without-consent-india#article",
          headline: "Taking Photos of Someone Without Consent in India",
          description:
            "India has no general law against photographing a person. What the law reaches is narrower, and what gets an image taken down is faster. Both explained here.",
          datePublished: "2026-11-27",
          image: { "@id": "https://www.bugsweepingtscm.com/blog/taking-photos-without-consent-india#primaryimage" },
          mainEntityOfPage: { "@id": "https://www.bugsweepingtscm.com/blog/taking-photos-without-consent-india#webpage" },
          inLanguage: "en-IN",
          author: { "@id": "https://www.bugsweepingtscm.com/#organization" },
          publisher: { "@id": "https://www.bugsweepingtscm.com/#organization" },
          about: [
            { "@type": "Thing", name: "Photography" },
            { "@type": "Thing", name: "Consent" },
            { "@type": "Thing", name: "Privacy law" },
          ],
          spatialCoverage: { "@type": "Place", name: "India" },
          isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" },
        },
        {
          "@type": "Organization",
          "@id": "https://www.bugsweepingtscm.com/#organization",
          name: "BugSweepingTSCM",
          url: "https://www.bugsweepingtscm.com",
          logo: "https://www.bugsweepingtscm.com/images/logo/bug-sweep.png",
          email: "info@advancedetectiveagency.com",
          telephone: "+91-8882732221",
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://www.bugsweepingtscm.com/blog/taking-photos-without-consent-india#breadcrumb",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.bugsweepingtscm.com" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.bugsweepingtscm.com/blog" },
            { "@type": "ListItem", position: 3, name: "Taking Photos Without Consent" },
          ],
        },
        faqJsonLd(consentPhotoFaqs, "https://www.bugsweepingtscm.com/blog/taking-photos-without-consent-india#faq"),
      ],
    },
    content: `
      <div class="answer-box">
        <p><strong>Short answer:</strong> Taking photos of someone without consent is not, by itself, an offence in India. The provisions that do apply are defined by elements rather than by consent: section 77 of the Bharatiya Nyaya Sanhita, 2023 concerns a woman in a private act in circumstances providing privacy, and section 66E of the Information Technology Act, 2000 concerns the image of a private area captured in circumstances violating privacy. Once an image has been published, a faster route opens: a platform has twenty-four hours.</p>
      </div>

      <p>This question gets answered wrongly in both directions. One answer says nothing can be done because it happened in public. The other says any photograph taken without permission is a crime. Neither is what Indian law says, and the difference decides whether you spend a week at a police station or an afternoon getting an image removed.</p>

      <h2>Consent is not the test</h2>
      <p>Start with what the provisions actually require, because that is where the misunderstanding begins. Neither of the two commonly cited provisions turns on whether you agreed.</p>

      <p>Section 77 of the Bharatiya Nyaya Sanhita, 2023 concerns a man who watches or captures the image of a woman engaged in a private act in circumstances where she would usually have the expectation of not being observed. The Act defines a private act for this purpose as one carried out in a place which, in the circumstances, would reasonably be expected to provide privacy, and where the victim's genitals, posterior or breasts are exposed or covered only in a way not ordinarily done in public. A first conviction carries one to three years with fine, and a later one three to seven years with fine.</p>

      <p>Section 66E of the Information Technology Act, 2000 concerns intentionally or knowingly capturing, publishing or transmitting the image of a private area of any person without consent, under circumstances violating that person's privacy. It carries up to three years, or a fine of up to two lakh rupees, or both. Private area there refers to defined body areas, not to private premises.</p>

      <p>So the two questions that decide an ordinary case are not about permission at all. They are about where the person was, and what the image shows.</p>

      <div class="table-wrap">
        <table>
          <caption class="sr-only">Common situations, and which provision the elements point towards</caption>
          <thead>
            <tr><th scope="col">The situation</th><th scope="col">Where the elements point</th></tr>
          </thead>
          <tbody>
            <tr><td>A photograph of you on a street, in a market or at an event</td><td>Ordinarily outside both provisions. The location is not one expected to provide privacy, and nothing of the kind either provision describes is shown</td></tr>
            <tr><td>A photograph taken into a changing room, a bathroom or a hotel room</td><td>Squarely the territory of section 77, and of section 66E where the image is of a private area</td></tr>
            <tr><td>A photograph taken up or through clothing in a public place</td><td>The place being public does not decide it. What the image shows is what engages section 66E</td></tr>
            <tr><td>An image you agreed to, later circulated to others</td><td>Explanation 2 to section 77 addresses dissemination without consent even where the capture was consented to</td></tr>
            <tr><td>A morphed or impersonating image posted online</td><td>The takedown route below, which is faster than any of the above</td></tr>
          </tbody>
        </table>
      </div>

      <p>Reading the elements this way also explains the honest answer to the street photograph: we could not find any Indian provision that makes photographing a person in a public place an offence in itself. That is not the same as saying nothing can be done about a person who follows you around with a camera, which is a different complaint and is described below.</p>

      <h2>Agreeing to the photograph is not agreeing to its circulation</h2>
      <p>This is the single most useful thing on this page, and it is written into the Sanhita itself. Explanation 2 to section 77 deals with the case where the victim consents to the capture of the images or the act, but not to their dissemination to third persons. Where such an image is then disseminated, that dissemination is to be considered an offence under the section.</p>

      <p>Read what that does. It removes the argument that a person who once agreed has agreed to everything that followed, which is the argument most often used against someone whose private image is circulating. The consent attached to the moment of capture. It did not travel with the file.</p>

      <h2>If the image is already online: twenty-four hours</h2>
      <p>Where an image has been published, the fastest route in Indian law is not a police station. It is the platform, and the deadline is short.</p>

      <p>Rule 3(2)(b) of the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021, as published in the <a href="https://www.meity.gov.in/static/uploads/2024/02/Information-Technology-Intermediary-Guidelines-and-Digital-Media-Ethics-Code-Rules-2021-updated-06.04.2023-.pdf" rel="noopener noreferrer" target="_blank">consolidated text on the Ministry of Electronics and Information Technology's own site</a>, requires an intermediary to act within twenty-four hours from the receipt of a complaint made by an individual, or by any person on their behalf, in relation to content which is prima facie material exposing that individual's private area, showing them in full or partial nudity, showing or depicting them in any sexual act or conduct, or in the nature of impersonation in an electronic form, including artificially morphed images. The intermediary is to take all reasonable and practicable measures to remove or disable access to it.</p>

      <p>Rule 3(2)(c) then requires the intermediary to implement a mechanism for receiving those complaints, which is why every large platform has a reporting form for this category specifically. Use that form rather than a general report, because the category is what starts the twenty-four hour clock. Keep the complaint reference and the time you sent it.</p>

      <p>For ordinary complaints the Rules set a different pair of timelines: the Grievance Officer is to acknowledge within twenty-four hours and resolve within fifteen days, with a seventy-two hour limit for certain removal requests. Those are the numbers against which a platform's silence is measured.</p>

      <h2>If the platform does nothing: the appeal almost nobody files</h2>
      <p>Rule 3A of the same Rules establishes Grievance Appellate Committees, each with a chairperson and two whole time members appointed by the Central Government.</p>

      <p>A person aggrieved by a decision of a platform's Grievance Officer, or whose grievance is not resolved within the period the Rules allow, may appeal to a Committee within thirty days of receiving the communication from that officer. The Committee is to deal with the appeal expeditiously and to endeavour to resolve it finally within thirty calendar days of receipt. The entire process, from filing to decision, is conducted in digital mode, and every order passed by the Committee is to be complied with by the intermediary concerned.</p>

      <p>That is a statutory appeal against a platform's refusal, conducted online, with a deadline attached. It is worth knowing it exists before you accept a rejection email as the end of the matter.</p>

      <h2>Reporting, in the right order</h2>
      <p>Where the conduct crosses into the provisions above, the routes are the ordinary ones and the order matters.</p>

      <ol>
        <li><strong>If anyone is in immediate danger, call 112 first.</strong> Nothing below comes before that.</li>
        <li><strong>Preserve rather than argue.</strong> Note the time, the place and what was said. Photograph the setting if it is safe to do so. Do not try to take or wipe anybody's phone, which replaces your complaint with a dispute about your own conduct.</li>
        <li><strong>Report to the local police</strong> for an offence of the kind described above. Where a woman reports voyeurism or stalking, the information is to be recorded by a woman police officer.</li>
        <li><strong>File in parallel at <a href="https://cybercrime.gov.in" rel="noopener noreferrer" target="_blank">cybercrime.gov.in</a></strong> where an image has been published or shared. That portal routes the complaint to the relevant state police, and a complaint made there does not automatically become an FIR.</li>
        <li><strong>Send the platform complaint the same day,</strong> separately from the police complaint, because it runs on its own clock.</li>
      </ol>

      <h2>When it is not really about the photograph</h2>
      <p>Sometimes the camera is a symptom. A person who turns up repeatedly, photographs a doorway, or appears in the same places is describing a pattern rather than an image, and a pattern is what the police can act on. Keep dates, times and places in a single log rather than scattered across messages.</p>

      <p>Where the attention is fixed rather than mobile, the questions are different again. Our guide to <a href="/blog/neighbour-cctv-pointing-at-my-house-kochi">a neighbour's camera pointing at your house</a> covers the fixed camera version, and our guide to <a href="/blog/how-to-detect-hidden-cameras">detecting hidden cameras</a> covers the case where the lens is concealed rather than held. If what you need is the recording from somebody else's system, our guide to <a href="/blog/how-to-get-cctv-footage-in-india">getting CCTV footage somebody else holds</a> sets out who actually has the power to require it.</p>

      <h2>What a check can and cannot establish</h2>
      <p>A physical examination reports what was found in the areas accessed, by the methods used, under the conditions present, at the time of the visit. Finding no device does not prove that none exists, and no examination promises complete detection or future protection.</p>

      <p>None of that reaches a photograph taken on somebody's handset in the street, which is a matter for the police and the platforms rather than for an inspection. What an examination answers is whether anything fixed is watching the space you control. The legal points on this page were checked against the sources linked above on 27 November 2026 and are general information rather than advice on your situation.</p>

      <h2>Frequently asked questions</h2>
${faqHtml(consentPhotoFaqs)}
    `,
  },
  {
    slug: "can-police-search-my-phone-india",
    title: "Can the Police Search Your Phone in India?",
    seoTitle: "Can Police Search Your Phone in India? What Law Says",
    metaDescription:
      "Taking a phone and reading what is inside it are two different acts. India's law is clear about the first and unsettled about the second. Here is the gap.",
    excerpt:
      "The Sanhita sets out when an officer may search without a warrant, what has to be written down and who has to be told. It says almost nothing about the thing everybody asks about, which is the password.",
    date: "2026-11-27",
    readTime: "10 min read",
    category: "TSCM Guides",
    coverImage: "/images/blogs/can-police-search-my-phone-india.webp",
    ogImage: "/images/blogs/can-police-search-my-phone-india.png",
    coverImageAlt:
      "Phone search guide cover: a sealed evidence bag holding a phone beside a written record, with a locked screen behind a dashed line",
    publishedBy: "BugSweepingTSCM",
    cta: {
      heading: "Worried about what a device has been through?",
      text: "A phone that has been out of your hands, or a room you are no longer sure about, raises questions that paperwork does not answer. A private consultation can help you work out what is worth examining and what is not. Please get in touch when it suits you.",
      label: "Request a consultation on WhatsApp",
    },
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://www.bugsweepingtscm.com/blog/can-police-search-my-phone-india#webpage",
          url: "https://www.bugsweepingtscm.com/blog/can-police-search-my-phone-india",
          name: "Can Police Search Your Phone in India? What Law Says",
          inLanguage: "en-IN",
          isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" },
          breadcrumb: { "@id": "https://www.bugsweepingtscm.com/blog/can-police-search-my-phone-india#breadcrumb" },
          primaryImageOfPage: { "@id": "https://www.bugsweepingtscm.com/blog/can-police-search-my-phone-india#primaryimage" },
          about: {
            "@type": "Place",
            name: "India",
            address: { "@type": "PostalAddress", addressCountry: "IN" },
          },
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
          "@type": "ImageObject",
          "@id": "https://www.bugsweepingtscm.com/blog/can-police-search-my-phone-india#primaryimage",
          url: "https://www.bugsweepingtscm.com/images/blogs/can-police-search-my-phone-india.png",
          width: 1200,
          height: 630,
        },
        {
          "@type": "BlogPosting",
          "@id": "https://www.bugsweepingtscm.com/blog/can-police-search-my-phone-india#article",
          headline: "Can the Police Search Your Phone in India?",
          description:
            "Taking a phone and reading what is inside it are two different acts. India's law is clear about the first and unsettled about the second. Here is the gap.",
          datePublished: "2026-11-27",
          image: { "@id": "https://www.bugsweepingtscm.com/blog/can-police-search-my-phone-india#primaryimage" },
          mainEntityOfPage: { "@id": "https://www.bugsweepingtscm.com/blog/can-police-search-my-phone-india#webpage" },
          inLanguage: "en-IN",
          author: { "@id": "https://www.bugsweepingtscm.com/#organization" },
          publisher: { "@id": "https://www.bugsweepingtscm.com/#organization" },
          about: [
            { "@type": "Thing", name: "Search and seizure" },
            { "@type": "Thing", name: "Mobile phone" },
            { "@type": "Thing", name: "Right against self-incrimination" },
          ],
          spatialCoverage: { "@type": "Place", name: "India" },
          isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" },
        },
        {
          "@type": "Organization",
          "@id": "https://www.bugsweepingtscm.com/#organization",
          name: "BugSweepingTSCM",
          url: "https://www.bugsweepingtscm.com",
          logo: "https://www.bugsweepingtscm.com/images/logo/bug-sweep.png",
          email: "info@advancedetectiveagency.com",
          telephone: "+91-8882732221",
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://www.bugsweepingtscm.com/blog/can-police-search-my-phone-india#breadcrumb",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.bugsweepingtscm.com" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.bugsweepingtscm.com/blog" },
            { "@type": "ListItem", position: 3, name: "Can the Police Search Your Phone" },
          ],
        },
        faqJsonLd(phoneSearchFaqs, "https://www.bugsweepingtscm.com/blog/can-police-search-my-phone-india#faq"),
      ],
    },
    content: `
      <div class="answer-box">
        <p><strong>Short answer:</strong> Taking the phone and reading what is inside it are two separate acts. For the first, section 185 of the Bharatiya Nagarik Suraksha Sanhita, 2023 allows a search without a warrant during an investigation, on conditions that have to be written down before the search happens. For the second, the Sanhita says nothing specific, and two High Courts have taken opposite views on whether you can be made to open it.</p>
      </div>

      <p>Almost every version of this question online answers a different one. Some answer the American position, which has no application here. Others quote a single High Court headline as though it settled the country. A few answer the question of phone tapping, which is a different subject entirely.</p>

      <p>The Indian answer has to be given in two parts, because the law treats the handset and its contents differently. One part is reasonably clear and comes with paperwork you are entitled to see. The other is genuinely unsettled, and saying so is more useful than pretending otherwise.</p>

      <h2>Why the two questions separate</h2>
      <p>A phone is a physical object that can be seized like any other, and it is also a store of data larger than anything the drafters of a search provision used to imagine. India's procedural code was rewritten in 2023 and it handles the object well. It does not say how far an officer who lawfully holds the object may read through the data.</p>

      <p>That gap is the reason two readers can both be right when one says the police can take your phone and the other says the police cannot read it. Keep the two apart as you go through what follows, because every practical decision depends on which one you are in.</p>

      <h2>When an officer may search without a warrant</h2>
      <p>The governing provision is section 185 of the Bharatiya Nagarik Suraksha Sanhita, 2023, published as <a href="https://egazette.gov.in/WriteReadData/2023/250884.pdf" rel="noopener noreferrer" target="_blank">gazette notification CG-DL-E-25122023-250884 of 25 December 2023</a>. It permits a search without a warrant, and then loads conditions on to it.</p>

      <p>The officer must be the officer in charge of a police station or an officer conducting the investigation. There must be reasonable grounds to believe that something necessary for the investigation is in a particular place within that station's limits, and a reason to believe it cannot be obtained otherwise without undue delay. The grounds must be recorded in writing in the case diary, specifying what is sought, and the search is to be confined to that thing as far as possible. The officer should search in person where practicable, and where that is not possible and no other competent person is available, a subordinate may be sent with a written order giving the reasons and the place.</p>

      <p>Read that list again as a reader rather than a lawyer. Each condition is a thing that is supposed to exist on paper before the search starts, which means each is a thing that can later be shown not to exist. That, and not an argument at the doorstep, is where a bad search is usually challenged.</p>

      <h2>The paperwork you are entitled to, and almost never asked for</h2>
      <p>This is the most practically useful part of the subject and the part most writing on it leaves out. The Sanhita does not treat a search as an event between you and an officer. It treats it as an event that generates records, several of which are meant to reach you or a magistrate.</p>

      <ol>
        <li><strong>A video recording.</strong> Section 105 requires that the process of conducting a search of a place, or taking possession of any property, article or thing, be recorded through audio-video electronic means, preferably a mobile phone, and that the police officer forward the recording without delay to the District Magistrate, Sub-divisional Magistrate or Judicial Magistrate of the first class. Section 185 repeats the point for a warrantless search in its own terms.</li>
        <li><strong>A list of what was taken.</strong> Section 103 requires a list of all things seized in the course of the search, recording the place where each was found, prepared by the officer and signed by the witnesses.</li>
        <li><strong>Your copy of that list.</strong> The same section requires a signed copy of the list to be delivered to the occupant of the place searched, or to the person acting for them, who is also entitled to attend the search.</li>
        <li><strong>The grounds, with a magistrate.</strong> Section 185(5) requires copies of the record of the grounds to be sent to the nearest Magistrate empowered to take cognizance of the offence within forty-eight hours, and provides that the owner or occupier of the place searched may, on application, be given a copy by that Magistrate free of cost.</li>
      </ol>

      <p>That last entry is worth reading twice. The reasons an officer wrote down before searching your home or office are a document you may apply to a magistrate for. Very few people ever ask.</p>

      <h2>The password, where two High Courts disagree</h2>
      <p>Now the unsettled half. Nothing in the Sanhita says a person must open a device for an officer, and the question has been answered differently in different states.</p>

      <p>In <em>Virendra Khanna v. State of Karnataka</em>, Writ Petition No. 11759 of 2020, decided on 12 March 2021, the Karnataka High Court took the view that <a href="https://indiankanoon.org/doc/87379349/" rel="noopener noreferrer" target="_blank">a direction to provide a password, passcode or biometrics</a> would not amount to testimonial compulsion, describing it as being in the nature of a direction to produce a document and relying on the Supreme Court's reasoning about specimen handwriting and thumb impressions. The same judgment is careful about who may give such a direction: the investigating officer may request or direct the accused to furnish it, and it is for the accused to accede, while the court cannot issue such a direction on its own motion and can act only on an application by a party. If access is not given, the court said, an adverse inference may be drawn, subject to the prosecution pointing out the nature of that inference, and the officer may apply for directions or for a search warrant for the device.</p>

      <p>In January 2024 the Delhi High Court went the other way on the facts before it. In <em>Sanket Bhadresh Modi v. Central Bureau of Investigation</em>, Justice Saurabh Banerjee held, while granting bail, that <a href="https://www.livelaw.in/high-court/delhi-high-court/delhi-high-court-accused-cant-coerced-reveal-passwords-digital-devices-trial-bail-245733" rel="noopener noreferrer" target="_blank">an accused cannot be coerced to reveal or disclose the passwords</a> or similar details of digital devices seized during the investigation while the trial is ongoing, reasoning from Article 20(3) and from the presumption of innocence.</p>

      <p>So what should a reader take from that? Three things, and no more. A single judge decision of one High Court does not bind courts in another state. The question of whether access may be compelled is live rather than closed. And a page on the internet, including this one, is not the place to decide what you personally should do when asked, because the answer turns on your position in the case, as an accused, a witness or a complainant, and on which court would hear the matter. Ask for any direction in writing, say that you want to speak to a lawyer, and do not destroy or wipe anything, which creates a separate and much worse problem.</p>

      <h2>The quieter route: an order to produce</h2>
      <p>A seizure is not the only way material leaves your hands. Section 94 of the same Sanhita allows a court to issue a summons, and an officer in charge of a police station to issue a written order in physical or electronic form, requiring a person in possession of a document, or of an electronic communication including a communication device likely to contain digital evidence, to produce it for an investigation, inquiry, trial or other proceeding. Sub-section (2) treats a person required only to produce something as having complied by causing it to be produced, without attending in person.</p>

      <p>This matters for two reasons. It is the provision under which records held by other people, from call details to camera footage, are required, which our guide to <a href="/blog/how-to-get-cctv-footage-in-india">getting CCTV footage somebody else holds</a> works through from the other side. And it means a demand can arrive as a piece of paper rather than as a visit, which gives you time to take advice before responding.</p>

      <h2>Getting the device back</h2>
      <p>A phone held as case property is dealt with by the court rather than by the station. Where property is produced before a criminal court during an inquiry or trial, section 497 allows the court to make such order as it thinks fit for its proper custody, and provides for the court to prepare a statement describing the property in the prescribed form and to arrange photographs, and video where needed, which may then be used as evidence in the proceedings.</p>

      <p>That machinery exists so the object itself does not have to sit in a storeroom for years while the record of what it was survives. Applying for custody or release is work for your lawyer, and the application is stronger when the seizure list, the video and the recorded grounds have already been obtained.</p>

      <h2>Where this meets the subject of this site</h2>
      <p>Two things frequently get confused with a search, and both are answered elsewhere.</p>

      <p>The first is interception. A tap happens inside the operator's network under the Telecommunications Act, 2023 and the rules made under it. Nothing is attached to your handset and there is nothing for you to notice, which is why the signs people look for do not exist. Our guide on <a href="/blog/is-my-phone-tapped">whether your phone is tapped</a> sets out who may authorise it and what the timetables are.</p>

      <p>The second is private monitoring, which is the far more common worry: a partner, a relative or an employer with access to the device or to the accounts behind it. That has nothing to do with the police, and the checks that establish something are different again. Our guide on <a href="/blog/is-someone-monitoring-your-phone">whether someone is monitoring your phone</a> covers those, including why a device that has been out of your hands is a question about accounts as much as about the handset.</p>

      <h2>What a check can and cannot establish</h2>
      <p>A physical examination reports what was found in the areas accessed, by the methods used, under the conditions present, at the time of the visit. Finding no device does not prove that none exists, and no examination promises complete detection or future protection.</p>

      <p>On this subject the limits are sharper than usual. No examination can tell you what was copied from a device while it was in somebody else's custody, or what was read. That is answered from the record of the seizure and from the case file, which is why the documents above matter more here than any instrument does. The legal points on this page were checked against the sources linked above on 27 November 2026 and are general information, not advice on your situation. Take a lawyer's view before acting on any of them.</p>

      <h2>Frequently asked questions</h2>
${faqHtml(phoneSearchFaqs)}
    `,
  },
  {
    slug: "how-to-get-cctv-footage-in-india",
    title: "How to Get CCTV Footage Somebody Else Holds",
    seoTitle: "How to Get CCTV Footage in India: The Real Routes",
    metaDescription:
      "You have no right to a copy of CCTV footage somebody else owns in India. Here is who does have that power, what to send on day one, and the four routes.",
    excerpt:
      "An incident happens outside a shop, in a lift, at an ATM, and the footage exists for about a fortnight. Almost nobody is told that the request they are about to make has no legal force behind it, or what to send instead.",
    date: "2026-11-27",
    readTime: "11 min read",
    category: "TSCM Guides",
    coverImage: "/images/blogs/how-to-get-cctv-footage-in-india.webp",
    ogImage: "/images/blogs/how-to-get-cctv-footage-in-india.png",
    coverImageAlt:
      "CCTV footage guide cover: a recorder with a shrinking timeline on one side of a dashed barrier and a sealed order on the other",
    publishedBy: "BugSweepingTSCM",
    cta: {
      heading: "Not sure what the footage would even show?",
      text: "Sometimes the recording matters less than the question behind it, which is who has been watching and from where. If that is the position you are in, a private consultation can help you decide what is worth examining before you spend weeks chasing a copy. Please get in touch when it suits you.",
      label: "Request a consultation on WhatsApp",
    },
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://www.bugsweepingtscm.com/blog/how-to-get-cctv-footage-in-india#webpage",
          url: "https://www.bugsweepingtscm.com/blog/how-to-get-cctv-footage-in-india",
          name: "How to Get CCTV Footage in India: The Real Routes",
          inLanguage: "en-IN",
          isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" },
          breadcrumb: { "@id": "https://www.bugsweepingtscm.com/blog/how-to-get-cctv-footage-in-india#breadcrumb" },
          primaryImageOfPage: { "@id": "https://www.bugsweepingtscm.com/blog/how-to-get-cctv-footage-in-india#primaryimage" },
          about: {
            "@type": "Place",
            name: "India",
            address: { "@type": "PostalAddress", addressCountry: "IN" },
          },
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
          "@type": "ImageObject",
          "@id": "https://www.bugsweepingtscm.com/blog/how-to-get-cctv-footage-in-india#primaryimage",
          url: "https://www.bugsweepingtscm.com/images/blogs/how-to-get-cctv-footage-in-india.png",
          width: 1200,
          height: 630,
        },
        {
          "@type": "BlogPosting",
          "@id": "https://www.bugsweepingtscm.com/blog/how-to-get-cctv-footage-in-india#article",
          headline: "How to Get CCTV Footage Somebody Else Holds",
          description:
            "You have no right to a copy of CCTV footage somebody else owns in India. Here is who does have that power, what to send on day one, and the four routes.",
          datePublished: "2026-11-27",
          image: { "@id": "https://www.bugsweepingtscm.com/blog/how-to-get-cctv-footage-in-india#primaryimage" },
          mainEntityOfPage: { "@id": "https://www.bugsweepingtscm.com/blog/how-to-get-cctv-footage-in-india#webpage" },
          inLanguage: "en-IN",
          author: { "@id": "https://www.bugsweepingtscm.com/#organization" },
          publisher: { "@id": "https://www.bugsweepingtscm.com/#organization" },
          about: [
            { "@type": "Thing", name: "Closed-circuit television" },
            { "@type": "Thing", name: "Evidence law" },
            { "@type": "Thing", name: "Right to Information" },
          ],
          spatialCoverage: { "@type": "Place", name: "India" },
          isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" },
        },
        {
          "@type": "Organization",
          "@id": "https://www.bugsweepingtscm.com/#organization",
          name: "BugSweepingTSCM",
          url: "https://www.bugsweepingtscm.com",
          logo: "https://www.bugsweepingtscm.com/images/logo/bug-sweep.png",
          email: "info@advancedetectiveagency.com",
          telephone: "+91-8882732221",
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://www.bugsweepingtscm.com/blog/how-to-get-cctv-footage-in-india#breadcrumb",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.bugsweepingtscm.com" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.bugsweepingtscm.com/blog" },
            { "@type": "ListItem", position: 3, name: "How to Get CCTV Footage" },
          ],
        },
        faqJsonLd(getFootageFaqs, "https://www.bugsweepingtscm.com/blog/how-to-get-cctv-footage-in-india#faq"),
      ],
    },
    content: `
      <div class="answer-box">
        <p><strong>Short answer:</strong> You have no general right to CCTV footage that somebody else owns. In India the power to require its production belongs to a court or to the officer in charge of a police station, under section 94 of the Bharatiya Nagarik Suraksha Sanhita, 2023. So your own first move is not a request for a copy. It is a written request to preserve, sent the same day, because the recording will be overwritten long before any route finishes.</p>
      </div>

      <p>The situation is always the same. Something happened in a lift, in a corridor, outside a shop, at an ATM, in a society parking area. A camera was pointing at it. Somebody else owns that camera, and the useful part of the recording has a life measured in days.</p>

      <p>What follows is a fortnight of polite requests to a manager who does not have the authority to agree, a watchman who does not have the password, and an installer who set the system up two years ago and has not been back since. By the time anyone with authority looks at the question, the disk has written over the answer.</p>

      <p>The reason this goes wrong so often is that the first step is wrong. People ask for a copy. Almost nothing in Indian law supports that request, and asking for it puts the holder in a position where refusing is the safe choice.</p>

      <h2>Why asking is the whole of your right</h2>
      <p>No Indian statute entitles a private person to a copy of a recording held by another private person. There is no application form, no counter and no deadline by which the holder must answer you. The camera, the recorder and the disk belong to them, and so does the decision.</p>

      <p>It also helps to understand why a reasonable holder says no. The same recording usually shows other customers and residents, staff movements, cash handling, entrances and routines. A manager who hands a stranger a file showing all of that has exposed the premises and everybody in it, with nothing on paper to show why. Refusal is not obstruction. It is the absence of any authority to agree.</p>

      <p>That changes the shape of your first approach. There is one thing the holder can agree to at no risk whatsoever, and that is to keep the recording where it is.</p>

      <h2>The preservation request, and what belongs in it</h2>
      <p>This is the step that decides whether the rest of the process has anything left to work with. A preservation request asks the holder not to let the material be overwritten. It does not ask them to show it to you, which is precisely why it gets agreed.</p>

      <ol>
        <li><strong>A clock window, wider than you think you need.</strong> Give a start and an end, and add an hour on each side. Recorder clocks drift, and are often set to the wrong date entirely, so your memory of the time and the timestamp on the file may not agree.</li>
        <li><strong>The specific camera or the specific view.</strong> The lift car rather than the lift lobby. The gate rather than the compound. Naming the view tells the holder which channel to protect and makes the request look like something that can be acted on.</li>
        <li><strong>The address and, if you know it, which recorder.</strong> Large premises run more than one. A single building can have an entrance system, a parking system and a lift system on three separate boxes under three separate people.</li>
        <li><strong>The words preserve and do not overwrite, and nothing about a copy.</strong> Keep disclosure out of the first letter entirely. You are asking them to do nothing, which is the easiest thing to say yes to.</li>
        <li><strong>A short, factual line about what may follow.</strong> That the police may require its production under section 94 of the Bharatiya Nagarik Suraksha Sanhita. Stated plainly, that tells a holder why keeping the material protects them too. Stated as a threat, it gets you nowhere.</li>
        <li><strong>One question of your own: how long does your system keep footage.</strong> The answer is your deadline, and nobody else is going to tell you what it is.</li>
        <li><strong>A delivery that leaves a record.</strong> Email, a message on a number the holder actually uses, or a letter with an acknowledgement. Date it. If the footage later turns out to have been destroyed after your request, the date is the only thing that makes that fact mean anything.</li>
      </ol>

      <p>Send it on day one. Our guide to <a href="/blog/bug-sweeping-in-mumbai">bug sweeping in Mumbai</a> makes the same point for building and hotel systems in that city, where prohibitory orders requiring premises to hold footage are issued for fixed periods and reissued, so the window a reader assumes exists frequently does not.</p>

      <h2>Route one: the power actually sits with the police</h2>
      <p>Section 94 of the Bharatiya Nagarik Suraksha Sanhita, 2023 is the provision that moves a recording out of somebody else's hands. It is worth reading what it says, because it is broader than its predecessor in the Code of Criminal Procedure, 1973 and most people have never heard of it.</p>

      <p>Where a court or an officer in charge of a police station considers that the production of a document, or of an electronic communication including a communication device likely to contain digital evidence, is necessary or desirable for an investigation, inquiry, trial or other proceeding, the court may issue a summons and the officer may issue a written order, in physical or electronic form, requiring the person in possession to produce it. The Act was published as part of <a href="https://egazette.gov.in/WriteReadData/2023/250884.pdf" rel="noopener noreferrer" target="_blank">gazette notification CG-DL-E-25122023-250884 of 25 December 2023</a>. Sub-section (2) adds a practical mercy: a person required only to produce something is treated as having complied by causing it to be produced, without attending in person.</p>

      <p>Three things follow from that for you. The officer in charge of the station, not the constable who took your call, is the person whose order carries this weight. The order can be written and sent electronically, so distance is not a reason for delay. And the decision whether to issue it is theirs, which means your job is to make it easy.</p>

      <p>So give the station a single sheet. The holder's name and address, the exact premises, the camera or view, the date and clock window, and what you say the recording will show. Attach a copy of the preservation request you already sent and the date you sent it. A complaint that arrives in that form can be acted on the same day; a complaint that says there is CCTV there cannot.</p>

      <h2>Route two: a court, and the certificate that makes the copy usable</h2>
      <p>The same section lets a court issue a summons to produce, which is the route where a proceeding already exists: a criminal case, or a civil or matrimonial matter in which the recording matters. That is work for your lawyer, and the application has to identify the material with the same precision as the letter above.</p>

      <p>Here is the part that is almost never mentioned, and it is the reason many hard-won copies turn out to be worthless. A video file is an electronic record, and section 63 of the Bharatiya Sakshya Adhiniyam, 2023 governs when one is admissible. Sub-section (4) requires a certificate, in the form set out in the Act's Schedule, to accompany the electronic record at each instance when it is submitted for admission.</p>

      <p>Look at what that form asks for. The source is to be identified by ticking what it was, and the options printed in the Schedule include a DVR alongside a computer, a mobile, a server, a flash drive and cloud storage. The make, model, colour and serial number are to be filled in, with an IMEI or other identifier where applicable. A hash of the record is to be stated, by SHA1, SHA256, MD5 or another legally acceptable standard, with the hash report enclosed. Part B of the form is to be filled by an expert.</p>

      <p>Now hold that against the way footage is usually handed over in practice, which is a file dragged onto a pen drive at a counter by whoever had the recorder password. Nothing about the device is recorded, no hash is taken, and the original keeps running and overwrites itself a week later. The copy in your pocket is a copy of something nobody can now describe. If you are going to the trouble of obtaining footage for a case, ask for the device particulars at the moment of copying, and raise the certificate with your lawyer before the recorder overwrites the source.</p>

      <h2>Route three: the Right to Information Act, and what changed in 2025</h2>
      <p>If the holder is a public authority, a fourth door exists. CCTV footage is information within the meaning of the Right to Information Act, 2005, because section 2(f) defines information to include data material held in any electronic form, and a recording on a disk is exactly that.</p>

      <p>One thing about this route changed recently and has not reached most writing on the subject. Section 8(1)(j) of the Act used to exempt personal information with an override where a larger public interest was shown. In the version now published on the Government's own RTI portal, <a href="https://rti.gov.in/Writereaddata/RTI%20Act,%202005%20(Amended)-English%20Version.PDF" rel="noopener noreferrer" target="_blank">the amended Act</a> reads simply: information which relates to personal information. The narrowing came through section 44(3) of the Digital Personal Data Protection Act, 2023, brought into force in November 2025.</p>

      <p>Camera footage of identifiable people is personal information on any reading. So the clause that used to be argued around is now the first wall this route meets. Section 8(2) still allows a public authority to disclose where the public interest in disclosure outweighs the harm to the protected interests, but that is a discretion the authority exercises, not a right you hold. Section 24 removes the Act's application from certain listed intelligence and security organisations altogether.</p>

      <p>Then there is the wall that defeats everything. Retention. An application answered inside the Act's timelines can still be answered with the truth that the footage no longer exists, and if it was overwritten before the request arrived, the Act has nothing to work on. Which brings the reader back to the first letter, on day one.</p>

      <h2>The one place where you do have a written right</h2>
      <p>There is a single setting where an Indian has a stated right to have footage secured, and it is not a shop or a society. It is a police station.</p>

      <p>In <em>Paramvir Singh Saini v. Baljit Singh</em>, decided on 2 December 2020, the Supreme Court set out detailed directions on cameras inside police stations. <a href="https://api.sci.gov.in/supremecourt/2020/13346/13346_2020_33_1501_24909_Judgement_02-Dec-2020.pdf" rel="noopener noreferrer" target="_blank">The judgment</a> says three things that matter here, and they are unlike anything India has written for private premises.</p>

      <p>On storage, in paragraph 17: recording systems must be installed so that the data stored shall be preserved for a period of 18 months, and where equipment on the market cannot hold that much, states must buy the longest available and in any case not below one year.</p>

      <p>On who can reach it, in paragraph 18: where there is information of force used at a police station resulting in serious injury or custodial death, a complaint may be made to the State Human Rights Commission, which is to use its powers under sections 17 and 18 of the Protection of Human Rights Act, 1993, and also to Human Rights Courts, which are to be set up in each district under section 30 of that Act. The Court's own words on what happens next are the operative part: the Commission or Court can then immediately summon CCTV camera footage in relation to the incident for its safe keeping, which may then be made available to an investigation agency.</p>

      <p>On being told about it, in paragraph 20: large posters in English, Hindi and the local language are to be displayed at the entrance and inside, stating that the premises are covered by CCTV, that a person has a right to complain about human rights violations to the National or State Human Rights Commission, a Human Rights Court, the Superintendent of Police or another authority empowered to take cognizance, that footage is preserved for a minimum period which shall not be less than six months, and that the victim has a right to have the same secured in the event of violation of his human rights.</p>

      <p>Note what the mechanism is not. It is not an application to the station house officer, who is the person the complaint is usually about. It is a complaint to a body that can summon the recording itself. The same judgment extends camera installation to the offices of the Central Bureau of Investigation, the National Investigation Agency, the Enforcement Directorate, the Narcotics Control Bureau, the Department of Revenue Intelligence, the Serious Fraud Investigation Office and any other agency that interrogates and can arrest. Our guide to <a href="/blog/cctv-camera-rules-in-india">CCTV camera rules in India</a> sets out the wider framework, including why no comparable specification exists for the camera in your own building.</p>

      <h2>Why the data protection law is not your route yet</h2>
      <p>People reasonably expect the Digital Personal Data Protection Act, 2023 to help here. Footage of you is personal data, and the Act gives an individual a right to access information about their personal data held by a data fiduciary.</p>

      <p>Two things stand in the way today. The first is timing. The Rules under the Act were notified on 14 November 2025, and the Government's own <a href="https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/nov/doc20251117695301.pdf" rel="noopener noreferrer" target="_blank">briefing document on them</a> records an eighteen month period for phased compliance, with the rights machinery arriving at the end of it rather than now. The same document states that data fiduciaries must respond to such requests within ninety days, which tells you something about the pace of this route even once it opens: ninety days is several times the life of the recording you are chasing.</p>

      <p>The second is scope. The Act does not apply to personal data processed by an individual for a personal or domestic purpose, which is where a neighbour's camera on their own house normally sits. Our guide to <a href="/blog/neighbour-cctv-pointing-at-my-house-kochi">a neighbour's camera pointing at your house</a> works through that situation, and our guide to <a href="/blog/cctv-rules-for-housing-societies">CCTV rules for housing societies</a> covers the committee version, where the Act does apply but the duties have not yet been tested on a residential building.</p>

      <h2>What a check can and cannot establish</h2>
      <p>A physical examination reports what was found in the areas accessed, by the methods used, under the conditions present, at the time of the visit. Finding no device does not prove that none exists, and no examination promises complete detection or future protection.</p>

      <p>On this subject the limits are worth stating bluntly. Nobody can recover footage from a recorder they have no lawful access to, and nobody can tell you what a recording contained without having seen it. An examination of your own premises answers a different and often more useful question, which is what is watching the space you control, and whether a recorder in your building has been reached from outside. The legal points on this page were checked at the sources linked above and are general information rather than advice on your situation; take a lawyer's view before you rely on any of them.</p>

      <h2>Frequently asked questions</h2>
${faqHtml(getFootageFaqs)}
    `,
  },
  {
    slug: "drone-flying-over-my-house-india",
    title: "A Drone Over Your House: What You Can Actually Do in India",
    seoTitle: "Drone Flying Over My House: What You Can Do in India",
    metaDescription:
      "India's Drone Rules allocate airspace and licence pilots. They say nothing about the person underneath. What that means, and the two things not to do.",
    excerpt:
      "The Drone Rules, 2021 are an aviation code. They decide who may fly where, and they are silent about the person on the ground. That gap is why the obvious responses do not work, and what does work is less obvious.",
    date: "2026-11-27",
    readTime: "8 min read",
    category: "Bug Sweep Tips",
    coverImage: "/images/blogs/drone-flying-over-my-house-india.webp",
    ogImage: "/images/blogs/drone-flying-over-my-house-india.png",
    coverImageAlt:
      "Drone guide cover: a drone above a house with a marked altitude line separating free airspace from the airspace needing permission",
    publishedBy: "BugSweepingTSCM",
    cta: {
      heading: "Concerned that the watching is closer than the sky?",
      text: "A drone is usually the most visible thing people worry about and the least likely to be the real problem. If something about your home or office has felt wrong for a while, a private consultation can help you work out what is worth examining and what is not. Please get in touch when it suits you.",
      label: "Request a consultation on WhatsApp",
    },
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://www.bugsweepingtscm.com/blog/drone-flying-over-my-house-india#webpage",
          url: "https://www.bugsweepingtscm.com/blog/drone-flying-over-my-house-india",
          name: "Drone Flying Over My House: What You Can Do in India",
          inLanguage: "en-IN",
          isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" },
          breadcrumb: { "@id": "https://www.bugsweepingtscm.com/blog/drone-flying-over-my-house-india#breadcrumb" },
          primaryImageOfPage: { "@id": "https://www.bugsweepingtscm.com/blog/drone-flying-over-my-house-india#primaryimage" },
          about: {
            "@type": "Place",
            name: "India",
            address: { "@type": "PostalAddress", addressCountry: "IN" },
          },
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
          "@type": "ImageObject",
          "@id": "https://www.bugsweepingtscm.com/blog/drone-flying-over-my-house-india#primaryimage",
          url: "https://www.bugsweepingtscm.com/images/blogs/drone-flying-over-my-house-india.png",
          width: 1200,
          height: 630,
        },
        {
          "@type": "BlogPosting",
          "@id": "https://www.bugsweepingtscm.com/blog/drone-flying-over-my-house-india#article",
          headline: "A Drone Over Your House: What You Can Actually Do in India",
          description:
            "India's Drone Rules allocate airspace and licence pilots. They say nothing about the person underneath. What that means, and the two things not to do.",
          datePublished: "2026-11-27",
          image: { "@id": "https://www.bugsweepingtscm.com/blog/drone-flying-over-my-house-india#primaryimage" },
          mainEntityOfPage: { "@id": "https://www.bugsweepingtscm.com/blog/drone-flying-over-my-house-india#webpage" },
          inLanguage: "en-IN",
          author: { "@id": "https://www.bugsweepingtscm.com/#organization" },
          publisher: { "@id": "https://www.bugsweepingtscm.com/#organization" },
          about: [
            { "@type": "Thing", name: "Unmanned aerial vehicle" },
            { "@type": "Thing", name: "Aviation regulation" },
            { "@type": "Thing", name: "Privacy" },
          ],
          spatialCoverage: { "@type": "Place", name: "India" },
          isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" },
        },
        {
          "@type": "Organization",
          "@id": "https://www.bugsweepingtscm.com/#organization",
          name: "BugSweepingTSCM",
          url: "https://www.bugsweepingtscm.com",
          logo: "https://www.bugsweepingtscm.com/images/logo/bug-sweep.png",
          email: "info@advancedetectiveagency.com",
          telephone: "+91-8882732221",
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://www.bugsweepingtscm.com/blog/drone-flying-over-my-house-india#breadcrumb",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.bugsweepingtscm.com" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.bugsweepingtscm.com/blog" },
            { "@type": "ListItem", position: 3, name: "A Drone Over Your House" },
          ],
        },
        faqJsonLd(droneFaqs, "https://www.bugsweepingtscm.com/blog/drone-flying-over-my-house-india#faq"),
      ],
    },
    content: `
      <div class="answer-box">
        <p><strong>Short answer:</strong> India's Drone Rules, 2021 are an aviation code. They decide which airspace needs permission and who may pilot an aircraft, and most residential airspace up to 400 feet needs no permission at all. They say nothing about the person underneath. Your remedy comes from the criminal law instead, and two of the obvious responses are not available.</p>
      </div>

      <p>A drone hovers near a balcony, or passes slowly over a terrace twice in a week, and the first instinct is to look up the drone law. That is the wrong shelf.</p>

      <p>The rules governing drones in India are about the sky. They sort airspace into categories, register the aircraft and licence the pilot. Nothing in them is addressed to the person standing underneath, and understanding that is what turns a frustrating week into a usable complaint.</p>

      <h2>What the Drone Rules actually regulate</h2>
      <p>The Drone Rules, 2021 were notified by the Ministry of Civil Aviation on 25 August 2021. The Government's own <a href="https://static.pib.gov.in/WriteReadData/specificdocs/documents/2022/mar/doc202232932501.pdf" rel="noopener noreferrer" target="_blank">backgrounder on the Rules</a> sets out the structure, and four features of it decide how your situation is handled.</p>

      <p><strong>Airspace is split three ways.</strong> A green zone is airspace up to 400 feet, or 120 metres, that has not been designated red or yellow, together with airspace up to 200 feet over the band lying between 8 and 12 kilometres from an operational airport. In a green zone, in the backgrounder's own words, no permission whatsoever is required for operating drones with an all-up weight up to 500 kilograms. A yellow zone, which is the airspace above those heights and the area between 5 and 8 kilometres from an airport perimeter, requires permission from the relevant air traffic control authority. A red zone may be flown only with permission from the Central Government.</p>

      <p><strong>The map is public.</strong> The drone airspace map on the Digital Sky platform marks the yellow and red zones and is freely available to everyone without any login requirement. Anyone planning to fly is expected to check it, and so can you.</p>

      <p><strong>The aircraft is registered and the pilot is licensed.</strong> No person may operate an unmanned aircraft system without first registering it on Digital Sky and obtaining a unique identification number, unless exempted. A remote pilot licence is required, with exemptions for nano drones, up to 250 grams, and micro drones, up to two kilograms, flown non-commercially.</p>

      <p><strong>The penalty is modest.</strong> The Rules reduced the maximum penalty for violations to one lakh rupees.</p>

      <h2>Why a lawful flight can still be your problem</h2>
      <p>Read that list again and notice what is missing from it. Zones, registration, licences, fees, penalties. Not a word about the consent of the householder below.</p>

      <p>So the two questions come apart completely. Whether the flight was permitted is an aviation question answered by a map. Whether what the drone did to you was lawful is a different question answered by the criminal law, and a flight can be entirely proper on the first and entirely improper on the second. A camera at 60 metres over a green zone neighbourhood needs no permission from anyone, and if it is being used to watch a particular person inside a particular home, the aviation position does not help its operator at all.</p>

      <p>Whether flying over private land gives the occupier a separate civil remedy is not settled by the Drone Rules, which do not address it, and that is a question for a lawyer rather than for this page.</p>

      <h2>The two things not to do</h2>
      <p>Both are popular and both make your position worse.</p>

      <p><strong>Do not bring it down.</strong> An aircraft falling in a residential area creates hazards that need no explanation, and the act converts you from the person complaining into the person answering.</p>

      <p><strong>Do not jam it.</strong> This one surprises people, because anti-drone equipment is sold openly. The <a href="https://www.pib.gov.in/PressReleaseIframePage.aspx?PRID=1839030" rel="noopener noreferrer" target="_blank">Department of Telecommunications advisory of July 2022</a> states that cellular jammers, GPS blockers and other signal jamming devices are generally illegal unless specifically permitted by the Government of India, that private organisations and individuals cannot procure or use them, and that advertising, selling or distributing them is unlawful. The same view runs through the telecom approvals: jamming devices are one of the categories excluded from the ordinary self-declaration route for wireless equipment, as our guide to <a href="/blog/is-it-legal-to-buy-a-spy-camera-in-india">whether it is legal to buy a spy camera in India</a> sets out.</p>

      <h2>What to do instead, in order</h2>
      <ol>
        <li><strong>Record the flight from the ground.</strong> Date, clock time, how long it stayed, the direction it came from and went, and what it appeared to be facing. Photograph or film it if you can do so safely. A pattern across several days is worth far more than one sighting.</li>
        <li><strong>Check the airspace map.</strong> Look up your address on the Digital Sky map. If it falls in a yellow or red zone, the flight needed a permission you can ask the authorities to verify. If it is green zone, drop the aviation angle and move on.</li>
        <li><strong>Report it to the local police in writing.</strong> Give the log, not the theory. Say what was recorded and what was overlooked, for instance a bathroom window or a terrace people use privately.</li>
        <li><strong>If images of a person were captured or shared,</strong> file in parallel at <a href="https://cybercrime.gov.in" rel="noopener noreferrer" target="_blank">cybercrime.gov.in</a>, which routes to the relevant state police. A complaint there does not automatically become an FIR.</li>
        <li><strong>In immediate danger, call 112.</strong> That is the first step rather than the last if anybody is threatened.</li>
      </ol>

      <h2>The law that actually helps you</h2>
      <p>It is the same law that covers a concealed camera, because from the law's point of view that is what a drone carrying a camera is.</p>

      <p>Section 77 of the Bharatiya Nyaya Sanhita, 2023 covers watching, capturing or spreading the image of a woman engaged in a private act where she would expect privacy, with one to three years on a first conviction and three to seven on a later one. Section 66E of the Information Technology Act, 2000 covers intentionally capturing, publishing or transmitting the image of a person's private area without consent in circumstances violating privacy, with up to three years or a fine up to two lakh rupees, or both. Neither provision cares whether the lens was on a tripod, in a smoke detector or on an aircraft.</p>

      <p>That framing also tells you where to look next. Our guide to <a href="/blog/how-to-detect-hidden-cameras">detecting hidden cameras</a> covers the checks that matter indoors, and our guide to <a href="/blog/neighbour-cctv-pointing-at-my-house-kochi">a neighbour's camera facing your house</a> covers the far more common version of this complaint, where the camera is fixed to a wall rather than flying.</p>

      <h2>What a check can and cannot establish</h2>
      <p>A physical examination reports what was found in the areas accessed, by the methods used, under the conditions present, at the time of the visit. Finding no device does not prove that none exists, and no examination promises complete detection or future protection.</p>

      <p>An examination of your home cannot identify a drone, trace its operator or establish what it recorded. Those are matters for the police and, where the aircraft was registered, for the records held on the Digital Sky platform. What an examination can do is answer the question people often arrive at next, which is whether anything inside the building is also watching. The legal points here are a starting position rather than advice on your situation, and our <a href="/blog/bug-sweeping-in-india">national guide to bug sweeping</a> sets out what the physical work covers.</p>

      <h2>Frequently asked questions</h2>
${faqHtml(droneFaqs)}
    `,
  },
  {
    slug: "cctv-rules-for-housing-societies",
    title: "CCTV Rules for Housing Societies in India",
    seoTitle: "CCTV Rules for Housing Societies: What the Bye-laws Say",
    metaDescription:
      "The model bye-laws mention society cameras once, as a maintenance item. Nothing about footage, access or retention. Here is where the real duties come from.",
    excerpt:
      "Committees argue about society cameras as though a rulebook settled the matter. The rulebook mentions them exactly once, and not in the way anybody expects. The duties that actually bite arrive from a completely different statute.",
    date: "2026-11-27",
    readTime: "8 min read",
    category: "TSCM Guides",
    coverImage: "/images/blogs/cctv-rules-for-housing-societies.webp",
    ogImage: "/images/blogs/cctv-rules-for-housing-societies.png",
    coverImageAlt:
      "Society CCTV guide cover: a building outline with cameras over the common areas and an open rulebook with a single marked line",
    publishedBy: "BugSweepingTSCM",
    cta: {
      heading: "Reviewing your building's camera system?",
      text: "Most committees find that the useful questions are practical ones: what the cameras actually cover, who can reach the recorder and what happens to the footage. A private consultation can help a committee work through that before it becomes a dispute with a resident. Please get in touch when it suits you.",
      label: "Request a consultation on WhatsApp",
    },
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://www.bugsweepingtscm.com/blog/cctv-rules-for-housing-societies#webpage",
          url: "https://www.bugsweepingtscm.com/blog/cctv-rules-for-housing-societies",
          name: "CCTV Rules for Housing Societies: What the Bye-laws Say",
          inLanguage: "en-IN",
          isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" },
          breadcrumb: { "@id": "https://www.bugsweepingtscm.com/blog/cctv-rules-for-housing-societies#breadcrumb" },
          primaryImageOfPage: { "@id": "https://www.bugsweepingtscm.com/blog/cctv-rules-for-housing-societies#primaryimage" },
          about: {
            "@type": "Place",
            name: "India",
            address: { "@type": "PostalAddress", addressCountry: "IN" },
          },
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
          "@type": "ImageObject",
          "@id": "https://www.bugsweepingtscm.com/blog/cctv-rules-for-housing-societies#primaryimage",
          url: "https://www.bugsweepingtscm.com/images/blogs/cctv-rules-for-housing-societies.png",
          width: 1200,
          height: 630,
        },
        {
          "@type": "BlogPosting",
          "@id": "https://www.bugsweepingtscm.com/blog/cctv-rules-for-housing-societies#article",
          headline: "CCTV Rules for Housing Societies in India",
          description:
            "The model bye-laws mention society cameras once, as a maintenance item. Nothing about footage, access or retention. Here is where the real duties come from.",
          datePublished: "2026-11-27",
          image: { "@id": "https://www.bugsweepingtscm.com/blog/cctv-rules-for-housing-societies#primaryimage" },
          mainEntityOfPage: { "@id": "https://www.bugsweepingtscm.com/blog/cctv-rules-for-housing-societies#webpage" },
          inLanguage: "en-IN",
          author: { "@id": "https://www.bugsweepingtscm.com/#organization" },
          publisher: { "@id": "https://www.bugsweepingtscm.com/#organization" },
          about: [
            { "@type": "Thing", name: "Closed-circuit television" },
            { "@type": "Thing", name: "Housing cooperative" },
            { "@type": "Thing", name: "Data protection law" },
          ],
          spatialCoverage: { "@type": "Place", name: "India" },
          isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" },
        },
        {
          "@type": "Organization",
          "@id": "https://www.bugsweepingtscm.com/#organization",
          name: "BugSweepingTSCM",
          url: "https://www.bugsweepingtscm.com",
          logo: "https://www.bugsweepingtscm.com/images/logo/bug-sweep.png",
          email: "info@advancedetectiveagency.com",
          telephone: "+91-8882732221",
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://www.bugsweepingtscm.com/blog/cctv-rules-for-housing-societies#breadcrumb",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.bugsweepingtscm.com" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.bugsweepingtscm.com/blog" },
            { "@type": "ListItem", position: 3, name: "CCTV Rules for Housing Societies" },
          ],
        },
        faqJsonLd(societyCctvFaqs, "https://www.bugsweepingtscm.com/blog/cctv-rules-for-housing-societies#faq"),
      ],
    },
    content: `
      <div class="answer-box">
        <p><strong>Short answer:</strong> The model bye-laws for a co-operative housing society mention CCTV exactly once, as equipment the society must maintain. They say nothing about where cameras may point, how long footage is kept or who may see it. Those duties now arrive from data protection law instead, and from a written policy the committee has to adopt itself.</p>
      </div>

      <p>Ask a managing committee about CCTV rules for housing societies and you will usually be told that the bye-laws cover it. They do not.</p>

      <p>We read the <a href="https://sahakarayukta.maharashtra.gov.in/site/upload/documents/Model%20Bye%20Laws%20of%20Coop%20Housing%20Society%20New%20Flatowner%20Type%20(2-9-14).pdf" rel="noopener noreferrer" target="_blank">model bye-laws for a co-operative housing society of the flat owner type</a>, published by the Commissioner for Co-operation and Registrar of Co-operative Societies, Maharashtra, and dated 2 September 2014. Cameras appear in them once.</p>

      <h2>The one line about cameras</h2>
      <p>It is in bye-law 67, which lists the repairs and maintenance the society carries out at its own cost. The list runs through internal roads, compound walls, water pumps, drainage lines, staircases, lifts and generators, and then, at item (xvix), security appliances: CCTV, intercom, group mobile, mass data sharing devices and siren bell.</p>

      <p>That is the whole of it. Cameras are plumbing. The bye-law makes the society responsible for keeping them working and says nothing at all about what they see or what happens to what they record.</p>

      <p>The contrast inside the same document is sharp. Bye-law 75 requires a structural audit on a fixed cycle, a periodical fire audit as per the State Fire Policy and periodical inspection of lifts, each with a record maintained. The drafters knew how to impose a duty with a record attached when they wanted one. They did not do it for footage.</p>

      <p>One scope note that matters. These are Maharashtra's model bye-laws, and a registered society's own bye-laws are what bind it. Other states run their own co-operative societies or apartment ownership legislation, and a society outside Maharashtra should read its own registered text rather than this one. The pattern, though, tends to repeat: the camera is treated as equipment, and the footage is not treated at all.</p>

      <h2>What a member can inspect, and why footage is not on the list</h2>
      <p>This is where most disputes actually start. A resident wants the recording of an incident in the parking area and the committee refuses, and both sides claim the rules support them.</p>

      <p>Bye-law 23(a) gives a member the right to inspect books, registers and documents free of cost, as provided in Section 32(1) of the Act, and to obtain copies of documents as provided in Section 32(2) on payment of the prescribed fee. It is a real and useful right. It is also a right over records of a particular kind, and camera footage is not a book, a register or a document in the sense that provision is using.</p>

      <p>So a resident asking for footage is not exercising a bye-law right. They are asking the committee to exercise a discretion that nobody has written down. That is the gap, and it is fixable in one meeting.</p>

      <h2>Where the duties about footage actually come from</h2>
      <p>Not from co-operative law. From data protection law.</p>

      <p>Recognisable footage of a person is personal data. The Digital Personal Data Protection Rules, 2025 were notified on 14 November 2025, which <a href="https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/nov/doc20251117695301.pdf" rel="noopener noreferrer" target="_blank">the Press Information Bureau describes</a> as the full operationalisation of the Digital Personal Data Protection Act, 2023. The Act excludes personal data processed by an individual for a personal or domestic purpose, which is why a household camera watching its own gate is generally outside it. A society is not an individual acting domestically, so that exclusion does not travel across.</p>

      <p>On the Bureau's account of the Rules, an organisation acting as a Data Fiduciary has to give a separate, plain notice of the specific purpose for which data is collected, publish a contact point for data queries, answer access, correction and erasure requests within ninety days, and inform affected people without delay if there is a breach. The Rules allow an eighteen month phased compliance period, and the penalties under the Act reach two hundred and fifty crore rupees for a failure to maintain reasonable security safeguards.</p>

      <p>An honest caveat belongs here. How these duties apply to cameras in a residential building has not been tested, and nobody should tell a committee that a notice board sign and a minuted retention period make it compliant. What can be said is that a society that has decided its purpose, its retention period and its access list, and written all three down, is in a far better position than one that has not, whichever way the question is eventually resolved. Our guide to <a href="/blog/cctv-camera-rules-in-india">CCTV camera rules in India</a> sets out the wider framework, including the registration a camera needs before it can lawfully be sold here.</p>

      <h2>The camera that causes the real disputes</h2>
      <p>Not the one in the lobby. The one that sees inside a home.</p>

      <p>A camera covering a common passage will take in flat doors, and that is ordinary. The arguments that reach court are about a camera positioned so that it covers the interior when a door opens, or a balcony, or a window. Indian High Courts have not approached that question from the same starting point: our guide to <a href="/blog/neighbour-cctv-pointing-at-my-house-kochi">a neighbour's camera facing your house</a> sets out the Kerala position, which turns on evidence of snooping, and our guide to <a href="/blog/cctv-in-a-shared-home-kolkata">CCTV in a shared home</a> covers the harder case of co-occupants in one building. For tenants, our guide to <a href="/blog/can-my-landlord-put-cameras">whether a landlord can install cameras</a> is the nearer answer.</p>

      <p>There is also Mumbai authority directly on a society building, where the Bombay High Court confined residents' cameras to their own floor rather than a neighbour's door. Our <a href="/blog/bug-sweeping-in-mumbai">Mumbai guide</a> sets that case out.</p>

      <h2>The resolution a committee can pass in one meeting</h2>
      <p>Everything above points at the same remedy, and it is a minute rather than a purchase. Five entries, in the committee's own words, settle almost all of it.</p>
      <ol>
        <li><strong>Purpose.</strong> One sentence on why the cameras exist. Every later argument is measured against it, and a society that cannot state its purpose cannot write a notice either.</li>
        <li><strong>Coverage.</strong> Which areas are covered, and a positive statement that no camera is aimed into a flat, a balcony or a window. That sentence is the one a resident will quote back, so it has to be true on the day it is written.</li>
        <li><strong>Retention.</strong> A chosen number of days, decided deliberately rather than left to whatever the recorder does when the disk fills.</li>
        <li><strong>Access list.</strong> Named people who may view live or recorded footage, with a date for reviewing the list whenever the committee changes.</li>
        <li><strong>Release procedure.</strong> How a resident asks, who decides, within what period, and the grounds on which a request is refused. This is the entry that converts an argument into a process.</li>
      </ol>

      <p>Two things sit outside that resolution because they are operational rather than governance. Who actually holds credentials to the recorder, including the installer who commissioned it, is covered for a Mumbai reader in our <a href="/blog/bug-sweeping-in-mumbai">Mumbai guide</a>, which also carries the Bombay High Court authority on cameras trained on a neighbour's flat and a 2026 case in which society footage reached residents through somebody with legitimate access. Whether the recorder can be reached from outside the building at all is a separate question again, and our guide to <a href="/blog/can-cctv-be-hacked-ahmedabad">whether CCTV can be hacked</a> works through an Indian police case where it could.</p>

      <h2>If you are the resident asking</h2>
      <p>Put the request in writing to the secretary, say what incident and what time window you need, and ask for the committee's decision in writing. A written refusal is more useful to you than a verbal one, whatever it says.</p>

      <p>If what happened is a criminal matter rather than a society dispute, treat it as one. Report it to the local police, who can seek the footage themselves, and in immediate danger call <strong>112</strong>. A cybercrime complaint, including where private images have been published, can be filed at <a href="https://cybercrime.gov.in" rel="noopener noreferrer" target="_blank">cybercrime.gov.in</a>, which routes to the relevant state police; a complaint there does not automatically become an FIR. Acting quickly matters for a reason that has nothing to do with law: a recorder that keeps a fortnight will have overwritten the evidence in a fortnight.</p>

      <h2>What a check can and cannot establish</h2>
      <p>A physical examination reports what was found in the areas accessed, by the methods used, under the conditions present, at the time of the visit. Finding no device does not prove that none exists, and no examination promises complete detection or future protection.</p>

      <p>For a society the more common questions are different ones: what the installed cameras actually cover, whether the recorder is reachable from outside the building, and who still holds credentials to it. Those are answered by looking at the system and its records rather than by searching the building. The legal points on this page are a starting position rather than advice on your society's situation, and the bye-laws that bind you are your own registered ones. Our <a href="/blog/bug-sweeping-in-india">national guide to bug sweeping</a> sets out what a physical examination does cover.</p>

      <h2>Frequently asked questions</h2>
${faqHtml(societyCctvFaqs)}
    `,
  },
  {
    slug: "is-call-recording-legal-in-india",
    title: "Is Call Recording Legal in India?",
    seoTitle: "Is Call Recording Legal in India? The Three Questions",
    metaDescription:
      "One phrase hides three questions. Recording your own call, using it as evidence after Vibhor Garg v Neha, and who may lawfully intercept your calls.",
    excerpt:
      "The phrase covers three different questions with three different answers, and merging them is how people end up confidently wrong. The Supreme Court settled one of them in July 2025, and a set of rules from December 2024 settled another.",
    date: "2026-11-27",
    readTime: "10 min read",
    category: "TSCM Guides",
    coverImage: "/images/blogs/is-call-recording-legal-in-india.webp",
    ogImage: "/images/blogs/is-call-recording-legal-in-india.png",
    coverImageAlt:
      "Call recording law guide cover: a call between two handsets with a third line branching off to a sealed order document",
    publishedBy: "BugSweepingTSCM",
    cta: {
      heading: "Think somebody is listening to more than they should?",
      text: "Whether a conversation is leaking is a question about rooms, devices and accounts rather than about the law, and the answer usually comes from looking at all three. A private consultation can help you work out which of them is worth examining in your situation. Please get in touch from a phone and a network you trust.",
      label: "Request a consultation on WhatsApp",
    },
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://www.bugsweepingtscm.com/blog/is-call-recording-legal-in-india#webpage",
          url: "https://www.bugsweepingtscm.com/blog/is-call-recording-legal-in-india",
          name: "Is Call Recording Legal in India? The Three Questions",
          inLanguage: "en-IN",
          isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" },
          breadcrumb: { "@id": "https://www.bugsweepingtscm.com/blog/is-call-recording-legal-in-india#breadcrumb" },
          primaryImageOfPage: { "@id": "https://www.bugsweepingtscm.com/blog/is-call-recording-legal-in-india#primaryimage" },
          about: {
            "@type": "Place",
            name: "India",
            address: { "@type": "PostalAddress", addressCountry: "IN" },
          },
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
          "@type": "ImageObject",
          "@id": "https://www.bugsweepingtscm.com/blog/is-call-recording-legal-in-india#primaryimage",
          url: "https://www.bugsweepingtscm.com/images/blogs/is-call-recording-legal-in-india.png",
          width: 1200,
          height: 630,
        },
        {
          "@type": "BlogPosting",
          "@id": "https://www.bugsweepingtscm.com/blog/is-call-recording-legal-in-india#article",
          headline: "Is Call Recording Legal in India?",
          description:
            "One phrase hides three questions. Recording your own call, using it as evidence after Vibhor Garg v Neha, and who may lawfully intercept your calls.",
          datePublished: "2026-11-27",
          image: { "@id": "https://www.bugsweepingtscm.com/blog/is-call-recording-legal-in-india#primaryimage" },
          mainEntityOfPage: { "@id": "https://www.bugsweepingtscm.com/blog/is-call-recording-legal-in-india#webpage" },
          inLanguage: "en-IN",
          author: { "@id": "https://www.bugsweepingtscm.com/#organization" },
          publisher: { "@id": "https://www.bugsweepingtscm.com/#organization" },
          about: [
            { "@type": "Thing", name: "Call recording" },
            { "@type": "Thing", name: "Lawful interception" },
            { "@type": "Thing", name: "Indian evidence law" },
          ],
          spatialCoverage: { "@type": "Place", name: "India" },
          isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" },
        },
        {
          "@type": "Organization",
          "@id": "https://www.bugsweepingtscm.com/#organization",
          name: "BugSweepingTSCM",
          url: "https://www.bugsweepingtscm.com",
          logo: "https://www.bugsweepingtscm.com/images/logo/bug-sweep.png",
          email: "info@advancedetectiveagency.com",
          telephone: "+91-8882732221",
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://www.bugsweepingtscm.com/blog/is-call-recording-legal-in-india#breadcrumb",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.bugsweepingtscm.com" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.bugsweepingtscm.com/blog" },
            { "@type": "ListItem", position: 3, name: "Is Call Recording Legal in India?" },
          ],
        },
        faqJsonLd(callRecordingFaqs, "https://www.bugsweepingtscm.com/blog/is-call-recording-legal-in-india#faq"),
      ],
    },
    content: `
      <div class="answer-box">
        <p><strong>Short answer:</strong> No Indian statute makes it an offence for someone on a call to record it. A recording made without the other person's consent can still be admitted in evidence, which the Supreme Court confirmed in July 2025. Interception by a third party is the tightly controlled part, and the current procedure dates from December 2024.</p>
      </div>

      <p>Is call recording legal in India is really three questions wearing one coat.</p>

      <p>Can I record a call I am on. Will a court look at it afterwards. And can somebody else record my calls without me knowing. The answers run in different directions, and the law governing each of them sits in a different place, which is why confident answers on this subject are so often wrong.</p>

      <h2>Recording a call you are part of</h2>
      <p>There is no provision in Indian law that makes it an offence for a party to a conversation to record that conversation. That is the honest starting point, and it is why the trade in call recording features has never needed a licence.</p>

      <p>Two qualifications matter more than the headline. The first is that the absence of a prohibition on making a recording says nothing about what happens next: circulating a private conversation can engage separate provisions, and an organisation holding recordings of identifiable people is handling personal data under the Digital Personal Data Protection Act, 2023. The second is that a workplace, a bank or a call centre recording your call is doing something different again, under its own obligations and usually with an announcement at the start.</p>

      <p>If you are recording to protect yourself in a dispute, the question you actually care about is not whether you may press the button. It is the next one.</p>

      <h2>Will a court accept it</h2>
      <p>This was unsettled until last year, and the Supreme Court has now answered it for one important category of case.</p>

      <p>In <em>Vibhor Garg v. Neha</em>, 2025 INSC 829, decided on <a href="https://www.scobserver.in/supreme-court-observer-law-reports-scolr/evidentiary-value-of-secretly-recorded-phone-calls-between-spouses-in-marital-disputes-vibhor-garg-v-neha/" rel="noopener noreferrer" target="_blank">14 July 2025</a> by a bench of Justice B.V. Nagarathna and Justice S.C. Sharma, the Court held that a spouse's secretly recorded telephone conversation is admissible in matrimonial proceedings. Section 122 of the Indian Evidence Act protects communications between married persons, but its own exception covers suits between the spouses themselves, so the bar did not apply. The Court said that the right of privacy in spousal communication cannot be absolute, that Section 122 exists to protect the sanctity of marriage rather than individual privacy, and that a recording made without the speaker's consent is not a prohibition on the admissibility of the evidence. Evidence is not to be treated as inadmissible merely because it was obtained unlawfully. The appeal was allowed, the High Court's order was set aside and the Family Court was directed to take the memory card, the compact disc and the transcripts on record.</p>

      <p>Three practical consequences follow. Admissibility is not the same as weight: the Court required relevance, voice identification and accuracy to be proved, with no sign of tampering. The holding is about proceedings between the spouses themselves, which is where the statutory exception bites, so it should not be read as a general licence to record anybody. And the judgment construes the Indian Evidence Act, 1872, which has since been replaced by the Bharatiya Sakshya Adhiniyam, 2023, so the section numbers a lawyer uses today may not be the ones quoted here.</p>

      <h2>When the state's recording is the one thrown out</h2>
      <p>Here is the inversion worth holding on to. A private person's covert recording of their own call can be admitted. A recording made by the state can be excluded, and the ground is procedural rather than moral.</p>

      <p>Section 20 of the <a href="https://www.dot.gov.in/acts-policies/telecommunications-act-2023" rel="noopener noreferrer" target="_blank">Telecommunications Act, 2023</a> came into force on 26 June 2024 and carries the interception power. The procedure under it was notified as <a href="https://eservices.dot.gov.in/sites/default/files/circular-notifications/procedures-and-safeguards-for-lawful-interception-of-messages-rules-2024.pdf" rel="noopener noreferrer" target="_blank">G.S.R. 754(E) on 6 December 2024</a>, in supersession of the old rules 419 and 419A of the Indian Telegraph Rules, 1951.</p>

      <p>Those Rules allow an order to be issued away from the desk of the competent authority in two situations: in unavoidable circumstances by an officer not below the rank of Joint Secretary to the Central Government who has been authorised for the purpose, and where even that is not feasible in remote areas or for operational reasons, by a senior officer of the agency not below the rank of Inspector General of Police at state level. An order issued that way has a clock on it. A copy goes to the competent authority within three working days, and confirmation must follow within seven working days of issue.</p>

      <p>If the confirmation does not come in time, the Rules are blunt about the consequences. The interception must cease forthwith. Any messages intercepted shall not be used for any purpose, including as evidence in a court of law. And copies must be destroyed within two working days, with written confirmation of the destruction sent to the competent authority. A separate provision bars an order altogether unless the issuing authority has considered that the information could not be obtained by any other reasonable means.</p>

      <p>So the two halves of this subject pull in opposite directions. Material a spouse obtained covertly can go before a Family Court, while material the state obtained under a lapsed authorisation cannot go before any court at all. Our guide to <a href="/blog/is-my-phone-tapped">whether your phone is tapped</a> works through the rest of that framework, including how long an order may run, who reviews it and when the recordings have to be destroyed.</p>

      <h2>Why your phone stopped recording calls</h2>
      <p>A large share of the people searching this phrase are not asking a legal question at all. They are asking why the feature disappeared.</p>

      <p>The cause is a platform rule rather than Indian law. From 11 May 2022, Google's Play Store policy stopped third party applications from using the accessibility interface to record calls, which was the route almost every recording app on Android had been using. Handsets whose manufacturer builds recording into the dialler itself were not covered by that change, and several of them announce to both parties that recording has started. So the feature survives on some phones and not others, for reasons that have nothing to do with the legality of recording in India.</p>

      <h2>If you believe your calls are being listened to</h2>
      <p>This is where the question usually comes from, and it deserves a straight answer.</p>

      <p>Lawful interception happens inside the network, and it leaves nothing for you to find on the handset. There are no clicks, no echoes and no battery symptom that indicates it. The realistic route by which a private individual listens to somebody's calls is not interception at all: it is software or access on the device itself, or an account that is logged in somewhere it should not be.</p>

      <p>That is a question you can actually make progress on. Our guide to <a href="/blog/is-my-phone-tapped">whether your phone is tapped</a> sets out what the handset can and cannot tell you, our guide to <a href="/blog/is-someone-monitoring-your-phone">whether someone is monitoring your phone</a> covers the signs that are worth something and the ones that are folklore, and our guide to <a href="/blog/who-has-access-to-my-google-account">who has access to your Google account</a> covers the access route people forget entirely. If a room rather than a phone is the worry, our guide to <a href="/blog/how-to-find-a-listening-device">finding a listening device</a> is the place to start.</p>

      <h2>What an examination can and cannot establish</h2>
      <p>A physical examination reports what was found in the areas accessed, by the methods used, under the conditions present, at the time of the visit. Finding no device does not prove that none exists, and no examination promises complete detection or future protection. No examination of a room or a handset can tell you whether a lawful interception order exists, because that process leaves no trace at your end.</p>

      <p>The legal position on this page is a starting point rather than advice on your situation, and it should be confirmed against the current official text. Whether a particular recording helps you or hurts you in a particular proceeding is a question for a lawyer who has heard the facts. What a physical examination covers is set out in our <a href="/blog/bug-sweeping-in-india">national guide to bug sweeping</a>.</p>

      <h2>Frequently asked questions</h2>
${faqHtml(callRecordingFaqs)}
    `,
  },
  {
    slug: "is-it-legal-to-buy-a-spy-camera-in-india",
    title: "Is It Legal to Buy a Spy Camera in India?",
    seoTitle: "Is It Legal to Buy a Spy Camera in India? The Real Answer",
    metaDescription:
      "Buying a hidden camera is not the offence. Indian law regulates the device's approvals and what you do with it. What that means for buyers and for victims.",
    excerpt:
      "The honest answer is uncomfortable. Nothing in Indian law makes buying a concealed camera an offence. The regulation sits on either side of the purchase: on the device's approvals, and on what happens the moment it is switched on.",
    date: "2026-11-27",
    readTime: "9 min read",
    category: "TSCM Guides",
    coverImage: "/images/blogs/is-it-legal-to-buy-a-spy-camera-in-india.webp",
    ogImage: "/images/blogs/is-it-legal-to-buy-a-spy-camera-in-india.png",
    coverImageAlt:
      "Spy camera law guide cover: a small concealed lens with an approval stamp on one side and a court gavel outline on the other",
    publishedBy: "BugSweepingTSCM",
    cta: {
      heading: "Worried that a device like this is already in your space?",
      text: "A concealed camera is found by examining the room, not by reading the law, and the two questions need different help. If what you actually want is somebody to look at a room, a vehicle or an office, a private consultation can tell you what that involves before you commit to anything. Please get in touch from a phone you trust.",
      label: "Request a consultation on WhatsApp",
    },
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://www.bugsweepingtscm.com/blog/is-it-legal-to-buy-a-spy-camera-in-india#webpage",
          url: "https://www.bugsweepingtscm.com/blog/is-it-legal-to-buy-a-spy-camera-in-india",
          name: "Is It Legal to Buy a Spy Camera in India? The Real Answer",
          inLanguage: "en-IN",
          isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" },
          breadcrumb: { "@id": "https://www.bugsweepingtscm.com/blog/is-it-legal-to-buy-a-spy-camera-in-india#breadcrumb" },
          primaryImageOfPage: { "@id": "https://www.bugsweepingtscm.com/blog/is-it-legal-to-buy-a-spy-camera-in-india#primaryimage" },
          about: {
            "@type": "Place",
            name: "India",
            address: { "@type": "PostalAddress", addressCountry: "IN" },
          },
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
          "@type": "ImageObject",
          "@id": "https://www.bugsweepingtscm.com/blog/is-it-legal-to-buy-a-spy-camera-in-india#primaryimage",
          url: "https://www.bugsweepingtscm.com/images/blogs/is-it-legal-to-buy-a-spy-camera-in-india.png",
          width: 1200,
          height: 630,
        },
        {
          "@type": "BlogPosting",
          "@id": "https://www.bugsweepingtscm.com/blog/is-it-legal-to-buy-a-spy-camera-in-india#article",
          headline: "Is It Legal to Buy a Spy Camera in India?",
          description:
            "Buying a hidden camera is not the offence. Indian law regulates the device's approvals and what you do with it. What that means for buyers and for victims.",
          datePublished: "2026-11-27",
          image: { "@id": "https://www.bugsweepingtscm.com/blog/is-it-legal-to-buy-a-spy-camera-in-india#primaryimage" },
          mainEntityOfPage: { "@id": "https://www.bugsweepingtscm.com/blog/is-it-legal-to-buy-a-spy-camera-in-india#webpage" },
          inLanguage: "en-IN",
          author: { "@id": "https://www.bugsweepingtscm.com/#organization" },
          publisher: { "@id": "https://www.bugsweepingtscm.com/#organization" },
          about: [
            { "@type": "Thing", name: "Hidden camera" },
            { "@type": "Thing", name: "Indian criminal law" },
            { "@type": "Thing", name: "Telecommunications regulation" },
          ],
          spatialCoverage: { "@type": "Place", name: "India" },
          isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" },
        },
        {
          "@type": "Organization",
          "@id": "https://www.bugsweepingtscm.com/#organization",
          name: "BugSweepingTSCM",
          url: "https://www.bugsweepingtscm.com",
          logo: "https://www.bugsweepingtscm.com/images/logo/bug-sweep.png",
          email: "info@advancedetectiveagency.com",
          telephone: "+91-8882732221",
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://www.bugsweepingtscm.com/blog/is-it-legal-to-buy-a-spy-camera-in-india#breadcrumb",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.bugsweepingtscm.com" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.bugsweepingtscm.com/blog" },
            { "@type": "ListItem", position: 3, name: "Is It Legal to Buy a Spy Camera in India?" },
          ],
        },
        faqJsonLd(spyCameraLegalFaqs, "https://www.bugsweepingtscm.com/blog/is-it-legal-to-buy-a-spy-camera-in-india#faq"),
      ],
    },
    content: `
      <div class="answer-box">
        <p><strong>Short answer:</strong> Nothing in Indian law makes buying a spy camera an offence, which is why the trade is open. The regulation sits on either side of the purchase: the device needs its own approvals before it can be sold here, and the use of it is covered by the criminal law from the moment it is pointed at somebody.</p>
      </div>

      <p>Three different people type this question. Somebody about to buy one. Somebody who found one and cannot understand how it was legal to sell. And somebody wondering whether they are already in trouble.</p>

      <p>The same answer serves all three, but only if it is split into the three separate things the law actually regulates. Almost every page on this subject collapses them into one, and the result reads as though possession were the crime. It is not.</p>

      <h2>The purchase is the least regulated step</h2>
      <p>Indian law contains no offence of buying or owning a concealed camera. The regulation attaches at two other points.</p>

      <p>Before the sale, the device has compliance requirements of its own, and this is where most of the market sits on the wrong side of a line. After the sale, the criminal law applies to what the camera is pointed at, with no reference at all to how the camera was obtained. A device bought entirely openly, from a shop with a GST invoice, becomes evidence in a voyeurism case the moment it is aimed at a bathroom door.</p>

      <p>That structure is why "is it legal to buy a spy camera in India" has an answer most readers find unsatisfying. Nothing stops the purchase. Everything stops the use.</p>

      <h2>What the law actually punishes</h2>
      <p>Two provisions do different work, and they are routinely quoted as though they were one.</p>

      <p>Section 77 of the Bharatiya Nyaya Sanhita, 2023, the successor to Section 354C of the Indian Penal Code, covers voyeurism: watching, capturing or spreading the image of a woman engaged in a private act in circumstances where she would expect privacy. A first conviction carries one to three years and a fine, a subsequent conviction three to seven years and a fine. It also reaches the person who shares a recording that was originally made with consent, which is the part people miss.</p>

      <p>Section 66E of the <a href="https://www.meity.gov.in/static/uploads/2024/03/IT_amendment_act2008-1_0.pdf" rel="noopener noreferrer" target="_blank">Information Technology Act, 2000</a> works differently. It requires intent or knowledge, absence of consent and circumstances violating privacy, and it carries up to three years, or a fine up to two lakh rupees, or both. One detail matters for anyone reading it as a general ban: the phrase it uses, private area, refers to defined parts of the body, not to private premises. Section 66E is not an offence of recording in a private room as such.</p>

      <p>Neither provision asks where the camera came from. For a reader worried about their own exposure, that is the point: the receipt proves nothing either way.</p>

      <h2>The approvals most of these devices do not have</h2>
      <p>This is the part the market does not advertise.</p>

      <p>A camera that transmits over Wi-Fi or any other radio link is a wireless device, and a wireless device operating in India's de-licensed bands needs Equipment Type Approval from the Wireless Planning and Coordination Wing of the Department of Telecommunications. The Department's own <a href="https://eservices.dot.gov.in/equipment-type-approval-eta" rel="noopener noreferrer" target="_blank">service page for Equipment Type Approval</a> describes the route as self-declaration, names the covered products as printers, scanners and cameras operating in licensed exemption bands as permitted in India, excludes four categories from that route, which are radar, jamming devices, drones and satellite equipment, and sets the fee at ten thousand rupees, with applications made on the Saral Sanchar portal. A product manufactured outside India needs the approval before it is imported.</p>

      <p>Separately, a camera sold as CCTV has to be a registered model under the Bureau of Indian Standards scheme, and since April 2025 that registration also requires a security test report. Our guide to <a href="/blog/cctv-camera-rules-in-india">CCTV camera rules in India</a> sets that out, along with the finding that most internet cameras listed on the large marketplaces were not registered models at all.</p>

      <p>Put the two together and the position is this. The buyer is not committing an offence. The chain supplying an uncertified wireless camera is a different matter, and that is where the enforcement pressure has actually landed.</p>

      <h2>Parliament noticed the gap in 2019</h2>
      <p>The complaint that the sale of these devices is unregulated is not an outsider's view. It was made in the House.</p>

      <p>In a submission laid before the Seventeenth Lok Sabha on <a href="https://indiankanoon.org/doc/160295811/" rel="noopener noreferrer" target="_blank">24 July 2019</a>, Shrimati Vanga Geetha Viswanath, the Member for Kakinada, stated that spy cameras have no known use other than for security, defence and law enforcement, and asked why these devices were available in the open market both online and offline without any regulation or licensing system in force. The submission asked for regulation of the sale and purchase of spy cameras, for stringent action against those involved in illegal use, and for the offence to be made non-bailable through an amendment.</p>

      <p>Seven years on, the device compliance rules have tightened considerably while the licensing system the submission asked for has not appeared. If you are wondering how the thing you found in a hotel room was bought legally, that is the answer.</p>

      <h2>The purchase that usually matches the question</h2>
      <p>Many people who search this phrase do not want to buy a camera at all. They want to find one.</p>

      <p>Owning and using a detector to examine a space you are entitled to be in is not restricted in India, and the honest limits of consumer detectors, along with the checks that need no equipment, are set out in our guide to <a href="/blog/how-to-detect-hidden-cameras">detecting hidden cameras</a>.</p>

      <p>One purchase to avoid entirely. A jammer is not a lawful shortcut here. The <a href="https://www.pib.gov.in/PressReleaseIframePage.aspx?PRID=1839030" rel="noopener noreferrer" target="_blank">Department of Telecommunications advisory of July 2022</a> states that cellular jammers, GPS blockers and other signal jamming devices are generally illegal unless specifically permitted by the Government of India, that private organisations and individuals cannot procure or use them, and that advertising, selling or distributing them is unlawful. It is also why jamming devices are one of the four categories excluded from the self-declaration approval route described above.</p>

      <h2>If you think one is already pointed at you</h2>
      <p>The legal position is interesting. It is not what you need in the first hour.</p>

      <p>If you believe you are in immediate danger, call <strong>112</strong>. Otherwise, and only if it is safe to do so, leave the device where it is, photograph it in place with enough of the surroundings to show what it was covering, and note the time. A dismantled device is a damaged exhibit, and the position it was in is often the single most important fact about it.</p>

      <p>Report it to the local police. A cybercrime complaint, including where private images have been published, can be filed at <a href="https://cybercrime.gov.in" rel="noopener noreferrer" target="_blank">cybercrime.gov.in</a>, which routes to the relevant state police; a complaint on that portal does not automatically become an FIR. If the room was a hotel, a homestay or a paying guest accommodation, our guide to <a href="/blog/hidden-cameras-in-hotel-rooms-and-pgs">hidden cameras in hotel rooms and PGs</a> covers who is answerable and how that changes with the way you booked.</p>

      <h2>What a sweep can and cannot establish</h2>
      <p>A physical examination reports what was found in the areas accessed, by the methods used, under the conditions present, at the time of the visit. Finding no device does not prove that none exists, and no examination promises complete detection or future protection. A camera recording to a memory card with its radio switched off transmits nothing to find.</p>

      <p>The legal points on this page are a starting position rather than advice on your situation, and they should be confirmed against the current official text. Whether a particular recording is an offence depends on facts a lawyer needs to hear. What an examination of a room, a vehicle or an office actually involves is set out in our <a href="/blog/bug-sweeping-in-india">national guide to bug sweeping</a>.</p>

      <h2>Frequently asked questions</h2>
${faqHtml(spyCameraLegalFaqs)}
    `,
  },
  {
    slug: "cctv-camera-rules-in-india",
    title: "CCTV Camera Rules in India: What the Law Actually Requires",
    seoTitle: "CCTV Camera Rules in India: What the Law Requires",
    metaDescription:
      "There is no CCTV Act in India. Four separate rules apply: BIS registration of the device, where it may point, the DPDP Act on footage, and the criminal law.",
    excerpt:
      "Most writing on CCTV camera rules in India answers the wrong question. The rule that has actually changed is not about where you point the camera. It is about whether the camera you bought was ever lawfully sellable.",
    date: "2026-11-27",
    readTime: "11 min read",
    category: "TSCM Guides",
    coverImage: "/images/blogs/cctv-camera-rules-in-india.webp",
    ogImage: "/images/blogs/cctv-camera-rules-in-india.png",
    coverImageAlt:
      "CCTV rules guide cover: a camera beside a certification label, a document and a boundary line, showing separate requirements",
    publishedBy: "BugSweepingTSCM",
    cta: {
      heading: "Not sure what your own camera system is exposing?",
      text: "Who can reach a recorder, how long it holds footage and who still has the password are questions a premises owner can usually answer in an afternoon, once somebody asks them in the right order. A private consultation can help you work out which of them actually matter for your building. Please get in touch when it suits you.",
      label: "Request a consultation on WhatsApp",
    },
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://www.bugsweepingtscm.com/blog/cctv-camera-rules-in-india#webpage",
          url: "https://www.bugsweepingtscm.com/blog/cctv-camera-rules-in-india",
          name: "CCTV Camera Rules in India: What the Law Requires",
          inLanguage: "en-IN",
          isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" },
          breadcrumb: { "@id": "https://www.bugsweepingtscm.com/blog/cctv-camera-rules-in-india#breadcrumb" },
          primaryImageOfPage: { "@id": "https://www.bugsweepingtscm.com/blog/cctv-camera-rules-in-india#primaryimage" },
          about: {
            "@type": "Place",
            name: "India",
            address: { "@type": "PostalAddress", addressCountry: "IN" },
          },
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
          "@type": "ImageObject",
          "@id": "https://www.bugsweepingtscm.com/blog/cctv-camera-rules-in-india#primaryimage",
          url: "https://www.bugsweepingtscm.com/images/blogs/cctv-camera-rules-in-india.png",
          width: 1200,
          height: 630,
        },
        {
          "@type": "BlogPosting",
          "@id": "https://www.bugsweepingtscm.com/blog/cctv-camera-rules-in-india#article",
          headline: "CCTV Camera Rules in India: What the Law Actually Requires",
          description:
            "There is no CCTV Act in India. Four separate rules apply: BIS registration of the device, where it may point, the DPDP Act on footage, and the criminal law.",
          datePublished: "2026-11-27",
          image: { "@id": "https://www.bugsweepingtscm.com/blog/cctv-camera-rules-in-india#primaryimage" },
          mainEntityOfPage: { "@id": "https://www.bugsweepingtscm.com/blog/cctv-camera-rules-in-india#webpage" },
          inLanguage: "en-IN",
          author: { "@id": "https://www.bugsweepingtscm.com/#organization" },
          publisher: { "@id": "https://www.bugsweepingtscm.com/#organization" },
          about: [
            { "@type": "Thing", name: "Closed-circuit television" },
            { "@type": "Thing", name: "Data protection law" },
            { "@type": "Thing", name: "Product certification" },
          ],
          spatialCoverage: { "@type": "Place", name: "India" },
          isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" },
        },
        {
          "@type": "Organization",
          "@id": "https://www.bugsweepingtscm.com/#organization",
          name: "BugSweepingTSCM",
          url: "https://www.bugsweepingtscm.com",
          logo: "https://www.bugsweepingtscm.com/images/logo/bug-sweep.png",
          email: "info@advancedetectiveagency.com",
          telephone: "+91-8882732221",
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://www.bugsweepingtscm.com/blog/cctv-camera-rules-in-india#breadcrumb",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.bugsweepingtscm.com" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.bugsweepingtscm.com/blog" },
            { "@type": "ListItem", position: 3, name: "CCTV Camera Rules in India" },
          ],
        },
        faqJsonLd(cctvRulesFaqs, "https://www.bugsweepingtscm.com/blog/cctv-camera-rules-in-india#faq"),
      ],
    },
    content: `
      <div class="answer-box">
        <p><strong>Short answer:</strong> India has no single CCTV Act. Four separate requirements apply at once. The camera must be a registered model that has passed a security test, where it points is governed by court decisions rather than a statute, the footage is personal data under the Digital Personal Data Protection Act, and only police station cameras have specified technical rules.</p>
      </div>

      <p>Search for CCTV camera rules in India and almost everything you find answers one question: can my neighbour point a camera at my door. That is a real question, and we have written about it twice. It is also the question on which Indian law is least settled.</p>

      <p>The rule that has actually changed, quietly, over the last two years is about the camera itself. A large share of the cameras on sale in India were never lawfully sellable, and almost nobody buying one knows the test exists.</p>

      <h2>What the rules are, in one place</h2>
      <p>CCTV camera rules in India are spread across four separate bodies of law, and conflating them is why so much writing on the subject is wrong. First, product law: CCTV cameras and recorders fall inside the Ministry of Electronics and Information Technology's Compulsory Registration Order, so a model must be registered with the Bureau of Indian Standards against IS 13252 (Part 1) before it may be sold, and since 9 April 2025 that registration also requires a security test report. Second, privacy: no statute says where a private camera may point, so the position comes from High Court decisions that do not fully agree with one another. Third, data protection: recognisable footage of a person is personal data, which brings the Digital Personal Data Protection Act, 2023 and its Rules of 14 November 2025 into play for any organisation. Fourth, criminal law: filming someone in a private act is an offence whoever owns the camera, and that is true of a concealed device as much as a wall mounted one, as our guide to <a href="/blog/is-it-legal-to-buy-a-spy-camera-in-india">whether it is legal to buy a spy camera in India</a> sets out.</p>

      <h2>The rule most buyers have never heard of</h2>
      <p>Your camera has to be a registered device, and since April 2025 it has to have passed a security test to get that registration.</p>

      <p>The Bureau of Indian Standards set this out in a circular of 22 October 2024, reference Registration/Meity/CCTV Camera. It records that CCTV cameras and CCTV recorders under IS 13252 (Part 1) are covered by mandatory certification under the Ministry of Electronics and Information Technology's Electronics and Information Technology Goods (Requirements for Compulsory Registration) Order, 2021, and that the Ministry notified the Essential Requirement(s) for Security of CCTV by gazette notification dated 9 April 2024.</p>

      <p>The deadline moved once. On the Bureau's own wording the last date for implementation was extended to 9 April 2025, after which non-compliant models are deleted from the scope of a manufacturer's licence, and the licence itself is liable for cancellation if none of its models comply. Beyond that date, as the <a href="https://www.crsbis.in/BIS/app_srv/tdc/gl/docs/CCTV_Implementation_guidelines.pdf" rel="noopener noreferrer" target="_blank">implementation guidelines</a> put it, no licence for CCTV cameras is granted without compliance.</p>

      <p>The test is referred to as ER:01 and has to come from a third party testing laboratory. The signal available to a buyer is small and easy to miss: the same circular permits a compliant model to display on its packaging that the camera complies with Essential Requirement(s) for Security.</p>

      <h2>Why this is not a paperwork story</h2>
      <p>Because the thing being tested is whether somebody outside your building can get into your camera.</p>

      <p>We have written up the Indian case that shows what the absence of that looks like. In February 2025 Ahmedabad Cyber Crime Branch traced footage from a hospital labour room, being sold online, back to the hospital's own recorder, which had been reached through an unsecured address and port. Our guide to <a href="/blog/can-cctv-be-hacked-ahmedabad">whether CCTV can be hacked</a> sets out that investigation in full. The security requirement exists because that failure is ordinary rather than exotic.</p>

      <h2>Most cameras on sale did not have it</h2>
      <p>This is where the rule meets the shop.</p>

      <p>Reuters reported on 1 October 2026, in a piece by Munsif Vengattil and Aditya Kalra, that it had reviewed roughly 770 internet security camera listings on Amazon and Flipkart in India and found that <a href="https://www.yahoo.com/news/world/articles/amazon-walmarts-flipkart-launch-review-104958485.html" rel="noopener noreferrer" target="_blank">more than 700 of them were models absent from the public register</a>. The listings included models from Hikvision and Dahua. One seller, Maizic Smarthomes, had none of its listed wireless camera models on the register; its co-founder told Reuters the brand is committed to full compliance and that some of its cameras are not subject to the rules. Amazon declined to comment and Flipkart did not respond. At least a dozen listings came down over the following days, and hundreds remained.</p>

      <p>Enforcement is not only about listings. All India Radio reported on 15 March 2025 that the Bureau of Indian Standards had <a href="https://www.newsonair.gov.in/bis-cracks-down-on-non-certified-products-at-amazon-flipkart-warehouses" rel="noopener noreferrer" target="_blank">carried out search and seizure operations at warehouse locations</a> in Lucknow, Gurugram and Delhi used by major platforms, over non-certified products generally.</p>

      <p>None of that makes you an offender for owning such a camera. The obligation sits on whoever manufactures or imports it. It does tell you something useful about the device bolted to your wall, which is that nobody ever tested whether it resists being reached from outside.</p>

      <h2>How to check the camera you already have</h2>
      <p>Three questions, in this order, and the first is the one people get wrong.</p>
      <ol>
        <li><strong>Ask about the model, not the brand.</strong> Registration is held model by model. A well known brand name tells you nothing about the unit in your hand, which is exactly what the Reuters review showed.</li>
        <li><strong>Look at the packaging if you still have it.</strong> A model that passed the security test may carry the compliance line quoted above. Its absence proves nothing, but its presence is a real signal.</li>
        <li><strong>Ask the installer what remote viewing was switched on.</strong> This matters more than the certificate. A camera nobody can reach from outside the building is in a different position from one published to the internet so that a phone app can see it.</li>
      </ol>

      <h2>Where you may point it: the unsettled part</h2>
      <p>No Indian statute states where a private camera may point. The position comes from courts, and they have not all started from the same place.</p>

      <p>The Kerala High Court has treated the question as one of evidence, declining to order a camera down unless snooping is actually established. The Allahabad High Court has approached it from the other end, holding that a private camera must not be positioned so as to interfere with a neighbour's privacy. Our guides to <a href="/blog/neighbour-cctv-pointing-at-my-house-kochi">a neighbour's camera facing your house</a> and to <a href="/blog/can-my-landlord-put-cameras">whether a landlord can install cameras</a> set out both lines and what they mean for a reader in each state, and our guide to <a href="/blog/cctv-in-a-shared-home-kolkata">CCTV inside a shared home</a> covers the harder case where the people disagreeing live in the same building.</p>

      <p>The practical rule that survives all of it: a camera covering your own entrance and your own land is the ordinary case, and a camera whose field of view reaches inside somebody else's home is the case that ends up in court.</p>

      <h2>What changed for anyone who is not a household</h2>
      <p>The Digital Personal Data Protection Rules, 2025 were notified on 14 November 2025, which <a href="https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/nov/doc20251117695301.pdf" rel="noopener noreferrer" target="_blank">the Press Information Bureau describes</a> as the full operationalisation of the Digital Personal Data Protection Act, 2023. Recognisable footage of a person is personal data, so a society, an employer, a clinic or a shop running cameras is processing it.</p>

      <p>On the Bureau's account of the Rules, an organisation acting as a Data Fiduciary must issue a separate, plain consent notice explaining the specific purpose for which data is collected, publish a contact point for data queries, answer access, correction and erasure requests within ninety days, and inform affected individuals without delay if there is a breach. The penalties under the Act are substantial: up to two hundred and fifty crore rupees for failing to maintain reasonable security safeguards, up to two hundred crore for not notifying a breach, and up to fifty crore for other contraventions. The Rules allow an eighteen month phased compliance period, so these duties are arriving rather than already past.</p>

      <p>Two honest caveats. The Act excludes personal data processed by an individual for a personal or domestic purpose, which is where an ordinary household camera normally sits. And how the duties apply specifically to CCTV in a residential building has not yet been tested, so a society that writes down its purpose, its retention period and who may view footage is in a far better position than one that has not thought about it. Our guide to <a href="/blog/cctv-rules-for-housing-societies">CCTV rules for housing societies</a> goes through that in detail.</p>

      <h2>The only cameras India has written detailed rules for</h2>
      <p>It is worth seeing what a real Indian CCTV specification looks like, because one exists in exactly one place.</p>

      <p>In <em>Paramvir Singh Saini v. Baljit Singh</em>, decided on 2 December 2020, the Supreme Court directed states to install cameras in police stations and set out what the equipment had to do. The <a href="https://api.sci.gov.in/supremecourt/2020/13346/13346_2020_32_12_25691_Order_27-Jan-2021.pdf" rel="noopener noreferrer" target="_blank">compliance chart in the Court's order of 27 January 2021</a> lists the directions being tracked, among them that CCTV must have night vision and audio recording, that purchase of systems with eighteen month recording capacity is mandatory for all states, and that no part of a station is left uncovered.</p>

      <p>Hold that against private premises. For your shop, your office or your society, no Indian law prescribes night vision, audio, a retention period or a warning sign. That gap is the real answer to several of the most searched questions on this subject, and it is why a written policy matters: nothing else is going to supply one.</p>

      <p>That leaves one practical question this page cannot answer in passing: how you obtain a recording that belongs to somebody else. Our guide to <a href="/blog/how-to-get-cctv-footage-in-india">getting CCTV footage somebody else holds</a> sets out who actually has the power to require it, and what to send on the first day.</p>

      <h2>What a sweep can and cannot establish</h2>
      <p>A physical examination reports what was found in the areas accessed, by the methods used, under the conditions present, at the time of the visit. Finding no device does not prove that none exists, and no examination promises complete detection or future protection. Our guide to <a href="/blog/how-to-detect-hidden-cameras">detecting hidden cameras</a> covers the checks you can make yourself and what they miss.</p>

      <p>None of that answers the questions on this page. Whether your camera is a registered model is answered from paperwork. Whether its recorder has been reached from outside is answered from logs, accounts and the router in front of it. Whether your society's use of footage is lawful is a question for a lawyer who has read your bye-laws. Our <a href="/blog/bug-sweeping-in-india">national guide to bug sweeping</a> sets out what the physical work does cover, and the legal points here should be confirmed against the current official text before you act on them.</p>

      <h2>Frequently asked questions</h2>
${faqHtml(cctvRulesFaqs)}
    `,
  },
  {
    slug: "can-cctv-be-hacked-ahmedabad",
    title: "Can CCTV Be Hacked? The Ahmedabad Case That Answered It",
    seoTitle: "Can CCTV Be Hacked? What the Ahmedabad Case Showed",
    metaDescription:
      "Ahmedabad Cyber Crime traced labour room footage sold online to a brute forced recorder. What that case shows about your own cameras, and what to check.",
    excerpt:
      "The camera people should worry about in Ahmedabad was not hidden. It was installed openly, by the premises, for a good reason, and somebody else was watching it. A police case from February 2025 is the clearest Indian example.",
    date: "2026-11-26",
    readTime: "9 min read",
    category: "City Guides",
    coverImage: "/images/blogs/can-cctv-be-hacked-ahmedabad.webp",
    ogImage: "/images/blogs/can-cctv-be-hacked-ahmedabad.png",
    coverImageAlt:
      "CCTV hacking guide cover: a recorder box with cameras attached and an unauthorised connection arriving from outside the building",
    publishedBy: "BugSweepingTSCM",
    cta: {
      heading: "Worried about who can reach your camera system?",
      text: "Whether a recorder has been reached from outside is answered from its own records rather than from a walk around the building, and it helps to know which question you are asking before you pay for an answer. A private consultation can help you work that out. Please get in touch from a phone and a network you trust.",
      label: "Request a consultation on WhatsApp",
    },
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://www.bugsweepingtscm.com/blog/can-cctv-be-hacked-ahmedabad#webpage",
          url: "https://www.bugsweepingtscm.com/blog/can-cctv-be-hacked-ahmedabad",
          name: "Can CCTV Be Hacked? What the Ahmedabad Case Showed",
          inLanguage: "en-IN",
          isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" },
          breadcrumb: { "@id": "https://www.bugsweepingtscm.com/blog/can-cctv-be-hacked-ahmedabad#breadcrumb" },
          primaryImageOfPage: { "@id": "https://www.bugsweepingtscm.com/blog/can-cctv-be-hacked-ahmedabad#primaryimage" },
          about: {
            "@type": "Place",
            name: "Ahmedabad",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Ahmedabad",
              addressRegion: "Gujarat",
              addressCountry: "IN",
            },
          },
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
          "@type": "ImageObject",
          "@id": "https://www.bugsweepingtscm.com/blog/can-cctv-be-hacked-ahmedabad#primaryimage",
          url: "https://www.bugsweepingtscm.com/images/blogs/can-cctv-be-hacked-ahmedabad.png",
          width: 1200,
          height: 630,
        },
        {
          "@type": "BlogPosting",
          "@id": "https://www.bugsweepingtscm.com/blog/can-cctv-be-hacked-ahmedabad#article",
          headline: "Can CCTV Be Hacked? The Ahmedabad Case That Answered It",
          description:
            "Ahmedabad Cyber Crime traced labour room footage sold online to a brute forced recorder. What that case shows about your own cameras, and what to check.",
          datePublished: "2026-11-26",
          image: { "@id": "https://www.bugsweepingtscm.com/blog/can-cctv-be-hacked-ahmedabad#primaryimage" },
          mainEntityOfPage: { "@id": "https://www.bugsweepingtscm.com/blog/can-cctv-be-hacked-ahmedabad#webpage" },
          inLanguage: "en-IN",
          author: { "@id": "https://www.bugsweepingtscm.com/#organization" },
          publisher: { "@id": "https://www.bugsweepingtscm.com/#organization" },
          about: [
            { "@type": "Thing", name: "Closed-circuit television" },
            { "@type": "Thing", name: "Computer security" },
          ],
          spatialCoverage: { "@type": "Place", name: "Ahmedabad, Gujarat, India" },
          isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" },
        },
        {
          "@type": "Organization",
          "@id": "https://www.bugsweepingtscm.com/#organization",
          name: "BugSweepingTSCM",
          url: "https://www.bugsweepingtscm.com",
          logo: "https://www.bugsweepingtscm.com/images/logo/bug-sweep.png",
          email: "info@advancedetectiveagency.com",
          telephone: "+91-8882732221",
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://www.bugsweepingtscm.com/blog/can-cctv-be-hacked-ahmedabad#breadcrumb",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.bugsweepingtscm.com" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.bugsweepingtscm.com/blog" },
            { "@type": "ListItem", position: 3, name: "Can CCTV Be Hacked?" },
          ],
        },
        faqJsonLd(ahmedabadCctvHackFaqs, "https://www.bugsweepingtscm.com/blog/can-cctv-be-hacked-ahmedabad#faq"),
      ],
    },
    content: `
      <div class="answer-box">
        <p><strong>Short answer:</strong> Yes, and the clearest Indian example was worked by Ahmedabad Cyber Crime Branch. A case registered on 17 February 2025 traced labour room footage being sold online back to a hospital's own recorder, entered from outside. Every page on this site about concealed devices assumes somebody planted something. This case is the opposite, and for most premises it is the likelier risk.</p>
      </div>

      <p>Everything else on this site is about a device that should not be there. This page is about the cameras that should.</p>

      <p>Ahmedabad produced the Indian case that makes the difference concrete, and it is worth knowing in detail if you run a clinic, a salon, a hostel, a showroom or an office floor, because the exposure it describes is ordinary rather than exotic.</p>

      <h2>What Ahmedabad Cyber Crime found</h2>
      <p>On 17 February 2025 Ahmedabad police registered a case after video recorded inside a hospital labour room began circulating. <a href="https://www.newsdrum.in/national/hospital-cctv-hacking-case-gujarat-cops-arrest-2-from-maharashtra-one-from-surat-8749619" rel="noopener noreferrer" target="_blank">PTI reported on 23 February 2025</a> that the Ahmedabad Cyber Crime Branch had traced the footage to Payal Maternity Home in Rajkot, and that three more arrests that day took the total to six, two from Sangli in Maharashtra and one from Surat.</p>

      <p>The clips showed women patients being examined inside a room they had every reason to treat as closed. On the police account, they were advertised through three YouTube channels whose descriptions pointed to a Telegram group, and sold for about two thousand rupees each. The accused were booked under sections 66E and 67 of the <a href="https://www.meity.gov.in/static/uploads/2024/03/IT_amendment_act2008-1_0.pdf" rel="noopener noreferrer" target="_blank">Information Technology Act</a>, which deal with capturing or transmitting private images without consent and with obscene material in electronic form.</p>

      <h2>How the system was actually entered</h2>
      <p>This is the part worth sitting with, because it is unremarkable.</p>

      <p>On the police release carried by PTI, the accused who obtained the footage used a brute force attack against an unsecured IP address and port to reach the recorder. No device was planted in the room. Nobody walked in. The hospital's own cameras, doing the job they were installed to do, were reachable from the public internet, and the credentials protecting them did not hold.</p>

      <p>A specialist cyber crime outlet, <a href="https://the420.in/gujarat-labour-room-cctv-hack-eight-arrested/" rel="noopener noreferrer" target="_blank">The 420</a>, reported from the chargesheet that investigators relied on IP logs linking two of the accused to the hospital recorder, on shared access credentials and on access details circulated as QR codes, and that the material was distributed through more than twenty channels under a single Telegram group, with payment taken by UPI and gift vouchers. The same report puts arrests at eight and the first chargesheet, against seven, on 17 May.</p>

      <h2>What else was being sold</h2>
      <p>The hospital was not the whole of it. <a href="https://english.gujaratsamachar.com/news/gujarat/ahmedabad-cyber-crime-uncovers-sale-of-cctv-footage-from-bus-stations-beauty-parlours" rel="noopener noreferrer" target="_blank">Gujarat Samachar reported on 23 February 2025</a> that the Ahmedabad investigation had found footage being sold from marriage halls, bus stations, mall dressing rooms and beauty parlours, with free clips used to advertise paid subscriptions priced between eight hundred and four thousand rupees, and earnings estimated at eight to ten lakh rupees. That report also states that footage from around eighty hospitals had been sold, which is its own figure and a much larger claim than the police statements carry, so treat it as the newspaper's account rather than a settled fact.</p>

      <p>What the list has in common is not the technology. It is that every one of those places is somewhere people undress, wait, or assume they are unobserved, and every one of them had cameras for a defensible reason.</p>

      <h2>The part that applies to your own cameras</h2>
      <p>India's own advisory on this is old, which is the point. The <a href="https://csk.gov.in/alerts/IOT_Botnets_Targeting_Vulnerable_IP_cameras.html" rel="noopener noreferrer" target="_blank">Cyber Swachhta Kendra</a>, run under CERT-In at the Ministry of Electronics and Information Technology, issued a high severity alert in June 2017 about worms that spread by scanning the public internet for devices running with insecure default credentials, and named routers, digital video recorders and IP cameras together.</p>

      <p>Its countermeasures have not changed and still describe what most premises have not done: change the manufacturer's default credentials and enforce password complexity, apply firmware updates, disable UPnP unless it is genuinely needed, set an account lockout policy so repeated guesses fail, shut down ports and services nobody uses, and turn on logging so there is a record to read afterwards.</p>

      <p>Read that list against the Ahmedabad facts and the case stops looking sophisticated. An unsecured port and credentials that could be guessed is the first two items.</p>

      <h2>Why a concealed camera is the smaller risk here</h2>
      <p>For a business, the arithmetic is uncomfortable. A concealed camera has to be physically brought in, placed, powered and eventually retrieved, by somebody who can get into the room. A recorder reachable from the internet can be found by software that is not looking for you in particular, from anywhere, repeatedly, and the first sign of it is usually the footage turning up somewhere else.</p>

      <p>Our guide to <a href="/blog/how-to-detect-hidden-cameras">detecting hidden cameras</a> covers the first problem, and our guide to <a href="/blog/unknown-device-on-my-wifi">identifying unknown devices on your network</a> covers the habit that catches the second, which is knowing what is actually connected to your own network and what each thing is for.</p>

      <h2>The other Ahmedabad pattern: places people trust</h2>
      <p>The city's other recorded camera case runs the opposite way and makes the same point about trusted premises. <a href="https://deshgujarat.com/2025/10/03/man-booked-for-filming-minor-girl-in-changing-room-of-cloths-store-of-palladium-mall-ahmedabad/" rel="noopener noreferrer" target="_blank">DeshGujarat reported on 3 October 2025</a> that a fourteen year old girl trying on clothes at a store in Palladium Mall on SG Highway found a mobile phone lying in the trial room, took it to her mother, and that Vastrapur police registered a case under the POCSO Act after four objectionable recordings were found on it.</p>

      <p>No hacking there, and no specialist equipment either. A phone on the floor of a changing room. Our guide to <a href="/blog/hidden-cameras-in-hotel-rooms-and-pgs">hidden cameras in hotel rooms and PGs</a> sets out what to look at in a room you did not prepare.</p>

      <p>India has since written a security test into the rules for selling a camera at all, which is a direct response to the exposure this case describes. Our guide to <a href="/blog/cctv-camera-rules-in-india">CCTV camera rules in India</a> sets out what that test is and how to tell whether the camera on your wall ever passed it.</p>

      <h2>What to ask before you trust a premises</h2>
      <p>Four questions, usable by a patient, a resident or a customer, and worth asking of your own business first.</p>
      <ol>
        <li><strong>Who can view the live feed, and from where.</strong> The answer should be a short list of named people, not a role.</li>
        <li><strong>Is remote viewing enabled at all.</strong> If nobody needs to watch from outside the building, the safest configuration is the one where they cannot.</li>
        <li><strong>How long is footage kept, and on what device.</strong> A recorder sitting in a room anyone can walk into is a different proposition from one kept behind a door.</li>
        <li><strong>Who else has the recorder password.</strong> The installer who set the system up years ago is the answer more often than anybody expects.</li>
      </ol>

      <p>If you are in Ahmedabad and the question is about your own premises rather than somebody else's, our <a href="/locations/ahmedabad">Ahmedabad page</a> sets out what a physical examination covers across the city and where devices have actually surfaced here.</p>

      <h2>What a check can and cannot establish</h2>
      <p>A physical examination reports what was found in the areas accessed, by the methods used, under the conditions present, at the time of the visit. It can report what was physically present and what was transmitting in the bands examined while the examiner was there. It cannot establish the absence of a device that records to internal memory and transmits nothing.</p>

      <p>And it cannot tell you whether a recorder was reached from outside. That answer lives in the recorder's own logs, its list of accounts and the router in front of it, and the work is closer to an audit than to a search. Being clear about which of the two questions you are asking is what stops people paying for the wrong one. Our <a href="/blog/bug-sweeping-in-india">national guide to bug sweeping</a> sets out what the physical examination does cover.</p>

      <h2>Frequently asked questions</h2>
${faqHtml(ahmedabadCctvHackFaqs)}
    `,
  },
  {
    slug: "neighbour-cctv-pointing-at-my-house-kochi",
    title: "A Neighbour's CCTV Facing Your House: What Kerala Decided",
    seoTitle: "Neighbour's CCTV Facing Your House: Kerala's Position",
    metaDescription:
      "Two Kerala High Court orders, one from a panchayat on Kochi's edge, decide when a neighbour's camera comes down. Privacy alone is not enough.",
    excerpt:
      "A Kochi panchayat produced the order that asked Kerala for rules on private cameras. Two years later the same High Court refused to move a camera a couple said covered their bedroom. The difference between the two is evidence.",
    date: "2026-11-26",
    readTime: "10 min read",
    category: "City Guides",
    coverImage: "/images/blogs/neighbour-cctv-pointing-at-my-house-kochi.webp",
    ogImage: "/images/blogs/neighbour-cctv-pointing-at-my-house-kochi.png",
    coverImageAlt:
      "Neighbour camera guide cover: two houses with a dashed boundary between them and a camera cone stopping at the line",
    publishedBy: "BugSweepingTSCM",
    cta: {
      heading: "Need to establish what a camera actually covers?",
      text: "In these disputes the deciding fact is the camera's real field of view, and that is an evidential question before it is a legal one. A private consultation can help you work out what can be established, and in what order. Please get in touch from a phone and a network you trust.",
      label: "Request a consultation on WhatsApp",
    },
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://www.bugsweepingtscm.com/blog/neighbour-cctv-pointing-at-my-house-kochi#webpage",
          url: "https://www.bugsweepingtscm.com/blog/neighbour-cctv-pointing-at-my-house-kochi",
          name: "Neighbour's CCTV Facing Your House: Kerala's Position",
          inLanguage: "en-IN",
          isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" },
          breadcrumb: { "@id": "https://www.bugsweepingtscm.com/blog/neighbour-cctv-pointing-at-my-house-kochi#breadcrumb" },
          primaryImageOfPage: { "@id": "https://www.bugsweepingtscm.com/blog/neighbour-cctv-pointing-at-my-house-kochi#primaryimage" },
          about: {
            "@type": "Place",
            name: "Kochi",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Kochi",
              addressRegion: "Kerala",
              addressCountry: "IN",
            },
          },
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
          "@type": "ImageObject",
          "@id": "https://www.bugsweepingtscm.com/blog/neighbour-cctv-pointing-at-my-house-kochi#primaryimage",
          url: "https://www.bugsweepingtscm.com/images/blogs/neighbour-cctv-pointing-at-my-house-kochi.png",
          width: 1200,
          height: 630,
        },
        {
          "@type": "BlogPosting",
          "@id": "https://www.bugsweepingtscm.com/blog/neighbour-cctv-pointing-at-my-house-kochi#article",
          headline: "A Neighbour's CCTV Facing Your House: What Kerala Decided",
          description:
            "Two Kerala High Court orders, one from a panchayat on Kochi's edge, decide when a neighbour's camera comes down. Privacy alone is not enough.",
          datePublished: "2026-11-26",
          image: { "@id": "https://www.bugsweepingtscm.com/blog/neighbour-cctv-pointing-at-my-house-kochi#primaryimage" },
          mainEntityOfPage: { "@id": "https://www.bugsweepingtscm.com/blog/neighbour-cctv-pointing-at-my-house-kochi#webpage" },
          inLanguage: "en-IN",
          author: { "@id": "https://www.bugsweepingtscm.com/#organization" },
          publisher: { "@id": "https://www.bugsweepingtscm.com/#organization" },
          about: [
            { "@type": "Thing", name: "Closed-circuit television" },
            { "@type": "Thing", name: "Right to privacy" },
          ],
          spatialCoverage: { "@type": "Place", name: "Kochi, Kerala, India" },
          isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" },
        },
        {
          "@type": "Organization",
          "@id": "https://www.bugsweepingtscm.com/#organization",
          name: "BugSweepingTSCM",
          url: "https://www.bugsweepingtscm.com",
          logo: "https://www.bugsweepingtscm.com/images/logo/bug-sweep.png",
          email: "info@advancedetectiveagency.com",
          telephone: "+91-8882732221",
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://www.bugsweepingtscm.com/blog/neighbour-cctv-pointing-at-my-house-kochi#breadcrumb",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.bugsweepingtscm.com" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.bugsweepingtscm.com/blog" },
            { "@type": "ListItem", position: 3, name: "A Neighbour's CCTV Facing Your House" },
          ],
        },
        faqJsonLd(kochiNeighbourCameraFaqs, "https://www.bugsweepingtscm.com/blog/neighbour-cctv-pointing-at-my-house-kochi#faq"),
      ],
    },
    content: `
      <div class="answer-box">
        <p><strong>Short answer:</strong> In Kerala a neighbour's camera does not come down because it makes you uncomfortable. It comes down if you establish what it covers. The High Court asked the State Police Chief for installation guidelines in a 2023 case from a panchayat on Kochi's edge, then in November 2025 refused to move a camera a couple said covered their bedroom, because nothing showed that it did.</p>
      </div>

      <p>This is the most common camera dispute in India and the one least honestly written about. Somebody fixes a camera to their own wall, on their own property, entirely lawfully, and its view takes in your gate, your courtyard or your window. Nothing is concealed. Nobody has trespassed.</p>

      <p>Two orders of the Kerala High Court, two years apart, decide how that argument goes for an address in Kochi. Quoted separately they appear to contradict each other. Read together they say something precise, and it is not what either side expects.</p>

      <h2>The Kochi case that asked Kerala for rules</h2>
      <p>The first order came out of Cheranalloor, a grama panchayat on Kochi's northern edge. The <a href="https://edappallyblockpanchayat.lsgkerala.gov.in/en" rel="noopener noreferrer" target="_blank">Edappally Block Panchayat</a> in Ernakulam district lists it among its panchayats and records Kochi Municipal Corporation as its southern boundary.</p>

      <p>A resident went to the High Court because a neighbour's CCTV camera was, on her case, focused on her compound and her residence. On <a href="https://www.barandbench.com/news/no-right-to-snoop-on-neighbours-by-installing-cctv-cameras-citing-security-reasons-kerala-high-court" rel="noopener noreferrer" target="_blank">Bar and Bench's report of 19 January 2023</a>, Justice V.G. Arun said that in the guise of installing CCTV surveillance cameras for security reasons, individuals should not be permitted to snoop into the affairs of their neighbours. <a href="https://www.scconline.com/blog/post/2023/01/21/kerala-high-court-individuals-should-not-be-permitted-to-snoop-in-neighbour-affairs-through-cctv-legal-research-legal-news-updates/" rel="noopener noreferrer" target="_blank">SCC Online reports the case</a> as <em>Agnes Michale v. Cheranalloor Grama Panchayath</em>, 2023 SCC OnLine Ker 387, decided on 17 January 2023.</p>

      <p>What the court did next is the part worth keeping. It held that the situation called for orders or guidelines on the manner in which CCTV cameras are to be installed, impleaded the State Police Chief on its own motion as the additional fifth respondent, and directed him to frame those guidelines in consultation with the State Government. The Government Pleader was told to hand him a copy of the order and convey the court's concern, and the matter was posted for consideration after a month.</p>

      <p>That is an unusual thing for a court to do about private cameras. We could not locate any published set of guidelines issued in response, so if you are told one exists, ask for its number and its date.</p>

      <h2>What the same court decided in 2025</h2>
      <p>The second order is the one that governs your expectations now.</p>

      <p>A husband and wife said that cameras, fitted with a light, installed by relatives in the adjacent house faced their drawing room, dining area and bedroom. The two households share a private pathway, relations were poor, and the couple said the cameras had gone up out of animosity. They gave a representation to the police, received no response, and filed a writ petition.</p>

      <p>The other side answered with a fact that changed the texture of the case. The fifth respondent was an eighty year old woman living alone who installed the camera for her own safety, and she was the complainant in a pending criminal case against the first petitioner.</p>

      <p>On <a href="https://www.livelaw.in/high-court/kerala-high-court/kerala-high-court-right-to-privacy-right-to-security-cctv-surveillance-dispute-310061" rel="noopener noreferrer" target="_blank">LiveLaw's report of 15 November 2025</a>, Justice N. Nagaresh took the couple's privacy right seriously. Privacy is a fundamental right under <em>K.S. Puttaswamy v. Union of India</em>, curtailed only if a proportionality assessment is satisfied, and the judgment accepted the <em>Agnes Michale</em> principle that unnecessary snooping into a neighbour's personal affairs cannot be justified.</p>

      <p>And then it weighed the other side. The respondents' security is itself part of the right to life under Article 21, and the two rights, as the court put it, are to be balanced delicately when they are in conflict with each other. <a href="https://www.verdictum.in/court-updates/high-courts/kerala-high-court/sivasankaran-sankarankutty-another-v-state-of-kerala-others-2025ker58261-1598195" rel="noopener noreferrer" target="_blank">Verdictum's report</a> records that the court found no evidence the camera was aimed at or captured the petitioners' home, found their fear of surveillance unsupported, and found the elderly respondent's security need substantiated. Unless there is an established case of snooping into the affairs of the petitioners, it held, removal cannot be directed. <em>Sivasankaran @ Sankarankutty v. State of Kerala</em>, WP(C) 8754/2025, was dismissed.</p>

      <h2>Two High Courts, two different starting points</h2>
      <p>This site has already reported the other Indian position, and the gap between them is the practical reason this page exists.</p>

      <p>On 2 November 2026 <a href="https://www.livelaw.in/high-court/allahabad-high-court/allahabad-high-court-private-cctv-cameras-interfere-neighbour-privacy-556879" rel="noopener noreferrer" target="_blank">LiveLaw reported</a> that the Allahabad High Court held that no private CCTV camera can be installed and positioned in such a manner as to interfere with the privacy of a neighbour, and pointed the petitioner to a time bound application to the District Magistrate. Our guide to <a href="/blog/can-my-landlord-put-cameras">whether a landlord or a neighbour can put cameras up</a> sets that out in full.</p>

      <p>A judgment of one High Court does not bind courts in another state. The Allahabad formulation starts from position and asks whether the camera interferes. The Kerala formulation starts from evidence and asks whether snooping has been established. Both are available to a Kerala litigant, but only one is binding in Kochi, and it is the stricter one.</p>

      <h2>What "established snooping" actually means</h2>
      <p>This is where the two orders stop contradicting each other. <em>Agnes Michale</em> supplies the principle. <em>Sivasankaran</em> supplies the price of invoking it. The principle is that security is not a licence to watch your neighbour. The price is that you have to show the watching.</p>

      <p>An allegation about which rooms a camera faces is not proof of what it records. A camera bracketed near your boundary may cover the pathway and nothing else; the same camera turned a few degrees may hold your front door in frame all day. From your own compound, those two installations look identical.</p>

      <p>So the question that decides these cases is narrow and factual: what is inside the frame, established by documenting the camera's position, the sight line from the places you say are exposed, and the obstructions in between.</p>

      <h2>The data protection law will not reach it</h2>
      <p>One correction worth making early, because people spend months on it. The <a href="https://www.meity.gov.in/data-protection-framework" rel="noopener noreferrer" target="_blank">Digital Personal Data Protection Act, 2023</a> does not apply here. Section 3(c)(i) excludes personal data processed by an individual for any personal or domestic purpose, and a resident's camera on their own house, for their own security, is the clearest instance of that exclusion.</p>

      <p>There is no notice to demand, no consent to withhold and no grievance officer to write to. What remains is the privacy jurisprudence under Article 21, which is what both Kerala orders are built on, and the criminal law where a private act has been captured.</p>

      <h2>When it stops being a dispute and becomes an offence</h2>
      <p>Section 77 of the <a href="https://egazette.gov.in/WriteReadData/2023/250883.pdf" rel="noopener noreferrer" target="_blank">Bharatiya Nyaya Sanhita, 2023</a> concerns watching or capturing the image of a woman engaged in a private act in circumstances where she would usually expect privacy. A camera covering a gate, a lane or a shared pathway is not within that provision. A camera with a bathroom, a bedroom or a changing area in its frame is in a different category, and the answer there is a police complaint rather than a conversation.</p>

      <p>Our guide to <a href="/blog/how-to-detect-hidden-cameras">detecting hidden cameras</a> sets out those provisions and their limits, including the gap that catches people out when the person recorded is a man.</p>

      <h2>If a camera faces your home in Kochi</h2>
      <p>Work in this order, which is built so that each step preserves the next.</p>
      <ol>
        <li><strong>Document the sight line, not the camera.</strong> Photograph the camera's position from your own property, then the view from each place you say is exposed. The pair is what shows coverage; a photograph of a camera on a wall shows nothing about where it points.</li>
        <li><strong>Do not touch it, cover it or move it.</strong> Any of those destroys the evidence of where it pointed and turns the dispute into one about your conduct.</li>
        <li><strong>Put the request in writing and keep the date.</strong> The 2025 petitioners had a representation on record with the police, and that part of their case was sound. The coverage evidence was what was missing.</li>
        <li><strong>Check which force your address falls under.</strong> Ernakulam district holds two separate police districts and the boundary is not where people assume. Our <a href="/locations/kochi">Kochi page</a> sets out why Kakkanad is Kochi City while Aluva is not.</li>
        <li><strong>If a bathroom, bedroom or changing area is in frame, stop negotiating.</strong> Complaints can be filed at <a href="https://cybercrime.gov.in" rel="noopener noreferrer" target="_blank">cybercrime.gov.in</a>, which routes to the relevant state police, and in immediate danger call <strong>112</strong>.</li>
      </ol>

      <h2>Kochi's camera count is rising either way</h2>
      <p>Private cameras are only part of what is now pointed at a Kochi street. <a href="https://www.onmanorama.com/news/kerala/2025/07/16/cctv-surveillance-curb-garbage-dumping-live-kochi.html" rel="noopener noreferrer" target="_blank">Onmanorama reported on 16 July 2025</a> that Kochi Corporation was installing 148 cameras, two in each of the city's 74 divisions, aimed at garbage dumping hotspots and monitored around the clock from a control room at the Yathra Auditorium on Park Avenue Road. The same company was to install 150 more for the city police, monitored separately from Thevara, and <a href="https://thesouthfirst.com/kerala/cctv-network-to-curb-crime-and-waste-dumping-in-kochi/" rel="noopener noreferrer" target="_blank">The South First reported on 19 July 2025</a> that the police installation had not begun. Both reports are from the middle of last year.</p>

      <p>None of that changes your neighbour's camera. It does mean the honest answer to who can see you in this city is longer than it used to be, and that who holds a recording is no longer only a question about the police.</p>

      <p>A camera on a wall is the common version of this complaint. The other one arrives from above, and the rules governing it answer a different question entirely: our guide to <a href="/blog/drone-flying-over-my-house-india">a drone over your house</a> sets out why a flight can be perfectly lawful and still be your problem.</p>

      <h2>What a check can and cannot establish</h2>
      <p>A physical examination reports what was found in the areas accessed, by the methods used, under the conditions present, at the time of the visit. It can report what was physically present and what was transmitting in the bands examined while the examiner was there. It cannot establish the absence of a device that records to internal memory and transmits nothing.</p>

      <p>For a camera openly installed on a neighbour's wall, a sweep is the wrong instrument, and saying so saves people money. The work that counts there is documentary: what the camera covers, from where, and with what obstructions, recorded so somebody else can check it.</p>

      <p>The opposite case, a device nobody mentioned, is the one an examination is built for, and our <a href="/blog/bug-sweeping-in-india">national guide to bug sweeping</a> sets out what that involves. Our guide to <a href="/blog/how-to-find-a-listening-device">finding a listening device</a> covers the physical constraints that decide where such a device can be at all.</p>

      <h2>Frequently asked questions</h2>
${faqHtml(kochiNeighbourCameraFaqs)}
    `,
  },
  {
    slug: "cctv-in-a-shared-home-kolkata",
    title: "CCTV Inside a Shared Home: What Kolkata's Courts Settled",
    seoTitle: "CCTV in a Shared Home: What the Kolkata Ruling Says",
    metaDescription:
      "Cameras inside a shared home need every co-occupant's consent, the Calcutta High Court held. The Supreme Court let it stand. What it did and did not do.",
    excerpt:
      "A dispute between two brothers over cameras in a Kolkata family house produced the clearest Indian authority on surveillance inside a home. Five cameras came down, and the remedy was joint control rather than prohibition.",
    date: "2026-11-25",
    readTime: "10 min read",
    category: "City Guides",
    coverImage: "/images/blogs/cctv-in-a-shared-home-kolkata.webp",
    ogImage: "/images/blogs/cctv-in-a-shared-home-kolkata.png",
    coverImageAlt:
      "CCTV in a Shared Home guide cover: a house divided into two halves, cameras removed from the living side and retained on the shared side",
    publishedBy: "BugSweepingTSCM",
    cta: {
      heading: "Cameras in a home you share, and no agreement about them?",
      text: "Establishing what a camera actually covers is usually the first step, and it is an evidential question before it is a legal one. A private consultation can help you work out what can be established and in what order. Please get in touch from a phone and a network you trust.",
      label: "Request a consultation on WhatsApp",
    },
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://www.bugsweepingtscm.com/blog/cctv-in-a-shared-home-kolkata#webpage",
          url: "https://www.bugsweepingtscm.com/blog/cctv-in-a-shared-home-kolkata",
          name: "CCTV in a Shared Home: What the Kolkata Ruling Says",
          inLanguage: "en-IN",
          isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" },
          breadcrumb: { "@id": "https://www.bugsweepingtscm.com/blog/cctv-in-a-shared-home-kolkata#breadcrumb" },
          primaryImageOfPage: { "@id": "https://www.bugsweepingtscm.com/blog/cctv-in-a-shared-home-kolkata#primaryimage" },
          about: {
            "@type": "Place",
            name: "Kolkata",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Kolkata",
              addressRegion: "West Bengal",
              addressCountry: "IN",
            },
          },
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
          "@type": "ImageObject",
          "@id": "https://www.bugsweepingtscm.com/blog/cctv-in-a-shared-home-kolkata#primaryimage",
          url: "https://www.bugsweepingtscm.com/images/blogs/cctv-in-a-shared-home-kolkata.png",
          width: 1200,
          height: 630,
        },
        {
          "@type": "BlogPosting",
          "@id": "https://www.bugsweepingtscm.com/blog/cctv-in-a-shared-home-kolkata#article",
          headline: "CCTV Inside a Shared Home: What Kolkata's Courts Settled",
          description:
            "Cameras inside a shared home need every co-occupant's consent, the Calcutta High Court held. The Supreme Court let it stand. What it did and did not do.",
          datePublished: "2026-11-25",
          image: { "@id": "https://www.bugsweepingtscm.com/blog/cctv-in-a-shared-home-kolkata#primaryimage" },
          mainEntityOfPage: { "@id": "https://www.bugsweepingtscm.com/blog/cctv-in-a-shared-home-kolkata#webpage" },
          inLanguage: "en-IN",
          author: { "@id": "https://www.bugsweepingtscm.com/#organization" },
          publisher: { "@id": "https://www.bugsweepingtscm.com/#organization" },
          about: [
            { "@type": "Thing", name: "Closed-circuit television" },
            { "@type": "Thing", name: "Right to privacy" },
          ],
          spatialCoverage: { "@type": "Place", name: "Kolkata, West Bengal, India" },
          isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" },
        },
        {
          "@type": "Organization",
          "@id": "https://www.bugsweepingtscm.com/#organization",
          name: "BugSweepingTSCM",
          url: "https://www.bugsweepingtscm.com",
          logo: "https://www.bugsweepingtscm.com/images/logo/bug-sweep.png",
          email: "info@advancedetectiveagency.com",
          telephone: "+91-8882732221",
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://www.bugsweepingtscm.com/blog/cctv-in-a-shared-home-kolkata#breadcrumb",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.bugsweepingtscm.com" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.bugsweepingtscm.com/blog" },
            { "@type": "ListItem", position: 3, name: "CCTV in a Shared Home" },
          ],
        },
        faqJsonLd(kolkataCctvFaqs, "https://www.bugsweepingtscm.com/blog/cctv-in-a-shared-home-kolkata#faq"),
      ],
    },
    content: `
      <div class="answer-box">
        <p><strong>Short answer:</strong> A camera inside the residential part of a house you share needs the consent of the people who live there. The Calcutta High Court decided that in a dispute between two brothers over a Kolkata family home, ordered five cameras removed, and the Supreme Court declined to interfere. It is the clearest Indian authority on surveillance inside a shared dwelling.</p>
      </div>

      <p>Most arguments about cameras in India are between strangers: a landlord and a tenant, a neighbour and a neighbour, a hotel and a guest. The hardest version is the one between people who both have a right to be there, and it is also the one Indian law was quietest about until a Kolkata family argued it out.</p>

      <p>Joint ownership, ancestral property, an extended family under one roof: these are ordinary arrangements across India, and when somebody puts a camera up inside, the usual answers do not work. Nobody is trespassing. Nobody is a guest. Both sides own the place.</p>

      <h2>What the Calcutta High Court decided</h2>
      <p>The dispute concerned Mullick Bhaban, a family residence in Kolkata, and it was between two brothers. One had installed cameras in the residential portion of the shared building, to protect valuable property and an antique collection. The other objected.</p>

      <p>On <a href="https://www.livelaw.in/top-stories/supreme-court-affirms-calcutta-hc-view-that-cctv-cant-be-installed-in-home-without-consent-of-all-occupants-291858" rel="noopener noreferrer" target="_blank">LiveLaw's report</a>, a division bench of Justices Sabyasachi Bhattacharya and Uday Kumar held that installing CCTV cameras inside the residential portion of a dwelling house, without the consent of co-occupants or co-trustees, violates their right to privacy. The court directed the removal of five cameras installed within the residential portion.</p>

      <p>The reasoning ran through the Supreme Court's 2017 privacy judgment. LiveLaw records the High Court relying on <em>Justice K.S. Puttaswamy (Retd.) v. Union of India</em> for the proposition that the right to privacy of every individual is guaranteed and protected by Article 21 of the Constitution, and that privacy is an intrinsic part of the right to life and personal liberty. The court also found that operating the cameras without the co-trustee's consent amounted to restrictions on his right to free enjoyment of property.</p>

      <h2>The Supreme Court let it stand</h2>
      <p>The losing side appealed, and on 9 May 2025 a bench of Justice Dipankar Datta and Justice Manmohan dismissed the special leave petition in <em>Indranil Mullick and Others v. Shuvendra Mullick</em>, SLP(C) 12384/2025. In the words <a href="https://theprint.in/judiciary/upholding-calcutta-hc-ruling-on-cctv-surveillance-inside-shared-home-sc-reaffirms-right-to-privacy/2624460/" rel="noopener noreferrer" target="_blank">reported by ThePrint</a>, the court said it was "not inclined to interfere with the impugned judgment and order of the High Court".</p>

      <p>It is worth being precise about what that does and does not achieve, because it is routinely overstated. A dismissal at the special leave stage is not the same as a reasoned Supreme Court judgment deciding the question for the whole country. What it does is leave the High Court's judgment standing. That judgment binds courts in West Bengal and is persuasive elsewhere, and it remains the most directly applicable Indian authority on cameras inside a shared home.</p>

      <h2>What the court did not do</h2>
      <p>It did not ban cameras on the property, and the remedy it chose is more useful than a prohibition would have been.</p>

      <p>ThePrint's report records that the parties were left at liberty to take an alternative measure for the security of valuable articles preserved in the building, and that the parties shall enjoy joint control over the CCTV cameras, their record and management. The same report notes the court found that the operation of particular cameras, numbered 5, 10, 11, 12 and 13, affected the appellant's right to enjoy his property with dignity.</p>

      <p>Read together, the shape is clear. The objection was never to security as such. It was to one co-owner deciding unilaterally who gets watched inside a home that belongs to both, and to holding the footage alone. Security concerns, on the court's approach, could not justify unilateral and intrusive monitoring of private living areas.</p>

      <h2>Why this matters beyond one family</h2>
      <p>The facts are specific. The pattern is not.</p>
      <ol>
        <li><strong>Joint and ancestral property</strong> is ordinary across India, and the person installing a camera is frequently a co-owner rather than an outsider.</li>
        <li><strong>The usual legal routes do not fit.</strong> The criminal provisions people reach for concern voyeurism and the capture of private areas, and a camera in a shared corridor is often neither. Our guide to <a href="/blog/how-to-detect-hidden-cameras">detecting hidden cameras</a> sets out those provisions and their limits.</li>
        <li><strong>The remedy is transferable.</strong> Joint control over the cameras, the recordings and their management is an outcome two co-owners can agree without going near a court, and it is now an outcome a court has endorsed.</li>
      </ol>
      <p>If your situation is a landlord or a neighbour rather than a co-owner, that is a different relationship with different authority, and our guide to <a href="/blog/can-my-landlord-put-cameras">whether a landlord can put cameras up</a> covers it, including what the Allahabad High Court said about where a private camera may point. For an address in Kerala the answer is stricter, and our guide to <a href="/blog/neighbour-cctv-pointing-at-my-house-kochi">a neighbour's CCTV facing your house in Kochi</a> explains why.</p>

      <h2>The other Kolkata reality: 919 closure notices</h2>
      <p>Alongside the law on private homes sits an enforcement picture that anybody staying in the city should know about, because the scale of it is unusual.</p>

      <p><a href="https://www.businesstoday.in/india/story/fire-safety-violations-919-kolkata-hotels-guest-houses-served-temporary-closure-notices-554113-2026-09-09" rel="noopener noreferrer" target="_blank">Business Today reported on 9 September 2026</a> that after a fire at Shikha Inn, a guest house on Mirza Ghalib Street in central Kolkata, on 19 August killed nine people including seven Bangladeshi nationals, joint teams from the state fire services department, the Kolkata Municipal Corporation and Kolkata Police inspected 960 establishments and served temporary closure notices on 919 of them for non-compliance with mandatory fire safety norms. Only 41 were compliant. Those closed must upgrade their arrangements and obtain a Renewal of Fire Safety Certificate before reapplying for licences.</p>

      <p>That is a different subject from privacy, and it is included for a reason this site keeps returning to. Compliance recorded on paper and compliance that holds on the day are not the same thing, and the only way anybody found out here was an inspection.</p>

      <h2>If there is a camera in your home you did not agree to</h2>
      <p>Work in this order, which is built so each step preserves the next.</p>
      <ol>
        <li><strong>Establish what it actually covers,</strong> photographing its position and angle from where you stand rather than handling it. What falls inside the frame is the fact everything turns on.</li>
        <li><strong>Do not remove it.</strong> Taking it down destroys the evidence of where it pointed and converts the dispute into one about your conduct.</li>
        <li><strong>Raise it in writing</strong> with the other occupants, and propose joint control over the cameras and the recordings. That is the remedy a court has already endorsed, which makes it a reasonable opening position rather than a demand.</li>
        <li><strong>If it covers a bathroom, bedroom or changing area, stop treating it as a family dispute.</strong> That is a criminal matter. Complaints can be filed at <a href="https://cybercrime.gov.in" rel="noopener noreferrer" target="_blank">cybercrime.gov.in</a>, which routes to the relevant state police, and in immediate danger call <strong>112</strong>.</li>
        <li><strong>Check which force covers your address.</strong> In Greater Kolkata this is not obvious, and our <a href="/locations/kolkata">Kolkata page</a> sets out why Sector V and New Town are not Kolkata Police.</li>
      </ol>

      <p>Where the camera belongs to the building rather than to a relative, the questions change shape. Our guide to <a href="/blog/cctv-rules-for-housing-societies">CCTV rules for housing societies</a> covers what a managing committee may and may not do with footage, and what a resident can actually ask for.</p>

      <h2>What a check can and cannot establish</h2>
      <p>A physical examination reports what was found in the areas accessed, by the methods used, under the conditions present, at the time of the visit. It can report what was physically found and what was transmitting in the bands examined while the examiner was present. It cannot establish that a device recording to internal memory is absent, because such a device emits nothing at all.</p>

      <p>For a camera that is openly installed and that everybody knows about, an examination is the wrong instrument, and saying so saves people money. The question there is legal and evidential: what does it cover, who controls the footage, and what was agreed.</p>

      <p>Where an examination earns its place is the case this page has not been about, which is a device nobody mentioned. Our <a href="/blog/bug-sweeping-in-india">national guide to bug sweeping</a> sets out what that covers, and our guide to <a href="/blog/how-to-find-a-listening-device">finding a listening device</a> explains the physical constraints that decide where a concealed device can be at all.</p>

      <h2>Frequently asked questions</h2>
${faqHtml(kolkataCctvFaqs)}
    `,
  },
  {
    slug: "hidden-cameras-in-hyderabad",
    title: "Hidden Cameras in Hyderabad: The City Made Checking a Business Duty",
    seoTitle: "Hidden Cameras in Hyderabad: What Businesses Must Do",
    metaDescription:
      "Hyderabad requires hotels, malls and hostels to own camera detectors and sweep their own premises. What the rules say, and what police found when they checked.",
    excerpt:
      "Most Indian cities leave hidden cameras to the police and the victim. Hyderabad has pushed the duty onto the premises: own a detector, sweep regularly, appoint a named officer, and declare to police every six months that the place is clean.",
    date: "2026-11-24",
    readTime: "10 min read",
    category: "City Guides",
    coverImage: "/images/blogs/hidden-cameras-in-hyderabad.webp",
    ogImage: "/images/blogs/hidden-cameras-in-hyderabad.png",
    coverImageAlt:
      "Hidden Cameras in Hyderabad guide cover: a building outline with a detector sweep arc inside it and a police inspection badge alongside",
    publishedBy: "BugSweepingTSCM",
    cta: {
      heading: "Responsible for premises that now have to be checked?",
      text: "A duty to sweep your own building is only as good as the sweep. A private consultation can help you work out what an examination of your premises should actually cover, and what a report should say. Please get in touch from a phone and a network you trust.",
      label: "Request a consultation on WhatsApp",
    },
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://www.bugsweepingtscm.com/blog/hidden-cameras-in-hyderabad#webpage",
          url: "https://www.bugsweepingtscm.com/blog/hidden-cameras-in-hyderabad",
          name: "Hidden Cameras in Hyderabad: What Businesses Must Do",
          inLanguage: "en-IN",
          isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" },
          breadcrumb: { "@id": "https://www.bugsweepingtscm.com/blog/hidden-cameras-in-hyderabad#breadcrumb" },
          primaryImageOfPage: { "@id": "https://www.bugsweepingtscm.com/blog/hidden-cameras-in-hyderabad#primaryimage" },
          about: {
            "@type": "Place",
            name: "Hyderabad",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Hyderabad",
              addressRegion: "Telangana",
              addressCountry: "IN",
            },
          },
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
          "@type": "ImageObject",
          "@id": "https://www.bugsweepingtscm.com/blog/hidden-cameras-in-hyderabad#primaryimage",
          url: "https://www.bugsweepingtscm.com/images/blogs/hidden-cameras-in-hyderabad.png",
          width: 1200,
          height: 630,
        },
        {
          "@type": "BlogPosting",
          "@id": "https://www.bugsweepingtscm.com/blog/hidden-cameras-in-hyderabad#article",
          headline: "Hidden Cameras in Hyderabad: The City Made Checking a Business Duty",
          description:
            "Hyderabad requires hotels, malls and hostels to own camera detectors and sweep their own premises. What the rules say, and what police found when they checked.",
          datePublished: "2026-11-24",
          image: { "@id": "https://www.bugsweepingtscm.com/blog/hidden-cameras-in-hyderabad#primaryimage" },
          mainEntityOfPage: { "@id": "https://www.bugsweepingtscm.com/blog/hidden-cameras-in-hyderabad#webpage" },
          inLanguage: "en-IN",
          author: { "@id": "https://www.bugsweepingtscm.com/#organization" },
          publisher: { "@id": "https://www.bugsweepingtscm.com/#organization" },
          about: [
            { "@type": "Thing", name: "Hidden camera detection" },
            { "@type": "Thing", name: "Technical surveillance countermeasures" },
          ],
          spatialCoverage: { "@type": "Place", name: "Hyderabad, Telangana, India" },
          isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" },
        },
        {
          "@type": "Organization",
          "@id": "https://www.bugsweepingtscm.com/#organization",
          name: "BugSweepingTSCM",
          url: "https://www.bugsweepingtscm.com",
          logo: "https://www.bugsweepingtscm.com/images/logo/bug-sweep.png",
          email: "info@advancedetectiveagency.com",
          telephone: "+91-8882732221",
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://www.bugsweepingtscm.com/blog/hidden-cameras-in-hyderabad#breadcrumb",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.bugsweepingtscm.com" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.bugsweepingtscm.com/blog" },
            { "@type": "ListItem", position: 3, name: "Hidden Cameras in Hyderabad" },
          ],
        },
        faqJsonLd(hyderabadCameraFaqs, "https://www.bugsweepingtscm.com/blog/hidden-cameras-in-hyderabad#faq"),
      ],
    },
    content: `
      <div class="answer-box">
        <p><strong>Short answer:</strong> Hyderabad has done something no other large Indian city has. Rather than leaving hidden cameras to the police and the person who finds one, it has put the duty on the premises: hotels, malls and hostels are to own camera detectors, sweep themselves regularly, appoint a named safety officer, and, under a circular predating that, declare to police every six months that the place is clean.</p>
      </div>

      <p>Most writing about hidden cameras in an Indian city is a list of incidents. This page is not that, because Hyderabad offers something more useful: a set of obligations that have actually been imposed, and a police audit that measured whether they are being met.</p>

      <p>The detection methods themselves are national rather than local, and our guide to <a href="/blog/how-to-detect-hidden-cameras">detecting hidden cameras</a> covers what works and what does not, along with the criminal provisions that apply. What follows is the part that is specific to this city.</p>

      <h2>The duty that makes Hyderabad different</h2>
      <p>On 10 April 2026 the city police launched She Netra, and the launch came with requirements attached to businesses rather than only to officers.</p>

      <p><a href="https://www.deccanchronicle.com/southern-states/telangana/she-netra-teams-launched-for-womens-safety-in-hyderabad-1949678" rel="noopener noreferrer" target="_blank">Deccan Chronicle reported</a> that establishments must "procure their own camera detectors and conduct regular internal sweeps", and that each organisation must appoint a "Customer Safety In-charge" to serve as a nodal officer with the She Teams, whom the police will train. Institutions that violate the rules, and the employees responsible, are to be blacklisted. <a href="https://www.siasat.com/hyderabad-police-launch-she-netra-to-crack-down-on-hidden-cameras-3450356/" rel="noopener noreferrer" target="_blank">Siasat reported the same requirement</a> in its own words, that the respective management would be responsible for procuring the camera detectors, and that they would be required to conduct routine inspections.</p>

      <p>Read that as a shift in who carries the burden. In most of India, a hidden camera is found by the person it was pointed at. Here a hotel, a mall or a hostel is expected to look for one before anybody is harmed, with a named person answerable for it.</p>

      <h2>Seven teams, and unannounced inspections</h2>
      <p>The enforcement side launched at the same time. Deccan Chronicle reported seven She Netra teams, one for each of the city's seven zones, launched by Commissioner VC Sajjanar at the Old Commissionerate Office in Basheerbagh.</p>

      <p>Their remit is to detect and neutralise hidden cameras in public and private spaces such as hotels, malls and hostels, and to conduct frequent surprise inspections across the city. One team member's description, as quoted, was that the teams would conduct frequent and surprise raids.</p>

      <p>For a guest or a resident this changes what you can reasonably assume. Premises of this kind in Hyderabad are now subject to unannounced checks by people looking specifically for cameras, which is not true in most Indian cities.</p>

      <h2>The declaration most people have never heard of</h2>
      <p>There is an older instrument underneath all this, and it is the strictest part.</p>

      <p>In September 2025 the Telangana High Court took up a petition about hidden cameras in public places. <a href="https://www.etvbharat.com/en/!state/telangana-high-court-seeks-government-response-on-hidden-cameras-in-public-places-enn25090902132" rel="noopener noreferrer" target="_blank">ETV Bharat reported</a> that the bench of Justice NV Shravan Kumar described hidden cameras in shops, hotels, women's hostels and other establishments as a grave violation of privacy, hearing a petition by G Varalakshmi, president of Heaven's Home Society.</p>

      <p>The petition concerned a circular from the Director General of Police dated 29 March. On ETV Bharat's account, that circular required warning notices to be displayed prominently in establishments, and required shop and mall owners to submit declarations to local police inspectors every six months confirming that their premises were free of such devices. The allegation before the court was that the Women's Safety Department had not implemented it, and the court directed the state and the department to respond within two weeks, explaining what steps had been taken and what action was proposed against violators.</p>

      <p>A six-monthly declaration that a premises is free of hidden cameras is, in substance, a recurring inspection duty. It is also the kind of obligation that is easy to sign and hard to discharge, which brings us to what happened when the police went and looked.</p>

      <h2>What the audit actually found</h2>
      <p>This is the honest counterweight to everything above, and it comes from the police rather than from any critic.</p>

      <p><a href="https://www.deccanchronicle.com/southern-states/telangana/police-flag-hostel-safety-lapses-in-hyderabad-1971855" rel="noopener noreferrer" target="_blank">Deccan Chronicle reported on 18 July 2026</a> that ten special teams with 35 personnel inspected 446 hostels over nine weeks, under Suraksha Nivas 1.0, part of Project Safe Stay conducted with the Hyderabad City Security Council.</p>

      <p>The findings are worth setting out plainly.</p>
      <ol>
        <li><strong>97.5 per cent of the hostels had CCTV.</strong> On paper, almost universal compliance.</li>
        <li><strong>More than 30 per cent of those cameras were non-functional.</strong> Installed, counted, and not working.</li>
        <li><strong>Only 43 per cent had proper compound walls,</strong> and 38.9 per cent had fire safety equipment.</li>
        <li><strong>None had fire exit plans.</strong> Not a minority: none.</li>
        <li><strong>Only 44 per cent displayed a GHMC licence,</strong> and 62 per cent scored below 40 on safety, which the police described as weak.</li>
      </ol>
      <p>The lesson generalises well beyond Hyderabad. A mandate produces installations, and installations are what gets counted. Whether the thing works on the day it is needed is a separate question that only an inspection answers, and it is the question this site keeps returning to.</p>

      <p>The same report records that police want every women's hostel and PG operator to register with local police stations, and that the municipal corporation requires a trade licence along with entry registers and background checks on staff and service providers.</p>

      <h2>Which force covers you, and why it matters</h2>
      <p>Hyderabad has a complication that catches people at exactly the wrong moment, and it is worth settling before you need it.</p>

      <p>Greater Hyderabad is covered by more than one police commissionerate, and the boundary runs through the places people work: HITEC City, Madhapur, Raidurg, Gachibowli and the Financial District sit under Cyberabad, while Banjara Hills, Secunderabad, Khairatabad and the Old City are Hyderabad City Police. A reorganisation notified at the end of December 2025 also renamed the eastern commissionerate, so older guidance can send you to the wrong force. Our <a href="/locations/hyderabad">Hyderabad page</a> sets out the boundaries and the city's cyber crime police station arrangements in full.</p>

      <p>The obligations described above were announced by Hyderabad City Police. Do not assume they read identically across every commissionerate in the metropolitan area; confirm the position for your address.</p>

      <h2>If you find a camera</h2>
      <p>The local rules change who should have been looking. They do not change what you should do.</p>
      <ol>
        <li><strong>Photograph it in place</strong> from where you stand, without handling or dismantling it, and note exactly what it covers.</li>
        <li><strong>Do not remove it,</strong> which destroys the evidence of what it was and where it pointed.</li>
        <li><strong>Report it to the police.</strong> Cybercrime complaints, including the publication of private images, can be filed at <a href="https://cybercrime.gov.in" rel="noopener noreferrer" target="_blank">cybercrime.gov.in</a>, which routes to the relevant state police. In immediate danger, call <strong>112</strong>.</li>
        <li><strong>Expect to attend a station.</strong> A camera in a private space is a cognizable offence, and an online petition is not an FIR.</li>
      </ol>
      <p>Our national guide to <a href="/blog/hidden-cameras-in-hotel-rooms-and-pgs">hidden cameras in hotels and paying guest accommodation</a> covers what the Indian record shows about who actually places them, and where they are actually found.</p>

      <h2>What a check can and cannot establish</h2>
      <p>A physical examination reports what was found in the areas accessed, by the methods used, under the conditions present, at the time of the visit. It can report what was physically found and what was transmitting in the bands examined while the examiner was present. It cannot establish that a device recording to internal memory is absent, because such a device emits nothing at all.</p>

      <p>That limitation matters more here than in most places, because Hyderabad has created a duty to self-certify. A declaration that a premises is free of hidden cameras is a statement about a search, and it is only worth what the search was worth. A handheld detector passed over a room by an untrained person, once, establishes very little, and our <a href="/blog/bug-sweeping-in-india">national guide to bug sweeping</a> sets out what a serious examination covers and why no single instrument finds everything.</p>

      <p>If you are the person who has to sign that declaration, the useful question is not which detector to buy. It is what your sweep actually covered, how it was recorded, and whether the record would stand up if somebody later found something you missed.</p>

      <h2>Frequently asked questions</h2>
${faqHtml(hyderabadCameraFaqs)}
    `,
  },
  {
    slug: "pg-rules-in-bengaluru",
    title: "PG Rules in Bengaluru: Where Cameras Are Banned, and Where They Are Required",
    seoTitle: "PG Rules in Bengaluru: What the High Court Ordered",
    metaDescription:
      "Cameras are not simply banned in Bengaluru PGs. The High Court prohibited them in bedrooms and bathrooms and required them in common areas. Both halves matter.",
    excerpt:
      "The Karnataka High Court's order on Bengaluru paying guest accommodation has two sides, and most coverage reports one. Cameras are prohibited in bedrooms, bathrooms and toilets, and required in the common areas of PGs housing women.",
    date: "2026-11-24",
    readTime: "10 min read",
    category: "City Guides",
    coverImage: "/images/blogs/pg-rules-in-bengaluru.webp",
    ogImage: "/images/blogs/pg-rules-in-bengaluru.png",
    coverImageAlt:
      "PG Rules in Bengaluru guide cover: a floor plan with a camera permitted in the corridor and barred from the bedroom and bathroom",
    publishedBy: "BugSweepingTSCM",
    cta: {
      heading: "Found something in a room you are paying to live in?",
      text: "A camera where the court has said there should be none is not a house-rules dispute. If you need to establish what is in a room before you act, a private consultation can help you decide whether a physical examination is warranted. Please get in touch from a phone and a network you trust.",
      label: "Request a consultation on WhatsApp",
    },
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://www.bugsweepingtscm.com/blog/pg-rules-in-bengaluru#webpage",
          url: "https://www.bugsweepingtscm.com/blog/pg-rules-in-bengaluru",
          name: "PG Rules in Bengaluru: What the High Court Ordered",
          inLanguage: "en-IN",
          isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" },
          breadcrumb: { "@id": "https://www.bugsweepingtscm.com/blog/pg-rules-in-bengaluru#breadcrumb" },
          primaryImageOfPage: { "@id": "https://www.bugsweepingtscm.com/blog/pg-rules-in-bengaluru#primaryimage" },
          about: {
            "@type": "Place",
            name: "Bengaluru",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Bengaluru",
              addressRegion: "Karnataka",
              addressCountry: "IN",
            },
          },
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
          "@type": "ImageObject",
          "@id": "https://www.bugsweepingtscm.com/blog/pg-rules-in-bengaluru#primaryimage",
          url: "https://www.bugsweepingtscm.com/images/blogs/pg-rules-in-bengaluru.png",
          width: 1200,
          height: 630,
        },
        {
          "@type": "BlogPosting",
          "@id": "https://www.bugsweepingtscm.com/blog/pg-rules-in-bengaluru#article",
          headline: "PG Rules in Bengaluru: Where Cameras Are Banned, and Where They Are Required",
          description:
            "Cameras are not simply banned in Bengaluru PGs. The High Court prohibited them in bedrooms and bathrooms and required them in common areas. Both halves matter.",
          datePublished: "2026-11-24",
          image: { "@id": "https://www.bugsweepingtscm.com/blog/pg-rules-in-bengaluru#primaryimage" },
          mainEntityOfPage: { "@id": "https://www.bugsweepingtscm.com/blog/pg-rules-in-bengaluru#webpage" },
          inLanguage: "en-IN",
          author: { "@id": "https://www.bugsweepingtscm.com/#organization" },
          publisher: { "@id": "https://www.bugsweepingtscm.com/#organization" },
          about: [
            { "@type": "Thing", name: "Paying guest accommodation" },
            { "@type": "Thing", name: "Closed-circuit television" },
          ],
          spatialCoverage: {
            "@type": "Place",
            name: "Bengaluru, Karnataka, India",
          },
          isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" },
        },
        {
          "@type": "Organization",
          "@id": "https://www.bugsweepingtscm.com/#organization",
          name: "BugSweepingTSCM",
          url: "https://www.bugsweepingtscm.com",
          logo: "https://www.bugsweepingtscm.com/images/logo/bug-sweep.png",
          email: "info@advancedetectiveagency.com",
          telephone: "+91-8882732221",
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://www.bugsweepingtscm.com/blog/pg-rules-in-bengaluru#breadcrumb",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.bugsweepingtscm.com" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.bugsweepingtscm.com/blog" },
            { "@type": "ListItem", position: 3, name: "PG Rules in Bengaluru" },
          ],
        },
        faqJsonLd(bengaluruPgFaqs, "https://www.bugsweepingtscm.com/blog/pg-rules-in-bengaluru#faq"),
      ],
    },
    content: `
      <div class="answer-box">
        <p><strong>Short answer:</strong> Cameras are not simply banned in Bengaluru paying guest accommodation. The Karnataka High Court's order of 10 September 2026 prohibits CCTV in bedrooms, bathrooms and toilets, and in the same breath requires cameras in the common areas of PGs housing women or vulnerable persons. Both halves are the rule, and most coverage carries only one.</p>
      </div>

      <p>Bengaluru runs on rented rooms more than any other Indian city, and in September 2026 the Karnataka High Court turned its attention to them. The resulting order has been reported mostly as a crackdown on unlicensed buildings, which it is. It also did something more specific and more useful to anybody actually living in one: it said where a camera may be, and where it may not.</p>

      <p>That distinction is the subject of this page. It is written for a resident rather than an operator, and it assumes the camera you are thinking about is one you can see. If your concern is a device nobody told you about, our national guide to <a href="/blog/hidden-cameras-in-hotel-rooms-and-pgs">hidden cameras in hotels and paying guest accommodation</a> deals with that case, including what the Indian record shows about who actually places them.</p>

      <h2>What the court ordered about cameras</h2>
      <p>The order was made on 10 September 2026 by Justice Suraj Govindaraj, in <em>M/s Princess Ladies PG v. The Chief Commissioner</em> and a connected batch of petitions, WP 14750/2025, brought by PG operators.</p>

      <p>On <a href="https://www.livelaw.in/high-court/karnataka-high-court/karnataka-high-court-flags-massive-illegal-pg-operations-bengaluru-550527" rel="noopener noreferrer" target="_blank">LiveLaw's report of 17 September 2026</a>, the position on cameras is stated directly: CCTV installation is prohibited in bedrooms, bathrooms and toilets. The same report records the principle the court worked from, which is that safety regulations cannot justify arbitrary intrusion into privacy, and a further direction that operators may not photograph or circulate occupants' private activities unless legally authorised.</p>

      <p>That last one is worth pausing on, because it reaches past cameras. A PG operator holding footage, or images taken for any reason, does not become free to pass them around.</p>

      <h2>The half that most summaries leave out</h2>
      <p>Read only the headlines and you would conclude that cameras in PGs are now prohibited. The order says something more careful than that, and the missing half changes what a resident should expect to see.</p>

      <p>LiveLaw's report also records that PGs housing women or vulnerable persons must have CCTV in common areas. Not may. Must.</p>

      <p>So a camera covering a corridor, a stairwell, an entrance or a common room in a women's PG is not evidence that somebody is doing something wrong. It may be there because a court said it should be. The useful question is never whether a camera exists on the premises. It is what falls inside its frame, which is the same test our guide to <a href="/blog/can-my-landlord-put-cameras">whether a landlord can put cameras up</a> works through for tenancies generally, using a separate ruling from the Allahabad High Court.</p>

      <p>The practical consequence for a Bengaluru resident is a short mental rule. Cameras in shared spaces: expected, and in some PGs required. Cameras in bedrooms, bathrooms and toilets: prohibited, and a matter for the police rather than for the manager.</p>

      <h2>Half of the ones inspected were not licensed</h2>
      <p>The camera directions sit inside a much larger finding, and the scale of it came from the authority rather than from anybody campaigning.</p>

      <p><a href="https://www.thenewsminute.com/karnataka/half-of-bengaluru-east-pgs-inspected-are-illegal-gba-tells-karnataka-hc" rel="noopener noreferrer" target="_blank">The News Minute reported on 18 September 2026</a> that the Greater Bengaluru Authority, through advocate B S Karthikeyan, told the court that of around 5,000 PG accommodations inspected in the East Zone, nearly 2,500 were operating without proper licences, sanctioned building plans or fire safety clearances. LiveLaw's report adds that notices had been issued to 68 PG accommodations in Bengaluru North.</p>

      <p><a href="https://www.barandbench.com/news/litigation/overcrowding-to-fire-safety-karnataka-hc-issues-safety-guidelines-for-bengaluru-pgs" rel="noopener noreferrer" target="_blank">Bar and Bench</a>, reporting the same order on 18 September 2026, describes it as guidelines for the regulation, inspection and safety of private paying guest accommodation in the city, directing authorities to identify unlicensed PGs, conduct risk-based inspections, and ensure compliance with fire, building, electrical and occupant safety norms.</p>

      <p>One direction deserves singling out because it changes the incentives. The News Minute records that officers may be held personally liable if they fail to act on reported violations and an incident follows. A complaint that goes nowhere is no longer costless for the official who shelved it.</p>

      <h2>Where this stood in late November</h2>
      <p>This is a live proceeding rather than a finished rule, so the honest thing is to date the position rather than state it flatly.</p>

      <p>At a hearing on 27 October 2026, <a href="https://www.livelaw.in/high-court/karnataka-high-court/karnataka-high-court-warns-pg-owners-sealing-directs-affidavit-compliance-timeline-556239" rel="noopener noreferrer" target="_blank">reported by LiveLaw the following day</a>, the court warned non-compliant PGs that they could face sealing. Justice Govindaraj explained why the court had so far held back, in terms worth repeating: sealing would hurt the students and employees who depend on these buildings. The Greater Bengaluru Authority told the court that nearly half of the city's PG accommodation was non-compliant, illegal or unauthorised. Operators were given a week to file an affidavit setting out a realistic compliance timeline, with the matter listed for 4 November 2026, and the court indicated it would ask authorities to hold off if that timeline was reasonable.</p>

      <p>The court has been consistent on one point throughout: occupants must be given adequate time to relocate, and earlier reporting put that at three weeks. No reporting of what happened after 4 November could be found when this page was written on 24 November 2026, so treat the above as the last confirmed position and check the current status before relying on it.</p>

      <h2>What this means if you live in one</h2>
      <p>Four things follow, and none of them require any equipment.</p>
      <ol>
        <li><strong>Expect cameras in shared spaces, and none at all in private ones.</strong> That is the shape of the rule. A camera in a corridor is ordinary; a camera with a bedroom, bathroom or toilet in its view is not.</li>
        <li><strong>Ask whether the building is licensed,</strong> and whether it has a sanctioned building plan and a fire safety clearance. With roughly half of inspected premises found wanting and sealing now explicitly available, this has stopped being a pedantic question. Ask to see the documents and keep a copy.</li>
        <li><strong>Know what happens if a notice arrives.</strong> The court has repeatedly said occupants need adequate time to relocate. If your building is served, establishing how long you have is the first thing to do, not the last.</li>
        <li><strong>Put concerns in writing.</strong> A dated message to the operator creates a record, and given the personal liability direction above, a written complaint to the authority is harder to ignore than it was.</li>
      </ol>

      <h2>If there is a camera where there should not be one</h2>
      <p>Stop treating it as a dispute with the management, because it is not one.</p>
      <ol>
        <li><strong>Photograph it in place</strong> from where you stand, without handling or dismantling it, and note exactly what it covers.</li>
        <li><strong>Do not remove it.</strong> That destroys the evidence of what it was and where it pointed.</li>
        <li><strong>Report it to the police.</strong> Cybercrime complaints, including the publication of private images, can be filed at <a href="https://cybercrime.gov.in" rel="noopener noreferrer" target="_blank">cybercrime.gov.in</a>, which routes to the relevant state police. In immediate danger, call <strong>112</strong>.</li>
        <li><strong>Work out which station covers the address.</strong> Bengaluru has its own quirks here, including that Whitefield and Electronic City are zones of the city police rather than rural jurisdictions, which our <a href="/locations/bengaluru">Bengaluru page</a> sets out along with how CEN stations handle cyber matters.</li>
      </ol>
      <p>The criminal provisions that apply to a camera in a private space are national rather than local, and our guide to <a href="/blog/how-to-detect-hidden-cameras">detecting hidden cameras</a> sets them out in full with their separate penalty ranges.</p>

      <h2>What a check can and cannot establish</h2>
      <p>A physical examination reports what was found in the areas accessed, by the methods used, under the conditions present, at the time of the visit. It can report what was physically found and what was transmitting in the bands examined while the examiner was present. It cannot establish that a device recording to internal memory is absent, because such a device emits nothing at all.</p>

      <p>For a camera you can already see, an examination is usually the wrong instrument and it is worth saying so. You do not need anybody to find it. What you need is an accurate account of what it covers and a route to act, which is an evidential question rather than a technical one.</p>

      <p>Where an examination earns its place is the other case: a room you are paying to live in, and a reason to think there is something you were not shown. Our <a href="/blog/bug-sweeping-in-india">national guide to bug sweeping</a> sets out what that covers.</p>

      <h2>Frequently asked questions</h2>
${faqHtml(bengaluruPgFaqs)}
    `,
  },
  {
    slug: "who-has-access-to-my-google-account",
    title: "Who Has Access to Your Google Account? How to Check Properly",
    seoTitle: "Who Has Access to My Google Account? How to Check",
    metaDescription: "Google lists sessions, not just devices, and signing one out does not revoke app access. The route Google publishes, and the four things to check in order.",
    excerpt: "The device list is the place to look, and it is easy to misread. Google lists sessions rather than devices, multiple entries for one phone are normal, and signing a device out leaves third-party app access untouched.",
    date: "2026-11-08",
    readTime: "10 min read",
    category: "TSCM Guides",
    coverImage: "/images/blogs/who-has-access-to-my-google-account.webp",
    ogImage: "/images/blogs/who-has-access-to-my-google-account.png",
    coverImageAlt: "Who Has Access to Your Google Account guide cover: a list of session entries beside an account key, with one entry marked in red",
    publishedBy: "BugSweepingTSCM",
    cta: {
      heading: "Think the access started with the device rather than the account?",
      text: "If somebody has had physical access to your phone or your home, the account is one symptom rather than the whole problem. A private consultation can help you work out what can realistically be established, and in what order.",
      label: "Request a consultation on WhatsApp",
    },
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://www.bugsweepingtscm.com/blog/who-has-access-to-my-google-account#webpage",
          url: "https://www.bugsweepingtscm.com/blog/who-has-access-to-my-google-account",
          name: "Who Has Access to My Google Account? How to Check",
          inLanguage: "en-IN",
          isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" },
          breadcrumb: { "@id": "https://www.bugsweepingtscm.com/blog/who-has-access-to-my-google-account#breadcrumb" },
          primaryImageOfPage: { "@id": "https://www.bugsweepingtscm.com/blog/who-has-access-to-my-google-account#primaryimage" },
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
          "@type": "ImageObject",
          "@id": "https://www.bugsweepingtscm.com/blog/who-has-access-to-my-google-account#primaryimage",
          url: "https://www.bugsweepingtscm.com/images/blogs/who-has-access-to-my-google-account.png",
          width: 1200,
          height: 630,
        },
        {
          "@type": "BlogPosting",
          "@id": "https://www.bugsweepingtscm.com/blog/who-has-access-to-my-google-account#article",
          headline: "Who Has Access to Your Google Account? How to Check Properly",
          description: "Google lists sessions, not just devices, and signing one out does not revoke app access. The route Google publishes, and the four things to check in order.",
          datePublished: "2026-11-08",
          image: { "@id": "https://www.bugsweepingtscm.com/blog/who-has-access-to-my-google-account#primaryimage" },
          mainEntityOfPage: { "@id": "https://www.bugsweepingtscm.com/blog/who-has-access-to-my-google-account#webpage" },
          inLanguage: "en-IN",
          author: { "@id": "https://www.bugsweepingtscm.com/#organization" },
          publisher: { "@id": "https://www.bugsweepingtscm.com/#organization" },
          isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" },
        },
        {
          "@type": "Organization",
          "@id": "https://www.bugsweepingtscm.com/#organization",
          name: "BugSweepingTSCM",
          url: "https://www.bugsweepingtscm.com",
          logo: "https://www.bugsweepingtscm.com/images/logo/bug-sweep.png",
          email: "info@advancedetectiveagency.com",
          telephone: "+91-8882732221",
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://www.bugsweepingtscm.com/blog/who-has-access-to-my-google-account#breadcrumb",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.bugsweepingtscm.com" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.bugsweepingtscm.com/blog" },
            { "@type": "ListItem", position: 3, name: "Who Has Access to My Google Account?" },
          ],
        },
        faqJsonLd(googleAccessFaqs, "https://www.bugsweepingtscm.com/blog/who-has-access-to-my-google-account#faq"),
      ],
    },
    content: `
      <div class="answer-box">
        <p><strong>Short answer:</strong> Open your Google Account, go to Security and sign-in, and under Your devices choose Manage all devices. Google shows devices signed in now or in the last few weeks. Two things catch people out: the list shows sessions rather than devices, so repeats are normal, and signing a device out does not revoke third-party app access.</p>
      </div>

      <p>An email account is the most consequential thing most people own online, because it is the reset route for everything else. Somebody with access to it does not need access to anything else; they can obtain it. That is why this check is worth doing carefully rather than quickly.</p>

      <p>It is also worth doing calmly. The overwhelming majority of unfamiliar entries in these lists turn out to be the reader's own devices, an old phone, a browser on a work computer, a tablet somebody in the house uses. The point of the exercise is to account for every entry positively, not to find something frightening.</p>

      <h2>The route Google publishes</h2>
      <p>Google documents this rather than leaving it to be discovered, and the steps are short. In its guidance on <a href="https://support.google.com/accounts/answer/3067630?hl=en" rel="noopener noreferrer" target="_blank">devices with account access</a>, the route is: open your Google Account, go to "Security & sign-in", and in the "Your devices" panel select "Manage all devices".</p>

      <p>What you get is described precisely: "You'll see devices where you're currently signed in to your Google Account or have been in the last few weeks." That window matters. An absence from this list is not proof that nothing happened, only that nothing has happened recently.</p>

      <h2>Why one phone appears several times</h2>
      <p>This is the detail that generates most of the false alarms, and Google explains it plainly without most people reading that far.</p>

      <p>The list shows sessions, not only devices. A session, in Google's words, is "a period of time during which you're signed in to our Google Account", and several sessions on one device are entirely normal. A phone that has signed in through different apps, or over time, can therefore occupy several rows.</p>

      <p>It has a practical consequence worth holding on to: if you decide to remove a device and it shows multiple sessions, signing out of one achieves very little. Google's own instruction is that where a device name shows several sessions, you sign out of all of them.</p>

      <h2>The gap a sign-out leaves behind</h2>
      <p>Removing a session ends that sign-in. It does not touch a second kind of access that sits alongside it and is far easier to forget.</p>

      <p>Third-party applications and services that you have connected to your account hold permissions granted separately from any sign-in. An app you authorised years ago and have not opened since may still be able to reach your mail, your files or your calendar, and no amount of signing devices out will change that. Those connections live in the same security settings and have to be reviewed on their own terms.</p>

      <p>This is the single most common blind spot in account hygiene, and it is the reason a reader who has already "checked their devices" may still have an open door.</p>

      <h2>What to check, in order</h2>
      <p>Do this from a device you believe is clean, not from the one you are suspicious about.</p>
      <ol>
        <li><strong>The device and session list,</strong> accounting for every entry rather than looking for an obvious intruder.</li>
        <li><strong>Recent security activity,</strong> which records events such as sign-ins and password changes and is often more informative than the device list on its own.</li>
        <li><strong>Recovery phone number and email address.</strong> This is the step people skip and it matters most. Somebody who has changed the recovery details can take the account back after you have removed them, so a password change alone does not settle it.</li>
        <li><strong>Anything forwarding your mail onward,</strong> including filters that quietly send copies elsewhere. Forwarding survives a password change and is invisible in ordinary use.</li>
        <li><strong>Third-party app access,</strong> as described above.</li>
        <li><strong>Then change the password and review two-step verification.</strong> Doing it in this order means you have seen the state of the account before disturbing it.</li>
      </ol>

      <h2>When the account is the symptom rather than the problem</h2>
      <p>If you remove a session and it returns, the information has changed, and it is worth stopping to notice that rather than simply removing it again.</p>

      <p>A session that comes back means a live route in: somebody holding the password, or continuing physical access to a device that is signed in. The same is true if recovery details change back, or if forwarding reappears. At that point the question is no longer about the account. It is about who has had your devices or your credentials.</p>

      <p>If the person you suspect is someone close to you, sequence matters more than speed, because removing their access is visible to them. Our guide to <a href="/blog/is-someone-monitoring-your-phone">phone monitoring and stalkerware</a> sets out why acting in the wrong order can make things worse, and our guide to <a href="/blog/can-someone-read-my-whatsapp-messages">whether someone can read your WhatsApp messages</a> covers the linked-device version of the same problem.</p>

      <p>Where the access came from an employer's equipment rather than an individual, that is a different relationship again, and our guide to <a href="/blog/can-my-employer-monitor-me">what an employer can actually monitor</a> covers it.</p>

      <h2>What an examination can and cannot establish</h2>
      <p>A physical examination reports what was found in the areas accessed, by the methods used, under the conditions present, at the time of the visit. It can report what was physically found and what was transmitting in the bands examined while the examiner was present. It cannot establish that a device recording to internal memory is absent, because such a device emits nothing.</p>

      <p>None of that reaches an account question, and it is worth saying so before anybody spends money in the wrong place. Who is signed into your email is answered in the account's own settings, in the list Google publishes, in about ten minutes. A sweep of a room cannot tell you anything about it. Our <a href="/blog/bug-sweeping-in-india">national guide to bug sweeping</a> sets out what an examination does cover, and this sits outside it.</p>

      <h2>Frequently asked questions</h2>
${faqHtml(googleAccessFaqs)}
    `,
  },
  {
    slug: "is-hotel-and-public-wifi-safe",
    title: "Is Hotel and Public Wi-Fi Still Dangerous? What Actually Changed",
    seoTitle: "Is Hotel and Public Wi-Fi Safe? What Actually Changed",
    metaDescription: "The warning was written for an era of readable traffic. HTTPS now covers almost all public browsing. What that closed, what it did not, and where a VPN helps.",
    excerpt: "The advice to avoid public Wi-Fi was built on a threat that encryption has largely closed. Google reports HTTPS above 99 per cent on some platforms. What remains is narrower, stranger and worth knowing precisely.",
    date: "2026-11-08",
    readTime: "10 min read",
    category: "TSCM Guides",
    coverImage: "/images/blogs/is-hotel-and-public-wifi-safe.webp",
    ogImage: "/images/blogs/is-hotel-and-public-wifi-safe.png",
    coverImageAlt: "Is Hotel and Public Wi-Fi Safe guide cover: a shared network with most connections drawn as sealed locked links and one left open in red",
    publishedBy: "BugSweepingTSCM",
    cta: {
      heading: "Worried about the room rather than the network?",
      text: "A hotel network and a hotel room are different problems. If the concern is a device in the room, a physical examination is the right instrument, and a private consultation can help you decide whether one is warranted.",
      label: "Request a consultation on WhatsApp",
    },
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://www.bugsweepingtscm.com/blog/is-hotel-and-public-wifi-safe#webpage",
          url: "https://www.bugsweepingtscm.com/blog/is-hotel-and-public-wifi-safe",
          name: "Is Hotel and Public Wi-Fi Safe? What Actually Changed",
          inLanguage: "en-IN",
          isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" },
          breadcrumb: { "@id": "https://www.bugsweepingtscm.com/blog/is-hotel-and-public-wifi-safe#breadcrumb" },
          primaryImageOfPage: { "@id": "https://www.bugsweepingtscm.com/blog/is-hotel-and-public-wifi-safe#primaryimage" },
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
          "@type": "ImageObject",
          "@id": "https://www.bugsweepingtscm.com/blog/is-hotel-and-public-wifi-safe#primaryimage",
          url: "https://www.bugsweepingtscm.com/images/blogs/is-hotel-and-public-wifi-safe.png",
          width: 1200,
          height: 630,
        },
        {
          "@type": "BlogPosting",
          "@id": "https://www.bugsweepingtscm.com/blog/is-hotel-and-public-wifi-safe#article",
          headline: "Is Hotel and Public Wi-Fi Still Dangerous? What Actually Changed",
          description: "The warning was written for an era of readable traffic. HTTPS now covers almost all public browsing. What that closed, what it did not, and where a VPN helps.",
          datePublished: "2026-11-08",
          image: { "@id": "https://www.bugsweepingtscm.com/blog/is-hotel-and-public-wifi-safe#primaryimage" },
          mainEntityOfPage: { "@id": "https://www.bugsweepingtscm.com/blog/is-hotel-and-public-wifi-safe#webpage" },
          inLanguage: "en-IN",
          author: { "@id": "https://www.bugsweepingtscm.com/#organization" },
          publisher: { "@id": "https://www.bugsweepingtscm.com/#organization" },
          isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" },
        },
        {
          "@type": "Organization",
          "@id": "https://www.bugsweepingtscm.com/#organization",
          name: "BugSweepingTSCM",
          url: "https://www.bugsweepingtscm.com",
          logo: "https://www.bugsweepingtscm.com/images/logo/bug-sweep.png",
          email: "info@advancedetectiveagency.com",
          telephone: "+91-8882732221",
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://www.bugsweepingtscm.com/blog/is-hotel-and-public-wifi-safe#breadcrumb",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.bugsweepingtscm.com" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.bugsweepingtscm.com/blog" },
            { "@type": "ListItem", position: 3, name: "Is Hotel and Public Wi-Fi Safe?" },
          ],
        },
        faqJsonLd(publicWifiFaqs, "https://www.bugsweepingtscm.com/blog/is-hotel-and-public-wifi-safe#faq"),
      ],
    },
    content: `
      <div class="answer-box">
        <p><strong>Short answer:</strong> Much less dangerous than the advice suggests, because the advice was written for a web where traffic could be read. Google reports HTTPS adoption at 98 per cent on Windows and above 99 per cent on Android and Mac for public sites. What remains is a narrow and specific set of risks, and a VPN addresses only one of them.</p>
      </div>

      <p>The standard warning about public Wi-Fi is one of the most repeated pieces of security advice in existence, and it describes a world that has largely gone. It was written when a person sitting in the same cafe could watch your traffic go past in readable form, because most of it was readable.</p>

      <p>That changed, and it changed almost completely. Understanding what replaced it is more useful than either the old fear or the breezy dismissal that has started to replace it, because the risks that remain are specific and are not the ones people guard against.</p>

      <h2>What the numbers actually say</h2>
      <p>Google publishes measurements of how much browsing happens over encrypted connections, and in <a href="https://blog.google/security/https-by-defau/" rel="noopener noreferrer" target="_blank">its October 2025 account of HTTPS by default</a> it gives figures by platform.</p>

      <p>Limiting the analysis to public sites, Windows "increases from 95% to 98% HTTPS", while "both Android and Mac increase to over 99% HTTPS". Linux "jumps from 84% HTTPS to nearly 97% HTTPS" under the same measure. Once private sites such as local addresses are excluded, in Google's words, "the distribution becomes much tighter across platforms".</p>

      <p>Encrypted traffic cannot be read by somebody else on the same network. So the classic scenario, a stranger in the lobby reading your messages and seeing your passwords, is not a description of what happens on a modern network with modern sites. It is a description of 2012.</p>

      <h2>What has not been closed</h2>
      <p>Google's own framing of the remaining gap is the most useful sentence on the subject, and it is not reassuring: "Since attackers only need a single insecure navigation."</p>

      <p>That reframes the percentage. Ninety-nine per cent coverage is not ninety-nine per cent safety if one unencrypted request is enough, and the company adds that "many plaintext HTTP connections today are entirely invisible to users", because a site that loads over HTTP and then redirects leaves no trace the user would notice.</p>

      <p>Three specific exposures follow, and they are worth separating from the general sense of danger.</p>
      <ol>
        <li><strong>The remaining insecure sites,</strong> which you cannot reliably identify in advance because redirects conceal them.</li>
        <li><strong>Captive portals,</strong> the sign-in pages hotels and airports put in front of their networks. These work by intercepting your first connection, which is the same behaviour an attacker would produce, and they routinely teach people to click through security warnings in order to get online.</li>
        <li><strong>Being on a shared local network at all.</strong> Google notes that insecure traffic to private sites "can only be abused by an attacker also on your local network". On a hotel or cafe network, that describes everybody else connected to it.</li>
      </ol>

      <h2>Where a VPN helps, and where it does not</h2>
      <p>A VPN is the standard recommendation here and it is worth being precise about what it does, because the usual framing oversells it in one direction and dismisses it in another.</p>

      <p>What it does: it hides which servers you are connecting to from the local network and whoever operates it. That metadata is real and the hotel can otherwise see it, even when the content is encrypted. If that is your concern, a VPN addresses it directly.</p>

      <p>What it does not do: it does not make an insecure site secure. Traffic to a plain HTTP site is still plain HTTP at the far end of the tunnel. And it moves the visibility rather than removing it, because the VPN provider now occupies the position the hotel did. That is a real trade rather than a rhetorical point: the question is whether you trust that company more than the network you are on, and for a reputable provider against an unknown cafe the answer may well be yes.</p>

      <h2>What Chrome is about to change</h2>
      <p>The remaining gap is being closed by the browsers rather than by user behaviour, and the timing is immediate.</p>

      <p>Google has said that in Chrome 154, in October 2026, the "Always Use Secure Connections" setting turns on by default in its public-sites form, warning users before a first insecure connection to a public site. An earlier release, Chrome 147 in April 2026, enabled it for users on Enhanced Safe Browsing.</p>

      <p>The practical effect for anyone reading this is that the warning you have been told to watch for is becoming something the browser does for you. Which makes one old piece of advice more important rather than less: when a browser does warn you about a connection, that warning now means considerably more than it used to.</p>

      <h2>What to actually do</h2>
      <p>Short, and in order of how much it buys you.</p>
      <ol>
        <li><strong>Never dismiss a certificate or connection warning,</strong> on any network. This is the single highest-value habit and it costs nothing.</li>
        <li><strong>Use mobile data for anything you would be unwilling to redo.</strong> Not because the Wi-Fi will definitely betray you, but because the cost of the rule is almost zero.</li>
        <li><strong>Treat the captive portal page as untrusted.</strong> Sign in, do not enter anything beyond what it requires, and never accept a warning to get through it.</li>
        <li><strong>Use a VPN if the network operator seeing your destinations matters to you,</strong> and choose the provider as carefully as you would choose who else gets that list.</li>
      </ol>

      <h2>What an examination can and cannot establish</h2>
      <p>A physical examination reports what was found in the areas accessed, by the methods used, under the conditions present, at the time of the visit. It can report what was physically found and what was transmitting in the bands examined while the examiner was present. It cannot establish that a device recording to internal memory is absent, because such a device emits nothing.</p>

      <p>None of that addresses a network question, and the distinction matters when deciding what to spend money on. Whether a hotel network is trustworthy is answered by how your traffic is protected, not by sweeping a room. The room is a separate question, and a real one: our guide to <a href="/blog/hidden-cameras-in-hotel-rooms-and-pgs">hidden cameras in hotels and paying guest accommodation</a> covers what is worth checking there, and our guide to <a href="/blog/unknown-device-on-my-wifi">an unknown device on your Wi-Fi</a> deals with the network you do control. Our <a href="/blog/bug-sweeping-in-india">national guide to bug sweeping</a> sets out what an examination covers.</p>

      <h2>Frequently asked questions</h2>
${faqHtml(publicWifiFaqs)}
    `,
  },
  {
    slug: "can-someone-read-my-whatsapp-messages",
    title: "Can Someone Read Your WhatsApp Messages? Check the Linked Devices",
    seoTitle: "Can Someone Read My WhatsApp Messages? What to Check",
    metaDescription: "The realistic route is a linked device, not interception. How linking works, the 14 day rule that limits it, and the one screen that shows you everything.",
    excerpt: "Almost every real case comes down to one screen most people have never opened. WhatsApp allows four linked devices, linking needs your own phone in somebody's hands for a minute, and a linked device expires if your phone stops checking in.",
    date: "2026-11-08",
    readTime: "10 min read",
    category: "TSCM Guides",
    coverImage: "/images/blogs/can-someone-read-my-whatsapp-messages.webp",
    ogImage: "/images/blogs/can-someone-read-my-whatsapp-messages.png",
    coverImageAlt: "Can Someone Read Your WhatsApp Messages guide cover: a phone with four linked device slots beside it, one of them marked in red",
    publishedBy: "BugSweepingTSCM",
    cta: {
      heading: "Think the access is wider than one app?",
      text: "If somebody has had your phone, the question is rarely limited to one application. A private consultation can help you work out what can realistically be established, and in what order. Please get in touch from a device the other person has never had access to.",
      label: "Request a consultation on WhatsApp",
    },
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://www.bugsweepingtscm.com/blog/can-someone-read-my-whatsapp-messages#webpage",
          url: "https://www.bugsweepingtscm.com/blog/can-someone-read-my-whatsapp-messages",
          name: "Can Someone Read My WhatsApp Messages? What to Check",
          inLanguage: "en-IN",
          isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" },
          breadcrumb: { "@id": "https://www.bugsweepingtscm.com/blog/can-someone-read-my-whatsapp-messages#breadcrumb" },
          primaryImageOfPage: { "@id": "https://www.bugsweepingtscm.com/blog/can-someone-read-my-whatsapp-messages#primaryimage" },
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
          "@type": "ImageObject",
          "@id": "https://www.bugsweepingtscm.com/blog/can-someone-read-my-whatsapp-messages#primaryimage",
          url: "https://www.bugsweepingtscm.com/images/blogs/can-someone-read-my-whatsapp-messages.png",
          width: 1200,
          height: 630,
        },
        {
          "@type": "BlogPosting",
          "@id": "https://www.bugsweepingtscm.com/blog/can-someone-read-my-whatsapp-messages#article",
          headline: "Can Someone Read Your WhatsApp Messages? Check the Linked Devices",
          description: "The realistic route is a linked device, not interception. How linking works, the 14 day rule that limits it, and the one screen that shows you everything.",
          datePublished: "2026-11-08",
          image: { "@id": "https://www.bugsweepingtscm.com/blog/can-someone-read-my-whatsapp-messages#primaryimage" },
          mainEntityOfPage: { "@id": "https://www.bugsweepingtscm.com/blog/can-someone-read-my-whatsapp-messages#webpage" },
          inLanguage: "en-IN",
          author: { "@id": "https://www.bugsweepingtscm.com/#organization" },
          publisher: { "@id": "https://www.bugsweepingtscm.com/#organization" },
          isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" },
        },
        {
          "@type": "Organization",
          "@id": "https://www.bugsweepingtscm.com/#organization",
          name: "BugSweepingTSCM",
          url: "https://www.bugsweepingtscm.com",
          logo: "https://www.bugsweepingtscm.com/images/logo/bug-sweep.png",
          email: "info@advancedetectiveagency.com",
          telephone: "+91-8882732221",
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://www.bugsweepingtscm.com/blog/can-someone-read-my-whatsapp-messages#breadcrumb",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.bugsweepingtscm.com" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.bugsweepingtscm.com/blog" },
            { "@type": "ListItem", position: 3, name: "Can Someone Read My WhatsApp Messages? What to Check" },
          ],
        },
        faqJsonLd(whatsappFaqs, "https://www.bugsweepingtscm.com/blog/can-someone-read-my-whatsapp-messages#faq"),
      ],
    },
    content: `
      <div class="answer-box">
        <p><strong>Short answer:</strong> Almost certainly through a linked device rather than anything remote. WhatsApp allows up to four companion devices, linking requires somebody to scan a code on your own open phone, and the Linked Devices screen lists every one of them. Open it, and log out anything you do not recognise.</p>
      </div>

      <p>This worry usually arrives with a specific suspicion attached: a particular person seems to know what was said in a conversation they were not part of. The useful thing about that version of the question is that it has a short list of possible answers, and one of them accounts for most real cases.</p>

      <p>It is worth clearing away the answer people reach for first. WhatsApp message content is end-to-end encrypted, which means it is not readable in transit between devices. That is a real protection and it is also not the protection most people are actually asking about, because the common failure is not somebody intercepting your messages on the way. It is somebody who has access to one end of the conversation.</p>

      <p>An endpoint means your own phone in somebody else’s hands, or a device that your account has been linked to. That second one is the mechanism worth understanding, because it is designed to be invisible in normal use.</p>

      <h2>How linked devices actually work</h2>
      <p>WhatsApp supports companion devices: a computer, a tablet, a second phone, which receive and send your messages alongside your main handset. <a href="https://faq.whatsapp.com/1317564962315842?lang=en" rel="noopener noreferrer" target="_blank">WhatsApp's own guidance</a> says your primary phone can link up to four of them.</p>

      <p>Linking is deliberately physical. A code is displayed on the device that wants to join, and it has to be scanned using your own phone, already open, from inside WhatsApp. There is no way to do it from a distance and no way to do it without the handset.</p>

      <p>So the scenario that matters is narrow and concrete: somebody had your phone in their hands, already open, for about a minute. That is the whole attack. It is also why the defences are the ordinary ones, a lock screen nobody else can open and knowing who has had the device, rather than anything exotic.</p>

      <h2>The 14 day rule that works in your favour</h2>
      <p>There is a limit built into the feature that very few people know about, and it is genuinely useful here.</p>

      <p>WhatsApp requires you to <a href="https://faq.whatsapp.com/1317564962315842?lang=en" rel="noopener noreferrer" target="_blank">log in on your primary phone at least every 14 days</a> in order to keep linked devices connected. A companion device is not a permanent grant. It depends on your main handset continuing to check in, and it falls away if that stops.</p>

      <p>The practical consequence is that a covert linked device has an expiry date attached to it from the moment it is created. It also means that if you are looking back at something that happened months ago, a device linked then may well have dropped off on its own, which is worth knowing before you conclude anything from an empty list today.</p>

      <h2>The screen to open</h2>
      <p>Everything above resolves into one check, and it takes less time than reading about it.</p>
      <ol>
        <li><strong>Open WhatsApp, go to Settings, then Linked Devices.</strong> The screen lists every companion device currently linked to your account, with when each was last active.</li>
        <li><strong>Read the list rather than skimming it.</strong> A device you set up yourself and forgot about looks identical to one you did not, so account for each entry positively rather than looking for something alarming.</li>
        <li><strong>Log out anything you cannot account for.</strong> It takes effect immediately, and a device that is logged out stops receiving your messages.</li>
        <li><strong>Check the list again in a week.</strong> If an entry you removed has returned, that tells you something a single check cannot: somebody still has access to the handset.</li>
      </ol>
      <p>That fourth step is the one most advice omits, and it is the one that converts a suspicion into evidence.</p>

      <h2>The other copy of your messages</h2>
      <p>There is a second place your conversations exist, and it is governed by a different account entirely.</p>

      <p>A WhatsApp backup lives in a cloud account rather than on the handset. Whoever can reach that account is a separate question from whoever can reach WhatsApp, and in practice people who worry carefully about one often never think about the other. If you are making a list of who can reach your messages, the account holding the backup belongs on it, and our guide to <a href="/blog/who-has-access-to-my-google-account">checking who has access to your Google account</a> works through how to audit one of them properly.</p>

      <p>A different question arrives when the device has been taken rather than linked. Our guide to <a href="/blog/can-police-search-my-phone-india">whether the police can search your phone</a> covers what has to be recorded before a search, and why two High Courts disagree about passwords.</p>

      <h2>If the suspicion is about a specific person</h2>
      <p>When the worry is a partner, a family member or an ex rather than a stranger, the order in which you act matters more than what you find, and the usual instinct is the wrong one.</p>

      <p>Removing a linked device is visible to whoever placed it, because their access stops. If that person is someone whose reaction you have reason to be careful about, think about sequence before acting, and get advice from a device and a network they have never had access to. Our guide to <a href="/blog/is-someone-monitoring-your-phone">phone monitoring and stalkerware</a> sets out why deleting things first is usually the wrong move, including what it destroys.</p>

      <p>The broader pattern is also worth checking. Somebody who could link a device had your phone open in their hands, and that same access reaches your accounts, your messages and anything else on it. One application is rarely the whole picture.</p>

      <h2>What an examination can and cannot establish</h2>
      <p>A physical examination reports what was found in the areas accessed, by the methods used, under the conditions present, at the time of the visit. It can report what was physically found and what was transmitting in the bands examined while the examiner was present. It cannot establish that a device recording to internal memory is absent, because such a device emits nothing.</p>

      <p>Applied here the division is clean, and worth stating because it saves people money. A sweep of a room cannot tell you anything about an application on your phone. This question is answered on the handset, in a settings screen you can open yourself in under a minute, and if it goes further than that it becomes device forensics rather than a sweep. Our <a href="/blog/bug-sweeping-in-india">national guide to bug sweeping</a> sets out what an examination does cover.</p>

      <h2>Frequently asked questions</h2>
${faqHtml(whatsappFaqs)}
    `,
  },
  {
    slug: "is-my-phone-tapped",
    title: "Is Your Phone Tapped? What Indian Law Actually Allows",
    seoTitle: "Is My Phone Tapped? What Indian Law Actually Allows",
    metaDescription: "A lawful tap in India happens at the operator, not on your handset. Who can authorise it, how long it can last, and why there is nothing on the phone to find.",
    excerpt: "There is no code to dial and no symptom to look for, because a lawful tap never touches your handset. The Rules that govern it are specific about who may authorise one, for how long, and what happens to the recordings.",
    date: "2026-11-08",
    readTime: "11 min read",
    category: "TSCM Guides",
    coverImage: "/images/blogs/is-my-phone-tapped.webp",
    ogImage: "/images/blogs/is-my-phone-tapped.png",
    coverImageAlt: "Is Your Phone Tapped guide cover: a handset shown clean and inert while interception happens at a network node further up the line",
    publishedBy: "BugSweepingTSCM",
    cta: {
      heading: "Worried about a device rather than a warrant?",
      text: "Unlawful listening usually means something in a room or on a device rather than an order served on an operator. A private consultation can help you work out which problem you have and whether a physical examination is warranted.",
      label: "Request a consultation on WhatsApp",
    },
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://www.bugsweepingtscm.com/blog/is-my-phone-tapped#webpage",
          url: "https://www.bugsweepingtscm.com/blog/is-my-phone-tapped",
          name: "Is My Phone Tapped? What Indian Law Actually Allows",
          inLanguage: "en-IN",
          isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" },
          breadcrumb: { "@id": "https://www.bugsweepingtscm.com/blog/is-my-phone-tapped#breadcrumb" },
          primaryImageOfPage: { "@id": "https://www.bugsweepingtscm.com/blog/is-my-phone-tapped#primaryimage" },
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
          "@type": "ImageObject",
          "@id": "https://www.bugsweepingtscm.com/blog/is-my-phone-tapped#primaryimage",
          url: "https://www.bugsweepingtscm.com/images/blogs/is-my-phone-tapped.png",
          width: 1200,
          height: 630,
        },
        {
          "@type": "BlogPosting",
          "@id": "https://www.bugsweepingtscm.com/blog/is-my-phone-tapped#article",
          headline: "Is Your Phone Tapped? What Indian Law Actually Allows",
          description: "A lawful tap in India happens at the operator, not on your handset. Who can authorise it, how long it can last, and why there is nothing on the phone to find.",
          datePublished: "2026-11-08",
          image: { "@id": "https://www.bugsweepingtscm.com/blog/is-my-phone-tapped#primaryimage" },
          mainEntityOfPage: { "@id": "https://www.bugsweepingtscm.com/blog/is-my-phone-tapped#webpage" },
          inLanguage: "en-IN",
          author: { "@id": "https://www.bugsweepingtscm.com/#organization" },
          publisher: { "@id": "https://www.bugsweepingtscm.com/#organization" },
          isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" },
        },
        {
          "@type": "Organization",
          "@id": "https://www.bugsweepingtscm.com/#organization",
          name: "BugSweepingTSCM",
          url: "https://www.bugsweepingtscm.com",
          logo: "https://www.bugsweepingtscm.com/images/logo/bug-sweep.png",
          email: "info@advancedetectiveagency.com",
          telephone: "+91-8882732221",
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://www.bugsweepingtscm.com/blog/is-my-phone-tapped#breadcrumb",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.bugsweepingtscm.com" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.bugsweepingtscm.com/blog" },
            { "@type": "ListItem", position: 3, name: "Is My Phone Tapped? What Indian Law Actually Allows" },
          ],
        },
        faqJsonLd(phoneTappedFaqs, "https://www.bugsweepingtscm.com/blog/is-my-phone-tapped#faq"),
      ],
    },
    content: `
      <div class="answer-box">
        <p><strong>Short answer:</strong> You cannot tell from the handset, because a lawful tap in India does not happen on the handset. It happens at the telecom operator, under an order that only the Union Home Secretary or a State Home Secretary can sign, lasts at most 180 days in total, and is reviewed by a committee chaired by the Cabinet Secretary.</p>
      </div>

      <p>This question is asked constantly and answered badly almost everywhere, because most of the answers describe things you could notice on your phone. Clicks on the line. A battery running hot. A code to dial. None of that is evidence of interception, and the reason is structural rather than technical.</p>

      <p>A lawful interception is carried out by the telecommunication entity that carries your calls and messages. Your handset is not modified, not contacted and not involved. There is nothing on it to find, which means no app, no code and no symptom can tell you about it. That is worth knowing before anyone sells you a detection service for it.</p>

      <p>What you can know is the framework, and in India it is unusually specific. Section 20 of the <a href="https://www.dot.gov.in/acts-policies/telecommunications-act-2023" rel="noopener noreferrer" target="_blank">Telecommunications Act, 2023</a> provides the power, and the Telecommunications (Procedures and Safeguards for Lawful Interception of Messages) Rules, 2024 set out the procedure. The rest of this page is what those Rules actually say.</p>

      <h2>Who can authorise it</h2>
      <p>Not a police officer, and not a telecom operator on request. The Rules name a competent authority, and it sits high.</p>

      <p>For the Centre it is the Union Home Secretary in the Ministry of Home Affairs. For a State it is the Secretary to the State Government in charge of the Home Department. That is the signature an interception order requires, and the seniority is the point: the framework is designed so that this is a political and administrative decision taken at the top of a ministry, with a name attached to it.</p>

      <p>The Rules do provide for urgent situations, but the structure above is the ordinary route, and everything that follows exists to check it.</p>

      <h2>How long it can last</h2>
      <p>This is the provision most worth knowing, and it is a ceiling rather than a discretion.</p>

      <p>An interception order remains in force, unless revoked earlier, for a period not exceeding sixty days from the date specified in it. It may be renewed. But the Rules set an outer limit on the whole exercise: no such order may remain in force beyond a total of 180 days.</p>

      <p>So lawful interception in India is time-bound by design. It is not a tap that is attached and forgotten. Somebody has to decide, at sixty day intervals, that it is still justified, and after six months the authority ends regardless.</p>

      <h2>Who checks that it was lawful</h2>
      <p>The Rules build in a review mechanism with named office-holders, fixed deadlines and a power to undo what was done.</p>
      <ol>
        <li><strong>Every order goes to a review committee within seven working days</strong> of being issued or confirmed.</li>
        <li><strong>At the Centre that committee is chaired by the Cabinet Secretary,</strong> sitting with the Secretary of the Department of Legal Affairs and the Secretary of the Department of Telecommunications.</li>
        <li><strong>In a State it is chaired by the Chief Secretary,</strong> with the Law Secretary or Legal Remembrancer and a Secretary other than the Home Secretary.</li>
        <li><strong>The committee meets every two months.</strong></li>
        <li><strong>If it finds an order does not comply with section 20,</strong> it may set aside that order and direct the destruction of the copies of the intercepted messages.</li>
      </ol>
      <p>That last power is the one that gives the rest its force. A review that could only record disapproval would be a formality. A review that can order the material destroyed is a check.</p>

      <h2>What happens to the recordings</h2>
      <p>The Rules do not leave retention open-ended, and the timetables differ by who is holding the material.</p>

      <p>Records held by the authorised agency, the competent authority and the review committee are to be destroyed every six months, unless those records are, or are likely to be, required for functional requirements or under directions of a court. The Department of Telecommunications and the telecommunication entities involved must destroy their records within two months of the interception order being discontinued.</p>

      <p>Two months and six months are short periods, and they are the answer to the common assumption that once a tap exists the material exists forever.</p>

      <h2>Why none of this is detectable from your phone</h2>
      <p>Put the architecture and the law together and the conclusion is unavoidable, which is why it is worth stating plainly rather than leaving implied.</p>

      <p>The interception happens on the operator's side of the connection. Nothing is installed on your device, so there is nothing for an app to detect, no process to find and no battery drain to notice. No dialled code reveals it, and codes like the ones people circulate report call forwarding settings, which is an unrelated feature. Our guide to the <a href="/blog/signs-your-office-is-bugged">signs that an office is bugged</a> deals with the clicks, static and other folklore in detail, including why they stopped meaning anything when networks went digital.</p>

      <p>There is also a simple structural check on the fear. The framework above requires a Home Secretary's signature, a review by the Cabinet Secretary's committee and renewal every sixty days. It is not a resource that gets pointed at people casually.</p>

      <p>There is a second official route that gets confused with this one, and it looks nothing like it. Interception happens inside the network. A search happens to the handset in your hand. Our guide to <a href="/blog/can-police-search-my-phone-india">whether the police can search your phone</a> covers the conditions attached to a search without a warrant, and the paperwork you are entitled to afterwards.</p>

      <h2>The problem you probably do have</h2>
      <p>When somebody is genuinely listening to a person's conversations without authority, it is almost never through the network. It is through the device or the room, because those are reachable without a Home Secretary.</p>

      <p>Software installed on the handset by somebody with physical access is the common case, and it leaves evidence on the device, which is why it can be investigated. Our guide to <a href="/blog/is-someone-monitoring-your-phone">phone monitoring and stalkerware</a> sets out what that evidence looks like and, importantly, why removing it first is usually the wrong move.</p>

      <p>A device in a room is the other case, and it obeys physical constraints that narrow the search considerably, which our guide to <a href="/blog/how-to-find-a-listening-device">finding a listening device</a> works through. If the worry is a boardroom rather than a handset, our guide to <a href="/blog/corporate-espionage-india">corporate espionage in India</a> sets out which layer the risk actually sits in.</p>

      <p>A separate question sits alongside this one, which is what happens to a recording once it exists. Our guide to <a href="/blog/is-call-recording-legal-in-india">whether call recording is legal in India</a> covers recording a call you are part of, and the Supreme Court decision of July 2025 on whether a court will look at it afterwards.</p>

      <h2>What an examination can and cannot establish</h2>
      <p>A physical examination reports what was found in the areas accessed, by the methods used, under the conditions present, at the time of the visit. It can report what was physically found and what was transmitting in the bands examined while the examiner was present. It cannot establish that a device recording to internal memory is absent, because such a device emits nothing.</p>

      <p>On the specific question this page is about, the limit is absolute rather than partial. No sweep of a room and no examination of a handset can establish whether a lawful interception order exists at your operator, because the activity leaves no trace on your side of the network at all. Anyone offering to determine that for you is selling something that cannot be done. Our <a href="/blog/bug-sweeping-in-india">national guide to bug sweeping</a> sets out what an examination does cover, and this is firmly outside it.</p>

      <h2>Frequently asked questions</h2>
${faqHtml(phoneTappedFaqs)}
    `,
  },
  {
    slug: "unknown-device-on-my-wifi",
    title: "There Is an Unknown Device on Your Wi-Fi. What Is It?",
    seoTitle: "Unknown Device on My Wi-Fi: What It Actually Is",
    metaDescription:
      "Usually it is a phone you already own, identifying itself with a randomised address. How to tell which, and whether a hidden camera would appear at all.",
    excerpt:
      "An unfamiliar entry in the router's device list is alarming and is almost always something you own. Modern phones do not give the router their real address. What that means, how to identify the entry, and what a device list cannot tell you.",
    date: "2026-11-08",
    readTime: "10 min read",
    category: "TSCM Guides",
    coverImage: "/images/blogs/unknown-device-on-my-wifi.webp",
    ogImage: "/images/blogs/unknown-device-on-my-wifi.png",
    coverImageAlt:
      "Unknown Device on My Wi-Fi guide cover: a router with four identified client entries and one unlabelled entry highlighted in red",
    publishedBy: "BugSweepingTSCM",
    cta: {
      heading: "Worried the device is not on the network at all?",
      text: "A device list cannot see a camera that is not using your Wi-Fi. If you have reason to think something is in a room rather than on your network, a physical examination is the right instrument, and a private consultation can help you decide whether one is warranted.",
      label: "Request a consultation on WhatsApp",
    },
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://www.bugsweepingtscm.com/blog/unknown-device-on-my-wifi#webpage",
          url: "https://www.bugsweepingtscm.com/blog/unknown-device-on-my-wifi",
          name: "Unknown Device on My Wi-Fi: What It Actually Is",
          inLanguage: "en-IN",
          isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" },
          breadcrumb: { "@id": "https://www.bugsweepingtscm.com/blog/unknown-device-on-my-wifi#breadcrumb" },
          primaryImageOfPage: { "@id": "https://www.bugsweepingtscm.com/blog/unknown-device-on-my-wifi#primaryimage" },
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
          "@type": "ImageObject",
          "@id": "https://www.bugsweepingtscm.com/blog/unknown-device-on-my-wifi#primaryimage",
          url: "https://www.bugsweepingtscm.com/images/blogs/unknown-device-on-my-wifi.png",
          width: 1200,
          height: 630,
        },
        {
          "@type": "BlogPosting",
          "@id": "https://www.bugsweepingtscm.com/blog/unknown-device-on-my-wifi#article",
          headline: "There Is an Unknown Device on Your Wi-Fi. What Is It?",
          description:
            "Usually it is a phone you already own, identifying itself with a randomised address. How to tell which, and whether a hidden camera would appear at all.",
          datePublished: "2026-11-08",
          image: { "@id": "https://www.bugsweepingtscm.com/blog/unknown-device-on-my-wifi#primaryimage" },
          mainEntityOfPage: { "@id": "https://www.bugsweepingtscm.com/blog/unknown-device-on-my-wifi#webpage" },
          inLanguage: "en-IN",
          author: { "@id": "https://www.bugsweepingtscm.com/#organization" },
          publisher: { "@id": "https://www.bugsweepingtscm.com/#organization" },
          about: [
            { "@type": "Thing", name: "Wi-Fi network security" },
            { "@type": "Thing", name: "MAC address randomization" },
          ],
          isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" },
        },
        {
          "@type": "Organization",
          "@id": "https://www.bugsweepingtscm.com/#organization",
          name: "BugSweepingTSCM",
          url: "https://www.bugsweepingtscm.com",
          logo: "https://www.bugsweepingtscm.com/images/logo/bug-sweep.png",
          email: "info@advancedetectiveagency.com",
          telephone: "+91-8882732221",
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://www.bugsweepingtscm.com/blog/unknown-device-on-my-wifi#breadcrumb",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.bugsweepingtscm.com" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.bugsweepingtscm.com/blog" },
            { "@type": "ListItem", position: 3, name: "Unknown Device on My Wi-Fi" },
          ],
        },
        faqJsonLd(wifiDeviceFaqs, "https://www.bugsweepingtscm.com/blog/unknown-device-on-my-wifi#faq"),
      ],
    },
    content: `
      <div class="answer-box">
        <p><strong>Short answer:</strong> It is usually a phone or tablet you already own. Modern devices do not give the router their real hardware address, so your own equipment can appear as a stranger. Identify it by matching addresses rather than names. And note the limitation that matters here: a camera that is not using your Wi-Fi will not appear in the list at all.</p>
      </div>

      <p>The router app shows a list of connected things, most of them have sensible names, and one of them says something like <em>unknown device</em> or a string of letters and numbers. It is a genuinely unsettling moment, and it is worth knowing that the overwhelming majority of these turn out to be a phone belonging to somebody in the house.</p>

      <p>The reason is a privacy feature that works well and confuses everybody. A router identifies each connected device by its hardware address, and for most of the history of Wi-Fi that address was fixed and unique. It was therefore a perfect tracking identifier, which is why operating systems stopped handing out the real one.</p>

      <p>So the list you are reading is not a list of devices. It is a list of addresses that devices chose to present, and the gap between those two things is where the confusion lives.</p>

      <h2>What your own phones are actually doing</h2>
      <p>Both major platforms document this, and the detail is worth having because it decides whether an unfamiliar entry is explained or not.</p>

      <p>Apple's guidance on <a href="https://support.apple.com/en-in/102509" rel="noopener noreferrer" target="_blank">private Wi-Fi addresses</a> says the device will "identify itself to each network using a different Wi-Fi address". The control has existed since iOS 14 and iPadOS 14, and on iOS 18 and later it offers three states: off, fixed, and rotating. In rotating mode the address changes every two weeks.</p>

      <p>Google's <a href="https://source.android.com/docs/core/connect/wifi-mac-randomization-behavior" rel="noopener noreferrer" target="_blank">Android documentation</a> states that "for devices running Android 10 or higher, the framework uses a randomized MAC address by default". The default kind is persistent: Android generates the address from the network profile's parameters, and it stays the same until a factory reset. Forgetting the network and rejoining it does not change the address.</p>

      <p><strong>That last point is the one most advice gets wrong.</strong> The usual explanation is that randomisation makes addresses churn constantly, so an unknown entry can always be shrugged off. The documentation says otherwise. Android's default address is stable for a given network until the phone is factory reset, and Apple's rotating option moves every two weeks rather than every day. A genuinely new entry that appeared today is therefore not automatically explained by randomisation, which is exactly why it is worth identifying rather than dismissing.</p>

      <h2>How to identify the entry</h2>
      <p>Match addresses. Names in a router list are guesses the router makes, and they are frequently wrong or blank, so they are the wrong thing to reason from.</p>
      <ol>
        <li><strong>Open the router's own administration page</strong> rather than only the provider's mobile app. The app often shows a simplified list and sometimes omits wired devices entirely. What your operator exposes differs between providers and router models, so use the equipment in front of you.</li>
        <li><strong>Write down the unknown address</strong> exactly as shown, along with whether it is currently connected.</li>
        <li><strong>Go to each of your own devices</strong> and read the address it reports for this specific network, which is shown in the network's own settings rather than in the general device information. Compare it with the list.</li>
        <li><strong>Work through everything, not just the phones.</strong> Televisions, set-top boxes, streaming sticks, speakers, printers, consoles, air conditioners, water purifiers and doorbells all hold addresses. Households routinely have twice as many connected things as the people in them believe.</li>
        <li><strong>Change the Wi-Fi password</strong> if an entry survives all of that. Everything disconnects and rejoins, which both removes whatever should not be there and gives you a clean list to rebuild from as your own devices come back one at a time.</li>
      </ol>
      <p>Changing the password is better than blocking the address, for a reason this page has already given: the address is the part that can be changed.</p>

      <h2>Would a hidden camera appear in the list?</h2>
      <p>This is the question that brings people from the previous section to this site, and the answer has a sharp limit that is worth stating before the reassurance.</p>

      <p>A camera that is joined to your Wi-Fi does appear. It is an ordinary client, it takes an address from your router, and it sits in the list like a printer. If somebody has placed one and connected it to the network it is using, a careful audit of that list can find it.</p>

      <p>Four kinds will not appear at all, and between them they cover most of what actually turns up in Indian cases.</p>
      <ol>
        <li><strong>A camera running its own hotspot.</strong> It creates a network rather than joining yours, and whoever placed it connects to that. Your router never sees it.</li>
        <li><strong>A camera with a mobile SIM,</strong> which uses the cellular network and has no reason to touch your Wi-Fi.</li>
        <li><strong>A wired camera,</strong> which may not appear in a list that is showing wireless clients only.</li>
        <li><strong>A camera that records to a memory card and transmits nothing.</strong> There is no connection to see, because there is no connection. This is the kind that defeats every network method and most consumer advice.</li>
      </ol>
      <p>So a clean device list is evidence about your network. It is not evidence about your room. Our guide to <a href="/blog/how-to-detect-hidden-cameras">detecting hidden cameras</a> covers what does work, and our guide to <a href="/blog/hidden-cameras-in-hotel-rooms-and-pgs">hidden cameras in hotels and paying guest accommodation</a> explains why network scanning fails hardest in a room you do not control, where you are not on the same network as the device in the first place.</p>

      <h2>What the list does not show you</h2>
      <p>Before drawing conclusions from a clean list, it is worth knowing where the list itself has blind spots, because several of them are common in Indian homes.</p>
      <ol>
        <li><strong>Wired devices.</strong> Many provider apps show wireless clients only. A desktop, a set-top box or a camera on a cable can be absent from the view you are looking at while being very much connected.</li>
        <li><strong>Mesh systems and extenders.</strong> Where a second unit repeats the signal, devices attached to it sometimes appear under the extender rather than individually, or appear twice. A duplicate entry is far more often this than an intruder.</li>
        <li><strong>The guest network.</strong> If your router runs one, it may be listed separately or not at all, and anything on it will not appear beside your main clients.</li>
        <li><strong>Devices that are simply asleep.</strong> A list usually shows what is connected now. Something that wakes for a few minutes a day will be missing almost every time you look.</li>
      </ol>
      <p>That last one is the reason to check more than once, at different times, before concluding anything from an absence.</p>

      <h2>A better arrangement than auditing forever</h2>
      <p>A network you do not control is a different question again, and a less alarming one than it used to be: our guide to <a href="/blog/is-hotel-and-public-wifi-safe">whether hotel and public Wi-Fi is still dangerous</a> covers what encryption closed and what it did not.</p>
      <p>If your router supports a guest network, the most useful thing you can do is put every connected appliance on it and keep your phones and computers on the main one.</p>
      <p>This helps in two ways. It separates the devices you cannot inspect and do not fully control from the ones holding your accounts and documents, so a compromised appliance has far less to reach. And it makes the main network's client list short enough to actually recognise, which turns the question this page is about from an annual panic into something you can resolve in a minute.</p>

      <h2>When an unknown device is worth taking seriously</h2>
      <p>Having done the work above, a few patterns do deserve more than a shrug.</p>

      <p>An entry that is present when the household is out, and absent when everyone is home, is behaving unlike a household device. So is one that appears only at particular hours. So is an entry that survives a password change, which should not be possible unless whoever is using it has the new password, and that is a question about who has had access to your home or your written-down credentials rather than a question about Wi-Fi.</p>

      <p>If that is the pattern, the useful question is the one this site keeps returning to: who has had physical access. Our guide to the <a href="/blog/signs-your-office-is-bugged">signs that an office is bugged</a> makes the case that access is more informative than any instrument reading, and the same holds at home.</p>

      <h2>What an examination can and cannot establish</h2>
      <p>A physical examination reports what was found in the areas accessed, by the methods used, under the conditions present, at the time of the visit. It can report what was physically found and what was transmitting in the bands examined while the examiner was present. It cannot establish that a device recording to internal memory is absent, because such a device emits nothing at all.</p>

      <p>Applied to this question, the division is clean. A device list answers what is on your network. A physical examination answers what is in your room. Neither answers the other, and a provider who offers to settle a question about your Wi-Fi by sweeping your living room, or to clear your living room by reading your router, is offering the wrong instrument. Our <a href="/blog/bug-sweeping-in-india">national guide to bug sweeping</a> sets out what an examination does cover.</p>

      <h2>Frequently asked questions</h2>
${faqHtml(wifiDeviceFaqs)}
    `,
  },
  {
    slug: "can-my-landlord-put-cameras",
    title: "Can Your Landlord Put Cameras Up? Where the Line Falls in India",
    seoTitle: "Can My Landlord Put Cameras Up? The Line in India",
    metaDescription:
      "The question is not who owns the building. It is where the camera points. What an Indian court said this month, and what to do about a camera you object to.",
    excerpt:
      "Most arguments about landlord cameras start with who owns the property, which is the wrong question. What decides it is what falls inside the frame, and an Indian High Court has just said so in terms.",
    date: "2026-11-08",
    readTime: "10 min read",
    category: "Bug Sweep Tips",
    coverImage: "/images/blogs/can-my-landlord-put-cameras.webp",
    ogImage: "/images/blogs/can-my-landlord-put-cameras.png",
    coverImageAlt:
      "Can Your Landlord Put Cameras Up guide cover: a wall-mounted camera whose cone of view crosses a dashed boundary line towards a doorway",
    publishedBy: "BugSweepingTSCM",
    cta: {
      heading: "Not sure whether there is a camera you have not been told about?",
      text: "A camera you can see is a question about where it points. A camera nobody mentioned is a different problem, and a physical examination can address it. A private consultation can help you decide whether one is warranted.",
      label: "Request a consultation on WhatsApp",
    },
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://www.bugsweepingtscm.com/blog/can-my-landlord-put-cameras#webpage",
          url: "https://www.bugsweepingtscm.com/blog/can-my-landlord-put-cameras",
          name: "Can My Landlord Put Cameras Up? The Line in India",
          inLanguage: "en-IN",
          isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" },
          breadcrumb: { "@id": "https://www.bugsweepingtscm.com/blog/can-my-landlord-put-cameras#breadcrumb" },
          primaryImageOfPage: { "@id": "https://www.bugsweepingtscm.com/blog/can-my-landlord-put-cameras#primaryimage" },
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
          "@type": "ImageObject",
          "@id": "https://www.bugsweepingtscm.com/blog/can-my-landlord-put-cameras#primaryimage",
          url: "https://www.bugsweepingtscm.com/images/blogs/can-my-landlord-put-cameras.png",
          width: 1200,
          height: 630,
        },
        {
          "@type": "BlogPosting",
          "@id": "https://www.bugsweepingtscm.com/blog/can-my-landlord-put-cameras#article",
          headline: "Can Your Landlord Put Cameras Up? Where the Line Falls in India",
          description:
            "The question is not who owns the building. It is where the camera points. What an Indian court said this month, and what to do about a camera you object to.",
          datePublished: "2026-11-08",
          image: { "@id": "https://www.bugsweepingtscm.com/blog/can-my-landlord-put-cameras#primaryimage" },
          mainEntityOfPage: { "@id": "https://www.bugsweepingtscm.com/blog/can-my-landlord-put-cameras#webpage" },
          inLanguage: "en-IN",
          author: { "@id": "https://www.bugsweepingtscm.com/#organization" },
          publisher: { "@id": "https://www.bugsweepingtscm.com/#organization" },
          about: [
            { "@type": "Thing", name: "Closed-circuit television" },
            { "@type": "Thing", name: "Tenant privacy" },
          ],
          isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" },
        },
        {
          "@type": "Organization",
          "@id": "https://www.bugsweepingtscm.com/#organization",
          name: "BugSweepingTSCM",
          url: "https://www.bugsweepingtscm.com",
          logo: "https://www.bugsweepingtscm.com/images/logo/bug-sweep.png",
          email: "info@advancedetectiveagency.com",
          telephone: "+91-8882732221",
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://www.bugsweepingtscm.com/blog/can-my-landlord-put-cameras#breadcrumb",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.bugsweepingtscm.com" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.bugsweepingtscm.com/blog" },
            { "@type": "ListItem", position: 3, name: "Can My Landlord Put Cameras Up?" },
          ],
        },
        faqJsonLd(landlordCameraFaqs, "https://www.bugsweepingtscm.com/blog/can-my-landlord-put-cameras#faq"),
      ],
    },
    content: `
      <div class="answer-box">
        <p><strong>Short answer:</strong> Owning the building does not settle it. What settles it is where the camera points. A camera covering a shared entrance is an ordinary security measure; one covering a bedroom, bathroom or changing area is a criminal matter; and on 2 November 2026 the Allahabad High Court held that no private camera may be positioned so as to interfere with a neighbour's privacy.</p>
      </div>

      <p>Almost every argument about this starts in the wrong place. The landlord says it is their property. The tenant says it is their home. Both are true, and neither decides anything, because the law here is not organised around who holds the title deed.</p>

      <p>It is organised around what falls inside the frame. A single camera, bolted to the same wall by the same person, can be unremarkable or criminal depending on which way it is turned. Once you see that, the question stops being a standoff about ownership and becomes something you can actually investigate and act on.</p>

      <p>This page is about a camera you can see, or have been told about, and want to know your position on. A camera nobody mentioned is a different problem with a different answer, and our guide to <a href="/blog/hidden-cameras-in-hotel-rooms-and-pgs">hidden cameras in hotels and paying guest accommodation</a> deals with that case, including what the Indian record shows about who actually places them.</p>

      <h2>What an Indian court said this month</h2>
      <p>The clearest recent statement on this is only days old, and it concerns a neighbour rather than a landlord, which makes it more useful rather than less, because the principle it states is about position rather than about the relationship between the parties.</p>

      <p>On 2 November 2026 <a href="https://www.livelaw.in/high-court/allahabad-high-court/allahabad-high-court-private-cctv-cameras-interfere-neighbour-privacy-556879" rel="noopener noreferrer" target="_blank">LiveLaw reported</a> that the Allahabad High Court, on a petition by Yogendra Maurya, whose neighbour's CCTV camera covered the entry and exit points of his house, held that "no private CCTV camera can be installed and positioned in such a manner as to interfere with the privacy of a neighbour". The bench was Justice Ajit Kumar and Justice Garima Prashad.</p>

      <p>Read the remedy as carefully as the holding, because it is the part you can use. The court did not order the camera removed or repositioned. It disposed of the writ petition and directed the petitioner to apply to the District Magistrate, and said that if he does, the District Magistrate must decide the application within one month.</p>

      <p>Not every High Court starts from the same place. In Kerala the burden sits on the person objecting, and our guide to <a href="/blog/neighbour-cctv-pointing-at-my-house-kochi">a neighbour's CCTV facing your house in Kochi</a> sets out what that court asks you to establish before it will move a camera.</p>

      <p>That is a practical route most people do not know exists. The instinct in these disputes is to argue with the neighbour, complain to the society, or do nothing. A time-bound application to the District Magistrate is a fourth option, and a court has now pointed to it.</p>

      <h2>Where the line actually falls</h2>
      <p>A harder version arises where both people own the place. Our guide to <a href="/blog/cctv-in-a-shared-home-kolkata">CCTV inside a shared home</a> covers what the Calcutta High Court decided about co-occupants, and what the Supreme Court did with it.</p>
      <p>The useful way to think about this is not a list of permitted places but a single question asked of each camera: what is inside its field of view, and does any part of that view belong to somebody's private life?</p>

      <p>A camera covering a shared entrance, a lift, a staircase or a corridor is an ordinary security measure, and buildings everywhere have them. A camera covering a bathroom, a bedroom or a changing area is not a tenancy dispute at all; it falls squarely within the criminal provisions on voyeurism and on capturing images in circumstances that violate privacy, which our guide to <a href="/blog/how-to-detect-hidden-cameras">detecting hidden cameras</a> sets out in full with their separate penalty ranges.</p>

      <p>Between those two lies the ground where most real disagreements sit, and it is worth naming the cases precisely.</p>
      <ol>
        <li><strong>A camera at a shared entrance that also sees inside your doorway</strong> when the door opens. It was installed as an entrance camera and is described as one. In substance it covers part of your home every time you come and go.</li>
        <li><strong>A camera angled at a window or a balcony.</strong> The camera may sit entirely on the landlord's or neighbour's property and still have your private space in its frame, which is exactly the situation the Allahabad High Court was considering.</li>
        <li><strong>A camera covering the only approach to your door,</strong> recording who visits you and at what hour. Nothing private is captured inside, and a complete record of your associations is captured outside.</li>
      </ol>
      <p>None of these is settled by asking who paid for the camera. All of them are approached by establishing, concretely, what the lens can see.</p>

      <h2>Told about it, or not told about it</h2>
      <p>One Indian city now has this written down for a whole category of accommodation. Our guide to <a href="/blog/pg-rules-in-bengaluru">PG rules in Bengaluru</a> covers the Karnataka High Court order that bars cameras from bedrooms, bathrooms and toilets while requiring them in common areas.</p>
      <p>There is a second distinction that changes the character of the problem, and it is about disclosure rather than position.</p>

      <p>A camera you were shown when you took the flat, or that is plainly visible at the entrance, is something you can raise, negotiate and if necessary escalate. You know it exists, you can establish what it covers, and the dispute is about where it points.</p>

      <p>A camera you were not told about is a different thing entirely, whatever it covers. Concealment is itself a fact about intent, and it moves the matter away from a disagreement between a landlord and a tenant. The Indian cases that reach the courts are overwhelmingly of this second kind, and they are usually found in shared washrooms rather than bedrooms.</p>

      <p>India has no statute written specifically for landlords and cameras, which is why this is answered through general privacy and criminal law and, now, through what courts say about where a private camera may point. The notice and consent machinery under the Digital Personal Data Protection Rules, 2025 commences in May 2027, so the separate question of what a landlord or a housing society must tell residents about cameras is not yet operating. How any of it applies to your own tenancy is a question for a lawyer rather than for a web page.</p>

      <h2>What to settle before you take the flat</h2>
      <p>Almost everything above is easier to resolve before you move in than afterwards, and the questions are short enough to ask at a viewing.</p>
      <p>Ask what cameras exist on the property and where they point. Ask whether any of them cover the entrance to your unit, a balcony or a window. Ask who can see the recordings, which in a building with a society or a property manager is often a different answer from the landlord, and ask how long footage is kept. A landlord who answers those four questions readily is unlikely to be the problem; one who treats them as an accusation has told you something.</p>
      <p>Then get what you were told into the agreement, or at least into a message you keep. The common pattern in disputes is not a landlord who lied at the start. It is a camera added quietly later, at which point a record of what was agreed when you took the flat is the most useful document you have.</p>

      <h2>If there is a camera you object to</h2>
      <p>Work in this order. It is built so that each step preserves your position for the next one.</p>
      <ol>
        <li><strong>Establish what it covers,</strong> from where you stand rather than by handling it. Photograph its position and angle. If you can see the lens from your door, your window or your balcony, that is the fact that matters and it is worth recording with a date.</li>
        <li><strong>Put it in writing</strong> to the landlord or the society, asking what the camera covers, who can view the recordings and how long they are kept. A dated written request creates a record and often resolves the matter.</li>
        <li><strong>If it is not resolved, consider the District Magistrate,</strong> which is the route the Allahabad High Court pointed to, with the one month timeline it mentioned.</li>
        <li><strong>If the camera covers a bathroom, bedroom or changing area, stop treating it as a dispute.</strong> That is a police matter. Cybercrime complaints, including the publication of private images, can be filed at <a href="https://cybercrime.gov.in" rel="noopener noreferrer" target="_blank">cybercrime.gov.in</a>, which routes to the relevant state police, and in immediate danger call <strong>112</strong>.</li>
        <li><strong>Do not remove, cover or disable it first.</strong> It destroys the evidence of what it was and where it pointed, and it hands the other side an argument about your conduct instead of theirs.</li>
      </ol>

      <p>Where the camera points is only one of the questions the law asks about it. Our guide to <a href="/blog/cctv-camera-rules-in-india">CCTV camera rules in India</a> covers the other three, including the registration a camera needs before it can lawfully be sold here and what the landlord now owes you for the footage itself.</p>

      <h2>What a check can and cannot establish</h2>
      <p>A physical examination reports what was found in the areas accessed, by the methods used, under the conditions present, at the time of the visit. It can report what was physically found and what was transmitting in the bands examined while the examiner was present. It cannot establish that a device recording to internal memory is absent, because such a device emits nothing at all.</p>

      <p>For a camera you can already see, an examination is usually the wrong instrument, and it is worth saying so plainly. You do not need anybody to find it. What you need is a clear account of what it covers and a route to act, which is a legal and evidential question rather than a technical one.</p>

      <p>Where an examination earns its place is the other case: you have reason to believe there is something you have not been shown. Our <a href="/blog/bug-sweeping-in-india">national guide to bug sweeping</a> sets out what that covers, and our guide to <a href="/blog/how-to-find-a-listening-device">finding a listening device</a> explains the physical constraints that decide where a concealed device can be at all.</p>

      <h2>Frequently asked questions</h2>
${faqHtml(landlordCameraFaqs)}
    `,
  },
  {
    slug: "can-my-employer-monitor-me",
    title: "Can Your Employer Monitor You? What the Law and the Software Allow",
    seoTitle: "Can My Employer Monitor Me? India Law and What Is Visible",
    metaDescription:
      "In India your employer does not need your consent to process employment data. What device management can and cannot see, and what is discoverable in Teams.",
    excerpt:
      "Most advice on this starts with consent. In India that is the wrong starting point, because the data protection law lets an employer process employee data for employment purposes without it. What is actually visible then depends on whose device it is.",
    date: "2026-11-07",
    readTime: "11 min read",
    category: "Corporate Security",
    coverImage: "/images/blogs/can-my-employer-monitor-me.webp",
    ogImage: "/images/blogs/can-my-employer-monitor-me.png",
    coverImageAlt:
      "Can Your Employer Monitor You guide cover: a company laptop shown lit and legible beside a dimmed personal phone, divided by a line",
    publishedBy: "BugSweepingTSCM",
    cta: {
      heading: "A workplace concern that is not about policy?",
      text: "If the worry is not ordinary monitoring but a device somebody placed in a room, or a specific person with access they should not have, that is a different question and a physical examination can address it. A private consultation can help you decide whether one is warranted.",
      label: "Request a consultation on WhatsApp",
    },
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://www.bugsweepingtscm.com/blog/can-my-employer-monitor-me#webpage",
          url: "https://www.bugsweepingtscm.com/blog/can-my-employer-monitor-me",
          name: "Can My Employer Monitor Me? India Law and What Is Visible",
          inLanguage: "en-IN",
          isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" },
          breadcrumb: { "@id": "https://www.bugsweepingtscm.com/blog/can-my-employer-monitor-me#breadcrumb" },
          primaryImageOfPage: { "@id": "https://www.bugsweepingtscm.com/blog/can-my-employer-monitor-me#primaryimage" },
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
          "@type": "ImageObject",
          "@id": "https://www.bugsweepingtscm.com/blog/can-my-employer-monitor-me#primaryimage",
          url: "https://www.bugsweepingtscm.com/images/blogs/can-my-employer-monitor-me.png",
          width: 1200,
          height: 630,
        },
        {
          "@type": "BlogPosting",
          "@id": "https://www.bugsweepingtscm.com/blog/can-my-employer-monitor-me#article",
          headline: "Can Your Employer Monitor You? What the Law and the Software Allow",
          description:
            "In India your employer does not need your consent to process employment data. What device management can and cannot see, and what is discoverable in Teams.",
          datePublished: "2026-11-07",
          image: { "@id": "https://www.bugsweepingtscm.com/blog/can-my-employer-monitor-me#primaryimage" },
          mainEntityOfPage: { "@id": "https://www.bugsweepingtscm.com/blog/can-my-employer-monitor-me#webpage" },
          inLanguage: "en-IN",
          author: { "@id": "https://www.bugsweepingtscm.com/#organization" },
          publisher: { "@id": "https://www.bugsweepingtscm.com/#organization" },
          about: [
            { "@type": "Thing", name: "Workplace monitoring" },
            { "@type": "Thing", name: "Digital Personal Data Protection Act" },
          ],
          isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" },
        },
        {
          "@type": "Organization",
          "@id": "https://www.bugsweepingtscm.com/#organization",
          name: "BugSweepingTSCM",
          url: "https://www.bugsweepingtscm.com",
          logo: "https://www.bugsweepingtscm.com/images/logo/bug-sweep.png",
          email: "info@advancedetectiveagency.com",
          telephone: "+91-8882732221",
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://www.bugsweepingtscm.com/blog/can-my-employer-monitor-me#breadcrumb",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.bugsweepingtscm.com" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.bugsweepingtscm.com/blog" },
            { "@type": "ListItem", position: 3, name: "Can My Employer Monitor Me?" },
          ],
        },
        faqJsonLd(employerMonitoringFaqs, "https://www.bugsweepingtscm.com/blog/can-my-employer-monitor-me#faq"),
      ],
    },
    content: `
      <div class="answer-box">
        <p><strong>Short answer:</strong> In India, consent is not the mechanism. The Digital Personal Data Protection Act, 2023 treats processing for the purposes of employment as a legitimate use that stands alongside consent rather than requiring it. What is actually visible to your employer then turns on a different question entirely: who owns the device.</p>
      </div>

      <p>Nearly every article on this subject opens by asking whether your employer has your consent. For an Indian employee that is the wrong first question, and starting there produces an answer that is both reassuring and wrong.</p>

      <p>There are really two questions worth separating. What is an employer permitted to do, which is law. And what can the software on a particular device actually see, which is documented by the companies that make it and is more specific than most people expect in both directions. This page takes them in that order.</p>

      <p>One boundary first, because it decides whether this page is the right one. Ordinary workplace monitoring is an organisation applying policy to equipment it owns, at scale, with no interest in you personally. That is what follows. If your concern is a particular individual with access they should not have, or a device somebody placed in a room, that is targeted surveillance, it has different evidence and different answers, and our guide to the <a href="/blog/signs-your-office-is-bugged">signs that an office is bugged</a> is the better starting point.</p>

      <h2>In India, consent is not the mechanism</h2>
      <p>The <a href="https://www.meity.gov.in/data-protection-framework" rel="noopener noreferrer" target="_blank">Digital Personal Data Protection Act, 2023</a> is built around consent, but it does not make consent the only lawful basis. Section 7 sets out what it calls certain legitimate uses, which sit alongside consent rather than beneath it, and one of them is about employment.</p>

      <p>Clause (i) of Section 7 covers processing "for the purposes of employment or those related to safeguarding the employer from loss or liability", and the clause itself gives examples: guarding against spying by competitors, keeping business secrets and sensitive government-classified material confidential, and providing a service or benefit that an employee asks for. Processing on that basis does not run through employee consent at all.</p>

      <p>Two things follow, and they point in opposite directions, which is why this provision is so often reported badly. The first is that an Indian employee asking "but did I agree to this?" is usually asking a question the statute does not turn on. The second is that the clause is tied to stated purposes. It covers employment, and protecting the employer from loss or liability. It is not a general permission to do anything with employee data, and a purpose outside those bounds is a different legal question.</p>

      <p>Worth adding that the detailed notice and consent machinery under the Digital Personal Data Protection Rules, 2025 commences eighteen months after their publication, in May 2027, as our guide to <a href="/blog/is-my-phone-listening-to-me">whether your phone is listening to you</a> sets out. How any of this applies to your own employment is a question for a lawyer, not for a web page.</p>

      <h2>What device management can and cannot see</h2>
      <p>Here the documentation is unusually precise, and it is worth reading because it contradicts the fears in one direction and the complacency in the other.</p>

      <p>Microsoft publishes a page describing exactly <a href="https://learn.microsoft.com/en-us/intune/user-help/enrollment/data-visibility" rel="noopener noreferrer" target="_blank">what an organisation can see on an enrolled device</a>. It opens with a list headed things your organisation can never see, and that list is: calling and web browsing history, email and text messages, contacts, calendar, passwords, pictures including what is in the photos app or camera roll, and the content of user-created documents.</p>

      <p>That is more protective than most people assume. Now the other direction. For a corporate-owned Windows device, the same page states that the organisation can query hardware and operating system environment information, installed certificate details, file paths and file names, operating system user and group information, registry and event log entries, and details about running processes.</p>

      <p>Read those two lists together and the shape of it appears. Management software is not built to read your messages. It is built to know your machine completely: what is installed, what is running, what files exist and what the system has logged.</p>

      <p><strong>The caveat that matters most.</strong> Everything above describes what the management platform exposes. It says nothing about separate monitoring software an employer may choose to install on a device it owns, which is a different product category with different capabilities. A page documenting what Intune shows is not a guarantee about everything running on your laptop.</p>

      <h2>Whose device is it? The line that actually decides</h2>
      <p>Almost every practical difference in this subject comes back to ownership, and Microsoft's documentation draws the line explicitly rather than leaving it to inference.</p>

      <p>On location, an organisation can view a lost corporate-owned device's location, and the documentation states plainly that they cannot view a personal device's location. On installed software, a corporate-owned device shows all installed apps, while a personal device shows only the managed app inventory, meaning work and school apps, though Microsoft adds that some configurations allow organisations to see more than that on a personal device. Even the phone number is scoped: the full number on a corporate-owned device, the last four digits on a personal one.</p>

      <p>This is why the single most useful habit in this entire subject is not technical. Keep personal things on personal devices and accounts, and work things on work ones. Not because anyone is necessarily watching, but because that one separation removes most of the questions before they arise.</p>

      <h2>What is discoverable in Teams and Microsoft 365</h2>
      <p>The messaging question is the one people ask most, and the honest answer is about where the content lives rather than about who is reading it.</p>

      <p>Microsoft's current <a href="https://learn.microsoft.com/en-us/purview/edisc-search-teams" rel="noopener noreferrer" target="_blank">eDiscovery documentation for Teams</a> sets out the storage. Messages in one to one chats are stored in the Exchange Online mailbox of all chat participants. Messages in group chats are stored the same way. All channel messages and posts are stored in the Exchange Online mailbox associated with the team. The content is in the organisation's tenant, in a form its compliance tools can search, whatever the chat window suggests.</p>

      <p>Three details from that page are worth having, because they are the ones that surprise people.</p>
      <ol>
        <li><strong>Chats with yourself are included.</strong> Microsoft's list of discoverable chat messages covers content in standard channels, one to one chats, group chats, chats with guests, and chats with yourself. The self-chat people use as a scratchpad is not a private notebook.</li>
        <li><strong>Editing does not necessarily erase.</strong> The documentation states that if the user is on hold, previous versions of edited messages are also preserved. A hold is applied by the organisation, typically when litigation or an investigation is anticipated. Editing changes what colleagues see. It does not necessarily change the compliance record.</li>
        <li><strong>Meeting metadata is its own category.</strong> Discoverable meeting metadata includes meeting start and end time and duration, and join and leave events for each participant. Attendance and timing exist as records independently of anything said.</li>
      </ol>
      <p>None of this means somebody is reading your messages. Retrieval through these tools is permissioned and, in a well-run organisation, logged and reserved for defined purposes. It means the content is retrievable, which is a different and more durable fact.</p>

      <h2>How to find out what applies to you</h2>
      <p>If the worry is a personal account rather than a managed device, that is answered in the account itself, and our guide to <a href="/blog/who-has-access-to-my-google-account">who has access to your Google account</a> sets out the route.</p>
      <p>Approach this as a question about your own arrangements rather than as a hunt for hidden software, because the answer is usually written down somewhere you have already been given.</p>
      <ol>
        <li><strong>Read the acceptable use or IT policy</strong> you were issued, and your employment contract. If monitoring is being done properly it is described there, and that document is the first thing any adviser would ask you for.</li>
        <li><strong>Establish who owns the device,</strong> because as shown above that single fact changes what is visible.</li>
        <li><strong>Check whether the device is enrolled in management</strong> and look at what is installed on it. On a managed company Windows machine, assume the organisation can see what is installed and running, because that is what the documentation says it can query.</li>
        <li><strong>Ask your IT team directly.</strong> Microsoft's own page tells users to contact their IT admin to learn more about what the organisation collects. A reasonable employer can answer that question, and an unwillingness to answer it is itself information.</li>
      </ol>

      <h2>What this is not</h2>
      <p>It is worth saying plainly what this page has not been about, because the two situations get confused and the confusion is expensive.</p>

      <p>Ordinary monitoring is systematic, applies to a category of people and equipment, and is boring. The pattern that is not ordinary is a specific person knowing things they have no route to: what was said in a closed room, where you went at the weekend, what you discussed on a personal device. That is a different problem. Our guides to <a href="/blog/is-someone-monitoring-your-phone">phone monitoring and stalkerware</a>, to <a href="/blog/is-my-laptop-camera-hacked">whether a laptop camera has been hacked</a> and to <a href="/blog/how-to-find-a-listening-device">finding a listening device</a> deal with those cases.</p>

      <p>If the concern is the opposite way round, that information is leaving your organisation rather than that your organisation is watching you, our guide to <a href="/blog/corporate-espionage-india">corporate espionage in India</a> is written from that side.</p>

      <h2>What an examination can and cannot establish</h2>
      <p>A physical examination of a room reports what was found in the areas accessed, by the methods used, under the conditions present, at the time of the visit. It can report what was physically found and what was transmitting in the bands examined while the examiner was present. It cannot establish that a device recording to internal memory is absent, because such a device emits nothing.</p>

      <p>None of that answers a question about workplace monitoring, and it is worth being direct about why. Management software on a company laptop is not hidden, is not a radio transmitter, and is doing exactly what the organisation configured it to do. There is no unexplained emission to find and nothing concealed to locate. The answer lies in the policy you were given and the configuration of the device, which is a governance and forensics question rather than a sweep of a room. Our <a href="/blog/bug-sweeping-in-india">national guide to bug sweeping</a> sets out what an examination does cover.</p>

      <h2>Frequently asked questions</h2>
${faqHtml(employerMonitoringFaqs)}
    `,
  },
  {
    slug: "is-my-laptop-camera-hacked",
    title: "Is Someone Watching Through Your Laptop Camera? Start With the Light",
    seoTitle: "Is My Laptop Camera Hacked? What the Light Proves",
    metaDescription:
      "The indicator light is your evidence. Researchers defeated it once, on old hardware. What your laptop promises now, and how to see what is using the camera.",
    excerpt:
      "The indicator light is the only direct evidence most people have. In 2014 researchers disabled it on a class of Mac webcams, from an ordinary application without root privileges. What that proves, what it does not, and what your machine guarantees now.",
    date: "2026-11-06",
    readTime: "11 min read",
    category: "TSCM Guides",
    coverImage: "/images/blogs/is-my-laptop-camera-hacked.webp",
    ogImage: "/images/blogs/is-my-laptop-camera-hacked.png",
    coverImageAlt:
      "Is My Laptop Camera Hacked guide cover: a laptop with the small camera indicator light on its bezel picked out in red on a dark grid background",
    publishedBy: "BugSweepingTSCM",
    cta: {
      heading: "Worried about a camera in the room rather than in your laptop?",
      text: "If the concern is a device somebody else placed in a room, that is a different question with a different answer, and it is one a physical examination can address. A private consultation can help you decide whether one is warranted. Please get in touch from a phone and a network you trust.",
      label: "Request a consultation on WhatsApp",
    },
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://www.bugsweepingtscm.com/blog/is-my-laptop-camera-hacked#webpage",
          url: "https://www.bugsweepingtscm.com/blog/is-my-laptop-camera-hacked",
          name: "Is My Laptop Camera Hacked? What the Light Proves",
          inLanguage: "en-IN",
          isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" },
          breadcrumb: { "@id": "https://www.bugsweepingtscm.com/blog/is-my-laptop-camera-hacked#breadcrumb" },
          primaryImageOfPage: { "@id": "https://www.bugsweepingtscm.com/blog/is-my-laptop-camera-hacked#primaryimage" },
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
          "@type": "ImageObject",
          "@id": "https://www.bugsweepingtscm.com/blog/is-my-laptop-camera-hacked#primaryimage",
          url: "https://www.bugsweepingtscm.com/images/blogs/is-my-laptop-camera-hacked.png",
          width: 1200,
          height: 630,
        },
        {
          "@type": "BlogPosting",
          "@id": "https://www.bugsweepingtscm.com/blog/is-my-laptop-camera-hacked#article",
          headline: "Is Someone Watching Through Your Laptop Camera? Start With the Light",
          description:
            "The indicator light is your evidence. Researchers defeated it once, on old hardware. What your laptop promises now, and how to see what is using the camera.",
          datePublished: "2026-11-06",
          image: { "@id": "https://www.bugsweepingtscm.com/blog/is-my-laptop-camera-hacked#primaryimage" },
          mainEntityOfPage: { "@id": "https://www.bugsweepingtscm.com/blog/is-my-laptop-camera-hacked#webpage" },
          inLanguage: "en-IN",
          author: { "@id": "https://www.bugsweepingtscm.com/#organization" },
          publisher: { "@id": "https://www.bugsweepingtscm.com/#organization" },
          about: [
            { "@type": "Thing", name: "Webcam security" },
            { "@type": "Thing", name: "Camera indicator light" },
          ],
          isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" },
        },
        {
          "@type": "Organization",
          "@id": "https://www.bugsweepingtscm.com/#organization",
          name: "BugSweepingTSCM",
          url: "https://www.bugsweepingtscm.com",
          logo: "https://www.bugsweepingtscm.com/images/logo/bug-sweep.png",
          email: "info@advancedetectiveagency.com",
          telephone: "+91-8882732221",
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://www.bugsweepingtscm.com/blog/is-my-laptop-camera-hacked#breadcrumb",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.bugsweepingtscm.com" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.bugsweepingtscm.com/blog" },
            { "@type": "ListItem", position: 3, name: "Is My Laptop Camera Hacked?" },
          ],
        },
        faqJsonLd(laptopCameraFaqs, "https://www.bugsweepingtscm.com/blog/is-my-laptop-camera-hacked#faq"),
      ],
    },
    content: `
      <div class="answer-box">
        <p><strong>Short answer:</strong> The indicator light is the evidence, and on current hardware it is designed so that the camera cannot run without it. That guarantee is a property of how your particular machine was built, not a universal rule: researchers defeated it in 2014 on Macs made up to roughly 2008, using an ordinary application that did not need administrator rights.</p>
      </div>

      <p>Most questions about surveillance have no single piece of evidence attached to them. This one does. A webcam has a light next to it, the light is supposed to mean the camera is running, and almost everything a worried person can usefully conclude depends on how much weight that one signal will bear.</p>

      <p>So the useful version of this page is not a list of symptoms. It is an answer to a narrower question: what is the indicator light actually wired to, who has broken that wiring, and what does your own laptop promise today.</p>

      <p>A webcam indicator is not a software notification bolted on for reassurance. In the design the Johns Hopkins researchers examined, the camera module was built "around a microprocessor and a separate image sensor with an indicator LED sitting between them such that whenever the image sensor is transmitting images to the microcontroller, a hardware interlock illuminates the LED". That is a physical arrangement: the light is in the path. Understanding that is what lets you judge the rest, because an interlock in hardware is a far stronger thing than a promise in software, and the whole question is whether your machine has one and whether it can be got around.</p>

      <h2>The research that defeated the light, and what it actually proves</h2>
      <p>In 2014 Matthew Brocker and Stephen Checkoway of Johns Hopkins University presented <a href="https://www.usenix.org/system/files/conference/usenixsecurity14/sec14-paper-brocker.pdf" rel="noopener noreferrer" target="_blank">iSeeYou: Disabling the MacBook Webcam Indicator LED</a> at the 23rd USENIX Security Symposium. Their abstract is worth reading exactly as written, because the detail that matters is in the last clause.</p>

      <p>They describe how to disable the LED on a class of Apple internal iSight webcams used in some versions of MacBook laptops and iMac desktops, which "enables video to be captured without any visual indication to the user and can be accomplished entirely in user space by an unprivileged (non-root) application".</p>

      <p>No administrator password. No kernel access. The method was to reprogram the firmware on the camera's own microcontroller, which then let them reconfigure the image sensor and, in their words, "bypass the hardware interlock and disable the LED".</p>

      <p>Now the scope, which is the part that usually gets dropped when this research is quoted. It applied to the iSight camera in "previous generation Apple products including the iMac G5 and early Intel-based iMacs, MacBooks, and MacBook Pros until roughly 2008". The unit they took apart was from a 2008 MacBook. They also built a defence, a kernel extension called iSightDefender that blocked firmware changes from user space.</p>

      <p>What the work proves is not that indicator lights are theatre. It proves something more precise and more useful: the light is exactly as trustworthy as the hardware it is wired into, and that is a design decision which has been made well and badly at different times.</p>

      <h2>What your machine guarantees now</h2>
      <p>The guarantee has moved on considerably since 2008, and it is documented rather than implied.</p>

      <p>Apple's consumer guidance states flatly that the camera "can't be activated without the camera indicator light also turning on". Its platform security documentation is more specific about how that is achieved on recent hardware, describing an architecture that combines system software with dedicated silicon so that untrusted software, "even with root or kernel privileges in macOS", cannot engage the camera "without also visibly lighting the on-screen camera indicator light". Note what that claim covers. Software with kernel privileges is the most powerful position an attacker can normally reach on a machine, and the design is intended to stop it from taking video quietly.</p>

      <p>Two honest caveats. That strongest, most explicitly documented guarantee is described for particular recent hardware rather than offered as a blanket statement about every computer ever sold. And Windows laptops come from many manufacturers, so the wiring of the indicator is a decision each maker takes for its own models rather than one guarantee you can look up centrally. The practical reading is that a lit indicator is meaningful evidence on any modern machine, an unlit one is good evidence on current hardware, and neither is a substitute for knowing what is installed.</p>

      <h2>Why the camera light comes on by itself</h2>
      <p>Before concluding anything, rule out the ordinary. Nearly every instance of this has a dull explanation.</p>
      <ol>
        <li><strong>Video call software checking the device.</strong> Meeting applications commonly probe the camera when they start, when a meeting window opens, or when you open their settings, which produces a flash of the indicator with no call in progress.</li>
        <li><strong>Face sign-in.</strong> If your laptop signs you in by looking at you, the camera necessarily wakes at the lock screen, every time.</li>
        <li><strong>A browser tab you already permitted.</strong> A site granted camera access can reclaim it when you return to that tab, which is why the light sometimes appears while you are only browsing.</li>
        <li><strong>Drivers, updates and manufacturer utilities</strong> that test the device after installing or updating it.</li>
      </ol>
      <p>The pattern that deserves attention is not a flash. It is an indicator that stays lit while you are using nothing that should need the camera, and that keeps happening.</p>

      <h2>How to see what is actually using the camera</h2>
      <p>Use the operating system. It is the only thing on the machine with a privileged view of which software holds the device, and it is the reason a third-party detector application adds nothing here except another program with permissions.</p>

      <p>On Windows, the controls sit under Settings, then Privacy and security, then Camera. A master camera access switch governs the device, and beneath it is a per-application list. Microsoft documents one limitation that is worth knowing before you go looking for a toggle that does not exist: "Camera privacy settings for desktop apps can't be changed at an individual desktop app level." Store applications can be controlled one by one. Classic desktop programs, which is most software on a typical Indian laptop, are governed as a single group through one switch. You can read Microsoft's own description of these controls in its <a href="https://support.microsoft.com/en-us/windows/privacy/manage-app-permissions-for-a-camera-in-windows" rel="noopener noreferrer" target="_blank">guidance on camera permissions</a>.</p>

      <p>On a Mac, the indicator is the live signal, and the list of applications that have been granted camera access sits in the privacy settings, where access can be withdrawn individually.</p>

      <h2>Can your employer watch you through it?</h2>
      <p>This is a large part of why people search for this at all, and it deserves a straight answer rather than reassurance.</p>

      <p>The capability exists, it is sold as ordinary administration software, and the best documented case was not a criminal. The same Johns Hopkins paper records that at the beginning of the 2008 school year the Lower Merion School District issued a MacBook to every enrolled student, preloaded with a remote administration tool that allowed district officials, among other things, to capture images from the webcams. An institution, standard management software, laptops it owned.</p>

      <p>So on a device your employer owns and manages, the honest questions are not technical. They are what software is installed on it, and what you were told. The indicator light applies to management software exactly as it applies to anything else, which means the same evidence is available to you. What the law requires an employer to disclose is a separate subject, and our guide to <a href="/blog/can-my-employer-monitor-me">what an employer can actually monitor</a> takes it up, including why consent is not the mechanism in India.</p>

      <p>If your concern is that a particular person, rather than an organisation, is watching you through a device you own, the pattern to look at is access rather than capability. Our guide to <a href="/blog/is-someone-monitoring-your-phone">phone monitoring and stalkerware</a> deals with that case, including why removing software first is usually the wrong move.</p>

      <h2>Should you cover it?</h2>
      <p>Covering the camera is a reasonable precaution and costs nothing. There is one manufacturer caution that is genuinely surprising and worth repeating, because the failure it describes is expensive.</p>

      <p>Apple's <a href="https://support.apple.com/en-in/102177" rel="noopener noreferrer" target="_blank">support guidance</a> warns that closing a MacBook with a camera cover installed "may damage your display because the clearance between the display and keyboard is designed to very tight tolerances". For environments that require a cover, Apple says it should be "no thicker than an average piece of printer paper (0.1 mm)", and that thicker covers should be removed before the laptop is closed. Apple also notes that covering the built-in camera "may also interfere with the ambient light sensor", which is what drives automatic brightness and True Tone.</p>

      <p>A cover also answers only half the question. It stops video and does nothing about the microphone, which on most laptops has no indicator of its own in hardware and is the sensor better suited to listening to a room anyway. If the worry is a room rather than a device, our guide to <a href="/blog/how-to-find-a-listening-device">finding a listening device</a> sets out the physical constraints that decide where one can be.</p>

      <h2>If you think it really is compromised</h2>
      <p>Treat it as a compromised computer rather than a camera problem, because that is what it would be.</p>
      <ol>
        <li><strong>Stop using it for anything sensitive,</strong> and move to a different device for the steps below.</li>
        <li><strong>Do not start deleting things.</strong> If this matters enough to report, what is installed is the evidence.</li>
        <li><strong>Change the important passwords from the other device,</strong> starting with email, and turn on two-factor authentication there.</li>
        <li><strong>If images or video of you are being used to threaten you,</strong> that is an offence to report rather than a problem to negotiate. Complaints can be filed at <a href="https://cybercrime.gov.in" rel="noopener noreferrer" target="_blank">cybercrime.gov.in</a>, which routes to the relevant state police, and in immediate danger call <strong>112</strong>. Do not pay.</li>
        <li><strong>Get the machine examined properly</strong> if the stakes justify it. That is computer forensics, and the distinction from a sweep of a room matters, as the next section explains.</li>
      </ol>

      <h2>What an examination can and cannot establish</h2>
      <p>A physical examination of a room reports what was found in the areas accessed, by the methods used, under the conditions present, at the time of the visit. It can report what was physically found and what was transmitting in the bands examined while the examiner was present. It cannot establish that a device recording to internal memory is absent, because such a device emits nothing.</p>

      <p>None of that reaches a compromised webcam, and it is worth being blunt about why. Video taken by software on your own laptop leaves inside ordinary encrypted internet traffic, over the network connection you already use, from a camera you bought and placed yourself. There is no unexplained emission to find and no hidden object to locate. Our guide to the <a href="/blog/signs-your-office-is-bugged">signs that an office is bugged</a> makes the same point about the modern version of this threat, and our <a href="/blog/bug-sweeping-in-india">national guide to bug sweeping</a> sets out what an examination does cover.</p>

      <p>If somebody offers to sweep your room to establish whether your webcam has been hacked, that is the wrong instrument for the question, and a firm that says so is telling you something useful about itself.</p>

      <h2>Frequently asked questions</h2>
${faqHtml(laptopCameraFaqs)}
    `,
  },
  {
    slug: "is-my-smart-tv-spying-on-me",
    title: "Is Your Smart TV Spying on You? What It Actually Collects",
    seoTitle: "Is My Smart TV Spying on Me? What It Actually Collects",
    metaDescription:
      "Your TV is not listening to you. It identifies what is on screen, including from your set-top box. What it collects, and what to switch off today.",
    excerpt:
      "The worry is that the television is listening. What it is actually doing is taking fingerprints of the picture on screen and matching them against a database to identify what you are watching, including whatever arrives through your set-top box.",
    date: "2026-11-06",
    readTime: "11 min read",
    category: "TSCM Guides",
    coverImage: "/images/blogs/is-my-smart-tv-spying-on-me.webp",
    ogImage: "/images/blogs/is-my-smart-tv-spying-on-me.png",
    coverImageAlt:
      "Is Your Smart TV Spying on You guide cover: a set-top box feeding a television whose screen shows a fingerprint, with data leaving to the right",
    publishedBy: "BugSweepingTSCM",
    cta: {
      heading: "Worried about a camera in the room, not the television?",
      text: "If the concern is a device somebody else put in a room rather than a setting on your own television, that is a different question with a different answer. A private consultation can help you decide whether a physical examination is warranted. Please get in touch from a phone and a network you trust.",
      label: "Request a consultation on WhatsApp",
    },
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://www.bugsweepingtscm.com/blog/is-my-smart-tv-spying-on-me#webpage",
          url: "https://www.bugsweepingtscm.com/blog/is-my-smart-tv-spying-on-me",
          name: "Is My Smart TV Spying on Me? What It Actually Collects",
          inLanguage: "en-IN",
          isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" },
          breadcrumb: { "@id": "https://www.bugsweepingtscm.com/blog/is-my-smart-tv-spying-on-me#breadcrumb" },
          primaryImageOfPage: { "@id": "https://www.bugsweepingtscm.com/blog/is-my-smart-tv-spying-on-me#primaryimage" },
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
          "@type": "ImageObject",
          "@id": "https://www.bugsweepingtscm.com/blog/is-my-smart-tv-spying-on-me#primaryimage",
          url: "https://www.bugsweepingtscm.com/images/blogs/is-my-smart-tv-spying-on-me.png",
          width: 1200,
          height: 630,
        },
        {
          "@type": "BlogPosting",
          "@id": "https://www.bugsweepingtscm.com/blog/is-my-smart-tv-spying-on-me#article",
          headline: "Is Your Smart TV Spying on You? What It Actually Collects",
          description:
            "Your TV is not listening to you. It identifies what is on screen, including from your set-top box. What it collects, and what to switch off today.",
          datePublished: "2026-11-06",
          image: { "@id": "https://www.bugsweepingtscm.com/blog/is-my-smart-tv-spying-on-me#primaryimage" },
          mainEntityOfPage: { "@id": "https://www.bugsweepingtscm.com/blog/is-my-smart-tv-spying-on-me#webpage" },
          inLanguage: "en-IN",
          author: { "@id": "https://www.bugsweepingtscm.com/#organization" },
          publisher: { "@id": "https://www.bugsweepingtscm.com/#organization" },
          about: [
            { "@type": "Thing", name: "Automatic content recognition" },
            { "@type": "Thing", name: "Smart television privacy" },
          ],
          isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" },
        },
        {
          "@type": "Organization",
          "@id": "https://www.bugsweepingtscm.com/#organization",
          name: "BugSweepingTSCM",
          url: "https://www.bugsweepingtscm.com",
          logo: "https://www.bugsweepingtscm.com/images/logo/bug-sweep.png",
          email: "info@advancedetectiveagency.com",
          telephone: "+91-8882732221",
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://www.bugsweepingtscm.com/blog/is-my-smart-tv-spying-on-me#breadcrumb",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.bugsweepingtscm.com" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.bugsweepingtscm.com/blog" },
            { "@type": "ListItem", position: 3, name: "Is My Smart TV Spying on Me?" },
          ],
        },
        faqJsonLd(smartTvFaqs, "https://www.bugsweepingtscm.com/blog/is-my-smart-tv-spying-on-me#faq"),
      ],
    },
    content: `
      <div class="answer-box">
        <p><strong>Short answer:</strong> It is almost certainly not listening to your conversations. It is taking repeated fingerprints of the picture on your screen and matching them against a database to identify what you are watching, including whatever arrives through your set-top box. The microphone, where there is one, is usually in the remote control.</p>
      </div>

      <p>This question is almost always asked in the wrong direction, and the wrong direction is the one that lets the real answer go unnoticed. People ask whether the television is listening. Televisions are not, in any meaningful sense, listening. They are watching the screen, which is a stranger thing to do and considerably more productive for whoever is paying for the data.</p>

      <p>Automatic content recognition, usually shortened to ACR, is the feature at the centre of this. It samples what is displayed on the television, converts each sample into a compact signature, and matches that signature against a database of known programmes, films and advertisements to work out what is playing. Samsung's own <a href="https://www.samsung.com/us/support/answer/ANS10010616/" rel="noopener noreferrer" target="_blank">support documentation</a> describes its implementation as generating "unique signatures that allow the capture of certain information regarding viewership", and lists viewing history and IP address among what may be captured. The important word is <em>viewership</em>. ACR identifies content, not conversation, and that distinction decides everything about what it can and cannot tell anybody about you.</p>

      <h2>It does not stop at the television's own apps</h2>
      <p>Most people assume that whatever the television knows is limited to what they watch through its built-in streaming apps, and that anything arriving from a separate box is outside its view. That assumption is wrong, and it is wrong for a structural reason: the fingerprint is taken from the screen, so the input makes no difference.</p>

      <p>The clearest statement of this comes from a regulator rather than a manufacturer. In February 2017 the United States Federal Trade Commission and the New Jersey Attorney General <a href="https://www.ftc.gov/news-events/news/press-releases/2017/02/vizio-pay-22-million-ftc-state-new-jersey-settle-charges-it-collected-viewing-histories-11-million" rel="noopener noreferrer" target="_blank">settled charges against Vizio</a> over software that collected viewing data on 11 million televisions "without consumers' knowledge or consent". The televisions captured "second-by-second information about video displayed on the smart TV", and the FTC spells out the sources: "video from consumer cable, broadband, set-top box, DVD, over-the-air broadcasts, and streaming devices".</p>

      <p>So the cable connection, the set-top box, the DVD player and the antenna were all equally visible. The agencies also described what was added afterwards. Vizio appended sex, age, income, marital status, household size, education level, home ownership and household value to the viewing data, then sold it to third parties who used it to target advertising across devices.</p>

      <p>The feature had been marketed as "Smart Interactivity", which "enables program offers and suggestions". The complaint was that consumers were not told the same setting switched on the data collection. Vizio paid 2.2 million dollars, was ordered to delete data collected before 1 March 2016, and was required to "prominently disclose and obtain affirmative express consent" in future.</p>

      <h2>You almost certainly agreed to it, in about two seconds</h2>
      <p>The uncomfortable part of this subject is that for most people it is not a secret and never was. It is a consent you gave and do not remember giving.</p>

      <p>Samsung <a href="https://www.samsung.com/us/support/answer/ANS10010616/" rel="noopener noreferrer" target="_blank">states the position plainly</a>: ACR is optional, and it "only runs if you opted in by consenting to the Viewing Information Services notice". That notice is one of the screens in the first-run setup wizard, somewhere between the network password and the channel scan, at the moment when a person who has just unboxed a television wants to watch something. Everybody presses accept. That is what the screen is designed to achieve.</p>

      <p>Whether a click-through acceptance of that kind is really consent is now a live question in more than one jurisdiction, and at least one regulator has answered it. In a separate matter in 2026 concerning advertising claims, the United States Federal Trade Commission stated that clicking through mandatory terms of service does not constitute opt-in consent for an invasive service. Our guide to <a href="/blog/is-my-phone-listening-to-me">whether your phone is listening to you</a> covers that case and what it found.</p>

      <h2>What changed in Texas, and what did not</h2>
      <p>The most useful recent development is a demonstration that the behaviour of these televisions is set by law rather than by engineering.</p>

      <p>In December 2025 the Attorney General of Texas sued several television manufacturers, including Samsung, Sony, LG, Hisense and TCL, over ACR data collection, under the Texas Deceptive Trade Practices Act. On 26 February 2026 <a href="https://therecord.media/samsung-updates-acr-privacy-practices-texas" rel="noopener noreferrer" target="_blank">Samsung settled</a>, agreeing to stop collecting and processing ACR viewing data without first obtaining consent from Texas consumers, to update its smart television privacy notices, and to change its consent screens so that the choice is an informed one. Cases against several of the other manufacturers were reported as continuing.</p>

      <p>Read that settlement for what it actually is. It did not switch ACR off, and it did not change the technology. It changed how the question is put, and it changed it for people in one American state. The same television, running the same software, asks differently depending on where the law requires it to ask. That is the single most useful thing to understand about this subject, because it tells you what determines your own default.</p>

      <h2>The microphone is in the remote, and the camera is probably not there at all</h2>
      <p>Two components get blamed for ACR, and neither is doing it.</p>

      <p>On the microphone, Samsung's <a href="https://www.samsung.com/us/info/privacy/smarttv/" rel="noopener noreferrer" target="_blank">smart television privacy supplement</a> is specific: voice commands are captured by "the microphone on the remote control", and the company says it collects interactive voice commands "only when you make a specific search request" by pressing the activation button, after which the audio goes to a third-party provider to be converted into text. That is push to talk. It is a different mechanism from ACR, it is governed by a different setting, and you can switch it off separately at the cost of losing voice search.</p>

      <p>On the camera, most televisions do not have one. A small number of older models shipped with a built-in camera for video calling, and some current premium sets accept a clip-on camera sold as an accessory, which is only present if somebody physically attached it. If there is no visible lens on the bezel and nothing clipped to the top of the set, there is no camera. The camera in the room that does have a lens, and an indicator light worth reading, is usually the one in a laptop, which our guide to <a href="/blog/is-my-laptop-camera-hacked">whether a laptop camera has been hacked</a> covers. A concealed camera in a room is a real problem, but it is not usually a television, and our guide to <a href="/blog/how-to-detect-hidden-cameras">detecting hidden cameras</a> deals with the devices that actually turn up.</p>

      <h2>What to switch off, and what each brand calls it</h2>
      <p>Find these settings by name rather than by a tap-by-tap path, because the menus move between models and software versions while the labels have stayed fairly stable. Switching any of them off changes nothing about picture or sound.</p>
      <ol>
        <li><strong>The content recognition setting.</strong> On Samsung it is <em>Viewing Information Services</em>, in the terms and privacy section of Settings. On LG look for <em>Live Plus</em>, on Vizio <em>Viewing Data</em>, on Sony <em>Samba Interactive TV</em>, and on Roku-based sets, which includes many TCL and Hisense models, the option to use information from TV inputs.</li>
        <li><strong>The advertising setting,</strong> which is usually separate from the one above and has to be switched off on its own. Samsung lists interest-based advertising as its own choice alongside Viewing Information Services.</li>
        <li><strong>Voice services,</strong> if you never use voice search. This is the one with a real cost: turning it off removes the feature.</li>
        <li><strong>Check again after a software update.</strong> Settings are occasionally reintroduced or re-prompted when the television updates itself or when you sign in to a new account, so a choice made two years ago is worth confirming.</li>
      </ol>

      <h2>Where India stands on this</h2>
      <p>India has a data protection statute, and the part of it that would govern this particular consent is not yet operating.</p>

      <p>The Digital Personal Data Protection Rules, 2025 were notified in November 2025 under the Act of 2023, and they commence in three stages. Definitions and the Data Protection Board took effect on publication. Registration of Consent Managers follows one year after. The notice and consent requirements, which are the provisions that would decide whether a setup-wizard screen is good enough, sit in the final stage, eighteen months after publication, in May 2027. The Ministry of Electronics and Information Technology publishes the framework on its <a href="https://www.meity.gov.in/data-protection-framework" rel="noopener noreferrer" target="_blank">data protection pages</a>.</p>

      <p>So an Indian household today is in the position Texas was in before December 2025. The feature is the same, the software is the same, and the setting is there to be switched off, but nothing currently obliges a manufacturer to ask in a way designed to be understood rather than accepted. Until that changes, the control that exists is the one in the menu, which is a reason to go and look at it rather than a reason for alarm.</p>

      <h2>When the worry is not the television</h2>
      <p>Everything above concerns a product behaving as its manufacturer documented, in a way you can switch off from the sofa. A different worry sometimes arrives wearing the same words, and it needs separating out.</p>

      <p>If the concern is that a specific person knows things about your private life that no advertising system would have any interest in, the question is not what the television collects. It is who has had access to the room, the phone or the accounts. Ad targeting produces eerie coincidences about products; targeted surveillance produces somebody knowing your plans. Our guides to <a href="/blog/how-to-find-a-listening-device">finding a listening device</a> and to <a href="/blog/is-someone-monitoring-your-phone">phone monitoring</a> deal with those cases, and <a href="/blog/bug-sweeping-in-india">bug sweeping in India</a> sets out what a professional examination covers.</p>

      <p>One place where the two genuinely meet is accommodation you do not control. A television in a hotel room or a short-stay rental is not your television, you did not run its setup, and you cannot see what was agreed on it. That is a sensible reason to treat such a room differently, and our guide to <a href="/blog/hidden-cameras-in-hotel-rooms-and-pgs">hidden cameras in hotels and paying guest accommodation</a> covers what is worth checking there.</p>

      <h2>What an examination can and cannot establish</h2>
      <p>If this leads anyone to consider a professional examination, the honest scope is worth stating in advance.</p>

      <p>An examination reports what was found in the areas accessed, by the methods used, under the conditions present, at the time of the visit. It can report what was physically found and what was transmitting in the bands examined while the examiner was there. It cannot establish that a device recording to internal memory is absent, because such a device emits nothing at all.</p>

      <p>And it will not tell you anything about ACR. A television sending viewing signatures to its manufacturer is doing so inside ordinary encrypted internet traffic, over the network connection you gave it, exactly as documented. There is no emission to find and nothing hidden to locate. That question is answered in the settings menu, not with instruments, which is the most practical thing on this page.</p>

      <h2>Frequently asked questions</h2>
${faqHtml(smartTvFaqs)}
    `,
  },
  {
    slug: "is-my-phone-listening-to-me",
    title: "Is Your Phone Listening to You? What the Evidence Actually Shows",
    seoTitle: "Is My Phone Listening to Me? What the Evidence Shows",
    metaDescription:
      "The firm that sold ad targeting from overheard conversations was fined, because it never listened at all. What researchers found instead, and what to check.",
    excerpt:
      "The company that marketed ad targeting based on overheard conversations was fined 930,000 dollars, because the regulator found it had never listened to anything. It was reselling email lists. The real leak researchers found was not the microphone at all.",
    date: "2026-11-06",
    readTime: "11 min read",
    category: "TSCM Guides",
    coverImage: "/images/blogs/is-my-phone-listening-to-me.webp",
    ogImage: "/images/blogs/is-my-phone-listening-to-me.png",
    coverImageAlt:
      "Is Your Phone Listening to You guide cover: a permission-locked microphone beside an open screen streaming data out, on a dark grid background",
    publishedBy: "BugSweepingTSCM",
    cta: {
      heading: "Worried it is not an app but a device?",
      text: "If your concern is a specific room, vehicle or phone rather than advertising in general, that is a different question and it has a different answer. A private consultation can help you work out whether a physical examination is warranted. Please get in touch from a phone and a network you trust.",
      label: "Request a consultation on WhatsApp",
    },
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://www.bugsweepingtscm.com/blog/is-my-phone-listening-to-me#webpage",
          url: "https://www.bugsweepingtscm.com/blog/is-my-phone-listening-to-me",
          name: "Is My Phone Listening to Me? What the Evidence Shows",
          inLanguage: "en-IN",
          isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" },
          breadcrumb: { "@id": "https://www.bugsweepingtscm.com/blog/is-my-phone-listening-to-me#breadcrumb" },
          primaryImageOfPage: { "@id": "https://www.bugsweepingtscm.com/blog/is-my-phone-listening-to-me#primaryimage" },
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
          "@type": "ImageObject",
          "@id": "https://www.bugsweepingtscm.com/blog/is-my-phone-listening-to-me#primaryimage",
          url: "https://www.bugsweepingtscm.com/images/blogs/is-my-phone-listening-to-me.png",
          width: 1200,
          height: 630,
        },
        {
          "@type": "BlogPosting",
          "@id": "https://www.bugsweepingtscm.com/blog/is-my-phone-listening-to-me#article",
          headline: "Is Your Phone Listening to You? What the Evidence Actually Shows",
          description:
            "The firm that sold ad targeting from overheard conversations was fined, because it never listened at all. What researchers found instead, and what to check.",
          datePublished: "2026-11-06",
          image: { "@id": "https://www.bugsweepingtscm.com/blog/is-my-phone-listening-to-me#primaryimage" },
          mainEntityOfPage: { "@id": "https://www.bugsweepingtscm.com/blog/is-my-phone-listening-to-me#webpage" },
          inLanguage: "en-IN",
          author: { "@id": "https://www.bugsweepingtscm.com/#organization" },
          publisher: { "@id": "https://www.bugsweepingtscm.com/#organization" },
          about: [
            { "@type": "Thing", name: "Mobile device privacy" },
            { "@type": "Thing", name: "Targeted advertising" },
          ],
          isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" },
        },
        {
          "@type": "Organization",
          "@id": "https://www.bugsweepingtscm.com/#organization",
          name: "BugSweepingTSCM",
          url: "https://www.bugsweepingtscm.com",
          logo: "https://www.bugsweepingtscm.com/images/logo/bug-sweep.png",
          email: "info@advancedetectiveagency.com",
          telephone: "+91-8882732221",
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://www.bugsweepingtscm.com/blog/is-my-phone-listening-to-me#breadcrumb",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.bugsweepingtscm.com" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.bugsweepingtscm.com/blog" },
            { "@type": "ListItem", position: 3, name: "Is My Phone Listening to Me?" },
          ],
        },
        faqJsonLd(phoneListeningFaqs, "https://www.bugsweepingtscm.com/blog/is-my-phone-listening-to-me#faq"),
      ],
    },
    content: `
      <div class="answer-box">
        <p><strong>Short answer:</strong> Almost certainly not. The one company that openly sold ad targeting based on overheard conversations was penalised for it in 2026, because regulators found it had never listened to anything. When researchers examined 17,260 Android apps, none was caught sending audio anywhere. What they did catch was apps recording the screen, which needs no permission at all.</p>
      </div>

      <p>This is the most common privacy question people ask, and it is usually asked after an uncanny moment: you mention a product out loud, and within a day an ad for it appears. The feeling that follows is specific and unpleasant, and it deserves a real answer rather than reassurance.</p>

      <p>The honest answer has three parts. The famous evidence that phones listen collapsed under regulatory examination. The largest independent study of the question found no audio leaving any app. And the thing researchers did find was worse in one respect and more fixable in another, because it was never about the microphone.</p>

      <p>Worth separating two different worries before going further. One is ambient commercial surveillance: the companies whose software you installed yourself, operating at scale, interested in you only as an advertising profile. The other is targeted surveillance: a specific person who wants to know what you in particular are doing. They have different evidence, different law and different answers, and most writing on this subject mixes them. This page is about the first. For the second, our guide to <a href="/blog/is-someone-monitoring-your-phone">phone monitoring and stalkerware</a> deals with software installed to watch one person, and our guide to <a href="/blog/how-to-find-a-listening-device">finding a listening device</a> deals with physical devices in a room.</p>

      <h2>The case everyone cites, and how it ended</h2>
      <p>In late 2024 a marketing pitch deck leaked. It belonged to Cox Media Group and described a product called Active Listening, which claimed to use the microphones in phones, smart televisions and other devices to capture conversations and turn them into advertising intent data. It was reported worldwide and became, for most people, the proof that phones listen.</p>

      <p>It is now the strongest evidence for the opposite conclusion.</p>

      <p>On 21 May 2026 the United States Federal Trade Commission brought a complaint against CMG Media Corporation, MindSift and 1010 Digital Works. The <a href="https://www.ftc.gov/news-events/news/press-releases/2026/05/ftc-require-cox-media-group-two-other-firms-pay-nearly-1-million-settle-charges-they-deceived" rel="noopener noreferrer" target="_blank">FTC's own account</a> says the firms claimed the service listened in on consumers' conversations overheard by smart devices, in real time, to target advertising. The FTC found that it "did not, in fact, listen in on consumers' conversations or use voice data at all", and that the business "consisted of reselling, at a significant markup, email lists obtained from other data brokers".</p>

      <p>The firms also told clients that consumers had opted in. The FTC's answer to that is the sentence worth remembering: "Clicking through mandatory terms of service does not constitute 'opt-in consent' for such an invasive service."</p>

      <p>CMG agreed to pay 880,000 dollars, and MindSift and 1010 Digital Works 25,000 dollars each, a total of 930,000 dollars. The <a href="https://www.ftc.gov/legal-library/browse/cases-proceedings/242-3029-cmg-media-corporation-matter" rel="noopener noreferrer" target="_blank">final complaint and decision and order</a> were issued on 27 August 2026. None of the firms admitted wrongdoing. The product that convinced the world its phone was listening was a data broker's email list with a story attached.</p>

      <h2>What happened when researchers actually checked</h2>
      <p>The question has also been tested directly, at a scale no journalist could manage. A team from Northeastern University and TU Wien built an automated system to run Android apps, capture everything they sent over the network, and pull media files out of that traffic.</p>

      <p>Their paper, <a href="https://petsymposium.org/popets/2018/popets-2018-0030.pdf" rel="noopener noreferrer" target="_blank">Panoptispy: Characterizing Audio and Video Exfiltration from Android Applications</a>, covered 17,260 apps from Google Play and three other app stores, of which 9,100 were run and interacted with automatically. On audio the finding is unambiguous, and they state it plainly: "We did not find any true positive audio files in our extracted dataset, i.e., no apps appeared to exfiltrate audio in our tests."</p>

      <p>That is not proof that no app anywhere has ever done it. It is the result of the largest systematic attempt to catch one doing it, and the result was nothing. Their own limitations section says the same about covert recording generally: from 17,260 apps they "uncovered few instances of covert recording", and they call that good news.</p>

      <h2>The permission nobody has to ask for</h2>
      <p>The study is far more interesting for what it did find, and this is the part almost no coverage of the microphone question mentions.</p>

      <p>On Android, using the microphone requires the RECORD_AUDIO permission, and using the camera requires the CAMERA permission. You see those requests and you can refuse them. The researchers point out the asymmetry that follows: "Unlike the camera and audio APIs, the APIs for taking screenshots and recording video of the screen are not protected by any permission."</p>

      <p>So they went looking there, and found third-party libraries embedded inside ordinary apps that, in the paper's words, "record and upload screenshots and videos of the screen without informing the user and without requiring any permissions". In one case a delivery app's screen recordings, including personally identifiable information, were going to a domain belonging to an analytics firm. The researchers reported it, and the analytics library was pulled from that app's Android and iOS builds.</p>

      <p>Think about what is actually on your screen. Card numbers as you type them, passwords before they turn into dots, one-time passcodes, messages you decided not to send. The sensor people guard is the one the operating system already guards for them. The channel that was leaking was the one nobody thinks of as a sensor at all.</p>

      <h2>So why does the ad match the conversation?</h2>
      <p>Because the targeting never needed to hear you. By the time you spoke, the system had better inputs than a microphone would give it.</p>

      <p>It knows where you are and which network you are on, so it knows who you are sitting with. The television in the same room reports its own stream, which our guide to <a href="/blog/is-my-smart-tv-spying-on-me">what a smart TV actually collects</a> sets out. It knows the accounts and contacts you share things with. It knows what you and the people physically near you have searched, browsed and bought. And, as the FTC case shows in detail, it can buy lists about you from data brokers who assembled them from somewhere else entirely. The friend you were talking to may simply have looked the thing up, on the same Wi-Fi, an hour earlier.</p>

      <p>There is also a recall effect doing quiet work. You notice the one advertisement that lands on a conversation you remember having. The thousands that missed are not stored as evidence of anything, because there is nothing to notice about an ad that is merely irrelevant. A single hit after a memorable conversation feels like proof; it is a sample of one against an enormous background.</p>

      <p>None of this makes the targeting innocent. It makes it a data problem rather than a microphone problem, which matters because it changes entirely what you should do about it.</p>

      <h2>Are assistants always listening? In one narrow sense, yes</h2>
      <p>This deserves a straight answer rather than a comforting one. A wake word can only work if the device is continuously processing incoming audio to decide whether the wake word was spoken. The microphone is genuinely active. "Always listening" is a fair description of that mechanism.</p>

      <p>What follows from it is narrower than people assume. Detecting a wake word is not the same as recording a conversation and sending it somewhere, and the detection is imperfect in a predictable direction: a system tuned to catch its wake word reliably will sometimes fire on something that merely sounds like it. Those false activations are a property of the design, not a secret.</p>

      <p>The practical consequence is simple. If an assistant captured something after a false activation, it is usually in the voice history that the assistant itself keeps, and every major assistant lets you review that history and delete it. If you do not use the wake word, turn it off. The control is in the assistant's settings, not in a third-party app.</p>

      <h2>What you can check on your own phone in a few minutes</h2>
      <p>These checks are useful because they are built into the operating system, which means nothing has to be trusted beyond what is already running your phone.</p>
      <ol>
        <li><strong>Watch the indicator.</strong> Samsung's own guidance describes the green dot at the top of the screen as a tool that lets you know when an application is accessing the camera or microphone, showing "whether the microphone, camera, or both are in use". Open the notification panel and tap it, and, in Samsung's words, "you can easily see which application is using the camera or microphone". iPhones show an equivalent indicator when the microphone is active.</li>
        <li><strong>Audit standing permissions.</strong> Samsung's <a href="https://www.samsung.com/in/support/mobile-devices/know-what-the-green-dot-at-the-top-of-your-screen-means/" rel="noopener noreferrer" target="_blank">support page</a> gives the path as Settings, then Privacy, then Permission Manager, where you can review which apps hold camera and microphone access. Revoke it from anything with no reason to need it. A torch app does not need a microphone.</li>
        <li><strong>Review and clear the assistant's voice history</strong> in the assistant's own settings, and turn the wake word off if you do not use it.</li>
        <li><strong>Do not install a detector app.</strong> It cannot see what other apps do with the microphone any better than the system already shows you, and it adds one more party holding permissions on your device. Our guide to the <a href="/blog/signs-your-office-is-bugged">signs that an office is bugged</a> sets out why phone-based detector apps fail at this in general.</li>
      </ol>

      <h2>India's consent rules are not in force yet</h2>
      <p>The FTC's position on click-through consent is worth holding next to where India actually stands, because the gap is larger than most people assume.</p>

      <p>The Digital Personal Data Protection Rules, 2025 were notified in November 2025 under the Act of 2023, and they commence in three stages rather than all at once. A first group took effect on publication, covering definitions and the Data Protection Board. Registration of Consent Managers follows one year after publication. The provisions that matter most to the question on this page, the notice and consent requirements, sit in the final group, which commences eighteen months after publication, in May 2027. The Ministry of Electronics and Information Technology publishes the framework on its <a href="https://www.meity.gov.in/data-protection-framework" rel="noopener noreferrer" target="_blank">data protection pages</a>.</p>

      <p>So the practical position in India today is that the detailed notice and consent duties are still ahead, and the click-through acceptance that the FTC refused to treat as opt-in consent remains, for now, how most of this works. That is not a reason for alarm. It is a reason to treat the permissions you grant as the real control, because at the moment they are.</p>

      <h2>When it is a device, and not advertising at all</h2>
      <p>Everything above is about commercial systems that treat you as one profile among millions. A different and much narrower worry is a specific person who wants to know what you specifically are saying, and that worry has nothing to do with ad targeting.</p>

      <p>The signals are different too. Ambient ad targeting shows up as eerie coincidences about products. Targeted surveillance shows up as somebody knowing things about your plans, your conversations or your movements that they had no ordinary way to know. If that is the pattern, the question is not which app has microphone permission; it is who had access to your phone, your accounts or your rooms. Our guides to <a href="/blog/is-someone-monitoring-your-phone">phone monitoring</a> and to <a href="/blog/how-to-find-a-listening-device">finding a listening device</a> deal with those two cases, and <a href="/blog/bug-sweeping-in-india">bug sweeping in India</a> explains what a professional examination covers.</p>

      <h2>What an examination can and cannot establish</h2>
      <p>If this concern leads to a professional examination, it is worth knowing in advance what one can honestly conclude, because the limits are real.</p>

      <p>An examination reports what was found in the areas accessed, by the methods used, under the conditions present, at the time of the visit. It can report what was physically found and what was transmitting in the bands examined while the examiner was there. It cannot establish that a device recording to internal memory is absent, because such a device emits nothing. It says nothing about what an application on your phone is doing with data you have granted it access to, which is a software and permissions question rather than a radio one, and no sweep of a room will answer it.</p>

      <p>Finding nothing does not prove nothing is there. For the ordinary version of this worry, the version that begins with an uncanny advertisement, the honest answer is that an examination is not the right instrument, and the permission manager already on your phone is.</p>

      <h2>Frequently asked questions</h2>
${faqHtml(phoneListeningFaqs)}
    `,
  },
  {
    slug: "how-to-find-a-listening-device",
    title: "How to Find a Listening Device: Start With the Power Supply",
    seoTitle: "How to Find a Listening Device: Where to Look First",
    metaDescription:
      "A listening device needs power, and that one constraint tells you where it can be and how long it can have been there. What to check, and in what order.",
    excerpt:
      "A cellular radio draws more than a thousand times as much current to transmit as it does to doze. That ratio decides where a listening device can hide, how long it can have been there, and what you should check first.",
    date: "2026-11-06",
    readTime: "12 min read",
    category: "TSCM Guides",
    coverImage: "/images/blogs/how-to-find-a-listening-device.webp",
    ogImage: "/images/blogs/how-to-find-a-listening-device.png",
    coverImageAlt:
      "How to Find a Listening Device guide cover: a small microphone outline wired to a power symbol on a dark grid background",
    publishedBy: "BugSweepingTSCM",
    cta: {
      heading: "Not sure whether what you found is a device?",
      text: "If you have found something you cannot explain, or you have reason to think a room is being listened to, a private consultation can help you decide whether a physical examination is warranted and what to preserve first. Please get in touch from a phone and a network you trust.",
      label: "Request a consultation on WhatsApp",
    },
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://www.bugsweepingtscm.com/blog/how-to-find-a-listening-device#webpage",
          url: "https://www.bugsweepingtscm.com/blog/how-to-find-a-listening-device",
          name: "How to Find a Listening Device: Where to Look First",
          inLanguage: "en-IN",
          isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" },
          breadcrumb: { "@id": "https://www.bugsweepingtscm.com/blog/how-to-find-a-listening-device#breadcrumb" },
          primaryImageOfPage: { "@id": "https://www.bugsweepingtscm.com/blog/how-to-find-a-listening-device#primaryimage" },
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
          "@type": "ImageObject",
          "@id": "https://www.bugsweepingtscm.com/blog/how-to-find-a-listening-device#primaryimage",
          url: "https://www.bugsweepingtscm.com/images/blogs/how-to-find-a-listening-device.png",
          width: 1200,
          height: 630,
        },
        {
          "@type": "BlogPosting",
          "@id": "https://www.bugsweepingtscm.com/blog/how-to-find-a-listening-device#article",
          headline: "How to Find a Listening Device: Start With the Power Supply",
          description:
            "A listening device needs power, and that one constraint tells you where it can be and how long it can have been there. What to check, and in what order.",
          datePublished: "2026-11-06",
          image: { "@id": "https://www.bugsweepingtscm.com/blog/how-to-find-a-listening-device#primaryimage" },
          mainEntityOfPage: { "@id": "https://www.bugsweepingtscm.com/blog/how-to-find-a-listening-device#webpage" },
          inLanguage: "en-IN",
          author: { "@id": "https://www.bugsweepingtscm.com/#organization" },
          publisher: { "@id": "https://www.bugsweepingtscm.com/#organization" },
          about: [
            { "@type": "Thing", name: "Covert listening device" },
            { "@type": "Thing", name: "Technical surveillance countermeasures" },
          ],
          isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" },
        },
        {
          "@type": "Organization",
          "@id": "https://www.bugsweepingtscm.com/#organization",
          name: "BugSweepingTSCM",
          url: "https://www.bugsweepingtscm.com",
          logo: "https://www.bugsweepingtscm.com/images/logo/bug-sweep.png",
          email: "info@advancedetectiveagency.com",
          telephone: "+91-8882732221",
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://www.bugsweepingtscm.com/blog/how-to-find-a-listening-device#breadcrumb",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.bugsweepingtscm.com" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.bugsweepingtscm.com/blog" },
            { "@type": "ListItem", position: 3, name: "How to Find a Listening Device" },
          ],
        },
        faqJsonLd(listeningDeviceFaqs, "https://www.bugsweepingtscm.com/blog/how-to-find-a-listening-device#faq"),
      ],
    },
    content: `
      <div class="answer-box">
        <p><strong>Short answer:</strong> A listening device has to solve one problem you can use against it. Capturing sound is cheap. Getting that sound out of the room is not. A cellular module draws around 1.6 A in a transmit burst against 1.3 mA asleep, so anything transmitting continuously needs mains power. Find the power and you have narrowed the search.</p>
      </div>

      <p>Almost everything written about how to find a listening device starts with a list of hiding places: smoke detectors, plug sockets, pen stands, the underside of a desk. The list is not wrong, but it leaves out the question that decides what is possible. Every covert microphone is limited by the same three things: where its power comes from, how it moves sound out of the room, and how far away it can hear anything worth hearing.</p>

      <p>Those constraints are not negotiable, which is what makes them useful. They tell you how long a device can have been in place, and why the one you are probably imagining, sitting silently in a corner for a year and sending everything to somebody, mostly does not exist.</p>

      <p>A covert listening device, often called an audio bug, is a concealed microphone with a way of delivering what it hears to somebody who is not in the room. The delivery method is what defines it, not the microphone, because microphones are now smaller and cheaper than the batteries that run them. Technical surveillance countermeasures (TSCM) work is the discipline of searching for such devices, and a competent examination is built around the constraints below rather than around a list of furniture. Our national guide to <a href="/blog/bug-sweeping-in-india">bug sweeping in India</a> covers what instruments a professional examination uses and what each of them can reach; this page is about the physics that tells you where to point them.</p>

      <h2>The three ways sound gets out of a room</h2>
      <p>There are only three, and the right search is different for each. This is the distinction consumer advice almost always collapses.</p>
      <div class="table-wrap">
        <table>
          <caption class="sr-only">The three routes audio can take out of a room, what each one requires, and what limits how long it can run</caption>
          <thead>
            <tr><th scope="col">Route out</th><th scope="col">What it must have</th><th scope="col">What limits its endurance</th><th scope="col">Where that pushes it physically</th></tr>
          </thead>
          <tbody>
            <tr><td>Over the mobile network, using a SIM</td><td>A cellular module, a SIM and network coverage where it sits</td><td>Transmitting is the most expensive thing it does. It must sleep, or be called, or be triggered by sound</td><td>Towards mains power, or towards long silences. Deep inside a metal enclosure it loses signal</td></tr>
            <tr><td>Over its own short range radio link</td><td>A transmitter, and a receiver within range that someone maintains</td><td>Continuous transmission drains a small battery in hours. Range falls fast through walls and concrete</td><td>Towards mains power, and towards somewhere a receiver can plausibly sit nearby</td></tr>
            <tr><td>Not at all: recorded to internal memory</td><td>Storage, and someone who can come back for it</td><td>Memory and battery, extended enormously by recording only when it hears sound</td><td>Anywhere, including inside metal. But it must be retrievable by whoever placed it</td></tr>
          </tbody>
        </table>
      </div>
      <p>Read the third row again, because it defeats the most popular shortcut. A device that records to memory emits no signal at all, so no radio check, app or detector can find it by listening for a transmission. It is found physically, or by the instrument classes that respond to electronic components rather than to signals, or not at all.</p>

      <h2>Power is the constraint that decides everything else</h2>
      <p>The single most useful number in this subject is a ratio, and it comes from a manufacturer's own specification rather than from anybody selling detection. Quectel publishes figures for two of its GSM modules, the kind of part a device needs in order to reach the mobile network. For the <a href="https://www.quectel.com/product/m65-m66-compatible-design/" rel="noopener noreferrer" target="_blank">M66 and the M65</a>, the peak current during a transmit burst is 1.6 A and 2.0 A respectively. Their sleep currents are 1.3 mA and 1.2 mA.</p>

      <p>That is a ratio of more than a thousand to one between talking and dozing. Everything these devices do follows from it.</p>

      <p>It is why they sleep by default and wake on a trigger, whether that trigger is an incoming call or a sound in the room. It is why continuous transmission is not a realistic design on a small cell: a device drawing hundreds of milliamps while it transmits empties the sort of battery that fits inside a pen in a matter of hours, not months. And it is why, when somebody describes a device that has been quietly sending audio from their office since last year, the device they are describing is almost certainly plugged into something.</p>

      <p><strong>The practical consequence is a search order.</strong> Mains power changes the arithmetic completely and is the thing to account for first: anything permanently connected to the electrical supply has no endurance limit at all. Next come the objects that are powered intermittently but predictably. Last come true battery devices, which are the most likely to be found by a physical search precisely because they cannot afford to transmit and so must be collected by hand.</p>

      <h2>How far can a listening device actually hear?</h2>
      <p>Less far than the product descriptions claim, and the reason is acoustics rather than electronics. Sound pressure in a free field falls by roughly 6 dB every time the distance from the source doubles. A microphone two metres from a conversation receives a quarter of the sound power of one at one metre; at eight metres it is around 18 dB down.</p>

      <p>The background noise in the room does not behave that way. Air conditioning, traffic through a window, a ceiling fan, computer fans and the building's own services fill the space fairly evenly, so moving the microphone further from the talkers loses their speech without losing any of the noise. Distance costs a listening device signal and gains it nothing.</p>

      <p>India's own noise regulations give a sense of scale for what that background can lawfully be. The Schedule to the <a href="https://cpcb.gov.in/noise-pollution/" rel="noopener noreferrer" target="_blank">Noise Pollution (Regulation and Control) Rules, 2000</a>, notified as S.O. 123(E) on 14 February 2000, sets ambient standards of 65 dB(A) Leq by day in a commercial area and 55 dB(A) in a residential one, with day running from 6.00 a.m. to 10.00 p.m. Those are permitted limits for an area rather than measurements of any particular office, but they describe the environment a concealed microphone has to work in. A device across the room from a normal conversation, in a commercial district, by day, is competing with a great deal.</p>

      <p>So useful devices sit close to where people actually talk. The underside of the table, and the objects that live permanently on a desk, are better positions than a light fitting four metres up.</p>

      <h2>Where to look first when you are trying to find a listening device</h2>
      <p>Order the search by power source, because that is the order in which the possibilities narrow. These are not the likeliest places. They are the places where the constraints above are satisfied.</p>
      <ol>
        <li><strong>Things that are permanently connected to mains power.</strong> Plug-in adaptors and chargers left behind by somebody, extension boards, table lamps, clocks that are wired rather than battery driven, and devices plugged in behind furniture. An object drawing power indefinitely is the only kind that can run indefinitely.</li>
        <li><strong>Things that contain mains power but are not obviously electrical.</strong> Socket and switch plates, light fittings and the back boxes behind them. This is electrical work and not a do-it-yourself inspection: do not open wiring.</li>
        <li><strong>Objects with their own batteries that sit close to where people talk.</strong> Items on or under a meeting table or desk, pen stands, picture frames, air fresheners, soft furnishings on a sofa where people sit, and anything presented as a gift that has no obvious use.</li>
        <li><strong>In a car, whatever has power and sits close to the cabin.</strong> The accessory socket and anything plugged into it, dashboard camera wiring that runs somewhere unexpected, and the cabin trim rather than the underside: a device under the chassis hears road noise. Our guide to <a href="/blog/vehicle-gps-tracking">GPS trackers on vehicles</a> covers location tracking, which has different physics and different hiding places.</li>
        <li><strong>What has changed, and who had access.</strong> An object that was not there last month matters more than any category on this list, and so does who has been alone in the room. Our guide to the <a href="/blog/signs-your-office-is-bugged">signs that an office is bugged</a> explains why that beats any instrument reading, and why the classic symptoms people report are not evidence.</li>
      </ol>

      <h2>The Indian case that shows what an examination actually concludes</h2>
      <p>The most thoroughly examined bugging allegation in recent Indian public life produced no device at all, and it is worth knowing about before you start searching, because it sets a realistic expectation of what a search concludes.</p>

      <p>In 2011 a dispute became public over whether the office of the Union Finance Minister in North Block had been bugged. As <a href="https://www.dnaindia.com/india/report-intelligence-bureau-bug-in-pranab-mukherjee-s-office-is-chewing-gum-1557660" rel="noopener noreferrer" target="_blank">DNA reported on 21 June 2011</a>, the Central Board of Direct Taxes claimed there had been tiny devices in the office which were pasted and then pulled out. The Intelligence Bureau, after what the report describes as an in-depth forensic and technical examination, concluded that the adhesive was chewing gum. Pranab Mukherjee himself said the Intelligence Bureau investigation had found nothing.</p>

      <p>Two government agencies examined the same material in the same rooms and reached incompatible conclusions, and no device was ever recovered. That is not a story about incompetence. It is what this work usually looks like. Residue, marks and objects that are hard to account for are common; recovered devices are rare; and the gap between the two is where almost all honest disagreement in this field lives.</p>

      <p>It also answers the most popular question on this subject more usefully than any photograph could. People ask what a hidden listening device looks like, expecting a picture of a component. The practical answer is that you are not looking for a recognisable gadget. You are looking for an object that has a reason to be powered and no reason to be where it is.</p>

      <h2>What the law reaches, and what it does not</h2>
      <p>The legal position on audio is not the one most pages assume, and the difference matters if you are deciding whether to involve the police.</p>

      <p>The privacy provisions quoted most often in Indian coverage of hidden devices are built around images: the capture of visual material in circumstances violating privacy, and the specified private acts involving a woman, which our guide to <a href="/blog/how-to-detect-hidden-cameras">detecting hidden cameras</a> sets out with their separate penalty ranges. A microphone recording a boardroom fits neither comfortably, which is why advice written for cameras transfers badly to audio.</p>

      <p>Where a device carries a SIM, the provision to read is section 42 of the <a href="https://www.dot.gov.in/acts-policies/telecommunications-act-2023" rel="noopener noreferrer" target="_blank">Telecommunications Act, 2023</a>. Section 42(3) makes it an offence to obtain a SIM or other telecommunication identifier by fraud, cheating or personation, and separately to knowingly possess radio equipment using an unauthorised or tampered identifier: up to three years, a fine up to fifty lakh rupees, or both. Section 42(2) deals with unlawfully intercepting a message, with a fine ceiling of two crore rupees.</p>

      <p>Two details matter more than the penalty. First, the SIM is the weak point: it has to be registered to somebody, and a SIM obtained in another person's name is itself the offence under section 42(3), independent of anything the device recorded. Second, section 42(7) makes every offence under that section cognizable and non-bailable. A cognizable offence is one the police can register and investigate without a magistrate's prior order, which is the practical difference between a complaint that moves and one that does not.</p>

      <p>Section 42 came into force on 26 June 2024 under notification S.O. 2408(E). Other parts of the same Act have had their own separate commencement history, so do not assume the whole statute switched on at once, and how any of it applies to your situation is a question for a lawyer. On using a recording as evidence, our guide to <a href="/blog/corporate-espionage-india">corporate espionage in India</a> covers the 2024 change in the electronic evidence rules, and recordings made by a participant in their own conversation are dealt with in our guide to <a href="/blog/is-someone-monitoring-your-phone">phone monitoring</a>.</p>

      <h2>If you think you have found one</h2>
      <p>Safety first, evidence second. Neither requires you to stay in the room or confront anybody.</p>
      <ol>
        <li><strong>If you believe you are in immediate danger, call 112.</strong> Nothing below this matters more than that.</li>
        <li><strong>Do not dismantle it, unplug it or take it apart.</strong> Note exactly where it is. Photograph it in place, from a distance and then closer, without handling it.</li>
        <li><strong>Leave the room to make calls.</strong> If a device is live, a conversation about what to do next is the one conversation you would least like it to carry.</li>
        <li><strong>Report it to the local police</strong> for a suspected offence. Cybercrime complaints, including the publication of private material, can be filed at <a href="https://cybercrime.gov.in" rel="noopener noreferrer" target="_blank">cybercrime.gov.in</a>, which routes to the relevant state police. A portal complaint does not automatically become an FIR.</li>
        <li><strong>Write down who had access</strong> to the space, and when, before memory blurs. This is the material that actually supports a complaint.</li>
      </ol>
      <p>If the suspected device is connected to someone you live with or share accounts with, seek help through a device and a network you believe is safe, and do not remove or reset anything first. Removal can alert the person and destroy what a complaint would rest on.</p>

      <h2>What an examination can and cannot establish</h2>
      <p>An examination reports findings within the areas it accessed, the methods it used, the conditions it worked in and the time it spent. That scope is the honest limit of the result.</p>

      <p>It can establish that nothing was transmitting in the bands examined while the examiner was present, and report what was physically found in the places opened.</p>

      <p>It cannot establish that a device recording to internal memory is absent, because such a device emits nothing. Nor can it establish that a device dormant during the visit is absent, since voice-triggered and call-activated devices are silent almost all the time, which is the direct consequence of the power ratio at the top of this page. And it says nothing about areas not accessed, or about a compromised phone or laptop in the room, which is a different problem with a different answer. If the worry is advertising rather than a planted device, our guide to <a href="/blog/is-my-phone-listening-to-me">whether your phone is listening to you</a> sets out what the research and the regulators actually found.</p>

      <p>Finding nothing does not prove that nothing is there, and no examination promises complete detection or future protection. Where a space genuinely needs assurance over time rather than once, the question is a programme rather than a single visit, which our guide to <a href="/blog/how-often-should-a-business-sweep-for-bugs">how often a business should sweep for bugs</a> addresses directly.</p>

      <h2>Frequently asked questions</h2>
${faqHtml(listeningDeviceFaqs)}
    `,
  },
  {
    slug: "unknown-tracker-detected",
    title: "Unknown Tracker Detected: What the Alert Means, and What to Do Next",
    seoTitle: "Unknown Tracker Detected? What the Alert Means in India",
    metaDescription:
      "Your phone says an unknown tracker is moving with you. What the alert proves, what the published specification actually guarantees, and the order to act in.",
    excerpt:
      "An alert tells you something is there. It does not tell you where, or for how long. In India's first reported AirTag stalking case the first alert came in May and the tag was found at the end of August, glued under a seat cover.",
    date: "2026-11-03",
    readTime: "12 min read",
    category: "Bug Sweep Tips",
    coverImage: "/images/blogs/unknown-tracker-detected.webp",
    ogImage: "/images/blogs/unknown-tracker-detected.png",
    coverImageAlt:
      "Unknown Tracker Detected guide cover: concentric red signal rings radiating from a small tag on a dark grid background",
    publishedBy: "BugSweepingTSCM",
    cta: {
      heading: "Found a tracker, or cannot find one you were warned about?",
      text: "If your phone keeps alerting and a search has turned up nothing, a private consultation can help you work out whether a physical examination is warranted and what to preserve for a complaint. Please get in touch from a phone and a network you trust.",
      label: "Request a consultation on WhatsApp",
    },
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://www.bugsweepingtscm.com/blog/unknown-tracker-detected#webpage",
          url: "https://www.bugsweepingtscm.com/blog/unknown-tracker-detected",
          name: "Unknown Tracker Detected? What the Alert Means in India",
          inLanguage: "en-IN",
          isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" },
          breadcrumb: { "@id": "https://www.bugsweepingtscm.com/blog/unknown-tracker-detected#breadcrumb" },
          primaryImageOfPage: { "@id": "https://www.bugsweepingtscm.com/blog/unknown-tracker-detected#primaryimage" },
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
          "@type": "ImageObject",
          "@id": "https://www.bugsweepingtscm.com/blog/unknown-tracker-detected#primaryimage",
          url: "https://www.bugsweepingtscm.com/images/blogs/unknown-tracker-detected.png",
          width: 1200,
          height: 630,
        },
        {
          "@type": "BlogPosting",
          "@id": "https://www.bugsweepingtscm.com/blog/unknown-tracker-detected#article",
          headline: "Unknown Tracker Detected: What the Alert Means, and What to Do Next",
          description:
            "Your phone says an unknown tracker is moving with you. What the alert proves, what the published specification actually guarantees, and the order to act in.",
          datePublished: "2026-11-03",
          image: { "@id": "https://www.bugsweepingtscm.com/blog/unknown-tracker-detected#primaryimage" },
          mainEntityOfPage: { "@id": "https://www.bugsweepingtscm.com/blog/unknown-tracker-detected#webpage" },
          inLanguage: "en-IN",
          author: { "@id": "https://www.bugsweepingtscm.com/#organization" },
          publisher: { "@id": "https://www.bugsweepingtscm.com/#organization" },
          about: [
            { "@type": "Thing", name: "Bluetooth item tracker" },
            { "@type": "Thing", name: "Unwanted tracking detection" },
          ],
          isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" },
        },
        {
          "@type": "Organization",
          "@id": "https://www.bugsweepingtscm.com/#organization",
          name: "BugSweepingTSCM",
          url: "https://www.bugsweepingtscm.com",
          logo: "https://www.bugsweepingtscm.com/images/logo/bug-sweep.png",
          email: "info@advancedetectiveagency.com",
          telephone: "+91-8882732221",
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://www.bugsweepingtscm.com/blog/unknown-tracker-detected#breadcrumb",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.bugsweepingtscm.com" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.bugsweepingtscm.com/blog" },
            { "@type": "ListItem", position: 3, name: "Unknown Tracker Detected" },
          ],
        },
        faqJsonLd(unknownTrackerFaqs, "https://www.bugsweepingtscm.com/blog/unknown-tracker-detected#faq"),
      ],
    },
    content: `
      <div class="answer-box">
        <p><strong>Short answer:</strong> An unknown tracker alert means a Bluetooth tag separated from its owner has been travelling with you. It does not tell you where the tag is, and it does not tell you how long it has been there. The published specification behind these alerts sets no deadline for how quickly you must be warned, and in India's first reported case the alerts began in May and the tag was found at the end of August.</p>
      </div>

      <p>This page is for the moment your phone buzzes with something like <em>AirTag Found Moving With You</em> or <em>Unknown Accessory Detected</em>. That alert is a genuinely useful piece of engineering, and almost everything written about it in India either reprints Apple's steps or sells a detector. Neither tells you the two things that decide what you should do: what the alert actually proves, and what it is incapable of telling you.</p>

      <p>A Bluetooth item tracker is a coin-sized tag with no SIM and no satellite receiver. It does not know where it is. It advertises a short radio identifier, and any passing phone on the right network relays that identifier with its own location to the tag's owner. That is why the tag works at long range on a battery that lasts a year, and it is also why switching off your own phone's radios changes nothing. The tag is borrowing strangers' phones, not yours. A cellular GPS tracker is a different device with a different detection problem, and our guide to <a href="/blog/vehicle-gps-tracking">GPS trackers on vehicles</a> covers that one.</p>

      <h2>What each alert actually says, and what it means</h2>
      <p>The exact wording matters, because the different alerts are not interchangeable and one of them is widely misreported.</p>
      <div class="table-wrap">
        <table>
          <caption class="sr-only">Unknown tracker alert wordings and what each one indicates</caption>
          <thead>
            <tr><th scope="col">What you see</th><th scope="col">What it indicates</th></tr>
          </thead>
          <tbody>
            <tr><td>AirTag Found Moving With You</td><td>An AirTag, separated from its owner, has been travelling with you.</td></tr>
            <tr><td>Unknown Accessory Detected</td><td><strong>Not an AirTag.</strong> Apple states this wording covers AirPods and other accessories, where the Find My app could not connect to the item or its server.</td></tr>
            <tr><td>AirPods Detected, or [Product Name] Found Moving With You</td><td>A named Find My accessory or a third party tag that identified itself.</td></tr>
            <tr><td>Your location can be seen by the owner of this AirTag</td><td>Shown after tapping through. This is the sentence the complainant in the Ahmedabad case saw.</td></tr>
            <tr><td>Android: an unknown tracker alert, or a manual scan result</td><td>Android 6 and later. Google says the alerts work with Find Hub network compatible tags, headphones and Apple AirTags.</td></tr>
          </tbody>
        </table>
      </div>
      <p><a href="https://support.apple.com/en-in/HT212227" rel="noopener noreferrer" target="_blank">Apple's guidance on these alerts</a> also sets out what has to be true before one reaches you at all on an iPhone: iOS 17.5 or later for the full set of compatible trackers, Location Services and Bluetooth on, tracking notifications allowed, and Airplane Mode off. A phone that someone has quietly configured for you may not be a phone that will warn you.</p>

      <h2>India's first reported case shows the gap between the alert and the answer</h2>
      <p>In September 2023 the <a href="https://www.deccanherald.com/india/gujarat/ahmedabad-woman-stalked-using-airtag-said-to-be-first-such-case-in-country-2669953" rel="noopener noreferrer" target="_blank">Deccan Herald reported</a> what was described as India's first case of stalking using an AirTag. The Ahmedabad cyber cell registered an FIR against the complainant's former partner under the stalking provision of the Indian Penal Code and section 66E of the Information Technology Act. The detail worth reading closely is the timeline.</p>
      <div class="table-wrap">
        <table>
          <caption class="sr-only">Timeline of the Ahmedabad AirTag case as reported</caption>
          <thead>
            <tr><th scope="col">When</th><th scope="col">What happened</th></tr>
          </thead>
          <tbody>
            <tr><td>May</td><td>The complainant, using an iPhone 13 Pro Max, saw the alert "AirTag Found Moving With You" for the first time.</td></tr>
            <tr><td>Days later</td><td>The same alert while driving from home to the office.</td></tr>
            <tr><td>July</td><td>She told Cyber Cell officials that her driver and her daughter were receiving similar alerts on their phones.</td></tr>
            <tr><td>29 August</td><td>Alerts again on the way to the office. On one occasion her driver tapped the notification and saw "Your location can be seen by the owner of this AirTag".</td></tr>
            <tr><td>Afterwards</td><td>She went to a car service station to locate the device. Police said the AirTag was found <strong>glued under the seat cover behind the driver's seat</strong>.</td></tr>
          </tbody>
        </table>
      </div>
      <p>Three things follow from that account, and they are the reason this page exists.</p>
      <p>The <strong>alert system worked and it still took months</strong>. The warning is not the discovery. It tells you something is present; finding it is a separate physical job that the phone cannot do for you once the tag is under upholstery.</p>
      <p>The <strong>alerts followed the car, not the person</strong>. Her driver and daughter received them too. If several people who share a vehicle are being warned and one person is not, that pattern is itself information about where the tag is.</p>
      <p>And the tag was <strong>glued under a seat cover</strong>. The standard advice to check your jacket pockets and the outer compartments of your bag is sound advice for a tag dropped into a handbag. It is useless against a tag fixed inside a car's interior, which is why that search ended at a service station.</p>

      <h2>What the published specification actually requires</h2>
      <p>Apple and Google wrote a joint specification for this, <a href="https://datatracker.ietf.org/doc/html/draft-ledvina-apple-google-unwanted-trackers-03" rel="noopener noreferrer" target="_blank">Detecting Unwanted Location Trackers</a>, whose current revision is dated 25 June 2026. It is worth knowing what it guarantees, because the guarantees are narrower than the coverage suggests.</p>
      <div class="table-wrap">
        <table>
          <caption class="sr-only">Requirements in the Detecting Unwanted Location Trackers draft specification</caption>
          <thead>
            <tr><th scope="col">Requirement</th><th scope="col">What the draft says</th></tr>
          </thead>
          <tbody>
            <tr><td>A speaker</td><td>The accessory MUST include a sound maker to play sound when in the separated state.</td></tr>
            <tr><td>How loud</td><td>MUST emit a minimum of 60 Phon peak loudness, as defined by ISO 532-1:2017.</td></tr>
            <tr><td>How long it sounds</td><td>Minimum 5 seconds, maximum 30 seconds, with 12 seconds recommended.</td></tr>
            <tr><td>When it counts as separated</td><td>The preferred trigger is physical separation from the owner's device for more than 30 minutes.</td></tr>
            <tr><td>How to switch it off</td><td>Disablement SHALL be done by a physical action, for example a button press, a gesture or removing the battery.</td></tr>
            <tr><td>How fast you must be told</td><td><strong>Nothing. The draft sets no deadline for how quickly a platform must notify you.</strong></td></tr>
          </tbody>
        </table>
      </div>
      <p>Two honest caveats belong with that table. The first is that this document is an <strong>individual Internet-Draft with Informational intended status, not endorsed by the IETF and carrying no formal standing</strong>. It is an industry agreement between two companies, published in the IETF's format, and it is often described as a standard when it is not one.</p>
      <p>The second is the last row. Every requirement about the tag is specific and measurable, and the one thing a worried person actually wants, a bound on how long a tracker can follow them before their phone says so, is the one thing nobody has committed to. The Ahmedabad timeline is what that absence looks like in practice.</p>

      <h2>The Android problem nobody states plainly</h2>
      <p>According to <a href="https://gs.statcounter.com/os-market-share/mobile/india" rel="noopener noreferrer" target="_blank">StatCounter's figures for October 2026</a>, Android holds about 94.8 per cent of the Indian mobile operating system market and iOS about 5.1 per cent. Almost every phone in this country is an Android phone.</p>
      <p>Android is not left out of this: unknown tracker alerts run from Android 6 upwards, and there is a manual scan under Settings, then Safety and Emergency, then Unknown tracker alerts, then Scan now, which Google says takes about ten seconds. That manual scan is genuinely useful and almost nobody knows it is there.</p>
      <p>But the strongest tool is not available. Apple's Precision Finding, which walks you towards an AirTag by distance and direction rather than by listening for a chime, requires an iPhone with Ultra Wideband, and Apple limits it to AirTags and the AirPods Pro 3 charging case. On Android you can make the tag beep and then search by ear. So the country where roughly nineteen phones in twenty are Android is the country working with the weaker half of the toolset, against a tag that may be glued under upholstery where a 12 second chime is muffled.</p>
      <p>Coverage has gaps in the other direction too. Google's alerts are scoped to Find Hub network compatible tags, headphones and Apple AirTags, which is not every tracker sold. Silence from your phone is not a clean bill of health.</p>

      <h2>Before you touch it: the order that matters</h2>
      <p>Most guidance jumps straight to disabling the tracker. For someone who has found a neighbour's lost tag in their shopping, that is fine. For someone who suspects a person, it is the wrong first move, and the reason is the same one that governs <a href="/blog/is-someone-monitoring-your-phone">suspected phone monitoring</a>: an action the other person can notice is a decision, not a precaution.</p>
      <p>Two facts make the ordering clear, and both come from the platforms themselves.</p>
      <p><strong>Playing the sound does not tell the owner anything.</strong> <a href="https://support.google.com/android/answer/13658562" rel="noopener noreferrer" target="_blank">Google states</a> that you will not notify the owner if you play the sound. Locating the tag is therefore a quiet step, and you can take it before deciding anything else.</p>
      <p><strong>Disabling it is visible in effect.</strong> Turning the tag off stops future location updates, which is exactly what someone watching the dots will see, and Google notes the owner may still see its last recorded location. If that last recorded location is your home, switching the tag off at home achieves very little and may announce that you have found it.</p>
      <p>So the order is: stay safe, locate, record, then decide. If you believe you are in immediate danger, call <strong>112</strong>. Apple's own guidance says that if you cannot find the item and feel unsafe, go to a safe public place and contact law enforcement. Our <a href="/blog/is-someone-monitoring-your-phone">phone monitoring guide</a> sets out how to seek help from a device the other person has never had access to, which applies here too.</p>

      <h2>What to capture before anything moves</h2>
      <p>This is the most useful paragraph on the page for anyone who may end up making a complaint, and it is missing from almost every Indian article on the subject.</p>
      <p>If the tag is an AirTag, hold the top of any NFC capable phone, Android included, against its white side and tap the notification that appears. A web page opens showing the AirTag's <strong>serial number and the last four digits of the phone number of the person who registered it</strong>. Screenshot that page. Apple says that where an item is found to be unlawfully tracking someone, law enforcement can request the available information from Apple, and that they may need the item itself and its serial number. Google gives the same advice in shorter form: save the tracker's information, including screenshots, serial numbers and owner details.</p>
      <p>Photograph the tag where you found it before removing it, with enough of the surroundings to show its position, and note the date and time. Do not dismantle it. On an iPhone you can also review what has already been flagged: open Find My, tap Items, then Unknown Items Detected With You.</p>
      <p>One gap to be aware of while you do this. Apple's support page lists victim support organisations for the United States, the United Kingdom and Australia. <strong>It names none for India.</strong> The routes that do exist here are 112 for immediate danger, a complaint to the local police, and the national cybercrime portal at <a href="https://cybercrime.gov.in" rel="noopener noreferrer" target="_blank">cybercrime.gov.in</a> where images or recordings may have been shared.</p>

      <p>Some readers arrive here from the opposite direction, already convinced they are being followed rather than tracked. Our guide to <a href="/blog/how-to-tell-if-someone-is-following-you">telling whether someone is following you</a> separates the two, because being found is far more often explained by information than by pursuit.</p>

      <h2>Where these tags actually turn up</h2>
      <p>Search in the order of how hard a place is to reach, because that is the order a person planting a tag thinks in too.</p>
      <p>On a person or their belongings: the lining and outer pockets of a bag, a jacket hung in a cloakroom, a laptop sleeve, a child's school bag, the inside of a frequently carried box or case. These are the places Apple's own instruction to check your belongings is written for, and a 12 second chime is usually audible in them.</p>
      <p>In a vehicle the problem changes completely. The Ahmedabad tag was inside the cabin under seat upholstery, not clamped to the chassis underneath, which is where most guides tell people to look. Seat covers, boot lining, the spare wheel well, under floor mats and the glovebox are all cabin spaces where a tag is hidden from view and its sound is deadened. Our <a href="/blog/vehicle-gps-tracking">vehicle guide</a> sets out a full search and explains why the cellular trackers used in the more serious Indian cases will not trigger any phone alert at all.</p>

      <h2>What a check can and cannot establish</h2>
      <p>An alert that stops does not mean a tag has gone, and a phone that has never alerted does not mean nothing is there: the alert covers one family of Bluetooth tags on supported platforms, and nothing else. A physical search reports what was found in the places examined, by the methods used, at the time. It cannot establish that you have never been tracked, and it cannot prevent a new tag being placed tomorrow. A professional examination widens the methods and the access, and our <a href="/blog/bug-sweeping-in-india">national guide to bug sweeping in India</a> explains what instruments add and what they do not, but the limitation holds there too: finding nothing is not the same statement as there being nothing.</p>

      <h2>Frequently asked questions</h2>
${faqHtml(unknownTrackerFaqs)}
    `,
  },
  {
    slug: "hidden-cameras-in-hotel-rooms-and-pgs",
    title: "Hidden Cameras in Hotel Rooms, PGs and Rented Flats: Who Actually Puts Them There",
    seoTitle: "Hidden Camera in a Hotel Room: What Actually Works in India",
    metaDescription:
      "Hidden camera in a hotel room, PG or rented flat? In every Indian case we could verify, a guest or fellow resident placed it, not the operator. What to check.",
    excerpt:
      "In the Indian hotel, paying guest and hostel cases that can actually be sourced, the camera was left by a previous guest or a fellow resident, not by the operator. That changes where to look, what you are allowed to touch, and who is answerable.",
    date: "2026-10-31",
    readTime: "11 min read",
    category: "Bug Sweep Tips",
    coverImage: "/images/blogs/hidden-cameras-in-hotel-rooms-and-pgs.webp",
    ogImage: "/images/blogs/hidden-cameras-in-hotel-rooms-and-pgs.png",
    coverImageAlt:
      "Hidden cameras in hotel rooms guide cover: a dark room outline with a door key tag and a single red lens glint above the bathroom fittings",
    publishedBy: "BugSweepingTSCM",
    cta: {
      heading: "Not sure whether what you found is a camera?",
      text: "If you have found something in a room you are staying in and you are not sure what it is, a private consultation can help you work out whether it needs a professional examination and what to preserve in the meantime. Please get in touch from a phone and a network you trust.",
      label: "Request a consultation on WhatsApp",
    },
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://www.bugsweepingtscm.com/blog/hidden-cameras-in-hotel-rooms-and-pgs#webpage",
          url: "https://www.bugsweepingtscm.com/blog/hidden-cameras-in-hotel-rooms-and-pgs",
          name: "Hidden Camera in a Hotel Room: What Actually Works in India",
          inLanguage: "en-IN",
          isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" },
          breadcrumb: { "@id": "https://www.bugsweepingtscm.com/blog/hidden-cameras-in-hotel-rooms-and-pgs#breadcrumb" },
          primaryImageOfPage: { "@id": "https://www.bugsweepingtscm.com/blog/hidden-cameras-in-hotel-rooms-and-pgs#primaryimage" },
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
          "@type": "ImageObject",
          "@id": "https://www.bugsweepingtscm.com/blog/hidden-cameras-in-hotel-rooms-and-pgs#primaryimage",
          url: "https://www.bugsweepingtscm.com/images/blogs/hidden-cameras-in-hotel-rooms-and-pgs.png",
          width: 1200,
          height: 630,
        },
        {
          "@type": "BlogPosting",
          "@id": "https://www.bugsweepingtscm.com/blog/hidden-cameras-in-hotel-rooms-and-pgs#article",
          headline: "Hidden Cameras in Hotel Rooms, PGs and Rented Flats: Who Actually Puts Them There",
          description:
            "Hidden camera in a hotel room, PG or rented flat? In every Indian case we could verify, a guest or fellow resident placed it, not the operator. What to check.",
          datePublished: "2026-10-31",
          image: { "@id": "https://www.bugsweepingtscm.com/blog/hidden-cameras-in-hotel-rooms-and-pgs#primaryimage" },
          mainEntityOfPage: { "@id": "https://www.bugsweepingtscm.com/blog/hidden-cameras-in-hotel-rooms-and-pgs#webpage" },
          inLanguage: "en-IN",
          author: { "@id": "https://www.bugsweepingtscm.com/#organization" },
          publisher: { "@id": "https://www.bugsweepingtscm.com/#organization" },
          about: [
            { "@type": "Thing", name: "Hidden camera detection" },
            { "@type": "Thing", name: "Accommodation privacy" },
          ],
          isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" },
        },
        {
          "@type": "Organization",
          "@id": "https://www.bugsweepingtscm.com/#organization",
          name: "BugSweepingTSCM",
          url: "https://www.bugsweepingtscm.com",
          logo: "https://www.bugsweepingtscm.com/images/logo/bug-sweep.png",
          email: "info@advancedetectiveagency.com",
          telephone: "+91-8882732221",
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://www.bugsweepingtscm.com/blog/hidden-cameras-in-hotel-rooms-and-pgs#breadcrumb",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.bugsweepingtscm.com" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.bugsweepingtscm.com/blog" },
            { "@type": "ListItem", position: 3, name: "Hidden Cameras in Hotel Rooms, PGs and Rented Flats" },
          ],
        },
        faqJsonLd(hotelCameraFaqs, "https://www.bugsweepingtscm.com/blog/hidden-cameras-in-hotel-rooms-and-pgs#faq"),
      ],
    },
    content: `
      <div class="answer-box">
        <p><strong>Short answer:</strong> In the Indian cases that can actually be sourced, a hidden camera in a hotel room, paying guest house or hostel was placed by a previous guest or by a fellow resident, not by the operator. There is no reliable figure for how often this happens. And in a room you do not control, the checks worth doing are optical and physical, not network scans.</p>
      </div>

      <p>The question people actually type is some version of "chances of a hidden camera in a hotel room". It has no honest numerical answer, and the pages that answer it anyway are quoting a number that was never about hotels. Meanwhile the two things that would genuinely change what a worried guest does are missing almost everywhere: who puts these devices there, and what you are actually allowed to touch in a room that belongs to somebody else.</p>

      <p>This page is about rooms you do not own: hotel rooms, properties booked through an aggregator, homestays, paying guest accommodation, hostels and rented flats. The detection methods themselves, and the two Indian criminal provisions that protect different people, are covered in detail in our guide on <a href="/blog/how-to-detect-hidden-cameras">how to detect hidden cameras</a>. What follows is only what changes when the room is not yours.</p>

      <p>A hidden camera in rented accommodation, in the sense people mean when they search for it, is a camera concealed in a fitting or an object so the occupant does not know it is recording. Two features decide everything that follows. The first is storage: a camera that writes to a memory card inside itself can keep its radio switched off entirely, so it joins no network and emits nothing. The second is who placed it. In accommodation, the person with the best access is often not the operator. A guest who books a room can leave a device behind and come back for it. A resident of a paying guest house shares the washroom with the people being recorded. Both patterns are in the Indian record, and they are the ones that actually happened.</p>

      <h2>Who actually placed the camera in the Indian cases that can be checked</h2>
      <p>We looked for reported Indian incidents where the facts were specific enough to say who was responsible. Four are set out below. The pattern across them is the single most useful thing on this page.</p>
      <div class="table-wrap">
        <table>
          <caption class="sr-only">Reported Indian hidden camera incidents in rented accommodation, and who placed the device</caption>
          <thead>
            <tr><th scope="col">Where and when</th><th scope="col">What was reported</th><th scope="col">Who placed it</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>Hotel room, <a href="/locations/noida">Noida</a>, October 2022</td>
              <td>Two men booked the room, left a camera, checked out, then rebooked a week later to collect it, and attempted to extort the couple they had filmed. Our <a href="/blog/how-to-detect-hidden-cameras">hidden camera guide</a> tells this case in full.</td>
              <td>Previous guests</td>
            </tr>
            <tr>
              <td>Paying guest house, Sector 22, <a href="/locations/chandigarh">Chandigarh</a>, November 2023</td>
              <td>A device was found on top of the geyser in the washroom shared by women tenants on the top floor. Another tenant noticed it, checked what it was, and told the landlord, who called the police.</td>
              <td>A tenant who had moved in five days earlier, at the instruction of a man who did not live there</td>
            </tr>
            <tr>
              <td>Women's hostel, Nagamangalam, Hosur, November 2025</td>
              <td>A camera was found in a bathroom in an eleven floor hostel housing over six thousand women employees. Hundreds protested. Two arrests followed within days.</td>
              <td>A resident of the hostel, at the urging of a friend from outside</td>
            </tr>
            <tr>
              <td>Engineering college hostel, Krishna district, Andhra Pradesh, August 2024</td>
              <td>Students alleged cameras in a washroom and protested from midnight. The Chief Minister ordered an enquiry, a minister, the District Collector and the Superintendent of Police visited, and the suspects' devices were examined in front of students and staff.</td>
              <td>No camera was found</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>In not one of these cases was the operator the person who placed the device. The hotel did not install it in Noida; the landlord called the police in Chandigarh; the hostel's own residents were both the victims and, in two cases, the person charged.</p>
      <p>One detail from the Noida case deserves its own sentence, because it shows how these matters actually reach a police station. The first information report was registered under the Indian Penal Code provisions on cheating, extortion, criminal intimidation, forgery and criminal conspiracy, together with section 120B. <strong>Not voyeurism.</strong> The filming became a case because the footage was used to demand money. That is worth knowing before anyone assumes a complaint will be framed the way they expect.</p>
      <p>The practical consequence is a change of emphasis. A camera left by a guest has to be retrievable without tools, because the person who left it has to come back as a paying customer and pick it up. That points at objects and surfaces rather than at the building: on top of things, inside items that can be lifted, among the room's own clutter. And it means the operator is a party you are informing, not automatically the party at fault.</p>

      <h2>How likely is this, really</h2>
      <p>The figure that circulates in almost every article on this subject is eleven per cent. We traced it. It comes from a <strong>2019 survey by IPX1031</strong>, which reported that fifty eight per cent of participants were worried about hidden cameras inside Airbnbs and that eleven per cent said they had found a hidden camera inside an Airbnb property. The survey produced <strong>no hotel figure at all</strong>. Several later reports restate the eleven per cent as hotel rooms, which the original does not support. The same report that carried the survey also quoted a former police officer saying that to find cameras inside a hotel room "is not common practice".</p>
      <p>Two other numbers in wide circulation could not be traced to any published study: a claim that one traveller in four has found a hidden camera, and a claim that more than sixty per cent of cameras found in hotel rooms are in the bathroom. We could not locate the research behind either.</p>
      <p>And the Andhra Pradesh case in the table above is a reminder of the other direction this can run. A serious allegation, mass protest, a Chief Minister's enquiry, an inspection, and the official conclusion that no hidden cameras were found in the hostel and no evidence of the allegations was found.</p>
      <p>So the honest position is this. The documented cases are real, and for the people involved they are grave. None of the available numbers measures how often this happens in Indian accommodation, because no such study appears to exist. Anyone quoting you a percentage for Indian hotels is quoting something that has not been measured.</p>

      <h2>One test that embarrassed the standard advice</h2>
      <p>In January 2024 CNBC ran a test that is more useful than any of the surveys. Twenty seven cameras were hidden in a house, and an examiner searched for them using five methods. He found seventeen of the twenty seven in total. The breakdown is the interesting part.</p>
      <div class="table-wrap">
        <table>
          <caption class="sr-only">Cameras found by each detection method in the CNBC test of January 2024, out of twenty seven hidden</caption>
          <thead>
            <tr><th scope="col">Method</th><th scope="col">Cost, as reported</th><th scope="col">Cameras found</th></tr>
          </thead>
          <tbody>
            <tr><td>Naked eye</td><td>nothing</td><td>1</td></tr>
            <tr><td>Phone: Wi-Fi scanning app plus the torch</td><td>about 25 dollars a year</td><td>3</td></tr>
            <tr><td>Radio frequency detector</td><td>100 to 200 dollars</td><td><strong>0</strong></td></tr>
            <tr><td>Basic lens detector</td><td>about 50 dollars</td><td>2</td></tr>
            <tr><td>Advanced lens detector</td><td>about 400 dollars</td><td><strong>11</strong></td></tr>
          </tbody>
        </table>
      </div>
      <p>Three findings matter for a hotel room. The radio frequency detector, the product category marketed as the serious option, found nothing, and the report notes that it beeped constantly, including in rooms with no cameras. In a hotel, where dozens of rooms are radiating Wi-Fi through the walls on both sides of you, that failure mode gets worse rather than better.</p>
      <p>The Wi-Fi scanning app listed twenty two connected devices and flagged no cameras. And the single best performer was the optical method: the advanced lens detector found more cameras than every other method combined. An optical check does not care whether a camera is transmitting, because it is looking for the one thing every camera must have, which is a lens pointing at you.</p>
      <p>The limitation has to be stated with the result. This is one test, in one house, by one examiner, with cameras placed deliberately by people who knew a search was coming. It does not establish detection rates in general. What it does establish is that the cheapest advice is weaker than it sounds, and that the method people are least often told to use is the one that worked.</p>

      <h2>Why the Wi-Fi scan advice fails hardest in a hotel</h2>
      <p>The most repeated tip on this subject is to install a network scanner and look for a camera on the Wi-Fi. On hotel guest Wi-Fi it is close to useless, for a reason that has nothing to do with cameras.</p>
      <p>Guest wireless networks are normally configured so that the devices on them cannot see each other. <a href="https://support.ruckuswireless.com/articles/000014743" rel="noopener noreferrer" target="_blank">Ruckus's documentation</a> describes wireless client isolation as preventing wireless clients from communicating with each other directly, while leaving the gateway, DHCP, DNS and the internet reachable, and notes that isolation of ordinary unicast traffic is enabled by default. Shared guest Wi-Fi in a hotel or a hostel is precisely the deployment that setting exists for. A scanning app on that network may enumerate nothing at all, and the emptiness tells you nothing about the room.</p>
      <p>Two further gaps sit behind that one. A camera need not be on the guest network: in the CNBC test the cameras were on a separate wireless network, which is why the app could register that devices existed without locating any camera. And a camera need not be on a network at all. A device recording to a memory card is invisible to every network method there is, and that is the type the Chandigarh case involved, since somebody had to physically return for it.</p>
      <p>Treat a network scan as something that can only ever add information, never remove a worry. A clean scan in a hotel room means almost nothing.</p>

      <h2>What you can and cannot do in a room that is not yours</h2>
      <p>Most detection advice is written as though the reader owns the room. In rented accommodation, half of it is either impossible or inadvisable.</p>
      <div class="table-wrap">
        <table>
          <caption class="sr-only">What is reasonable to do in your own home compared with a hotel, paying guest or rented room</caption>
          <thead>
            <tr><th scope="col">Action</th><th scope="col">Your own home</th><th scope="col">A room you are staying in</th></tr>
          </thead>
          <tbody>
            <tr><td>Look carefully, including at high and awkward places</td><td>Yes</td><td>Yes</td></tr>
            <tr><td>Lights off, torch swept slowly across glass and lenses</td><td>Yes</td><td>Yes</td></tr>
            <tr><td>Lift or move a loose object to look behind or underneath</td><td>Yes</td><td>Reasonable</td></tr>
            <tr><td>Unscrew or open a fixture, vent, smoke detector or fitting</td><td>Your property, your call</td><td>No</td></tr>
            <tr><td>Dismantle a suspected device</td><td>Inadvisable</td><td>No</td></tr>
            <tr><td>Remove the device from the room</td><td>Inadvisable</td><td>No</td></tr>
          </tbody>
        </table>
      </div>
      <p>The reason is not only that the fittings belong to someone else. A dismantled device is a damaged exhibit. In the Chandigarh case the investigation went on to seize phones in order to establish whether data had been deleted, and to obtain shop footage of the camera being bought. Both of those lines of enquiry start from a device and a scene that arrived intact.</p>
      <p>That same case also suggests where to actually point the torch. The device sat <strong>on top of the geyser</strong> in a shared washroom, and a tenant found it with no equipment whatsoever. High bathroom fittings are the right class of place to examine: they are above standing eye level, they are never cleaned, they already carry brackets and wiring so one more small object does not look wrong, and an item left there is easy for the person who left it to retrieve. The geyser, the exhaust fan, the cistern and the shelf above the mirror are worth more of your attention than the mirror itself.</p>

      <h2>Who is answerable depends on how you booked</h2>
      <p>One Indian city has changed that calculation by putting a duty on the premises directly: our guide to <a href="/blog/hidden-cameras-in-hyderabad">hidden cameras in Hyderabad</a> covers the detector and self-inspection requirements placed on hotels, malls and hostels there.</p>
      <p>This is where the three kinds of accommodation genuinely diverge, and almost nobody writing about hotel cameras in India mentions it.</p>
      <p><strong>A property booked on Airbnb</strong> is covered by a platform rule you can point at. Airbnb's own help page states that it does not allow hosts to have security cameras or recording devices that monitor indoor spaces, that this applies "even if these devices are turned off", and that "Hidden cameras have always been prohibited and will continue to be prohibited". Exterior cameras are permitted but their location must be disclosed in the listing. Those rules took effect on <strong>30 April 2024</strong>. A host who breaks them risks the listing or the account.</p>
      <p><strong>A hotel booked through an aggregator</strong> gives a different answer. In the Noida case, a source told PTI that the company does not operate any hotels or guest houses, and that it only lists verified properties on its platform and provides technology support to them. Whether that is a sufficient answer in law is not something this page can settle, but it is the stated position, and it is plainly not the same undertaking Airbnb has given.</p>
      <p><strong>A hotel booked directly</strong> leaves the consumer route largely untested. We searched for an Indian consumer forum decision on a hidden camera in a hotel room and <strong>could not find a reported one</strong>. Deficiency of service claims against Indian hotels have succeeded on hygiene and on rooms not being supplied as booked. On a camera we found no reported order.</p>
      <p>So the route that has demonstrably worked in India is the criminal one, a complaint to the police, rather than a contractual or consumer one. That is an observation about the reported record, not legal advice, and what applies to your situation is a question for a lawyer.</p>

      <h2>A PG, a hostel or a rented flat is a different relationship</h2>
      <p>In Bengaluru this has moved from custom to court order: our guide to <a href="/blog/pg-rules-in-bengaluru">PG rules in Bengaluru</a> sets out where the Karnataka High Court has said cameras may not be, and where it has said they must be.</p>
      <p>Possession changes both halves of the problem. Because the room is yours for the duration, you can inspect it properly: in daylight, more than once, including the high fittings in a shared bathroom that a one night guest would never reach. And because the people with routine access are the people who live there, the person most likely to have placed a device is a co-resident.</p>
      <p>That is what the Indian record shows. In Chandigarh the person charged had moved in five days earlier. In Hosur it was a resident of the hostel. In both the location was a <strong>shared washroom</strong>, not a bedroom. If you are deciding where to spend five careful minutes, the shared bathroom is the answer, and it is the fittings above head height within it.</p>
      <p>Note also how the Chandigarh discovery travelled: a tenant noticed an object, checked with another occupant, worked out what it was, told the landlord, and the landlord called the police. A camera in a space shared by residents is a police matter rather than a house rule matter, but the landlord is often the fastest route to the police. Cameras in genuinely common areas such as an entrance or a corridor raise a different question from a camera in a washroom, and the two should not be argued as one thing. Our guide to <a href="/blog/can-my-landlord-put-cameras">whether a landlord can put cameras up</a> takes that second question on, including what the Allahabad High Court said in November 2026 about where a private camera may point.</p>

      <p>If an image has already been posted somewhere, a second clock starts, and it runs much faster than any police process. Our guide to <a href="/blog/taking-photos-without-consent-india">taking photos of someone without consent in India</a> sets out the twenty-four hour removal rule and the statutory appeal that follows when a platform ignores it.</p>

      <h2>If you find something</h2>
      <p>Safety comes before evidence and before certainty.</p>
      <p>If you believe you are in immediate danger, call <strong>112</strong>. Otherwise, and only if it is safe to do so, leave the device exactly where it is. Photograph it in place, including enough of the surroundings to show where it was and what it faced, and note the time. Do not handle it, unplug it, open it or take it with you. Do not confront the person you suspect: in the Noida case the people who had placed the camera came back to the room for it, and in Chandigarh and Hosur the people charged were living alongside the complainants.</p>
      <p>Then report it to the police. Where images may already have been shared, a complaint can also be filed on the national cybercrime portal at <a href="https://cybercrime.gov.in" rel="noopener noreferrer" target="_blank">cybercrime.gov.in</a>. Our <a href="/blog/how-to-detect-hidden-cameras">hidden camera guide</a> sets out the full reporting route, which Indian provisions apply to whom, and one widely recommended helpline that is the wrong number for this. If you are also worried that a phone rather than a room is the problem, that is a separate examination and our guide on <a href="/blog/is-someone-monitoring-your-phone">whether someone is monitoring your phone</a> covers it.</p>

      <p>And the camera in the room is not the only way footage escapes. Our guide to <a href="/blog/can-cctv-be-hacked-ahmedabad">whether CCTV can be hacked</a> sets out an Indian case where the recordings came from a building's own, entirely legitimate, camera system.</p>

      <h2>What a check can and cannot establish</h2>
      <p>A check of a room you are staying in reports what was found in the places you could reach, by the methods you used, in the conditions at the time. It cannot establish that a room has never been recorded, and it cannot keep it private after you leave. A professional examination widens the methods and the access considerably, and our <a href="/blog/bug-sweeping-in-india">national guide to bug sweeping in India</a> explains what those instruments add and what they do not, but the same limitation holds: finding nothing is not the same statement as there being nothing. In a room that dozens of other people have occupied and will occupy, that limitation is the honest frame for the whole exercise.</p>

      <h2>Frequently asked questions</h2>
${faqHtml(hotelCameraFaqs)}
    `,
  },
  {
    slug: "how-often-should-a-business-sweep-for-bugs",
    title: "How Often Should a Business Sweep for Bugs? What the Doctrine Actually Says",
    seoTitle: "How Often Should a Business Sweep for Bugs? The Honest Answer",
    metaDescription:
      "How often should a business sweep for bugs? No authority publishes an interval, and no Indian law requires a sweep. What actually determines frequency, with sources.",
    excerpt:
      "Providers assert intervals from annual to quarterly per area, a twelvefold spread, and not one cites anything. The published doctrine refuses to name a number and says no facility automatically earns a recurring sweep. Here is what actually determines it.",
    date: "2026-10-30",
    readTime: "12 min read",
    category: "Corporate Security",
    coverImage: "/images/blogs/how-often-should-a-business-sweep-for-bugs.webp",
    ogImage: "/images/blogs/how-often-should-a-business-sweep-for-bugs.png",
    coverImageAlt:
      "How Often Should a Business Sweep for Bugs guide cover: a calendar grid on a dark background with one date marked in red and the rest left blank",
    publishedBy: "BugSweepingTSCM",
    cta: {
      heading: "Working out whether a sweep is the right spend?",
      text: "If you are deciding between a one-off examination, a recurring programme or neither, a private consultation can help you work out which of the three your situation actually calls for. We would rather tell you it is not warranted than sell you a schedule.",
      label: "Request a consultation on WhatsApp",
    },
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://www.bugsweepingtscm.com/blog/how-often-should-a-business-sweep-for-bugs#webpage",
          url: "https://www.bugsweepingtscm.com/blog/how-often-should-a-business-sweep-for-bugs",
          name: "How Often Should a Business Sweep for Bugs? The Honest Answer",
          inLanguage: "en-IN",
          isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" },
          breadcrumb: { "@id": "https://www.bugsweepingtscm.com/blog/how-often-should-a-business-sweep-for-bugs#breadcrumb" },
          primaryImageOfPage: { "@id": "https://www.bugsweepingtscm.com/blog/how-often-should-a-business-sweep-for-bugs#primaryimage" },
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
          "@type": "ImageObject",
          "@id": "https://www.bugsweepingtscm.com/blog/how-often-should-a-business-sweep-for-bugs#primaryimage",
          url: "https://www.bugsweepingtscm.com/images/blogs/how-often-should-a-business-sweep-for-bugs.png",
          width: 1200,
          height: 630,
        },
        {
          "@type": "BlogPosting",
          "@id": "https://www.bugsweepingtscm.com/blog/how-often-should-a-business-sweep-for-bugs#article",
          headline: "How Often Should a Business Sweep for Bugs? What the Doctrine Actually Says",
          description:
            "How often should a business sweep for bugs? No authority publishes an interval, and no Indian law requires a sweep. What actually determines frequency, with sources.",
          datePublished: "2026-10-30",
          image: { "@id": "https://www.bugsweepingtscm.com/blog/how-often-should-a-business-sweep-for-bugs#primaryimage" },
          mainEntityOfPage: { "@id": "https://www.bugsweepingtscm.com/blog/how-often-should-a-business-sweep-for-bugs#webpage" },
          inLanguage: "en-IN",
          author: { "@id": "https://www.bugsweepingtscm.com/#organization" },
          publisher: { "@id": "https://www.bugsweepingtscm.com/#organization" },
          about: [
            { "@type": "Thing", name: "Technical surveillance countermeasures" },
            { "@type": "Thing", name: "Security audit" },
          ],
          isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" },
        },
        {
          "@type": "Organization",
          "@id": "https://www.bugsweepingtscm.com/#organization",
          name: "BugSweepingTSCM",
          url: "https://www.bugsweepingtscm.com",
          logo: "https://www.bugsweepingtscm.com/images/logo/bug-sweep.png",
          email: "info@advancedetectiveagency.com",
          telephone: "+91-8882732221",
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://www.bugsweepingtscm.com/blog/how-often-should-a-business-sweep-for-bugs#breadcrumb",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.bugsweepingtscm.com" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.bugsweepingtscm.com/blog" },
            { "@type": "ListItem", position: 3, name: "How Often Should a Business Sweep for Bugs?" },
          ],
        },
        faqJsonLd(sweepFrequencyFaqs, "https://www.bugsweepingtscm.com/blog/how-often-should-a-business-sweep-for-bugs#faq"),
      ],
    },
    content: `
      <div class="answer-box">
        <p><strong>Short answer:</strong> No published authority sets an interval. The United States Department of Defense instruction governing its own programme states that facilities may not automatically receive a recurrent sweep. The United Kingdom's Cabinet Office tells TOP SECRET meeting spaces to sweep periodically and names no number. And no Indian law we could verify requires a sweep at all. Frequency should follow the threat and the changes to a room, not a calendar.</p>
      </div>

      <p>We read fourteen provider pages on this question, eight Indian and six overseas. They assert intervals ranging from once a year to four times a year per area, a spread of roughly twelve to one. Two of them contradict each other outright, one arguing that an annual cadence leaves too long a gap and another calling annual a sound baseline. Across roughly twenty two thousand words, <strong>not one cites a standard, a regulator, a statute, a study or a government instruction</strong> in support of any interval. A buyer cannot adjudicate between them, because there is nothing to adjudicate.</p>

      <p>The published doctrine does exist. It simply says something none of those pages says.</p>

      <h2>No Indian law requires a sweep. Here is what actually applies</h2>
      <p>We looked for an obligation across data protection, securities regulation, banking, telecom licensing, defence production and government security policy. <strong>We could not verify a single Indian law, rule, regulation, circular, direction or licence condition that requires a technical surveillance countermeasures sweep, at any interval, in any sector.</strong> What exists is adjacent, and it is worth knowing precisely because it tells you where the regulatory weight actually sits.</p>
      <p>The <strong>Information Technology Rules of 2011</strong> are the only Indian instrument that names physical security in this context. Rule 8(1) treats a body corporate as compliant if it has a documented information security programme containing managerial, technical, operational and physical security control measures commensurate with the information assets being protected. There is a precision point here that most commentary gets wrong. Rule 8(4)'s requirement of an audit at least once a year by a government approved independent auditor is <strong>not a freestanding universal duty</strong>. It is the condition of a deemed compliance safe harbour for organisations taking the ISO 27001 route or a notified code of best practices. An organisation relying on Rule 8(1) directly is not under an express annual audit obligation; its duty on a breach is to demonstrate that it implemented what its own documented programme said.</p>
      <p>The <strong>security manual for licensed defence industries</strong>, revised by the Ministry of Defence in June 2025 and imposed as a condition of the industrial licence, is India's most security prescriptive published document of this kind. It requires an internal security audit at least yearly and an external audit by Ministry agencies once in two years. It describes mobile phones as effective, unobtrusive listening devices for eavesdropping, and its prescribed control is an outright ban: phones are not permitted inside conference halls, operations rooms or at official briefings even in switched off mode, and visitors deposit theirs at reception. Across both the current edition and the 2014 edition it replaced, the terms technical surveillance, TSCM, sweep, bugging and covert appear <strong>zero times</strong>. India's most prescriptive security manual does not require a sweep. It requires banning the phone and auditing annually.</p>
      <p>One further detail from that manual is worth carrying, because it cuts against the instinct that more is always better: the 2014 edition required an internal audit twice a year. The 2025 revision <strong>relaxed it to yearly</strong>.</p>
      <p>The rest of the Indian landscape points consistently in one direction. SEBI's insider trading regulations require a structured digital database recording who unpublished price sensitive information was shared with, maintained internally with time stamping and audit trails and preserved for at least eight years. SEBI's cybersecurity framework of August 2024 requires physical access to critical systems to be restricted, monitored and recorded continuously, and sets half yearly cyber audits for market infrastructure institutions and annual ones for other regulated entities. The Reserve Bank's technology directions require physical and environmental controls at data centres and disaster recovery sites. The CERT-In directions of April 2022 require incident reporting within six hours and 180 days of rolling logs, and their twenty incident categories do not include a covert listening device, a hidden camera or any physical surveillance device at all.</p>
      <p>Read together, the pattern is unmistakable. <strong>Every Indian instrument that actually binds anyone points at logs, access control and records. None points at the room.</strong> SEBI will ask for your database. Nobody will ask whether the boardroom was examined.</p>

      <h2>And the one Indian rule that says "physical" is on a clock</h2>
      <p>This is the part that has moved recently and that nobody has written about. The Digital Personal Data Protection Act, 2023 was brought into force in tranches by a <a href="https://egazette.gov.in/WriteReadData/2025/267647.pdf" rel="noopener noreferrer" target="_blank">commencement notification</a> published in November 2025. Most of the operative provisions, including section 8(5) on reasonable security safeguards, sit in the eighteen month tranche, which falls around the middle of May 2027. So does section 44(2), which omits section 43A of the Information Technology Act and the rule making power under which the 2011 Rules were made.</p>
      <p>What replaces Rule 8 is Rule 6 of the Digital Personal Data Protection Rules, 2025, which sets a minimum list of reasonable security safeguards: encryption, obfuscation or masking; access control to <em>computer resources</em>; visibility through logs, monitoring and review; backups; one year log retention; contractual terms with processors; and appropriate technical and organisational measures. <strong>The word physical does not appear anywhere in it</strong>, and its access control limb is expressly scoped to computer resources as the Information Technology Act defines them.</p>
      <p>So the honest story is the opposite of a sales pitch. India's incoming data protection regime is <strong>narrower</strong> on physical security than the one it replaces. One caveat worth stating: the 2025 Rules contain no repeal or savings clause for the 2011 Rules, so what formally happens to them once section 43A goes is unresolved on the face of the instruments.</p>

      <h2>What the published doctrine actually says about frequency</h2>
      <p>The clearest statement comes from the United States Department of Defense instruction that governs its own countermeasures programme. Its programme managers are told to recommend a facility technical threat analysis to determine whether a sweep is warranted at all, and then, in six words that contradict the entire vendor consensus: <strong>facilities may not automatically receive a recurrent TSCM.</strong> Approval is for facilities assessed as probable and feasible targets. There is no interval anywhere in the document.</p>
      <p>Note which thing that doctrine treats as continuous. It defines a technical threat analysis as a <em>continual process</em> of compiling and examining information on technical surveillance activities. The sweep is the discrete, requested, approved output of that process. Provider content has inverted this: the sweep becomes continual and the threat analysis is absent.</p>
      <p>The United States federal control catalogue is more interesting still. <a href="https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-53r5.pdf" rel="noopener noreferrer" target="_blank">NIST Special Publication 800-53</a> contains control RA-6, a technical surveillance countermeasures survey, described as including visual, electronic and physical examinations of a facility internally and externally. Two things about it matter. The control makes frequency an <strong>organisation defined parameter</strong>, and offers "when the following events or indicators occur" as an alternative to any frequency at all. The authority declines to pick a number in the control's own syntax.</p>
      <p>And then it goes further. We checked NIST's machine readable baseline files directly. <strong>RA-6 is selected for no baseline: not Low, not Moderate, not High.</strong> Vulnerability scanning sits in all three. The most security conscious published control catalogue in the world defines a TSCM survey, then declines to make it a default at any impact level. It remains available by tailoring, when an organisation's own risk assessment calls for it. That is precisely the argument of this page, stated by the framework's own authors.</p>
      <p>British practice says the same thing in gentler language. The Cabinet Office's guidance for working at <a href="https://www.gov.uk/government/publications/government-security-classifications/guidance-12-working-at-secret-html" rel="noopener noreferrer" target="_blank">SECRET</a> tells organisations to <em>also consider</em> periodic counter eavesdropping sweeps of controlled office areas that <em>frequently host</em> SECRET meetings, which makes the trigger usage rather than the calendar. The guidance for <a href="https://www.gov.uk/government/publications/government-security-classifications/guidance-13-working-at-top-secret-html" rel="noopener noreferrer" target="_blank">TOP SECRET</a> says sweeps "should be undertaken periodically to ensure the integrity of the meeting space", and names no number. If the British government will not set an interval for TOP SECRET meeting rooms, nobody can honestly set one for a boardroom.</p>
      <p>One more thing is worth saying plainly, because it is occasionally claimed otherwise. The Department of Defense instruction notes that its activities are conducted in accordance with a manual whose designation marks it Secret. <strong>There is no public TSCM methodology standard.</strong> Anyone citing one is mistaken.</p>

      <h2>The triggers that are defensible</h2>
      <p>If not the calendar, then what. These are the triggers that published doctrine actually names.</p>
      <div class="table-wrap">
        <table>
          <caption class="sr-only">Event-based triggers for a technical surveillance countermeasures examination, and the authority that names each</caption>
          <thead>
            <tr><th scope="col">Trigger</th><th scope="col">Where it comes from</th></tr>
          </thead>
          <tbody>
            <tr><td>Before, during and after a sensitive discussion held in a space that is not normally secured</td><td>US Department of Energy facilities security plan, in-conference inspection</td></tr>
            <tr><td>Where a space frequently hosts sensitive meetings</td><td>UK Cabinet Office guidance at SECRET</td></tr>
            <tr><td>Periodically, to preserve a standing secure meeting space</td><td>UK Cabinet Office guidance at TOP SECRET</td></tr>
            <tr><td>After construction, renovation or modification of the area</td><td>Department of Energy: an inspection evaluates changes to an operating environment</td></tr>
            <tr><td>Before new electronic systems go live, including conferencing and telephony</td><td>Department of Energy advice and assistance, to avoid costly later modification</td></tr>
            <tr><td><strong>When a new item enters the room</strong>, including equipment, furnishings and gifts</td><td>Department of Energy, and UK guidance on furniture entering a TOP SECRET area</td></tr>
            <tr><td>On suspicion, or on a specific indicator</td><td>NIST RA-6's event selection; Department of Defense discovery procedures</td></tr>
            <tr><td>When a documented facility threat analysis says so</td><td>Department of Defense instruction</td></tr>
          </tbody>
        </table>
      </div>
      <p>The sixth is the one we would single out, because no provider page we inspected mentions it. Two national authorities independently trigger on <strong>entry</strong> rather than on the calendar. A boardroom that has just taken delivery of a new video conferencing system and a boardroom that nothing has entered since the last examination are on an identical schedule under every vendor model, and on completely different footings under the official one.</p>

      <h2>Survey and inspection: why a first examination and a repeat are not the same purchase</h2>
      <p>The Department of Energy's facilities security plan draws a distinction that providers almost never do. A <strong>survey</strong> is the most comprehensive activity: a thorough technical, physical and visual examination of an area to identify hazards and the presence of devices. An <strong>inspection</strong> is a limited activity addressing specific concerns, which evaluates the changes to an operating environment to see whether modification or upgrade has inadvertently created a vulnerability.</p>
      <p>The survey establishes the reference state. The inspection checks what has changed against it. NIST's description of RA-6 closes the loop: a survey provides useful input for risk assessments and information about organisational exposure, which is to say that the first examination partly exists to <em>generate the information that sets the interval</em>.</p>
      <p>We should be honest about the vocabulary. The word baseline is ours, not theirs; the structure is in the primary documents, the term is not. It is worth noting that where provider pages use the word at all, they use it to mean a default interval, which is close to the opposite of this meaning.</p>

      <h2>When a sweep is the wrong thing to buy</h2>
      <p>This is the section no competitor writes, and the sourcing for it is better than the sourcing for any interval.</p>
      <p>The Department of Defense's earlier instruction addressed facilities not normally used for sensitive discussion and open to uncontrolled access. Surveys of such facilities, it records, <strong>have proven counterproductive by having given the occupant or occupants a false sense of security</strong>, and such requests should be approved only if no other facility is available, because they consume scarce resources that could serve more sensitive sites. That is a government authority stating that a sweep in the wrong place is worse than no sweep, not merely wasteful.</p>
      <p>The second case is the device that is already in the room. MITRE's <a href="https://attack.mitre.org/techniques/T1123/" rel="noopener noreferrer" target="_blank">catalogue of observed techniques</a> records adversaries using a computer's microphone, webcam or call applications to capture conversation, written to disk and sent out later. No radio search detects that. And the primary control that three national authorities actually prescribe for this risk is not a sweep: it is the phone ban in India's defence security manual, the device restriction in the Ministry of Home Affairs information security guidelines, and, tellingly, one of the five things the United Kingdom's national counter eavesdropping authority says an inspection checks is <em>human behaviour</em>, meaning whether people are obeying procedures such as the ban on phones.</p>
      <p>Which licenses a blunt conclusion. An organisation that has not banned and enforced the phone is buying an examination of a control it does not have. One with no physical access log, no device policy and no record of who was told what has cheaper, and in some cases legally required, work to do first.</p>

      <h2>What a programme covers that one sweep does not</h2>
      <p>If recurrence is warranted, what you are buying should be more than the same visit repeated. The Department of Energy's plan enumerates six distinct services, of which the comprehensive sweep is one: survey, inspection, in-conference inspection, advice and assistance, education, and special services for unforeseen circumstances.</p>
      <p>Four of those are worth naming because they are routinely absent from what gets sold. <strong>Change detection</strong> against a known reference state, with entry of new equipment, furnishings or gifts as a trigger. <strong>Pre-installation advice</strong>, before a conferencing or telephone system goes live, which is the cheap moment. <strong>Education</strong>, so that the people using the room understand the threat and the procedures. And the operational security of the engagement itself: the Department of Energy is explicit that discussions and requests about a pending examination must not take place in the area to be examined, and the Department of Defense requires requests to come via secure communications from outside the facility concerned. A client who emails a provider from the boardroom to arrange an examination of that boardroom has already undermined it.</p>
      <p>One claim often made here we will not make for you as doctrine. It is widely said that a sweep's result is valid only for the moment it was performed. No authority we read states that in terms. What they do say is that environments change, that inspections exist to evaluate those changes, that repetition preserves the integrity of a meeting space, and that threat analysis is continual. The conclusion follows from those, but it is an inference rather than a quotation, and we would rather label it as one.</p>

      <h2>The Indian record, stated honestly</h2>
      <p>We looked for a documented Indian case of a covert device found because of a periodic or scheduled check. <strong>We could not find one.</strong></p>
      <p>Deliberate scheduled sweeping in India demonstrably exists: the Parliament complex runs daily anti sabotage checks across both Houses when in session. The documented finds from them are a bundle of cash on a member's seat and explosive material near an event route. Not surveillance devices. India's institutional sweeping culture is shaped by the physical threat, not the signals one.</p>
      <p>The best documented Indian commissioned sweep found nothing. In 2010 a suspected bugging at a Union ministry led to a sweep arranged through a private agency, and then to an Intelligence Bureau examination that concluded the adhesive found at sixteen points was chewing gum. Former intelligence officials publicly questioned the use of a private agency. The episode ended unresolvable, and it ended that way partly because there was no reference state to compare against and no clean chain of custody. We covered how that case reads as a cautionary tale about interpreting objects in a room in our <a href="/blog/signs-your-office-is-bugged">guide to office indicators</a>. Read for this question, it argues for a baseline rather than for a schedule.</p>
      <p>Every other documented Indian discovery we could trace was accidental: someone noticing a camera while changing, a driver finding trackers while cleaning a vehicle, an employee seeing a device fall. That is a finding about how these things actually surface, and it is not an argument for a quarterly invoice.</p>

      <h2>So how should you decide</h2>
      <p>Start with the question the doctrine starts with: is this space a probable and feasible target, on a documented assessment rather than on a feeling. If the answer is no, the honest recommendation is not to buy. If it is yes, the inputs that published authorities actually name are the sensitivity of what is discussed in that specific room, how often it is genuinely used for that, what access control and device policy already exist and whether they are enforced, whether the space shares walls, floors or services with tenants you do not control, what has physically changed since it was last examined, and whether there is any known or suspected hostile technical activity in the area.</p>
      <p>Those inputs produce a plan for a particular organisation. They do not produce a number that can be printed on a web page, which is exactly why no authority prints one, and why we will not either.</p>

      <h2>What an examination can and cannot establish</h2>
      <p>An examination reports what was found in the areas accessed, by the methods used, under the conditions present, at the time of the visit. It cannot prove a room has never been compromised, and it cannot keep it clean afterwards. It does not reach a compromised laptop or conferencing system, and it does not reach the person in the room who simply repeats what was said. If you want the mechanics of how a sweep is scoped and what it involves, our <a href="/blog/bug-sweeping-in-india">national guide</a> covers it; the <a href="/blog/corporate-espionage-india">guide to corporate espionage</a> sets out what Indian law actually protects when information leaves a company, and the <a href="/blog/is-someone-monitoring-your-phone">guide to phone monitoring</a> covers the handset, which no room examination touches.</p>

      <h2>Frequently asked questions</h2>
      <div class="faq">
${faqHtml(sweepFrequencyFaqs)}
      </div>

      <div class="note">
        <p><strong>About this guide.</strong> Published by BugSweepingTSCM. The site's founder is <a href="/meet-the-founder">Hardesh Bhardwaj</a>, founder of ADA Advance Detective Agency Pvt. Ltd. (CIN U74999DL2021PTC390132) and in practice since 2013. The Indian regulatory position was checked against the Gazette commencement notification for the Digital Personal Data Protection Act and the 2025 Rules, the Information Technology Rules of 2011, SEBI's regulations and cybersecurity framework, Reserve Bank directions, the CERT-In directions and the Ministry of Defence security manual for licensed defence industries. The doctrinal position was checked against United States Department of Defense and Department of Energy publications, NIST Special Publication 800-53 and its machine readable baselines, and United Kingdom Cabinet Office guidance, on 30 October 2026. ISO 27001 is paywalled and is therefore described rather than quoted. This is general information and not legal advice; confirm current details with the linked sources and take advice on your own obligations.</p>
      </div>
    `,
  },
  {
    slug: "is-someone-monitoring-your-phone",
    title: "Is Someone Monitoring Your Phone? How to Check Safely, and What Indian Law Says",
    seoTitle: "Is Someone Monitoring Your Phone? How to Check Safely",
    metaDescription:
      "Is someone monitoring your phone? Which checks actually work on iPhone and Android, why battery drain proves nothing, what Indian law covers, and where to get help.",
    excerpt:
      "Most advice on this subject tells you to look for battery drain and then delete the app. Both are wrong, and the second can put someone in danger. This guide sets out the checks that actually establish something, the Indian legal position, and where help exists.",
    date: "2026-10-24",
    readTime: "12 min read",
    category: "Bug Sweep Tips",
    coverImage: "/images/blogs/is-someone-monitoring-your-phone.webp",
    ogImage: "/images/blogs/is-someone-monitoring-your-phone.png",
    coverImageAlt:
      "Is Someone Monitoring Your Phone guide cover: a phone outline on a dark grid with a hidden process marked in red behind the screen",
    publishedBy: "BugSweepingTSCM",
    cta: {
      heading: "Need to talk this through with someone?",
      text: "If a specific device and a specific period of access are the concern, a private consultation can help you work out what can realistically be established and in what order. Please get in touch from a phone and a place the other person has no access to.",
      label: "Request a consultation on WhatsApp",
    },
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://www.bugsweepingtscm.com/blog/is-someone-monitoring-your-phone#webpage",
          url: "https://www.bugsweepingtscm.com/blog/is-someone-monitoring-your-phone",
          name: "Is Someone Monitoring Your Phone? How to Check Safely",
          inLanguage: "en-IN",
          isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" },
          breadcrumb: { "@id": "https://www.bugsweepingtscm.com/blog/is-someone-monitoring-your-phone#breadcrumb" },
          primaryImageOfPage: { "@id": "https://www.bugsweepingtscm.com/blog/is-someone-monitoring-your-phone#primaryimage" },
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
          "@type": "ImageObject",
          "@id": "https://www.bugsweepingtscm.com/blog/is-someone-monitoring-your-phone#primaryimage",
          url: "https://www.bugsweepingtscm.com/images/blogs/is-someone-monitoring-your-phone.png",
          width: 1200,
          height: 630,
        },
        {
          "@type": "BlogPosting",
          "@id": "https://www.bugsweepingtscm.com/blog/is-someone-monitoring-your-phone#article",
          headline: "Is Someone Monitoring Your Phone? How to Check Safely, and What Indian Law Says",
          description:
            "Is someone monitoring your phone? Which checks actually work on iPhone and Android, why battery drain proves nothing, what Indian law covers, and where to get help.",
          datePublished: "2026-10-24",
          image: { "@id": "https://www.bugsweepingtscm.com/blog/is-someone-monitoring-your-phone#primaryimage" },
          mainEntityOfPage: { "@id": "https://www.bugsweepingtscm.com/blog/is-someone-monitoring-your-phone#webpage" },
          inLanguage: "en-IN",
          author: { "@id": "https://www.bugsweepingtscm.com/#organization" },
          publisher: { "@id": "https://www.bugsweepingtscm.com/#organization" },
          about: [
            { "@type": "Thing", name: "Stalkerware" },
            { "@type": "Thing", name: "Spyware" },
            { "@type": "Thing", name: "Technical surveillance countermeasures" },
          ],
          isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" },
        },
        {
          "@type": "Organization",
          "@id": "https://www.bugsweepingtscm.com/#organization",
          name: "BugSweepingTSCM",
          url: "https://www.bugsweepingtscm.com",
          logo: "https://www.bugsweepingtscm.com/images/logo/bug-sweep.png",
          email: "info@advancedetectiveagency.com",
          telephone: "+91-8882732221",
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://www.bugsweepingtscm.com/blog/is-someone-monitoring-your-phone#breadcrumb",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.bugsweepingtscm.com" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.bugsweepingtscm.com/blog" },
            { "@type": "ListItem", position: 3, name: "Is Someone Monitoring Your Phone?" },
          ],
        },
        faqJsonLd(phoneMonitoringFaqs, "https://www.bugsweepingtscm.com/blog/is-someone-monitoring-your-phone#faq"),
      ],
    },
    content: `
      <div class="answer-box">
        <p><strong>Before anything else.</strong> If you think someone is monitoring your phone, that person can probably see what you search for, including this page. Look for help from a different device, one they have never had access to. Do not delete anything yet: removal can be noticed, and it destroys the evidence. If you are in immediate danger, call <strong>112</strong>.</p>
      </div>

      <p>Almost every guide to this subject does two things, and both are wrong. It tells you to watch for a hot phone and a draining battery, which proves nothing in either direction. And it then tells you to find the app and delete it, which in the situation most readers are actually in is the single most dangerous instruction available. This guide puts the order the other way round, because that is what the organisations working on this subject advise. If your worry is not a specific person but the sense that your phone is listening in order to target advertising, that is a different question with a different answer, and our guide to <a href="/blog/is-my-phone-listening-to-me">whether your phone is listening to you</a> deals with it.</p>

      <p>There are two completely different problems under the word spyware, and advice written for one is useless for the other. <strong>Commercial stalkerware</strong> is bought off the internet and installed by hand, usually by a partner or family member. The Coalition Against Stalkerware notes that it requires no particular technical skill, and that on Android the person almost always needs physical access to the unlocked device. <strong>Mercenary spyware</strong>, of the kind associated with state actors, is delivered without you touching anything, costs a great deal, and is aimed at what Apple describes as a very small number of specific individuals, often journalists, activists, politicians and diplomats. Apple states plainly that the vast majority of users will never be targeted by attacks of that nature. If the person you suspect has had your phone in their hands or knows your account password, you are almost certainly in the first case, and the rest of this page is written for that.</p>

      <h2>Why the symptoms everyone lists prove nothing</h2>
      <p>The Coalition Against Stalkerware addresses this directly on its page for survivors. Unusual behaviour such as a rapidly draining battery, spikes in data usage or strange notifications may be a sign of monitoring software, it says, but it does not have to be, and some monitoring software runs without any such side effects. That single sentence covers both failure modes: symptoms without monitoring, and monitoring without symptoms.</p>
      <p>The ordinary explanations are documented by the platform makers themselves. Apple's support page on a warm device lists first time setup, restoring from a backup, a major software update, wireless charging, processor-intensive apps and video streaming, and says these conditions are normal. Its battery page explains that a battery's capacity diminishes as it chemically ages and that performance management can cause longer app launch times, dimming and background apps reloading. Google's battery page notes that a phone drains much faster when hot, and that after a software update it is normal for the battery to drain more than usual while the phone optimises. None of those pages mentions spyware, because they are not about spyware. They are about the ordinary causes of exactly the symptoms that get attributed to it.</p>
      <p>What the Coalition offers instead is a better signal, and it is behavioural rather than technical: the most common sign is the other person's own change in behaviour, when they know too much about your activity and there is no other explanation. They also suggest keeping a written log of what you are experiencing, which helps establish a pattern and gives you a history if you later go to the police.</p>

      <h2>The checks that actually establish something</h2>
      <p>These are settings audits, not scans. Neither platform offers a spyware scanner, which is covered further down.</p>

      <h3>On an iPhone</h3>
      <p>The one conclusive, user-runnable test on either platform is the configuration profile check. Apple's own personal safety guide explains that configuration profiles and mobile device management tools may allow access to data or location information on the device, and gives the path: Settings, then General, then VPN and Device Management. Apple's wording is unusually definite: if you do not see any profiles, then no device management profile is installed. Note Apple's own caution alongside it, that if the device belongs to a school or employer you should check with the administrator before deleting anything.</p>
      <p>Apple's Checklist 1 adds several manual reviews that are quick and rarely mentioned anywhere else. Review the devices signed in to your Apple Account under Settings and your name, and remove any you do not recognise. Review the apps installed for anything you do not remember installing. Check whether iPhone Mirroring is set up. And check the device for an unexpected Face ID or Touch ID fingerprint, which takes seconds and which no competitor page we inspected mentions at all.</p>
      <p><strong>Safety Check</strong> is the Apple feature closest to this situation, at Settings, then Privacy and Security, then Safety Check. It lets you review who has access to your information including your location, stop sharing with everyone at once through Emergency Reset, review the devices connected to your Apple Account and reset app privacy permissions. It covers sharing through Apple features such as Find My location, Shared Albums, Shared Notes, Shared Passwords, Home and Health, and third party app access to things like the camera, microphone, contacts and location.</p>
      <p>Two warnings about Safety Check matter more than the feature itself. Apple provides a Quick Exit button precisely because, in its words, individuals in abusive situations may need to rapidly hide their use of Safety Check. But Quick Exit hides your use of the settings screen, not the effect of the change. <strong>Apple nowhere states that the other party is not notified when you stop sharing</strong>, and its own documentation says that some apps or services notify you when sharing resumes. Any page telling you the other person will not notice is making a claim Apple does not support. Apple's own instruction is to plan for your safety before making changes.</p>

      <h3>On Android</h3>
      <p>Four screens matter, and three of them are not where most guides send you. Start with the full app list at Settings, then Apps, then See all apps, which is a different surface from the launcher's app drawer. Then <strong>Device admin apps</strong>, under Security, which Google describes as where you find or remove apps that can administer your phone. Then <strong>Accessibility</strong>, where a service with permission to inspect window content can read text from the screen and act on your behalf. Then <strong>Special app access</strong>, under Apps, which holds notification access and usage access.</p>
      <p>That last point is the correction worth carrying away: <strong>accessibility services, notification access, usage access and device admin are not entries in the Permission manager.</strong> Content telling you to check Permission manager for monitoring software is pointing you at the wrong screen for the three grants that matter most.</p>
      <p>It is also worth knowing why some apps resist removal. Android's own developer documentation states that to uninstall a device admin app, users need first to unregister the app as an administrator. That is the sourced answer to a question readers ask constantly.</p>
      <p>Two false alarms to avoid. Android has a legitimate private space feature where apps are hidden from the app list when it is locked, and a work profile on a managed device legitimately shows apps badged with a briefcase. Neither is evidence of anything.</p>
      <p>On scanning, Google Play Protect checks apps for harmful behaviour and may deactivate or remove them, and it analyses apps requesting sensitive permissions such as reading text messages or controlling accessibility features. Google also notes it is on by default but can be turned off, which is the practical limit: an all clear from Play Protect means little if somebody else has had administrative access to the handset. Independent testing published by the Electronic Frontier Foundation with AV-Comparatives in November 2025, across seventeen monitoring products, found detection varied widely between security products, with Play Protect among the weakest, and the Foundation's own explanation is that because it is the default on so many phones, some monitoring software ships with instructions for disabling it during installation.</p>

      <h2>Sometimes there is no app at all</h2>
      <p>This is the case that defeats every scanner and most advice. The Coalition Against Stalkerware notes that some iPhone and iPad monitoring works by taking data from backups stored in iCloud, and suggests checking whether iCloud Backup is enabled when you did not enable it yourself, under Settings, your name, then your device. It says plainly that if someone is secretly tracking your online activities, monitoring software may not be involved at all.</p>
      <p>Look at what Apple's own remediation tools actually address and the point becomes obvious: signed in devices, trusted phone numbers, shared location, shared albums, shared passwords, calendars and notes. Those are accounts and sharing, not malware. A device scan cannot find any of it, and a factory reset does not fix it, because the access lives in the account rather than on the handset.</p>

      <h2>One thing worth switching on now</h2>
      <p>Before that, one check takes under a minute and covers the most common route into a person's messages: the linked devices list in WhatsApp, which our guide to <a href="/blog/can-someone-read-my-whatsapp-messages">whether someone can read your WhatsApp messages</a> works through.</p>
      <p>Google added an optional feature called Intrusion Logging, within Advanced Protection, which records device activity including app installations, updates and removals, network connections and when the device is locked and unlocked. The logs are end to end encrypted, stored for a rolling twelve months, and decryptable only by you, since Google states it does not know your screen lock or password. The path is Settings, then Security and privacy, then Advanced Protection.</p>
      <p>Why it matters here: installing commercial monitoring software requires hands-on access, and this is the first platform feature that gives an ordinary user a tamper-resistant record of app installation events. The Coalition Against Stalkerware, writing on 21 October 2026, noted that although the feature was designed with more advanced spyware in mind, it also helps detect commercial stalkerware, and is especially useful where someone is supporting a survivor directly and can set up logging and then read through the activity with them.</p>
      <p>Its limits are real and should be stated. It is <strong>prospective only</strong> and cannot detect intrusions retroactively, it requires a Google account, and it has to be enabled before anything happens. On version, Amnesty's analysis and the Android developer documentation describe it as Android 16 or later, while Google's October 2026 announcement describes the wider Advanced Protection feature set as available on Android 17 devices. If you suspect monitoring today, this answers nothing about today. It makes the same question answerable later.</p>

      <h2>Why a detector app is not the answer</h2>
      <p>On an iPhone the obstacle is architectural. Apple's platform security documentation states that all third party apps are sandboxed, that sandboxing is designed to prevent apps from gathering or modifying information stored by other apps, and that system files and resources are shielded from apps. Apple documents no mechanism by which an App Store app could inspect other apps or walk the filesystem, which is why there is no real antivirus on iOS and why an iPhone spy app detector cannot do what its name implies.</p>
      <p>On Android the honest answer is different, and the blanket dismissal you will read elsewhere is wrong. Android's developer documentation explains that from Android 11 the list of installed apps is filtered by default, treating it as personal and sensitive user data, and that an app needs a declared queries element or the approved QUERY_ALL_PACKAGES permission to see more. A security app with that approval can enumerate installed packages and match them against known monitoring software, which is exactly how the testing above was possible. What it still cannot do is read inside another app's sandbox, or find the account-compromise cases above, because there is no app involved in those at all.</p>

      <h2>What Indian law actually covers, and who it leaves out</h2>
      <p>Two provisions of the <a href="https://www.indiacode.nic.in/bitstream/123456789/13116/1/it_act_2000_updated.pdf" rel="noopener noreferrer" target="_blank">Information Technology Act, 2000</a> do the work, and they are a pair. Section 43 covers a person who, without the permission of the owner or the person in charge, accesses a computer or downloads, copies or extracts data from it, and makes them liable to pay compensation. Section 66 makes the same conduct a criminal offence where it is done dishonestly or fraudulently, punishable with up to three years or a fine up to five lakh rupees or both. The difference between the civil wrong and the crime is entirely the state of mind.</p>
      <p>Two procedural facts follow that nobody seems to publish. Under section 77B an offence punishable with three years is bailable, and section 66 carries a three year maximum, so it is cognizable but bailable: a first information report can be registered without a magistrate's order, and equally an arrest does not follow automatically. And section 78 of the same Act requires that an offence under it be investigated by a police officer not below the rank of Inspector, which is worth knowing if a constable turns you away.</p>
      <p>Section 43 also has a compensation route most people never hear about. Under section 46 an adjudicating officer, an official not below the rank of Director to the Government of India or the equivalent in a State, decides claims up to five crore rupees, with larger claims going to a court. The one crore ceiling that older articles mention was removed by the 2009 amendment.</p>
      <p>Where the person monitored is a woman and the person monitoring is a man, section 78 of the <a href="https://egazette.gov.in/WriteReadData/2023/250883.pdf" rel="noopener noreferrer" target="_blank">Bharatiya Nyaya Sanhita, 2023</a>, in force since 1 July 2024, is directly on point. Its second limb covers a man who monitors the use by a woman of the internet, email or any other form of electronic communication. Phone monitoring software whose whole function is to capture messages, calls and browsing is monitoring the use of electronic communication in the most literal sense, with no analogy required. Note two things about that limb: unlike the first limb it needs no repetition and no prior indication of disinterest, which makes it materially easier to establish. It carries up to three years on a first conviction and up to five on a second.</p>
      <p>Now the gap, stated plainly in both directions. <strong>The stalking offence is gender specific both ways.</strong> It can be committed only by a man, and only against a woman. A man whose phone is monitored by his wife has no remedy under it, and we could not find a gender neutral Indian stalking offence. But he is not without remedy, and the common claim that men have no protection is wrong: sections 43 and 66 of the Information Technology Act both apply to any person, and so does the interception offence under the Telecommunications Act, 2023. The accurate line is that the computer misuse offences are gender neutral and the stalking offence is not.</p>
      <p>On parents monitoring a minor child, and employers monitoring a company device, the honest answer is that the Indian position is unsettled. Both sections 43 and 66 turn on acting without the permission of the owner or the person in charge of the device, and a parent or an employer may well be the person in charge, which if accepted would mean no contravention at all. We found no Indian judgment deciding the point either way. What is clearer is platform policy, which is not law: Google Play's own stalkerware policy permits monitoring apps only for parents monitoring children or enterprises monitoring employees, requires a persistent notification at all times while running and a unique identifying icon, and states in terms that these apps cannot be used to track anyone else, a spouse for example, even with their knowledge and permission.</p>

      <h2>The court judgments people are misreading</h2>
      <p>Indian courts have recently made it easier to use material obtained by spouses as evidence. They have not made it lawful to obtain. Confusing the two is the most consequential error available on this subject, and it is being made in both directions.</p>
      <p>In a decision of 14 July 2025 the Supreme Court held that the spousal privilege in section 122 of the Evidence Act does not apply in proceedings between married persons, so a recording made by one spouse of their own conversation with the other is not barred, and remarked that the phone on which a conversation is recorded is no different from an eavesdropper. That case concerned a spouse recording his own conversations. It contains no holding that installing software on another person's phone is lawful and no finding on criminal liability at all.</p>
      <p>What happened when an Indian court did face an admitted installation is more instructive. In two judgments in April 2026, the Bombay High Court at Goa recorded that a husband had loaded a named commercial monitoring app onto his wife's phone, admittedly without her consent. In the first the data had never been forensically examined and the husband was not a qualified expert, so the evidence was rejected as unreliable and the appeal dismissed. In the second the court held there was no proof of the electronic evidence and no compliance with the certificate requirements, that relying on it would be unsafe, and dismissed that appeal too. An admitted installation, twice, and the material it produced was thrown out both times.</p>
      <p>One further absence is worth recording. A search of reported Indian judgments on 24 October 2026 found no conviction, and no reported judgment, under section 43, 66 or 66E of the Information Technology Act arising from a partner or family member installing monitoring software on another's phone. The only reported Indian judgments in which such an installation appears at all are those two matrimonial appeals. Nor could we find any Indian enforcement action against the sellers of these apps, which is part of why they remain openly purchasable here.</p>

      <h2>Where help actually exists in India</h2>
      <p>This is where most pages on this topic give you nothing at all. Of four competitor pages we inspected, not one gave an Indian reader a single helpline number.</p>
      <div class="table-wrap">
        <table>
          <caption class="sr-only">Indian helplines relevant to phone monitoring and abuse, with what each one does and does not do</caption>
          <thead>
            <tr><th scope="col">Number</th><th scope="col">What it is</th><th scope="col">What it does not do</th></tr>
          </thead>
          <tbody>
            <tr><th scope="row">112</th><td>The national emergency number, reaching police, fire and medical services</td><td>It is emergency dispatch, not a cyber or device service</td></tr>
            <tr><th scope="row">181</th><td>Women Helpline, connecting to emergency services, One Stop Centres, legal aid and counselling</td><td><strong>Not operational in West Bengal.</strong> It routes you onward; it does not examine a phone</td></tr>
            <tr><th scope="row">14490</th><td>National Commission for Women helpline, for registering a complaint and referral to police, hospitals, legal services and One Stop Centres</td><td>The Commission's own page says that for emergency assistance you should call 112 instead</td></tr>
            <tr><th scope="row">1930</th><td>The cyber crime helpline, scoped to urgent financial cyber fraud</td><td>Not a line for a monitored phone, unless money has moved</td></tr>
            <tr><th scope="row">1098</th><td>National child helpline</td><td>Children only</td></tr>
          </tbody>
        </table>
      </div>
      <p>On 181, one detail is worth more than the number itself. The Ministry of Women and Child Development's own scheme page, last updated on 23 October 2026, states that the Women Helpline is presently operational in all States and Union Territories except West Bengal. Every page we inspected lists 181 flatly as a national number. A reader in West Bengal following that advice reaches nothing.</p>
      <p>You may also see 1091 recommended. Treat it as city or state specific rather than national: Delhi Police publishes it for women in distress, but it does not appear on the National Commission for Women's own list of helplines, so check what your own city actually publishes before relying on it. One Stop Centres, sometimes called Sakhi Centres, bring police facilitation, medical aid, legal aid and counselling together in one place and work alongside 181.</p>
      <p>Two honest gaps. <strong>There is no Government of India helpline specifically for technology-facilitated abuse.</strong> Every number above exists for another primary purpose, and none is scoped to someone monitoring your device. And the organisations capable of forensically answering whether a phone is infected, such as Amnesty International's Security Lab and the Access Now Digital Security Helpline, restrict their mandates to journalists, activists and human rights defenders, so an ordinary person monitored by a partner generally will not qualify. Internationally the Coalition Against Stalkerware maintains information for survivors and a directory of support organisations, which is genuinely useful, but it is a directory and an information resource rather than a helpline, and it handles no cases itself.</p>

      <p>If the worry is that somebody keeps turning up wherever you are, the phone is only one of four things worth checking. Our guide to <a href="/blog/how-to-tell-if-someone-is-following-you">telling whether someone is following you</a> sets out the others, and what to do in the moment if a vehicle really is behind you.</p>

      <h2>If you decide to act</h2>
      <p>The order matters more than any individual step, and this is where the organisations working with survivors disagree sharply with most published advice.</p>
      <p>Make a safety plan first, developed on a safer device and, where possible, with a support organisation. Preserve what exists before changing anything, because deleting monitoring software deletes the evidence you would need to report it. Attempt removal only if you believe it is safe to do so, because removal or any significant change may be noticed by the person who installed it and can increase the abuse. Expect that it may be reinstalled. On getting rid of it, the Coalition's own assessment is that the best way is a new phone, with a factory reset almost as effective. And if the access is through your accounts rather than the handset, neither a new phone nor a reset will help until the accounts are secured.</p>
      <p>One practical note about our own work, because it bears on who can help. The forensic tool most often named in this area, Amnesty's Mobile Verification Toolkit, is licensed on a consensual use condition: the owner of the data must explicitly consent, free of coercion and fully informed. It is also documented by its own authors as a tool for technologists and investigators that is not intended for end-user self-assessment. A firm running it on someone else's phone at a client's request would be breaching that licence, and we will not do it.</p>

      <p>If the reason you are here is a recording rather than an app, the legal position is a separate subject. Our guide to <a href="/blog/is-call-recording-legal-in-india">whether call recording is legal in India</a> sets out what the law allows, what a court will accept and what lawful interception actually involves.</p>

      <h2>What a sweep can and cannot establish</h2>
      <p>A room or vehicle sweep looks for physical devices in a space. It does not examine a phone, and the two are separate pieces of work that have to be agreed in the scope. Where a phone is the concern, the realistic route is the settings and account audit above, kept alongside a written log, rather than any instrument.</p>
      <p>Even forensic analysis cannot tell you a device is clean. Amnesty's own documentation states that public indicators of compromise are insufficient to determine that a device is clean and that relying on them alone can miss recent traces and give a false sense of security. Anyone promising a definitive clean result for a phone is overstating what is possible. Our <a href="/blog/bug-sweeping-in-india">national guide</a> covers how a sweep is scoped, the <a href="/blog/how-to-detect-hidden-cameras">guide to hidden cameras</a> covers rooms, the <a href="/blog/vehicle-gps-tracking">guide to vehicle trackers</a> covers cars, and the <a href="/blog/signs-your-office-is-bugged">guide to office indicators</a> covers the workplace version of the same question.</p>

      <h2>Frequently asked questions</h2>
      <div class="faq">
${faqHtml(phoneMonitoringFaqs)}
      </div>

      <div class="note">
        <p><strong>About this guide.</strong> Published by BugSweepingTSCM. The site's founder is <a href="/meet-the-founder">Hardesh Bhardwaj</a>, founder of ADA Advance Detective Agency Pvt. Ltd. (CIN U74999DL2021PTC390132) and in practice since 2013. Statutory provisions were checked against the consolidated text of the Information Technology Act, 2000 and the gazette text of the Bharatiya Nyaya Sanhita, 2023; platform behaviour against Apple's and Google's own support and developer documentation; and helpline scope against the Ministry of Women and Child Development and the National Commission for Women, on 24 October 2026. Two Indian resources for technology-facilitated abuse were deliberately left out of this page because their current status could not be confirmed. This is general information and not legal advice, and it is not a safety plan for your particular situation. Take advice about your own circumstances, and confirm current details with the linked sources.</p>
      </div>
    `,
  },
  {
    slug: "how-to-detect-hidden-cameras",
    title: "How to Detect Hidden Cameras: What Works, What Does Not, and the Law in India",
    seoTitle: "How to Detect Hidden Cameras: What Works and What Does Not",
    metaDescription:
      "How to detect hidden cameras: which phone checks actually work, why a Wi-Fi scan misses memory card cameras, and what Indian law and the police route really are.",
    excerpt:
      "Most advice on finding hidden cameras oversells the phone in your hand and skips the law entirely. This guide sets out what each check can and cannot establish, where cameras have actually been found in India, and the reporting route, including the helpline that is the wrong one to call.",
    date: "2025-03-18",
    dateModified: "2026-10-03",
    readTime: "11 min read",
    category: "Bug Sweep Tips",
    coverImage: "/images/blogs/how-to-detect-hidden-cameras.webp",
    ogImage: "/images/blogs/how-to-detect-hidden-cameras.png",
    coverImageAlt:
      "How to Detect Hidden Cameras guide cover: a row of wall fittings on a dark grid, with one ringed in red and marked by a detection point",
    publishedBy: "BugSweepingTSCM",
    cta: {
      heading: "Worried about a room, a rental or a hotel stay?",
      text: "If something in a room does not add up, a private consultation can help you decide whether a sweep is warranted and what it should cover. Please get in touch from a phone and a place away from the room you are worried about.",
      label: "Request a consultation on WhatsApp",
    },
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://www.bugsweepingtscm.com/blog/how-to-detect-hidden-cameras#webpage",
          url: "https://www.bugsweepingtscm.com/blog/how-to-detect-hidden-cameras",
          name: "How to Detect Hidden Cameras: What Works and What Does Not",
          inLanguage: "en-IN",
          isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" },
          breadcrumb: { "@id": "https://www.bugsweepingtscm.com/blog/how-to-detect-hidden-cameras#breadcrumb" },
          primaryImageOfPage: { "@id": "https://www.bugsweepingtscm.com/blog/how-to-detect-hidden-cameras#primaryimage" },
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
          "@type": "ImageObject",
          "@id": "https://www.bugsweepingtscm.com/blog/how-to-detect-hidden-cameras#primaryimage",
          url: "https://www.bugsweepingtscm.com/images/blogs/how-to-detect-hidden-cameras.png",
          width: 1200,
          height: 630,
        },
        {
          "@type": "BlogPosting",
          "@id": "https://www.bugsweepingtscm.com/blog/how-to-detect-hidden-cameras#article",
          headline: "How to Detect Hidden Cameras: What Works, What Does Not, and the Law in India",
          description:
            "How to detect hidden cameras: which phone checks actually work, why a Wi-Fi scan misses memory card cameras, and what Indian law and the police route really are.",
          datePublished: "2025-03-18",
          dateModified: "2026-10-03",
          image: { "@id": "https://www.bugsweepingtscm.com/blog/how-to-detect-hidden-cameras#primaryimage" },
          mainEntityOfPage: { "@id": "https://www.bugsweepingtscm.com/blog/how-to-detect-hidden-cameras#webpage" },
          inLanguage: "en-IN",
          author: { "@id": "https://www.bugsweepingtscm.com/#organization" },
          publisher: { "@id": "https://www.bugsweepingtscm.com/#organization" },
          about: [
            { "@type": "Thing", name: "Hidden camera detection" },
            { "@type": "Thing", name: "Technical surveillance countermeasures" },
          ],
          isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" },
        },
        {
          "@type": "Organization",
          "@id": "https://www.bugsweepingtscm.com/#organization",
          name: "BugSweepingTSCM",
          url: "https://www.bugsweepingtscm.com",
          logo: "https://www.bugsweepingtscm.com/images/logo/bug-sweep.png",
          email: "info@advancedetectiveagency.com",
          telephone: "+91-8882732221",
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://www.bugsweepingtscm.com/blog/how-to-detect-hidden-cameras#breadcrumb",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.bugsweepingtscm.com" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.bugsweepingtscm.com/blog" },
            { "@type": "ListItem", position: 3, name: "How to Detect Hidden Cameras" },
          ],
        },
        faqJsonLd(hiddenCameraFaqs, "https://www.bugsweepingtscm.com/blog/how-to-detect-hidden-cameras#faq"),
      ],
    },
    content: `
      <div class="answer-box">
        <p><strong>Short answer:</strong> To detect hidden cameras, look first at what has changed in the room: fittings that have recently been repaired, objects that face the bed or the bathroom, and screws or covers that do not match their neighbours. Phone checks help a little. They cannot find a camera that records to a memory card and transmits nothing, which is the type found in several recent Indian cases.</p>
      </div>

      <p>Almost every guide to this subject makes the same two moves. It lists the places a camera might be concealed, and it tells you to wave your phone around. Neither is wrong exactly, but together they leave a reader believing they have checked a room when they have not, and they say nothing about what to do next. This guide takes each method in turn, says what it can and cannot establish, and sets out the Indian legal position and the reporting route, including one helpline that is widely recommended and is the wrong number to call.</p>

      <p>A hidden camera, in the sense people mean when they search for this, is a camera concealed in an object or a fitting so that the people being recorded do not know it is there. The important distinction is not where it is hidden but how it stores and sends what it records. A networked camera joins a Wi-Fi network or runs its own and can in principle be found by looking at network traffic. A locally recording camera writes to a memory card inside itself and may have its radio switched off entirely, which means it appears on no network and emits nothing at all. A camera of the second kind has to be physically collected by whoever placed it. That single difference decides which of the checks below has any chance of working.</p>

      <h2>Where cameras have actually been found in India</h2>
      <p>It is more useful to look at cases that reached an arrest than at a generic list of hiding places. Four recent Indian ones are worth knowing because each carries a lesson that the standard advice misses. One city has gone further than case law and imposed duties on premises themselves, which our guide to <a href="/blog/hidden-cameras-in-hyderabad">hidden cameras in Hyderabad</a> sets out.</p>
      <p>In October 2022 The Tribune reported that two men booked a room at a hotel in <a href="/locations/noida">Noida</a> listed on a booking platform, concealed a camera, checked out, and returned to rebook the same room a week later to collect the device and its footage, which they then used to try to extort the couple who had been recorded. Hotel staff were questioned and found not to be involved. The threat model there is the previous guest, not the management.</p>
      <p>In September 2024 the Free Press Journal reported the arrest of a landlord's son in Shakarpur, <a href="/locations/delhi">Delhi</a>, who had concealed cameras inside the light bulb holders of a tenant's bathroom and bedroom. She found out because she noticed an unfamiliar laptop session logged into her messaging account, logged every device out, and then searched the flat. He had repeatedly asked for the keys saying he needed to carry out electrical repairs, in order to retrieve the memory card.</p>
      <p>In October 2025 The Siasat Daily reported that a tenant in Yousufguda, <a href="/locations/hyderabad">Hyderabad</a> had reported a faulty bathroom light fitting, the landlord had entered with an electrician while the couple were at work, and nine days later the tenants noticed a loose screw on that fitting and found a camera behind it. And in November 2025 a device was found in a bathroom at a women's hostel run by an electronics manufacturer at Hosur in <a href="/locations/state/tamil-nadu">Tamil Nadu</a>; a resident spotted it and raised it with the warden, and the enquiry established that another resident had installed it at a third person's instigation.</p>
      <p>Two patterns run through these. The concealment is usually a mains powered fitting, because a camera needs power and a light fitting or socket supplies it without anyone noticing a cable. And the access is usually legitimate: a repair visit, a previous booking, a fellow resident. In three of the four, the person had a reason to be in the room.</p>

      <h2>What the checks on your phone can and cannot do</h2>
      <p>Searches for this topic are dominated by people asking how to check with the phone in their hand. Here is each method against what is actually known about it.</p>

      <h3>The torch and the glint of a lens</h3>
      <p>This one rests on real physics. A lens with a sensor at its focal plane behaves as a retroreflector, sending light back along the axis it came in on far more brightly than a dull surface would. The optical detection patent that underlies commercial lens finders describes exactly that, and it also describes the limitation: vignetting means a large part of the returned light is lost when the geometry is not right. In practice the glint comes back only when your eye, the light and the lens are close to being in line and the lens is squarely facing you. A lens recessed behind a small aperture, or mounted at an angle, is precisely the case where this fails. It is worth doing in a darkened room, and a negative result means very little.</p>

      <h3>The infrared check</h3>
      <p>The claim that a phone camera reveals infrared illuminators is the one most often stated without conditions, including on the earlier version of this page. The honest position has three parts. Silicon image sensors genuinely do respond to near infrared, which is why camera makers place an infrared cut filter in front of the sensor, so that pictures look the way the eye sees them. Whether any given phone shows infrared therefore depends on the phone and on which camera you use, and the rear camera is usually the filtered one. Apple's own support documentation on its face recognition hardware says that <a href="https://support.apple.com/en-in/102381" rel="noopener noreferrer" target="_blank">some cameras might detect infrared light</a>, which is a manufacturer confirming in writing that this is camera dependent rather than a method.</p>
      <p>The part that settles it is simpler. The check can only find a camera whose infrared illuminators are switched on, and those come on in darkness. A camera recording in a lit room, or one with no illuminators at all, emits nothing to see. A negative result from this test tells you nothing whatsoever.</p>

      <h3>Detector apps</h3>
      <p>These cannot work, and the reason is the hardware rather than the quality of the app. A phone has no sensor for radio spectrum and no interface that would hand an application raw spectrum. The sensor such apps generally fall back on is the magnetometer, which exists so the compass works and which responds to screws, hinges, desk frames and speaker magnets at close range, which is why they alarm almost continuously in a furnished room.</p>

      <h3>Scanning the Wi-Fi network</h3>
      <p>A network scan can list the devices on a network you control, which makes it a reasonable inventory tool for your own home. It is much weaker in the situation people actually ask about. A camera recording to a memory card with its radio off has no network presence at all. A camera running its own access point is not on the network you joined. A camera on the building's own network, which is the likely arrangement in a hotel or a let flat, is invisible from the guest network. And the old trick of identifying a device from the manufacturer prefix in its hardware address has largely stopped working, because <a href="https://source.android.com/docs/core/connect/wifi-mac-randomization" rel="noopener noreferrer" target="_blank">Android has randomised those addresses by default since Android 10</a>, so an address you cannot resolve is now most likely an ordinary phone.</p>

      <h2>Can a hidden camera work without Wi-Fi?</h2>
      <p>Yes, and this is the question that decides how much any of the above is worth. A camera that stores to a memory card and keeps its radio off produces no radio emission, joins no network and leaves nothing for a scan or a radio detector to find. That is also why auditing the device list on your own router has limits, which our guide to <a href="/blog/unknown-device-on-my-wifi">an unknown device on your Wi-Fi</a> sets out. It is not an exotic configuration. It is what was used in the Noida hotel case and in the Delhi flat case above, and in both the person who placed it had to come back for the card, which is why both involved a return visit on a pretext.</p>
      <p>This is also the honest limit of professional radio equipment, and the clearest evidence for it comes from the firms that make that equipment. A manufacturer of technical surveillance instruments explains in its own product documentation that its non-linear junction detector exists precisely because it detects the physical properties of a device rather than energy or emissions, so it responds even when the object is switched off. A company that sells spectrum equipment markets a second and completely different instrument on the ground that radio search cannot find a device that is not emitting.</p>

      <h2>What professional instruments add, and what they do not</h2>
      <p>A sweep is a visual, physical and electronic examination, and the electronic part is the smallest of the three more often than people expect. It is worth being specific about what each class of instrument does, because the marketing around them is florid.</p>
      <p>A <strong>non-linear junction detector</strong> transmits a signal and listens for the second and third harmonics that a semiconductor junction sends back, which means it finds electronics whether or not they are powered. What it does not do is identify a camera: it detects the presence of silicon, so a dead charger, a thermostat and a camera module all answer it. It also responds to what the manufacturers call false junctions, where two dissimilar or corroded metals touch, so in a real room it reacts to rusted screws, bed frames and fittings. The usual rule for telling these apart is that electronics return a strong second harmonic and a false junction a strong third, and the same manufacturer documentation notes that some circuits return a strong third harmonic too, so the rule can mislead in both directions. The manufacturer's own manual states plainly that it makes no guarantee about the unit's performance when attempting to detect hidden electronic devices. Half the work is interpretation, which is the real argument for an experienced operator rather than a gadget.</p>
      <p><strong>Thermal imaging</strong> is useful and routinely oversold. The earlier version of this page said a thermal camera reveals heat through walls and ceilings, which is wrong. The largest manufacturer in the field <a href="https://www.flir.com/discover/home-outdoor/can-thermal-imaging-see-through-walls/" rel="noopener noreferrer" target="_blank">states plainly</a> that thermal cameras cannot see through walls, that glass behaves like a mirror so you see nothing through a window, and that they can never see through metal. What a thermal camera reads is surface temperature, so it can show a warm patch on the face of a fitting where something powered sits behind it. It follows from the same manufacturer's point about glass that a camera behind a mirror or a glass panel is thermally invisible.</p>
      <p><strong>Radio spectrum analysis</strong> finds things that are transmitting, at the time they are transmitting. It is the right tool for a networked camera and useless against the memory card case above.</p>

      <p>A concealed lens is one version of this problem. A visible one, held by a person, is another, and the same provisions apply quite differently to it. Our guide to <a href="/blog/taking-photos-without-consent-india">taking photos of someone without consent in India</a> works through what those elements require, and the twenty-four hour rule that applies once an image has been published.</p>

      <h2>The law: two sections that protect different people</h2>
      <p>Neither section fits the case where the camera is openly installed by somebody who also lives there. For that, our guide to <a href="/blog/cctv-in-a-shared-home-kolkata">CCTV inside a shared home</a> sets out the privacy route the Calcutta High Court took instead.</p>
      <p>This is where Indian readers are served worst, and where the position is genuinely worth knowing before anything happens. Two provisions are usually in play, and they do not cover the same ground.</p>
      <div class="table-wrap">
        <table>
          <caption class="sr-only">Comparison of section 77 of the Bharatiya Nyaya Sanhita 2023 and section 66E of the Information Technology Act 2000</caption>
          <thead>
            <tr><th scope="col"></th><th scope="col">BNS section 77</th><th scope="col">IT Act section 66E</th></tr>
          </thead>
          <tbody>
            <tr><th scope="row">Who it protects</th><td>A woman only, in the words of the section</td><td>Any person, regardless of gender</td></tr>
            <tr><th scope="row">Covers watching with no recording</th><td>Yes</td><td>No</td></tr>
            <tr><th scope="row">Subject matter</th><td>A private act, defined inclusively</td><td>The image of a private area, defined exhaustively</td></tr>
            <tr><th scope="row">Covers audio</th><td>No</td><td>No</td></tr>
            <tr><th scope="row">Minimum sentence</th><td>One year, three on a second conviction</td><td>None</td></tr>
            <tr><th scope="row">Maximum</th><td>Three years, seven on a second conviction</td><td>Three years, or a fine up to two lakh rupees, or both</td></tr>
            <tr><th scope="row">In force since</th><td>1 July 2024</td><td>27 October 2009</td></tr>
          </tbody>
        </table>
      </div>
      <p>Section 77 of the <a href="https://egazette.gov.in/WriteReadData/2023/250883.pdf" rel="noopener noreferrer" target="_blank">Bharatiya Nyaya Sanhita, 2023</a> punishes whoever watches, captures the image of, or circulates the image of a woman engaged in a private act where she would ordinarily expect not to be observed. Three things follow from the wording that are easy to miss. Watching alone is the offence, with no recording needed. There is a mandatory minimum of one year. And an explanation to the section makes circulating an image an offence even where the subject consented to it being taken but not to it being shared.</p>
      <p>Section 66E of the Information Technology Act, 2000 is gender neutral but much narrower in subject matter. It reaches capturing, publishing or transmitting the image of a private area, and the section defines that term exhaustively rather than inclusively, so an image that does not show a private area as defined falls outside it.</p>
      <p>Put the two together and two gaps appear that no other page on this subject seems to mention. A man who finds a camera in his hotel bathroom has no voyeurism offence available to him, because section 77 is limited by its own words to a woman; he is left with section 66E, and only if what was captured meets its definition. And nobody of any gender is protected by either section against a covert audio recording, because section 77 speaks of an image and section 66E of a visual image. If your concern is a microphone rather than a lens, neither of these sections is the answer. Where the worry is the phone itself rather than the room, our <a href="/blog/is-someone-monitoring-your-phone">guide to phone monitoring</a> covers that separately.</p>
      <p>On hotels specifically, there is no central Indian rule requiring a hotel to disclose or prohibit cameras in guest rooms. The Ministry of Tourism's star classification scheme is voluntary and its only mention of cameras is a line requiring closed circuit television at strategic locations, which is about security coverage of public areas rather than guest privacy. The Ministry of Home Affairs told Parliament in 2015 that states had been advised to require surveillance systems in places with large footfalls including hotels, and that policing and public order are state subjects, which is the constitutional reason the rules differ by state. Our <a href="/locations">state and city pages</a> set out what individual states actually require, and our guide to <a href="/blog/hidden-cameras-in-hotel-rooms-and-pgs">hidden cameras in hotel rooms, PGs and rented flats</a> covers who placed the devices in the Indian cases and who is answerable depending on how the room was booked.</p>

      <p>A question that follows from all of this is how the device was bought in the first place. Our guide to <a href="/blog/is-it-legal-to-buy-a-spy-camera-in-india">whether it is legal to buy a spy camera in India</a> explains why the purchase itself is the least regulated step, and where the approvals the seller needed actually sit.</p>

      <h2>If you find a camera: what to do, and the number not to call</h2>
      <p>Safety first. If you believe you are in danger, call 112, which is the national emergency number and routes to a police dispatcher.</p>
      <p>Then leave the device where it is. Do not pull it apart, unplug it or take it away, and do not let the premises staff take it, because handling it destroys the thing that would make it useful later. Photograph it in position, note exactly where it was and what it faced, and write down who has had access to the room and when. This is practical advice rather than a legal requirement, but it is the difference between a case that can be proved and one that cannot.</p>
      <p>Report it as a first information report at a police station. Section 173(1) of the <a href="https://egazette.gov.in/WriteReadData/2023/250884.pdf" rel="noopener noreferrer" target="_blank">Bharatiya Nagarik Suraksha Sanhita, 2023</a> carries three rights worth knowing. Information about a cognizable offence may be given irrespective of the area where the offence was committed, which is the zero first information report, so a traveller can report after getting home rather than only at the scene. The information may be given by electronic communication, to be signed within three days. And where a woman gives information about an offence under section 77, the proviso says it shall be recorded by a woman police officer or any woman officer. Section 173(2) entitles the informant to a copy of what was recorded, free of cost and forthwith.</p>
      <p>If the footage is circulating online, or someone is making demands with it, use cybercrime.gov.in in addition. And the correction that matters most: <strong>do not call 1930</strong>. That number is the national helpline for urgent financial cyber fraud, operating as the front end of the financial fraud reporting system, and its published guidance asks callers for transaction details. It is recommended constantly in Indian advice on hidden cameras and it is the wrong desk.</p>
      <p>One more thing worth carrying. Reporting in this area frequently misstates the law: a 2025 report of a changing room case in Madhya Pradesh cited section numbers that mix the new code with the old one and do not exist as given. And in a widely covered 2022 case at a university in Punjab, the allegation that drove national protest, that dozens of videos of other residents had been taken and leaked, was not borne out by the police investigation, which reported finding no objectionable videos of other women on the accused's phone. Numbers circulate faster in these cases than investigations can correct them, which is a good reason to check the provision and the findings rather than rely on a summary.</p>

      <p>One more case is worth keeping in mind, because it is not a hidden camera at all. In the Ahmedabad investigation of February 2025 the footage being sold had come from a hospital's own recorder, reached from outside. Our guide to <a href="/blog/can-cctv-be-hacked-ahmedabad">whether CCTV can be hacked</a> covers what that means for a premises you are asked to trust.</p>

      <h2>What a sweep can and cannot establish</h2>
      <p>A sweep reports what was found in the areas examined, by the methods used, under the conditions present, at the time of the visit. It cannot prove that a room has never been watched, and it cannot keep it clean afterwards, which is the honest starting point for <a href="/blog/how-often-should-a-business-sweep-for-bugs">deciding how often to repeat one</a>. A camera that was powered down during the visit, or one storing to a memory card, may leave nothing for any instrument to register, which is why the physical examination matters as much as anything electronic. If you want the preparation sequence before a sweep, including what to agree in advance about a device that is found, our <a href="/blog/bug-sweeping-in-india">national guide</a> covers it, the <a href="/blog/signs-your-office-is-bugged">guide to office indicators</a> covers the workplace version of the same question, and if the space you are worried about is a car rather than a room, the <a href="/blog/vehicle-gps-tracking">guide to vehicle trackers</a> is the one to read.</p>

      <h2>Frequently asked questions</h2>
      <div class="faq">
${faqHtml(hiddenCameraFaqs)}
      </div>

      <div class="note">
        <p><strong>About this guide.</strong> Published by BugSweepingTSCM. The site's founder is <a href="/meet-the-founder">Hardesh Bhardwaj</a>, founder of ADA Advance Detective Agency Pvt. Ltd. (CIN U74999DL2021PTC390132) and in practice since 2013. The provisions cited were checked against the official texts of the Bharatiya Nyaya Sanhita, 2023, the Bharatiya Nagarik Suraksha Sanhita, 2023 and the Information Technology Act, 2000, and the reporting routes against the Ministry of Home Affairs and the Indian Cybercrime Coordination Centre, on 3 October 2026. This is general information and not legal advice. Take advice about your own situation, and confirm current details with the linked sources.</p>
      </div>
    `,
  },
  {
    slug: "signs-your-office-is-bugged",
    title: "Signs Your Office Is Bugged: Which Ones Actually Mean Anything",
    seoTitle: "Signs Your Office Is Bugged: What Actually Means Anything",
    metaDescription:
      "Most signs your office is bugged are unreliable. What clicks on a call, flickering lights and detector apps really indicate, and the two signs that matter.",
    excerpt:
      "Clicks on the line, a hot phone, flickering lights: the classic warnings are repeated on almost every page about this, and most of them have ordinary technical explanations. This guide separates the folklore from the two indicators that genuinely change the odds.",
    date: "2025-04-02",
    dateModified: "2026-10-03",
    readTime: "8 min read",
    category: "Corporate Security",
    coverImage: "/images/blogs/signs-your-office-is-bugged.webp",
    ogImage: "/images/blogs/signs-your-office-is-bugged.png",
    coverImageAlt:
      "Signs Your Office Is Bugged guide cover: a mostly flat signal trace on a dark grid with a single red spike marked by a detection point",
    publishedBy: "BugSweepingTSCM",
    cta: {
      heading: "Not sure whether what you are seeing means anything?",
      text: "If a specific access event or a specific leak is worrying you, a private consultation can help you work out whether a sweep is the right response and what it should cover. Please get in touch from a phone and a place away from the room in question.",
      label: "Request a consultation on WhatsApp",
    },
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://www.bugsweepingtscm.com/blog/signs-your-office-is-bugged#webpage",
          url: "https://www.bugsweepingtscm.com/blog/signs-your-office-is-bugged",
          name: "Signs Your Office Is Bugged: What Actually Means Anything",
          inLanguage: "en-IN",
          isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" },
          breadcrumb: { "@id": "https://www.bugsweepingtscm.com/blog/signs-your-office-is-bugged#breadcrumb" },
          primaryImageOfPage: { "@id": "https://www.bugsweepingtscm.com/blog/signs-your-office-is-bugged#primaryimage" },
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
          "@type": "ImageObject",
          "@id": "https://www.bugsweepingtscm.com/blog/signs-your-office-is-bugged#primaryimage",
          url: "https://www.bugsweepingtscm.com/images/blogs/signs-your-office-is-bugged.png",
          width: 1200,
          height: 630,
        },
        {
          "@type": "BlogPosting",
          "@id": "https://www.bugsweepingtscm.com/blog/signs-your-office-is-bugged#article",
          headline: "Signs Your Office Is Bugged: Which Ones Actually Mean Anything",
          description:
            "Most signs your office is bugged are unreliable. What clicks on a call, flickering lights and detector apps really indicate, and the two signs that matter.",
          datePublished: "2025-04-02",
          dateModified: "2026-10-03",
          image: { "@id": "https://www.bugsweepingtscm.com/blog/signs-your-office-is-bugged#primaryimage" },
          mainEntityOfPage: { "@id": "https://www.bugsweepingtscm.com/blog/signs-your-office-is-bugged#webpage" },
          inLanguage: "en-IN",
          author: { "@id": "https://www.bugsweepingtscm.com/#organization" },
          publisher: { "@id": "https://www.bugsweepingtscm.com/#organization" },
          about: [
            { "@type": "Thing", name: "Technical surveillance countermeasures" },
            { "@type": "Thing", name: "Covert listening device" },
          ],
          isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" },
        },
        {
          "@type": "Organization",
          "@id": "https://www.bugsweepingtscm.com/#organization",
          name: "BugSweepingTSCM",
          url: "https://www.bugsweepingtscm.com",
          logo: "https://www.bugsweepingtscm.com/images/logo/bug-sweep.png",
          email: "info@advancedetectiveagency.com",
          telephone: "+91-8882732221",
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://www.bugsweepingtscm.com/blog/signs-your-office-is-bugged#breadcrumb",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.bugsweepingtscm.com" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.bugsweepingtscm.com/blog" },
            { "@type": "ListItem", position: 3, name: "Signs Your Office Is Bugged" },
          ],
        },
        faqJsonLd(officeBuggedFaqs, "https://www.bugsweepingtscm.com/blog/signs-your-office-is-bugged#faq"),
      ],
    },
    content: `
      <div class="answer-box">
        <p><strong>Short answer:</strong> Most of the classic signs that an office is bugged are unreliable. Clicks on a call, a hot phone and flickering lights all have ordinary technical causes that have nothing to do with surveillance. Two things genuinely change the odds: unexplained physical access to the room, and a closely held fact surfacing where it could not have been guessed.</p>
      </div>

      <p>Search this question and you will find the same five or six warning signs repeated almost word for word. Very few of those pages say where the claims come from, and several of them describe effects that stopped being diagnostic when telephone networks went digital. This guide takes each one, gives the actual mechanism, and says plainly whether it tells you anything.</p>

      <p>Electronic eavesdropping in an office means a device or a piece of software capturing conversation or images without the consent of the people in the room. It falls into three classes that behave very differently. A planted radio transmitter emits a signal and can in principle be found by a radio search. A passive recorder stores to internal memory and emits nothing at all, so there is no signal to find. A compromised endpoint, such as a laptop, a desk phone or a video conferencing codec, uses a microphone that is already in the room and sends audio out inside ordinary encrypted network traffic. A meeting room display is a networked device of the same family, and our guide to <a href="/blog/is-my-smart-tv-spying-on-me">what a smart TV actually collects</a> covers what one reports by default. Technical surveillance countermeasures (TSCM) is the discipline of searching for the first two, and our guide to <a href="/blog/how-to-find-a-listening-device">how to find a listening device</a> sets out the power and acoustic limits that decide where either of them can realistically sit. The third is a cybersecurity problem, and no radio sweep will find it.</p>

      <h2>Which classic signs survive scrutiny</h2>
      <div class="table-wrap">
        <table>
          <caption class="sr-only">Commonly cited signs that an office is bugged, the actual mechanism behind each, and whether it indicates surveillance</caption>
          <thead>
            <tr><th scope="col">The classic sign</th><th scope="col">What is actually happening</th><th scope="col">Does it indicate bugging?</th></tr>
          </thead>
          <tbody>
            <tr><td>Clicks, static or echo on a call</td><td>Network jitter, packet loss, or a microphone re-capturing the loudspeaker output</td><td>No</td></tr>
            <tr><td>Dialling *#21# reveals a tap</td><td>A GSM code that reports call forwarding status</td><td>No</td></tr>
            <tr><td>Radios or speakers buzz in the room</td><td>Audio rectification of burst transmissions from 2G handsets</td><td>Rarely, and much less than it once did</td></tr>
            <tr><td>Phone battery drains, phone runs hot</td><td>Ordinary battery, app and charging behaviour (see the <a href="/blog/is-someone-monitoring-your-phone">phone monitoring guide</a>)</td><td>No, and there is no physical path from a room device to your phone</td></tr>
            <tr><td>Lights flicker</td><td>Loose or degraded neutral, motor inrush, LED driver and dimmer mismatch</td><td>No</td></tr>
            <tr><td>A detector app alarms</td><td>The magnetometer responding to metal, or a Wi-Fi scan listing the neighbours</td><td>No</td></tr>
            <tr><td>A closely held fact appears elsewhere</td><td>Depends entirely on how specific the fact was and how small the group holding it</td><td>Sometimes, with discipline</td></tr>
            <tr><td>Unexplained access to the room</td><td>Someone had the opportunity to place something</td><td>Yes, this is the strongest one</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Why clicks and static are not evidence of a tap</h2>
      <p>The clicking telephone belongs to an era of physical bridging taps on analogue copper lines. Interception today is carried out inside the operator's network by reconfiguring equipment there, which means nothing is added to your line, your handset or your room for you to hear. In India that activity sits under the Telecommunications Act 2023, with the Telecommunications (Procedures and Safeguards for Lawful Interception of Messages) Rules, 2024 made under section 20, and an interception order runs for a limited period before it must be renewed. Our guide to <a href="/blog/is-my-phone-tapped">whether your phone is tapped</a> sets that machinery out in full, including who signs the order and the 180 day ceiling on it. None of it touches your office.</p>
      <p>The noises people actually hear have documented causes. Microsoft's own call quality guidance for Teams attributes robotic or garbled audio to jitter once it rises past roughly 30 milliseconds, and gaps, clipped syllables and choppy speech to packet loss from congestion or a failing link. Echo it attributes to the microphone picking up the loudspeaker again, which is why a headset usually cures it. A click or a burst of static is telling you about your network and the acoustics of the room (<a href="https://learn.microsoft.com/en-us/microsoftteams/quality-of-experience-review-guide" rel="noopener noreferrer" target="_blank">Microsoft Learn</a>).</p>

      <h2>Does *#21# show whether your phone is tapped?</h2>
      <p>No. That string is a supplementary service code defined in the GSM standards, specifically the man machine interface codes in 3GPP TS 22.030. The interrogation form asks the network about a given service, and service code 21 is call forwarding unconditional, the setting that sends every incoming call somewhere else. Dialling it returns the status of call forwarding and nothing else.</p>
      <p>It has no relationship to interception, which is not implemented as call forwarding and is designed not to be visible to the subscriber. The code circulates because the response looks technical and alarming to someone who has not seen one before. If it reports that forwarding is active, the useful conclusion is that someone may have set up call forwarding on the account, which is worth sorting out with the operator, and is a different problem.</p>

      <h2>The one sign with real physics behind it, and why it has faded</h2>
      <p>The buzz that a mobile phone produces in nearby speakers is a genuine, well documented effect. Texas Instruments describes the mechanism in its application note on time division multiple access noise: a GSM transmitter can draw more than an amp, pulsing at a repetition rate of 217 hertz with a pulse width of about half a millisecond, and that envelope is rectified by semiconductor junctions in nearby audio circuits, which makes it audible (<a href="https://www.ti.com/lit/an/snaa033d/snaa033d.pdf" rel="noopener noreferrer" target="_blank">TI application note</a>).</p>
      <p>So the effect is real. The inference drawn from it is not. That buzz is the signature of 2G burst transmission, and it is produced identically by any ordinary 2G capable handset in the room, including the ones belonging to the people in the meeting. Newer uplinks do not have the same abrupt on and off envelope, so the effect has largely receded with the networks that caused it. Hearing it tells you a 2G class transmitter is near your cabling. It does not distinguish a covert device from a colleague's old phone, and its absence tells you nothing at all about Wi-Fi, Bluetooth, or anything that is recording without transmitting.</p>

      <h2>Why detector apps on a phone cannot do this</h2>
      <p>The limitation here is architectural rather than a question of app quality. Android's sensor framework exposes motion sensors, environmental sensors and position sensors, and there is no sensor type for radio frequency spectrum and no interface that hands an application raw spectrum (<a href="https://developer.android.com/develop/sensors-and-location/sensors/sensors_overview" rel="noopener noreferrer" target="_blank">Android developer documentation</a>). The radios in a phone are tuned receivers for particular standards, so they can list Wi-Fi networks and Bluetooth advertisements, which is a network scan rather than a search of the airwaves. A transmitter that does not speak a protocol the phone implements is invisible to it.</p>
      <p>The sensor these apps usually fall back on is the magnetometer, which measures the ambient geomagnetic field in microtesla and exists to make a compass work. It responds to screws, hinges, desk frames and speaker magnets at close range, which is why such apps alarm almost continuously in a furnished office. The camera is no better placed, because camera modules carry an infrared cut filter, and covert illuminators commonly sit at a wavelength chosen to be invisible.</p>
      <p>There is credible research in this direction, and it is worth knowing how narrow it is. Work presented at ACM SenSys in 2021 used the time of flight sensor on a phone to detect the retro-reflection from a camera lens, reporting detection of 88.9 per cent of hidden cameras against 46.0 per cent for the naked eye in a study with 379 participants. That result needs a time of flight sensor, finds camera lenses only, says nothing whatever about microphones, and is a research prototype rather than anything in an app store.</p>

      <h2>What actually changes the risk: who had access to the room</h2>
      <p>The same logic applies to a network rather than a room: an unfamiliar entry in a router's client list is a question about who has had access to the premises or the password, which our guide to <a href="/blog/unknown-device-on-my-wifi">an unknown device on your Wi-Fi</a> works through.</p>
      <p>A device has to be placed. Placement needs opportunity, which is why an unexplained opportunity is a real change in your risk while a symptom almost always has a duller explanation. Access events have the further advantage of being checkable against records, which symptoms are not: visitor logs, work orders, access control data and camera footage either show something or they do not.</p>
      <p>The events worth taking seriously are mundane. Contractors or technicians left unsupervised in sensitive rooms, including electrical, air conditioning, audio visual and cleaning work after hours. Fit out or maintenance work that opens ceilings, walls, power or data runs, which is the one routine reason for anyone to be inside the building fabric. Visitors left alone in a boardroom, including during a break. New mains powered objects nobody ordered, and fittings or faceplates that have moved. Keys and access cards that were never returned, and the escort rule waived once as a favour.</p>
      <p>Two Indian cases make the point better than any list. In the most prominent Indian corporate espionage prosecution, reported in February 2015, documents were taken from ministry offices in <a href="/locations/delhi">Delhi</a> by junior officials using duplicate keys at night and passed on through intermediaries. There was no device at all: it was access, key control and paper. And in May 2026 a junior revenue assistant at a district rural development agency office in Jagatsinghpur, <a href="/locations/state/odisha">Odisha</a> was arrested after a camera he had placed in the women's washroom fell while an employee was using it; the office's own camera records then corroborated his movements (<a href="https://www.orissapost.com/odisha-clerical-staffer-arrested-for-installing-spy-camera-in-womens-washroom-of-office/" rel="noopener noreferrer" target="_blank">Odisha Post</a>). An insider with ordinary access, discovered by accident and by records, not by any of the classic signs.</p>

      <h2>When a leak really is evidence</h2>
      <p>Information surfacing where it should not is the one lay indicator with genuine weight, and it is only as strong as the fact that leaked. A generic outcome, such as a competitor pricing just under you, is weak evidence because it can be modelled from the market. An arbitrary and specific detail is strong: a verbatim phrase, a number that was wrong in the room and wrong again outside it, a named internal objection, a date that was never written down. The question to ask is whether the detail could have been guessed, inferred or reconstructed. If it could, it is not evidence.</p>
      <p>There is a statistical trap here that deserves naming. Stefan Axelsson's work on the base rate fallacy in intrusion detection, published in ACM Transactions on Information and System Security in 2000, showed that when the underlying event is rare, even a detector with a low false alarm rate produces alerts that are overwhelmingly false, because the result depends on how rare the event is and not on the detector's sensitivity alone. Covert devices in a given office are rare and coincidences are common. Once somebody suspects a bug, every click and flicker gets recruited as confirmation, so a suspicion assembled from a stack of individually weak signs is weaker than it feels, not stronger.</p>
      <p>Before reaching for the device explanation, rule out the ones that are usually likelier. Insider disclosure, including by people on their way out. Inference from public signals such as filings, hiring and vendor movement. Carelessness in lifts, cabs, airport lounges and open plan floors. Document and email leaks, forwards and misdirected mail. Shared calendars, which are chronically underrated: a meeting title, an attendee list and a room booking are often visible far beyond the people in the room, and they give away the existence, timing and participants of a confidential discussion without any device. Third parties who legitimately hold the fact, such as counsel, bankers and auditors. And a participant simply recording on the phone in front of them, which is not bugging and which no sweep will ever find.</p>
      <p>The cautionary example is a senior one. In 2010 the then Finance Minister asked for an inquiry into adhesive found at sixteen points across his office suite in North Block. The Intelligence Bureau examined the rooms and concluded the substance was chewing gum, noting that there was no groove or cavity at the points concerned and that at one of them the adhesive carried a coat of paint, indicating it had been there for months (<a href="https://www.dnaindia.com/india/report-intelligence-bureau-bug-in-pranab-mukherjee-s-office-is-chewing-gum-1557660" rel="noopener noreferrer" target="_blank">DNA India, June 2011</a>). The most senior office in the country, a real suspicion, national technical capability brought to bear, and the answer was mundane.</p>

      <h2>The threat a modern office is more likely to face</h2>
      <p>MITRE's ATT&amp;CK knowledge base records audio capture as an observed technique in which an adversary uses the microphone, webcam or call application already on a machine, through ordinary operating system and application interfaces, writing audio to disk and sending it out later. Our guide to <a href="/blog/is-my-laptop-camera-hacked">whether a laptop camera has been hacked</a> covers what the indicator light on that machine does and does not prove. MITRE's own note on it is worth quoting: this kind of technique cannot easily be mitigated with preventive controls, because it abuses features the system is supposed to have (<a href="https://attack.mitre.org/techniques/T1123/" rel="noopener noreferrer" target="_blank">MITRE ATT&amp;CK T1123</a>).</p>
      <p>Set that against a planted transmitter. The laptop or room codec is already in the room, already has a microphone, already has mains power and a network path out, and has a legitimate reason to be there. A planted transmitter needs covert installation, a power source and an emission that can be found. The cheaper option for an adversary is usually the equipment you installed yourself, and a radio sweep does not detect it, because the traffic leaving the building looks like all the other encrypted traffic.</p>

      <h2>What a sweep can and cannot establish</h2>
      <p>A sweep reports what was found in the areas accessed, by the methods used, under the conditions present, at the time of the visit. It cannot establish a negative, and the distance between those two statements is where most misunderstandings live. Specifically, it cannot establish that a recorder storing to internal memory is absent, because such a device emits nothing to detect. It cannot establish that a device which was not transmitting during the visit is absent, since voice activated and remotely triggered devices are silent most of the time. It says nothing about areas that were not accessed, about a compromised laptop or cloud account, or about a participant recording the meeting. And it cannot keep the room clean after the team leaves.</p>
      <p>That last point has an official statement behind it. The United States Department of Defense instruction governing its own countermeasures programme defines a survey as a thorough visual, electronic and physical examination, three modalities precisely because an electronic search alone is not sufficient, and it records that surveys of facilities with open access have proven counterproductive by giving occupants a false sense of security. A sweep of a room that anyone can walk into is worth less than fixing who can walk into it.</p>
      <p>So the sentence to keep hold of is this: a sweep that found no signals is not the same statement as a room with nothing in it. If that raises the question of how often an examination should be repeated, our <a href="/blog/how-often-should-a-business-sweep-for-bugs">guide to sweep frequency</a> sets out what the published doctrine actually says, which is not what providers say. Any firm willing to blur those two is selling reassurance rather than a result. Our <a href="/blog/bug-sweeping-in-india">national guide</a> covers what a sweep involves in more detail, the <a href="/blog/how-to-detect-hidden-cameras">guide to hidden cameras</a> covers the checks worth doing yourself, and the <a href="/blog/corporate-espionage-india">guide to corporate espionage</a> sets out what Indian law actually protects when information leaves a company.</p>

      <h2>If you think you have found something</h2>
      <p>Safety comes before evidence. If anyone is in immediate danger, call 112. Otherwise, leave the object where it is: do not pull it apart, unplug it or take it away, because handling it destroys the thing that would make it useful later. Photograph it in position, note where it was, and write down who has had access to that room and when.</p>
      <p>A suspected offence is a matter for the local police. Cyber complaints, including the publication of private images, can be filed at cybercrime.gov.in. It is worth knowing that 1930 is the helpline for urgent financial cyber fraud rather than a general number for this situation, which is a common mix up. If the room may still be live, make these arrangements from a different phone in a different place, and tell only the people who have to approve access.</p>

      <h2>Frequently asked questions</h2>
      <div class="faq">
${faqHtml(officeBuggedFaqs)}
      </div>

      <div class="note">
        <p><strong>About this guide.</strong> Published by BugSweepingTSCM. The site's founder is <a href="/meet-the-founder">Hardesh Bhardwaj</a>, founder of ADA Advance Detective Agency Pvt. Ltd. (CIN U74999DL2021PTC390132) and in practice since 2013. Technical claims were checked against manufacturer, standards and platform documentation, and legal and reporting points against official sources, on 3 October 2026. This is general information and not legal advice. Standards, networks and rules change, so confirm current details with the linked sources and take advice about your own situation.</p>
      </div>
    `,
  },
  {
    slug: "corporate-espionage-india",
    title: "Corporate Espionage in India: What the Law Actually Protects",
    seoTitle: "Corporate Espionage in India: What the Law Actually Protects",
    metaDescription:
      "Corporate espionage in India: why there is no trade secrets statute, what the courts actually enforce, why post-employment non-competes fail, and the evidence rule that changed in 2024.",
    excerpt:
      "India has no trade secrets statute, no reliable figure for what corporate espionage costs, and no reported criminal judgment for the theft of business information. This guide sets out what the law does protect, what the courts have actually enforced, and what a sweep does and does not reach.",
    date: "2025-04-20",
    dateModified: "2026-10-03",
    readTime: "11 min read",
    category: "Corporate Security",
    coverImage: "/images/blogs/corporate-espionage-india.webp",
    ogImage: "/images/blogs/corporate-espionage-india.png",
    coverImageAlt:
      "Corporate Espionage in India guide cover: a row of document files on a dark grid with one pulled forward and outlined in red",
    publishedBy: "BugSweepingTSCM",
    cta: {
      heading: "Reviewing how a confidential discussion is protected?",
      text: "If a specific negotiation, boardroom or project is the concern, a private consultation can help you work out which layer the risk actually sits in and whether a sweep is part of the answer. Please get in touch from a phone you trust.",
      label: "Request a consultation on WhatsApp",
    },
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://www.bugsweepingtscm.com/blog/corporate-espionage-india#webpage",
          url: "https://www.bugsweepingtscm.com/blog/corporate-espionage-india",
          name: "Corporate Espionage in India: What the Law Actually Protects",
          inLanguage: "en-IN",
          isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" },
          breadcrumb: { "@id": "https://www.bugsweepingtscm.com/blog/corporate-espionage-india#breadcrumb" },
          primaryImageOfPage: { "@id": "https://www.bugsweepingtscm.com/blog/corporate-espionage-india#primaryimage" },
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
          "@type": "ImageObject",
          "@id": "https://www.bugsweepingtscm.com/blog/corporate-espionage-india#primaryimage",
          url: "https://www.bugsweepingtscm.com/images/blogs/corporate-espionage-india.png",
          width: 1200,
          height: 630,
        },
        {
          "@type": "BlogPosting",
          "@id": "https://www.bugsweepingtscm.com/blog/corporate-espionage-india#article",
          headline: "Corporate Espionage in India: What the Law Actually Protects",
          description:
            "Corporate espionage in India: why there is no trade secrets statute, what the courts actually enforce, why post-employment non-competes fail, and the evidence rule that changed in 2024.",
          datePublished: "2025-04-20",
          dateModified: "2026-10-03",
          image: { "@id": "https://www.bugsweepingtscm.com/blog/corporate-espionage-india#primaryimage" },
          mainEntityOfPage: { "@id": "https://www.bugsweepingtscm.com/blog/corporate-espionage-india#webpage" },
          inLanguage: "en-IN",
          author: { "@id": "https://www.bugsweepingtscm.com/#organization" },
          publisher: { "@id": "https://www.bugsweepingtscm.com/#organization" },
          about: [
            { "@type": "Thing", name: "Corporate espionage" },
            { "@type": "Thing", name: "Trade secret" },
            { "@type": "Thing", name: "Technical surveillance countermeasures" },
          ],
          isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" },
        },
        {
          "@type": "Organization",
          "@id": "https://www.bugsweepingtscm.com/#organization",
          name: "BugSweepingTSCM",
          url: "https://www.bugsweepingtscm.com",
          logo: "https://www.bugsweepingtscm.com/images/logo/bug-sweep.png",
          email: "info@advancedetectiveagency.com",
          telephone: "+91-8882732221",
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://www.bugsweepingtscm.com/blog/corporate-espionage-india#breadcrumb",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.bugsweepingtscm.com" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.bugsweepingtscm.com/blog" },
            { "@type": "ListItem", position: 3, name: "Corporate Espionage in India" },
          ],
        },
        faqJsonLd(corporateEspionageFaqs, "https://www.bugsweepingtscm.com/blog/corporate-espionage-india#faq"),
      ],
    },
    content: `
      <div class="answer-box">
        <p><strong>Short answer:</strong> India has no dedicated trade secrets statute. Confidential business information is protected by contract, by the equitable action for breach of confidence, and by a scattering of criminal and Information Technology Act provisions. Courts protect a secret you can identify precisely and show you took steps to keep. They refuse where the claim is a vague assertion over customer contact details.</p>
      </div>

      <p>Most pages on this subject open with a number: what corporate espionage supposedly costs Indian business every year. This one does not, because no such number exists in any form worth repeating. What follows instead is the legal position, what Indian courts have actually done when companies brought these claims, and an honest account of where the criminal route stops.</p>

      <p>The vocabulary is worth settling first, because it is used loosely everywhere else. The Law Commission of India distinguishes these terms by who is doing it. In economic espionage the actor targeting a company or a government entity to take its trade secrets is a foreign government. In industrial espionage the actor is another company or commercial entity. Misappropriation of trade secrets, which is what most Indian businesses are actually worried about, is a third thing again and is usually committed by somebody who was given the information in the ordinary course of work. These are not interchangeable, and the remedies differ.</p>

      <h2>There is no reliable figure for what this costs, and that is a finding</h2>
      <p>Three statistics circulate in Indian coverage of this subject: that a third of companies have been involved in some form of espionage, that business espionage ranks around ninth among threats to Indian companies with only a fraction of cases detected, and that losses run as high as a given percentage. All three appear in the Law Commission's own report, and the report's footnotes show what they rest on: two newspaper articles, one from 2010 and one from 2018. Neither underlying survey is identified anywhere by title, year, sample or method.</p>
      <p>The Commission then says the quiet part itself. Its report records that because of the inherent nature of corporate espionage, there is no reporting, leading to an absence of cases in this regard. That is India's law reform body stating that the conduct is not reported and therefore cannot be counted. It is a better sentence for a business to act on than any figure, and it is why this page carries none.</p>
      <p>One related caution. Reports on the cost of a data breach are not measurements of corporate espionage. They measure incident response, notification, customer churn and regulatory cost after a breach, usually from vendor-sponsored surveys. Borrowing those numbers to describe espionage is a category error that appears constantly in this niche.</p>

      <h2>What actually protects confidential business information</h2>
      <p>The World Intellectual Property Organization's country overview puts it plainly: there is no separate and exclusive statute to protect undisclosed information or trade secrets in India. Protection comes instead from three directions. Contract does most of the work, through confidentiality clauses and non-disclosure agreements, with damages for breach and injunctions available. Where there is no contract, the equitable action for breach of confidence is the remedy. And a set of criminal and Information Technology Act provisions apply in particular circumstances.</p>
      <p>The Law Commission's own summary of the position is that the law as it stands is fragmented and difficult to navigate. In <a href="https://lawcommissionofindia.nic.in/report_twentysecond/" rel="noopener noreferrer" target="_blank">Report No. 289 of March 2024</a> it recommended a dedicated statute and annexed a draft Protection of Trade Secrets Bill, and separately recommended a second law on economic espionage, on the reasoning that fines and damages lack deterrent impact where a foreign state is the actor. Neither has been enacted, and no such bill appears on the PRS legislative tracker as at October 2026. A parliamentary standing committee had made a similar recommendation in 2021, and a National Innovation Bill drafted in 2008 was never enacted either.</p>

      <h2>What the courts have actually done</h2>
      <p>Four Delhi High Court matters set the shape of this, and the pattern across them is more useful than any one of them.</p>
      <p>In <a href="https://indiankanoon.org/doc/1023088/" rel="noopener noreferrer" target="_blank">Diljeet Titus v. Alfred A. Adebare</a>, decided on 8 May 2006, departing associates of a law firm were restrained from using material they had copied, including the client database. Two things in that judgment are routinely overstated by people citing it. It is an interim order on an injunction application, not a final decree. And it draws a line that cuts against the employer: the court said it was possible that part of the information was retained in the defendants' memory, and if that was used no grievance could be made, which is different from a copy made of the list. They remained free to practise and to use what they had mentally retained.</p>
      <p>A fortnight later, in <a href="https://indiankanoon.org/doc/445135/" rel="noopener noreferrer" target="_blank">American Express Bank v. Priya Puri</a>, decided on 24 May 2006, the same court refused an injunction against a departing head of wealth management. Customer names, addresses and financial details were held not to be trade secrets on those facts, being obtainable independently at small expense. The court said a trade secret is something like a formula, technical know-how or a peculiar mode of business unknown to others, and that routine day to day affairs known to many are not. Its warning about what the bank was really asking for is worth quoting in substance: an injunction of that kind would create a position of once a customer of the bank, always a customer, and in the garb of confidentiality the employer could not be allowed to perpetuate forced employment.</p>
      <p>In <a href="https://indiankanoon.org/doc/65671346/" rel="noopener noreferrer" target="_blank">Stellar Information Technology v. Rakesh Kumar</a>, decided on 29 August 2016, interim relief was again refused, and the court made the structural point: by expanding the definition of confidential information to include material in the public domain, the employer was not protecting proprietary information but seeking a restraint on trade, which is void. An over-broad confidentiality clause does not protect more. It risks protecting nothing.</p>
      <p>The fourth is a trap for anyone reading older commentary. In Navigators Logistics v. Kashif Qureshi, a single judge rejected the plaint outright in September 2018, holding among other things that the plaintiff had not identified the author of the compilation it claimed copyright in, and that its confidentiality pleading was too vague to put to trial. That judgment is quoted everywhere as settled law. It was <a href="https://indiankanoon.org/doc/97547525/" rel="noopener noreferrer" target="_blank">set aside on appeal on 20 November 2024</a>, by a Division Bench which held that the court had gone beyond the plaint and relied on material that belonged at trial, and restored the suit. Only the finding that the post-employment non-compete was void survived. Anyone citing the 2018 reasoning as current authority is working from a judgment that no longer stands.</p>
      <p>The pattern is consistent and it is the practical lesson. Courts protect confidential information where the claimant identifies the secret with precision and can show the steps it actually took to keep it secret. They refuse where the claim is a general assertion over customer contact data dressed up as a trade secret. Which means the security measures you can evidence are not merely operational hygiene. They are part of what makes the information legally protectable in the first place.</p>

      <h2>Post-employment non-competes do not work in India</h2>
      <p>This is the single most misreported point in Indian commercial content. Section 27 of the Indian Contract Act, 1872 makes an agreement restraining anyone from exercising a lawful profession, trade or business void to that extent. A negative covenant operating during the employment can be enforced. A restraint operating after the employment ends is void.</p>
      <p>The Law Commission's report sets out the position: the Supreme Court upheld a covenant restricting an employee during the term of the contract, and in a later judgment distinguished covenants during employment from covenants after it, holding the latter void. That interpretation, the Commission records, has been uniform and consistent from 1874 onwards, followed by all the High Courts and expressly reaffirmed by the Supreme Court, and in an overwhelming majority of decisions courts have refused to restrain a former employee from joining a competitor.</p>
      <p>The notion that a post-employment restraint survives if it is reasonable in duration and geography is English law. It is not Indian law, and an Indian employment contract drafted on that assumption is likely to be unenforceable in the part that matters most.</p>

      <h2>The criminal route, and where it actually stops</h2>
      <p>Several provisions are available, and each has a catch worth knowing.</p>
      <p>Criminal breach of trust under section 316 of the Bharatiya Nyaya Sanhita, 2023 is usually the strongest fit for an employee, because it turns on entrustment and on dishonest use in violation of a legal contract touching the discharge of that trust, which maps directly onto a confidentiality clause. Where the person is a clerk or servant it carries up to seven years. Theft is a poorer fit, because theft requires movable property, and whether information is movable property has never been settled by an Indian court. The nearest Supreme Court authority points the other way: in a 1964 decision the Court observed that electricity is not movable property and that abstracting it was an offence only because the Electricity Act created one by a statutory fiction. No Indian statute creates such a fiction for data.</p>
      <p>On the technology side, section 43(b) of the Information Technology Act, 2000 covers downloading, copying or extracting data without the permission of the owner, and section 66 makes doing so dishonestly or fraudulently criminal. Two corrections are due here, because both errors are widespread. Section 43 is a civil provision adjudicated by an adjudicating officer, with section 66 as its criminal counterpart, and an Indian company therefore has a statutory compensation route as well as a police complaint. And section 72, which many pages offer as the remedy for employee leaks, applies to people who secured access through powers conferred under the Act, meaning officials and certifying authorities. It does not apply to an ordinary employee.</p>
      <p>Then the honest part. We could not establish that any Indian criminal prosecution for the theft or misappropriation of business information has reached a reported judgment, in either direction. The matters on the public record stop at first information report, chargesheet, or proceedings being quashed. The most publicised Indian case of this kind, arising from documents taken from central ministry offices in <a href="/locations/delhi">Delhi</a> in February 2015, is instructive precisely because of how it is usually described. It is commonly presented as an Official Secrets Act prosecution. On the record of the first information report and the chargesheet, the charges were ordinary provisions on trespass, theft, cheating, forgery, receiving stolen property and conspiracy, and the Act was not invoked. A tribunal order of January 2019, in service proceedings brought by one of the suspended employees, records the matter as still pending almost four years after the arrests. No conviction, acquittal or discharge has been publicly reported since. We name no individuals here: every person involved was an accused, and nothing against any of them appears to have been judicially established.</p>

      <h2>The evidence rule changed in 2024, and most advice has not caught up</h2>
      <p>If you recover a device, a camera or a storage medium, what it holds is admissible only with a statutory certificate. Almost every page on this subject, and a great deal of Indian legal commentary, still refers to section 65B of the Indian Evidence Act, 1872. That Act was replaced by the <a href="https://egazette.gov.in/WriteReadData/2023/250882.pdf" rel="noopener noreferrer" target="_blank">Bharatiya Sakshya Adhiniyam, 2023</a> with effect from 1 July 2024, and the governing provision is now section 63.</p>
      <p>The differences are practical. The certificate has to be submitted along with the electronic record at each instance it is tendered for admission, rather than once. It must be signed by the person in charge of the device or of the relevant activities and also by an expert. And it has to be in the form set out in the Schedule, which has a part for the person in charge and a part for the expert, and which requires the device make, model and identifying number along with the hash value of the record, with the algorithm named and the hash report enclosed.</p>
      <p>The consequence for anyone who finds something is simple. A recovered device is worth what its chain of custody and its hash are worth. That is the real reason not to pull a device apart, hand it around the office or let building staff take it away, and it is a better reason than any assurance about reports.</p>

      <h2>Three layers, and what a sweep actually reaches</h2>
      <p>This page is written from the employer's side, for an organisation protecting its own information. The same arrangements look different from the other end, and our guide to <a href="/blog/can-my-employer-monitor-me">what an employer can actually monitor</a> sets out what an employee can and cannot be seen doing.</p>
      <p>Protection here divides into three layers that behave differently, and being honest about which one a sweep addresses is more useful than claiming it is the foundation of everything.</p>
      <p>The first layer is physical and electronic surveillance of a space: a device placed in a room, a vehicle or a fitting. This is what technical surveillance countermeasures address. It is also the layer where the law is clearest, because unlawful interception of a message is an offence under the Telecommunications Act, 2023, which carries up to three years or a substantial fine, and which came into force in June 2024.</p>
      <p>The second layer is intrusion into systems, where the microphone is already in the room because it belongs to a laptop or a conferencing unit, and the audio leaves inside ordinary encrypted traffic. No radio sweep detects that. Our <a href="/blog/signs-your-office-is-bugged">guide to office indicators</a> goes into why that is now the likelier threat in a modern office, and the <a href="/blog/is-someone-monitoring-your-phone">guide to phone monitoring</a> covers the handset version of the same problem.</p>
      <p>The third layer is the insider, and it has no technical countermeasure at all. What it has is governance, and Indian law already requires some of it. The rules defining reasonable security practices under the Information Technology Act expressly include physical security control measures alongside managerial, technical and operational ones, which gives a physical security programme a legal footing rather than merely a prudential one. And a listed company is already required, under the insider trading regulations, to maintain a structured digital database recording who unpublished price sensitive information was shared with, maintained internally with time stamping and audit trails and preserved for at least eight years. That register is exactly the record that makes a leak investigable, and no sweep substitutes for it.</p>
      <p>One last caution about expectations. Even a Supreme Court appointed technical committee, examining devices in the Pegasus matter, reported finding malware in five of the twenty nine devices it examined while being unable to confirm what it was. Detection and attribution are different problems, and attribution is frequently not achievable. Any firm that promises to tell you who was listening is promising something the best resourced investigations in the country have not delivered.</p>

      <h2>What a sweep can and cannot establish</h2>
      <p>A sweep reports what was found in the areas examined, by the methods used, at the time of the visit. It cannot prove a room has never been compromised and it cannot keep it clean afterwards, which is why <a href="/blog/how-often-should-a-business-sweep-for-bugs">how often to repeat one</a> is a question worth answering from doctrine rather than from a vendor's calendar. Against the three layers above, it addresses the first and leaves the second and third to other disciplines. If the concern is a specific negotiation or boardroom, our <a href="/blog/bug-sweeping-in-india">national guide</a> sets out what a sweep involves, and the <a href="/locations">location pages</a> cover how reporting and local rules differ by state. Where executive travel is part of the picture, the <a href="/blog/vehicle-gps-tracking">guide to vehicle trackers</a> covers what can and cannot be found on a car, and our <a href="/locations/mumbai">Mumbai</a> and <a href="/locations/gurugram">Gurugram</a> pages deal with the two places corporate work concentrates most.</p>

      <h2>Frequently asked questions</h2>
      <div class="faq">
${faqHtml(corporateEspionageFaqs)}
      </div>

      <div class="note">
        <p><strong>About this guide.</strong> Published by BugSweepingTSCM. The site's founder is <a href="/meet-the-founder">Hardesh Bhardwaj</a>, founder of ADA Advance Detective Agency Pvt. Ltd. (CIN U74999DL2021PTC390132) and in practice since 2013. Statutory provisions were checked against the official gazette texts of the Bharatiya Nyaya Sanhita, 2023 and the Bharatiya Sakshya Adhiniyam, 2023 and the consolidated Information Technology Act, 2000, and the judgments against their reported texts, on 3 October 2026. This is general information and not legal advice. Take advice about your own situation before acting, and confirm current details with the linked sources.</p>
      </div>
    `,
  },
  {
    slug: "vehicle-gps-tracking",
    title: "GPS Trackers on Vehicles: How They Are Actually Found, and the Law in India",
    seoTitle: "GPS Tracker on Car: How to Find One, and the Law in India",
    metaDescription:
      "GPS tracker on your car: why phone alerts only catch some devices, why radio detection usually fails, how these are really found, and what Indian law does and does not cover.",
    excerpt:
      "Phone alerts now catch some Bluetooth tags, but no phone detects a cellular tracker, and radio detection misses more than it finds. This guide explains what each device actually emits, how the documented Indian cases were really discovered, and where the law has a gap.",
    date: "2025-05-05",
    dateModified: "2026-10-03",
    readTime: "11 min read",
    category: "Vehicle Sweeps",
    coverImage: "/images/blogs/vehicle-gps-tracking.webp",
    ogImage: "/images/blogs/vehicle-gps-tracking.png",
    coverImageAlt:
      "GPS Trackers on Vehicles guide cover: a car silhouette on a dark grid with a small module under the chassis ringed in red",
    publishedBy: "BugSweepingTSCM",
    cta: {
      heading: "Worried that a vehicle is being followed?",
      text: "If a specific vehicle and a specific period of access are the concern, a private consultation can help you decide what a check should cover and what it can realistically establish. Please get in touch from a phone you trust.",
      label: "Request a consultation on WhatsApp",
    },
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://www.bugsweepingtscm.com/blog/vehicle-gps-tracking#webpage",
          url: "https://www.bugsweepingtscm.com/blog/vehicle-gps-tracking",
          name: "GPS Tracker on Car: How to Find One, and the Law in India",
          inLanguage: "en-IN",
          isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" },
          breadcrumb: { "@id": "https://www.bugsweepingtscm.com/blog/vehicle-gps-tracking#breadcrumb" },
          primaryImageOfPage: { "@id": "https://www.bugsweepingtscm.com/blog/vehicle-gps-tracking#primaryimage" },
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
          "@type": "ImageObject",
          "@id": "https://www.bugsweepingtscm.com/blog/vehicle-gps-tracking#primaryimage",
          url: "https://www.bugsweepingtscm.com/images/blogs/vehicle-gps-tracking.png",
          width: 1200,
          height: 630,
        },
        {
          "@type": "BlogPosting",
          "@id": "https://www.bugsweepingtscm.com/blog/vehicle-gps-tracking#article",
          headline: "GPS Trackers on Vehicles: How They Are Actually Found, and the Law in India",
          description:
            "GPS tracker on your car: why phone alerts only catch some devices, why radio detection usually fails, how these are really found, and what Indian law does and does not cover.",
          datePublished: "2025-05-05",
          dateModified: "2026-10-03",
          image: { "@id": "https://www.bugsweepingtscm.com/blog/vehicle-gps-tracking#primaryimage" },
          mainEntityOfPage: { "@id": "https://www.bugsweepingtscm.com/blog/vehicle-gps-tracking#webpage" },
          inLanguage: "en-IN",
          author: { "@id": "https://www.bugsweepingtscm.com/#organization" },
          publisher: { "@id": "https://www.bugsweepingtscm.com/#organization" },
          about: [
            { "@type": "Thing", name: "GPS tracking device" },
            { "@type": "Thing", name: "Technical surveillance countermeasures" },
          ],
          isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" },
        },
        {
          "@type": "Organization",
          "@id": "https://www.bugsweepingtscm.com/#organization",
          name: "BugSweepingTSCM",
          url: "https://www.bugsweepingtscm.com",
          logo: "https://www.bugsweepingtscm.com/images/logo/bug-sweep.png",
          email: "info@advancedetectiveagency.com",
          telephone: "+91-8882732221",
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://www.bugsweepingtscm.com/blog/vehicle-gps-tracking#breadcrumb",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.bugsweepingtscm.com" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.bugsweepingtscm.com/blog" },
            { "@type": "ListItem", position: 3, name: "GPS Trackers on Vehicles" },
          ],
        },
        faqJsonLd(vehicleTrackerFaqs, "https://www.bugsweepingtscm.com/blog/vehicle-gps-tracking#faq"),
      ],
    },
    content: `
      <div class="answer-box">
        <p><strong>Short answer:</strong> A phone will warn you about some Bluetooth item trackers and about none of the cellular ones. Radio detection only works while a device is transmitting, and these are built to stay silent. In every documented Indian case, the tracker was found by physical inspection, usually at a workshop. A silent phone and a clean radio scan are not the same thing as a clean car.</p>
      </div>

      <p>The phrase that causes most of the confusion here is "GPS detector". A tracker does not transmit GPS. It receives it, passively, the way a radio receives a broadcast, and that reception emits nothing at all. What a tracker does transmit is a report to a mobile network, and only when it has something to send. Everything useful about finding one follows from that distinction, and almost no page on this subject makes it.</p>

      <p>There are three device classes and they behave so differently that advice written for one is misleading for another. A <strong>consumer Bluetooth item tracker</strong>, such as an AirTag or a similar tag, is cheap, has no SIM, and reports its position by borrowing passing phones. A <strong>cellular tracker</strong> carries its own SIM, is usually battery powered with a magnet or wired into the vehicle, and uploads over the mobile network. A <strong>passive logger</strong> stores positions to internal memory and transmits nothing whatever, so somebody has to come back and collect it. The detection method that works against the first is useless against the third.</p>

      <h2>What your phone will and will not tell you</h2>
      <p>This is the one area where things have genuinely improved. Apple and Google proposed a joint specification for detecting unwanted location trackers in May 2023 and shipped it on 13 May 2024, in iOS 17.5 and on Android 6 and later. It is a real capability and it works.</p>
      <p>Its limits are set by the platforms rather than by you. Google's own documentation states that unknown tracker alerts work with Find Hub network compatible tags, headphones and Apple AirTags, and the manufacturers it gives switch-off instructions for are a short list. <a href="https://support.google.com/android/answer/13658562" rel="noopener noreferrer" target="_blank">That list does not include Tile, and it does not include Samsung's Galaxy SmartTag.</a> So even within Bluetooth tags, silence from your phone does not mean nothing is there.</p>
      <p>The conditions are easy to break without realising. Apple's support documentation requires iOS 17.5 or later, Location Services on, <strong>Significant Locations switched on</strong> under System Services, Bluetooth on, tracking notifications allowed, and the phone not in Airplane Mode. Significant Locations is exactly the setting a privacy-minded person turns off. Doing so switches off their own tracker detection, and nothing tells them that.</p>
      <p>Two further limitations come from Apple itself and deserve to be better known. If an item has been with you overnight, <a href="https://support.apple.com/en-in/119874" rel="noopener noreferrer" target="_blank">its identifier may have changed</a>, and the system uses that identifier to decide that the same item is moving with you, so the detection can break on precisely the device that has been with you longest. And disabling Find My, Bluetooth or Location Services on your own phone does not stop the tag's owner seeing its location, which is one reason <a href="/blog/unknown-tracker-detected">an unknown tracker alert needs a different response</a> from a suspected app. Switching off your own radios protects nobody.</p>
      <p>Google's manual scan is useful but narrow: it takes about ten seconds, and Google notes that trackers appearing in a manual scan are near you now but may not have been travelling with you. Past alerts are deleted after forty eight hours, so a screenshot at the time is worth more than a memory of it.</p>
      <p><strong>And no phone alert of any kind detects a cellular tracker.</strong> The alerts work by watching Bluetooth advertisements from tags that participate in a finder network. A device with its own SIM is not advertising to your phone and never appears.</p>

      <h2>Why scanning for signals mostly fails</h2>
      <p>Radio detection can only find a transmitter while it is transmitting, and cellular trackers are designed around not transmitting. Manufacturer documentation for this class of device describes sleep modes in which the positioning receiver is put to sleep and the mobile modem is switched off entirely, with the device storing positions and waking briefly to upload before shutting the modem down again. One consequence the manufacturers state plainly is that you cannot even send the device a message while it is in that state, because its modem is off most of the time.</p>
      <p>Many deployments are also motion triggered, waking on movement. Put those together and the implication for a sweep is uncomfortable but honest: a parked car being examined for twenty minutes is being examined during exactly the period when a well configured tracker has least reason to say anything. A clean radio result over a short window is weak evidence.</p>
      <p>The passive logger sets the hard ceiling. It has no modem at all, so there is no emission to detect at any price point, and the only way it is ever found is by somebody looking.</p>
      <p>Where radio work does have a future, the method is instructive. Researchers at NYU Tandon School of Engineering presented work at a USENIX vehicle security workshop in August 2025 on detecting concealed cellular trackers using an inexpensive handheld spectrum analyser, by monitoring the mobile network uplink bands that the tracker uses to talk to the network, at close range. Note what they watch: not GPS, which the device only listens to, but the device's own transmissions outward. That is the correct mental model for anyone assessing a detection claim.</p>

      <h2>How the Indian cases were actually discovered</h2>
      <p>Four documented Indian matters make the point better than any argument, because in none of them did a detector find the device.</p>
      <p>In the murder of a former Haryana MLA at Bahadurgarh in February 2024, a CBI chargesheet filed the following May recorded that his vehicle had been tracked for days using a portable GPS device attached magnetically to the spare wheel, bought from a shop in Delhi and activated using a false identity, with the account accessed from an overseas address. The device was recovered when the vehicle was taken to a dealership for inspection, after the murder, prompted by what the arrested men said. Nobody had checked the car while it mattered.</p>
      <p>In <a href="/locations/delhi">Delhi</a> in 2025 a portable GPS device was found on a vehicle belonging to a political party's state president, and the trigger was an intercepted phone call rather than any sweep. A police team was sent to conduct an anti sabotage check and found it. The same report carries a detail worth holding on to: in other cases the devices had later been removed by the people who placed them. A covert tracker is often retrieved, which means a sweep conducted after the fact can come back genuinely clean and still not answer the question you are asking.</p>
      <p>In <a href="/locations/ahmedabad">Ahmedabad</a> in 2023 a woman's iPhone warned her in May that an AirTag was moving with her. The alerts recurred over the following months, including for her driver and her daughter. She raised it with the cyber cell in July, and it was only at the end of August, with help at a car service station, that the tag was located, stuck under the seat cover behind the driver's seat. The platform alert worked and did its job. What it could not do was tell her where the device was. A workshop and a physical search did that.</p>
      <p>And in <a href="/locations/gurugram">Gurugram</a> in 2021 a doctor found a portable tracker, with a SIM inside it, entirely by accident, when her phone slipped from her hand near the gearbox and she saw a box fixed inside the car. She alleged it had been installed with the help of her car dealer, who had access to her keys. Every one of these turns on physical access to the vehicle: a dealership, a service visit, a driver, a valet, somebody with a spare key. That is the thing to audit.</p>

      <h2>What Indian law does and does not cover</h2>
      <p>Here is the uncomfortable part, and it is stated wrongly almost everywhere. <strong>There is no Indian offence of covertly tracking an adult's location.</strong> Cases are prosecuted by analogy, under provisions written for other things.</p>
      <p>Stalking under section 78 of the Bharatiya Nyaya Sanhita, 2023 is the provision usually cited, and it carries real limits on its own words. It opens with "any man who" and protects "a woman", so it is gender specific in both directions: a man who finds a tracker, or a woman tracked by another woman, or a company director tracked by a competitor, is outside it. Its first limb requires following together with repeated attempts at contact, which a silent tracker generating no contact does not obviously satisfy. Its second limb covers monitoring a woman's use of the internet, email or other electronic communication, which is not the same as monitoring where her car is. Where tracking is accompanied by calls, messages or someone turning up, the provision becomes much stronger.</p>
      <p>The provisions that fit the physical act better are less glamorous. Criminal trespass under section 329 is gender neutral and covers entering upon property in another's possession with intent to commit an offence or to intimidate, insult or annoy, which is a low threshold. Its penalty is small, up to three months or a fine of five thousand rupees, and because a car is not a dwelling the heavier house trespass penalty does not apply. If installing the device involved cutting or splicing, as a hardwired unit would, mischief may also be available.</p>
      <p>One correction worth making, because Indian reporting repeats it. Section 66E of the Information Technology Act is sometimes cited in tracker cases, including in the Ahmedabad matter. On its own text that section requires the image of a private area, as the section exhaustively defines that term. It does not cover location data, and a charge under it for a Bluetooth tag looks hard to sustain. A better argument exists for a device plugged into a vehicle's diagnostic port, which can be framed as access to a computer resource without the owner's permission under sections 43 and 66, but we have found no Indian judgment applying those sections to a vehicle, so treat it as arguable rather than settled. A magnet stuck to the chassis touches no computer resource at all.</p>

      <h2>Reporting it, and the fourteen day rule nobody mentions</h2>
      <p>Report to the local police, not to 1930. That helpline is for urgent financial cyber fraud, and a device bolted to a car is the wrong desk for it. Use the national cyber portal only if there is a genuine electronic element alongside, such as an account compromise.</p>
      <p>Section 173(1) of the Bharatiya Nagarik Suraksha Sanhita, 2023 lets information about a cognizable offence be given at any police station irrespective of where the offence was committed, orally or by electronic communication, with an electronic report to be signed within three days, and section 173(2) entitles you to a free copy forthwith. Where a woman gives information about a section 78 offence, the proviso requires it to be recorded by a woman police officer or any woman officer.</p>
      <p>The provision worth knowing in advance is section 173(3). For a cognizable offence punishable with three years or more but less than seven, the station officer may, with prior permission from an officer not below Deputy Superintendent rank, conduct a preliminary enquiry for up to fourteen days to see whether a prima facie case exists, instead of registering a case immediately. Stalking under section 78 carries up to three years on a first conviction, which puts it inside that band. So being told the matter will be looked into first is not necessarily obstruction. Ask whether a preliminary enquiry under section 173(3) has been authorised, and by whom. If information is refused altogether, section 173(4) lets you send the substance in writing by post to the Superintendent of Police, and if that fails, to apply to a Magistrate.</p>
      <p>On identifying the owner, both platforms route this through the police rather than through you. Apple says law enforcement can request available information to support an investigation, and Google says the same. There is one trap in the sequence. Google's documentation notes that some trackers, if switched off, may be factory reset and no longer linked to their original owner, in which case law enforcement cannot establish who owned it. Switching the device off protects your movements and can destroy the attribution at the same time. Google declines to give a blanket instruction for exactly this reason, noting that you may prefer to leave a tracker on if turning it off could be unsafe. Photograph it in place, record where it was, and take advice before disturbing it.</p>

      <p>Not every camera in a vehicle is somebody else's doing, and the one most owners fit themselves raises its own questions. Our guide to <a href="/blog/are-dash-cams-legal-in-india">whether dash cams are legal in India</a> follows a single clip from the windscreen onwards, including the certificate without which the file is not yet evidence.</p>

      <h2>Why a jammer is not an answer</h2>
      <p>People reach for this quickly and it is worth being unambiguous. The Department of Telecommunications advisory publicised by the Press Information Bureau in July 2022 states that the use of a cellular signal jammer, GPS blocker or other signal jamming device is generally illegal except as specifically permitted by the Government of India, that private sector organisations and private individuals cannot procure or use jammers in India, and that advertising, selling, distributing or importing them is unlawful.</p>
      <p>The operative policy has moved on since, which most pages have not noticed: the current jammer guidelines, updated at the end of December 2025, confine procurement to central ministries, state governments and union territory administrations, the defence forces, central armed police forces and security agencies under government control, through two designated public sector undertakings, with model approval by a board of officers. There is no route by which a private individual lawfully obtains one. Enforcement sits with the wireless wing of the Department of Telecommunications, which can seize equipment and have a case registered.</p>
      <p>There is also a practical reason the advice is bad. Delhi police reporting in 2023 described a car theft gang using jammers to defeat tracking on stolen vehicles, and noted that jammers are bought by people who suspect they are being followed. Using one puts you in the same legal category as the people stealing the cars, and it does nothing about a logger that was never transmitting.</p>

      <h2>What a vehicle check can and cannot establish</h2>
      <p>A vehicle check reports what was found in the areas examined, by the methods used, at the time of the visit. Against this threat it is mostly a physical search, because that is what actually works: the documented cases were resolved at workshops and by hand, not by instruments. It cannot establish that a device was never fitted, since trackers are routinely retrieved by whoever placed them, and it cannot establish that nothing is recording without transmitting beyond the areas that were opened and examined.</p>
      <p>The more useful question is usually access. Who has had the keys, when was the car last serviced or valet parked, and who had an unsupervised period with it. Our <a href="/blog/bug-sweeping-in-india">national guide</a> sets out how a sweep is scoped, the <a href="/blog/how-to-detect-hidden-cameras">guide to hidden cameras</a> covers the same reasoning for rooms, the <a href="/blog/signs-your-office-is-bugged">guide to office indicators</a> covers the workplace equivalent, and the <a href="/locations">location pages</a> cover how reporting differs by state.</p>

      <h2>Frequently asked questions</h2>
      <div class="faq">
${faqHtml(vehicleTrackerFaqs)}
      </div>

      <div class="note">
        <p><strong>About this guide.</strong> Published by BugSweepingTSCM. The site's founder is <a href="/meet-the-founder">Hardesh Bhardwaj</a>, founder of ADA Advance Detective Agency Pvt. Ltd. (CIN U74999DL2021PTC390132) and in practice since 2013. Statutory provisions were checked against the official gazette texts of the Bharatiya Nyaya Sanhita, 2023 and the Bharatiya Nagarik Suraksha Sanhita, 2023, the platform behaviour against Apple's and Google's own support documentation, and the jammer position against the Press Information Bureau release and the current Cabinet Secretariat guidelines, on 3 October 2026. This is general information and not legal advice. Take advice about your own situation, and confirm current details with the linked sources.</p>
      </div>
    `,
  },
  {
    slug: "bug-sweeping-in-india",
    title: "Bug Sweeping in India: What a Sweep Involves, the Law and How to Prepare",
    seoTitle: "Bug Sweeping in India: Process, Law, Cost and Preparation",
    metaDescription:
      "Bug sweeping in India explained: how a TSCM sweep works, which tools find which devices, the law on hidden cameras and jammers, and how to prepare.",
    excerpt:
      "A plain guide to bug sweeping in India: what a professional TSCM sweep checks, which instruments find which devices, where Indian law stands on hidden cameras and jammers, what drives the cost, and how to book a sweep without alerting whoever may be listening.",
    date: "2026-09-19",
    readTime: "12 min read",
    category: "TSCM Guides",
    coverImage: "/images/blogs/bug-sweeping-in-india.webp",
    ogImage: "/images/blogs/bug-sweeping-in-india.png",
    coverImageAlt:
      "Bug Sweeping in India guide cover: title text above a red spectrum analyser trace with one signal peak marked, on a dark navy grid",
    publishedBy: "BugSweepingTSCM",
    cta: {
      heading: "Not sure whether you need a sweep?",
      text: "If something about your home, office or vehicle does not add up, a private consultation can help you decide whether a sweep is needed and what it should cover. Please get in touch from a phone you trust, away from the space you are worried about.",
      label: "Request a consultation on WhatsApp",
    },
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://www.bugsweepingtscm.com/blog/bug-sweeping-in-india#webpage",
          url: "https://www.bugsweepingtscm.com/blog/bug-sweeping-in-india",
          name: "Bug Sweeping in India: Process, Law, Cost and Preparation",
          inLanguage: "en-IN",
          isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" },
          breadcrumb: { "@id": "https://www.bugsweepingtscm.com/blog/bug-sweeping-in-india#breadcrumb" },
          primaryImageOfPage: { "@id": "https://www.bugsweepingtscm.com/blog/bug-sweeping-in-india#primaryimage" },
          about: { "@type": "Country", name: "India" },
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
          "@type": "ImageObject",
          "@id": "https://www.bugsweepingtscm.com/blog/bug-sweeping-in-india#primaryimage",
          url: "https://www.bugsweepingtscm.com/images/blogs/bug-sweeping-in-india.png",
          width: 1200,
          height: 630,
        },
        {
          "@type": "BlogPosting",
          "@id": "https://www.bugsweepingtscm.com/blog/bug-sweeping-in-india#article",
          headline: "Bug Sweeping in India: What a Sweep Involves, the Law and How to Prepare",
          description:
            "Bug sweeping in India explained: how a TSCM sweep works, which tools find which devices, the law on hidden cameras and jammers, and how to prepare.",
          datePublished: "2026-09-19",
          image: { "@id": "https://www.bugsweepingtscm.com/blog/bug-sweeping-in-india#primaryimage" },
          mainEntityOfPage: { "@id": "https://www.bugsweepingtscm.com/blog/bug-sweeping-in-india#webpage" },
          inLanguage: "en-IN",
          author: { "@id": "https://www.bugsweepingtscm.com/#organization" },
          publisher: { "@id": "https://www.bugsweepingtscm.com/#organization" },
          about: [
            { "@type": "Thing", name: "Technical surveillance countermeasures" },
            { "@type": "Country", name: "India" },
          ],
        },
        {
          "@type": "Organization",
          "@id": "https://www.bugsweepingtscm.com/#organization",
          name: "BugSweepingTSCM",
          url: "https://www.bugsweepingtscm.com",
          logo: "https://www.bugsweepingtscm.com/images/logo/bug-sweep.png",
          email: "info@advancedetectiveagency.com",
          telephone: "+91-8882732221",
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://www.bugsweepingtscm.com/blog/bug-sweeping-in-india#breadcrumb",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.bugsweepingtscm.com" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.bugsweepingtscm.com/blog" },
            { "@type": "ListItem", position: 3, name: "Bug Sweeping in India" },
          ],
        },
        faqJsonLd(bugSweepingIndiaFaqs, "https://www.bugsweepingtscm.com/blog/bug-sweeping-in-india#faq"),
      ],
    },
    content: `
      <div class="answer-box">
        <p><strong>Short answer:</strong> Bug sweeping in India is a professional inspection of a home, office, vehicle or meeting space for hidden cameras, audio bugs and GPS trackers, also called technical surveillance countermeasures (TSCM) or a debugging service. It combines radio-frequency analysis, electronic-component detection and a physical search, and reports what was found in the areas examined at that time.</p>
      </div>

      <p>Most people search for a bug sweep when something already feels wrong: a competitor seems to know last week's pricing discussion, an ex-partner turns up wherever you go, or a charger in a rented room looks slightly odd. This guide explains what a sweep in India actually involves, where the law stands, how to book one without alerting whoever may be listening, and how to judge whether a provider is worth hiring.</p>

      <h2>What is bug sweeping?</h2>
      <p>Bug sweeping, known in the security industry as technical surveillance countermeasures (TSCM) and often called a "debugging service" in India, is the systematic search of a defined space for devices that capture or transmit audio, video or location without the occupants' consent. A sweep usually covers three kinds of threat. Transmitting devices, such as GSM (SIM-card) bugs, Wi-Fi cameras and radio-frequency (RF) transmitters, emit signals. Non-transmitting devices, such as SD-card voice recorders and pinhole cameras, store data locally and emit nothing, which is one reason <a href="/blog/how-to-find-a-listening-device">finding a listening device</a> starts with its power supply rather than with a radio check. Trackers attached to vehicles report location over mobile networks or Bluetooth. Because no single instrument catches all three, a professional sweep combines a spectrum analyser, a non-linear junction detector (NLJD), optical and thermal checks and a close physical inspection. The result is a written account of the areas examined, the methods used and any findings. A sweep describes a space at the time it was inspected; it does not certify that the space will stay clean.</p>

      <h2>Which tool finds which device?</h2>
      <p>The most useful thing to understand before hiring anyone is that each detection method covers a different gap. A provider who brings only one instrument is only checking for one kind of device.</p>
      <div class="table-wrap">
        <table>
          <caption>Common surveillance devices and the methods that detect them</caption>
          <thead>
            <tr><th scope="col">Device type</th><th scope="col">How it works</th><th scope="col">What usually finds it</th><th scope="col">What can miss it</th></tr>
          </thead>
          <tbody>
            <tr><td>GSM or SIM-card audio bug</td><td>Sends audio over the mobile network, often only when called or when sound triggers it</td><td>Spectrum analysis while the device is active, NLJD, physical search</td><td>An RF-only check while the device is idle</td></tr>
            <tr><td>Wi-Fi or IP camera</td><td>Streams video over a local network or the internet</td><td>Spectrum analysis, network inspection where you control the network, lens detection</td><td>A lens check alone if the lens is behind tinted plastic</td></tr>
            <tr><td>SD-card camera or voice recorder</td><td>Records locally and transmits nothing</td><td>NLJD, lens detection, thermal imaging while powered, physical search</td><td>Any RF-only check, because it emits no signal</td></tr>
            <tr><td>Vehicle GPS tracker</td><td>Reports location over the mobile network; some sleep between reports</td><td>Physical inspection of the vehicle, RF checks timed to catch transmissions</td><td>A quick look under the car, or an RF check between reporting intervals</td></tr>
            <tr><td>Bluetooth tag (AirTag and similar)</td><td>Reports location through nearby phones</td><td>Phone-based unknown-tracker alerts, physical search, Bluetooth scanning</td><td>Nothing on its own; tags are small and easy to overlook</td></tr>
          </tbody>
        </table>
      </div>
      <p>A non-linear junction detector (NLJD) deserves a word of explanation, because it is the instrument that separates a professional sweep from a gadget check. It transmits a low-power signal and listens for the harmonic echo that semiconductor components return, which means it can locate electronics that are switched off. Genuine circuits return a stronger second harmonic, while rusty metal joints tend to return a stronger third harmonic, which is how an operator tells a hidden circuit board from a corroded nail. A spectrum analyser does the opposite job: it finds devices that are actively transmitting, whatever they look like.</p>

      <h2>Is bug sweeping legal in India?</h2>
      <p>Checking a home, office or vehicle that you own or lawfully control for hidden devices is a precaution, and the Indian laws that apply here are aimed at the people who carry out covert surveillance and at signal-blocking equipment. Hidden-camera recording of private acts, monitoring a woman's electronic communications and possessing a jammer are each covered by specific provisions, listed below. The position is less simple when the space is shared, rented or controlled by someone else, or when the sweep involves another person's phone or vehicle. Those situations call for legal advice before anyone touches the property. For most readers the practical meaning is this: sweeping your own space is a sensible step, but what you do with any device you find (and whose property it is on) has legal consequences, so document first and act second.</p>
      <div class="table-wrap">
        <table>
          <caption>Indian laws relevant to hidden cameras, bugs and jammers (checked 19 September 2026)</caption>
          <thead>
            <tr><th scope="col">Law</th><th scope="col">What it covers</th><th scope="col">Penalty stated in the law</th></tr>
          </thead>
          <tbody>
            <tr><td>Bharatiya Nyaya Sanhita (BNS), 2023, Section 77: voyeurism</td><td>Watching, capturing the image of, or disseminating images of a woman engaged in a private act where she would usually expect not to be observed. Dissemination is an offence even where she consented to the capture but not to sharing it.</td><td>First conviction: 1 to 3 years and fine. Subsequent conviction: 3 to 7 years and fine.</td></tr>
            <tr><td>BNS, 2023, Section 78: stalking</td><td>Includes a man monitoring a woman's use of the internet, email or any other form of electronic communication, subject to the exceptions in the section.</td><td>Up to 3 years and fine; up to 5 years and fine on a subsequent conviction.</td></tr>
            <tr><td>Information Technology Act, 2000, Section 66E: violation of privacy</td><td>Intentionally or knowingly capturing, publishing or transmitting the image of a private area of any person without consent, in circumstances violating privacy. "Private area" means specified parts of the body, not private premises.</td><td>Up to 3 years, or fine up to Rs 2 lakh, or both.</td></tr>
            <tr><td>Telecommunications Act, 2023, Sections 48 and 42(3)(a)</td><td>No person may possess or use equipment that blocks telecommunication unless permitted by the Central Government. Possessing or using such equipment without authorisation is an offence.</td><td>Set out in Section 42(3).</td></tr>
          </tbody>
        </table>
      </div>
      <p>The BNS came into force on 1 July 2024 and replaced the Indian Penal Code, so older articles citing IPC Section 354C are describing the predecessor of Section 77. You can read the provisions in the <a href="https://www.mha.gov.in/sites/default/files/250883_english_01042024.pdf" rel="noopener noreferrer" target="_blank">BNS as published by the Ministry of Home Affairs</a>, the <a href="https://www.meity.gov.in/static/uploads/2024/03/IT_amendment_act2008-1_0.pdf" rel="noopener noreferrer" target="_blank">Information Technology (Amendment) Act, 2008, which inserted Section 66E</a> (published by MeitY) and the <a href="https://egazette.gov.in/WriteReadData/2023/250880.pdf" rel="noopener noreferrer" target="_blank">Telecommunications Act, 2023 in the Gazette of India</a>.</p>
      <p>Note what these laws do not do. Section 77 protects women in the specific situations it describes, and Section 66E concerns images of defined body areas; neither is a general ban on every recording made in a private room. Whether a particular recording is unlawful depends on the facts, which is a question for a lawyer.</p>

      <h3>Can you use a jammer to block bugs?</h3>
      <p>No. Blocking a bug's signal with a jammer is not a lawful shortcut in India. The <a href="https://www.pib.gov.in/PressReleaseIframePage.aspx?PRID=1839030" rel="noopener noreferrer" target="_blank">Department of Telecommunications advisory of July 2022</a> states that cellular jammers, GPS blockers and other signal-jamming devices are generally illegal unless specifically permitted by the Government of India, that private organisations and individuals cannot procure or use them, and that advertising or selling them is unlawful. The Telecommunications Act, 2023 now puts the possession and use of blocking equipment on a statutory footing. A jammer would also disrupt legitimate phones and emergency calls, and it tells you nothing about whether a device exists. Finding and documenting the device is the lawful route.</p>

      <h2>Before you book: keep the sweep quiet</h2>
      <p>This is the step most guides skip, and it often decides whether a sweep finds anything. If a device is live, whoever planted it may be listening to the room or reading the phone you use to arrange the sweep. A person who expects a sweep can switch a device off, retrieve it, or simply stop using it for a while.</p>
      <ol>
        <li><strong>Arrange the sweep from somewhere else.</strong> Do not discuss it inside the room you suspect, or on a phone or computer you think may be compromised. Use a different device and, if possible, a different location.</li>
        <li><strong>Keep the circle small.</strong> In an organisation, tell only the people who must approve access. Avoid calendar invites, group chats or visitor passes that describe the purpose.</li>
        <li><strong>Do not search first.</strong> Pulling apart chargers, smoke detectors or car panels before the sweep can disturb evidence and signal that you are suspicious.</li>
        <li><strong>Keep normal routines.</strong> A room that goes silent the day before a sweep tells a listener something has changed. Where it is safe to do so, use the space as usual until the team arrives.</li>
        <li><strong>Prepare a scope list privately.</strong> Note which rooms, vehicles, phones and items are in scope, when the space is normally used, who has had access (contractors, visitors, domestic staff), and when your suspicion started.</li>
        <li><strong>Decide in advance what happens if something is found.</strong> Agree with the provider whether a device will be left in place and documented for the police, or removed. Removing a device before it is photographed in position can weaken a later complaint.</li>
      </ol>
      <p>If you believe you are in immediate danger, none of this should delay you. Safety comes before evidence, and the emergency number 112 is the right first call.</p>

      <h2>How a professional bug sweep usually runs</h2>
      <p>Methods differ between providers, but a thorough sweep in India generally follows a recognisable sequence. Ask any provider to walk you through their version of it before you agree to anything.</p>
      <ol>
        <li><strong>Scoping and threat discussion.</strong> Held away from the suspect area. The provider asks what triggered the concern, who might benefit from listening, and which spaces matter most.</li>
        <li><strong>RF survey.</strong> A spectrum analyser records the radio environment, so legitimate signals (Wi-Fi routers, phones, building systems) can be separated from unexplained ones.</li>
        <li><strong>Electronic-component search.</strong> An NLJD is passed over walls, furniture, fittings and objects to locate hidden circuitry, whether powered or not.</li>
        <li><strong>Optical and thermal checks.</strong> Lens detectors look for the reflection of camera lenses, and a thermal camera shows powered devices that are warmer than their surroundings. Thermal imaging reads surface temperature; it does not see through walls.</li>
        <li><strong>Physical inspection.</strong> Hands-on examination of the places devices are commonly concealed: power sockets and adapters, smoke detectors, light fittings, false ceilings, furniture, décor, and for vehicles the underbody, wheel arches, bumpers, boot and OBD port.</li>
        <li><strong>Line and device checks where in scope.</strong> Telephone lines, conference equipment and, where agreed, phones may be examined for signs of tampering.</li>
        <li><strong>Findings and report.</strong> Any suspicious item is documented in place before anyone decides what to do with it.</li>
      </ol>

      <h2>What should a bug sweep report contain?</h2>
      <p>The report is what you are paying for. It is the record you will show your board, your lawyer or the police, so it should be specific enough that someone else could understand exactly what was and was not checked. A useful report states:</p>
      <ul>
        <li>The date, start and end time, and the addresses, rooms and vehicles covered, plus any areas that could not be accessed.</li>
        <li>The methods and instrument types used in each area.</li>
        <li>Each finding, with photographs taken in position, the exact location, and what was done with the item.</li>
        <li>Unexplained signals or anomalies that were noted but not resolved.</li>
        <li>Practical recommendations, such as access controls or a follow-up sweep before a specific meeting.</li>
        <li>A plain statement of limitations: what the sweep could not establish.</li>
      </ul>
      <p>Ask to see a redacted sample report before you book. A provider who will not show one, or whose sample is a single page saying "no devices found", is telling you something about the depth of the work.</p>

      <h2>What a bug sweep cannot tell you</h2>
      <p>A sweep reports findings within the areas it accessed, using the methods it used, under the conditions and at the time it was carried out. Finding no device does not prove that none exists, and no honest provider promises complete detection or future protection. A device installed the day after a sweep will not appear in its report.</p>
      <p>A physical sweep also does not cover every route by which information leaks. <a href="/blog/is-someone-monitoring-your-phone">Spyware on a phone</a>, a compromised email account, a shared cloud folder or an insider repeating conversations are separate problems that need different checks. Treat any provider that guarantees "100% detection" with caution; the claim is not something the technology can support.</p>

      <h2>How much does bug sweeping cost in India?</h2>
      <p>There is no standard national rate, and published prices vary widely between providers. Rather than rely on a headline figure, ask for a written quote that shows how the price was built. These are the factors that usually move it:</p>
      <div class="table-wrap">
        <table>
          <caption>Factors that affect the cost of a bug sweep in India</caption>
          <thead>
            <tr><th scope="col">Factor</th><th scope="col">Why it changes the price</th></tr>
          </thead>
          <tbody>
            <tr><td>Size and number of spaces</td><td>More rooms, floors or vehicles mean more instrument time and physical inspection.</td></tr>
            <tr><td>Clutter and construction</td><td>False ceilings, heavy furniture and dense electronics take longer to inspect properly.</td></tr>
            <tr><td>Scope of methods</td><td>A full sweep with NLJD, spectrum analysis, thermal and physical inspection costs more than a basic RF check, and finds more.</td></tr>
            <tr><td>Phones and lines</td><td>Examining handsets or telephone systems is separate work and is often quoted separately.</td></tr>
            <tr><td>Travel and timing</td><td>Out-of-city travel, night work, weekend work or short notice all add cost.</td></tr>
            <tr><td>Reporting and follow-up</td><td>A detailed written report, evidence documentation and repeat sweeps before scheduled meetings are part of the price.</td></tr>
          </tbody>
        </table>
      </div>
      <p>A quote that is far below others usually means fewer methods, less time or a thinner report. Compare what is included, not only the total. The types of sweep BugSweepingTSCM offers for businesses, homes and vehicles are described on the <a href="/services">services page</a>.</p>

      <h2>Can you check for bugs yourself?</h2>
      <p>You can reduce obvious risks yourself, especially in a hotel room or rental, where <a href="/blog/hidden-cameras-in-hotel-rooms-and-pgs">what you are actually allowed to touch</a> turns out to matter as much as what you look for. Some popular advice works; some gives false comfort.</p>
      <ul>
        <li><strong>Look at what faces the bed, shower or desk.</strong> Chargers, clocks, smoke detectors and decorative items pointing at private areas are worth a close look.</li>
        <li><strong>The torch test.</strong> Shining a phone torch across a dark room can catch the glint of a camera lens. It misses lenses behind tinted covers and gives no information about audio bugs.</li>
        <li><strong>The phone-camera infrared check.</strong> Some phone cameras show the infrared LEDs that night-vision cameras use, as faint glowing dots in a dark room. Many rear cameras filter infrared, so the front camera often works better. A camera without infrared lighting will not show up at all.</li>
        <li><strong>Detector apps and cheap RF detectors.</strong> Apps cannot detect radio signals the phone's hardware cannot measure, and low-cost RF detectors react to every Wi-Fi router and phone nearby. Both miss devices that record locally.</li>
        <li><strong>Bluetooth tracker alerts.</strong> iPhones warn you when an unknown AirTag or Find My accessory is moving with you, and Android phones running Android 6 or later offer <a href="https://support.google.com/android/answer/13658562?hl=en-IN" rel="noopener noreferrer" target="_blank">unknown tracker alerts with a manual "Scan now" option</a> under Safety and emergency settings. These catch Bluetooth tags, not GPS trackers that use a SIM card.</li>
      </ul>
      <p>For a room-by-room approach to cameras, see our guide on <a href="/blog/how-to-detect-hidden-cameras">how to detect hidden cameras in a hotel room or office</a>, and for cars, <a href="/blog/vehicle-gps-tracking">how GPS trackers are hidden on vehicles</a>. Do-it-yourself checks are a reasonable first step for travel. They are not a substitute for a professional sweep when the stakes are a business negotiation, a legal dispute or your personal safety.</p>

      <h2>What to do if you find a hidden camera or bug</h2>
      <p>Your safety comes first, and you do not need to collect evidence before asking for help. If you feel in danger, leave the space and call 112, India's single emergency number for police, medical and other emergencies. You do not need to stay near the device or confront anyone.</p>
      <p>If it is safe to do so:</p>
      <ol>
        <li>Note exactly where the device is and when you found it.</li>
        <li>Photograph it in position without touching, unplugging or opening it. Handling it can destroy fingerprints and stored data.</li>
        <li>Do not destroy or throw away the device, and do not post about it online.</li>
        <li>Report it to the local police. For cybercrime, including private images published or shared online, you can also file a complaint on the <a href="https://cybercrime.gov.in/" rel="noopener noreferrer" target="_blank">National Cyber Crime Reporting Portal (cybercrime.gov.in)</a>; complaints there are handled by the relevant State or UT police, and an online complaint does not automatically become an FIR.</li>
        <li>Take legal advice about your own situation, particularly in a rented property, a workplace or a family dispute.</li>
      </ol>
      <p>The helpline 1930 is for reporting urgent online financial fraud, such as money taken through a scam. It is not the number for a hidden camera or stalking emergency; use 112 or the police for those.</p>
      <p>If you suspect someone is monitoring your phone, for example a partner or family member, seek help using a device or account you believe they cannot access. Do not reset the phone, delete apps or confront the person first. Doing so can alert them and erase evidence. For Bluetooth trackers, <a href="https://support.apple.com/en-in/119874" rel="noopener noreferrer" target="_blank">Apple's guidance</a> is to go to a safe public location and contact law enforcement if you feel your safety is at risk.</p>

      <p>One source of worry sits outside the building altogether and is handled quite differently. Our guide to <a href="/blog/drone-flying-over-my-house-india">a drone over your house</a> covers what India's Drone Rules do and do not regulate, and the two responses that make your position worse.</p>

      <p>Vehicles raise one more question that owners ask about far more often than trackers. Our guide to <a href="/blog/are-dash-cams-legal-in-india">whether dash cams are legal in India</a> covers placement, the microphone most owners never switch off, and what it takes for a clip to be usable later.</p>

      <h2>How to choose a bug sweeping provider in India</h2>
      <p>People often search for the "best" bug sweeping company, but the useful question is whether a particular provider can show you how it works. These checks separate careful providers from the rest:</p>
      <ul>
        <li><strong>Methods named in writing.</strong> The quote should list the instrument classes and physical checks included. A line that says only "advanced equipment" tells you nothing.</li>
        <li><strong>A sample report.</strong> Redacted, but detailed enough to show areas covered, methods and limitations.</li>
        <li><strong>Honest limits.</strong> A provider that promises "100% detection" or a "guaranteed clean" result is overstating what any sweep can do.</li>
        <li><strong>Confidential intake.</strong> The first conversation should happen away from the suspect space, and the provider should raise this without being asked.</li>
        <li><strong>Evidence awareness.</strong> Ask what happens if a device is found. The answer should involve photographing it in place and discussing a police or legal route, not quietly pulling it out.</li>
        <li><strong>No jammers.</strong> Any provider that offers to sell or install a signal jammer is proposing equipment that Indian law does not allow private buyers to possess or use without Central Government permission. Walk away.</li>
        <li><strong>Verifiable identity.</strong> A registered company, a named person responsible for the work, and credentials you can check yourself.</li>
      </ul>
      <p>If you are comparing providers in a particular city, BugSweepingTSCM has location pages for <a href="/locations/mumbai">Mumbai</a>, <a href="/locations/delhi">Delhi NCR</a>, <a href="/locations/bengaluru">Bengaluru</a> and <a href="/locations/chandigarh">Chandigarh</a>. For the capital, our city guide to <a href="/blog/bug-sweeping-in-delhi">bug sweeping in Delhi</a> covers reported local cases, the paying-guest and guest house rules, and where a complaint goes, and our guide to <a href="/blog/bug-sweeping-in-mumbai">bug sweeping in Mumbai</a> covers the region's separate police commissionerates and housing society camera rules. For businesses, our guide to the <a href="/blog/signs-your-office-is-bugged">signs that an office or boardroom may be bugged</a> covers the warning signs that usually prompt a corporate sweep.</p>

      <h2>Frequently asked questions</h2>
      <div class="faq">
${faqHtml(bugSweepingIndiaFaqs)}
      </div>

      <div class="note">
        <p><strong>About this guide.</strong> Published by BugSweepingTSCM. The site's founder is <a href="/meet-the-founder">Hardesh Bhardwaj</a>, founder of ADA Advance Detective Agency Pvt. Ltd. (CIN U74999DL2021PTC390132) and in practice since 2013. Legal points were checked against official texts on 19 September 2026 and are general information, not legal advice. Laws, helplines and platform features change; confirm current details with the linked official sources and consult a lawyer about your own situation.</p>
      </div>
    `,
  },
  {
    slug: "bug-sweeping-in-delhi",
    title: "Bug Sweeping in Delhi: Where Devices Turn Up and Where to Complain",
    seoTitle: "Bug Sweeping in Delhi: Local Cases, Law and Complaints",
    metaDescription:
      "Bug sweeping in Delhi: where hidden cameras have been found, why Delhi's signal density matters, PG and hotel rules, and exactly where to report a device.",
    excerpt:
      "Delhi's reported hidden-camera cases are bathroom bulb holders and washrooms, not boardroom bugs. This guide covers where devices have actually been found in the city, why Delhi's crowded airwaves complicate detection, what the PG and guest house rules allow, and where a complaint goes.",
    date: "2026-09-23",
    readTime: "9 min read",
    category: "City Guides",
    coverImage: "/images/blogs/bug-sweeping-in-delhi.webp",
    ogImage: "/images/blogs/bug-sweeping-in-delhi.png",
    coverImageAlt:
      "Bug Sweeping in Delhi guide cover: concentric sweep rings on a dark navy grid with one marked detection point",
    publishedBy: "BugSweepingTSCM",
    cta: {
      heading: "Worried about a room, office or vehicle in Delhi?",
      text: "If something does not add up, a private consultation can help you decide whether a sweep is needed and what it should cover. Please get in touch from a phone you trust, away from the space you are worried about.",
      label: "Request a consultation on WhatsApp",
    },
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://www.bugsweepingtscm.com/blog/bug-sweeping-in-delhi#webpage",
          url: "https://www.bugsweepingtscm.com/blog/bug-sweeping-in-delhi",
          name: "Bug Sweeping in Delhi: Local Cases, Law and Complaints",
          inLanguage: "en-IN",
          isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" },
          breadcrumb: { "@id": "https://www.bugsweepingtscm.com/blog/bug-sweeping-in-delhi#breadcrumb" },
          primaryImageOfPage: { "@id": "https://www.bugsweepingtscm.com/blog/bug-sweeping-in-delhi#primaryimage" },
          about: { "@id": "https://www.bugsweepingtscm.com/blog/bug-sweeping-in-delhi#place" },
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
          "@id": "https://www.bugsweepingtscm.com/blog/bug-sweeping-in-delhi#place",
          name: "Delhi",
          address: { "@type": "PostalAddress", addressLocality: "Delhi", addressRegion: "Delhi", addressCountry: "IN" },
        },
        {
          "@type": "ImageObject",
          "@id": "https://www.bugsweepingtscm.com/blog/bug-sweeping-in-delhi#primaryimage",
          url: "https://www.bugsweepingtscm.com/images/blogs/bug-sweeping-in-delhi.png",
          width: 1200,
          height: 630,
        },
        {
          "@type": "BlogPosting",
          "@id": "https://www.bugsweepingtscm.com/blog/bug-sweeping-in-delhi#article",
          headline: "Bug Sweeping in Delhi: Where Devices Turn Up and Where to Complain",
          description:
            "Bug sweeping in Delhi: where hidden cameras have been found, why Delhi's signal density matters, PG and hotel rules, and exactly where to report a device.",
          datePublished: "2026-09-23",
          image: { "@id": "https://www.bugsweepingtscm.com/blog/bug-sweeping-in-delhi#primaryimage" },
          mainEntityOfPage: { "@id": "https://www.bugsweepingtscm.com/blog/bug-sweeping-in-delhi#webpage" },
          inLanguage: "en-IN",
          author: { "@id": "https://www.bugsweepingtscm.com/#organization" },
          publisher: { "@id": "https://www.bugsweepingtscm.com/#organization" },
          spatialCoverage: { "@id": "https://www.bugsweepingtscm.com/blog/bug-sweeping-in-delhi#place" },
          about: [
            { "@type": "Thing", name: "Technical surveillance countermeasures" },
            { "@id": "https://www.bugsweepingtscm.com/blog/bug-sweeping-in-delhi#place" },
          ],
          isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" },
        },
        {
          "@type": "Organization",
          "@id": "https://www.bugsweepingtscm.com/#organization",
          name: "BugSweepingTSCM",
          url: "https://www.bugsweepingtscm.com",
          logo: "https://www.bugsweepingtscm.com/images/logo/bug-sweep.png",
          email: "info@advancedetectiveagency.com",
          telephone: "+91-8882732221",
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://www.bugsweepingtscm.com/blog/bug-sweeping-in-delhi#breadcrumb",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.bugsweepingtscm.com" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.bugsweepingtscm.com/blog" },
            { "@type": "ListItem", position: 3, name: "Bug Sweeping in Delhi" },
          ],
        },
        faqJsonLd(bugSweepingDelhiFaqs, "https://www.bugsweepingtscm.com/blog/bug-sweeping-in-delhi#faq"),
      ],
    },
    content: `
      <div class="answer-box">
        <p><strong>Short answer:</strong> Bug sweeping in Delhi is a professional search of a room, office, vehicle or rented accommodation for hidden cameras, audio bugs and trackers. Delhi adds three local complications: the densest mobile network in India, a rental and paying-guest market about to be regulated, and a complaint that may cross into Haryana or Uttar Pradesh.</p>
      </div>

      <p>The Delhi cases that reach the newspapers are rarely the boardroom bug of the imagination. They are a camera in a bathroom bulb holder, a phone wedged in a trial-room door, a housekeeping worker with routine access to a washroom. This guide sets out where devices have actually been found in Delhi, what the city's radio environment does to detection, what the law now says about recordings inside homes, and exactly where a complaint goes once you find something.</p>

      <h2>Where hidden cameras have actually been found in Delhi</h2>
      <p>Three reported cases from the last three years show the pattern better than any threat list. Each was charged under India's criminal law on voyeurism, and each says something practical about where to look.</p>
      <div class="table-wrap">
        <table>
          <caption>Reported hidden-camera cases in Delhi, 2023 to 2025</caption>
          <thead>
            <tr><th scope="col">Case</th><th scope="col">Where the device was</th><th scope="col">What it tells you</th></tr>
          </thead>
          <tbody>
            <tr><td>Shakarpur, East Delhi, September 2024. The landlord's son was arrested after a woman tenant found cameras in her rented room (<a href="https://www.tribuneindia.com/news/delhi/woman-finds-hidden-cameras-in-rented-home-landlords-son-held/" rel="noopener noreferrer" target="_blank">The Tribune</a>).</td><td>Inside bulb holders, one in the bathroom and one in the bedroom, recording to a memory card rather than transmitting</td><td>An offline camera sends no signal at all. Wi-Fi scans and detector apps cannot find it, and the accused kept asking for keys to "repair" fittings so he could collect the footage.</td></tr>
            <tr><td>IIT Delhi campus, October 2023. Students from a Delhi University college said they were filmed while changing during a fest; a contractual worker from an outsourced housekeeping agency was arrested (<a href="https://www.tribuneindia.com/news/delhi/secretly-filmed-in-washroom-during-iit-delhi-fest-allege-bharti-college-students-sweeper-arrested-551319" rel="noopener noreferrer" target="_blank">The Tribune</a>).</td><td>A campus washroom being used as a changing area</td><td>The people with unremarkable, repeated access to a space (housekeeping, maintenance, contractors) matter more than strangers.</td></tr>
            <tr><td>Shani Bazar, south-west Delhi, August 2025. A pilot was arrested for filming women in a market (<a href="https://www.theweek.in/news/india/2025/09/05/delhi-pilot-arrested-for-recording-objectionable-videos-of-a-woman-using-hidden-camera.html" rel="noopener noreferrer" target="_blank">The Week</a>).</td><td>A camera disguised as a cigarette lighter, carried by hand</td><td>Everyday-object disguises are in live use in Delhi, and the offender profile is not predictable.</td></tr>
          </tbody>
        </table>
      </div>
      <p>So treat light fittings, bathroom fixtures and anything a landlord insists on repairing himself as worth a closer look. A device that records locally is the normal case here, which is why a proper sweep uses instruments that find electronics rather than only signals.</p>

      <h3>One check you can run tonight</h3>
      <p>In the Shakarpur case, what first alerted the tenant was not the camera. She noticed odd activity on her messaging account, a friend suggested checking her WhatsApp linked devices, and an unknown laptop was listed there. That check takes a minute: open WhatsApp, go to Settings, then Linked devices, and log out anything you do not recognise. It tells you whether someone else is reading your messages, which is a different problem from a camera in the room, but in that case it was the thread that led to the rest. Do it from your own phone, and if you find something, take a screenshot before you log the device out.</p>

      <h2>Why "we found a signal" means less in Delhi</h2>
      <p>Delhi is the most densely connected telecom service area in India. The Telecom Regulatory Authority of India recorded wireless tele-density in the Delhi service area at <a href="https://trai.gov.in/sites/default/files/2026-06/QPIR_22062026.pdf" rel="noopener noreferrer" target="_blank">338.15 per cent as on 31 March 2026</a>, against 93.26 per cent for India as a whole, and the next highest service area sits near 130 per cent. TRAI notes that its Delhi service area also counts subscribers served through exchanges in Ghaziabad, Noida, Gurgaon and Faridabad, so the figure overstates Delhi alone, but the direction is not in doubt.</p>
      <p>For a sweep, that density is the whole problem. In a Delhi flat or office, a radio-frequency detector will react to neighbouring routers, phones, smart meters, televisions and the building's own systems. A cheap detector or a phone app here alarms constantly, which trains you to ignore it. Ask a provider not whether they detect signals but how they separate an unexplained transmission from the hundreds of legitimate ones around it, and what they do about devices that transmit nothing at all.</p>

      <h2>PGs, hostels and rented rooms: what is about to change</h2>
      <p>Delhi's paying-guest market is large and, at present, lightly regulated. In September 2026 the Delhi government began work on a draft Paying Guest Accommodation Regulation and Welfare Bill, reported to cover roughly 200,000 rooms rented as PG accommodation across the city, with Mukherjee Nagar, Laxmi Nagar, Rajendra Nagar and the North Campus area named as focus areas. As <a href="https://www.thehansindia.com/news/cities/new-delhi/delhi-plans-pg-regulation-bill-with-licences-police-clearance-and-public-registry-1119952" rel="noopener noreferrer" target="_blank">reported</a>, the draft would require a licence from the municipal zonal authority, police clearance, a registration number for each property, and CCTV at entrances and common areas with footage kept for 30 days.</p>
      <p>This is a draft, not law, and it may change before it passes. It matters anyway, because it draws a line a PG resident can already apply: cameras covering an entrance or a common room are the surveillance the state is moving to require, while a camera covering a bedroom, bathroom or changing area is the kind that puts someone in court. Ask where the cameras are, ask which common areas they cover, and treat any camera inside a private room as a reason to walk away.</p>

      <h2>Hotels and guest houses: the lawful line</h2>
      <p>The same distinction is already written into Delhi's rules for guest houses. The Delhi government's <a href="https://tourism.delhi.gov.in/tourism/guidelines-approval-guest-houses" rel="noopener noreferrer" target="_blank">approval guidelines</a> require an applicant to hold municipal registration, a police licence and fire clearance, and to install CCTV in public areas with a data backup. Cameras in the lobby and corridors are a condition of approval. A camera in your room is not covered by any of that.</p>
      <p>Delhi also handles more international arrivals than anywhere else in the country: Delhi airport accounted for 38.85 per cent of India's foreign tourist arrivals in 2024, the largest share of any airport, according to the <a href="https://delhiplanning.delhi.gov.in/sites/default/files/2026-03/economic_survey_english_0.pdf" rel="noopener noreferrer" target="_blank">Economic Survey of Delhi 2025-26</a>. High guest turnover is precisely the condition in which a device planted once can record many different occupants before anyone notices. For a room-by-room approach on arrival, our guide on <a href="/blog/how-to-detect-hidden-cameras">detecting hidden cameras in a hotel room or office</a> covers the practical checks.</p>
      <p>One honest note: we found no reputable report of a hidden-camera case in a Delhi hotel in recent years. The documented Indian hotel cases we could verify are elsewhere, including a 2022 case in Noida. That is not evidence that Delhi hotels are safe or unsafe; it is a limit on what the reporting shows.</p>

      <h2>Two rulings that changed the picture for Delhi homes</h2>
      <p>Recordings inside homes are no longer a purely private matter, and two 2025 decisions pull in different directions.</p>
      <p>In <strong>Vibhor Garg v. Neha</strong>, decided on 14 July 2025, the Supreme Court held that a spouse's secretly recorded telephone conversations are admissible in matrimonial proceedings, because Section 122 of the Evidence Act contains an express exception for suits between married persons (<a href="https://www.scobserver.in/supreme-court-observer-law-reports-scolr/evidentiary-value-of-secretly-recorded-phone-calls-between-spouses-in-marital-disputes-vibhor-garg-v-neha/" rel="noopener noreferrer" target="_blank">Supreme Court Observer</a>). The practical effect in a city with a heavy matrimonial caseload is that covert recording inside a home now carries a clear evidentiary incentive, so suspicion of it in a disputed marriage is not paranoia.</p>
      <p>Pulling the other way, the Calcutta High Court held in February 2025 that installing CCTV inside the residential portion of a shared home without the consent of the other occupants violates the right to privacy under Article 21, and suggested joint control over the cameras and their footage as the remedy. In May 2025 the Supreme Court declined to interfere with that ruling (<a href="https://theprint.in/judiciary/upholding-calcutta-hc-ruling-on-cctv-surveillance-inside-shared-home-sc-reaffirms-right-to-privacy/2624460/" rel="noopener noreferrer" target="_blank">ThePrint</a>). For a joint-family household in Delhi, that offers a route short of a criminal complaint: cameras in shared living space can be put under shared control rather than one person's.</p>
      <p>Neither ruling makes covert filming of a private act lawful. That remains an offence under Section 77 of the Bharatiya Nyaya Sanhita, the provision under which the Delhi cases above were charged, and the wider legal position is set out in our national guide to <a href="/blog/bug-sweeping-in-india">bug sweeping in India</a>.</p>

      <h2>Where a Delhi complaint actually goes</h2>
      <p>First, your safety. If you feel at risk, leave and call 112. You do not have to stay in the room, confront anyone or gather evidence before asking for help. If it is safe to stay, photograph the device exactly where it is before touching anything, note the time and place, and leave it in position: opening or unplugging it can destroy both the stored footage and any fingerprints. Then report it to the police. Delhi Police is organised into 15 police districts, and since late 2021 each district has its own cyber police station: the force's <a href="https://www.delhipolice.gov.in/RTImanualFiles/84241_Manual%201.pdf" rel="noopener noreferrer" target="_blank">RTI manual, last updated in May 2025</a>, lists 226 police stations including those 15. You can find the station covering your address with Delhi Police's <a href="https://delhipolice.gov.in/kyps" rel="noopener noreferrer" target="_blank">Know Your Police Station</a> tool. Unlike most of the country, Delhi Police reports to the Union Ministry of Home Affairs rather than the state government, because policing is outside the Delhi Assembly's legislative competence under Article 239AA of the Constitution.</p>
      <p>Four things are worth knowing before you walk in, all of them from the Bharatiya Nagarik Suraksha Sanhita, 2023, which replaced the old criminal procedure code on 1 July 2024:</p>
      <ol>
        <li><strong>Any police station can register it.</strong> Section 173(1) says information about a cognizable offence may be given "irrespective of the area where the offence is committed". This is the Zero FIR, <a href="https://www.pib.gov.in/PressReleseDetailm.aspx?PRID=2039055" rel="noopener noreferrer" target="_blank">confirmed in the government's own summary of the new criminal laws</a>. The case is then transferred to the station that has jurisdiction.</li>
        <li><strong>A woman complainant is recorded by a woman officer.</strong> Where a woman reports voyeurism under Section 77 or stalking under Section 78 of the Bharatiya Nyaya Sanhita, the <a href="https://www.mha.gov.in/sites/default/files/2024-04/250884_2_english_01042024.pdf" rel="noopener noreferrer" target="_blank">first proviso to Section 173(1)</a> requires the information to be recorded by a woman police officer.</li>
        <li><strong>You are entitled to a free copy.</strong> Section 173(2) says a copy of the recorded information is to be given "forthwith, free of cost" to the informant or victim.</li>
        <li><strong>There is a remedy if the station refuses.</strong> Section 173(4) lets you send the substance in writing, by post, to the Superintendent of Police, and if nothing follows, to apply to a Magistrate.</li>
      </ol>
      <p>Online routes have real limits. Delhi Police's e-FIR portals cover vehicle and property theft only; there is no online FIR route for voyeurism, stalking or illegal surveillance, so an FIR for those means going to the police station. You can file on the national portal at <a href="https://cybercrime.gov.in/" rel="noopener noreferrer" target="_blank">cybercrime.gov.in</a>, which has a women and children track that allows anonymous reporting, but a complaint there is passed to the relevant state police and does not itself become an FIR.</p>
      <p>On the phone numbers: call <strong>112</strong> in an emergency. Delhi Police lists <strong>1091</strong> for women in distress, and the Delhi government's Department of Women and Child Development lists <strong>181</strong> as its own women's helpline. <strong>1930</strong> is the national cyber crime helpline and is geared to online fraud, particularly where money has moved; for a camera found in a room with no financial loss, the police station or your district cyber police station is the better route.</p>

      <h3>When your home and office are in different states</h3>
      <p>Delhi NCR is four police forces, not one. Delhi Police covers Delhi; Gurugram (Gurgaon) and Faridabad come under Haryana Police; Noida, formally Gautam Buddh Nagar, and Ghaziabad come under Uttar Pradesh Police. Which force investigates follows where the device was planted, so a camera found in a Gurugram office is a Haryana Police matter even if you live in Delhi. The Zero FIR provision means your local Delhi station cannot turn you away for being the wrong jurisdiction, but it moves the paperwork, not the investigation. If devices turn up in both a Delhi home and an NCR office, treat them as two matters.</p>
      <p>If your matter sits in another city, our <a href="/blog/bug-sweeping-in-mumbai">Mumbai guide</a> covers that region's separate police commissionerates and the rules on housing society cameras.</p>
      <p>One gap worth naming: as of September 2026, we could find no Delhi Police public advisory on hidden or spy cameras in hotels, paying-guest accommodation or trial rooms. We checked the force's circulars index, its cyber crime unit site and its press releases. The nearest official material is the criminal law itself and the reporting tracks on the national cybercrime portal.</p>

      <h2>What a Delhi sweep can and cannot establish</h2>
      <p>A sweep reports what was found in the areas examined, with the methods used, at the time of the visit. It cannot prove a space has never been watched, and it cannot keep it clean afterwards. In Delhi there is a further practical limit worth stating plainly: much of the city's building stock was not built to an approved plan. The Economic Survey of Delhi 2025-26 records 1,799 unauthorised colonies in the city, and the Delhi Development Authority's <a href="https://dda.gov.in/pm_uday/scheme" rel="noopener noreferrer" target="_blank">PM-UDAY scheme</a> covers 1,731 of them. In buildings that grew room by room, wiring and cavities do not match any drawing, which is exactly why a physical inspection matters as much as any instrument reading.</p>

      <h2>Booking a sweep in Delhi without tipping anyone off</h2>
      <p>If a device is live, whoever placed it may be listening while you arrange the sweep. Make the arrangements from a different phone and a different place, tell only the people who must approve access, and do not start pulling fittings apart first, because that both warns them and disturbs evidence. Keep your routine normal until the team arrives. The full preparation sequence, including what to agree in advance about a device that is found, is in our <a href="/blog/bug-sweeping-in-india">national guide</a>. Our <a href="/locations/delhi">Delhi bug sweeping page</a> covers the service itself.</p>

      <h2>Frequently asked questions</h2>
      <div class="faq">
${faqHtml(bugSweepingDelhiFaqs)}
      </div>

      <div class="note">
        <p><strong>About this guide.</strong> Published by BugSweepingTSCM. The site's founder is <a href="/meet-the-founder">Hardesh Bhardwaj</a>, founder of ADA Advance Detective Agency Pvt. Ltd. (CIN U74999DL2021PTC390132) and in practice since 2013. Legal points, police procedures and helplines were checked against official sources on 23 September 2026 and are general information, not legal advice. Rules and draft legislation change; confirm current details with the linked sources and take legal advice about your own situation.</p>
      </div>
    `,
  },
  {
    slug: "bug-sweeping-in-mumbai",
    title: "Bug Sweeping in Mumbai: Which Police Force, Which Rules, What a Sweep Proves",
    seoTitle: "Bug Sweeping in Mumbai: Jurisdiction, Societies and Law",
    metaDescription:
      "Bug sweeping in Mumbai: which commissionerate covers your address, what you cannot file online, society CCTV rules, hotel cases and what a sweep proves.",
    excerpt:
      "The Mumbai region is policed by several separate commissionerates, and Mumbai Police takes only minor complaints online. This guide covers which force has your address, what your housing society is allowed to record, where devices have turned up in the city, and what a sweep can honestly prove.",
    date: "2026-09-23",
    readTime: "10 min read",
    category: "City Guides",
    coverImage: "/images/blogs/bug-sweeping-in-mumbai.webp",
    ogImage: "/images/blogs/bug-sweeping-in-mumbai.png",
    coverImageAlt:
      "Bug Sweeping in Mumbai guide cover: a stylised skyline on a dark navy grid with one tower marked by a red detection point",
    publishedBy: "BugSweepingTSCM",
    cta: {
      heading: "Worried about a flat, office or hotel room in Mumbai?",
      text: "If something does not add up, a private consultation can help you decide whether a sweep is needed and what it should cover. Please get in touch from a phone you trust, away from the space you are worried about.",
      label: "Request a consultation on WhatsApp",
    },
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://www.bugsweepingtscm.com/blog/bug-sweeping-in-mumbai#webpage",
          url: "https://www.bugsweepingtscm.com/blog/bug-sweeping-in-mumbai",
          name: "Bug Sweeping in Mumbai: Jurisdiction, Societies and Law",
          inLanguage: "en-IN",
          isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" },
          breadcrumb: { "@id": "https://www.bugsweepingtscm.com/blog/bug-sweeping-in-mumbai#breadcrumb" },
          primaryImageOfPage: { "@id": "https://www.bugsweepingtscm.com/blog/bug-sweeping-in-mumbai#primaryimage" },
          about: { "@id": "https://www.bugsweepingtscm.com/blog/bug-sweeping-in-mumbai#place" },
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
          "@id": "https://www.bugsweepingtscm.com/blog/bug-sweeping-in-mumbai#place",
          name: "Mumbai",
          address: { "@type": "PostalAddress", addressLocality: "Mumbai", addressRegion: "Maharashtra", addressCountry: "IN" },
        },
        {
          "@type": "ImageObject",
          "@id": "https://www.bugsweepingtscm.com/blog/bug-sweeping-in-mumbai#primaryimage",
          url: "https://www.bugsweepingtscm.com/images/blogs/bug-sweeping-in-mumbai.png",
          width: 1200,
          height: 630,
        },
        {
          "@type": "BlogPosting",
          "@id": "https://www.bugsweepingtscm.com/blog/bug-sweeping-in-mumbai#article",
          headline: "Bug Sweeping in Mumbai: Which Police Force, Which Rules, What a Sweep Proves",
          description:
            "Bug sweeping in Mumbai: which commissionerate covers your address, what you cannot file online, society CCTV rules, hotel cases and what a sweep proves.",
          datePublished: "2026-09-23",
          image: { "@id": "https://www.bugsweepingtscm.com/blog/bug-sweeping-in-mumbai#primaryimage" },
          mainEntityOfPage: { "@id": "https://www.bugsweepingtscm.com/blog/bug-sweeping-in-mumbai#webpage" },
          inLanguage: "en-IN",
          author: { "@id": "https://www.bugsweepingtscm.com/#organization" },
          publisher: { "@id": "https://www.bugsweepingtscm.com/#organization" },
          spatialCoverage: { "@id": "https://www.bugsweepingtscm.com/blog/bug-sweeping-in-mumbai#place" },
          about: [
            { "@type": "Thing", name: "Technical surveillance countermeasures" },
            { "@id": "https://www.bugsweepingtscm.com/blog/bug-sweeping-in-mumbai#place" },
          ],
          isPartOf: { "@id": "https://www.bugsweepingtscm.com/#website" },
        },
        {
          "@type": "Organization",
          "@id": "https://www.bugsweepingtscm.com/#organization",
          name: "BugSweepingTSCM",
          url: "https://www.bugsweepingtscm.com",
          logo: "https://www.bugsweepingtscm.com/images/logo/bug-sweep.png",
          email: "info@advancedetectiveagency.com",
          telephone: "+91-8882732221",
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://www.bugsweepingtscm.com/blog/bug-sweeping-in-mumbai#breadcrumb",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.bugsweepingtscm.com" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.bugsweepingtscm.com/blog" },
            { "@type": "ListItem", position: 3, name: "Bug Sweeping in Mumbai" },
          ],
        },
        faqJsonLd(bugSweepingMumbaiFaqs, "https://www.bugsweepingtscm.com/blog/bug-sweeping-in-mumbai#faq"),
      ],
    },
    content: `
      <div class="answer-box">
        <p><strong>Short answer:</strong> Bug sweeping in Mumbai is a professional search of a flat, office, vehicle or hotel room for hidden cameras, audio bugs and trackers. The complication here is jurisdiction: the metropolitan region is policed by several separate commissionerates, and Mumbai Police's own portal takes only minor complaints online, so a hidden-camera case means attending a police station.</p>
      </div>

      <p>Most guides to bug sweeping in Mumbai are service menus with a list of suburbs attached. The harder questions come after a device is found: which police force actually has your address, what you can and cannot file online, what your housing society is allowed to record, and what a sweep can honestly prove. This guide answers those, with the sources.</p>

      <h2>Mumbai is not one police jurisdiction</h2>
      <p>The single most useful thing to know before you report anything: the Mumbai Metropolitan Region is not one police force. Greater Mumbai Police covers the city and its suburbs, but the moment you cross into Thane, Navi Mumbai or the Mira-Bhayandar and Vasai-Virar belt, you are dealing with a different commissionerate, with its own commissioner, its own cyber police station and its own control room. All of them sit under Maharashtra Police and the state Home Department, which is itself a contrast with Delhi, where the force reports to the Union Ministry of Home Affairs.</p>
      <div class="table-wrap">
        <table>
          <caption>Which police force covers which part of the Mumbai region</caption>
          <thead>
            <tr><th scope="col">Where the device was found</th><th scope="col">Force</th><th scope="col">Note</th></tr>
          </thead>
          <tbody>
            <tr><td>Island city and suburbs, from Colaba to Dahisar and Mulund</td><td><a href="https://mumbaipolice.gov.in/" rel="noopener noreferrer" target="_blank">Greater Mumbai Police</a></td><td>Organised into five regions, each with its own regional cyber police station</td></tr>
            <tr><td>Thane city, and also Kalyan and Dombivli</td><td><a href="https://thanepolice.gov.in/" rel="noopener noreferrer" target="_blank">Thane City Police</a></td><td>Kalyan and Dombivli are a zone inside Thane City Police, not a separate commissionerate</td></tr>
            <tr><td>Vashi, Nerul, Belapur, Kharghar and Panvel</td><td><a href="https://navimumbaipolice.gov.in/en/units/cyber-crime-police-station" rel="noopener noreferrer" target="_blank">Navi Mumbai Police</a></td><td>Has its own cyber crime police station at Nerul</td></tr>
            <tr><td>Mira Road, Bhayandar, Vasai and Virar</td><td><a href="https://mbvv.mahapolice.gov.in/" rel="noopener noreferrer" target="_blank">Mira-Bhayandar, Vasai-Virar Police</a></td><td>A separate commissionerate covering the northern belt</td></tr>
          </tbody>
        </table>
      </div>
      <p>Which force investigates follows where the device was planted, not where you live. A camera found in a Kharghar flat is a Navi Mumbai Police matter even if you work in Lower Parel. If devices turn up in a flat in one commissionerate and an office in another, treat them as two matters.</p>
      <p>That does not mean a police station can send you away. Under Section 173(1) of the Bharatiya Nagarik Suraksha Sanhita, information about a cognizable offence may be recorded "irrespective of the area where the offence is committed", which is the Zero FIR route; the case is then transferred to the station with jurisdiction. We set out that procedure, and the rights that come with it, in the <a href="/blog/bug-sweeping-in-delhi">Delhi guide</a>.</p>

      <h2>What you can and cannot report online in Mumbai</h2>
      <p>This catches people out. Mumbai Police's <a href="https://mumbaipolice.gov.in/OnlineComplaints?ps_id=0" rel="noopener noreferrer" target="_blank">online complaint page</a> states plainly that "this site shall only entertain complaints about minor crimes ('non-cognizable crimes')", and that an FIR for a major, cognizable crime "can only be registered at a Police Station". Voyeurism is a cognizable offence. So the online form is not the route for a hidden camera: you will need to attend a police station, or one of the regional cyber police stations.</p>
      <p>Alongside that, the national portal at <a href="https://cybercrime.gov.in/" rel="noopener noreferrer" target="_blank">cybercrime.gov.in</a> takes cyber complaints from anywhere in India, including a women and children track that allows anonymous reporting of certain content. Filing there does not itself create an FIR; the complaint is routed to the relevant state police.</p>
      <p>The numbers worth keeping, each from an official source:</p>
      <ul>
        <li><strong>112</strong> for any emergency, listed by Maharashtra Police alongside <strong>1930</strong> for cyber crime.</li>
        <li><strong>103</strong> is the women's assistance number for Mumbai, Thane and Navi Mumbai specifically. Maharashtra Police lists <a href="https://www.mahapolice.gov.in/" rel="noopener noreferrer" target="_blank">1091 for the rest of the state</a>, so advice written for other cities will give you the wrong number here.</li>
        <li>Mumbai Police publishes a cyber helpline number on its homepage next to 1930, and its cyber police station for the city sits at the Bandra Kurla Complex.</li>
      </ul>
      <p>One gap worth naming: as of September 2026 we could find no Mumbai Police or Maharashtra Cyber public advisory dealing specifically with hidden cameras in hotels, changing rooms or paying-guest accommodation. We checked the force's press releases and the state cyber agency's public pages, the latter of which blocks automated access, so material may exist there that we could not read.</p>

      <h2>Flats and societies: the camera is usually already there</h2>
      <p>In a Mumbai co-operative housing society, the most sensitive recording equipment in the building is rarely hidden. It belongs to the society. Under the Maharashtra government's <a href="https://sahakarayukta.maharashtra.gov.in/SITE/PDF/Rules_Acts_Bylaws/Model_Bye_Laws_of_Coop_Housing_Society_New_Flatowner_Type_(2-9-14)%20(1).pdf" rel="noopener noreferrer" target="_blank">model bye-laws for co-operative housing societies</a>, security appliances including CCTV and intercom, and the society Wi-Fi, are items the society installs and maintains at its own cost. The cameras in your lobby, lift and parking are collective property, controlled by the managing committee.</p>
      <p>That is also where Mumbai's most instructive recent case went wrong. In March 2026 the Free Press Journal <a href="https://www.freepressjournal.in/mumbai/married-mumbai-woman-mocked-in-andheri-society-over-lift-kissing-cctv-video-files-police-complaint" rel="noopener noreferrer" target="_blank">reported</a> that a woman in an Andheri society found footage of herself in the building lift circulating among residents. Police suspected it had been taken from the society's CCTV backup server by a relative of an office-bearer who had access to it. No one had to plant anything.</p>
      <p>So in a society building, ask the questions that follow from that:</p>
      <ul>
        <li>Who physically holds keys or login access to the recorder, and is that list written down?</li>
        <li>How long is footage retained, and is any copy made or exported logged?</li>
        <li>Is the recorder in a locked space, or in an office several people pass through?</li>
        <li>Where exactly do the cameras point, and has the general body agreed to that?</li>
      </ul>
      <p>On that last point there is Mumbai authority. In a case reported in 2018 concerning a Colaba building, the Bombay High Court restrained residents from keeping cameras trained on a neighbour's flat without consent, confining them to the floor where they lived, and treated monitoring a neighbour's daily movement as an invasion of privacy (<a href="https://www.livelaw.in/installing-cctv-cameras-to-monitor-movement-without-flat-owners-consent-is-invasion-of-privacy-bombay-hc" rel="noopener noreferrer" target="_blank">LiveLaw</a>). A camera covering a shared lobby is an ordinary security measure; one pointed at your door is not automatically the same thing.</p>
      <p>Redevelopment and repairs add the other Mumbai-specific exposure. The same model bye-laws require members to allow access for inspection of the premises for repairs and maintenance, including by a technical expert the society appoints. That is legitimate and necessary, and it also means a stream of contractors and surveyors lawfully entering flats over months. If your building has just finished major works and something feels wrong afterwards, that access history is the relevant background, not an exotic adversary.</p>

      <p>What the bye-laws do not do is say anything about the footage itself, which is where most committee disputes actually sit. Our guide to <a href="/blog/cctv-rules-for-housing-societies">CCTV rules for housing societies</a> goes through the one bye-law that mentions cameras, the member inspection right that does not reach recordings, and what the data protection rules now ask of a society.</p>

      <h2>Hotels and short stays: look at the sockets</h2>
      <p>The most recent documented Mumbai hotel case is specific enough to act on. On 31 December 2025 the Free Press Journal <a href="https://www.freepressjournal.in/mumbai/mumbai-shocker-hidden-camera-found-inside-malad-hotel-room-case-registered" rel="noopener noreferrer" target="_blank">reported</a> that guests at a budget hotel in Malad East found a camera concealed inside an electric plug point in their room. What gave it away was mundane: a wire coming out of a socket that was not in use. Dindoshi police registered a case and the device was sent for forensic examination.</p>
      <p>A second Mumbai pattern is that the device is often just a phone. In 2020 a tailor in Lokhandwala, Andheri was arrested after a customer spotted a mobile phone propped on a shelf in record mode, concealed behind plastic bags, in the shop's trial room (<a href="https://www.freepressjournal.in/amp/mumbai/andheri-tailor-held-for-filming-women-inside-his-trial-room" rel="noopener noreferrer" target="_blank">Free Press Journal</a>). No specialist equipment was involved in either case.</p>
      <p>Two things are worth knowing about hotels here. First, a lodging house or residential hotel in Mumbai is a licensed premises under the Maharashtra Police Act, controlled by the Commissioner of Police, so a complaint about the premises has a regulator behind it as well as a police station. Second, lawful CCTV in a hotel covers entrances, lobbies and corridors, never rooms or bathrooms. Mumbai Police has previously ordered private establishments including hotels to run CCTV with a minimum retention period and to hand footage to police on demand, under a prohibitory order issued in January 2021; orders of that kind are made for fixed periods and reissued, so treat the retention window as short. If footage matters to your complaint, ask for it to be preserved in writing immediately rather than a fortnight later.</p>

      <p>What that request should say, and which of the routes to an actual copy is open to you, is set out in our guide to <a href="/blog/how-to-get-cctv-footage-in-india">getting CCTV footage somebody else holds</a>.</p>

      <h2>Offices, boardrooms and campuses</h2>
      <p>Mumbai's corporate exposure is not a marketing line. The Mumbai Metropolitan Region Development Authority's own <a href="https://mmrda.maharashtra.gov.in/en/planning/badra-kurla-complex/overview" rel="noopener noreferrer" target="_blank">account of the Bandra Kurla Complex</a> lists occupiers including the Securities and Exchange Board of India, the National Stock Exchange, SIDBI, the Bharat Diamond Bourse and the United States and British consulates, and puts employment in the E and G blocks alone at two to three lakh people. The <a href="https://bdbindia.org/" rel="noopener noreferrer" target="_blank">Bharat Diamond Bourse</a> describes itself as holding around 2,500 offices and more than 4,000 members on one 20-acre site. Regulators, an exchange, a diamond trading floor and two consulates sit within walking distance of each other.</p>
      <p>The state's own <a href="https://mls.org.in/PDF2026/budjet/ESM_25_26_Eng%20Book.pdf" rel="noopener noreferrer" target="_blank">Economic Survey of Maharashtra 2025-26</a> adds the scale: 207 of Maharashtra's 669 approved private IT parks are in Mumbai city and suburban districts, and Mumbai district has the state's largest economy by a wide margin.</p>
      <p>The realistic entry route, though, is access rather than technology. In October 2025 Deccan Chronicle <a href="https://www.deccanchronicle.com/nation/former-iit-bombay-student-held-for-filming-in-hostel-bathroom-1911081" rel="noopener noreferrer" target="_blank">reported</a> that a former student was arrested for filming in a hostel bathroom at IIT Bombay in Powai, having entered the campus on a visitor pass issued against his alumni identity. Any Mumbai organisation that issues passes to former staff, contractors or vendors should read that as a description of its own front door.</p>
      <p>For executives, one Mumbai judgment is worth knowing. In <em>Vinit Kumar v. Central Bureau of Investigation</em>, decided on 22 October 2019, the Bombay High Court quashed telephone interception orders against a businessman, holding that interception may be ordered only on grounds of public emergency or public safety, and directed that the recordings be destroyed (<a href="https://indiankanoon.org/doc/107953018/" rel="noopener noreferrer" target="_blank">judgment</a>). Unlawful interception can be challenged and set aside, which is a reason to preserve and litigate rather than to act quietly.</p>

      <h2>What a phone app cannot do</h2>
      <p>The most common searches here are not about Mumbai at all; they are people in a hotel room or a trial room asking how to check with the phone in their hand. Honestly: a phone helps a little, and the popular advice oversells it.</p>
      <ul>
        <li><strong>The torch trick</strong> can catch the glint of a lens in a dark room. It misses lenses behind tinted covers, and tells you nothing about microphones.</li>
        <li><strong>The infrared check</strong> works only against cameras using infrared illumination, and many rear cameras filter infrared out, so the front camera is often the better test.</li>
        <li><strong>Detector apps</strong> cannot measure radio signals the phone's hardware does not expose. In a dense Mumbai building they mostly rediscover the neighbours' Wi-Fi.</li>
        <li><strong>Network scans</strong> only see devices on a network you control, which in a hotel or a rented flat you do not.</li>
        <li><strong>Nothing on a phone finds a camera that records to a memory card</strong> and transmits nothing at all. That is the case that defeats every app.</li>
      </ul>
      <p>Our national guide covers <a href="/blog/how-to-detect-hidden-cameras">the room-by-room checks worth doing</a> before you call anyone.</p>

      <h2>What a Mumbai sweep can and cannot establish</h2>
      <p>A sweep reports what was found in the areas examined, with the methods used, at the time of the visit. It cannot prove a room has never been watched, and it cannot keep it clean afterwards. Anyone promising a guaranteed clean result is overstating what the equipment does.</p>
      <p>Mumbai adds two practical limits. The first is the airwaves. Mumbai is its own licensed telecom service area, and the Telecom Regulatory Authority of India <a href="https://www.trai.gov.in/sites/default/files/2026-03/QPIR_03032026_0.pdf" rel="noopener noreferrer" target="_blank">recorded about 39.95 million wireless connections in it as on 31 December 2025</a>, roughly 96 per cent of them urban, packed into the city and its suburbs. A radio scan in a Mumbai flat picks up the building as much as the room, and separating one unexplained signal from the neighbours' devices is most of the work. And in older buildings and redevelopment-era flats, wiring and cavities rarely match any drawing, so the physical inspection matters as much as any instrument.</p>

      <h2>Booking a sweep in Mumbai without tipping anyone off</h2>
      <p>If a device is live, whoever placed it may be listening while you arrange the sweep. Make the arrangements from a different phone and a different place, tell only the people who must approve access, and leave fittings alone until the team arrives, because pulling them apart warns whoever planted the device and disturbs the evidence. The full preparation sequence, including what to agree in advance about a device that is found, is in our <a href="/blog/bug-sweeping-in-india">national guide</a>, and the service itself is described on our <a href="/locations/mumbai">Mumbai page</a>.</p>

      <h2>Frequently asked questions</h2>
      <div class="faq">
${faqHtml(bugSweepingMumbaiFaqs)}
      </div>

      <div class="note">
        <p><strong>About this guide.</strong> Published by BugSweepingTSCM. The site's founder is <a href="/meet-the-founder">Hardesh Bhardwaj</a>, founder of ADA Advance Detective Agency Pvt. Ltd. (CIN U74999DL2021PTC390132) and in practice since 2013. Police procedures, helplines and legal points were checked against official sources on 23 September 2026 and are general information, not legal advice. Structures and rules change; confirm current details with the linked sources and take legal advice about your own situation.</p>
      </div>
    `,
  },
];
