import inquirer from "inquirer";
import fs from "fs";
//!!! si meteis un import hay que meter en package.json esta clave valor ==> "type": "module",
/// -----> VAMOS A HACER UN CUSTON-PACKAGE-JSON  como hacev vite cuando nos pregunta sobre que proyecto queremos

/// 1)-----> CREAMOS EL MODELO DE OBJETO CON LOS ELEMENTOS BASICOS QUE TIENE UN PACKAGE.JSON
let customJSON = {
  name: "",
  private: true,
  version: "",
  scripts: {
    dev: "vite",
    build: "vite build",
    preview: "vite preview",
  },
  dependencies: {
    react: "^18.2.0",
    "react-dom": "^18.2.0",
  },
  devDependencies: {
    "@types/react": "^18.0.27",
    "@types/react-dom": "^18.0.10",
    "@vitejs/plugin-react": "^3.1.0",
    vite: "^4.1.0",
  },
};

/// ------> vamos a preguntar al usuario por el nombre del proyecto y si quiere instalar unas librerias en concreto
/// ------>

///!!! ------- UTILIZAMOS INQUIRE PARA HACER LAS PREGUNTAS AL USUARIO POR LA CCONSOLA

/// en el prompt hacemos las preguntas al usuario: hay varios tipos: y, confirm ...
inquirer
  .prompt([
    {
      name: "name",
      message: "Cual es el nombre de tu proyecto?",
      default: "react-proyect",
    },
    {
      name: "version",
      message: "Cual es la version de tu proyecto?",
      default: "0.0.1",
    },
    {
      type: "confirm",
      name: "router",
      message: "Quiere instalar react routerv DOM?",
    },
    {
      type: "confirm",
      name: "eslint_prettier",
      message: "Quiere instalar eslint_prettier?",
    },
  ])
  .then((answers) => {
    customJSON = {
      ...customJSON,
      name: answers.name,
      version: answers.version,
      dependencies: answers.router
        ? { ...customJSON.dependencies, "react-router-dom": "^6.8.1" }
        : { ...customJSON.dependencies },

      devDependencies: answers.eslint_prettier
        ? {
            ...customJSON.devDependencies,
            eslint: "^8.34.0",
            "eslint-config-prettier": "^8.6.0",
            "eslint-plugin-import": "^2.27.5",
            "eslint-plugin-jsx-a11y": "^6.7.1",
            "eslint-plugin-prettier": "^4.2.1",
            "eslint-plugin-react": "^7.32.2",
            "eslint-plugin-simple-import-sort": "^10.0.0",
            "pre-commit": "^1.2.2",
            prettier: "^2.8.4",
          }
        : { ...customJSON.devDependencies },
      "pre-commit": answers.eslint_prettier ? "lint" : "",
    };

    /// ----> tenemos que convertir a string el objeto para poder escribirlo

    const customJsonString = JSON.stringify(customJSON);

    /// ------> Tenemos que escribir un archivo con el texto que tenemos del string

    fs.writeFile("custom-package.json", customJsonString, () => {
      console.log("Archivo creado 👌");
    });
  });
