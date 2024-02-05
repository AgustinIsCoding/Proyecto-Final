const express = require('express');

// express tiene un metodo que funciona como enrutador para enlazar todas nuestras rutas de nuestra aplicacion (Localhost:3100/)
const router = express.Router();

// Esta funcion define nuestras rutas de la API que me permiten conectar mi parte visual (html) con mi servidor (nodejs)
function routerAPI(app){
  app.use('/api/v1', router);
}

// vamos a exportar nuestra funcion para utilizarla en nuestro index.js del server

module.exports = routerAPI;