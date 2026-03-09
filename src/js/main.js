import Lenis from '@studio-freight/lenis';
import VanillaTilt from 'vanilla-tilt';

export function initializeApp() {
  // Initialize Smooth Scrolling
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  requestAnimationFrame(raf);

  // Preloader Logic
  window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
      setTimeout(() => {
        preloader.classList.add('loaded');
      }, 500); // Small delay for effect
    }
  });

  // Custom Cursor Logic
  const cursor = document.querySelector('.cursor');
  const hoverElements = document.querySelectorAll('a, button, input, textarea, .divisions-card');

  if (cursor) {
    document.addEventListener('mousemove', (e) => {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
    });

    hoverElements.forEach((el) => {
      el.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
    });
  }

  // Magnetic Buttons Logic
  const magneticButtons = document.querySelectorAll('.btn');
  magneticButtons.forEach((btn) => {
    btn.addEventListener('mousemove', (e) => {
      const position = btn.getBoundingClientRect();
      const x = e.clientX - position.left - position.width / 2;
      const y = e.clientY - position.top - position.height / 2;

      // Move the button itself
      btn.style.transform = `translate(${x * 0.3}px, ${y * 0.5}px)`;
      
      // Move the text inside (if wrapped in a span, or just the button text)
      // We will assume text is inside the button directly or in a span
      const text = btn.querySelector('span') || btn;
      if(text !== btn) {
         text.style.transform = `translate(${x * 0.2}px, ${y * 0.3}px)`;
      }
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0px, 0px)';
      const text = btn.querySelector('span');
      if(text) {
         text.style.transform = 'translate(0px, 0px)';
      }
    });
  });

  // Header Scroll Effect
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  
  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      // Very basic toggle, you would normally add a proper mobile menu overlay
      navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
      navLinks.style.flexDirection = 'column';
      navLinks.style.position = 'absolute';
      navLinks.style.top = '80px';
      navLinks.style.left = '0';
      navLinks.style.width = '100%';
      navLinks.style.backgroundColor = 'var(--bg-primary)';
      navLinks.style.padding = '2rem';
    });
  }
  // Dynamic Marquee Logic
  let lastScrollY = window.scrollY;
  const marqueeInner = document.querySelector('.marquee-inner');
  
  const parallaxElements = document.querySelectorAll('.hero-division-logo');

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    
    // Parallax logic
    parallaxElements.forEach(el => {
      el.style.transform = `translateY(${currentScrollY * 0.15}px)`;
    });

    if (marqueeInner) {
      const scrollDelta = currentScrollY - lastScrollY;
      
      // Calculate skew based on scroll speed
      const skewAmount = Math.min(Math.max(scrollDelta * 0.1, -15), 15);
      marqueeInner.style.transform = `skewY(${skewAmount}deg)`;
      
      clearTimeout(marqueeInner.skewTimeout);
      marqueeInner.skewTimeout = setTimeout(() => {
        marqueeInner.style.transform = 'skewY(0deg)';
      }, 100);
    }
    
    lastScrollY = currentScrollY;
  });

  // 3D Tilt Initialization
  const tiltElements = document.querySelectorAll('.divisions-card');
  if (tiltElements.length > 0) {
    VanillaTilt.init(tiltElements, {
      max: 5,
      speed: 400,
      glare: true,
      "max-glare": 0.1,
      scale: 1.02,
      easing: "cubic-bezier(.03,.98,.52,.99)"
    });
  }

  // Scroll Reveal Logic (Intersection Observer)
  const revealElements = document.querySelectorAll('.reveal-text, .reveal-opacity, .hero-desc, .section-title, .divisions-card');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  revealElements.forEach(el => {
    revealObserver.observe(el);
  });

  // FAQ Accordion Logic
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(q => {
    q.addEventListener('click', () => {
      const item = q.parentElement;
      const isActive = item.classList.contains('active');
      
      // Close all others
      document.querySelectorAll('.faq-item').forEach(other => {
        other.classList.remove('active');
        const answer = other.querySelector('.faq-answer');
        if (answer) answer.style.display = 'none';
      });

      if (!isActive) {
        item.classList.add('active');
        const answer = item.querySelector('.faq-answer');
        if (answer) answer.style.display = 'block';
      }
    });
  });
}

// Mock Form Submission
window.submitContactForm = function(form) {
  const btn = form.querySelector('.submit-btn');
  const btnText = btn.querySelector('.btn-text');
  const btnLoader = btn.querySelector('.btn-loader');
  const successMsg = form.querySelector('.form-success-msg');
  
  // Loading State
  btnText.style.display = 'none';
  btnLoader.style.display = 'inline-block';
  btn.style.opacity = '0.7';
  btn.style.pointerEvents = 'none';
  
  // Simulate API call
  setTimeout(() => {
    // Reset Form
    form.reset();
    
    // Success State
    btn.style.display = 'none';
    successMsg.style.display = 'block';
    
    // Restore button after 5 seconds
    setTimeout(() => {
      btn.style.display = 'inline-flex';
      btnText.style.display = 'inline-block';
      btnLoader.style.display = 'none';
      btn.style.opacity = '1';
      btn.style.pointerEvents = 'auto';
      successMsg.style.display = 'none';
    }, 5000);
  }, 1500);
}

document.addEventListener('DOMContentLoaded', initializeApp);
