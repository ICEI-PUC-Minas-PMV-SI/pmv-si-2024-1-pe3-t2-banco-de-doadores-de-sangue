

// ============== RENDERIZAR INFORMAÇÕES DO REPRESENTANTE ===================
// ============== SAUDAÇÃO AO REPRESENTANTE =============
const userId = getSignedInUser()
const user = findUserById(userId.userId)

const userFirstName = user.name.split(' ')[0];

const saluteRepresentative = document.getElementsByClassName('salute-representative')[0];
const Writesalute = `Bem vindo(a), ${userFirstName}`;
saluteRepresentative.innerHTML = Writesalute;

// ==================INFORMAÇÕES DO REPRESENTANTE============
const representativeInfoData = document.getElementsByClassName('representative-info__data')[0];

// Nome do representante
const renderRepresentativeName = document.createElement('p')
renderRepresentativeName.classList.add("representative-info__data__text");
renderRepresentativeName.innerHTML = `<b>Nome: </b>${user.name}`
representativeInfoData.appendChild(renderRepresentativeName)

// Telefone do representante
const renderRepresentativeCellphone = document.createElement('p')
renderRepresentativeCellphone.classList.add("representative-info__data__text");
renderRepresentativeCellphone.innerHTML = `<b>Telefone: </b>${user.phone}`
representativeInfoData.appendChild(renderRepresentativeCellphone)

// Email do representante
const renderRepresentativeEmail = document.createElement('p')
renderRepresentativeEmail.classList.add("representative-info__data__text");
renderRepresentativeEmail.innerHTML = `<b>E-mail: </b>${user.email}`
representativeInfoData.appendChild(renderRepresentativeEmail)
