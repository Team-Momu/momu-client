import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const setProfile = createAsyncThunk(
  'profileSet/setProfile',
  async (formData: any, thunkAPI) => {
    const response = await axios.put('/user/profile/', formData);
    return response.data;
  }
);
