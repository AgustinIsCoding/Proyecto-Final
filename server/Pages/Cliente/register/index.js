import {
  apiFetchUser,
  createUserFromAPI
} from './fetchAPI.js';

const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = {
    name: event.target.username.value,
    email: event.target.email.value,
    password: event.target.password.value,
  };

  console.log(data)
  apiFetchUser()
  .then((listaDeUsuarios) => {
    let user = listaDeUsuarios.find(userEmail => {
      if (userEmail.cadaUsuario.email === data.email) {
        return userEmail.cadaUsuario;
      }
    })
    console.log(user);
    if (user === undefined){
      createUserFromAPI(data)
      .then(() => {
        alert("Tu cuenta ha sido creada exitosamente");
        window.location.pathname = 'login'
      })
      .catch(err => console.error(err));
    }else{
      alert("El correo ingresado para crear la cuenta ya ha sido utilizado.");
    }
  })
  .catch(err => console.error(err));
  //window.localStorage.setItem('user', JSON.stringify(data))
})