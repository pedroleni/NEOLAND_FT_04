const button = document.querySelector("#myBtn")

const insertarTitulo = () => {
  const titulo = document.createElement("h1")
  titulo.innerText = "Soy un titulo"
  document.body.appendChild(titulo)
}

button.addEventListener("click", () => {
  insertarTitulo()
})

//

const input = document.querySelector("#myInput")

input.addEventListener("input", (ev) => {
  // console.log(ev.target.value)
  const h2 = document.querySelector("#resultado")
  console.log(ev)
  h2.innerText = ev.target.value
})
