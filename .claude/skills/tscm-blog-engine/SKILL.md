---
name: tscm-blog-engine
description: Research-first blog content engine for bugsweepingtscm.com (Next.js). Produces publish-ready, deeply researched articles optimised for SEO, AEO, GEO, LLMO and E-E-A-T, built to be cited in Google AI Overviews, ChatGPT, Perplexity and Gemini. Use this skill whenever the user supplies a primary keyword, a city, a district, a state, or a TSCM concept for bugsweepingtscm.com, or mentions bug sweeping, TSCM, hidden camera detection, GPS tracker detection, audio bug detection, counter-surveillance, debugging services, city-wise or district-wise blogs, or asks to write, refresh, plan, research or audit blog content for this site, even if the skill is not named.
---

# BugSweepingTSCM Blog Engine (v1.1, RANK-FIRST, CITATION-FIRST, EVIDENCE-GATED)

This file is the complete operating manual for blog content on bugsweepingtscm.com. Read it fully
before every task. v1.1 incorporates an external audit (19 September 2026): honest review
attribution, evidence-controlled founder claims, the owner's city-first publishing order, local
gates based on distinct usefulness rather than word percentages, safety-first device-discovery
guidance, corrected helpline scoping, current FAQ rich-result policy, schema graph accuracy,
JSON-LD injection safety, and honest QA states.

Two risks dominate this niche and every rule below is shaped by them:

1. **Doorway and scaled-content abuse.** Google's spam policy names "pages targeted at specific
   regions or cities that funnel users to one page" as a doorway example. The offence is
   near-identical low-value pages, not page count or location targeting itself. Section 5 is the
   defence: every location page must give a local reader a distinctly useful answer.
2. **Trust in a security niche.** Readers are often frightened (a suspected camera, a suspected
   tracker). Overclaiming, invented credentials, fear statistics and "guaranteed" language destroy
   both conversions and E-E-A-T. Sections 1, 7, 8 and 10 are the defence.

---

## 0. TRIGGERS, COMMANDS AND REQUEST MODES

| Command | Mode | Output |
|---|---|---|
| `Primary keyword: <kw>` | WRITE | Full package (Section 17 order). Page type detected from the keyword. |
| `City: <city>` | WRITE | City article; engine selects the strongest primary keyword for that city. |
| `District: <district>, <state>` | WRITE | District article only if the Section 5C gate passes; otherwise a stated merge or hold decision. |
| `State hub: <state>` | WRITE | State hub linking down to its city and district articles. |
| `Concept: <topic>` | WRITE | Concept article (no location). |
| `Refresh <slug>` | WRITE | Rebuild an existing post on the same slug after the Section 3 intent review. |
| `Give me 3 keyword ideas for <city/topic>` | PLAN | 3 candidates with intent read, secondary cluster, qualitative difficulty read, cannibalisation check. No files written. |
| `Next cities` | PLAN | Next 5 cities ranked by recorded evidence (Section 4C log) and gate readiness, checked against the ledger. No files written. |
| `Only SEO block for <kw>` | PLAN | Section 15 block only. No files written. |
| `Audit <slug or topic>` | AUDIT | Findings only. No files written. |
| `First-run setup` | SETUP | Section 2 only. |

**Mode rule.** Classify every request before acting. Only WRITE and SETUP modes create or modify
repository files. PLAN, AUDIT and general research questions never write files, and a passing
mention of TSCM topics is not authorisation to write. When a request is ambiguous, ask one
clarifying question rather than assuming WRITE.

**Continuation protocol.** If a limit is hit mid-delivery: stop at a clean section break, never
restart, never repeat finished work, write `Continue from here: [exact next section name]`, and
list the file paths already completed so continuation resumes without regenerating them. On
"continue" or "try again", resume from that section only.

**Never deliver a plan, outline or partial draft as the final answer to a WRITE request.**
Research, then write, then build, then QA, in the same run.

---

## 1. LOCKED FACTS

- **Site:** https://www.bugsweepingtscm.com (canonical host includes `www`). Next.js site. Blog
  lives at `/blog/<slug>`. There is also a "Locations" menu. Always read the current repository
  and ledger for the live inventory of posts and location pages; never rely on a remembered count.
- **Contact data (context only, never stuffed into articles):** +91 888 273 2221,
  bugsweepingtscm@gmail.com, WhatsApp CTA `https://wa.me/918882732221`.
- **Sister site:** https://advancedetectiveagency.com (ADA Advance Detective Agency). Same founder.
  General detective agency with a bug-sweeping service page and many "Best Detective Agency in
  <city>" pages. **Topic ownership:** bugsweepingtscm.com owns TSCM, bug sweeping, hidden camera,
  tracker and counter-surveillance topics. ADA owns investigation topics (matrimonial, background
  verification, corporate investigation). Do not write detective topics here; do not recommend
  publishing TSCM city content on ADA.
- **Language:** English only (Indian English spelling: organisation, analyse, metre).
- **Audience:** Indian individuals and organisations who suspect surveillance or want proactive
  assurance: business owners, executives, legal and HR teams, HNI households, women worried about
  hidden cameras in rentals, PGs, hotels and changing areas, and vehicle owners worried about
  trackers. Convert via one calm consultation CTA, never via fear.

### 1A. Author and E-E-A-T identity: evidence-controlled claims

Claims about the founder, the firm and the team are governed by an evidence record in
`content-engine/site-facts.md`. For every claim, record: the exact claim, the entity it concerns,
the source (URL or document), the evidence status, the date checked, and the permitted wording.

**Evidence statuses:**
- `independently verified`: confirmed by a source independent of the firm.
- `first-party documentary`: the firm's own page or documents show the claim with supporting
  artefacts (certificates, incorporation papers, photographs). This proves the firm makes the
  claim and holds documents for it, not independent confirmation.
- `self-reported`: stated by the firm without supporting artefacts.
- `unresolved`: not yet evidenced.
- `contradicted`: conflicts with a checked source.

**Publication rule:** `independently verified` and `first-party documentary` claims may be
published, worded within their evidence (a documentary award claim is stated plainly; if later
independently confirmed, nothing changes; if ever contradicted, it is removed site-wide).
`self-reported` operational facts (service coverage, pricing, methodology) may be published only
when the owner confirms them, attributed as the firm's own account where a reader would expect
independence. `self-reported` credentials, awards and statistics, and everything `unresolved`,
stay out of prose and schema. Conference attendance or association membership must never be
presented as a TSCM certification.

**Seed claims (statuses as checked 19 September 2026; re-verify on first-run setup):**

- Name Hardesh Bhardwaj; role Founder and Lead TSCM Specialist, ADA Advance Detective Agency
  Pvt. Ltd.: first-party documentary (founder page).
- ADA Advance Detective Agency Private Limited, incorporated 18 November 2021,
  CIN U74999DL2021PTC390132: first-party documentary (incorporation certificate PDF on the
  founder page). CINs are checkable on the MCA portal; upgrade to independently verified when
  checked there.
- In practice since 2013: first-party documentary (founder page; consistent with ADA's
  "since 2013").
- Investigator of the Year 2026, World Association of Detectives, presented 5 September 2026 at
  the 101st Annual Conference, Cannes: first-party documentary (founder page shows ceremony
  photographs and a certificate). Independent confirmation pending: W.A.D.'s own listings did
  not yet show the 2026 recipient when checked two weeks after the ceremony, which is
  unremarkable but means the status is documentary, not independently verified. The owner should
  keep the certificate on file.
- W.A.D. conference attendance, 101st (Cannes, 2 to 6 September 2026) and 99th (Kuala Lumpur,
  24 to 29 September 2024): first-party documentary (certificate PDFs).
- "3,000+ cases handled" and "500+ TSCM sweeps completed": self-reported firm figures. Usable
  only in the author box, attributed as the firm's reported figures with their date, never in
  body copy.
- Profile URL: `https://www.bugsweepingtscm.com/meet-the-founder`.

**Blocked until evidenced and recorded:** "20+ years experience" as a personal claim (see
Section 20 item 1 on scope), "Former Intelligence Officers", "internationally trained and
certified", "military-grade", "India's premier / most trusted / leading", "100%", "guaranteed",
"satisfaction guaranteed", client names or titles from the homepage testimonials, any named
certification body, any equipment ownership claim not confirmed by the owner.

**Equipment rule.** Articles may explain what instrument classes do (spectrum analysers, NLJDs,
thermal cameras, lens detectors), sourced from manufacturer documentation. Stating that the firm
uses a specific model, or uses it in a specific city, requires a site-facts.md entry.

During setup, seed claims are copied into site-facts.md **with these statuses**, never as
"verified". This evidence rule overrides any looser wording elsewhere in this file.

### 1B. Attribution and review credit (honest authorship)

Default attribution, directly below the article title:

`Published by BugSweepingTSCM · Published: <actual publication date>`

Use "Written by the BugSweepingTSCM Editorial Team" only if the owner confirms that named people
function as an editorial team; do not imply human authorship or an editorial process that did not
occur.

Add `Technical review: Hardesh Bhardwaj` only after he has reviewed and approved the exact
article version. Record reviewer, approval date and approved version hash in the ledger
(Section 16). A delivered-but-unticked reviewer checklist is not a completed review. Until
approval is recorded: no review credit in the byline, author box, metadata or schema, and the
delivery is described as "complete, awaiting technical review".

Show an updated date only for a substantive content change, never because the engine reran.
These conditions govern Sections 11, 17 and 19.

---

## 2. FIRST-RUN SETUP AND EXECUTION CONTRACT

Run setup once, then only when the repository changes.

1. **Install location.** This skill lives at `.claude/skills/tscm-blog-engine/SKILL.md` in the
   website repository (or the user-level skills directory). All `content-engine/` paths resolve
   from the repository root, not from the skill directory.
2. **Read the repository's own instructions first:** CLAUDE.md and any contributing or content
   guidelines. They take precedence on tooling conventions.
3. **Inspect the stack and record it** in `content-engine/stack-adapter.md`: Next.js version and
   router (App or Pages), package manager and lockfile, how existing posts are stored and rendered
   (MDX, Markdown, data array, CMS), required frontmatter or object fields, where the H1 comes
   from, how metadata and JSON-LD are injected, how the sitemap and blog index are generated,
   where images live, how Locations pages are built and which exist, and the exact dev and build
   commands. Record which tools are actually available in this environment (web research, image
   rendering, Playwright or another headless browser); Section 18 depends on this.
4. **Create the engine folder** if missing:
   - `content-engine/site-facts.md`: the Section 1A evidence records plus owner-confirmed facts.
   - `content-engine/content-ledger.json`: initialised from the **existing** posts and location
     pages, one record each (Section 16), before any new article is written.
   - `content-engine/field-notes.md`: anonymised, consented case notes supplied by the founder,
     tagged by city and device type. Empty is acceptable; invention is not.
   - `content-engine/city-dossiers/<city>.md`: verified local research with the Section 4C
     evidence log, reused and extended per article.
5. **Match the house format exactly.** New posts must render through the same components and
   layout as existing posts. Do not introduce a new styling system.
6. **Preserve unrelated changes.** Inspect the working tree before editing; never overwrite or
   revert user changes outside this task's files.
7. **Never commit, push or deploy** without explicit approval in that session. Write files,
   build, QA, then ask.

---

## 3. RULE 0: CANNIBALISATION AND EXISTING-PAGE REVIEW (mandatory, before research)

Run all four checks and state the evidence in the delivery.

1. **Ledger:** search `content-ledger.json` for the primary keyword, close variants and the
   location.
2. **Repository:** grep blog content, routes, the sitemap and Locations pages for the keyword and
   the location. The repository, not a search operator, is the authoritative inventory.
3. **Live index:** `site:bugsweepingtscm.com <keyword>` and `site:bugsweepingtscm.com <city>`.
   Treat `site:` results as a discovery aid, not a complete inventory.
4. **Sister site:** `site:advancedetectiveagency.com bug sweeping <city>` and
   `site:advancedetectiveagency.com <keyword>`.

The table below gives the starting frame. **Every decision on an existing page requires an intent
and content review first:** open the page, identify its purpose, its useful content, its internal
links and any available Search Console data, then decide. Keyword overlap alone never authorises
replacement.

| Situation | Starting frame |
|---|---|
| Nothing on this site targets the keyword | **NEW POST.** Propose a slug. |
| A blog post already targets this exact keyword and intent | **REPLACE** on the existing slug, after the intent review confirms the old page is genuinely superseded and nothing worth keeping is lost. |
| A Locations page targets the commercial city query | The blog post takes a distinct **informational** city intent and links to the Locations page as the commercial hub. Never publish a second commercial page for the same city. |
| No Locations page exists for the city | The blog post may serve the commercial city intent. If a Locations page is created later, propose a migration plan for which URL serves which intent; never silently repurpose the blog post. |
| A nearby but different intent exists | **NEW POST + INTERLINK**, state hub and spoke. |
| ADA ranks for the same query | Review ADA's page first. Publish here only if this site can serve the TSCM intent distinctly better or differently; topic ownership alone does not justify another similar page. Never mirror ADA's structure or wording. Recommend (Section 20) that ADA's bug-sweeping page link here. |

---

## 4. SEARCH ECOSYSTEM DISCOVERY (mandatory, before research)

The supplied keyword is the entry point, not the scope. Run real searches and collect the language
people actually type.

### 4A. Discovery lanes (work through every lane; use or consciously set aside)

- Exact-match and close variants; autocomplete completions for the keyword and for the location.
- People Also Ask questions: what is, how to, how much, can I, is it legal, where, which, when,
  do I need, how long.
- Related searches and refinements.
- **Service vocabulary variants Indians use:** bug sweeping, debugging service, bug detection,
  anti-bugging, TSCM, counter-surveillance, spy camera detection, hidden camera detector service,
  bug finder, sweep.
- **Device lanes:** hidden camera (pinhole, Wi-Fi IP, charger cam, smoke detector cam, clock cam),
  audio bug (GSM/SIM bug, voice-activated recorder, RF transmitter), GPS tracker (vehicle,
  magnetic, OBD), phone spyware and stalkerware, Bluetooth trackers (AirTag and similar), smart
  home and IoT devices.
- **Setting lanes:** home, office, boardroom, hotel room, Airbnb or homestay, PG and hostel,
  rented flat, changing room and trial room, car, factory, courtroom or legal office, election or
  political office, wedding venue.
- **Location lanes (city and district articles):** "<service> in <city>", "near me" phrasing,
  locality and business-district names, the city's common misspellings or older names (Gurgaon and
  Gurugram, Bangalore and Bengaluru, Bombay and Mumbai), nearby cities people also search.
- **Cost lanes:** bug sweep cost in India, per room, per sq ft, per vehicle, what affects price.
- **DIY versus professional lanes:** phone camera flashlight method, apps, cheap detectors, what
  they miss, when to call a professional.
- **Legal lanes:** is it illegal to install a hidden camera, what to do if you find one, can I
  record my employee, is a jammer legal, is using a detector legal, police complaint process.
- **Pain-point lanes:** "found a camera in my room", "someone knows my conversations",
  "car being tracked", "phone hacked signs", "ex tracking me", "landlord camera".
- **Comparison lanes:** TSCM versus private detective, RF detector versus NLJD, app versus
  professional sweep, one-time versus scheduled sweeps.
- **Commercial versus informational:** separate them. Informational queries drive the body;
  commercial queries justify at most one calm CTA.
- **"Best" queries** where the SERP shows real intent, answered with selection criteria, never
  with a claim that this firm is the best.

### 4B. Coverage rule

A keyword is covered when the article answers that query once, well, in the reader's own language,
in a place where a reader would look for it. It is not covered by repeating the phrase.

- Every secondary keyword needs a **home**: an H2, H3, table row, step, checklist item or FAQ.
- Keywords with the same meaning share one home; the heading carries the more-searched wording.
- A query that cannot be answered from a reliable source is omitted or answered with explicit
  hedging. Never invent an answer to cover a keyword.
- If a phrase cannot be placed naturally, drop it.

### 4C. Output: keyword map with evidence log

Deliver a keyword map table: `PRIMARY` / `SECONDARY`, search intent, and the exact home in the
article. **Working targets: about 17 rows for city and concept articles, about 12 for district
articles.** These are planning guides, not quotas: a narrow topic with fewer genuine queries
records the deviation and the reason instead of padding the map.

**Evidence log (required):** for each discovered query, record where it was observed (PAA,
autocomplete, related searches, SERP, forum), the seed query, locale and date. Distinguish
observed queries from editorial hypotheses, and label them. Search volume or difficulty values
appear only when a named tool supplied them; otherwise the read is labelled qualitative. If a
discovery surface cannot be accessed in this environment, record that limitation; never fabricate
its results. Competitor-gap claims are bounded to the named pages actually inspected.

---

## 5. PAGE TYPES, PUBLISHING ORDER AND LOCAL GATES

### 5A. Page types and order

| Type | Purpose | Working length |
|---|---|---|
| City article | The reader's problem in that specific city, with information that changes the answer locally. | 1,400 to 2,200 words |
| District article | Only where the district has distinct material of its own. | 900 to 1,400 words |
| State hub | Legal and practical context for one state, linking down to its city and district articles. | 1,500 to 2,200 words |
| Concept (pillar) | Deep technical or decision topic, no location. | 2,000 to 3,000 words |
| Concept (spoke) | One narrow question answered completely. | 900 to 1,400 words |

Lengths are working ranges; a justified deviation is recorded, never padded.

**Publishing order: the owner's sequence governs. The stated plan is city articles first, then
qualifying district articles, then concept articles.** Every article must satisfy its reader's
main task at publication on its own: link to relevant **published** pages (Locations pages, other
articles), never to planned URLs, and never create empty placeholders. The Section 9 pillar-link
rule applies only once suitable published destinations exist; until then, a city article carries
the short national explanations it needs inline.

Standing recommendation, stated once here and not repeated per article: interleaving a few
concept pillars early (detection methods, cost drivers, the legal position, DIY versus
professional) strengthens city articles, which can then summarise and link instead of
re-explaining. The engine may recommend this with reasons in a delivery, but must not silently
reorder the owner's plan. No publishing sequence, pillar count or volume threshold establishes
Google policy compliance or guarantees rankings; only distinct usefulness per page does.

### 5B. City gate (must pass before writing)

A city article exists to answer a local reader's task in a way an existing page cannot. Before
writing, document the editorial decision: the local reader's task, the verified local information
that **changes the answer** for that reader, and why no existing page serves it adequately.

**Floor: at least 5 verified local facts from at least 3 independent sources, each of which
changes what the local reader should know or do.** Local names, generic business profiles and
nationally common situations are decoration, not qualifying facts. Qualifying examples: a
reported hidden-camera or tracker incident in that city (reputable outlet, date; syndicated
copies of one report count once); the police commissionerate or district structure and its cyber
cell; business districts or industrial clusters that shape corporate risk there; documented
hotel, homestay, PG or hostel density; state or city police advisories; state-specific helplines
verified current. Do not infer surveillance prevalence from isolated incidents or from the mere
presence of hotels, offices or PGs.

The local situation also drives the **structure**: the H2 plan follows what matters in that city
(Goa leads with homestays and rentals, Gurugram with corporate offices, Kota with student PGs),
never a generic city template. Shared national content is summarised in a few lines, with the
explanation the reader needs to act safely kept inline, and linked to a published concept article
when one exists.

**Swap test (replaces any word-percentage target):** compare the draft against the closest
relevant published pages, not only recent ledger entries. If removing the place names leaves
substantially the same useful answer as another page, merge or rethink; do not publish. Record
the comparison in the delivery.

If the gate fails, do not write a thin page. State the decision: fold the city into the state hub
as a section, or hold until field notes or local data exist.

### 5C. District gate (stricter)

There is no district quota and no target of covering districts. A district article is written
only if it has at least 4 verified, answer-changing local facts **different from its parent city
or state article**, and a reader task that a separate page serves better than a section would.
Otherwise, add the district as a named section inside the state hub or nearest city article.
Near-identical pages generated across many districts is precisely the doorway and scaled-content
pattern to avoid; the page count itself is not the offence, the sameness is. Use current official
administrative names. Record every district decision (written, merged or held) in the ledger.

### 5D. Location claims (hard rule)

Never state or imply a physical office, same-day arrival, response time or local team in a city
unless site-facts.md confirms it. Never invent an address. "Covers <city>" is allowed only if the
site's confirmed service area includes it. No LocalBusiness schema for cities without a real
address.

---

## 6. RESEARCH PROTOCOL (source-first)

**Source ladder, highest first:**

1. **Primary law and government:** indiacode.nic.in (bare acts and amendments), dot.gov.in,
   meity.gov.in, cert-in.org.in, cybercrime.gov.in, state and city police websites, official
   gazette notifications, NCRB publications.
2. **Standards and manufacturers:** instrument manufacturers' technical documentation for how a
   device class works.
3. **Reputable news** for local incidents: named outlet, date, city, told in fresh words.
   Syndicated reports of one incident are one source, not several.
4. **Academic or professional bodies** for methodology.
5. Competitor TSCM pages: read for SERP gaps only, never as a source of facts or wording.

**Legal verification rule.** Verify every legal proposition, including the seed facts below,
against the applicable official text as of the article's research date: the provision itself, its
definitions, exceptions, amendments, commencement notifications and relevant rules. Enactment
does not establish that every provision is in force. Record the source and date checked in the
research notes. Distinguish statutory wording from interpretation and from practical advice, and
never present a narrow offence as a general ban on all recording or surveillance. **If a
proposition cannot be verified, omit it**; flag the unresolved question in the internal review
notes instead. Removing the section number does not make an unsupported legal claim acceptable.
Where applying the law to a reader's situation requires interpretation, say so and point to
qualified legal advice.

**Legal seed facts (verified when this engine was written; re-verify at source before each use):**

- Voyeurism: Section 77 of the Bharatiya Nyaya Sanhita, 2023 (successor to IPC Section 354C)
  covers watching, capturing or disseminating images of a woman engaged in a private act where
  she expects privacy. First conviction: 1 to 3 years plus fine; subsequent conviction: 3 to 7
  years plus fine.
- Section 66E, Information Technology Act, 2000: intentionally or knowingly capturing, publishing
  or transmitting the image of a private area of any person without consent, under circumstances
  violating privacy; up to 3 years, or fine up to Rs 2 lakh, or both.
- Jammers: the DoT advisory of 1 July 2022 (PIB announcement 4 July 2022) states that using
  cellular jammers, GPS blockers or other signal jamming devices is generally illegal unless
  specifically permitted by the Government of India, that private organisations and individuals
  cannot procure or use them, and that advertising, selling or distributing them is unlawful.
  **Never recommend a jammer, GPS blocker or signal booster as a countermeasure.**

**Legal scope notes (keep these distinctions in every article that touches them):**
- BNS Section 77 concerns the specified private acts involving a woman, and covers dissemination
  without consent even where the capture itself was consented to. Do not generalise it to every
  recording in a private room, and keep the two penalty ranges distinct.
- IT Act Section 66E requires intent or knowledge, absence of consent and circumstances violating
  privacy, and "private area" refers to defined body areas, not private premises. It is not a
  general offence covering every secret recording.
- Jammer restrictions carry government-permission exceptions (specified agencies, prescribed
  procurement). A DGFT import licence is not general permission for a private person to procure
  or use a jammer.

**Reporting routes (use these scopes everywhere, including FAQs):**
- Emergency or immediate danger: 112.
- Suspected offences (hidden camera, stalking, tracking): local police.
- Cybercrime complaints, including publication of private images: cybercrime.gov.in. Do not
  promise that a portal complaint automatically becomes an FIR.
- 1930: the national helpline for urgent financial cyber fraud reporting. Present it in that
  context, not as a general hidden-camera or stalking emergency number.

**Verification rules:**
- Never invent a number: prices, detection ranges, frequencies, incident counts, percentages,
  statistics about how common bugs are.
- Prices: only what site-facts.md confirms, or explain cost drivers without numbers.
- **Inspection limits, stated openly:** a sweep reports findings within the areas accessed, the
  methods used, the operating conditions and the time examined. Finding no device does not prove
  that none exists, and no sweep promises complete detection or future protection. Never describe
  tests the firm did not document performing.
- Where sources disagree (consumer "flashlight test" advice versus professional practice), say
  both and explain which holds and why.
- Cite material legal, technical and local claims near the relevant passage. Section 9's external
  link range is a guide, not a ceiling; source support wins.
- Every article names **one concrete detail competitor pages omit** in the research notes,
  bounded to the pages actually inspected.

---

## 7. SAFETY AND CONTENT BOUNDARIES (hard rules)

This is a defensive-security site. Content helps people **find and respond to** surveillance.

- Never explain how to plant, conceal, install or place a bug, camera, tracker or spyware on
  someone else's property, person, vehicle or phone, or how to evade a sweep.
- Never explain how to intercept calls, obtain call records, read someone's messages or access
  someone's device.
- Never recommend jammers, GPS blockers or signal boosters.
- Never frame covert monitoring of a spouse, partner, employee or teenager as acceptable.
- **When a reader suspects or finds a device, safety comes first.** Never require the reader to
  stay nearby, confront anyone or collect evidence before seeking help; for immediate danger,
  point to 112. If it is safe to do so: note the location, photograph the device without handling
  or dismantling it, and do not destroy evidence. Then the Section 6 reporting routes, framed as
  general information with a pointer to legal advice for their situation.
- **Stalkerware and partner-surveillance topics:** advise seeking help through a device or
  account the reader believes is safe. Never give blanket instructions to remove software, reset
  a device or confront the suspected person, since doing so can alert an abuser or destroy
  evidence. Verify any specialist safety resource (helpline, organisation) as current before
  naming it. Calm and practical, never dramatic.
- No fear-selling. No invented statistics about how many hotels or offices are bugged.

---

## 8. CONTENT ARCHITECTURE (AEO, GEO, LLMO)

**Required on every article (this is the citation architecture, the reason the engine exists):**

1. **Direct answer, roughly 40 to 60 words,** opening the article, primary keyword inside it,
   complete on its own.
2. **One self-contained citable block** (about 130 to 160 words) early in the article, "X is /
   X refers to" pattern, entities named in full ("technical surveillance countermeasures (TSCM)",
   "non-linear junction detector (NLJD)", the city and state).
3. **Passage-level citation pattern (Section 8A)** applied to the highest-value queries.
4. **FAQ** answering real queries from the keyword map, including informal spellings and name
   variants once, with matching FAQPage JSON-LD (Section 11 governs the markup policy). Working
   range 4 to 8 questions; only questions the map actually surfaced.
5. **Limitations and verification note:** what a sweep can and cannot establish (Section 6
   wording), and where to confirm legal points.
6. **One calm CTA** (consultation), placed after value has been delivered, never in the first
   screen.

**Topic-driven components (use what the topic earns, skip what it does not):** a quick-facts or
decision table where facts are genuinely tabular; question-form H2s where they mirror real
queries; numbered steps and checklists for sequential content; one inline SVG diagram only where
a process or decision genuinely needs one (Section 12 governs accessibility); a mistakes or
myths section where real misconceptions exist (in this niche the flashlight-test myth usually
qualifies, but it is not mandatory furniture).

Word ranges, character lengths, keyword-repetition counts and passage counts throughout this file
are working targets: hold them by default, record a justified deviation rather than padding or
stuffing to hit a number. Accuracy, reader-task completion, source support, honest attribution
and meaningful differentiation are the non-negotiables; no formatting formula guarantees AI
citations.

### 8A. Passage-level citation pattern

AI systems cite passages. For the 3 to 6 highest-value queries per article (fewer on a narrow
spoke), write the passage as:

**Question (heading) > Immediate answer (first sentence) > Explanation (2 to 4 sentences) >
Source context (which law, agency or document) > Practical meaning (what the reader should do).**

A citation-ready passage answers one question, names entities in full without leaning on earlier
paragraphs, carries at least one verified fact, states its limitation inside the passage, uses
the page's consistent terminology, contains no promotion, and reads correctly when lifted out
alone. Do not turn every section into a snippet; explanatory sections should breathe.

### 8B. Anti-template rule

Two articles must never read as one article with "Delhi" swapped for "Mumbai", or "hidden camera"
swapped for "GPS tracker". If they do, the work has failed.

Vary, driven by the topic and the SERP: the opening approach, the number and sequence of H2s,
whether H3s are used, which topic-driven components appear at all, the main explanatory device,
the FAQ set, the information-gain section, the depth allocation and the CTA framing.

**Explanatory device palette** (choose what the topic earns): decision tree, room-by-room
checklist, device-by-device table, sweep timeline, cost-driver breakdown, myth versus fact table,
"found a device" response procedure, setting-specific walkthrough (hotel, PG, car, boardroom),
comparison matrix, legal quick reference, locality risk discussion in prose.

**Comparison test before writing:** read the closest published pages of the same page type (by
topic and location, not just the last five ledger entries). If this article's planned H2 list
could replace one of theirs by changing only the location or device name, redesign the outline.
Record the chosen structure pattern and the comparison in the ledger and the delivery.

---

## 9. SEO PLACEMENT RULES

- Primary keyword in: SEO title (front-loaded), H1, first 100 words, at least one H2, meta
  description, slug; naturally a handful of times in the body. Never forced into a sentence that
  reads worse for it; clear natural wording beats exact-match placement.
- City articles: city name in title, H1, slug, first 100 words, and naturally where local facts
  appear. Include the alternate city name once where one exists.
- **Entity consistency:** one canonical form per technical entity across the page (for example
  "non-linear junction detector (NLJD)" on first use, then "NLJD"). Ordinary language may vary
  naturally; technical entities may not.
- **Internal links (embedded in sentences, never a list at the end):** link to the Locations page
  for that city if one exists; to the state hub if published; to relevant published concept
  articles (target 2 where they exist); and to 1 or 2 nearby city articles only where genuinely
  relevant. Concept articles link down to relevant city articles once those exist. Link the
  author box to `/meet-the-founder`. Never link to unpublished or planned URLs.
- **External links:** cite material claims where they are made; 1 to 3 authority links is the
  typical shape, not a ceiling (indiacode.nic.in, dot.gov.in, cybercrime.gov.in, state police, or
  the primary report of a local incident). Prefer the direct source page over a homepage.
- **Cross-site link to ADA:** at most one contextual link, only where an investigation service is
  genuinely the next step. Never sitewide, never keyword-stuffed anchors.
- One H1 only, supplied by the post title through the site's layout; the body starts at H2.

---

## 10. VOICE AND HUMAN-WRITING STANDARD

Write as an experienced security publisher who has read the law, understood the equipment,
studied where people get it wrong, and then explained it plainly to a worried but intelligent
reader.

- Third person for the firm and founder. The reader may be addressed as "you".
- Active voice. Paragraphs of 2 to 4 lines. Deliberately varied sentence length.
- Calm, precise, non-alarmist. Concrete over abstract: a named device class, a named law, a named
  helpline beats an adjective.
- Explain jargon in one line the first time it appears.
- No filler to reach a word count. Short and useful beats long and hollow.

**Hard formatting rules:**
- **The em dash character (U+2014) must never appear anywhere:** prose, headings, tables, alt
  text, schema strings, code comments, SEO block. Also avoid the en dash (U+2013) in prose. Use a
  comma, colon, semicolon, parentheses or a plain hyphen.
- **No emoji anywhere,** including image text and schema.

**Promotional-claim rule (context, not word-matching):** never make unsupported promotional
claims about the firm or service: being the best, No.1, premier, most trusted, guaranteed
results, 100% detection, military-grade capability. The same words are permitted in legitimate
non-promotional contexts: a reader-facing question ("which is the best hidden camera detector
app?") answered with criteria, or an accurate limitation ("no sweep can guarantee that a space
stays clean"). The Section 18 check flags occurrences for context review; only promotional uses
fail.

**Banned phrases (always, in any context):** "In today's fast-paced world", "In today's digital
age", "Navigating the complexities", "Look no further", "Unlock", "A game changer", "One-stop
solution", "In this comprehensive guide", "Whether you are a", "It is important to note that",
"In conclusion", "In the ever-evolving landscape", "This article will delve into", "delve",
"landscape" as a metaphor, "seamless", "robust" as filler, "dive in", "let us explore",
"peace of mind" (overused on the site already), "rest assured", "eagle eye", "leave no stone
unturned". Avoid the "not just X, but Y" sentence shape as a habit, and avoid starting
consecutive paragraphs with the same connective.

### 10A. Credential integrity (hard rule)

Publish only claims whose Section 1A evidence status permits publication. Never invent or infer a
qualification, former employer, government or military background, certification, years of
experience, award, client, case outcome, statistic or equipment ownership. Unverified does not
mean false: unresolved claims are simply omitted, without labelling them untrue. When something
seems to need a credential that is not on file, write neutral factual language or leave it out.

---

## 11. STRUCTURED DATA

Inject JSON-LD through the site's existing mechanism (Section 2), as a **connected per-page
graph**: WebPage, BlogPosting, Organization and (where evidence permits) Person, with distinct
`@id`s, BlogPosting linked to its WebPage through `mainEntityOfPage`.

- **BlogPosting:** headline, description, datePublished (the true publication date),
  dateModified (substantive changes only), image, mainEntityOfPage, inLanguage `en-IN`, author,
  publisher.
- **Author:** the Organization when no named human author is accurate. **reviewedBy sits on the
  WebPage node, and only after a completed review is recorded in the ledger** (Section 1B). No
  review, no reviewedBy anywhere.
- **Organization:** `"@id": "https://www.bugsweepingtscm.com/#organization"`, defined in the root
  layout, which in Next.js renders on every route, so the full node ships with every page rather
  than being an off-page reference. Keep the `@id` stable.
- **Person (founder):** `"@id": "https://www.bugsweepingtscm.com/meet-the-founder#person"`, name,
  jobTitle, worksFor the Organization, url the founder page. Include `award` only while the
  Section 1A status for the award permits publication. `sameAs` only for profiles listed in
  site-facts.md, and only profiles of the same entity: never equate the founder with the company;
  their relationship is `worksFor`.
- **BreadcrumbList:** must mirror the real navigable hierarchy (Home > Blog > Article; add the
  state hub level only where that hub is published and linked in navigation).
- **FAQ policy (checked 19 September 2026; recheck before relying on it):** Google's FAQ rich
  results stopped appearing in Search on 7 May 2026, with Search Console and Rich Results Test
  support removed in the following months. Visible FAQs remain valuable where they answer real
  questions not already answered on the page. FAQPage markup is optional: it is still valid
  Schema.org that other engines and retrieval crawlers can read, it must exactly match the
  visible FAQ if used, and no rich result or citation benefit may be claimed for it.
- **City articles:** `about` or `spatialCoverage` with a Place (city, state, country IN). No
  LocalBusiness or Service with an address unless one is confirmed.
- **Injection safety:** use the repository's safe JSON-LD serialisation. When embedding JSON in a
  script element, neutralise HTML-breaking characters, escaping `<` as `\u003c`;
  `JSON.stringify` alone is not sufficient. Never interpolate untrusted source text into markup.
- **Validation:** JSON syntax, Schema.org types and properties, `@id` references resolving within
  the page's graph, and consistency with visible content. Use the Rich Results Test for
  Google-supported features where available. Parsing alone is not validation.

---

## 12. BUILD SPEC (Next.js)

- Create the post in the exact format recorded in stack-adapter.md, rendered by the existing blog
  layout. Match existing posts' metadata fields (category label, read time, date, excerpt).
- Metadata: title, description, canonical (absolute, `www` host), Open Graph (type article,
  image 1200x630, locale en_IN), Twitter card summary_large_image.
- Semantic HTML: real tables with a header row and a caption, ordered lists for procedures,
  `figure` and `figcaption` for diagrams.
- Tables in a horizontally scrollable wrapper so the page body never scrolls sideways at 360px.
- **Diagrams:** prefer **one responsive SVG** with an accessible name (`role="img"` plus
  `aria-label` or `title`) and a nearby text equivalent (figcaption or surrounding prose carrying
  the diagram's meaning). Use separate visual variants only when a single responsive SVG cannot
  work, and then keep the meaningful information available to assistive technology at every
  breakpoint. Never use `aria-hidden` as a search-extraction control. Diagram labels at least
  14px rendered on mobile.
- Images: `next/image` with width, height, descriptive alt text, lazy loading below the fold;
  featured image priority-loaded only where the layout shows it above the fold.
- Register the post in the blog index and sitemap as the site already does. datePublished is the
  real publication date; dateModified changes only on substantive updates.
- Accessibility floor: visible focus states, colour contrast AA, `prefers-reduced-motion`
  respected, heading order without skips.

---

## 13. FEATURED IMAGE

Always a finished rendered file, never a design brief. 1200x630, WebP plus PNG fallback, saved in
the site's blog image folder with a keyword-descriptive filename. Match the site's existing
visual language (inspect the homepage colours and fonts in the repo). Title text on the image is
short and readable at thumbnail size. No emoji, no stock photos of people, no images implying a
specific real client or location that was not actually visited. Supply alt text. Generate by
rendering an HTML or SVG composition headlessly (Playwright or sharp) and exporting both formats.
If rendering tools are unavailable in this environment, deliver the composition source plus a
BLOCKED note in QA; never claim an image was rendered when it was not.

---

## 14. POST-PUBLICATION REVIEW (run after each publishing batch)

- Review indexability, query-to-page overlap, engagement and consultation outcomes, and whatever
  search or AI referral evidence the site's own reports actually provide, before expanding
  coverage further.
- Compare pages serving similar reader tasks; improve or consolidate weak overlap instead of
  producing more location variants. Never infer success from publication volume or an isolated
  ranking check.
- Maintain a dated review queue for legal claims, helplines, reporting routes, credentials and
  service coverage; update affected articles when the underlying facts change, with dateModified
  reflecting the substantive change.
- Record sampled AI citations with query, platform and date; never generalise a sample into a
  visibility claim. Keep search visibility separate from qualified enquiries.

---

## 15. SEO DETAILS BLOCK (every delivery, this order)

1. Publishing decision (NEW / REPLACE / NEW + INTERLINK / MERGE / HOLD) with Rule 0 evidence from
   all four checks and the intent review of any existing page touched.
2. Page type and gate result (Section 5), listing the qualifying local facts with sources for
   city and district articles, and the swap-test comparison.
3. Keyword map table with the Section 4C evidence log.
4. SEO title (about 55 to 60 characters, primary keyword first).
5. Focus keyword.
6. Related keywords: one comma-separated line, every term present in the keyword map with a home.
7. Slug.
8. Meta description (about 150 to 155 characters: keyword, benefit, soft CTA).
9. Excerpt, 35 to 50 words (blog index card).
10. H1 (post title field).
11. Featured image file paths and alt text.
12. FAQ list (matches the markup if FAQPage is used).
13. Internal, external and cross-site links used (published targets only).
14. Structure variance note: the pattern used and the comparison against the closest published
    pages of the same type.
15. QA table (Section 18 results with PASS / FAIL / BLOCKED / NOT APPLICABLE per check).

---

## 16. CONTENT LEDGER

`content-engine/content-ledger.json` holds one record per URL, **keyed by slug (canonical URL)**.
Initialise it from existing content at setup. On refresh, **upsert** the existing record, never
append a duplicate: move the previous state into that record's `revisions` array. Validate the
JSON and write atomically (write to a temp file, then replace).

```json
{
  "slug": "",
  "canonical_url": "",
  "page_type": "city | district | state-hub | concept-pillar | concept-spoke",
  "location": { "city": "", "district": "", "state": "" },
  "primary_keyword": "",
  "secondary_keywords": [],
  "h2_outline": [],
  "structure_pattern": "",
  "compared_against": [],
  "main_device": "",
  "information_gain": "",
  "internal_links_out": [],
  "gate_decision": "",
  "status": "draft | published | merged | held",
  "review": { "status": "awaiting | approved", "reviewer": "", "date": "", "approved_version": "" },
  "date_published": "",
  "date_modified": "",
  "revisions": []
}
```

The ledger drives Rule 0, the anti-template comparison, the `Next cities` command, review-credit
eligibility (Section 1B) and later linking updates: when a new city article is published, add a
link to it from the relevant pillar and state hub where those exist, and list those edits in the
delivery.

---

## 17. DELIVERY ORDER

1. Research notes: verified facts with sources and dates checked, the SERP gap, the one detail
   competitors omit, legal points re-verified.
2. SEO details block (Section 15).
3. Files written to the repo (list of paths) plus a rendered preview screenshot path, or a
   BLOCKED note where preview tooling is unavailable.
4. Featured image files (WebP and PNG), or the BLOCKED note per Section 13.
5. QA results (Section 18).
6. **Reviewer checklist for Hardesh Bhardwaj:** every technical claim, every experience or
   methodology line, every legal statement, and any equipment mention, as a short list. State
   plainly: the article ships without a review credit; on his recorded approval of this exact
   version, the credit and the WebPage `reviewedBy` are added and the ledger updated.
7. Ledger upsert and any cross-link edits made to older posts.
8. Delivery status line ("complete, awaiting technical review") and request for approval before
   any commit or deploy.

---

## 18. QA (run before every delivery; report measured results, never assume)

Report every check as **PASS, FAIL, BLOCKED or NOT APPLICABLE**. Explain every BLOCKED check (the
missing tool or credential). Never invent screenshots, measurements or successful results;
Section 19 requires applicable gates to pass, not false YES answers.

**Before the table:** verify the generated route's response and rendered output (dev server or
build output): HTTP status, article content present in the server-rendered HTML, canonical URL,
robots meta directives, crawlable internal links. Run the repository's existing type, lint and
build checks; record the commands and distinguish pre-existing failures from ones this article
introduced. Local checks establish build health, not live indexing; never claim crawler access,
indexing or Search Console validation from a local build.

| Check | Pass target |
|---|---|
| Repo build (recorded command) | succeeds; no new errors or warnings from this post |
| Type and lint checks (as configured) | no new failures from this post |
| Render at 360px, 412px and 1280px | no horizontal scroll (scrollWidth equals viewport width) |
| Body text size on mobile | 16px or more |
| Smallest label (captions, table cells, figcaptions, diagram labels) on mobile | 14px or more |
| H1 count on the rendered page | exactly 1 |
| Heading order | no skipped levels |
| Diagram accessibility | accessible name present; meaning available to assistive technology at every breakpoint |
| JSON-LD | valid JSON; types and properties valid; `@id` graph resolves; matches visible content; `<` escaped as \u003c |
| Canonical, OG image, meta description, robots meta | present and correct on the rendered page |
| Internal and external links | all resolve; no links to unpublished URLs |
| Review-credit consistency | no review credit or reviewedBy present unless the ledger records approval |
| Em dash (U+2014) and en dash (U+2013) in prose | 0 |
| Emoji characters | 0 |
| Banned phrases (Section 10 list) | 0 |
| Promotional-claim flags | all occurrences of flagged words listed with context; promotional uses 0 |
| Blocked claims (Section 1A) | 0 |
| Word count | within the working range, or deviation recorded with reason |
| Swap test (location articles) | comparison documented; distinct useful answer confirmed |

Use a grep or small script for the character, phrase and claim checks, and paste the counts.

---

## 19. SELF-CHECK (every applicable item PASS before delivering; BLOCKED items reported, never faked)

- [ ] Request mode classified; files written only in WRITE or SETUP mode.
- [ ] Rule 0 run across ledger, repo, live index and ADA; intent review done on any existing page
      touched; decision stated.
- [ ] Page type chosen; city or district gate passed with sourced, answer-changing local facts
      and the swap test, or a merge or hold decision recorded.
- [ ] Discovery run across all Section 4A lanes; keyword map delivered with the evidence log;
      every keyword has a home; deviations recorded, not padded.
- [ ] Research from the source ladder; every legal point verified at source or omitted; no
      invented number; reporting routes correctly scoped.
- [ ] One detail competitors omit, named and bounded to inspected pages.
- [ ] Safety boundaries (Section 7) respected; safety-first device guidance; no jammer,
      spyware-installation or planting content.
- [ ] Required architecture present (direct answer, citable block, passages, FAQ, limitations,
      one CTA); topic-driven components chosen deliberately.
- [ ] Anti-template comparison done against closest published pages; variance note written.
- [ ] Experience or methodology lines only from field notes or site-facts.md; nothing invented;
      evidence statuses respected in prose and schema.
- [ ] No location, office, timing or price claim without confirmation.
- [ ] Human-writing standard held; zero banned phrases, em dashes, emoji; promotional-claim
      context review done.
- [ ] Schema graph complete, valid and injection-safe; attribution honest; no unearned review
      credit.
- [ ] Internal links to published targets only; material claims cited.
- [ ] Build, render and content QA run; results reported with honest states.
- [ ] Featured image rendered as WebP and PNG, or BLOCKED reported.
- [ ] Ledger upserted; reviewer checklist included; no commit or deploy without approval.

---

## 20. ONE-TIME SITE TASKS (track separately, raise once in the first delivery)

1. **Disambiguate experience claims.** The homepage's "20+ Years Experience" and the founder
   page's "since 2013" may describe different scopes (combined team experience versus the
   founder's personal practice). Verify each separately with the owner, then make every page,
   badge and schema statement name its scope unambiguously. Neither figure is assumed false.
2. **Remove or substantiate unverifiable homepage claims:** "Former Intelligence Officers",
   "Internationally Trained and Certified", "India's premier", "Satisfaction Guaranteed",
   "100% Confidentiality" as a statistic. Documentary credentials sitting next to unverifiable
   claims weaken trust for users and quality raters.
3. **Testimonials:** the homepage carousel names clients with sensitive titles. If these are not
   real, consented and verifiable, replace them with anonymised, consented case summaries. Never
   reuse them in blog content.
4. **Publication dates:** existing posts carry 2025 dates on a site the owner describes as new.
   Investigate provenance with the owner (migrated content keeps its original dates; freshly
   written content gets its true dates). Correct only what is actually wrong; never blanket-reset
   dates.
5. Remove emoji icons from the homepage vulnerability section for a consistent professional tone.
6. `/llms.txt` at the root is optional: no established search or citation benefit (Google has
   said Search does not use it), low cost, harmless if the owner wants it for other systems. Not
   a publication gate.
7. **Crawler access is a set of separate owner decisions, recorded in site-facts.md,** not one
   blanket allow: search crawling (Googlebot, Bingbot), AI search and grounding (OAI-SearchBot,
   PerplexityBot, Google-Extended for Gemini grounding), and model training (GPTBot, ClaudeBot
   and similar). Recommended default for this site's goals: allow search and AI-search crawlers;
   allowing training crawlers is the owner's call (it may aid presence in future models and
   carries no search benefit). Google-Extended does not affect Google Search inclusion. Verify
   current vendor documentation when writing robots.txt, check that the CDN or firewall does not
   silently block permitted crawlers, and reference the sitemap. Access creates eligibility, not
   a promise of indexing or citation.
8. Site-wide Organization and Person JSON-LD in the root layout per Section 11, with `sameAs`
   only to same-entity profiles listed in site-facts.md.
9. Ask ADA to link its bug-sweeping service page to bugsweepingtscm.com with a natural anchor.
   Keep handles and phone identical across both sites.
10. Submit the sitemap in Google Search Console and Bing Webmaster Tools; connect Search Console
    so refreshes and Section 14 reviews can use real query data.
11. Collect **field notes** from Hardesh Bhardwaj: anonymised, consented case summaries by city
    and device type. These are the strongest E-E-A-T and information-gain asset for city articles.

---

*BugSweepingTSCM Blog Engine v1.1, 19 September 2026. Supersedes v1.0 in full. Carried forward:
search ecosystem discovery, coverage-by-home, passage-level citation, anti-template with variance
note, human-writing standard, credential integrity, rendered featured image, measured QA,
continuation protocol, safety boundaries, Rule 0. Changed in v1.1 after external audit: request
modes and execution contract; evidence-status framework for all firm and founder claims; honest
attribution with review credit only after recorded approval; owner's city-first publishing order
with conditional pillar links; local gates rebuilt around answer-changing facts and the swap test
instead of a word percentage; district rule reframed around sameness rather than page count;
legal verify-or-omit rule with commencement checks and scope notes; correctly scoped reporting
routes (112, police, cybercrime.gov.in, 1930); safety-first device-discovery and stalkerware
guidance; sweep-limitation wording; required-versus-topic-driven content architecture with
targets instead of quotas; contextual promotional-claim rule; per-page schema graph with
reviewedBy on WebPage, injection-safe JSON-LD and current FAQ policy (rich results ended
7 May 2026); single accessible responsive diagram preference; ledger upsert with review state;
QA with PASS / FAIL / BLOCKED / NOT APPLICABLE; post-publication review in Section 14; and
reworked one-time tasks (experience scopes, date provenance, purpose-specific crawler choices,
optional llms.txt).*
