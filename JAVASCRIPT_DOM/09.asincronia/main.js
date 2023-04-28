import "./style.css"

const container = document.querySelector("#app")

//1º Hacemos una petición para recuperar la información de esta URL
fetch("https://rickandmortyapi.com/api/character")
  //2º Una vez tengamos la información la convertimos a json
  .then((res) => res.json())
  //3º Una vez tengamos la información en json la mostramos por consola
  .then((res) => {
    for (const character of res.results) {
      const figure = document.createElement("figure")
      figure.innerHTML = `
      <h2>${character.name}</h2>
      <h3>${character.status}</h3>
      <img src=${character.image} alt=${character.name}/>
      `
      container.appendChild(figure)
    }
  })

//
