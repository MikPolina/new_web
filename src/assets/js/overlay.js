document.addEventListener('DOMContentLoaded', function() {
    console.log('=== ВАКАНСИИ ЗАГРУЖЕНЫ ===');
    
    // Функция для настройки одной вакансии
    function setupVacancy(cardId, infoId) {
        console.log(`Настраиваю вакансию: ${cardId} → ${infoId}`);
        
        const card = document.getElementById(cardId);
        const cardInfo = document.getElementById(infoId);
        
        if (!card || !cardInfo) {
            console.error(`❌ Не найдены элементы: ${cardId} или ${infoId}`);
            return;
        }
        
        const arrowDown = card.querySelector('.vacancy__arrow');
        const arrowUp = cardInfo.querySelector('.overlay__arrow');
        
        console.log(`${cardId} - arrowDown:`, arrowDown);
        console.log(`${infoId} - arrowUp:`, arrowUp);
        
        if (!arrowDown || !arrowUp) {
            console.error(`❌ Не найдены стрелки для ${cardId}`);
            return;
        }
        
        console.log(`✅ ${cardId} настроена`);
        
        // Функция переключения
        function toggleCardInfo() {
            const isOpening = !cardInfo.classList.contains('active');
            console.log(`${cardId} - ${isOpening ? 'Открываем' : 'Закрываем'}`);
            
            if (isOpening) {
                cardInfo.classList.add('active');
                // Закрываем другие открытые вакансии
                closeOtherVacancies(infoId);
            } else {
                cardInfo.classList.remove('active');
            }
        }
        
        // Вешаем обработчики
        arrowDown.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleCardInfo();
        });
        
        arrowUp.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleCardInfo();
        });
        
        // Закрытие при клике вне блока
        document.addEventListener('click', function(e) {
            const isClickInsideCard = card.contains(e.target);
            const isClickInsideCardInfo = cardInfo.contains(e.target);
            
            if (cardInfo.classList.contains('active') && 
                !isClickInsideCard && 
                !isClickInsideCardInfo) {
                cardInfo.classList.remove('active');
            }
        });
    }
    
    // Функция закрытия других вакансий
    function closeOtherVacancies(currentInfoId) {
        const allInfoBlocks = document.querySelectorAll('.card__info');
        allInfoBlocks.forEach(block => {
            if (block.id !== currentInfoId && block.classList.contains('active')) {
                block.classList.remove('active');
                console.log(`Закрыли ${block.id}`);
            }
        });
    }
    
    // Настраиваем все вакансии
    setupVacancy('vacancyCard', 'vacancyInfo');    // Первая вакансия
    setupVacancy('vacancyCard2', 'vacancyInfo2');  // Вторая вакансия
    
    console.log('=== ВСЕ ВАКАНСИИ НАСТРОЕНЫ ===');
});