import { createAndPrintFigure } from "../components/CardPokemon/CardPokemon";
import { getPokemon } from "../services/pokemon.service";
import { typePokemon } from "./typePokemon";
//! ----------------------------------------------------------------
//? ---------------- ARCHIVO QUE GESTIONA LOS DATOS DE POKEMON ------
//! ----------------------------------------------------------------

// Creamos una variable local porque luego va a hacer falta para la funcion de filterPokemon
let dataGlobal;

//todo  -------------------------------------------------------------------------------------------------
//?    ------dataPokemon se encarga de procesar la info en bruto y mandarla a la pagina de pokemon ------
//todo ---------------------------------------------------------------------------------------------------
export const dataPokemon = async () => {
  const data = [];
  for (let i = 1; i < 151; i++) {
    data.push(await getPokemon(i));
  }

  return dataMap(data);
};

const dataMap = (data) => {
  const filterData = data.map((pokemon) => ({
    name: pokemon.name,
    image: pokemon.sprites.other.dream_world.front_default,
    type: pokemon.types,
  }));
  /// Nos llamamos a la funcion que nos trae el array con los type
  const type = typePokemon(filterData);

  //! Asignamos el valor de una forma global para que tenga acceso todas las funciones
  dataGlobal = {
    type: type,
    pokemonData: filterData,
  };
  return dataGlobal;
};

//TODO ----------------------------------------------------------------
//?--------------- FUNCIONES DE FILTRADO DE LA DATA ----------------
//TODO ----------------------------------------------------------------
// Creamos la funcion que se encarga de filtrar los pokemon
export const filterPokemon = (filtro, donde) => {
  // vamos a hacer un switch para gestionar las diferentes formar de hacer el filtro dependiendo de donde viene
  // puede venir de hacer el filtro de nama por el input o los botones por type
  switch (donde) {
    case "name":
      {
        const filterData = dataGlobal.pokemonData.filter((pokemon) =>
          pokemon.name.toLowerCase().includes(filtro.toLowerCase())
        );
        createAndPrintFigure(filterData);
      }
      break;
    case "type": {
      //! Este es mas especial porque los typos pueden ser dos por lo que algunos tipos pueden aparecer en la posicion [1] del array type
      const filterData = dataGlobal.pokemonData.filter((pokemon) =>
        pokemon.type[0].type.name.toLowerCase().includes(filtro.toLowerCase())
      );
      //! Evaluamos si filterData tiene longuitud 0 SI ES ASI ES QUE HAY QUE FILTRA CON EL type[1].type.name
      if (filterData.length === 0) {
        const filterData = dataGlobal.pokemonData.filter((pokemon) =>
          //! ----> la intorragacion es un optional change por si no hay la posicion 1 ddl arrrray que no rompa la ejecucción
          pokemon.type[1]?.type.name
            .toLowerCase()
            .includes(filtro.toLowerCase())
        );

        createAndPrintFigure(filterData);
      } else {
        createAndPrintFigure(filterData);
      }

      break;
    }
  }
};
