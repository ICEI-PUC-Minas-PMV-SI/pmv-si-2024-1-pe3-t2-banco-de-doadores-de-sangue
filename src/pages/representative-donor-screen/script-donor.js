const getDatabase = () =>  {
  const databaseString = localStorage.getItem('base-blood-user-db');
  return databaseString ? JSON.parse(databaseString) : { users: [], representatives: [] };
}

const saveDatabase = (database) => {
  const databaseString = JSON.stringify(database);
  localStorage.setItem('base-blood-user-db', databaseString);
}

function deleteDonation(userId, donationId) {
  const database = getDatabase();
  const user = database.find(user => user.id === userId);

  const donationIndex = user.donations.findIndex(donation => donation.id === donationId);
  if (donationIndex !== -1) {
    user.donations.splice(donationIndex, 1);
    saveDatabase(database);
  }
}

function editDonation(userId, donationId, updatedDonation) {
  const database = getDatabase();
  const user = database.find(user => user.id === userId);
  const donation = user ? user.donations.find(donation => donationId === donation.id) : {}
  if (donation) {
    Object.assign(donation, updatedDonation);
    saveDatabase(database);
  }
  return user.donations.find(donation => donationId === donation.id);
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

const renderUserIsNotADonator = (donationData) => {
  const renderYouReNotADonator = document.createElement('div')
  renderYouReNotADonator.classList.add("donation-data__you-re-not-a-donator");
  renderYouReNotADonator.innerHTML = '<p>Esse usuário ainda não tem doações :(</p>'
  donationData.appendChild(renderYouReNotADonator)

  const getScheduleButton = document.getElementById('schedule-div')
  getScheduleButton.style.display = 'none'
}

const createModalEditDonation = (donationId) => {
  const donationCard = document.getElementById(donationId)
  const modalEditSchedule = document.getElementById("modal-edit-schedule");
  
  donationCard.addEventListener('click', function() {
    modalEditSchedule.value = donationId
    modalEditSchedule.style.display = "block";

    const closeScheduleDonation = document.getElementById('edit-schedule-modal-close__close')
    const closeScheduleConfirmDonation = document.getElementById('edit-schedule-modal-close__confirm')
    const closeScheduleCancelDonation = document.getElementById('edit-schedule-modal-close__cancel')

    closeScheduleDonation.addEventListener("click", function() {
      if(donationId === modalEditSchedule.value){
        modalEditSchedule.style.display = "none";
      }
    });
    closeScheduleConfirmDonation.addEventListener("click", function() {
      editDonation(user.id, donationId, {donationConfirmed: true})
      location.reload()
  });
  closeScheduleCancelDonation.addEventListener("click", function() {
    deleteDonation(user.id, donationId)
    location.reload()
  });
  window.addEventListener("click", function(event) {
    if (event.target === modalEditSchedule) {
      modalEditSchedule.style.display = "none";
    }
  });
  })
}

 const openDonationDetails = (donation) => {
    const donationCard = document.getElementById(donation.id)
    donationCard.addEventListener('click', function() {
   
      const mainBody = document.getElementsByClassName("main")[0]
      const createModalDonationDetails = document.createElement("div")
      mainBody.appendChild(createModalDonationDetails)
      createModalDonationDetails.classList = "modal"
      createModalDonationDetails.id = `modal-donation-info-of-donation-${donation.id}`
      createModalDonationDetails.style.display = "block";
  
      const modalDonationDetailsBody = document.createElement("div")
      modalDonationDetailsBody.classList = "modal-delete-account__body"
      createModalDonationDetails.appendChild(modalDonationDetailsBody)
  
      const modalDonationDetailsBodyContent = document.createElement("div")
      modalDonationDetailsBodyContent.classList = "modal-donation-info__content"
      modalDonationDetailsBody.appendChild(modalDonationDetailsBodyContent)
     
  
      const buttonCloseModal = document.createElement("button")
      buttonCloseModal.innerHTML = "X"
      buttonCloseModal.classList = "modal-donation-info__content__button-close"
      buttonCloseModal.addEventListener("click", function() {
        location.reload();
      })
      modalDonationDetailsBodyContent.appendChild(buttonCloseModal)
    
      const modalTitle = document.createElement('h1')
      modalTitle.innerHTML = 'Detalhes da doação'
      modalTitle.classList = 'modal-donation-info__content__title'
      modalDonationDetailsBodyContent.appendChild(modalTitle)
  
      const textBloodDonorCenter = document.createElement('p')
      textBloodDonorCenter.innerHTML = `<b>Hemocentro:</b> ${donation.address.bloodDonorCenter}`
      textBloodDonorCenter.classList = 'modal-donation-info__content__text'
      modalDonationDetailsBodyContent.appendChild(textBloodDonorCenter)
      
      const textDonationDate = document.createElement('p')
      textDonationDate.innerHTML = `<b>Data:</b> ${donation.date}`
      textDonationDate.classList = 'modal-donation-info__content__text'
      modalDonationDetailsBodyContent.appendChild(textDonationDate)
  
      const textDonationTime = document.createElement('p')
      textDonationTime.innerHTML = `<b>Horário:</b> ${donation.time ??'Não definido'}`
      textDonationTime.classList = 'modal-donation-info__content__text'
      modalDonationDetailsBodyContent.appendChild(textDonationTime)
  
      const textDonationZipCode = document.createElement('p')
      textDonationZipCode.innerHTML = `<b>Cep do hemocentro:</b> ${donation.date}`
      textDonationZipCode.classList = 'modal-donation-info__content__text'
      modalDonationDetailsBodyContent.appendChild(textDonationZipCode)
      
      const donorCenterAddress = 
        `${donation.address.street},
         numero ${donation.address.number},
         ${donation.address.neighborhood}.
         ${donation.address.city}-${donation.address.state}`
    
      const textDonationAddress = document.createElement('p')
      textDonationAddress.innerHTML = `<b>Endereço hemocentro:</b> ${donorCenterAddress}`
      textDonationAddress.classList = 'modal-donation-info__content__text'
      modalDonationDetailsBodyContent.appendChild(textDonationAddress)
  
      const textDonationStatus = document.createElement('p')
      textDonationStatus.classList = 'modal-donation-info__content__text'
      textDonationStatus.classList = 'donation-modal-status'
      modalDonationDetailsBodyContent.appendChild(textDonationStatus)
  
      if(donation.donationConfirmed === true){
        textDonationStatus.style.color = '#33A0AB'
        textDonationStatus.innerHTML = 'COLETADO'
      } else {
        textDonationStatus.style.color = '#EB3738'
        textDonationStatus.innerHTML = 'DOAÇÃO AGENDADA'
      }
    });
  }
const renderDonationInfo = (donationData) => {
  const renderDonationDataHeader = document.createElement('h1')
  renderDonationDataHeader.classList.add("donation-data__header");
  renderDonationDataHeader.innerHTML = 'Doações'
  donationData.appendChild(renderDonationDataHeader)

  const renderDonationDataContainer = document.createElement('div')
  renderDonationDataContainer.classList.add("donation-data__container");
  donationData.appendChild(renderDonationDataContainer)

  user.donations.sort((a, b) =>
    a.donationConfirmed === b.donationConfirmed ? 0 : a.donationConfirmed ? 1 : -1
  ).map((donation) => {
    const renderDonationCard = document.createElement('div')
    renderDonationCard.classList.add("donation-data__container__donation-card");
    renderDonationCard.id = donation.id;
    const renderDonationCardDate = document.createElement('p')
    renderDonationCardDate.classList.add("donation-data__container__donation-card__date");
    renderDonationCardDate.innerHTML = donation.date;
    renderDonationCard.appendChild(renderDonationCardDate)

    const renderDonationCardAddress = document.createElement('p')
    renderDonationCardAddress.classList.add("donation-data__container__donation-card__address");
    renderDonationCardAddress.innerHTML = donation.address.bloodDonorCenter;
    renderDonationCard.appendChild(renderDonationCardAddress)

    const renderDonationCardStatus = document.createElement('span')
    if (donation.donationConfirmed) {
      renderDonationCardStatus.classList.add("donation-data__container__donation-card__confimed");
      renderDonationCardStatus.innerHTML = 'Coletado'
    }
    else {
      renderDonationCardStatus.classList.add("donation-data__container__donation-card__scheduled");
      renderDonationCardStatus.innerHTML = 'Agendado'
      const renderScheduleButtonEdit = document.createElement('object');
      renderScheduleButtonEdit.classList.add("donation-data__container__donation-card__edit");
      renderDonationCardStatus.appendChild(renderScheduleButtonEdit)
      renderScheduleButtonEdit.setAttribute('data', '../../public/assets/icons/edit-icon.png')
      renderScheduleButtonEdit.setAttribute('id', 'open-modal-edit-schedule')

      renderDonationCardStatus.style.position = 'relative'
      renderScheduleButtonEdit.style.position = 'absolute'
      renderScheduleButtonEdit.style.right = '-10px'
      renderScheduleButtonEdit.style.top = '-12px'
      renderScheduleButtonEdit.style.color = '#ffffff'
      renderScheduleButtonEdit.style.background = '#EB3738'
      renderScheduleButtonEdit.style.padding = '1px'
      renderScheduleButtonEdit.style.borderRadius = '100px'
      renderScheduleButtonEdit.style.width = '25px'
      renderScheduleButtonEdit.style.height = '25px'


    }
    renderDonationCard.appendChild(renderDonationCardStatus)

    renderDonationDataContainer.appendChild(renderDonationCard)
    if(donation.donationConfirmed){
      openDonationDetails(donation)
    }else {
      createModalEditDonation(donation.id)
    }
  })
}

// INFORMAÇÕES DO DOADOR
const urlParams = new URLSearchParams(window.location.search);
var donorId = urlParams.get('id');
const user = findUserById(donorId)
const donorInfoData = document.getElementsByClassName('donor-info__data')[0];


const renderDonorName = document.createElement('p')
renderDonorName.classList.add("donor-info__data__text");
renderDonorName.innerHTML = `<b>Nome: </b>${user.name}`
donorInfoData.appendChild(renderDonorName)

const renderDonorCellphone = document.createElement('p')
renderDonorCellphone.classList.add("donor-info__data__text");
renderDonorCellphone.innerHTML = `<b>Telefone: </b>(${user.ddd}) ${user.phone}`
donorInfoData.appendChild(renderDonorCellphone)

const RenderDonorEmail = document.createElement('p')
RenderDonorEmail.classList.add("donor-info__data__text");
RenderDonorEmail.innerHTML = `<b>E-mail: </b>${user.email}`
donorInfoData.appendChild(RenderDonorEmail)

if (user.bornAt) {
  const renderUserBornAt = document.createElement('p')
  renderUserBornAt.classList.add("donor-info__data__text");
  renderUserBornAt.innerHTML = `<b>Data de nascimento: </b>${user.bornAt}`
  donorInfoData.appendChild(renderUserBornAt)
}

if (user.city) {
  const renderUserCity = document.createElement('p')
  renderUserCity.classList.add("donor-info__data__text");
  renderUserCity.innerHTML = `<b>City: </b>${user.city}`
  donorInfoData.appendChild(renderUserCity)
}

if (user.weight) {
  const renderUserWeight = document.createElement('p')
  renderUserWeight.classList.add("donor-info__data__text");
  renderUserWeight.innerHTML = `<b>Peso: </b>${user.weight}kg`
  donorInfoData.appendChild(renderUserWeight)
}

if (user.bloodType) {
  const renderBloodType = document.createElement('p')
  renderBloodType.classList.add("donor-info__data__text");
  renderBloodType.innerHTML = `<b>Tipo de sangue: </b>${user.bloodType}`
  donorInfoData.appendChild(renderBloodType)
}

// INFORMAÇÕES SOBRE DOAÇÃO

const donationData = document.getElementsByClassName('donation-data')[0];

if (!user.bloodType || !user.bornAt || !user.isHealthNow || !user.city) {
  renderUserIsNotADonator(donationData)
}
else if (!user.donations) {
  const renderYouReNotADonator = document.createElement('div')
  renderYouReNotADonator.classList.add("donation-data__you-re-not-a-donator");
  renderYouReNotADonator.innerHTML = '<p>Esse doador ainda não fez nenhuma doação:)</p>'
  donationData.appendChild(renderYouReNotADonator)
}
else {
  renderDonationInfo(donationData)
}