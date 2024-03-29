const express = require('express');
const routerAPI = require('./server/router')
const cors = require('cors')

// esto es nuestra aplicacion - origen
const app = express();

// esta linea me sirve para quitar el problema de cors
app.use(cors());

// Esta linea me permite entender los archivos json enviados desde la respuesta
app.use(express.json());

// esta funcion es nuestra API
routerAPI(app);

// .use sirve para servir en nuestro servidor y recibe n cantidad de parametros, el primero va a ser nuestra ruta en la web y el segundo el middleware (logica cuando vaya o sirva esa ruta)
/*app.use('/', (req, res)=> {
  // req = solicitud o solicitar
  // res = respuesta o devolver

  res.send("<h1>Funciona</h1>");
})*/
// Levantando nuestro servidor en el puerto x

// .listen escucha nuestro servidor y como primer parametro recibe el puerto y como segundo la funcion a mostrar cuando nuestro servidor funcione

app.listen(3100, ()=>{
  console.log('Aplicacion corriendo en el puerto 3100');
})