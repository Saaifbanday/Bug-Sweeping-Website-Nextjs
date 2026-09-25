import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MoreArticles from "@/components/blog/MoreArticles";
import BlogTableOfContents from "@/components/blog/BlogTableOfContents";
import { blogPosts } from "@/lib/blog-data";
import { serializeJsonLd } from "@/lib/json-ld";
import Image from "next/image";
import { ArrowLeft, Clock, Tag, Phone } from "lucide-react";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  const url = `https://www.bugsweepingtscm.com/blog/${slug}`;
  const title = post.seoTitle ?? `${post.title} | BugSweepingTSCM.com`;
  const description = post.metaDescription ?? post.excerpt;
  return {
    title: post.seoTitle ? { absolute: post.seoTitle } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title,
      description,
      locale: "en_IN",
      siteName: "BugSweepingTSCM.com",
      publishedTime: post.date,
      ...(post.dateModified ? { modifiedTime: post.dateModified } : {}),
      images: post.ogImage
        ? [{ url: post.ogImage, width: 1200, height: 630, alt: post.coverImageAlt ?? post.title }]
        : [{ url: post.coverImage, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [post.ogImage ?? post.coverImage],
    },
  };
}

// Builds a table of contents from the post's own H2 and H3 headings, giving each one a unique
// id so the links resolve. FAQ questions are skipped: the FAQ already has its own H2 entry.
function buildToc(html: string) {
  const items: { id: string; text: string; level: number }[] = [];
  const used = new Set<string>();
  const faqStart = html.indexOf('<div class="faq">');
  const faqEnd = faqStart === -1 ? -1 : html.indexOf("</div>", faqStart);

  const withIds = html.replace(
    /<(h[23])>([\s\S]*?)<\/\1>/g,
    (match, tag: string, inner: string, offset: number) => {
      const text = inner.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
      const base =
        text
          .toLowerCase()
          .replace(/[^a-z0-9\s-]/g, "")
          .trim()
          .replace(/\s+/g, "-")
          .slice(0, 60) || tag;
      let id = base;
      let n = 2;
      while (used.has(id)) id = `${base}-${n++}`;
      used.add(id);

      const insideFaq = faqStart !== -1 && offset > faqStart && offset < faqEnd;
      if (!insideFaq) items.push({ id, text, level: tag === "h2" ? 2 : 3 });
      return `<${tag} id="${id}">${inner}</${tag}>`;
    }
  );

  return { withIds, items };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const otherPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  // Every post gets heading ids and a table of contents built from its own headings.
  const { withIds: content, items: tocItems } = buildToc(post.content);

  const cta = post.cta ?? {
    heading: "Concerned About Your Privacy?",
    text: "Our certified TSCM specialists are available 24/7 for emergency sweeps across India. Every enquiry is treated with complete confidentiality.",
    label: "Book a Sweep on WhatsApp",
  };

  return (
    <>
      {post.jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(post.jsonLd) }}
        />
      )}
      <Header />
      <main className="flex-1">
        {/* Article header */}
        <section
          className="py-20"
          style={{
            background: "linear-gradient(135deg, #080d1a 0%, #0d1526 50%, #080d1a 100%)",
            borderBottom: "1px solid var(--color-border)",
          }}
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm mb-8"
              style={{ color: "var(--color-muted)" }}
            >
              <ArrowLeft size={14} />
              Back to Blog
            </Link>

            <div className="flex items-center gap-4 flex-wrap mb-6">
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

            <h1
              className="font-black leading-tight mb-6"
              style={{
                fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                color: "var(--color-text)",
                letterSpacing: "-0.025em",
              }}
            >
              {post.title}
            </h1>

            {post.publishedBy && (
              <p className="text-sm mb-6" style={{ color: "var(--color-muted)" }}>
                Published by {post.publishedBy} · Published:{" "}
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
                {post.dateModified && (
                  <>
                    {" "}· Updated:{" "}
                    <time dateTime={post.dateModified}>
                      {new Date(post.dateModified).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </time>
                  </>
                )}
              </p>
            )}

            <p
              className="leading-relaxed"
              style={{ color: "var(--color-muted)", fontSize: "1.125rem" }}
            >
              {post.excerpt}
            </p>
          </div>
        </section>

        {/* Cover image */}
        <div className="relative w-full" style={{ height: "380px", backgroundColor: "var(--bg-surface)" }}>
          <Image
            src={post.coverImage}
            alt={post.coverImageAlt ?? post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Article body, with the table of contents beside it on wide screens */}
        <section className="py-16" style={{ backgroundColor: "var(--bg-surface)" }}>
          <div className="blog-layout px-4 sm:px-6 lg:px-8">
            <BlogTableOfContents items={tocItems} />

            <div className="blog-article">
            <div
              className="prose-custom"
              style={{ color: "var(--color-muted)", fontSize: "1.0625rem", lineHeight: "1.85" }}
              dangerouslySetInnerHTML={{ __html: content }}
            />

            {/* CTA box */}
            <div
              className="mt-14 rounded-2xl p-8"
              style={{
                background: "linear-gradient(135deg, rgba(230,57,70,0.1) 0%, rgba(230,57,70,0.04) 100%)",
                border: "1px solid rgba(230,57,70,0.25)",
              }}
            >
              <h3
                className="text-xl font-bold mb-3"
                style={{ color: "var(--color-text)" }}
              >
                {cta.heading}
              </h3>
              <p className="mb-5" style={{ color: "var(--color-muted)", fontSize: "1rem" }}>
                {cta.text}
              </p>
              <a
                href="https://wa.me/918882732221"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <Phone size={16} />
                {cta.label}
              </a>
            </div>
            </div>
          </div>
        </section>

        <MoreArticles posts={otherPosts} />
      </main>
      <Footer />
    </>
  );
}
