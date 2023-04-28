const peliculas = [
  "Batman",
  "Rambo",
  "Dumbo",
  "Titanic",
  "Dune",
  "Pesadilla Antes de Navidad",
]

for (const pelicula of peliculas) {
  const p = document.createElement("p")
  p.innerText = pelicula
  document.body.appendChild(p)
}

const themeBtn = document.querySelector("#themeBtn")

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark")
})

const h2 = document.createElement("h2")
document.body.appendChild(h2)
h2.innerText =
  peliculas.length > 5 ? "Tienes muchas peliculas" : "Tienes pocas peliculas"
