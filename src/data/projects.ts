export interface Project {
  id: string;
  category: string;
  title: string;
  description: string;
  longDescription: string;
  metric: string;
  metricLabel: string;
  color: string;
  accent: string;
  span?: "large" | "small";
  orange?: boolean;
  year: string;
  client: string;
  role: string;
  challenges: string[];
  solutions: string[];
  results: string[];
}

export const PROJECTS: Project[] = [
  {
    id: "atlas",
    category: "SaaS Platform",
    title: "Atlas — B2B Analytics Dashboard",
    description: "End-to-end product design for a data analytics platform serving 200+ enterprise clients.",
    longDescription: "Atlas is a high-performance analytics engine designed for modern enterprise teams. We were tasked with completely reimagining the data visualization layer to handle massive datasets without compromising on speed or clarity. The result is a brutalist, high-contrast interface that prioritizes actionable insights over vanity metrics.",
    metric: "+280%",
    metricLabel: "User retention",
    color: "#0C0C0A",
    accent: "#1B4FFF",
    span: "large",
    year: "2024",
    client: "Atlas Analytics Inc.",
    role: "Product Design & Frontend Development",
    challenges: [
      "Visualizing multi-dimensional data sets in real-time.",
      "Ensuring sub-second dashboard load times with 1M+ data points.",
      "Simplifying complex administrative workflows for non-technical users."
    ],
    solutions: [
      "Implemented a custom SVG-based charting library for hardware acceleration.",
      "Developed a modular widget system for personalized dashboard views.",
      "Utilized Next.js Server Components for aggressive data fetching optimization."
    ],
    results: [
      "280% increase in daily active user retention.",
      "45% reduction in time-to-insight for executive users.",
      "Successfully handled $1.2B in processed data value in the first quarter."
    ]
  },
  {
    id: "bloom",
    category: "Mobile App",
    title: "Bloom — Wellness App",
    description: "Holistic wellness app with personalised AI coaching. Shipped from 0 to 50k users in 3 months.",
    longDescription: "Bloom is a wellness platform that leverages AI to provide truly personalized health coaching. Our goal was to create a mobile experience that felt calm yet energetic, breaking away from the typical 'soft' wellness aesthetic with a bold, high-contrast look that demands engagement and consistency.",
    metric: "4.9 ★",
    metricLabel: "App Store rating",
    color: "#0A1628",
    accent: "#FF5B00",
    span: "small",
    orange: true,
    year: "2023",
    client: "Bloom Health Labs",
    role: "App Design & React Native Engineering",
    challenges: [
      "Integrating real-time biometric data from wearable devices.",
      "Designing an AI coaching interface that feels human and encouraging.",
      "Maintaining 60fps performance on complex habit-tracking animations."
    ],
    solutions: [
      "Built a custom bridge for Apple HealthKit and Google Fit integration.",
      "Developed a 'Conversational UI' framework for AI interactions.",
      "Optimized React Native Reanimated sequences for fluid biometric visualization."
    ],
    results: [
      "Reached #12 in the Health & Fitness category within 4 weeks.",
      "Maintained a 4.9-star rating with over 10,000 reviews.",
      "Average user session length increased by 65% since launch."
    ]
  },
  {
    id: "forge",
    category: "Brand Identity",
    title: "Forge — Developer Tools",
    description: "Complete brand overhaul for an open-source developer toolchain with 80k+ GitHub stars.",
    longDescription: "Forge is the backbone of modern developer workflows. With a massive community and a growing ecosystem, they needed a brand identity that reflected their industrial-strength reliability. We built a 'Code-First' design system that lives in terminal windows and enterprise dashboards alike.",
    metric: "3.2×",
    metricLabel: "Conversion uplift",
    color: "#1A0828",
    accent: "#A78BFA",
    span: "small",
    year: "2024",
    client: "Forge Open Source Foundation",
    role: "Brand Strategy & Visual Identity",
    challenges: [
      "Creating a visual language that resonates with hardcore systems engineers.",
      "Ensuring the brand scales from CLI icons to global billboards.",
      "Consolidating 15+ sub-projects into one cohesive visual ecosystem."
    ],
    solutions: [
      "Developed a custom monospaced typeface for the primary wordmark.",
      "Built a generative pattern system based on binary code structures.",
      "Engineered an automated 'Brand API' for consistent UI implementation."
    ],
    results: [
      "3.2× increase in enterprise support plan sign-ups.",
      "25,000+ new GitHub stars following the brand relaunch.",
      "Successfully unified the identity of 18 distinct open-source projects."
    ]
  },
  {
    id: "orbit",
    category: "Web App",
    title: "Orbit — Project Management",
    description: "A modular project management suite built for async, remote-first engineering teams.",
    longDescription: "Orbit is project management stripped of the bloat. Built specifically for high-velocity engineering teams, Orbit prioritizes speed, keyboard shortcuts, and deep Git integration. We engineered a web experience that feels like a desktop application.",
    metric: "2.1s",
    metricLabel: "Core Web Vitals",
    color: "#0A1A10",
    accent: "#34D399",
    span: "large",
    orange: true,
    year: "2023",
    client: "Orbit Async Ltd.",
    role: "Full Stack Engineering & UX Design",
    challenges: [
      "Eliminating UI lag in complex project boards with 500+ tasks.",
      "Designing a keyboard-only navigation system for power users.",
      "Implementing a robust offline-sync engine for distributed teams."
    ],
    solutions: [
      "Utilized virtualization and Canvas-based rendering for large boards.",
      "Created a command-palette-first navigation architecture.",
      "Engineered a conflict-resolution system using CRDTs for real-time collaboration."
    ],
    results: [
      "Achieved sub-2s load time on even the most complex project boards.",
      "Onboarded 150+ Y-Combinator startups in the first 6 months.",
      "Reduced team-wide project coordination meetings by 40%."
    ]
  }
];
