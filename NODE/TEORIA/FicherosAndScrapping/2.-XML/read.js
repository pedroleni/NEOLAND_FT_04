const fs = require("fs");

// HAY QUE INSTALAR LA SIGUIENTE LIBRERIA CON EL SIGUIENTE COMANDO npm i fast-xml-parser
const { XMLParser, XMLBuilder, XMLValidator } = require("fast-xml-parser");

// Instanciamos un nuevo objeto del metodo XMLParser
const parser = new XMLParser();

// Ahora vamos a leer un fichero con la libreria fs
let copyInfo;
fs.readFile("books.xml", "UTF-8", (error, data) => {
  let parseData;
  if (error) {
    console.log(error);
  } else {
    parseData = parser.parse(data);
    //! IMPOORTANTE !!! para utilizar estos datos hay que llamar otra funcion
    readConsole(parseData);
  }
});

const readConsole = (data) => {
  copyInfo = data;
  console.log(data); // { '?xml': '', libros: { libro: [ [Object], [Object] ] } }

  //! Vamos a hacer destructuring de los libros

  const { libros } = data;
  console.log(libros);

  // Nos sale lo siguiente esto :

  //   {
  //     libro: [
  //       {
  //         titulos: 'El valle de los lobos',
  //         autor: 'Laura Gallero',
  //         year: 2000
  //       },
  //       { titulos: 'Fenris el Elfo', autor: 'Laura Gallego', year: 2004 }
  //     ]
  //   }

  //! Hacemos destructuring de libro
  const { libro } = libros;
  console.log(libro);

  // Nos sale ----->
  //   [
  //     {
  //       titulos: 'El valle de los lobos',
  //       autor: 'Laura Gallero',
  //       year: 2000
  //     },
  //     { titulos: 'Fenris el Elfo', autor: 'Laura Gallego', year: 2004 }
  //   ]

  libro.forEach((element, index) => {
    console.log("Libro", element);
    //sale esto--->
    // Libro {
    //     titulos: 'El valle de los lobos',
    //     autor: 'Laura Gallero',
    //     year: 2000
    //   }
    // Libro { titulos: 'Fenris el Elfo', autor: 'Laura Gallego', year: 2004 }
  });
};

console.log(copyInfo); // -----> underfined
