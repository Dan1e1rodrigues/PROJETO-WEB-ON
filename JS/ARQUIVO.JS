function setup() {
    createCanvas(400, 400); // Cria um canvas
}

// Função draw: chamada repetidamente para animação
function draw() {
    background(220); // Define a cor de fundo
    ellipse(300, 100, 50, 50); // Desenha uma elipse
    ellipse(200, 200, 50, 50);
    ellipse(100, 300, 50, 50);
}

// Funcionalidade carrossel
document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(${100 * (i - index)}%)`;
        });
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    });
});