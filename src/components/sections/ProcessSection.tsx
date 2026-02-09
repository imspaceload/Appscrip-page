import Link from "next/link";

export default function ProcessSection() {
  const steps = [
    {
      step: 1,
      title: "Discovery & Consultation",
      timeline: "Week 1",
      description: "Free consultation to understand your business model:",
      items: [
        "Analyze your current logistics workflows",
        "Identify pain points and inefficiencies",
        "Define target users (shippers, carriers, dispatchers)",
        "Map out required features and integrations",
        "Create technical requirements document",
      ],
      cta: "Schedule Your Free Consultation",
      ctaLink: "#demo",
    },
    {
      step: 2,
      title: "Custom Design & Development",
      timeline: "Weeks 2-8",
      description: "We build your app from the ground up:",
      items: [
        "UI/UX design: Create branded interfaces for shipper, carrier, and admin apps",
        "Backend development: Build scalable microservices architecture",
        "API integration: Connect payment gateways, maps, SMS, and third-party services",
        "White-label branding: Integrate your logo, colors, and company identity",
        "Security implementation: SSL encryption, JWT authentication, and reverse proxy setup",
      ],
      cta: "See Our Design Process",
      ctaLink: "#demo",
    },
    {
      step: 3,
      title: "Testing & Quality Assurance",
      timeline: "Weeks 9-10",
      description: "Rigorous testing ensures flawless performance:",
      items: [
        "Load testing with simulated high-traffic scenarios",
        "User acceptance testing (UAT) with your team",
        "Security audits and penetration testing",
        "Cross-platform compatibility testing (iOS, Android, Web)",
        "Performance optimization for speed and reliability",
      ],
      cta: "Learn About Our Testing Phase",
      ctaLink: "#demo",
    },
    {
      step: 4,
      title: "Deployment & Launch",
      timeline: "Week 11",
      description: "We handle the entire launch process:",
      items: [
        "Server setup on your infrastructure or cloud (AWS, Azure, Google Cloud)",
        "App Store and Google Play submission",
        "Web app deployment with SSL certificates",
        "Initial data migration from existing systems",
        "User onboarding and training materials",
      ],
      cta: "Get Ready to Launch",
      ctaLink: "#demo",
    },
    {
      step: 5,
      title: "Ongoing Support & Scaling",
      timeline: "Post-Launch",
      description: "Continuous improvement and technical support:",
      items: [
        "24/7 technical support for critical issues",
        "Monthly feature updates and enhancements",
        "Performance monitoring and optimization",
        "User training and documentation",
        "Scalability upgrades as your business grows",
      ],
      cta: "Explore Our Support Plans",
      ctaLink: "#demo",
    },
  ];

  return (
    <section
      className="section"
      id="process"
      aria-labelledby="process-heading"
    >
      <div className="container mx-auto px-6 max-w-[1280px]">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            id="process-heading"
            className="text-3xl md:text-4xl font-bold text-[var(--color-secondary)] mb-4 leading-tight"
          >
            How On-Demand Trucking App Development Works: The Appscrip Process
          </h2>
          <p className="text-lg text-gray-600">
            From discovery to launch in as little as 11 weeks — here&apos;s our
            proven development process.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.step}
              className={`relative flex gap-8 ${
                index < steps.length - 1 ? "pb-12" : ""
              }`}
            >
              {/* Timeline Line */}
              <div className="flex flex-col items-center shrink-0">
                <div className="w-14 h-14 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-bold text-lg shadow-lg z-10">
                  {step.step}
                </div>
                {index < steps.length - 1 && (
                  <div className="w-0.5 flex-1 bg-[var(--color-primary)]/20 mt-2" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pb-2">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold text-[var(--color-secondary)]">
                    {step.title}
                  </h3>
                  <span className="px-3 py-1 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-semibold rounded-full">
                    {step.timeline}
                  </span>
                </div>
                <p className="text-sm text-gray-700 mb-3">{step.description}</p>
                <ul className="space-y-2 mb-4 list-none m-0 p-0">
                  {step.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
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
                <Link
                  href={step.ctaLink}
                  className="text-sm font-semibold text-[var(--color-primary)] hover:underline no-underline inline-flex items-center gap-1"
                >
                  {step.cta}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>

                {/* Image placeholder for design/development step */}
                {step.step === 2 && (
                  <div className="mt-6 img-placeholder aspect-video rounded-xl max-w-lg">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <polyline points="21 15 16 10 5 21" />
                    </svg>
                    <p className="mt-2 text-sm">Design Process Illustration</p>
                    <p className="text-xs text-gray-400">
                      (Replace with design process image: 800x450 recommended)
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
