import axios from "axios";

const headers = {
  Accept: "application/json",
};

const api = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}`,
  headers,
});

export default api;
