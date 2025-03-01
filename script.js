/* script.js */

// Wait for the DOM to load before executing scripts
document.addEventListener('DOMContentLoaded', function() {
  // Set up IntersectionObserver for scroll-triggered animations
  const observerOptions = {
    threshold: 0.2
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe timeline and career timeline items
  const timelineItems = document.querySelectorAll('.timeline-item, .career-timeline .timeline-item');
  timelineItems.forEach(item => observer.observe(item));

  // Email "Copy to Clipboard" functionality
  const copyBtn = document.getElementById('copyEmail');
  if(copyBtn) {
    copyBtn.addEventListener('click', function() {
      const emailText = document.getElementById('emailText').textContent;
      navigator.clipboard.writeText(emailText)
      .then(() => {
        copyBtn.textContent = 'Copied!';
        setTimeout(() => {
          copyBtn.textContent = 'Copy';
        }, 2000);
      })
      .catch(err => {
        console.error('Failed to copy email: ', err);
      });
    });
  }

  // Contact form submission handling
  const contactForm = document.getElementById('contactForm');
  if(contactForm) {
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();
      // Gather form data
      const formData = new FormData(contactForm);
      // For production, replace this with an AJAX call to your backend service.
      alert('Thank you for your message! We will get back to you shortly.');
      contactForm.reset();
      // Example: Trigger goal tracking with Google Analytics
      gtag('event', 'form_submission', {
        'event_category': 'Contact',
        'event_label': 'Contact Form Submitted'
      });
    });
  }
});
