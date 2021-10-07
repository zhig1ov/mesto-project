import { popupAddCard, popupImage, formAddCard, popupImageScale, popupImageName, popupAvatar, formEditAvatar } from './constants.js'
import { disabledButton } from './card.js'




const popupProfile = document.querySelector('.popup_type_edit')
const popupProfileClose = popupProfile.querySelector('.popup__close')
const popupCloseAddCard = popupAddCard.querySelector('.popup__close')
const popupImageClose = popupImage.querySelector('.popup__close')

const buttonProfileEdit  = document.querySelector('.profile__button-edit')
const buttonAddCard = document.querySelector('.profile__button-add')
const buttonAvatarEdit = document.querySelector('.profile__avatar-edit')
const popupCloseAvatar = popupAvatar.querySelector('.popup__close')

const buttonSubmitProfile = popupProfile.querySelector('.form__submit-button')
const buttonSubmitAvatar = popupAvatar.querySelector('.form__submit-button')
const buttonSubmitCard = popupAddCard.querySelector('.form__submit-button')

const jobInput = document.querySelector('.form__input_type_user-info')
const nameInput = document.querySelector('.form__input_type_username')
const avatarInput = document.querySelector('.form__input_type_avatar')
const profileName = document.querySelector('.profile__name')
const profileDescription = document.querySelector('.profile__description')

function openPopup (popup) {
  popup.classList.add('popup_opened')
  document.addEventListener('keydown', closePopupOnEsc)
  popup.addEventListener('click', closePopupClickOverlay);
}

function closePopup (popup) {
  popup.classList.remove('popup_opened')
  document.removeEventListener('keydown', closePopupOnEsc);
  popup.removeEventListener('click', closePopupClickOverlay);
}

//Функциональность для открытия попапов =>

buttonProfileEdit.addEventListener('click', () => {
  // jobInput.value = profileDescription.textContent
  // nameInput.value = profileName.textContent
  openPopup(popupProfile)
})

function openPopupAvatar() {
  formEditAvatar.reset()
  disabledButton(buttonSubmitAvatar)
  openPopup(popupAvatar)
}

function openPopupCard() {
  formAddCard.reset()
  disabledButton(buttonSubmitCard)
  openPopup(popupAddCard)
}

buttonAddCard.addEventListener('click', () => {
  openPopupCard()
})

buttonAvatarEdit.addEventListener('click', openPopupAvatar)

const openPopupImage = (src, alt, name) => {
  popupImageScale.src = src;
  popupImageScale.alt = alt;
  popupImageName.textContent = name;
  openPopup(popupImage)
}
//Функциональность для закрытия попапов =>

popupProfileClose.addEventListener('click', () => {
  closePopup(popupProfile)
})

popupCloseAddCard.addEventListener('click', () => {
  closePopup(popupAddCard)
})

popupImageClose.addEventListener('click', () => {
  closePopup(popupImage)
})

popupCloseAvatar.addEventListener('click', () => {
  closePopup(popupAvatar)
})

const closePopupOnEsc = (evt) => {
  if (evt.key === "Escape") {
    const popup = document.querySelector(".popup_opened")
    closePopup(popup);
  }
}

const closePopupClickOverlay = (evt) => { 
   if (evt.target.classList.contains('popup__body')) { 
    const popup = document.querySelector(".popup_opened")
    closePopup(popup); 
  } 
}

//Значение полей редактирования
function setValueFormUserInfo () {
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
  openPopup(popupProfile);

};
//Сабмит полей редактирования
function submitValueFormUserInfo (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closePopup(popupProfile);
}

export { openPopup, closePopup, popupProfile, nameInput, jobInput, profileName, profileDescription, formAddCard, openPopupImage, avatarInput }


