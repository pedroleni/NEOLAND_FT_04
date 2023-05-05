import { axiosUtil } from "../utils/axios";

//! ----------------------------------------------------------------------------------------------------------------------------
//? ----------- CREAMOS LAS OPTIONES DEL SERVICIO Y SE LO PASAMOS A AXIOS PARA QUE GESTIONE LA AXINCRONIA ---------------------
//? - Un serivicio es muy IMPORTANTE, nos sirve para si en un futuro cambian las opciones de la request tenerlo localible-----
//! ---------------------------------------------------------------------------------------------------------------------------

export const getPokemon = async (id) => {
  const optionsRequest = {
    method: "GET",
    url: `https://pokeapi.co/api/v2/pokemon/${id}`,
  };
  return await axiosUtil(optionsRequest);
};
