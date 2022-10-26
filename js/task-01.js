const arrayOfCategories = document.querySelectorAll('li.item');
console.log(`Number of categories: ${arrayOfCategories.length}`);

// Первый вариант

const categoriesArray = [...arrayOfCategories]
  .map(
    categories => `Category: ${categories.children[0].textContent}
    Elements: ${categories.children[1].children.length}`
  )
  .join('\n');
console.log(categoriesArray);

// Второй вариант

// const categories = document.querySelectorAll('#categories > li');
// categories.forEach(category => {
//   console.log(
//     `Category: ${category.firstElementChild.textContent}\nElements: ${category.lastElementChild.children.length}`
//   );
// });
