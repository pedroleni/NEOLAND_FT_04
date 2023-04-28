const nuevoTitulo = document.createElement("h1")

nuevoTitulo.innerText = "Titulo"

document.body.appendChild(nuevoTitulo)

nuevoTitulo.innerText = "Soy el titulo"

nuevoTitulo.classList.add("estilo")
nuevoTitulo.classList.remove("estilo")

nuevoTitulo.classList.toggle("estilo")
console.log(nuevoTitulo.classList.contains("estilo"))
nuevoTitulo.classList.toggle("estilo")
console.log(nuevoTitulo.classList.contains("estilo"))
nuevoTitulo.classList.toggle("estilo")
console.log(nuevoTitulo.classList.contains("estilo"))
nuevoTitulo.classList.toggle("estilo")
console.log(nuevoTitulo.classList.contains("estilo"))

//

document.body.classList.toggle("dark")
document.body.classList.toggle("dark")
document.body.classList.toggle("dark")
document.body.classList.toggle("dark")
document.body.classList.toggle("dark")
document.body.classList.toggle("dark")
document.body.classList.toggle("dark")
