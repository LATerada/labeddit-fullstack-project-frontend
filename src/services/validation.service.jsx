const emailValidation = (email) => {
  return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
};

const passwordValidation = (password) => {
  return /^[0-9a-zA-Z$*&@#]{6,}$/.test(password);
};

const nameValidation = (name) => {
  return /.{2,}/.test(name);
};

const ValidationService = {
  emailValidation,
  passwordValidation,
  nameValidation,
};

export default ValidationService;
