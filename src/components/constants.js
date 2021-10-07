const popupAddCard = document.querySelector('.popup_type_new-card')
const popupImage = document.querySelector('.popup_type_image')
const popupImageScale = popupImage.querySelector('.popup__img')
const popupImageName = popupImage.querySelector('.popup__img-name')
const popupAvatar = document.querySelector('.popup_type_avatar')
const formAddCard = popupAddCard.querySelector('.form_type_add-card')
const formEditAvatar = popupAvatar.querySelector('.form_type_edit-avatar')
const buttonSubmitAddCard = popupAddCard.querySelector('.form__submit-button')
const profileAvatar = document.querySelector('.profile__avatar-image')


export { popupAddCard, popupImage, formAddCard, buttonSubmitAddCard, popupImageScale, popupImageName, popupAvatar, formEditAvatar, profileAvatar}
