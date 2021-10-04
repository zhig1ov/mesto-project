import { profileDescription, profileName, popupProfile, jobInput, nameInput  } from './modal.js'
import { closePopup } from './modal.js'
import { getUserInfo, updateProfileInfo } from './api.js'
import { setButtonState } from './utils.js'

const formProfile = popupProfile.querySelector('.form_type_edit');

const setUserData = (user) => {
  profileName.textContent = user.name;
  profileDescription.textContent = user.about;
  // profileAvatar.src = data.avatar;
}

const setValueInputProfile = (data) => {
  nameInput.value = data.name
  jobInput.value = data.about
}

function submitFormEditProfile(evt) {
  evt.preventDefault();
  
  setButtonState(popupProfile, true)
  
  updateProfileInfo = (nameInput.value, jobInput.value) 
    .then(result => {
      setUserData(result)
      closePopup(popupProfile)
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      setButtonState(popupProfile, false)
    })
  }

  export { setValueInputProfile, setUserData, submitFormEditProfile }