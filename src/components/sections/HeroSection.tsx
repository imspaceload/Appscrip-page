import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-[var(--color-secondary)] via-[#1b2838] to-[#0a1628] text-white"
      aria-label="Hero"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 25%, rgba(67,97,238,0.3) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(0,201,167,0.2) 0%, transparent 50%)",
          }}
        />
      </div>

      <div className="container mx-auto px-6 max-w-[1280px] relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-72px)] py-16 lg:py-24">
          {/* Left: Content */}
          <div className="max-w-xl">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-gray-400 list-none m-0 p-0">
                <li>
                  <Link href="https://appscrip.com" className="hover:text-white no-underline text-gray-400">
                    Home
                  </Link>
                </li>
                <li>/</li>
                <li>
                  <Link
                    href="https://appscrip.com/white-label-truck-booking-app-development/"
                    className="hover:text-white no-underline text-gray-400"
                  >
                    Trucking &amp; Logistics
                  </Link>
                </li>
                <li>/</li>
                <li className="text-[var(--color-primary-light)]">On-Demand Trucking App</li>
              </ol>
            </nav>

            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.15] mb-4 tracking-tight">
              Revolutionize Your B2B Logistics with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary-light)] to-[var(--color-accent)]">
                On-Demand Trucking App Development
              </span>
            </h1>

            <p className="text-lg md:text-xl text-[var(--color-accent)] font-semibold mb-4">
              Launch your custom trucking platform in weeks, not months
            </p>

            <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-8">
              Transform your logistics business with a fully-customized,
              white-label truck booking app that integrates real-time tracking,
              automated dispatching, and seamless payment processing.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="#demo" className="btn-primary text-base px-8 py-4">
                Get Your Free Demo
              </Link>
              <Link href="#pricing" className="btn-secondary !border-white/30 !text-white hover:!bg-white/10 text-base px-8 py-4">
                View Pricing
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300">
              <div className="flex items-center gap-1.5">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      width="16"
                      height="16"
                      viewBox="0 0 20 20"
                      fill={star <= 4 ? "#FBBF24" : "none"}
                      stroke="#FBBF24"
                    >
                      <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.28l-4.77 2.51.91-5.32L2.27 6.7l5.34-.78L10 1z" />
                    </svg>
                  ))}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="#FBBF24"
                  >
                    <defs>
                      <linearGradient id="halfStar">
                        <stop offset="90%" stopColor="#FBBF24" />
                        <stop offset="90%" stopColor="transparent" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.28l-4.77 2.51.91-5.32L2.27 6.7l5.34-.78L10 1z"
                      fill="url(#halfStar)"
                      stroke="#FBBF24"
                    />
                  </svg>
                </div>
                <span className="font-semibold">4.9/5 Rating</span>
              </div>
              <div className="w-px h-4 bg-gray-600" />
              <span>100% Customizable</span>
              <div className="w-px h-4 bg-gray-600" />
              <span>Full IP Ownership</span>
            </div>
          </div>

          {/* Right: Hero Image/Video Placeholder */}
          <div className="relative">
            <div className="video-placeholder aspect-video rounded-2xl shadow-2xl">
              <div className="play-btn cursor-pointer">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="white"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-gray-300 text-sm z-10">
                Product Demo Video Placeholder
              </p>
              <p className="text-gray-500 text-xs z-10">
                (Replace with actual demo video: 1280x720 recommended)
              </p>
            </div>

            {/* Floating Stats Cards */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 hidden lg:flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#16a34a"
                  strokeWidth="2"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">1,500+</p>
                <p className="text-xs text-gray-500">Successful Deployments</p>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl p-4 hidden lg:flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#4361ee"
                  strokeWidth="2"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">8-12</p>
                <p className="text-xs text-gray-500">Weeks to Launch</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
