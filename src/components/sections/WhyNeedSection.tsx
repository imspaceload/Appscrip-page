/* eslint-disable @next/next/no-img-element */
export default function WhyNeedSection() {
  const challenges = [
    {
      number: "01",
      title: "Reduced Dead Heading",
      savings: "30-40% Cost Savings",
      description:
        "Dead heading — when trucks return empty after delivery — costs the industry $50+ billion annually. On-demand apps match return loads automatically, reducing empty miles by up to 40%.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
    },
    {
      number: "02",
      title: "Real-Time Freight Visibility",
      savings: "83% Shipper Demand",
      description:
        "83% of shippers demand real-time tracking. On-demand apps provide live GPS tracking, automated status updates, and predictive ETAs.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Digital Documentation Compliance",
      savings: "85% Time Reduction",
      description:
        "Manual paperwork costs logistics companies 15-20 hours per week. Digital BOL, POD, and POP reduce documentation time by 85%.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
        </svg>
      ),
    },
    {
      number: "04",
      title: "Capacity Optimization",
      savings: "20-35% Cost Reduction",
      description:
        "FTL (Full Truckload) and LTL (Less Than Truckload) consolidation features maximize truck capacity, reducing costs by 20-35%.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="1" y="3" width="15" height="13" />
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      ),
    },
    {
      number: "05",
      title: "Faster Payment Cycles",
      savings: "24-48 Hour Payments",
      description:
        "Integration with freight factoring APIs accelerates carrier payments from 30-60 days to 24-48 hours.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
        </svg>
      ),
    },
  ];

  return (
    <section
      className="section-alt"
      id="why-need"
      aria-labelledby="why-need-heading"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-label">Industry Challenges</span>
          <h2
            id="why-need-heading"
            className="text-[1.875rem] md:text-[2.25rem] font-bold text-[var(--color-secondary)] mb-4 leading-tight"
          >
            Why B2B Logistics Companies Need On-Demand Trucking Apps in 2025
          </h2>
          <p className="text-[15px] text-[var(--color-gray-600)]">
            The logistics industry faces critical challenges that on-demand
            trucking apps solve.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {challenges.map((item) => (
            <article
              key={item.number}
              className="feature-card group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <span className="text-[13px] font-bold uppercase tracking-wider text-[var(--color-primary)]">
                  {item.savings}
                </span>
              </div>
              <h3 className="text-xl font-bold text-[var(--color-secondary)] mb-3">
                {item.title}
              </h3>
              <p className="text-[15px] text-[var(--color-gray-600)] leading-relaxed">
                {item.description}
              </p>
            </article>
          ))}

          {/* Unsplash Image Card */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&h=400&fit=crop&q=80"
              alt="Industry Statistics Infographic"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
