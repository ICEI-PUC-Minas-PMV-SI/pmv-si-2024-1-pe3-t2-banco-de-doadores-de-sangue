const removeErrorMessageBellowInput = (fieldName) => {
  const smallErrorMessage = document.getElementById(
    `input-error-message-${fieldName}`
  );

  if (smallErrorMessage) {
    smallErrorMessage.classList.remove("input-error-message");
    smallErrorMessage.innerText = "";
  }
};

const removeErrorOnKeydown = (event) => {
  event.target.classList.remove('primary-input--error');
  removeErrorMessageBellowInput(event.target.name);
};

const createSmallErrorMessage = (fieldName, errorMessage) => {
  const smallErrorMessage = document.createElement("small");
  smallErrorMessage.innerText = errorMessage;
  smallErrorMessage.classList.add("input-error-message");
  smallErrorMessage.id = `input-error-message-${fieldName}`;
  return smallErrorMessage;
};

const addInputErrorFeedback = (
  fieldName,
  errorMessage = "Campo obrigatório"
) => {
  const field = document.querySelector(`form input[name="${fieldName}"]`);
  field.classList.add("primary-input--error");

  const smallErrorMessage = document.getElementById(
    `input-error-message-${fieldName}`
  );

  if (smallErrorMessage) {
    smallErrorMessage.innerText = errorMessage;
    smallErrorMessage.classList.add("input-error-message");
  } else {
    field.insertAdjacentElement(
      "afterend",
      createSmallErrorMessage(fieldName, errorMessage)
    );
  }
};
