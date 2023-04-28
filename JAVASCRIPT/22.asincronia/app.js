const sayHello = () => {
  console.log("hola")
}

const sayBye = () => {
  console.log("adios")
  sayHello()
}

sayBye()
