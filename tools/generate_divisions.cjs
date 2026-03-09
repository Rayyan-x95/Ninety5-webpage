const fs = require('fs');
const path = require('path');

const indexHtml = fs.readFileSync(path.join('c:/Users/M Mohammed Rayyan/Ninety5-webpage', 'index.html'), 'utf8');

const regex = /<main>[\s\S]*?<\/main>/;

const studioMain = `<main>
      <section class="hero padding-section" id="home">
        <div class="container hero-container">
          <h1 class="hero-title">
            <span class="line-wrap"><span class="line-inner">Ninety5</span></span>
            <span class="line-wrap"><span class="line-inner font-serif accent-text" style="font-style: italic;">Studio.</span></span>
          </h1>
          <p class="hero-desc reveal-text">
            The core creative division responsible for branding, graphic design, and visionary visual identity systems.
          </p>
        </div>
      </section>
      <section class="services padding-section bg-secondary" id="services">
        <div class="container">
          <div class="section-header">
            <span class="badge-outline">Our Services</span>
            <h2 class="section-title" style="color: var(--color-white)">01 — Services</h2>
          </div>
          <div class="services-grid">
            <div class="service-card divisions-card">
              <h4>Brand Identity Design</h4>
              <p>We craft complete visual identities from logos and typography to color palettes and brand voice, establishing a memorable foundation for your business.</p>
            </div>
            <div class="service-card divisions-card">
              <h4>Graphic Design</h4>
              <p>Impactful visual materials for print and digital, communicating your ideas clearly while maintaining absolute aesthetic quality.</p>
            </div>
            <div class="service-card divisions-card">
              <h4>Visual Systems</h4>
              <p>Comprehensive design systems that ensure consistency across all touchpoints, from digital products to physical collateral.</p>
            </div>
            <div class="service-card divisions-card">
              <h4>Creative Direction</h4>
              <p>Guiding the overarching visual narrative and aesthetic execution to ensure your brand stands out in a crowded market.</p>
            </div>
          </div>
        </div>
      </section>
    </main>`;

fs.writeFileSync(path.join('c:/Users/M Mohammed Rayyan/Ninety5-webpage', 'studio.html'), indexHtml.replace(regex, studioMain));

const labsMain = `<main>
      <section class="hero padding-section" id="home">
        <div class="container hero-container">
          <h1 class="hero-title">
            <span class="line-wrap"><span class="line-inner">Ninety5</span></span>
            <span class="line-wrap"><span class="line-inner font-serif accent-text" style="font-style: italic;">Labs.</span></span>
          </h1>
          <p class="hero-desc reveal-text">
            Our future-facing division focused on experimentation, creative tools, and harnessing emerging technologies.
          </p>
        </div>
      </section>
      <section class="services padding-section bg-secondary" id="services">
        <div class="container">
          <div class="section-header">
            <span class="badge-outline">Focus Areas</span>
            <h2 class="section-title" style="color: var(--color-white)">01 — Innovations</h2>
          </div>
          <div class="services-grid">
            <div class="service-card divisions-card">
              <h4>Emerging Tech</h4>
              <p>Exploring the frontier of highly interactive and generative spatial web experiences.</p>
            </div>
            <div class="service-card divisions-card">
              <h4>Creative Tools</h4>
              <p>Developing internal and external software to push the boundaries of modern design workflows.</p>
            </div>
            <div class="service-card divisions-card">
              <h4>Experimental UI</h4>
              <p>Prototyping advanced user interfaces that prioritize fluidity, delight, and unconventional layouts.</p>
            </div>
            <div class="service-card divisions-card">
              <h4>Design Research</h4>
              <p>Conducting deep dives into consumer behavior and aesthetic trends to stay ahead of the curve.</p>
            </div>
          </div>
        </div>
      </section>
    </main>`;

fs.writeFileSync(path.join('c:/Users/M Mohammed Rayyan/Ninety5-webpage', 'labs.html'), indexHtml.replace(regex, labsMain));

const marketingMain = `<main>
      <section class="hero padding-section" id="home">
        <div class="container hero-container">
          <h1 class="hero-title">
            <span class="line-wrap"><span class="line-inner">Ninety5</span></span>
            <span class="line-wrap"><span class="line-inner font-serif accent-text" style="font-style: italic;">Marketing.</span></span>
          </h1>
          <p class="hero-desc reveal-text">
            Digital growth engine providing advanced brand strategy, content creation, and results-driven campaigns.
          </p>
        </div>
      </section>
      <section class="services padding-section bg-secondary" id="services">
        <div class="container">
          <div class="section-header">
            <span class="badge-outline">Growth Strategies</span>
            <h2 class="section-title" style="color: var(--color-white)">01 — Services</h2>
          </div>
          <div class="services-grid">
            <div class="service-card divisions-card">
              <h4>Brand Strategy</h4>
              <p>Developing robust frameworks to position your brand effectively and connect deeply with target audiences.</p>
            </div>
            <div class="service-card divisions-card">
              <h4>Content Strategy</h4>
              <p>Crafting compelling narratives and planning content distribution to maximize engagement and authority.</p>
            </div>
            <div class="service-card divisions-card">
              <h4>Social Campaigns</h4>
              <p>Executing high-impact social media initiatives that drive brand awareness and digital growth.</p>
            </div>
            <div class="service-card divisions-card">
              <h4>Digital Growth</h4>
              <p>Implementing data-driven strategies to scale user acquisition and optimize conversion funnels.</p>
            </div>
          </div>
        </div>
      </section>
    </main>`;

fs.writeFileSync(path.join('c:/Users/M Mohammed Rayyan/Ninety5-webpage', 'marketing.html'), indexHtml.replace(regex, marketingMain));

const academyMain = `<main>
      <section class="hero padding-section" id="home">
        <div class="container hero-container">
          <h1 class="hero-title">
            <span class="line-wrap"><span class="line-inner">Ninety5</span></span>
            <span class="line-wrap"><span class="line-inner font-serif accent-text" style="font-style: italic;">Academy.</span></span>
          </h1>
          <p class="hero-desc reveal-text">
            Building community through design education, creative workshops, and powerful learning resources.
          </p>
        </div>
      </section>
      <section class="services padding-section bg-secondary" id="services">
        <div class="container">
          <div class="section-header">
            <span class="badge-outline">Education</span>
            <h2 class="section-title" style="color: var(--color-white)">01 — Programs</h2>
          </div>
          <div class="services-grid">
            <div class="service-card divisions-card">
              <h4>UX/UI Workshops</h4>
              <p>Intensive hands-on sessions teaching modern interface design, prototyping, and usability principles.</p>
            </div>
            <div class="service-card divisions-card">
              <h4>Strategy Masterclass</h4>
              <p>In-depth courses on brand positioning, market research, and crafting compelling creative briefs.</p>
            </div>
            <div class="service-card divisions-card">
              <h4>Design Tutorials</h4>
              <p>Bite-sized video content covering software techniques, workflow hacks, and typography rules.</p>
            </div>
            <div class="service-card divisions-card">
              <h4>Community Events</h4>
              <p>Networking sessions, portfolio reviews, and guest lectures featuring industry-leading creatives.</p>
            </div>
          </div>
        </div>
      </section>
    </main>`;

fs.writeFileSync(path.join('c:/Users/M Mohammed Rayyan/Ninety5-webpage', 'academy.html'), indexHtml.replace(regex, academyMain));
