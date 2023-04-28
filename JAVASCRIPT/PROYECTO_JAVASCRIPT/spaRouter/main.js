import { getPokemon } from "./services/pokemon.service";
import "./style.css";
import { dataPokemon } from "./utils/dataPokemon";

// ----> Primero inyectamos el template con el header, main y el footer
import { initTemplate } from "./utils/initTemplate";

// .--- > utilizo una funcion con un switch para controlar que pagina se va a renderizar
import { initControler } from "./utils/route";
initTemplate();

///-----> inicializo el controlador de las paginas en el caso undefined
initControler();
