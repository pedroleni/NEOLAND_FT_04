// creamos un servidor web con express
const express = require("express");

// nos traemos el puerto donde escucha el servidor --siempre en una constante y en mayusculas

const PORT = 8080;

// CREAMOS AHORA SI EL SERVIDOR

const app = express();

// escuchamos el servidor

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
