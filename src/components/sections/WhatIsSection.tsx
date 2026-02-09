export default function WhatIsSection() {
  const features = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      title: "Instant truck availability",
      description:
        "Shippers can book trucks on-demand within minutes.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      title: "Real-time visibility",
      description:
        "Live GPS tracking of vehicles and shipments.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2a10 10 0 0110 10 10 10 0 01-10 10A10 10 0 012 12 10 10 0 0112 2z" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
      title: "Automated matching",
      description:
        "AI-powered algorithms connect loads with available carriers.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
        </svg>
      ),
      title: "Digital documentation",
      description:
        "Paperless Bill of Lading (BOL), Proof of Pickup (POP), and Proof of Delivery (POD).",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
        </svg>
      ),
      title: "Dynamic pricing",
      description:
        "Automated fare calculation based on distance, weight, and market demand.",
    },
  ];

  return (
    <section className="section" id="what-is" aria-labelledby="what-is-heading">
      <div className="container mx-auto px-6 max-w-[1280px]">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <h2
              id="what-is-heading"
              className="text-3xl md:text-4xl font-bold text-[var(--color-secondary)] mb-6 leading-tight"
            >
              What is On-Demand Trucking App Development?
            </h2>

            <p className="text-base text-gray-700 leading-relaxed mb-6">
              On-demand trucking app development is the process of creating
              custom mobile and web applications that connect shippers with
              carriers in real-time, enabling instant truck booking, live
              tracking, and automated logistics management. Unlike traditional
              Transportation Management Systems (TMS), on-demand trucking apps
              provide:
            </p>

            <div className="space-y-4">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex gap-4 items-start p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--color-secondary)] mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Key Insight Callout */}
            <div className="mt-8 p-5 bg-blue-50 border-l-4 border-[var(--color-primary)] rounded-r-lg">
              <p className="text-sm font-semibold text-[var(--color-primary)] mb-1">
                Key difference from traditional TMS
              </p>
              <p className="text-sm text-gray-700">
                While traditional TMS focuses on planning and optimization,
                on-demand trucking apps prioritize speed, flexibility, and
                real-time execution&mdash;similar to how Uber transformed taxi
                services.
              </p>
            </div>
          </div>

          {/* Right: Image Placeholder */}
          <div>
            <div className="img-placeholder aspect-[4/3] rounded-2xl">
              <svg
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
              <p className="mt-2 text-sm">
                Infographic: Traditional TMS vs On-Demand Trucking App
              </p>
              <p className="text-xs text-gray-400">
                (Replace with comparison infographic: 800x600 recommended)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
