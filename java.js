let slides = document.querySelectorAll(".skill-slide");
let currentSlide = 0;

function showSlide() {
    slides.forEach((slide, index) => {
        slide.classList.remove("active");
        if (index === currentSlide) {
            slide.classList.add("active");
        }
    });

    currentSlide = (currentSlide + 1) % slides.length;
}

setInterval(showSlide, 3000); // Changes slides every 3 seconds