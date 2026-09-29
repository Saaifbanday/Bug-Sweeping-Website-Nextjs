import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";

// Leads with the guides that answer what people actually search before they call.
const featured = [
  "how-to-detect-hidden-cameras",
  "signs-your-office-is-bugged",
  "bug-sweeping-in-india",
];

export default function Insights() {
  const posts = featured
    .map((slug) => blogPosts.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  if (posts.length === 0) return null;

  return (
    <section
      className="py-20"
      style={{
        backgroundColor: "var(--bg-surface)",
        borderTop: "1px solid var(--color-border)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="section-label mb-4">Published guidance</p>
            <h2 className="section-title mb-5">What we know, written down</h2>
            <p className="section-subtitle">
              We publish the detail rather than keeping it back: how devices are actually
              concealed, what the law says about covert recording, and what to do in the first
              hour after finding something. Read it before you call anyone, including us.
            </p>
          </div>
          <Link href="/blog" className="btn-secondary whitespace-nowrap">
            All articles
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="card p-6 flex flex-col"
              style={{ textDecoration: "none" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="text-xs font-semibold px-2.5 py-1 rounded-full"
                  style={{
                    backgroundColor: "rgba(230,57,70,0.1)",
                    color: "var(--color-accent)",
                    border: "1px solid rgba(230,57,70,0.2)",
                  }}
                >
                  {post.category}
                </span>
                <span
                  className="flex items-center gap-1.5 text-xs"
                  style={{ color: "var(--color-muted)" }}
                >
                  <Clock size={11} />
                  {post.readTime}
                </span>
              </div>

              <h3
                className="font-bold mb-3"
                style={{ color: "var(--color-text)", fontSize: "1.0625rem", lineHeight: 1.45 }}
              >
                {post.title}
              </h3>

              <p
                className="text-sm mb-5 flex-1"
                style={{ color: "var(--color-muted)", lineHeight: 1.7 }}
              >
                {post.excerpt}
              </p>

              <span
                className="inline-flex items-center gap-2 text-sm font-semibold"
                style={{ color: "var(--color-accent)" }}
              >
                Read the guide
                <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
