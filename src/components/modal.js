
import { popupAddCard, popupImage } from './constants.js'


const popupProfile = document.querySelector('.popup_type_edit')
const popupProfileClose = popupProfile.querySelector('.popup__close')
const popupCloseAddCard = popupAddCard.querySelector('.popup__close')
const PopupImageClose = popupImage.querySelector('.popup__close')

const buttonProfileEdit  = document.querySelector('.profile__button-edit')
const buttonAddCard = document.querySelector('.profile__button-add')

const popupCardImage= document.querySelector('.popup__img')
const popupImageTitle = popupImage.querySelector('.popup__img-name')

const jobInput = document.querySelector('.form__input_type_user-info')
const nameInput = document.querySelector('.form__input_type_username')
const profileName = document.querySelector('.profile__name')
const profileDescription = document.querySelector('.profile__description')

function openPopup (popup) {
  popup.classList.add('popup_opened')
  closePopupOnEsc(popup)
  closePopupClickOverlay(popup)
}

function closePopup (popup) {
  popup.classList.remove('popup_opened')
  document.removeEventListener('keydown', popup);
  popup.removeEventListener('click', popup);
}

//Функциональность для открытия попапов =>

buttonProfileEdit .addEventListener('click', () => {
  jobInput.value = profileDescription.textContent
  nameInput.value = profileName.textContent
  openPopup(popupProfile)
})

buttonAddCard.addEventListener('click', () => {
  openPopup(popupAddCard)
})

//Функциональность для закрытия попапов =>

popupProfileClose.addEventListener('click', () => {
  closePopup(popupProfile)
  
})
popupCloseAddCard.addEventListener('click', () => {
  closePopup(popupAddCard)
})

PopupImageClose.addEventListener('click', () => {
  closePopup(popupImage)
})

const closePopupOnEsc = (popup) => {
  document.addEventListener('keydown', (evt)=>{
    if (evt.key === "Escape") {
        closePopup(popup);
    }
  });
}

const closePopupClickOverlay = (popup) => {
  popup.addEventListener('click', (evt)=>{
    if (evt.target.classList.contains('popup__body')) {
      closePopup(popup);
    }
  });
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

export { openPopup, closePopup, popupProfile, nameInput, jobInput, profileName, profileDescription }