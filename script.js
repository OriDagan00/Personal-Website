/* script.js */
document.addEventListener('DOMContentLoaded', function () {
  /**
   * IntersectionObserver for scroll-triggered animations.
   * Elements with the 'animate-on-scroll' class will receive the 'in-view' class when visible.
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
   * Copy Email to Clipboard Functionality
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
   * Smooth scroll indicator click event to scroll to the Introduction section
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
   * Email Me Button functionality
   */
  const emailMeButton = document.getElementById('emailMeButton');
  if (emailMeButton) {
    emailMeButton.addEventListener('click', function () {
      window.location.href = "mailto:oridagan00@gmail.com";
    });
  }

  /**
   * Example: Parallax effect for Military Service Photo (if applicable)
   * (Optional: Remove if not needed)
   */
  const militaryImage = document.querySelector('.military .timeline-item img');
  if (militaryImage) {
    window.addEventListener('scroll', function () {
      const scrolled = window.pageYOffset;
      militaryImage.style.transform = 'translateY(' + scrolled * 0.1 + 'px)';
    });
  }

  /**
   * SKILL TOGGLE LOGIC
   * Toggles the hidden <div> that contains the skill description.
   */
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
