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
    a: "Not automatically. A room or vehicle sweep looks for physical devices; checking a phone for spyware or stalkerware is separate work that has to be agreed in the scope. If you suspect a partner or family member is monitoring your phone, seek help from a device they cannot access, and do not reset the phone or delete apps first, because that can alert them and erase evidence.",
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
    a: "Only for Bluetooth item trackers, and only some of them. Apple and Google shipped unwanted tracking alerts in May 2024, on iOS 17.5 and later and on Android 6 and later. Google's own documentation says the alerts work with Find Hub network compatible tags, headphones and Apple AirTags, and its list does not include Tile or Samsung Galaxy SmartTag. No phone alert of any kind detects a cellular GPS tracker, which is the type used in the serious Indian cases. A silent phone is not a clean car.",
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

export const blogPosts: BlogPost[] = [
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
      <p>It is more useful to look at cases that reached an arrest than at a generic list of hiding places. Four recent Indian ones are worth knowing because each carries a lesson that the standard advice misses.</p>
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
      <p>Yes, and this is the question that decides how much any of the above is worth. A camera that stores to a memory card and keeps its radio off produces no radio emission, joins no network and leaves nothing for a scan or a radio detector to find. It is not an exotic configuration. It is what was used in the Noida hotel case and in the Delhi flat case above, and in both the person who placed it had to come back for the card, which is why both involved a return visit on a pretext.</p>
      <p>This is also the honest limit of professional radio equipment, and the clearest evidence for it comes from the firms that make that equipment. A manufacturer of technical surveillance instruments explains in its own product documentation that its non-linear junction detector exists precisely because it detects the physical properties of a device rather than energy or emissions, so it responds even when the object is switched off. A company that sells spectrum equipment markets a second and completely different instrument on the ground that radio search cannot find a device that is not emitting.</p>

      <h2>What professional instruments add, and what they do not</h2>
      <p>A sweep is a visual, physical and electronic examination, and the electronic part is the smallest of the three more often than people expect. It is worth being specific about what each class of instrument does, because the marketing around them is florid.</p>
      <p>A <strong>non-linear junction detector</strong> transmits a signal and listens for the second and third harmonics that a semiconductor junction sends back, which means it finds electronics whether or not they are powered. What it does not do is identify a camera: it detects the presence of silicon, so a dead charger, a thermostat and a camera module all answer it. It also responds to what the manufacturers call false junctions, where two dissimilar or corroded metals touch, so in a real room it reacts to rusted screws, bed frames and fittings. The usual rule for telling these apart is that electronics return a strong second harmonic and a false junction a strong third, and the same manufacturer documentation notes that some circuits return a strong third harmonic too, so the rule can mislead in both directions. The manufacturer's own manual states plainly that it makes no guarantee about the unit's performance when attempting to detect hidden electronic devices. Half the work is interpretation, which is the real argument for an experienced operator rather than a gadget.</p>
      <p><strong>Thermal imaging</strong> is useful and routinely oversold. The earlier version of this page said a thermal camera reveals heat through walls and ceilings, which is wrong. The largest manufacturer in the field <a href="https://www.flir.com/discover/home-outdoor/can-thermal-imaging-see-through-walls/" rel="noopener noreferrer" target="_blank">states plainly</a> that thermal cameras cannot see through walls, that glass behaves like a mirror so you see nothing through a window, and that they can never see through metal. What a thermal camera reads is surface temperature, so it can show a warm patch on the face of a fitting where something powered sits behind it. It follows from the same manufacturer's point about glass that a camera behind a mirror or a glass panel is thermally invisible.</p>
      <p><strong>Radio spectrum analysis</strong> finds things that are transmitting, at the time they are transmitting. It is the right tool for a networked camera and useless against the memory card case above.</p>

      <h2>The law: two sections that protect different people</h2>
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
      <p>Put the two together and two gaps appear that no other page on this subject seems to mention. A man who finds a camera in his hotel bathroom has no voyeurism offence available to him, because section 77 is limited by its own words to a woman; he is left with section 66E, and only if what was captured meets its definition. And nobody of any gender is protected by either section against a covert audio recording, because section 77 speaks of an image and section 66E of a visual image. If your concern is a microphone rather than a lens, neither of these sections is the answer.</p>
      <p>On hotels specifically, there is no central Indian rule requiring a hotel to disclose or prohibit cameras in guest rooms. The Ministry of Tourism's star classification scheme is voluntary and its only mention of cameras is a line requiring closed circuit television at strategic locations, which is about security coverage of public areas rather than guest privacy. The Ministry of Home Affairs told Parliament in 2015 that states had been advised to require surveillance systems in places with large footfalls including hotels, and that policing and public order are state subjects, which is the constitutional reason the rules differ by state. Our <a href="/locations">state and city pages</a> set out what individual states actually require.</p>

      <h2>If you find a camera: what to do, and the number not to call</h2>
      <p>Safety first. If you believe you are in danger, call 112, which is the national emergency number and routes to a police dispatcher.</p>
      <p>Then leave the device where it is. Do not pull it apart, unplug it or take it away, and do not let the premises staff take it, because handling it destroys the thing that would make it useful later. Photograph it in position, note exactly where it was and what it faced, and write down who has had access to the room and when. This is practical advice rather than a legal requirement, but it is the difference between a case that can be proved and one that cannot.</p>
      <p>Report it as a first information report at a police station. Section 173(1) of the <a href="https://egazette.gov.in/WriteReadData/2023/250884.pdf" rel="noopener noreferrer" target="_blank">Bharatiya Nagarik Suraksha Sanhita, 2023</a> carries three rights worth knowing. Information about a cognizable offence may be given irrespective of the area where the offence was committed, which is the zero first information report, so a traveller can report after getting home rather than only at the scene. The information may be given by electronic communication, to be signed within three days. And where a woman gives information about an offence under section 77, the proviso says it shall be recorded by a woman police officer or any woman officer. Section 173(2) entitles the informant to a copy of what was recorded, free of cost and forthwith.</p>
      <p>If the footage is circulating online, or someone is making demands with it, use cybercrime.gov.in in addition. And the correction that matters most: <strong>do not call 1930</strong>. That number is the national helpline for urgent financial cyber fraud, operating as the front end of the financial fraud reporting system, and its published guidance asks callers for transaction details. It is recommended constantly in Indian advice on hidden cameras and it is the wrong desk.</p>
      <p>One more thing worth carrying. Reporting in this area frequently misstates the law: a 2025 report of a changing room case in Madhya Pradesh cited section numbers that mix the new code with the old one and do not exist as given. And in a widely covered 2022 case at a university in Punjab, the allegation that drove national protest, that dozens of videos of other residents had been taken and leaked, was not borne out by the police investigation, which reported finding no objectionable videos of other women on the accused's phone. Numbers circulate faster in these cases than investigations can correct them, which is a good reason to check the provision and the findings rather than rely on a summary.</p>

      <h2>What a sweep can and cannot establish</h2>
      <p>A sweep reports what was found in the areas examined, by the methods used, under the conditions present, at the time of the visit. It cannot prove that a room has never been watched, and it cannot keep it clean afterwards. A camera that was powered down during the visit, or one storing to a memory card, may leave nothing for any instrument to register, which is why the physical examination matters as much as anything electronic. If you want the preparation sequence before a sweep, including what to agree in advance about a device that is found, our <a href="/blog/bug-sweeping-in-india">national guide</a> covers it, the <a href="/blog/signs-your-office-is-bugged">guide to office indicators</a> covers the workplace version of the same question, and if the space you are worried about is a car rather than a room, the <a href="/blog/vehicle-gps-tracking">guide to vehicle trackers</a> is the one to read.</p>

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

      <p>Electronic eavesdropping in an office means a device or a piece of software capturing conversation or images without the consent of the people in the room. It falls into three classes that behave very differently. A planted radio transmitter emits a signal and can in principle be found by a radio search. A passive recorder stores to internal memory and emits nothing at all, so there is no signal to find. A compromised endpoint, such as a laptop, a desk phone or a video conferencing codec, uses a microphone that is already in the room and sends audio out inside ordinary encrypted network traffic. Technical surveillance countermeasures (TSCM) is the discipline of searching for the first two. The third is a cybersecurity problem, and no radio sweep will find it.</p>

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
            <tr><td>Phone battery drains, phone runs hot</td><td>Ordinary battery, app and charging behaviour</td><td>No, and there is no physical path from a room device to your phone</td></tr>
            <tr><td>Lights flicker</td><td>Loose or degraded neutral, motor inrush, LED driver and dimmer mismatch</td><td>No</td></tr>
            <tr><td>A detector app alarms</td><td>The magnetometer responding to metal, or a Wi-Fi scan listing the neighbours</td><td>No</td></tr>
            <tr><td>A closely held fact appears elsewhere</td><td>Depends entirely on how specific the fact was and how small the group holding it</td><td>Sometimes, with discipline</td></tr>
            <tr><td>Unexplained access to the room</td><td>Someone had the opportunity to place something</td><td>Yes, this is the strongest one</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Why clicks and static are not evidence of a tap</h2>
      <p>The clicking telephone belongs to an era of physical bridging taps on analogue copper lines. Interception today is carried out inside the operator's network by reconfiguring equipment there, which means nothing is added to your line, your handset or your room for you to hear. In India that activity sits under the Telecommunications Act 2023, with the Telecommunications (Procedures and Safeguards for Lawful Interception of Messages) Rules, 2024 made under section 20, and an interception order runs for a limited period before it must be renewed. None of that machinery touches your office.</p>
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
      <p>A device has to be placed. Placement needs opportunity, which is why an unexplained opportunity is a real change in your risk while a symptom almost always has a duller explanation. Access events have the further advantage of being checkable against records, which symptoms are not: visitor logs, work orders, access control data and camera footage either show something or they do not.</p>
      <p>The events worth taking seriously are mundane. Contractors or technicians left unsupervised in sensitive rooms, including electrical, air conditioning, audio visual and cleaning work after hours. Fit out or maintenance work that opens ceilings, walls, power or data runs, which is the one routine reason for anyone to be inside the building fabric. Visitors left alone in a boardroom, including during a break. New mains powered objects nobody ordered, and fittings or faceplates that have moved. Keys and access cards that were never returned, and the escort rule waived once as a favour.</p>
      <p>Two Indian cases make the point better than any list. In the most prominent Indian corporate espionage prosecution, reported in February 2015, documents were taken from ministry offices in <a href="/locations/delhi">Delhi</a> by junior officials using duplicate keys at night and passed on through intermediaries. There was no device at all: it was access, key control and paper. And in May 2026 a junior revenue assistant at a district rural development agency office in Jagatsinghpur, <a href="/locations/state/odisha">Odisha</a> was arrested after a camera he had placed in the women's washroom fell while an employee was using it; the office's own camera records then corroborated his movements (<a href="https://www.orissapost.com/odisha-clerical-staffer-arrested-for-installing-spy-camera-in-womens-washroom-of-office/" rel="noopener noreferrer" target="_blank">Odisha Post</a>). An insider with ordinary access, discovered by accident and by records, not by any of the classic signs.</p>

      <h2>When a leak really is evidence</h2>
      <p>Information surfacing where it should not is the one lay indicator with genuine weight, and it is only as strong as the fact that leaked. A generic outcome, such as a competitor pricing just under you, is weak evidence because it can be modelled from the market. An arbitrary and specific detail is strong: a verbatim phrase, a number that was wrong in the room and wrong again outside it, a named internal objection, a date that was never written down. The question to ask is whether the detail could have been guessed, inferred or reconstructed. If it could, it is not evidence.</p>
      <p>There is a statistical trap here that deserves naming. Stefan Axelsson's work on the base rate fallacy in intrusion detection, published in ACM Transactions on Information and System Security in 2000, showed that when the underlying event is rare, even a detector with a low false alarm rate produces alerts that are overwhelmingly false, because the result depends on how rare the event is and not on the detector's sensitivity alone. Covert devices in a given office are rare and coincidences are common. Once somebody suspects a bug, every click and flicker gets recruited as confirmation, so a suspicion assembled from a stack of individually weak signs is weaker than it feels, not stronger.</p>
      <p>Before reaching for the device explanation, rule out the ones that are usually likelier. Insider disclosure, including by people on their way out. Inference from public signals such as filings, hiring and vendor movement. Carelessness in lifts, cabs, airport lounges and open plan floors. Document and email leaks, forwards and misdirected mail. Shared calendars, which are chronically underrated: a meeting title, an attendee list and a room booking are often visible far beyond the people in the room, and they give away the existence, timing and participants of a confidential discussion without any device. Third parties who legitimately hold the fact, such as counsel, bankers and auditors. And a participant simply recording on the phone in front of them, which is not bugging and which no sweep will ever find.</p>
      <p>The cautionary example is a senior one. In 2010 the then Finance Minister asked for an inquiry into adhesive found at sixteen points across his office suite in North Block. The Intelligence Bureau examined the rooms and concluded the substance was chewing gum, noting that there was no groove or cavity at the points concerned and that at one of them the adhesive carried a coat of paint, indicating it had been there for months (<a href="https://www.dnaindia.com/india/report-intelligence-bureau-bug-in-pranab-mukherjee-s-office-is-chewing-gum-1557660" rel="noopener noreferrer" target="_blank">DNA India, June 2011</a>). The most senior office in the country, a real suspicion, national technical capability brought to bear, and the answer was mundane.</p>

      <h2>The threat a modern office is more likely to face</h2>
      <p>MITRE's ATT&amp;CK knowledge base records audio capture as an observed technique in which an adversary uses the microphone, webcam or call application already on a machine, through ordinary operating system and application interfaces, writing audio to disk and sending it out later. MITRE's own note on it is worth quoting: this kind of technique cannot easily be mitigated with preventive controls, because it abuses features the system is supposed to have (<a href="https://attack.mitre.org/techniques/T1123/" rel="noopener noreferrer" target="_blank">MITRE ATT&amp;CK T1123</a>).</p>
      <p>Set that against a planted transmitter. The laptop or room codec is already in the room, already has a microphone, already has mains power and a network path out, and has a legitimate reason to be there. A planted transmitter needs covert installation, a power source and an emission that can be found. The cheaper option for an adversary is usually the equipment you installed yourself, and a radio sweep does not detect it, because the traffic leaving the building looks like all the other encrypted traffic.</p>

      <h2>What a sweep can and cannot establish</h2>
      <p>A sweep reports what was found in the areas accessed, by the methods used, under the conditions present, at the time of the visit. It cannot establish a negative, and the distance between those two statements is where most misunderstandings live. Specifically, it cannot establish that a recorder storing to internal memory is absent, because such a device emits nothing to detect. It cannot establish that a device which was not transmitting during the visit is absent, since voice activated and remotely triggered devices are silent most of the time. It says nothing about areas that were not accessed, about a compromised laptop or cloud account, or about a participant recording the meeting. And it cannot keep the room clean after the team leaves.</p>
      <p>That last point has an official statement behind it. The United States Department of Defense instruction governing its own countermeasures programme defines a survey as a thorough visual, electronic and physical examination, three modalities precisely because an electronic search alone is not sufficient, and it records that surveys of facilities with open access have proven counterproductive by giving occupants a false sense of security. A sweep of a room that anyone can walk into is worth less than fixing who can walk into it.</p>
      <p>So the sentence to keep hold of is this: a sweep that found no signals is not the same statement as a room with nothing in it. Any firm willing to blur those two is selling reassurance rather than a result. Our <a href="/blog/bug-sweeping-in-india">national guide</a> covers what a sweep involves in more detail, the <a href="/blog/how-to-detect-hidden-cameras">guide to hidden cameras</a> covers the checks worth doing yourself, and the <a href="/blog/corporate-espionage-india">guide to corporate espionage</a> sets out what Indian law actually protects when information leaves a company.</p>

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
      <p>Protection here divides into three layers that behave differently, and being honest about which one a sweep addresses is more useful than claiming it is the foundation of everything.</p>
      <p>The first layer is physical and electronic surveillance of a space: a device placed in a room, a vehicle or a fitting. This is what technical surveillance countermeasures address. It is also the layer where the law is clearest, because unlawful interception of a message is an offence under the Telecommunications Act, 2023, which carries up to three years or a substantial fine, and which came into force in June 2024.</p>
      <p>The second layer is intrusion into systems, where the microphone is already in the room because it belongs to a laptop or a conferencing unit, and the audio leaves inside ordinary encrypted traffic. No radio sweep detects that. Our <a href="/blog/signs-your-office-is-bugged">guide to office indicators</a> goes into why that is now the likelier threat in a modern office.</p>
      <p>The third layer is the insider, and it has no technical countermeasure at all. What it has is governance, and Indian law already requires some of it. The rules defining reasonable security practices under the Information Technology Act expressly include physical security control measures alongside managerial, technical and operational ones, which gives a physical security programme a legal footing rather than merely a prudential one. And a listed company is already required, under the insider trading regulations, to maintain a structured digital database recording who unpublished price sensitive information was shared with, maintained internally with time stamping and audit trails and preserved for at least eight years. That register is exactly the record that makes a leak investigable, and no sweep substitutes for it.</p>
      <p>One last caution about expectations. Even a Supreme Court appointed technical committee, examining devices in the Pegasus matter, reported finding malware in five of the twenty nine devices it examined while being unable to confirm what it was. Detection and attribution are different problems, and attribution is frequently not achievable. Any firm that promises to tell you who was listening is promising something the best resourced investigations in the country have not delivered.</p>

      <h2>What a sweep can and cannot establish</h2>
      <p>A sweep reports what was found in the areas examined, by the methods used, at the time of the visit. It cannot prove a room has never been compromised and it cannot keep it clean afterwards. Against the three layers above, it addresses the first and leaves the second and third to other disciplines. If the concern is a specific negotiation or boardroom, our <a href="/blog/bug-sweeping-in-india">national guide</a> sets out what a sweep involves, and the <a href="/locations">location pages</a> cover how reporting and local rules differ by state. Where executive travel is part of the picture, the <a href="/blog/vehicle-gps-tracking">guide to vehicle trackers</a> covers what can and cannot be found on a car, and our <a href="/locations/mumbai">Mumbai</a> and <a href="/locations/gurugram">Gurugram</a> pages deal with the two places corporate work concentrates most.</p>

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
      <p>Two further limitations come from Apple itself and deserve to be better known. If an item has been with you overnight, <a href="https://support.apple.com/en-in/119874" rel="noopener noreferrer" target="_blank">its identifier may have changed</a>, and the system uses that identifier to decide that the same item is moving with you, so the detection can break on precisely the device that has been with you longest. And disabling Find My, Bluetooth or Location Services on your own phone does not stop the tag's owner seeing its location. Switching off your own radios protects nobody.</p>
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
      <p>Bug sweeping, known in the security industry as technical surveillance countermeasures (TSCM) and often called a "debugging service" in India, is the systematic search of a defined space for devices that capture or transmit audio, video or location without the occupants' consent. A sweep usually covers three kinds of threat. Transmitting devices, such as GSM (SIM-card) bugs, Wi-Fi cameras and radio-frequency (RF) transmitters, emit signals. Non-transmitting devices, such as SD-card voice recorders and pinhole cameras, store data locally and emit nothing. Trackers attached to vehicles report location over mobile networks or Bluetooth. Because no single instrument catches all three, a professional sweep combines a spectrum analyser, a non-linear junction detector (NLJD), optical and thermal checks and a close physical inspection. The result is a written account of the areas examined, the methods used and any findings. A sweep describes a space at the time it was inspected; it does not certify that the space will stay clean.</p>

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
      <p>A physical sweep also does not cover every route by which information leaks. Spyware on a phone, a compromised email account, a shared cloud folder or an insider repeating conversations are separate problems that need different checks. Treat any provider that guarantees "100% detection" with caution; the claim is not something the technology can support.</p>

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
      <p>You can reduce obvious risks yourself, especially in a hotel room or rental. Some popular advice works; some gives false comfort.</p>
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

      <h2>Hotels and short stays: look at the sockets</h2>
      <p>The most recent documented Mumbai hotel case is specific enough to act on. On 31 December 2025 the Free Press Journal <a href="https://www.freepressjournal.in/mumbai/mumbai-shocker-hidden-camera-found-inside-malad-hotel-room-case-registered" rel="noopener noreferrer" target="_blank">reported</a> that guests at a budget hotel in Malad East found a camera concealed inside an electric plug point in their room. What gave it away was mundane: a wire coming out of a socket that was not in use. Dindoshi police registered a case and the device was sent for forensic examination.</p>
      <p>A second Mumbai pattern is that the device is often just a phone. In 2020 a tailor in Lokhandwala, Andheri was arrested after a customer spotted a mobile phone propped on a shelf in record mode, concealed behind plastic bags, in the shop's trial room (<a href="https://www.freepressjournal.in/amp/mumbai/andheri-tailor-held-for-filming-women-inside-his-trial-room" rel="noopener noreferrer" target="_blank">Free Press Journal</a>). No specialist equipment was involved in either case.</p>
      <p>Two things are worth knowing about hotels here. First, a lodging house or residential hotel in Mumbai is a licensed premises under the Maharashtra Police Act, controlled by the Commissioner of Police, so a complaint about the premises has a regulator behind it as well as a police station. Second, lawful CCTV in a hotel covers entrances, lobbies and corridors, never rooms or bathrooms. Mumbai Police has previously ordered private establishments including hotels to run CCTV with a minimum retention period and to hand footage to police on demand, under a prohibitory order issued in January 2021; orders of that kind are made for fixed periods and reissued, so treat the retention window as short. If footage matters to your complaint, ask for it to be preserved in writing immediately rather than a fortnight later.</p>

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
