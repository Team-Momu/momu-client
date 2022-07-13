/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  // env 내용 추가
  env: {
    BASE_URL: process.env.BASE_URL,
    KAKAO_REDIRECT_URI: process.env.KAKAO_REDIRECT_URI,
    KAKAO_REST_API_KEY: process.env.KAKAO_REST_API_KEY,
  },
};
