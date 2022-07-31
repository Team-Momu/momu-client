import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const addMbti = createAsyncThunk(
  'mbti/addMbti',
  async (mbtiData: { mbti: string }, thunkAPI) => {
    // const access_token = localStorage.getItem('access_token');
    // axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;

    const response = await axios.post('/user/types/', mbtiData);
    return response.data;
  }
);
