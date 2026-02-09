import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://appscrip.com"),
  title: "On-Demand Trucking App Development | Appscrip",
  description:
    "Build custom on-demand trucking apps for B2B logistics. White-label solutions with real-time tracking, route optimization & TMS.",
  keywords: [
    "on-demand trucking app development",
    "truck booking app",
    "white-label trucking app",
    "B2B logistics app",
    "transportation management system",
    "TMS software",
    "freight management app",
    "carrier management app",
    "fleet management software",
    "trucking app development company",
    "logistics app development",
    "real-time tracking trucking app",
    "route optimization software",
    "LTL consolidation app",
    "FTL booking app",
  ],
  authors: [{ name: "Appscrip", url: "https://appscrip.com" }],
  creator: "Appscrip",
  publisher: "Appscrip",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://appscrip.com/on-demand-trucking-app-development/",
    siteName: "Appscrip",
    title: "On-Demand Trucking App Development | Appscrip",
    description:
      "Build custom on-demand trucking apps for B2B logistics. White-label solutions with real-time tracking, route optimization & TMS.",
    images: [
      {
        url: "/images/og-trucking-app.jpg",
        width: 1200,
        height: 630,
        alt: "On-Demand Trucking App Development by Appscrip",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "On-Demand Trucking App Development | Appscrip",
    description:
      "Build custom on-demand trucking apps for B2B logistics. White-label solutions with real-time tracking, route optimization & TMS.",
    images: ["/images/og-trucking-app.jpg"],
    creator: "@appscrip",
  },
  alternates: {
    canonical: "https://appscrip.com/on-demand-trucking-app-development/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
        <meta name="theme-color" content="#4361ee" />
        <meta
          name="geo.region"
          content="US"
        />
        <meta name="geo.placename" content="United States" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
