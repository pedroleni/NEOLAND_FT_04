/// DIFENCIAS EN SINTAXIS DE LA ARROW CON LA FUNCTION
const firstArrow = (params) => {
  console.log(params);
};

function name(params) {
  console.log(params);
}

firstArrow("Esto es mi primero Arrow");
name("Estoy llamando a funcion");

// ARROW SIN LLAVES
const hello = (saludo) =>
  console.log(saludo || "No me has metido ningun saludo");
hello();
hello("hola caracola");

///------ REPASO VARIABLES --------
//   -->DECLARACIÓN : de una variable se hace con el tipo de variable y el nombre let name
//   -->ASIGNACION DE VALOR:  se hacde con el igual, sin necesidad de poner el let, var, o el const si ya la declarado

// ARRAOW CON PARAMETROS CON VALORES PREDEFINIDOS

const suma = (a = "hola", b = 4) => a + b;
let numberosSumandos = suma();
console.log("numberosSumandos", numberosSumandos);

//// EJEMPLO DE CONTADOR PARA SUMAR NUMERO EN UN OBJETO

// un objeto es un grupo de datos con claves : valor
const totalNumber = {
  pedro: 29,
  luis: 16,
  esperanza: 25,
  lolo: 23,
  chatGPT: "intruso",
  enrique: 56,
  carla: 29,
};

const totalNumberTwo = {
  luis: 16,
  esperanza: 25,
};
console.log(totalNumber.pedro);

const sumarEdades = (people) => {
  //inicializacion el contador
  let acc = 0;
  for (personaje in people) {
    //console.log("clave: ", personaje);
    //console.log("valor: ", people[personaje]);
    if (typeof people[personaje] === "number") acc += people[personaje];
  }
  // puede haber varios return en una funcion
  if (acc != 0) {
    return console.log(acc);
  } else return console.log("no me has metido nada");

  // no se ejecuta porque va despues del return
  if (acc) console.log("estoy fuera del return principal");
};

sumarEdades(totalNumber); // 178
sumarEdades();
sumarEdades(totalNumberTwo); // no me has metido nada

///// diferencias entre las arrow y los function

// 1 ) Arrow no puede utilizar la plabra clave .this

// 2 ) Las arrow no pueden ser usadas como constructores

// 3 ) La arrow no puede utlizar la palabra clave arguments

// 4 ) La arrow no puede ser utilizar como metodos

const obj = {
  name: "Pedro",
  sayHi: () => console.log("buenos dias " + this.name), /// el this name es indefinido
};

const objTwo = {
  name: "Pedro",
  sayHi: function sayHi() {
    console.log("buenos dias " + this.name); // aqui el this.name es Pedro
  },
};

console.log(obj.sayHi); // [Function: sayHi]
objTwo.sayHi(); //  buenos dias Pedro
obj.sayHi(); // buenos dias undefined

////// -- Ejemplo class para ver las arrow
///// no puedes ser utlizadas como constructores -----
class Rectangulo {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }
  //Getter
  get area() {
    return this.calculaArea();
  }
  //metodos
  calculaArea() {
    return this.alto * this.ancho;
  }
}
/// podemos instancia un nuevo  objetos de la clase
const rectangulo = new Rectangulo(10, 20);
console.log("area rectangulo", rectangulo.area);

const cuadrado = new Rectangulo(10, 10);
console.log("area cuadrado", cuadrado.area);

//----- 3 ) La arrow no puede utlizar la palabra clave arguments-------
function argumentos(a, b, c) {
  console.log("a: ", arguments[0]);
  console.log("b: ", arguments[1]);
  console.log("c: ", arguments[2]);
}

// const argumentosArow = (a, b, c) => {
//   console.log("a: ", arguments[0]);
//   console.log("b: ", arguments[1]);
//   console.log("c: ", arguments[2]);
// };  ///// se queda comentado porque arguments no funciona en arrow y nos da un error

argumentos(1, 2, 3); // nos da la posicion de los parametros
//argumentosArow("a", "y", "s");----- DA ERROR ARROW NO TIENE argunments
