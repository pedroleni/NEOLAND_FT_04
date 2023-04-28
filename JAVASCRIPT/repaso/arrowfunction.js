function sayHello(name) {
  console.log("Hola " + name + "!")
}

const sayHelloArrow = (name) => {
  console.log("Hola " + name + "!")
}

sayHello("Pepe")
sayHelloArrow("Pepe")

//

function sumNumbers(numA, numB) {
  console.log(numA + numB)
}

const sumNumbersArrow = (numA, numB) => {
  console.log(numA + numB)
}

sumNumbers(2, 5)
sumNumbersArrow(2, 5)

//

const edad = (years) => {
  if (years < 18) {
    console.log("Como tienes " + years + " eres menor de edad")
  } else {
    console.log("Como tienes " + years + " eres mayor de edad")
  }
}

//    algo = () => {}

const list = ["Tomate", "Lechuga", "Pan"]

list.forEach((item) => {
  console.log(item)
})
