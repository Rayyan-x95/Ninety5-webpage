import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import { Analytics } from "@vercel/analytics/react";

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
  metadataBase: new URL("https://www.ninety5.in"),
  title: {
    default: "Graphic Design Company in Chennai | 4.9★, Free 48h Audit",
    template: "%s | Ninety5 Studio",
  },
  description:
    "Ninety5 is Chennai's product design & graphic design studio for SaaS founders. Brand identity, pitch decks, UI/UX & Next.js builds. Book a free 48h audit.",
  authors: [{ name: "Mohammed Rayyan", url: "https://rayyan.ninety5.in" }],
  creator: "Mohammed Rayyan",
  publisher: "Ninety5 Studio",
  alternates: {
    canonical: "https://www.ninety5.in",
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Graphic Design Company in Chennai | 4.9★, Free 48h Audit",
    description:
      "Brand identity, pitch decks, UI/UX & Next.js builds for SaaS founders. 100% design-to-code, no handoff. Free 48h UX audit.",
    type: "website",
    siteName: "Ninety5 Studio",
    locale: "en_IN",
    url: "https://www.ninety5.in",
    images: [
      {
        url: "/og-image.jpg",
        width: 1024,
        height: 682,
        alt: "Ninety5 Studio — #1 Graphic Design Company in Chennai, Tamil Nadu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Graphic Design Company in Chennai | Ninety5 Studio",
    description:
      "Product design & graphic design studio in Chennai. Brand identity, pitch decks, UI/UX & Next.js. Free 48h audit.",
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
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION && {
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    },
  }),
};


const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.ninety5.in/#organization",
      "name": "Ninety5 Studio",
      "url": "https://www.ninety5.in",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.ninety5.in/logo-header.png",
        "width": 400,
        "height": 100
      },
      "image": "https://www.ninety5.in/og-image.jpg",
      "description": "Ninety5 is Chennai's #1 rated graphic design company delivering brand identity, investor pitch decks, UI/UX product design, motion graphics, and Next.js development for tech startups and global brands.",
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
        "Graphic Design",
        "Brand Identity Design",
        "Logo Design",
        "Investor Pitch Decks",
        "User Interface Design",
        "User Experience Design",
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
        "name": "Graphic Design & Digital Product Services — Chennai, India",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Graphic Design & Brand Collateral — Chennai",
              "url": "https://www.ninety5.in/services/graphic-design",
              "description": "Top-rated graphic design services in Chennai: logo design, brand identity, pitch decks, social media graphics, and print collateral.",
              "areaServed": { "@type": "City", "name": "Chennai" }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Product Design (UI/UX)",
              "url": "https://www.ninety5.in/services/product-design"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Video Editing & Motion Graphics",
              "url": "https://www.ninety5.in/services/video-editing"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Branded Content Creation Suite",
              "url": "https://www.ninety5.in/services/branded-content"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Next.js Web Development",
              "url": "https://www.ninety5.in/services/web-development"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Design Systems Architecture",
              "url": "https://www.ninety5.in/services/design-systems"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Brand Identity Design",
              "url": "https://www.ninety5.in/services/brand-identity"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "React Native Mobile Apps",
              "url": "https://www.ninety5.in/services/mobile-apps"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "UX Research & Audits",
              "url": "https://www.ninety5.in/services/ux-research"
            }
          }
        ]
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://www.ninety5.in/#website",
      "url": "https://www.ninety5.in",
      "name": "Ninety5 Studio — Top Graphic Design Company Chennai",
      "publisher": {
        "@id": "https://www.ninety5.in/#organization"
      }
    },
    {
      "@type": ["LocalBusiness", "DesignAgency"],
      "@id": "https://www.ninety5.in/#localbusiness",
      "name": "Ninety5 Studio",
      "alternateName": ["Ninety5", "Ninety5 Design Studio", "Ninety5 Creative Studio"],
      "description": "Ninety5 is the #1 rated graphic design company in Chennai, Tamil Nadu, specializing in brand identity, logo design, pitch decks, UI/UX product design, motion graphics, and web development.",
      "image": [
        "https://www.ninety5.in/og-image.jpg",
        "https://www.ninety5.in/logo-header.png"
      ],
      "url": "https://www.ninety5.in",
      "email": "hello@ninety5.in",
      "priceRange": "₹₹₹",
      "currenciesAccepted": "INR, USD, GBP, AED",
      "paymentAccepted": "Bank Transfer, PayPal, Stripe",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Chennai",
        "addressRegion": "Tamil Nadu",
        "postalCode": "600001",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 13.0827,
        "longitude": 80.2707
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "18:00"
        }
      ],
      "areaServed": [
        { "@type": "City", "name": "Chennai" },
        { "@type": "State", "name": "Tamil Nadu" },
        { "@type": "Country", "name": "India" },
        "Worldwide"
      ],
      "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": 13.0827,
          "longitude": 80.2707
        },
        "geoRadius": "50000"
      },
      "sameAs": [
        "https://twitter.com/ninety5studio",
        "https://linkedin.com/company/ninety5",
        "https://dribbble.com/ninety5",
        "https://github.com/ninety5"
      ],
      "founder": {
        "@type": "Person",
        "name": "Mohammed Rayyan",
        "url": "https://rayyan.ninety5.in",
        "jobTitle": "Founder & Design Lead"
      },
      "numberOfEmployees": { "@type": "QuantitativeValue", "minValue": 5, "maxValue": 20 },
      "foundingDate": "2023",
      "knowsAbout": [
        "Graphic Design", "Brand Identity", "Logo Design", "UI/UX Design",
        "Pitch Deck Design", "Motion Graphics", "Web Development", "Design Systems"
      ]
    },
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
        <Analytics />
      </body>
    </html>
  );
}

