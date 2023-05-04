import { dataPokemon } from "../../utils/dataPokemon";
import "./Pokemon.css";

//! ----------------------------------------------------------------
//? ------------------ TEMPLATE GENERAL ---------------------------
//! ----------------------------------------------------------------

// TODO Creamos una variable local para que tengan acceso todas las funciones con los datos del service
let dataServicePokemon;
const template = () =>
  ` <div id="pokemon">
      <input type="text" id="inputPokemon" />
      <div class="galleryPokemon"></div>
  </div>`;

//! ----------------------------------------------------------------
//? --------- SERVICE , EVENTOS Y PINTADO DE FIGURES----------------
//! ----------------------------------------------------------------

//TODO en el data service llamamos al servicio y creamos las figure que luego se pintaran
const dataService = async (data) => {
  //llamamos al servicio para traer la DATA y le metemos la info a la variable global dataServicePokemon

  dataServicePokemon = data;
  createAndPrintFigure(dataServicePokemon);
};

//! -------> FUNCION GENERAL QUE NOS VA A SERVIR PARA PINTAR TANTO LOS POKEMON DEL FILTER COMO LOS DE LA DATA GENERAL

const createAndPrintFigure = (data) => {
  document.querySelector(".galleryPokemon").innerHTML = "";
  // mapeamos la data para crear un figure de cada elemento que mandaremos a inyectar a la galeria
  data.map((pokemon) => {
    const templateFigure = `
      <figure class="figurePokemon">
        <img src=${pokemon.image} alt=${pokemon.name} />
        <h2>${pokemon.name}</h2>
      </figure>
    `;
    // una vez creado el figure se lo inyectamos a la galeria con un += para que vaya sumando a lo que ya tiene
    document.querySelector(".galleryPokemon").innerHTML += templateFigure;
  });
};

//TODO --> Añadimos los escuchadores de eventos
const addListeners = () => {
  /// EVENTO TO INPUT
  const inputPokemon = document.getElementById("inputPokemon");
  inputPokemon.addEventListener("input", (e) => {
    filterPokemon(e.target.value);
  });
};

// Creamos la funcion que se encarga de filtrar los pokemon
const filterPokemon = (valueInput) => {
  const filterData = dataServicePokemon.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(valueInput.toLowerCase())
  );

  createAndPrintFigure(filterData);
};

//! ----------------------------------------------------------------
//?--------------- PINTAR EL CONTENEDOR GENERAL---------------------
//! ----------------------------------------------------------------

//TODO ----> Importante el orden, primero pintamos el template general, despues gestionamos la data y por ultimo escuchadores
export const printTemplate = (data) => {
  document.querySelector("main").innerHTML = template();
  dataService(data);
  addListeners();
};
