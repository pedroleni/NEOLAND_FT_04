import axios from "axios";
import { updateToken } from "../../util/updateToken";

const APIHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  Authorization: `Bearer ${updateToken()}`,
};

export const API = axios.create({
  baseURL: `https://nodeuser-production-0fd1.up.railway.app/api/v1`,
  headers: APIHeaders,
  timeout: 60000,
});
