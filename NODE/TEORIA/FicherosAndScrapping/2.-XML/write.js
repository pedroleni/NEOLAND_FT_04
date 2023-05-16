/// ------------------------------ESCRITURA DE XML --------------------------------

/// -----traemos la libreria que escribe y lee texto plano fs

const fs = require("fs");
const { XMLBuilder } = require("fast-xml-parser");
//! --------------EJEMPLO 1: SIN ELEMENTO ROOT ----ESTO DA ERROR tiene que tener un elemento grapeador padre
///! Nos traemos la libreria FS  y XMLBuilder

/// ------- DOC: https://github.com/NaturalIntelligence/fast-xml-parser/blob/97713ad3ec709f4612118120ce3fde310eed60ec/docs/v4/3.XMLBuilder.md
// ----> Creamos el objeto que luego vamos a crear el XML  y escribirlo con fs
const alumnos = [
  {
    name: "Rodri",
    age: "43",
    job: "dev",
  },
  {
    name: "Laura",
    age: "37",
    job: "libreria",
  },
  {
    name: "Antonio",
    age: "33",
    job: "dev",
  },
];

//-----> crear unas opciones que recibir el metodo xmlBuilder

let options = {
  ignoreAtributes: false,
  format: true,
  arrayNodeName: "alumnos",
};

/// ---->Instanciamos el nuevo objeto del XMLBuilder

const builder = new XMLBuilder(options);

// ------> Construimos el objeto xml para luego poder crear el archivo alumns.xml

let output = builder.build(alumnos);

console.log(output);

// ------> Cojo el output  y lo escribo con fs que escribe texto plano

fs.writeFile("alumns.xml", output, () => {
  console.log("Escrito correctamente 👌");
});

//! ----------------- CONSTRUIR UN XML CON UN ELEMENTO PADRE DE LA COLECCION -------------
//! ----------------- Ejemplo 2 con el elemento padre o ROOT -------------lo correcto a nivel sintactico ---

options = {
  ignoreAtributes: false,
  format: true,
};

// construir un objeto con la estructura correcta para que tengamos un elemento raiz

const alunmnsNeoland = {
  alumsNeolandROOT: {
    alumns: [
      {
        name: "Rodri",
        age: "43",
        job: "dev",
      },
      {
        name: "Laura",
        age: "37",
        job: "libreria",
      },
      {
        name: "Antonio",
        age: "33",
        job: "dev",
      },
    ],
  },
};

///-----> instanciamos un nuevo objeto del XMLBuilder

const builderWithRoot = new XMLBuilder(options);

/// ----> sacamos el output con el XML construido

output = builderWithRoot.build(alunmnsNeoland);

// -----> ESCRIBIMOS CON FS EL ARCHIVO XML

fs.writeFile("rootAlumns.xml", output, () => {
  console.log("escrito ok con elemento root 👌");
});
