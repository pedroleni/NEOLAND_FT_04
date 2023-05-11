export const paginacion = (data, numberElement) => {
  let longuitud = data.length;
  let numberDigitos = longuitud / numberElement;
  for (let i = 0; i < numberDigitos; i++) {
    let buttonNumber = document.createElement("button");
    buttonNumber.class = i;
    buttonNumber.innerHTML = i + 1;
    document.getElementById("paginacion").appendChild(buttonNumber);
  }
};
