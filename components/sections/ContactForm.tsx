"use client";

import { useState, FormEvent } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      // Web3Forms — free static-site email service
      // Set NEXT_PUBLIC_WEB3FORMS_KEY in .env.local or Vercel env vars
      // Get your free key at: https://web3forms.com
      const key = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "WEB3FORMS_KEY";

      data.append("access_key", key);
      data.append("subject", "New Bug Sweep Enquiry — BugSweepingTSCM.com");
      data.append("from_name", "BugSweepingTSCM Website");

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });

      const json = await res.json();

      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        throw new Error(json.message ?? "Submission failed.");
      }
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong. Please try again or call us directly."
      );
    }
  }

  return (
    <div
      className="rounded-2xl p-8 md:p-10"
      style={{
        backgroundColor: "var(--bg-card)",
        border: "1px solid var(--color-border)",
      }}
    >
      <h3 className="text-2xl font-bold mb-2" style={{ color: "var(--color-text)" }}>
        Send Us a Message
      </h3>
      <p className="mb-8" style={{ color: "var(--color-muted)", fontSize: "1rem" }}>
        All messages are treated with complete confidentiality. We respond within 2–4 hours during business hours.
      </p>

      {status === "success" ? (
        <div
          className="rounded-xl p-8 flex flex-col items-center gap-4 text-center"
          style={{
            backgroundColor: "rgba(34,197,94,0.07)",
            border: "1px solid rgba(34,197,94,0.25)",
          }}
        >
          <CheckCircle2 size={48} style={{ color: "#22c55e" }} />
          <h4 className="text-xl font-bold" style={{ color: "var(--color-text)" }}>
            Message Sent Successfully
          </h4>
          <p style={{ color: "var(--color-muted)" }}>
            Thank you for reaching out. Our specialist will contact you within 2–4 hours.
            For urgent matters, call us directly at{" "}
            <a href="tel:+918882732221" style={{ color: "var(--color-accent)", fontWeight: 600 }}>
              +91 888 273 2221
            </a>
            .
          </p>
          <button
            className="btn-secondary mt-2"
            onClick={() => setStatus("idle")}
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Name + Email row */}
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-sm font-semibold"
                style={{ color: "var(--color-text)" }}
              >
                Your Name <span style={{ color: "var(--color-accent)" }}>*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Rajesh Malhotra"
                className="rounded-lg px-4 py-3 text-sm outline-none transition-all"
                style={{
                  backgroundColor: "var(--bg-surface)",
                  border: "1px solid var(--color-border)",
                  color: "var(--color-text)",
                  fontSize: "1rem",
                }}
                onFocus={(e) => (e.target.style.borderColor = "var(--color-accent)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--color-border)")}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-sm font-semibold"
                style={{ color: "var(--color-text)" }}
              >
                Your Email <span style={{ color: "var(--color-accent)" }}>*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@company.com"
                className="rounded-lg px-4 py-3 text-sm outline-none transition-all"
                style={{
                  backgroundColor: "var(--bg-surface)",
                  border: "1px solid var(--color-border)",
                  color: "var(--color-text)",
                  fontSize: "1rem",
                }}
                onFocus={(e) => (e.target.style.borderColor = "var(--color-accent)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--color-border)")}
              />
            </div>
          </div>

          {/* Phone + Location row */}
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="phone"
                className="text-sm font-semibold"
                style={{ color: "var(--color-text)" }}
              >
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                className="rounded-lg px-4 py-3 text-sm outline-none transition-all"
                style={{
                  backgroundColor: "var(--bg-surface)",
                  border: "1px solid var(--color-border)",
                  color: "var(--color-text)",
                  fontSize: "1rem",
                }}
                onFocus={(e) => (e.target.style.borderColor = "var(--color-accent)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--color-border)")}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="location"
                className="text-sm font-semibold"
                style={{ color: "var(--color-text)" }}
              >
                Your Location / City
              </label>
              <input
                id="location"
                name="location"
                type="text"
                placeholder="Mumbai, Delhi, Bengaluru…"
                className="rounded-lg px-4 py-3 text-sm outline-none transition-all"
                style={{
                  backgroundColor: "var(--bg-surface)",
                  border: "1px solid var(--color-border)",
                  color: "var(--color-text)",
                  fontSize: "1rem",
                }}
                onFocus={(e) => (e.target.style.borderColor = "var(--color-accent)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--color-border)")}
              />
            </div>
          </div>

          {/* Service type */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="service"
              className="text-sm font-semibold"
              style={{ color: "var(--color-text)" }}
            >
              Type of Sweep Required
            </label>
            <select
              id="service"
              name="service"
              className="rounded-lg px-4 py-3 text-sm outline-none transition-all appearance-none"
              style={{
                backgroundColor: "var(--bg-surface)",
                border: "1px solid var(--color-border)",
                color: "var(--color-muted)",
                fontSize: "1rem",
              }}
              onFocus={(e) => (e.target.style.borderColor = "var(--color-accent)")}
              onBlur={(e) => (e.target.style.borderColor = "var(--color-border)")}
            >
              <option value="">Select a service…</option>
              <option value="business">Business / Corporate Bug Sweep</option>
              <option value="residential">Residential Bug Sweep</option>
              <option value="audio">Audio Bug Sweep</option>
              <option value="video">Video Bug Sweep</option>
              <option value="telephone">Telephone / Mobile Sweep</option>
              <option value="vehicle">Vehicle GPS Sweep</option>
              <option value="full">Full Comprehensive Sweep</option>
              <option value="other">Other / Not Sure</option>
            </select>
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="text-sm font-semibold"
              style={{ color: "var(--color-text)" }}
            >
              Message <span style={{ color: "var(--color-accent)" }}>*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="Describe your concerns or what you need. Everything shared is treated with complete confidentiality…"
              className="rounded-lg px-4 py-3 text-sm outline-none transition-all resize-none"
              style={{
                backgroundColor: "var(--bg-surface)",
                border: "1px solid var(--color-border)",
                color: "var(--color-text)",
                fontSize: "1rem",
                lineHeight: "1.75",
              }}
              onFocus={(e) => (e.target.style.borderColor = "var(--color-accent)")}
              onBlur={(e) => (e.target.style.borderColor = "var(--color-border)")}
            />
          </div>

          {/* Error message */}
          {status === "error" && (
            <div
              className="flex items-start gap-3 rounded-lg p-4"
              style={{
                backgroundColor: "rgba(230,57,70,0.08)",
                border: "1px solid rgba(230,57,70,0.25)",
              }}
            >
              <AlertCircle size={18} style={{ color: "var(--color-accent)", flexShrink: 0, marginTop: "2px" }} />
              <p style={{ color: "var(--color-muted)", fontSize: "0.9375rem" }}>
                {errorMsg || "Something went wrong. Please try again or call +91 888 273 2221."}
              </p>
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={status === "sending"}
            className="btn-primary justify-center mt-2"
            style={{ opacity: status === "sending" ? 0.7 : 1 }}
          >
            {status === "sending" ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                Sending…
              </>
            ) : (
              <>
                <Send size={16} />
                Send Message
              </>
            )}
          </button>

          <p className="text-xs text-center" style={{ color: "var(--color-muted)" }}>
            By submitting this form, you agree to our{" "}
            <a href="/privacy-policy" style={{ color: "var(--color-accent)" }}>
              Privacy Policy
            </a>
            . Your information is never shared with third parties.
          </p>
        </form>
      )}
    </div>
  );
}
