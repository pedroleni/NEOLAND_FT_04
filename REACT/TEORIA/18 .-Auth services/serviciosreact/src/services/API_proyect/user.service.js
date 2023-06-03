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
