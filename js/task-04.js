const counter = {
  value: 0,

  incremement() {
    this.value += 1;
  },

  decrement() {
    this.value -= 1;
  },
};

const btnDec = document.querySelector("[data-action='decrement']");
//const btnDec = document.querySelector('#counter').firstElementChild;

const btnInc = document.querySelector("[data-action='increment']");
// const btnInc = document.querySelector('#counter').lastElementChild;

const counterValue = document.querySelector('#value');

btnDec.addEventListener('click', () => {
  counter.decrement();
  counterValue.textContent = counter.value;
});

btnInc.addEventListener('click', () => {
  counter.incremement();
  counterValue.textContent = counter.value;
});
