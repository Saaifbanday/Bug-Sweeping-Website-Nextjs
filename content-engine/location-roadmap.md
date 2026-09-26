# Location page roadmap

Owner's goal (24 September 2026): cover India's cities, with every locality named somewhere, without thin pages.

The constraint that shapes this: Google's spam policy treats near-identical pages that differ only by place name as doorway pages. A page earns its place by carrying local facts that change what a reader does. Those facts exist for cities with their own police commissionerate, their own reporting rules or their own accommodation regulations. They do not exist for every town.

## Tier 1: full city pages

Each needs verified local facts (jurisdiction, what can and cannot be filed online, helpline scope, local rules) before it is written. Target 1,200 words or more, grouped area table, per-city FAQ, Service and Place schema.

Published (22): Mumbai, Delhi, Gurugram, Noida, Bengaluru, Pune, Hyderabad, Jaipur, Goa, Chandigarh, Kolkata, Chennai, Ahmedabad, Lucknow, Surat, Nagpur, Indore, Bhopal, Kanpur, Patna, Visakhapatnam, Coimbatore.

States with a city page as of 26 September 2026: Maharashtra (3), Uttar Pradesh (3), Gujarat (2), Tamil Nadu (2), Madhya Pradesh (2), Delhi, Haryana, Karnataka, Telangana, Rajasthan, Goa, West Bengal, Bihar, Andhra Pradesh, Chandigarh.

States with no coverage at all, and therefore the real gap: Kerala, Odisha, Punjab, Assam, Jharkhand, Chhattisgarh, Uttarakhand, Himachal Pradesh, Jammu and Kashmir, and the north east. Kochi, Bhubaneswar, Ludhiana, Guwahati, Ranchi, Raipur and Dehradun are the candidates there.

Remaining city queue where a page is still likely to earn its place: Bhubaneswar, Kochi, Ludhiana, Agra, Varanasi, Guwahati, Ranchi, Raipur.

Stop adding city pages when a city has no distinct, verifiable facts. Record the decision rather than publishing a thin page.

## Tier 2: state hub pages

One per major state, at `/locations/state/<slug>`. A separate path from the city pages because the flat namespace is already ambiguous: Goa is a state but has a city-style page, and Delhi and Chandigarh are union territories.

Each hub lists districts and major towns in a table, links down to the city pages, and carries the state-level material a single city page cannot: how policing is organised across the state, what the state portal accepts online, which helplines the state actually publishes, and any state rule on hotels, paying guest accommodation or hostels.

This is where the long tail of town names belongs. A state hub naming Nashik, Aurangabad, Solapur, Kolhapur and Satara covers those places without a thin page each.

Cannibalisation guard: the hub targets "bug sweeping in <state>" and owns the state layer. City detail stays on the city page and is linked, not repeated. Where a fact is genuinely state-level and already appears on a city page, the hub carries it in its own words and the city page keeps the local application.

Build order: states that already have city pages first, so the hub has something to link down to. Then states with no coverage at all, where the hub doubles as the first entry point.

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
