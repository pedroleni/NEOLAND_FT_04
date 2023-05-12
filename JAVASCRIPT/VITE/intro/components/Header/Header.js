import {title} from "../../data/data"

//Importamos los estilos
import "./Header.css"

//Creo mi template de HTML
const template = () => {
  return `
    <h1>${title}</h1>
    `
}

//Exportamos una función que busque la etiqueta header y le meta dentro el template que hemos creado
export const printTemplate = () => {
  document.querySelector("header").innerHTML = template()
}
