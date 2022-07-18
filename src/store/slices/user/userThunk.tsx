import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const kakao = createAsyncThunk(
  'user/kakao',
  async (code: string, thunkAPI) => {
    console.log('🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥', code);
    const response = await axios.get(`/user/kakao/authorize/?code=${code}`);
    return response.data;
  }
);
