import { printTemplate as printHeader } from "../components/Header/Header";

//! -----------------------------------------------------------------------
//? ---- TEMPLATE GENERAL CON LOS ELEMENTOS INICIALES DE NUESTRA APP ------
//! -----------------------------------------------------------------------
export const initTemplate = () => {
  const app = document.querySelector("#app");

  //? ------ > Creamos los elementos que luego inyectaremos en el app
  const header = document.createElement("header");
  const main = document.createElement("main");
  const footer = document.createElement("footer");

  //? ------ > con el append lo inyectamos con el orden que nosotros necesitamos
  app.append(header, main, footer);
  printHeader();
};
