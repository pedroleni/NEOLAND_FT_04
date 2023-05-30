import axios from "axios";

const APIHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  Authorization: {
    toString() {
      return `Bearer ${localStorage.getItem("token")}`;
    },
  },
};

export const API = axios.create({
  baseURL: `https://nodeuser-production-0fd1.up.railway.app/api/v1`,
  headers: APIHeaders,
  timeout: 60000,
});
