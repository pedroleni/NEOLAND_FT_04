import { setDataGlobal, setDataGlobalRefrest } from "../data/data";
import { dataPokemon } from "./dataPokemon";
setDataGlobalRefrest;
export const dataApp = async () => {
  console.log("entro en la data");
  const getDataPokemon = await dataPokemon();
  setDataGlobal({
    pokemonData: await getDataPokemon,
  });
};

export const refrestDataApp = async () => {
  console.log("entro en la data refrest");
  const getDataPokemon = await dataPokemon();
  setDataGlobalRefrest({
    pokemonData: await getDataPokemon,
  });
};
