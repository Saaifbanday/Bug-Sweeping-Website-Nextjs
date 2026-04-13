import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/ui/PageHero";
import BlogGrid from "@/components/blog/BlogGrid";
import { blogPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Blog | BugSweepingTSCM.com — TSCM & Bug Sweep Insights",
  description:
    "Expert articles on bug sweeping, TSCM, hidden camera detection, corporate espionage, and privacy protection from India's leading TSCM specialists.",
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          label="Our Blog"
          title="TSCM Insights & Privacy Protection Tips"
          subtitle="Expert articles from India's leading bug sweep and technical surveillance countermeasure specialists."
          breadcrumbs={[{ label: "Blog", href: "#" }]}
        />

        <section className="py-24" style={{ backgroundColor: "var(--bg-surface)" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <BlogGrid posts={blogPosts} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
