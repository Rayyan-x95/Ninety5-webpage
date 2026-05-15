import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";

export const metadata: Metadata = {
  title: "Ninety5 — Design & Development Studio",
  description:
    "Ninety5 is a full-stack design and development studio that builds premium digital experiences for startups and growing brands. UI/UX design, web development, mobile apps, and branding.",
  keywords: [
    "UI/UX design",
    "web development",
    "design studio",
    "mobile app design",
    "branding",
    "Ninety5",
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
  },
  twitter: {
    card: "summary_large_image",
    title: "Ninety5 — Design & Development Studio",
    description:
      "We craft digital products that convert, retain, and delight.",
  },
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
      </head>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
