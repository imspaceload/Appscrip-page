"use client";

import { useState } from "react";
/* eslint-disable @next/next/no-img-element */

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
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left: Heading */}
          <div className="lg:col-span-2">
            <span className="section-label">FAQ</span>
            <h2
              id="faq-heading"
              className="text-[1.875rem] md:text-[2.25rem] font-bold text-[var(--color-secondary)] leading-[1.2] tracking-[-0.01em] mb-4"
            >
              Frequently Searched Questions About Trucking Apps
            </h2>
            <p className="text-[15px] text-[var(--color-gray-600)] mb-6">
              Get answers to the most common questions about on-demand trucking
              app development, TMS, and logistics technology.
            </p>

            {/* FAQ Image */}
            <div className="hidden lg:block max-w-[280px] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=400&fit=crop&q=80"
                alt="Business consultation for trucking app development"
                width={400}
                height={400}
                className="w-full h-auto rounded-2xl"
                loading="lazy"
              />
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
