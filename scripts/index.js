const popupProfile = document.querySelector('.popup_type_edit')
const popupAddCard = document.querySelector('.popup_type_new-card')
const buttonProfileEdit  = document.querySelector('.profile__button-edit')
const buttonAddCard = document.querySelector('.profile__button-add')
const popupProfileClose = popupProfile.querySelector('.popup__close')
const popupCloseAddCard = popupAddCard.querySelector('.popup__close')

const popupImage = document.querySelector('.popup_type_image')
const PopupImageClose = popupImage.querySelector('.popup__close')
const popupCardImage= document.querySelector('.popup__img')
const popupImageTitle = popupImage.querySelector('.popup__img-name')

const cardItems = document.querySelector('.cards__items')



//Функциональность редактирования профиля =>

const formPopupEdit = popupProfile.querySelector('.form_type_edit')
const nameInput = document.querySelector('.form__input_type_username')
const jobInput = document.querySelector('.form__input_type_user-info')
const profileName = document.querySelector('.profile__name')
const profileDescription = document.querySelector('.profile__description')
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

const formAddCard = document.querySelector('.form_type_add-card');
const titleCardInput = document.querySelector('.form__input_type_title-card');
const imageCardInput = document.querySelector('.form__input_type_link-card');

function createCard(card) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.cards__item').cloneNode(true);
  const cardTitle = cardElement.querySelector('.cards__text');
  const cardImage = cardElement.querySelector('.cards__img');
  const buttonLikeCard = cardElement.querySelector('.cards__like');
  const buttonDeleteCard = cardElement.querySelector('.cards__delete');

  cardTitle.textContent = card.name;
  cardImage.setAttribute('src', card.link);
  cardImage.setAttribute('alt', card.name);
  

buttonLikeCard.addEventListener('click', function(evt) {
    evt.target.classList.toggle('cards__like_active');
  });

  buttonDeleteCard.addEventListener('click', function() {
    const deleteCardElement = buttonDeleteCard.closest('.cards__item');
    deleteCardElement.remove();
  })

  cardImage.addEventListener('click', () => {
    popupCardImage.src = cardImage.src
    popupCardImage.alt = cardTitle.textContent
    popupImageTitle.textContent = cardTitle.textContent
    openPopup(popupImage)
  })

  return cardElement
};

function addCard(cardData) {
  const card = createCard(cardData);
  cardItems.prepend(card);
}

formAddCard.addEventListener('submit', (evt) => {
  evt.preventDefault()
  addCard({
    name: titleCardInput.value,
    link: imageCardInput.value
  })
  formAddCard.reset()
  closePopup(popupAddCard)
})

const loadingCard = () => {
  initialCards.forEach(card => addCard(card))
}

loadingCard()





// Функции для открытия и закрытия попапов =>

function openPopup (popup) {
  popup.classList.add('popup_opened')
  document.addEventListener('keydown', (evt)=>{
    if (evt.key === "Escape") {
        closePopup(popup);
    }
  });
  popup.addEventListener('click', (evt)=>{
    if (evt.target.classList.contains('popup__body')) {
      closePopup(popup);
    }
  });
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



//Функция открытия popup для формы редактирования профиля

//Инициализация значений полей и открытия popup редактирования
function setValueFormEditor () {
  inputEditProfileName.value = profileName.textContent;
  inputEditProfileProf.value = profileProfession.textContent;
  openPopupEvent(popupProfile);

};
//Раз уж начали popup редактирования юзать, значить надо засабмитить, таков путь
function submitValueFormProfile (evt) {
  evt.preventDefault();
  profileName.textContent = inputEditProfileName.value;
  profileProfession.textContent = inputEditProfileProf.value;
  closePopup(popupProfile);
}

/*Функция, в которой щелчок по карточке должен отобразить ее scaleImagePreview*/
function openImagePopup (src, alt, name) {
  placeImageScale.src = src;
  placeImageScale.alt = alt;
  placeImageScaleCaption.textContent = name;
  openPopupEvent(popupImage);
  console.log(popupImage);
}




const obj = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit-button',
  fieldsetSelector: '. form__fieldset',
  inactiveButtonClass: 'form__submit-button_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_visible'
}

toggleButtonState = (inputList, buttonElement, { inactiveButtonClass }
) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(inactiveButtonClass);
    buttonElement.setAttribute("disabled", "disabled");
  } else {
    buttonElement.classList.remove(inactiveButtonClass);
    buttonElement.removeAttribute("disabled", "disabled");
  }
};

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

enableValidation({formSelector: '.form',
inputSelector: '.form__input',
submitButtonSelector: '.form__submit-button',
fieldsetSelector: '.form__fieldset',
inactiveButtonClass: 'form__submit-button_disabled',
inputErrorClass: 'form__input_type_error',
errorClass: 'form__input-error_visible'})


