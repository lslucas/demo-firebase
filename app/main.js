(function() {

  // load config
  const config = require('./../lib/config');
  const helpers = require('./../lib/helpers');
  const validator = require('email-validator');


  firebase.initializeApp(config);


  // inputs and etc...
  const authForm = document.getElementById('authForm');
  const txtEmail = document.getElementById('txtEmail');
  const errEmail = document.getElementById('errEmail');
  const txtPassword = document.getElementById('txtPassword');
  const errPassword = document.getElementById('errPassword');
  const btnLogin = document.getElementById('btnLogin');
  const btnSignUp = document.getElementById('btnSignUp');
  const btnLogout = document.getElementById('btnLogout');
  const loggedUser = document.getElementById('loggedUser');
  const loggedUserEmail = document.getElementById('loggedUserEmail');


  // login event
  authForm.addEventListener('submit', e => {
    e.preventDefault(); // sigh... jquery memories

    // get data from form
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();

    // reset errors
    helpers.resetErrorInputs();

    if (!validator.validate(email)) {
      helpers.inputError('email', 'Invalid email!');
      return;
    }

    if (pass.length<4) {
      helpers.inputError('password', 'Invalid password!');
      return;
    }

    // signin
    const promise = auth.signInWithEmailAndPassword(email, pass);

    // catching errors
    promise.catch(e => helpers.inputError('password', e.message));
  });

  // signup event. Same as above
  btnSignUp.addEventListener('click', e => {
    // get data from form
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();

    // signin
    const promise = auth.createUserWithEmailAndPassword(email, pass);

    // catching errors
    promise.catch(e => console.log(e.message));
  });

  // logout event
  btnLogout.addEventListener('click', e => {
    firebase.auth().signOut();
  });

  // check user auth state
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
      authForm.classList.add('d-none');
      loggedUser.classList.remove('d-none');
      loggedUserEmail.innerHTML = firebaseUser.email;
    } else {
      console.log('user not logged in');
      loggedUser.classList.add('d-none');
      authForm.classList.remove('d-none');
    }
  });

}());