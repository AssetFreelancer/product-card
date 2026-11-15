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