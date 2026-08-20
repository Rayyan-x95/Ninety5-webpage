import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ninety5.in"),
  title: {
    default: "Ninety5 — Graphic Design, Product UI/UX & Next.js Engineering Studio",
    template: "%s | Ninety5 Studio",
  },
  description:
    "Ninety5 is a premier creative studio delivering aggressive graphic design, high-converting investor pitch decks, video motion design, and sub-second Next.js engineering for tech startups worldwide.",
  keywords: [
    "Graphic design studio India",
    "Investor pitch deck design agency",
    "Brand collateral design",
    "Video editing and motion graphics studio",
    "Branded content creation suite",
    "UI/UX product design",
    "Next.js development agency",
    "Design systems agency",
    "Ninety5 Studio",
    "Chennai creative collective India",
  ],
  authors: [{ name: "Mohammed Rayyan", url: "https://rayyan.ninety5.in" }],
  creator: "Mohammed Rayyan",
  publisher: "Ninety5 Studio",
  alternates: {
    canonical: "https://ninety5.in",
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Ninety5 — Full-Stack Design & Next.js Engineering Studio",
    description:
      "We craft high-performance digital products that convert, retain, and scale. UI/UX design systems and sub-second Next.js engineering.",
    type: "website",
    siteName: "Ninety5 Studio",
    locale: "en_US",
    url: "https://ninety5.in",
    images: [
      {
        url: "/og-image.jpg",
        width: 1024,
        height: 682,
        alt: "Ninety5 Studio — Design & Engineering Collective",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ninety5 — Full-Stack Design & Next.js Engineering Studio",
    description:
      "We craft high-performance digital products that convert, retain, and scale. From strategy to production code.",
    creator: "@ninety5studio",
    images: ["/og-image.jpg"],
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
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://ninety5.in/#organization",
      "name": "Ninety5 Studio",
      "url": "https://ninety5.in",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ninety5.in/logo-header.png"
      },
      "image": "https://ninety5.in/og-image.jpg",
      "description": "Full-stack design and Next.js engineering studio delivering brutalist, high-performance digital products for tech startups and enterprises.",
      "founder": {
        "@type": "Person",
        "name": "Mohammed Rayyan",
        "url": "https://rayyan.ninety5.in",
        "jobTitle": "Founder & Design Lead",
        "sameAs": [
          "https://twitter.com/ninety5studio",
          "https://linkedin.com/company/ninety5",
          "https://dribbble.com/ninety5",
          "https://github.com/ninety5"
        ]
      },
      "sameAs": [
        "https://twitter.com/ninety5studio",
        "https://linkedin.com/company/ninety5",
        "https://dribbble.com/ninety5",
        "https://github.com/ninety5"
      ],
      "knowsAbout": [
        "User Interface Design",
        "User Experience Design",
        "Graphic Design and Investor Pitch Decks",
        "Video Editing and Motion Graphics",
        "Design Systems Architecture",
        "Next.js Frontend Engineering",
        "In-House SaaS Product Incubation",
        "React Native Mobile Apps",
        "Brand Identity Systems",
        "Core Web Vitals Performance",
        "Generative Engine Optimization (GEO)",
        "Conversion Rate Optimization"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Digital Product Design & Engineering Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Product Design (UI/UX)",
              "url": "https://ninety5.in/services/product-design"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Graphic Design & Brand Collateral",
              "url": "https://ninety5.in/services/graphic-design"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Video Editing & Motion Graphics",
              "url": "https://ninety5.in/services/video-editing"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Branded Content Creation Suite",
              "url": "https://ninety5.in/services/branded-content"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Next.js Web Development",
              "url": "https://ninety5.in/services/web-development"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Design Systems Architecture",
              "url": "https://ninety5.in/services/design-systems"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Brand Identity Design",
              "url": "https://ninety5.in/services/brand-identity"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "React Native Mobile Apps",
              "url": "https://ninety5.in/services/mobile-apps"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "UX Research & Audits",
              "url": "https://ninety5.in/services/ux-research"
            }
          }
        ]
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://ninety5.in/#website",
      "url": "https://ninety5.in",
      "name": "Ninety5 Studio",
      "publisher": {
        "@id": "https://ninety5.in/#organization"
      }
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://ninety5.in/#service",
      "name": "Ninety5 Studio",
      "image": "https://ninety5.in/icon.png",
      "url": "https://ninety5.in",
      "priceRange": "$$$",
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
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "5"
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
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a href="#main" className="skip-link">Skip to main content</a>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}

