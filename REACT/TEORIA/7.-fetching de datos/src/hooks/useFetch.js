import React, { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  });

  const getFetch = async () => {
    /// primero le digo en el estado que estoy cargadno los datos
    setState({
      ...state,
      isLoading: true,
    });

    try {
      const resp = await fetch(url);

      if (!resp.ok) {
        throw new Error(`HTTP ERROR: status ${resp.status}/ ${resp}`);
      } else {
        const data = await resp.json();

        setState({
          data,
          isLoading: false,
          hasError: null,
        });
      }
    } catch (error) {
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

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};
