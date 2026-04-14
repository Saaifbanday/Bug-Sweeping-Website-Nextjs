"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
              className="rounded-xl overflow-hidden flex flex-col"
              style={{
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--color-border)",
                transition: "border-color 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(230,57,70,0.35)";
                el.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--color-border)";
                el.style.transform = "translateY(0)";
              }}
            >
              {/* Cover image */}
              <div
                className="relative w-full shrink-0"
                style={{ height: "160px", backgroundColor: "var(--bg-surface)" }}
              >
                <Image
                  src={p.coverImage}
                  alt={p.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-5 flex flex-col gap-3 flex-1">
                <span className="text-xs font-semibold" style={{ color: "var(--color-accent)" }}>
                  {p.category}
                </span>
                <h3
                  className="font-bold leading-snug flex-1"
                  style={{ color: "var(--color-text)", fontSize: "1rem" }}
                >
                  {p.title}
                </h3>
                <span
                  className="flex items-center gap-1 text-sm font-semibold mt-auto"
                  style={{ color: "var(--color-accent)" }}
                >
                  Read <ArrowRight size={13} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
