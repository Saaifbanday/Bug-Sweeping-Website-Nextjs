import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Trophy, Globe2 } from "lucide-react";

// Every figure here is one the credentials page can substantiate. Nothing is rounded up.
const credentials = [
  { value: "13 years", label: "In practice since 2013" },
  { value: "3,000+", label: "Cases handled" },
  { value: "500+", label: "TSCM sweeps completed" },
  { value: "25 cities", label: "Covered in depth across India" },
];

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #080d1a 0%, #0d1526 50%, #080d1a 100%)",
      }}
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, #e63946 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Accent glows */}
      <div
        className="absolute top-0 left-0 w-[32rem] h-[32rem] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(230,57,70,0.13) 0%, transparent 70%)",
          transform: "translate(-30%, -35%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(29,78,216,0.10) 0%, transparent 70%)",
          transform: "translate(25%, 30%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 sm:py-20 lg:py-24">
        {/* On mobile the award photograph sits directly under the headline, so the
            strongest proof is visible without scrolling past the body copy. */}
        <div className="grid lg:grid-cols-12 gap-y-9 lg:gap-x-14 items-center">
          {/* Badge and headline */}
          <div className="lg:col-span-7 lg:col-start-1 lg:row-start-1 lg:self-end">
            {/* Award badge */}
            <div
              className="inline-flex items-center gap-2.5 rounded-full pl-2.5 pr-4 py-2 mb-7"
              style={{
                backgroundColor: "rgba(230,57,70,0.1)",
                border: "1px solid rgba(230,57,70,0.3)",
              }}
            >
              <span
                className="rounded-full p-1.5 flex items-center justify-center"
                style={{ backgroundColor: "rgba(230,57,70,0.2)" }}
              >
                <Trophy size={13} style={{ color: "var(--color-accent)" }} />
              </span>
              <span
                className="text-xs sm:text-sm font-semibold tracking-wide"
                style={{ color: "var(--color-text)" }}
              >
                Investigator of the Year 2026
              </span>
              <span
                className="hidden sm:inline text-xs"
                style={{ color: "var(--color-muted)" }}
              >
                World Association of Detectives, Cannes
              </span>
            </div>

            <h1
              className="font-black mb-6"
              style={{
                fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
                color: "var(--color-text)",
                lineHeight: 1.08,
                letterSpacing: "-0.035em",
              }}
            >
              Find what should
              <br />
              <span style={{ color: "var(--color-accent)" }}>not be there.</span>
            </h1>
          </div>

          {/* Right column: the award photograph */}
          <div className="lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:row-span-2 lg:self-center">
            <div className="relative mx-auto" style={{ maxWidth: "26rem" }}>
              <div
                className="relative rounded-2xl overflow-hidden w-full aspect-3/4"
                style={{ border: "1px solid var(--color-border)" }}
              >
                <Image
                  src="/portfolio/award-ceremony-hero.jpg"
                  alt="Hardesh Bhardwaj receiving the Investigator of the Year Award 2026 from the World Association of Detectives in Cannes, France"
                  fill
                  priority
                  sizes="(max-width: 1024px) 26rem, 26rem"
                  className="object-cover"
                />
                {/* Caption gradient */}
                <div
                  className="absolute inset-x-0 bottom-0 p-5 pt-16"
                  style={{
                    background: "linear-gradient(to top, rgba(8,13,26,0.95) 15%, transparent)",
                  }}
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <Globe2 size={13} style={{ color: "var(--color-accent)" }} />
                    <span
                      className="text-xs font-semibold tracking-wide uppercase"
                      style={{ color: "var(--color-accent)" }}
                    >
                      Cannes, France
                    </span>
                  </div>
                  <p
                    className="text-sm font-medium leading-snug"
                    style={{ color: "var(--color-text)" }}
                  >
                    Receiving the Investigator of the Year Award at the 101st W.A.D. Annual
                    Conference, September 2026
                  </p>
                </div>
              </div>

              {/* Decorative rings */}
              <div
                className="absolute -top-5 -right-5 w-24 h-24 rounded-full border pointer-events-none"
                style={{ borderColor: "var(--color-accent)", opacity: 0.15 }}
              />
              <div
                className="absolute -bottom-5 -left-5 w-16 h-16 rounded-full border pointer-events-none"
                style={{ borderColor: "var(--color-accent)", opacity: 0.15 }}
              />
            </div>
          </div>

          {/* Body copy, credentials and calls to action */}
          <div className="lg:col-span-7 lg:col-start-1 lg:row-start-2 lg:self-start">
            <p
              className="mb-7"
              style={{
                color: "var(--color-muted)",
                fontSize: "1.125rem",
                lineHeight: 1.75,
                maxWidth: "36rem",
              }}
            >
              Technical surveillance countermeasures for boardrooms, homes and vehicles.
              Radio-frequency analysis, non-linear junction detection, optical and thermal
              inspection, and a written report you can act on.
            </p>

            {/* Founder line */}
            <div
              className="flex items-start gap-3 mb-9 pl-4"
              style={{ borderLeft: "3px solid var(--color-accent)", maxWidth: "36rem" }}
            >
              <p style={{ color: "var(--color-text)", fontSize: "1rem", lineHeight: 1.7 }}>
                Led by <strong>Hardesh Bhardwaj</strong>, Founder of ADA Advance Detective
                Agency, named Investigator of the Year 2026 by the World Association of
                Detectives at its 101st Annual Conference in Cannes.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href="https://wa.me/918882732221"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base"
              >
                Book a confidential sweep
                <ArrowRight size={16} />
              </a>
              <Link href="/meet-the-founder" className="btn-secondary text-base">
                See the credentials
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Credential strip */}
            <dl className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-5">
              {credentials.map((c) => (
                <div key={c.label}>
                  <dt
                    className="font-black leading-none mb-1.5"
                    style={{ color: "var(--color-text)", fontSize: "1.375rem", letterSpacing: "-0.02em" }}
                  >
                    {c.value}
                  </dt>
                  <dd className="text-xs leading-snug" style={{ color: "var(--color-muted)" }}>
                    {c.label}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="text-xs mt-3" style={{ color: "var(--color-muted)", opacity: 0.8 }}>
              Case and sweep totals are the firm&apos;s own reported figures.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
