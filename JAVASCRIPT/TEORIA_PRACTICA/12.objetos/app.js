const objeto = {}

const coche = {
  marca: "Seat",
  modelo: "Panda",
  color: "Rojo",
  segundaMano: false,
  puertas: 4,
}

//Como accedemos a los valores de las claves
//1º
const modeloCoche = coche["modelo"]
console.log(modeloCoche)
//console.log(coche["modelo"])
//2º
const modeloCoche2 = coche.modelo
console.log(modeloCoche2)

//Se puede tener como valor una función
const pikachu = {
  name: "Pikachu",
  attack: function () {
    console.log("Ataque rayo!")
  },
}

pikachu.attack()

//Como se hacían los objetos anteriormente
const moto = new Object()
moto.name = "Yamaha"
moto.ruedas = 2
moto["color"] = "Rojo"
console.log(moto)
console.log(moto.name)
console.log(moto.model)

//

const videogame = {
  title: "Metal Gear Solid",
  year: 1996,
  company: "Konami",
  platform: "PlayStation",
}

console.log(videogame)

//Se puede modificar el valor de una clave, lo que no se puede modificar es que deje de ser un objeto
videogame.year = 1999

console.log(videogame)

//Cómo recorrer un objeto
//FOR IN

//SACA CADA UNA DE LAS CLAVES DE UN OBJETO
for (clave in videogame) {
  console.log("La clave: " + clave + " tiene como valor: " + videogame[clave])
  //1 "title" -> videogame["title"] -> "Metal Gear Solid"
  //2 "year" -> videogame["year"] -> 1999
  //3 "company" -> videogame["company"] -> "Konami"
}

console.log(videogame["title"])

//OBJECT.KEYS
//Crea un array con las claves del objeto
const videogameKeys = Object.keys(videogame)
console.log(videogameKeys)

//Crea un array de arrays con pares de clave y valor
const videogameEntries = Object.entries(videogame)
console.log(videogameEntries)
