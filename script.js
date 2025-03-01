/* script.js */
document.addEventListener('DOMContentLoaded', function () {
  /**
   * Scroll-triggered animations with IntersectionObserver
   */
  const observerOptions = { threshold: 0.1 };
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });

  /**
   * Copy Email to Clipboard
   */
  const copyButton = document.getElementById('copyEmail');
  if (copyButton) {
    copyButton.addEventListener('click', () => {
      const emailText = document.getElementById('emailCopy').innerText;
      navigator.clipboard.writeText(emailText)
        .then(() => {
          copyButton.innerText = 'Copied!';
          setTimeout(() => { copyButton.innerText = 'Copy'; }, 2000);
        })
        .catch(err => {
          console.error('Failed to copy email: ', err);
        });
    });
  }

  /**
   * Scroll Indicator - scroll to Intro Section
   */
  const scrollIndicator = document.querySelector('.scroll-indicator');
  if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
      const nextSection = document.getElementById('intro');
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  /**
   * Form Submission Tracking (Google Analytics event example)
   */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function () {
      if (window.gtag) {
        gtag('event', 'contact_form_submission', {
          event_category: 'Contact',
          event_label: 'Contact Form'
        });
      }
      // The form is sent via mailto, so no additional JS handling is required
    });
  }

/* 2. Add skill toggle logic */
document.addEventListener('DOMContentLoaded', function () {
  // Existing code for IntersectionObserver, copy email, etc. remains...

  // SKILL TOGGLE LOGIC
  const skillToggles = document.querySelectorAll('.skill-toggle');
  skillToggles.forEach((toggle) => {
    toggle.addEventListener('click', () => {
      const description = toggle.nextElementSibling;
      const isHidden = description.hasAttribute('hidden');

      // Toggle the hidden attribute
      if (isHidden) {
        description.removeAttribute('hidden');
        toggle.setAttribute('aria-expanded', 'true');
        toggle.querySelector('.skill-arrow').textContent = '–';
      } else {
        description.setAttribute('hidden', '');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.querySelector('.skill-arrow').textContent = '+';
      }
    });
  });
});
