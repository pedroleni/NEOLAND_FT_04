export const changeColor = () => {
  const ramdonNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  let R = ramdonNumber(0, 255);
  let G = ramdonNumber(0, 255);
  let B = ramdonNumber(0, 255);
  const color = `rgb(${R},${G},${B})`;
  return color;
};
