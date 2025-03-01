document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Contact Form Submission Alert
    const contactForm = document.querySelector(".contact form");
    if (contactForm) {
        contactForm.addEventListener("submit", (event) => {
            alert("Thank you for reaching out! I will get back to you soon.");
        });
    }

    // Skills hover effect
    document.querySelectorAll(".skill").forEach(skill => {
        skill.addEventListener("mouseover", () => {
            skill.style.transform = "scale(1.1)";
            skill.style.transition = "0.3s";
        });
        skill.addEventListener("mouseout", () => {
            skill.style.transform = "scale(1)";
        });
    });

    // Copy email to clipboard
    const emailElement = document.querySelector(".contact p a");
    if (emailElement) {
        emailElement.addEventListener("click", (event) => {
            event.preventDefault();
            navigator.clipboard.writeText("oridagan00@gmail.com").then(() => {
                alert("Email copied to clipboard!");
            }).catch(err => {
                console.error("Failed to copy: ", err);
            });
        });
    }
});
