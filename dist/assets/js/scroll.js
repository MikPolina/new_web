document.addEventListener('DOMContentLoaded', function() {
  // Инициализируем оба слайдера
  initSlider('.types__slider', 165, 15); // Для types слайдера
  initSlider('.stocks__slider', 330, 25); // Для stocks слайдера
  
  function initSlider(sliderSelector, desktopCardWidth, gap) {
    const slider = document.querySelector(sliderSelector);
    if (!slider) return;
    
    // Находим ближайшие стрелки
    const container = slider.closest('.types__container, .stocks__container');
    if (!container) return;
    
    const prevArrow = container.querySelector('.types__arrow:first-child');
    const nextArrow = container.querySelector('.types__arrow:last-child');
    
    if (!prevArrow || !nextArrow) return;
    
    console.log(`Initializing slider: ${sliderSelector}`);
    
    // Функция для получения текущей ширины карточки
    function getCardWidth() {
      if (window.innerWidth <= 768) {
        return desktopCardWidth <= 165 ? 80 : 122; // Адаптивные размеры
      } else {
        return desktopCardWidth;
      }
    }
    
    // Функция для прокрутки
    function scrollSlider(direction) {
      const currentCardWidth = getCardWidth();
      const sliderWidth = slider.clientWidth;
      const visibleCards = Math.max(1, Math.floor(sliderWidth / (currentCardWidth + gap)));
      const scrollAmount = (currentCardWidth + gap) * visibleCards * direction;
      
      slider.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
    
    // Обработчики кликов
    nextArrow.addEventListener('click', function(e) {
      e.preventDefault();
      scrollSlider(1);
    });
    
    prevArrow.addEventListener('click', function(e) {
      e.preventDefault();
      scrollSlider(-1);
    });
    
    // Обновление состояния стрелок
    function updateArrows() {
      const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
      
      prevArrow.style.opacity = slider.scrollLeft <= 10 ? '0.3' : '1';
      prevArrow.style.cursor = slider.scrollLeft <= 10 ? 'not-allowed' : 'pointer';
      
      nextArrow.style.opacity = slider.scrollLeft >= maxScrollLeft - 10 ? '0.3' : '1';
      nextArrow.style.cursor = slider.scrollLeft >= maxScrollLeft - 10 ? 'not-allowed' : 'pointer';
    }
    
    slider.addEventListener('scroll', updateArrows);
    updateArrows();
    window.addEventListener('resize', updateArrows);
  }
});