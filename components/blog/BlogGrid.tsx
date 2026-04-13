"use client";

import Link from "next/link";
import { ArrowRight, Clock, Tag } from "lucide-react";
import type { BlogPost } from "@/lib/blog-data";

export default function BlogGrid({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {posts.map((post) => (
        <Link
          key={post.slug}
          href={`/blog/${post.slug}`}
          className="flex flex-col rounded-2xl overflow-hidden"
          style={{
            backgroundColor: "var(--bg-card)",
            border: "1px solid var(--color-border)",
            transition: "border-color 0.2s, transform 0.2s, box-shadow 0.2s",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.borderColor = "rgba(230,57,70,0.35)";
            el.style.transform = "translateY(-4px)";
            el.style.boxShadow = "0 16px 40px rgba(0,0,0,0.3)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.borderColor = "var(--color-border)";
            el.style.transform = "translateY(0)";
            el.style.boxShadow = "none";
          }}
        >
          {/* Image placeholder */}
          <div
            className="flex items-center justify-center"
            style={{
              height: "200px",
              backgroundColor: "var(--bg-surface)",
              borderBottom: "1px solid var(--color-border)",
            }}
          >
            <span style={{ fontSize: "3rem" }}>📝</span>
          </div>

          <div className="p-7 flex flex-col gap-4 flex-1">
            {/* Meta */}
            <div className="flex items-center gap-4 flex-wrap">
              <span
                className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full"
                style={{
                  backgroundColor: "rgba(230,57,70,0.1)",
                  color: "var(--color-accent)",
                  border: "1px solid rgba(230,57,70,0.2)",
                }}
              >
                <Tag size={10} />
                {post.category}
              </span>
              <span
                className="flex items-center gap-1.5 text-xs"
                style={{ color: "var(--color-muted)" }}
              >
                <Clock size={12} />
                {post.readTime}
              </span>
              <span className="text-xs" style={{ color: "var(--color-muted)" }}>
                {new Date(post.date).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>

            <h2
              className="font-bold leading-snug"
              style={{ color: "var(--color-text)", fontSize: "1.1875rem" }}
            >
              {post.title}
            </h2>

            <p
              className="leading-relaxed flex-1"
              style={{ color: "var(--color-muted)", fontSize: "0.9375rem" }}
            >
              {post.excerpt}
            </p>

            <span
              className="flex items-center gap-2 text-sm font-semibold mt-auto"
              style={{ color: "var(--color-accent)" }}
            >
              Read Article
              <ArrowRight size={14} />
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
