//1º Limpiamos el proyecto e instalamos las dependencias
//2º En HTML cambiamos el titulo, importamos las fuentes y creamos header, main y footer
//3º Creamos los estilos globales
//4º Creamos el componente Header y lo insertamos
//5º Creamos el componente Footer y lo insertamos
//6º Creamos la pagina Home y la insertamos
//7º Creamos la pagina Gallery simple
//8º Creamos la pagina About simple
//9º Importamos estas dos paginas en main tambien
//10º Le añadimos un id a cada uno de los links de header
//11º En el fichero main, le decimos que al hacer click en cada uno de ellos se pinta una pagina diferente
//12º Podemos refactorizar esta funcionalidad en una carpeta utils, almacenando una nueva funcion y asi limpiamos el main
//13º En Gallery creamos un div para posteriormente inyectar las imagenes
//14º Creamos la funcion donde hacemos la petición y nos aseguramos de tener un catch para pintar en la galeria un mensaje de error si no se pudiera hacer la petición.
//15º Por cada una de las fotos de la respuesta creamos un figure y lo inyectamos dentro de la galeria
//16º Creamos un spinner que se mostrara en un div de la galeria desde el comienzo de la petición hasta el pintado de los elementos, en ese momento se vaciará
//17º Adicionalmente podemos componentizar este Spinner
//18º Creamos unos botones para pasar de pagina y lo podemos hacer mediante un bucle
//19º La funcion que hace la petición recibe por argumento el numero de pagina, el cual se lanzara 1 por defecto y el numero que tenga cada uno de los botones dentro al hacer click en ellos

import "./style.css"

import {printTemplate as Header} from "./components/Header/Header"
import {printTemplate as Footer} from "./components/Footer/Footer"
import {printTemplate as Home} from "./pages/Home/Home"
import {printTemplate as Gallery} from "./pages/Gallery/Gallery"
import {printTemplate as About} from "./pages/About/About"
import {linkpage} from "./utils/linkpage"

Header()
Footer()
//Por defecto entramos desde Home
Home()

linkpage("#homelink", Home)
linkpage("#gallerylink", Gallery)
linkpage("#aboutlink", About)
