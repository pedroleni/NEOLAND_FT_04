import fs from "fs";

const readData = () => {
  fs.readFile("ejemplo.txt", "utf8", (error, dataText) => {
    error
      ? console.log("Error en la lectura del fichero ❌")
      : correctData(dataText);
  });
};

const correctData = (data) => {
  ///El carácter \D representa cualquier carácter que no sea un dígito.
  /// La  /g en la expresión regular significa que la búsqueda debe ser global, es decir, buscar en todo el texto en lugar de solo la primera coincidencia.
  /// paginas para aprender expresiones regulares
  // ------> https://regex101.com/
  // ------> https://regexr.com/

  let fixedData = data.match(/\D/g).join("");
  writeText(fixedData);
};

const writeText = (data) => {
  fs.writeFile("correctText.txt", data, () => {
    console.log("Creado el fichero 👌");
  });
};

readData();
