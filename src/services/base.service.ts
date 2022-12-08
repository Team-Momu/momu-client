import axios from "axios";

export const AuthApi = axios.create({
  baseURL: "http://localhost:3030",
  headers: { "Content-Type": "application/json" },
  timeout: 1000,
});


AuthApi.interceptors.request.use(
  function (config) {
    let token: string;
    if (config.url === "/auth/token/refresh") {
      token = localStorage.getItem("gfc-rT");
    } else if (config.url === "/auth/token") {
      token = localStorage.getItem("gfc-aT");
    }
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

AuthApi.interceptors.response.use(
  function (res) {
    return res;
  },
  function (err) {
    return Promise.reject(err);
  }
);
