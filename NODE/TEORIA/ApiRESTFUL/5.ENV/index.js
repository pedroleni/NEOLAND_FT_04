const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT;
// creo el server

const app = express();

// LISTEN
app.listen(PORT, () => {
  console.log(`Listening on port http://localhost:${PORT}`);
});
