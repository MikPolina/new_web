
        const likeButton = document.getElementById('likeButton');
        let isLiked = false; // Переменная для отслеживания состояния

        likeButton.addEventListener('click', () => {
            if (isLiked) {
                likeButton.style.backgroundImage = "url('./assets/images/сердце.webp')"; // Возврат к исходному изображению
            } else {
                likeButton.style.backgroundImage = "url('./assets/images/сердцеБ.webp')"; // Установка второго изображения
            }
            isLiked = !isLiked; // Переключение состояния
        });



