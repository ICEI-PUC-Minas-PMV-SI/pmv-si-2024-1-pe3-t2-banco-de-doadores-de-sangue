function getDonationCenters() {
  const database = getDatabase();
  return database.donationCenters || [];
}

const donationCenters = getDonationCenters()

const donationCentersName =  donationCenters.map(donationCenter => donationCenter.name);

// Função para preencher a lista suspensa com base nos itens disponíveis
let dropdownList = document.getElementById('dropdownList-2');
function populateDropdown(donationCentersName) {
    dropdownList.innerHTML = '';
    donationCentersName.forEach(item => {
        const div = document.createElement('div');

        div.textContent = item;
        div.addEventListener('click', () => {
            inputField.value = item;
            if(inputField.value === 'Criar banco de sangue') {
              // openModalCreateDonationCenter();
            }
            dropdownList.style.display = 'none';
        });
        dropdownList.appendChild(div);
    });
 
}


const inputField = document.getElementById('donor-center-name-to-schedule');
// Função para filtrar os itens com base no texto digitado no campo de entrada
function filterItems() {
    const query = inputField.value.toLowerCase();
    let filteredItems = donationCentersName.filter(item => item.toLowerCase().includes(query));
    populateDropdown(filteredItems);
    dropdownList.style.display = filteredItems.length ? 'block' : 'none';
}

// Adiciona um ouvinte de evento de entrada ao campo de entrada
inputField.addEventListener('input', filterItems);

// Esconde a lista suspensa quando o campo de entrada perde o foco
inputField.addEventListener('blur', () => {
    setTimeout(() => {
        dropdownList.style.display = 'none';
    }, 100);
});


// Mostra a lista suspensa quando o campo de entrada ganha foco
inputField.addEventListener('focus', () => {
    filterItems();
});

// inputField
const scheduleDonationDate = document.getElementById('schedule-donation-date')
const scheduleDonationTime = document.getElementById('schedule-donation-time')

const buttonScheduleDonation = document.getElementById('button-confirm-schedule-donation')
const buttonScheduleDonationCancel = document.getElementById('button-cancel-schedule-donation')

buttonScheduleDonationCancel.addEventListener('click', function() {
  window.location.reload()
})


function validarHorarioEData(horario, data) {
    // Validação do horário
    console.log(horario, data)
    const [horas, minutos] = horario.split(':').map(Number);
    console.log(horas, minutos)
    if (horas < 8 || horas > 19 || (horas === 19 && minutos > 0)) {
       alert('Horário inválido! Por favor, selecione um horário entre 8h e 19h.')
    }

    // Validação do dia útil
    const date = new Date(data);
    const diaDaSemana = date.getDay();
    const diaUtil = diaDaSemana !== 0 && diaDaSemana !== 6; // 0 é Domingo, 6 é Sábado

    if (!diaUtil) {
        alert('Data inválida! Por favor, selecione um dia útil.')
    }
}
buttonScheduleDonation.addEventListener('click', function() {
  const date = scheduleDonationDate.value
  const time = scheduleDonationTime.value

  const donationCenterName = inputField.value
  const donationCenter = donationCenters.find(donationCenter => donationCenter.name === donationCenterName)
 
    console.log('AQUI1')


    validarHorarioEData(time, date)
  const donationSchedule = {
    donationConfirmed: false,
    date: date.split('-').reverse().join('/'),
    address: {
      bloodDonorCenter: donationCenter.name,
      street: donationCenter.sreet,
      number: donationCenter.number,
      neighborhood: donationCenter.neighborhood,
      city: donationCenter.city,
      state: donationCenter.state                
    } }

    console.log('AQUI2')
    const userInfo  = getItemLocalStorage('base-blood-signin')
    const user = getUserById(userInfo.userId)
    user?.donations?.length ? user.donations.push(donationSchedule) : user.donations = [donationSchedule]
    editUser(userInfo.userId, user)
  })