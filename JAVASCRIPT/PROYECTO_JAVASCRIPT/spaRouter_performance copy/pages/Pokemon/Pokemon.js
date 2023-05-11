import { printButtons } from "../../components/ButtonPokemon/ButtonPokemon";
import { createAndPrintFigure } from "../../components/CardPokemon/CardPokemon";
import { getDataGlobal } from "../../data/data";
import { paginacion } from "../../utils/paginacion";
import "./Pokemon.css";

//! ---------------------------------------------------------------
//? ------------------ TEMPLATE GENERAL ---------------------------
//! ---------------------------------------------------------------

// TODO Creamos una variable local para que tengan acceso todas las funciones con los datos del service
let dataServicePokemon;
let typeGlobal;
const template = () =>
  ` <div id="pokemon">
    <div id="containerFilter">
      <div id="filterButton"></div>
      <input type="text" id="inputPokemon" placeholder="Busca tu pokemon favorito"/>
    </div>
    <div id="paginacion"></div>

    <div class="galleryPokemon"></div>
  </div>`;

//! ----------------------------------------------------------------
//? --------- SERVICE , EVENTOS Y PINTADO DE FIGURES----------------
//! ----------------------------------------------------------------

//TODO en el data service llamamos al servicio y creamos las figure que luego se pintaran
const dataService = async (data, type) => {
  //llamamos al servicio para traer la DATA y le metemos la info a la variable global dataServicePokemon

  /// le ponemos el valor a la variable global para poder utilizarlo en otras funciones
  dataServicePokemon = data.slice(0, 20);

  /// nos llamamos a pintar las figuras porque esta funcion es de las primeras que se ejecutan
  createAndPrintFigure(dataServicePokemon);
  printButtons(type);
  paginacion(data, 30);
};

//! ----------------------------------------------------------------
//?--------------- EVENTOS DE LOS ELEMENTOS HTML -------------------
//! ----------------------------------------------------------------
//TODO --> Añadimos los escuchadores de eventos
const addListeners = () => {
  /// EVENTO TO INPUT
  const inputPokemon = document.getElementById("inputPokemon");
  inputPokemon.addEventListener("input", (e) => {
    filterPokemon(e.target.value, "name");
  });
};

//! ----------------------------------------------------------------
//?--------------- PINTAR EL CONTENEDOR GENERAL---------------------
//! ----------------------------------------------------------------

//TODO ----> Importante el orden, primero pintamos el template general, despues gestionamos la data y por ultimo escuchadores
export const printTemplate = () => {
  const { pokemonData } = getDataGlobal();
  const { dataPokemon, type } = pokemonData;
  typeGlobal = type;
  dataServicePokemon = dataPokemon;
  document.querySelector("main").innerHTML = template();
  dataService(dataPokemon, type);
  addListeners();
};
