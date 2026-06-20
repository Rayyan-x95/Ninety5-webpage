import ServicePageTemplate, { ServicePageData } from "../ServicePageTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "React Native Mobile App Development Services | Ninety5 Studio",
  description: "Deploying native-quality, high-performance cross-platform iOS and Android applications with React Native and Expo.",
};

const DATA: ServicePageData = {
  slug: "mobile-apps",
  title: "Mobile Apps",
  lead: "Crafting native-feel, high-performance iOS and Android apps using React Native.",
  bodyText: "Mobile experiences demand extreme responsiveness. We engineer cross-platform mobile apps that combine fluid 60fps animations with offline-first support. We bridge the gap between platforms, allowing you to ship to both Apple and Google stores using a unified codebase.",
  capabilities: [
    { icon: "◉", title: "React Native", body: "Shared codebases with native UI performance, ensuring fast feature delivery across platforms." },
    { icon: "⬡", title: "Device APIs", body: "Seamless integration with Bluetooth, GPS location, Apple HealthKit, camera modules, and push notifications.", alt: true },
    { icon: "▧", title: "Offline Support", body: "Robust local database syncing using SQLite or WatermelonDB for offline functionality." },
    { icon: "◰", title: "App Store Ops", body: "Handling provisioning, testing via TestFlight, App Store submissions, and metadata optimization.", alt: true },
  ],
  deliverables: [
    { title: "Source Code", sub: "React Native / Expo" },
    { title: "App Archives", sub: "IPA and AAB bundles" },
    { title: "API Contracts", sub: "REST / GraphQL specs" },
    { title: "Test Builds", sub: "Expo Share links" },
    { title: "Store Assets", sub: "Formatted screenshots" },
  ],
  process: [
    { num: "01", title: "Specs", desc: "Detailing platform constraints, permissions, and API patterns." },
    { num: "02", title: "Engineering", desc: "Coding mobile views, local state, and device integrations." },
    { num: "03", title: "Testing", desc: "Multi-device debugging, memory checking, and offline validation." },
    { num: "04", title: "Publishing", desc: "Submitting builds to Apple App Store and Google Play." },
  ],
  expandedIntro: "A successful mobile app requires careful attention to memory management, storage caching, and touch-interaction physics. We construct high-fidelity applications designed to minimize battery drain and load data instantly.",
  processDetails: "We build apps using Expo and React Native, utilizing Reanimated for fluid 60fps gesture animations. We configure secure token storage, set up background sync workers, and integrate real-time notifications to maximize retention and user engagement.",
  deliverablesDetails: "Deliverables include the React Native repository, configured Expo workspaces, compilation scripts, App Store and Google Play developer center setup, provisioning profiles, and backend API connection schemas.",
  timelineDetails: "Mobile app developments run for 8 to 14 weeks from first architectural prototype to production launch.",
  outcomesDetails: "You get a fast, native-feeling app on both stores with single-codebase maintenance, high reviews, and reliable push notifications.",
  caseStudyIds: ["bloom"],
  faqs: [
    {
      q: "Do you use Expo or bare React Native?",
      a: "We prefer Expo for most projects. It speeds up development, simplifies push notifications, and eases OTA updates. If your project needs custom native modules, we prebuild/config Expo packages to handle them.",
    },
    {
      q: "Can the app function offline?",
      a: "Yes, we build apps with offline capabilities. We implement local caching engines that store user inputs and sync them back to your backend databases when internet connectivity is restored.",
    },
    {
      q: "How do you handle push notifications?",
      a: "We integrate services like Expo Notification service, OneSignal, or Firebase Cloud Messaging. This allows you to send targeted notifications to iOS and Android users from your admin dashboard.",
    },
  ],
};

export default function MobileAppsPage() {
  return <ServicePageTemplate data={DATA} />;
}
