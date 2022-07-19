import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../../lib/axios';
export const kakao = createAsyncThunk(
  'user/kakao',
  async (code: string, thunkAPI) => {
    const response = await instance.get(`/user/kakao/authorize/?code=${code}`);
    return response.data;
  }
);
