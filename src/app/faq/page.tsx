import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FAQClient from "./FAQClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Everything you need to know about our capabilities, engagement models, and delivery process.",
};

export default function FAQPage() {
  return (
    <>
      <Header />
      <FAQClient />
      <Footer />
    </>
  );
}
