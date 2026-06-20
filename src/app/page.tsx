import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import StatsBar from "@/components/sections/StatsBar";
import CaseStudies from "@/components/sections/CaseStudies";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import Testimonials from "@/components/sections/Testimonials";
import MarqueeStrip from "@/components/sections/MarqueeStrip";
import FAQ from "@/components/sections/FAQ";
import AnalyticsShowcase from "@/components/sections/AnalyticsShowcase";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <HeroSection />
        <StatsBar />
        <CaseStudies />
        <ServicesSection />
        <ProcessSection />
        <MarqueeStrip />
        <Testimonials />
        <AnalyticsShowcase />
        <FAQ />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
