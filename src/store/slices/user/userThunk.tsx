import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../../lib/axios';
import axios from 'axios';
export const kakao = createAsyncThunk(
  'user/kakao',
  async (code: string, thunkAPI) => {
    const response = await axios.get(`/user/kakao/authorize/?code=${code}`);
    return response.data;
  }
);

export const userInfo = createAsyncThunk('user/userInfo', async (thunkAPI) => {
  const access_token = localStorage.getItem('access_token');
  axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
  const response = await axios.get(`/user/profile/`);
  return response.data;
});
