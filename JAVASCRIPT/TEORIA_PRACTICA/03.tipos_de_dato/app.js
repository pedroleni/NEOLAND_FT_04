//String -> Cadenas de texto
const texto = "Hola buenos días"
//Dependiendo de las comillas que utilicemos fuera, dentro tenemos que utilizas las contrarias para reflejarlas
const cita = "Cervantes dijo: 'Buenos días Don Quijote'"

//Number
const entero = 15
const decimales = 15.5555

//Boolean
const verdadero = true
const falso = false

//Null
const money = null
//Null no rompe nuestro codigo
console.log(money)

//Undefined -> no está definido
let ahorros
console.log(ahorros)

//Objetos -> {}
const superheroe = {
  name: "Batman",
  age: 50,
  city: "Gotham",
  alive: true,
}

//Arrays -> [];
const movies = ["Titanic", "Batman", "Bambi", "Spiderman", "Dune", 2, true, {}]

//Concatenación
const firstName = "Peter"
const lastName = "Parker"
const fullName = firstName + " " + lastName
console.log(fullName)

const age = 2023 - 1990

const quote = "Mi nombre es " + fullName + " y tengo " + age + " años."
console.log(quote)

const cadena = "Hola" + 5
console.log(cadena)
const segundaCadena = 5 + 5 + "Hola"
console.log(segundaCadena)
