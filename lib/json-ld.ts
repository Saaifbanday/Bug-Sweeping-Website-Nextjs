// Shared JSON-LD helpers for blog posts and location pages.

// JSON.stringify does not escape "<", so a string containing "</script>" could break out of the tag.
export function serializeJsonLd(data: Record<string, unknown>) {
  return JSON.stringify(data)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
}

// Builds a FAQPage node from the same array that renders the visible FAQ, so the two always match.
export function faqPageNode(faqs: { q: string; a: string }[], id: string) {
  return {
    "@type": "FAQPage",
    "@id": id,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
