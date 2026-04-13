"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { BlogPost } from "@/lib/blog-data";

export default function MoreArticles({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) return null;

  return (
    <section className="py-16" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="font-bold mb-10"
          style={{ color: "var(--color-text)", fontSize: "1.5rem" }}
        >
          More Articles
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="rounded-xl p-6 flex flex-col gap-3"
              style={{
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--color-border)",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.borderColor = "rgba(230,57,70,0.35)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.borderColor = "var(--color-border)")
              }
            >
              <span className="text-xs font-semibold" style={{ color: "var(--color-accent)" }}>
                {p.category}
              </span>
              <h3
                className="font-bold leading-snug"
                style={{ color: "var(--color-text)", fontSize: "1rem" }}
              >
                {p.title}
              </h3>
              <span
                className="flex items-center gap-1 text-sm font-semibold mt-auto"
                style={{ color: "var(--color-accent)" }}
              >
                Read <ArrowLeft size={13} style={{ transform: "rotate(180deg)" }} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
