export default function WhyChooseSection() {
  const reasons = [
    {
      number: "01",
      title: "Non-Technical Founder Friendly",
      description:
        "We specialize in serving founders without technical backgrounds. Our team handles complex technical decisions, architecture planning, code quality and security, App Store compliance, and server management. You focus on your business — we handle the technology.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
    },
    {
      number: "02",
      title: "Proven Track Record",
      stats: [
        { value: "1,500+", label: "Successful deployments" },
        { value: "4.9/5", label: "Average client rating" },
        { value: "98%", label: "Customer retention rate" },
        { value: "Zero", label: "Critical production bugs (18+ months)" },
      ],
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "100% Ownership & IP Rights",
      description:
        "Unlike SaaS platforms where you rent the software: you own the complete source code, full intellectual property rights are transferred to your company, no ongoing licensing fees, freedom to modify or sell the platform, and no vendor lock-in.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0110 0v4" />
        </svg>
      ),
    },
    {
      number: "04",
      title: "Scalable Architecture",
      description:
        "Built with microservices and container technology: handle 10,000+ concurrent users, 99.9% uptime SLA, auto-scaling for traffic spikes, global CDN for fast loading worldwide, and multi-region deployment options.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      ),
    },
    {
      number: "05",
      title: "Enterprise-Grade Security",
      items: [
        "SSL encryption for all data transmission",
        "JWT authentication with token refresh mechanisms",
        "Keychain/Keystore for secure credential storage",
        "Reverse proxy setup protecting backend APIs",
        "Regular security audits by third-party firms",
        "OWASP compliance for web vulnerabilities",
        "PCI DSS compliance for payment processing",
      ],
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
    {
      number: "06",
      title: "Comprehensive Support",
      items: [
        "24/7 technical support for critical issues",
        "Dedicated account manager for enterprise clients",
        "Monthly check-ins to discuss improvements",
        "Free bug fixes during support period",
        "Detailed documentation for all features",
        "Video training for admins and users",
      ],
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
        </svg>
      ),
    },
    {
      number: "07",
      title: "Transparent Pricing",
      description:
        "No hidden fees or surprise charges. Clear deliverables for each package, detailed cost breakdown provided upfront, flexible payment terms available, no revenue sharing or transaction fees.",
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
      id="why-choose"
      aria-labelledby="why-choose-heading"
    >
      <div className="container mx-auto px-6 max-w-[1280px]">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            id="why-choose-heading"
            className="text-3xl md:text-4xl font-bold text-[var(--color-secondary)] mb-4 leading-tight"
          >
            Why Choose Appscrip for Trucking App Development?
          </h2>
          <p className="text-lg text-gray-600">
            Seven reasons logistics companies trust Appscrip to build their
            technology platforms.
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {reasons.map((reason) => (
            <article
              key={reason.number}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex gap-5">
                <div className="w-14 h-14 rounded-2xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center shrink-0">
                  {reason.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-bold text-[var(--color-primary)]">
                      {reason.number}
                    </span>
                    <h3 className="text-xl font-bold text-[var(--color-secondary)]">
                      {reason.title}
                    </h3>
                  </div>

                  {reason.description && (
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {reason.description}
                    </p>
                  )}

                  {reason.stats && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-3">
                      {reason.stats.map((stat) => (
                        <div
                          key={stat.label}
                          className="text-center p-3 bg-gray-50 rounded-lg"
                        >
                          <p className="text-xl font-bold text-[var(--color-primary)]">
                            {stat.value}
                          </p>
                          <p className="text-xs text-gray-500">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {reason.items && (
                    <ul className="grid sm:grid-cols-2 gap-2 mt-3 list-none m-0 p-0">
                      {reason.items.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-gray-600"
                        >
                          <svg
                            width="14"
                            height="14"
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
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Logos / Trust Badges Placeholder */}
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-500 mb-6">Trusted by logistics companies worldwide</p>
          <div className="img-placeholder h-24 max-w-3xl mx-auto rounded-xl">
            <p className="text-sm">Client Logo Carousel Placeholder</p>
            <p className="text-xs text-gray-400">
              (Replace with client logos: 6-8 logos recommended)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
