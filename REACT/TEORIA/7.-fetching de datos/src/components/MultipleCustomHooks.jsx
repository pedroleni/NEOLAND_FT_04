import React from "react";

// estas importanciones son gracias al archivo de barril por eso sale en la ruta la carpeta raiz de los archivos
import { useCounter, useFetch } from "../hooks";
import { Quote, LoadingQuote } from "./";

export const MultipleCustomHooks = () => {
  // vamos a utlizar el customHook que ya conocemos el useCounter y se trae el incremento y estado y le da de valor incial 1
  const { counter, increment } = useCounter(1);

  // utlizamos el customHook del fetch y nos traemos la data, el esta cargando y el si tenemos un error
  const { data, isLoading, hasError } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
  );
  // !!data --> que haya data

  /// hago un destructuring de la data solo si existe la data y si hay una data con un array con una posicion 0
  const { author, quote } = !!data && data[0];

  // si tenemos un error el componente solo va renderizar una alert con el error
  // el resto de lineas despues de este return no se ejecutaria
  // vuelvo el error a string para poder mostrarlo en pantalla
  if (hasError) {
    return (
      <>
        <div className="alert alert-danger text-center">
          {hasError.toString()}
        </div>
      </>
    );
  }

  /// como tenemos la propiedad isLoading podemos saber cuando se esta cargando o no ya que lo controla el useFetch

  // si se esta cargando la data entonces lanzamos el componente LoadingQuote sino lanzamos el quote del personaje
  return (
    <>
      {isLoading ? <LoadingQuote /> : <Quote author={author} quote={quote} />}
      {/* El componente utiliza el useCounter para modificar el estado del counter 
       incrementandolo y pasandolo a la url que recibe el useFetch */}
      <button
        className="btn btn-primary"
        disabled={isLoading}
        onClick={() => increment()}
      >
        NEXT QUOTE
      </button>

      {/* Deshabilitamos el boton cuando se este cargando la data para que no podamos hacer una
      nueva peticion a la api de otra quote */}
    </>
  );
};
