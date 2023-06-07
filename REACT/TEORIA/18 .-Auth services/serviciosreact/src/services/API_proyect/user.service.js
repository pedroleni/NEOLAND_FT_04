import { updateToken } from "../../util/updateToken";
import { API } from "./service.config";

export const registerUser = async (formData) => {
  return API.post("/users/register", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};

//! -----------------------CHECK CODE -----------------------------------

export const checkCodeConfirmationUser = async (formData) => {
  return API.post("/users/check", formData)
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};

//! -------------------------LOGIN ---------------------------------------
export const loginUser = async (formData) => {
  return API.post("/users/login", formData)
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};

//! -------------------------AUTOLOGIN ---------------------------------------
export const autoLoginUser = async (formData) => {
  return API.post("/users/login/autologin", formData)
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};

//!  ----------------------forgot password ---------------------------------

export const forgotPasswordUser = async (formData) => {
  return API.patch("/users/forgotpassword", formData)
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};

//! ----------------------- RESED CODE CONFIRMATION ------------------------------

export const resendCodeConfirmationUser = async (formData) => {
  return API.post("/users/resend", formData)
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};

//! ---------------------- CHANGE PASSWORD ---- ESTAMOS LOGADOS---------------------
export const changePasswordUser = async (formData) => {
  return API.patch("/users/changepassword", formData, {
    headers: {
      Authorization: `Bearer ${updateToken()}`,
    },
  })
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};

//! ------------------------- DELETE USER ---------------------------------------------

export const deleteUser = async () => {
  return API.delete("/users/", {
    headers: {
      Authorization: `Bearer ${updateToken()}`,
    },
  })
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};

//! -------------------------UPDATE USER ----------------------------------------------

export const updateUser = async (formData) => {
  return API.patch("/users/update/update", formData)
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};
