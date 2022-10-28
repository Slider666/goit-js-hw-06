// -------------------------------------------------------------------
// Первый способ
// -------------------------------------------------------------------
let input = document.getElementById('name-input');
let nameOutput = document.querySelector('#name-output');

input.oninput = () => {
  if (input.value === '') {
    nameOutput.innerHTML = 'Anonymous';
  } else {
    nameOutput.innerHTML = input.value;
  }
};

// -------------------------------------------------------------------
// Второй способ
// -------------------------------------------------------------------
// let input = document.querySelector('#name-input');
// input.addEventListener('input', nameInput);

// let nameOutput = document.querySelector('#name-output');

// function nameInput(event) {
//   input = event.currentTarget.value;

//   nameOutput.innerHTML = input === '' ? 'Anonymous' : input;
// }
