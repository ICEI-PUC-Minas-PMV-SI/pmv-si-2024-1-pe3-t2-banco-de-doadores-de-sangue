let newProfile  = {
  name: null,
  email: null,
  cellphone: null,
  weight: null,
  bornAt: null,
  bloodType: null,
  isHealthNow: null,
  city: null
}

// Buscando conta no banco
const buttonOpenModal = document.getElementById('open-modal')
buttonOpenModal.addEventListener('click', function() {
  newProfile.name = user.name
  newProfile.email = user.email
  newProfile.cellphone = user.cellphone
  newProfile.weight = user.weight
  newProfile.bornAt = user.bornAt
  newProfile.bloodType = user.bloodType
  newProfile.isHealthNow = user.isHealthNow 
  newProfile.city = user.city
})


// Adicionando valor padrão dos inputs
let formatedBornAt = ''
if(user.bornAt) {
  const splitData = user.bornAt.split('/');
  formatedBornAt = splitData[2] + '-' + splitData[0] + '-' + splitData[1]; 
}
const inputEditName = document.getElementById('edit-profile-name').value = user.name
const inputEditEmail = document.getElementById('edit-profile-email').value = user.email
const inputEditCellphone = document.getElementById('edit-profile-cellphone').value = user.phone 
const inputEditWeight = document.getElementById('edit-profile-weight').value = user.weight
const inputEditBornAt = document.getElementById('edit-profile-born-at').value = formatedBornAt
const inputEditBloodType = document.getElementById('edit-profile-blood-type').value = user.bloodType
const inputEditCity = document.getElementById('edit-profile-city').value = user.city


// ABRIR MODAL DE EDITAR CONTA
var openModalButton = document.getElementById("open-modal");
var modal = document.getElementById("modal-edit-account");

openModalButton.addEventListener("click", function() {
  modal.style.display = "block";
});
window.addEventListener("click", function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// Editar conta
const buttonSubmitProfileChanges = document.getElementById('button-confirm-edit-profile')
buttonSubmitProfileChanges.addEventListener('click', function() {
  const inputEditName = document.getElementById('edit-profile-name').value
  const inputEditEmail = document.getElementById('edit-profile-email').value
  const inputEditCellphone = document.getElementById('edit-profile-cellphone').value
  const inputEditWeight = Number(document.getElementById('edit-profile-weight').value)
  const inputEditBornAt = document.getElementById('edit-profile-born-at').value
  const inputEditBloodType = document.getElementById('edit-profile-blood-type').value
  const inputEditCity = document.getElementById('edit-profile-city').value

  const verifyAndReplace = (newValue, currentValue) => {
    const wrongValues = ['', 0, null]
    if (wrongValues.includes(newValue)) {
      return currentValue
    }
    return newValue
  }
  newProfile.name = verifyAndReplace(inputEditName, newProfile.name)
  newProfile.email = verifyAndReplace(inputEditEmail, newProfile.email)
  newProfile.phone = verifyAndReplace(inputEditCellphone, newProfile.cellphone)
  newProfile.weight = verifyAndReplace(inputEditWeight, newProfile.weight)
  newProfile.bornAt = verifyAndReplace(inputEditBornAt, newProfile.bornAt)
  newProfile.bloodType = verifyAndReplace(inputEditBloodType, newProfile.bloodType)
  newProfile.city = verifyAndReplace(inputEditCity, newProfile.city)

  if(newProfile.bornAt.includes('-')) {
    const splitData = newProfile.bornAt.split('-');
    const formatedBornAt = splitData[2] + '/' + splitData[1] + '/' + splitData[0];
    newProfile.bornAt = formatedBornAt 
  }
  editUser(user.id, newProfile)
  location.reload();
})

// Buscando valor das checkbox para editar conta
const inputCheckboxIsHealth = document.getElementById('checkbox-is-health')
inputCheckboxIsHealth.addEventListener('click', function() {
  newProfile.isHealthNow = true 
})
const inputCheckboxIsNotHealth = document.getElementById('checkbox-is-not-health')
inputCheckboxIsNotHealth.addEventListener('click', function() {
  newProfile.isHealthNow = false 
})

if(user.isHealthNow){
  inputCheckboxIsHealth.checked = true
}
else {
  inputCheckboxIsNotHealth.checked = true
}
// cancelar edição da conta
const cancelEditAccountButton = document.getElementById('button-cancel-edit-profile')
  cancelEditAccountButton.addEventListener('click', function() {
  location.reload();
}) 

//MODAL DE ENCERRAR CONTA
var openModalButtonDelete = document.getElementById("open-modal-delete-account");
var modalDelete = document.getElementById("modal-delete-account");

var closeButtonDelete = document.getElementById("close-delete-modal-cancel");
var closeButtonDeleteAndConfirm = document.getElementById("close-delete-modal-confirm");


openModalButtonDelete.addEventListener("click", function() {
  modalDelete.style.display = "block";
});


closeButtonDelete.addEventListener("click", function() {
  modalDelete.style.display = "none";
});
closeButtonDeleteAndConfirm.addEventListener("click", function() {
  signOut()
  deleteUser(user.id)
  modalDelete.style.display = "none";
  window.location.href='/'
});

window.addEventListener("click", function(event) {
  if (event.target === modalDelete) {
    modalDelete.style.display = "none";
  }
});


//MODAL ABRIR MENU DE NAVEGAÇÃO
var openModalNavegate = document.getElementById("open-modal-navigate");
var modalNavigate = document.getElementById("modal-navigate");

openModalNavegate.addEventListener("click", function() {
  modalNavigate.style.display = "block";
});

var closeNavigate = document.getElementsByClassName("lateral-menu-content__close")[0];
closeNavigate.addEventListener("click", function() {
  modalNavigate.style.display = "none";
});


window.addEventListener("click", function(event) {
  if (event.target === modalNavigate) {
    modalNavigate.style.display = "none";
  }
});

// LOGOUT
const logoutButton = document.getElementById('logout-button')
logoutButton.addEventListener("click", function() {
  signOut();
  window.location.assign('../signin/index.html');
})


