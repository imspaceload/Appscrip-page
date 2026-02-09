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
      <div className="container mx-auto px-6 max-w-[1280px]">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2
            id="comparison-heading"
            className="text-3xl md:text-4xl font-bold text-[var(--color-secondary)] mb-4 leading-tight"
          >
            How Appscrip&apos;s On-Demand Trucking Apps Differ from Traditional
            TMS
          </h2>
          <p className="text-lg text-gray-600">
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
                  <td className="text-gray-500">{row.tms}</td>
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
              className="bg-white rounded-xl p-4 shadow-sm border border-gray-100"
            >
              <h3 className="font-semibold text-[var(--color-secondary)] mb-3 text-sm">
                {row.feature}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-xs text-gray-400 mb-1">Traditional TMS</p>
                  <p className="text-sm text-gray-500">{row.tms}</p>
                </div>
                <div>
                  <p className="text-xs text-[var(--color-primary)] mb-1">
                    On-Demand App
                  </p>
                  <p className="text-sm text-[var(--color-primary)] font-medium">
                    {row.onDemand}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Insight */}
        <div className="max-w-4xl mx-auto mt-8 p-5 bg-blue-50 border-l-4 border-[var(--color-primary)] rounded-r-lg">
          <p className="text-sm font-semibold text-[var(--color-primary)] mb-1">
            Key Insight
          </p>
          <p className="text-sm text-gray-700">
            On-demand trucking apps complement TMS rather than replace it. Many
            companies use TMS for planning and on-demand apps for execution.
          </p>
        </div>
      </div>
    </section>
  );
}
