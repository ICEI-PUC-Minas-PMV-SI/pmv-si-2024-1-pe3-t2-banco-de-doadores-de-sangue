//Doadores
// Função para obter o banco de dados do localStorage
function getDatabase() {
    const databaseString = localStorage.getItem('base-blood-user-db');
    return databaseString ? JSON.parse(databaseString) : {};
  }
  
  // Função para salvar o banco de dados no localStorage
  function saveDatabase(database) {
    const databaseString = JSON.stringify(database);
    localStorage.setItem('base-blood-users-db', databaseString);
  }
  
  // Função para listar todos os usuários
  function listUsers() {
    const database = getDatabase();
    return database;
  }

  function redirectRepresentitiveToDonorInfo(donorId) {
    const donorCard = document.getElementById(donorId)
    donorCard.addEventListener('click', function() {
      window.location.assign(`../representative-donor-screen/index.html?id=${donorId}`)
    })
  }
  const users = listUsers();
  const donors = users.filter(user => user.isRepresentative === false)
  const donorSection = document.getElementsByClassName("donators-section")[0]


  donors.map(donor => {
    const donorCard = document.createElement("div")
    donorCard.classList = "donators-section__donator-card"
    donorSection.appendChild(donorCard)
    donorCard.id = donor.id

  
    donorCard.innerHTML = `
    <div class="background-illustration"></div>
    <div class="donators-section__donator-card__info">
      <span>${donor.name}</span>
      <span>Tipo Sanguíneo: ${donor.bloodType || 'não informado'}</span>
      <span>Telefone: (${donor.ddd}) ${donor.phone}</span>
      <span>Última doação: ${donor.lastDonation || 'não informado'}</span>
    </div>
    `

    redirectRepresentitiveToDonorInfo(donor.id)
  })
