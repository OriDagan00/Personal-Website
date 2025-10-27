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
   * Enhanced Form validation and submission handling
   */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    // Form validation
    const validateForm = () => {
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      const submitButton = contactForm.querySelector('.btn-submit');
      
      let isValid = true;
      
      // Clear previous error messages
      document.querySelectorAll('.error-message').forEach(msg => msg.remove());
      document.querySelectorAll('.form-group input, .form-group textarea').forEach(input => {
        input.classList.remove('error');
      });
      
      // Validate name
      if (name.length < 2) {
        showFieldError('name', 'Name must be at least 2 characters long');
        isValid = false;
      }
      
      // Validate email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showFieldError('email', 'Please enter a valid email address');
        isValid = false;
      }
      
      // Validate message
      if (message.length < 10) {
        showFieldError('message', 'Message must be at least 10 characters long');
        isValid = false;
      }
      
      // Enable/disable submit button
      submitButton.disabled = !isValid;
      
      return isValid;
    };
    
    // Show field error
    const showFieldError = (fieldId, message) => {
      const field = document.getElementById(fieldId);
      const formGroup = field.closest('.form-group');
      
      field.classList.add('error');
      
      const errorDiv = document.createElement('div');
      errorDiv.className = 'error-message';
      errorDiv.textContent = message;
      errorDiv.style.color = '#e74c3c';
      errorDiv.style.fontSize = '0.875rem';
      errorDiv.style.marginTop = '0.25rem';
      
      formGroup.appendChild(errorDiv);
    };
    
    // Real-time validation
    const formInputs = contactForm.querySelectorAll('input, textarea');
    formInputs.forEach(input => {
      input.addEventListener('blur', validateForm);
      input.addEventListener('input', () => {
        // Clear error styling on input
        input.classList.remove('error');
        const errorMsg = input.closest('.form-group').querySelector('.error-message');
        if (errorMsg) errorMsg.remove();
      });
    });
    
    // Form submission handling
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault(); // Prevent default mailto behavior
      
      if (!validateForm()) {
        return;
      }
      
      const submitButton = contactForm.querySelector('.btn-submit');
      const originalButtonText = submitButton.innerText;
      
      // Show loading state
      submitButton.innerText = 'Opening Email...';
      submitButton.disabled = true;
      
      // Track form submission with Google Analytics event
      if (window.gtag) {
        gtag('event', 'contact_form_submission', {
          event_category: 'Contact',
          event_label: 'Contact Form'
        });
      }
      
      // Show confirmation dialog
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value.trim();
      
      const confirmMessage = `Ready to send your message?\n\nTo: oridagan00@gmail.com\nSubject: ${subject}\n\nYour message will open in your email client.`;
      
      if (confirm(confirmMessage)) {
        // Create mailto URL with form data
        const subjectText = subject.charAt(0).toUpperCase() + subject.slice(1);
        const mailtoUrl = `mailto:oridagan00@gmail.com?subject=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
        
        // Open email client
        window.location.href = mailtoUrl;
        
        // Show success message
        submitButton.innerText = 'Email Opened!';
        setTimeout(() => {
          submitButton.innerText = originalButtonText;
          submitButton.disabled = false;
          contactForm.reset();
        }, 3000);
      } else {
        // User cancelled
        submitButton.innerText = originalButtonText;
        submitButton.disabled = false;
      }
    });
    
    // Initial validation
    validateForm();
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
