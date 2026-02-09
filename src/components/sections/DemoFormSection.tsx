import Link from "next/link";

export default function DemoFormSection() {
  return (
    <section
      className="section bg-gradient-to-br from-[var(--color-secondary)] via-[#1b2838] to-[#0a1628] text-white"
      id="demo"
      aria-labelledby="demo-heading"
    >
      <div className="container mx-auto px-6 max-w-[1280px]">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            <h2
              id="demo-heading"
              className="text-3xl md:text-4xl font-bold mb-4 leading-tight"
            >
              Get Your Free Demo &amp; Consultation
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              See Appscrip&apos;s on-demand trucking platform in action.
              Schedule a free 15-minute consultation with our logistics
              technology experts.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Live walkthrough of shipper, carrier, and admin apps",
                "Custom pricing based on your requirements",
                "Technical architecture review",
                "Timeline and roadmap planning",
                "Q&A with our logistics domain experts",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    className="text-[var(--color-accent)] shrink-0"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm text-gray-300">{item}</span>
                </div>
              ))}
            </div>

            {/* Video Placeholder */}
            <div className="video-placeholder aspect-video max-w-md rounded-xl">
              <div className="play-btn cursor-pointer" style={{ width: 60, height: 60 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-gray-300 text-xs z-10">
                Client Testimonial Video Placeholder
              </p>
              <p className="text-gray-500 text-xs z-10">
                (Replace with testimonial video: 640x360 recommended)
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-xl font-bold text-[var(--color-secondary)] mb-2">
              Schedule Your Free Demo
            </h3>
            <p className="text-sm text-gray-500 mb-6">
              Fill out the form and our team will get back to you within 24
              hours.
            </p>

            <form
              className="space-y-4"
              action="https://appscrip.com/contact-us/"
              method="GET"
            >
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm text-gray-800 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Business Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="john@company.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm text-gray-800 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm text-gray-800 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Company Name *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  placeholder="Your Company"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm text-gray-800 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="solution"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Interested In *
                </label>
                <select
                  id="solution"
                  name="solution"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm text-gray-800 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all bg-white"
                >
                  <option value="">Select a solution</option>
                  <option value="white-label">
                    White-Label Trucking App ($15K-$40K)
                  </option>
                  <option value="custom">
                    Custom Development ($75K-$250K+)
                  </option>
                  <option value="consultation">
                    Free Consultation First
                  </option>
                  <option value="pricing">Pricing Information</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Tell us about your project
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  placeholder="Describe your logistics business and what you're looking to build..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm text-gray-800 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full py-4 text-base"
              >
                Get Your Free Demo
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>

              <p className="text-xs text-gray-400 text-center">
                By submitting this form, you agree to our{" "}
                <Link
                  href="https://appscrip.com/privacy-policy/"
                  className="text-[var(--color-primary)] hover:underline no-underline"
                >
                  Privacy Policy
                </Link>
                . No spam, ever.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
