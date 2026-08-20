import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactClient from "./ContactClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hire a UI/UX & Web Engineering Studio in Chennai | Ninety5 Studio",
  description:
    "Partner with Ninety5 Studio for aggressive graphic design, B2B SaaS product design, pitch decks, and Next.js web development. Get a project quote within 24 hours.",
  keywords: [
    "Hire UI UX designer Chennai",
    "Product design studio contact",
    "Pitch deck design agency Chennai",
    "Next.js developers India",
    "Ninety5 Studio contact",
  ],
  alternates: {
    canonical: "https://ninety5.in/contact",
  },
  openGraph: {
    title: "Contact Ninety5 Studio | Start a Design & Engineering Project",
    description:
      "Ready to build high-performance digital products? Reach out with your brief or request a free 48-hour UX teardown.",
    url: "https://ninety5.in/contact",
    type: "website",
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://ninety5.in/contact#webpage",
  "url": "https://ninety5.in/contact",
  "name": "Contact Ninety5 Studio",
  "description": "Start a product design, branding, or Next.js engineering engagement with Ninety5 Studio.",
  "mainEntity": {
    "@type": "ProfessionalService",
    "@id": "https://ninety5.in/#service",
    "name": "Ninety5 Studio",
    "email": "hello@ninety5.in",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Chennai",
      "addressCountry": "IN"
    }
  }
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <Header />
      <ContactClient />
      <Footer />
    </>
  );
}

