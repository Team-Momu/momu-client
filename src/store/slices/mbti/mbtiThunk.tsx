import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const addMbti = createAsyncThunk(
  'mbti/addMbti',
  async (mbtiData: { mbti: string }, thunkAPI) => {
    try {
      const response = await axios.post('/user/types', mbtiData);
      return response.data;
    } catch (error: any) {
      thunkAPI.rejectWithValue(await error.response.data);
    }
  }
);
