import React, { useEffect, useState } from "react";

export const useFetch = (url) => {
  // tengo un estado que me gestiona todo lo que necesito en la peticion
  // NECESITO LA DATA, SI SE ESTA CARGANDO, Y SI TENGO UN ERROR
  //---> lo inicializo
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  });

  /// me creo una funcion que me trae los datos
  const getFetch = async () => {
    /// primero le digo en el estado que estoy cargadno los datos
    setState({
      ...state,
      isLoading: true,
    });

    // como es un async await hay que meterlo en un try catch para captural error y luego setearlo al estado

    try {
      /// hago la llamada fech
      const resp = await fetch(url);

      // si esta llamada tiene una respuesto no ok entonces creo y lanzo un error
      if (!resp.ok) {
        throw new Error(`HTTP ERROR: status ${resp.status}/ ${resp}`);
      } else {
        // en caso contrario, es decir, la respuesta es ok entonces lo que hago es que la convierto a json
        const data = await resp.json();
        // con esto lo que hago seteo el estado que luego compartire con la data y diciendo que ua no se esta cargando y no hay errores
        setState({
          data,
          isLoading: false,
          hasError: null,
        });
      }
    } catch (error) {
      // si hay un error capturado en ese caso lo meteré en el estado y lo compartiré al final del hook
      setState({
        data: null,
        isLoading: false,
        hasError: error,
      });
    }
  };
  /// el useEffect le pongo en el array de dependencias la url..
  //..para que cuando cambie se desmonte y monte el componete ..
  //..y vuelva a ejecutar el getFetch

  useEffect(() => {
    getFetch();
  }, [url]);
  /// devuelvo el estado con la situacion que ha ocurrido durante la request en el fetch
  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};
