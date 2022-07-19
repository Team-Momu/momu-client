import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const addMbti = createAsyncThunk(
  'mbti/addMbti',
  async (mbtiData: { mbti: string }, thunkAPI) => {
    const response = await axios.post('/user/types/', mbtiData);
    return response.data;
  }
);
