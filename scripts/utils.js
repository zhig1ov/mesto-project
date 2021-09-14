import { hasInvalidInput } from "./validation.js";

// Функция изменения состояния кнопки
 export const toggleButtonState = (inputList, buttonElement, { inactiveButtonClass }
  ) => {
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add(inactiveButtonClass);
      buttonElement.setAttribute("disabled", "disabled");
    } else {
      buttonElement.classList.remove(inactiveButtonClass);
      buttonElement.removeAttribute("disabled", "disabled");
    }
  };

