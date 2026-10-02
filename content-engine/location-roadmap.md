# Location page roadmap

Owner's goal (24 September 2026): cover India's cities, with every locality named somewhere, without thin pages.

The constraint that shapes this: Google's spam policy treats near-identical pages that differ only by place name as doorway pages. A page earns its place by carrying local facts that change what a reader does. Those facts exist for cities with their own police commissionerate, their own reporting rules or their own accommodation regulations. They do not exist for every town.

## Tier 1: full city pages

Each needs verified local facts (jurisdiction, what can and cannot be filed online, helpline scope, local rules) before it is written. Target 1,200 words or more, grouped area table, per-city FAQ, Service and Place schema.

Published (36), as at 2 October 2026: Mumbai, Delhi, Gurugram, Noida, Bengaluru, Pune, Hyderabad, Jaipur, Goa, Chandigarh, Kolkata, Chennai, Ahmedabad, Lucknow, Surat, Nagpur, Indore, Bhopal, Kanpur, Patna, Visakhapatnam, Coimbatore, Bhubaneswar, Kochi, Ludhiana, Guwahati, Ranchi, Raipur, Dehradun, Srinagar, Jammu, Shimla, Jamshedpur, Agra, Varanasi, Vadodara.

States with more than one city page: Uttar Pradesh (4), Gujarat (3), Maharashtra (3), Tamil Nadu (2), Madhya Pradesh (2), Jammu and Kashmir (2).

States with no coverage at all, as at 2 October 2026: only the north east beyond Assam. Shillong, Agartala, Imphal, Aizawl, Kohima, Itanagar and Gangtok are the remaining candidates, all small markets. Every other state and union territory now has at least a hub.

Remaining city queue where a page is still likely to earn its place: Rajkot, Mysuru, Bhilai or Durg, Nashik, Thiruvananthapuram. Each still needs the jurisdiction question answered before it is written, not after.

Stop adding city pages when a city has no distinct, verifiable facts. Record the decision rather than publishing a thin page.

## Tier 2: state hub pages

One per major state, at `/locations/state/<slug>`. A separate path from the city pages because the flat namespace is already ambiguous: Goa is a state but has a city-style page, and Delhi and Chandigarh are union territories.

Each hub lists districts and major towns in a table, links down to the city pages, and carries the state-level material a single city page cannot: how policing is organised across the state, what the state portal accepts online, which helplines the state actually publishes, and any state rule on hotels, paying guest accommodation or hostels.

This is where the long tail of town names belongs. A state hub naming Nashik, Chhatrapati Sambhajinagar, Solapur, Kolhapur and Satara covers those places without a thin page each.

Watch the Maharashtra renamings: Aurangabad became Chhatrapati Sambhajinagar and Osmanabad became Dharashiv in September 2023, and Ahmednagar became Ahilyanagar in October 2024. Any inherited list using the old names is stale. Uttar Pradesh has 75 districts, not the 76 that 2025-dated sources report: the Maha Kumbh area of Prayagraj was a temporary district under a District Magistrate's notification that lapsed on 31 March 2025.

Cannibalisation guard: the hub targets "bug sweeping in <state>" and owns the state layer. City detail stays on the city page and is linked, not repeated. Where a fact is genuinely state-level and already appears on a city page, the hub carries it in its own words and the city page keeps the local application.

Build order: states that already have city pages first, so the hub has something to link down to. Then states with no coverage at all, where the hub doubles as the first entry point.

Published (15), as at 2 October 2026: Tamil Nadu, Gujarat, Bihar, Maharashtra, Uttar Pradesh, Madhya Pradesh, Kerala, Odisha, Punjab, Assam, Jharkhand, Chhattisgarh, Uttarakhand, Himachal Pradesh, Jammu and Kashmir. Measured 15 to 21 per cent shingle overlap against their own city pages, so the hubs are not competing with the cities they link to.

What the hubs and the city pages under them have taught, and what to carry into the rest:

- In a commissionerate city, look for the Commissioner's own standing orders before anything else. Vadodara publishes its section 163 BNSS orders as scanned notices, and the camera order reaches hotels, guest houses, societies and private companies generally with a thirty day retention duty, which is precisely the gap the state public safety camera law leaves open because that law only bites on premises notified by footfall. A page that checks only state statute will report that a hotel has no camera obligation and be wrong. These orders run about two months and are renewed, so date them and tell the reader to check the current one. The companion orders on contract labour, security guards and domestic staff carry recitals naming the documented local threat, which is better evidence than any crime statistic.
- Prefer the force's own records to anything a search engine surfaces for an institutional date. Vadodara's commissionerate dates to October 1981 on its own incumbency chart; the 1971 and 1992 dates that rank well belong to a central excise commissionerate of the same name.

- The city-versus-rural answer does not transfer between states and is usually the most useful line on the page. Seven of Maharashtra's eleven commissionerate cities keep a separate rural superintendent; none of Uttar Pradesh's seven do, because the 2022 mergers took in the whole district; both of Madhya Pradesh's cover their districts including the villages; eight of Tamil Nadu's nine are split. Establish it per state, never by analogy.
- Look for two kinds of accommodation instrument, not one. Tamil Nadu's hostel rules treat cameras as a disclosure item on a form while a separate 2025 amendment created a real statutory duty. Checking only the accommodation rules produced a confidently wrong page.
- Official sites understate their own structure. Uttar Pradesh Police's homepage navigation lists four commissionerates against seven in its own unit list, and Maharashtra's about page says ten against eleven. Settle counts from a list or an order, never from navigation.
- Where two sources disagree on a count, publish none. That applied to cyber police stations in Maharashtra, Madhya Pradesh and Gujarat, and to police station totals in Bihar.

## Tier 0: the locations index

`/locations` is the parent of both tiers. Added 26 September 2026; before that the city pages had no hub. Groups cities by region, explains what actually differs between them, carries ItemList and FAQPage schema, and is linked from the header on every page.

## Tier 3: no page

Small towns are named inside their parent city page's area table or the state hub. They do not get their own URL.

## Source note

The owner supplied a MapmyIndia "City List" PDF. Use it to check spellings and to catch towns worth naming in area tables and state hubs. Do not reproduce their compilation wholesale; it is their dataset.

## Standing QA for every location page

- Word count above 1,200, prose carrying the weight rather than lists
- Body overlap with other city pages measured against a moving baseline, not a fixed number. Shared chrome rises as cities are added, because the header lists every city: Delhi against Mumbai measured 28.4 per cent at 14 cities and 38.6 per cent at 22, with no content change at all. Measure two established pages first to get the floor, then require new pages to sit within a couple of points of it. Indore against Bhopal came in at 45.6 per cent on first build, which was real duplication in shared Madhya Pradesh wording, and reworded to the floor.
- No claim that site-facts.md does not support
- Every FAQ answer matched by the FAQPage schema
- Local facts sourced, and gaps stated plainly rather than implied
