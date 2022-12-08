import axios from "axios";

// 인증만 하기 위한 전용 인스턴스 생성
export const AuthApi = axios.create({
  baseURL: "http://localhost:3030",
  headers: { "Content-Type": "application/json" },
  timeout: 1000,
});


// 요청 보낼 때 API 에 따라서 액세스 토큰, 리프레시 토큰 나눠서 보냄
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


// 이건 안 씀
AuthApi.interceptors.response.use(
  function (res) {
    return res;
  },
  function (err) {
    return Promise.reject(err);
  }
);
