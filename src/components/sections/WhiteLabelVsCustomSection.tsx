export default function WhiteLabelVsCustomSection() {
  return (
    <section
      className="section"
      id="pricing"
      aria-labelledby="pricing-heading"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-label">Pricing</span>
          <h2
            id="pricing-heading"
            className="text-[1.875rem] md:text-[2.25rem] font-bold text-[var(--color-secondary)] leading-[1.2] tracking-[-0.01em] mb-4"
          >
            White-Label vs. Custom Development: What&apos;s Right for You?
          </h2>
          <p className="text-[15px] text-[var(--color-gray-600)]">
            Choose the approach that matches your timeline, budget, and business
            requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {/* White-Label Card */}
          <div className="relative border-2 border-[var(--color-primary)] rounded-2xl overflow-hidden flex flex-col">
            <div className="bg-[var(--color-primary)] text-white text-center py-2 text-[13px] font-semibold">
              Most Popular
            </div>
            <div className="p-8 flex flex-col flex-1">
              <h3 className="text-xl font-bold text-[var(--color-secondary)] mb-2">
                White-Label Solution
              </h3>
              <p className="text-[13px] text-[var(--color-primary)] font-semibold mb-4">
                Faster Launch
              </p>
              <p className="text-[15px] text-[var(--color-gray-600)] mb-6">
                Best for: Entrepreneurs and companies wanting to launch quickly
              </p>

              <div className="mb-6">
                <h4 className="text-[13px] font-semibold text-[var(--color-secondary)] mb-3 uppercase tracking-wider">
                  Advantages
                </h4>
                <ul className="space-y-3 list-none m-0 p-0">
                  {[
                    "Time to market: 8-12 weeks from purchase to launch",
                    "Cost-effective: 60-70% less than custom development",
                    "Proven features: Battle-tested functionality from 1,500+ deployments",
                    "100% customizable: Rebrand with your logo, colors, and domain",
                    "IP rights included: You own the code and platform completely",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-[15px] text-[var(--color-gray-600)]">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        className="text-[var(--color-accent)] shrink-0 mt-0.5"
                        fill="currentColor"
                      >
                        <path d="M8 1a7 7 0 100 14A7 7 0 008 1zm3.354 5.354l-4 4a.5.5 0 01-.708 0l-2-2a.5.5 0 01.708-.708L7 9.293l3.646-3.647a.5.5 0 01.708.708z" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-[13px] font-semibold text-[var(--color-gray-600)] mb-3 uppercase tracking-wider">
                  Limitations
                </h4>
                <ul className="space-y-2 list-none m-0 p-0">
                  {[
                    "Core architecture is predetermined",
                    "Extremely unique features may require custom modules",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-[15px] text-[var(--color-gray-600)] opacity-70">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        className="shrink-0 mt-0.5"
                        fill="currentColor"
                      >
                        <path d="M8 1a7 7 0 100 14A7 7 0 008 1zm0 10.5a.75.75 0 110-1.5.75.75 0 010 1.5zM8.75 8a.75.75 0 01-1.5 0V5a.75.75 0 011.5 0v3z" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-[var(--color-gray-200)] mt-auto">
                <p className="text-[13px] text-[var(--color-gray-600)] mb-1">Starting from</p>
                <p className="text-[2rem] font-bold text-[var(--color-secondary)]">
                  $15,000 <span className="text-[13px] font-normal text-[var(--color-gray-600)]">- $40,000</span>
                </p>
              </div>
            </div>
          </div>

          {/* Custom Development Card */}
          <div className="border border-[var(--color-gray-200)] rounded-2xl overflow-hidden flex flex-col">
            <div className="bg-gray-100 text-[var(--color-gray-600)] text-center py-2 text-[13px] font-semibold">
              Enterprise
            </div>
            <div className="p-8 flex flex-col flex-1">
              <h3 className="text-xl font-bold text-[var(--color-secondary)] mb-2">
                Full Custom Development
              </h3>
              <p className="text-[13px] text-[var(--color-gray-600)] font-semibold mb-4">
                Maximum Flexibility
              </p>
              <p className="text-[15px] text-[var(--color-gray-600)] mb-6">
                Best for: Enterprises with unique workflows or advanced
                requirements
              </p>

              <div className="mb-6">
                <h4 className="text-[13px] font-semibold text-[var(--color-secondary)] mb-3 uppercase tracking-wider">
                  Advantages
                </h4>
                <ul className="space-y-3 list-none m-0 p-0">
                  {[
                    "Complete customization: Build any feature imaginable",
                    "Proprietary technology: Own exclusive innovations",
                    "Legacy integration: Connect with existing enterprise systems",
                    "Competitive differentiation: Create features competitors can't replicate",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-[15px] text-[var(--color-gray-600)]">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        className="text-[var(--color-accent)] shrink-0 mt-0.5"
                        fill="currentColor"
                      >
                        <path d="M8 1a7 7 0 100 14A7 7 0 008 1zm3.354 5.354l-4 4a.5.5 0 01-.708 0l-2-2a.5.5 0 01.708-.708L7 9.293l3.646-3.647a.5.5 0 01.708.708z" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-[13px] font-semibold text-[var(--color-gray-600)] mb-3 uppercase tracking-wider">
                  Considerations
                </h4>
                <ul className="space-y-2 list-none m-0 p-0">
                  {[
                    "Development time: 4-9 months",
                    "Higher investment required",
                    "Requires detailed specification phase",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-[15px] text-[var(--color-gray-600)] opacity-70">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        className="shrink-0 mt-0.5"
                        fill="currentColor"
                      >
                        <path d="M8 1a7 7 0 100 14A7 7 0 008 1zm0 10.5a.75.75 0 110-1.5.75.75 0 010 1.5zM8.75 8a.75.75 0 01-1.5 0V5a.75.75 0 011.5 0v3z" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-[var(--color-gray-200)] mt-auto">
                <p className="text-[13px] text-[var(--color-gray-600)] mb-1">Starting from</p>
                <p className="text-[2rem] font-bold text-[var(--color-secondary)]">
                  $75,000{" "}
                  <span className="text-[13px] font-normal text-[var(--color-gray-600)]">
                    - $250,000+
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
