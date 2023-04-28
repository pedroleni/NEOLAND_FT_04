//TEMPLATE STRING
const firstName = "Peter"
const lastName = "Parker"
const fullName = firstName + " " + lastName
const fullNameES6 = `Hola, mi nombre es ${firstName} ${lastName} y tengo 25 años`
const template = "<p>Hola</p><h2>" + fullName + "</h2>"
const templateES6 = `
<p>Hola</p>
<h2>${fullName}</h2>
<h3>${3 + 3}</h3>
`

const age = () => {
  return 2023 - 1990
}

const quote = `Tengo ${age()} años`
console.log(quote)

//DESTRUCTURING
const movie = {
  title: "Batman",
  director: "Christopher Nolan",
  year: 2013,
  actors: {
    batman: "Christian Bale",
    alfred: "Michael Caine",
  },
}

/* const title = movie.title
const director = movie.director
const year = movie.year */
const {title, director, year, actors} = movie
console.log(title)
console.log(year)
const {batman, alfred} = actors
console.log(batman)
console.log(alfred)

const sayHello = (objeto) => {
  const {name, lastName} = objeto
  console.log(`Hola ${name} ${lastName}`)
}

sayHello({
  name: "Pedro",
  lastName: "Lerida",
})

//SPREAD OPERATOR
const primeros = ["Sopa", "Ensalada", "Pan"]
const segundos = ["Filete", "Pizza", "Cachopo"]
const comida = primeros.concat(segundos)
console.log(comida)
const comidaES6 = [...primeros, ...segundos, "Natillas"]
console.log(comidaES6)

const members = ["Miercoles", "Fetido", "Morticia", "Gomez", "Cosa"]
let addamsFamily = []

for (const member of members) {
  const fullName = `${member} Addams`
  addamsFamily = [...addamsFamily, fullName]
}

console.log(addamsFamily)

//MAP
const numbers = [1, 2, 3, 4, 5]
const newNumbers = numbers.map((num) => num * 2)
console.log(newNumbers)

const humans = ["😀", "😀", "😀", "😀", "😀", "😀"]
const zombies = humans.map((human) => "🧟")
console.log(zombies)

/* let zombiesForEach = []
humans.forEach((human) => (zombiesForEach = [...zombiesForEach, "🧟"]))
console.log(zombiesForEach)
 */

const movies = [
  {
    title: "The Batman",
    year: 2022,
  },
  {
    title: "Dune",
    year: 2021,
  },
  {
    title: "Gremlins",
    year: 1985,
  },
]

const movieTitles = movies.map((movie) => movie.title)
console.log(movieTitles)

const newMovies = movies.map((movie) => ({
  titulo: movie.title,
  released: true,
  howManyTime: 2023 - movie.year,
  isOld: 2023 - movie.year > 30 ? true : false,
}))

console.log(newMovies)

//FILTER
const characters = [
  {
    name: "Frodo",
    species: "Hobbit",
    age: 24,
  },
  {
    name: "Legolas",
    species: "Elve",
    age: 160,
  },
  {
    name: "Sam",
    species: "Hobbit",
    age: 25,
  },
]

const hobbits = characters.filter((character) => character.species === "Hobbit")
console.log(hobbits)

const colors = ["red", "blue", "green", "yeLLow", "black", "white"]
const onlyL = colors.filter((color) => color.toLowerCase().includes("l"))
console.log(onlyL)

const youngCharacters = characters.filter((character) => character.age < 50)
console.log(youngCharacters)

//FIND
const sam = characters.find((character) => character.name === "Sam")
console.log(sam)

//EVERY
const vegan = ["🥝", "🥝", "🥝", "🥝", "🍔", "🥝"]
const isVegan = vegan.every((item) => item == "🥝")
console.log(isVegan)

//SOME
const someIsVegan = vegan.some((item) => item === "🥝")
console.log(someIsVegan)

//REDUCE
const nums = [20, 23, 45, 68, 76, 2000, 6]
const total = nums.reduce((acumulador, num) => acumulador + num, 0)
console.log(total)

//MIX
const superheroes = [
  {
    name: "Wolverine",
    type: "Mutant",
    power: 65,
  },
  {
    name: "Hulk",
    type: "Human",
    power: 80,
  },
  {
    name: "Magneto",
    type: "Mutant",
    power: 78,
  },
  {
    name: "Iron Man",
    type: "Human",
    power: 60,
  },
]

//1º Necesitamos generar un nuevo array de objetos en el que la clave type se llame specie
//2º Necesitamos quedarnos en un nuevo array con los mutantes nada más
//3º Necesitamos saber cual es el total de los poderes combinados de los mutantes

const newSuperheroes = superheroes.map((superhero) => ({
  name: superhero.name,
  specie: superhero.type,
  power: superhero.power,
}))

console.log(newSuperheroes)

const onlyMutants = newSuperheroes.filter(
  (superhero) => superhero.specie == "Mutant"
)

console.log(onlyMutants)

const totalMutantPower = onlyMutants.reduce(
  (acc, mutant) => acc + mutant.power,
  0
)
console.log(totalMutantPower)

//En una sola linea
const totalSpecieMutantPower = superheroes
  .map((superhero) => ({
    name: superhero.name,
    specie: superhero.type,
    power: superhero.power,
  }))
  .filter((superhero) => superhero.specie == "Mutant")
  .reduce((acc, mutant) => acc + mutant.power, 0)

console.log(totalSpecieMutantPower)
