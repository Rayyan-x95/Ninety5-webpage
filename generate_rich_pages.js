const fs = require('fs');
const path = require('path');

const pageData = [
  // SERVICES SUBPAGES
  {
    path: 'services/product-design',
    title: 'Product Design',
    subtitle: 'We craft digital products that solve complex problems with elegant, user-centric solutions. Our methodology fuses deep psychological insight with uncompromising aesthetic execution.',
    intro: 'Product design is more than making things look good. It is the architectural foundation of your business. We build systems that are intuitive, scalable, and engineered to drive measurable conversion. Every pixel serves a purpose. Every interaction is calculated.',
    blocks: [
      { title: 'WIREFRAMING', text: 'Mapping out user journeys and architectural structures with precision. We do not skip steps. Wireframing ensures that the core user experience is validated before any aesthetic layer is applied.' },
      { title: 'PROTOTYPING', text: 'Building interactive models to validate concepts before full-scale engineering. Our prototypes are virtually indistinguishable from the final coded product, allowing for rigorous early-stage testing.' },
      { title: 'UI/UX DESIGN', text: 'Creating stunning, intuitive interfaces that engage and convert users. We utilize high-contrast, brutalist design principles combined with deep usability heuristics to ensure absolute dominance.' },
      { title: 'USER TESTING', text: 'Iterative refinement based on real-world behavioral data and feedback. We do not guess. We deploy our designs to real users and iterate based on heatmaps and session recordings.' }
    ],
    deliverables: ['High-fidelity Figma files', 'Interactive Prototypes', 'User flow diagrams', 'Comprehensive Design Systems', 'Handoff documentation']
  },
  {
    path: 'services/brand-identity',
    title: 'Brand Identity',
    subtitle: 'Forging iconic visual systems that resonate and dominate in crowded markets. We do not do subtle.',
    intro: 'In a landscape polluted by noise, standing out requires aggressive differentiation. We build brand identities that are impossible to ignore. Our approach is rooted in striking typography, bold color science, and unapologetic messaging.',
    blocks: [
      { title: 'LOGO DESIGN', text: 'Distilling core values into memorable, scalable visual marks that look incredible everywhere from a billboard to a favicon.' },
      { title: 'TYPOGRAPHY', text: 'Selecting and customizing typefaces that speak your brand\'s language. We utilize massive display fonts for undeniable presence.' },
      { title: 'COLOR SYSTEMS', text: 'Developing strategic palettes engineered for psychological impact. Our signature involves electric blues, harsh oranges, and absolute darkness.' },
      { title: 'GUIDELINES', text: 'Creating exhaustive brand books for total consistency at scale, ensuring your internal team never dilutes the vision.' }
    ],
    deliverables: ['Primary & Secondary Logos', 'Typography hierarchy', 'Color palette definitions', 'Brand Guidelines (PDF/Web)', 'Social media assets']
  },
  {
    path: 'services/design-systems',
    title: 'Design Systems',
    subtitle: 'Engineering robust component libraries that scale your design language across platforms.',
    intro: 'Inconsistency is the enemy of scale. We architect exhaustive design systems that serve as the single source of truth for your entire organization. We bridge the gap between design and engineering, ensuring perfect execution every single time.',
    blocks: [
      { title: 'COMPONENT LIBRARIES', text: 'Building reusable, modular UI elements in Figma and Code, designed to scale limitlessly.' },
      { title: 'DESIGN TOKENS', text: 'Standardizing values for colors, typography, and spacing to ensure mathematical precision across all platforms.' },
      { title: 'DOCUMENTATION', text: 'Writing clear guidelines for seamless handoff and adoption by your internal engineering teams.' },
      { title: 'GOVERNANCE', text: 'Establishing workflows for maintaining and evolving the system as your product inevitably grows.' }
    ],
    deliverables: ['Figma UI Kit', 'Storybook Integration', 'Design Token JSON', 'Component Guidelines', 'Version Control Strategy']
  },
  {
    path: 'services/web-development',
    title: 'Web Development',
    subtitle: 'Building blazing-fast, SEO-optimized web experiences using modern frontend architecture.',
    intro: 'We do not build simple websites. We build high-performance digital platforms. Utilizing Next.js, we deliver static-site speed with server-rendered power. Our code is clean, our animations are hardware-accelerated, and our performance scores are perfect.',
    blocks: [
      { title: 'FRONTEND ARCHITECTURE', text: 'Building with Next.js, React, and modern state management for extreme modularity and speed.' },
      { title: 'PERFORMANCE', text: 'Optimizing Core Web Vitals for sub-second load times. We obsess over Lighthouse scores.' },
      { title: 'CMS INTEGRATION', text: 'Connecting powerful headless systems like Sanity and Contentful so your marketing team has total control.' },
      { title: 'ANIMATION', text: 'Implementing smooth, hardware-accelerated WebGL and GSAP animations that never drop frames.' }
    ],
    deliverables: ['Production-ready Codebase', 'Headless CMS Setup', 'Performance Audit Report', 'Technical Documentation', 'Vercel Deployment']
  },
  {
    path: 'services/mobile-apps',
    title: 'Mobile Apps',
    subtitle: 'Deploying native-quality iOS and Android applications with React Native architecture.',
    intro: 'Mobile is not an afterthought; it is often the primary touchpoint. We engineer cross-platform applications that feel distinctly native. We focus heavily on offline capabilities, 60fps animations, and flawless integration with native device hardware.',
    blocks: [
      { title: 'CROSS-PLATFORM', text: 'Writing once, deploying everywhere with React Native, cutting your development time and costs in half.' },
      { title: 'NATIVE MODULES', text: 'Bridging complex hardware capabilities for uncompromising performance when standard APIs fall short.' },
      { title: 'OFFLINE FIRST', text: 'Implementing robust local databases with SQLite and WatermelonDB so your app works even in a tunnel.' },
      { title: 'APP STORE OPTIMIZATION', text: 'Navigating submission processes and maximizing organic reach to ensure your app actually gets downloaded.' }
    ],
    deliverables: ['iOS App Archive', 'Android APK/AAB', 'Expo/React Native Source', 'API Integration', 'Store Listing Assets']
  },
  {
    path: 'services/ux-research',
    title: 'UX Research',
    subtitle: 'Uncovering deep user insights to drive data-informed design decisions.',
    intro: 'Assuming you know what your users want is the fastest way to fail. We replace assumption with empirical data. Our research phase is ruthless, uncovering the psychological drivers and friction points that dictate whether a product lives or dies.',
    blocks: [
      { title: 'USER INTERVIEWS', text: 'Conducting deep-dive qualitative sessions with target demographics to uncover actual pain points.' },
      { title: 'USABILITY AUDITS', text: 'Identifying friction points in existing products through heuristic evaluation and cognitive walkthroughs.' },
      { title: 'A/B TESTING', text: 'Validating hypotheses with quantitative behavioral metrics. We let the data decide the final design.' },
      { title: 'PERSONA MAPPING', text: 'Creating accurate archetypes to guide product strategy and ensure empathy throughout the lifecycle.' }
    ],
    deliverables: ['Executive Research Report', 'User Personas', 'Journey Maps', 'Usability Audit Document', 'Testing Transcripts']
  },

  // COMPANY
  {
    path: 'about',
    title: 'About Us',
    subtitle: 'Ninety5 is a brutalist design and engineering collective founded in 2023 by Mohammed Rayyan.',
    intro: 'Founded By <a href="https://rayyan.qzz.io" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-brand-blue)", textDecoration: "underline", fontWeight: 800 }}>Mohammed Rayyan</a> in 2023, Ninety5 has delivered 400+ Designs to over 100+ clients globally. We are not a traditional agency. Traditional agencies are bloated, slow, and overly diplomatic. We are a collective of senior operators who believe in raw execution, high standards, and extreme velocity. We build products that disrupt industries.',
    blocks: [
      { title: 'OUR FOUNDER', text: 'Mohammed Rayyan established Ninety5 with a vision to strip away the unnecessary and build digital experiences with raw, unapologetic impact.' },
      { title: 'TRACK RECORD', text: 'Since our inception, we have successfully delivered over 400+ high-fidelity designs and engineered products for 100+ satisfied clients.' },
      { title: 'OUR CULTURE', text: 'We value execution over talk. We ship fast, iterate relentlessly, and demand absolute excellence from ourselves and our partners.' },
      { title: 'LOCATION', text: 'Operating primarily from Chennai, with a worldwide client base spanning multiple timezones.' }
    ],
    deliverables: ['Integrity', 'Velocity', 'Excellence', 'Transparency', 'Impact']
  },
  {
    path: 'process',
    title: 'Our Process',
    subtitle: 'A systematic, battle-tested methodology for delivering exceptional products at incredible speed.',
    intro: 'Chaos does not scale. Our methodology is a rigidly structured framework designed to eliminate ambiguity, align stakeholders, and ensure that from day one, progress is measurable and tangible. This is how we guarantee delivery.',
    blocks: [
      { title: '01. DISCOVERY', text: 'Deep alignment on business goals, technical constraints, and user needs. We audit everything before writing a single line of code.' },
      { title: '02. STRATEGY', text: 'Defining the architecture, technology stack, and visual direction. We present a clear roadmap with zero hidden surprises.' },
      { title: '03. EXECUTION', text: 'Sprints of high-fidelity design and rigorous engineering. We work in the open, pushing updates daily so you see the momentum.' },
      { title: '04. DEPLOYMENT', text: 'Flawless launch, post-launch monitoring, and iterative scaling. We treat your launch day as the beginning, not the end.' }
    ],
    deliverables: ['Discovery Brief', 'Technical Architecture', 'Sprint Schedule', 'Weekly Demos', 'Post-Launch SLA']
  },
  {
    path: 'work',
    title: 'Selected Work',
    subtitle: 'A curated archive of our most impactful digital products and brand systems.',
    intro: 'Talk is cheap. Execution is everything. Below is a curated selection of our finest work, ranging from complex enterprise software architecture to highly disruptive consumer branding. We let our portfolio do the heavy lifting.',
    blocks: [
      { title: 'FINTECH PLATFORM', text: 'A complete overhaul of a legacy banking interface resulting in 300% increased conversion and a 50% drop in support tickets.' },
      { title: 'E-COMMERCE', text: 'A headless Shopify build pushing the boundaries of web performance, resulting in a perfect 100 Lighthouse score.' },
      { title: 'SAAS DASHBOARD', text: 'A complex data visualization tool engineered for extreme usability, currently utilized by over 10,000 active daily users.' },
      { title: 'BRAND REDESIGN', text: 'A brutalist identity system for a disruptive AI startup that helped secure their Series A funding.' }
    ],
    deliverables: ['Case Studies', 'Live Links', 'Performance Metrics', 'Client References', 'Design Archives']
  },
  {
    path: 'testimonials',
    title: 'Testimonials',
    subtitle: 'What industry leaders are saying about the Ninety5 standard of execution.',
    intro: 'We measure our success entirely by the success of our clients. We do not chase vanity metrics; we chase business outcomes. Here is what founders, executives, and directors have to say about partnering with us.',
    blocks: [
      { title: 'STARTUP CEO', text: '"Ninety5 didn\'t just build an app; they defined our entire product strategy. Unmatched velocity and an aesthetic that absolutely dominates our niche."' },
      { title: 'VP OF ENGINEERING', text: '"The cleanest React architecture we have ever audited. They operate at the highest technical level. A true engineering powerhouse."' },
      { title: 'CREATIVE DIRECTOR', text: '"Their brutalist aesthetic cuts through the noise perfectly. Bold, decisive, and flawlessly executed from Figma to deployment."' },
      { title: 'FOUNDER', text: '"Working with Ninety5 is a competitive advantage. They deliver on every promise and continually push us to be bolder."' }
    ],
    deliverables: ['Client References', 'Video Testimonials', 'B2B Reviews', 'Clutch Ratings', 'Case Study Validations']
  },
  {
    path: 'faq',
    title: 'FAQ',
    subtitle: 'Answers to the most common questions regarding our capabilities and engagement models.',
    intro: 'Transparency is a core value. We do not hide our processes or our pricing. Below are the most frequently asked questions from prospective clients regarding how we work, what we charge, and what we deliver.',
    blocks: [
      { title: 'HOW DO YOU CHARGE?', text: 'We operate on value-based project pricing or dedicated monthly retainers for long-term partners. No hourly billing. No surprises.' },
      { title: 'WHAT IS YOUR STACK?', text: 'Next.js, React, TypeScript, React Native, and robust headless CMS solutions. We use what is proven, fast, and scalable.' },
      { title: 'TYPICAL TIMELINE?', text: 'Most projects range from 8 to 16 weeks, depending on technical complexity. We move faster than traditional agencies.' },
      { title: 'DO YOU DO MARKETING?', text: 'We focus strictly on product design and engineering. We build the rocket; you fly it. We can, however, recommend world-class marketing partners.' }
    ]
  },
  {
    path: 'contact',
    title: 'Contact',
    subtitle: 'Ready to build something extraordinary? Our inbox is open.',
    intro: 'Whether you are a funded startup looking to disrupt an industry or an enterprise looking to modernize a legacy system, we are ready to execute. Reach out with your brief, and we will get back to you immediately.',
    blocks: [
      { title: 'EMAIL', text: 'hello@ninety5.studio' },
      { title: 'LOCATIONS', text: 'Chennai, India' },
      { title: 'RESPONSE TIME', text: 'We typically respond to all inquiries within 24 hours with actionable feedback on your request.' },
      { title: 'NEW BUSINESS', text: 'Currently accepting select projects for the upcoming quarter. Slots are highly limited.' }
    ]
  },

  // LEGAL
  {
    path: 'legal/privacy-policy',
    title: 'Privacy Policy',
    subtitle: 'How we collect, use, and protect your data.',
    intro: 'Your privacy is paramount. We believe in absolute transparency regarding what data we collect and exactly how it is utilized. We comply with all global data protection regulations.',
    blocks: [
      { title: 'DATA COLLECTION', text: 'We collect minimal necessary data to provide our services and improve user experience. We never collect sensitive information without explicit consent.' },
      { title: 'DATA USAGE', text: 'Your information is never sold. It is used strictly for communication, analytics, and service improvement.' },
      { title: 'THIRD PARTIES', text: 'We utilize industry-standard third-party processors who comply with strict GDPR and CCPA regulations.' },
      { title: 'YOUR RIGHTS', text: 'You have the fundamental right to request deletion, modification, or export of your personal data at any time.' }
    ]
  },
  {
    path: 'legal/terms-of-service',
    title: 'Terms of Service',
    subtitle: 'The rules and guidelines for engaging with Ninety5 Studio.',
    intro: 'These terms constitute a legally binding agreement between you and Ninety5 Studio. Please read them carefully before utilizing our website or engaging our services.',
    blocks: [
      { title: 'AGREEMENT', text: 'By using our site or services, you explicitly agree to these fundamental terms and conditions.' },
      { title: 'INTELLECTUAL PROPERTY', text: 'All design assets and source code remain the exclusive property of Ninety5 until final payment is received in full.' },
      { title: 'LIABILITY', text: 'We provide software "as is" and cannot be held legally liable for indirect, incidental, or consequential damages.' },
      { title: 'JURISDICTION', text: 'These terms are governed by the laws applicable in our primary operating regions of India and the UAE.' }
    ]
  },
  {
    path: 'legal/cookie-policy',
    title: 'Cookie Policy',
    subtitle: 'Information about how we use cookies and tracking technologies.',
    intro: 'We utilize cookies to ensure that we give you the best experience on our website. This policy details the types of cookies we use and how you can manage your preferences.',
    blocks: [
      { title: 'ESSENTIAL COOKIES', text: 'These are required for basic site functionality, such as security and network management, and cannot be disabled.' },
      { title: 'ANALYTICS COOKIES', text: 'Used to anonymously understand traffic patterns and optimize performance. We use this data to improve our platform.' },
      { title: 'MARKETING COOKIES', text: 'We do not currently deploy intrusive third-party marketing or tracking cookies on this site.' },
      { title: 'MANAGE PREFERENCES', text: 'You can clear, block, or manage cookies directly within your browser settings at any point.' }
    ]
  }
];

const generateTemplate = (data) => {
  const blocksHtml = data.blocks.map((block, index) => {
    const shadowColor = index % 2 === 0 ? "var(--color-brand-blue)" : "var(--color-brand-orange)";
    return `
              <div style={{ border: "4px solid var(--color-dark)", padding: "2.5rem", display: "flex", flexDirection: "column", gap: "1.5rem", boxShadow: "8px 8px 0 " + "${shadowColor}", backgroundColor: "var(--color-white)" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 800, textTransform: "uppercase", color: "var(--color-dark)", borderBottom: "4px solid var(--color-dark)", paddingBottom: "1rem" }}>
                  ${block.title}
                </h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "1.125rem", color: "var(--color-dark)", lineHeight: 1.7, fontWeight: 500 }}>
                  ${block.text}
                </p>
              </div>
            `;
  }).join('');

  const deliverablesSection = data.deliverables && data.deliverables.length > 0 ? `
          {/* Deliverables Section */}
          <div style={{ backgroundColor: "var(--color-brand-blue)", padding: "4rem", border: "4px solid var(--color-dark)", boxShadow: "16px 16px 0 var(--color-brand-orange)", marginBottom: "8rem" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "2.5rem", fontWeight: 800, textTransform: "uppercase", color: "var(--color-white)", marginBottom: "3rem", borderBottom: "4px solid var(--color-white)", paddingBottom: "1rem" }}>Deliverables</h2>
            <ul style={{ listStyle: "none", padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.5rem" }}>
              ${data.deliverables.map((item) => `
              <li style={{ fontSize: "1.125rem", fontWeight: 700, padding: "1rem", border: "2px solid var(--color-dark)", backgroundColor: "var(--color-bg)", textTransform: "uppercase", boxShadow: "4px 4px 0 var(--color-dark)", color: "var(--color-dark)" }}>
                ${item}
              </li>
              `).join('')}
            </ul>
          </div>
  ` : '';

  return `import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "140px", paddingBottom: "120px", backgroundColor: "var(--color-white)", minHeight: "100vh" }}>
        <div className="container">
          {/* Header Section */}
          <div style={{ borderBottom: "8px solid var(--color-dark)", paddingBottom: "3rem", marginBottom: "5rem" }}>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3.5rem, 10vw, 8rem)", fontWeight: 800, textTransform: "uppercase", color: "var(--color-dark)", lineHeight: 0.85, letterSpacing: "-0.04em", wordBreak: "break-word" }}>
              ${data.title}
            </h1>
          </div>
          
          {/* Intro Section */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem", marginBottom: "6rem" }}>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "1.5rem", fontWeight: 700, color: "var(--color-brand-blue)", maxWidth: "800px", lineHeight: 1.4 }}>
              ${data.subtitle}
            </p>
            <div style={{ borderLeft: "8px solid var(--color-brand-orange)", paddingLeft: "2rem" }}>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "1.25rem", color: "var(--color-dark)", lineHeight: 1.8, maxWidth: "800px", fontWeight: 500 }}>
                ${data.intro}
              </p>
            </div>
          </div>
          
          {/* Feature Grid */}
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "2.5rem", fontWeight: 800, textTransform: "uppercase", color: "var(--color-dark)", marginBottom: "3rem" }}>Capabilities</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "3rem", marginBottom: "8rem" }}>
            ${blocksHtml}
          </div>

          ${deliverablesSection}
          
          {/* CTA Section */}
          <div style={{ borderTop: "8px solid var(--color-dark)", paddingTop: "5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "3rem" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 800, textTransform: "uppercase", color: "var(--color-dark)", lineHeight: 1 }}>Ready to dominate?</h2>
            <a href="/#contact" className="btn btn-primary" style={{ padding: "1.5rem 3rem", fontSize: "1.25rem", borderRadius: 0, textTransform: "uppercase", fontWeight: 800, textDecoration: "none", boxShadow: "8px 8px 0 var(--color-brand-orange)" }}>
              Start a Project
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
`;
};

pageData.forEach(p => {
  const dirPath = path.join(__dirname, 'src', 'app', p.path);
  fs.mkdirSync(dirPath, { recursive: true });
  fs.writeFileSync(path.join(dirPath, 'page.tsx'), generateTemplate(p));
  console.log('Overwrote ' + p.path + ' with rich content');
});
