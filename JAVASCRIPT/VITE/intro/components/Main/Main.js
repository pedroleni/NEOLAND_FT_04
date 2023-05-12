import "./Main.css"
import {movies} from "../../data/data"

const template = () => {
  return `
    <h2>Ya estamos en la etiqueta main</h2>
    <ul id="movieList"></ul>
    <img src="https://picsum.photos/536/354" alt=""/>  
    `
}

const printMovies = () => {
  const movielist = document.querySelector("#movieList")
  for (const movie of movies) {
    const li = document.createElement("li")
    li.textContent = movie
    movielist.appendChild(li)
  }
}

export const printTemplate = () => {
  document.querySelector("main").innerHTML = template()
  printMovies()
}
