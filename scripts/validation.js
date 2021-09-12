// const form = document.querySelector('.form');
// const formInput = form.querySelector('.form__input');
// const formError = form.querySelector(`.${formInput.id}-error`);




// const obj = {
//   formSelector: '.form',
//   inputSelector: '.form__input',
//   submitButtonSelector: '.form__submit',
//   formError: 'form__input_error'
// }

// enableValidation(obj);


// function enableValidation ({formSelector, inputSelector, submitButtonSelector, formError }) {
//   forms = Array.from(document.querySelectorAll(formSelector));
//   forms.forEach(form => {
//     form.addEventListener('submit', e => e.preventDefault())
//   })


//     const inputs = Array.from(document.querySelectorAll(inputSelector));
//     inputs.forEach(input => {
//       input.addEventListener('input', e => {
//         if(input.validity.valid) {
//           const inputName = input.getAttribute('name')
//           const errorPlace = document.getElementById(`${inputName}-error`)
//           errorPlace.textContent = '';
//           errorPlace.classList.remove(formError)
//         } else {
//           const inputName = input.getAttribute('name')
//           const errorPlace = document.getElementById(`${inputName}-error`)
//           errorPlace.textContent = input.validationMessage
//           errorPlace.classList.add(formError)
//         }
//       })
//     })
// }