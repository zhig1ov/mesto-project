import { toggleButtonState } from "./utils.js";

const formsObj = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit-button',
  fieldsetSelector: '.form__fieldset',
  inactiveButtonClass: 'form__submit-button_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_visible'
}

const showInputError = (formElement, inputElement, errorMessage, { inputErrorClass, errorClass }) => {
  const errorPlace = formElement.querySelector(`#${inputElement.id}-error`)
  inputElement.classList.add(inputErrorClass)
  errorPlace.textContent = errorMessage
  errorPlace.classList.add(errorClass)
}

const hideInputError = (formElement, inputElement, {inputErrorClass, errorClass}) => {
  const errorPlace = formElement.querySelector(`#${inputElement.id}-error`)
  inputElement.classList.remove(inputErrorClass)
  errorPlace.textContent = ''
  errorPlace.classList.remove(errorClass)
}

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid
  })
}

const checkInputValidity = (formElement, inputElement, {...rest}) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, rest)
  } else {
    hideInputError(formElement, inputElement, rest)
  }
}

const setEventListeners = (formElement, { inputSelector, submitButtonSelector, ...rest }) => {
  const inputList = Array.from(formElement.querySelectorAll(inputSelector))
  const buttonElement = formElement.querySelector(submitButtonSelector)
  toggleButtonState(inputList, buttonElement, rest)
  inputList.forEach(inputElement => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, rest)
      toggleButtonState(inputList, buttonElement, rest)
    })
  })
}

const enableValidation = ({formSelector, fieldsetSelector, ...rest }) => {
  const formList = Array.from(document.querySelectorAll(formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function(evt) {
      evt.preventDefault()
    })
    const fieldsetList = Array.from(formElement.querySelectorAll(fieldsetSelector))
    fieldsetList.forEach(fieldSet => {
      setEventListeners(fieldSet, rest)
    })
  })
}

export { hasInvalidInput, enableValidation, formsObj }