const { deleteImgCloudinary } = require("../../middleware/files.middleware");
const Character = require("../models/Character.model");

//! ---------------------------------------------------------------------
//? -------------------------------POST ---------------------------------
//! ---------------------------------------------------------------------

const create = async (req, res, next) => {
  try {
    await Character.syncIndexes();
    // cremos un nuevo modelo con los datos que nos trae la request body
    const newCharacter = new Character(req.body);
    newCharacter.image = req.file.path;

    // lo guardamos en la db
    const saveCharacter = await newCharacter.save();

    // evaluamos que se haya efectuado correctamente
    if (saveCharacter) {
      // si es un si: envio un 200 y un json con el objeto postedo
      return res.status(200).json(saveCharacter);
    } else {
      // si es un no: envio un 404 not found, de que no se ha enviado en elemento a la base de datos
      return res.status(404).json("No se ha podido subir el Character");
    }
  } catch (error) {
    // lanzo por el next el error a nivel general de try cach para tener constancia en el log de este error
    deleteImgCloudinary(req.file.path);
    return next(error);
  }
};

//! ---------------------------------------------------------------------
//? ------------------------------GETALL --------------------------------
//! ---------------------------------------------------------------------
const getAll = async (req, res, next) => {
  try {
    // ES EL FIND DE LA QUERY DE MONGOOSE NOS TRAE TODOS LOS ELEMENTOS
    const allCharacter = await Character.find();
    if (allCharacter) {
      return res.status(200).json(allCharacter);
    } else {
      return res.status(404).json("Not found all character");
    }
  } catch (error) {
    return next(error);
  }
};

//! ---------------------------------------------------------------------
//? ------------------------------GETBYID -------------------------------
//! ---------------------------------------------------------------------
const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const characterById = await Character.findById(id);
    if (characterById) {
      return res.status(200).json(characterById);
    } else {
      return res.status(404).json("Not found Character by ID");
    }
  } catch (error) {
    return next(error);
  }
};

//! ---------------------------------------------------------------------
//? ----------------------------- GET BY NAME ---------------------------
//! ---------------------------------------------------------------------

const getByName = async (req, res, next) => {
  try {
    const { name } = req.params;
    const characterByName = await Character.find({ name });
    if (characterByName) {
      return res.status(200).json(characterByName);
    } else {
      return res.status(404).json("Not found Character by name");
    }
  } catch (error) {
    return next(error);
  }
};

//! ---------------------------------------------------------------------
//? ----------------------------- UPDATE --------------------------------
//! ---------------------------------------------------------------------

const updateCharacter = async (req, res, next) => {
  try {
    const { id } = req.params;
    const characterById = await Character.findById(id);
    const oldImg = characterById.image;
    if (characterById) {
      const patchCharacter = new Character(req.body);
      patchCharacter._id = id;
      if (req.file) {
        patchCharacter.image = req.file.path;
      } else {
        patchCharacter.image = oldImg;
      }
      const saveCharacter = await Character.findByIdAndUpdate(
        id,
        patchCharacter
      );

      if (saveCharacter) {
        deleteImgCloudinary(oldImg);
        return res.status(200).json(await Character.findById(id));
      } else {
        return res.status(404).json("Dont save character");
      }
    } else {
      return res.status(404).json("Not Found character by id");
    }
  } catch (error) {
    if (req.file) {
      deleteImgCloudinary(req.file.path);
    }
    return next(error);
  }
};

module.exports = { create, getAll, getById, getByName, updateCharacter };
