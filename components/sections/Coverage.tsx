import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { cities } from "@/lib/location-data";
import { states } from "@/lib/state-data";

// The cities shown here lead; the rest are one click away on the index.
const featured = [
  "mumbai",
  "delhi",
  "bengaluru",
  "hyderabad",
  "chennai",
  "kolkata",
  "pune",
  "ahmedabad",
  "gurugram",
  "noida",
  "kochi",
  "chandigarh",
];

export default function Coverage() {
  const lead = featured
    .map((slug) => cities.find((c) => c.slug === slug))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  return (
    <section className="py-20" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <p className="section-label mb-4">Where we work</p>
          <h2 className="section-title mb-5">
            {cities.length} cities and {states.length} states, covered properly
          </h2>
          <p className="section-subtitle" style={{ maxWidth: "46rem" }}>
            The sweep does not change from one city to the next. What changes is everything
            that happens afterwards: which police force covers your address, whether an online
            form produces a complaint or an actual FIR, and which helpline the state publishes.
            Each of our location pages sets that out for the place it covers, checked against
            official sources rather than copied from other sites.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 mb-10">
          {lead.map((c) => (
            <Link
              key={c.slug}
              href={`/locations/${c.slug}`}
              className="card px-4 py-3.5 flex items-center gap-3"
              style={{ textDecoration: "none" }}
            >
              <MapPin size={15} style={{ color: "var(--color-accent)", flex: "0 0 auto" }} />
              <span
                className="font-semibold text-sm"
                style={{ color: "var(--color-text)" }}
              >
                {c.city}
              </span>
              <ArrowRight
                size={14}
                style={{ color: "var(--color-muted)", marginLeft: "auto", flex: "0 0 auto" }}
              />
            </Link>
          ))}
        </div>

        <div
          className="rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-6 justify-between"
          style={{
            background: "linear-gradient(135deg, rgba(230,57,70,0.08) 0%, rgba(230,57,70,0.03) 100%)",
            border: "1px solid rgba(230,57,70,0.2)",
          }}
        >
          <div>
            <p
              className="font-bold mb-1.5"
              style={{ color: "var(--color-text)", fontSize: "1.0625rem" }}
            >
              Not seeing your city?
            </p>
            <p className="text-sm" style={{ color: "var(--color-muted)", maxWidth: "42rem" }}>
              Sweeps are arranged well beyond the cities listed above, including the district
              towns named on each state guide. A page exists where we have local detail worth
              publishing, which is not a limit on where we travel.
            </p>
          </div>
          <Link href="/locations" className="btn-primary whitespace-nowrap">
            All locations
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
