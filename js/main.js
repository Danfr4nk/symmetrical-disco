'use strict';

// Sticky nav
const header = document.getElementById('site-header');
const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 40);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

navToggle.addEventListener('click', () => {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!expanded));
  navLinks.classList.toggle('open');
});

// Close mobile nav on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Scroll reveal
const revealEls = document.querySelectorAll(
  '.product-card, .culture-card, .timeline-item, .section-header, .flavors-text, .sus-content, .sus-visual'
);

revealEls.forEach(el => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

revealEls.forEach(el => revealObserver.observe(el));

// Newsletter form
const newsletterForm = document.getElementById('newsletter-form');
newsletterForm.addEventListener('submit', e => {
  e.preventDefault();
  const input = newsletterForm.querySelector('input[type="email"]');
  const btn = newsletterForm.querySelector('button');
  const original = btn.textContent;

  btn.textContent = 'Subscribed!';
  btn.style.background = '#27AE60';
  input.value = '';

  setTimeout(() => {
    btn.textContent = original;
    btn.style.background = '';
  }, 3000);
});

// Smooth active nav link highlighting
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navAnchors.forEach(a => {
          a.style.color = a.getAttribute('href') === `#${id}`
            ? 'rgba(255,255,255,1)'
            : '';
          a.style.background = a.getAttribute('href') === `#${id}`
            ? 'rgba(255,255,255,0.1)'
            : '';
        });
      }
    });
  },
  { threshold: 0.4 }
);

sections.forEach(s => sectionObserver.observe(s));
