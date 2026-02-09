export default function ComparisonTableSection() {
  const rows = [
    { feature: "Booking Speed", tms: "24-48 hours", onDemand: "Instant (minutes)" },
    { feature: "Pricing", tms: "Manual quotes", onDemand: "Automated, real-time" },
    { feature: "Tracking", tms: "Periodic updates", onDemand: "Live GPS tracking" },
    { feature: "Documentation", tms: "Paper-based", onDemand: "100% digital" },
    { feature: "Carrier Network", tms: "Pre-contracted", onDemand: "Open marketplace" },
    { feature: "Scalability", tms: "Limited", onDemand: "Unlimited" },
    { feature: "User Interface", tms: "Desktop-only", onDemand: "Mobile-first" },
    { feature: "Integration", tms: "Complex, expensive", onDemand: "API-based, flexible" },
    { feature: "Cost", tms: "$50K-$500K+", onDemand: "$15K-$40K" },
    { feature: "Deployment", tms: "12-24 months", onDemand: "8-12 weeks" },
  ];

  return (
    <section
      className="section"
      id="comparison"
      aria-labelledby="comparison-heading"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="section-label">Comparison</span>
          <h2
            id="comparison-heading"
            className="text-[1.875rem] md:text-[2.25rem] font-bold text-[var(--color-secondary)] leading-[1.2] tracking-[-0.01em] mb-4"
          >
            How Appscrip&apos;s On-Demand Trucking Apps Differ from Traditional
            TMS
          </h2>
          <p className="text-[15px] text-[var(--color-gray-600)]">
            See how on-demand trucking apps outperform traditional TMS across
            every metric.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="max-w-4xl mx-auto hidden md:block">
          <table className="comparison-table" role="table">
            <thead>
              <tr>
                <th scope="col" className="w-1/3">Feature</th>
                <th scope="col" className="w-1/3">Traditional TMS</th>
                <th scope="col" className="w-1/3">On-Demand Trucking App</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.feature}>
                  <td className="font-semibold text-[var(--color-secondary)]">
                    {row.feature}
                  </td>
                  <td className="text-[var(--color-gray-600)]">{row.tms}</td>
                  <td className="text-[var(--color-primary)] font-medium">
                    {row.onDemand}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {rows.map((row) => (
            <div
              key={row.feature}
              className="bg-white rounded-xl p-4 border border-[var(--color-gray-200)]"
            >
              <h3 className="font-semibold text-[var(--color-secondary)] mb-3 text-[13px]">
                {row.feature}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-[13px] text-[var(--color-gray-600)] mb-1">Traditional TMS</p>
                  <p className="text-[15px] text-[var(--color-gray-600)]">{row.tms}</p>
                </div>
                <div>
                  <p className="text-[13px] text-[var(--color-primary)] mb-1">
                    On-Demand App
                  </p>
                  <p className="text-[15px] text-[var(--color-primary)] font-medium">
                    {row.onDemand}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Insight */}
        <div className="callout max-w-4xl mx-auto mt-8">
          <p className="text-[13px] font-semibold text-[var(--color-primary)] mb-1">
            Key Insight
          </p>
          <p className="text-[15px] text-[var(--color-gray-600)]">
            On-demand trucking apps complement TMS rather than replace it. Many
            companies use TMS for planning and on-demand apps for execution.
          </p>
        </div>
      </div>
    </section>
  );
}
