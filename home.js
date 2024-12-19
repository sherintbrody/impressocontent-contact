var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 3,
    speed: 2000,
    loop: true,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
    preloadImages: true,
    lazy: {
        loadPrevNext: true,
    },
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
});

// Add hover effect to pause autoplay
const swiperContainer = document.querySelector('.swiper');

swiperContainer.addEventListener('mouseover', () => {
    const activeSlide = document.querySelector('.swiper-slide-active');
    if (activeSlide) {
        // Pause autoplay
        swiper.autoplay.stop();

        // Add hover effect styles
        activeSlide.style.transform = 'scale(1.00) translateY(-1px)';
        activeSlide.style.boxShadow = '0 20px 40px #43DCE2';
        activeSlide.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    }
});

swiperContainer.addEventListener('mouseout', () => {
    const activeSlide = document.querySelector('.swiper-slide-active');
    if (activeSlide) {
        // Resume autoplay
        swiper.autoplay.start();

        // Remove hover effect styles
        activeSlide.style.transform = 'scale(1)';
        activeSlide.style.boxShadow = 'none';
    }
});
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});



