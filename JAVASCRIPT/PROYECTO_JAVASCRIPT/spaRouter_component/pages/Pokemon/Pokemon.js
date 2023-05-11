import { printButtons } from "../../components/ButtonPokemon/ButtonPokemon";
import { createAndPrintFigure } from "../../components/CardPokemon/CardPokemon";
import { printTemplateSpinner } from "../../components/Spinner/Spinner";
import { dataPokemon, filterPokemon } from "../../utils/dataPokemon";
import "./Pokemon.css";

//! ----------------------------------------------------------------
//? ------------------ TEMPLATE GENERAL ---------------------------
//! ----------------------------------------------------------------

// TODO Creamos una variable local para que tengan acceso todas las funciones con los datos del service
let dataServicePokemon;
let typeGlobal;
const template = () =>
  ` <div id="pokemon">
    <div id="containerFilter">
      <div id="filterButton"></div>
      <input type="text" id="inputPokemon" placeholder="Busca tu pokemon favorito"/>
      <div id="spinner">

      </div>
    </div>

    <div class="galleryPokemon"></div>
  </div>`;

//! ----------------------------------------------------------------
//? --- SERVICE DE GESTION DE LOS DATOS PROCESADOR DE LA PAGINA-----
//! ----------------------------------------------------------------

//TODO en el data service llamamos al servicio y creamos las figure que luego se pintaran
const dataService = async () => {
  // pinto el espiner
  printTemplateSpinner();

  //llamamos al servicio para traer la DATA y le metemos la info a la variable global dataServicePokemon
  const getData = await dataPokemon();
  /// borro el spinner
  /// sacamos por destructuring los dos elementos que nos envia la funcion
  const { type, pokemonData } = getData;
  /// se lo asignamos a las variables globales
  dataServicePokemon = pokemonData;
  typeGlobal = type;
  //Enviamos la funcion para pintar las figure
  createAndPrintFigure(dataServicePokemon);

  /// me llamo a pintar los botones
  printButtons(type);
  document.getElementById("spinner").innerHTML = "";
};

//! ----------------------------------------------------------------
//?--------------- EVENTOS DE LOS ELEMENTOS HTML -------------------
//! ----------------------------------------------------------------

//TODO --> Añadimos los escuchadores de eventos
const addListeners = () => {
  /// EVENTO TO INPUT
  const inputPokemon = document.getElementById("inputPokemon");
  inputPokemon.addEventListener("input", (e) => {
    /// ----> Llamo a la funcion que se encarga de filtrar los elementos
    filterPokemon(e.target.value, "name");
  });
};

//! ----------------------------------------------------------------
//?--------------- PINTAR EL CONTENEDOR GENERAL---------------------
//! ----------------------------------------------------------------

//TODO ----> Importante el orden, primero pintamos el template general, despues gestionamos la data y por ultimo escuchadores
export const printTemplate = () => {
  document.querySelector("main").innerHTML = template();
  dataService();
  addListeners();
};
