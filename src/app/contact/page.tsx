import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactClient from "./ContactClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Ready to build something extraordinary? Reach out with your brief and we will get back to you within 24 hours.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <ContactClient />
      <Footer />
    </>
  );
}
