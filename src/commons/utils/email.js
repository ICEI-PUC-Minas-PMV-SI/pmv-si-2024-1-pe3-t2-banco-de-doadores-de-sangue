const isInvalidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const hasEmailError = !emailRegex.test(email);
  return hasEmailError;
};
