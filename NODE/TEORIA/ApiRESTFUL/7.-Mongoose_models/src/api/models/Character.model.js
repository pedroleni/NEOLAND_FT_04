// creamos el modelo de dato con mongoose

const mongoose = require("mongoose");

/// Schema de datos:_____> DEFINICION DE DATOS

const Schema = mongoose.schema;

/// Definimos el esqueleto del modelo character
/// 1) Definimos lo primero el TYPE ----> tipo de dato
/// 2) Vamos a definir que este dato sea requerido para crear el modelo REQUIRED

const CharacterSchema = new Schema(
  {
    name: { type: String, required: true },
    gender: {
      type: String,
      enum: ["hombre", "mujer", "fluido"],
      required: true,
    },
    age: { type: Number, required: false },
  },
  {
    timestamps: true,
  }
);
// creamos el modelo que esta formado por su esquema de datos o definicion de datos
const Character = mongoose.model("Character", CharacterSchema);
module.exports = Character;
