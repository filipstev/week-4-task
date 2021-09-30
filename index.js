const form = document.querySelector('form');
const input = document.querySelector('.submit-email');
const spanErr = document.querySelector('.error-msg');

input.addEventListener('invalid', (e) => {
  e.preventDefault();
  spanErr.classList.add('showError');
});
input.addEventListener('input', () => {
  spanErr.classList.remove('showError');
});
form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you for your submission!');
  input.value = '';
});
