// Бургер-меню
document.addEventListener('DOMContentLoaded', function() {
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.menu');
  const body = document.body;
  
  if (burger && menu) {
    // Открытие/закрытие меню по клику на бургер
    burger.addEventListener('click', function(e) {
      e.stopPropagation();
      menu.classList.toggle('active');
      burger.classList.toggle('active');
      body.classList.toggle('menu-open');
    });
    
    // Закрытие меню при клике на ссылку в меню
    const menuLinks = menu.querySelectorAll('.nav__link, .menu__contacts__phone');
    menuLinks.forEach(link => {
      link.addEventListener('click', function() {
        menu.classList.remove('active');
        burger.classList.remove('active');
        body.classList.remove('menu-open');
      });
    });
    
    // Закрытие меню при клике вне меню
    document.addEventListener('click', function(e) {
      if (!menu.contains(e.target) && !burger.contains(e.target)) {
        menu.classList.remove('active');
        burger.classList.remove('active');
        body.classList.remove('menu-open');
      }
    });
    
    // Закрытие меню при нажатии клавиши Escape
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        menu.classList.remove('active');
        burger.classList.remove('active');
        body.classList.remove('menu-open');
      }
    });
  }
});




