const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// -------------------------------------------------------------------
// Первый способ (через "FOR")
// -------------------------------------------------------------------
let ingredients__list = document.getElementById('ingredients');

const elements = [];

for (let i = 0; i < ingredients.length; i += 1) {
  const ingredients__item = document.createElement('li');
  ingredients__item.classList.add('item');
  ingredients__item.textContent = ingredients[i];

  elements.push(ingredients__item);
}

ingredients__list.append(...elements);

// -------------------------------------------------------------------
// Второй способ (через "MAP")
// -------------------------------------------------------------------
// let ingredients__list = document.getElementById('ingredients');

// const elements = ingredients.map(ingredient => {
//   const ingredients__item = document.createElement('li');
//   ingredients__item.classList.add('item');
//   ingredients__item.textContent = ingredient;

//   return ingredients__item;
// });

// ingredients__list.append(...elements);

// -------------------------------------------------------------------
// Третий способ (через функцию)
// -------------------------------------------------------------------
// let ingredients__list = document.querySelector('#ingredients');

// const createIngredients = ingredientsList => {
//   return ingredientsList.map(ingredient => {
//     const ingredients__item = document.createElement('li');
//     ingredients__item.classList.add('item');
//     ingredients__item.textContent = ingredient;

//     return ingredients__item;
//   });
// };

// const elements = createIngredients(ingredients);
// ingredients__list.append(...elements);
