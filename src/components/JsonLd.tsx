export default function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Appscrip",
    url: "https://appscrip.com",
    logo: "https://appscrip.com/images/appscrip-logo.png",
    description:
      "Appscrip empowers startups and enterprises worldwide with innovative software solutions designed for growth.",
    foundingDate: "2014",
    founders: [
      { "@type": "Person", name: "Rahul Sharma" },
      { "@type": "Person", name: "Shivangi Sharma" },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bengaluru",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "sales@appscrip.com",
      contactType: "sales",
      availableLanguage: ["English"],
    },
    sameAs: [
      "https://www.linkedin.com/company/appscrip",
      "https://twitter.com/appscrip",
      "https://github.com/appscrip-3embed",
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "On-Demand Trucking App Development",
    description:
      "Build custom on-demand trucking apps for B2B logistics. White-label solutions with real-time tracking, route optimization & TMS.",
    provider: {
      "@type": "Organization",
      name: "Appscrip",
      url: "https://appscrip.com",
    },
    serviceType: "Software Development",
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Trucking App Development Packages",
      itemListElement: [
        {
          "@type": "Offer",
          name: "White-Label Trucking App",
          description:
            "Pre-built, customizable trucking app with 100% IP ownership. Launch in 8-12 weeks.",
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "USD",
            minPrice: "15000",
            maxPrice: "40000",
          },
        },
        {
          "@type": "Offer",
          name: "Custom Trucking App Development",
          description:
            "Fully custom trucking app with proprietary technology and legacy integration.",
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "USD",
            minPrice: "75000",
            maxPrice: "250000",
          },
        },
      ],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is a TMS in the trucking industry?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "TMS (Transportation Management System) is software that helps logistics companies plan, execute, and optimize the movement of goods. It includes features like route planning, carrier selection, freight auditing, and analytics. On-demand trucking apps function as modern, mobile-first TMS solutions with real-time execution capabilities.",
        },
      },
      {
        "@type": "Question",
        name: "What is route optimization in TMS?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Route optimization uses algorithms to determine the most efficient routes for deliveries, considering factors like distance, traffic, delivery time windows, truck capacity, and fuel costs. Advanced route optimization can reduce fuel costs by 15-25% and delivery times by 30-40%.",
        },
      },
      {
        "@type": "Question",
        name: "What is carrier management in TMS?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Carrier management involves onboarding, credentialing, and managing relationships with transportation providers. It includes verifying insurance and certifications, tracking performance metrics, managing payments, and maintaining a database of available carriers. On-demand trucking apps automate carrier management with digital onboarding, real-time performance tracking, and automated payment processing.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between fleet management and transport management?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Fleet management focuses on managing owned vehicles — maintenance, fuel, driver behavior, and vehicle utilization. Transport management (TMS) focuses on coordinating shipments across multiple carriers, both owned and third-party. Many companies need both: fleet management for their own trucks and TMS for broader logistics coordination.",
        },
      },
      {
        "@type": "Question",
        name: "How much does trucking app development cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Trucking app development costs range from $15,000 for white-label solutions to $250,000+ for fully custom development. Factors affecting cost include feature complexity, customization level, number of user roles, and third-party integrations required.",
        },
      },
    ],
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Appscrip Truckr - On-Demand Trucking App",
    applicationCategory: "BusinessApplication",
    operatingSystem: "iOS, Android, Web",
    description:
      "White-label on-demand trucking app with real-time tracking, automated dispatching, and seamless payment processing for B2B logistics.",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: "15000",
      highPrice: "250000",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "1500",
      bestRating: "5",
    },
    featureList: [
      "Real-time GPS Tracking",
      "Automated Dispatching",
      "Route Optimization",
      "Digital Documentation (BOL, POD, POP)",
      "Fleet Management Dashboard",
      "Payment Gateway Integration",
      "LTL Consolidation",
      "Enterprise Account Management",
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://appscrip.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Trucking & Logistics",
        item: "https://appscrip.com/white-label-truck-booking-app-development/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "On-Demand Trucking App Development",
        item: "https://appscrip.com/on-demand-trucking-app-development/",
      },
    ],
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How On-Demand Trucking App Development Works",
    description:
      "The Appscrip process for building your custom trucking platform from discovery to launch.",
    totalTime: "P11W",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Discovery & Consultation",
        text: "Free consultation to understand your business model. Analyze workflows, identify pain points, define target users, map features, and create technical requirements.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Custom Design & Development",
        text: "Build your app from the ground up with UI/UX design, backend development, API integration, white-label branding, and security implementation.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Testing & Quality Assurance",
        text: "Rigorous testing including load testing, UAT, security audits, cross-platform compatibility, and performance optimization.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Deployment & Launch",
        text: "Server setup, App Store and Google Play submission, web deployment, data migration, and user onboarding.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Ongoing Support & Scaling",
        text: "24/7 technical support, monthly updates, performance monitoring, training, and scalability upgrades.",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(howToSchema),
        }}
      />
    </>
  );
}
