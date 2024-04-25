const closeDeleteAccountModal = () => {
  const modalElement = document.getElementById('modal-delete-account');
  modalElement.style.display = 'none';
};

const _createDeleteAccountModal = (onConfirmClick) => {
  const modal = `
  <div id="modal-delete-account" class="generic-modal">
      <div class="modal-delete-account__body">
        <div class="modal-delete-account__body__content">
          <h1 class="generic-modal-content__title">Apagar conta</h1>
          <p class="generic-modal-content__text">Tem certeza de que deseja apagar a conta?</p>    
          <div class="register-section__button-div">
            <button 
              id="close-delete-modal-cancel"
              class="register-section__button-div__cancel" 
              onclick="(${closeDeleteAccountModal})()"
            >
              Cancelar
            </button>
            <button 
              id="close-delete-modal-confirm" 
              class="register-section__button-div__confirm" 
              onclick="(${onConfirmClick})()"
            >
              Confirmar
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  const parser = new DOMParser();
  const doc = parser.parseFromString(modal, 'text/html');
  return doc.body.firstChild;
};

const addDeleteAccountModalToDOM = (onConfirmClick = () => {}) => {
  const modalElement = document.getElementById('modal-delete-account');

  if (!modalElement) {
    document.body.appendChild(_createDeleteAccountModal(onConfirmClick));
  } else {
    const modalElement = document.getElementById('modal-delete-account');
    modalElement.style.display = 'block';
  }
};
