const passwordValidator = (password) => {
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  // Minimum eight characters, at least one uppercase letter, one lowercase letter and one number
  return passwordRegex.test(password);
};
exports.default = passwordValidator;
