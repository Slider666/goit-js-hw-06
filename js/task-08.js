const form = document.querySelector('.login-form');
const formObject = {};

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;

  // const formData = new FormData(event.currentTarget);

  // formData.forEach(email, password) => {
  //   console.log(email, password)
  // }

  if (email === '' || password === '') {
    return alert('Заполните все поля');
  }
  (formObject.email = email), (formObject.password = password);
  event.currentTarget.reset();

  console.log(formObject);
}
