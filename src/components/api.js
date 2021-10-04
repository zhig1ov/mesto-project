const mestoApiConfig = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-1',
  headers: {
    'Authorization': '81bac8cf-ee23-4097-9f29-5282d20f43a2',
    'Content-Type': 'application/json'
  },
}

const getResponse = (res) => {
  if(res.ok) {
    return res.json()
  }
  return Promise.reject(`Ошибка: ${res.status}`)
}

const getCards = () => {
  return fetch(`${mestoApiConfig.baseUrl}/cards/`, {
    headers: mestoApiConfig.headers,
  })
    .then(getResponse)
}

const getUserInfo = () => {
  return fetch(`${mestoApiConfig.baseUrl}/users/me`, {
    headers: mestoApiConfig.headers,
  })
  .then(getResponse)
}



const deleteCard = (cardId) => {
  return fetch(`${mestoApiConfig.baseUrl}/cards/${cardId}`, {
    method: "DELETE",
    headers: mestoApiConfig.headers,
  })
  .then((res) => {
    if (!res.ok) return Promise.reject(`Ошибка: ${res.status}`)
  })
}

const updateProfileInfo = (name, about) => {
return fetch(`${mestoApiConfig.baseUrl}/users/me`, {
  method: "PATCH",
  headers: mestoApiConfig.headers,
  body: JSON.stringify({
    name: name,
    about: about,
  })
}) 
  .then(getResponse)
}




function createNewCard(data) {
  return fetch(`${mestoApiConfig.baseUrl}/cards/`, {
    method: "POST",
    headers: mestoApiConfig.headers,
    body: JSON.stringify({
      name: data.name,
      link: data.link,
    })
  })
    .then(getResponse)
}

const likeCard = (cardId) => {
  return fetch(`${mestoApiConfig.baseUrl}/cards/likes/${cardId}`, {
    method: "PUT",
    headers: mestoApiConfig.headers,
  })
   .then(getResponse)
}

const deleteLikeCard = (cardId) => {
  return fetch(`${mestoApiConfig.baseUrl}/cards/likes/${cardId}`, {
    method: "DELETE",
    headers: mestoApiConfig.headers,
  })
  .then(getResponse)
}


export { updateProfileInfo, getUserInfo, deleteCard, createNewCard, getCards, likeCard, deleteLikeCard }