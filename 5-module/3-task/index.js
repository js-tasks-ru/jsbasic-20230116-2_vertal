function initCarousel() {
  const arrowLeft = document.querySelector('.carousel__arrow_left');
  const arrowRight = document.querySelector('.carousel__arrow_right');
  const carouselInner = document.querySelector('.carousel__inner');
  const offset = carouselInner.offsetWidth;
  let currentSlide = 1;
  const countSlides = document.querySelectorAll('.carousel__slide').length;

  function initArrow() {
    arrowLeft.style.display = (currentSlide == 1) ? 'none' : '';
    arrowRight.style.display = (currentSlide == countSlides) ? 'none' : '';
  }

  arrowLeft.onclick = function() {
    if (currentSlide > 1) {
      currentSlide -= 1;
      carouselInner.style.transform = `translateX(${offset - (currentSlide * offset)}px)`;
    }
    initArrow();
  };

  arrowRight.onclick = function() {
    if (currentSlide < countSlides) {
      currentSlide += 1;
      carouselInner.style.transform = `translateX(${offset - (currentSlide * offset)}px)`;
    }
    initArrow();
  };

  initArrow();

}