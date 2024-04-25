const closeEditAccountModal = () => {
  const modalElement = document.getElementById('modal-edit-account');

  if (modalElement) {
    modalElement.remove();
  }
};

const onEditAccountFormSubmit = (event, user) => {
  event.preventDefault();

  if (event.target.name.value === '') {
    addInputErrorFeedback('name');
    return;
  }

  if (event.target.phone.value === '') {
    addInputErrorFeedback('phone');
    return;
  }

  updateUser({
    ...user,
    name: event.target.name.value,
    phone: event.target.phone.value,
    weight: event.target.weight.value,
    bornAt: event.target.bornAt.value !== '' ? event.target.bornAt.value : user.bornAt,
    city: event.target.city.value,
    bloodType: event.target.bloodType.value,
    isHealthNow: event.target.isHealthNow.value === 'yes',
  })

  window.location.reload();
}

const _createEditAccountModal = (user) => {
  const modal = `
  <div id="modal-edit-account" class="generic-modal">
      <div class="generic-modal-content">
        <div class="generic-modal-content__div">
          <h1 class="generic-modal-content__title">Editar Perfil</h1>
          <form class="register-section__form" id="edit-account-form">
            <input 
              class="primary-input" 
              type="email" 
              placeholder="E-mail" 
              name="email" 
              value="${user.email}" 
              readonly 
            />
            <input 
              class="primary-input"
              type="text"
              placeholder="Nome"
              name="name"
              value="${user.name}"
              onkeydown="(${removeErrorOnKeydown})(event)"
            />
            <input 
              class="primary-input"
              type="number
              placeholder="Telefone"
              name="phone"
              value="${user.phone}"
              onkeydown="(${removeErrorOnKeydown})(event)"
            />
            <input 
              class="primary-input"
              type="number"
              placeholder="Peso"
              name="weight"
              value="${user.weight || ''}"
              step=".01"
            />
            <input class="primary-input" type="date" placeholder="Data de nascimento" name="bornAt" value="${user.bornAt}" />
            <input class="primary-input" type="text" placeholder="Cidade" name="city" value="${user.city || ''}" />
            <p class="register-section__check-text">Qual seu tipo sanguineo?</p>
            <select class="primary-input" name="bloodType" value="${user.bloodType}" >
              <option value="Não sei/Não informado">Não sei</option>
              <option value="O+">O+</option>
              <option value="0-">0-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
            <label class="radio-label">Está se sentindo bem?</label>
            <div class="radio-options">
              <div class="radio-options__option">
                <input type="radio" id="yes" name="isHealthNow" value="yes" ${user.isHealthNow ? 'checked' : '' } />
                <label for="yes">Sim</label>
              </div>
              <div class="radio-options__option">
                <input type="radio" id="no" name="isHealthNow" value="no" ${user.isHealthNow ? '' : 'checked' } />
                <label for="no">Não</label>
              </div>
            </div>
            <div class="register-section__button-div">
              <button onclick="(${closeEditAccountModal})()" type="button" class="register-section__button-div__cancel" id="button-cancel-edit-profile">Cancelar</button>
              <button type="submit" class="register-section__button-div__confirm" id="button-confirm-edit-profile">Confirmar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `;

  const parser = new DOMParser();
  const doc = parser.parseFromString(modal, 'text/html');
  return doc.body.firstChild;
};

const addEditAccountModalToDOM = (userId) => {
  closeEditAccountModal();

  const user = findUserById(userId);
  document.body.appendChild(_createEditAccountModal(user));
  
  const form = document.getElementById('edit-account-form');
  form.addEventListener('submit', (event) => onEditAccountFormSubmit(event, user));
};
