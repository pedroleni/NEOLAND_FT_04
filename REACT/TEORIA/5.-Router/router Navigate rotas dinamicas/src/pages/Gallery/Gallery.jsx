import CardGallery from "../../components/CardGalley/CardGallery";
import { getAll } from "../../service/character.service";
import "./Gallery.css";
const Gallery = () => {
  const data = getAll();

  return (
    <div className="containerMain gallery">
      {data.map((item) => (
        <CardGallery key={item._id} character={item} />
      ))}
    </div>
  );
};

export default Gallery;
