const validateIfEmailHasError = (user, email) => {
  if (isInvalidEmail(email)) {
    addInputErrorFeedback("email", "Insira um email válido!");
    return true;
  }

  if (!user) {
    addInputErrorFeedback("email", "Usuário não encontrado!");
    return true;
  }

  return false;
};

const validateIfPasswordHasError = (user, password) => {
  if (password === "") {
    addInputErrorFeedback("password");
    return true;
  }

  if (user.password !== encrypt(password)) {
    addInputErrorFeedback("password", "Senha inválida!");
    return true;
  }

  return false;
};

const signinFormOnSubmit = (event) => {
  const email = event.target.email.value;
  const password = event.target.password.value;

  const user = findUserByEmail(email);

  const hasEmailError = validateIfEmailHasError(user, email);
  if (hasEmailError) {
    return;
  }

  const hasPasswordError = validateIfPasswordHasError(user, password);
  if (hasPasswordError) {
    return;
  }

  signInUser(user);

  if (user.isRepresentative) {
    window.location.assign("../representative-screen/index.html");
  } else {
    window.location.assign("../donor-screen/index.html");
  }
};

const signinButtonOnClick = () => {
  const form = document.getElementById("signin-form");
  const submitEvent = new Event("submit", { bubbles: true, cancelable: true });
  form.dispatchEvent(submitEvent);
};

document.addEventListener("DOMContentLoaded", () => {
  verifyUserIsAlreadyLogged();
  
  // Registrando função callback para o formulário
  const form = document.getElementById("signin-form");
  form.addEventListener("submit", signinFormOnSubmit);

  // Registrando função callback para o botão
  const button = document.querySelector('button[name="signin-button"]');
  button.addEventListener("click", signinButtonOnClick);
});
