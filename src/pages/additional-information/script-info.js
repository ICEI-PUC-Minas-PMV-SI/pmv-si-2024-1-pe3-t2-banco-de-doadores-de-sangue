verifyLoggedUser();

const getDatabase = () =>  {
  const databaseString = localStorage.getItem('base-blood-user-db');
  return databaseString ? JSON.parse(databaseString) : {};
}

const saveDatabase = (database) => {
  const databaseString = JSON.stringify(database);
  localStorage.setItem('base-blood-user-db', databaseString);
}

function getUserById(userId) {
  const database = getDatabase();
  const user = database.find(user => user.id === userId);
  return user;
}

function editUser(userId, updatedUser) {
  const database = getDatabase();
  const user = database.find(user => user.id === userId);
  
  if (user) {
    Object.assign(user, updatedUser);
    saveDatabase(database);
  }
  return database.find(user => user.id === userId);
}

function uncheckOther(checkbox) {
  if (checkbox.checked) {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(function(el) {
      if (el !== checkbox) {
        el.checked = false;
      }
    });
  }
}

const userInfo  = getItemLocalStorage('base-blood-signin')
const user = getUserById(userInfo.userId)
const userFirstName = user.name.split(' ')[0]

let isHealthNow = ''
const inputCheckboxIsHealth = document.getElementById('checkbox-is-health')
inputCheckboxIsHealth.addEventListener('click', function() {
  isHealthNow = true 
})
const inputCheckboxIsNotHealth = document.getElementById('checkbox-is-not-health')
inputCheckboxIsNotHealth.addEventListener('click', function() {
  isHealthNow = false 
})

const submitAdditionalInformation = document.getElementById('submit-additional-information')
submitAdditionalInformation.addEventListener('click', function() {

  const inputBornAt = document.getElementById('born-at').value 
  const splitData = inputBornAt.split('-');
  const formatedBornAt = splitData[2] + '/' + splitData[1] + '/' + splitData[0];

  const inputLastDonation = document.getElementById('last-donation').value
  const splitDataLastDonation = inputLastDonation.split('-');
  const formatedLastDonation = splitDataLastDonation[2] + '/' + splitDataLastDonation[1] + '/' + splitDataLastDonation[0];
  
  const additionalInfo  = {
    weight: document.getElementById('weight').value ,
    bornAt: formatedBornAt,
    bloodType: document.getElementById('blood-type').value,
    isHealthNow: isHealthNow,
    city: document.getElementById('city').value,
    lastDonation: formatedLastDonation
  }
  if  ( !additionalInfo.weight            ||
        !additionalInfo.bornAt            ||
        !additionalInfo.bloodType         ||
        additionalInfo.isHealthNow === '' ||
        !additionalInfo.city              ||
        !additionalInfo.lastDonation )
      {
        alert('Preencha todos os campos!')
        return 
      }
      editUser(user.id, additionalInfo)
      window.location.assign('../donor-screen/index.html');
      alert('Informações complementares coletadas com sucesso! Entraremos em contato em breve!')

})
