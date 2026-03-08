document.addEventListener('DOMContentLoaded', function() {
    // Элементы страницы
    const surpriseBtn = document.getElementById('surpriseBtn');
    const surpriseMessage = document.getElementById('surpriseMessage');
    
    // Массив с поздравлениями для сюрприза
    const surprises = [
        "🌷 Пусть весна подарит вдохновение!",
        "🌸 Будьте счастливы каждый день!",
        "🌹 Любви, здоровья и удачи!",
        "🌺 Исполнения всех желаний!",
        "💐 Пусть улыбка не сходит с лица!",
        "✨ Тепла, радости и весеннего настроения!",
        "🎀 Оставайтесь прекрасными всегда!",
        "💖 Море цветов и океан любви!"
    ];
    
    // Обработчик клика по кнопке сюрприза
    surpriseBtn.addEventListener('click', function() {
        // Выбираем случайное поздравление
        const randomSurprise = surprises[Math.floor(Math.random() * surprises.length)];
        
        // Показываем сообщение
        surpriseMessage.textContent = randomSurprise;
        surpriseMessage.classList.add('show');
        
        // Добавляем эффект конфетти
        createConfetti();
        
        // Меняем цвет фона
        document.body.style.transition = 'background 0.5s';
        document.body.style.background = 'linear-gradient(135deg, #f48fb1 0%, #f8bbd0 100%)';
        
        setTimeout(() => {
            document.body.style.background = 'linear-gradient(135deg, #f8bbd0 0%, #f48fb1 100%)';
        }, 500);
        
        // Анимация кнопки
        surpriseBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            surpriseBtn.style.transform = 'translateY(-3px)';
        }, 200);
    });
    
    // Функция для создания конфетти
    function createConfetti() {
        for (let i = 0; i < 30; i++) {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.top = '-10px';
            confetti.style.fontSize = Math.random() * 20 + 10 + 'px';
            confetti.style.zIndex = '1000';
            confetti.style.pointerEvents = 'none';
            confetti.style.userSelect = 'none';
            
            // Случайный символ для конфетти
            const symbols = ['🌸', '🌷', '🌹', '🌺', '💐', '✨', '🎀', '❤️', '💖'];
            confetti.textContent = symbols[Math.floor(Math.random() * symbols.length)];
            
            document.body.appendChild(confetti);
            
            // Анимация падения
            let position = -10;
            const speed = Math.random() * 3 + 2;
            const rotation = Math.random() * 360;
            
            function fall() {
                position += speed;
                confetti.style.top = position + 'px';
                confetti.style.transform = `rotate(${rotation}deg)`;
                
                if (position < window.innerHeight) {
                    requestAnimationFrame(fall);
                } else {
                    confetti.remove();
                }
            }
            
            fall();
        }
    }
    
    // Эффекты при наведении на цветы
    const flowers = document.querySelectorAll('.flower');
    flowers.forEach(flower => {
        flower.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.3)';
            this.style.transition = 'transform 0.3s';
            this.style.cursor = 'pointer';
        });
        
        flower.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
        
        // Клик по цветку
        flower.addEventListener('click', function() {
            this.style.transform = 'scale(1.5)';
            setTimeout(() => {
                this.style.transform = 'scale(1.3)';
            }, 200);
            
            // Показываем сообщение
            surpriseMessage.textContent = '🌷 Вы прекрасны! 🌷';
            surpriseMessage.classList.add('show');
            setTimeout(() => {
                surpriseMessage.classList.remove('show');
            }, 2000);
        });
    });
    
    // Эффекты при наведении на сердечки
    const hearts = document.querySelectorAll('.heart');
    hearts.forEach(heart => {
        heart.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.5)';
            this.style.transition = 'transform 0.3s';
            this.style.cursor = 'pointer';
        });
        
        heart.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Автоматическое поздравление при загрузке
    setTimeout(() => {
        surpriseMessage.textContent = '🌸 С 8 Марта! 🌸';
        surpriseMessage.classList.add('show');
        
        setTimeout(() => {
            surpriseMessage.classList.remove('show');
        }, 3000);
    }, 500);
    
    // Добавляем красивое появление элементов
    const card = document.querySelector('.card');
    card.style.opacity = '0';
    setTimeout(() => {
        card.style.transition = 'opacity 1s';
        card.style.opacity = '1';
    }, 100);
});