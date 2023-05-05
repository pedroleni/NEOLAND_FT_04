import { getPokemon } from "../services/pokemon.service";
import { typePokemon } from "./typePokemon";

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

  return {
    type: type,
    dataPokemon: filterData,
  };
};
