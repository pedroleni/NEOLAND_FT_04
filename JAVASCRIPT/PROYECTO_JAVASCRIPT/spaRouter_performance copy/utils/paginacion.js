import { createAndPrintFigure } from "../components/CardPokemon/CardPokemon";

export const paginacion = (data, numberElement) => {
  let longuitud = data.length;
  let numberDigitos = longuitud / numberElement;
  for (let i = 0; i < numberDigitos; i++) {
    let buttonNumber = document.createElement("button");
    buttonNumber.setAttribute("class", `${i + 1} buttonPaginacion`);
    buttonNumber.innerHTML = i + 1;
    document.getElementById("paginacion").appendChild(buttonNumber);
    addListener(buttonNumber, data, numberElement, i, numberDigitos);
  }
};

addEventListener;
const addListener = (buttonNumber, data, numberElement, i, numberDigitos) => {
  buttonNumber.addEventListener("click", (e) => {
    const allButton = document.querySelectorAll(".buttonPaginacion");

    allButton.forEach((element) => {
      element.style.border = "solid 1px #00000046";
    });

    buttonNumber.style.border = "solid 2px #0000ff6a";
    const tope = (i + 1) * numberElement;
    const inicio = tope - numberElement < 0 ? 0 : tope - numberElement;
    console.log(tope);
    createAndPrintFigure(data.slice(inicio, tope));
  });
};
