
// Функции для открытия и закрытия попапов

function openPopup (popup) {
  popup.classList.add('popup_opened')
}

function closePopup (popup) {
  popup.classList.remove('popup_opened')
}

const editPopup = document.querySelector('.popup_type_edit')
const addCardPopup = document.querySelector('.popup_type_new-card')
const openEditButton = document.querySelector('.profile__button-edit')
const openAddButton = document.querySelector('.profile__button-add')
const editPopupClose = editPopup.querySelector('.popup__close')
const addCardPopupClose = addCardPopup.querySelector('.popup__close')

//Функциональность для открытия попапов

openEditButton.addEventListener('click', () => {
  openPopup(editPopup)
})

openAddButton.addEventListener('click', () => {
  openPopup(addCardPopup)
})

//Функциональность для закрытия попапов

editPopupClose.addEventListener('click', () => {
  closePopup(editPopup)
})
addCardPopupClose.addEventListener('click', () => {
  closePopup(addCardPopup)
})


//Функциональность для работы лайка в карточках

const cardsItem = document.querySelector('.cards__item')

cardsItem.querySelector('.cards__like').addEventListener('click', function(evt) {
  evt.target.classList.toggle('cards__like_active')
})

//Функциональность редактирования профиля

const formPopupEdit = editPopup.querySelector('.form_type_edit')

const nameInput = document.querySelector('.form__input_type_username')
const jobInput = document.querySelector('.form__input_type_user-info')
const profileName = document.querySelector('.profile__name')
const profileDescription = document.querySelector('.profile__description')
// const editPopupSaveButton = formPopupEdit.querySelector('.popup__submit-button"')

// editPopupSaveButton.addEventListener('click', () => {
//   closePopup(editPopup)
// })

function formSubmitHandler (evt) {
  evt.preventDefault()
  profileName.textContent = nameInput.value
  profileDescription.textContent = jobInput.value
}

formPopupEdit.addEventListener('submit', formSubmitHandler); 
console.log(profileName.textContent)