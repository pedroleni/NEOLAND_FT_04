import Image from "../Image/Image";

const CharacterCard = ({ data }) => {
  // el componente recibe la data de cada elemento singular del array de imagenes
  // hacemos destructuring de la src y alt
  const { src, alt } = data;
  return (
    <figure>
      {/** Es llamarnos a un componente imagen que se encarga de renderizar la parte de la imagen */}
      <Image source={src} description={alt} />
    </figure>
  );
};

export default CharacterCard;
