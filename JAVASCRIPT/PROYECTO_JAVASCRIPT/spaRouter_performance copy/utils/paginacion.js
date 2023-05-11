import { createAndPrintFigure } from "../components/CardPokemon/CardPokemon";

export const paginacion = (data, numberElement) => {
  let longuitud = data.length;
  let numberDigitos = longuitud / numberElement;
  for (let i = 0; i < numberDigitos; i++) {
    let buttonNumber = document.createElement("button");
    buttonNumber.class = i + 1;
    buttonNumber.innerHTML = i + 1;
    document.getElementById("paginacion").appendChild(buttonNumber);
    addListener(buttonNumber, data, numberElement, i);
  }
};

addEventListener;
const addListener = (buttonNumber, data, numberElement, i) => {
  buttonNumber.addEventListener("click", (e) => {
    const tope = (i + 1) * numberElement;
    const inicio = tope - numberElement < 0 ? 0 : tope - numberElement;
    console.log(tope);
    createAndPrintFigure(data.slice(inicio, tope));
  });
};
