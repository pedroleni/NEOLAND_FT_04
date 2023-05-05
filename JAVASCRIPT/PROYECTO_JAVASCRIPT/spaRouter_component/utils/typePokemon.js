//! ------------------------------------------------------------------------------------------------------------
//? ------------------FUNCION QUE SE ENCARGA CRER EL ARRAY CON LOS TIPOS DE LOS POKEMON -------------------------
//? -----No podemos darle los tipos directamente en un array hay que generarlos dinamicamente por si aumentan----
//! -------------------------------------------------------------------------------------------------------------

export const typePokemon = (data) => {
  //? ----> Data es el array con todos los pokemon !
  ///! data set no se utliza mucho pero para que lo conozcais
  // const nameTypeReapet = new Set();

  // data.forEach((element, index) => {
  //   element.type.forEach((singleType, index) => {
  //     nameTypeReapet.add(singleType.type.name);
  //   });
  // });

  //! Lo mismo pero con un operador and
  const nameTypeReapet = [];
  data.forEach((element) => {
    element.type.forEach((singleType) => {
      !nameTypeReapet.includes(singleType.type.name) &&
        nameTypeReapet.push(singleType.type.name);
    });
  });
  return nameTypeReapet;
};
