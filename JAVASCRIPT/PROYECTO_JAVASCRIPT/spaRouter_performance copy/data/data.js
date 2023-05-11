let dataGlobal = [];

export const setDataGlobal = (data) => {
  dataGlobal = data;
};

export const getDataGlobal = () => {
  return dataGlobal;
};
export const setDataGlobalRefrest = (data) => {
  let copiDataGlobal = data;
  setDataGlobal(copiDataGlobal);
};
