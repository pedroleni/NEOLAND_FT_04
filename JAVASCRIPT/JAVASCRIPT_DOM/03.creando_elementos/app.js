const nuevoParrafo = document.createElement("p")
nuevoParrafo.innerText = "Hola soy un parrafo"
console.log(nuevoParrafo)

//Añadimos el nuevo hijo a el documento
document.body.appendChild(nuevoParrafo)

const nuevoTitulo = document.createElement("h1")
nuevoTitulo.innerText = "Soy el titulo"
document.body.appendChild(nuevoTitulo)
