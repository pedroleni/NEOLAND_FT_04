import { listCharacter } from "../data/data.galley";

export const getAll = () => {
  return listCharacter;
};
export const getById = (id) => {
  const characterById = listCharacter.filter(
    (character) => character._id == id
  );
  return characterById;
};

export const getByName = (name) => {
  const characteByName = listCharacter.filter(
    (character) => character.name == name
  );
  return characteByName;
};
