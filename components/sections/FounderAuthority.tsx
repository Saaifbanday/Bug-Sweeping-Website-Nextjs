import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Trophy, FileCheck2, Mic, Building2 } from "lucide-react";

// Each item is evidenced on /meet-the-founder by an award photograph, a signed
// certificate or a government record. Nothing here is a self-assessment.
const credentials = [
  {
    Icon: Trophy,
    title: "Investigator of the Year 2026",
    body: "Awarded by the World Association of Detectives at its 101st Annual Conference in Cannes, France.",
  },
  {
    Icon: Mic,
    title: "Speaker, 101st W.A.D. Annual Conference",
    body: "Addressed delegates at Cannes in September 2026. Six continuing education units, certificate signed by the association's Executive Director and President.",
  },
  {
    Icon: FileCheck2,
    title: "99th W.A.D. Annual Conference, Kuala Lumpur",
    body: "Six continuing education units covering financial crime, artificial intelligence in investigations and cross-border compliance.",
  },
  {
    Icon: Building2,
    title: "Incorporated and on the public record",
    body: "ADA Advance Detective Agency Private Limited, incorporated with the Ministry of Corporate Affairs in November 2021.",
  },
];

export default function FounderAuthority() {
  return (
    <section
      className="py-20"
      style={{
        backgroundColor: "var(--bg-surface)",
        borderTop: "1px solid var(--color-border)",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Photographs */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-4">
              <div
                className="relative rounded-xl overflow-hidden aspect-3/4 col-span-2"
                style={{ border: "1px solid var(--color-border)" }}
              >
                <Image
                  src="/portfolio/wad-conference-speaking.png"
                  alt="Hardesh Bhardwaj addressing delegates at the W.A.D. 101st Annual Conference in Cannes"
                  fill
                  sizes="(max-width: 1024px) 100vw, 26rem"
                  className="object-cover"
                />
              </div>
              <div
                className="relative rounded-xl overflow-hidden aspect-4/3"
                style={{ border: "1px solid var(--color-border)" }}
              >
                <Image
                  src="/portfolio/wad-conference-networking.jpg"
                  alt="Hardesh Bhardwaj with past leadership of the World Association of Detectives"
                  fill
                  sizes="(max-width: 1024px) 50vw, 13rem"
                  className="object-cover"
                />
              </div>
              <div
                className="relative rounded-xl overflow-hidden aspect-4/3"
                style={{ border: "1px solid var(--color-border)" }}
              >
                <Image
                  src="/portfolio/wad-cannes-conference-2.jpg"
                  alt="The W.A.D. 101st Annual Conference in Cannes, France"
                  fill
                  sizes="(max-width: 1024px) 50vw, 13rem"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Copy */}
          <div className="lg:col-span-7">
            <p className="section-label mb-4">The people doing the work</p>
            <h2 className="section-title mb-6">
              Credentials you can check, not claims you have to take on trust
            </h2>
            <p
              className="mb-4"
              style={{ color: "var(--color-muted)", fontSize: "1.0625rem", lineHeight: 1.8 }}
            >
              Counter-surveillance is an industry where anyone can call themselves an expert,
              because the work happens privately and the results are rarely discussed. That
              makes verifiable credentials worth more than adjectives.
            </p>
            <p
              className="mb-8"
              style={{ color: "var(--color-muted)", fontSize: "1.0625rem", lineHeight: 1.8 }}
            >
              Our founder, <strong style={{ color: "var(--color-text)" }}>Hardesh Bhardwaj</strong>,
              has practised since 2013 and was named Investigator of the Year 2026 by the World
              Association of Detectives, an international body whose annual conference has run for
              more than a century. The award photographs, the signed certificates and the company
              registration are all published in full on his credentials page.
            </p>

            <div className="grid sm:grid-cols-2 gap-5 mb-9">
              {credentials.map(({ Icon, title, body }) => (
                <div key={title} className="card p-5">
                  <div
                    className="rounded-lg p-2 inline-flex mb-3"
                    style={{ backgroundColor: "rgba(230,57,70,0.12)" }}
                  >
                    <Icon size={17} style={{ color: "var(--color-accent)" }} />
                  </div>
                  <h3
                    className="font-bold mb-2"
                    style={{ color: "var(--color-text)", fontSize: "1rem", lineHeight: 1.4 }}
                  >
                    {title}
                  </h3>
                  <p className="text-sm" style={{ color: "var(--color-muted)", lineHeight: 1.65 }}>
                    {body}
                  </p>
                </div>
              ))}
            </div>

            <Link href="/meet-the-founder" className="btn-primary">
              View the full credentials
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
