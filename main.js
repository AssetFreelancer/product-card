// Покраска всех карточек

const productCards = document.querySelectorAll('.product-card');
const changeColorCardButton = document.querySelector('#btn-change-all-cards');
const greenColorHash = '#00ff00'
const blueColorHash = '#0000ff'

changeColorCardButton.addEventListener('click', () =>{
  productCards.forEach((card) => {
  card.style.backgroundColor = greenColorHash;
})
})

// Покраска первой карточки

const changeColorFirstCardButton = document.querySelector('.product-card');
const changeColorFirstCard = document.querySelector('#btn-change-first-card');

changeColorFirstCard.addEventListener('click', () =>{
  changeColorFirstCardButton.style.backgroundColor = blueColorHash;
  })

//Открыть сайт Google

const googleURL = 'https://google.com'
const openGoogleButton = document.querySelector('#btn-open-google');
openGoogleButton.addEventListener('click', openGoogle);

function openGoogle() {
  const answer = confirm('Вы дейстивтельно хотите открыть Google?');
  if (answer === true) {
    window.open(googleURL);
  } else {
    return;
  }
}

// Вывод в консоль лог
const outputLogButton = document.querySelector('#btn-log-to-console');

outputLogButton.addEventListener('click', () => outputConsoleLog('ДЗ №6'));

function outputConsoleLog(message) {
  alert(message)
  console.log(message)
}

//Используя слушатели событий, сделать так, что бы при наведении на главный заголовок ("Выбери свой продукт")
//  - он выводился в консоль. (контент элемента, а не произвольный текст, написанный от руки)

const chooseYourProduct = document.querySelector('.catalog__title');

chooseYourProduct.addEventListener('mouseover', () => {
  console.log(chooseYourProduct.textContent);
})

//Добавить кнопку, при нажатии на которую мы будем менять её цвет с одного на другой. 
// При повторном нажатии цвет меняется с второго на первый. Цвета выбираем по желанию. 
// (Для этого советую использовать .classList и его метод toggle)

const changeColorBtn = document.querySelector('#btn-change-color')

changeColorBtn.addEventListener('click', () => {
  changeColorBtn.classList.toggle('button-js-change-color');
})

