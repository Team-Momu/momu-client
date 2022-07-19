import axios from 'axios';

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: true,
  headers: {
    'Access-Control-Allow-Origin': 'https://api.momueat.com', // 서버 domain
  },
});
