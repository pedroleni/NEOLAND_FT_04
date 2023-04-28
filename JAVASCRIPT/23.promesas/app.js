//Creamos una promesa llamada "promesa" con su resolución y su rechazo
const promesa = new Promise((resolve, reject) => {
  let combustible = "gasolina"
  //Si la variable combustible es gasolina entonces resolvemos la promesa
  if (combustible === "gasolina") {
    resolve("La nave puede despegar")
    //Y si no la rechazamos
  } else {
    reject("Intenta utilizar gasolina para que la nave despegue")
  }
})

//Vamos a gestionar la asincronia de la promesa y, si se cumple el combustible gasolina nos saldrá el mensaje de la resolución
promesa
  .then((mensaje) => {
    console.log(mensaje)
  })
  //Si combustible no es gasolina, el mensaje del rechazo saldrá a través del error
  .catch((error) => {
    console.log(error)
  })

//EJEMPLO CON THEN Y EJEMPLO CON AWAIT
fetch("URL.com").then((res) => {
  if (!res.ok) {
    throw new Error("Error en la petición")
  }
  return res.json()
})

const getData = async () => {
  const res = await fetch("URL.com")
  if (!res.ok) {
    throw new Error("Error en la petición")
  }
  const data = await res.json()
  return data
}
