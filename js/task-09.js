function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorButton = document.querySelector('.change-color');
const text = document.querySelector('.color');

colorButton.addEventListener('click', () => {
  document.body.style.backgroundColor = getRandomHexColor();
  text.textContent = getRandomHexColor();
});
