// iterar --> recorrer los elementos de los elementos iterables

// array, SET, objetos,  string, arguments en las funciones (recordar que las Arrow no lo tienen)

// ------------ FOR -------------

// for ( inicializacion. condicion, actualizacion) {  las lineas de codigo que queremos que se repitan}

let i;

for (i = 20; i >= 0; i--) {
  //console.log("me encuentro en la posicion " + i);
}

for (let x = 0; i >= 20; i++) {
  //console.log("me encuentro en la posicion " + i);
}

/// recorrer un array

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (x = 0; x < number.length; x++) {
  console.log(number[x]);
}

let family = [
  {
    type: "padre",
    name: "Miguel",
    adress: [28029, "Madrid"],
  },
  {
    type: "madre",
    name: "Lucia",
    adress: ["Madrid"],
  },
  {
    type: "hijo",
    name: "Luis",
    adress: ["Madrid"],
  },
];

console.log(family[0].adress);
///  ----- EJEMPLO 1: bucles anidados para entras a la key adress
for (x = 0; x < family.length; x++) {
  for (let z = 0; z < family[x].adress.length; z++) {
    console.log(
      `el miembro de la familia llamado ${family[x].name} vive en ${family[x].adress[z]}`
    );
    //el miembro de la familia llamado Miguel vive en Madrid
    //el miembro de la familia llamado Lucia vive en 28024
  }
}

// -----EJEMPLO 2: sacar la persona que vive en el CP: 28024
for (i = 0; i < family.length; i++) {
  for (x = 0; x < family[i].adress.length; x++) {
    // family[i].adress[x] == 28024 &&  console.log(`${family[i].name} vive en el codigo postal 28024`);
  }
}

// ---- EJEMPLO 3: sacar la persona a la cual le falta el codigo postal en su adress

for (i = 0; i < family.length; i++) {
  let acc = 0;
  for (let s = 0; s < family[i].adress.length; s++) {
    typeof family[i].adress[s] == "number" && acc++;
  }

  // guardamos el string que luego sacamos por consola
  /// tres formas de evaluar el valor de la variable templateString
  // -------- FORMA 1 ----- TERNARIO
  let templateString =
    acc == 0
      ? `${family[i].name} le falta el codigo postal`
      : `${family[i].name} tiene el codigo postal`;

  // -------- FORMA 2 ----- OPERADOR AND
  templateString = acc == 0 && `${family[i].name} le falta el codigo postal`;

  // -------- FORMA 3 ------ IF

  if (acc == 0) {
    templateString = `${family[i].name} le falta el codigo postal`;
  } else {
    templateString = `${family[i].name} tiene el codigo postal`;
  }
  //console.log(templateString); // sacamos el resultado de si tienen o no codigo postal
}
