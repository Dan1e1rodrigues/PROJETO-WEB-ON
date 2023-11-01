// Funcionalidade carrossel
const slides = document.querySelectorAll(".carousel-slide");
const indicators = document.querySelectorAll(".carousel-indicator");
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.transform = "translateX(0)";
        } else {
            slide.style.transform = "translateX(100%)";
        }
    });

    indicators.forEach((indicator, i) => {
        if (i === index) {
            indicator.classList.add("active");
        } else {
            indicator.classList.remove("active");
        }
    });
}

showSlide(currentSlide);

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);
