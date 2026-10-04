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
| 6 | "3,000+ cases handled", "500+ TSCM sweeps completed" | Organization | site copy, owner confirmation 4 Oct 2026 | self-reported, owner confirmed | 2026-10-04 | Publishable, but must be attributed as the firm's own reported figures wherever they appear. Hero and Stats now carry that attribution line. Still not independent verification. |
| 7 | Service coverage "across India" | Organization | site copy | self-reported, owner confirmation pending | 2026-09-19 | Not used in articles until owner confirms. |
| 8 | Pricing | Organization | none | unresolved | 2026-09-19 | Do not publish numbers. |
| 9 | Equipment owned (REI OSCOR Green, REI ORION 2.4, REI ANDRE, ORIUS Wi-Fi Hunter, FLIR thermal camera, VPC-62 pole camera, BlueSleuth, WolfHound Pro) | Organization | site copy, owner confirmation 4 Oct 2026 | self-reported, owner confirmed | 2026-10-04 | Owner confirmed on 4 Oct 2026 that the firm owns and uses all models named on the site, so the Equipment section may name them. Articles should still explain instrument classes rather than assert model use in a given engagement, and must not claim a model was used on a job that is not recorded in field-notes.md. |
| 10 | "20+ years experience" | unclear scope | homepage | unresolved | 2026-09-19 | Blocked. |
| 11 | "Former Intelligence Officers", "internationally trained and certified", "certified technicians" | Organization | site copy | unresolved | 2026-09-19 | Blocked. |
| 12a | 24/7 emergency availability | Organization | site copy, owner confirmation 4 Oct 2026 | self-reported, owner confirmed | 2026-10-04 | Confirmed by the owner on 4 Oct 2026 and restored on /contact (title, meta description, availability card and heading). Do not extend it to a response-time or arrival-time promise, which was not confirmed. |
| 12b | Unmarked vehicles, plain-clothes operatives, NDA from the first call, written report after every sweep | Organization | site copy | self-reported, NOT confirmed | 2026-10-04 | Put to the owner on 4 Oct 2026 and not selected. Removed from live copy and must stay out until confirmed. |
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

## Owner confirmations, 4 October 2026

Three items were put to the owner. Two were confirmed and one was partly confirmed:

- **Equipment models: confirmed.** The owner states the firm owns and uses every model named on
  the site. Row 9 updated; the Equipment section keeps its model names and product images.
- **Case and sweep totals: confirmed as accurate.** Row 6 updated. The figures stay on the
  homepage, and Hero and Stats now carry a line stating they are the firm's own reported
  figures, because owner confirmation makes them publishable but not independently verified.
- **Operational promises: only 24/7 emergency availability confirmed.** Restored on /contact.
  Unmarked vehicles, plain-clothes operatives, NDA from the first call and a written report
  after every sweep were not confirmed and stay out of live copy. The /contact "Full Written
  Report" step was reworded accordingly.

## Still unresolved

| Item | Where it appears | What is needed |
|---|---|---|
| Service coverage "across India" / "Pan-India Coverage" | /contact service area card, /locations, layout metadata, Coverage section | Row 7 is still self-reported. Left in place because the owner directs publication of 36 city pages and 15 state hubs, but it is not independently evidenced and was not part of the 4 Oct confirmations. |
| Physical office addresses | not published | Row 13 unresolved. No addresses and no LocalBusiness schema anywhere. |
| "20+ years experience" | not published | Row 10 blocked. Removed earlier; the founder page's "since 2013" is the documentary figure. |
