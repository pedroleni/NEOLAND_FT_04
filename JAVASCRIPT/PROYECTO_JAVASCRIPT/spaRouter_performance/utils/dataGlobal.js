import { setDataGlobal } from "../data/data";
import { dataPokemon } from "./dataPokemon";

setDataGlobal;
export const dataApp = async () => {
  console.log("entro en la data de la app");
  const getDataPokemon = await dataPokemon();
  setDataGlobal({
    pokemonData: await getDataPokemon,
  });
  return {
    pokemonData: await getDataPokemon,
  };
};
