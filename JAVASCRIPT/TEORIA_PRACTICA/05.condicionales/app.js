//Condicionales
/* if(condición){
    codigo que se va a ejecutar si se cumple
} */

//Mayor que >
//Menor que <
//Mayor o igual que >=
//Menor o igual que <=

//Igual que ==
//Desigual que !==
//Estrictamente igual === -> Tiene que coincidir valor y tipo

const age = 18

if (age >= 18) {
  console.log("Enhorabuena, eres mayor de edad")
}

//Else -> SI NO SE CUMPLE
if (age > 18) {
  console.log("Enhorabuena, tienes más de 18 años")
} else {
  console.log("No tienes más de 18 años")
}

//

const tengoCarnet = true
const tengoCoche = true

//if(tengoCarnet === true && tengoCoche === true)
if (tengoCarnet && tengoCoche) {
  console.log("Tienes la capacidad de conducir")
} else {
  console.log("No puedes conducir")
}

//

const alive = true

if (!alive) {
  console.log("Descanse en paz")
} else {
  console.log("Estas vivo")
}

//

const x = 10
const boolean = true

//El igual que no contempla el tipo de dato
if (x == "10") {
  console.log("BIEN")
}

if (boolean == "true") {
  console.log("BIEN")
}

//El estrictamente igual contemplate el valor y el tipo dato
if (x === 10) {
  console.log("BIEN")
}

if (boolean === true) {
  console.log("BIEN")
}

//

const name = "Peter"

if (name === "Peter") {
  console.log("Te llamas " + name)
} else {
  console.log("No te llamas Peter")
}

//Else if -> Y SI
const superheroe = "Hulk"

if (superheroe === "Spiderman") {
  console.log("Trepas paredes")
} else if (superheroe === "Daredevil") {
  console.log("Eres ciego")
} else if (superheroe === "Hulk") {
  console.log("Eres superfuerte")
} else {
  console.log("No se quien eres")
}

const edad = 25

if (edad > 0 && edad < 18) {
  console.log("Eres adolescente")
} else if (edad >= 18 && edad < 60) {
  console.log("Eres adulto")
} else if (edad >= 60 && edad < 100) {
  console.log("Eres mayorcete")
} else {
  console.log("Eres especial")
}

//Ternario -> condicion ? se cumple : no se cumple
const fullName = "Peter Parker"
const result =
  fullName === "Peter Parker" ? "Te llamas Peter" : "No te llamas Peter"
console.log(result)

/* let result
if (fullName === "Peter Parker") {
  result = "Te llamas Peter"
} else {
  result = "No te llamas Peter"
}
console.log(result)
 */

//Switch -> Revisar igualdad estricta en la condición
const movie = "Titanic"

switch (movie) {
  case "Titanic":
    console.log("Pobrecito el barco")
    break
  case "Avatar":
    console.log("Los bichos azules")
    break
  case "Dune":
    console.log("Mucha arena")
    break
  default:
    console.log("No se de que pelicula me hablas")
    break
}

/* if(movie === "Titanic"){
...
} else if(movie === "Dune"){
    ...
} */
