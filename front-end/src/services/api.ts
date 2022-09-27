import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:" + import.meta.env.VITE_API,
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
  },
});

export default api;
