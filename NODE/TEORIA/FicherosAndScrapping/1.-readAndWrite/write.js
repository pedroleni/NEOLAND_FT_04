const fs = require("fs");
const movie = [
  {
    title: "Infinity pool",
    year: 2023,
    availables: false,
  },
  {
    title: "dora",
    year: 2020,
    availables: true,
  },
  {
    title: "Infinity world",
    year: 2019,
    availables: true,
  },
];

const movieCopyIncrement = movie.map((movie, index) => ({
  ...movie,
  view: false,
}));

console.log(movieCopyIncrement);

// -----> ahora con el objeto lo tengo que convertir en un string en un texto plano para que fs lo pueda utlizar

const movieJsonToString = JSON.stringify(movieCopyIncrement);

//! ----2) LO ESCRIMOS EL OBJETO MODIFICADO

fs.writeFile("moviesCopy.json", movieJsonToString, () => {
  console.log("👌 Movie write ok");
});
