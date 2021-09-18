import { initialCards } from './initial-cards.js'
import { openPopup } from './modal.js'
import { popupAddCard, popupImage } from './constants.js'

const formAddCard = document.querySelector('.form_type_add-card');
const titleCardInput = document.querySelector('.form__input_type_title-card');
const imageCardInput = document.querySelector('.form__input_type_link-card');

const popupCardImage= document.querySelector('.popup__img')
const popupImageTitle = popupImage.querySelector('.popup__img-name')

const cardItems = document.querySelector('.cards__items')

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

export { loadingCard, popupAddCard, popupImage }