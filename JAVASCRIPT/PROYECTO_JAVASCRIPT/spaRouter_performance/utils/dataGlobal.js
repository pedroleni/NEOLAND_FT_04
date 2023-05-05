import { dataPokemon } from "./dataPokemon";
export const dataApp = async () => {
  const getDataPokemon = await dataPokemon();

  return {
    pokemonData: await getDataPokemon,
  };
};
