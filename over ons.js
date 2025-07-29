// Logo Slider with Drag Support
    const dragWrapper = document.getElementById('drag-wrapper');
    const logoTrack = document.getElementById('logo-track');
    let isDown = false;
    let startX;
    let scrollLeft;

    // Drag functionality
    dragWrapper.addEventListener('mousedown', (e) => {
      isDown = true;
      dragWrapper.classList.add('grabbing');
      startX = e.pageX - dragWrapper.offsetLeft;
      scrollLeft = logoTrack.scrollLeft;
    });

    document.addEventListener('mouseup', () => {
      if (isDown) {
        isDown = false;
        dragWrapper.classList.remove('grabbing');
      }
    });

    document.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - dragWrapper.offsetLeft;
      const walk = (x - startX) * 2; // Adjust multiplier for drag sensitivity
      logoTrack.scrollLeft = scrollLeft - walk;
    });

    // Handle touch events for mobile
    dragWrapper.addEventListener('touchstart', (e) => {
      isDown = true;
      startX = e.touches[0].pageX - dragWrapper.offsetLeft;
      scrollLeft = logoTrack.scrollLeft;
    });

    document.addEventListener('touchend', () => {
      isDown = false;
    });

    document.addEventListener('touchmove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.touches[0].pageX - dragWrapper.offsetLeft;
      const walk = (x - startX) * 2;
      logoTrack.scrollLeft = scrollLeft - walk;
    });

// content container

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