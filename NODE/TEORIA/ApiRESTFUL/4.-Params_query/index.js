//! ESTO SIEMPRE ES ASI: crear el server, y el router con el PORT

const express = require("express");
const app = express();
const router = express.Router();
const PORT = 8080;

//! VAMOS A CREAR NUESTRAS RUTAS

//!-----------------------------------------------------------------------------------------
//?------------------------------------------PARAM -----------------------------------------
//!-----------------------------------------------------------------------------------------

// -----El param en la ruta se pone con dos puntos y el nombre del param :name
router.get("/person/:name", (req, res, next) => {
  // hacemos destructuring del param del objeto req.params
  const { name } = req.params;
  const people = ["pedro", "luis", "laura", "antonio"];

  // lo sacamos por la respuesta
  if (people.includes(name)) {
    return res.status(200).json(`Incluye el nombre ${name}`);
  } else {
    return res.status(404).json("No se encuentra en la base datos");
  }
});

router.get("/people", (req, res, next) => {
  // hacemos destructuring del param del objeto req.params
  const { name } = req.query;

  // lo sacamos por la respuesta
  const people = ["pedro", "luis", "laura", "antonio"];
  if (people.includes(name)) {
    return res.status(200).json(`Incluye el nombre ${name}`);
  } else {
    return res.status(404).json("No se encuentra en la base datos");
  }
});

//! ---------DIFERENCIAS DEL PARAM Y EL QUERY PARAM

//? -----1) El param el siempre necesario para que se meta en la ruta y el query no
//? -----2) Los query se meten despues de la ruta empezando ? se pone el mnombre del query = Y SU VALOR
//? ----------EJEMPLO DEL PUNTO 2: http://localhost:8080/api/v1/people?name=pedro&apellido=lerida&age=30

app.use("/api/v1/", router);
//! ESCUCHAMOS EL SERVIDOR

app.listen(PORT, () => {
  console.log(`Listening on PORT 🤟 http://localhost:${PORT}`);
});
