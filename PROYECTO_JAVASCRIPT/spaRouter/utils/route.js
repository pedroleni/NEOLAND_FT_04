import { printTemplate as Pokemon } from "../pages/Pokemon/Pokemon";
import { printTemplate as Login } from "../pages/Login/Login";
import { printTemplate as Manga } from "../pages/Manga/Manga";
import { printTemplate as Anime } from "../pages/Anime/Anime";
import { printTemplate as Dashboard } from "../pages/Dashboard/Dashboard";
export const initControler = (route) => {
  switch (route) {
    // ---> caso 1: el que gestiona que el usuario este authenticado
    case undefined:
      localStorage.getItem("user") ? Dashboard() : Login();
      break;
    case "Pokemon":
      Pokemon();
      break;
    case "Manga":
      Manga();
      break;
    case "Anime":
      Anime();
      break;
    case "Login":
      Login();
      break;
    case "Dashboard":
      Dashboard();
      break;
  }
};
