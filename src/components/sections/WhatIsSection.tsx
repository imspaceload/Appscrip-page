export default function WhatIsSection() {
  const features = [
    {
      icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>),
      title: "Instant truck availability",
      description: "Shippers can book trucks on-demand within minutes.",
    },
    {
      icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>),
      title: "Real-time visibility",
      description: "Live GPS tracking of vehicles and shipments.",
    },
    {
      icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a10 10 0 0110 10 10 10 0 01-10 10A10 10 0 012 12 10 10 0 0112 2z" /><path d="M12 6v6l4 2" /></svg>),
      title: "Automated matching",
      description: "AI-powered algorithms connect loads with available carriers.",
    },
    {
      icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg>),
      title: "Digital documentation",
      description: "Paperless Bill of Lading (BOL), Proof of Pickup (POP), and Proof of Delivery (POD).",
    },
    {
      icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" /></svg>),
      title: "Dynamic pricing",
      description: "Automated fare calculation based on distance, weight, and market demand.",
    },
  ];

  return (
    <section className="section" id="what-is" aria-labelledby="what-is-heading">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="section-label">Overview</p>
            <h2 id="what-is-heading" className="text-[1.875rem] md:text-[2.25rem] font-bold text-[var(--color-secondary)] mb-5 leading-[1.2] tracking-[-0.01em]">
              What is On-Demand Trucking App Development?
            </h2>
            <p className="text-[15px] text-[var(--color-gray-600)] leading-relaxed mb-8">
              On-demand trucking app development is the process of creating
              custom mobile and web applications that connect shippers with
              carriers in real-time, enabling instant truck booking, live
              tracking, and automated logistics management. Unlike traditional
              Transportation Management Systems (TMS), on-demand trucking apps
              provide:
            </p>
            <div className="space-y-2 mb-8">
              {features.map((f) => (
                <div key={f.title} className="flex gap-3.5 items-start p-3 rounded-xl hover:bg-[var(--color-gray-50)] transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-[rgba(67,97,238,0.08)] text-[var(--color-primary)] flex items-center justify-center shrink-0 mt-0.5">{f.icon}</div>
                  <div>
                    <h3 className="text-[15px] font-semibold text-[var(--color-secondary)] mb-0.5">{f.title}</h3>
                    <p className="text-[13px] text-[var(--color-gray-500)] leading-relaxed">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="callout">
              <p className="text-[13px] font-semibold text-[var(--color-primary)] mb-1">Key difference from traditional TMS</p>
              <p className="text-[13px] text-[var(--color-gray-600)] leading-relaxed">
                While traditional TMS focuses on planning and optimization,
                on-demand trucking apps prioritize speed, flexibility, and
                real-time execution&mdash;similar to how Uber transformed taxi services.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop&q=80" alt="Fleet of trucks on a highway representing on-demand logistics technology" width={800} height={600} className="w-full h-auto object-cover" loading="lazy" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-lg px-5 py-3.5 hidden md:block">
              <p className="text-2xl font-bold text-[var(--color-primary)]">85%</p>
              <p className="text-[11px] text-[var(--color-gray-500)]">Faster than paper docs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
