const helpers = {};

// little helper to make other functions code cleaner
helpers.inputError = function(input, message=false) {
  switch (input) {
    case 'email':
      txtEmail.classList.add('is-invalid');
      if (message) {
        errEmail.innerHTML = message;
      }
      errEmail.classList.remove('d-none');
      break;
    case 'password':
      txtPassword.classList.add('is-invalid');
      if (message) {
        errPassword.innerHTML = message;
      }
      errPassword.classList.remove('d-none');
      break;
  }
};

// reset input errors
helpers.resetErrorInputs = function(data) {
  // reset email
  txtEmail.classList.remove('is-invalid');
  errEmail.classList.add('d-none');

  // reset password
  txtPassword.classList.remove('is-invalid');
  errPassword.classList.add('d-none');
};

module.exports = helpers;