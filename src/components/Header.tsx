"use client";

import { useState } from "react";
import Link from "next/link";

const navItems = [
  {
    label: "Products",
    href: "https://appscrip.com/#products",
    children: [
      { label: "On-Demand Delivery", href: "https://appscrip.com/on-demand-delivery-app/" },
      { label: "Trucking & Logistics", href: "https://appscrip.com/white-label-truck-booking-app-development/" },
      { label: "Load Board Software", href: "https://appscrip.com/white-label-load-board-software/" },
      { label: "eCommerce Marketplace", href: "https://appscrip.com/multivendor-ecommerce-marketplace/" },
      { label: "Super App Development", href: "https://appscrip.com/super-app-development/" },
      { label: "Service Marketplace", href: "https://appscrip.com/on-demand-services-marketplace/" },
    ],
  },
  {
    label: "Solutions",
    href: "https://appscrip.com/services/",
    children: [
      { label: "Custom App Development", href: "https://appscrip.com/custom-mobile-app-development/" },
      { label: "Augmented Reality", href: "https://appscrip.com/augmented-reality/" },
      { label: "AI & Machine Learning", href: "https://appscrip.com/services/" },
    ],
  },
  { label: "About", href: "https://appscrip.com/about/" },
  { label: "Blog", href: "https://appscrip.com/blog/" },
  { label: "Contact", href: "https://appscrip.com/contact-us/" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <nav className="container mx-auto px-6 max-w-[1280px]" aria-label="Main navigation">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link
            href="https://appscrip.com"
            className="flex items-center gap-2 no-underline"
            aria-label="Appscrip - Home"
          >
            {/* Logo placeholder - replace with actual Appscrip logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)] flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-bold text-[var(--color-secondary)]">
                appscrip
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-1 list-none m-0 p-0">
            {navItems.map((item) => (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() =>
                  item.children && setOpenDropdown(item.label)
                }
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="px-4 py-2 text-[0.9375rem] font-medium text-gray-700 hover:text-[var(--color-primary)] transition-colors no-underline rounded-lg hover:bg-gray-50 flex items-center gap-1"
                >
                  {item.label}
                  {item.children && (
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      className={`transition-transform ${
                        openDropdown === item.label ? "rotate-180" : ""
                      }`}
                    >
                      <path
                        d="M3 4.5L6 7.5L9 4.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.children && openDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:text-[var(--color-primary)] hover:bg-gray-50 no-underline transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="#demo" className="btn-primary text-sm">
              Get Free Demo
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors border-none bg-transparent cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4">
            <ul className="list-none m-0 p-0 space-y-1">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-[var(--color-primary)] hover:bg-gray-50 rounded-lg no-underline transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <ul className="list-none m-0 p-0 pl-4">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <Link
                            href={child.href}
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-[var(--color-primary)] no-underline transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-4 px-4">
              <Link href="#demo" className="btn-primary w-full text-center text-sm">
                Get Free Demo
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
