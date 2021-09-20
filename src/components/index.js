import { enableValidation } from './validation.js'
import { loadingCard, popupImage } from './card.js'
import { popupProfile, jobInput, nameInput, closePopup, profileName, profileDescription } from './modal.js'
import '../pages/index.css';


//Функциональность редактирования профиля =>

const formPopupEdit = popupProfile.querySelector('.form_type_edit')
const popupProfileSaveButton = formPopupEdit.querySelector('.form__submit-button')

popupProfileSaveButton.addEventListener('click', () => {
  closePopup(popupProfile)
})

function submitFormProfile (evt) {
  evt.preventDefault()
  profileName.textContent = nameInput.value
  profileDescription.textContent = jobInput.value
}

formPopupEdit.addEventListener('submit', submitFormProfile); 

// Функциональность для добавления карточек =>

enableValidation({formSelector: '.form',
inputSelector: '.form__input',
submitButtonSelector: '.form__submit-button',
fieldsetSelector: '.form__fieldset',
inactiveButtonClass: 'form__submit-button_disabled',
inputErrorClass: 'form__input_type_error',
errorClass: 'form__input-error_visible'})

loadingCard()