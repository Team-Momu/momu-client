import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const setProfile = createAsyncThunk(
  'profileSet/setProfile',
  async (formData: any, thunkAPI) => {
    // const access_token = localStorage.getItem('access_token');
    // axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
    const response = await axios.put('/user/profile/', formData);
    return response.data;
  }
);
