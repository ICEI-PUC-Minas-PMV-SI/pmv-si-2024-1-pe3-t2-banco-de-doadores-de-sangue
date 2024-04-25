const deleteAccount = () => {
  const { userId } = getSignedInUser();
  signOut();
  deleteUser(userId);
  window.location.assign('../../../index.html');
};

const logoutAccount = () => {
  signOut();
  window.location.assign('../signin/index.html');
}

const editAccount = () => {
  const { userId } = getSignedInUser();
  addEditAccountModalToDOM(userId)
}

document.addEventListener('DOMContentLoaded', () => {
  verifyRepresentativeUser();
  
  // Registrando função callback para o botão
  const deleteAccountbutton = document.getElementById('delete-account-button');
  deleteAccountbutton.addEventListener('click', () => {
    addDeleteAccountModalToDOM(deleteAccount);
  });

  const logoutButton = document.getElementById('logout-account-button');
  logoutButton.addEventListener('click', logoutAccount);

  const editButton = document.getElementById('edit-account-button');
  editButton.addEventListener('click', editAccount);
});
