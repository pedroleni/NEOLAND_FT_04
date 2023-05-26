import CardById from "../../components/CardByid/CardById";
import { getById } from "../../service/character.service";
import "./CharacterById.css";
import { useParams } from "react-router-dom";
const CharacterById = () => {
  // cogemos el id del param de la routa

  const { id } = useParams();

  // llamamos al servicio que se encarga de filtrar el elemento por id
  const filterCharacter = getById(id);

  return (
    <div className="containerMain">
      {/** Llamamos al componente carta por id para pintar la carta del personaje */}
      <CardById data={filterCharacter} />
    </div>
  );
};

export default CharacterById;
