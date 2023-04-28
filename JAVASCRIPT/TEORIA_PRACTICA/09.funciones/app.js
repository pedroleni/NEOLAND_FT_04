// funciones sin parametros
// funciones con parametros parametros que no son obligatorios
// funciones que retornan cosas
// funciones que no retornan valores

function name(params) {
  console.log(params);
}
//name(); // UNDEFINED

//name("Buenos dias");

function controlarUndefined(params) {
  //FORMA 1 ////if (params === undefined) params = "Buenos dias";
  //FORMA 1.1//if (!params) params = "Buenos dias";  /// params es false entra en el if
  //FORMA 2 /////params = params || "Esto es con el operador";
  //FORMA 3 ////params = params ? params : "Esto es con el operador";
  //FORMA 4 LA DE ABAJO
  console.log(
    "linea 18",
    params ?? "Esto lo hacemos con las dos integorraciones"
  );
}

controlarUndefined();

function valorDefault(params = "Buenos dias") {
  console.log(params);
}

valorDefault(); // Buenos dias

/// Ejemplo con un map y los parametros que no los recibe en la forma corta

const people = [
  {
    name: "Pedro",
    age: 29,
  },
  {
    name: "Felipe",
    age: 29,
  },
  {
    name: "Lolo",
    age: 29,
  },
];

function print(obj, param2, param3, param4) {
  /// el param 4 seria indeifinido
  console.log("linea 53", param2);
}
people.map((person, index, obj) => print(person, index, obj));
people.map(print);

//// FUNCIONES CON RETORNO QUE NOS DAN UN VALOR Y LO GUARDAMOS EN UNA VARIABLE
function retorno(a, b) {
  return a + b;
}

let suma = retorno(2, 4);
let incremento = --suma; /// incremento meterlo delante para que funcione
console.log(incremento);
