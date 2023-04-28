setTimeout(() => {
  console.log("Me ejecuto a los 4 segundos")
}, 4000)

//Creando la referencia
let intervalID
let segundos = 0

//Declaramos una función
const printSeconds = () => {
  //Al ejecutarse le sumamos 1 a los segundos
  segundos++
  //Los enseñamos por consola
  console.log(`Han pasado ${segundos} segundos.`)
  //Si segundos es mayor que 10
  if (segundos >= 10) {
    //Rompemos el intervalo
    clearInterval(intervalID)
  }
}

const createSecondInterval = () => {
  //Asignando el setInterval que ejecutara printSeconds cada segundo a nuestra referencia
  intervalID = setInterval(printSeconds, 1000)
}

createSecondInterval()
