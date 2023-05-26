import CardByName from "../../components/CardByName/CardByName";
import { getByName } from "../../service/character.service";
import { useParams } from "react-router-dom";
import "./CharacterByName.css";
const CharacterByName = () => {
  // cogemos el id del param de la routa

  const { name } = useParams();

  // llamamos al servicio que se encarga de filtrar el elemento por id
  const filterCharacter = getByName(name);
  console.log(
    "🚀 ~ file: CharacterByName.jsx:12 ~ CharacterByName ~ filterCharacter:",
    filterCharacter
  );

  return (
    <div className="containerMain">
      {/** Llamamos al componente carta por id para pintar la carta del personaje */}
      <CardByName data={filterCharacter} />
    </div>
  );
};

export default CharacterByName;
