(() => {
      const slider = document.querySelector('.slider');
      const prevBtn = document.getElementById('prev-btn');
      const nextBtn = document.getElementById('next-btn');
      const slideWidth = slider.querySelector('.card').offsetWidth + 24;
      function updateButtons() {
        prevBtn.disabled = slider.scrollLeft <= 0;
        nextBtn.disabled =
          slider.scrollLeft >= slider.scrollWidth - slider.clientWidth - 1;
      }
      prevBtn.addEventListener('click', () => {
        slider.scrollBy({ left: -slideWidth, behavior: 'smooth' });
      });
      nextBtn.addEventListener('click', () => {
        slider.scrollBy({ left: slideWidth, behavior: 'smooth' });
      });
      slider.addEventListener('scroll', () => {
        if (!slider._ticking) {
          window.requestAnimationFrame(() => {
            updateButtons();
            slider._ticking = false;
          });
          slider._ticking = true;
        }
      });
      window.addEventListener('load', updateButtons);
      window.addEventListener('resize', () => {
        const firstSlide = slider.querySelector('.card');
        if (firstSlide) {
            slider._slideWidth = firstSlide.offsetWidth + 24;
        }
        updateButtons();
    });
})();