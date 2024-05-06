// Os itens disponíveis para filtrar

// { 
//     name: 'Banco de sangue do hospital de Santa Maria',
//     address: {
//       bloodDonorCenter: 'Hospital de nova hamburgo',
//       street: 'Rua Maria Oliveira',
//       number: 12,
//       neighborhood: 'center',
//       city: 'Santa Maria',
//       state: 'RS'                
//     } 
// }


const getDatabase = () =>  {
  const databaseString = localStorage.getItem('base-blood-user-db');
  return databaseString ? JSON.parse(databaseString) : { users: [], representatives: [] };
}

const saveDatabase = (database) => {
  const databaseString = JSON.stringify(database);
  localStorage.setItem('base-blood-user-db', databaseString);
}

function getDonationCenters() {
  const database = getDatabase();
  return database.donationCenters;
}

const donationCenters = getDonationCenters()
const donationCentersName =  donationCenters.map(donationCenter => donationCenter.name);
  
const inputField = document.getElementById('inputField');
const dropdownList = document.getElementById('dropdownList');


const openModalCreateDonationCenter = () => {
  
}
// Função para preencher a lista suspensa com base nos itens disponíveis
function populateDropdown(donationCentersName) {
    dropdownList.innerHTML = '';
    donationCentersName.forEach(item => {
        const div = document.createElement('div');
        if (item === 'Criar banco de sangue') {
          div.style.background = '#eb3738';
          div.style.color = '#ffffff';
          div.id = 'create-donation-center-div';
        }
        div.textContent = item;
        div.addEventListener('click', () => {
            inputField.value = item;
            if(inputField.value === 'Criar banco de sangue') {
              openModalCreateDonationCenter();
            }
            dropdownList.style.display = 'none';
        });
        dropdownList.appendChild(div);
    });
 
}

// Função para filtrar os itens com base no texto digitado no campo de entrada
function filterItems() {
  console.log('filterItems')
    const query = inputField.value.toLowerCase();
    let filteredItems = donationCentersName.filter(item => item.toLowerCase().includes(query));
    filteredItems.push('Criar banco de sangue')
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

// Inicializa a lista suspensa com todos os itens disponíveis
populateDropdown(donationCentersName);
