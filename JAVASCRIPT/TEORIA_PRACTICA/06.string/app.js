let name = "Pedro";

let person = `Mi nombre es ${name}`;
let personTwo = "Mi nombre es " + name;
console.log("🚀 ~ file: app.js:5 ~ person:", person);

// como acceder a una posicion del array
console.log(name[1]);

// ver la longitud
console.log(name.length);

//Includes
const saludo = "628";
console.log(saludo.includes("6"));

//repeat
const age = "treinte";
console.log(age.repeat(3));

//replace
const movie = "Star trek";
console.log(movie.replace("trek", "Wars"));

//replace all
const frase = "Buenos dias, vamos a ver los metodos del string. Buenos";
console.log(frase.replaceAll("Buenos", " Hi"));

//slice
const phase = "Bootcamp de neoland";
console.log(phase.slice(0, 12));

//split
const movieTwo = "Los pajaros cantan en el parque";
console.log(movieTwo.split(" "));

// toLowerCase
// cambia cada uno de los caracteres en minusculas
const heroe = "Spiderman LombOton";
console.log(heroe.toLowerCase());

// toUpperCase
const heroeTwo = "Spiderman LombOton";
console.log(heroeTwo.toUpperCase());

//Trim
const toTrim = " Probamos el trim ";
console.log(toTrim.trim());
