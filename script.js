          ///Переключение страниц///

const btnNavigate = document.querySelectorAll('.btnNavigate');
const content = document.querySelectorAll('.content');
    
// Добавляем обработчик событий на кнопки
btnNavigate.forEach(button => {
  button.addEventListener('click', () => {
    // Убираем класс active с других кнопок
    btnNavigate.forEach(btn => btn.classList.remove('active'));
        
    // Добавляем класс active на текущую кнопку
    button.classList.add('active');
    
    // Скрываем все вкладки
    content.forEach(tab => tab.classList.remove('active'));
        
    // Показываем вкладку, которая соответствует кнопке
    const targetTab = document.getElementById(button.getAttribute('data-target'));
    targetTab.classList.add('active');
  });
});



// Показываем первую вкладку по умолчанию
document.getElementById('clicker').classList.add('active');
    
// Показываем первую кнопку как активную по умолчанию
document.getElementById('mainBtn').classList.add('active');



      
        ////////Главная вкладка////////

// Зациклиная анимация монеты
setInterval(() => {
    const coin = document.querySelector('.coin');
    
    // Убираем анимацию
    coin.style.animation = 'none';
    
    // Принудительная перерисовка элемента (чтобы анимация сбросилась)
    coin.offsetHeight;  // Это поможет заставить браузер пересчитать элемент.
    
    // Применяем анимацию заново
    coin.style.animation = '';  // Теперь анимация снова начнёт работать.
}, 10000);  // Каждые 10 секунд

const clickerCoin = document.querySelector('#coinClickerId');
const tapScore = document.querySelector('#tapScore');

clickerCoin.addEventListener('mousedown', (event) => {
  const rect = clickerCoin.getBoundingClientRect();
  const offsetX = event.clientX - rect.left - rect.width / 2;
  const offsetY = event.clientY - rect.top - rect.height / 2;

  const deg = 60;

  const tiltX = (offsetY / rect.height) * deg;
  const tiltY = (offsetX / rect.width) * -deg;

  clickerCoin.style.setProperty('--tiltX', `${tiltX}deg`);
  clickerCoin.style.setProperty('--tiltY', `${tiltY}deg`);


  const plusOne = document.createElement('div');
  plusOne.classList.add('plusOne');
  plusOne.textContent = '+1';
  plusOne.style.left = `${event.clientX - rect.left}px`
  plusOne.style.top = `${event.clientY - rect.top}px`



  clickerCoin.parentElement.appendChild(plusOne);

  setTimeout(() => {
    plusOne.remove()
  }, 2000)
});

// Сброс поворота при отпускании кнопки
document.addEventListener('mouseup', () => {
  clickerCoin.style.setProperty('--tiltX', `0deg`);
  clickerCoin.style.setProperty('--tiltY', `0deg`);
});

