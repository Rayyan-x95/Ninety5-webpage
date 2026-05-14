const fs = require('fs');
const path = require('path');

const pages = [
  { path: 'services/product-design', title: 'Product Design' },
  { path: 'services/brand-identity', title: 'Brand Identity' },
  { path: 'services/design-systems', title: 'Design Systems' },
  { path: 'services/web-development', title: 'Web Development' },
  { path: 'services/mobile-apps', title: 'Mobile Apps' },
  { path: 'services/ux-research', title: 'UX Research' },
  { path: 'about', title: 'About Us' },
  { path: 'process', title: 'Our Process' },
  { path: 'work', title: 'Selected Work' },
  { path: 'testimonials', title: 'Testimonials' },
  { path: 'faq', title: 'FAQ' },
  { path: 'contact', title: 'Contact' },
  { path: 'legal/privacy-policy', title: 'Privacy Policy' },
  { path: 'legal/terms-of-service', title: 'Terms of Service' },
  { path: 'legal/cookie-policy', title: 'Cookie Policy' },
];

const template = (title) => `import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "120px", minHeight: "80vh", backgroundColor: "var(--color-white)" }}>
        <div className="container">
          <h1 style={{ fontSize: "clamp(3rem, 6vw, 5rem)", fontWeight: 800, textTransform: "uppercase", color: "var(--color-dark)", marginBottom: "2rem" }}>
            ${title}
          </h1>
          <p style={{ fontSize: "1.25rem", maxWidth: "800px", color: "var(--color-dark)", lineHeight: 1.6 }}>
            This is the ${title} page. Content is currently being updated for the new Brutalist design system. Check back soon for the full experience.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
`;

pages.forEach(p => {
  const dirPath = path.join(__dirname, 'src', 'app', p.path);
  fs.mkdirSync(dirPath, { recursive: true });
  fs.writeFileSync(path.join(dirPath, 'page.tsx'), template(p.title));
  console.log(`Created ${p.path}`);
});
