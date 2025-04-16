document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const thumbnails = document.querySelectorAll('.thumbnail');
  
    let currentSlide = 0;
    let slideInterval;
    const slideDelay = 5000;
  
    function updateSlider() {
      slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentSlide);
      });
      thumbnails.forEach((thumb, index) => {
        thumb.classList.toggle('active', index === currentSlide);
      });
    }
  
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      updateSlider();
    }
  
    function prevSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      updateSlider();
    }
  
    function startAutoSlide() {
      clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, slideDelay);
    }
  
    nextBtn.addEventListener('click', () => {
      nextSlide();
      startAutoSlide();
    });
  
    prevBtn.addEventListener('click', () => {
      prevSlide();
      startAutoSlide();
    });
  
    thumbnails.forEach((thumb, index) => {
      thumb.addEventListener('click', () => {
        currentSlide = index;
        updateSlider();
        startAutoSlide();
      });
    });
  
    // Touch/swipe support
    let touchStartX = 0;
    let touchEndX = 0;
  
    const slider = document.querySelector('.slider');
    slider.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    });
  
    slider.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    });
  
    function handleSwipe() {
      const threshold = 50;
      const diff = touchStartX - touchEndX;
  
      if (Math.abs(diff) > threshold) {
        if (diff > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
        startAutoSlide();
      }
    }
  
    // Start auto slide
    startAutoSlide();
  });
  