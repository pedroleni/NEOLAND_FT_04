const { upload } = require('../../middleware/files.middleware');
const {
  register,
  registerSlow,
  sendMailRedirect,
  registerWithRedirect,
} = require('../controllers/user.controllers');
const express = require('express');
const UserRoutes = express.Router();

UserRoutes.get('/register', upload.single('image'), registerWithRedirect);
UserRoutes.post('/register', upload.single('image'), registerSlow);

//!---------------- REDIRECT-------------------------------
UserRoutes.get('/register/sendMail/:id', sendMailRedirect);
module.exports = UserRoutes;
