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
        inputState.value =  "teste"
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
  saveDonationCenterForm.addEventListener("click", (event) =>{
    event.preventDefault();
    const {name, city,zipCode, street, neighborhood, state, number} = saveDonationCenterForm.elements
    const donationCenter = {
      name: name?.value,
      city: city?.value,
      zipCode: zipCode?.value,
      street: street?.value,
      neighborhood: neighborhood?.value,
      state: state?.value,
      number: number?.value
    }
  })
