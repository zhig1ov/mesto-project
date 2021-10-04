import { hasInvalidInput } from "./validation.js";

// Функция изменения состояния кнопки
 const toggleButtonState = (inputList, buttonElement, { inactiveButtonClass }
  ) => {
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add(inactiveButtonClass);
      buttonElement.setAttribute("disabled", "disabled");
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

  export {setButtonState, toggleButtonState}  