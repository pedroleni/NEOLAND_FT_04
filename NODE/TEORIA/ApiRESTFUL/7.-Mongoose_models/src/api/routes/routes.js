const { upload } = require("../../middleware/files.middleware");
const {
  create,
  getAll,
  getById,
  getByName,
  updateCharacter,
} = require("../controllers/Character.controllers");
const CharacterRoutes = require("express").Router();
CharacterRoutes.post("/", upload.single("image"), create);
CharacterRoutes.get("/", getAll);
CharacterRoutes.get("/:id", getById);
CharacterRoutes.get("/name/:name", getByName);
CharacterRoutes.patch("/:id", upload.single("image"), updateCharacter);

module.exports = CharacterRoutes;
