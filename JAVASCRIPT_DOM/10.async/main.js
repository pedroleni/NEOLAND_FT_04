import "./style.css"

const getData = async () => {
  const datosCrudos = await fetch("https://rickandmortyapi.com/api/character")
  const datosJSON = await datosCrudos.json()
  console.log(datosJSON.results)
}

getData()

const getDataThen = () => {
  fetch("https://rickandmortyapi.com/api/character")
    .then((datosCrudos) => datosCrudos.json())
    .then((datosJSON) => console.log(datosJSON.results))
}

getDataThen()
