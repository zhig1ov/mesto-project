import { openPopup, closePopup, openPopupImage } from './modal.js'
import { popupAddCard, popupImage, buttonSubmitAddCard } from './constants.js'
import { deleteCard, createNewCard, likeCard, deleteLikeCard } from './api.js'
import { setButtonState } from './utils.js'


const formAddCard = document.querySelector('.form_type_add-card');
const titleCardInput = document.querySelector('.form__input_type_title-card');
const imageCardInput = document.querySelector('.form__input_type_link-card');
const cardItems = document.querySelector('.cards__items')

function createCards(card, user) {
  const cardTemplate = document.querySelector('#card-template').content;

  const cardElement = cardTemplate.querySelector('.cards__item').cloneNode(true);
  const cardTitle = cardElement.querySelector('.cards__text');
  const cardImage = cardElement.querySelector('.cards__img');
  const buttonLikeCard = cardElement.querySelector('.cards__like');
  const buttonDeleteCard = cardElement.querySelector('.cards__delete');
  const likeCount = cardElement.querySelector('.cards__count-like')

  cardTitle.textContent = card.name;
  cardImage.setAttribute('src', card.link);
  cardImage.setAttribute('alt', card.name);
  cardElement.setAttribute('id', card._id);
  likeCount.textContent = card.likes.length;

  // Удаление карточки только владельцем

  if(!(card.owner._id === user)) {
    buttonDeleteCard.style.display = 'none';
  } else {
    buttonDeleteCard.addEventListener('click', removeCard)
  }

  // определение что юзер поставил лайк
  defineCurrentUserLike(card, user, cardElement);

  // Вешаем обработчик на кнопку лайка
  cardElement.querySelector('.cards__like').addEventListener('click', function(evt) {
    cardLikeToggle(evt, cardElement, card)
  })

  // Отображение по щелчку
  cardElement.querySelector('.cards__img').addEventListener('click', () => {
    openPopupImage(card.link, card.name, card.name)
  })
  return cardElement
}

function cardLikeToggle(evt, cont, cardItem) {
  if(evt.target.classList.contains('cards__like_active')) {
    deleteLikeCard(cardItem._id)
      .then((res) => {
        updateCountLike(cont, res);
        evt.target.classList.remove('cards__like_active');
      })
      .catch((err) => {
        console.log(err)
      })
  } else {
    likeCard(cardItem._id) 
      .then((res) => {
        updateCountLike(cont, res);
        evt.target.classList.add('cards__like_active');
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

// Обновление счётчика лайков
function updateCountLike(cont, resData) {
  cont.querySelector('.cards__count-like').textContent = resData.likes.length;
}

// Функция определения лайка пользователем
function defineCurrentUserLike(elem, currentId, element) {
  elem.likes.forEach((user) => {
    if(user._id === currentId) {
      element.querySelector('.cards__like').classList.add('cards__like_active');
    }
  })
}

// Добавление карточки
function addCards(data, cont, userId) {
  const place = createCards(data, userId);
  cont.prepend(place);
}

// Рендер карточек
function renderCards(cards, userId) {
  cards.reverse().forEach((card) => {
    addCards(card, cardItems, userId)
  })
}

// Создание новой карточки
function addCardSubmit(evt) {
  evt.preventDefault();
  setButtonState(popupAddCard, true);
  const cardData = {
    name: titleCardInput.value,
    link: imageCardInput.value,
  }
  // Вызываем функцию POST
  createNewCard({name: cardData.name, link: cardData.link})
    .then((data) => {
      addCards(data, cardItems, data.owner._id) 
      formAddCard.reset();
      closePopup(popupAddCard)
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      setButtonState(popupAddCard, false);
    })
}


// Удаление карточки
function removeCard(evt) {
  const cardItem = evt.target.closest('.cards__item');
  deleteCard(cardItem.id)
    .then(() => {
      cardItem.remove()
    })
    .catch((err) => {
      console.log(err)
    })
} 

export { createCards, addCards, renderCards, addCardSubmit }