document.addEventListener("DOMContentLoaded", function () {
  // IntersectionObserver for scroll-triggered animations
  const animateElements = document.querySelectorAll('.animate');
  const observerOptions = {
    threshold: 0.2
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  animateElements.forEach(el => {
    observer.observe(el);
  });
});

// Copy email to clipboard function
function copyEmail() {
  const emailText = document.getElementById('copyEmail').innerText;
  navigator.clipboard.writeText(emailText).then(() => {
    alert("Email address copied to clipboard!");
  }).catch(err => {
    alert("Failed to copy email: " + err);
  });
}
