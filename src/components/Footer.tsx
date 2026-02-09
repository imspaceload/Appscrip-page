import Link from "next/link";

const footerLinks = {
  products: [
    { label: "On-Demand Delivery", href: "https://appscrip.com/on-demand-delivery-app/" },
    { label: "Trucking & Logistics", href: "https://appscrip.com/white-label-truck-booking-app-development/" },
    { label: "Load Board Software", href: "https://appscrip.com/white-label-load-board-software/" },
    { label: "eCommerce Marketplace", href: "https://appscrip.com/multivendor-ecommerce-marketplace/" },
    { label: "Super App Development", href: "https://appscrip.com/super-app-development/" },
    { label: "Service Marketplace", href: "https://appscrip.com/on-demand-services-marketplace/" },
  ],
  company: [
    { label: "About Us", href: "https://appscrip.com/about/" },
    { label: "Blog", href: "https://appscrip.com/blog/" },
    { label: "Contact Us", href: "https://appscrip.com/contact-us/" },
    { label: "Careers", href: "https://appscrip.com/careers/" },
  ],
  resources: [
    { label: "Custom App Development", href: "https://appscrip.com/custom-mobile-app-development/" },
    { label: "Augmented Reality", href: "https://appscrip.com/augmented-reality/" },
    { label: "AI Solutions", href: "https://appscrip.com/services/" },
    { label: "Privacy Policy", href: "https://appscrip.com/privacy-policy/" },
    { label: "Terms of Service", href: "https://appscrip.com/terms-of-service/" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[var(--color-secondary)] text-white">
      {/* CTA Banner */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-6 max-w-[1280px] py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build Your Trucking Platform?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Schedule a free consultation with our logistics technology experts
            and get a personalized demo of our trucking app solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#demo" className="btn-primary text-base">
              Get Your Free Demo
            </Link>
            <Link
              href="https://appscrip.com/contact-us/"
              className="btn-secondary !border-white !text-white hover:!bg-white hover:!text-[var(--color-secondary)] text-base"
            >
              Talk to Sales
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="container mx-auto px-6 max-w-[1280px] py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div>
            <Link
              href="https://appscrip.com"
              className="flex items-center gap-2 no-underline mb-6"
            >
              <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)] flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-bold text-white">appscrip</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Appscrip empowers startups and enterprises worldwide with
              innovative software solutions designed for growth. Cut development
              costs by 60% and launch in under 90 days.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/company/appscrip"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[var(--color-primary)] transition-colors"
                aria-label="LinkedIn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://twitter.com/appscrip"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[var(--color-primary)] transition-colors"
                aria-label="Twitter"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://github.com/appscrip-3embed"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[var(--color-primary)] transition-colors"
                aria-label="GitHub"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Products
            </h3>
            <ul className="list-none m-0 p-0 space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors no-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Company
            </h3>
            <ul className="list-none m-0 p-0 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors no-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Resources
            </h3>
            <ul className="list-none m-0 p-0 space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors no-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Contact */}
            <div className="mt-8">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
                Contact
              </h3>
              <a
                href="mailto:sales@appscrip.com"
                className="text-sm text-gray-300 hover:text-white transition-colors no-underline"
              >
                sales@appscrip.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 max-w-[1280px] py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            &copy; 2011&ndash;{new Date().getFullYear()} Appscrip. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="https://appscrip.com/privacy-policy/"
              className="text-sm text-gray-400 hover:text-white transition-colors no-underline"
            >
              Privacy Policy
            </Link>
            <Link
              href="https://appscrip.com/terms-of-service/"
              className="text-sm text-gray-400 hover:text-white transition-colors no-underline"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
