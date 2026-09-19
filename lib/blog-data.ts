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
      <p>If you are comparing providers in a particular city, BugSweepingTSCM has location pages for <a href="/locations/mumbai">Mumbai</a>, <a href="/locations/delhi">Delhi NCR</a>, <a href="/locations/bengaluru">Bengaluru</a> and <a href="/locations/chandigarh">Chandigarh</a>. For businesses, our guide to the <a href="/blog/signs-your-office-is-bugged">signs that an office or boardroom may be bugged</a> covers the warning signs that usually prompt a corporate sweep.</p>

      <h2>Frequently asked questions</h2>
      <div class="faq">
${faqHtml(bugSweepingIndiaFaqs)}
      </div>

      <div class="note">
        <p><strong>About this guide.</strong> Published by BugSweepingTSCM. The site's founder is <a href="/meet-the-founder">Hardesh Bhardwaj</a>, founder of ADA Advance Detective Agency Pvt. Ltd. (CIN U74999DL2021PTC390132) and in practice since 2013. Legal points were checked against official texts on 19 September 2026 and are general information, not legal advice. Laws, helplines and platform features change; confirm current details with the linked official sources and consult a lawyer about your own situation.</p>
      </div>
    `,
  },
];
