/// ---> traernos la libreria de CSV

//! antes de nada instalar la libreria npm i csv-parser
const csv = require("csv-parser");
const fs = require("fs");

// ---> constante que puseara los datos que recibimos de la lectura
const datos = [];

// ----> leemos el csv

fs.createReadStream("indicator.csv")
  .pipe(csv({ separator: ";" }))
  .on("data", (data) => datos.push(data))
  .on("end", () => {
    console.log(datos);
  });

//!!!! ----> IMPORTANTE QUE NO HAYA LINEAS EN BLANCO EN EL CSV SINO GENERA PROBLEMAS
