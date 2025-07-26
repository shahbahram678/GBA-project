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

    // Testimonials
    let currentIndex = 0;
    const testimonials = document.querySelectorAll(".testimonial");

    function showTestimonial(index) {
      testimonials.forEach((el, i) => {
        el.classList.toggle("active", i === index);
      });
    }

    function nextTestimonial() {
      currentIndex = (currentIndex + 1) % testimonials.length;
      showTestimonial(currentIndex);
    }

    function prevTestimonial() {
      currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
      showTestimonial(currentIndex);
    }