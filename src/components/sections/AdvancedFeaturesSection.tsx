export default function AdvancedFeaturesSection() {
  const advancedFeatures = [
    {
      title: "Route Optimization Engine",
      description:
        "Automatically calculates the most efficient routes for multi-stop deliveries, reducing fuel costs by 15-25% and delivery times by 30-40%.",
      stat: "15-25%",
      statLabel: "Fuel Cost Reduction",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
        </svg>
      ),
    },
    {
      title: "Fleet Operator Module",
      description:
        "Enable fleet owners to manage multiple drivers, negotiate directly with shippers, assign loads strategically, and track all vehicles on a unified dashboard.",
      stat: "All-in-One",
      statLabel: "Fleet Dashboard",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 00-3-3.87" />
          <path d="M16 3.13a4 4 0 010 7.75" />
        </svg>
      ),
    },
    {
      title: "Enterprise Account System",
      description:
        "Create business customer profiles with negotiated pricing, credit lines, bulk load capabilities, and consolidated monthly invoicing.",
      stat: "Credit Lines",
      statLabel: "Per Shipper",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
          <line x1="1" y1="10" x2="23" y2="10" />
        </svg>
      ),
    },
    {
      title: "Value Collection at Delivery",
      description:
        "Enable shippers to request payment collection from receivers, with automatic remittance to shipper accounts.",
      stat: "Automated",
      statLabel: "Remittance",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
        </svg>
      ),
    },
    {
      title: "LTL Consolidation Intelligence",
      description:
        "AI matches partial loads heading in the same direction, maximizing truck capacity and reducing per-unit shipping costs.",
      stat: "AI-Powered",
      statLabel: "Load Matching",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      ),
    },
    {
      title: "Analytics Dashboard",
      description:
        "All analytics are powered by Apache Spark, delivering real-time big-data insights on loads, revenue, and performance.",
      stat: "Real-Time",
      statLabel: "Big Data Insights",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      ),
    },
  ];

  const platformFeatures = [
    "Invoices for enterprise accounts — generated automatically when a booking is completed",
    "Accounting system — track all finances for the platform and for each carrier individually",
    "Fleet operator module — browse active loads, negotiate rates, assign drivers, track everything live",
    "Credit line — set a credit limit per shipper; new bookings blocked until outstanding payment is cleared",
  ];

  return (
    <section
      className="section-alt"
      id="advanced-features"
      aria-labelledby="advanced-features-heading"
    >
      <div className="container mx-auto px-6 max-w-[1280px]">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            id="advanced-features-heading"
            className="text-3xl md:text-4xl font-bold text-[var(--color-secondary)] mb-4 leading-tight"
          >
            Advanced Features That Set Appscrip Apart
          </h2>
          <p className="text-lg text-gray-600">
            Go beyond basic logistics with intelligent features built for
            enterprise-scale operations.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {advancedFeatures.map((feature, index) => (
            <article key={index} className="feature-card group">
              <div className="flex justify-between items-start mb-4">
                <div className="w-14 h-14 rounded-2xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-[var(--color-primary)]">
                    {feature.stat}
                  </p>
                  <p className="text-xs text-gray-500">{feature.statLabel}</p>
                </div>
              </div>
              <h3 className="text-lg font-bold text-[var(--color-secondary)] mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </article>
          ))}
        </div>

        {/* Additional Platform Features */}
        <div className="bg-white rounded-2xl p-8 md:p-10 shadow-md border border-gray-100">
          <h3 className="text-xl font-bold text-[var(--color-secondary)] mb-6">
            Additional Platform Features
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {platformFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  className="text-[var(--color-accent)] shrink-0 mt-0.5"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-sm text-gray-700">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Video Placeholder */}
        <div className="mt-16">
          <div className="video-placeholder aspect-video max-w-4xl mx-auto rounded-2xl">
            <div className="play-btn cursor-pointer">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <p className="text-gray-300 text-sm z-10">
              Feature Walkthrough Video Placeholder
            </p>
            <p className="text-gray-500 text-xs z-10">
              (Replace with feature walkthrough video: 1280x720 recommended)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
