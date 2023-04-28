//Bucles

for (let i = 0; i < 10; i++) {
  console.log("Hola", i)
}

//

const alimentos = ["Tomate", "Lechuga", "Pan", "Galletas", "Agua"]

for (let i = 0; i < alimentos.length; i++) {
  const alimento = alimentos[i]
  console.log(alimento)
  //ARRANCA EL BUCLE
  //i=0 -> i < 5 -> const alimento = alimentos[0] -> "Tomate"
  //++
  //i=1 -> i < 5 -> const alimento = alimentos[1] -> "Lechuga"
  //++
  //i=2 -> i < 5 -> const alimento = alimentos[2] -> "Pan"
  //++
  //i=3 -> i < 5 -> const alimento = alimentos[3] -> "Galletas"
  //++
  //i=4 -> i < 5 -> const alimento = alimentos[4] -> "Agua"
  //++
  //i=5 -> i < 5 -> NO SE CUMPLE, SE ROMPE EL BUCLE
}

const members = ["Miercoles", "Fetido", "Morticia", "Gomez", "Cosa"]
const addamsFamily = []

for (let i = 0; i < members.length; i++) {
  const member = members[i]
  const fullName = member + " Addams"
  addamsFamily.push(fullName)
}

console.log(addamsFamily)

//

const numbers = [1, 2, 3, 4, 5, 6]

for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i]
  const result = number * 2
  console.log(result)
}

//

const personas = [
  {
    name: "Pepe",
    age: 28,
  },
  {
    name: "Jose",
    age: 33,
  },
  {
    name: "Maria",
    age: 17,
  },
]

for (let i = 0; i < personas.length; i++) {
  const persona = personas[i]
  if (persona.age < 18) {
    console.log(persona.name + " es menor de edad")
  } else {
    console.log(persona.name + " es mayor de edad")
  }
}

//FOROF
const movies = ["Batman", "Dune", "Titanic", "Babylon"]

//Por cada movie en movies -> console.log(movie)
for (let movie of movies) {
  const quote = "Pelicula: " + movie
  console.log(quote)
}

//FOREACH
movies.forEach((movie, i) => console.log(movie, i))

//FORIN
const character = {
  name: "Paco",
  age: 87,
  city: "Madrid",
}

for (let key in character) {
  console.log("La clave " + key + " tiene como valor " + character[key])
}

//WHILE

let num = 0

while (num < 5) {
  num++
  console.log(num)
}
