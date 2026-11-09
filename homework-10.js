import {products} from './products.js';

const productCardTemplate = document.getElementById('product-card-template');
const productsList = document.getElementById('products-list');

function renderProducts(items) {
items.forEach(product => {
  const productClone = productCardTemplate.content.cloneNode(true);

  const productImg = productClone.querySelector('.product-card__image');
  productImg.src = product.image;
  productImg.alt = product.imageAlt || product.title;

  productClone.querySelector('.product-card__title').textContent = product.title
  productClone.querySelector('.product-card__category').textContent = product.category
  productClone.querySelector('.product-card__description').textContent = product.description
  productClone.querySelector('.product-card__price-value').textContent = product.price  
  
  const featuresList = productClone.querySelector('.product-card__features-list');
  product.ingredients.forEach(ingredient => {
    const li = document.createElement('li');
    li.textContent = ingredient;
    featuresList.appendChild(li);
  })
  
  productsList.appendChild(productClone);
})}

// Используя метод .reduce(), получить массив объектов, где ключем является название продукта, а значением - 
// его описание

const productsNewArray = products.reduce((acc, product) => {
  const newProduct = {
    [product.title]: product.description
  }
  acc.push(newProduct);
  return acc;
}, []);

console.log(productsNewArray);

// 5*. Реализовать функцию, которая при старте страницы выводит сообщение (через функцию prompt) 
// "Сколько карточек отобразить? От 1 до 5" и в зависимости от результата - будет выводить введенное 
// количество. Должна быть защита от ввода других значений (проверка if). То-есть: у нас будет 2 функции, 
// одна возвращает количество карточек, которое нужно ввести, другая - рендерить эти карточки (принимая массив 
//   аргументом)

// P.S. - визуально, карточки у вас не должны поменяться вообще.

const getInputUser = () => {
while (true) {
  const getQuantityProducts = prompt('Сколько карточек отобразить? От 1 до 5');
  const quantityProducts = Number(getQuantityProducts);
  if (quantityProducts > 5 || quantityProducts <= 0 || Number.isNaN(quantityProducts)) {
    alert('Введите число От 1 до 5');
    getInputUser();
}
    return quantityProducts;
    
}
}
const countProduct = getInputUser();

const renderProductsNew = () => {
  const selectedProducts = products.slice(0, countProduct);
  renderProducts(selectedProducts);
}
renderProductsNew();