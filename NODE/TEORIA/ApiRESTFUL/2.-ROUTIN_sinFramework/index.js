//! requerimos el protocolo http`

const http = require("http");

//! Funcion que controla las rutas

const requestHandle = (req, res) => {
  console.log(req.url);

  if (req.url === "/") {
    // seteamos las header de la respuesta
    res.setHeader("Content-type", "text/html");

    // este metodo writeHead es igual que el statusCode
    res.writeHead(200);

    //Mandamos por el res.end un html
    res.end("<h1>Esto es mi primer html por respuesta</h1>");
  } else if (req.url === "/user" && req.method === "GET") {
    // esto va un json
    res.setHeader("Content-type", "application/json");
    res.writeHead(200);

    res.end(JSON.stringify({ name: "Peter", age: 30 }));
  }
};

//! creo el servidor

const server = http.createServer(requestHandle);
//! tenemos que darle un puerto al servidor para ser escuchado

server.listen(8080, () => {
  console.log("Server listenning on port http://localhost:8080");
});
