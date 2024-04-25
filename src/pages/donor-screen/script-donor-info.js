verifyLoggedUser();

// =========== Funções ===========
const renderUserIsNotADonator = (donationData, userId) => {
  const renderYouReNotADonator = document.createElement('div')
  renderYouReNotADonator.classList.add("donation-data__you-re-not-a-donator");
  renderYouReNotADonator.style.maxHeight = "30vh"
  renderYouReNotADonator.innerHTML = '<p>Você ainda não é um doador :(</p>'
  donationData.appendChild(renderYouReNotADonator)

  const renderDonationInstruction = document.createElement('p')
  renderDonationInstruction.classList.add("donation-data__instruction");
  renderDonationInstruction.innerHTML = 'Você ainda não pode doar pois não tem o cadastro completo. Termine seu cadastro clicando abaixo)'
  donationData.appendChild(renderDonationInstruction)

  const renderDonationButton = document.createElement('button')
  renderDonationButton.classList.add("primary-button");
  renderDonationButton.innerHTML = 'Quero ser doador'
  donationData.appendChild(renderDonationButton)
  renderDonationButton.addEventListener("click", function() {
    window.location.assign('../additional-information/index.html');
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
    textDonationZipCode.innerHTML = `<b>Cep do hemocentro:</b> ${donation.address.cep}`
    textDonationZipCode.classList = 'modal-donation-info__content__text'
    modalDonationDetailsBodyContent.appendChild(textDonationZipCode)
    
    const donorCenterAddress = 
      `${donation.address.street},
        ${donation.address.number},
       ${donation.address.neighborhood},
       ${donation.address.city}, ${donation.address.state}`
  
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

  user.donations
    .sort((a, b) => a.donationConfirmed === b.donationConfirmed ? 0 : a.donationConfirmed ? 1 : -1)
    .map((donation) => {
      const renderDonationCard = document.createElement('div')
      renderDonationCard.classList.add("donation-data__container__donation-card");
      renderDonationCard.id = donation.id

      const renderDonationCardDate = document.createElement('p')
      renderDonationCardDate.classList.add("donation-data__container__donation-card__date");
      renderDonationCardDate.innerHTML = donation.date;
      renderDonationCard.appendChild(renderDonationCardDate)

      const renderDonationCardAddress = document.createElement('p')
      renderDonationCardAddress.classList.add("donation-data__container__donation-card__address");
      renderDonationCardAddress.innerHTML = donation.address.bloodDonorCenter;
      renderDonationCard.appendChild(renderDonationCardAddress)

      const renderDonationCardStatus = document.createElement('span')
      if (donation.donationConfirmed){
        renderDonationCardStatus.classList.add("donation-data__container__donation-card__confimed");
        renderDonationCardStatus.innerHTML = 'Coletado'
      }
      else{
        renderDonationCardStatus.classList.add("donation-data__container__donation-card__scheduled");
        renderDonationCardStatus.innerHTML = 'Agendado'
      }
      renderDonationCard.appendChild(renderDonationCardStatus)
      
      renderDonationDataContainer.appendChild(renderDonationCard)

      openDonationDetails(donation)
    })
}

// ========= FUNÇÕES PARA MANIPULAR OS DADOS DO LOCALSTORAGE =============
const getDatabase = () =>  {
  const databaseString = localStorage.getItem('base-blood-user-db');
  return databaseString ? JSON.parse(databaseString) : { users: [], representatives: [] };
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


// ============== RENDERIZAR INFORMAÇÕES DO DOADOR ===================

const userInfo  = getItemLocalStorage('base-blood-signin')
const user = getUserById(userInfo.userId)
const userFirstName = user.name.split(' ')[0]

const mainMenuTitle = document.getElementsByClassName('main-menu__title')[0];
const messageToWrite =  `Bem vindo(a), ${userFirstName}`;
mainMenuTitle.innerHTML = messageToWrite;

const donorInfoData = document.getElementsByClassName('donor-info__data')[0];

// nome do usuario
const renderDonorName = document.createElement('p')
renderDonorName.classList.add("donor-info__data__text");
renderDonorName.innerHTML = `<b>Nome: </b>${user.name}`
donorInfoData.appendChild(renderDonorName)

// telefone
const renderDonorCellphone = document.createElement('p')
renderDonorCellphone.classList.add("donor-info__data__text");
renderDonorCellphone.innerHTML = `<b>Telefone: </b>(${user.ddd}) ${user.phone}`
donorInfoData.appendChild(renderDonorCellphone)

// e-mail
const RenderDonorEmail = document.createElement('p')
RenderDonorEmail.classList.add("donor-info__data__text");
RenderDonorEmail.innerHTML = `<b>E-mail: </b>${user.email}`
donorInfoData.appendChild(RenderDonorEmail)

if(user.bornAt){
  const renderUserBornAt = document.createElement('p')
  renderUserBornAt.classList.add("donor-info__data__text");
  renderUserBornAt.innerHTML = `<b>Data de nascimento: </b>${user.bornAt}`
  donorInfoData.appendChild(renderUserBornAt)
}

if(user.city){
  const renderUserCity = document.createElement('p')
  renderUserCity.classList.add("donor-info__data__text");
  renderUserCity.innerHTML = `<b>Cidade: </b>${user.city}`
  donorInfoData.appendChild(renderUserCity)
}

if(user.weight){
  const renderUserWeight = document.createElement('p')
  renderUserWeight.classList.add("donor-info__data__text");
  renderUserWeight.innerHTML = `<b>Peso: </b>${user.weight}kg`
  donorInfoData.appendChild(renderUserWeight)
}

if(user.bloodType){
  const renderBloodType = document.createElement('p')
  renderBloodType.classList.add("donor-info__data__text");
  renderBloodType.innerHTML = `<b>Tipo de sangue: </b>${user.bloodType}`
  donorInfoData.appendChild(renderBloodType)
}


// ==================  INFORMAÇÕES SOBRE DOAÇÃO ==================

const donationData = document.getElementsByClassName('donation-data')[0];

if(!user.bloodType || !user.bornAt || !user.isHealthNow || !user.city){
  renderUserIsNotADonator(donationData, user.id)
}
else if(!user.donations){
  const renderYouReNotADonator = document.createElement('div')
  renderYouReNotADonator.classList.add("donation-data__you-re-not-a-donator");
  renderYouReNotADonator.innerHTML = '<p>Suas doações vão aparecer aqui assim que fizermos o primeiro agendamento :)</p>'
  donationData.appendChild(renderYouReNotADonator)
}
else{
  renderDonationInfo(donationData)
}
