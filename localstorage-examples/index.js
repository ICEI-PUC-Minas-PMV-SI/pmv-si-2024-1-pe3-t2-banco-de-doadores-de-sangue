'// Função que gera um id unico para o usuário'
function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0,
        v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}


// ======================================================================== //
// ==== LISTA DE FUNÇÕES QUE BUSCAM E MANIPULAM DADOS DO LOCALSTORAGE ===== //
// ======================================================================== //

// Função para obter o banco de dados do localStorage
function getDatabase() {
  const databaseString = localStorage.getItem('base-blood-user-db');
  return databaseString ? JSON.parse(databaseString) : { users: [], representatives: [] };
}

// Função para salvar o banco de dados no localStorage
function saveDatabase(database) {
  const databaseString = JSON.stringify(database);
  localStorage.setItem('base-blood-user-db', databaseString);
}

// Função para listar todos os usuários
function listUsers() {
  const database = getDatabase();
  console.log(database)
  return database;
}

// Função para buscar um usuário pelo ID
function getUserById(userId) {
  const database = getDatabase();
  const user = database.find(user => user.id === userId);
  console.log(user)
  return user;
}

function getUsersByCity(city) {
  const database = getDatabase();
  const users = database 

  // Filtra os doadores com base na cidade
  const filteredUsers = users.filter(function(donor) {
    return donor.city === city;
  });

  // Retorna os doadores encontrados
  console.log(filteredUsers)
  return filteredUsers;
}

// Função para criar um novo usuário
function createUser(newUser) {
  const database = getDatabase();
  const userId = generateUUID();
  newUser.id = userId;
  database.push(newUser);
  saveDatabase(database);
}

// Função para editar um usuário existente
function editUser(userId, updatedUser) {
  const database = getDatabase();
  const user = database.find(user => user.id === userId);
  if (user) {
    Object.assign(user, updatedUser);
    saveDatabase(database);
  }
  console.log(database.find(user => user.id === userId))
  return database.find(user => user.id === userId);
}

// Função para excluir um usuário e suas doações
function deleteUser(userId) {
  const database = getDatabase();
  const userIndex = database.findIndex(user => user.id === userId);
  if (userIndex !== -1) {
    database.splice(userIndex, 1);
    saveDatabase(database);
  }
}

// Função para criar uma doação vinculada a um usuário
function createDonation(userId, newDonation) {
  const database = getDatabase();
  const user = database.find(user => user.id === userId);
  if (user) {
    if (!user.donations) {
      user.donations = [];
    }
    const donationId = generateUUID()
    newDonation.id = donationId;
    user.donations.push(newDonation);
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
  console.log(user.donations.find(donation => donationId === donation.id))
  return user.donations.find(donation => donationId === donation.id);
}

// Função para excluir uma doação
function deleteDonation(userId, donationId) {
  const database = getDatabase();
  const user = database.find(user => user.id === userId);

  const donationIndex = user.donations.findIndex(donation => donation.id === donationId);
  if (donationIndex !== -1) {
    user.donations.splice(donationIndex, 1);
    saveDatabase(database);
  }
}

// função para buscar todos os representantes
function listRepresentatives() {
  const database = getDatabase();
  console.log(database.representatives)
  return database.representatives;
}

// Função para buscar um representante pelo id
function getOneRepresentative(representativeId) {
  const database = getDatabase();
  const representatives = database.representatives
  const representant = representatives.find(representant => representativeId === representant.id);
  console.log(representant)
  return representant
}
// Função para criar um novo representante
function createRepresentative(newRepresentative) {
  const database = getDatabase();
  const representativeId = generateUUID();
  newRepresentative.id = representativeId;
  database.representatives.push(newRepresentative);
  saveDatabase(database);
}

// Função para editar um representante existente
function editRepresentative(representativeId, updatedRepresentative) {
  const database = getDatabase();
  const representative = database.representatives.find(representant => representativeId === representant.id)
  if (representative) {
    Object.assign(representative, updatedRepresentative);
    saveDatabase(database);
  }
  console.log(database.representatives.find(representative => representative.id === representativeId))
  return database.representatives.find(representative => representative.id === representativeId);
}

//Função para deletar um representante
function deleteRepresentative(representativeId) {
  const database = getDatabase();
  const representativeIndex = database.representatives.findIndex(representative => representative.id === representativeId);
  if (representativeIndex !== -1) {
    database.representatives.splice(representativeIndex, 1);
    saveDatabase(database);
  }
}



// ===================================================================================== //
// ==== LISTA DE EVENTOS QUE SÃO ACIONADOS PARA MANIPULAR DADOS NO LOCALSTORAGE QUANDO = //
// ==== O USUÁRIO CLICA EM ALGUM DOS BOTÕES DO ARQUIVO INDEX.JS NESSA PASTA ============ //
// ===================================================================================== //


// criar usuario
const buttonCreateUser = document.getElementById('create-user');
buttonCreateUser.addEventListener('click', function() {
  const mockUser = {
    name: 'Alberto Guimaraes',
    cellphone: '35991214565',
    email: 'jmagui@gmail.com',
    bornAt: '25/09/1980',
    password: '12345',
    // bloodType: 'A+',
    // isHealthNow: true,
    // city: 'Santa Maria',
    // weight: 60
  }
  createUser(mockUser)
    console.log('create-user!');
  });


// buscar todos os usuarios
const buttonGetAllUsers = document.getElementById('get-users');
buttonGetAllUsers.addEventListener('click', function() {
    listUsers()
    console.log('get-users!');
  });


// buscar todos os usuárioS de uma cidade especifica
const buttonGetOneUser = document.getElementById('get-users-by-city');
buttonGetOneUser.addEventListener('click', function() {
  getUsersByCity('Santa Maria')
  console.log('get-users!');
});


// buscar um UNICO usuario
const buttonGetUserById = document.getElementById('get-user-by-id');
buttonGetUserById.addEventListener('click', function() {

    //Não esquecer de trocar o id por um id salvo no banco
    getUserById('06604822-c966-4c93-8948-4ea4fa181717')
    console.log('get-users!');
});
  

// editar usuario
const buttonEditUser = document.getElementById('edit-user');
buttonEditUser.addEventListener('click', function() {

    //Não esquecer de trocar o id por um id salvo no banco
   editUser('2a82c45f-ca84-4b0a-b53d-c84cb23bce9f', {name: 'Joana Ferreira de Melo'})
    console.log('edit-user!');
});


// apagar usuario
const buttonDeleteUser = document.getElementById('delete-user');
buttonDeleteUser.addEventListener('click', function() {

    //Não esquercer de trocar o id por um id salvo no banco
    deleteUser('2a82c45f-ca84-4b0a-b53d-c84cb23bce9f')
    console.log('delete-user!');
});

// criar doação
const buttonCreateDonation = document.getElementById('create-donation');
buttonCreateDonation.addEventListener('click', function() {
  const mockdonation = { 
    date: '25/11/2022',
    donationConfirmed: false,
    address: {
      bloodDonorCenter: 'Hospital de nova hamburgo',
      street: 'Rua Maria Oliveira',
      number: 12,
      neighborhood: 'center',
      city: 'Santa Maria',
      state: 'RS'                
    } 
}
    //Não esquecer de trocar o id por um id salvo no banco
  createDonation('23e21271-95a7-4150-9ff0-ce28d7259ec0', mockdonation)
    console.log('create-donation!');
  });

  // editar doação
const buttonEditDonation = document.getElementById('edit-donation');
buttonEditDonation.addEventListener('click', function() {
    
  //Não esquecer de trocar o id por um id salvo no banco
  editDonation('f4331be7-ab71-4cfd-991a-8c36e61b8f95','7d62dd14-0909-4dc3-9ea6-1aed3c30a482', {donationConfirmed: true})
  console.log('buttonEditDonation!');
});

// apagar doação
const buttonDeleteDonation = document.getElementById('delete-donation');
buttonDeleteDonation.addEventListener('click', function() {
    //Não esquecer de trocar o id por um id salvo no banco
    deleteDonation('f4331be7-ab71-4cfd-991a-8c36e61b8f95','7d62dd14-0909-4dc3-9ea6-1aed3c30a482')
    console.log('delete-donation!');
  });

// Criar representante do banco
const buttonCreateRepresentative = document.getElementById('create-representative');
buttonCreateRepresentative.addEventListener('click', function() {
    const mockRepresentative = {
      name: 'Marcelo Campos',
      cellphone: '35924664211',
      email: 'marcelo@gmail.com',
      bornAt: '01/09/1990',
      password: '12345'
    }
    createRepresentative(mockRepresentative)
    console.log('create-representative!');
  });
  
// buscar representante do banco
const buttonGetRepresentative = document.getElementById('get-representative');
buttonGetRepresentative.addEventListener('click', function() {
  listRepresentatives()
  console.log('get-representative!');
});

const buttonGetOneRepresentative = document.getElementById('get-one-representative');
buttonGetOneRepresentative.addEventListener('click', function() {
    
  //Não esquecer de trocar o id por um id salvo no banco
  getOneRepresentative('7e596918-9c65-474a-8be7-738744ec2798')
  console.log('get-one-representative!');
});

  // editar representante do banco
const buttonEditRepresentative = document.getElementById('edit-representative');
buttonEditRepresentative.addEventListener('click', function() {

  // Não esquecer de trocar o id por um id salvo no banco
  editRepresentative('7e596918-9c65-474a-8be7-738744ec2798', {name: 'Gandalf'})
  console.log('buttonEditRepresentative!');
});
  
// apagar representante do banco
const buttonDeleteRepresentative = document.getElementById('delete-representative');
buttonDeleteRepresentative.addEventListener('click', function() {
    // Não esquecer de trocar o id por um id salvo no banco
    deleteRepresentative('f22bf87c-68d9-49db-9899-2f545ce49b3f')
    console.log('delete-representative!');
});