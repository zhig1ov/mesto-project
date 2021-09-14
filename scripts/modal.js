// const popupProfile = document.querySelector('.popup_type_edit')
// const popupAddCard = document.querySelector('.popup_type_new-card')
// const buttonProfileEdit  = document.querySelector('.profile__button-edit')
// const buttonAddCard = document.querySelector('.profile__button-add')
// const popupProfileClose = popupProfile.querySelector('.popup__close')
// const popupCloseAddCard = popupAddCard.querySelector('.popup__close')

// const popupImage = document.querySelector('.popup_type_image')
// const PopupImageClose = popupImage.querySelector('.popup__close')
// const popupCardImage = document.querySelector('.popup__img')
// const popupImageTitle = popupImage.querySelector('.popup__img-name')

// const cardItems = document.querySelector('.cards__items')


// //Функциональность для открытия попапов =>

// function openPopupEvt(popup) {
//   popup.classList.add('popup__opened')
//   document.addEventListener('keyup', (evt) => {
//     if(evt.key === 'Escape') {
//       closePopup(evt)
//       console.log('afsaf')
//     }
//   })
// }

// buttonProfileEdit .addEventListener('click', () => {
//   jobInput.value = profileDescription.textContent
//   nameInput.value = profileName.textContent
//   openPopup(popupProfile)
// })

// buttonAddCard.addEventListener('click', () => {
//   openPopup(popupAddCard)
// })

// //Функциональность для закрытия попапов =>

// popupProfileClose.addEventListener('keydown', () => {
//   closePopup(popupProfile)
  
// })
// popupCloseAddCard.addEventListener('keydown', () => {
//   closePopup(popupAddCard)
// })

// PopupImageClose.addEventListener('keydown', () => {
//   closePopup(popupImage)
// })

// // Функции для открытия и закрытия попапов =>

// function openPopup(popup) {
//   popup.classList.add('popup_opened');
//   document.addEventListenerAll('keydown', closePopupEscape);
// }

// function closePopup(popup) {
//   popup.classList.remove('popup_opened');
//   document.removeEventListenerAll('keydown', closePopupEscape);
// }

// function closePopupEscape(evt) {
//   if (evt.keyCode === 'Escape') {
//     closePopup(evt)
//     console.log('sdfsdf')
//   }
// }

// function setEventPopup() {
//   const popups = Array.from(document.querySelectorAll('popup'));
//   popups.forEach((popup) => {
//     popup.addEventListener('click', (evt) => {
//       if(evt.target.classList.contains('popup')) {
//         closePopup(evt.target)
//       }
//     });
//   });
// }

