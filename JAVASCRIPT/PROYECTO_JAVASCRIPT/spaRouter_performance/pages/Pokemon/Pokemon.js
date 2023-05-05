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

  dataServicePokemon = data;
  createAndPrintFigure(dataServicePokemon);
};

//! -------> FUNCION GENERAL QUE NOS VA A SERVIR PARA PINTAR TANTO LOS POKEMON DEL FILTER COMO LOS DE LA DATA GENERAL

const createAndPrintFigure = (data) => {
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
      console.log(type);
      filterPokemon(type, "type");
    });
  });
};

// Creamos la funcion que se encarga de filtrar los pokemon
const filterPokemon = (filtro, donde) => {
  /// (grass, type)

  switch (donde) {
    case "name":
      {
        console.log(dataServicePokemon);
        const filterData = dataServicePokemon.filter((pokemon) =>
          pokemon.name.toLowerCase().includes(filtro.toLowerCase())
        );
        createAndPrintFigure(filterData);
      }
      break;
    case "type": {
      console.log(dataServicePokemon);

      const filterData = dataServicePokemon.filter((pokemon) =>
        pokemon.type[0].type.name.toLowerCase().includes(filtro.toLowerCase())
      );

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
    const buttonType = `<button class="buttonFilter ${type}" id=>${idCustom}</button>`;
    const filterButton = document.getElementById("filterButton");
    filterButton.innerHTML += buttonType;
  });
};

//! ----------------------------------------------------------------
//?--------------- PINTAR EL CONTENEDOR GENERAL---------------------
//! ----------------------------------------------------------------

//TODO ----> Importante el orden, primero pintamos el template general, despues gestionamos la data y por ultimo escuchadores
export const printTemplate = (data) => {
  const { type, dataPokemon } = data;
  typeGlobal = type;
  dataServicePokemon = dataPokemon;
  document.querySelector("main").innerHTML = template();
  dataService(dataPokemon);
  printButtons(type);
  addListeners();
};
