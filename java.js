// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
    // Slider functionality
    let slides = document.querySelectorAll(".skill-slide");
    let currentSlide = 0;

    if (slides.length > 0) {
        function showSlide() {
            slides.forEach((slide, index) => {
                slide.classList.remove("active");
                if (index === currentSlide) {
                    slide.classList.add("active");
                }
            });
            currentSlide = (currentSlide + 1) % slides.length;
        }
        
        // Show first slide immediately
        showSlide();
        setInterval(showSlide, 3000);
    }

    // Contact form functionality
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        emailjs.init("wqd19tNPkj0b7RCwW");
        
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            emailjs.send('service_gdjveve', 'template_z0c5qlh', {
                name: name,
                email: email,
                message: message
            }).then(
                (response) => {
                    alert("Message sent successfully!");
                    contactForm.reset();
                },
                (error) => {
                    alert("Failed to send message. Please try again.");
                    console.log('FAILED...', error);
                }
            );
        });
    }
});