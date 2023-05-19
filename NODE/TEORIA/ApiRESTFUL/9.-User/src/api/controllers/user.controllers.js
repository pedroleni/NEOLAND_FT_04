const { deleteImgCloudinary } = require('../../middleware/files.middleware');
const setError = require('../../helpers/handle-error');
const randomCode = require('../../utils/randomCode');
const sendEmail = require('../../utils/sendEmail');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
dotenv.config();
const User = require('../models/user.model');
const { getTestEmailSend } = require('../../state/state.data');
const nodemailer = require('nodemailer');
//! -----------------------------------------------------------------------------
//? ----------------------------REGISTER CORTO EN CODIGO ------------------------
//! -----------------------------------------------------------------------------

const register = async (req, res, next) => {
  let catchImg = req.file?.path;
  try {
    let confirmationCode = randomCode();
    const { email, name } = req.body;

    const userExist = await User.findOne(
      { email: req.body.email },
      { name: req.body.name }
    );
    if (!userExist) {
      const newUser = new User({ ...req.body, confirmationCode });
      if (req.file) {
        newUser.image = req.file.path;
      } else {
        newUser.image = 'https://pic.onlinewebfonts.com/svg/img_181369.png';
      }

      const userSave = await newUser.save();

      if (userSave) {
        sendEmail(email, name, confirmationCode);
        setTimeout(() => {
          if (getTestEmailSend()) {
            return res.status(200).json({
              user: userSave,
              confirmationCode,
            });
          } else {
            return res.status(404).json({
              user: userSave,
              confirmationCode: 'error, resend code',
            });
          }
        }, 1100);
      }
    } else {
      deleteImgCloudinary(catchImg);
      return res.status(409).json('this user already exist');
    }
  } catch (error) {
    deleteImgCloudinary(catchImg);
    return next(error);
  }
};
//! -----------------------------------------------------------------------------
//? ----------------------------REGISTER LARGO EN CODIGO ------------------------
//! -----------------------------------------------------------------------------
const registerSlow = async (req, res, next) => {
  let catchImg = req.file?.path;
  try {
    let confirmationCode = randomCode();
    const { email, name } = req.body;

    const userExist = await User.findOne(
      { email: req.body.email },
      { name: req.body.name }
    );
    if (!userExist) {
      const newUser = new User({ ...req.body, confirmationCode });
      if (req.file) {
        newUser.image = req.file.path;
      } else {
        newUser.image = 'https://pic.onlinewebfonts.com/svg/img_181369.png';
      }

      const userSave = await newUser.save();

      if (userSave) {
        const emailEnv = process.env.EMAIL;
        const password = process.env.PASSWORD;

        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: emailEnv,
            pass: password,
          },
        });

        const mailOptions = {
          from: emailEnv,
          to: email,
          subject: 'Confirmation code',
          text: `tu codigo es ${confirmationCode}, gracias por confiar en nosotros ${name}`,
        };

        transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
            console.log(error);
            return res.status(404).json({
              user: userSave,
              confirmationCode: 'error, resend code',
            });
          } else {
            console.log('Email sent: ' + info.response);
            return res.status(200).json({
              user: userSave,
              confirmationCode,
            });
          }
        });
      }
    } else {
      deleteImgCloudinary(catchImg);
      return res.status(409).json('this user already exist');
    }
  } catch (error) {
    deleteImgCloudinary(catchImg);
    return next(error);
  }
};
//! -----------------------------------------------------------------------------
//? ----------------------------REGISTER CON REDIRECT----------------------------
//! -----------------------------------------------------------------------------
const registerWithRedirect = async (req, res, next) => {
  let catchImg = req.file?.path;
  try {
    let confirmationCode = randomCode();
    const { email, name } = req.body;

    const userExist = await User.findOne(
      { email: req.body.email },
      { name: req.body.name }
    );
    if (!userExist) {
      const newUser = new User({ ...req.body, confirmationCode });
      if (req.file) {
        newUser.image = req.file.path;
      } else {
        newUser.image = 'https://pic.onlinewebfonts.com/svg/img_181369.png';
      }

      const userSave = await newUser.save();

      if (userSave) {
        return res.redirect(
          `http://localhost:8081/api/v1/users/register/sendMail/${userSave._id}`
        );
      }
    } else {
      deleteImgCloudinary(catchImg);
      return res.status(409).json('this user already exist');
    }
  } catch (error) {
    deleteImgCloudinary(catchImg);
    return next(error);
  }
};

//! -----------------------------------------------------------------------------
//? ----------------------------- REDIRECT -------------------------------------
//! ----------------------------------------------------------------------------

const sendMailRedirect = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userDB = await User.findById(id);

    const emailEnv = process.env.EMAIL;
    const password = process.env.PASSWORD;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailEnv,
        pass: password,
      },
    });

    const mailOptions = {
      from: emailEnv,
      to: userDB.email,
      subject: 'Confirmation code',
      text: `tu codigo es ${userDB.confirmationCode}, gracias por confiar en nosotros ${userDB.name}`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        return res.status(404).json({
          user: userDB,
          confirmationCode: 'error, resend code',
        });
      } else {
        console.log('Email sent: ' + info.response);
        return res.status(200).json({
          user: userDB,
          confirmationCode: userDB.confirmationCode,
        });
      }
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  register,
  registerSlow,
  sendMailRedirect,
  registerWithRedirect,
};
