const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const next = document.querySelector('.right');
const prev = document.querySelector('.left');

let index = 0;
const total = slide.length;

const visibleSlides = 3;

function updateSlide() {
  const slideWidth = 100 / visibleSlides;
  slides.style.transform = `translateX(-${index * slideWidth}%)`;
}

next.addEventListener('click', () => {
  index = (index + 1) % total;
  updateSlide();
});

prev.addEventListener('click', () => {
  index = (index - 1 + total) % total;
  updateSlide();
});

setInterval(() => {
  index = (index + 1) % total;
  updateSlide();
}, 5000);
