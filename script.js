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

  /**
   * Example: Skills Radar Chart with Chart.js
   */
  const skillsChartCanvas = document.getElementById('skillsChart');
  if (skillsChartCanvas && window.Chart) {
    const ctx = skillsChartCanvas.getContext('2d');
    new Chart(ctx, {
      type: 'radar',
      data: {
        labels: [
          'Leadership & Management',
          'Technical Implementation',
          'Educational Design',
          'Digital Transformation'
        ],
        datasets: [
          {
            label: 'Proficiency',
            data: [90, 80, 85, 75], // Example percentages, adjust as needed
            backgroundColor: 'rgba(56, 178, 172, 0.2)',
            borderColor: 'rgba(56, 178, 172, 1)',
            borderWidth: 2
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          r: {
            suggestedMin: 0,
            suggestedMax: 100,
            angleLines: { display: true },
            grid: { color: '#ccc' },
            pointLabels: { color: '#333' }
          }
        }
      }
    });
  }
});
