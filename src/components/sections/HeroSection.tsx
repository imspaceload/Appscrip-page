import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-[var(--color-secondary)] via-[#132238] to-[#0a1628] text-white"
      aria-label="Hero"
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--color-primary)] rounded-full blur-[200px] opacity-[0.07]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--color-accent)] rounded-full blur-[180px] opacity-[0.05]" />

      <div className="relative z-10 mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center min-h-[calc(100vh-72px)] py-16 lg:py-20">
          {/* Left */}
          <div className="max-w-[560px]">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 text-[13px] text-gray-400 list-none">
                <li><Link href="https://appscrip.com" className="hover:text-white no-underline text-gray-400 transition-colors">Home</Link></li>
                <li className="text-gray-600">/</li>
                <li><Link href="https://appscrip.com/white-label-truck-booking-app-development/" className="hover:text-white no-underline text-gray-400 transition-colors">Trucking &amp; Logistics</Link></li>
                <li className="text-gray-600">/</li>
                <li className="text-[var(--color-primary-light)]">On-Demand Trucking App</li>
              </ol>
            </nav>

            <h1 className="text-[2.5rem] md:text-[3rem] lg:text-[3.375rem] font-extrabold leading-[1.12] mb-5 tracking-[-0.02em]">
              Revolutionize Your B2B Logistics with{" "}
              <span className="gradient-text">On-Demand Trucking App Development</span>
            </h1>

            <p className="text-lg text-[var(--color-accent)] font-semibold mb-3">
              Launch your custom trucking platform in weeks, not months
            </p>

            <p className="text-[15px] text-gray-400 leading-relaxed mb-8 max-w-[500px]">
              Transform your logistics business with a fully-customized,
              white-label truck booking app that integrates real-time tracking,
              automated dispatching, and seamless payment processing.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <Link href="#demo" className="btn-primary px-8 py-[14px]">Get Your Free Demo</Link>
              <Link href="#pricing" className="btn-secondary !border-white/20 !text-white hover:!bg-white/10 hover:!border-white/40 px-8 py-[14px]">View Pricing</Link>
            </div>

            {/* Trust strip */}
            <div className="flex flex-wrap items-center gap-5 text-[13px] text-gray-400">
              <div className="flex items-center gap-1.5">
                <div className="flex gap-px">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg key={s} width="14" height="14" viewBox="0 0 20 20" fill={s <= 4 ? "#FBBF24" : "none"} stroke="#FBBF24" strokeWidth="1.5">
                      <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.28l-4.77 2.51.91-5.32L2.27 6.7l5.34-.78L10 1z" />
                    </svg>
                  ))}
                </div>
                <span className="font-semibold text-gray-300">4.9/5 Rating</span>
              </div>
              <span className="w-px h-3.5 bg-gray-700" />
              <span>100% Customizable</span>
              <span className="w-px h-3.5 bg-gray-700" />
              <span>Full IP Ownership</span>
            </div>
          </div>

          {/* Right — YouTube */}
          <div className="relative lg:pl-4">
            <div className="video-embed shadow-2xl">
              <iframe
                src="https://www.youtube.com/embed/6FmE55ooiBQ?rel=0&modestbranding=1"
                title="Appscrip Truckr - On-Demand Trucking App Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>

            <div className="absolute -bottom-5 -left-4 bg-white rounded-2xl shadow-xl px-5 py-4 hidden lg:flex items-center gap-3 z-20">
              <div className="w-11 h-11 rounded-full bg-emerald-50 flex items-center justify-center">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
              </div>
              <div>
                <p className="text-xl font-bold text-gray-900 leading-tight">1,500+</p>
                <p className="text-[11px] text-gray-500">Successful Deployments</p>
              </div>
            </div>

            <div className="absolute -top-3 -right-3 bg-white rounded-2xl shadow-xl px-5 py-4 hidden lg:flex items-center gap-3 z-20">
              <div className="w-11 h-11 rounded-full bg-blue-50 flex items-center justify-center">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4361ee" strokeWidth="2.5"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
              </div>
              <div>
                <p className="text-xl font-bold text-gray-900 leading-tight">8-12</p>
                <p className="text-[11px] text-gray-500">Weeks to Launch</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
