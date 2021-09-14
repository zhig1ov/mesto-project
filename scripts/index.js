import { enableValidation } from './validation.js'
import { loadingCard, popupImage } from './card.js'
import { popupProfile, jobInput, nameInput } from './modal.js'

const popupAddCard = document.querySelector('.popup_type_new-card')
const buttonProfileEdit  = document.querySelector('.profile__button-edit')
const buttonAddCard = document.querySelector('.profile__button-add')

const popupCardImage= document.querySelector('.popup__img')
const popupImageTitle = popupImage.querySelector('.popup__img-name')

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

// const formAddCard = document.querySelector('.form_type_add-card');
// const titleCardInput = document.querySelector('.form__input_type_title-card');
// const imageCardInput = document.querySelector('.form__input_type_link-card');


enableValidation({formSelector: '.form',
inputSelector: '.form__input',
submitButtonSelector: '.form__submit-button',
fieldsetSelector: '.form__fieldset',
inactiveButtonClass: 'form__submit-button_disabled',
inputErrorClass: 'form__input_type_error',
errorClass: 'form__input-error_visible'})

loadingCard()