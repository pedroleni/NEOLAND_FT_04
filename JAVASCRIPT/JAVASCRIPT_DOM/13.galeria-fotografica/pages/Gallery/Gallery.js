import "./Gallery.css"
import {Loading} from "../../components/Loading/Loading"

const template = () => {
  return `
    <section class="gallery">
        <h2>Gallery</h2>
        <div class="buttons">
         
        </div>
        <div class="spinner"></div>
        <div class="photo-gallery"></div>
    </section>
    `
}

const getPhotos = (page) => {
  //Recuperamos el div donde se van a pintar las imagenes
  const container = document.querySelector(".photo-gallery")
  //Para no ir añadiendo las fotos una detrás de otra y que se sustituyan las paginas, vaciamos el contenedor de las fotos
  container.innerHTML = ""
  //Antes de hacer la petición, vamos a pintar un spinner
  const spinnerContainer = document.querySelector(".spinner")
  spinnerContainer.innerHTML = Loading()
  //Hacemos la petición
  fetch(`https://picsum.photos/v2/list?page=${page}&limit=30`)
    //Y entonces convertimos esa información cruda a json
    .then((res) => res.json())
    //Con esta información convertida a json...
    .then((photos) => {
      //Una vez hayamos completado la petición, vaciamos el contenedor para eliminar el spinner
      spinnerContainer.innerHTML = ""
      //Recorremos cada una de las fotos
      for (const photo of photos) {
        //Por cada una creamos un figure de HTML vacio
        const figure = document.createElement("figure")
        //Le inyectamos dentro un bloque de HTML con las propiedaes
        figure.innerHTML = `
        <img src=${photo.download_url} alt=${photo.author}/>
        <figcaption>${photo.author}</figcaption>
        `
        //Se lo añadimos al contenedor div donde van a ir los figures
        container.appendChild(figure)
      }
    })
    //Si el fetch tiene algún fallo, pintamos por pantalla un mensaje de error para informar al usuario
    .catch((err) => {
      container.innerHTML = `<h3>No se han podido recuperar las imágenes de la base de datos</h3>`
    })
}

const listeners = () => {
  //Creamos 15 botones
  const buttonscontainer = document.querySelector(".buttons")
  for (let i = 1; i <= 15; i++) {
    buttonscontainer.innerHTML += `<button class="pageBtn">${i}</button>`
  }
  //A cada uno de ellos le damos un addEventListener
  const buttons = document.querySelectorAll(".pageBtn")
  for (const button of buttons) {
    button.addEventListener("click", () => {
      getPhotos(button.innerText)
    })
  }
}

export const printTemplate = () => {
  document.querySelector("main").innerHTML = template()
  getPhotos(1)
  listeners()
}
