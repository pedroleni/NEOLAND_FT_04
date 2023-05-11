import { getDataGlobal } from "../../data/data";
import { dataApp } from "../../utils/dataGlobal";
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
    </div>

    <div class="galleryPokemon"></div>
  </div>`;

//! ----------------------------------------------------------------
//? --------- SERVICE , EVENTOS Y PINTADO DE FIGURES----------------
//! ----------------------------------------------------------------

//TODO en el data service llamamos al servicio y creamos las figure que luego se pintaran
const dataService = async (data) => {
  //llamamos al servicio para traer la DATA y le metemos la info a la variable global dataServicePokemon

  /// le ponemos el valor a la variable global para poder utilizarlo en otras funciones
  dataServicePokemon = data;

  /// nos llamamos a pintar las figuras porque esta funcion es de las primeras que se ejecutan
  createAndPrintFigure(dataServicePokemon);
};

//! -------> FUNCION GENERAL QUE NOS VA A SERVIR PARA PINTAR TANTO LOS POKEMON DEL FILTER COMO LOS DE LA DATA GENERAL

const createAndPrintFigure = (data) => {
  //borramos primero la galleria por si hubiera algun elemento pintado de antes
  document.querySelector(".galleryPokemon").innerHTML = "";
  // mapeamos la data para crear un figure de cada elemento que mandaremos a inyectar a la galeria
  data.map((pokemon) => {
    const classCustomType = `"figurePokemon ${pokemon.type[0].type.name}"`;
    const templateFigure = `
      <figure class=${classCustomType}>
        <img src=${pokemon.image} alt=${pokemon.name} class="imgPokemon"/>
        <h2>${pokemon.name}</h2>
      </figure>
    `;
    // una vez creado el figure se lo inyectamos a la galeria con un += para que vaya sumando a lo que ya tiene
    document.querySelector(".galleryPokemon").innerHTML += templateFigure;
  });
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

  /// ------Meter los eventos de los botones

  typeGlobal.forEach((type) => {
    const buttonType = document.querySelector(`.${type}`);

    buttonType.addEventListener("click", (e) => {
      filterPokemon(type, "type");
    });
  });
};

//! ----------------------------------------------------------------
//?--------------- FUNCIONES DE FILTRADO DE LA DATA ----------------
//! ----------------------------------------------------------------
// Creamos la funcion que se encarga de filtrar los pokemon
const filterPokemon = (filtro, donde) => {
  /// (grass, type)

  // vamos a hacer un switch para gestionar las diferentes formar de hacer el filtro dependiendo de donde viene
  // puede venir de hacer el filtro de nama por el input o los botones por type
  switch (donde) {
    case "name":
      {
        const filterData = dataServicePokemon.filter((pokemon) =>
          pokemon.name.toLowerCase().includes(filtro.toLowerCase())
        );
        createAndPrintFigure(filterData);
      }
      break;
    case "type": {
      const filterData = dataServicePokemon.filter((pokemon) =>
        pokemon.type[0].type.name.toLowerCase().includes(filtro.toLowerCase())
      );

      if (filterData.length === 0) {
        const filterData = dataServicePokemon.filter((pokemon) =>
          pokemon.type[1]?.type.name
            .toLowerCase()
            .includes(filtro.toLowerCase())
        );
        createAndPrintFigure(filterData);
      } else {
        createAndPrintFigure(filterData);
      }

      break;
    }
  }
};

//! ----------------------------------------------------------------
//?--------------- PINTAR LOS BOTONES DE LOS TYPES------------------
//! ----------------------------------------------------------------

const printButtons = (types) => {
  types.forEach((type) => {
    const idCustom = `button${type[0].toUpperCase() + type.slice(1)}`;
    const buttonType = `<button class="buttonFilter ${type}" id=>${type}</button>`;
    const filterButton = document.getElementById("filterButton");
    filterButton.innerHTML += buttonType;
  });
};

//! ----------------------------------------------------------------
//?--------------- PINTAR EL CONTENEDOR GENERAL---------------------
//! ----------------------------------------------------------------

//TODO ----> Importante el orden, primero pintamos el template general, despues gestionamos la data y por ultimo escuchadores
export const printTemplate = (data) => {
  const { pokemonData } = getDataGlobal();
  const { dataPokemon, type } = pokemonData;
  typeGlobal = type;
  dataServicePokemon = dataPokemon;
  document.querySelector("main").innerHTML = template();
  dataService(dataPokemon);
  printButtons(type);
  addListeners();
  dataApp();
};
