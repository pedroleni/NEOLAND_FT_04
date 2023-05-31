import { useEffect, useState, Suspense, lazy } from "react";
import { useDebounce } from "use-debounce";
import { getAll, getCharacterPromise } from "../service/ricky.service";
import Seccion from "./Seccion";

const Request = () => {
  const [characters, setCharacters] = useState([]);
  const [allCharacter, setAllCharacter] = useState([]);
  const [filter, setFilter] = useState("Rick");
  const [loading, setLoading] = useState(false);

  //! ----DEBOUNCE ---------
  /// EL DEBOUNCE NOS SIRVE PARA RETRASAR EL ASIGNAR UN VALOR A UNA VARIABLE LA CUAL SE LLAMA VALUE
  //  RECIBE:
  // ------> 1) Recibimos la variable que queremos coger el valor: filter
  // ------> 2) Recibimos el tiempo en milisegundos

  // RESULTADO: el resultado es que el valor de value cambia, se lanza el useEffect y volvemos a llamar a la API

  const [value] = useDebounce(filter, 1000);

  //! ---IMPORTANTE: REACT NOS DICE QUE UN USEEFFECT POR CADA UNO DE LOS EFECTOS DESEADOS

  //! -----> CASO DE UN ELEMENTO EN EL ARRAY DE DEPENDENCIAS
  // -----> En este caso se lanza cuando:
  // -----------1) Cuando se renderiza por primera vez
  // -----------2) Cuando cambia el valor de value
  // -----------3) Cuando se desmonta el componente

  useEffect(() => {
    (async () => {
      setLoading(true);
      setCharacters(await getCharacterPromise(value));
      setLoading(false);
    })();
  }, [value]);

  /// !----> EN ESTE CASO EL ARRAY DE DEPENDENCIAS ESTA VACIO:
  // ---por lo cualc se ejecuta cuando se renderiza por primera vez
  // ---... y se ejecuta cuando se desmonta el componente
  useEffect(() => {
    (async () => {
      setAllCharacter(await getAll());
    })();
  }, []);

  useEffect(() => {
    console.log("info del get by name", characters);
  }, [characters]);

  useEffect(() => {
    console.log("info del getAll", allCharacter);
  }, [allCharacter]);

  return (
    <>
      <h1>Buscador con un DEBOUNCE</h1>
      <input
        type="text"
        name="filter"
        id="filter"
        onChange={(e) => {
          setFilter(e.target.value);
        }}
      />

      <div className="gallery">
        {characters.length == 0 || loading == true ? (
          <p>Loading ...</p>
        ) : (
          <Seccion characters={characters} />
        )}
      </div>
    </>
  );
};

export default Request;
