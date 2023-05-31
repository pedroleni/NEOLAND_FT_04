const useLocalstorage = (name, data, accion) => {
  switch (accion) {
    case "settear":
      localStorage.setItem(name, data);
      break;

    case "remove":
      localStorage.removeItem(name);
      break;
  }
};

export default useLocalstorage;
