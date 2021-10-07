import { profileDescription, profileName, popupProfile, jobInput, nameInput, closePopup, avatarInput  } from './modal.js'
import { getUserInfo, updateProfileInfo, updateAvatar } from './api.js'
import { setButtonState } from './utils.js'
import { popupAvatar, profileAvatar, formEditAvatar } from './constants.js'

const formProfile = popupProfile.querySelector('.form_type_edit');

const setUserData = (user) => {
  profileName.textContent = user.name;
  profileDescription.textContent = user.about;
  profileAvatar.src = user.avatar;
}

const setValueInputProfile = (data) => {
  nameInput.value = data.name
  jobInput.value = data.about
}

function submitFormEditProfile(evt) {
  evt.preventDefault();
  
  setButtonState(popupProfile, false);
  
  updateProfileInfo(nameInput.value, jobInput.value)
    .then(data => {
      setUserData(data)
      closePopup(popupProfile)
      console.log(nameInput)
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      setButtonState(popupProfile, true)
    })
  }

 const submitFormProfileAvatar = (evt) => {
   evt.preventDefault();
   setButtonState(popupAvatar, true);
   updateAvatar(avatarInput.value)
   .then((data) => {
    profileAvatar.src = data.avatar;
    formEditAvatar.reset();
     closePopup(PopupAvatar)
   })
   .catch((err) => {
     console.log(err)
   })
   .finally(() => {
    setButtonState(popupAvatar, false);
   })
 }

  export { setValueInputProfile, setUserData, submitFormEditProfile, formProfile, submitFormProfileAvatar  }