import CharacterCard from "../../components/CharacterCard/CharacterCard";
import { imageList } from "../../data/data.global";
const Gallery = () => {
  return (
    <div>
      <h1>Gallery</h1>
      {/* nos traemos la data, la mapeamos y la mandamos de forma singular a el componente de la card*/}
      {imageList.map((image, index) => (
        <CharacterCard data={image} />
      ))}
    </div>
  );
};

export default Gallery;
