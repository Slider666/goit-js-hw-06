const inputEl = document.querySelector('#validation-input');
const dataLength = Number(inputEl.dataset.length);

inputEl.addEventListener('blur', () => {
  inputEl.classList.remove('valid', 'invalid');

  if (inputEl.value.length === dataLength) {
    inputEl.classList.add('valid');
  } else {
    inputEl.classList.add('invalid');
  }
});
