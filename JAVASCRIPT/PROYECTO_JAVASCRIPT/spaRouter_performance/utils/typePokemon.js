export const typePokemon = (data) => {
  ///! data set no se utliza mucho pero para que lo conozcais
  // const nameTypeReapet = new Set();

  // data.forEach((element, index) => {
  //   element.type.forEach((singleType, index) => {
  //     nameTypeReapet.add(singleType.type.name);
  //   });
  // });

  //! Lo mismo pero con un operador and
  const nameTypeReapet = [];
  data.forEach((element, index) => {
    element.type.forEach((singleType, index) => {
      !nameTypeReapet.includes(singleType.type.name) &&
        nameTypeReapet.push(singleType.type.name);
    });
  });
  return nameTypeReapet;
};
