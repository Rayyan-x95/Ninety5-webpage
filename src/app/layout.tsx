import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";

export const metadata: Metadata = {
  metadataBase: new URL("https://ninety5.studio"),
  title: {
    default: "Ninety5 — Design & Development Studio",
    template: "%s | Ninety5 Studio",
  },
  description:
    "Ninety5 is a full-stack design and development studio that builds premium digital experiences for startups and growing brands. UI/UX design, web development, mobile apps, and branding.",
  keywords: [
    "UI/UX design",
    "web development",
    "design studio",
    "mobile app design",
    "branding",
    "Ninety5",
    "Chennai design agency",
    "Next.js developers",
  ],
  authors: [{ name: "Ninety5 Studio" }],
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Ninety5 — Design & Development Studio",
    description:
      "We craft digital products that convert, retain, and delight. From strategy to shipping.",
    type: "website",
    siteName: "Ninety5",
    locale: "en_US",
    url: "https://ninety5.studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ninety5 — Design & Development Studio",
    description:
      "We craft digital products that convert, retain, and delight.",
    creator: "@ninety5studio",
  },
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
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Ninety5 Studio",
  "image": "https://ninety5.studio/icon.png",
  "@id": "https://ninety5.studio",
  "url": "https://ninety5.studio",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Chennai",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 13.0827,
    "longitude": 80.2707
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "09:00",
    "closes": "18:00"
  },
  "sameAs": [
    "https://twitter.com/ninety5studio",
    "https://linkedin.com/company/ninety5",
    "https://dribbble.com/ninety5",
    "https://github.com/ninety5"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
