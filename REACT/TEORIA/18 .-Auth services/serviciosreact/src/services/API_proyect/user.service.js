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

//!  ----------------------forgot password ---------------------------------

export const forgotPasswordUser = async (formData) => {
  return API.patch("/users/forgotpassword", formData)
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};
