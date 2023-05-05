import axios from "axios";
//! ----------------------------------------------------------------
//? ------ FUNCION PARA GESTIONAR  LA ASYNCRONIA CON EL AXIOS ------
//! ----------------------------------------------------------------
export const axiosUtil = async (options) => {
  // TODO --> Abrimos una request o peticion con las diferentes opciones que nos manden los servicios
  return await axios.request(options).then((res) => res.data);
};
