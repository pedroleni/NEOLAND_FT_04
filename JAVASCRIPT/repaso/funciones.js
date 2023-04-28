//function indica que es una función
//sayHello es el nombre
//Dentro de las llaves es lo que se ejecuta el lanzar la función

//DECLARAMOS
function sayHello() {
  console.log("Hello!")
}

//EJECUTAMOS
sayHello()
sayHello()

//CON ARGUMENTOS
function sayHelloWithName(name) {
  console.log("Hello " + name + "!")
}

sayHelloWithName("Pepe")
sayHelloWithName("Peter Parker")

//

function argumentos(arg1, arg2) {
  console.log(arg2)
  console.log(arg1)
}

argumentos("Hola", 5)

//

function sumNumbers(numA, numB) {
  console.log(numA + numB)
}

sumNumbers(5, 10)
sumNumbers(600, 57)

//
function edad(years) {
  if (years < 18) {
    console.log("Como tienes " + years + " eres menor de edad")
  } else {
    console.log("Como tienes " + years + " eres mayor de edad")
  }
}

edad(17)
edad(78)

//
function calculateAge(bornYear, actualYear) {
  console.log("Tienes " + (actualYear - bornYear) + " años.")
}
calculateAge(1990, 2023)
calculateAge(1869, 2023)

//Calculadora suma y resta
function calculadora(verbo, numA, numB) {
  if (verbo === "suma") {
    console.log(numA + numB)
  } else if (verbo === "resta") {
    console.log(numA - numB)
  } else {
    console.log("Indica como primer argumento 'suma' o 'resta'")
  }
}

calculadora("suma", 1, 3)
calculadora("resta", 1, 3)
calculadora("multiplica", 1, 3)
