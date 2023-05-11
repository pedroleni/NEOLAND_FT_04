import { printButtons } from "../../components/ButtonPokemon/ButtonPokemon";
import { createAndPrintFigure } from "../../components/CardPokemon/CardPokemon";
import { getDataGlobal } from "../../data/data";
import { filterPokemon } from "../../utils/dataPokemon";
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
      <div class="pagContainer">
      <h4>150 POKEMONS</h4>
      <div id="paginacion"></div>
      </div>
      <input type="text" id="inputPokemon" placeholder="Busca tu pokemon favorito"/>
      
    </div>
    

    <div class="galleryPokemon"></div>
  </div>`;

//! ----------------------------------------------------------------
//? --------- SERVICE , EVENTOS Y PINTADO DE FIGURES----------------
//! ----------------------------------------------------------------

//TODO en el data service llamamos al servicio y creamos las figure que luego se pintaran
const dataService = async (data, type) => {
  createAndPrintFigure(data.slice(0, 25));
  printButtons(type);
  paginacion(data, 25);
};

//! ----------------------------------------------------------------
//?--------------- EVENTOS DE LOS ELEMENTOS HTML -------------------
//! ----------------------------------------------------------------
//TODO --> Añadimos los escuchadores de eventos
const addListeners = () => {
  /// EVENTO TO INPUT
  const inputPokemon = document.getElementById("inputPokemon");
  inputPokemon.addEventListener("input", (e) => {
    const allButton = document.querySelectorAll(".buttonPaginacion");

    allButton.forEach((element) => {
      element.style.border = "solid 1px #00000046";
    });
    if (e.target.value === "") {
      createAndPrintFigure(dataServicePokemon.slice(0, 25));
      allButton[0].style.border = "solid 2px #0000ff6a";
    } else {
      filterPokemon(e.target.value, "name");
    }
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
