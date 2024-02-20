const form = document.getElementById('form');
import {
  apiFetchUser,
  apiFetchOneUser
} from './getUserDB.js';

function datosValidos(passwordDB, passwordInput){
  bcrypt.compare(passwordDB, passwordInput, function(err, res) {
    if (err){
      // handle error
    }
    if (res) {
      // Send JWT
    } else {
      // response is OutgoingMessage object that server response http request
      return response.json({success: false, message: 'passwords do not match'});
    }
  });
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = {
    email: event.target.email.value,
    password: event.target.password.value,
  };

  //TODO: Change
  apiFetchUser()
    .then((listaDeUsuarios) => {
      let user = listaDeUsuarios.find(userEmail => {
        if (userEmail.cadaUsuario.email === data.email) {
          return userEmail.cadaUsuario;
        }
      })
      console.log(user);
      if (user === undefined) return alert('Correo no registrado!!');

      datosValidos(user.password, data.password)
    })
    .catch(err => console.error(err));



  // const dataGetLocalStorage = window.localStorage.getItem('user');

  // const convertDataGetLocalStorage = JSON.parse(dataGetLocalStorage);

  // if (convertDataGetLocalStorage.email === data.email && convertDataGetLocalStorage.password === data.password) {
  //   window.location.pathname = '/';
  // } else {
  //   alert('Email or password is incorrect');
  // }


})