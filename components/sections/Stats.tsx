const stats = [
  { value: "13", label: "Years in Practice Since 2013" },
  { value: "3,000+", label: "Cases Handled" },
  { value: "500+", label: "TSCM Sweeps Completed" },
  { value: "25 Cities", label: "Covered in Depth Across India" },
];

export default function Stats() {
  return (
    <section
      className="py-16"
      style={{
        background: "linear-gradient(135deg, var(--color-accent) 0%, #c1121f 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-4xl md:text-5xl font-black mb-2"
                style={{ color: "#fff" }}
              >
                {stat.value}
              </div>
              <div
                className="text-sm font-medium"
                style={{ color: "rgba(255,255,255,0.8)" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
