/// ---CONTADOR DE REPETICIONES--------
const counterWords = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "upgrade",
  "code",
];
////// ----------FORMA MAS LARGA Y SIMPLE DE ENTENDER -------------------
const counterWordsFunction = (array) => {
  // array con los elementos no repetidos
  let noReapet = [];
  let counterFinal = [];

  ///// -----CREAR ARRAY SIN LOS REPETIDOS ---------
  for (word of array) {
    if (!noReapet.includes(word)) {
      noReapet.push(word);
    }
  }

  ///// ------ RECORRER EL ARRAY NO REPETIDOS Y SEGUIDAMENTE TODO EL ARRAY REPETIDO
  noReapet.forEach((word, index) => {
    // ------>word  = code
    // lo que queremos es pararnos en elemento en el array sin repetir
    // y recorrer despues todos los elementos del array con los repetidos
    // para guardar el numero de veces que se repiten
    let acc = 0;

    // recorremos el array de los repetidos
    // Utlizo otro tipo de bucle diferente para repasarlo
    for (i = 0; i < counterWords.length; i++) {
      if (word == counterWords[i]) {
        // ------>word  = code es igual a code de counterWords ---> true
        // ------> como es true contador se incrementa
        acc++;
      }
      // nos hemos parado en un elemento del array no repetido y
      // a la vez recorremos el array de los repetidos
    }

    ///// ------TERMINO EL BUCLE DEL ARRAY CON LOS REPETIDOS

    /// ------- me guardo el contador con un oobjeto con el elemento que me parado
    // el elemento que me he parado en el array de noReapet sera word
    counterFinal.push({
      word: word, //// pongo clave y valor   --> word (del bucle forEach del array de no reapet)
      counter: acc, // pongo clave y valor   ---> de acc que tiene de cuantas veces se ha repetido
    });
  });

  return counterFinal;
};

console.log(counterWordsFunction(counterWords));

////// --------- FORMA MAS CORTA A NIVEL DE CODIGO----------------

const counter = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "upgrade",
  "code",
];

const counterWord = () => {
  /// Creao una variable donde guardare la info final
  let counterFinal = [];
  for (word of counter) {
    // Creo un acumulador que me servira en dos puntos del script
    let acc = 0;

    //compruebo que no haya contado ya la palabra anteriormente
    for (obj of counterFinal) obj.word == word && acc++;

    //Si el acumulador es 0 quiere decir que no la tengo contada en el objeto final
    if (acc == 0) {
      // Inicializo de nuevo el contador porque lo voy a utlizar para contar cuanto se repite
      acc = 0;

      //Hago el bucle del mismo elemento para contar cuantas veces se repite word del primer for of
      for (wordReapet of counter) word == wordReapet && acc++;

      //puseo un objeto con el valor de contador el nombre de la palabra que estoy iterando en el primer bucle
      counterFinal.push({
        word: word,
        counter: acc,
      });
    }
  }

  return counterFinal;
};
console.log(counterWord(counter));
