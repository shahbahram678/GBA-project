document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    
    // Initialize slider
    function showSlide(n) {
        slides.forEach(slide => {
            slide.style.transform = `translateX(-${n * 100}%)`;
        });
        
        // Update dots
        dots.forEach(dot => dot.classList.remove('active'));
        dots[n].classList.add('active');
    }
    
    // Click event for dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });
    
    // Auto slide (optional)
    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }, 5000);
    
    // Initialize first slide
    showSlide(0);
});