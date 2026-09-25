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

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-detect-hidden-cameras",
    title: "How to Detect Hidden Cameras in Your Hotel Room or Office",
    excerpt:
      "Hidden cameras are cheaper and more accessible than ever. Before you settle into your hotel room or step into a private meeting, here's what you need to know, and what professionals do differently.",
    date: "2025-03-18",
    readTime: "6 min read",
    category: "Bug Sweep Tips",
    coverImage: "/images/blogs/image_1.png",
    content: `
      <p>The miniaturisation of electronics has made covert cameras frighteningly affordable. A pinhole camera no larger than a shirt button, capable of recording 1080p video, is available online for under ₹1,000. This reality means that hotel rooms, rented apartments, changing rooms, and even corporate meeting spaces face a genuine and growing surveillance threat.</p>

      <h2>Common Hiding Spots</h2>
      <p>Over hundreds of professional sweeps, our TSCM technicians consistently find hidden cameras in a predictable set of locations:</p>
      <ul>
        <li><strong>Smoke detectors and fire alarms</strong>: a near-perfect concealment, as they face into the room and are rarely disturbed.</li>
        <li><strong>Power adapters and USB chargers</strong>: many commercially available spy cameras are built directly into working adapters.</li>
        <li><strong>Air vents and ceiling tiles</strong>: pinhole lenses are undetectable to the naked eye from any distance.</li>
        <li><strong>Televisions and set-top boxes</strong>: the bezels of flat screens provide ample room for a small lens.</li>
        <li><strong>Decorative objects</strong>: clocks, photo frames, plants, and lamps are all common carriers.</li>
      </ul>

      <h2>What Consumer Detectors Miss</h2>
      <p>The handheld lens-reflection detectors available online (the ones that flash a red LED and ask you to look through a viewfinder) are effective only against cameras with an active lens in direct line of sight. They fail entirely against:</p>
      <ul>
        <li>Cameras behind tinted or smoked plastic</li>
        <li>Cameras that are switched off and recording passively to an SD card</li>
        <li>IR (night vision) cameras during the day</li>
        <li>Wide-aperture micro-lenses embedded in fabrics or wallpaper</li>
      </ul>

      <h2>The Professional Difference</h2>
      <p>A certified TSCM sweep combines several detection methods simultaneously. A <strong>Non-Linear Junction Detector (NLJD)</strong> identifies the semiconductor junctions inside any electronic device, whether it is powered on or off, by transmitting a low-power RF signal and analysing the harmonic response. A <strong>FLIR thermal camera</strong> reveals the heat signature of any active recording device, even through walls and ceilings. A <strong>spectrum analyser</strong> running from 10 kHz to 24 GHz catches any wireless transmission the camera may be sending.</p>
      <p>Together, these tools provide detection coverage that no consumer product can replicate.</p>

      <h2>Practical Steps You Can Take</h2>
      <p>While no substitute for a professional sweep, the following steps reduce your exposure in unfamiliar environments:</p>
      <ul>
        <li>On arrival, scan the room for objects that seem out of place or that face an unusual direction.</li>
        <li>Check all USB charging ports for extra lenses; use your smartphone torch and zoom in.</li>
        <li>Switch off the room lights and scan for tiny infrared LEDs with your phone camera (phone cameras often detect IR light that the human eye cannot).</li>
        <li>If you are in a corporate or government setting where confidentiality is critical, schedule a sweep before sensitive discussions take place, not after.</li>
      </ul>

      <p>If you have any reason to believe your space is compromised, contact our TSCM team immediately. We provide same-day emergency sweeps across India with zero disclosure of your engagement.</p>
    `,
  },
  {
    slug: "signs-your-office-is-bugged",
    title: "5 Signs Your Office or Boardroom May Be Bugged",
    excerpt:
      "Competitors knowing your strategy before you execute it. Confidential negotiations leaking to the other side. These are not coincidences. They are the fingerprints of electronic surveillance. Here's what to look for.",
    date: "2025-04-02",
    readTime: "5 min read",
    category: "Corporate Security",
    coverImage: "/images/blogs/image_2.png",
    content: `
      <p>Corporate espionage costs Indian businesses billions of rupees every year. The most effective method of gathering competitive intelligence is also the most invisible: a small electronic listening device planted in a boardroom, conference room, or executive office. The following five signs are the most common indicators that surveillance may be active on your premises.</p>

      <h2>1. Competitors React to Information Only You Should Have</h2>
      <p>This is the clearest signal and the one most often dismissed as coincidence. If a rival company adjusts its pricing immediately after your internal pricing discussion, or counters a proposal with terms that mirror your internal negotiations, the explanation is rarely luck. Sensitive strategic discussions should be treated as compromised until a physical sweep proves otherwise.</p>

      <h2>2. Unusual Objects Have Appeared in the Room</h2>
      <p>Planted devices are typically concealed inside objects that belong in the environment. A new power strip you did not order. A replacement smoke detector installed by an unknown contractor. A gift left on a desk after a visitor meeting. Any object that arrived unexpectedly, especially if it is near a meeting table or executive desk, warrants physical inspection.</p>

      <h2>3. Your Phone or Video Conferencing Equipment Behaves Strangely</h2>
      <p>Clicks, static, or volume drops on phone calls are frequently cited as signs of a tap. Whilst modern digital taps produce none of these symptoms, older analogue taps on copper lines do. More relevant today: if your video conferencing system shows unexpected activity logs, unexplained active sessions, or firmware that has been modified, these are serious indicators of compromise.</p>

      <h2>4. Unusual Radio Frequency Activity</h2>
      <p>A spectrum analyser sweep will immediately reveal any active RF transmitter operating in your space. If you notice that a particular device (a smoke detector, a wall socket, a piece of furniture) causes interference on a nearby radio or wireless device, it may be transmitting. This is not something you can diagnose without professional equipment, but it is worth noting as a trigger for a sweep.</p>

      <h2>5. You Have Recently Hosted External Visitors in Your Boardroom</h2>
      <p>The most common vector for a planted device is physical access. A visitor who arrives early and is left alone in the meeting room, a maintenance contractor who works unsupervised, a delivered package that was opened inside the office: all of these represent planting opportunities. If any of these have occurred before a period of unusual information leakage, a sweep is warranted.</p>

      <h2>What to Do</h2>
      <p>Do not alert anyone inside the organisation until after a sweep has been completed. If a device is found, it provides forensic evidence. Removing it prematurely, or broadcasting that you suspect a bug, gives the opposing party time to cover their tracks. Contact our team for a confidential, same-day sweep. Our technicians arrive in unmarked vehicles and the engagement is covered by NDA from the first call.</p>
    `,
  },
  {
    slug: "corporate-espionage-india",
    title: "Corporate Espionage in India: How TSCM Protects Your Business Secrets",
    excerpt:
      "India's rapidly growing corporate sector has become an attractive target for industrial espionage. Understanding the threat and how TSCM countermeasures work is the first step to protecting what matters.",
    date: "2025-04-20",
    readTime: "7 min read",
    category: "Corporate Security",
    coverImage: "/images/blogs/image_3.png",
    content: `
      <p>India's economic growth has created a competitive environment where information is among the most valuable assets a company holds. Merger discussions, acquisition targets, product launch timelines, client lists, pricing models: this data can be worth crores in the wrong hands. Technical Surveillance Counter-Measures (TSCM) is the discipline that protects it.</p>

      <h2>The Threat Landscape in India</h2>
      <p>Corporate espionage in India takes several forms. The most prevalent:</p>
      <ul>
        <li><strong>Planted electronic devices</strong> in boardrooms, executive offices, and hotel meeting rooms used for sensitive negotiations.</li>
        <li><strong>GPS vehicle tracking</strong> used to map the movements of senior executives and identify undisclosed business visits.</li>
        <li><strong>Telephone and VoIP interception</strong>: particularly relevant for businesses that discuss strategy over unencrypted calls.</li>
        <li><strong>Insider threats</strong>: employees approached by competitors to install surveillance hardware, often in exchange for financial incentives.</li>
      </ul>

      <h2>High-Risk Sectors</h2>
      <p>Certain industries face disproportionate exposure to electronic surveillance threats in India:</p>
      <ul>
        <li><strong>Real estate and construction</strong>: land acquisition discussions and tender information are high-value targets.</li>
        <li><strong>Pharmaceutical and biotech</strong>: clinical trial data, regulatory submissions, and pricing strategy.</li>
        <li><strong>Financial services</strong>: deal flow, client relationships, and fund positioning.</li>
        <li><strong>Entertainment and media</strong>: content distribution rights, talent negotiations, and upcoming production details.</li>
        <li><strong>Legal and advisory</strong>: client matter discussions that, if intercepted, can destroy privileged relationships.</li>
      </ul>

      <h2>What a Professional TSCM Programme Looks Like</h2>
      <p>Effective protection is not a single sweep. It is an ongoing programme. Our recommended approach for corporate clients:</p>
      <ul>
        <li><strong>Pre-event sweeps</strong>: conducted before board meetings, investor presentations, and major negotiations. Typically 2–4 hours for a full floor sweep.</li>
        <li><strong>Quarterly baseline sweeps</strong>: establishes what is normal in your environment, making anomalies immediately apparent.</li>
        <li><strong>Vendor and visitor protocols</strong>: physical inspection of maintenance work and unattended visitor periods.</li>
        <li><strong>Vehicle sweeps</strong>: GPS device checks for executive vehicles before critical travel.</li>
      </ul>

      <h2>What TSCM Cannot Do</h2>
      <p>A physical sweep detects and neutralises electronic surveillance devices present at the time of the sweep. It does not protect against cyber intrusion, compromised telecommunications infrastructure, or human intelligence (insider threats). A comprehensive security programme addresses all three layers (physical, electronic, and human), but TSCM is the foundation, because without controlling the physical environment, all other security measures can be circumvented.</p>

      <p>Our corporate TSCM clients receive a detailed written report after every sweep, documenting the areas covered, equipment deployed, findings, and recommendations. This report can be shared with legal counsel and used as evidence if a device is discovered and prosecution is pursued.</p>
    `,
  },
  {
    slug: "vehicle-gps-tracking",
    title: "GPS Tracking Devices on Vehicles: Signs, Risks & How to Find Them",
    excerpt:
      "A GPS tracker smaller than a matchbox can be magnetically attached to your vehicle in under 30 seconds. Here's how to know if you're being tracked, and what a professional sweep actually involves.",
    date: "2025-05-05",
    readTime: "5 min read",
    category: "Vehicle Sweeps",
    coverImage: "/images/blogs/image_4.png",
    content: `
      <p>GPS tracking devices have become extraordinarily small, inexpensive, and long-lasting. The latest generation of covert trackers operate for 60–90 days on a single charge, transmit real-time location data over GSM networks, and cost less than ₹3,000. They can be attached to any metal surface on a vehicle in seconds, with no access to the interior required.</p>

      <h2>Who Plants Vehicle GPS Trackers?</h2>
      <p>The motivations are varied:</p>
      <ul>
        <li><strong>Business rivals</strong> tracking executive movements to identify undisclosed client visits, supplier meetings, or acquisition target locations.</li>
        <li><strong>Domestic and personal disputes</strong>: tracking a partner's or family member's movements without consent.</li>
        <li><strong>Stalking and harassment</strong>: the ease of GPS deployment has made vehicle tracking a common tool in stalking cases.</li>
        <li><strong>Pre-crime intelligence</strong>: criminal groups tracking high-value targets (cash movements, jewellery transport) before an assault.</li>
      </ul>

      <h2>Common Hiding Locations</h2>
      <p>Our vehicle sweep technicians find GPS trackers most frequently in these locations:</p>
      <ul>
        <li><strong>Under the chassis</strong>: the magnetic base grips any flat metal surface; the device is invisible from outside the vehicle.</li>
        <li><strong>Inside the wheel wells</strong>: protected from weather and hidden from view even during a casual under-vehicle inspection.</li>
        <li><strong>Behind the front and rear bumpers</strong>: particularly popular because GPS signals penetrate plastic.</li>
        <li><strong>Inside the OBD-II port</strong>: a self-powered tracker that draws power directly from the vehicle's diagnostic port, typically located below the dashboard.</li>
        <li><strong>Inside the boot/trunk</strong>: particularly in larger vehicles where access is easier during a valet or service visit.</li>
      </ul>

      <h2>Signs You May Have a Tracker</h2>
      <ul>
        <li>Someone who should not know your routine demonstrates awareness of your movements.</li>
        <li>Your vehicle was recently valet-parked, serviced, or left unattended in a public space for an extended period.</li>
        <li>You have recently ended a high-conflict relationship or business partnership.</li>
        <li>You carry or transport high-value assets on a regular schedule.</li>
      </ul>

      <h2>What a Professional Vehicle Sweep Involves</h2>
      <p>A professional vehicle GPS sweep uses the <strong>WolfHound Pro</strong> cellular detector to identify any active GSM transmissions originating from the vehicle, including passive trackers that ping their server periodically. A physical inspection with mirrors, torches, and a borescope camera covers the 40+ common hiding locations on a typical passenger vehicle. Our technicians also check the OBD-II port and inspect the engine bay and spare tyre cavity.</p>
      <p>The sweep typically takes 45–90 minutes. If a device is found, we document it photographically before removal, providing evidence for any legal or police action you may wish to take.</p>
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
          email: "bugsweepingtscm@gmail.com",
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
          email: "bugsweepingtscm@gmail.com",
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
          email: "bugsweepingtscm@gmail.com",
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
