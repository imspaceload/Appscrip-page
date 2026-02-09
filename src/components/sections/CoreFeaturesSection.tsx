"use client";

import { useState } from "react";

type FeatureTab = {
  id: string;
  label: string;
  icon: React.ReactNode;
  features: {
    title: string;
    items: { name: string; description: string }[];
  }[];
  imageUrl: string;
  imageAlt: string;
};

const tabs: FeatureTab[] = [
  {
    id: "shipper",
    label: "Shipper / Customer",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    features: [
      {
        title: "Intelligent Load Booking",
        items: [
          { name: "Single pickup, multiple drop", description: "Create LTL loads with a single pickup point and deliver to multiple destinations in one booking." },
          { name: "Commodity selection", description: "Select the type of goods from a categorised list; the app recommends the most suitable truck for your load." },
          { name: "Packaging specifications", description: "Choose the packaging type for your goods — pallets, crates, boxes, or bulk — and enter the exact specifications." },
          { name: "Real-time fare estimation", description: "Review the truck details and a full fare breakup for the load before confirming the booking." },
          { name: "Budget negotiation", description: "Enter a target budget for the shipment; the carrier can choose to accept or reject it." },
          { name: "Collect value from receiver", description: "Notify the app and the carrier to collect payment from the end receiver at the time of delivery." },
        ],
      },
      {
        title: "Advanced Scheduling",
        items: [
          { name: "Schedule pickups", description: "Book a truck for an immediate pickup or schedule it for a future date and time." },
          { name: "Multi-truck orders", description: "Enter the exact number of trucks needed when your load requires multiple vehicles in a single order." },
          { name: "Handler coordination", description: "Specify the number of handlers required for loading and unloading at the time of booking." },
        ],
      },
      {
        title: "Load Management Dashboard",
        items: [
          { name: "Live tracking", description: "Track the real-time location and status of the truck and load inside the app." },
          { name: "Address book", description: "Save frequently used pickup and delivery addresses for a faster booking flow." },
          { name: "Load history", description: "View the details and status of all loads — shipped and booked — from one screen." },
        ],
      },
    ],
    imageUrl: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?w=500&h=700&fit=crop&q=80",
    imageAlt: "Shipper app interface showing load booking dashboard",
  },
  {
    id: "carrier",
    label: "Carrier / Driver",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    features: [
      {
        title: "Job Management",
        items: [
          { name: "My jobs", description: "Track all ongoing and completed jobs in one place and view the full load details for each booking." },
          { name: "One-tap acceptance", description: "Carriers receive a booking notification and can accept or reject it instantly." },
        ],
      },
      {
        title: "Operational Workflow",
        items: [
          { name: "Arrive to pick up", description: "Tap to notify the shipper that the carrier has reached the pickup location." },
          { name: "Load details", description: "View the complete load information — weight, dimensions, and commodity — for every accepted booking." },
          { name: "Stop details", description: "See the number of stops on a route along with the address and details for each one." },
          { name: "Start loading", description: "Update the status to notify the shipper that loading has begun." },
          { name: "Loading timer", description: "A timer automatically starts when loading begins, recording the exact duration." },
          { name: "Proof of Pickup", description: "Upload a photo or document as the official Proof of Pickup once loading is complete." },
          { name: "Arrive to deliver", description: "Tap to confirm arrival at the delivery location, updating the shipper in real time." },
          { name: "Start unloading", description: "Flag the start of unloading to keep the shipper informed of progress." },
          { name: "Unloading timer", description: "Records the exact duration of the unloading process, just like the loading timer." },
          { name: "Proof of Delivery", description: "Upload a photo or document as the official Proof of Delivery once unloading is complete." },
          { name: "Automated invoicing", description: "The moment the Proof of Delivery is uploaded and the booking closes, an invoice is generated automatically." },
        ],
      },
    ],
    imageUrl: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=500&h=700&fit=crop&q=80",
    imageAlt: "Carrier driver using mobile app for load management",
  },
  {
    id: "fleet",
    label: "Fleet Operator",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    features: [
      {
        title: "Fleet Management",
        items: [
          { name: "View active loads", description: "Browse all loads currently available that have not yet been accepted by any driver." },
          { name: "Negotiate with shippers", description: "Negotiate pricing directly with shippers — no middleman involved." },
          { name: "Assign loads", description: "Assign or unassign any load to a driver listed under your fleet." },
          { name: "Track drivers", description: "See the real-time location of every driver in your fleet on a live map." },
          { name: "Track loads", description: "Monitor the status and location of all loads being handled by your drivers." },
        ],
      },
    ],
    imageUrl: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=500&h=700&fit=crop&q=80",
    imageAlt: "Fleet operator dashboard with vehicle tracking overview",
  },
  {
    id: "dispatcher",
    label: "Dispatcher / TMS Panel",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    features: [
      {
        title: "God's View Dashboard",
        items: [
          { name: "Live map visualization", description: "See all active trucks and loads plotted on a single real-time map." },
          { name: "Status monitoring", description: "View every booking — ongoing, scheduled, or completed — along with all driver availability from one screen." },
        ],
      },
      {
        title: "Booking Management",
        items: [
          { name: "Manual booking creation", description: "Create a booking on behalf of any customer directly from the dispatcher panel." },
          { name: "Load assignment", description: "Assign or unassign any active booking to a carrier available in that area." },
          { name: "Load details", description: "Access the full load information for any booking at any point in the process." },
        ],
      },
    ],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=700&fit=crop&q=80",
    imageAlt: "Dispatcher TMS panel with real-time analytics dashboard",
  },
  {
    id: "admin",
    label: "Admin Console",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
      </svg>
    ),
    features: [
      {
        title: "Platform Management",
        items: [
          { name: "Institution buyers", description: "Review all business accounts registered on the platform and approve or reject them." },
          { name: "Customizable shipping fees", description: "Set pricing rules per business — hourly rental, per-mile, fixed distance range, or fully custom." },
          { name: "Address book (admin)", description: "Add contacts for any institution buyer from the admin panel and set a price for each one." },
          { name: "Driver management", description: "Approve or reject carriers that register on the platform and manage all driver profiles centrally." },
          { name: "App updates", description: "Push new versions of the app to all users simultaneously from one setting." },
          { name: "Fare setup", description: "Configure and manage intracity and intercity fares based on parameters like mileage and range." },
        ],
      },
      {
        title: "Financial Controls",
        items: [
          { name: "Carrier payment", description: "Process all carrier payouts directly from the admin panel — no extra paperwork required." },
          { name: "Payment gateway support", description: "Seamless transactions through Stripe, Razorpay, Kushki, and Checkout.com." },
          { name: "Load monitoring", description: "Track all active and completed loads from the admin side with full status visibility." },
        ],
      },
    ],
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=700&fit=crop&q=80",
    imageAlt: "Admin console showing platform management analytics",
  },
];

export default function CoreFeaturesSection() {
  const [activeTab, setActiveTab] = useState("shipper");
  const activeTabData = tabs.find((t) => t.id === activeTab)!;

  return (
    <section
      className="section"
      id="features"
      aria-labelledby="features-heading"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="section-label">Platform Features</span>
          <h2
            id="features-heading"
            className="text-[1.875rem] md:text-[2.25rem] font-bold text-[var(--color-secondary)] leading-[1.2] tracking-[-0.01em] mb-4"
          >
            Core Features of Enterprise-Grade On-Demand Trucking Apps
          </h2>
          <p className="text-[15px] text-[var(--color-gray-600)]">
            Every user role gets a purpose-built experience with features
            designed for logistics workflows.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all border-none cursor-pointer ${
                activeTab === tab.id
                  ? "bg-[var(--color-primary)] text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              aria-pressed={activeTab === tab.id}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="grid lg:grid-cols-5 gap-10">
          {/* Features List */}
          <div className="lg:col-span-3 space-y-8">
            {activeTabData.features.map((group) => (
              <div key={group.title}>
                <h3 className="text-lg font-bold text-[var(--color-secondary)] mb-4 flex items-center gap-2">
                  <span className="w-1 h-6 bg-[var(--color-primary)] rounded-full inline-block" />
                  {group.title}
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {group.items.map((item) => (
                    <div
                      key={item.name}
                      className="bg-white border border-[var(--color-gray-200)] rounded-xl p-4 hover:border-[rgba(67,97,238,0.3)] transition-all"
                    >
                      <h4 className="text-sm font-semibold text-[var(--color-secondary)] mb-1">
                        {item.name}
                      </h4>
                      <p className="text-[13px] text-[var(--color-gray-600)] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Tab Image */}
          <div className="lg:col-span-2">
            <div className="sticky top-24 rounded-2xl overflow-hidden shadow-lg aspect-[5/7]">
              {/* eslint-disable @next/next/no-img-element */}
              <img
                src={activeTabData.imageUrl}
                alt={activeTabData.imageAlt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
