const x = "Neoland"

try {
  console.log("Intentando imprimir por consola la var x")
  console.log(x)
} catch (error) {
  console.log(error.message)
} finally {
  console.log("Terminado!")
}
