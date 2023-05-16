//! requerimos el protocolo http`

const http = require("http");

//! creamos el servidor web

const server = http.createServer((req, res) => {
  // configuramos la respuesta del servidor

  res.statusCode = 200; /// todo ok es un 200
  res.setHeader("Content-type", "text/plain"); // metemos el tipo de contenido de la res
  res.end("Tenemos mucho sueño");
});

//! tenemos que darle un puerto al servidor para ser escuchado

server.listen(8080, () => {
  console.log("Server listenning on port http://localhost:8080");
});
