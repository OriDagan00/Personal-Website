/* script.js */

/**
 * DOMContentLoaded ensures that the script runs after the DOM is fully loaded.
 */
document.addEventListener('DOMContentLoaded', function () {
  /* IntersectionObserver for scroll-triggered animations.
     Elements with the 'animate-on-scroll' class will receive the 'in-view' class when visible.
  */
  const observerOptions = { threshold: 0.1 };
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });

  // Copy Email to Clipboard Functionality
  const copyButton = document.getElementById('copyEmail');
  if (copyButton) {
    copyButton.addEventListener('click', function () {
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

  // Smooth scroll indicator click event to scroll to the Introduction section
  const scrollIndicator = document.querySelector('.scroll-indicator');
  if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
      const nextSection = document.getElementById('intro');
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Form submission tracking (for analytics)
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      // Example: Track form submission with Google Analytics event
      if (window.gtag) {
        gtag('event', 'contact_form_submission', {
          'event_category': 'Contact',
          'event_label': 'Contact Form'
        });
      }
      // The form submission is handled via mailto
    });
  }

  // Example: Parallax effect for Military Service Photo (if applicable)
  const militaryImage = document.querySelector('.military .timeline-item img');
  if (militaryImage) {
    window.addEventListener('scroll', function () {
      const scrolled = window.pageYOffset;
      militaryImage.style.transform = 'translateY(' + scrolled * 0.1 + 'px)';
    });
  }

  // Initialize Skills Chart using Chart.js if the canvas element exists
  const skillsChartCanvas = document.getElementById('skillsChart');
  if (skillsChartCanvas && window.Chart) {
    const ctx = skillsChartCanvas.getContext('2d');
    const skillsChart = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: ['Leadership', 'Technical Implementation', 'Educational Design', 'Digital Transformation'],
        datasets: [{
          label: 'Proficiency Levels',
          data: [90, 80, 85, 75], // Example proficiency percentages; update as needed
          backgroundColor: 'rgba(56, 178, 172, 0.2)',
          borderColor: 'rgba(56, 178, 172, 1)',
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        scales: {
          r: {
            angleLines: { display: true },
            suggestedMin: 0,
            suggestedMax: 100
          }
        }
      }
    });
  }
});
