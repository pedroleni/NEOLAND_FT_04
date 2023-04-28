const input = document.querySelector("#myInput")
const h2 = document.querySelector("#result")

let name = "Peter"

//Si hay algo en el item del localStorage llamado name...
if (localStorage.getItem("name")) {
  //Me lo pones como texto en el h2
  h2.innerText = localStorage.getItem("name")
} else {
  //Y si no me pones Peter
  h2.innerText = name
}

input.addEventListener("input", (ev) => {
  h2.innerText = ev.target.value
  localStorage.setItem("name", ev.target.value)
})

/* localStorage.clear()
localStorage.remove("name") */

const objeto = {
  name: "Batman",
  age: 50,
}

//Para objetos, arrays y demás datos complejos hay que convertir los datos a string antes de pasarlos al localStorage
localStorage.setItem("superheroe", JSON.stringify(objeto))
//Para traer un objeto o dato completo del localStorage lo parseamos y ya JS dabe que si hay una llave es un objeto, si hay un corchete es un array etc...
const objetotraducido = JSON.parse(localStorage.getItem("superheroe"))
console.log(objetotraducido)

//sessionStorage
