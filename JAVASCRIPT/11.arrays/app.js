/// array es un tipo object

let heroes = new Array();

heroes[0] = "Hulk";
console.log(heroes);
let heroe = []; // esta es la forma mas habitual

// Contenido de los arrays

heroes = ["Batman", "Spiderman", "Iron Man"];
let random = ["Batman", 2, "Iron Man"];
let numberArray = [2, 2, 4];
let objectArrays = [
  {
    name: "Felipe",
    age: 25,
  },
  {
    name: "Lucia",
    age: 45,
  },
  {
    name: "Anibal",
    age: 56,
  },
];

let functionArray = [
  () => {
    console.log("hola");
  },
  0,
];

// Acceder a las posiciones del Array
random[0];
console.log(objectArrays[1]);
functionArray[0](); /// hola

/// -----------------------------------------------------------------
/// -----------------------------METODOS ----------------------------
/// -----------------------------------------------------------------

//// length

const numberList = [1, 2, 2, 3, 4, 2, 55, 25];
console.log(numberList.length); // 8 ---

/// pop ---- Modifica el array original
let resultPop = numberList.pop();
console.log(numberList);
console.log(resultPop);

/// push ---- Añade en la ultimo posicion del array --Modifica el array
numberList.push("esta es la ultima posicion añadida");
console.log(numberList);

/// reverse ---- Modifica el array original
numberList.reverse();
console.log(numberList);

/// shift ---- Modifica el array original, quita el primero
let firstElement = numberList.shift();
console.log(numberList);
console.log("El primer elemento quitado " + firstElement);

// unshift ---- Modifica el array original añade elementos al principio
numberList.unshift(2, 4, 5);
numberList.unshift([2, 1]);
console.log(numberList);

// sort ----- Modifica el array original, ordenar el array

let people = ["Andres", "Wilson", "Dunia", "Lucas"];
console.log(people.sort()); //[ 'Andres', 'Dunia', 'Lucas', 'Wilson' ]

let randomNumber = [2, 3, 25, 56, 38];
console.log(randomNumber.sort()); //[ 2, 25, 3, 38, 56 ]

//// ---------------- EJERCICIO DE ORDENAR UN ARRAY ----------

let randomNumberCopy = [2, 3, 25, 56, 38, 2, 2.5];

randomNumberCopy.sort((a, b) => {
  return b - a;
});

console.log(randomNumberCopy);

/// splice ----- Modifica el array original
const show = ["Breaking bad", "25", "lost", "los 100"];
let showSplice = show.splice(1, 2, "ana y los siete"); // puedo guardar lo que quitado en una variable
console.log(show);
console.log("hemos quitado los siguiente elementos " + showSplice);

/// ------------------------------------------------------------------------------
///// ------------------- SON METODOS QUE NO MODIFICAN EL ARRAY ORGINAL ----------
//// -----------------------------------------------------------------------------

/// concat

const heeroe = ["Cap. America", "Hulk", "Thor"];
const villians = ["Duende verde", "Joker", "Magneto"];
const character = heeroe.concat(villians);
console.log(character);
console.log(heeroe);

/// join

const saludo = ["h", "o", "l", "a"];
const saludoToString = saludo.join("-/");
console.log(saludoToString); // h-/o-/l-/a

// slice -- copia
const comidas = ["macarrones ", "lentejas", "potaje", "pizza"];
let comidasCopy = comidas.slice(1, comidas.length);
console.log(comidasCopy);

// toString
console.log(comidas.toString());

/// ------------------------------------------------------------------------------
///// ------------------- LOCALIZAR UN ELEMENTOS EN UN ARRAY ---------- ----------
//// -----------------------------------------------------------------------------

//IndexOf ----- el indice del elemento buscasdo, pero solo el primero
const numberRandom = [2, 4, 5, 2, 10];
console.log(numberRandom.indexOf(2)); // 0
console.log(numberRandom.indexOf(100)); // -1

//LastIndexOf
console.log(numberRandom.lastIndexOf(2)); // 3
console.log(numberRandom.lastIndexOf(1000)); // -1

//Includes
const camisetas = ["camiseta de maradona ", "camiseta del madrid"];
console.log(camisetas.includes("camiseta")); /// false
console.log(numberRandom.includes(10)); // true
console.log(numberRandom.includes(10 && 2)); // true
console.log(numberRandom.includes(10000)); // false

if (numberRandom.includes(10000)) {
  console.log("tenemos  Verbernas");
} else {
  console.log("estudiamos javascript");
}
