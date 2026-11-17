const formEmail = document.querySelector('#form-email');
const emailInput = document.querySelector('#form-email_in');
const subscriberData = {};

formEmail.addEventListener('submit', (event) => {
  event.preventDefault();
  subscriberData.email = emailInput.value;
  console.log(subscriberData);
})

const openBtn = document.querySelector('.button__openform');
const modal = document.querySelector('.modal')

openBtn.addEventListener('click', ()=> {
  modal.classList.remove('modal')
})

const closeBtn = document.querySelector('.modal__close');
closeBtn.addEventListener('click', ()=> {
  modal.classList.add('modal');
})

const confirmPathword = document.querySelector('#confirmPathword');
const pathword = document.querySelector('#pathword');

function checkPathword() {
  if (pathword.value !== confirmPathword.value) {
    confirmPathword.setCustomValidity('Пароли не совпадают')
  }
  else {
    confirmPathword.setCustomValidity('')
  }
}

pathword.addEventListener('input', (event) => {
  checkPathword()
})

confirmPathword.addEventListener('input', (event) => {
  checkPathword()
})

const formReg = document.querySelector('.modal__showed');

formReg.addEventListener('submit', (event) => {
  event.preventDefault()
  checkPathword()
  const form = event.target;
  const formData = new FormData(form);
  const user = Object.fromEntries(formData.entries());
  user.createdOn = new Date().toLocaleDateString('ru-RU')
  console.log(user);
  formReg.reset();
  modal.classList.add('modal');
})