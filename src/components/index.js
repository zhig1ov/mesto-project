import '../pages/index.css';
import { enableValidation, formsObj } from './validation.js'
import { renderCards, addCardSubmit } from './card.js'
import { popupProfile, jobInput, nameInput, closePopup, profileName, profileDescription, formAddCard } from './modal.js'
import { mestoApiConfig, getUserInfo, getCards } from './api.js'
import { setValueInputProfile, setUserData, submitFormEditProfile, formProfile, submitFormProfileAvatar } from './profile.js'
import { formEditAvatar } from './constants.js'

//Функциональность редактирования профиля =>

const formPopupEdit = popupProfile.querySelector('.form_type_edit')

function submitFormProfile (evt) {
  evt.preventDefault()
  profileName.textContent = nameInput.value
  profileDescription.textContent = jobInput.value
  closePopup(popupProfile)
}

formPopupEdit.addEventListener('submit', submitFormProfile); 

// Функциональность для добавления карточек =>

enableValidation(formsObj)

// loadingCard()


formAddCard.addEventListener('submit', addCardSubmit);

formProfile.addEventListener('submit', submitFormEditProfile)

formEditAvatar.addEventListener('submit', submitFormProfileAvatar)

Promise.all([getUserInfo(), getCards()])
  .then(([userData, cards]) => {
    setUserData(userData);
    setValueInputProfile(userData);
    const currentUserId = userData._id
    const dataCards = cards
    renderCards(dataCards, currentUserId)
  })
  .catch((err) => {
    console.log(err)
  })
