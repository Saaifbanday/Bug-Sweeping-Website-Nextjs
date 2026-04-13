import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

interface ZigZagItem {
  label: string;
  title: string;
  body: string;
  bullets?: string[];
  imageSrc?: string;          // pass real path when image is available
  imageAlt?: string;
  imagePlaceholderLabel?: string;  // shown in placeholder box
  cta?: { label: string; href: string };
}

interface ZigZagSectionProps {
  items: ZigZagItem[];
  bgAlternate?: boolean;       // alternate row bg between surface and primary
}

export default function ZigZagSection({ items, bgAlternate = false }: ZigZagSectionProps) {
  return (
    <>
      {items.map((item, idx) => {
        const isEven = idx % 2 === 0; // even = image left, odd = image right
        const bg = bgAlternate
          ? isEven
            ? "var(--bg-primary)"
            : "var(--bg-surface)"
          : idx % 2 === 0
          ? "var(--bg-primary)"
          : "var(--bg-surface)";

        return (
          <section key={item.title} style={{ backgroundColor: bg }} className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div
                className={`grid lg:grid-cols-2 gap-16 items-center ${
                  !isEven ? "lg:flex-row-reverse" : ""
                }`}
                style={{ direction: isEven ? "ltr" : "ltr" }}
              >
                {/* ── Image side ── */}
                <div className={isEven ? "lg:order-1" : "lg:order-2"}>
                  <div className="img-placeholder aspect-[4/3] w-full">
                    {item.imageSrc ? (
                      <Image
                        src={item.imageSrc}
                        alt={item.imageAlt ?? item.title}
                        fill
                        className="object-cover rounded-2xl"
                      />
                    ) : (
                      <>
                        <div
                          className="w-16 h-16 rounded-full flex items-center justify-center text-2xl"
                          style={{
                            backgroundColor: "rgba(230,57,70,0.1)",
                            border: "1px dashed rgba(230,57,70,0.3)",
                          }}
                        >
                          📸
                        </div>
                        <p className="text-sm text-center px-6" style={{ color: "var(--color-muted)" }}>
                          {item.imagePlaceholderLabel ?? `[ Image — ${item.title} ]`}
                        </p>
                      </>
                    )}
                  </div>
                </div>

                {/* ── Text side ── */}
                <div className={isEven ? "lg:order-2" : "lg:order-1"}>
                  <p className="section-label mb-3">{item.label}</p>
                  <h2 className="section-title mb-5">{item.title}</h2>
                  <p
                    className="mb-7 leading-relaxed"
                    style={{ color: "var(--color-muted)", fontSize: "1.0625rem" }}
                  >
                    {item.body}
                  </p>

                  {item.bullets && (
                    <ul className="flex flex-col gap-3 mb-8">
                      {item.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3">
                          <CheckCircle2
                            size={18}
                            style={{
                              color: "var(--color-accent)",
                              flexShrink: 0,
                              marginTop: "3px",
                            }}
                          />
                          <span style={{ color: "var(--color-muted)", fontSize: "1rem" }}>
                            {b}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {item.cta && (
                    <a href={item.cta.href} className="btn-primary">
                      {item.cta.label}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
