# Site facts and evidence records

Statuses: independently verified / first-party documentary / self-reported / unresolved / contradicted.
Publication rule: see SKILL.md Section 1A. Seeded 19 September 2026 from the skill and from `/meet-the-founder` in this repo.

| # | Claim | Entity | Source | Status | Date checked | Permitted wording |
|---|---|---|---|---|---|---|
| 1 | Hardesh Bhardwaj is Founder and Lead TSCM Specialist, ADA Advance Detective Agency Pvt. Ltd. | Person | /meet-the-founder | first-party documentary | 2026-09-19 | "Hardesh Bhardwaj, founder of ADA Advance Detective Agency Pvt. Ltd." |
| 2 | ADA Advance Detective Agency Private Limited, incorporated 18 Nov 2021, CIN U74999DL2021PTC390132 | Organization | /portfolio/certificate-of-incorporation.pdf | first-party documentary (upgrade after MCA portal check) | 2026-09-19 | State plainly with CIN. |
| 3 | In practice since 2013 | Person | /meet-the-founder | first-party documentary | 2026-09-19 | "in practice since 2013" |
| 4 | Investigator of the Year 2026, World Association of Detectives, presented 5 Sep 2026, 101st Annual Conference, Cannes | Person | /meet-the-founder photos and certificate | first-party documentary (W.A.D. listing not yet showing 2026 recipient) | 2026-09-19 | "named Investigator of the Year 2026 by the World Association of Detectives" |
| 5 | Attended W.A.D. 101st (Cannes, 2 to 6 Sep 2026) and 99th (Kuala Lumpur, 24 to 29 Sep 2024) conferences | Person | certificate PDFs in /public/portfolio | first-party documentary | 2026-09-19 | Attendance only. Never presented as a TSCM certification. |
| 6 | "3,000+ cases handled", "500+ TSCM sweeps completed" | Organization | site copy | self-reported | 2026-09-19 | Author box only, as "the firm's reported figures (as of <date>)". Never in body copy. |
| 7 | Service coverage "across India" | Organization | site copy | self-reported, owner confirmation pending | 2026-09-19 | Not used in articles until owner confirms. |
| 8 | Pricing | Organization | none | unresolved | 2026-09-19 | Do not publish numbers. |
| 9 | Equipment owned (REI, WolfHound Pro, NLJD, FLIR etc. named in site copy) | Organization | site copy | self-reported, owner confirmation pending | 2026-09-19 | Articles may explain instrument classes only. |
| 10 | "20+ years experience" | unclear scope | homepage | unresolved | 2026-09-19 | Blocked. |
| 11 | "Former Intelligence Officers", "internationally trained and certified", "certified technicians" | Organization | site copy | unresolved | 2026-09-19 | Blocked. |
| 12 | Same-day / 24x7 emergency response, unmarked vehicles, NDA from first call, written report after every sweep | Organization | site copy | self-reported, owner confirmation pending | 2026-09-19 | Not used until owner confirms. |
| 13 | Physical office addresses | Organization | none | unresolved | 2026-09-19 | No addresses, no LocalBusiness schema. |

Profile URL: https://www.bugsweepingtscm.com/meet-the-founder

## Sitewide claims cleanup, 4 October 2026

Every page in the built output was audited against the rows above and the Section 1A blocked
list. Removed from live copy: "military-grade" (/about, /services, Equipment, AboutUs,
Testimonials); "certified" applied to people (/about, /contact, /services, homepage CTA,
HomeAbout, TrustBadges); "former intelligence officers" (/about, AboutUs); "India's premier",
"India's leading", "India's Most Trusted" (/about, HomeAbout); "100% Confidential" and
"Satisfaction Guaranteed" (/contact, privacy meta, Testimonials badges); 24/7 and emergency
availability (/contact title, meta, availability card, heading); "unmarked vehicles" and
"NDA-bound operatives" (/about, /contact, HomeAbout); "detailed written report with every
sweep" (HomeAbout); and the clientele claim naming C-suite executives, government officials and
high-net-worth individuals (HomeAbout). The blog template's default CTA, which asserted
certified specialists available 24/7 for emergency sweeps across India, was rewritten on
3 October 2026; it had been reaching every post without its own CTA.

W.A.D. wording corrected throughout: membership and conference attendance are no longer
presented as certification. "Certified by the W.A.D." is now "A member of the W.A.D.",
"certified member" is "member", and "W.A.D. Certified Professional Member" is "W.A.D.
Professional Member". The founder page's certificate list is unchanged, because each item is
already accurately titled (Certificate of Attendance, of Participation, of Incorporation); only
the section label changed, from "Certifications & Credentials" to "Credentials & Documents".

Testimonials: the five entries named individuals with sensitive roles (a senior government
official, an HNI client, named executives) and described specific findings. Nothing in this file
or in field-notes.md supports them. The component was unhooked from /services and the data
removed. It must not be re-enabled until real, consented, anonymised case summaries exist in
field-notes.md.

Verified clean after the change: all 70 built HTML pages, checked for each phrase above.

## Still pending the owner's confirmation (not yet resolved)

These are facts only the owner can settle. They are currently published and should either be
confirmed and recorded here, or removed.

| Item | Where it still appears | What is needed |
|---|---|---|
| Equipment ownership: REI OSCOR Green, REI ORION 2.4, REI ANDRE, ORIUS Wi-Fi Hunter, FLIR thermal camera, VPC-62 pole camera, BlueSleuth, WolfHound Pro | Equipment section (homepage), HomeAbout bullet list | Confirmation that the firm owns and uses these specific models. Row 9 is self-reported; until confirmed, naming models is an equipment ownership claim. |
| "3,000+ cases handled", "500+ TSCM sweeps completed" | Hero, Stats, HomeAbout ("500+ successful sweeps across India"), /meet-the-founder stat cards | Row 6 permits these in the author box only, attributed as the firm's reported figures with a date. They are currently in homepage body copy. |
| Service coverage "across India" | /locations, layout metadata, Coverage section | Row 7 is self-reported, owner confirmation pending. Left in place for now because the site publishes 36 city pages and 15 state hubs at the owner's direction, but it is not independently evidenced. |

## sameAs profiles (same entity only)
None recorded yet. Do not add sameAs until the owner lists them.

## Crawler access decisions (Section 20 item 7)
Not yet decided by the owner. Current robots.ts allows all user agents.
