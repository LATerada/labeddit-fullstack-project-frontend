const emailValidation = (email) => {
  return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
};

const passwordValidation = (password) => {
  return /^[0-9a-zA-Z$*&@#]{6,}$/.test(password);
};

const nameValidation = (name) => {
  return /.{2,}/.test(name);
};

const postValidation = (post)=>{
  return /.{1}/.test(post)
}

const ValidationService = {
  emailValidation,
  passwordValidation,
  nameValidation,
  postValidation
};

export default ValidationService;
