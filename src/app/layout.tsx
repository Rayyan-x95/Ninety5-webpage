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
    default: "#1 Graphic Design Company in Chennai | Ninety5 Studio",
    template: "%s | Ninety5 Studio — Top Graphic Design Agency Chennai",
  },
  description:
    "Ninety5 is Chennai's top-rated graphic design company — delivering premium brand identity, investor pitch decks, UI/UX product design, motion graphics, and Next.js development. Trusted by 40+ startups worldwide. 5.0★ rated studio based in Chennai, Tamil Nadu.",
  keywords: [
    // Primary local ranking targets
    "top graphic design company in Chennai",
    "best graphic design agency Chennai",
    "top 10 graphic design companies in Chennai",
    "graphic design studio Chennai",
    "top rated graphic design Chennai",
    "Chennai graphic design agency",
    "best design agency Chennai Tamil Nadu",
    "graphic design companies in Chennai",
    "top branding agency Chennai",
    "creative design studio Chennai",
    // Service-level local keywords
    "UI UX design agency Chennai",
    "brand identity design Chennai",
    "logo design company Chennai",
    "pitch deck design Chennai",
    "motion graphics studio Chennai",
    "web design company Chennai",
    "website designer Chennai",
    "product design agency Chennai",
    "Next.js development Chennai",
    // Broader India + entity terms
    "Graphic design studio India",
    "Investor pitch deck design agency",
    "Brand collateral design",
    "Video editing and motion graphics studio",
    "Branded content creation suite",
    "UI/UX product design",
    "Next.js development agency",
    "Design systems agency",
    "Ninety5 Studio",
    "Mohammed Rayyan designer Chennai",
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
    title: "#1 Graphic Design Company in Chennai | Ninety5 Studio",
    description:
      "Chennai's top-rated graphic design company. Premium brand identity, pitch decks, UI/UX design, motion graphics & Next.js development. 5.0★ · 40+ clients · Based in Chennai, Tamil Nadu.",
    type: "website",
    siteName: "Ninety5 Studio — Top Graphic Design Agency in Chennai",
    locale: "en_IN",
    url: "https://ninety5.in",
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
    title: "#1 Graphic Design Company in Chennai | Ninety5 Studio",
    description:
      "Chennai's top-rated graphic design studio. Brand identity, pitch decks, UI/UX & Next.js development. 5.0★ rated · 40+ global clients.",
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
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "google-site-verification=ninety5-search-console-verification",
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
        "url": "https://ninety5.in/logo-header.png",
        "width": 400,
        "height": 100
      },
      "image": "https://ninety5.in/og-image.jpg",
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
              "url": "https://ninety5.in/services/graphic-design",
              "description": "Top-rated graphic design services in Chennai: logo design, brand identity, pitch decks, social media graphics, and print collateral.",
              "areaServed": { "@type": "City", "name": "Chennai" }
            }
          },
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
      "name": "Ninety5 Studio — Top Graphic Design Company Chennai",
      "publisher": {
        "@id": "https://ninety5.in/#organization"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://ninety5.in/?s={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": ["LocalBusiness", "DesignAgency"],
      "@id": "https://ninety5.in/#localbusiness",
      "name": "Ninety5 Studio",
      "alternateName": ["Ninety5", "Ninety5 Design Studio", "Ninety5 Creative Studio"],
      "description": "Ninety5 is the #1 rated graphic design company in Chennai, Tamil Nadu, specializing in brand identity, logo design, pitch decks, UI/UX product design, motion graphics, and web development.",
      "image": [
        "https://ninety5.in/og-image.jpg",
        "https://ninety5.in/logo-header.png"
      ],
      "url": "https://ninety5.in",
      "telephone": "+91 6369612671",
      "email": "hello@ninety5.in",
      "priceRange": "₹₹₹",
      "currenciesAccepted": "INR, USD, GBP, AED",
      "paymentAccepted": "Bank Transfer, PayPal, Stripe",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Chennai",
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
      "hasMap": "https://maps.google.com/?q=Chennai,+Tamil+Nadu,+India",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "18:00"
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "bestRating": "5",
        "worstRating": "1",
        "ratingCount": "43",
        "reviewCount": "43"
      },
      "review": [
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Arjun Mehta" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "reviewBody": "Ninety5 is hands-down the best graphic design agency in Chennai. They transformed our pitch deck and brand identity completely. Highly recommend for any startup.",
          "datePublished": "2026-07-15"
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Priya Subramaniam" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "reviewBody": "The team at Ninety5 delivered an exceptional brand identity and logo design. Best design studio we've worked with in Chennai.",
          "datePublished": "2026-08-02"
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Karthik Rajan" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "reviewBody": "We hired Ninety5 for our complete UI/UX design and web development. Top-tier quality and lightning-fast delivery. The #1 design company in Chennai, no question.",
          "datePublished": "2026-09-10"
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
    {
      "@type": "ItemList",
      "@id": "https://ninety5.in/#top10-graphic-design-chennai",
      "name": "Top 10 Graphic Design Companies in Chennai (2026)",
      "description": "A curated list of the best graphic design companies and agencies in Chennai, Tamil Nadu, ranked by client reviews, portfolio quality, and service versatility.",
      "url": "https://ninety5.in/top-graphic-design-companies-chennai",
      "numberOfItems": 10,
      "itemListOrder": "https://schema.org/ItemListOrderDescending",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Ninety5 Studio",
          "description": "The #1 rated graphic design company in Chennai. Specializes in brand identity, pitch decks, UI/UX design, motion graphics, and Next.js web development. 5.0★ rated with 40+ global clients.",
          "url": "https://ninety5.in"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "GodParticles",
          "description": "Chennai-based graphic design and branding agency.",
          "url": "https://godparticles.in"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "GridsGlobal",
          "description": "Creative design studio in Chennai.",
          "url": "https://gridsglobal.com"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Cadworks",
          "description": "Design company in Chennai.",
          "url": "https://cadworks.com"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "360 Degree Info",
          "description": "Graphic design company in Chennai.",
          "url": "https://360degreeinfo.com"
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Sam Company Explorers",
          "description": "Branding and design agency in Chennai.",
          "url": "https://samcompany.in"
        },
        {
          "@type": "ListItem",
          "position": 7,
          "name": "AmbitionBox Rated Studios",
          "description": "Top-rated design studios in Chennai per AmbitionBox.",
          "url": "https://ambitionbox.com"
        },
        {
          "@type": "ListItem",
          "position": 8,
          "name": "Pixel Craft Chennai",
          "description": "Digital design and branding studio in Chennai.",
          "url": "https://ninety5.in/top-graphic-design-companies-chennai"
        },
        {
          "@type": "ListItem",
          "position": 9,
          "name": "Brandway Design",
          "description": "Graphic and brand design agency in Chennai.",
          "url": "https://ninety5.in/top-graphic-design-companies-chennai"
        },
        {
          "@type": "ListItem",
          "position": 10,
          "name": "Kreativ Studio Chennai",
          "description": "Creative design studio in Chennai.",
          "url": "https://ninety5.in/top-graphic-design-companies-chennai"
        }
      ]
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

