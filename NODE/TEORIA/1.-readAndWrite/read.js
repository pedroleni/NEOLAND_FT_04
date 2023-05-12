//! --------LIBRERIA FS para leer y escribir texto plano-------

const fs = require("fs");

//! METOD O readFile()
/// ------> METODO ASYNCRONO : fs.readFile
fs.readFile("movies.json", (error, movie) => {
  const parseMovies = [];
  error
    ? console.log("No se ha podido leer el archivo❌")
    : parseMovies.push(JSON.parse(movie));
  console.log(parseMovies);
});

/// -------> METODO SYNCRONO :  fs.readFileSync
