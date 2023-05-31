export const getCharacter = async (filter) => {
  try {
    const data = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${filter}`
    );
    const res = data.json();
    return res;
  } catch (error) {
    return error;
  }
};

export const getCharacterPromise = async (filter) => {
  return fetch(`https://rickandmortyapi.com/api/character/?name=${filter}`)
    .then((res) => {
      //console.log("res en el service", res);
      return res.json();
    })
    .catch((error) => error);
};

export const getAll = async (filter) => {
  return fetch(`https://rickandmortyapi.com/api/character`)
    .then((res) => res.json())
    .catch((error) => error);
};
