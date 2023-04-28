// ---- EJEMPLO 4: ahora lo que hacemos es que contador lo guardamos en un objeto y este dentro de un array
let family = [
  {
    type: "padre",
    name: "Miguel",
    adress: [28029, "Madrid"],
  },
  {
    type: "madre",
    name: "Lucia",
    adress: ["Madrid"],
  },
  {
    type: "hijo",
    name: "Luis",
    adress: ["Madrid"],
  },
];

let familyContadorCheck = [];
for (let i = 0; i < family.length; i++) {
  let contador = 0;
  for (let x = 0; x < family[i].adress.length; x++) {
    typeof family[i].adress[x] == "number" && contador++;
  }
  // aqui creamos un objeto al cual inyectare al array familyContadorCheck
  const person = {
    name: family[i].name,
    contador,
    CP: contador == 0 ? "le falta el CP" : "NO le falta el CP",
  };

  // le meto el objeto person a el array
  familyContadorCheck.push(person);
}

console.log(familyContadorCheck);

//// ----------------------------------------------------------------------------
/// ------------------------- FOR EACH -----------------------------------------
/// ----------------------------------------------------------------------------

// ----para array

const paises = ["UCRANIA", "EEUU", "ESPAÑA", "ALEMANIA", " CRECIA"];

// hay un tercer elemento coincidente con el array completo
/// pais => elemento singular de todo el array
/// index => index es la posicion de los elementos iterados
paises.forEach(function (pais, index, objCompleto) {
  console.log("El pais " + pais + " tiene el index " + index);
  console.log(paises);
  console.log(objCompleto);
});

// lo podeis hacr tambien como una arrow
paises.forEach((pais, index) => {
  console.log("ARROW: El pais " + pais + " tiene el index " + index);
});

//// ------------------------------------------------------------------------
/// ------------------------- FOR OF ----------------------------------------
/// -------------------------------------------------------------------------

/// para elementos iterable: string,set, arguments, array

let colores = new Set();
colores.add("rojo");
colores.add("azul");
colores.add("rojo"); /// no lo mete porque es repetido
console.log(colores);

function exampleDFunction(a = "Hola", b = "como estas", c = "?") {
  for (argumento of arguments) {
    console.log(argumento);
  }
}
exampleDFunction(); //- aqui saldria indefinido porque
// --------------------argument es para los parametros que le metemos cuando la llamamos
exampleDFunction("luis", "juan", "paca");
// en este caso sale con el valor correcto que le he metido.

const movies = [
  {
    name: "Titanic",
    date: 1997,
  },
  {
    name: "Dune",
    date: 1984,
  },
  {
    name: "Dumbo",
    date: 1941,
  },
];
// es muy parecido al forEach
for (movie of movies) {
  console.log(movie);
}

//// ------------------------------------------------------------------------
/// ------------------------- FOR IN ----------------------------------------
/// -------------------------------------------------------------------------

/// -- el for in nos sirve es para los objetos de tipo {} nos da la clave
const heroes = [
  {
    name: "Spiderman",
    age: 28,
  },
  {
    name: "Batman",
    age: 57,
  },
  {
    name: "Iron Man",
    age: 49,
  },
];

// for of para el array
// for in para los objetos {}
for (let heroe of heroes) {
  for (key in heroe) {
    let nameToConsole = key == "age" && heroe[key];
    console.log("Este superheroe tiene el edad: " + nameToConsole);
    // Este superheroe tiene el edad: false
    // Este superheroe tiene el edad: 28
    // Este superheroe tiene el edad: false
    // Este superheroe tiene el edad: 57
    // Este superheroe tiene el edad: false
    // Este superheroe tiene el edad: 49

    // para solucionarlo le añadimos un if para controlar la ejecucion de nuestro console
    if (nameToConsole) {
      console.log("----> Este superheroe tiene el edad: " + nameToConsole);
    }
  }
}

/// lo mismo pero con un forEach
heroes.forEach((movie, index) => {
  console.log("En el forEach", movie);
});

//// vamos a recorrer un objeto con el for in
const pelicula = {
  name: "Dune",
  year: 2021,
  director: "Denis Villeneuve",
};

for (clave in pelicula) {
  console.log("la clave: " + clave + " el valor es: " + pelicula[clave]);
}

//// --------------------------------------------------------------------------
/// ------------------ DIFERENCIAS ENTRE EL FOR OF Y EL forEach --------------
//// --------------------------------------------------------------------------

let random = [2, 3, 4, "Madrid", "Sol"];
// ---- no nos permite el index para buscar elementos
for (element of random) {
  console.log(element);
}

random.forEach((element, index) => {
  if (element == "Madrid") {
    console.log("Madrid se encuentra en la posicion " + index);
  }
});
///// EJEMPLO : cambiar la letra "a" por la letra "i"
let example =
  "Falta poco para comer, hacerme caso que se que os merendais el raton";

for (value of example) {
  console.log(value);
}

// example.forEach((caracter, index) => {
//   if (caracter == "a") {
//     let newWord = "i";
//     indexChange.push(newWord);
//   } else {
//     indexChange.push(caracter);
//   }
// }); ----- DA ERROR PORQUE NO SE PUEDE ES UN STRING

let indexChange = [];
//// Con un FOR OF  nos itera un STRING -------  Diferencia principal con el forEach
for (caracter of example) {
  if (caracter == "a") {
    let newWord = "i";
    indexChange.push(newWord);
  } else {
    indexChange.push(caracter);
  }
}

// mostramos el array
console.log(indexChange);

// convertimos el array en string
let newString = indexChange.join("");
console.log(newString);

// recordar los metodos de los string ese ejemplo anterior es mas sencillo así
const replaceString = example.replaceAll("a", "i");
console.log(replaceString);
