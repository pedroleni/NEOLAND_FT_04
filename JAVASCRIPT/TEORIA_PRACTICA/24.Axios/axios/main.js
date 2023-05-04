import axios from "axios";
import "./style.css";

document.querySelector("#app").innerHTML = `
  <div id="gallery">

  </div>
`;

const template = (data) => `
  <figure>
    <img src=${data.image} alt=${data.name} />
    <h2>${data.name}</h2>
  </figure>
`;
const getData = async () => {
  try {
    const rawData = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto");
    mappedPokemon(rawData.data);
  } catch (error) {
    console.log(error);
  }
};

const getDataThen = () => {
  axios
    .get("https://pokeapi.co/api/v2/pokemon/ditto")
    .then((res) => mappedPokemon(res.data))
    .catch((error) => console.log(error));
};

const mappedPokemon = (data) => {
  const pokemon = {
    image: data.sprites.other.dream_world.front_default,
    name: data.name,
  };
  printPokemon(pokemon);
};

const printPokemon = (data) => {
  document.getElementById("gallery").innerHTML = template(data);
};
getData();
