import "./Main.css"
import {Card} from "../Card/Card"

//Variable de numero de pagina
let pageNum = 1

//Template de HTML
const template = () => {
  return `
    <h2>Gallery</h2>
    <ul id="gallery-container"></ul>
    <button id="nextBtn">Next</button>
    `
}

//Funcion de recuperar los datos con el argumento num para las paginas
const getData = async (num) => {
  //Recuperamos la lista
  const ul = document.querySelector("#gallery-container")
  //Hacemos la petición
  const data = await fetch(
    `https://starwars-databank-server.vercel.app/api/v1/characters?page=${num}&limit=30`
  )
  const dataJSON = await data.json()
  //Pintamos los datos
  for (const character of dataJSON.data) {
    const li = document.createElement("li")
    li.innerHTML = Card(character)
    ul.appendChild(li)
  }
}

//Añado los eventos
const listeners = () => {
  const nextBtn = document.querySelector("#nextBtn")
  nextBtn.addEventListener("click", () => {
    pageNum++
    getData(pageNum)
  })
}

export const printTemplate = () => {
  //1ºAñado el HTML
  document.querySelector("main").innerHTML = template()
  //2º Recupero los datos
  getData(pageNum)
  //3º Añado los listeners en este punto porque ya en el punto 1 tendre pintado en el documento los elementos
  listeners()
}
