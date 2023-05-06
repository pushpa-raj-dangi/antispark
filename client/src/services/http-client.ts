import axios, { CanceledError } from "axios";

const api = axios.create({
  baseURL: "http://localhost:5025",
  headers: {},
});

api.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = "Bearer " + localStorage.getItem("token");
    return config;
  },
  (error) => {
    return Promise.reject(error?.response?.data);
  }
);

api.interceptors.response.use(
  (response) => {
    return response?.data;
  },
  (error) => {
    return Promise.reject(error?.response?.data);
  }
);

export { api, axios as default };
