import { hasInvalidInput } from "./validation.js";

const disabledButton = (button) => {
  button.setAttribute("disabled", "disabled")
  button.classList.add('form__submit-button_disabled')
}
// Функция изменения состояния кнопки
 const toggleButtonState = (inputList, buttonElement, { inactiveButtonClass }
  ) => {
    if (hasInvalidInput(inputList)) {
      disabledButton(buttonElement)
    } else {
      buttonElement.classList.remove(inactiveButtonClass);
      buttonElement.removeAttribute("disabled", "disabled");
    }
  };

  const setButtonState = (popup, isSending) => {
    const buttonLoad = popup.querySelector('.form__submit-button')
    buttonLoad.disabled = !isSending;
    buttonLoad.textContent =isSending ? 'Сохранение...' : 'Сохранить';
  }

  export {setButtonState, toggleButtonState, disabledButton }  