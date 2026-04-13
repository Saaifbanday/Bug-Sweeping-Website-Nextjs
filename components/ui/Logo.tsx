export default function Logo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const scales = { sm: 0.75, md: 1, lg: 1.3 };
  const s = scales[size];

  return (
    <div className="flex items-center gap-3" style={{ lineHeight: 1 }}>
      {/* Icon mark */}
      <svg
        width={Math.round(40 * s)}
        height={Math.round(44 * s)}
        viewBox="0 0 40 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Shield body */}
        <path
          d="M20 2L4 8.5V20.5C4 30.5 11.2 39.8 20 42C28.8 39.8 36 30.5 36 20.5V8.5L20 2Z"
          fill="#e63946"
        />
        <path
          d="M20 2L4 8.5V20.5C4 30.5 11.2 39.8 20 42C28.8 39.8 36 30.5 36 20.5V8.5L20 2Z"
          fill="url(#shieldGrad)"
        />
        {/* Outer scan ring */}
        <circle cx="20" cy="21" r="9" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" fill="none" />
        {/* Inner scan ring */}
        <circle cx="20" cy="21" r="5" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" fill="none" />
        {/* Center dot */}
        <circle cx="20" cy="21" r="2.5" fill="white" />
        {/* Scan line */}
        <line x1="20" y1="12" x2="20" y2="16" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="20" y1="26" x2="20" y2="30" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="11" y1="21" x2="15" y2="21" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="25" y1="21" x2="29" y2="21" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" />
        <defs>
          <linearGradient id="shieldGrad" x1="4" y1="2" x2="36" y2="42" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="rgba(255,255,255,0.15)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0.15)" />
          </linearGradient>
        </defs>
      </svg>

      {/* Text */}
      <div>
        <div
          style={{
            fontWeight: 900,
            fontSize: `${Math.round(15 * s)}px`,
            letterSpacing: "0.08em",
            color: "#f0f4ff",
            lineHeight: 1.1,
            textTransform: "uppercase",
          }}
        >
          Bug Sweeps
        </div>
        <div
          style={{
            fontSize: `${Math.round(10 * s)}px`,
            letterSpacing: "0.04em",
            color: "#e63946",
            lineHeight: 1.3,
            marginTop: "2px",
          }}
        >
          Debugging &amp; TSCM Services
        </div>
      </div>
    </div>
  );
}
