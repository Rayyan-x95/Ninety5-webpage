import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initializeAnimations() {
  // Hero section reveal animations
  const heroTl = gsap.timeline({ defaults: { ease: 'power2.out' } });
  
  heroTl.to('.line-inner', {
    y: '0%',
    duration: 1.4,
    stagger: 0.1,
    delay: 0.2
  })
  .to('.reveal-text', {
    opacity: 1,
    y: 0,
    duration: 1.2
  }, "-=0.8")
  .to('.reveal-opacity', {
    opacity: 1,
    duration: 1.2
  }, "-=0.6")
  .to('#hero-marquee', {
    opacity: 1,
    duration: 1.2,
    ease: 'power1.inOut'
  }, "-=0.8");

  // Fade up animations for sections
  const fadeElements = document.querySelectorAll('.section-title, .section-subtitle, .about-headline, .about-points li, .service-card, .work-card, .process-step, .trusted-by');
  
  fadeElements.forEach((el) => {
    gsap.fromTo(el, {
      opacity: 0,
      y: 40
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', initializeAnimations);
