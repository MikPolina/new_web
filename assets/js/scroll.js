const container = document.querySelector('.slider__container');
let index = 0;

setInterval(() => {
  index = (index + 1) % document.querySelectorAll('.slide').length;
  container.style.transform = `translateX(-${index * 100}%)`;
}, 5000);