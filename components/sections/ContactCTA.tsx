import { Phone, ArrowRight } from "lucide-react";

interface ContactCTAProps {
  title?: string;
  subtitle?: string;
  variant?: "dark" | "accent";
}

export default function ContactCTA({
  title = "You Should Contact Us for Professional Bug Sweep Services",
  subtitle,
  variant = "dark",
}: ContactCTAProps) {
  const isDark = variant === "dark";

  return (
    <section
      className="py-14"
      style={{
        background: isDark
          ? "linear-gradient(135deg, var(--bg-surface) 0%, var(--bg-card) 100%)"
          : "linear-gradient(135deg, var(--color-accent) 0%, #c1121f 100%)",
        borderTop: "1px solid var(--color-border)",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h2
              className="text-xl md:text-2xl font-bold mb-2"
              style={{ color: isDark ? "var(--color-text)" : "#fff" }}
            >
              {title}
            </h2>
            {subtitle && (
              <p
                className="text-sm"
                style={{ color: isDark ? "var(--color-muted)" : "rgba(255,255,255,0.8)" }}
              >
                {subtitle}
              </p>
            )}
          </div>
          <div className="shrink-0">
            <a
              href="https://wa.me/918882732221"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold px-6 py-3 rounded transition-all"
              style={
                isDark
                  ? {
                      backgroundColor: "var(--color-accent)",
                      color: "#fff",
                    }
                  : {
                      backgroundColor: "#fff",
                      color: "var(--color-accent)",
                    }
              }
            >
              <Phone size={16} />
              Contact Us Now
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
