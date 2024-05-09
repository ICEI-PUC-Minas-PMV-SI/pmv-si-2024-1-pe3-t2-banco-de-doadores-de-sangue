function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0,
        v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

  
  const inputCep = document.querySelector("input[name='zipCode']")
  inputCep.addEventListener("input", (event) => {
    const { value } = event.target;
    if (value?.length !== 8) {
      console.log("CEP inválido aqui")
      return;
    }
      console.log("Passou")

    buscarDadosCep(value)
  })

function setAddressDataToInputs(cep){
      const inputCity = document.querySelector("input[name='city']")
      const inputStreet = document.querySelector("input[name='street']")
      const inputNeighborhood = document.querySelector("input[name='neighborhood']")
      const inputState = document.querySelector("input[name='stateCountry']")

      if(cep){
        inputCity.value = cep.localidade
        inputStreet.value = cep.logradouro
        inputNeighborhood.value = cep.bairro
        inputState.value =  cep.uf
      }
}


function buscarDadosCep(cep) {
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error('CEP não encontrado');
            }
            return response.json();
        })
        .then((data) => {
            setAddressDataToInputs(data)
        })
        .catch((error) => {
            Window.alert("CEP não encontrado!")
            console.error('Erro ao buscar dados do CEP:', error);
        });
}


const saveDonationCenterForm = document.getElementById('modal-register-donation-center-form')
let donationCenter  

saveDonationCenterForm.addEventListener("submit", (event) =>{
    event.preventDefault();
    const {name, city,zipCode, street, neighborhood, stateCountry, number} = saveDonationCenterForm.elements
    donationCenter = {
      name: name?.value,
      city: city?.value,
      zipCode: zipCode?.value,
      street: street?.value,
      neighborhood: neighborhood?.value,
      state: stateCountry?.value,
      number: number?.value
    }

    if(
    !name?.value ||
    !city?.value ||
    !zipCode?.value ||
    !street?.value ||
    !neighborhood?.value ||
    !stateCountry?.value ||
    !number?.value
    ){
      alert("Preencha todos os campos")
      return;
    }
    else if(zipCode.value && zipCode.value !== '' && donationCenter.name){
      const database = getDatabase();
      donationCenter.id = generateUUID();
      if(!database.donationCenters) database.donationCenters = []
      database.donationCenters.push(donationCenter)
      setItemLocalStorage('base-blood-user-db', database);

    alert("Banco de sangue criado com sucesso!")
  
    const inputDonationCenter = document.getElementById('inputField');
    inputDonationCenter.value = donationCenter.name;
    inputDonationCenter.donationCenterId = donationCenter.id;
    const modalDiv = document.getElementById('modal-register-donation-center');
    modalDiv.style.display = "none";
  }
  })
