const express = require('express');

// requerimos todos los routes o rutas de nuestra app
const users = require('../components/users/router.js')

// express tiene un metodo que funciona como enrutador para enlazar todas nuestras rutas de nuestra aplicacion (Localhost:3100/)
const router = express.Router();

// Esta funcion define nuestras rutas de la API que me permiten conectar mi parte visual (html) con mi servidor (nodejs)
function routerAPI(app){
  app.use('/api/v1/', router);
  router.use('/users', users)
  // users
}

// vamos a exportar nuestra funcion para utilizarla en nuestro index.js del server

module.exports = routerAPI;