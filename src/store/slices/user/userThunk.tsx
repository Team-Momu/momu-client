import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const kakao = createAsyncThunk(
  'user/kakao',
  async (code: string, thunkAPI) => {
    const response = await axios.get(`/user/kakao/?code=${code}`);
    return response.data;
  }
);
