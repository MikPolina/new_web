
// Функция для переключения темы
function toggleTheme() {
    const body = document.body;
    const isDarkMode = body.classList.toggle('dark-theme');
    
    // Сохраняем выбор пользователя в localStorage
    localStorage.setItem('darkTheme', isDarkMode);
    
    // Обновляем изображение луны
    updateMoonIcon(isDarkMode);
    updateLogoIcon(isDarkMode);
    updateMenuIcon(isDarkMode);
    updateIzbrIcon(isDarkMode);
    updateKorIcon(isDarkMode);
    updateLogokonIcon(isDarkMode);
    updateProfIcon(isDarkMode);
    updateSearchIcon(isDarkMode);
}

// Функция для обновления иконки луны
function updateMoonIcon(isDarkMode) {
    const moonIcons = document.querySelectorAll('.logo__izbr[src*="луна"]');
    moonIcons.forEach(icon => {
        if (isDarkMode) {
            // Меняем на изображение солнца для тёмной темы
            icon.src = './assets/images/луна2.webp'; // Замените на путь к иконке солнца
        } else {
            // Возвращаем изображение луны для светлой темы
            icon.src = './assets/images/луна.webp'; // Замените на путь к иконке луны
        }
    });
}

// Функция для обновления иконки лого
function updateLogoIcon(isDarkMode) {
    const logoIcons = document.querySelectorAll('.logo__logotip[src*="лого"], .logo__logotip[src*="логот"]');
    logoIcons.forEach(icon => {
        if (isDarkMode) {
            // Меняем на тёмную версию логотипа
            icon.src = './assets/images/логот.webp';
        } else {
            // Возвращаем светлую версию логотипа
            icon.src = './assets/images/лого.webp';
        }
    });
}

// Функция для обновления иконки контактлого
function updateLogokonIcon(isDarkMode) {
    const logoIcons = document.querySelectorAll('.kontakt__logotip[src*="лого"], .kontakt__logotip[src*="лого2"]');
    logoIcons.forEach(icon => {
        if (isDarkMode) {
            // Меняем на тёмную версию логотипа
            icon.src = './assets/images/лого2.webp';
        } else {
            // Возвращаем светлую версию логотипа
            icon.src = './assets/images/лого.webp';
        }
    });
}

// Функция для обновления иконки поиска
function updateSearchIcon(isDarkMode) {
    const logoIcons = document.querySelectorAll('.search__img__in[src*="поиск"], .search__img__in[src*="поиск2"]');
    logoIcons.forEach(icon => {
        if (isDarkMode) {
            // Меняем на тёмную версию логотипа
            icon.src = './assets/images/поиск2.webp';
        } else {
            // Возвращаем светлую версию логотипа
            icon.src = './assets/images/поиск.webp';
        }
    });
}

// Функция для обновления иконки корзины
function updateKorIcon(isDarkMode) {
    const logoIcons = document.querySelectorAll('.logo__izbr[src*="корзина"], .logo__izbr[src*="корзина2"]');
    logoIcons.forEach(icon => {
        if (isDarkMode) {
            // Меняем на тёмную версию логотипа
            icon.src = './assets/images/корзина2.webp';
        } else {
            // Возвращаем светлую версию логотипа
            icon.src = './assets/images/корзина.webp';
        }
    });
}

// Функция для обновления иконки избр
function updateIzbrIcon(isDarkMode) {
    const logoIcons = document.querySelectorAll('.logo__izbr[src*="избр"], .logo__izbr[src*="избр2"]');
    logoIcons.forEach(icon => {
        if (isDarkMode) {
            // Меняем на тёмную версию логотипа
            icon.src = './assets/images/избр2.webp';
        } else {
            // Возвращаем светлую версию логотипа
            icon.src = './assets/images/избр.webp';
        }
    });
}


// Функция для обновления иконки профиля
function updateProfIcon(isDarkMode) {
    const logoIcons = document.querySelectorAll('.logo__izbr[src*="профиль"], .logo__izbr[src*="профиль2"]');
    logoIcons.forEach(icon => {
        if (isDarkMode) {
            // Меняем на тёмную версию логотипа
            icon.src = './assets/images/профиль2.webp';
        } else {
            // Возвращаем светлую версию логотипа
            icon.src = './assets/images/профиль.webp';
        }
    });
}

// Функция для обновления иконки меню
function updateMenuIcon(isDarkMode) {
    const logoIcons = document.querySelectorAll('.menu__icon[src*="меню"], .menu__icon[src*="меню2"]');
    logoIcons.forEach(icon => {
        if (isDarkMode) {
            // Меняем на тёмную версию логотипа
            icon.src = './assets/images/меню2.webp';
        } else {
            // Возвращаем светлую версию логотипа
            icon.src = './assets/images/меню.webp';
        }
    });
}


// Функция для загрузки сохранённой темы
function loadSavedTheme() {
    const savedTheme = localStorage.getItem('darkTheme');
    
    if (savedTheme === 'true') {
        document.body.classList.add('dark-theme');
        updateMoonIcon(true);
        updateLogoIcon(true);
        updateLogokonIcon(true);
        updateSearchIcon(true);
        updateKorIcon(true);
        updateIzbrIcon(true);
        updateProfIcon(true);
        updateMenuIcon(true);
    }
}

// Добавляем обработчики событий после загрузки DOM
document.addEventListener('DOMContentLoaded', function() {
    // Загружаем сохранённую тему
    loadSavedTheme();
    
    // Добавляем обработчики клика на все иконки луны
    const moonIcons = document.querySelectorAll('.logo__izbr[src*="луна"], .logo__izbr[src*="солнце"]');
    moonIcons.forEach(icon => {
        icon.addEventListener('click', toggleTheme);
        // Делаем иконку кликабельной
        icon.style.cursor = 'pointer';
    });
});