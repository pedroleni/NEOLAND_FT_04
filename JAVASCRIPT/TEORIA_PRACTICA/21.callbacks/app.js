const sayHello = (name) => {
  console.log("Hola " + name)
}

const generateName = (name, callback) => {
  const fullName = name
  callback(fullName)
}

generateName("Pepe", sayHello)

//

const ejecutar = () => {
  console.log("ESTOY AQUI")
}

//FUNCION DECLARADA
setTimeout(ejecutar, 2000)

//FUNCION ANONIMA
setTimeout(() => {
  console.log("ESTOY AQUI")
}, 2000)
