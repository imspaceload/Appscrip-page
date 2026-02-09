"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is a TMS in the trucking industry?",
    answer:
      "TMS (Transportation Management System) is software that helps logistics companies plan, execute, and optimize the movement of goods. It includes features like route planning, carrier selection, freight auditing, and analytics. On-demand trucking apps function as modern, mobile-first TMS solutions with real-time execution capabilities.",
  },
  {
    question: "What is route optimization in TMS?",
    answer:
      "Route optimization uses algorithms to determine the most efficient routes for deliveries, considering factors like distance, traffic, delivery time windows, truck capacity, and fuel costs. Advanced route optimization can reduce fuel costs by 15-25% and delivery times by 30-40%.",
  },
  {
    question: "What is carrier management in TMS?",
    answer:
      "Carrier management involves onboarding, credentialing, and managing relationships with transportation providers. It includes verifying insurance and certifications, tracking performance metrics, managing payments, and maintaining a database of available carriers. On-demand trucking apps automate carrier management with digital onboarding, real-time performance tracking, and automated payment processing.",
  },
  {
    question:
      "What is the difference between fleet management and transport management?",
    answer:
      "Fleet management focuses on managing owned vehicles — maintenance, fuel, driver behavior, and vehicle utilization. Transport management (TMS) focuses on coordinating shipments across multiple carriers, both owned and third-party. Many companies need both: fleet management for their own trucks and TMS for broader logistics coordination.",
  },
  {
    question: "How much does trucking app development cost?",
    answer:
      "Trucking app development costs range from $15,000 for white-label solutions to $250,000+ for fully custom development. Factors affecting cost include feature complexity, customization level, number of user roles, and third-party integrations required. White-label solutions offer the best value with 60-70% cost savings compared to building from scratch.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      className="section-alt"
      id="faq"
      aria-labelledby="faq-heading"
    >
      <div className="container mx-auto px-6 max-w-[1280px]">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left: Heading */}
          <div className="lg:col-span-2">
            <h2
              id="faq-heading"
              className="text-3xl md:text-4xl font-bold text-[var(--color-secondary)] mb-4 leading-tight"
            >
              Frequently Searched Questions About Trucking Apps
            </h2>
            <p className="text-base text-gray-600 mb-6">
              Get answers to the most common questions about on-demand trucking
              app development, TMS, and logistics technology.
            </p>

            {/* Image Placeholder */}
            <div className="img-placeholder aspect-square max-w-[280px] rounded-2xl hidden lg:flex">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
              <p className="mt-2 text-sm">FAQ Illustration</p>
              <p className="text-xs text-gray-400">
                (Replace with illustration: 400x400 recommended)
              </p>
            </div>
          </div>

          {/* Right: FAQ Accordion */}
          <div className="lg:col-span-3 space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${
                  openIndex === index ? "border-[var(--color-primary)]/30" : ""
                }`}
              >
                <button
                  className="faq-question"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span>{faq.question}</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className={`transition-transform shrink-0 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                {openIndex === index && (
                  <div
                    id={`faq-answer-${index}`}
                    className="faq-answer"
                    role="region"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
