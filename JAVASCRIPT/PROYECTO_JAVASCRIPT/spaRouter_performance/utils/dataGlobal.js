import { dataPokemon } from "./dataPokemon";
export const dataApp = async () => {
  const getDataPokemon = await dataPokemon();
  console.log(getDataPokemon);

  return {
    pokemonData: await getDataPokemon,
  };
};
