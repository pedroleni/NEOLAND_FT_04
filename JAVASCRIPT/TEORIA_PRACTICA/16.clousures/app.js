const sayHello = () => {
  return "Hola"
}

const hola = sayHello()
console.log(hola)

//

const padre = () => {
  const x = "Hola"
  const hija = (y) => {
    console.log(x, y)
  }

  return hija
}

const hijaIndependiente = padre()

hijaIndependiente("Adios")
