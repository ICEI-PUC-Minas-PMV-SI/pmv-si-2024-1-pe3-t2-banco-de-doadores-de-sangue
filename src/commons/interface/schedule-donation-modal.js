const closeScheduleDonationModal = () => {
  const modalElement = document.getElementById('modal-schedule-donation');

  if (modalElement) {
    modalElement.remove();
  }
};

const validateEmptyFields = (event, fieldNames = []) => {
  return fieldNames.some(fieldName => {
    if (event.target[fieldName]?.value === '') {
      addInputErrorFeedback(fieldName);
      return true
    }

    return false;
  })
};

const onScheduleDonationFormSubmit = (event, userId) => {
  event.preventDefault();

  const hasError = validateEmptyFields(event, [
    'date',
    'time',
    'bloodDonorCenter',
    'cep',
    'number',
    'street',
    'neighborhood',
    'city',
    'state'
  ]);

  if (hasError) {
    return false;
  }

  createUserDonations(userId, {
    id: generateUUID(),
    donationConfirmed: false,
    date: new Intl.DateTimeFormat('pt-br', {format: 'short'} ).format(new Date(event.target.date.value)),
    time: event.target.time.value,
    address: {
      bloodDonorCenter: event.target.bloodDonorCenter.value,
      cep: event.target.cep.value,
      number: event.target.number.value,
      street: event.target.street.value,
      neighborhood: event.target.neighborhood.value,
      city: event.target.city.value,
      state: event.target.state.value,
    }
  })

  window.location.reload();
}

const _createScheduleDonationModal = () => {
  const modal = `
    <div id="modal-schedule-donation" class="generic-modal">
      <div class="generic-modal-content">
        <div class="generic-modal-content__div">
          <h1 class="generic-modal-content__title">Agendar doação</h1>
          <form class="register-section__form" id="schedule-donation-form">
            <p>Data</p>
            <input
              class="primary-input"
              placeholder="Data"
              type="date"
              name="date"
              onchange="(${removeErrorOnKeydown})(event)"
            />
            <p>Horario</p>
            <input
              class="primary-input"
              placeholder="Horario"
              type="time"
              name="time"
              onchange="(${removeErrorOnKeydown})(event)"
            />
            <input
              class="primary-input"
              placeholder="Nome do hemocentro"
              name="bloodDonorCenter"
              onkeydown="(${removeErrorOnKeydown})(event)"
            />
            <input
              class="primary-input"
              placeholder="Cep do hemocentro"
              name="cep"
              onkeydown="(${removeErrorOnKeydown})(event)"
            />
            <input
              class="primary-input"
              placeholder="Nome da rua do hemocentro"
              name="street"
              onkeydown="(${removeErrorOnKeydown})(event)"
            />
            <input
              class="primary-input"
              placeholder="Número do hemocentro"
              name="number"
              onkeydown="(${removeErrorOnKeydown})(event)"
            />
            <input
              class="primary-input"
              placeholder="Bairro do hemocentro"
              name="neighborhood"
              onkeydown="(${removeErrorOnKeydown})(event)"
            />
            <input
              class="primary-input"
              placeholder="Nome da cidade do hemocentro"
              name="city"
              onkeydown="(${removeErrorOnKeydown})(event)"
            />
            <input
              class="primary-input"
              placeholder="Estado do hemocentro"
              name="state"
              onkeydown="(${removeErrorOnKeydown})(event)"
            />
            <div class="register-section__button-div">
              <button  onclick="(${closeScheduleDonationModal})()" type="button" class="register-section__button-div__cancel-schedule">Cancelar</button>
              <button type="submit" class="register-section__button-div__confirm-schedule">Confirmar</button>
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

const addScheduleDonationModalToDOM = (userId) => {
  closeScheduleDonationModal();

  document.body.appendChild(_createScheduleDonationModal());
  
  const form = document.getElementById('schedule-donation-form');
  form.addEventListener('submit', (event) => onScheduleDonationFormSubmit(event, userId));
};
